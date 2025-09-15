// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as DocumentAPI from './document';
import * as AttachmentAPI from './attachment';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Document extends APIResource {
  /**
   * Create signing document
   *
   * @example
   * ```ts
   * const document = await client.document.create({
   *   group: 'https://example.com',
   *   name: 'x',
   *   signers: [
   *     {
   *       email: 'dev@stainless.com',
   *       firstname: 'firstname',
   *       lastname: 'lastname',
   *     },
   *   ],
   * });
   * ```
   */
  create(body: DocumentCreateParams, options?: RequestOptions): APIPromise<DocumentCreateResponse> {
    return this._client.post('/document/', { body, ...options });
  }

  /**
   * Get document
   *
   * @example
   * ```ts
   * const document = await client.document.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(docID: string, options?: RequestOptions): APIPromise<DocumentRetrieveResponse> {
    return this._client.get(path`/document/${docID}/`, options);
  }

  /**
   * List (unarchived) signing documents. Use /status/ if you need high-level
   * information.
   *
   * @example
   * ```ts
   * const documents = await client.document.list({
   *   group: 'group',
   * });
   * ```
   */
  list(query: DocumentListParams, options?: RequestOptions): APIPromise<DocumentListResponse> {
    return this._client.get('/document/', { query, ...options });
  }

  /**
   * Delete does not remove permanently but sets it with status 40 (removed) and
   * archives it.
   *
   * @example
   * ```ts
   * await client.document.archive(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  archive(docID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/document/${docID}/`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Permanently deletes data and files. You must enable group automated deletion. We
   * recommend archiveDocument.
   *
   * @example
   * ```ts
   * await client.document.deletePermanently(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  deletePermanently(docID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/document/${docID}/delete/`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Download pdf of audit log
   *
   * @example
   * ```ts
   * const response = await client.document.downloadAuditLog(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  downloadAuditLog(docID: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/document/${docID}/auditlog/`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Get document fields
   *
   * @example
   * ```ts
   * const response = await client.document.getFields(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  getFields(docID: string, options?: RequestOptions): APIPromise<DocumentGetFieldsResponse> {
    return this._client.get(path`/document/${docID}/fields/`, options);
  }

  /**
   * Returns a redirect response (302) with link in the Location header to a one-use
   * temporary URL you can redirect to, to see a preview of the signing page. Follow
   * the redirect immediately since it expires after a few seconds.
   *
   * @example
   * ```ts
   * await client.document.preview();
   * ```
   */
  preview(body: DocumentPreviewParams, options?: RequestOptions): APIPromise<void> {
    return this._client.post('/document/preview/', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

/**
 * Document status options:
 *
 * - 10 - Initial state, check signer status for sent/unsent
 * - 20 - Fields completed
 * - 30 - Signed
 * - 40 - Removed (before signing)
 * - 50 - Rejected
 *
 * * `10` - Created
 * * `20` - Fields completed
 * * `30` - Signed
 * * `40` - Removed
 * * `50` - Rejected
 */
export type DocumentStatusEnum = 10 | 20 | 30 | 40 | 50;

/**
 * fields types and validations:
 *
 * - 1 - Email
 * - 2 - yyyy/mm/dd
 * - 3 - yy/mm/dd
 * - 4 - dd/mm/yyyy
 * - 5 - dd/mm/yy
 * - 6 - mm/dd/yy
 * - 7 - mm/dd/yy
 * - 8 - yyyy.mm.dd
 * - 9 - yy.mm.dd
 * - 10 - dd.mm.yyyy
 * - 11 - dd.mm.yy
 * - 12 - mm.dd.yyyy
 * - 13 - mm.dd.yy
 * - 14 - yyyy-mm-dd
 * - 15 - yy-mm-dd
 * - 16 - dd-mm-yyyy
 * - 17 - dd-mm-yy
 * - 18 - mm-dd-yyyy
 * - 19 - mm-dd-yy
 * - 20 - Dropdown list, use options attribute for items
 * - 24 - Checkbox tick/cross
 * - 25 - Checkbox tick/blank
 * - 26 - Checkbox cross/blank
 * - 30 - yyyy/mm/dd (automatic)
 * - 31 - yy/mm/dd (automatic)
 * - 32 - dd/yy/yyyy (automatic)
 * - 33 - dd/mm/yy (automatic)
 * - 34 - mm/dd/yyyy (automatic)
 * - 35 - mm/dd/yy (automatic)
 * - 36 - yyyy.mm.dd (automatic)
 * - 37 - yy.mm.dd (automatic)
 * - 38 - dd.mm.yyyy (automatic)
 * - 39 - dd.mm.yy (automatic)
 * - 40 - mm.dd.yyyy (automatic)
 * - 41 - mm.dd.yy (automatic)
 * - 42 - yyyy-mm-dd (automatic)
 * - 43 - yy-mm-dd (automatic)
 * - 44 - dd-mm-yyyy (automatic)
 * - 45 - dd-mm-yy (automatic)
 * - 46 - mm-dd-yyyy (automatic)
 * - 47 - mm-dd-yy (automatic)
 * - 48 - d mmmmm yyyy (automatic)
 * - 50 - Whole number
 * - 51 - Number
 * - 52 - Currency (2 decimals)
 * - 53 - 1 number
 * - 54 - 2 numbers
 * - 55 - 3 numbers
 * - 56 - 4 numbers
 * - 57 - 5 numbers
 * - 58 - 6 numbers
 * - 59 - 7 numbers
 * - 60 - 8 numbers
 * - 61 - 9 numbers
 * - 62 - 10 numbers
 * - 63 - 11 numbers
 * - 64 - 12 numbers
 * - 65 - 1 characters (any text)
 * - 66 - 2 characters (any text)
 * - 67 - 3 characters (any text)
 * - 68 - 4 characters (any text)
 * - 69 - 5 characters (any text)
 * - 70 - 6 characters (any text)
 * - 71 - 7 characters (any text)
 * - 72 - 8 characters (any text)
 * - 73 - secret code, add code in options
 * - 74 - file attach, append to email to signer
 * - 75 - file attach, append to final PDF
 * - 76 - file attach, zip with final PDF for internal use, but not signer
 * - 77 - force to title caps
 * - 78 - force to uppercase
 * - 79 - force to lowercase
 * - 80 - mm/yy
 * - 81 - mm/yyyy
 * - 82 - mm.yy
 * - 83 - mm.yyyy
 * - 84 - mm-yy
 * - 85 - mm-yyyy
 * - 90 - drawn field
 * - 91 - countries list
 * - 92 - honorifics list
 */
export type PdfFieldValidationEnum =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 24
  | 25
  | 26
  | 30
  | 31
  | 32
  | 33
  | 34
  | 35
  | 36
  | 37
  | 38
  | 39
  | 40
  | 41
  | 42
  | 43
  | 44
  | 45
  | 46
  | 47
  | 48
  | 50
  | 51
  | 52
  | 53
  | 54
  | 55
  | 56
  | 57
  | 58
  | 59
  | 60
  | 61
  | 62
  | 63
  | 64
  | 65
  | 66
  | 67
  | 68
  | 69
  | 70
  | 71
  | 72
  | 73
  | 74
  | 75
  | 76
  | 77
  | 78
  | 79
  | 80
  | 81
  | 82
  | 83
  | 84
  | 85
  | 90
  | 91
  | 92
  | null;

export interface DocumentCreateResponse {
  signer_1?: string;
}

export interface DocumentRetrieveResponse {
  archived?: boolean;

  /**
   * Send document archive very soon after signing.
   */
  auto_archive?: boolean;

  /**
   * who will be cc'd with sender on email notification when signed
   */
  cc_emails?: string;

  created?: string;

  do_email?: boolean;

  /**
   * Final PDF is available to download
   */
  download_final?: boolean;

  /**
   * HTML docs - text for footer if used
   */
  footer?: string;

  /**
   * HTMl docs - px height of footer if used
   */
  footer_height?: number;

  /**
   * Resource URI of group
   */
  group?: string;

  has_fields?: boolean;

  /**
   * SHA256 checksum of final doc, use this to validate your final PDF download
   */
  hash_value?: string;

  /**
   * HTML docs - text for header if used
   */
  header?: string;

  /**
   * HTMl docs - px height of header if used
   */
  header_height?: number;

  modified?: string;

  name?: string;

  /**
   * PDF password if used and if save-able
   */
  pdf_password?: string;

  /**
   * how pdf password is retained
   */
  pdf_password_type?: string;

  /**
   * ignore this
   */
  pdftext?: string;

  /**
   * url for signer redirect after signing
   */
  redirect?: string;

  resource_uri?: string;

  /**
   * ignore
   */
  return_signer_links?: boolean;

  /**
   * legacy
   */
  sign_mouse?: boolean;

  sign_time?: string;

  /**
   * legacy
   */
  sign_type?: boolean;

  /**
   * legacy
   */
  sign_upload?: boolean;

  /**
   * legacy
   */
  signature_placement?: number;

  /**
   * legacy - always 4
   */
  signature_type?: number;

  /**
   * nested arrays with signer details
   */
  signers?: Array<Array<string>>;

  signers_in_order?: boolean;

  /**
   * Document status options:
   *
   * - 10 - Initial state, check signer status for sent/unsent
   * - 20 - Fields completed
   * - 30 - Signed
   * - 40 - Removed (before signing)
   * - 50 - Rejected
   */
  status?: DocumentStatusEnum;

  /**
   * your reference
   */
  tag?: string;

  /**
   * your reference
   */
  tag1?: string;

  /**
   * your reference
   */
  tag2?: string;

  template?: string;

  templatepdf?: string;

  text?: string;

  /**
   * Resource URI of user
   */
  user?: string;

  /**
   * Object ID alone
   */
  uuid?: string;
}

export interface DocumentListResponse {
  meta?: AttachmentAPI.ListMeta;

  objects?: Array<DocumentListResponse.Object>;
}

export namespace DocumentListResponse {
  export interface Object {
    archived?: boolean;

    auto_archive?: boolean;

    cc_emails?: string;

    created?: string;

    do_email?: boolean;

    download_final?: boolean;

    group?: string;

    modified?: string;

    name?: string;

    pdftext?: string;

    redirect?: string;

    resource_uri?: string;

    return_signer_links?: boolean;

    /**
     * nested arrays with signer details
     */
    signers?: Array<Array<string>>;

    signers_in_order?: 0 | 1;

    /**
     * Document status options:
     *
     * - 10 - Initial state, check signer status for sent/unsent
     * - 20 - Fields completed
     * - 30 - Signed
     * - 40 - Removed (before signing)
     * - 50 - Rejected
     */
    status?: DocumentAPI.DocumentStatusEnum;

    tag?: string;

    tag1?: string;

    tag2?: string;

    template?: string | null;

    templatepdf?: string | null;

    text?: string | null;

    user?: string;

    uuid?: string;
  }
}

export type DocumentGetFieldsResponse = Array<DocumentGetFieldsResponse.DocumentGetFieldsResponseItem>;

export namespace DocumentGetFieldsResponse {
  export interface DocumentGetFieldsResponseItem {
    element_type?: 'signature' | 'initials' | 'admin' | 'text';

    fieldorder?: number | null;

    label?: string;

    label_extra?: string | null;

    signer?: number;

    /**
     * if saved by signer
     */
    state?: boolean;

    /**
     * fields types and validations:
     *
     * - 1 - Email
     * - 2 - yyyy/mm/dd
     * - 3 - yy/mm/dd
     * - 4 - dd/mm/yyyy
     * - 5 - dd/mm/yy
     * - 6 - mm/dd/yy
     * - 7 - mm/dd/yy
     * - 8 - yyyy.mm.dd
     * - 9 - yy.mm.dd
     * - 10 - dd.mm.yyyy
     * - 11 - dd.mm.yy
     * - 12 - mm.dd.yyyy
     * - 13 - mm.dd.yy
     * - 14 - yyyy-mm-dd
     * - 15 - yy-mm-dd
     * - 16 - dd-mm-yyyy
     * - 17 - dd-mm-yy
     * - 18 - mm-dd-yyyy
     * - 19 - mm-dd-yy
     * - 20 - Dropdown list, use options attribute for items
     * - 24 - Checkbox tick/cross
     * - 25 - Checkbox tick/blank
     * - 26 - Checkbox cross/blank
     * - 30 - yyyy/mm/dd (automatic)
     * - 31 - yy/mm/dd (automatic)
     * - 32 - dd/yy/yyyy (automatic)
     * - 33 - dd/mm/yy (automatic)
     * - 34 - mm/dd/yyyy (automatic)
     * - 35 - mm/dd/yy (automatic)
     * - 36 - yyyy.mm.dd (automatic)
     * - 37 - yy.mm.dd (automatic)
     * - 38 - dd.mm.yyyy (automatic)
     * - 39 - dd.mm.yy (automatic)
     * - 40 - mm.dd.yyyy (automatic)
     * - 41 - mm.dd.yy (automatic)
     * - 42 - yyyy-mm-dd (automatic)
     * - 43 - yy-mm-dd (automatic)
     * - 44 - dd-mm-yyyy (automatic)
     * - 45 - dd-mm-yy (automatic)
     * - 46 - mm-dd-yyyy (automatic)
     * - 47 - mm-dd-yy (automatic)
     * - 48 - d mmmmm yyyy (automatic)
     * - 50 - Whole number
     * - 51 - Number
     * - 52 - Currency (2 decimals)
     * - 53 - 1 number
     * - 54 - 2 numbers
     * - 55 - 3 numbers
     * - 56 - 4 numbers
     * - 57 - 5 numbers
     * - 58 - 6 numbers
     * - 59 - 7 numbers
     * - 60 - 8 numbers
     * - 61 - 9 numbers
     * - 62 - 10 numbers
     * - 63 - 11 numbers
     * - 64 - 12 numbers
     * - 65 - 1 characters (any text)
     * - 66 - 2 characters (any text)
     * - 67 - 3 characters (any text)
     * - 68 - 4 characters (any text)
     * - 69 - 5 characters (any text)
     * - 70 - 6 characters (any text)
     * - 71 - 7 characters (any text)
     * - 72 - 8 characters (any text)
     * - 73 - secret code, add code in options
     * - 74 - file attach, append to email to signer
     * - 75 - file attach, append to final PDF
     * - 76 - file attach, zip with final PDF for internal use, but not signer
     * - 77 - force to title caps
     * - 78 - force to uppercase
     * - 79 - force to lowercase
     * - 80 - mm/yy
     * - 81 - mm/yyyy
     * - 82 - mm.yy
     * - 83 - mm.yyyy
     * - 84 - mm-yy
     * - 85 - mm-yyyy
     * - 90 - drawn field
     * - 91 - countries list
     * - 92 - honorifics list
     */
    validation?: DocumentAPI.PdfFieldValidationEnum | null;

    value?: string;
  }
}

export interface DocumentCreateParams {
  group: string;

  name: string;

  signers: Array<DocumentCreateParams.Signer>;

  /**
   * Append Legalesign validation info to final PDF. If not included uses the group
   * default.
   */
  append_pdf?: boolean;

  /**
   * Send to archive soon after signing. Keeps web app clutter free
   */
  auto_archive?: boolean;

  /**
   * Comma delimited string of email addresses that are notified of signing or
   * rejection.
   */
  cc_emails?: string;

  /**
   * If any sender fields are left blank, convert them to fields for the first
   * recipient.
   */
  convert_sender_to_signer?: boolean;

  /**
   * Use Legalesign email to send notification emails. If false suppresses all
   * emails.
   */
  do_email?: boolean;

  /**
   * Text doc only. The footer for the final pdf. Use keyword \"default\" to use
   * group default footer.
   */
  footer?: string;

  /**
   * Text based doc only. Pixel height of PDF footer, if used. 1px = 0.025cm
   */
  footer_height?: number;

  /**
   * Text based doc only. The header for the final pdf. Use keyword \"default\" to
   * use group header footer.
   */
  header?: string;

  /**
   * Text based doc only. Pixel height of final PDF footer, if used. 1px = 0.025cm
   */
  header_height?: number;

  /**
   * Set a password. Must be ascii encode-able, you must also set signature_type to 4
   * and choose a pdf_password_type.
   */
  pdf_password?: string;

  /**
   * 1 to store password, 2 for to delete from our records upon final signing.
   */
  pdf_password_type?: 1 | 2;

  /**
   * Assign values to PDF sender fields, use field labels as keys. Requires unique
   * fields labels. See also strict_fields.
   */
  pdftext?: { [key: string]: string };

  /**
   * URL to send the signer to after signing (instead of download page). Your URL
   * will include query parameters with ID and state information as follows:
   * YOUR-URL?signer=[signer_uid]&doc=[doc_id]&group=[group_id]&signer_state=[signer_status]&doc_state=[doc_status]
   */
  redirect?: string;

  /**
   * Put 'default' if you wish to use the default reminder schedule in the group (go
   * to web app to set default schedule)
   */
  reminders?: string;

  /**
   * Return document links for signers in the response BODY.
   */
  return_signer_links?: boolean;

  /**
   * Use 4 to get your executed PDF Certified. Recommended. Defaults to 1 (uses a
   * sha256 hash for document integrity).
   */
  signature_type?: number;

  /**
   * Notify signers in their order sequence. If false all are notified
   * simulataneously.
   */
  signers_in_order?: boolean;

  /**
   * Add custom placeholders to signer fields, using labels as keys in an object (as
   * for pdftext). Relies on unique labelling.
   */
  signertext?: { [key: string]: string };

  /**
   * pdftext fails silently for invalid field value, set to true to return an error
   */
  strict_fields?: boolean;

  tag?: string;

  tag1?: string;

  tag2?: string;

  /**
   * Resource URI of text template object. This call must contain either one of the
   * attributes text, templatepdf, template.
   */
  template?: string;

  /**
   * Resource URI of templatepdf object. This API call must contain either one of the
   * attributes text, templatepdf, template.
   */
  templatepdf?: string;

  /**
   * Raw html. This API call must contain either one of the attributes text,
   * templatepdf, template.
   */
  text?: string;

  /**
   * Assign document another user in the group. Defaults to API
   */
  user?: string;
}

export namespace DocumentCreateParams {
  export interface Signer {
    email: string;

    firstname: string;

    lastname: string;

    /**
     * List of attachment resource URIs
     */
    attachments?: Array<string>;

    /**
     * @deprecated deprecated, do not use
     */
    behalfof?: string;

    /**
     * Add this you want the previous signer or approver to decide who the next person
     * should be. Commonly used for witnesses (see \"role\"). If you use this leave all
     * other attributes blank. First signer cannot use this attribute.
     */
    decide_later?: boolean;

    /**
     * ISO8601 formed datetime, set to TZ of sender or timezone if used
     */
    expires?: string | null;

    /**
     * Your personal message for the party, entered in the centre of the group email
     * template. Use the name of a saved email template preceeded by a hash symbol to
     * use that template. If there is more than one template of the same name it will
     * select the one last modified.
     */
    message?: string;

    /**
     * @deprecated Zero-indexed signer ordering, deprecated. Ordering of
     * signers/witnesses/approvers is now the natural order of your signers list.
     */
    order?: number;

    reviewers?: Array<Signer.Reviewer>;

    /**
     * @deprecated If this person is a witness use \"witness\". Required where a
     * witness is defined in your PDF. If this person is a normal signer, use
     * \"approver\" to switch to an approver role. Witnesses and witnessed signers also
     * require \"sms\" (see also \"decide_later\").
     */
    role?: 'witness' | 'approver';

    /**
     * Use international format number to add SMS verification. Required if a witness
     * or a witnessed signer.
     */
    sms?: string;

    /**
     * Subject line for outbound email
     */
    subject?: string;

    /**
     * TZ of the signer, must be valid TZ as per timezoneenum (see User for
     * timezoneenum details). If blank uses tz of the sender.
     */
    timezone?: string;
  }

  export namespace Signer {
    /**
     * Create a reviewer. A reviewer is linked to a signer and receives emailed copies
     * of draft and signed documents. N.B. they only receive them if their associated
     * signer does. Therefore make sure your admin/experience settings are set to
     * attach PDFs to your signer emails. You can set to include the signing link to a
     * reviewer, and thereby hit the use case to send a document to a group of people
     * where the first who signs, signs.
     */
    export interface Reviewer {
      email: string;

      firstname?: string;

      /**
       * include a link to the signing pages enabling a reviewer to signer
       */
      include_link?: boolean;

      lastname?: string;
    }
  }
}

export interface DocumentListParams {
  /**
   * Filter by a specific group, required.
   */
  group: string;

  /**
   * Filter on archived status, default is false
   */
  archived?: string;

  /**
   * Filter for those documents created after a certain time
   */
  created_gt?: string;

  /**
   * Filter by signer email
   */
  email?: string;

  /**
   * Length of dataset to return. Use with offset query to iterate through results.
   */
  limit?: number;

  /**
   * Filter for those documents modified after a certain time
   */
  modified_gt?: string;

  /**
   * Add value '1' to remove signers information for a faster query
   */
  nosigners?: string;

  /**
   * Offset from start of dataset. Use with the limit query to iterate through
   * dataset.
   */
  offset?: number;

  /**
   * Filter on document status
   */
  status?: number;
}

export interface DocumentPreviewParams {
  group?: string;

  signee_count?: number;

  text?: string;

  title?: string;
}

export declare namespace Document {
  export {
    type DocumentStatusEnum as DocumentStatusEnum,
    type PdfFieldValidationEnum as PdfFieldValidationEnum,
    type DocumentCreateResponse as DocumentCreateResponse,
    type DocumentRetrieveResponse as DocumentRetrieveResponse,
    type DocumentListResponse as DocumentListResponse,
    type DocumentGetFieldsResponse as DocumentGetFieldsResponse,
    type DocumentCreateParams as DocumentCreateParams,
    type DocumentListParams as DocumentListParams,
    type DocumentPreviewParams as DocumentPreviewParams,
  };
}
