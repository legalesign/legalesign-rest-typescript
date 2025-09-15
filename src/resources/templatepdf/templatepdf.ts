// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AttachmentAPI from '../attachment';
import * as FieldsAPI from './fields';
import { FieldCreateParams, FieldListResponse, Fields } from './fields';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Templatepdf extends APIResource {
  fields: FieldsAPI.Fields = new FieldsAPI.Fields(this._client);

  /**
   * Upload a PDF document you want to send to be signed
   *
   * @example
   * ```ts
   * await client.templatepdf.create({
   *   group: '/api/v1/group/IK-GV--w1tvt/',
   *   pdf_file: 'U3RhaW5sZXNzIHJvY2tz',
   * });
   * ```
   */
  create(body: TemplatepdfCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/templatepdf/', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get PDF template
   *
   * @example
   * ```ts
   * const templatePdf = await client.templatepdf.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(pdfID: string, options?: RequestOptions): APIPromise<TemplatePdf> {
    return this._client.get(path`/templatepdf/${pdfID}/`, options);
  }

  /**
   * Get PDF templates
   *
   * @example
   * ```ts
   * const templatepdfs = await client.templatepdf.list();
   * ```
   */
  list(
    query: TemplatepdfListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TemplatepdfListResponse> {
    return this._client.get('/templatepdf/', { query, ...options });
  }

  /**
   * Delists the PDF
   *
   * @example
   * ```ts
   * await client.templatepdf.archive('pdfId');
   * ```
   */
  archive(pdfID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/templatepdf/${pdfID}/archive/`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Convert any text tags in the PDF into fields
   *
   * @example
   * ```ts
   * await client.templatepdf.convertTags('pdfId');
   * ```
   */
  convertTags(pdfID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/templatepdf/${pdfID}/tags/`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get PDF embeddable link
   *
   * @example
   * ```ts
   * const response = await client.templatepdf.getEditLink(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  getEditLink(pdfID: string, options?: RequestOptions): APIPromise<string> {
    return this._client.get(path`/templatepdf/${pdfID}/edit-link/`, options);
  }
}

export interface TemplatePdf {
  created?: string;

  group?: string;

  modified?: string;

  page_count?: number;

  /**
   * JSON stringified array of document parties
   */
  parties?: string;

  resource_uri?: string;

  signer_count?: number;

  title?: string;

  /**
   * resource_uri for user
   */
  user?: string;

  /**
   * id for pdf object
   */
  uuid?: string;

  /**
   * Is able to be sent (if fields do not validate)
   */
  valid?: boolean;
}

export interface TemplatepdfListResponse {
  meta?: AttachmentAPI.ListMeta;

  objects?: Array<TemplatePdf>;
}

export type TemplatepdfGetEditLinkResponse = string;

export interface TemplatepdfCreateParams {
  group: string;

  /**
   * base64 encoded PDF file data
   */
  pdf_file: string;

  /**
   * archive PDF when sent
   */
  archive_upon_send?: boolean;

  process_tags?: boolean;

  title?: string;

  /**
   * assign to group member if not api user
   */
  user?: string;
}

export interface TemplatepdfListParams {
  archive?: string;

  /**
   * can be full resource_uri or only id
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

Templatepdf.Fields = Fields;

export declare namespace Templatepdf {
  export {
    type TemplatePdf as TemplatePdf,
    type TemplatepdfListResponse as TemplatepdfListResponse,
    type TemplatepdfGetEditLinkResponse as TemplatepdfGetEditLinkResponse,
    type TemplatepdfCreateParams as TemplatepdfCreateParams,
    type TemplatepdfListParams as TemplatepdfListParams,
  };

  export {
    Fields as Fields,
    type FieldListResponse as FieldListResponse,
    type FieldCreateParams as FieldCreateParams,
  };
}
