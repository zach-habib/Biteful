import { useState, useEffect } from 'react'
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Sidebar from "../components/sidebar/Sidebar";

// const db = getFirestore();

const MyRecipes = () => {
  const [recipes, setRecipes] = useState([])

  const fetchRecipes = async () => {
    // const response = db.collection('recipes');
    // const data = await response.get();
    // data.docs.forEach(item => {
    //   setRecipes([...recipes, item.data()])
    // })
    const db = getFirestore();
    const data = await getDocs(collection(db, "recipes"));
    console.log(data);
    let docList = [];
    data.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      // setRecipes([...recipes, doc.data()]);
      // setRecipes()
      docList = [...docList, doc.data()]
    })
    setRecipes(docList)
  }

  useEffect(() => {
    fetchRecipes();
  }, [])

  return (
    <div className="main">
      <Sidebar />
      <div className="content">
        <h1>My Recipes</h1>
        <div className="recipes-view">
          {recipes.map(recipe => {
            return (<p>{JSON.stringify(recipe)}</p>)
          })}
        </div>
      </div>
    </div>
  )
}

export default MyRecipes