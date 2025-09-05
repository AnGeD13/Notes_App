/**
 * Calculate order of file size (B, KB, MB)
 * @param {number} size - file size in the note
 * @returns string with size in format "15 KB"
 */
export function formatFileSize(size: number): string {
  let sizeForChange = size;
  const units = ['Б', 'КБ', 'МБ'];

  let k = 0;
  while (sizeForChange > 1024) {
    sizeForChange = sizeForChange / 1024;
    k += 1;
  }

  return `${sizeForChange.toFixed(2)} ${units[k]}`;
}
