import React, { useContext } from "react";
import { UserContext } from "../context/UserProvider";

const User = ({ user }) => {
  const { handleDelete } = useContext(UserContext);
  return (
    <>
      <div className="col-xl-4 my-3">
        <div className="card d-flex flex-column justify-content-center align-items-center p-4">
          <h5>{user.name}</h5>
          <p>{user.usertype}</p>
          <button
            className="btn btn-danger my-1"
            onClick={() => handleDelete(user.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default User;
