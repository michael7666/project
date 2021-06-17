import React from "react";

import Home from "./pages/Home";
import Nav from "./component/Nav";
import GlobalStyle from "./component/GlobalStyle";
import {Route} from "react-router-dom"

function App() {



  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <Route path={['/game/:id', '/']}>
          <Home/>
      </Route>
     
    </div>
  );
}

export default App;
