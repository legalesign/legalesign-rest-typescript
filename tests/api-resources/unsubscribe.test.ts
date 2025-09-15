// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Legalesign from 'legalesign';

const client = new Legalesign({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource unsubscribe', () => {
  // Prism tests are disabled
  test.skip('deleteWebhook: only required params', async () => {
    const responsePromise = client.unsubscribe.deleteWebhook({ url: 'https://' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteWebhook: required and optional params', async () => {
    const response = await client.unsubscribe.deleteWebhook({ url: 'https://', eventFilter: '', group: 0 });
  });
});
