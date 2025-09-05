/**
 * Format date in "DD.MM.YYYY, hh:mm:ss" format.
 *
 * @param {string} date - date of note (createAt or updatedAt)
 * @returns string "DD.MM.YYYY, hh:mm:ss"
 */
export function formatFullDate(date: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  return new Intl.DateTimeFormat('ru-RU', options).format(new Date(date));
}
