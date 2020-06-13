import React from 'react';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'

import Name from './components/Name'
import Cricketer from './components/Cricketer'
import Indiancolor from './components/ndiancolor'
//import Summary from './components/summary'

function App() {
  return (
  
      <BrowserRouter>
      <div>
      <h1>Welcome To Trivia App</h1>
      <Link to="/"></Link>
      <Link to="/cricketer"></Link>
      <Link to="/indiancolor"></Link>
    

      
      
      <Switch>
      <Route path="/" component={Name} exact={true}/>
      <Route path ="/cricketer" component={Cricketer} exact={true}/>
      <Route path="/indiancolor" component={Indiancolor} exact={true}/>
      
      </Switch>
      </div>
      </BrowserRouter>
      
    
  );
}

export default App;
