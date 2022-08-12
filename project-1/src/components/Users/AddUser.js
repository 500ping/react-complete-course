import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const emptyInput = {
    username: "",
    age: "",
  };
  const [enteredInput, setEnteredInput] = useState(emptyInput);
  const [error, setError] = useState();

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
      setError({
        title: "Invalid input!",
        message: "Please enter a valid name and age.",
      });
      return;
    } else if (+enteredInput.age < 1) {
      setError({
        title: "Invalid age!",
        message: "Age cannot smaller than 1.",
      });
      return;
    }

    props.addUser(enteredInput);
    setEnteredInput(emptyInput);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onClick={errorHandler} />}
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
    </div>
  );
};

export default AddUser;
