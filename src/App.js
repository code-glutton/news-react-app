import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import './App.css';
import NavigationBar from './components/navigation';
import BigPictureSection from "./components/bigPictureSection";
import SmallImageSection from "./components/smallImageSection";
import ImgTextSection from "./components/imgTextSection";
import {breakingNewsAction,breakingSportNews,breakingBusinessNews} from './actions/loadAllNews';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(breakingSportNews());
    dispatch(breakingBusinessNews());
    dispatch(breakingNewsAction());
  },[])
  
  const pendingSelector = (state) => state.pending;


  const pending = useSelector(pendingSelector);



  if(pending === true){
    return (
      <div>
    {console.log("yay")}
          <header>
          <NavigationBar/>
        </header>
        <main>
          {/* <BigPictureSection/>
          <SmallImageSection/> */}
          <ImgTextSection/>
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
