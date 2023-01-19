import PropTypes from 'prop-types';
import styles from "./transaction.module.css"

const TransactionHistory = ({ items }) => { 

    const data = items.map(item => 
        <tr key={item.id} className={styles.row}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
        </tr>
    )

    return (
    <table className={styles.transaction_history}>
  <thead>
    <tr>
      <th className={styles.th}>Type</th>
      <th className={styles.th}>Amount</th>
      <th className={styles.th}>Currency</th>
    </tr>
  </thead>

  <tbody>
    { data }
  </tbody>
</table>
)
}

export default TransactionHistory;

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
    }))
}


