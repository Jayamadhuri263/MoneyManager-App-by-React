import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <div className="containers">
      <div className="balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="balance-image"
        />
        <div className="balance-description">
          <p>Your Balance</p>
          <p testid="balanceAmount">Rs {balanceAmount}</p>
        </div>
      </div>
      <div className="balance-container income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="balance-image"
        />
        <div className="balance-description">
          <p>Your Income</p>
          <p testid="incomeAmount">Rs {incomeAmount}</p>
        </div>
      </div>
      <div className="balance-container expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="balance-image"
        />
        <div className="balance-description">
          <p>Your Expenses</p>
          <p testid="expensesAmount">Rs {expensesAmount}</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
