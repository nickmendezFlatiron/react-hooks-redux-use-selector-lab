import React from "react";
// add any needed imports here
import { useSelector } from "react-redux";
import usersReducer from "./usersSlice";

function Users() {
  const users = useSelector(state => state.users)
  const userCount = useSelector(state => state.users).length
  return (
    <div>
      <ul>
        Users!
        {users.map(user => <li key={user.username}>{user.username}</li>)}
        Total Users: {userCount}
      </ul>
    </div>
  );
}

export default Users;
