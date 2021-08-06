import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Switch } from "react-router-dom";
import {useQuery, gql} from '@apollo/client'

import NavBar from './components/navBar'
import Loading from './components/loading'
import Home from './components/home'
import Profile from './components/profile'

import 'bootstrap/dist/css/bootstrap.min.css';

const USER_QUERY = gql`query userQuery { user (id: 5) { id, families { id, name } } }`

const App = () => {
  const { isLoading, 
          error 
        } = useAuth0()

  if (isLoading) {
    return <Loading />
  } 
  
  if (error) {
    return <div>Sorry there was an error. {error.message}</div>
  }

  return (
    <div className="App">
      <NavBar />   
      <div>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/profile' component={Profile}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
