import React, { useState } from 'react'

import './App.scss'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' },
    {name:'Ada lovelace'}
  ]) 
  const [ newName, setNewName ] = useState('')

  return (
    <div className="App">
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        {

        persons.map(person => (<p key={person.name}>{person.name}</p>))
        
        }
      
    </div>
  )
}
export default App