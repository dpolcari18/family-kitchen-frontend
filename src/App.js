import React from 'react'
import {useQuery, gql} from '@apollo/client'

import NavBar from './components/navBar.js'

const USER_QUERY = gql`query userQuery { user (id: 5) { id, families { id, name } } }`

const App = () => {
  
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
