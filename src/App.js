import React, { useState } from 'react';
import './App.css';

function App() {
  const [names, setNames] = useState([]);
  const [formState, setFormState] = useState({
     firstName: '',
     lastName: ''
  });
  const handleSubmit = evt => {
    setNames([ ...names, formState]);
    setFormState({ firstName: '', lastName: ''});
    evt.preventDefault();
  }
  const handleOnChange = (event, name) => {
    const { target: { value } } = event;
    setFormState({ ...formState, [name]: value });
  }
  const { firstName, lastName } = formState;
  return (
    <div className='App'>
      <h1>Sign Up Sheet</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder='First Name' value={firstName} onChange={(e) => handleOnChange(e, 'firstName')}/>
        <input placeholder='Last Name' value={lastName} onChange={(e) => handleOnChange(e, 'lastName')}/>
        <input type='submit'/>
        <ul>
          {names.map((name, index) => <li key={index}>{name.firstName}, {name.lastName}</li>)}
        </ul>
      </form>
    </div>
  )
}

export default App;
