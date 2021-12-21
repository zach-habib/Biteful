import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import Box from '@mui/material/Box'
import { TabPanel, TabContext, TabList } from '@mui/lab';
import { Button, Tab } from '@mui/material'
import Section from './../components/create/Section'
import Step from './../components/create/Step'
import Sidebar from "./../components/sidebar/Sidebar"

const stockRecipe = [{}, [], []];

const Create = () => {
	const [value, setValue] = useState("0");
	const [recipe, setRecipe] = useState(stockRecipe);
	const { recipeId } = useParams();

	let db, docRef, docSnap;

	const handleTabChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleData = (values, idx) => {
		setRecipe((prev) => {
			let newData = [...prev];
			newData[idx] = values;
			return newData;
		})
	}

	//Fetches recipe document data from Firebase
	const fetchRecipe = async () => {
		db = getFirestore();
		docRef = doc(db, "recipes", recipeId);
		docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			readRecipeFromDoc(docSnap.data());
		} else {
			// doc.data() will be undefined in this case
			// maybe prompt an error in the future.
			console.log("No such document!");
		}
	}

	//Changes recipe state from firebase document data
	const readRecipeFromDoc = (data) => {
		const newRecipe = [...stockRecipe];
		newRecipe[0] = data.overview;
		newRecipe[1] = data.ingredients;
		newRecipe[2] = data.directions;
		setRecipe(newRecipe);
	}

	const updateRecipe = async () => {
		// doc.update({
		// 	overview: recipe[0],
		// 	ingredients: recipe[1],
		// 	directions: recipe[2]
		// })
		const status = setDoc(docRef, {
			overview: recipe[0],
			ingredients: recipe[1],
			directions: recipe[2]
		}, { merge: true })

		status
			.then(value => { console.log(value) })
			.catch(err => { console.log(err) })
	}

	useEffect(() => {
		fetchRecipe();
	}, [])

	return (
		<div className="main">
			<Sidebar />
			<div className="content">
				<h1>Create Recipe</h1>

				<TabContext value={value}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<TabList onChange={handleTabChange} aria-label="lab API tabs example">
							<Tab label="Overview" value="1" />
							<Tab label="Ingredients" value="2" />
							<Tab label="Directions" value="3" />
						</TabList>
					</Box>
					<TabPanel value="1"><Step id={0} value={recipe[0]} onChange={handleData} /></TabPanel>
					<TabPanel value="2"><Section id={1} value={recipe[1]} onChange={handleData} type="ingredients" /></TabPanel>
					<TabPanel value="3"><Section id={2} value={recipe[2]} onChange={handleData} /></TabPanel>
				</TabContext>
				<Button onClick={updateRecipe}>
					Save
				</Button>
			</div>
		</div>
	)
}

export default Create