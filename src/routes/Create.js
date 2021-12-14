import { useState } from 'react'
import Box from '@mui/material/Box'
import { TabPanel, TabContext, TabList } from '@mui/lab';
import { Tab, Tabs } from '@mui/material'
import Section from '../components/create/Section'
import Sidebar from "../components/sidebar/Sidebar"

const Create = () => {
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};



	return (
		<div className="main">
			<Sidebar />
			<div className="content">
				<h1>Create Recipe</h1>

				<TabContext value={value}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<TabList onChange={handleChange} aria-label="lab API tabs example">
							<Tab label="Overview" value="1" />
							<Tab label="Ingredients" value="2" />
							<Tab label="Prep" value="3" />
							<Tab label="Instructions" value="4" />
						</TabList>
					</Box>
					<TabPanel value="1"><Section /></TabPanel>
					<TabPanel value="2"></TabPanel>
					<TabPanel value="3"></TabPanel>
					<TabPanel value="4"><Section /></TabPanel>
				</TabContext>
			</div>
		</div>
	)
}

export default Create