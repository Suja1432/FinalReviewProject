import React,{createContext} from 'react';
import Genre from './Genre';

export const UserContext = React.createContext();

export default function App() {
  return (
    <UserContext.Provider value="Genre">
      <Genre/>
    </UserContext.Provider>
  )
}


