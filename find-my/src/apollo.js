import {ApolloClient,InMemoryCache,makeVar} from "@apollo/client";


export const isLoggedInVar=makeVar(false);
//Boolean(localStorage.getItem(TOKEN))
const TOKEN="token";

export const logUserIn=(token)=>{
  localStorage.setItem(TOKEN,token);
  
};

export const logUserOut=()=>{
  localStorage.removeItem(TOKEN);
  window.location.reload();
};

export const client=new ApolloClient({
  uri:"",
  cache:new InMemoryCache(),
});

