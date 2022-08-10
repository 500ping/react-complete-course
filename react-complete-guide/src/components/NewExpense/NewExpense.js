import React, { useState } from "react";
import { nanoid } from "nanoid";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (data) => {
    const expenseData = {
      ...data,
      id: nanoid(),
      date: new Date(data.date),
    };

    props.onAddExpense(expenseData);
    stopEditingHandler();
  };

  const stopEditingHandler = () => {
    setIsEditing((prevValue) => !prevValue);
  };

  return (
    <div className="new-expense">
      {!isEditing ? (
        <button onClick={stopEditingHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
