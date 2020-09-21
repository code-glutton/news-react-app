import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import './App.css';
import NavigationBar from './components/navigation';
import BigPictureSection from "./components/bigPictureSection";
import SmallImageSection from "./components/smallImageSection";
import {breakingNewsAction,breakingSportNews} from './actions/loadAllNews';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(breakingSportNews());
    dispatch(breakingNewsAction());
  },[])
  
  const pendingSelector = (state) => state.pending;
  const breakingSelector = (state) => state.breaking

  const pending = useSelector(pendingSelector);
  const breaking = useSelector(breakingSelector)



  if(pending === false){
    return (
      <div>
    {console.log("yay")}
          <header>
          <NavigationBar/>
        </header>
        <main>
          <BigPictureSection/>
          <SmallImageSection/>
        </main>
        </div>
    )
  }

  
  
    return (
      <div>
      <h1>loading</h1>
      </div>
  );
  
  
  
}

export default App;
