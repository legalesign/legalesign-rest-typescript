// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LegalesignSDK from 'legalesign-sdk';

const client = new LegalesignSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource fields', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.templatepdf.fields.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      body: [{ ax: 0, ay: 0, bx: 0, by: 0, element_type: 'signature', page: 0, signer: 1 }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.templatepdf.fields.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      body: [
        {
          ax: 0,
          ay: 0,
          bx: 0,
          by: 0,
          element_type: 'signature',
          page: 0,
          signer: 1,
          align: 1,
          fieldorder: 0,
          font_name: '',
          font_size: 6,
          hide_border: true,
          label: 'label',
          label_extra: 'label_extra',
          logic_action: 1,
          logic_group: 'logic_group',
          map_to: 'map_to',
          optional: true,
          options: 'options',
          substantive: true,
          validation: 1,
          value: 'value',
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.templatepdf.fields.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
