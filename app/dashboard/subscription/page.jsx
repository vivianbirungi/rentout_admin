import Image from 'next/image';
import Link from 'next/link';
import Pagination from '../../ui/dashboard/pagination/pagination';
import Search from '../../ui/dashboard/search/search';
import styles from '../../ui/dashboard/users/users.module.css';
import { MdDelete, MdRemoveRedEye } from 'react-icons/md';

const SubscriptionPage = () => {
  return (
    <div className={styles.container}>
    <div className={styles.top}>
      <Search placeholder="Search for a subscription..." />
      <Link href="/dashboard/users/add">
        <button className={styles.addButton}>Add New</button>
      </Link>
    </div>
    <table className={styles.table}>
      <thead>
        <tr>
          <td >Name</td>
          <td className='hidden'>Email</td>
          <td className='hidden'>Created At</td>
          <td className='hidden'>Role</td>
          <td className='hidden'>Status</td>
          <td >Action</td>
        </tr>
      </thead>
      <tbody>
      <tr>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  John Doe
                </div>
              </td>
              <td className='hidden'>viviangal@email.com</td>
              <td className='hidden'>12.02.2023</td>
              <td className='hidden'>Admin</td>
              <td className='hidden'>active</td>
              <td>
              <div className={styles.buttons}>
                  <Link href={`/dashboard/users/`}>
                    <button className={`${styles.button} ${styles.view}`}>
                     <MdRemoveRedEye/>
                    </button>
                  </Link>
                  
                    <input type="hidden" name="id" value='' />
                    <button className={`${styles.button} ${styles.delete}`}>
                      <MdDelete/>
                    </button>
                 
                </div>
              </td>
      </tr>
      <tr>
              <td>
                <div className={styles.user}>
                  <Image
                    src="/noavatar.png"
                    alt=""
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  John Doe
                </div>
              </td>
              <td className='hidden'>viviangal@email.com</td>
              <td className='hidden'>12.02.2023</td>
              <td className='hidden'>Admin</td>
              <td className='hidden'>active</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/`}>
                    <button className={`${styles.button} ${styles.view}`}>
                     <MdRemoveRedEye/>
                    </button>
                  </Link>
                  
                    <input type="hidden" name="id" value='' />
                    <button className={`${styles.button} ${styles.delete}`}>
                      <MdDelete/>
                    </button>
                 
                </div>
              </td>
      </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default SubscriptionPage
