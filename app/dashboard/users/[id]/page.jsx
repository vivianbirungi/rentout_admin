
import Image from "next/image";
import styles from "../../../ui/dashboard/users/singleUser/singleUser.module.css";
import Link from "next/link";

const SingleUserPage = async ({ params }) => {
  
  

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src= "/noavatar.png" alt="" width={200} height= {200}/>
        </div>
        <div className={styles.userDetail}>
          <div className={styles.header}>
             <span>john doe</span>
             <span>Active</span>
          </div>
          <div className={styles.userInfo}>
            <div><span>Role: </span> <span>LandLord</span></div>
            <div><span>Email:</span> <span> vivi@gmail.com</span></div>
            <div><span>phone: </span> <span>256779385247</span></div>
            <div><span>Company:</span> <span> OUR TOURS BEIGE </span></div>
        

          </div>
        </div>
      </div>
      <div className={styles.formContainer}>
        
      
      <div className={styles.propertyContainer}>
        <h4>Properties</h4>
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
      </div>
      <div className={styles.tendanciesContainer}>
      <h4>Users</h4>
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
      </div>
      </div>
    </div>
  );
};

export default SingleUserPage;