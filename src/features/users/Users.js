import React from "react";
import { useSelector} from "react-redux";
function Users() {
  const users = useSelector((state) => state.users)
  return (
    <div>
      <ul>
        Users!
        {
        users.map((user)=> user.username)
        }
      </ul>
      <div>Total Users: {users.length}</div>
    </div>
  );
}

export default Users;
