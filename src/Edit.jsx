import {React, useState, useEffect} from 'react'
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import "./Create.css";
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";

const Edit = ({loadPosts}) => {
	let history = useHistory();
    const { id } = useParams();
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
		await axios.put(`https://my-json-server.typicode.com/SanskritiKushik5/json-server/posts/${id}`, post);
		history.push("/");
		loadPosts();
	}
	const loadPost = async () => {
		const result = await axios.get(`https://my-json-server.typicode.com/SanskritiKushik5/json-server/posts/${id}`);
        setPost(result.data);
	}
    useEffect(() => {
        loadPost();
    }, [])
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
			<Typography variant="h4" color="textSecondary">Update the Post</Typography>
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
					Update
				</Button>
			</Grid>
		</form>	
		</Grid>
	)
}

export default Edit
