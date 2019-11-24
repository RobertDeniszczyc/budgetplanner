export default function OutgoingCalculator(state, inTransition, payload) {
  let total = 0;
  delete state[inTransition];

  for (let key in state) {
    total += state[key]
  }

  total += payload;
  return total;
}
