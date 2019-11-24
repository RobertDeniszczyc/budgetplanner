import React from 'react';
import InputNumber from '../InputNumber';
import {
  FUEL_AMOUNT,
  VEHICLE_MAINTENANCE_AMOUNT,
  VEHICLE_TAX_AMOUNT,
  PUBLIC_TRANSPORT_AMOUNT
} from '../../../config/stateConstants';

export default function TravelOutgoings(state, dispatch) {
  return (
    <div>
      <InputNumber
        name={FUEL_AMOUNT}
        label="Fuel"
        value={state.state.outgoing[FUEL_AMOUNT] || '' }
        onChange={e => state.dispatch({
          type: 'outgoingAmountChange',
          payload: parseInt(e.target.value),
          outgoing: [FUEL_AMOUNT]
        })}
      />

      <InputNumber
        name={VEHICLE_MAINTENANCE_AMOUNT}
        label="Vehicle Maintenance"
        value={state.state.outgoing[VEHICLE_MAINTENANCE_AMOUNT] || '' }
        onChange={e => state.dispatch({
          type: 'outgoingAmountChange',
          payload: parseInt(e.target.value),
          outgoing: [VEHICLE_MAINTENANCE_AMOUNT]
        })}
      />

      <InputNumber
        name={VEHICLE_TAX_AMOUNT}
        label="Vehicle tax"
        value={state.state.outgoing[VEHICLE_TAX_AMOUNT] || '' }
        onChange={e => state.dispatch({
          type: 'outgoingAmountChange',
          payload: parseInt(e.target.value),
          outgoing: [VEHICLE_TAX_AMOUNT]
        })}
      />

      <InputNumber
        name={PUBLIC_TRANSPORT_AMOUNT}
        label="Public transport"
        value={state.state.outgoing[PUBLIC_TRANSPORT_AMOUNT] || '' }
        onChange={e => state.dispatch({
          type: 'outgoingAmountChange',
          payload: parseInt(e.target.value),
          outgoing: [PUBLIC_TRANSPORT_AMOUNT]
        })}
      />
    </div>
  )
}
