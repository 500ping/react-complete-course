import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const emptyInput = {
    username: "",
    age: "",
  };
  const [enteredInput, setEnteredInput] = useState(emptyInput);

  const enteredInputHandler = (event) => {
    const { name, value } = event.target;

    setEnteredInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (
      enteredInput.username.trim().length === 0 ||
      enteredInput.age.trim().length === 0
    ) {
      console.log("empty");
      return;
    } else if (+enteredInput.age < 1) {
      console.log("-1");
      return;
    }

    props.addUser(enteredInput);
    setEnteredInput(emptyInput);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          onChange={enteredInputHandler}
          value={enteredInput.username}
          type="text"
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          name="age"
          onChange={enteredInputHandler}
          value={enteredInput.age}
          type="number"
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
