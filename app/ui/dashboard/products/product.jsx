import Image from 'next/image'
import { MdDelete, MdEdit, MdEditCalendar } from 'react-icons/md'
import styles from './products.module.css'
const Property = () => {
  return (
    <div className={styles.propertyContainer}>
        <Image className={styles.productImage} src='/noavatar.png' width={180} height={180} alt='productImage'/>
        <div className={styles.content}>
            <div className={styles.header}>
                <h4 className={styles.header}>Product Name</h4>
                <span className={styles.status}>Verified</span>
            </div>
            <div className={styles.productDetail}>
                <span className={styles.type}>Apartment</span>
                <span className={styles.owner}>Hosted by John Doe</span>
            </div>
            <ul className={styles.list}>
                <li>2bedroom</li>
                <li>2bath</li>
                <li>balcony</li>
            </ul>
            <div className={styles.price}> Price $300000</div>


        </div>
        <div className={styles.action}>
            <MdEdit/>
            <MdDelete/>
        </div>

      
    </div>
  )
}

export default Property
