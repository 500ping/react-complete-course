import React from "react";

import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      title: "Title 1",
      amount: "69.96",
      date: new Date(2022, 8, 9),
    },
    {
      title: "Title 2",
      amount: "69.96",
      date: new Date(2022, 8, 9),
    },
    {
      title: "Title 3",
      amount: "69.96",
      date: new Date(2022, 8, 9),
    },
    {
      title: "Title 4",
      amount: "69.96",
      date: new Date(2022, 8, 9),
    },
  ];

  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
