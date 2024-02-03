"use client"
import Image from "next/image";
import Link from "next/link";
import useRLStore from '../../../lib/store';
import styles from "../../../ui/dashboard/users/singleUser/singleUser.module.css";

const SingleUserPage =  () => {
const {activeUser, properties} =useRLStore(state => state);
// useEffect(()=>{getActiveUser})
const myProperties = properties.filter(property => property.landlord_id === activeUser.user_id);

console.log({myProperties});
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src= "/noavatar.png" alt="" width={200} height= {200}/>
        </div>
        <div className={styles.userDetail}>
          <div className={styles.header}>
             <span>{activeUser?.full_name}</span>
             <span>{activeUser?.isverified}</span>
          </div>
          <div className={styles.userInfo}>
            <div><span>Role: </span> <span>{activeUser?.user_type}</span></div>
            <div><span>Email:</span> <span> {activeUser?.email}</span></div>
            <div><span>phone: </span> <span>{activeUser?.phone}</span></div>
            <div><span>Country:</span> <span>{activeUser?.country} </span></div>
        

          </div>
        </div>
      </div>
      {activeUser.user_type =='landlord'?(<div className={styles.formContainer}>
        
      
      <div className={styles.propertyContainer}>
        <h4>Properties</h4>
        <table className={styles.table}>
      <thead>
        <tr>
          <td>Name</td>
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
      
      </div>):(
         <div className={styles.tendanciesContainer}>
         <h4>Users</h4>
         <table className={styles.table}>
         <thead>
           <tr>
             <td>Name</td>
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
      )}
    </div>
  );
};

export default SingleUserPage;