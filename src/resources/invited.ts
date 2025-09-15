// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AttachmentAPI from './attachment';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Invited extends APIResource {
  /**
   * Invitations to people to join the group are listed by email
   */
  list(
    query: InvitedListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InvitedListResponse> {
    return this._client.get('/invited/', { query, ...options });
  }

  /**
   * Delete invitation
   */
  delete(invitedID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/invited/${invitedID}/`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface InvitedListResponse {
  meta?: AttachmentAPI.ListMeta;

  objects?: Array<InvitedListResponse.Object>;
}

export namespace InvitedListResponse {
  export interface Object {
    created?: string;

    email?: string;

    group?: string;

    resource_uri?: string;
  }
}

export interface InvitedListParams {
  /**
   * filter list by a given group
   */
  group?: string;
}

export declare namespace Invited {
  export { type InvitedListResponse as InvitedListResponse, type InvitedListParams as InvitedListParams };
}
