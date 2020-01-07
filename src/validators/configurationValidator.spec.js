import importedConfigurationIsValid from './configurationValidator';

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
    }
  }`;

  let result = importedConfigurationIsValid(payload);
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
    }
  }`;

  let result = importedConfigurationIsValid(payload);
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
    }
  }`;

  let result = importedConfigurationIsValid(payload);
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
    }
  }`;

  let result = importedConfigurationIsValid(payload);
  let expected = false;

  expect(result).toBe(expected);
});
