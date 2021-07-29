import React from 'react'
import {useQuery, gql} from '@apollo/client'
import logo from './logo.svg';
import './App.css';

const USER_QUERY = gql`query userQuery { user (id: 5) { id, families { id, name } } }`

const App = () => {
  
  return (
    <div className="App">
    </div>
  );
}

export default App;
