import React,{useEffect,useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import './App.css';
import NavigationBar from './components/navigation';
import BigPictureSection from "./components/bigPictureSection";
import SmallImageSection from "./components/smallImageSection";
import ImgTextSection from "./components/imgTextSection";
import {breakingNewsAction,breakingSportNews,breakingHealthNews,breakingBusinessNews,breakingEntertainmentNews,breakingTechNews} from './actions/loadAllNews';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(breakingSportNews());
    dispatch(breakingBusinessNews());
    dispatch(breakingEntertainmentNews());
    dispatch(breakingTechNews());
    dispatch(breakingHealthNews());
    dispatch(breakingNewsAction());
  },[]);

  const businessSelectorInit = (state) => state.business.slice(0,4);
    const businessSelectorLater = (state) => state.business.slice(5,9);
    const businessInit = useSelector(businessSelectorInit);
    const businessLater = useSelector(businessSelectorLater);
  const pendingSelector = (state) => state.pending;


  const pending = useSelector(pendingSelector);



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
          <ImgTextSection sectionOneData={businessInit} sectionTwoData={businessLater}/>
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
