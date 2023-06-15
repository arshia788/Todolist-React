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

    setTodos([...todos, {id:Date.now(), desc:text, check:false}])
  }

  const delHandler=(id)=>{
    const newTodos= todos.filter(item=> item.id !== id)
    setTodos(newTodos)
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
      delHandler={delHandler}
      todos={todos}
      />

    </Layout>
  );
}


export default App;