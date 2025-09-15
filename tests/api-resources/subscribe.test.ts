// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Legalesign from 'legalesign';

const client = new Legalesign({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subscribe', () => {
  // Prism tests are disabled
  test.skip('createWebhook: only required params', async () => {
    const responsePromise = client.subscribe.createWebhook({ notify: 'realtime', url: 'https://' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('createWebhook: required and optional params', async () => {
    const response = await client.subscribe.createWebhook({
      notify: 'realtime',
      url: 'https://',
      eventFilter: '',
      group: 'group',
    });
  });
});
