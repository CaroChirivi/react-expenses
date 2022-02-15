import React, {useState} from "react";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import './Expenses.css'
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {

    const [yearSelected, setYearSelected] = useState('2020');
    
    const filterChangeHandler = (yearSelected) => {
        setYearSelected(yearSelected)
    }

    const expensesFiltered = props.expenses.filter( expense => expense.date.getFullYear().toString() === yearSelected)
        
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={yearSelected} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={expensesFiltered}/>
                <ExpensesList items={expensesFiltered}/>
            </Card>
        </div>
    )
}

export default Expenses