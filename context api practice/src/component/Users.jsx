import React, { useContext } from "react";
import { UserContext } from "./../context/UserProvider";
import User from "./User";

const Users = () => {
  const { users } = useContext(UserContext);
  return (
    <div>
      <div className="container">
      <h4 className="text-center my-4">Users:</h4>
        <div className="row">
          {users.map((user) => (
            <User user={user} key={user.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
