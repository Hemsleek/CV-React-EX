import React, { useState } from 'react'

import './App.scss'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '08108170354' },
    {name:'Ada lovelace' , number:'07036156182'}
  ]) 
 

  const handleNewPerson = (e) =>{
      e.preventDefault()
      const name = e.target.name.value
      const number = e.target.number.value

      const newContact = {name, number}
     

      // setNewName(newContact)

      if(persons.some(person=> person.name.toLowerCase() === name.trim().toLowerCase())){
        window.alert(`${name} is already added to phonebook`)

      }else{
        setPersons(persons.concat(newContact))
  }
}
 
  return (
    <div className="App">
      <h2>Phonebook</h2>
      <form onSubmit={handleNewPerson}>
        <div className='form-group'>
          <label htmlFor="name">Name</label>
          <input
            id='name' type="text" 
            placeholder="Add Name" 
            name ="name" 
          />
        </div>

        <div className='form-group'>
          <label htmlFor="number">Number</label>
          <input
            id='number' type="number" 
            placeholder="Add Number" 
            name="number"
          />
        </div>
          <div>
            <button type="submit">ADD</button>
          </div>
      </form>
      <div className="screen">

        <h2>Numbers</h2>
        <ol>

          {
          
          persons.map(person => (<li key={person.name}>{person.name} - {person.number}</li>))
          
          }
      
        </ol>
      </div>
    </div>
  )
}
export default App