function capitalizeFirstLetter(word: string) {
  return word.slice(0, 1).toUpperCase() + word.slice(1);
}

function addPluralEnding(itemsCount: number) {
  return itemsCount > 1 ? 's' : '';
}

export { capitalizeFirstLetter, addPluralEnding };
