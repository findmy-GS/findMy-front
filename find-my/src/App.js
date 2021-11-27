import {ApolloProvider, useReactiveVar} from "@apollo/client";
import {isLoggedInVar,client} from './apollo';
import React,{useState} from "react";
import {HashRouter as Router,Route,Switch} from "react-router-dom";
import routes from './routes';
import { GlobalStyles } from "./styles";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import SignUp from "./screens/SignUp";
import Login from "./screens/Login";
import FindId from "./screens/FindId";
import FindPassword from "./screens/FindPassword";

function App(){
  const isLoggedIn=useReactiveVar(isLoggedInVar);
  return (
    <ApolloProvider client={client}>
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
         {!isLoggedIn? (
        <Route path={routes.findPassword}>
          <FindPassword />
        </Route>)
        :null}
         {!isLoggedIn? (
        <Route path={routes.findId}>
          <FindId />
        </Route>)
        :null}
         <Route>
            <NotFound/>
          </Route>
      </Switch>
    </Router>
    </ApolloProvider>
  );
}


export default App;