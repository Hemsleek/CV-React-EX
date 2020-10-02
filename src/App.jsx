import React, { useState,useEffect } from 'react'

import './App.scss'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '08108170354' },
    {name:'Ada Lovelace' , number:'07036156182'},
    { name: 'Zulema Zahil', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [filtered, setFiltered] = useState('')
 
  const personsToDisplay= filtered.trim()? 
                        persons.filter(person => person.name.toLowerCase().indexOf(filtered.trim().toLowerCase()) > -1) : persons
  useEffect(() => {
    //localstorage persist
  }, [])

  const handleNewPerson = (e) =>{
      e.preventDefault()
      const form = e.target
      const name =form.name.value
      const number = form.number.value

      const newContact = {name, number}
    

      if(persons.some(person=> person.name.toLowerCase() === name.trim().toLowerCase())){
        window.alert(`${name} is already added to phonebook`)

      }else{
        setPersons(persons.concat(newContact))
        form.reset()
        }

}
 
  return (
    <div className="App">
      <h2>Phonebook</h2>
      
      <input 
        type="search" value={filtered} placeholder="Search"
        onChange={e => setFiltered(e.target.value)}
      />

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
            name="number" required
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
          
          personsToDisplay.map(person => (<li key={person.name}>{person.name} - {person.number}</li>))
          
          }
      
        </ol>
      </div>
    </div>
  )
}
export default App