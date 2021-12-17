import { useState } from 'react'
import Box from '@mui/material/Box'
import { TabPanel, TabContext, TabList } from '@mui/lab';
import { Tab } from '@mui/material'
import Section from './../components/create/Section'
import Sidebar from "./../components/sidebar/Sidebar"

// const recipe = {
// 	overview: {},
// 	ingredients: {},
// 	prep: {},
// 	instructions: {}
// }

const stockRecipe = [{ items: [] }, { items: [] }, { items: [] }, { items: [] }];

const Create = () => {
	const [value, setValue] = useState("0");
	const [recipe, setRecipe] = useState(stockRecipe);

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
							<Tab label="Prep" value="3" />
							<Tab label="Instructions" value="4" />
						</TabList>
					</Box>
					<TabPanel value="1"><Section id={0} value={recipe[0]} onChange={handleData} /></TabPanel>
					<TabPanel value="2"><Section id={1} value={recipe[1]} onChange={handleData} type="ingredients" /></TabPanel>
					<TabPanel value="3"><Section id={2} value={recipe[2]} onChange={handleData} /></TabPanel>
					<TabPanel value="4"><Section id={3} value={recipe[3]} onChange={handleData} /></TabPanel>
				</TabContext>

				<p>
					{JSON.stringify(recipe)}
				</p>
			</div>
		</div>
	)
}

export default Create