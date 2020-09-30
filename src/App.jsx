import React from 'react';


import Content from './components/Content';
import Header from './components/Header';
import Total from './components/Total';

import './App.scss';



const App = () => {

  const course = 'Half Stack application development';

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div className="App">

      <Header course={course} />

      <Content parts={parts} />

      <Total exercises={parts.map(part => part.exercises)} />

    </div>
  );
}

export default App;
