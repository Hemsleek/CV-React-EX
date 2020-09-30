import React from 'react'

const Content = ({parts}) => (
    <div>
     {
       parts.map((part , index) => (<p key={index}>{part.name} - {part.exercises}</p>))
     }
    </div>
  )

export default Content
