import styles from './footer.module.scss'

import dzen from '../../src/images_src/svg/footer/dzen.svg'
import rutube from '../../src/images_src/svg/footer/rutube.svg'
import vkontakte from '../../src/images_src/svg/footer/vkontakte.svg'
import telegram from '../../src/images_src/svg/footer/telegram.svg'
import tiktok from '../../src/images_src/svg/footer/tiktok.svg'

const Footer = ({ darkTheme }) => {
    let darkThemeOn = darkTheme === 'of' ? '' : styles.dark  // Переключение на темную тему
    return (
        <div className={styles.footer_wrapper}>
            <div className={`${styles.row} ${darkThemeOn}`}>
                <div className={styles.social}>
                    <h2 className={`${styles.social_logo} ${darkThemeOn}`}>Fru<span>i</span>ty</h2>
                    <p className={`${styles.social_description} ${darkThemeOn}`}>Lorem Ipsum is simply dummy typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    <div className={styles.social_icons}>
                        <a href="/" title="Yandex Dzen">
                            <svg className={styles.dzen} viewBox="0 0 169 169" role="img">
                                    <use href={`${dzen}#dzen_ID`}/>
                                    <use className={`${styles.dzen_background} ${darkThemeOn}`} href={`${dzen}#dzen_background_ID`}/>
                                    <use className={`${styles.dzen_star} ${darkThemeOn}`} href={`${dzen}#dzen_star_ID`}/>
                            </svg>
                        </a>

                        <a href="/" className={`${styles.rutube_background_wraper} ${darkThemeOn}`} title="Rutube">
                            <svg className={styles.rutube} viewBox="0 0 25 25" role="img">
                                <use href={`${rutube}#rutube_ID`}/>
                                <use className={styles.rutube_circle} href={`${rutube}#rutube_circle_ID`}/>
                                <use className={`${styles.rutube_letter} ${darkThemeOn}`} href={`${rutube}#rutube_letter_ID`}/>       
                            </svg>
                        </a>

                        <a href="/" title="VKontakte">
                            <svg  className={styles.vkontakte} viewBox="0 0 24 24" role="img">
                                <use href={`${vkontakte}#vkontakte_ID`}/>
                            </svg>
                        </a>

                        <a href="/" title="Telegram">
                            <svg className={styles.telegram} viewBox="0 0 48 48" role='img'>
                                <use href={`${telegram}#telegram_ID`} />
                            </svg>
                        </a>

                        <a href="/" title="Tiktok">
                            <svg className={`${styles.tiktok} ${darkThemeOn}`} viewBox="62 70 675 675" role='img'>
                                <use href={`${tiktok}#tiktok_ID`} />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className={`${styles.column} ${styles.community}`}>
                    <h3 className={`${styles.title} ${darkThemeOn}`}>Community</h3>
                    <ul className={`${styles.links} ${darkThemeOn}`}>
                        <li>For Agents</li>
                        <li>For Seller</li>
                        <li>For Buyer</li>
                        <li>Search home</li>
                    </ul>
                </div>

                <div className={`${styles.column} ${styles.about}`}>
                    <h3 className={`${styles.title} ${darkThemeOn}`}>About</h3>
                    <ul className={`${styles.links} ${darkThemeOn}`}>
                        <li>Our Story</li>
                        <li>Careers</li>
                        <li>Meet the Team</li>
                    </ul>
                </div>

                <div className={`${styles.column} ${styles.contact}`}>
                    <h3 className={`${styles.title} ${darkThemeOn}`}>Contact</h3>
                    <ul className={`${styles.links} ${darkThemeOn}`}>
                        <li>Email: fruity@example.com</li>
                        <li>Phone: +1-555-321-7654</li>
                        <li>Address: 789 Pine Lane, Town, State</li>
                        <li>View on Map</li>
                    </ul>
                </div>
            </div>
            <div className={`${styles.all_rights_reserved} ${darkThemeOn}`}>© 2025 Real State All Rights Reserved.</div>
        </div>
    )
}

export default Footer