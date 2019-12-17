import React, { useContext } from 'react';
import InputNumber from '../InputNumber';
import {
  INSURANCE_AMOUNT,
  SAVINGS_AMOUNT
} from '../../../config/stateConstants';
import styled from 'styled-components';
import { DarkModeContext } from '../../../hooks/DarkModeContext';

const FormContainer = styled.div`
  color: ${props => (
      props.darkMode ? "#efefef" : "#111"
  )};
`;

export default function FinanceOutgoings(state, dispatch) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <FormContainer darkMode={darkMode}>
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
    </FormContainer>
  )
}
