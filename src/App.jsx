import React, { useState,useEffect } from 'react'

import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Search from './components/Search'


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
                        persons.filter(person => person.name.toLowerCase().indexOf(filtered.trim().toLowerCase()) > -1) :
                        persons
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

const handleSetFiltered = (event) => setFiltered(event)
 
  return (
    <div className="App">

      <h2>Phonebook</h2>
      <Search  filtered = {filtered} handleSetFiltered={handleSetFiltered}/>

      <h3>Add a new PhoneNumber</h3>
      <PersonForm handleNewPerson = {handleNewPerson}/>

      <h3>Numbers</h3>
      <Persons personsToDisplay = {personsToDisplay}/>
     
    </div>
  )
}
export default App