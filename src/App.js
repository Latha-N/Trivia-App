import React from 'react';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import './App.css'

import Name from '../src/components/Name'
import Cricketer from '../src/components/Cricketer'
import Indiancolor from './components/Indiancolor'
import Summary from '../src/components/summary'

function App() {
  return (
  
      <BrowserRouter>
      <div >
      <h1>Trivia App</h1>
      <Link to="/"></Link>
      <Link to="/cricketer"></Link>
      <Link to="/indiancolor"></Link>
    

      
      
      <Switch>
      <Route path="/" component={Name} exact={true}/>
      <Route path ="/cricketer" component={Cricketer} exact={true}/>
      <Route path="/indiancolor" component={Indiancolor} exact={true}/>
      <Route path="/summary" component={Summary} exact={true}/>
      
      </Switch>
      </div>
      </BrowserRouter>
      
    
  );
}

export default App;