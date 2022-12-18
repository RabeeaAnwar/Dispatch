import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css';
import { Home } from '../src/Components/Home/Home';
import { Collections } from '../src/Components/Collections/Collections';
import { Activity } from '../src/Components/Activity/Activity';
import { SideBar } from '../src/Components/SideBar/SideBar'

function App() {




  useEffect(() => {
    if (localStorage.getItem("collectionArray") === null) 
    { 
      localStorage.setItem("collectionArray", JSON.stringify([]));
   }
  },[])


  return (
    <>
      <h1>{`dis{patch...}`}</h1>
      <SideBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Activity' element={<Activity />} />
        <Route path='Collections' element={<Collections />} />
        
      </Routes>
    </>
  );
}

export default App;
