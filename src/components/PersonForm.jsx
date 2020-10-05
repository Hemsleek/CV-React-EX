import React from 'react'

const PersonForm = ({handleNewPerson}) => {
    return (
        
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
       
    )
}

export default PersonForm
