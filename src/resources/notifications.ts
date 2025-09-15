// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as NotificationsAPI from './notifications';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Notifications extends APIResource {
  /**
   * Callbacks sent to URL of your choice
   */
  list(options?: RequestOptions): APIPromise<NotificationListResponse> {
    return this._client.get('/notifications/', options);
  }
}

export type WebhookEventFilterEnum =
  | ''
  | 'document.*'
  | 'document.created'
  | 'document.rejected'
  | 'document.finalPdfCreated'
  | 'recipient.*'
  | 'recipient.completed'
  | 'recipient.rejected'
  | 'recipient.emailOpened'
  | 'recipient.visiting'
  | 'recipient.bounced';

export type NotificationListResponse = Array<NotificationListResponse.NotificationListResponseItem>;

export namespace NotificationListResponse {
  export interface NotificationListResponseItem {
    active?: boolean;

    event_filter?: NotificationsAPI.WebhookEventFilterEnum;

    group_id?: number;

    /**
     * 1 = every 6 minutes, 2 = upon signing, 3 = sent, 4 = rejected, 10 = realtime
     */
    notify_when?: 1 | 2 | 3 | 4 | 10;

    url?: string;
  }
}

export declare namespace Notifications {
  export {
    type WebhookEventFilterEnum as WebhookEventFilterEnum,
    type NotificationListResponse as NotificationListResponse,
  };
}
