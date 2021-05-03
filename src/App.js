import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Post from './Post';
import Create from './Create';
import Edit from "./Edit";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from "axios";
 
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      loadPosts();
  }, []);
  const loadPosts = async () => {
    const result = await axios.get("https://my-json-server.typicode.com/SanskritiKushik5/json-server/posts/");
    setPosts(result.data.reverse());
  }
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Post posts={posts} loadPosts={loadPosts}/>
          </Route>
          <Route exact path="/create">
            <Create loadPosts={loadPosts}/>
          </Route>
          <Route exact path="/edit/:id">
            <Edit loadPosts={loadPosts}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
