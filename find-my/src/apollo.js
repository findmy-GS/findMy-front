import {ApolloClient,InMemoryCache,makeVar} from "@apollo/client";


export const isLoggedInVar=makeVar(true);
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
  uri:"http://13.209.7.118:4000/",
  cache:new InMemoryCache(),
});

