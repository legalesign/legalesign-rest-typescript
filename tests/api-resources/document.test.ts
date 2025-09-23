// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import LegalesignSDK from 'legalesign-sdk';

const client = new LegalesignSDK({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource document', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.document.create({
      group: 'https://example.com',
      name: 'x',
      signers: [{ email: 'dev@stainless.com', firstname: 'firstname', lastname: 'lastname' }],
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
    const response = await client.document.create({
      group: 'https://example.com',
      name: 'x',
      signers: [
        {
          email: 'dev@stainless.com',
          firstname: 'firstname',
          lastname: 'lastname',
          attachments: ['/api/v1/attachment/IK-GV--w1tvt/'],
          behalfof: 'behalfof',
          decide_later: true,
          expires: '2019-12-27T18:11:19.117Z',
          message: 'message',
          order: 0,
          reviewers: [
            { email: 'dev@stainless.com', firstname: 'firstname', include_link: true, lastname: 'lastname' },
          ],
          role: 'witness',
          sms: 'sms',
          subject: 'subject',
          timezone: 'timezone',
        },
      ],
      append_pdf: true,
      auto_archive: true,
      cc_emails: 'cc_emails',
      convert_sender_to_signer: true,
      do_email: true,
      footer: 'footer',
      footer_height: 0,
      header: 'header',
      header_height: 0,
      pdf_password: 'pdf_password',
      pdf_password_type: 1,
      pdftext: { foo: 'string' },
      redirect: 'https://',
      reminders: '',
      return_signer_links: true,
      signature_type: 0,
      signers_in_order: true,
      signertext: { foo: 'string' },
      strict_fields: true,
      tag: 'tag',
      tag1: 'tag1',
      tag2: 'tag2',
      template: 'https://example.com',
      templatepdf: 'https://example.com',
      text: 'text',
      user: 'https://example.com',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.document.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.document.list({ group: 'group' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.document.list({
      group: 'group',
      archived: 'archived',
      created_gt: '2019-12-27T18:11:19.117Z',
      email: 'email',
      limit: 0,
      modified_gt: '2019-12-27T18:11:19.117Z',
      nosigners: 'nosigners',
      offset: 0,
      status: 0,
    });
  });

  // Prism tests are disabled
  test.skip('archive', async () => {
    const responsePromise = client.document.archive('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getFields', async () => {
    const responsePromise = client.document.getFields('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('permanentlyDelete', async () => {
    const responsePromise = client.document.permanentlyDelete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
