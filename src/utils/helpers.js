export const formatPrice = (price) => {
  const priceInDollars = (price / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  return priceInDollars;
};

export const trimText = (text) => {
  if (text.length > 40) {
    let newText = text.slice(0, 40).replace(/\s?$/, '') + '...';
    return newText;
  }
  return text;
};

export const onlyLettersWithSpace = (text) => {
  return /^[a-zA-Z\s]*$/.test(text);
};
