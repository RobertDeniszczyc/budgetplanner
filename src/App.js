import React, { useState, useEffect } from 'react';
import './App.css';
import InputNumber from './components/forms/InputNumber';
import Heading from './components/headers/Heading';

function App() {
  const [targetAmount, setTargetAmount] = useState(0);
  const [initialAmount, setInitialAmount] = useState(0);
  const [progressAmount, setProgressAmount] = useState(0);

  useEffect(() => {
    setProgressAmount(targetAmount - initialAmount);
  }, [targetAmount, initialAmount]);

  return (
    <div className="App">
      <Heading heading="Budget Planner"/>

      <InputNumber
        name="initialAmount"
        label="Initial Amount"
        value={initialAmount}
        onChange={e => setInitialAmount(e.target.value)}
      />

      <InputNumber
        name="targetAmount"
        label="Target Amount"
        value={targetAmount}
        onChange={e => setTargetAmount(e.target.value)}
      />

      Amount remaining: {progressAmount}

    </div>
  );
}

export default App;
