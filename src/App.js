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
      <div>
        <div className="author-box">
        <nav className="navbar navbar-expand-lg navbar-red bg-red">
                <a classclassName="navbar-brand" href="#"><img src="data:image/png;base64,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" 
                width="60" height="60" className="d-inline-block align-top" alt=""/>  
                </a><p className="text-left">Trivia App</p>
        </nav>
        </div>


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