import styles from './aboutUs.module.scss'
import aboutUsIMG from '../images_src/jpg/about_us_img.jpeg'
import halfCircle from '../images_src/svg/half_circle.svg'

const AboutUs = ({ darkTheme }) => {
    let darkThemeOn = darkTheme === 'of' ? '' : styles.dark  // Переключение на темную тему

    return (
        <div className={styles.about_us_wrapper}>
            <div className={styles.left}>
                <h2 className={`${styles.title} ${darkThemeOn}`}>About Us</h2>
                <p className={`${styles.subtitle} ${darkThemeOn}`}>
                    There are many variations of passages of Lorem Ipsum available, but the 
                    majority have suffered alterationThere are many variations of passages 
                    of Lorem Ipsum available, but the majority have suffered alteration
                </p>
                <button className={styles.btn}>
                    <p>Read More</p>
                </button>
            </div>

            <div className={styles.right}>
                <img className={styles.right_img} src={aboutUsIMG} alt="about_us" />
            </div>

            <svg className={`${styles.half_circle} ${darkThemeOn}`} viewBox="0 0 359 686" role="img">
                <use href={`${halfCircle}#half_circle_ID`}/>
            </svg>
        </div>
    )
}

export default AboutUs