import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const emptyExpense = {
    title: "",
    amount: "",
    date: "",
  };
  const [userInput, setUserInput] = useState(emptyExpense);

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setUserInput((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    props.onSaveExpenseData(userInput);
    setUserInput(emptyExpense);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={userInput.title}
            placeholder="Expense Title"
            onChange={inputHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={userInput.amount}
            onChange={inputHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            value={userInput.date}
            onChange={inputHandler}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
