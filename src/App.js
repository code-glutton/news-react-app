import React,{useEffect} from 'react';
import './App.css';
import NavigationBar from './components/navigation';
import BigPictureSection from "./components/bigPictureSection";
import SmallImageSection from "./components/smallImageSection";


function App() {
  
  return (
    <div>
      <header>
        <NavigationBar/>
      </header>
      <main>
        <BigPictureSection/>
        <SmallImageSection/>
      </main>
    </div>
    
  );
}

export default App;
