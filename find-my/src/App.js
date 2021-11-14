import {useReactiveVar} from "@apollo/client";
import {isLoggedInVar} from './apollo';
import React,{useState} from "react";
import {HashRouter as Router,Route,Switch} from "react-router-dom";
import routes from './routes';
import { GlobalStyles } from "./styles";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";


function App(){
  const isLoggedIn=useReactiveVar(isLoggedInVar);
  return (
    
    <Router>
      <GlobalStyles />
      <Switch>
        <Route path={routes.home} exact>
          {isLoggedIn? <Home/> : <Login/>}
        </Route>
        {!isLoggedIn? (
        <Route path={routes.signUp}>
          <SignUp />
        </Route>)
        :null}
         <Route>
            <NotFound/>
          </Route>
      </Switch>
    </Router>
  );
}


export default App;