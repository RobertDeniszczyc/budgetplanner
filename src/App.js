import React from 'react';
import './App.css';
import InputNumber from './components/forms/InputNumber';
import Heading from './components/headers/Heading';

function App() {
  return (
    <div className="App">
      <Heading heading="Budget Planner"/>

      <InputNumber
        name="targetAmount"
        label="Target Amount"
      />
    </div>
  );
}

export default App;
