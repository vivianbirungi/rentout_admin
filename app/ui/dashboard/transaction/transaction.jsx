import Image from 'next/image'
import styles from './transaction.module.css'
const Transaction = () => {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>Latest Transactions</h2>
        <table className={styles.table}>
            <thead>
                <tr>
                <td>Name</td>
                <td>Status</td>
                <td>Date</td>
                <td>Amount</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    <div className={styles.user}> <Image src="/noavatar.png"
                        alt="" width={40} height={40}  className={styles.userImage}/>
                        John Doe
                        </div>
                    </td>
                    <td><span className={`${styles.pending} ${styles.status}`}>Pending</span></td>
                    <td>14.02.2023</td>
                    <td>$3200</td>
                    
                </tr>
                <tr>
                    <td>
                    <div className={styles.user}> <Image src="/noavatar.png"
                        alt="" width={40} height={40}  className={styles.userImage}/>
                        Little Mary
                        </div>
                    </td>
                    <td><span className={`${styles.done} ${styles.status}`}>Cancelled</span></td>
                    <td>14.02.2023</td>
                    <td>$6200</td>
                    
                </tr>
                <tr>
                    <td>
                       <div className={styles.user}> <Image src="/noavatar.png"
                        alt="" width={40} height={40}  className={styles.userImage}/>
                        TrueCell
                        </div>
                    </td>
                    <td><span className={`${styles.cancelled} ${styles.status}`}>Pending</span></td>
                    <td>14.02.2023</td>
                    <td>$1200</td>
                    
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Transaction
