import React from 'react';
import ListSecret from '../../components/ListSecrets'
import FormSave from '../../components/FormSave';

function Home(props) {
  return (
    <div>
      <FormSave/>
      <hr/>
      <ListSecret/>
    </div>
  )
}

export default Home;