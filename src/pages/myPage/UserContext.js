import React, { createContext, useContext, useState } from 'react';

const initialState = {
  user: "",
  setUser : () => {}
}

const UserContext = createContext(initialState);


const UserProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const value = { 
    user : user,
    setUser : setUser
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider}

