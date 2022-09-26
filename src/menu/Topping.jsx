import React from 'react';
import { Link } from "react-router-dom";
import Footer from '../component/Footer';
import styles from '../css/Topping.module.css';

const items = [
    {
        id: 1,
        src: 'images/topping01.jpg',
        strong: '치킨',
        p:'Chicken',
    },
    {
        id: 2,
        src: 'images/topping02.jpg',
        strong: '에그',
        p:'Egg',
    },
    {
        id: 3,
        src: 'images/topping03.jpg',
        strong: '팔라펠',
        b: 'VEGAN',
        p:'Falafel',
    },
    {
        id: 4,
        src: 'images/topping04.jpg',
        strong: '연어',
        p:'Salmon',
    },
    {
        id: 5,
        src: 'images/topping05.jpg',
        strong: '스윗포테이토',
        p:'Sweet Potato',
    },
    {
        id: 6,
        src: 'images/topping06.jpg',
        strong: '리코타치즈',
        p:'Ricotta Cheese',
    },
    {
        id: 7,
        src: 'images/topping07.jpg',
        strong: '머쉬룸',
        b: 'VEGAN',
        p:'Mushroom',
    },
    {
        id: 8,
        src: 'images/topping08.jpg',
        strong: '그라운드미트',
        p:'Grounded Meat',
    },
    {
        id: 9,
        src: 'images/topping09.jpg',
        strong: '우삼겹',
        p:'Beef Loin',
    },
    {
        id: 10,
        src: 'images/topping10.jpg',
        strong: '베이컨',
        p:'Bacon',
    },
    {
        id: 11,
        src: 'images/topping11.jpg',
        strong: '두부',
        b: 'VEGAN',
        p:'Tofu',
    },
    {
        id: 12,
        src: 'images/topping12.jpg',
        strong: '단호박',
        b: 'VEGAN',
        p:'Sweet Pumpkin',
    },
    {
        id: 13,
        src: 'images/topping13.jpg',
        strong: '두부크럼블',
        b: 'VEGAN',
        p:'Tofu Crumble',
    },
    {
        id: 14,
        src: 'images/topping14.jpg',
        strong: '메밀면',
        p:'Buckwheat Noodles',
    },
    {
        id: 15,
        src: 'images/topping15.jpg',
        strong: '카피콜라',
        p:'Capicola',
    },
]

const items2 = [
    {
        id: 1,
        src: 'images/subTopping01.jpg',
        strong: '크랜베리',
        b: 'VEGAN',
        p:'Cranberry',
    },
    {
        id: 2,
        src: 'images/subTopping02.jpg',
        strong: '옥수수',
        b: 'VEGAN',
        p:'Corn',
    },
    {
        id: 3,
        src: 'images/subTopping03.jpg',
        strong: '양파',
        b: 'VEGAN',
        p:'Onion',
    },
    {
        id: 4,
        src: 'images/subTopping04.jpg',
        strong: '양파플레이크',
        p:'Onion Flake',
    },
    {
        id: 5,
        src: 'images/subTopping05.jpg',
        strong: '토마토',
        b: 'VEGAN',
        p:'Tomato',
    },
    {
        id: 6,
        src: 'images/subTopping06.jpg',
        strong: '나쵸칩',
        p:'Nacho Chip',
    },
    {
        id: 7,
        src: 'images/subTopping07.jpg',
        strong: '칙피',
        b: 'VEGAN',
        p:'Chick Pea',
    },
    {
        id: 8,
        src: 'images/subTopping08.jpg',
        strong: '올리브',
        b: 'VEGAN',
        p:'Olive',
    },
    {
        id: 9,
        src: 'images/subTopping09.jpg',
        strong: '견과류',
        b: 'VEGAN',
        p:'Nuts',
    },
    {
        id: 10,
        src: 'images/subTopping10.jpg',
        strong: '오이',
        b: 'VEGAN',
        p:'Cucumber',
    },
    {
        id: 11,
        src: 'images/subTopping11.jpg',
        strong: '사워크림',
        p:'Sour Cream',
    },
    {
        id: 12,
        src: 'images/subTopping12.jpg',
        strong: '할라피뇨',
        b: 'VEGAN',
        p:'Jalapeno',
    },
    {
        id: 13,
        src: 'images/subTopping13.jpg',
        strong: '칠리빈',
        p:'Chilli Bean',
    },
    {
        id: 14,
        src: 'images/subTopping14.jpg',
        strong: '통밀빵',
        p:'Whole Wheat Bread',
    },
    {
        id: 15,
        src: 'images/subTopping15.jpg',
        strong: '그래놀라',
        p:'Granola',
    },
]

function Item({ item }) {
    return (
        <div className={styles.items}>
            <div className={styles.item__box}>
                <img src={item.src} alt="" />
            </div>
            <div className={styles.text}>
                <strong>{item.strong}<b className={styles.vegan}>{item.b}</b></strong>
                <p>{item.p}</p>
            </div> 
        </div>
    )
};

function Item2({ item2 }) {
    return (
        <div className={styles.items}>
            <div className={styles.item__box}>
                <img src={item2.src} alt="" />
            </div>
            <div className={styles.text}>
                <strong>{item2.strong}<b className={styles.vegan}>{item2.b}</b></strong>
                <p>{item2.p}</p>
            </div> 
        </div>
    )
};

export default function Topping() {
    return (
        <div id="topping">
            <div className={styles.topping}>
                <img src="images/topping.png" alt="" />
                <dl>
                    <dt className={styles.topping__text}>내 취향대로 토핑과 드레싱을 조합하여<br />나만의 커스텀 샐러드를 만들 수 있어요!</dt>
                </dl>
            </div>
            <div className={styles.content}>
                <div className={styles.lnbWrap2}>
                    <ul>
                        <li>
                            <Link to='/topping'>토핑</Link>
                        </li>
                        <li>
                            <Link to='/dressing'>드레싱</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.menu__list}>
                    <h3>메인 토핑</h3>
                    <div className={styles.list__box2}>
                        <ul>
                            {items.map( (item) => (
                                <li key={item.id}><Item item={item} /></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.list__box3}>
                    <h3>서브 토핑</h3>
                    <div className={styles.list__box2}>
                        <ul>
                            {items2.map( (item2) => (
                                <li key={item2.id}><Item2 item2={item2} /></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}