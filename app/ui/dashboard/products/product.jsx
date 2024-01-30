import Image from 'next/image'
import { MdDelete, MdEdit } from 'react-icons/md'
import styles from './products.module.css'
const Property = ({productData}) => {
    const images = productData.images.split(',');
    console.log(productData)
  return (
    // src={BASEURL.Base_URL+images[0]}
    <div className={styles.propertyContainer}>
        <Image className={styles.productImage} src='/house.png' width={180} height={200} alt='productImage'/>
        <div className={styles.content}>
            <div className={styles.productDetail}>
            <span className={styles.header}>{productData?.pro_titile}</span>
                <span className={styles.type}>{productData?.pro_type}</span>
                <span className={styles.owner}>Owner: {productData?.full_name}</span>
                {/* <span className={styles.owner}>Listed For: {productData?.pro_for}</span> */}
                <span className={styles.price}> Units: {productData?.total_units}</span>
            
            </div>
            
            {/* <div className={`${styles.action} hidden`}>
            <MdEdit/>
            <MdDelete/>
        </div> */}

        </div>
        

      
    </div>
  )
}

export default Property
