import axios from 'axios';
import { useState , useEffect } from 'react';
import './App.css';
import UserList from './UserList';

function App() {
  const [list,setList]= useState([])
  const ax= axios
  useEffect (() => {
  axios.get('https://jsonplaceholder.typicode.com/users').then(res=>setList(res.data))},[]);
  
  return (
    <div className="App">
      <header className="App-header">
       <UserList ll={list}/>
      </header>
    </div>
  );
}

export default App;
