import OutgoingCalculator from '../components/calculators/OutgoingCalculator';
import {
  INCOME_AMOUNT,
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
        return payload;
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
