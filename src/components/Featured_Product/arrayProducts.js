import ripe_Yellow_Banana from '../../images_src/png/FeaturedProduct/1_Ripe_Yellow_Banana.png'
import red_Pomegranate from '../../images_src/png/FeaturedProduct/2_Red_Pomegranate.png'
import sweet_Orange from '../../images_src/png/FeaturedProduct/3_Sweet_Orange.png'
import tasty_Avocado from '../../images_src/png/FeaturedProduct/4_Tasty_Avocado.png'
import ripe_Red_Apples from '../../images_src/png/FeaturedProduct/5_Ripe_Red_Apples.png'
import ripe_Green_Apple from '../../images_src/png/FeaturedProduct/6_Ripe_Green_Apple.png'
import sweet_Strawberry from '../../images_src/png/FeaturedProduct/7_Sweet_Strawberry.png'
import tasty_Watemelon from '../../images_src/png/FeaturedProduct/8_Tasty_Watemelon.png'

import style from './featuredProduct.module.scss'

const arrayProducts = [
    {  
        title: 'Ripe Yellow Banana',
        price: 2.89,
        weight: 500,
        img: ripe_Yellow_Banana,
        backgroundColor: '#FFD400',
        classColor: style.ripe_yellow_banana__color,
        classIndex: style.grid_id_1
    },
    {   
        title: 'Red Pomegranate',
        price: 3.89,
        weight: 500,
        img: red_Pomegranate,
        backgroundColor: '#FFE3E2',
        classColor: style.red_pomegranate__color,
        classIndex: style.grid_id_2
    },
    {   
        title: 'Sweet Orange',
        price: 2.89,
        weight: 500,
        img: sweet_Orange,
        backgroundColor: 'rgba(245, 188, 91, 0.75)',
        classColor: style.sweet_orange__color,
        classIndex: style.grid_id_3
    },
    {   
        title: 'Tasty Avocado',
        price: 3.89,
        weight: 500,
        img: tasty_Avocado,
        backgroundColor: '#EDF2F5',
        classColor: style.tasty_avocado__color,
        classIndex: style.grid_id_4
    },
    {   
        title: 'Ripe Red Apples',
        price: 5.89,
        weight: 500,
        img: ripe_Red_Apples,
        backgroundColor: 'rgba(246, 118, 109, 0.6)',
        classColor: style.ripe_red_apples__color,
        classIndex: style.grid_id_5
    },
    {   
        title: 'Ripe Green Apple',
        price: 1.89,
        weight: 500,
        img: ripe_Green_Apple,
        backgroundColor: '#BED09B',
        classColor: style.ripe_green_apple__color,
        classIndex: style.grid_id_6
    },
    {   
        title: 'Sweet Strawberry',
        price: 5.89,
        weight: 500,
        img: sweet_Strawberry,
        backgroundColor: '#FFBAB5',
        classColor: style.sweet_strawberry__color,
        classIndex: style.grid_id_7
    },
    {   
        title: 'Tasty Watemelon',
        price: 6.89,
        weight: 500,
        img: tasty_Watemelon,
        backgroundColor: '#E9F1F3',
        classColor: style.tasty_watemelon__color,
        classIndex: style.grid_id_8
    }
]

export default arrayProducts