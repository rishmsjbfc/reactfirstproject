import ExpenseItem from "./ExpenseItem";
import '../UI/Expenses.css'
import Card from "./Card";
export default function Expenses(props){
    const expenses = props.expenses;
    return (
        <Card className="expenses">
            <ExpenseItem expenseDetails={expenses[0].title} expensePrice={expenses[0].amount} expenseDate={expenses[0].date}></ExpenseItem>
            <ExpenseItem expenseDetails={expenses[1].title} expensePrice={expenses[1].amount} expenseDate={expenses[1].date}></ExpenseItem>
            <ExpenseItem expenseDetails={expenses[2].title} expensePrice={expenses[2].amount} expenseDate={expenses[2].date}></ExpenseItem>
            <ExpenseItem expenseDetails={expenses[3].title} expensePrice={expenses[3].amount} expenseDate={expenses[3].date}></ExpenseItem>
        </Card>
    );
}