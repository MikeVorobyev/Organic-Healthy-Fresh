import styles from './howItWorks.module.scss'

// svg
import halfCircle from '../images_src/svg/half_circle.svg'
import chooseProduct_1 from '../images_src/svg/how_it_works/1_choose_product.svg'
import doPayment_2 from '../images_src/svg/how_it_works/2_do_payment.svg'
import confirmationPayment_3 from '../images_src/svg/how_it_works/3_confirmation_payment.svg'
import orderShipped_4 from '../images_src/svg/how_it_works/4_order_shipped.svg'

// jpg
import howItWorks_img_1 from '../images_src/jpg/1_how_it_works.jpeg'
import howItWorks_img_2 from '../images_src/jpg/2_how_it_works.jpeg'
import howItWorks_img_3 from '../images_src/jpg/3_how_it_works.jpeg'
import howItWorks_img_4 from '../images_src/jpg/4_how_it_works.jpeg'


const HowItWorks = ({ darkTheme }) => {
    let darkThemeOn = darkTheme === 'of' ? '' : styles.dark  // Переключение на темную тему

    return (
        <div className={styles.how_it_works_wrapper}>
            <div className={styles.how_it_works_inner}>
                <svg className={`${styles.half_circle} ${darkThemeOn}`} viewBox="0 0 359 686" role="img">
                    <use href={`${halfCircle}#half_circle_ID`}/>
                </svg>

                <div className={styles.left_wrapper}>
                    <div className={styles.left_img}>
                        <div className={styles.howItWorks_img_1}>
                            <img className={styles.how_it_works_imgs} src={howItWorks_img_1} alt="img_1" />
                        </div>

                        <div className={styles.howItWorks_img_2}>
                            <img className={styles.how_it_works_imgs} src={howItWorks_img_2} alt="img_2" />
                        </div>
                    </div>

                    <div className={styles.right_img}>
                        <div className={styles.howItWorks_img_3}>
                            <img className={styles.how_it_works_imgs} src={howItWorks_img_3} alt="img_3" />
                        </div>

                        <div className={styles.howItWorks_img_4}>
                            <img className={styles.how_it_works_imgs} src={howItWorks_img_4} alt="img_4" />
                        </div>
                    </div>
                </div>

                <div className={`${styles.right_wrapper} ${darkThemeOn}`}>
                    <h2 className={`${styles.title} ${darkThemeOn}`}>How it Works</h2>
                    <p className={`${styles.subtitle} ${darkThemeOn}`}>Lorem Ipsum is simply dummy text of the printi and typesetting industry. Lorem Ipsum has been the industry's </p>
                    <ul>
                        <li className={styles.list_wrapper}>
                            <div className={styles.list_img}>
                                <svg className={styles.list_img_choose_product_1} viewBox="0 0 62 62" role="img">
                                    <use href={`${chooseProduct_1}#1_choose_product_ID`}/>
                                    <use className={styles.list_img_choose_product_ellipse} href={`${chooseProduct_1}#1_choose_product_ellipse_ID`}/>
                                    <use className={styles.list_img_choose_product_vector_1} href={`${chooseProduct_1}#1_choose_product_vector_1_ID`}/>
                                    <use className={styles.list_img_choose_product_vector_2} href={`${chooseProduct_1}#1_choose_product_vector_2_ID`}/>
                                    <use className={styles.list_img_choose_product_vector_3} href={`${chooseProduct_1}#1_choose_product_vector_3_ID`}/>
                                </svg>
                            </div>
                            <div className={styles.list_text_wrapper}>
                                <h3 className={`${styles.list_title} ${darkThemeOn}`}>Choose Product</h3>
                                <p className={`${styles.list_subtitle} ${darkThemeOn}`}>Lorem Ipsum is simply dummy text of the printi</p>
                            </div>
                        </li>

                        <li className={styles.list_wrapper}>
                            <div className={styles.list_img}>
                                <svg className={styles.list_img_doPayment_2} viewBox="0 0 62 62" role="img">
                                    <use href={`${doPayment_2}#2_do_payment_ID`}/>
                                    <use className={styles.list_img_do_payment_ellipse} href={`${doPayment_2}#2_do_payment_ellipse_ID`}/>
                                    <use className={styles.list_img_do_payment_vector_1} href={`${doPayment_2}#2_do_payment_vector_1_ID`}/>
                                    <use className={styles.list_img_do_payment_vector_2} href={`${doPayment_2}#2_do_payment_vector_2_ID`}/>
                                    <use className={styles.list_img_do_payment_vector_3} href={`${doPayment_2}#2_do_payment_vector_3_ID`}/>
                                    <use className={styles.list_img_do_payment_vector_4} href={`${doPayment_2}#2_do_payment_vector_4_ID`}/>
                                </svg>
                            </div>

                            <div className={styles.list_text_wrapper}>
                                <h3 className={`${styles.list_title} ${darkThemeOn}`}>Do Payment</h3>
                                <p className={`${styles.list_subtitle} ${darkThemeOn}`}>Lorem Ipsum is simply dummy text of the printi</p>
                            </div>
                        </li>

                        <li className={styles.list_wrapper}>
                            <div className={styles.list_img}>
                                <svg className={styles.list_img_confirmation_payment_3} viewBox="0 0 62 62" role="img">
                                    <use href={`${doPayment_2}#3_confirmation_payment_ID`}/>
                                    <use className={styles.list_img_confirmation_payment_ellipse} href={`${confirmationPayment_3}#3_confirmation_payment_ellipse_ID`}/>
                                    <use className={styles.list_img_confirmation_payment_vector_1} href={`${confirmationPayment_3}#3_confirmation_payment_vector_1_ID`}/>
                                    <use className={styles.list_img_confirmation_payment_vector_2} href={`${confirmationPayment_3}#3_confirmation_payment_vector_2_ID`}/>
                                    <use className={styles.list_img_confirmation_payment_vector_3} href={`${confirmationPayment_3}#3_confirmation_payment_vector_3_ID`}/>
                                    <use className={styles.list_img_confirmation_payment_vector_4} href={`${confirmationPayment_3}#3_confirmation_payment_vector_4_ID`}/>
                                    <use className={styles.list_img_confirmation_payment_vector_5} href={`${confirmationPayment_3}#3_confirmation_payment_vector_5_ID`}/>
                                    <use className={styles.list_img_confirmation_payment_vector_6} href={`${confirmationPayment_3}#3_confirmation_payment_vector_6_ID`}/>
                                </svg>
                            </div>

                            <div className={styles.list_text_wrapper}>
                                <h3 className={`${styles.list_title} ${darkThemeOn}`}>Confirmation Payment</h3>
                                <p className={`${styles.list_subtitle} ${darkThemeOn}`}>Lorem Ipsum is simply dummy text of the printi</p>
                            </div>
                        </li>

                        <li className={styles.list_wrapper}>
                            <div className={styles.list_img}>
                                <svg className={styles.list_img_orderShipped_4} viewBox="0 0 62 62" role="img">
                                    <use href={`${doPayment_2}#4_order_shipped_ID`}/>
                                    <use className={styles.list_img_order_shipped_ellipse} href={`${orderShipped_4}#4_order_shipped_ellipse_ID`}/>
                                    <use className={styles.list_img_order_shipped_vector_1} href={`${orderShipped_4}#4_order_shipped_vector_1_ID`}/>
                                    <use className={styles.list_img_order_shipped_vector_2} href={`${orderShipped_4}#4_order_shipped_vector_2_ID`}/>
                                    <use className={styles.list_img_order_shipped_vector_3} href={`${orderShipped_4}#4_order_shipped_vector_3_ID`}/>
                                    <use className={styles.list_img_order_shipped_vector_4} href={`${orderShipped_4}#4_order_shipped_vector_4_ID`}/>
                                    <use className={styles.list_img_order_shipped_vector_5} href={`${orderShipped_4}#4_order_shipped_vector_5_ID`}/>
                                    <use className={styles.list_img_order_shipped_vector_6} href={`${orderShipped_4}#4_order_shipped_vector_6_ID`}/>
                                </svg>
                            </div>

                            <div className={styles.list_text_wrapper}>
                                <h3 className={`${styles.list_title} ${darkThemeOn}`}>Order Shipped</h3>
                                <p className={`${styles.list_subtitle} ${darkThemeOn}`}>Lorem Ipsum is simply dummy text of the printi</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default HowItWorks