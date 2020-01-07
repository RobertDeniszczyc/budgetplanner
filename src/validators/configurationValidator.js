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
  OUTGOING
} from '../config/stateConstants';

const validPayloadKeys = [
  INCOME_AMOUNT,
  REMAINING_AMOUNT,
  OUTGOING
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

export default function importedConfigurationIsValid(payload) {
  try {
    payload = JSON.parse(payload);

    if (
      JSON.stringify(Object.keys(payload)) !== JSON.stringify(validPayloadKeys) ||
      JSON.stringify(Object.keys(payload.outgoing)) !== JSON.stringify(validOutgoingKeys)
    ) {
      throw new Error();
    }

    return true;
  } catch(e) {
    return false;
  }
}
