// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AttachmentAPI from '../attachment';
import * as DocumentAPI from '../document';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Fields extends APIResource {
  /**
   * Replace existing pdf fields with new ones
   *
   * @example
   * ```ts
   * await client.templatepdf.fields.create(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     body: [
   *       {
   *         ax: 0,
   *         ay: 0,
   *         bx: 0,
   *         by: 0,
   *         element_type: 'signature',
   *         page: 0,
   *         signer: 1,
   *       },
   *     ],
   *   },
   * );
   * ```
   */
  create(pdfID: string, params: FieldCreateParams, options?: RequestOptions): APIPromise<void> {
    const { body } = params;
    return this._client.post(path`/templatepdf/${pdfID}/fields/`, {
      body: body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get PDF template fields
   *
   * @example
   * ```ts
   * const fields = await client.templatepdf.fields.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  list(pdfID: string, options?: RequestOptions): APIPromise<FieldListResponse> {
    return this._client.get(path`/templatepdf/${pdfID}/fields/`, options);
  }
}

export interface FieldListResponse {
  meta?: AttachmentAPI.ListMeta;

  objects?: Array<FieldListResponse.Object>;
}

export namespace FieldListResponse {
  export interface Object {
    /**
     * left vertical, 0 = left page edge, 1 = right page edge
     */
    ax: number;

    /**
     * upper horizontal, 0 = top page edge, 1 = bottom page edge
     */
    ay: number;

    /**
     * right vertical, 0 = left page edge, 1 = right page edge
     */
    bx: number;

    /**
     * lower horizontal. 0 = top page edge, 1 = bottom page edge
     */
    by: number;

    /**
     * Must be one of the following: _ signature - signature field _ initials -
     * initials field _ text - signer field (field for signer to complete) _ admin -
     * sender field (field to complete by admin user when sending)
     */
    element_type: 'signature' | 'initials' | 'text' | 'admin';

    /**
     * which page to place field on
     */
    page: number;

    /**
     * 1-Index number for signer (witness+100) (approver+200). Null if sender field.
     */
    signer: number | null;

    /**
     * one of the following:
     *
     * - 1 - left
     * - 2 - middle
     * - 3 - right
     */
    align?: 1 | 2 | 3 | null;

    /**
     * order signer progresses through fields, top-down if blank
     */
    fieldorder?: number;

    font_name?: '' | 'arial' | 'courier' | 'helvetica' | 'liberation' | 'verdana';

    font_size?: number;

    hide_border?: boolean;

    /**
     * help signer/sender understand what to do
     */
    label?: string;

    /**
     * @deprecated not in use
     */
    label_extra?: string;

    /**
     * offers options for more advanced forms 1 = One of a set of field (radio group),
     * 2 = Sum a set of fields, 3 = Conditional upon another field
     */
    logic_action?: 1 | 2 | 3;

    /**
     * values to enable a given logic_action in the form
     */
    logic_group?: string;

    /**
     * custom data for form integrations
     */
    map_to?: string;

    optional?: boolean;

    /**
     * user for certain validation types
     */
    options?: string;

    /**
     * @deprecated Set if field substantive to contract terms, if so will not let
     * others sign till this field completed
     */
    substantive?: boolean;

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

export interface FieldCreateParams {
  body: Array<FieldCreateParams.Body>;
}

export namespace FieldCreateParams {
  export interface Body {
    /**
     * % of page width - left vertical: 0 = left page edge, 1 = right page edge
     */
    ax: number;

    /**
     * % of page height - upper horizontal: 0 = top page edge, 1 = bottom page edge
     */
    ay: number;

    /**
     * % of page width - right vertical, 0 = left page edge, 1 = right page edge
     */
    bx: number;

    /**
     * % of page height lower horizontal. 0 = top page edge, 1 = bottom page edge
     */
    by: number;

    /**
     * Must be one of the following: _ signature - signature field _ initials -
     * initials field _ text - signer field (field for signer to complete) _ admin -
     * sender field (field to complete by admin user when sending, use pdftext)
     */
    element_type: 'signature' | 'initials' | 'text' | 'admin';

    /**
     * which page to place field on
     */
    page: number;

    /**
     * 1-indexed number of signer (witness+100) (approver+200)
     */
    signer: number;

    /**
     * one of the following:
     *
     * - 1 - left
     * - 2 - middle
     * - 3 - right
     */
    align?: 1 | 2 | 3 | null;

    /**
     * Ordering of fields as the signer progresses (top-down by if left blank)
     */
    fieldorder?: number | null;

    font_name?: '' | 'arial' | 'courier' | 'helvetica' | 'liberation' | 'verdana';

    font_size?: number;

    hide_border?: boolean;

    /**
     * Help a signer/sender understand what to do with the form field
     */
    label?: string;

    /**
     * @deprecated unused. more label if required
     */
    label_extra?: string;

    /**
     * offers options for more advanced forms 1 = One of a set of field - radio group 2
     * = Sum a set of fields 3 = Conditional upon another field
     */
    logic_action?: 1 | 2 | 3;

    /**
     * values to enable a given logic_action in the form
     */
    logic_group?: string;

    /**
     * custom data for form integrations
     */
    map_to?: string;

    /**
     * Set true to allow field to be ignored
     */
    optional?: boolean;

    /**
     * Additional values for certain validation types.
     */
    options?: string;

    /**
     * Set if field substantive to contract terms, if so will not let other sign till
     * this field completed
     */
    substantive?: boolean;

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

export declare namespace Fields {
  export { type FieldListResponse as FieldListResponse, type FieldCreateParams as FieldCreateParams };
}
