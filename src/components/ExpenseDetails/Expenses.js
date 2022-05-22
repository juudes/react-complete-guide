import React, { useState } from "react";

import Card from "../SharedUI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const onYearSelectedHandler = (year) => {
    setSelectedYear(year);
    console.log("expenses js");
    console.log(year);
    // props.onYearSelected(year);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onYearSelected={onYearSelectedHandler}
      />
      {filteredExpenses.length === 0 ? (
        <p>No Expenses Found.</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </Card>
  );
};

export default Expenses;
