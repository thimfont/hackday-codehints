import React from 'react'

import Header from '../../components/Header'
import './styles.css'

function Home() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="main">
          <h1>Hackday o/</h1>
        </div>
      </div>
    </>
  );
}

export default Home;