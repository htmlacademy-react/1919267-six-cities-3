function capitalizeFirstLetter(word: string) {
  return word.slice(0, 1).toUpperCase() + word.slice(1);
}

function addPluralEnding(itemsCount: number) {
  return itemsCount > 1 ? 's' : '';
}

function formatDate(date: Date) {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();

  return `${month} ${year}`;
}

export { capitalizeFirstLetter, addPluralEnding, formatDate };
