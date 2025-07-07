import { Request, Response } from 'express';
import expressAsyncHandler from 'express-async-handler';
import { PdfService, renderPDF } from '../services/pdfService';
import { SchemaRendererService } from '../services/schemaRendererService';

export const pdfCreator = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const schemaRendererService = new SchemaRendererService();
    const pdfService = new PdfService(schemaRendererService);
    console.log('reqBody', req.body);

    let reqBody = req.body;
    try {
      const buffer = await renderPDF(reqBody.data);
      const stream = pdfService.getReadableStream(buffer);

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Length', buffer.length);
      res.setHeader('Content-Disposition', 'attachment;filename=result.pdf');

      stream.pipe(res);
    } catch (error) {
      console.log('error', error);
      res.send(error);
    }
    return;
  }
);
