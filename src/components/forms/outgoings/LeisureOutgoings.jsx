import React from 'react';
import InputNumber from '../InputNumber';
import {
  HOLIDAYS_AMOUNT,
  HOBBIES_AMOUNT,
  ENTERTAINMENT_AMOUNT
} from '../../../config/stateConstants';

export default function LeisureOutgoings(state, dispatch) {
  return (
    <div className="outgoing-fields__container">
      <InputNumber
        name={HOLIDAYS_AMOUNT}
        label="Holidays"
        value={state.state.outgoing[HOLIDAYS_AMOUNT] || '' }
        onChange={e => state.dispatch({
          type: 'outgoingAmountChange',
          payload: parseInt(e.target.value),
          outgoing: [HOLIDAYS_AMOUNT]
        })}
      />

      <InputNumber
        name={HOBBIES_AMOUNT}
        label="Hobbies"
        value={state.state.outgoing[HOBBIES_AMOUNT] || '' }
        onChange={e => state.dispatch({
          type: 'outgoingAmountChange',
          payload: parseInt(e.target.value),
          outgoing: [HOBBIES_AMOUNT]
        })}
      />

      <InputNumber
        name={ENTERTAINMENT_AMOUNT}
        label="Entertainment"
        value={state.state.outgoing[ENTERTAINMENT_AMOUNT] || '' }
        onChange={e => state.dispatch({
          type: 'outgoingAmountChange',
          payload: parseInt(e.target.value),
          outgoing: [ENTERTAINMENT_AMOUNT]
        })}
      />
    </div>
  )
}
