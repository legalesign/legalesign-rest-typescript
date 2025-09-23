# Document

Types:

- <code><a href="./src/resources/document.ts">DocumentStatusEnum</a></code>
- <code><a href="./src/resources/document.ts">ListMeta</a></code>
- <code><a href="./src/resources/document.ts">PdfFieldValidationEnum</a></code>
- <code><a href="./src/resources/document.ts">DocumentCreateResponse</a></code>
- <code><a href="./src/resources/document.ts">DocumentRetrieveResponse</a></code>
- <code><a href="./src/resources/document.ts">DocumentListResponse</a></code>
- <code><a href="./src/resources/document.ts">DocumentGetFieldsResponse</a></code>

Methods:

- <code title="post /document/">client.document.<a href="./src/resources/document.ts">create</a>({ ...params }) -> DocumentCreateResponse</code>
- <code title="get /document/{docId}/">client.document.<a href="./src/resources/document.ts">retrieve</a>(docID) -> DocumentRetrieveResponse</code>
- <code title="get /document/">client.document.<a href="./src/resources/document.ts">list</a>({ ...params }) -> DocumentListResponse</code>
- <code title="delete /document/{docId}/">client.document.<a href="./src/resources/document.ts">archive</a>(docID) -> void</code>
- <code title="get /document/{docId}/fields/">client.document.<a href="./src/resources/document.ts">getFields</a>(docID) -> DocumentGetFieldsResponse</code>
- <code title="delete /document/{docId}/delete/">client.document.<a href="./src/resources/document.ts">permanentlyDelete</a>(docID) -> void</code>

# Group

Types:

- <code><a href="./src/resources/group.ts">GroupRetrieveResponse</a></code>
- <code><a href="./src/resources/group.ts">GroupListResponse</a></code>

Methods:

- <code title="post /group/">client.group.<a href="./src/resources/group.ts">create</a>({ ...params }) -> void</code>
- <code title="get /group/{groupId}/">client.group.<a href="./src/resources/group.ts">retrieve</a>(groupID) -> GroupRetrieveResponse</code>
- <code title="get /group/">client.group.<a href="./src/resources/group.ts">list</a>({ ...params }) -> GroupListResponse</code>

# Pdf

Methods:

- <code title="get /pdf/{docId}/">client.pdf.<a href="./src/resources/pdf.ts">retrieve</a>(docID) -> Response</code>

# Signer

Types:

- <code><a href="./src/resources/signer.ts">SignerStatusEnum</a></code>
- <code><a href="./src/resources/signer.ts">SignerRetrieveResponse</a></code>
- <code><a href="./src/resources/signer.ts">SignerRetrieveFieldsResponse</a></code>

Methods:

- <code title="get /signer/{signerId}/">client.signer.<a href="./src/resources/signer.ts">retrieve</a>(signerID) -> SignerRetrieveResponse</code>
- <code title="get /signer/{signerId}/new-link/">client.signer.<a href="./src/resources/signer.ts">getAccessLink</a>(signerID) -> void</code>
- <code title="get /signer/{signerId}/fields1/">client.signer.<a href="./src/resources/signer.ts">retrieveFields</a>(signerID) -> SignerRetrieveFieldsResponse</code>
- <code title="post /signer/{signerId}/send-reminder/">client.signer.<a href="./src/resources/signer.ts">sendReminder</a>(signerID, { ...params }) -> void</code>

# Status

Types:

- <code><a href="./src/resources/status.ts">StatusRetrieveResponse</a></code>

Methods:

- <code title="get /status/{docId}/">client.status.<a href="./src/resources/status.ts">retrieve</a>(docID) -> StatusRetrieveResponse</code>

# Template

Types:

- <code><a href="./src/resources/template.ts">TemplateRetrieveResponse</a></code>
- <code><a href="./src/resources/template.ts">TemplateListResponse</a></code>

Methods:

- <code title="post /template/">client.template.<a href="./src/resources/template.ts">create</a>({ ...params }) -> void</code>
- <code title="get /template/{templateId}/">client.template.<a href="./src/resources/template.ts">retrieve</a>(templateID) -> TemplateRetrieveResponse</code>
- <code title="patch /template/{templateId}/">client.template.<a href="./src/resources/template.ts">update</a>(templateID, { ...params }) -> void</code>
- <code title="get /template/">client.template.<a href="./src/resources/template.ts">list</a>({ ...params }) -> TemplateListResponse</code>

# Templatepdf

Types:

- <code><a href="./src/resources/templatepdf/templatepdf.ts">TemplatePdf</a></code>
- <code><a href="./src/resources/templatepdf/templatepdf.ts">TemplatepdfListResponse</a></code>
- <code><a href="./src/resources/templatepdf/templatepdf.ts">TemplatepdfGetEditLinkResponse</a></code>

Methods:

- <code title="post /templatepdf/">client.templatepdf.<a href="./src/resources/templatepdf/templatepdf.ts">create</a>({ ...params }) -> void</code>
- <code title="get /templatepdf/{pdfId}/">client.templatepdf.<a href="./src/resources/templatepdf/templatepdf.ts">retrieve</a>(pdfID) -> TemplatePdf</code>
- <code title="get /templatepdf/">client.templatepdf.<a href="./src/resources/templatepdf/templatepdf.ts">list</a>({ ...params }) -> TemplatepdfListResponse</code>
- <code title="get /templatepdf/{pdfId}/edit-link/">client.templatepdf.<a href="./src/resources/templatepdf/templatepdf.ts">getEditLink</a>(pdfID) -> string</code>

## Fields

Types:

- <code><a href="./src/resources/templatepdf/fields.ts">FieldListResponse</a></code>

Methods:

- <code title="post /templatepdf/{pdfId}/fields/">client.templatepdf.fields.<a href="./src/resources/templatepdf/fields.ts">create</a>(pdfID, [ ...body ]) -> void</code>
- <code title="get /templatepdf/{pdfId}/fields/">client.templatepdf.fields.<a href="./src/resources/templatepdf/fields.ts">list</a>(pdfID) -> FieldListResponse</code>
