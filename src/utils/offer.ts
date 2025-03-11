function getRatingWidth(rating: number | undefined) {
  return rating ? `${rating / 0.05}%` : '0%';
}

export { getRatingWidth };
