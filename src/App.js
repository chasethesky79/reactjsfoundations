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
  const handleOnChange = ({ target: { name, value }}) => {
    setFormState({ ...formState, [name]: value });
  }
  const { firstName, lastName } = formState;
  return (
    <div className='App'>
      <h1>Sign Up Sheet</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder='First Name' name='firstName' value={firstName} onChange={handleOnChange}/>
        <input placeholder='Last Name' name='lastName' value={lastName} onChange={handleOnChange}/>
        <input type='submit'/>
        <div class="names">
          <ul>
          {names.map((name, index) => <li key={index}>{name.firstName}, {name.lastName}</li>)}
          </ul>
        </div>
      </form>
    </div>
  )
}

export default App;
