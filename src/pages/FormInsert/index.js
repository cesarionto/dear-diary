import React from 'react';
import Header from '../../components/Header';
import FormSave from '../../components/FormSave'
// import { Container } from './styles';

function FormInsert() {
  return (
      <div>
          <Header />
          <main className="form-central">
              <FormSave/>
          </main>
      </div>
  );
}

export default FormInsert;