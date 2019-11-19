export default function Reducer(state, action) {
  switch(action.type) {
    case 'initialAmountChange':
      return {
        ...state,
        initialAmount: action.payload,
        progressAmount: state.targetAmount - action.payload
      };
    case 'targetAmountChange':
      return {
        ...state,
        targetAmount: action.payload,
        progressAmount: action.payload - state.initialAmount
      };
    default:
      console.warn('Unknown action');
  }
}
