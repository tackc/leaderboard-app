import React from 'react';
import { InputForm } from './Components/InputForm';
import { OutputLeaderboard } from './Components/OutputLeaderboard';

function App() {
  return (
    <div className="container mt-4">
      <InputForm></InputForm>
      <OutputLeaderboard></OutputLeaderboard>
    </div>
  );
}

export default App;
