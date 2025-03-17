/**
 * Capitalizes the first letter of a given word.
 *
 * @param {string} word - The word to capitalize.
 * @returns {string} - The word with its first letter capitalized.
 */
function capitalizeFirstLetter(word: string): string {
  return word.slice(0, 1).toUpperCase() + word.slice(1);
}

/**
 * Adds a plural ending to a word based on the count.
 *
 * @param {number} itemsCount - The number of items.
 * @returns {string} - An empty string if the count is 1 or less, otherwise 's'.
 */
function addPluralEnding(itemsCount: number): string {
  return itemsCount > 1 ? 's' : '';
}

/**
 * Formats a date by converting it into a string in the format "Month Year",
 * where Month is the full English name of the month,
 * and Year is the four-digit year.
 *
 * @param {Date} date The date to be formatted.
 * @returns {string} The formatted date as a string.
 */
function formatDate(date: Date): string {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();

  return `${month} ${year}`;
}

export { capitalizeFirstLetter, addPluralEnding, formatDate };
