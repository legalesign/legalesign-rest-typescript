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
}
