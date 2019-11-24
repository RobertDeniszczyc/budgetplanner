import React from 'react';
import InputNumber from '../InputNumber';
import {
  GROCERIES_AMOUNT,
  HEALTHCARE_AMOUNT,
  OTHER_LIVING_COSTS_AMOUNT
} from '../../../config/stateConstants';

export default function LivingOutgoings(state, dispatch) {
  return (
    <div className="outgoing-fields__container">
      <InputNumber
        name={GROCERIES_AMOUNT}
        label="Groceries"
        value={state.state.outgoing[GROCERIES_AMOUNT] || '' }
        onChange={e => state.dispatch({
          type: 'outgoingAmountChange',
          payload: parseInt(e.target.value),
          outgoing: [GROCERIES_AMOUNT]
        })}
      />

      <InputNumber
        name={HEALTHCARE_AMOUNT}
        label="Healthcare"
        value={state.state.outgoing[HEALTHCARE_AMOUNT] || '' }
        onChange={e => state.dispatch({
          type: 'outgoingAmountChange',
          payload: parseInt(e.target.value),
          outgoing: [HEALTHCARE_AMOUNT]
        })}
      />

      <InputNumber
        name={OTHER_LIVING_COSTS_AMOUNT}
        label="Other living costs"
        value={state.state.outgoing[OTHER_LIVING_COSTS_AMOUNT] || '' }
        onChange={e => state.dispatch({
          type: 'outgoingAmountChange',
          payload: parseInt(e.target.value),
          outgoing: [OTHER_LIVING_COSTS_AMOUNT]
        })}
      />
    </div>
  )
}
