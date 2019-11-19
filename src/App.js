import React, { useReducer } from 'react';
import './App.css';
import InputNumber from './components/forms/InputNumber';
import Heading from './components/headers/Heading';
import Reducer from './reducers/Reducer';

const initialState = {
  targetAmount: 0,
  initialAmount: 0,
  progressAmount: 0
}

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <div className="App">
      <Heading heading="Budget Planner"/>

      <InputNumber
        name="initialAmount"
        label="Initial Amount"
        value={state.initialAmount || '' }
        onChange={e => dispatch({
          type: 'initialAmountChange',
          payload: parseInt(e.target.value)
        })}
      />

      <InputNumber
        name="targetAmount"
        label="Target Amount"
        value={state.targetAmount || '' }
        onChange={e => dispatch({
          type: 'targetAmountChange',
          payload: parseInt(e.target.value)
        })}
      />

      Amount remaining: {state.progressAmount}

    </div>
  );
}

export default App;
