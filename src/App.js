import React from 'react';
import logo from './logo.svg';
import './App.css';
import Post from './components/Post'

function App() {
  return (
    <div>
      <Post 
      title="новость"
      desc="description"
      image="https://avatars.mds.yandex.net/get-pdb/2300765/c721cdec-3682-4524-a6e7-fdfb39f46697/s1200"/>
    </div>
  );
}

export default App;
