import React from 'react';
import Dashboard from './Dashboard';
import ContextContainer from './components/containers/ContextContainer';

function App() {
  return (
    <ContextContainer>
      <Dashboard />
    </ContextContainer>
  );
}

export default App;
