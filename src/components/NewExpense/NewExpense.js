import React, {useState} from 'react';
import ExpenseFrom from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props)
{

    const saveDataHandler = (expense) => {
        const savedData = {
            id: Math.random().toString(),
            ...expense           
        };
        //console.log( savedData);
        props.onAddExpense(savedData);
        setEditing(false);
    };

    const [isEditing, setEditing] = useState(false);

    const clickHandler = () => {
        setEditing(true);
    }

    const cancelHandler = () => {
        setEditing(false);
    }
    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={clickHandler}>Add New Expense</button>}
            {isEditing && <ExpenseFrom onSaveData={saveDataHandler} onCancel={cancelHandler} />}
        </div>
    );
}

export default NewExpense;