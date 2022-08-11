import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([
    {
      username: "test 1",
      age: "18",
    },
    {
      username: "test 2",
      age: "18",
    },
    {
      username: "test 3",
      age: "18",
    },
  ]);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <div>
      <AddUser addUser={addUserHandler} />
      <UserList items={users} />
    </div>
  );
}

export default App;
