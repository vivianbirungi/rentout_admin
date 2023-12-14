
import Image from "next/image";
import styles from "../../../ui/dashboard/users/singleUser/singleUser.module.css";

const SingleUserPage = async ({ params }) => {
  
  

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src= "/noavatar.png" alt="" fill />
        </div>
        john doe
      </div>
      <div className={styles.formContainer}>
        <form  className={styles.form}>
          <input type="hidden" name="id" value=''/>
          <label>Username</label>
          <input type="text" name="username" placeholder='' />
          <label>Email</label>
          <input type="email" name="email" placeholder=''/>
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder='' />
          <label>Address</label>
          <textarea type="text" name="address" placeholder='' />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} >Yes</option>
            <option value={false} >No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} >Yes</option>
            <option value={false} >No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;