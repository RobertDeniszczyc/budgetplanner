import importedConfigurationIsValid, { payloadHasValidKeys, payloadIsValidJson } from './configurationValidator';

test('it returns true with valid input', () => {

  let payload = `{
    "incomeAmount": 1000,
    "remainingAmount": 1000,
    "outgoing": {
      "rentAmount": 1,
      "councilTaxAmount": 1,
      "maintenanceAmount": 1,
      "householdBillsAmount": 1,
      "otherHouseholdCostsAmount":1,
      "groceriesAmount" :1,
      "healthcareAmount" : 1,
      "otherLivingCostsAmount" :1,
      "holidaysAmount" : 1,
      "hobbiesAmount" : 1,
      "entertainmentAmount" : 1,
      "insuranceAmount" : 1,
      "savingsAmount" : 1,
      "fuelAmount" : 1,
      "vehicleMaintenanceAmount" : 1,
      "vehicleTaxAmount" : 1,
      "publicTransportAmount" : 1
    },
    "darkMode": true
  }`;

  let result = importedConfigurationIsValid(payload).response;
  let expected = true;

  expect(result).toBe(expected);
});

test('it returns false with invalid key', () => {

  let payload = `{
    "incomeAmount this is a fake key": 1000,
    "remainingAmount": 1000,
    "outgoing": {
      "rentAmount": 1,
      "councilTaxAmount": 1,
      "maintenanceAmount": 1,
      "householdBillsAmount": 1,
      "otherHouseholdCostsAmount":1,
      "groceriesAmount" :1,
      "healthcareAmount" : 1,
      "otherLivingCostsAmount" :1,
      "holidaysAmount" : 1,
      "hobbiesAmount" : 1,
      "entertainmentAmount" : 1,
      "insuranceAmount" : 1,
      "savingsAmount" : 1,
      "fuelAmount" : 1,
      "vehicleMaintenanceAmount" : 1,
      "vehicleTaxAmount" : 1,
      "publicTransportAmount" : 1
    },
    "darkMode": true
  }`;

  let result = importedConfigurationIsValid(payload).response;
  let expected = false;

  expect(result).toBe(expected);
});

test('it returns false with invalid nested key', () => {

  let payload = `{
    "incomeAmount": 1000,
    "remainingAmount": 1000,
    "outgoing": {
      "rentAmount this is a fake key": 1,
      "councilTaxAmount": 1,
      "maintenanceAmount": 1,
      "householdBillsAmount": 1,
      "otherHouseholdCostsAmount":1,
      "groceriesAmount" :1,
      "healthcareAmount" : 1,
      "otherLivingCostsAmount" :1,
      "holidaysAmount" : 1,
      "hobbiesAmount" : 1,
      "entertainmentAmount" : 1,
      "insuranceAmount" : 1,
      "savingsAmount" : 1,
      "fuelAmount" : 1,
      "vehicleMaintenanceAmount" : 1,
      "vehicleTaxAmount" : 1,
      "publicTransportAmount" : 1
    },
    "darkMode": true
  }`;

  let result = importedConfigurationIsValid(payload).response;
  let expected = false;

  expect(result).toBe(expected);
});

test('it returns false with non integer value', () => {

  let payload = `{
    "incomeAmount": invalid amount,
    "remainingAmount": 1000,
    "outgoing": {
      "rentAmount this is a fake key": 1,
      "councilTaxAmount": 1,
      "maintenanceAmount": 1,
      "householdBillsAmount": 1,
      "otherHouseholdCostsAmount":1,
      "groceriesAmount" :1,
      "healthcareAmount" : 1,
      "otherLivingCostsAmount" :1,
      "holidaysAmount" : 1,
      "hobbiesAmount" : 1,
      "entertainmentAmount" : 1,
      "insuranceAmount" : 1,
      "savingsAmount" : 1,
      "fuelAmount" : 1,
      "vehicleMaintenanceAmount" : 1,
      "vehicleTaxAmount" : 1,
      "publicTransportAmount" : 1
    },
    "darkMode": true
  }`;

  let result = importedConfigurationIsValid(payload).response;
  let expected = false;

  expect(result).toBe(expected);
});

test('it returns true response with valid json', () => {

  let payload = `{
    "incomeAmount": 1000,
    "remainingAmount": 1000,
    "outgoing": {
      "rentAmount": 1,
      "councilTaxAmount": 1,
      "maintenanceAmount": 1,
      "householdBillsAmount": 1,
      "otherHouseholdCostsAmount":1,
      "groceriesAmount" :1,
      "healthcareAmount" : 1,
      "otherLivingCostsAmount" :1,
      "holidaysAmount" : 1,
      "hobbiesAmount" : 1,
      "entertainmentAmount" : 1,
      "insuranceAmount" : 1,
      "savingsAmount" : 1,
      "fuelAmount" : 1,
      "vehicleMaintenanceAmount" : 1,
      "vehicleTaxAmount" : 1,
      "publicTransportAmount" : 1
    },
    "darkMode": true
  }`;

  let result = payloadIsValidJson(payload);
  let expected = {
    response: true
  };

  expect(result).toStrictEqual(expected);
});

