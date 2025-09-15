// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Legalesign from 'legalesign';

const client = new Legalesign({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pdf', () => {
  test('createPreview: required and optional params', async () => {
    const response = await client.pdf.createPreview({
      group: '/api/v1/group/IK-GV--w1tvt/',
      is_signature_per_page: 0,
      signature_type: 0,
      signee_count: 0,
      text: 'text',
      footer: 'footer',
      footer_height: 0,
      header: 'header',
      header_height: 0,
      pdfheader: true,
      title: 'title',
    });
  });
});
