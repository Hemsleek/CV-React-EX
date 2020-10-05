import React from 'react'

const Persons = ({personsToDisplay , handleDelete}) => {
    
    return (
            <div className="screen">
                <ol>

                    {
  
                         personsToDisplay.map(person => 
                            <li key={person.name}>
                                <span>
                                    {person.name} - {person.number}
                                </span>
                                <button onClick={e => handleDelete(person)}>Delete
                                </button>
                            </li>
                        )
  
                    }

                </ol>
            </div>
    
    )
}

export default Persons
