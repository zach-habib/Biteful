
const stockRecipe = [
  { title: '', desc: '' },
  [{ name: '', amount: 0 }],
  [{ title: '', desc: '' }]
];

export const getDefaultRecipe = () => {
  return [...stockRecipe];
}

export const docToRecipe = (doc) => {
  const recipe = [...stockRecipe];
  Object.assign(recipe[0], doc.overview);
  recipe[1].concat(doc.ingredients);
  recipe[2].concat(doc.directions);
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