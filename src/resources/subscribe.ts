// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as NotificationsAPI from './notifications';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Subscribe extends APIResource {
  /**
   * Create webhook
   */
  createWebhook(body: SubscribeCreateWebhookParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/subscribe/', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface SubscribeCreateWebhookParams {
  /**
   * The type of callback to receive, value must be all, signed, sent, rejected or
   * realtime
   */
  notify: string;

  /**
   * The URL where you wish to get notified
   */
  url: string;

  eventFilter?: NotificationsAPI.WebhookEventFilterEnum;

  group?: string;
}

export declare namespace Subscribe {
  export { type SubscribeCreateWebhookParams as SubscribeCreateWebhookParams };
}
