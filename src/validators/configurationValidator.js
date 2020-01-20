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
  OUTGOING,
  DARK_MODE
} from '../config/stateConstants';
import ConfigurationReducer, { CONFIG_VALID_JSON, CONFIG_VALID_KEYS } from '../reducers/ConfigurationReducer';

const validPayloadKeys = [
  INCOME_AMOUNT,
  REMAINING_AMOUNT,
  OUTGOING,
  DARK_MODE
];

const validOutgoingKeys = [
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
  PUBLIC_TRANSPORT_AMOUNT
];

const initialState = {
  response: 'testestset',
  error: null,
  payload: null,
  breakValidation: false
}

/**
 * Check the configuration to import is valid configuration.
 * Runs through ruleset.
 * @param {object} payload 
 * @returns {object}
 */
export default function importedConfigurationIsValid(payload) {

  let checksToPerform = [CONFIG_VALID_JSON, CONFIG_VALID_KEYS];
  let state = initialState;

  checksToPerform.forEach((check) => {
    if (!state.breakValidation) {
      state = ConfigurationReducer(state, check, payload);
    }
  })

  return state;
}

/**
 * Check the supplied payload is valid JSON
 * @param {object} payload 
 * @returns {object}
 */
export function payloadIsValidJson(payload) {
  try {
    JSON.parse(payload);
  } catch (error) {
    return {
      response: false,
      error: 'Payload is invalid JSON.'
    };
  }

  return {
    response: true
  };
}

/**
 * Check the supplied payload keys against the allowed configuration definition
 * @param {object} payload 
 * @returns {object}
 */
export function payloadHasValidKeys(payload) {
  let jsonPayload = JSON.parse(payload);

  if (
    JSON.stringify(Object.keys(jsonPayload)) === JSON.stringify(validPayloadKeys) &&
    JSON.stringify(Object.keys(jsonPayload.outgoing)) === JSON.stringify(validOutgoingKeys)
  ) {
    return {
      response: true
    };
  } 

  return {
    response: false,
    error: 'Payload has invalid keys.'
  };      
}