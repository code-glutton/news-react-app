import React,{useEffect,useState} from 'react';
import Home from './components/home/home';
// import {useDispatch,useSelector} from 'react-redux';
import './App.css';
import NavigationBar from './components/navigation';
import Article from './components/article/article';
import {Route} from 'react-router-dom';
// import BigPictureSection from "./components/bigPictureSection";
// import SmallImageSection from "./components/smallImageSection";
// import ImgTextSection from "./components/imgTextSection";
// import {breakingNewsAction,breakingSportNews,breakingHealthNews,breakingBusinessNews,breakingEntertainmentNews,breakingTechNews,breakingAnimeNews} from './actions/loadAllNews';


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
  const [data,setData]=useState(null);
  const [img,setImg]=useState(null);
  const setArticle = (data,img) => {
    setImg(img);
    setData(data);
  }
  
    return (
      <div>
      <header>
          <NavigationBar/>
      </header>
      <Route exact path='/' render={() => (<Home articleData={setArticle}/>)}/>
      <Route exact path='/article' render={() => (<Article dataArt={data} imgArt={img}/>)}/>
      </div>
  );
  
  
  
}

export default App;
