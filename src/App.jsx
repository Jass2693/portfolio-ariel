
import React from 'react'
import { Footer } from './components/footer/Footer';
import { Header, Navbar } from './components/Header';
import { Main } from './components/main';






export const App = () => {
  
  return (
    <div className='appbody p-4 container'>
      {/* <Navbar/> */}
      <Header/>
      <hr />
      
      <Main className='mt-2'/>

      
      {/* poner cada parte de la app en un componente para que quede mas prolijo */}
      
      <Footer/>
    </div>
  )
}

export default App;
