import React from 'react';
import InputNumber from '../InputNumber';
import {
  RENT_AMOUNT,
  COUNCIL_TAX_AMOUNT,
  MAINTENANCE_AMOUNT,
  HOUSEHOLD_BILLS_AMOUNT,
  OTHER_HOUSEHOLD_COSTS_AMOUNT
} from '../../../config/stateConstants';

export default function HouseholdOutgoings(state, dispatch) {
  return (
    <div>
      <InputNumber
        name="rentAmount"
        label="Rent"
        value={state.state.outgoing[RENT_AMOUNT] || '' }
        onChange={e => state.dispatch({
          type: 'outgoingAmountChange',
          payload: parseInt(e.target.value),
          outgoing: [RENT_AMOUNT]
        })}
      />

      <InputNumber
        name="councilTaxAmount"
        label="Council Tax"
        value={state.state.outgoing[COUNCIL_TAX_AMOUNT] || '' }
        onChange={e => state.dispatch({
          type: 'outgoingAmountChange',
          payload: parseInt(e.target.value),
          outgoing: [COUNCIL_TAX_AMOUNT]
        })}
      />

      <InputNumber
        name="maintenanceAmount"
        label="Maintenance"
        value={state.state.outgoing[MAINTENANCE_AMOUNT] || '' }
        onChange={e => state.dispatch({
          type: 'outgoingAmountChange',
          payload: parseInt(e.target.value),
          outgoing: [MAINTENANCE_AMOUNT]
        })}
      />

      <InputNumber
        name="householdBillsAmount"
        label="Household bills"
        value={state.state.outgoing[HOUSEHOLD_BILLS_AMOUNT] || '' }
        onChange={e => state.dispatch({
          type: 'outgoingAmountChange',
          payload: parseInt(e.target.value),
          outgoing: [HOUSEHOLD_BILLS_AMOUNT]
        })}
      />

      <InputNumber
        name="otherHouseholdCostsAmount"
        label="Other household costs"
        value={state.state.outgoing[OTHER_HOUSEHOLD_COSTS_AMOUNT] || '' }
        onChange={e => state.dispatch({
          type: 'outgoingAmountChange',
          payload: parseInt(e.target.value),
          outgoing: [OTHER_HOUSEHOLD_COSTS_AMOUNT]
        })}
      />
    </div>
  )
}
