

const stockRecipe = [
  { title: '', desc: '' },
  [{ name: '', amount: 0, unit: 0 }],
  [{ title: '', desc: '' }]
];

export const getDefaultRecipe = () => {
  return [...stockRecipe];
}

export const createRecipeDoc = () => {
  return recipeToDoc(getDefaultRecipe());
}

export const docToRecipe = (doc) => {
  const recipe = [...stockRecipe];
  if (doc.overview) recipe[0] = doc.overview;
  if (doc.ingredients) recipe[1] = doc.ingredients;
  if (doc.directions) recipe[2] = doc.directions;
  return recipe;
}

export const recipeToDoc = (recipe) => {
  const doc = {
    overview: recipe[0],
    ingredients: recipe[1],
    directions: recipe[2]
  }
  return doc;
}