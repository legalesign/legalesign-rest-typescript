// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AttachmentAPI from './attachment';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Member extends APIResource {
  /**
   * If the email is a registered user then access to group will be immediate,
   * otherise an invitation will be created and emailed.
   *
   * @example
   * ```ts
   * await client.member.create({
   *   email: 'dev@stainless.com',
   *   group: '/api/v1/group/IK-GV--w1tvt/',
   * });
   * ```
   */
  create(body: MemberCreateParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/member/', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get group member
   *
   * @example
   * ```ts
   * const memberResponse = await client.member.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(memberID: string, options?: RequestOptions): APIPromise<MemberResponse> {
    return this._client.get(path`/member/${memberID}/`, options);
  }

  /**
   * List members of groups, one user may be in one or more groups
   *
   * @example
   * ```ts
   * const members = await client.member.list();
   * ```
   */
  list(
    query: MemberListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MemberListResponse> {
    return this._client.get('/member/', { query, ...options });
  }

  /**
   * Remove member from group
   *
   * @example
   * ```ts
   * await client.member.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  delete(memberID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/member/${memberID}/`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface MemberResponse {
  created?: string;

  group?: string;

  modified?: string;

  /**
   * Permissions options:
   *
   * - 1 - administrator
   * - 2 - team docs visible, create & send
   * - 3 - team docs visible, send only
   * - 4 - no team sent docs visible, send only
   * - 5 - no team docs visible, create & send
   * - 6 - team docs visible, read only
   */
  permission?: PermissionsEnum;

  resource_uri?: string;

  user?: string;
}

/**
 * Permissions options:
 *
 * - 1 - administrator
 * - 2 - team docs visible, create & send
 * - 3 - team docs visible, send only
 * - 4 - no team sent docs visible, send only
 * - 5 - no team docs visible, create & send
 * - 6 - team docs visible, read only
 *
 * * `1` - Admin
 * * `2` - Team visible, create and send
 * * `3` - Team visible, send only
 * * `4` - Team not visible, send only
 * * `5` - Team not visible, create and send
 * * `6` - Team visible, read only
 */
export type PermissionsEnum = 1 | 2 | 3 | 4 | 5 | 6;

export interface MemberListResponse {
  meta?: AttachmentAPI.ListMeta;

  objects?: Array<MemberResponse>;
}

export interface MemberCreateParams {
  email: string;

  group: string;

  /**
   * use legalesign to send email notification to new user
   */
  do_email?: boolean;

  /**
   * Permissions options:
   *
   * - 1 - administrator
   * - 2 - team docs visible, create & send
   * - 3 - team docs visible, send only
   * - 4 - no team sent docs visible, send only
   * - 5 - no team docs visible, create & send
   * - 6 - team docs visible, read only
   */
  permission?: PermissionsEnum;
}

export interface MemberListParams {
  /**
   * filter list by a given group
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

export declare namespace Member {
  export {
    type MemberResponse as MemberResponse,
    type PermissionsEnum as PermissionsEnum,
    type MemberListResponse as MemberListResponse,
    type MemberCreateParams as MemberCreateParams,
    type MemberListParams as MemberListParams,
  };
}
