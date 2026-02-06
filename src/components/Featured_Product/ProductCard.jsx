import { useState, useEffect } from 'react';
import arrayProducts from './arrayProducts';
import styles from './featuredProduct.module.scss';

const ProductCard = ({ darkTheme }) => {
    const darkThemeOn = darkTheme === 'of' ? '' : styles.dark;
    const [textBtn, setTextBtn] = useState('Show More');
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 630);
    const [showAll, setShowAll] = useState(!(window.innerWidth <= 630));

    
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth <= 630;
            setIsMobile(mobile);
            
            if (mobile && showAll) {
                setShowAll(false);
                setTextBtn('Show More');
            }
            
            if (!mobile && !showAll) {
                setShowAll(true);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [showAll]);

    // Сколько товаров показывать
    const productsToShow = isMobile && !showAll 
        ? arrayProducts.slice(0, 3)  // Только первые 3 на мобилке
        : arrayProducts;              // Все товары

    const handleShowMore = () => {
        if (isMobile) {
            setShowAll(!showAll);
            setTextBtn(showAll ? 'Show More' : 'Close');
        }
    };

    return (
        <>
            <div className={styles.greed_wrapper}>
                {productsToShow.map((product, i) => (
                    <div className={`${product.classIndex}`} key={i}>
                        <div className={`${styles.product_card_wrapper}`}>
                            <div className={`${styles.img_wrapper} ${product.classColor} ${darkThemeOn}`}>
                                <img className={styles.img} src={product.img} alt={product.title} />
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
                ))}
            </div>
            
            {isMobile && (
                <button onClick={handleShowMore} className={styles.btn_show_more}>
                    {textBtn}
                </button>
            )}
        </>
    );
};

export default ProductCard;