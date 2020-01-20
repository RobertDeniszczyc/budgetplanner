import React, { useReducer, useState, useContext } from 'react';
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

import DarkModeToggle from './components/themes/DarkModeToggle';
import styled from 'styled-components';
import { DarkModeContext } from './hooks/DarkModeContext';
import importedConfigurationIsValid from './validators/configurationValidator';

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

const AppContainer = styled.div`
  background-color: ${props => (
      props.darkMode ? "#111" : "#efefef"
  )};
  display: flex;
  flex-direction: column;
  color: #333;
`;

const FormHeading = styled.h2`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 24px;
  color: ${props => (
      props.darkMode ? "#efefef" : "#333"
  )};
`;

const ConfigFormContainer = styled.div`
  margin: 10px;
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  color: ${props => (
      props.darkMode ? "#efefef" : "#111"
  )};
`;

export default function Dashboard(props) {

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [state, dispatch] = useReducer(Reducer, initialState);
  const [exportableConfig, setExportableConfig] = useState(null);
  const [importableConfig, setImportableConfig] = useState(null);

  function exportConfiguration(e) {
    e.preventDefault();
    let exportableState = state;
    if (Object.keys(exportableState).includes('error')) {
      delete exportableState.error;
    }
    exportableState.darkMode = darkMode;
    setExportableConfig(JSON.stringify(exportableState));
    copy(JSON.stringify(exportableState));
  }

  function importConfiguration(e) {
    e.preventDefault();

    let validateImportConfig = importedConfigurationIsValid(importableConfig);
    if (validateImportConfig.response === true) {
      let config = JSON.parse(importableConfig);
      dispatch({
        type: 'importConfiguration',
        payload: config
      });
      toggleDarkMode(config.darkMode);
    } else {
      dispatch({
        type: 'configurationError',
        payload: validateImportConfig.error
      })
    }
  }

  return (
    <AppContainer darkMode={darkMode}>
      <Heading heading="Budget Planner"/>

      <ConfigFormContainer darkMode={darkMode}>
        <FormHeading darkMode={darkMode}>Income</FormHeading>
        <InputNumber
          name={INCOME_AMOUNT}
          label="Income Amount"
          value={state[INCOME_AMOUNT] || '' }
          onChange={e => dispatch({
            type: 'incomeAmountChange',
            payload: parseInt(e.target.value)
          })}
        />

        Amount remaining: <strong>{state[REMAINING_AMOUNT] || 0}</strong>
      </ConfigFormContainer>

      <section className="outgoing-form__wrapper">
        <div className="outgoing-form__container">
          <FormHeading darkMode={darkMode}>Household</FormHeading>
          <HouseholdOutgoings state={state} dispatch={dispatch} darkMode={darkMode} />
        </div>

        <div className="outgoing-form__container">
          <FormHeading darkMode={darkMode}>Living costs</FormHeading>
          <LivingOutgoings state={state} dispatch={dispatch} />
        </div>

        <div className="outgoing-form__container">
          <FormHeading darkMode={darkMode}>Leisure</FormHeading>
          <LeisureOutgoings state={state} dispatch={dispatch} />
        </div>

        <div className="outgoing-form__container">
          <FormHeading darkMode={darkMode}>Finance</FormHeading>
          <FinanceOutgoings state={state} dispatch={dispatch} />
        </div>

        <div className="outgoing-form__container">
          <FormHeading darkMode={darkMode}>Travel</FormHeading>
          <TravelOutgoings state={state} dispatch={dispatch} />
        </div>
      </section>

      <ConfigFormContainer darkMode={darkMode}>
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
      </ConfigFormContainer>

      <ConfigFormContainer darkMode={darkMode}>
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
      </ConfigFormContainer>

      <ConfigFormContainer darkMode={darkMode}>
        <h2>Settings</h2>
        <DarkModeToggle />
      </ConfigFormContainer>

    </AppContainer>
  );
}
