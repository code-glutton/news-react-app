import React,{useEffect,useState} from 'react';
import Home from './components/home/home';
import Sports from './components/NavItems/sports/sports';
import Politics from './components/NavItems/politics/politics';
import Entertainment from './components/NavItems/entertainment/entertainment';
import Business from './components/NavItems/business/business';
import Health from './components/NavItems/health/health';
import {useDispatch,useSelector} from 'react-redux';
import './App.css';
import NavigationBar from './components/navigation';
import Article from './components/article/article';
import {Route} from 'react-router-dom';
import {breakingNewsAction,breakingSportNews,breakingHealthNews,breakingBusinessNews,breakingEntertainmentNews} from './actions/loadAllNews';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(breakingSportNews());
    dispatch(breakingBusinessNews());
    dispatch(breakingEntertainmentNews());
    dispatch(breakingHealthNews());
    dispatch(breakingNewsAction());
  },[]);

  // const businessSelectorInit = (state) => state.business.slice(0,4);
  //   const businessSelectorLater = (state) => state.business.slice(5,9);
  //   const businessInit = useSelector(businessSelectorInit);
  //   const businessLater = useSelector(businessSelectorLater);
  const pendingSelector = (state) => state.pending;
  const pending = useSelector(pendingSelector);
  
  const [data,setData]=useState(null);
  const [img,setImg]=useState(null);
  const setArticle = (data,img) => {
    setImg(img);
    setData(data);
  }


  if(pending === false){
    return (
      <div>
      <header>
          <NavigationBar/>
      </header>
      <Route exact path='/' render={() => (<Home articleData={setArticle}/>)}/>
      <Route exact path='/article' render={() => (<Article dataArt={data} imgArt={img}/>)}/>
      <Route exact path='/sports' render={() => (<Sports articleData={setArticle}/>)}/>
      <Route exact path='/politics' render={() => (<Politics articleData={setArticle}/>)}/>
      <Route exact path='/entertainment' render={() => (<Entertainment articleData={setArticle}/>)}/>
      <Route exact path='/business' render={() => (<Business articleData={setArticle}/>)}/>
      <Route exact path='/health' render={() => (<Health articleData={setArticle}/>)}/>
      </div>
  );
  }

  
  return(
    <div>
      <h1>Loading</h1>
    </div>
  )
}

export default App;
