// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as SignerAPI from './signer';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Status extends APIResource {
  /**
   * Faster short query for a document status
   *
   * @example
   * ```ts
   * const status = await client.status.retrieve('docId');
   * ```
   */
  retrieve(docID: string, options?: RequestOptions): APIPromise<StatusRetrieveResponse> {
    return this._client.get(path`/status/${docID}/`, options);
  }
}

export interface StatusRetrieveResponse {
  archived?: boolean;

  download_final?: boolean;

  resource_uri?: string;

  /**
   * Signer status options:
   *
   * - 4 - unsent
   * - 5 - scheduled to be sent
   * - 10 - sent
   * - 15 - email opened
   * - 20 - visited
   * - 30 - fields complete
   * - 35 - fields complete ex signature
   * - 39 - waiting for witness to complete
   * - 40 - signed
   * - 50 - downloaded
   * - 60 - rejected
   */
  status?: SignerAPI.SignerStatusEnum;

  tag?: string;

  tag1?: string;

  tag2?: string;
}

export declare namespace Status {
  export { type StatusRetrieveResponse as StatusRetrieveResponse };
}
