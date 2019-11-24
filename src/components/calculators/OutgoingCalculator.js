export default function OutgoingCalculator(state, inTransition, payload) {
  let total = 0;

  if (inTransition) {
    delete state[inTransition];
  }

  for (let key in state) {
    total += state[key]
  }

  if (payload) {
    total += payload;
  }

  return total;
}
