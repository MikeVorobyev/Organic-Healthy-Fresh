import CustomerReviewCard from "./CustomerReviewCard"
import styles from './customerReview.module.scss'


const CustomerReview = ({ darkTheme }) => {
    let darkThemeOn = darkTheme === 'of' ? '' : styles.dark // Переключение на темную тему
    
    return (
        <div className={`${styles.customerReview_wrapper}`}>
            <h2 className={`${styles.title} ${darkThemeOn}`}>Customer Review</h2>
            <CustomerReviewCard darkTheme={darkTheme}/>
        </div> 
    )
}

export default CustomerReview