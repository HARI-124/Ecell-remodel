import React from 'react'
import { About,Footer,Header,Navbar,Results,Review,Work } from './components'
import "./app.css";

const App = () => {
  return (
    <div>
    <Navbar/>
    <Header/>
    <About/>
    <Work/>
    <Results/>
    <Review/>
    <Footer/>


    </div>
  )
}

export default App