import { Readable } from 'stream';
import { SchemaRendererService } from './schemaRendererService';
import { IBaseBlock, MTheme, RenderBlock } from '@app/lib/shared-components';
import puppeteer, { Browser, Page } from 'puppeteer';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { getUpdatedSchema } from '../controllers/chartgenerate';

export class PdfService {
  schemaRendererService: SchemaRendererService;

  constructor(schemaRendererService: SchemaRendererService) {
    this.schemaRendererService = schemaRendererService;
  }
  getReadableStream(buffer: Buffer): Readable {
    const stream = new Readable();

    stream.push(buffer);
    stream.push(null);

    return stream;
  }
}

const convertHTMLToPDF = async (html: string): Promise<Buffer> => {
  if (typeof html !== 'string' || !html) {
    throw new Error('Invalid Argument: content for the PDF is not a string.');
  }

  let browser: Browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      executablePath:
        process.platform === 'win32' ? null : '/usr/bin/chromium-browser',
      args: [
        '--no-sandbox',
        '--headless',
        '--disable-gpu',
        '--disable-dev-shm-usage',
      ],
    });
  } catch (e) {
    throw new Error(`Unable to launch PDF Renderer: ${e}`);
  }
  let page: Page;
  try {
    page = await browser.newPage();
    await page.setContent(html, {
      waitUntil: ['load', 'networkidle0'],
    });
  } catch (e) {
    await browser.close();
    throw new Error(`Unable to create page for PDF: ${e}`);
  }

  try {
    await page.goto(
      `data:text/html;base64,${Buffer.from(html).toString('base64')}`,
      {
        waitUntil: ['load', 'domcontentloaded', 'networkidle0', 'networkidle2'],
      }
    );
    await page.waitForNetworkIdle();
    await page.emulateMediaType('screen');

    await page.setViewport({
      width: 1280,
      height: 1024,
      deviceScaleFactor: 1,
    });
  } catch (e) {
    await browser.close();
    console.log('Unable render the  on page: ', e);
    throw new Error(`Unable render the  on page ${e}`);
  }

  let result: Buffer;

  try {
    // console.log('page', JSON.stringify(html));
    result = await page.pdf({
      format: 'a4',
      printBackground: true,
    });
  } catch (e) {
    await browser.close();
    console.log('Unable render page into PDF: ', e);
    throw new Error(`Unable render page into PDF: ${e}`);
  }

  try {
    await browser.close();
  } catch (e) {
    console.log('Unable close PDF renderer', e);
    throw new Error('Unable close PDF renderer');
  }

  return result;
};

const wrapWithTemplate = (body: string) => {
  return `<html lang="en"><head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1"></head><body>
    ${body}</body></html>`;
};
const renderHTML = (schema: IBaseBlock): string => {
  return wrapWithTemplate(
    ReactDOMServer.renderToStaticMarkup(
      React.createElement(
        MTheme,
        { themeMode: 'light' },
        React.createElement(RenderBlock, { schema })
      )
    )
  );
};

const renderPDF = async (schema: IBaseBlock): Promise<Buffer> => {
  let updatedSchema = getUpdatedSchema(schema);
  return await convertHTMLToPDF(renderHTML(updatedSchema));
};

export { renderHTML, renderPDF };
