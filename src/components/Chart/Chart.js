import ChartBar from './ChartBar';
import React from 'react';
import './Chart.css'

function Chart(props) {

    const expenseAmount = props.dataPoints.map(dataPointt => dataPointt.value);

    const maxAmount = Math.max(...expenseAmount);

    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => 
                <ChartBar key={dataPoint.label} maxValue={maxAmount} value={dataPoint.value} label={dataPoint.label}/>
            )}
        </div>
    )
}

export default Chart;