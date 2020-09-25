import React,{useEffect,useState} from 'react';
import SmallTalk from './components/smallTalkComponent/smallTalk';
import ImgText from './components/imgTextComponent/imgText';
import newsPicture from './IMG/IMG-20190303-WA0082.jpg';
import {useDispatch,useSelector} from 'react-redux';
import './App.css';
import NavigationBar from './components/navigation';
import BigPictureSection from "./components/bigPictureSection";
import SmallImageSection from "./components/smallImageSection";
import ImgTextSection from "./components/imgTextSection";
import {breakingNewsAction,breakingSportNews,breakingHealthNews,breakingBusinessNews,breakingEntertainmentNews,breakingTechNews,breakingAnimeNews} from './actions/loadAllNews';


function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(breakingSportNews());
  //   dispatch(breakingBusinessNews());
  //   dispatch(breakingEntertainmentNews());
  //   dispatch(breakingTechNews());
  //   dispatch(breakingHealthNews());
  //   dispatch(breakingAnimeNews());
  //   dispatch(breakingNewsAction());
  // },[]);

  // const businessSelectorInit = (state) => state.business.slice(0,4);
  //   const businessSelectorLater = (state) => state.business.slice(5,9);
  //   const businessInit = useSelector(businessSelectorInit);
  //   const businessLater = useSelector(businessSelectorLater);
  // const pendingSelector = (state) => state.pending;


  // const pending = useSelector(pendingSelector);



  // if(pending === false){
  //   return (
  //     <div>
  //   {console.log("yay")}
  //         <header>
  //         <NavigationBar/>
  //       </header>
  //       <main>
  //          <BigPictureSection/>
  //         <SmallImageSection/>
  //         <ImgTextSection sectionOneData={businessInit} sectionTwoData={businessLater}/>
  //       </main>
  //       </div>
  //   )
  // }

  const mock ="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla est tellus, sagittis sit amet augue in, mollis posuere leo. Mauris in consectetur ex. Ut cursus libero turpis, at congue sem tincidunt porta. Praesent vitae nulla sed ante molestie consequat ut eget eros. Vivamus ante lectus, aliquet a enim ut, pulvinar tempus elit. Aliquam vel magna in dui dictum suscipit.";
  
    return (
      <div>
      <h1>loading</h1>
      <SmallTalk source="The punch" newsTitle={mock}/>
      <ImgText source="The punch" newsTitle={mock} img={newsPicture}/>
      </div>
  );
  
  
  
}

export default App;
