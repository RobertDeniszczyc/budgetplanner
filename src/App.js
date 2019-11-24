import React, { useReducer } from 'react';
import './App.css';
import InputNumber from './components/forms/InputNumber';
import Heading from './components/headers/Heading';
import Reducer from './reducers/Reducer';
import IntervalReducer from './reducers/IntervalReducer';
import {
  INCOME_AMOUNT,
  RENT_AMOUNT,
  COUNCIL_TAX_AMOUNT,
  MAINTENANCE_AMOUNT,
  HOUSEHOLD_BILLS_AMOUNT,
  OTHER_HOUSEHOLD_COSTS_AMOUNT
} from './config/stateConstants';
import HouseholdOutgoings from './components/forms/outgoings/Household';

const initialState = {
  [INCOME_AMOUNT]: 0,
  outgoingAmount: 0,
  remainingAmount: 0,
  outgoing: {
    [RENT_AMOUNT]: 0,
    [COUNCIL_TAX_AMOUNT]: 0,
    [MAINTENANCE_AMOUNT]: 0,
    [HOUSEHOLD_BILLS_AMOUNT]: 0,
    [OTHER_HOUSEHOLD_COSTS_AMOUNT]: 0,
  }
}

let intervalInputState = [];

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [inputState, intervalDispatch] = useReducer(IntervalReducer, intervalInputState);

  return (
    <div className="App">
      <Heading heading="Budget Planner"/>

      Income
      <InputNumber
        name="incomeAmount"
        label="Income Amount"
        value={state[INCOME_AMOUNT] || '' }
        onChange={e => dispatch({
          type: 'incomeAmountChange',
          payload: parseInt(e.target.value),
          test: true
        })}
      />

      Household
      <HouseholdOutgoings state={state} dispatch={dispatch} />

      Amount remaining: {state.remainingAmount}

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
