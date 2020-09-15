import React from 'react';
import './App.css';
import NavigationBar from './components/navigation';
import SectionHeader from './components/sectionHeader';
import BigPictureSection from "./components/bigPictureSection";

function App() {
  return (
    <header>
      <NavigationBar/>
      <SectionHeader header={"Top News"}/>
      <BigPictureSection/>
    </header>
  );
}

export default App;
