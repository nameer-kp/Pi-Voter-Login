import React from 'react'
import Login from './components/Login/Login'
import Voter from './components/voter/Voter'
import Candidates from './components/Candidates/Candidates';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ElectionTable from './components/ElectionTable/ElectionTable';

function App() {
  return (
    <>
    
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login/>}/>
        <Route path="/Election" exact element={<ElectionTable/>}/>
        <Route path="/Voter" exact element={<Voter/>}/>
        <Route path="/Candidates" exact element={<Candidates/>}/>
      </Routes>
      </BrowserRouter>

      
     
      


    </>
  )
}

export default App





