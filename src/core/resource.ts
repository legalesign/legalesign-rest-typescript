// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Legalesign } from '../client';

export abstract class APIResource {
  protected _client: Legalesign;

  constructor(client: Legalesign) {
    this._client = client;
  }
}
