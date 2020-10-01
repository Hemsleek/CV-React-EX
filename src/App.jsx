import React, { useState } from 'react'

import './App.scss'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' },
    {name:'Ada lovelace'}
  ]) 
  const [ newName, setNewName ] = useState('')

  const handleNewPerson = (e) =>{
      e.preventDefault()
      if(persons.some(person=> person.name.toLowerCase()===newName.trim().toLowerCase())){
        window.alert(`${newName} is already added to phonebook`)
        
      }else{
        setPersons(persons.concat({name:newName}))
      }
      setNewName('')
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
            value={newName} name="name"
            onChange={e => setNewName(e.target.value)}
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
          
            persons.map(person => (<li key={person.name}>{person.name}</li>))
          
          }
      
        </ol>
      </div>
    </div>
  )
}
export default App