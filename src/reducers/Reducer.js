import OutgoingCalculator from '../components/calculators/OutgoingCalculator';
import {
  INCOME_AMOUNT,
  OUTGOING_AMOUNT,
  REMAINING_AMOUNT
} from '../config/stateConstants';

export default function Reducer(state, action) {
  switch(action.type) {
    case 'incomeAmountChange':
      return {
        ...state,
        [INCOME_AMOUNT]: action.payload,
        [REMAINING_AMOUNT]: action.payload - state[OUTGOING_AMOUNT],
      };
    case 'outgoingAmountChange':
      return {
        ...state,
        outgoing: {
          ...state.outgoing,
          [action.outgoing]: action.payload
        },
        [OUTGOING_AMOUNT]: state[OUTGOING_AMOUNT] + action.payload,
        [REMAINING_AMOUNT]: state[INCOME_AMOUNT] - OutgoingCalculator(state.outgoing, action.outgoing, action.payload)
      };
    default:
      console.warn('Unknown action');
  }
}
