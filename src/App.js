import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Post from './Post';
import Create from './Create';
import Edit from "./Edit";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CloudDone } from '@material-ui/icons';

function App() {
  const [posts, setPosts] = useState([])

  const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json()
    setPosts(posts)
  }
  const handleDelete = async (id) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/"+id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
    }
    }).then(response => response.json());
    
  }
  const handleCreate = async () => {

  }
  useEffect(() => {
    fetchPosts()
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Post posts={posts} handleDelete={handleDelete}/>
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/edit">
            <Edit />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
