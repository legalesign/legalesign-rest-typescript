// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Signer extends APIResource {
  /**
   * Get status and details of an individual signer
   *
   * @example
   * ```ts
   * const signer = await client.signer.retrieve('signerId');
   * ```
   */
  retrieve(signerID: string, options?: RequestOptions): APIPromise<SignerRetrieveResponse> {
    return this._client.get(path`/signer/${signerID}/`, options);
  }

  /**
   * Returns 1-use link for signer in Location header.
   *
   * @example
   * ```ts
   * await client.signer.getAccessLink('signerId');
   * ```
   */
  getAccessLink(signerID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/signer/${signerID}/new-link/`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Returns reason signer gave for rejecting a document, if given
   *
   * @example
   * ```ts
   * const response = await client.signer.getRejectionReason(
   *   'signerId',
   * );
   * ```
   */
  getRejectionReason(
    signerID: string,
    options?: RequestOptions,
  ): APIPromise<SignerGetRejectionReasonResponse> {
    return this._client.get(path`/signer/${signerID}/rejection/`, options);
  }

  /**
   * Reset to an earlier signer if forwarded
   *
   * @example
   * ```ts
   * await client.signer.reset('signerId', { email: 'email' });
   * ```
   */
  reset(signerID: string, body: SignerResetParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/signer/${signerID}/reset/`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get signer form fields
   *
   * @example
   * ```ts
   * const response = await client.signer.retrieveFields(
   *   'signerId',
   * );
   * ```
   */
  retrieveFields(signerID: string, options?: RequestOptions): APIPromise<SignerRetrieveFieldsResponse> {
    return this._client.get(path`/signer/${signerID}/fields1/`, options);
  }

  /**
   * Send signer reminder email
   *
   * @example
   * ```ts
   * await client.signer.sendReminder('signerId');
   * ```
   */
  sendReminder(signerID: string, body: SignerSendReminderParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/signer/${signerID}/send-reminder/`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

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
 *
 * * `4` - Unsent
 * * `5` - Schedule to send
 * * `10` - Sent
 * * `15` - Email opened
 * * `20` - Visited
 * * `30` - Fields completed
 * * `35` - Fields complete except signature
 * * `39` - Witness to sign
 * * `40` - Signed
 * * `50` - Downloaded
 * * `60` - Rejected
 */
export type SignerStatusEnum = 4 | 5 | 10 | 15 | 20 | 30 | 35 | 39 | 40 | 50 | 60;

export interface SignerRetrieveResponse {
  document?: string;

  email?: string;

  first_name?: string;

  has_fields?: boolean;

  last_name?: string;

  order?: number;

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
  status?: SignerStatusEnum;
}

export interface SignerGetRejectionReasonResponse {
  reason?: string;

  status?: number;
}

export type SignerRetrieveFieldsResponse =
  Array<SignerRetrieveFieldsResponse.SignerRetrieveFieldsResponseItem>;

export namespace SignerRetrieveFieldsResponse {
  export interface SignerRetrieveFieldsResponseItem {
    fieldorder?: number | null;

    label?: string;

    label_extra?: string;

    state?: boolean;

    /**
     * If the field is a signer file this value will be a short lived download URL
     */
    value?: string | null;
  }
}

export interface SignerResetParams {
  /**
   * Email of signer to revert to.
   */
  email: string;

  /**
   * Email notify current signer access is being withdrawn
   */
  notify?: boolean;
}

export interface SignerSendReminderParams {
  /**
   * custom message text, html will be stripped
   */
  text?: string;
}

export declare namespace Signer {
  export {
    type SignerStatusEnum as SignerStatusEnum,
    type SignerRetrieveResponse as SignerRetrieveResponse,
    type SignerGetRejectionReasonResponse as SignerGetRejectionReasonResponse,
    type SignerRetrieveFieldsResponse as SignerRetrieveFieldsResponse,
    type SignerResetParams as SignerResetParams,
    type SignerSendReminderParams as SignerSendReminderParams,
  };
}
