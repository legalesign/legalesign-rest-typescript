# Attachment

Types:

- <code><a href="./src/resources/attachment.ts">AttachmentResponse</a></code>
- <code><a href="./src/resources/attachment.ts">ListMeta</a></code>
- <code><a href="./src/resources/attachment.ts">AttachmentListResponse</a></code>

Methods:

- <code title="get /attachment/{attachmentId}/">client.attachment.<a href="./src/resources/attachment.ts">retrieve</a>(attachmentID) -> AttachmentResponse</code>
- <code title="get /attachment/">client.attachment.<a href="./src/resources/attachment.ts">list</a>({ ...params }) -> AttachmentListResponse</code>
- <code title="delete /attachment/{attachmentId}/">client.attachment.<a href="./src/resources/attachment.ts">delete</a>(attachmentID) -> void</code>
- <code title="post /attachment/">client.attachment.<a href="./src/resources/attachment.ts">upload</a>({ ...params }) -> void</code>

# Document

Types:

- <code><a href="./src/resources/document.ts">DocumentStatusEnum</a></code>
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
- <code title="delete /document/{docId}/delete/">client.document.<a href="./src/resources/document.ts">deletePermanently</a>(docID) -> void</code>
- <code title="get /document/{docId}/auditlog/">client.document.<a href="./src/resources/document.ts">downloadAuditLog</a>(docID) -> Response</code>
- <code title="get /document/{docId}/fields/">client.document.<a href="./src/resources/document.ts">getFields</a>(docID) -> DocumentGetFieldsResponse</code>
- <code title="post /document/preview/">client.document.<a href="./src/resources/document.ts">preview</a>({ ...params }) -> void</code>

# Groups

Types:

- <code><a href="./src/resources/groups.ts">GroupRetrieveResponse</a></code>
- <code><a href="./src/resources/groups.ts">GroupListResponse</a></code>

Methods:

- <code title="post /group/">client.groups.<a href="./src/resources/groups.ts">create</a>({ ...params }) -> void</code>
- <code title="get /group/{groupId}/">client.groups.<a href="./src/resources/groups.ts">retrieve</a>(groupID) -> GroupRetrieveResponse</code>
- <code title="patch /group/{groupId}/">client.groups.<a href="./src/resources/groups.ts">update</a>(groupID, { ...params }) -> void</code>
- <code title="get /group/">client.groups.<a href="./src/resources/groups.ts">list</a>({ ...params }) -> GroupListResponse</code>

# Invited

Types:

- <code><a href="./src/resources/invited.ts">InvitedListResponse</a></code>

Methods:

- <code title="get /invited/">client.invited.<a href="./src/resources/invited.ts">list</a>({ ...params }) -> InvitedListResponse</code>
- <code title="delete /invited/{invitedId}/">client.invited.<a href="./src/resources/invited.ts">delete</a>(invitedID) -> void</code>

# Member

Types:

- <code><a href="./src/resources/member.ts">MemberResponse</a></code>
- <code><a href="./src/resources/member.ts">PermissionsEnum</a></code>
- <code><a href="./src/resources/member.ts">MemberListResponse</a></code>

Methods:

- <code title="post /member/">client.member.<a href="./src/resources/member.ts">create</a>({ ...params }) -> void</code>
- <code title="get /member/{memberId}/">client.member.<a href="./src/resources/member.ts">retrieve</a>(memberID) -> MemberResponse</code>
- <code title="get /member/">client.member.<a href="./src/resources/member.ts">list</a>({ ...params }) -> MemberListResponse</code>
- <code title="delete /member/{memberId}/">client.member.<a href="./src/resources/member.ts">delete</a>(memberID) -> void</code>

# Notifications

Types:

- <code><a href="./src/resources/notifications.ts">WebhookEventFilterEnum</a></code>
- <code><a href="./src/resources/notifications.ts">NotificationListResponse</a></code>

Methods:

- <code title="get /notifications/">client.notifications.<a href="./src/resources/notifications.ts">list</a>() -> NotificationListResponse</code>

# Pdf

Methods:

- <code title="get /pdf/{docId}/">client.pdf.<a href="./src/resources/pdf.ts">retrieve</a>(docID) -> Response</code>
- <code title="post /pdf/preview/">client.pdf.<a href="./src/resources/pdf.ts">createPreview</a>({ ...params }) -> Response</code>

# Signer

Types:

- <code><a href="./src/resources/signer.ts">SignerStatusEnum</a></code>
- <code><a href="./src/resources/signer.ts">SignerRetrieveResponse</a></code>
- <code><a href="./src/resources/signer.ts">SignerGetRejectionReasonResponse</a></code>
- <code><a href="./src/resources/signer.ts">SignerRetrieveFieldsResponse</a></code>

Methods:

