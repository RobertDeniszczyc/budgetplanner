import React, { useContext } from 'react';
import styled from 'styled-components';
import { DarkModeContext } from '../../hooks/DarkModeContext';

const StyledHeading = styled.div`
  display: flex;
  flex: 0 0 100%;
  height: 30px;
  color: #fff;
  background: ${props => (
        props.darkMode ? "#111" : "#566273"
    )};
`;

export default function Heading(props) {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <StyledHeading
      className="application__heading--container"
      darkMode={darkMode}
    >
      <h1 className="application__heading">{props.heading}</h1>
    </StyledHeading>
  )
}
