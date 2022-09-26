import React, { useState } from 'react';
import Footer from './Footer.jsx'
import styles from '../css/Notice.module.css'
import '../css/Paging.css';
import Pagination from "react-js-pagination";


export default function Notice() {
    const [page, setPage] = useState(1);

    const handlePageChange = (page) => {
        setPage(page);
    };

    return (
        <div id="FAQ">
            <div className={styles.notice}>
                <div className={styles.notice__title}>
                    <div className={styles.title}>
                        <h1>공지사항 및 보도자료</h1>
                        <div className={styles.line}></div>
                    </div>
                </div>
                <div className={styles.notice}>
                    <div className={styles.accordion}>
                    <div className={styles.sb__wrap}>
                        <div className={styles.sb__search}>
                            <span>전체 <strong>109</strong>건</span>
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
                        {/* table */}
                        <div className={styles.sb__list}>
                            <table className={styles.list__tbl}>
                                <colgroup>
                                    <col style={{width:"70px"}}/>
                                    <col style={{width:"auto"}}/>
                                    <col style={{width:"120px"}}/>
                                    <col style={{width:"70px"}}/>
                                    <col style={{width:"70px"}}/>
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th>제목</th>
                                        <th>작성자</th>
                                        <th>작성일</th>
                                        <th>조회</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className={styles.tr__notice}>
                                        <td className={styles.no}>[공지]</td>
                                        <td className={styles.sbj}>(공지) 신규 앱 이벤트</td>
                                        <td>관리자</td>
                                        <td>22.09.07</td>
                                        <td>104</td>
                                    </tr>
                                    <tr className={styles.tr__notice}>
                                        <td className={styles.no}>[공지]</td>
                                        <td className={styles.sbj}>(공지) 블렌딩티 주문 관련 안내</td>
                                        <td>관리자</td>
                                        <td>22.09.06</td>
                                        <td>52</td>
                                    </tr>
                                    <tr className={styles.tr__notice}>
                                        <td className={styles.no}>[공지]</td>
                                        <td className={styles.sbj}>(공지) 기존 앱 종료 및 신규 앱 출시 예정 안내_Mobile ver.</td>
                                        <td>관리자</td>
                                        <td>22.07.27</td>
                                        <td>1,605</td>
                                    </tr>
                                    <tr className={styles.tr__notice}>
                                        <td className={styles.no}>[공지]</td>
                                        <td className={styles.sbj}>(공지) 기존 앱 종료 및 신규 앱 출시 예정 안내_PC ver.</td>
                                        <td>관리자</td>
                                        <td>22.07.26</td>
                                        <td>681</td>
                                    </tr>
                                    <tr className={styles.tr__notice}>
                                        <td className={styles.no}>[공지]</td>
                                        <td className={styles.sbj}>(공지) 샐러드 프랜차이즈 1위, 샐러디 창업 특전 프로모션 진행 중!</td>
                                        <td>관리자</td>
                                        <td>22.06.30</td>
                                        <td>452</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.no}>104</td>
                                        <td className={styles.sbj}>
                                            <img src="/images/sb_ico_notice.png" alt="" />
                                            샐러드 전문 프랜차이즈 ‘샐러디’, 가을맞이 신메뉴 2종 출시
                                        </td>
                                        <td>관리자</td>
                                        <td>22.09.14</td>
                                        <td>4</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.no}>103</td>
                                        <td className={styles.sbj}>
                                            <img src="/images/sb_ico_notice.png" alt="" />
                                            샐러드 브랜드 ‘샐러디’, 2022 프랜차이즈 창업박람회 참가
                                        </td>
                                        <td>관리자</td>
                                        <td>22.09.13</td>
                                        <td>37</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.no}>102</td>
                                        <td className={styles.sbj}>레이지랩, 한입사이즈 프로틴 웨하스 '웨이피초코, 웨이피바닐라' 출시</td>
                                        <td>관리자</td>
                                        <td>22.09.05</td>
                                        <td>46</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.no}>101</td>
                                        <td className={styles.sbj}>(공지) 스프라이트제로 주문 관련 안내</td>
                                        <td>관리자</td>
                                        <td>22.07.26</td>
                                        <td>206</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.no}>100</td>
                                        <td className={styles.sbj}>샐러디, '300호점' 돌파... 2013년 1호 선릉점 오픈 10년만</td>
                                        <td>관리자</td>
                                        <td>22.07.20</td>
                                        <td>214</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.no}>99</td>
                                        <td className={styles.sbj}>레이지랩, 프로틴 드링크 '두링크 초코' 출시</td>
                                        <td>관리자</td>
                                        <td>22.07.18</td>
                                        <td>141</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.no}>98</td>
                                        <td className={styles.sbj}>(공지) 일부 메뉴 가격 인상 안내</td>
                                        <td>관리자</td>
                                        <td>22.06.27</td>
                                        <td>435</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.no}>97</td>
                                        <td className={styles.sbj}>행복마을 꿈나무 생일 파티</td>
                                        <td>관리자</td>
                                        <td>22.06.27</td>
                                        <td>191</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.no}>96</td>
                                        <td className={styles.sbj}>(공지) 카피콜라 제공 일시 중단에 대한 고객 안내문</td>
                                        <td>관리자</td>
                                        <td>22.06.10</td>
                                        <td>426</td>
                                    </tr>
                                    <tr>
                                        <td className={styles.no}>95</td>
                                        <td className={styles.sbj}>샐러드 프랜차이즈 카페 샐러디, SBS 예능 '런닝맨' PPL 진행</td>
                                        <td>관리자</td>
                                        <td>22.05.24</td>
                                        <td>258</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={styles.mb}></div>
                        {/* pagination */}
                        <Pagination
                                hideDisabled
                                activePage={page}
                                itemsCountPerPage={10}
                                totalItemsCount={109}
                                pageRangeDisplayed={10}
                                prevPageText={"‹"}
                                nextPageText={"›"}
                                onChange={handlePageChange}
                            />
                    </div>
                    </div>
                </div>
                <Footer />
            </div>
            {/* footer */}
        </div>
    );
}