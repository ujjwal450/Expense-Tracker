import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from '../UI/Card'
const ExpenseItem = (props) => {
  
  return (
    <Card className='expense-item'>
      <div>
        <ExpenseDate date ={props.date}/>
      </div>
      <div className='expense-item__description'>
        <h2>{props.name}</h2>
      </div>
      <div className='expense-item__price'>{props.amount}</div>
    </Card>
  )
}

export default ExpenseItem