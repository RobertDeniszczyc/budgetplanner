import React, { useReducer } from 'react';
import './App.css';
import InputNumber from './components/forms/InputNumber';
import Heading from './components/headers/Heading';
import Reducer from './reducers/Reducer';
import {
  INCOME_AMOUNT,
  RENT_AMOUNT,
  COUNCIL_TAX_AMOUNT,
  MAINTENANCE_AMOUNT,
  HOUSEHOLD_BILLS_AMOUNT,
  OTHER_HOUSEHOLD_COSTS_AMOUNT,
  GROCERIES_AMOUNT,
  HEALTHCARE_AMOUNT,
  OTHER_LIVING_COSTS_AMOUNT,
  HOLIDAYS_AMOUNT,
  HOBBIES_AMOUNT,
  ENTERTAINMENT_AMOUNT,
  INSURANCE_AMOUNT,
  SAVINGS_AMOUNT,
  FUEL_AMOUNT,
  VEHICLE_MAINTENANCE_AMOUNT,
  VEHICLE_TAX_AMOUNT,
  PUBLIC_TRANSPORT_AMOUNT,
  OUTGOING_AMOUNT,
  REMAINING_AMOUNT
} from './config/stateConstants';
import HouseholdOutgoings from './components/forms/outgoings/HouseholdOutgoings';
import LivingOutgoings from './components/forms/outgoings/LivingOutgoings';
import LeisureOutgoings from './components/forms/outgoings/LeisureOutgoings';
import FinanceOutgoings from './components/forms/outgoings/FinanceOutgoings';
import TravelOutgoings from './components/forms/outgoings/TravelOutgoings';

const initialState = {
  [INCOME_AMOUNT]: 0,
  [OUTGOING_AMOUNT]: 0,
  [REMAINING_AMOUNT]: 0,
  outgoing: {
    [RENT_AMOUNT]: 0,
    [COUNCIL_TAX_AMOUNT]: 0,
    [MAINTENANCE_AMOUNT]: 0,
    [HOUSEHOLD_BILLS_AMOUNT]: 0,
    [OTHER_HOUSEHOLD_COSTS_AMOUNT]: 0,
    [GROCERIES_AMOUNT] : 0,
    [HEALTHCARE_AMOUNT] : 0,
    [OTHER_LIVING_COSTS_AMOUNT] : 0,
    [HOLIDAYS_AMOUNT] : 0,
    [HOBBIES_AMOUNT] : 0,
    [ENTERTAINMENT_AMOUNT] : 0,
    [INSURANCE_AMOUNT] : 0,
    [SAVINGS_AMOUNT] : 0,
    [FUEL_AMOUNT] : 0,
    [VEHICLE_MAINTENANCE_AMOUNT] : 0,
    [VEHICLE_TAX_AMOUNT] : 0,
    [PUBLIC_TRANSPORT_AMOUNT] : 0
  }
}

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <div className="App">
      <Heading heading="Budget Planner"/>

      Income
      <InputNumber
        name={INCOME_AMOUNT}
        label="Income Amount"
        value={state[INCOME_AMOUNT] || '' }
        onChange={e => dispatch({
          type: 'incomeAmountChange',
          payload: parseInt(e.target.value)
        })}
      />

      Amount remaining: <strong>{state[REMAINING_AMOUNT]}</strong>

      <section className="outgoing-form__wrapper">
        <div className="outgoing-form__container">
          <h2 className="outgoing-form__heading">Household</h2>
          <HouseholdOutgoings state={state} dispatch={dispatch} />
        </div>

        <div className="outgoing-form__container">
          <h2 className="outgoing-form__heading">Living costs</h2>
          <LivingOutgoings state={state} dispatch={dispatch} />
        </div>


        <div className="outgoing-form__container">
          <h2 className="outgoing-form__heading">Leisure</h2>
          <LeisureOutgoings state={state} dispatch={dispatch} />
        </div>
        <div className="outgoing-form__container">
        <h2 className="outgoing-form__heading">Finance</h2>
        <FinanceOutgoings state={state} dispatch={dispatch} />
        </div>

        <div className="outgoing-form__container">
        <h2 className="outgoing-form__heading">Travel</h2>
        <TravelOutgoings state={state} dispatch={dispatch} />
        </div>
      </section>
    </div>
  );
}

export default App;
