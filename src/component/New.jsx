import React, { useState } from 'react';
import styles from '../css/New.module.css';
import '../css/Paging.css';
import Pagination from "react-js-pagination";
import Footer from './Footer';

const items = [
    {
        id: 1,
        src: 'images/event_01.jpg',
        ico: '진행중',
        sbj: 'images/sb_ico_notice.png',
        sbj1: '[공지] 샐러디 신규 앱 이벤트',
        date: '이벤트기간',
        date1: '2022/09/07~2025/12/31'
    },  
    {
        id: 2,
        src: 'images/event_02.jpg',
        ico: '종료',
        sbj1: '<EVENT> 샐러디x배민1 프로모션',
        date: '이벤트기간',
        date1: '2021/10/11~2021/10/17'
    }, 
    {
        id: 3,
        src: 'images/event_03.jpg',
        ico: '종료',
        sbj1: '<EVENT> 가을 신메뉴 10% 할인',
        date: '이벤트기간',
        date1: '2021/09/01~2021/09/30'
    }, 
    {
        id: 4,
        src: 'images/event_04.png',
        ico: '종료',
        sbj1: '<EVENT> 신규 앱 등급 업그레이드 이벤트 (*기존 앱 회원대상)',
        date: '이벤트기간',
        date1: '2021/07/26~2021/09/17'
    }, 
    {
        id: 5,
        src: 'images/event_05.jpg',
        ico: '종료',
        sbj1: '<EVENT> 여름 한정 메뉴 10% 할인',
        date: '이벤트기간',
        date1: '2021/06/20~2021/06/30'
    }, 
    {
        id: 6,
        src: 'images/event_06.jpg',
        ico: '종료',
        sbj1: '<EVENT> 스프라이트 제로와 함께 하는 COOL SUMMER EVENT',
        date: '이벤트기간',
        date1: '2021/06/02~2021/06/30'
    }, 
    {
        id: 7,
        src: 'images/event_07.jpg',
        ico: '종료',
        sbj1: '<EVENT> 샐러디x빅스마일데이 금액권 할인!',
        date: '이벤트기간',
        date1: '2021/05/10~2021/05/18'
    }, 
    {
        id: 8,
        src: 'images/event_08.png',
        ico: '종료',
        sbj1: '<EVENT> 샐러디x라크로이 탄산수 배달 리뷰 이벤트',
        date: '이벤트기간',
        date1: '2021/03/15~2021/04/30'
    }, 
    {
        id: 9,
        src: 'images/event_09.png',
        ico: '종료',
        sbj1: "<EVENT> '쿠팡이츠'에서 샐러디 5000원 할인!",
        date: '이벤트기간',
        date1: '2021/01/04~2021/01/10'
    },
    {
        id: 10,
        src: 'images/event_10.png',
        ico: '종료',
        sbj1: "<EVENT> '네이버 스마트주문' 이용 방법 및 혜택",
        date: '이벤트기간',
        date1: '2021/12/30~2021/12/31'
    },
    {
        id: 11,
        src: 'images/event_11.jpg',
        ico: '종료',
        sbj1: '<EVENT> 12월의 샐럽 혜택',
        date: '이벤트기간',
        date1: '2020/12/02~2020/12/31'
    },
]


function Item({ item }) {
    return (
        <div className={styles.items}>
            <dl>
                <dt>
                    <div className={styles.tmb}>
                        <img src={item.src} alt="" />
                    </div>
                </dt>
                <dd>
                    <span className={styles.ico}>{item.ico}</span>    
                    <span className={styles.sbj}>
                        <img src={item.sbj} alt="" />
                        {item.sbj1}
                    </span>
                    <span className={styles.date}>
                        <strong>{item.date}</strong>
                        {item.date1}
                    </span>
                </dd>
            </dl>
        </div>
    )
}

export default function New() {
    const [page, setPage] = useState(1);

    const handlePageChange = (page) => {
        setPage(page);
    };

    return (
        <div id="New">
            <div className={styles.new}>
                <div className={styles.new__title}>
                    <div className={styles.title}>
                        <h1>이벤트</h1>
                        <div className={styles.line}></div>
                        <div className={styles.sb__wrap}>
                            <div className={styles.sb__search}>
                                <span>전체 <strong>23</strong>건</span>
                                <form>
                                    <fieldset className={styles.fieldset}>
                                        <legend>게시판 검색</legend>
                                        <div className={styles.where}>
                                            <select name="search" id="search">
                                                <option value="all">전체</option>
                                                <option value="title">제목</option>
                                                <option value="member_id">회원아이디</option>
                                                <option value="name">작성자</option>
                                                <option value="content">내용</option>
                                            </select>
                                        </div>
                                        <div className={styles.inp}>
                                            <input type="text" name="txt_search" className={styles.keyword} placeholder="검색어를 입력해주세요." maxLength="30" />
                                            <input type="submit" value="검색" className={styles.sbm} />
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                            <ul className={styles.sb__event}>
                                {items.map( (item) => (
                                    <li key={item.id}><Item item={item} /></li>
                                ))}
                            </ul>
                            <Pagination
                                hideDisabled
                                activePage={page}
                                itemsCountPerPage={11}
                                totalItemsCount={33}
                                pageRangeDisplayed={11}
                                prevPageText={"‹"}
                                nextPageText={"›"}
                                onChange={handlePageChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}