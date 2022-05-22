import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'
const NewExpense = (props) => {
  const [showForm, setShowForm] =useState(false)
  const showFormHandler = () => {
    setShowForm((prevState) => {
      return !prevState
    })
  }
  const saveExpenseDataHandler = (data) => {
    props.onAddExpense({
      ...data,
      id: Math.random().toString()
    })
  }

  return (
    <div className='new-expense'>
      {showForm ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} closeForm={showFormHandler}/>:
      <button onClick={showFormHandler}>Add New Expenses</button>
      }

      
    </div>
  )
}

export default NewExpense