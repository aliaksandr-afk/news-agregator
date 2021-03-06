import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post';
import posts from './posts.json';

function App() {
  return (
    <div>
      {
        posts.map((post, key) => {
          return (
            <Post 
            key = {key}
            title={post.title}
            desc={post.description}
            image={post.image}/>
          )
        })
      }
    </div>
  );
}

export default App;
