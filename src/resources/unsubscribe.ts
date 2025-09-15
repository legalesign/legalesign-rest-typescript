// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as NotificationsAPI from './notifications';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Unsubscribe extends APIResource {
  /**
   * Delete webhook
   */
  deleteWebhook(body: UnsubscribeDeleteWebhookParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/unsubscribe/', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface UnsubscribeDeleteWebhookParams {
  /**
   * URL to remove, it must match any registered callback exactly
   */
  url: string;

  eventFilter?: NotificationsAPI.WebhookEventFilterEnum;

  /**
   * if a group filter is applied refer to it with slug or resource_uri
   */
  group?: number;
}

export declare namespace Unsubscribe {
  export { type UnsubscribeDeleteWebhookParams as UnsubscribeDeleteWebhookParams };
}
