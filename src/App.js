import React from 'react';
import './App.css';
import NavigationBar from './components/navigation';
import SectionHeader from './components/sectionHeader';

function App() {
  return (
    <header>
      <NavigationBar/>
      <SectionHeader header={"Top News"}/>
    </header>
  );
}

export default App;
