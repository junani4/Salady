import React from 'react';
import { Route, Link } from 'react-router-dom';
import Footer from './Footer';
import styles from '../css/Menu.module.css';

const newMenus = [
    {
        id: 1,
        src: 'images/menu01.jpg',
        link: '/sand',
        title: '콜드컷 샌드',
        p: 'Cold Cut Sand',
        new: 'NEW',
    },
    {
        id: 2,
        src: 'images/menu02.jpg',
        link: '/salad',
        title: '콜드컷그래놀라 샐러디',
        p: 'Cold Cut Granola Salady',
        new: 'NEW',
    },
];

const bestMenus = [
    {
        id: 1,
        src: 'images/menu03.jpg',
        link: '/bowl',
        title: '칠리베이컨 웜볼',
        p: 'Chilli Bacon Warm Bowl',
        best: 'BEST',
    },
    {
        id: 2,
        src: 'images/menu04.jpg',
        link: '/wrap',
        title: '멕시칸 랩',
        p: 'Mexican Wrap',
        best: 'BEST',
    },
    {
        id: 3,
        src: 'images/menu05.jpg',
        link: '/salad5',
        title: '탄단지 샐러디',
        p: 'Tandanji Salady',
        best: 'BEST',
    },
    {
        id: 4,
        src: 'images/menu06.jpg',
        link: '/sand2',
        title: '에그베이컨 샌드',
        p: 'Egg Bacon Sand',
        best: 'BEST',
    },
    {
        id: 5,
        src: 'images/menu07.png',
        link: '/warmWrap1',
        title: '우삼겹 웜랩',
        p: 'Beef Loin Warm Wrap',
        best: 'BEST',
    },
    {
        id: 6,
        src: 'images/menu08.jpg',
        link: '/salad2',
        title: '우삼겹메밀면 샐러디',
        p: 'Beef Loin Buckwheat Noodles Salady',
        best: 'BEST',
    },
];

const bowl = [
    {
        id: 1,
        src: 'images/menu09.jpg',
        link: '/bowl',
        title: '칠리베이컨 웜볼',
        p: 'Chilli Bacon Warm Bowl',
        best: 'BEST',
    },
    {
        id: 2,
        src: 'images/menu10.jpg',
        link: '/bowl1',
        title: '우삼겹 웜볼',
        p: 'Beef Loin Warm Bowl',
    },
    {
        id: 3,
        src: 'images/menu11.jpg',
        link: '/bowl2',
        title: '팔라펠단호박 웜볼',
        p: 'Falafel Sweet Pumpkin Warm Bowl',
        best: 'VEGAN',
    },
    {
        id: 4,
        src: 'images/menu12.jpg',
        link: '/bowl3',
        title: '고추장머쉬룸 웜볼',
        p: 'Gochujang Mushroom Warm Bowl',
        best: 'VEGAN',
    },
    {
        id: 5,
        src: 'images/menu13.jpg',
        link: '/bowl4',
        title: '할라피뇨치킨 웜볼',
        p: 'Jalapeno Chicken Warm Bowl',
    },
];

const salady = [
    {
        id: 1,
        src: 'images/menu14.jpg',
        link: '/salad',
        title: '콜드컷그래놀라 샐러디',
        p: 'Cold Cut Granola Salady',
        best: 'NEW',
    },
    {
        id: 2,
        src: 'images/menu15.jpg',
        link: '/salad6',
        title: '시저치킨 샐러디',
        p: 'Caesar Chicken Salady',
    },
    {
        id: 3,
        src: 'images/menu16.jpg',
        link: '/salad5',
        title: '탄단지 샐러디',
        p: 'Tandanji Salady',
        best: 'BEST',
    },
    {
        id: 4,
        src: 'images/menu17.jpg',
        link: '/salad4',
        title: '콥 샐러디',
        p: 'Cobb Salady',
    },
    {
        id: 5,
        src: 'images/menu18.jpg',
        link: '/salad3',
        title: '리코타치즈 샐러디',
        p: 'Ricotta Cheese Salady',
    },
    {
        id: 6,
        src: 'images/menu19.jpg',
        link: '/salad1',
        title: '연어 샐러디',
        p: 'Salmon Salady',
    },
    {
        id: 7,
        src: 'images/menu20.jpg',
        link: '/salad2',
        title: '우삼겹메밀면 샐러디',
        p: 'Beef Loin Buckwheat Noodles Salady',
        best: 'BEST',
    },
];

const sand = [
    {
        id: 1,
        src: 'images/menu21.jpg',
        link: '/sand',
        title: '콜드컷 샌드',
        p: 'Cold Cut Sand',
        best: 'NEW',
    },
    {
        id: 2,
        src: 'images/menu22.jpg',
        link: '/sand1',
        title: '치킨토마토 샌드',
        p: 'Chicken Tomato Sand',
    },
    {
        id: 3,
        src: 'images/menu23.jpg',
        link: '/sand2',
        title: '에그베이컨 샌드',
        p: 'Egg Bacon Sand',
        best: 'BEST',
    },
    {
        id: 4,
        src: 'images/menu24.jpg',
        link: '/sand3',
        title: '크리미연어 샌드',
        p: 'Creamy Salmon Sand',
    },
];

