import ProductCard from './ProductCard'
import styles from './featuredProduct.module.scss'

const FeaturedProduct = ({ darkTheme }) => {
    let darkThemeOn = darkTheme === 'of' ? '' : styles.dark // Переключение на темную тему
    
    return (
        <div className={styles.featured_product_wrapper}>
            <h2 className={`${styles.title} ${darkThemeOn}`}>Featured Product</h2>
            <ProductCard darkTheme={darkTheme}/>
        </div> 
    )
}

export default FeaturedProduct