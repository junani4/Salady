import React from 'react';
import { Link } from "react-router-dom";
import Footer from '../component/Footer';
import styles from '../css/Bowl.module.css';

// const items = [
//     {
//         id: 1,
//         src: 'images/ing01.jpg',
//         title: '귀리',
//     },
//     {
//         id: 2,
//         src: 'images/ing02.jpg',
//         title: '찹쌀',
//     },
//     {
//         id: 3,
//         src: 'images/ing03.jpg',
//         title: '찰보리',
//     },
// ]

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
    // {
    //     id: 5,
    //     src: 'images/ing08.jpg',
    //     title: '방울토마토',
    // },
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


export default function Wrap() {
    return (
        <div id="wrap">
            <div className={styles.bowl}>
                <img src="images/sand01.jpg" alt="" />
                <dl>
                    <dt className={styles.bowl__text}>또띠아로 돌돌 말아낸 맛있고 간편한 랩/웜랩과<br /> 씹을수록 고소한 귀리번이 매력적인 샌드</dt>
                </dl>
            </div>
            <div className={styles.content}>
                <div className={styles.wrap2}>
                    <ul>
                        <li><Link to="/sand">샌드</Link></li>
                        <li><Link to="/wrap">랩</Link></li>
                        <li><Link to="/warmWrap">웜랩</Link></li>
                    </ul>
                </div>
                <div className={styles.sandWrap3}>
                    <ul>
                        <li className={styles.li__bg}><Link to="/wrap">멕시칸 랩</Link></li>
                        <li><Link to="/wrap1">시저치킨 랩</Link></li>
                        <li><Link to="/wrap2">크랜베리그릭 랩</Link></li>
                        <li><Link to="/wrap3">크리미연어 랩</Link></li>
                    </ul>
                </div>
                <div className={styles.view}>
                    <div className={styles.view__tit}>
                        <h3>멕시칸 랩</h3>
                        <p>또띠아 속 바삭한 나쵸와 고소한 미트가 어우러진 샐러디 스테디 메뉴</p>
                    </div>
                    <div className={styles.body}>
                        <div className={styles.view__arrow}>
                            <Link to="/sand3" className={styles.prev}>prev</Link>
                            <Link to="/wrap1" className={styles.next}>next</Link>
                        </div>
                        <div className={styles.view__cont}>
                            <div className={styles.left__img}>
                                <img src="/images/menu04.jpg" alt="" />
                                <div className={styles.tag__box}>
                                    <span className={styles.best}>BEST</span>
                                </div>
                            </div>
                            <div className={styles.right__txt}>
                                <div className={styles.text}>
                                    <strong>베이스</strong>
                                    <p>채소</p>
                                </div>
                                <div className={styles.text}>
                                    <strong>토핑</strong>
                                    <p>그라운드미트, 나쵸칩, 사워크림</p>
                                </div>
                                <div className={styles.text}>
                                    <strong>기본 드레싱</strong>
                                    <p>크리미칠리</p>
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
                            {/* <ul>
                                {items.map( (item) => (
                                    <li key={item.id}><Item item={item} /></li>
                                ))}
                            </ul> */}
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
                                        <td>멕시칸 랩</td>
                                        <td>565.6</td>
                                        <td>53.9</td>
                                        <td>10</td>
                                        <td>15.2</td>
                                        <td>32.6</td>
                                        <td>7.3</td>
                                        <td>892.7</td>
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