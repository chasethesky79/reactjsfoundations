import React, { useState } from 'react';
import './App.css';

const nameDisplayMap = {
  firstName: 'First Name',
  lastName: 'Last Name'
}

function App() {
  const [names, setNames] = useState([]);
  const [formState, setFormState] = useState({
     firstName: '',
     lastName: '',
     errors: {
      firstName: '',
      lastName: '',
     }
  });
  const handleSubmit = evt => {
  const errors = buildErrors(formState);
  if (Object.keys(errors).length > 0) {
    setFormState({ ...formState, errors })
  } else {
    setNames([ ...names, formState]);
    setFormState({ firstName: '', lastName: ''});
  }
  console.log(`FORM STATE ${JSON.stringify(formState)}`);
  evt.preventDefault();
  } 
  const handleOnChange = ({ target: { name, value }}) => {
    setFormState({ ...formState, [name]: value });
  }
  const { firstName, lastName, errors } = formState;
  return (
    <div className='App'>
      <h1>Sign Up Sheet</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder='First Name' name='firstName' value={firstName} onChange={handleOnChange}/><span style={{ color: 'red' }}>{ errors?.firstName }</span>
        <input placeholder='Last Name' name='lastName' value={lastName} onChange={handleOnChange}/><span style={{ color: 'red' }}>{ errors?.lastName }</span>
        <input type='submit'/>
        <div className="names">
          <ul>
          {names.map((name, index) => <li key={index}>{name.firstName}, {name.lastName}</li>)}
          </ul>
        </div>
      </form>
    </div>
  )
}

function buildErrors(formState) {
  let errors = {};
  const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
  Object.entries(formState).forEach(([key, value]) => {
    if (!value) {
      errors = { ...errors, [key]: `${nameDisplayMap[key]} is required` };
    } else if (key === 'lastName' && !value.match(emailRegEx)) {
      errors = { ...errors, [key]: `${nameDisplayMap[key]} format is invalid` };
    }
  });
  return errors;
}

export default App;
