// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Attachment extends APIResource {
  /**
   * Get attachment
   *
   * @example
   * ```ts
   * const attachmentResponse = await client.attachment.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(attachmentID: string, options?: RequestOptions): APIPromise<AttachmentResponse> {
    return this._client.get(path`/attachment/${attachmentID}/`, options);
  }

  /**
   * List attachments in your groups
   *
   * @example
   * ```ts
   * const attachments = await client.attachment.list();
   * ```
   */
  list(
    query: AttachmentListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AttachmentListResponse> {
    return this._client.get('/attachment/', { query, ...options });
  }

  /**
   * Delete attachment
   *
   * @example
   * ```ts
   * await client.attachment.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(attachmentID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/attachment/${attachmentID}/`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Upload PDF attachment
   *
   * @example
   * ```ts
   * await client.attachment.upload({
   *   filename: 'IK-GV--w1tvt7pdf',
   *   group: '/api/v1/group/IK-GV--w1tvt/',
   *   pdf_file: 'U3RhaW5sZXNzIHJvY2tz',
   * });
   * ```
   */
  upload(body: AttachmentUploadParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/attachment/', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface AttachmentResponse {
  created?: string;

  description?: string;

  filename?: string;

  group?: string;

  resource_uri?: string;

  /**
   * resource_uri for user
   */
  user?: string;

  /**
   * id for attachment object
   */
  uuid?: string;
}

export interface ListMeta {
  limit?: number;

  next?: string | null;

  offset?: number;

  previous?: string | null;

  /**
   * total number of objects
   */
  total_count?: number;
}

export interface AttachmentListResponse {
  meta?: ListMeta;

  objects?: Array<AttachmentResponse>;
}

export interface AttachmentListParams {
  /**
   * Filter by a specific group
   */
  group?: string;

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

export interface AttachmentUploadParams {
  /**
   * Simple alphanumeric name ending .pdf
   */
  filename: string;

  /**
   * URI of the group name
   */
  group: string;

  /**
   * Base64 encoded PDF file data, max size is a group setting, 5MB by default
   */
  pdf_file: string;

  description?: string;

  /**
   * Assign to group member if not the api user
   */
  user?: string;
}

export declare namespace Attachment {
  export {
    type AttachmentResponse as AttachmentResponse,
    type ListMeta as ListMeta,
    type AttachmentListResponse as AttachmentListResponse,
    type AttachmentListParams as AttachmentListParams,
    type AttachmentUploadParams as AttachmentUploadParams,
  };
}
