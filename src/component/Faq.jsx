import React, { useState } from 'react';
import Footer from './Footer.jsx'
import Accordion from 'react-bootstrap/Accordion';
import Pagination from "react-js-pagination";
import styles from '../css/Faq.module.css'
import '../css/Accordion.css';
import '../css/Paging.css';


export default function FAQ() {
    const [page, setPage] = useState(1);

    const handlePageChange = (page) => {
        setPage(page);
    };

    return (
        <div id="FAQ">
            <div className={styles.faq}>
                <div className={styles.faq__title}>
                    <div className={styles.title}>
                        <h1>가장 자주 하는 질문 FAQ</h1>
                        <div className={styles.line}></div>
                    </div>
                </div>
                <div className={styles.faq}>
                    <div className={styles.accordion}>
                    <div className={styles.sb__wrap}>
                        <div className={styles.sb__search}>
                            <span>전체 <strong>35</strong>건</span>
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
                        <ul className={styles.category}>
                            <li><p>ALL</p></li>
                            <li><p>풀잎 및 멤버십</p></li>
                            <li><p>앱 이용 관련</p></li>
                            <li><p>결제 및 환불</p></li>
                            <li><p>이벤트 및 프로모션</p></li>
                            <li><p>메뉴 관련</p></li>
                            <li><p>기타</p></li>
                        </ul>
                        <Accordion>
                            <Accordion.Item eventKey="0" style={{ border:'none', borderBottom:'1px solid #ccc' }}>
                                <Accordion.Header style={{ borderTop : '1px solid #000'}}>
                                    <div className={styles.question_mark}></div>
                                        <p>샐러디에 대한 문의는 어디서 할 수 있나요?</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                        <span>'샐러디 공식 홈페이지' 및 '앱 〉자주 묻는 질문' 내 활성화 되어 있는 채널톡 버튼을 클릭하시면 빠르게 답변 받으실 수 있습니다. </span><br/>
                                        <br />
                                        <span>또한 '앱 〉자주 묻는 질문' 에 앱 관련하여 회원분들께서 자주 묻는 질문이 정리되어 있습니다.</span>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" style={{ border:'none', borderBottom:'1px solid #ccc' }}>
                                <Accordion.Header>
                                    <div className={styles.question_mark}></div>
                                        <p>모바일 기프티콘(스마일콘, 샐러디 기프티콘) 사용할 때 현금영수증 처리가 가능한가요?</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <span>네 가능합니다.</span><br />
                                    <span>다만 즐거운 기프티콘은 샐러디 앱에서 사용이 불가하고, 오프라인에서만 사용이 가능합니다.</span><br />
                                    <span>현금영수증은 이용하신 매장에서 처리가 가능하니 이용하신 매장에 문의 부탁드립니다.</span>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" style={{ border:'none', borderBottom:'1px solid #ccc' }}>
                                <Accordion.Header>
                                    <div className={styles.question_mark}></div>
                                    <p>단체주문 or 정기배송이 가능한가요?</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <span>샐러디는 현재 공식적으로 단체주문 및 정기배송 서비스를 시행하고 있지 않으나, 일부 매장에 한하여 자체적으로 서비스를 운영하고 있습니다. 서비스 운영 여부 관련 문의는 이용 매장에 연락하셔서 확인 부탁드립니다.</span><br />
                                    <br />
                                    <span>단체주문 접수 서비스와 정기 배송 서비스는 샐러디에서 공식적으로 진행하는 서비스가 아니므로 서비스 이용 관련 문의사항은 본사에서 담당하고 있지 않습니다. 단체주문 및 정기배송 서비스이용 관련(결제, 메뉴, 금액 등) 문의사항은 이용하시려고 하는 매장에 직접 문의 부탁드립니다.</span>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" style={{ border:'none', borderBottom:'1px solid #ccc' }}>
                                <Accordion.Header>
                                    <div className={styles.question_mark}></div>
                                        <p>샐러디의 식재료는 GMO FREE 인가요?</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                        <span>샐러디의 메뉴 제조 시 사용되는 주요 식재료(채소, 드레싱, 가공육 등)는 GMO(유전자 재조합 농산물)를 원료로 사용하지 않은 안심할 수 있는 식품입니다.</span><br />
                                        <br />
                                        <span>GMO식품은 과학적으로 위해성이 입증된 적은 없으나 섭취할 경우 인체에 나쁜 영향을 미칠 수 있다는 우려가 있습니다.</span><br />
                                        <br />
                                        <span>앞으로도 믿고 드실 수 있는, 건강하고 맛있는 한 끼를 제공하는 샐러디가 되겠습니다.</span><br />
                                        <br />
                                        <span>
                                            <b>* GMO(Genetically Modified Organisms)?</b><br />
                                            생산성 향상 또는 유통 가공상의 편의를 위해 유전자를 조작하여 본래의 유전자를 변형시킨 농산물
                                        </span>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4" style={{ border:'none', borderBottom:'1px solid #ccc' }}>
                                <Accordion.Header>
                                    <div className={styles.question_mark}></div>
                                        <p>드레싱 별도 구매 가능한가요?</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                        <span>드레싱의 대량구매와 개별 구매는 불가하신 점 안내드립니다.</span><br />
                                        <br/>
                                        <span>샐러디의 드레싱은 자체 레시피로 자체 제작되었기 때문에 부정적인 사용(타업체에서 판매) 등을 방지하기 위해 메인메뉴를 구매하신 고객에 한해 판매하고 있습니다.</span><br />
                                        <br />
                                        <span>메인메뉴 한개당 1개의 추가 판매는 가능하나 한꺼번에 많은 판매는 이루어지고 있지 않으니 양해부탁드립니다.</span>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5" style={{ border:'none', borderBottom:'1px solid #ccc' }}>
                                <Accordion.Header>
                                    <div className={styles.question_mark}></div>
                                        <p>닭가슴살에 검은 입자가 보이는데 무엇인가요?</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <span>샐러디에서 사용 중인 닭가슴살은 '샐러디'와 'CJ제일제당'이 직접 개발한 시즈닝으로 마리네이드 후 조리되는 제품입니다.</span><br />
                                    <br/>
                                    <span>문의주신, 닭가슴살에 검게 보이는 입자는 흑후추 및 향신료에 포함된 타임, 로즈마리, 레드페퍼, 오레가노 등과 같은 허브류 등이 블렌딩된 시즈닝입니다.</span><br />
                                    <br />
                                    <span>닭가슴살의 풍미와 부드러움을 더해주는 시즈닝이므로 안심하고 드셔도 된다는 점 안내드립니다.</span>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6" style={{ border:'none', borderBottom:'1px solid #ccc' }}>
                                <Accordion.Header>
                                    <div className={styles.question_mark}></div>
                                        <p>회원 탈퇴는 어떻게 하나요?</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <span>샐러디 앱 탈퇴는 앱 내에서 할 수 있습니다. 앱 탈퇴 시점에 보유하고 있는 모든 자산은 사라지며, 같은 명의로 재가입해도 원복되지 않습니다.</span><br />
                                    <br/>
                                    <span>
                                        단, 기프트카드 잔액이 남아 있는 경우 샐러디 앱 내에서 환불이 되지 않습니다.<br />
                                        이 경우 고객님께서 직접 채널톡을 통해 탈퇴 의사를 밝혀주셔야 탈퇴 처리가 가능한 점 안내드립니다.<br />
                                        * 회원 탈퇴 경로: 좌측 상단 3단 메뉴 바 〉000님 안녕하세요 〉우측 하단 '회원탈퇴'<br />
                                    </span>
                                    <br />
                                    <span>
                                        [회원 탈퇴 시 유의사항]<br />
                                        * 탈퇴 후 30일간 재가입이 제한됩니다.<br />
                                        * 1년간 로그인 또는 이용 기록이 없는 회원은 휴면 회원으로 전환되며, 휴면 회원이 다시 로그인을 시도하는 경우 몇가지 절차를 거쳐야할 수 있습니다.<br />
                                    </span>
                                    <br />
                                    <span>
                                        [기프트 카드 잔액 보유 회원의 환불 및 회원 정보 확인 내용]<br />
                                        고객정보: 이름, 휴대폰번호, 아이디<br />
                                        통장정보: 이름, 은행명, 계좌번호(고객 명의와 일치하는 통장이어야 함)<br />
                                    </span>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7" style={{ border:'none', borderBottom:'1px solid #ccc' }}>
                                <Accordion.Header>
                                    <div className={styles.question_mark}></div>
                                        <p>쿠폰 종류와 사용 방법이 궁금해요!</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                        <span>
                                        쿠폰 정보 및 멤버십 정보는 아래 경로에서 자세하게 확인이 가능합니다.<br />
                                        </span>
                                        <br />
                                        <span>* 신규 앱 〉왼쪽 상단 3단 메뉴 바 〉멤버십 안내</span>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="8" style={{ border:'none', borderBottom:'1px solid #ccc' }}>
                                <Accordion.Header>
                                    <div className={styles.question_mark}></div>
                                        <p>개인정보 수정은 어떻게 할 수 있나요?</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                        <span>샐러디 앱 내 로그인하여 직접 변경가능합니다.</span><br />
                                        <br />
                                        <span>
                                            *샐러디 앱 〉왼쪽 상단 3단 메뉴 바 〉'000님 안녕하세요' 클릭 〉개인정보 변경<br /> 
                                            위 경로에서 변경이 불가한 정보는 샐러디 채널톡으로 문의주시면 변경이 가능합니다.<br />
                                        </span>
                                        <br />
                                        <span>단, 회원의 이름, ID, 생일은 샐러디 본사를 통해서도 수정이 불가합니다.</span>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="9" style={{ border:'none', borderBottom:'1px solid #ccc' }}>
                                <Accordion.Header>
                                    <div className={styles.question_mark}></div>
                                        <p>샐러디 오더 주문 시 수령 시간(예약)을 설정할 수 있나요?</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                        <span>샐러디 오더는 예약을 위한 서비스가 아니므로 수령 시간을 설정할 수는 없습니다.</span><br />
                                        <br />
                                        <span>다만 주문 시 매장에 요청사항에 픽업 희망 시간을 기록해주시면 매장에서 확인이 가능하오니 픽업 시간에 대한 문의는 매장 요청사항을 통해 진행해주시기 바랍니다.</span>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Pagination
                                hideDisabled
                                activePage={page}
                                itemsCountPerPage={10}
                                totalItemsCount={35}
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