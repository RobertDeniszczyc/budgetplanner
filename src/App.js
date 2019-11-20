import React, { useReducer } from 'react';
import './App.css';
import InputNumber from './components/forms/InputNumber';
import Heading from './components/headers/Heading';
import Reducer from './reducers/Reducer';
import IntervalReducer from './reducers/IntervalReducer';

const initialState = {
  targetAmount: 0,
  initialAmount: 0,
  progressAmount: 0
}

let intervalInputState = [];

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [inputState, intervalDispatch] = useReducer(IntervalReducer, intervalInputState);

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

     <button onClick={e => intervalDispatch({
       type: 'add'
     })}>Create new input</button>

     {
       inputState.map((intervalInput, index) => {
         return (
           <InputNumber
            key={index}
           />
         )
       })
     }

    </div>
  );
}

export default App;
