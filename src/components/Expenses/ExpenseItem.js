import './ExpenseItem.css';
import React, {useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter';

function ExpenseItem(props)
{
    const expenseDate = props.date;
    const expenseTitle = props.title;
    const expensePrice = props.amount;

    const [title, setTitle] = useState(expenseTitle); // use state is used to update value when any event is happen

    const clickHandler = () =>
    {
        setTitle('updated');
    }
    
    return (
        <li>
            <Card className="expense-item">
            
                <ExpenseDate date = {expenseDate}></ExpenseDate>
                <div className = "expense-item__description">
                    <h2>{title}</h2>
                <div className = "expense-item__price">
                    <h2>${expensePrice}</h2> </div>
                
                    <button onClick={clickHandler} >Change Title</button>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;