import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

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

  return (
    <div>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <Card className="expenses">{expenseElements}</Card>
    </div>
  );
};

export default Expenses;
