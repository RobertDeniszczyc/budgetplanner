import React, { useReducer, useState } from 'react';
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
  REMAINING_AMOUNT,
  ERROR
} from './config/stateConstants';
import HouseholdOutgoings from './components/forms/outgoings/HouseholdOutgoings';
import LivingOutgoings from './components/forms/outgoings/LivingOutgoings';
import LeisureOutgoings from './components/forms/outgoings/LeisureOutgoings';
import FinanceOutgoings from './components/forms/outgoings/FinanceOutgoings';
import TravelOutgoings from './components/forms/outgoings/TravelOutgoings';

import copy from 'copy-to-clipboard';

const initialState = {
  [INCOME_AMOUNT]: 0,
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
  },
  [ERROR]: ''
}

function App() {

  const [state, dispatch] = useReducer(Reducer, initialState);
  const [exportableConfig, setExportableConfig] = useState(null);
  const [importableConfig, setImportableConfig] = useState(null);

  function exportConfiguration(e) {
    e.preventDefault();
    setExportableConfig(JSON.stringify(state));
    copy(JSON.stringify(state));
  }

  function importConfiguration(e) {
    e.preventDefault();
    dispatch({
      type: 'importConfiguration',
      payload: importableConfig
    });
  }

  return (
    <div className="App">
      <Heading heading="Budget Planner"/>

      <div className="config__container">
        <h2>Income</h2>
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
      </div>

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

      <div className="config__container">
        <h2>Export config</h2>
        <button
        className="button button--info"
        onClick={exportConfiguration}
        >
        Export and copy to clipboard
        </button>

        { exportableConfig &&
          <pre className="config__code">
          { exportableConfig }
          </pre>
        }
      </div>

      <div className="config__container">
        <h2>Import config</h2>
        {state[ERROR] &&
          <div className="notification--warning">
            {state[ERROR]}
          </div>
        }
        <label className="" htmlFor="importConfig">Paste config code:</label>
        <input
          type="text"
          onChange={e => setImportableConfig(e.target.value)}
          className="config__code config__code--input"
        />
        <button
          className="button button--success"
          onClick={importConfiguration}
        >
          Import configuration
        </button>
      </div>

    </div>
  );
}

export default App;
