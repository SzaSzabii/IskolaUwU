import './App.css';
import React, { useState } from 'react';
import {Routes,Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Counter} from './components/Counter'
import {Login} from './components/Login'
import {Todo} from './components/Todo'
import {Home} from './components/Home'
import {MyNavBar} from './components/MyNavBar'
import {Products} from './components/Products'
import {Product} from './components/Product'

function App() {
  const [isLoggedIn,setIsLoggedIn] =useState(false)
  return (
    <div className="container">
      <MyNavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='counter' element={<Counter />}/>
        <Route path='login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='todo' element={<Todo setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='products' element={<Products />}/>
        <Route path='products/:id' element={<Product />}/>

      </Routes>
      {/*<Counter />
      {!isLoggedIn && <Login setIsLoggedIn={setIsLoggedIn}/>}
      {isLoggedIn && <Todo setIsLoggedIn={setIsLoggedIn}/>}*/}
    </div>
  );
}

export default App;
