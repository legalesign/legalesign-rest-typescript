// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AttachmentAPI from './attachment';
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
   * const statusResponse = await client.status.retrieve(
   *   'docId',
   * );
   * ```
   */
  retrieve(docID: string, options?: RequestOptions): APIPromise<StatusResponse> {
    return this._client.get(path`/status/${docID}/`, options);
  }

  /**
   * Shortened faster query for status of signing documents
   *
   * @example
   * ```ts
   * const response = await client.status.retrieveAll();
   * ```
   */
  retrieveAll(
    query: StatusRetrieveAllParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StatusRetrieveAllResponse> {
    return this._client.get('/status/', { query, ...options });
  }
}

export interface StatusResponse {
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

export interface StatusRetrieveAllResponse {
  meta?: AttachmentAPI.ListMeta;

  objects?: Array<StatusResponse>;
}

export interface StatusRetrieveAllParams {
  /**
   * Filter on archived status, default is false
   */
  filter?: string;

  /**
   * Length of dataset to return. Use with offset query to iterate through results.
   */
  limit?: number;

  /**
   * Offset from start of dataset. Use with the limit query to iterate through
   * dataset.
   */
  offset?: number;
}

export declare namespace Status {
  export {
    type StatusResponse as StatusResponse,
    type StatusRetrieveAllResponse as StatusRetrieveAllResponse,
    type StatusRetrieveAllParams as StatusRetrieveAllParams,
  };
}
