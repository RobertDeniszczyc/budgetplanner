import React, { useContext } from 'react';
import InputNumber from '../InputNumber';
import {
  RENT_AMOUNT,
  COUNCIL_TAX_AMOUNT,
  MAINTENANCE_AMOUNT,
  HOUSEHOLD_BILLS_AMOUNT,
  OTHER_HOUSEHOLD_COSTS_AMOUNT
} from '../../../config/stateConstants';
import styled from 'styled-components';
import { DarkModeContext } from '../../../hooks/DarkModeContext';

const FormContainer = styled.div`
  color: ${props => (
      props.darkMode ? "#efefef" : "#111"
  )};
`;

export default function HouseholdOutgoings(state, dispatch) {
  const { darkMode } = useContext(DarkModeContext);
  
  return (
    <FormContainer darkMode={darkMode}>
      <InputNumber
        name={RENT_AMOUNT}
        label="Rent"
        value={state.state.outgoing[RENT_AMOUNT] || '' }
        onChange={e => state.dispatch({
          type: 'outgoingAmountChange',
          payload: parseInt(e.target.value),
          outgoing: [RENT_AMOUNT]
        })}
      />

      <InputNumber
        name={COUNCIL_TAX_AMOUNT}
        label="Council Tax"
        value={state.state.outgoing[COUNCIL_TAX_AMOUNT] || '' }
        onChange={e => state.dispatch({
          type: 'outgoingAmountChange',
          payload: parseInt(e.target.value),
          outgoing: [COUNCIL_TAX_AMOUNT]
        })}
      />

      <InputNumber
        name={MAINTENANCE_AMOUNT}
        label="Maintenance"
        value={state.state.outgoing[MAINTENANCE_AMOUNT] || '' }
        onChange={e => state.dispatch({
          type: 'outgoingAmountChange',
          payload: parseInt(e.target.value),
          outgoing: [MAINTENANCE_AMOUNT]
        })}
      />

      <InputNumber
        name={HOUSEHOLD_BILLS_AMOUNT}
        label="Household bills"
        value={state.state.outgoing[HOUSEHOLD_BILLS_AMOUNT] || '' }
        onChange={e => state.dispatch({
          type: 'outgoingAmountChange',
          payload: parseInt(e.target.value),
          outgoing: [HOUSEHOLD_BILLS_AMOUNT]
        })}
      />

      <InputNumber
        name={OTHER_HOUSEHOLD_COSTS_AMOUNT}
        label="Other household costs"
        value={state.state.outgoing[OTHER_HOUSEHOLD_COSTS_AMOUNT] || '' }
        onChange={e => state.dispatch({
          type: 'outgoingAmountChange',
          payload: parseInt(e.target.value),
          outgoing: [OTHER_HOUSEHOLD_COSTS_AMOUNT]
        })}
      />
    </FormContainer>
  )
}
