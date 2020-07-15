import React from 'react';
import ListSecret from '../../components/ListSecrets'
import FormSave from '../../components/FormSave';
import Header from '../../components/Header'

function Home(props) {
  return (
    <div>
      <Header/>
      {/* <div className="row">
        <div className="col-md-6">
          <h1 className="container">Inserir Segredos</h1>
          <FormSave/>
        </div>
        <div className="col-md-6">
          <h1 className="container">Caderno de Segredos</h1>
          <br/>
          <ListSecret/>
        </div>
      </div> */}
      <ListSecret/>
    </div>
  )
}

export default Home;