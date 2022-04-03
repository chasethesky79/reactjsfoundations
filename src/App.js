import React, { useRef, useState } from 'react';
import './App.css';

function App() {
  const [names, setNames] = useState([]);
  const [name, setName] = useState('');
  const handleSubmit = evt => {
    setNames([ ...names, name]);
    setName('')
    evt.preventDefault();
  }
  return (
    <div className='App'>
      <h1>Sign Up Sheet</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
        <input type='submit'/>
        <ul>
          {names.map((name, index) => <li key={index}>{name}</li>)}
        </ul>
      </form>
    </div>
  )
}

export default App;
