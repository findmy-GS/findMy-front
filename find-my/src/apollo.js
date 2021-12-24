import {ApolloClient,InMemoryCache,makeVar,createHttpLink} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
const TOKEN="token";
export const isLoggedInVar=makeVar(Boolean(localStorage.getItem(TOKEN)));
//Boolean(localStorage.getItem(TOKEN))
export const userPosition=makeVar({lat:0.0,lng:0.0});


export const logUserIn=(token)=>{
  localStorage.setItem(TOKEN,token);
  window.location.reload();
};

export const logUserOut=()=>{
  localStorage.removeItem(TOKEN);
  window.location.reload();
};



const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      token: localStorage.getItem(TOKEN),
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

