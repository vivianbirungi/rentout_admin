
import Image from "next/image";
import Accordion from '../../../ui/dashboard/accordion/accordion';
import styles from "../../../ui/dashboard/products/singleProduct/singleProduct.module.css";
const SingleProductPage = async ({ params }) => {
  

  return (
    <div className={styles.container}>
      <div className={`${styles.infoContainer} ${styles.snapsinline}`}>
       {/* gallery */}
       <div className={styles.mediaElement}><Image src='/out.jpg'  height={250} width={450}/></div>
       <div className={styles.mediaElement}><Image  src='/inside.jpg'  height={250} width={450}/></div>
       <div className={styles.mediaElement}><Image  src='/inside.jpg'  height={250} width={450}/></div>
      </div>
      <div className={styles.detailContainer}>
       <div className={styles.headerInfo}>
        <span className={styles.propertyName}>Property Name</span><br/>
        <span>Location</span>

       </div> 
        <hr/>
        <div className={styles.description}>
          <h6>Description</h6>
          <p > که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
        <div className={styles.units}>
          <h6>Available Units</h6>
        <Accordion title='Single' items={[1,2,3]}/>
        <Accordion title='Double' items={[1,2,3]}/>
        <Accordion title='Tripple' items={[1,2,3]}/>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;