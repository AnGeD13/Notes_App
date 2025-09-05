export interface Attachment {
  name: string;
  type: string;
  size: number;
  url: string;
}
/**
 * Interface for note entity
 * @param {string} id - note ID
 * @param {string} title - title of note
 * @param {string} description description of note
 * @param {string} createdAt - date of creation in ISO format
 * @param {string} updatedAt - date of update in ISO format
 */
export interface Note {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  file?: Attachment;
}
