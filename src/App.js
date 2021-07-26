import React from 'react'
import {useQuery, gql} from '@apollo/client'
import logo from './logo.svg';
import './App.css';

const USER_QUERY = gql`query userQuery { user (id: 5) { id, families { id, name } } }`

const App = () => {

  const {data, loading, error} = useQuery(USER_QUERY)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{data.user}</div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
