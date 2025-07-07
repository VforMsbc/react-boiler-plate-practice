import * as ent from 'ent';
import puppeteer, { Browser, Page } from 'puppeteer';

export class SchemaRendererService {
  prefixedFonts: string | undefined;
  prefixedStyles: string;

  constructor() {}

  private wrapWithTemplate = (body: string) => {
    return `<!DOCTYPE html><html><head><style>${
      this.prefixedStyles
    }</style></head><body>${ent.decode(body)}</body></html>`;
  };

  private convertHTMLToPDF = async (html: string): Promise<Buffer> => {
    if (typeof html !== 'string' || !html) {
      throw new Error('Invalid Argument: content for the PDF is not a string.');
    }

    let browser: Browser;
    try {
      browser = await puppeteer.launch();
    } catch (e) {
      throw new Error('Unable to launch PDF Renderer');
    }

    let page: Page;
    try {
      page = await browser.newPage();
    } catch (e) {
      throw new Error('Unable to create page for PDF');
    }

    try {
      await page.goto(
        `data:text/html;base64,${Buffer.from(html).toString('base64')}`,
        {
          waitUntil: 'networkidle0',
        }
      );
    } catch (e) {
      throw new Error('Unable render the  on page');
    }

    let result: Buffer;

    try {
      result = await page.pdf({
        format: 'a4',
        printBackground: true,
      });
    } catch (e) {
      throw new Error('Unable render page into PDF');
    }

    try {
      await browser.close();
    } catch (e) {
      throw new Error('Unable close PDF renderer');
    }

    return result;
  };
}
