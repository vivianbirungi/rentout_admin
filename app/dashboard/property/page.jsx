
import Link from 'next/link'
import Pagination from '../../ui/dashboard/pagination/pagination'
import Product from '../../ui/dashboard/products/product'
import styles from '../../ui/dashboard/products/products.module.css'
import Search from '../../ui/dashboard/search/search'
const Products = () => {
  const properties = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7}]
  return (
  
      <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <div className={styles.properties}>
        {properties.map((property)=>(
        <div className={styles.single}><Product/></div>
        ))}
       
      </div>
        <Pagination/>

    </div>
  )
}

export default Products
