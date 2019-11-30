import OutgoingCalculator from '../components/calculators/OutgoingCalculator';
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
} from '../config/stateConstants';
import importedConfigurationIsValid from '../validators/configurationValidator';

export default function Reducer(state, action) {
  switch(action.type) {
    case 'incomeAmountChange':
      return {
        ...state,
        outgoing: {
          ...state.outgoing
        },
        [INCOME_AMOUNT]: action.payload,
        [REMAINING_AMOUNT]: action.payload - OutgoingCalculator(state.outgoing),
      };
    case 'outgoingAmountChange':
      let payload = isNaN(action.payload) ? 0 : action.payload;
      return {
        ...state,
        outgoing: {
          ...state.outgoing,
          [action.outgoing]: payload
        },
        [REMAINING_AMOUNT]: state[INCOME_AMOUNT] - OutgoingCalculator(state.outgoing, action.outgoing, payload)
      };
    case 'importConfiguration':
      if (importedConfigurationIsValid(action.payload)) {
        let payload = JSON.parse(action.payload);
        return {
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
        }
      } else {
        return {
          ...state,
          [ERROR]: 'Invalid configuration submitted',
        }
      }
    default:
      console.warn('Unknown action');
  }
}
