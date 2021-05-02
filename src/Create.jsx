import {React, useState} from 'react'
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import "./Create.css";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const Create = ({loadPosts}) => {
	let history = useHistory();
	const [post, setPost] = useState({
		userId: 1,
		title: "",
		body: ""
	});
	const { title, body } = post;
	const onInputChange = e => {
		setPost({...post,[e.target.name]: e.target.value})
	}
	const onSubmit = async (e) => {
		e.preventDefault();
		await axios.post("https://my-json-server.typicode.com/SanskritiKushik5/json-server/posts", post);
		history.push("/");
		loadPosts();
	}
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
		
		<form autoComplete="off" onSubmit={e => onSubmit(e)}>
			<Grid item spacing={9}>
				<TextField 
					style={{width: '100vh', margin: '1rem'}} 
					variant="outlined" 
					id="title" 
					value={title} 
					name="title"
					label="Title" 
					onChange={e => onInputChange(e)}
				/>
			</Grid>
			<Grid item spacing={9}>
				<TextField
					id="body"
					style={{width: '100vh', margin: '1rem'}}
					label="Content"
					variant="outlined"
					multiline
					value={body}
					name="body"
					rows={4}
					onChange={e => onInputChange(e)}
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
