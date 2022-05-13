import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  return (
    <div className="expense-date">
      <div className="expense-date__month">
        {props.date.toLocaleString("default", { month: "long" })}
      </div>
      <div className="expense-date__day">
        {props.date.toLocaleString("default", { day: "2-digit" })}
      </div>
      <div className="expense-date__year">{props.date.getFullYear()}</div>
    </div>
  );
}

export default ExpenseDate;
