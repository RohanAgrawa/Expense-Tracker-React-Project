import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';
import React from "react";

function ExpensesList(props)
{
   
    if (props.item.length === 0)
    {
        return <h2 className="expenses-list__fallback"> No Elements present for the selected Year. </h2>    
    }
    
    
    return (
        <ul className="expenses-list">
            {props.item.map((expseseData) => 
                <ExpenseItem key={expseseData.id} title={expseseData.title} amount={expseseData.amount} date={expseseData.date} />
            )}     
        </ul>
    )
}

export default ExpensesList;