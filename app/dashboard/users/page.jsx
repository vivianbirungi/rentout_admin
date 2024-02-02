"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { MdDelete, MdOutlineRemoveRedEye } from 'react-icons/md';
import { useHttpGet } from '../../hooks/useHttpGet';
import Pagination from '../../ui/dashboard/pagination/pagination';
import Search from '../../ui/dashboard/search/search';
import SelectItem from '../../ui/dashboard/select/select';
import styles from '../../ui/dashboard/users/users.module.css';
const UsersPage = () => {
  // const pages = searchParams[page]?? '1';
  // const per_page = searchParams['per_page'] ?? '5';
  const [type, setType]= useState('landlord');
  const [currentPage, setCurrentPage] = useState(1);
  const start = (Number(currentPage)-1) * 10;
  const end = start + 10;
  const users = useHttpGet(`get_Users/${type}`);
  console.log(users);
  const entries = Array.isArray(users.data) ? users.data.slice(start, end) : [];
  const [filteredData, setFilteredData] = useState(Array.isArray(users.data) ? users.data.slice(start, end) : []);

  const handleSearch = (searchTerm) => {
    const filtered = entries.filter((item) =>
      Object.values(item).some((value) => value.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredData(filtered);
  };

  useEffect(()=>{
    users.getData();
  },[type])
  const handlePagination =(e) => {
    setCurrentPage(e);
    
  }
  return (
    <div className={styles.container}>
    <div className={styles.top}>
    <SelectItem selectedValue={type} values={['landlord','tenant']} handleSelect={(e)=>{setType(e)}}/>
    <Search placeholder="Search for a user..." onSearch={handleSearch}/>
      
    </div>
    
    <table className={styles.table}>
      <thead>
        <tr>
          <td >Name</td>
          <td className='hidden'>Email</td>
          <td className='hidden'>Created At</td>
          <td className='hidden'>Role</td>
          <td className='hidden'>Status</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
      {filteredData.map((user)=>(
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
                  {user?.full_name}
                </div>
              </td>
              <td className='hidden'>  {user?.email}</td>
              <td className='hidden'>  {user?.created_at}</td>
              <td className='hidden'>{user?.user_type}</td>
              <td className='hidden'>{user?.isVerified == "Y"?"YES":"NO"}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/users/${user?.user_id}`}>
                    <button className={`${styles.button} ${styles.view}`}>
                      <MdOutlineRemoveRedEye />
                    </button>
                  </Link>
                  
                    <input type="hidden" name="id" value='' />
                    <button className={`${styles.button} ${styles.delete}`}>
                      <MdDelete/>
                    </button>
                 
                </div>
              </td>
      </tr>))}
      
        </tbody>
      </table>
      <Pagination arrayLength={users.data?.length}
          currentPage={currentPage}
          handleClick={handlePagination}
          perpage={10} />
    </div>
  )
}

export default UsersPage
