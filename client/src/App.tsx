import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MenuSwitcher from './components/MenuSwitcher';

const App: React.FC = () => (
  <div className="App">
    <Navbar />
    <MenuSwitcher />
    <header className="App-header">
      <p>
        Hey <code>peeps</code>
      </p>
    </header>
  </div>
);

export default App;
