import React from 'react';
import ListSecret from '../../components/ListSecrets'
import Header from '../../components/Header'

function Home(props) {
  return (
    <div>
      <Header/>
      <ListSecret/>
    </div>
  )
}

export default Home;