// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AttachmentAPI from './attachment';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Template extends APIResource {
  /**
   * Create a new html/text template. This probably isn't the method you are looking
   * for. You can use the 'text' attribute in /document/ to create and send your HTML
   * as a signing document in one call.
   *
   * @example
   * ```ts
   * await client.template.create({
   *   group: '/api/v1/group/IK-GV--w1tvt/',
   *   latest_text: 'latest_text',
   *   title: 'title',
   * });
   * ```
   */
  create(body: TemplateCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/template/', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get text template
   *
   * @example
   * ```ts
   * const template = await client.template.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(templateID: string, options?: RequestOptions): APIPromise<TemplateRetrieveResponse> {
    return this._client.get(path`/template/${templateID}/`, options);
  }

  /**
   * Update text template
   *
   * @example
   * ```ts
   * await client.template.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { body: 'body' },
   * );
   * ```
   */
  update(templateID: string, params: TemplateUpdateParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.patch(path`/template/${templateID}/`, {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get text templates
   *
   * @example
   * ```ts
   * const templates = await client.template.list();
   * ```
   */
  list(
    query: TemplateListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TemplateListResponse> {
    return this._client.get('/template/', { query, ...options });
  }

  /**
   * Archives a template (is recoverable, i.e. not fully deleted, if you need true
   * data deletion contact us).
   *
   * @example
   * ```ts
   * await client.template.archive(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  archive(templateID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/template/${templateID}/`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface TemplateRetrieveResponse {
  archive?: boolean;

  created?: string;

  group?: string;

  has_fields?: boolean;

  latest_text?: string;

  modified?: string;

  resource_uri?: string;

  signee_count?: number;

  title?: string;

  user?: string;

  uuid?: string;
}

export interface TemplateListResponse {
  meta?: AttachmentAPI.ListMeta;

  objects?: Array<TemplateListResponse.Object>;
}

export namespace TemplateListResponse {
  export interface Object {
    archive?: boolean;

    created?: string;

    group?: string;

    has_fields?: boolean;

    modified?: string;

    resource_uri?: string;

    signee_count?: number;

    title?: string;

    user?: string;

    uuid?: string;
  }
}

export interface TemplateCreateParams {
  group: string;

  /**
   * text/html for template
   */
  latest_text: string;

  title: string;

  /**
   * assign to a user if not api user
   */
  user?: string;
}

export interface TemplateUpdateParams {
  /**
   * json with any fields to update
   */
  body: string;
}

export interface TemplateListParams {
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

export declare namespace Template {
  export {
    type TemplateRetrieveResponse as TemplateRetrieveResponse,
    type TemplateListResponse as TemplateListResponse,
    type TemplateCreateParams as TemplateCreateParams,
    type TemplateUpdateParams as TemplateUpdateParams,
    type TemplateListParams as TemplateListParams,
  };
}
