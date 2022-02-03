import React, { useState, useEffect } from 'react';
import SauceList from './SauceList'
import SauceDetail from './SauceDetail';
import Header from './Header'
import Footer from './Footer'
import NewSauceForm from './NewSauceForm';
import '../App.css'
//importing Routes and Route components from react-router-dom
import { Route, Routes } from 'react-router-dom';

function App() {
  //name of the state,
  //function that sets state,
  //default value of the state as an argument to useState
  const [sauces, setSauces]=useState([])

  //function to fetch sauces and store in state
  async function fetchSauces(){
    try{
        const response = await fetch('http://localhost:3000/sauces', {
          method: 'GET'
        });
        const responseJSON = await response.json()
        //updates state with sauce list
        setSauces(responseJSON)
    } catch(err) {
      console.log(err)
    }
  }

  //upon initial render, run the fetchSauces() function
  useEffect(() => {
    fetchSauces()
  }, [])

  //render a list of all sauces, using data from state

  //Routes contains all Route components
  //Each Route has a path (url) and element (component to render)
  return (
    <div className="App">
      <Header sauces={sauces}/>

        <Routes>
          <Route path='/' element={<SauceList sauces={sauces}/>}/>
          <Route path='/sauces' element={<SauceList sauces={sauces}/>}/>
          <Route path='/sauces/:id' element={<SauceDetail/>}/>
          <Route path='/new' element={<NewSauceForm/>}/>
        </Routes>

      <Footer test={"test"}/>
    </div>
  );
}

export default App;
