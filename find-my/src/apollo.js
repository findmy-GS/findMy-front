import {ApolloClient,InMemoryCache,makeVar} from "@apollo/client";
const TOKEN="token";
export const isLoggedInVar=makeVar(Boolean(localStorage.getItem(TOKEN)));
export const userPosition=makeVar({lat:0.0,lng:0.0});


export const logUserIn=(token)=>{
  localStorage.setItem(TOKEN,token);
  window.location.reload();
};

export const logUserOut=()=>{
  localStorage.removeItem(TOKEN);
  window.location.reload();
};




export const client=new ApolloClient({
  uri:"http://13.209.7.118:4000/",
  cache:new InMemoryCache(),
});

