import React, { useState } from 'react';

import Layout from './components/Layout';
import Header from './components/Header';
import Lists from './components/Lists';
import InputPart from './components/InputPart';


const App = () => {

  const [text, setText]= useState('');
  const [todos, setTodos]= useState([]);

  return (
    <Layout>
      <Header />
      <InputPart />
      <Lists />

    </Layout>
  );
}


export default App;