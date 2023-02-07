export const searchRecipesUrl = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API}`;

export const dishType = [
  'breakfast',
  'salad',
  'soup',
  'main course',
  'drink',
  'appetizer',
  'bread',
  'fingerfood',
];

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
