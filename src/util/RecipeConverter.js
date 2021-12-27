
const stockRecipe = [
  { title: '', desc: '' },
  [{ name: '', amount: 0 }],
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
  Object.assign(recipe[0], doc.overview);
  recipe[1] = doc.ingredients ? doc.ingredients : [];
  recipe[2] = doc.directions ? doc.directions : [];
  // recipe[1] = recipe[1].concat(doc.ingredients);
  // recipe[2] = recipe[2].concat(doc.directions);

  console.log("Converting: ");
  console.log(JSON.stringify(doc));
  console.log("into");
  console.log(JSON.stringify(recipe));

  return recipe;
}

export const recipeToDoc = (recipe) => {
  const doc = {
    overview: recipe[0],
    ingredients: recipe[1],
    directions: recipe[2]
  }
  console.log("Converting: ");
  console.log(JSON.stringify(recipe));
  console.log("into");
  console.log(JSON.stringify(doc));
  return doc;
}