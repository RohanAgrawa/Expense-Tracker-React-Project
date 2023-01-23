import ExpensesList from "./ExpensesList";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, {useState} from "react";
import ExpenseChart from "./ExpenseChart";

function Expenses(props)
{
    const Expense = props.expenses;

    const [filteredYear, setFilteredYear] = useState('2020');

    const filteredYearHandler = selectedYear => {
      
        setFilteredYear(selectedYear);
        
    }
    
    // filtering the value based on year

    const filteredExpenses = Expense.filter(expense => { 
        return expense.date.getFullYear().toString() === filteredYear;
    });

    
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onSelectYear={filteredYearHandler} />
            <ExpenseChart expensesData = {filteredExpenses}/>
            <ExpensesList item= {filteredExpenses} />
        </Card> 
    );
}

export default Expenses;