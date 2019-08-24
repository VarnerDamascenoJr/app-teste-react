import React from 'react';
import { Router, Route, Link} from 'react-router';
import Header from './Header';
import Registro from './Registro';


function App() {
  return (
    <div className="App">
       <Header />
       <Router>
         <Route path='/'/>
         <Router path='/registro' component={Registro} />
       </Router>
       
    </div>
  );
}

export default App;
