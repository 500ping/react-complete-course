import React from "react";

import Card from "../UI/Card";
import styles from "./UsersList.module.css";

const UserList = (props) => {
  const usersComponents = props.items.map((user) => {
    return (
      <li>
        {user.username} ({user.age} years old)
      </li>
    );
  });

  return (
    <Card className={styles.users}>
      <ul>{usersComponents}</ul>
    </Card>
  );
};

export default UserList;
