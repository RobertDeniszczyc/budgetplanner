import React from 'react';
import InputNumber from '../InputNumber';
import {
  INSURANCE_AMOUNT,
  SAVINGS_AMOUNT
} from '../../../config/stateConstants';

export default function FinanceOutgoings(state, dispatch) {
  return (
    <div>
      <InputNumber
        name={INSURANCE_AMOUNT}
        label="Insurance"
        value={state.state.outgoing[INSURANCE_AMOUNT] || '' }
        onChange={e => state.dispatch({
          type: 'outgoingAmountChange',
          payload: parseInt(e.target.value),
          outgoing: [INSURANCE_AMOUNT]
        })}
      />

      <InputNumber
        name={SAVINGS_AMOUNT}
        label="Savings"
        value={state.state.outgoing[SAVINGS_AMOUNT] || '' }
        onChange={e => state.dispatch({
          type: 'outgoingAmountChange',
          payload: parseInt(e.target.value),
          outgoing: [SAVINGS_AMOUNT]
        })}
      />
    </div>
  )
}
