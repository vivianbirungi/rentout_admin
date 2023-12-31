import Image from 'next/image';
import Link from 'next/link';
import Pagination from '../../ui/dashboard/pagination/pagination';
import Search from '../../ui/dashboard/search/search';
import styles from '../../ui/dashboard/users/users.module.css';

const UsersPage = () => {
  return (
    <div className={styles.container}>
    <div className={styles.top}>
      <Search placeholder="Search for a user..." />
      <Link href="/dashboard/users/add">
        <button className={styles.addButton}>Add New</button>
      </Link>
    </div>
    <table className={styles.table}>
      <thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Created At</td>
          <td>Role</td>
          <td>Status</td>
          <td>Action</td>
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
              <td>viviangal@email.com</td>
              <td>12.02.2023</td>
              <td>Admin</td>
              <td>active</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/test`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  
                    <input type="hidden" name="id" value='' />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
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
              <td>viviangal@email.com</td>
              <td>12.02.2023</td>
              <td>Admin</td>
              <td>active</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      View
                    </button>
                  </Link>
                  
                    <input type="hidden" name="id" value='' />
                    <button className={`${styles.button} ${styles.delete}`}>
                      Delete
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

export default UsersPage
