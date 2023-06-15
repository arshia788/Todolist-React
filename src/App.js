import React, { useState } from 'react';

import Layout from './components/Layout';
import Header from './components/Header';
import Lists from './components/Lists';
import InputPart from './components/InputPart';


const App = () => {

  const [text, setText]= useState('');
  const [todos, setTodos]= useState([]);
  console.log(todos);

  const submitHandler=(e)=>{
    e.preventDefault()

    setTodos([...todos, {desc:text}])

  }

  return (
    <Layout>
      <Header />
      
      <InputPart 
      submitHandler={submitHandler}
      text={text}
      change={e=> setText(e.target.value)}
      />

      <Lists 
      todos={todos}
      />

    </Layout>
  );
}


export default App;