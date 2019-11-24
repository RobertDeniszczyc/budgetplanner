import OutgoingCalculator from '../components/calculators/OutgoingCalculator';
import {
  INCOME_AMOUNT
} from '../config/stateConstants';

export default function Reducer(state, action) {
  switch(action.type) {
    case 'incomeAmountChange':
      return {
        ...state,
        [INCOME_AMOUNT]: action.payload,
        remainingAmount: action.payload - state.outgoingAmount,
      };
    case 'outgoingAmountChange':
      return {
        ...state,
        outgoing: {
          ...state.outgoing,
          [action.outgoing]: action.payload
        },
        outgoingAmount: state.outgoingAmount + action.payload,
        remainingAmount: state[INCOME_AMOUNT] - OutgoingCalculator(state.outgoing, action.outgoing, action.payload)
      };
    default:
      console.warn('Unknown action');
  }
}
