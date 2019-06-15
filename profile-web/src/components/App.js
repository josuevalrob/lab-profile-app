import React from 'react';
import Home from '../scenes/Home'
import LoginPage from '../scenes/Login'
import SignPage from '../scenes/Sign'
import Navbar from './misc/navbar'

import {Switch, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <header className="">
        <Navbar/>
      </header>
      <div>
        <Switch>
          <Route exact path='/' component={Home }/>        
          <Route exact path='/login' component={LoginPage}/>        
          <Route exact path='/sign' component={SignPage}/>        
        </Switch>
      </div>
    </div>
  );
}

export default App;
