export default function IntervalReducer(state, action) {
  switch(action.type) {
    case 'add':
      return [...state, {
        value: null
      }];
    default:
      console.warn('Unknown action');
  }
}
