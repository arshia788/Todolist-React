import React, { useState } from 'react';

import Layout from './components/Layout';
import Header from './components/Header';
import Lists from './components/Lists';
import InputPart from './components/InputPart';


const App = () => {

  const [text, setText]= useState('');
  const [todos, setTodos]= useState([]);
  const [erros, setErros]= useState('');
  console.log(todos);


  const submitHandler=(e)=>{
    e.preventDefault()
    setText('')

    if(!text.length){
      setErros('fill the input !!!')
      return todos;
    }else{
      setErros('')
    }
    
    if(!todos.find(item=> item.desc === text)){
      setTodos([...todos, {id:Date.now(), desc:text, check:false}])
    
    }else{
      alert('you have this item')
    }
    
  }

  const delHandler=(id)=>{
    const newTodos= todos.filter(item=> item.id !== id)
    setTodos(newTodos)
  }

  const checkHandler=(id)=>{

    const indexI= todos.findIndex(item=> item.id === id)
    console.log(indexI);

    const newTodosCopy= [...todos];

    newTodosCopy[indexI]={
      id:todos[indexI].id,
      desc:todos[indexI].desc,
      check:!todos[indexI].check,
    }
    
    setTodos(newTodosCopy)
    
  }

  return (
    <Layout>
      <Header />

      <InputPart 
      submitHandler={submitHandler}
      text={text}
      change={e=> setText(e.target.value)}
      erros={erros}
      />

      <Lists 
      checkHandler={checkHandler}
      delHandler={delHandler}
      todos={todos}
      />

    </Layout>
  );
}


export default App;