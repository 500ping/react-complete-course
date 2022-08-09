import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const expenseElements = props.items.map((item, index) => {
    return (
      <ExpenseItem
        key={index}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    );
  });

  return <Card className="expenses">{expenseElements}</Card>;
}

export default Expenses;
