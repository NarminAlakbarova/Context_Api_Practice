import React from "react";
import Users from "./component/Users";
import UserProvider from "./context/UserProvider";

const App = () => {
  return (
    <UserProvider>
      <Users />
    </UserProvider>
  );
};

export default App;
