import React, { useState } from 'react';
import styles from '../css/Store.module.css';
import '../css/Paging.css';
import Footer from './Footer';
import Map from './Map';
import Pagination from "react-js-pagination";

const items = [
    {
        id: 1,
        src: 'images/cate_img_1.png',
        title: '주차',
    },
    {
        id: 2,
        src: 'images/cate_img_2.png',
        title: '포장',
    },
    {
        id: 3,
        src: 'images/cate_img_3.png',
        title: '배달',
    },
    {
        id: 4,
        src: 'images/cate_img_4.png',
        title: '샐러디앱',
    },
    {
        id: 5,
        src: 'images/cate_img_5.png',
        title: '네이버주문',
    },
    {
        id: 6,
        src: 'images/cate_img_6.png',
        title: '친환경 일회용품',
    },
    {
        id: 7,
        src: 'images/cate_img_7.png',
        title: '키오스크',
    },
]

function Item({ item }) {
    return (
        <div className={styles.items}>
            <div className={styles.item__box}>
                <img src={item.src} alt={item.title} />
                <p>{item.title}</p>
            </div>  
        </div>
    )
}

export default function Store({ text }) {
    const [sidebar, setSidebar] = useState(false);
    const [page, setPage] = useState(1);

    const showSidebar = () => setSidebar(!sidebar);
    const handlePageChange = (page) => {
        setPage(page);
    };

    return (
        <div id='Store'>
            <div className={styles.store}>
                <div className={styles.store__title}>
                    <div className={styles.title}>
                        <h1>매장</h1>
                        <div className={styles.line}></div>
                    </div>
                </div>
                <div className={styles.service}>
                    <div className={styles.s__title}>
                        <h2>이용 가능 서비스</h2>
                    </div>
                    <div className={styles.s__box}>
                        <ul onClick={showSidebar}>
                            {items.map((item) => (
                                <li key={item.id}><Item item={item}/></li>
                            ))}
                        </ul>
                    </div>
                    {/* kakaomap */}
                    <Map />
                </div>
            </div>
            <div className={styles.allStore}>
                <div className={styles.store__title}>
                    <div className={styles.title}>
                        <h1>전체 매장</h1>
                        <div className={styles.line}></div>
                    </div>
                </div>
                <div className={styles.map__table}>
                    <table>
                        <colgroup>
                            <col style={{width:"8%"}}/>
                            <col style={{width:"15%"}}/>
                            <col style={{width:"auto"}}/>
                            <col style={{width:"20%"}}/>
                            <col style={{width:"15%"}}/>
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>번호</th>
                                <th>매장명</th>
                                <th>주소</th>
                                <th>이용서비스</th>
                                <th>연락처</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>샐러디 선릉점</td>
                                <td className={styles.add}>서울 강남구 선릉로93길 26 (역삼동) 1층</td>
                                <td>
                                    <span className={styles.tag2}></span>
                                    <span className={styles.tag3}></span>
                                    <span className={styles.tag4}></span>
                                    <span className={styles.tag5}></span>
                                    <span className={styles.tag6}></span>
                                    <span className={styles.tag7}></span>
                                </td>
                                <td>02-556-4066</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>샐러디 연세대점</td>
                                <td className={styles.add}>서울 서대문구 연세로 50-1 (신촌동) 지하1층</td>
                                <td>
                                    <span className={styles.tag1}></span>
                                    <span className={styles.tag2}></span>
                                    <span className={styles.tag3}></span>
                                    <span className={styles.tag4}></span>
                                    <span className={styles.tag5}></span>
                                    <span className={styles.tag6}></span>
                                </td>
                                <td>02-312-8696</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>샐러디 역삼점</td>
                                <td className={styles.add}>서울 강남구 테헤란로22길 14 (역삼동) 1층</td>
                                <td>
                                    <span className={styles.tag2}></span>
                                    <span className={styles.tag3}></span>
                                    <span className={styles.tag4}></span>
                                    <span className={styles.tag5}></span>
                                    <span className={styles.tag6}></span>
                                    <span className={styles.tag7}></span>
                                </td>
                                <td>02-538-4066</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>샐러디 삼성점</td>
                                <td className={styles.add}>서울 강남구 삼성로96길 6 (삼성동) 1층</td>
                                <td>
                                    <span className={styles.tag2}></span>
                                    <span className={styles.tag3}></span>
                                    <span className={styles.tag4}></span>
                                    <span className={styles.tag5}></span>
                                    <span className={styles.tag7}></span>
                                </td>
                                <td>02-2191-5071</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>샐러디 이화여대점</td>
                                <td className={styles.add}>서울 서대문구 이화여대길 52 (대현동) 지하4층</td>
                                <td>
                                    <span className={styles.tag1}></span>
                                    <span className={styles.tag2}></span>
                                    <span className={styles.tag4}></span>
                                    <span className={styles.tag5}></span>
                                    <span className={styles.tag7}></span>
                                </td>
                                <td>02-3277-4856</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>샐러디 덕수궁롯데캐슬점</td>
                                <td className={styles.add}>서울 중구 서소문로9길 28 (순화동, 덕수궁롯데캐슬) 제지1층</td>
                                <td>
                                    <span className={styles.tag1}></span>
                                    <span className={styles.tag2}></span>
                                    <span className={styles.tag3}></span>
                                    <span className={styles.tag4}></span>
                                    <span className={styles.tag5}></span>
                                    <span className={styles.tag6}></span>
                                    <span className={styles.tag7}></span>
                                </td>
                                <td>02-778-0828</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>샐러디 롯데마트삼산점</td>
                                <td className={styles.add}>인천 부평구 길주로 623 (삼산동) 롯데마트 삼산점 지하1층</td>
                                <td>
                                    <span className={styles.tag1}></span>
                                    <span className={styles.tag2}></span>
                                    <span className={styles.tag3}></span>
                                    <span className={styles.tag4}></span>
                                    <span className={styles.tag5}></span>
                                </td>
                                <td>032-363-2131</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>샐러디 문정엠스테이트점</td>
                                <td className={styles.add}>서울 송파구 법원로 114 (문정동) 엠스테이트 E동 지하 1층 B176호</td>
                                <td>
                                    <span className={styles.tag1}></span>
                                    <span className={styles.tag2}></span>
                                    <span className={styles.tag3}></span>
                                    <span className={styles.tag4}></span>
                                    <span className={styles.tag5}></span>
                                    <span className={styles.tag6}></span>
                                </td>
                                <td>02-6177-9210</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>샐러디 롯데마트서울양평점</td>
                                <td className={styles.add}>서울 영등포구 선유로 138 (양평동3가) 1층</td>
                                <td>
                                    <span className={styles.tag1}></span>
                                    <span className={styles.tag2}></span>
                                    <span className={styles.tag3}></span>
                                    <span className={styles.tag4}></span>
                                    <span className={styles.tag5}></span>
                                </td>
                                <td>070-7761-4811</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>샐러디 보라매점</td>
                                <td className={styles.add}>서울 동작구 보라매로5길 43 (신대방동, 보라매삼성쉐르빌) 1층</td>
                                <td>
                                    <span className={styles.tag1}></span>
                                    <span className={styles.tag2}></span>
                                    <span className={styles.tag3}></span>
                                    <span className={styles.tag4}></span>
                                    <span className={styles.tag5}></span>
                                    <span className={styles.tag6}></span>
                                    <span className={styles.tag7}></span>
                                </td>
                                <td>02-832-7008</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Pagination
                    hideDisabled
                    activePage={page}
                    itemsCountPerPage={10}
                    totalItemsCount={100}
                    pageRangeDisplayed={10}
                    prevPageText={"‹"}
                    nextPageText={"›"}
                    onChange={handlePageChange}
                />
            </div>
            <Footer />
        </div>
    )
}
