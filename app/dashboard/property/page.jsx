'use client'
import Link from 'next/link'
import useHttpGet from '../../hooks/useHttpGet'
import Pagination from '../../ui/dashboard/pagination/pagination'
import Product from '../../ui/dashboard/products/product'
import styles from '../../ui/dashboard/products/products.module.css'
import Search from '../../ui/dashboard/search/search'
const Products = () => {
  const properties = useHttpGet('get_Properties');
  return (
  
      <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <div className={styles.properties}>
        {properties.data?.map((property)=>(
        <div className={styles.single}><Link href={`/dashboard/property/test`}><Product/></Link></div>
        ))}
       
      </div>
        <Pagination/>

    </div>
  )
}

export default Products
