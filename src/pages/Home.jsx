import { useState } from 'react'
import Header from '../components/Header'
import styles from './home.module.scss'
import Banner from '../components/Banner'
import FeaturedProduct from '../components/Featured_Product/FeaturedProduct'
import HowItWorks from '../components/HowItWorks'
import AboutUs from '../components/AboutUs'
import CustomerReview from '../components/Customer_Review/CustomerReview'
import Footer from '../components/Footer'



const Home = () => {
    const [darkTheme, setDarkTheme] = useState('of')
    let darkThemeOn = darkTheme === 'of' ? '' : styles.dark

    return(
        <div className={styles.wrapper}>
            <div className={`${styles.wrapper__color_header} ${darkThemeOn}`}>
                <div className={styles.container}>
                    <Header className={styles.header} darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
                </div>
            </div>

            <div className={`${styles.wrapper__color_header} ${darkThemeOn}`}>
                <div className={styles.container}>
                    <Banner darkTheme={darkTheme} />
                </div>
            </div>

            <div className={`${styles.wrapper__color_featured_product} ${darkThemeOn}`}>
                <div className={styles.container}>
                    <FeaturedProduct darkTheme={darkTheme} />
                </div>
            </div>

            <div className={`${styles.wrapper__color_how_it_works} ${darkThemeOn}`}>
                <div className={styles.container}>
                    <HowItWorks darkTheme={darkTheme} />
                </div>
            </div>

            <div className={`${styles.wrapper__color_about_us} ${darkThemeOn}`}>
                <div className={styles.container}>
                    <AboutUs darkTheme={darkTheme} />
                </div>
            </div>

            <div className={`${styles.wrapper__color_customer_review} ${darkThemeOn}`}>
                <div className={styles.container}>
                    <CustomerReview darkTheme={darkTheme} />
                </div>
            </div>

            <div className={`${styles.wrapper__color_footer} ${darkThemeOn}`}>
                <div className={styles.container}>
                    <Footer darkTheme={darkTheme} />
                </div>
            </div>
        </div>
    )
}

// `content__items ${noGrid}`


export default Home