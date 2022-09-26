import React from 'react';
import { Link } from "react-router-dom";
import Footer from '../component/Footer';
import styles from '../css/Topping.module.css';

const items = [
    {
        id: 1,
        src: 'images/dress01.png',
        strong: '시저',
        p:'Caesar',
    },
    {
        id: 2,
        src: 'images/dress02.png',
        strong: '크리미할라피뇨',
        b: 'VEGAN',
        p:'Creamy Jalapeno',
    },
    {
        id: 3,
        src: 'images/dress03.png',
        strong: '오리엔탈',
        p:'Oriental',
    },
    {
        id: 4,
        src: 'images/dress04.png',
        strong: '크리미칠리',
        p:'Creamy Chilli',
    },
    {
        id: 5,
        src: 'images/dress05.png',
        strong: '레몬',
        b: 'VEGAN',
        p:'Lemon',
    },
    {
        id: 6,
        src: 'images/dress06.png',
        strong: '발사믹',
        b: 'VEGAN',
        p:'Balsamic',
    },
    {
        id: 7,
        src: 'images/dress07.png',
        strong: '레드와인비네거',
        b: 'VEGAN',
        p:'Red Wine Vinegar',
    },
    {
        id: 8,
        src: 'images/dress08.png',
        strong: '고추장비니거',
        b: 'VEGAN',
        p:'Gochujang Vinegar',
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

export default function Dressing() {
    return (
        <div id="dressing">
            <div className={styles.topping}>
                <img src="images/topping.png" alt="" />
                <dl>
                    <dt className={styles.topping__text}>내 취향대로 토핑과 드레싱을 조합하여<br />나만의 커스텀 샐러드를 만들 수 있어요!</dt>
                </dl>
            </div>
            <div className={styles.content}>
                <div className={styles.dressWrap}>
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
                    <h3>드레싱</h3>
                    <div className={styles.list__box2}>
                        <ul>
                            {items.map( (item) => (
                                <li key={item.id}><Item item={item} /></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}