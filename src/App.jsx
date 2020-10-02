import React, { useState,useEffect } from 'react'
import axios from 'axios'

import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Search from './components/Search'


import './App.scss'


const App = () => {

  const [ persons, setPersons ] = useState([]) 
  const [filtered, setFiltered] = useState('')
 
  const personsToDisplay= filtered.trim()? 
                        persons.filter(person => person.name.toLowerCase().indexOf(filtered.trim().toLowerCase()) > -1) :
                        persons
  useEffect(() => {
    axios('http://localhost:3030/persons')
      .then(response => setPersons(response.data))
      .catch(error => alert(`error fetching, ${error}`))
    //localstorage persist
  }, [])

  const handleNewPerson = (e) =>{
      e.preventDefault()
      const form = e.target
      const name =form.name.value.trim()
      const number = form.number.value.trim()

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