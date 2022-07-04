import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos';
import SearchPage from './components/SearchPage/SearchPage';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import { Trending } from './pages/Trending/Trending';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<App_Mainpage />} />
          <Route exact path="/search/:searchQuery" element={<Search_Page />} />
          <Route exact path="/video/:videoId" element={<Video_Page />} />
          <Route exact path="/trending" element={<Trendings />} />
        </Routes>
      </Router>
    </div>
  );

  function App_Mainpage() {
    return (
      <>
        <div className='app__mainpage'>
          <SideBar />
          <RecommendedVideos />
        </div>
      </>
    );
  }

  function Search_Page() {
    return (
      <>
        <div className='app__mainpage'>
          <SideBar />
          <SearchPage />
        </div>
      </>
    )
  }

  function Video_Page() {
    return (
      <>
        <div className='app__mainpage'>
          <VideoPlayer />
        </div>
      </>
    )
  }

  function Trendings() {
    return (
      <>
        <div className='app__mainpage'>
          <Trending />
        </div>
      </>
    )
  }
}

export default App;