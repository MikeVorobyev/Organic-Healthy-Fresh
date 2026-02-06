import { useEffect, useRef } from 'react'
import arrayReviews from './arrayReviews'
import styles from './customerReview.module.scss'

import arrowr_review from '../../images_src/svg/customer_review/arrowr_review.svg'

const CustomerReviewCard = ({ darkTheme }) => {
    let darkThemeOn = darkTheme === 'of' ? '' : styles.dark // Переключение на темную тему

// ------------------------------------------------------------------------ Слайдер START ----------------------------------------------------------------------------
    const allReviewsRef = useRef(null)
    function paramsSlider(valueSlide, scaleSlide, topCoordsSlide, zIndexSlide) {
        valueSlide.style.scale = `${scaleSlide}%`      // Размер слайда
        valueSlide.style.top = `${topCoordsSlide}px`   // Положение слайда относительно top
        valueSlide.style.zIndex = `${zIndexSlide}`     // z-index слайда
    }
    function removeClasses(value) {
        value.classList.remove(
            styles.animate_index_1,
            styles.animate_index_2,
            styles.animate_index_3,
            styles.animate_index_4,
            styles.reverse_animate_index_1,
            styles.reverse_animate_index_2,
            styles.reverse_animate_index_3
        )
    }

    useEffect(() => {
        let allReviews = allReviewsRef.current.childNodes
        document.documentElement.style.setProperty('--z-index-slider', allReviews.length + 100) // В CSS создана переменная для 'z-index' куда мы отсюда записываем число,
                                                                                                // равное количеству слайдов и прибавляем 100(чтобы анимация успевала плавно 
                                                                                                // уменьшить 'z-index' и корректно отработать)
                                                                                            
        let scalePersent = 100
        let zIndexReview = allReviewsRef.current.childNodes.length // Количество карточек отзывов(дочерних нодов из них еще 2 кнопки) - всего 9
        let topCoords = 0
        allReviews.forEach((v, i) => {
            v.id = i // Создаем индивидуальный айди для каждого слайда(нужно, чтобы отслеживать положение слайда по id)
            if(i < 2) {
                v.style.scale = `100%`
            } else if(i > 4) {
                v.style.scale = `0%`
            } else {
                paramsSlider(v, scalePersent, topCoords, zIndexReview)
                scalePersent = scalePersent - 15
                zIndexReview = zIndexReview - 1
                topCoords = topCoords + 50
            }
        })

        // window.addEventListener('resize', event => {

        // })
        
        // if(window.innerWidth <= 950) {
        //     let scalePersent = 100
        //     let zIndexReview = allReviewsRef.current.childNodes.length // Количество карточек отзывов(дочерних нодов из них еще 2 кнопки) - всего 9
        //     let topCoords = 0
        //     allReviews.forEach((v, i) => {
        //         if(i < 2) {
        //             v.style.scale = `100%`
        //         } else if(i > 4) {
        //             v.style.scale = `0%`
        //         } else {
        //             paramsSlider(v, scalePersent, topCoords, zIndexReview)
        //             scalePersent = scalePersent - 15
        //             zIndexReview = zIndexReview - 1
        //             topCoords = topCoords + 50
        //         }
        //     })
        // }
    },[])

    const nextArrowClick = () => {
        let allReviewsParentNode = allReviewsRef.current // Родительская нода(в ней, с помощью .replaceChildren(...arr), заменяется порядок дочерних нод)
        let allReviewsChildren = allReviewsRef.current.childNodes // массив дочерних нод
        let arrChildrenClone = [...allReviewsChildren] // массив клон дочерних нод, для того чтобы производить манипуляции в нем
        let index = 2 // Индекс нового расположения элемента в массиве(первые 2 элемента это кнопки вперед и назад, по этому их игнорируем сразу)
     
        let arrFinal = arrChildrenClone.map((v, i) => {
            const zIndexReview = allReviewsChildren.length // Количество отзывов/слайдов (7_слайдов + 2_кнопки, всего 9 элементов)
            removeClasses(v) // Перед добавлением новых CSS классов для анимации, очищаем предыдущие CSS классы

            switch(i) {
                case 2 : // if (i === 2) и т.д.
                    v.classList.add(styles.animate_index_1)
                    v.style.scale = `0%`
                    break
              
                case 3 :
                    v.classList.add(styles.animate_index_2)
                    paramsSlider(v, 100, 0, zIndexReview)
                    break

                case 4 :
                    v.classList.add(styles.animate_index_3)
                    paramsSlider(v, 85, 50, zIndexReview - 1)
                    break

                case 5 :
                    v.classList.add(styles.animate_index_4)
                    paramsSlider(v, 70, 100, zIndexReview - 2)
                    break
            }
        
            if(v.id >= 2) {                                    // Здесь, игнорируя 2 первых кнопки, мы, при клике по кнопке, увеличиваем индекс, а затем записываем в новый  
                index = index + 1                              // массив 'arrFinal' элемент под увеличенным индексом, тем самым меняется порядок слайдов в слайдере. 
                                                               // Если индекс становится больше длины всего массива, то индекс возвращается к заначению по умолчанию равному 2
                if(index > arrChildrenClone.length - 1) {
                    index = 2
                }

                v = arrChildrenClone[index]
            }
            return  v
        })

        allReviewsParentNode.replaceChildren(...arrFinal) // Добавляем в родительскую ноду массив с измененными дочерними нодами
    }

    const prevArrowClick = () => {
        let allReviewsParentNode = allReviewsRef.current
        let allReviewsChildren = allReviewsRef.current.childNodes
        let arrChildrenClone = [...allReviewsChildren]
        let index = 2
        
        let arrFinal = arrChildrenClone.map((v, i) => {
            const zIndexReview = allReviewsChildren.length
            removeClasses(v)

            switch(i) {
                case allReviewsChildren.length - 1 : // if (i === 8) Индекс последнего слайда
                    v.classList.add(styles.reverse_animate_index_1)
                    paramsSlider(v, 100, 0, zIndexReview + 1)
                    break

                case 4 :
                    paramsSlider(v, 0, 0, zIndexReview - 3)
                    break
              
                case 3 :
                    v.classList.add(styles.reverse_animate_index_3)
                    paramsSlider(v, 70, 100, zIndexReview - 2)
                    break


                case 2 :
                    v.classList.add(styles.reverse_animate_index_2)
                    paramsSlider(v, 85, 50, zIndexReview - 1)
                    break
            }
        
            if(v.id >= 2) {
                if((index - 1) < 2) {
                    v = arrChildrenClone[arrChildrenClone.length - 1]
                } else {
                    v = arrChildrenClone[index - 1]
                }
                index = index + 1
            }

            return  v
        })
        allReviewsParentNode.replaceChildren(...arrFinal)
    }
// ------------------------------------------------------------------------ Слайдер END ----------------------------------------------------------------------------

    return (
        <div ref={allReviewsRef} className={`${styles.wrapper} ${darkThemeOn}`}>
            <button onClick={prevArrowClick} className={`${styles.arrow_prev} ${darkThemeOn}`}>
                <svg viewBox="0 0 61 61" role="img">
                    <use className={styles.arrow_prev_SVG} href={`${arrowr_review}#arrowr_review_ID`}/>
                    <use className={`${styles.arrow_prev_ellipse_1} ${darkThemeOn}`} href={`${arrowr_review}#arrowr_review_ellipse_1_ID`}/>
                    <use className={`${styles.arrow_prev_ellipse_2} ${darkThemeOn}`} href={`${arrowr_review}#arrowr_review_ellipse_2_ID`}/>
                    <use className={`${styles.arrow_prev_vector} ${darkThemeOn}`} href={`${arrowr_review}#arrowr_review_vector_ID`}/>
                </svg>
            </button>

            <button onClick={nextArrowClick} className={`${styles.arrow_next} ${darkThemeOn}`}>
                <svg viewBox="0 0 61 61" role="img">
                    <use className={styles.arrow_next_SVG} href={`${arrowr_review}#arrowr_review_ID`}/>
                    <use className={`${styles.arrow_next_ellipse_1} ${darkThemeOn}`} href={`${arrowr_review}#arrowr_review_ellipse_1_ID`}/>
                    <use className={`${styles.arrow_next_ellipse_2} ${darkThemeOn}`} href={`${arrowr_review}#arrowr_review_ellipse_2_ID`}/>
                    <use className={`${styles.arrow_next_vector} ${darkThemeOn}`} href={`${arrowr_review}#arrowr_review_vector_ID`}/>
                </svg>
            </button>
           
            {arrayReviews.map((review, i) => {
                return (
                    <div className={`${styles.card_wrapper} ${darkThemeOn}`} key={i}>
                        <div className={`${styles.card_inner} ${darkThemeOn}`}>
                            <p className={`${styles.review_text} ${darkThemeOn}`}>{review.tex}</p>
                            <div className={`${styles.user_information}`}>
                                <div className={`${styles.image_wrapper}`}>
                                    <img className={`${styles.image}`} src={review.avatarIMG} alt={review.name} />
                                </div>
                                <div className={`${styles.name_surname_wrapper}`}>
                                    <p className={`${styles.name_surname} ${darkThemeOn}`}>{review.name} {review.surname}</p>
                                    <p className={`${styles.subtitle} ${darkThemeOn}`}>Happy Customers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div> 
    )
}

export default CustomerReviewCard