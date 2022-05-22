import {useState} from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value)
  }
  const amountChangeHandler = (e)=> {
    setEnteredAmount(e.target.value)
  }
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value)
  }
  const submitHandler = (e) => {

    e.preventDefault()
    const expense = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    props.onSaveExpenseData(expense)
    setEnteredAmount('')
    setEnteredDate('')
    setEnteredTitle('')
  }
  return(
    <form onSubmit={submitHandler}>
    <div className='new-expense__controls'>
      <div className='new-expense__control'>
        <label htmlFor="">Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
      </div>
      <div className='new-expense__control'>
        <label htmlFor="">Amount</label>
        <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}/>
      </div>
      <div className='new-expense__control'>
        <label htmlFor="">Date</label>
        <input type="date" min="2022-01-01" max="2024-12-31" value={enteredDate }onChange={dateChangeHandler}/>
      </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit" onClick={props.closeForm}>Close</button>
        <button type="submit">Add Expense</button>
      </div>
      
    
    </form>
  )
}

export default ExpenseForm