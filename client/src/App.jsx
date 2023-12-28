import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BottomBar from './components/BottomBar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <div className='fixed bottom-0 inline xs:hidden w-full p-2 border py-3 z-50 bg-white'>
      <BottomBar/>
      </div>
    </Router>
  )
}

export default App