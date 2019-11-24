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
  ERROR,
  OUTGOING
} from '../config/stateConstants';

const validPayloadKeys = [
  INCOME_AMOUNT,
  REMAINING_AMOUNT,
  OUTGOING,
  ERROR
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
    let config = {
      [INCOME_AMOUNT]: payload[INCOME_AMOUNT],
      [REMAINING_AMOUNT]: payload[REMAINING_AMOUNT],
      outgoing: {
        [RENT_AMOUNT]: payload.outgoing[RENT_AMOUNT],
        [COUNCIL_TAX_AMOUNT]: payload.outgoing[COUNCIL_TAX_AMOUNT],
        [MAINTENANCE_AMOUNT]: payload.outgoing[MAINTENANCE_AMOUNT],
        [HOUSEHOLD_BILLS_AMOUNT]: payload.outgoing[HOUSEHOLD_BILLS_AMOUNT],
        [OTHER_HOUSEHOLD_COSTS_AMOUNT]: payload.outgoing[OTHER_HOUSEHOLD_COSTS_AMOUNT],
        [GROCERIES_AMOUNT] : payload.outgoing[GROCERIES_AMOUNT],
        [HEALTHCARE_AMOUNT] : payload.outgoing[HEALTHCARE_AMOUNT],
        [OTHER_LIVING_COSTS_AMOUNT] : payload.outgoing[OTHER_LIVING_COSTS_AMOUNT],
        [HOLIDAYS_AMOUNT] : payload.outgoing[HOLIDAYS_AMOUNT],
        [HOBBIES_AMOUNT] : payload.outgoing[HOBBIES_AMOUNT],
        [ENTERTAINMENT_AMOUNT] : payload.outgoing[ENTERTAINMENT_AMOUNT],
        [INSURANCE_AMOUNT] : payload.outgoing[INSURANCE_AMOUNT],
        [SAVINGS_AMOUNT] : payload.outgoing[SAVINGS_AMOUNT],
        [FUEL_AMOUNT] : payload.outgoing[FUEL_AMOUNT],
        [VEHICLE_MAINTENANCE_AMOUNT] : payload.outgoing[VEHICLE_MAINTENANCE_AMOUNT],
        [VEHICLE_TAX_AMOUNT] : payload.outgoing[VEHICLE_TAX_AMOUNT],
        [PUBLIC_TRANSPORT_AMOUNT] : payload.outgoing[PUBLIC_TRANSPORT_AMOUNT]
      }
    };

    if (
      JSON.stringify(Object.keys(payload)) !== JSON.stringify(validPayloadKeys) &&
      JSON.stringify(Object.keys(payload.outgoing)) !== JSON.stringify(validOutgoingKeys)
    ) {
      throw new Error();
    }

    if (config) {
      return true;
    }
  } catch(e) {
    return false;
  }
}
