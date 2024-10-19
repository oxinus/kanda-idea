import React from 'react';
import Header from './Header/Header'
import './home.css'
import Main from './Main/Main';

const Home = () => {
  return (
    <div className='home'>
        <Header />
        <Main />
    </div>
  )
}

export default Home