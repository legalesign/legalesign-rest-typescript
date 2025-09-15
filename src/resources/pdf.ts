// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Pdf extends APIResource {
  /**
   * Get the PDF for a signing document
   */
  retrieve(docID: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/pdf/${docID}/`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * text/html document as pdf preview
   */
  createPreview(body: PdfCreatePreviewParams, options?: RequestOptions): APIPromise<Response> {
    return this._client.post('/pdf/preview/', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}

export interface PdfCreatePreviewParams {
  group: string;

  is_signature_per_page: number;

  signature_type: number;

  /**
   * number of signers
   */
  signee_count: number;

  /**
   * raw html
   */
  text: string;

  footer?: string;

  footer_height?: number;

  header?: string;

  header_height?: number;

  /**
   * Set to true to use group default
   */
  pdfheader?: boolean;

  title?: string;
}

export declare namespace Pdf {
  export { type PdfCreatePreviewParams as PdfCreatePreviewParams };
}
