import ExpenseList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import { useState } from 'react';
const Expenses = (props) =>{

  const [selectedYear, setSelectedYear] = useState('2022')
  const changeFilter = (data) => {
    setSelectedYear(data)

  }
  const filteredItems = props.items.filter((item) => item.date.getFullYear().toString() === selectedYear)
  console.log(props.items)
  return (
    <Card className="expenses">
      <ExpensesFilter selected={selectedYear} onChangeFilter={changeFilter}/>
      <ExpenseList items={filteredItems}/>
    </Card>
  );
}

export default Expenses;