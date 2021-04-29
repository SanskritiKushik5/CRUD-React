import React from 'react'
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import "./Create.css";

const Create = () => {
	return (
		<Grid
			container
			direction="column"
			justify="center"
			alignItems="center"
			style={{ margin: '2rem'}}
			xs={12}
			spacing={1}
		>	
		<Grid item spacing={1}>
			<Typography variant="h4" color="textSecondary">Create a Post</Typography>
		</Grid>	
		
		<form autoComplete="off">
			<Grid item spacing={9}>
				<TextField style={{width: '100vh', margin: '1rem'}} variant="outlined" id="standard-basic" label="Title" />
			</Grid>
			<Grid item spacing={9}>
				<TextField
					id="standard-multiline-static"
					style={{width: '100vh', margin: '1rem'}}
					label="Content"
					variant="outlined"
					multiline
					rows={4}
				/>
			</Grid>
			<Grid item spacing={10} >
				<Button style={{margin: '0 auto', display: "flex"}} variant="outlined" color="primary" size="large" type="submit">
					Create
				</Button>
			</Grid>
		</form>	
		</Grid>
	)
}

export default Create
