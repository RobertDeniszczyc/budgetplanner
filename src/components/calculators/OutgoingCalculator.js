/**
 * Calcuate the total outgoings
 * 
 * @param {object} state The full state of all outgoings in the application
 * @param {object} inTransition Which outgoing amount is triggering this
 * @param {number} payload What is the amount being changed to
 */
export default function OutgoingCalculator(state, inTransition, payload) {
  let total = 0;

  /** 
   * Delete the amount from the state which is being changed
   * We do this so we can easily add everything else together
   * then add on the changing amount at the end.
   */
  if (inTransition) {
    delete state[inTransition];
  }

  for (let key in state) {
    total += state[key]
  }

  if (payload) {
    total += payload;
  }

  /**
   * Return the total
   * Note: This method ONLY returns a total, so it doesn't matter
   *       that we were deleting items from "state" above. We haven't 
   *       actually touched the real application state.
   */
  return total;
}
