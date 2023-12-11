
import Link from 'next/link'
import Pagination from '../../ui/dashboard/pagination/pagination'
import Product from '../../ui/dashboard/products/product'
import styles from '../../ui/dashboard/products/products.module.css'
import Search from '../../ui/dashboard/search/search'
const Products = () => {
  return (
  
      <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <div className={styles.properties}>
        <Product/>
      </div>
        <Pagination/>

    </div>
  )
}

export default Products
