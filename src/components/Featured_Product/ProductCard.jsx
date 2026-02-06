import { useRef, useEffect, useState } from 'react';
import arrayProducts from './arrayProducts'
import styles from './featuredProduct.module.scss'

const ProductCard = ({ darkTheme }) => {
    let darkThemeOn = darkTheme === 'of' ? '' : styles.dark   // Переключение на темную тему
    const [textBtn, setTextBtn] = useState('Show More')
    const allProductsCardsRef = useRef(null)                  // Находим родительский элемент всех карточек товаров с помощью useRef()

    useEffect(() => {
        let cardsArray = allProductsCardsRef.current.childNodes // Создаем переменную в которой будет лежать коллекция со всеми карточками товаров, найденная через useRef().
                                                                // Сами карточки мы получаем через родительский элемент обратившись к дочерним через ".childNodes"
        window.addEventListener('resize', event => {
            if(event.target.window.innerWidth <= 630) {    
                cardsArray.forEach((v, i) => {i > 2 ? v.classList.add(styles.hidden) : v})
            }
            if(event.target.window.innerWidth > 630) {
                cardsArray.forEach((v) => {v.classList.remove(styles.hidden)})
                setTextBtn('Show More')
            }

        })
        if(window.innerWidth <= 630) {
            let cardsArray = allProductsCardsRef.current.childNodes
            cardsArray.forEach((v, i) => {i > 2 ? v.classList.add(styles.hidden) : v})
        }
    }, [])

    const showMoreClick = () => {
        let cardsArray = allProductsCardsRef.current.childNodes
        if(cardsArray[cardsArray.length - 1].classList.length === 1) {
            cardsArray.forEach((v, i) => {i > 2 ? v.classList.add(styles.hidden) : v})
        } else {
        cardsArray.forEach((v) => {
            v.classList.add(styles.hidden)
            v.classList.toggle(styles.hidden)
        })
        }
        textBtn.includes('Show More') ? setTextBtn('Close') : setTextBtn('Show More')
        console.log(cardsArray[cardsArray.length - 1].classList)
    }

    return (
        <>
            <div ref={allProductsCardsRef} className={styles.greed_wrapper}>
                {arrayProducts.map((product, i) => {
                    return (
                        <div className={`${product.classIndex}`} key={i}>
                            <div className={`${styles.product_card_wrapper}`}>
                                <div className={`${styles.img_wrapper} ${product.classColor} ${darkThemeOn}`}>
                                    <img className={styles.img} src={product.img} alt={product.title}/>
                                </div>

                                <div className={`${styles.title_price_wrapper} ${darkThemeOn}`}>
                                    <div className={styles.cart_title}>{product.title}</div>
                                    <div className={styles.cart_price}>${product.price}</div>
                                </div>

                                <div className={styles.weight_button}>
                                    <div className={`${styles.weight} ${darkThemeOn}`}>{product.weight}g</div>
                                    <button className={`${styles.btn} ${darkThemeOn}`}>Buy</button>
                                </div>
                            </div>
                        </div>
                    )
                    }
                )}
            </div>
            <button onClick={showMoreClick} className={styles.btn_show_more}>{textBtn}</button>
        </>
    )
}


export default ProductCard