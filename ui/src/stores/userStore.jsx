import { createContext, useContext, useState } from "react";

// 1. Create the context
const UserContext = createContext();

export const UserProvider = ({ children, username }) => {
  const [currentUser, setCurrentUser] = useState(username);

  //   const handleUpdateUser = (user) => {
  //     setCurrentUser(user);
  //   };

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
// Save as UserContext.jsx in a separate 'context' folder
