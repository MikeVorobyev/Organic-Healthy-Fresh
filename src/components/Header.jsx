import { useState, useRef } from 'react'
import styles from './header.module.scss'

const Header = ({ darkTheme, setDarkTheme }) => {
    const [search, setSearch] = useState('of')             // Видимость окошка поиска
    function searchHidden() {
        search === 'of' ? setSearch('') : setSearch('of')
    }
    let hidden = search === 'of' ? styles.display_hidden : ''

    const inputRef = useRef(null);                         // Очистка окошка поиска
    const onButtonClick = () => {
      inputRef.current.value = ''
    }

    const darkThemeOnClick = () => {                       // Переключение на темную тему
        darkTheme === 'of' ? setDarkTheme('on') : setDarkTheme('of')
    }
    let darkThemeOn = darkTheme === 'of' ? '' : styles.dark

    const [burgerMenu, setBurgerMenu] = useState('of')     // Визуальное изменение меню бургер
    const burgerMenuChangeVisual = () => {
        burgerMenu === 'of' ? setBurgerMenu('on') : setBurgerMenu('of')
    }
    let burger = burgerMenu === 'of' ? '' : styles.burgerActive

   return (
            <div className={styles.header_wrapper}>
                <nav className={styles.navigation}>
                    <div className={styles.navigation__left_container}>
                        <div className={`${styles.logo} ${darkThemeOn}`}>
                            <p>Fru<span>i</span>ty</p>
                        </div>
                        <div className={`${styles.nav_left} ${darkThemeOn}`}>
                            <a href="/">Home</a>
                            <a href="/">Categories</a>
                            <a href="/">About Us</a>
                        </div>
                    </div>

                    <div className={`${styles.navigation__right_container} ${darkThemeOn} ${burger}`}>
                            <button className={`${styles.nav_btn} ${darkThemeOn}`}>Contact Us</button>
                            <button className={`${styles.nav_btn_svg} ${styles.cart_wrap} ${darkThemeOn}`}>
                                <svg className={`${styles.nav_btn_cart} ${darkThemeOn}`} width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector" d="M8.27 20.09C7.77 20.09 7.36 19.68 7.36 19.18C7.36 18.67 7.77 18.27 8.27 18.27C8.77 18.27 9.18 18.67 9.18 19.18C9.18 19.68 8.77 20.09 8.27 20.09Z" stroke="currentColor" strokeOpacity="1.000000" strokeWidth="2.000000" strokeLinejoin="round"/>
                                    <path id="Vector" d="M18.27 20.09C17.77 20.09 17.36 19.68 17.36 19.18C17.36 18.67 17.77 18.27 18.27 18.27C18.77 18.27 19.18 18.67 19.18 19.18C19.18 19.68 18.77 20.09 18.27 20.09Z" stroke="currentColor" strokeOpacity="1.000000" strokeWidth="2.000000" strokeLinejoin="round"/>
                                    <path id="Vector" d="M1 1L4.63 1L7.07 13.17C7.15 13.59 7.38 13.96 7.71 14.23C8.04 14.5 8.46 14.64 8.89 14.63L17.72 14.63C18.15 14.64 18.56 14.5 18.9 14.23C19.23 13.96 19.46 13.59 19.54 13.17L21 5.54L5.54 5.54" stroke="currentColor" strokeOpacity="1.000000" strokeWidth="2.000000" strokeLinejoin="round" strokeLinecap="round"/>
                                </svg>
                            </button>
                            <button className={`${styles.nav_btn_svg} ${styles.dark_light_wrap} ${darkThemeOn}`} onClick={darkThemeOnClick}>
                                <svg className={`${styles.nav_btn_dark_light} ${darkThemeOn}`} width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5,2C5.71,3.15 4.5,5.18 4.5,7.5C4.5,9.82 5.71,11.85 7.53,13C4.46,13 2,10.54 2,7.5A5.5,5.5 0 0,1 7.5,2M19.07,3.5L20.5,4.93L4.93,20.5L3.5,19.07L19.07,
                                    3.5M12.89,5.93L11.41,5L9.97,6L10.39,4.3L9,3.24L10.75,3.12L11.33,1.47L12,3.1L13.73,3.13L12.38,4.26L12.89,5.93M9.59,9.54L8.43,8.81L7.31,9.59L7.65,8.27L6.56,7.44L7.92,
                                    7.35L8.37,6.06L8.88,7.33L10.24,7.36L9.19,8.23L9.59,9.54M19,13.5A5.5,5.5 0 0,1 13.5,19C12.28,19 11.15,18.6 10.24,17.93L17.93,10.24C18.6,11.15 19,12.28 19,13.5M14.6,
                                    20.08L17.37,18.93L17.13,22.28L14.6,20.08M18.93,17.38L20.08,14.61L22.28,17.15L18.93,17.38M20.08,12.42L18.94,9.64L22.28,9.88L20.08,12.42M9.63,18.93L12.4,20.08L9.87,22.27L9.63,18.93Z" />
                                </svg>
                            </button>
                            <div className={`${styles.nav_input_wrapper} ${hidden}`}>
                                <input className={`${styles.nav_input} ${hidden} ${darkThemeOn}`} type="text" placeholder='Press Enter to search' ref={inputRef}/>
                                <div className={`${styles.search__close} ${hidden} ${darkThemeOn}`} onClick={onButtonClick}>×</div>
                            </div>
                            <button className={`${styles.nav_btn_svg} ${styles.search_wrap} ${darkThemeOn}`} onClick={searchHidden}>
                                <svg className={`${styles.nav_btn_search} ${darkThemeOn}`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path id="Vector" d="M19.75 18.57L14.06 12.88C15.16 11.52 15.83 9.79 15.83 7.91C15.83 3.55 12.28 0 7.91 0C3.55 0 0 3.55 0 7.91C0 12.28 3.55 15.83 
                                    7.91 15.83C9.79 15.83 11.52 15.16 12.88 14.06L18.57 19.75C18.73 19.91 18.95 19.99 19.16 19.99C19.37 19.99 19.59 19.91 19.75 19.75C20.08 19.42 20.08 
                                    18.9 19.75 18.57ZM7.91 14.16C4.46 14.16 1.66 11.36 1.66 7.91C1.66 4.46 4.46 1.66 7.91 1.66C11.36 1.66 14.16 4.46 14.16 7.91C14.16 11.36 11.36 14.16 
                                    7.91 14.16Z" fill="currentColor" fillOpacity="1.000000" fillRule="nonzero"
                                    />
                                </svg>
                            </button>
                    </div>
                    <div className={`${styles.close__menu_wrapper} ${burger}`} onClick={burgerMenuChangeVisual}>
                        <div className={styles.close__menu}>
                            <div className={styles.close__menu_center_line}></div>
                        </div>
                    </div>
                </nav>
            </div> 
    )
}

export default Header

