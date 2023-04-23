import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
function ExpenseItem(props){
    const expenseDetails = props.expenseDetails;
    const expensePrice = props.expensePrice;
    return(
        <Card className="expense-item">
            <ExpenseDate expenseDate={props.expenseDate}/>
            <div className="expense-item__description"><h2>{expenseDetails}</h2></div>
            <div className="expense-item__price"><h2>${expensePrice}</h2></div>
        </Card>
    )
}
export default ExpenseItem;