import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';

const App: React.FC = () => (
  <div className="App">
    <Navbar />
    <header className="App-header">
      <p>
        Hey <code>peeps</code>
      </p>
    </header>
  </div>
);

export default App;
