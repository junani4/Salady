import React from 'react';
import { Link } from "react-router-dom";
import Footer from '../component/Footer';
import styles from '../css/Bowl.module.css';

const items = [
    {
        id: 1,
        src: 'images/ing01.jpg',
        title: '귀리',
    },
    {
        id: 2,
        src: 'images/ing02.jpg',
        title: '찹쌀',
    },
    {
        id: 3,
        src: 'images/ing03.jpg',
        title: '찰보리',
    },
]

const items2 = [
    {
        id: 1,
        src: 'images/ing04.jpg',
        title: '로메인',
    },
    {
        id: 2,
        src: 'images/ing05.jpg',
        title: '멀티리프',
    },
    {
        id: 3,
        src: 'images/ing06.jpg',
        title: '적근대',
    },
    {
        id: 4,
        src: 'images/ing07.jpg',
        title: '라디치오',
    },
    {
        id: 5,
        src: 'images/ing08.jpg',
        title: '방울토마토',
    },
]

function Item({ item }) {
    return (
        <div className={styles.items}>
            <div className={styles.item__box}>
                <img src={item.src} alt="" />
            </div>
            <p>{item.title}</p> 
        </div>
    )
};


export default function Bowl() {
    return (
        <div id="bowl">
            <div className={styles.bowl}>
                <img src="images/sub_visual_1.png" alt="" />
                <dl>
                    <dt className={styles.bowl__text}>신선한 채소 베이스 위에 따끈한 통곡물 밥이 더해져<br />더욱 든든하게 즐길 수 있는 웜볼</dt>
                </dl>
            </div>
            <div className={styles.content}>
                <div className={styles.lnbWrap2}>
                    <ul>
                        <li>
                            <h2>웜볼</h2>
                        </li>
                    </ul>
                </div>
                <div className={styles.lnbWrap3}>
                    <ul>
                        <li className={styles.li__bg}><Link to="/bowl">칠리베이컨 웜볼</Link></li>
                        <li><Link to="/bowl1">우삼겹 웜볼</Link></li>
                        <li><Link to="/bowl2">팔라펠단호박 웜볼</Link></li>
                        <li><Link to="/bowl3">고추장머쉬룸 웜볼</Link></li>
                        <li><Link to="/bowl4">할라피뇨치킨 웜볼</Link></li>
                    </ul>
                </div>
                <div className={styles.view}>
                    <div className={styles.view__tit}>
                        <h3>칠리베이컨 웜볼</h3>
                        <p>매콤달콤한 감칠맛이 매력적인 샐러디 NO.1 베스트 메뉴</p>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.view__arrow}>
                            <Link to="/bowl1" className={styles.next}>next</Link>
                        </div>
                        <div className={styles.view__cont}>
                            <div className={styles.left__img}>
                                <img src="/images/menu03.jpg" alt="" />
                                <div className={styles.tag__box}>
                                    <span className={styles.best}>BEST</span>
                                </div>
                            </div>
                            <div className={styles.right__txt}>
                                <div className={styles.text}>
                                    <strong>베이스</strong>
                                    <p>채소, 곡물</p>
                                </div>
                                <div className={styles.text}>
                                    <strong>토핑</strong>
                                    <p>베이컨, 에그, 옥수수, 양파플레이크</p>
                                </div>
                                <div className={styles.text}>
                                    <strong>기본 드레싱</strong>
                                    <p>크리미칠리 드레싱</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.view__info}>
                        <div className={styles.view__tit}>
                            <h3>상세설명</h3>
                        </div>
                        <div className={styles.info__box} style={{border:"none"}}>
                            <div className={styles.info__tit}>
                                <img src="/images/info_img_1.png" alt="" />
                                <strong>곡물 구성</strong>
                            </div>
                            <ul>
                                {items.map( (item) => (
                                    <li key={item.id}><Item item={item} /></li>
                                ))}
                            </ul>
                        </div>
                        <div className={styles.info__box}>
                            <div className={styles.info__tit}>
                                <img src="/images/info_img_2.png" alt="" />
                                <strong>채소 구성</strong>
                            </div>
                            <ul>
                                {items2.map( (item) => (
                                    <li key={item.id}><Item item={item} /></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={styles.ingredient}>
                        <div className={styles.view__tit}>
                            <h3>영양성분표</h3>
                        </div>
                        <div className={styles.ing__table}>
                            <table>
                                <tbody>
                                    <tr>
                                        <th>메뉴</th>
                                        <th>열량(kcal)</th>
                                        <th>탄수화물(g)</th>
                                        <th>당류(g)</th>
                                        <th>단백질(g)</th>
                                        <th>지방(g)</th>
                                        <th>포화지방(g)</th>
                                        <th>나트륨(mg)</th>
                                    </tr>
                                    <tr>
                                        <td>칠리베이컨 웜볼</td>
                                        <td>485.4</td>
                                        <td>65.5</td>
                                        <td>5.2</td>
                                        <td>20.3</td>
                                        <td>15.8</td>
                                        <td>5.7</td>
                                        <td>43.8</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}