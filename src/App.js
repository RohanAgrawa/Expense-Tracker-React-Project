import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
//import { ReactDOM } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
function App() {

  const DUMMY_EXPENSE = [
    {
      id: 'e1',
      amount: 290,
      title: 'Toilet paper',
      date: new Date(2021, 0, 15),
    },
    {
      id: 'e2',
      amount: 150,
      title: 'Grocery',
      date: new Date(2022, 10, 30),
    },
    {
      id: 'e3',
      amount: 15,
      title: 'Electricity Bill',
      date: new Date(2021, 6, 15),
    },
    {
      id: 'e4',
      amount: 298,
      title: 'Car Insurance',
      date: new Date(2020, 8, 25),
    },
  ];

  const [expense, setExpense] = useState(DUMMY_EXPENSE);


  const addExpenseHandler = (newExpenseData) => {
    //console.log(newExpenseData);

    setExpense((previousExpenses) => {
      return [newExpenseData, ...previousExpenses];
    });
  };
  return (
    <div>
      <div>
        <NewExpense onAddExpense = {addExpenseHandler} />
        <Expenses expenses = {expense}></Expenses>
      </div>
    </div>
  );
}

export default App;
