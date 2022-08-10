import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "xx1",
      title: "Title 1",
      amount: "69.96",
      date: new Date(2022, 8, 9),
    },
    {
      id: "xx2",
      title: "Title 2",
      amount: "69.96",
      date: new Date(2021, 8, 9),
    },
    {
      id: "xx3",
      title: "Title 3",
      amount: "69.96",
      date: new Date(2020, 8, 9),
    },
    {
      id: "xx4",
      title: "Title 4",
      amount: "69.96",
      date: new Date(2019, 8, 9),
    },
  ]);

  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses) => [...[prevExpenses, expense]]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