- <code title="get /signer/{signerId}/">client.signer.<a href="./src/resources/signer.ts">retrieve</a>(signerID) -> SignerRetrieveResponse</code>
- <code title="get /signer/{signerId}/new-link/">client.signer.<a href="./src/resources/signer.ts">getAccessLink</a>(signerID) -> void</code>
- <code title="get /signer/{signerId}/rejection/">client.signer.<a href="./src/resources/signer.ts">getRejectionReason</a>(signerID) -> SignerGetRejectionReasonResponse</code>
- <code title="post /signer/{signerId}/reset/">client.signer.<a href="./src/resources/signer.ts">reset</a>(signerID, { ...params }) -> void</code>
- <code title="get /signer/{signerId}/fields1/">client.signer.<a href="./src/resources/signer.ts">retrieveFields</a>(signerID) -> SignerRetrieveFieldsResponse</code>
- <code title="post /signer/{signerId}/send-reminder/">client.signer.<a href="./src/resources/signer.ts">sendReminder</a>(signerID, { ...params }) -> void</code>

# Status

Types:

- <code><a href="./src/resources/status.ts">StatusResponse</a></code>
- <code><a href="./src/resources/status.ts">StatusRetrieveAllResponse</a></code>

Methods:

- <code title="get /status/{docId}/">client.status.<a href="./src/resources/status.ts">retrieve</a>(docID) -> StatusResponse</code>
- <code title="get /status/">client.status.<a href="./src/resources/status.ts">retrieveAll</a>({ ...params }) -> StatusRetrieveAllResponse</code>

# Subscribe

Methods:

- <code title="post /subscribe/">client.subscribe.<a href="./src/resources/subscribe.ts">createWebhook</a>({ ...params }) -> void</code>

# Template

Types:

- <code><a href="./src/resources/template.ts">TemplateRetrieveResponse</a></code>
- <code><a href="./src/resources/template.ts">TemplateListResponse</a></code>

Methods:

- <code title="post /template/">client.template.<a href="./src/resources/template.ts">create</a>({ ...params }) -> void</code>
- <code title="get /template/{templateId}/">client.template.<a href="./src/resources/template.ts">retrieve</a>(templateID) -> TemplateRetrieveResponse</code>
- <code title="patch /template/{templateId}/">client.template.<a href="./src/resources/template.ts">update</a>(templateID, { ...params }) -> void</code>
- <code title="get /template/">client.template.<a href="./src/resources/template.ts">list</a>({ ...params }) -> TemplateListResponse</code>
- <code title="delete /template/{templateId}/">client.template.<a href="./src/resources/template.ts">archive</a>(templateID) -> void</code>

# Templatepdf

Types:

- <code><a href="./src/resources/templatepdf/templatepdf.ts">TemplatePdf</a></code>
- <code><a href="./src/resources/templatepdf/templatepdf.ts">TemplatepdfListResponse</a></code>
- <code><a href="./src/resources/templatepdf/templatepdf.ts">TemplatepdfGetEditLinkResponse</a></code>

Methods:

- <code title="post /templatepdf/">client.templatepdf.<a href="./src/resources/templatepdf/templatepdf.ts">create</a>({ ...params }) -> void</code>
- <code title="get /templatepdf/{pdfId}/">client.templatepdf.<a href="./src/resources/templatepdf/templatepdf.ts">retrieve</a>(pdfID) -> TemplatePdf</code>
- <code title="get /templatepdf/">client.templatepdf.<a href="./src/resources/templatepdf/templatepdf.ts">list</a>({ ...params }) -> TemplatepdfListResponse</code>
- <code title="post /templatepdf/{pdfId}/archive/">client.templatepdf.<a href="./src/resources/templatepdf/templatepdf.ts">archive</a>(pdfID) -> void</code>
- <code title="post /templatepdf/{pdfId}/tags/">client.templatepdf.<a href="./src/resources/templatepdf/templatepdf.ts">convertTags</a>(pdfID) -> void</code>
- <code title="get /templatepdf/{pdfId}/edit-link/">client.templatepdf.<a href="./src/resources/templatepdf/templatepdf.ts">getEditLink</a>(pdfID) -> string</code>

## Fields

Types:

- <code><a href="./src/resources/templatepdf/fields.ts">FieldListResponse</a></code>

Methods:

- <code title="post /templatepdf/{pdfId}/fields/">client.templatepdf.fields.<a href="./src/resources/templatepdf/fields.ts">create</a>(pdfID, [ ...body ]) -> void</code>
- <code title="get /templatepdf/{pdfId}/fields/">client.templatepdf.fields.<a href="./src/resources/templatepdf/fields.ts">list</a>(pdfID) -> FieldListResponse</code>

# Unsubscribe

Methods:

- <code title="post /unsubscribe/">client.unsubscribe.<a href="./src/resources/unsubscribe.ts">deleteWebhook</a>({ ...params }) -> void</code>

# User

Types:

- <code><a href="./src/resources/user.ts">TimezoneEnum</a></code>
- <code><a href="./src/resources/user.ts">UserRetrieveResponse</a></code>

Methods:

- <code title="post /user/">client.user.<a href="./src/resources/user.ts">create</a>({ ...params }) -> void</code>
- <code title="get /user/{userId}/">client.user.<a href="./src/resources/user.ts">retrieve</a>(userID) -> UserRetrieveResponse</code>
- <code title="patch /user/{userId}/">client.user.<a href="./src/resources/user.ts">update</a>(userID, { ...params }) -> void</code>
