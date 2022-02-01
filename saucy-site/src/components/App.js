import React, { useState, useEffect } from 'react';
import SauceList from './SauceList'
import Header from './Header'
import Footer from './Footer'
import '../App.css'

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
  return (
    <div className="App">
      <Header/>
      <SauceList sauces={sauces}/>
      <Footer/>
    </div>
  );
}

export default App;