test('it returns correct error response with invalid json', () => {

  let payload = `{
    "incomeAmount": 
    "remainingAmount": 1000,
    "outgoing": {
      "rentAmount": 1,
      "councilTaxAmount": 1,
      "maintenanceAmount": 1,
      "householdBillsAmount": 1,
      "otherHouseholdCostsAmount":1,
      "groceriesAmount" :1,
      "healthcareAmount" : 1,
      "otherLivingCostsAmount" :1,
      "holidaysAmount" : 1,
      "hobbiesAmount" : 1,
      "entertainmentAmount" : 1,
      "insuranceAmount" : 1,
      "savingsAmount" : 1,
      "fuelAmount" : 1,
      "vehicleMaintenanceAmount" : 1,
      "vehicleTaxAmount" : 1,
      "publicTransportAmount" : 1
    },
    "darkMode": true
  }`;

  let result = payloadIsValidJson(payload);
  let expected = {
    response: false,
    error: 'Payload is invalid JSON.'
  };

  expect(result).toStrictEqual(expected);
});

test('it returns true response with valid keys', () => {

  let payload = `{
    "incomeAmount": 1000,
    "remainingAmount": 1000,
    "outgoing": {
      "rentAmount": 1,
      "councilTaxAmount": 1,
      "maintenanceAmount": 1,
      "householdBillsAmount": 1,
      "otherHouseholdCostsAmount":1,
      "groceriesAmount" :1,
      "healthcareAmount" : 1,
      "otherLivingCostsAmount" :1,
      "holidaysAmount" : 1,
      "hobbiesAmount" : 1,
      "entertainmentAmount" : 1,
      "insuranceAmount" : 1,
      "savingsAmount" : 1,
      "fuelAmount" : 1,
      "vehicleMaintenanceAmount" : 1,
      "vehicleTaxAmount" : 1,
      "publicTransportAmount" : 1
    },
    "darkMode": true
  }`;

  let result = payloadHasValidKeys(payload);
  let expected = {
    response: true
  };

  expect(result).toStrictEqual(expected);
});

test('it returns correct error response with invalid top level key', () => {

  let payload = `{
    "invalidkey": 1000,
    "remainingAmount": 1000,
    "outgoing": {
      "rentAmount": 1,
      "councilTaxAmount": 1,
      "maintenanceAmount": 1,
      "householdBillsAmount": 1,
      "otherHouseholdCostsAmount":1,
      "groceriesAmount" :1,
      "healthcareAmount" : 1,
      "otherLivingCostsAmount" :1,
      "holidaysAmount" : 1,
      "hobbiesAmount" : 1,
      "entertainmentAmount" : 1,
      "insuranceAmount" : 1,
      "savingsAmount" : 1,
      "fuelAmount" : 1,
      "vehicleMaintenanceAmount" : 1,
      "vehicleTaxAmount" : 1,
      "publicTransportAmount" : 1
    },
    "darkMode": true
  }`;

  let result = payloadHasValidKeys(payload);
  let expected = {
    response: false,
    error: 'Payload has invalid keys.'
  };

  expect(result).toStrictEqual(expected);
});

test('it returns correct error response with invalid nested level key', () => {

  let payload = `{
    "incomeAmount": 1000,
    "remainingAmount": 1000,
    "outgoing": {
      "invalidNestedKey": 1,
      "councilTaxAmount": 1,
      "maintenanceAmount": 1,
      "householdBillsAmount": 1,
      "otherHouseholdCostsAmount":1,
      "groceriesAmount" :1,
      "healthcareAmount" : 1,
      "otherLivingCostsAmount" :1,
      "holidaysAmount" : 1,
      "hobbiesAmount" : 1,
      "entertainmentAmount" : 1,
      "insuranceAmount" : 1,
      "savingsAmount" : 1,
      "fuelAmount" : 1,
      "vehicleMaintenanceAmount" : 1,
      "vehicleTaxAmount" : 1,
      "publicTransportAmount" : 1
    },
    "darkMode": true
  }`;

  let result = payloadHasValidKeys(payload);
  let expected = {
    response: false,
    error: 'Payload has invalid keys.'
  };

  expect(result).toStrictEqual(expected);
});