const wrap = [
    {
        id: 1,
        src: 'images/menu25.png',
        link: '/wrap',
        title: '멕시칸 랩',
        p: 'Mexican Wrap',
        best: 'BEST',
    },
    {
        id: 2,
        src: 'images/menu26.png',
        link: '/wrap1',
        title: '시저치킨 랩',
        p: 'Caesar Chicken Wrap',
    },
    {
        id: 3,
        src: 'images/menu27.png',
        link: '/wrap2',
        title: '크랜베리그릭 랩',
        p: 'Cranberry Creek Wrap',
    },
    {
        id: 4,
        src: 'images/menu28.png',
        link: '/wrap3',
        title: '크리미연어 랩',
        p: 'Creamy Salmon Wrap',
    },
];

const warmWrap = [
    {
        id: 1,
        src: 'images/menu29.png',
        link: '/warmWrap',
        title: '칠리베이컨 웜랩',
        p: 'Chilli Bacon Warm Wrap',
    },
    {
        id: 2,
        src: 'images/menu30.png',
        link: '/warmWrap1',
        title: '우삼겹 웜랩',
        p: 'Beef Loin Warm Wrap',
        best: 'BEST',
    },
    {
        id: 3,
        src: 'images/menu31.jpg',
        link: '/warmWrap2',
        title: '팔라펠 웜랩',
        p: 'Falafel Warm Wrap',
    },
    {
        id: 4,
        src: 'images/menu32.png',
        link: '/warmWrap3',
        title: '할라피뇨치킨 웜랩',
        p: 'Jalapeno Chicken Warm Wrap',
    },
];

function NewM({ newM }) {
    return (
        <div className={styles.items}>
            <div className={styles.item__box}>
                <Link to={newM.link}><img src={newM.src} alt="" /></Link>
                <h6>{newM.title}</h6>
                <p>
                    {newM.p} 
                    <b>
                        <span className={styles.new}>{newM.new}</span>
                    </b>
                </p>
            </div>  
        </div>
    )
};

function BestM({ bestM }) {
    return (
        <div className={styles.items}>
            <div className={styles.item__box}>
                <Link to={bestM.link}><img src={bestM.src} alt="" /></Link>
                <h6>{bestM.title}</h6>
                <p>
                    {bestM.p} 
                    <b>
                        <span className={styles.best}>{bestM.best}</span>
                    </b>
                </p>
            </div>  
        </div>
    )
};

export default function Menu() {
    return (
        <div id="Menu">
            <div className={styles.menu}>
                <Route>
                    <div className={styles.menu__title}>
                        <ul>
                            <li><Link to="/bowl">웜볼</Link></li>
                            <li><Link to="/salad">샐러디</Link></li>
                            <li><Link to="/sand">샌드</Link></li>
                            <li><Link to="/wrap">랩</Link></li>
                            <li><Link to="/warmWrap">웜랩</Link></li>
                        </ul>
                    </div>
                </Route>
                <div className={styles.menu__list}>
                    <div className={styles.list__box}>
                        <div className={styles.inner}>
                            <div className={styles.title}>
                                <h3>새로운 메뉴</h3>
                            </div>
                            <ul>
                                {newMenus.map( (newM) => (
                                    <li key={newM.id}><NewM newM={newM} /></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={styles.list__box}>
                        <div className={styles.inner}>
                            <div className={styles.title}>
                                <h3>베스트 메뉴</h3>
                            </div>
                            <ul>
                                {bestMenus.map( (bestM) => (
                                    <li key={bestM.id}><BestM bestM={bestM} /></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={styles.list__box}>
                        <div className={styles.inner}>
                            <div className={styles.title}>
                                <h3>웜볼</h3>
                            </div>
                            <ul className={styles.bowl}>
                                {bowl.map( (bestM) => (
                                    <li key={bestM.id}><BestM bestM={bestM} /></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={styles.list__box}>
                        <div className={styles.inner}>
                            <div className={styles.title}>
                                <h3>샐러디</h3>
                            </div>
                            <ul className={styles.salady}>
                                {salady.map( (bestM) => (
                                    <li key={bestM.id}><BestM bestM={bestM} /></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={styles.list__box}>
                        <div className={styles.inner}>
                            <div className={styles.title}>
                                <h3>샌드</h3>
                            </div>
                            <ul className={styles.sand}>
                                {sand.map( (bestM) => (
                                    <li key={bestM.id}><BestM bestM={bestM} /></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={styles.list__box}>
                        <div className={styles.inner}>
                            <div className={styles.title}>
                                <h3>랩</h3>
                            </div>
                            <ul>
                                {wrap.map( (bestM) => (
                                    <li key={bestM.id}><BestM bestM={bestM} /></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={styles.list__box}>
                        <div className={styles.inner}>
                            <div className={styles.title}>
                                <h3>웝랩</h3>
                            </div>
                            <ul>
                                {warmWrap.map( (bestM) => (
                                    <li key={bestM.id}><BestM bestM={bestM} /></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}