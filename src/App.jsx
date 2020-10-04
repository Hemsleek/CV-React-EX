import React, { useState,useEffect } from 'react'
import phoneService from './phoneService'

import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Search from './components/Search'


import './App.scss'


const App = () => {

  const [ persons, setPersons ] = useState([]) 
  const [filtered, setFiltered] = useState('')
 

  const reloadNumbers = () =>
        phoneService.get().then(response => setPersons(response.data))
          .catch(error => alert(`error fetching, ${error}`))

  const personsToDisplay= filtered.trim()? 
                        persons.filter(person => person.name.toLowerCase().indexOf(filtered.trim().toLowerCase()) > -1) :
                        persons
  useEffect(() => {
   
       phoneService.get().then(response => setPersons(response.data))
      .catch(error => alert(`error fetching, ${error}`))
    //localstorage persist
  }, [])

  const handleNewPerson = (e) =>{ 
      e.preventDefault()
      const form = e.target
      const name =form.name.value.trim()
      const number = form.number.value.trim()

      const id = persons[persons.length - 1].id + 1

      const newContact = {name, number, id}
    
    //use for loop
      for( let i=0; i<persons.length; i++){
        const person =persons[i]
        if(person.name.toLowerCase() === name.trim().toLowerCase()){
          if(window.confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`)){
            
            phoneService.update(person.id, newContact).then(response =>response).catch(error => error)

            reloadNumbers()
            form.reset()
          }
          return null
        }
      }

      phoneService.add(newContact)
      .then(response => setPersons(persons.concat(response.data))).catch(error => error)  
      form.reset()
  }
     


  const handleSetFiltered = (event) => setFiltered(event)

  const handleDelete = ({name , id},) => {
      
      if(window.confirm(`Delete ${name} ?`))

        phoneService.del(id)
          .then(response => response)
          .catch(error => error)

        reloadNumbers()
 
  }

  return (
    <div className="App">

      <h2>Phonebook</h2>
      <Search filtered = {filtered} handleSetFiltered={handleSetFiltered}/>

      <h3>Add a new PhoneNumber</h3>
      <PersonForm handleNewPerson = {handleNewPerson}/>

      <h3>Numbers</h3>
      <Persons personsToDisplay = {personsToDisplay} handleDelete = {handleDelete}/>
     
    </div>
  )
}
export default App