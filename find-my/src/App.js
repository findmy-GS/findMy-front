import React,{useState} from "react";
import {HashRouter as Router,Route,Switch} from "react-router-dom";
import routes from './routes';

function App(){
  return (
    <Router>
      <Switch>
        <Route path={routes.home} exact>
          {isLoggedIn? <Home/> : <Login />}
        </Route>
        {!isLoggedIn? (
        <Route path={routes.signUp}>
          <SignUp />
        </Route>)
        :null}
         <Route>
            <NotFound />
          </Route>
      </Switch>
    </Router>
  );
}


export default App;