// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { LegalesignSDK } from '../client';

export abstract class APIResource {
  protected _client: LegalesignSDK;

  constructor(client: LegalesignSDK) {
    this._client = client;
  }
}
