// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as DocumentAPI from './document';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Group extends APIResource {
  /**
   * Create group
   *
   * @example
   * ```ts
   * await client.group.create({ name: 'xxxx' });
   * ```
   */
  create(body: GroupCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/group/', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get group
   *
   * @example
   * ```ts
   * const group = await client.group.retrieve('groupId');
   * ```
   */
  retrieve(groupID: string, options?: RequestOptions): APIPromise<GroupRetrieveResponse> {
    return this._client.get(path`/group/${groupID}/`, options);
  }

  /**
   * List groups the api user belongs to
   *
   * @example
   * ```ts
   * const groups = await client.group.list();
   * ```
   */
  list(
    query: GroupListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<GroupListResponse> {
    return this._client.get('/group/', { query, ...options });
  }
}

export interface GroupRetrieveResponse {
  created?: string;

  default_email?: string;

  default_extraemail?: string;

  /**
   * html of content
   */
  footer?: string;

  footer_height?: number;

  header?: string;

  is_active?: boolean;

  /**
   * list of members uris
   */
  members?: Array<string>;

  modified?: string;

  name?: string;

  pagesize?: number;

  public_name?: string;

  resource_uri?: string;

  slug?: string;

  user?: string;

  xframe_allow?: boolean;

  xframe_allow_pdf_edit?: boolean;
}

export interface GroupListResponse {
  meta?: DocumentAPI.ListMeta;

  objects?: Array<GroupListResponse.Object>;
}

export namespace GroupListResponse {
  export interface Object {
    created?: string;

    is_active?: boolean;

    modified?: string;

    name?: string;

    public_name?: string;

    resource_uri?: string;

    slug?: string;

    user?: string;

    xframe_allow?: boolean;

    xframe_allow_pdf_edit?: boolean;
  }
}

export interface GroupCreateParams {
  name: string;

  /**
   * Set to true if you want to embed your signing page.
   */
  xframe_allow?: boolean;
}

export interface GroupListParams {
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

export declare namespace Group {
  export {
    type GroupRetrieveResponse as GroupRetrieveResponse,
    type GroupListResponse as GroupListResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupListParams as GroupListParams,
  };
}
