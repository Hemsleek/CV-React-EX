import React from 'react'

const Total = ({exercises}) => (
    
    <p>
    
        Number of Exercises - { exercises.reduce((acc , current ) => acc + current ) }
    </p>
  )
 
export default Total;