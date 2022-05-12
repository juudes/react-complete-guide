import './ExpenseItem.css';

function ExpenseItem() {
  const expenseDate = new Date();
  const expenseTitle = 'Cat Insurance';
  const expenseAmount = 254.22;

  return (
    <div className='expense-item'>
      <div>{expenseDate.toDateString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;