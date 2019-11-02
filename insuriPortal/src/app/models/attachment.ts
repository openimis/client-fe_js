export interface Attachment {
    // from Element: extension
    contentType: string; // Mime type of the content, with charset etc.
    language: string; // Human language of the content (BCP-47)
    data: Blob; // Data inline, base64ed
    url: string; // Uri where the data can be found
    size: number; // Number of bytes of content (if url provided)
    hash: Blob; // Hash of the data (sha-1, base64ed)
    title: string; // Label to display in place of the data
    creation: Date; // Date attachment was first created
}
