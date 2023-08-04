import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();
const BASE_URL = "http://localhost:8000/users";

const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const handleGetAllUsers = async () => {
    const resp = await axios(BASE_URL);
    const data = resp.data;
    setUsers(data);
  };
  useEffect(() => {
    handleGetAllUsers();
  }, []);
  const handleDelete = async (userID) => {
    await axios.delete(`${BASE_URL}/${userID}`);
    const filteredUsers = users.filter((user) => user.id !== userID);
    setUsers(filteredUsers);
  };
  const providerValue = {
    users,
    setUsers,
    handleDelete
  };
  return (
    <UserContext.Provider value={providerValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
