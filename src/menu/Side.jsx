import React from 'react';
import Footer from '../component/Footer';
import styles from '../css/Topping.module.css';

const items = [
    {
        id: 1,
        src: 'images/drink01.jpg',
        strong: '오트밀 라떼',
        p:'Oatmeal Latte',
    },
    {
        id: 2,
        src: 'images/drink02.jpg',
        strong: '아메리카노',
        p:'Americano',
    },
    {
        id: 3,
        src: 'images/drink03.png',
        strong: '블렌딩티\n (루이보스시나몬)',
        p:'Blending Tea (Rooibos Cinnamon)',
    },
    {
        id: 4,
        src: 'images/drink04.png',
        strong: '블렌딩티(레몬진저)',
        p:'Blending Tea (Lemon Ginger)',
    },
    {
        id: 5,
        src: 'images/drink05.jpg',
        strong: '코크제로',
        p:'Coke Zero',
    },
    {
        id: 6,
        src: 'images/drink06.jpg',
        strong: '스프라이트제로',
        p:'Sprite zero',
    },
    {
        id: 7,
        src: 'images/drink07.jpg',
        strong: '착즙주스\n (그린밀싹)',
        p:'Cold Pressed Juice\n (Green Wheat Grass)',
    },
    {
        id: 8,
        src: 'images/drink08.jpg',
        strong: '착즙주스\n (옐로우클렌즈)',
        p:'Cold Pressed Juice\n (Yellow Cleanse)',
    },
    {
        id: 9,
        src: 'images/drink09.jpg',
        strong: '착즙주스\n (오렌지당근)',
        p:'Cold Pressed Juice\n (Orange Carrot)',
    },
    {
        id: 10,
        src: 'images/drink10.jpg',
        strong: '오틀리 (오리지널)',
        p:'Oatly (Original)',
    },
    {
        id: 11,
        src: 'images/drink11.png',
        strong: '오틀리 (초코)',
        p:'Oatly (Chocolate)',
    },
    {
        id: 12,
        src: 'images/drink12.jpg',
        strong: '두링크 초코',
        p:"DO'RINK CHOCOLATE",
    },
    {
        id: 13,
        src: 'images/drink13.jpg',
        strong: '생수',
        p:'Water',
    },
]

const items2 = [
    {
        id: 1,
        src: 'images/side01.jpg',
        strong: '양송이 크림스프',
        p:'Mushroom Cream Soup',
    },
    {
        id: 2,
        src: 'images/side02.jpg',
        strong: '콘치즈 스프',
        p:'Corn Cheese Soup',
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
                <img src="images/side.png" alt="" />
                <dl>
                    <dt className={styles.topping__text}>커피, 탄산수, 착즙주스는 물론 스프까지!<br />폭 넓게 선택하는 음료&사이드 메뉴</dt>
                </dl>
            </div>
            <div className={styles.content}>
                <div className={styles.menu__list}>
                    <h3>음료</h3>
                    <div className={styles.side__box2}>
                        <ul>
                            {items.map( (item) => (
                                <li key={item.id}><Item item={item} /></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className={styles.list__box3}>
                    <h3>사이드</h3>
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