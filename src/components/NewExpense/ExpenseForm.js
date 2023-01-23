import { useState } from 'react'
import './ExpenseForm.css'

function ExpenseForm(props)
{
    const [isTitleValid, setValidTitle] = useState(true);
    const [isAmountValid, setValidAmount] = useState(true);
    const [isDateValid, setValidDate] = useState(true);
    
    const [enteredTitle, setEnteredTitle] = useState('');

    const titleChangeHandler = (event) => {
        setValidTitle(true);
        setEnteredTitle(event.target.value);
    };

    const [enteredAmount, setEnteredAmount] = useState('');

    const amountChangeHandler = (event) => {
        setValidAmount(true);
        setEnteredAmount(event.target.value);
    };

    const [enteredDate, setEnteredDate] = useState('');

    const dateChangeHandler = (event) => {
        setValidDate(true);
        setEnteredDate(event.target.value);
    };

    

    const formSubmitHandler = (event) => {
        
        event.preventDefault();
       

        if (enteredAmount.trim().length === 0 || enteredTitle.trim().length === 0 || enteredDate.toString().trim().length === 0)
        {
            if (enteredAmount.trim().length === 0)
            {
                setValidAmount(false);
            }
            if (enteredTitle.trim().length === 0)
            {
                setValidTitle(false);
            }
            if (enteredDate.toString().trim().length === 0)
            {
                setValidDate(false);
            }
            return;
        }

        const ExpenseData = {
            
            amount: +enteredAmount,
            title: enteredTitle,
            date: new Date(enteredDate)
        };
        
        props.onSaveData(ExpenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className='new-expense__controls'>
                <div className={`new-expense__control ${!isTitleValid ? 'invalid' : ''}`}>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className= {`new-expense__control ${!isAmountValid ? 'invalid' : ''}`}>
                    <label >Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}></input>
                </div>
                <div className={`new-expense__control ${!isDateValid ? 'invalid' : ''}`}>
                    <label >Date</label>
                    <input type='date' min="2019-01-01" max="2023-12-31" value={enteredDate} onChange={dateChangeHandler}></input>
                </div>
            </div>

            <div className='new-expense__actions'>
                <button onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
   
        </form>
    );
}

export default ExpenseForm;