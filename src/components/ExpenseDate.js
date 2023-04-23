import './ExpenseDate.css'
export default function ExpenseDate(props){
    const expenseDateMonth = props.expenseDate.toLocaleString('en-US',{month:"long"});
    const expenseDateDay = props.expenseDate.toLocaleString('en-US',{day:'2-digit'});
    const expenseDateYear = props.expenseDate.getFullYear();
    return(
        <div className="expense-date">
            <div className="expense-date__month">{expenseDateMonth}</div>
            <div className="expense-date__year">{expenseDateYear}</div>
            <div className="expense-date__day">{expenseDateDay}</div>
        </div>
    );
}