import React  from 'react';
import Footer from './Footer';
import Accordion from 'react-bootstrap/Accordion';
import styles from '../css/Franchise.module.css';
import '../css/Accordion.css';

// items
const items = [
    {
        id: 1,
        title: 'Step.01',
        text: '전화 및 방문상담'
    },
    {
        id: 2,
        title: 'Step.02',
        text: '상권분석 및 입지선정'
    },
    {
        id: 3,
        title: 'Step.03',
        text: '가맹계약 체결'
    },
    {
        id: 4,
        title: 'Step.04',
        text: '가맹점주 본사 교육'
    },
    {
        id: 5,
        title: 'Step.05',
        text: '인테리어 시공',
        em: '(약 3주 소요)'
    },
    {
        id: 6,
        title: 'Step.06',
        text: '오픈 최종 준비'
    },
    {
        id: 7,
        title: 'Step.07',
        text: '오픈 및 유지관리'
    },
    {
        id: 8,
        title: 'Step.08',
        text: '사후 관리 및 영업 지원'
    },
];

// items2
const items2 = [
    {
        id: 1,
        src: 'images/support_list_ico01.png',
        title: '데이터에 기반한 입지 분석'
    },
    {
        id: 2,
        src: 'images/support_list_ico02.png',
        title: '오픈 마케팅 무상 제공'
    },
    {
        id: 3,
        src: 'images/support_list_ico03.png',
        title: '계절별 신메뉴 출시'
    },
    {
        id: 4,
        src: 'images/support_list_ico04.png',
        title: '다양한 브랜드와의\n 협업 마케팅'
    },
    {
        id: 5,
        src: 'images/support_list_ico05.png',
        title: '전문인력의\n 정기방문을 통한 수익률 관리'
    },
];

function Item({ item }) {
    return (
        <div className={styles.items}>
            <div className={styles.item__box}>
                <span>{item.title}</span>
                <p>{item.text}</p>
                <em>{item.em}</em>
            </div>  
        </div>
    )
}

function Item2({ item2 }) {
    return (
        <div className={styles.items2}>
            <div className={styles.item2__box}>
                <div className={styles.item2__bg}>
                    <img src={item2.src} alt={item2.title} />
                </div>
                <span>{item2.title}</span>
            </div>  
        </div>
    )
}

const Franchise = () => {
    
    return (
        <div id="franchise">
            <div className={styles.franchise}>
                <div className={styles.f__title}>
                    <div className={styles.title}>
                        <h1>프랜차이즈</h1>
                        <div className={styles.line}></div>
                    </div>
                </div>
                <div className={styles.franchise}>
                    <div className={`${styles.info} ${styles.info__img01}`}>
                        <dl className={styles.info__img__text}>
                            <dt>데이터로 입증된 연간 평균 영업이익률 25%</dt>
                            <dd>
                                샐러디는 매월/분기별 전체 가맹점의 매출, 원가율, 임대료, 인건비 등의 데이터를 추적합니다. <br />
                                <b>실제 데이터에 기반한 전체 매장의 평균 영업이익률은 25% 수준입니다.</b><br /> 
                                지속가능한 프랜차이즈의 가장 중요한 요소는 점주님의 노력에 합당한 이익입니다.
                            </dd>
                            <dd className={styles.text__dd}>*2021년 기준, 파악 불가 매장 및 특수상권 매장 제외, 자체 추산</dd>
                        </dl>
                    </div>
                    <div className={`${styles.info} ${styles.info__img02}`}>
                        <dl className={styles.info__img__text}>
                            <dt>지속가능한 브랜드</dt>
                            <dd>
                                <b>샐러디는 지속가능한 브랜드가 되기 위해 노력합니다.</b> 친환경 정책을 펼치고 비건 옵션을 제공하는 등<br />
                                지속가능성을 위해 사람들의 건강과 지구의 건강에 기여하고자 합니다.<br />
                                샐러디 매장을 운영하는 것이 합당한 이익을 얻을 수 있는 것과 더불어 자랑스러운 일이 될 수 있도록 최선을 다하고 있습니다.
                            </dd>
                        </dl>
                    </div>
                    <div className={`${styles.info} ${styles.info__img03}`}>
                        <dl className={styles.info__img__text}>
                            <dt>Farm to Table</dt>
                            <dd>
                                <b>샐러디는 자체 농장인 ‘샐러디 팜’과 자체 가공공장인 ‘샐러디 키친’을 운영합니다.</b><br/>
                                1만평 규모의 농장을 직접 관리하고 채소의 세척 및 절단 과정도 꼼꼼하게 직접 진행합니다.<br/>
                                채소의 수확부터 고객에게 제공되는 모든 순간을 내재화하여 샐러드를 판매하는 브랜드에게 가장 중요한 채소 공급의 안정성을 확보하였습니다.
                            </dd>
                        </dl>
                    </div>
                    <div className={`${styles.info} ${styles.info__img04}`}>
                        <dl className={styles.info__img__text}>
                            <dt>지속가능한 새로움</dt>
                            <dd>
                                <b>샐러디는 매년 4회, 분기별 계절메뉴를 출시합니다.</b><br />
                                또한, 연간 혹은 비정기적으로 진행되는 전체 메뉴개편시 판매율이 높은 계절메뉴를 정식 메뉴로 추가합니다.<br />
                                고객이 건강한 패스트푸드를 지속적으로 즐길 수 있도록 질리지 않는 다양한 메뉴들을 끊임 없이 개발합니다.
                            </dd>
                        </dl>
                    </div>
                    <div className={`${styles.info} ${styles.info__img05}`}>
                        <dl className={styles.info__img__text}>
                            <dt>업계 최고 수준의 교육</dt>
                            <dd>
                                <b>샐러디는 브랜드가 추구하는 방향을 모든 매장에서 동일하게 제공하고자,<br />
                                업계 최고 수준의 매뉴얼과 교육 시스템을 제공합니다.</b> 매장 운영시 발생할 수 있는 다양한 경우에 맞게<br />
                                디테일을 놓치지 않는 교육체계를 갖추고 있습니다.
                            </dd>
                        </dl>
                    </div>
                    <div className={`${styles.info} ${styles.info__img06}`}>
                        <dl className={styles.info__img__text}>
                            <dt>좁힐 수 없는 격차</dt>
                            <dd>
                                채소 공급부터 가공까지 수직계열화, 최고 수준의 평당 평균매출, 합리적인 영업이익률,<br />
                                업계 최고 수준의 교육 등 샐러디는 시장 내 새로 진입한 다른 브랜드들이 따라올 수 없는 격차를 만들었습니다.<br />
                                <b>샐러디는 전체 매장의 매출과 매장 수, 브랜드 인지도 측면에서 압도적인 리딩 브랜드입니다.</b>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
            {/* 가맹입지조건 */}
            <div className={styles.s__title}>
                <div className={styles.title}>
                    <h1>가맹 입지 조건</h1>
                    <div className={styles.line}></div>
                    <p className={styles.s__text}>
                        - 샐러디의 입지 데이터 분석 모델에서 "평균 수익률 이상"으로 예측되는 입지<br />
                        - 10평 이상의 "1층 로드샵"<br />
                        - “특수상권”은 본사와 협의 후 진행
                    </p>
                </div>
            </div>
            {/* 가맹절차 */}
            <div className={styles.sb__title}>
                <div className={styles.inner}>
                    <div className={styles.step__box}>
                        <h3>가맹 절차</h3>
                        <ul>
                            {items.map( (item) => (
                                <li key={item.id}><Item item={item}/></li>
                            ))}
                        </ul>
                    </div>
                    <div className={styles.step__box}>
                        <h3>본사 지원 사항</h3>
                        <ul>
                            {items2.map( (item2) => (
                                <li key={item2.id}><Item2 item2={item2} /></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            {/* 가맹 관련 FAQ */}
            <div className={styles.faq__title}>
                <div className={styles.faq}>
                    <h1>가맹 관련 FAQ</h1>
                    <div className={styles.faq__line}></div>
                    <div className={styles.sb__wrap}>
                        <div className={styles.sb__search}>
                            <span>전체 <strong>6</strong>건</span>
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
                        <Accordion>
                            <Accordion.Item eventKey="0" style={{ border:'none', borderBottom:'1px solid #ccc' }}>
                                <Accordion.Header style={{ borderTop : '1px solid #000'}}>
                                    <div className={styles.question_mark}></div>
                                        <p>식자재 비용 혹은 인건비 등은 얼마나 드나요?</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                        <span>식자재 비용은 일반 프랜차이즈 식당들과 비슷한 수준에서 유지됩니다. 또한 그날 판매할 양만 준비하는 시스템이 갖추어져 있고 손질해야 할 재료가 거의 없기 때문에 재고가 많이 남지 않습니다.</span><br/> 
                                        <span>샐러디는 패스트푸드 모델을 주방에 적용하여 모든 메뉴가 1분 내에 완성되고 많은 인력이 필요하지 않은 구조를 갖추고 있습니다.</span>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" style={{ border:'none', borderBottom:'1px solid #ccc' }}>
                                <Accordion.Header>
                                    <div className={styles.question_mark}></div>
                                        <p>다른 샐러드 전문점 혹은 타 프렌차이즈와의 경쟁력은 무엇인가요?</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <span>샐러디는 샐러드 전문 브랜드 중 성장속도와 가맹 시스템에서 가장 앞서나가고 있으며,<br /> 샐러드 전문점 중 가장 많은 매장을 보유하고 있습니다. 합리적인 가격대로 입지 선정도 타 브랜드보다 용이합니다.<br /> 프랜차이즈 브랜드를 선택할 때에 본사의 신뢰성과 더불어 아이템의 유행성을 고려하셔야 합니다.<br /> 샐러디는 자극적이고 유행을 좇는 메뉴들 대신 자주 찾고 오래 먹을 수 있는 건강한 메뉴들로 구성되어 있습니다.</span>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" style={{ border:'none', borderBottom:'1px solid #ccc' }}>
                                <Accordion.Header>
                                    <div className={styles.question_mark}></div>
                                    <p>가맹 계약기간은 몇년인가요?</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <span>샐러디의 가맹 계약기간은 3년이며, 별도의 사항이 없으면 자동 연장됩니다.<br /> 샐러디 본사는 가맹계약서에 해당하는 내용이 아니면 가맹 계약을 일방적으로 해지할 수 없으며, 부당한 리모델링도 요구하지 않습니다.</span>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" style={{ border:'none', borderBottom:'1px solid #ccc' }}>
                                <Accordion.Header>
                                    <div className={styles.question_mark}></div>
                                        <p>본사에서 가맹점 관리는 어떻게 해주나요?</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                        <span>샐러디 본사 소속의 슈퍼바이저가 정기적으로 방문하여 메뉴얼관리, 재고관리, 레시피 관리, 매출 관리 등을 담당합니다.<br /> 정기적 방문과 더불어 본사와 수시로 소통하는 채널이 항상 마련되어 있습니다. 아직 성장하고 있는 기업이기에 가맹주분들의 의견 역시 적극 반영됩니다.</span>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4" style={{ border:'none', borderBottom:'1px solid #ccc' }}>
                                <Accordion.Header>
                                    <div className={styles.question_mark}></div>
                                        <p>외식업 경험이 없어도 운영이 가능한가요?</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                        <span>샐러디는 대부분의 재료가 반가공 상태로 소포장되어 매장에 매일 배송되기 때문에 특별한 조리가 필요 없습니다.<br /> 1주(직영점 + 매장근무)에 걸친 본사 교육과정을 거치면 누구나 손쉽게 만들 수 있으며 요리 경력의 인력을 채용해야 하는 부담도 전혀 없습니다.</span>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5" style={{ border:'none', borderBottom:'1px solid #ccc' }}>
                                <Accordion.Header>
                                    <div className={styles.question_mark}></div>
                                        <p>최소 평수 및 초기 투자비용은 어떻게 되나요?</p>
                                </Accordion.Header>
                                <Accordion.Body>
                                        <span>
                                            *부동산 제외 비용이며, 평수 및 입지 환경에 따라 달라질 수 있습니다. <br />
                                            *냉난방, 전기증설(15kw), 철거, 인테리어 선택옵션 등 별도의 비용이 발생 할 수 있습니다. <br />
                                            *위 초기 투자비용에는 본사에서 지원해드리는 오픈 마케팅 비용 및 홍보물 비용이 포함되어 있습니다. <br />
                                        </span>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <div className={styles.formWrap}>
                        {/* 가맹 상담 신청하기 */}
                        <div className={styles.form}>
                            <form className={styles.lef} name="writeForm">
                                <div className={styles.form__t}>
                                    <h4>
                                        <strong>가맹 상담 </strong>신청하기
                                    </h4>
                                    <p>가맹 상담은 오프라인 외 온라인으로도 진행하고 있습니다.</p>
                                    <span>
                                        *온라인 접수만 가능하며, 문의량이 많아 접수일로부터 2~3주 후에 연락 받으실 수 있습니다.<br />
                                        *상담 예약 및 지역별 계약 우선순위는 온라인 접수순으로 진행됩니다.
                                    </span>
                                </div>
                                <table className={styles.inqTable}>
                                    <tbody>
                                        <tr>
                                            <th>성함</th>
                                            <td>
                                                <input type="text" name="name" className={styles.typeText}></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>연령대</th>
                                            <td>
                                                <select name="age">
                                                    <option value>선택</option>
                                                    <option value="20대">20대</option>
                                                    <option value="30대">30대</option>
                                                    <option value="40대">40대</option>
                                                    <option value="50대 이상">50대 이상</option>
                                                </select>
                                            </td>
                                        </tr>   
                                        <tr>
                                            <th>연락처</th>
                                            <td>
                                                <div className={styles.tel}>
                                                    <input type="text" name="tel1" maxLength="3" className={styles.typeText} />
                                                    <span className={styles.hyp}> - </span>
                                                    <input type="text" name="tel2" maxLength="4" className={styles.typeText} />
                                                    <span className={styles.hyp}> - </span>
                                                    <input type="text" name="tel3" maxLength="4" className={styles.typeText} />
                                                </div>
                                            </td>
                                        </tr>   
                                        <tr>
                                            <th>이메일</th>
                                            <td>
                                                <div className={styles.mail}>
                                                    <input type="text" name="email1" className={styles.typeText} />
                                                    <span className="at">@</span>
                                                    <input type="text" name="email2" className={styles.typeText} />
                                                    <select name="email_select" id="email_select">
                                                        <option value>직접입력</option>
                                                        <option value="gmail.com">gmail.com</option>
                                                        <option value="naver.com">naver.com</option>
                                                        <option value="hanmail.nte">hanmail.net</option>
                                                        <option value="daum.net">daum.net</option>
                                                    </select>
                                                </div>
                                            </td>
                                        </tr>   
                                        <tr>
                                            <th>희망지역</th>
                                            <td>
                                                <div className={styles.mail}>
                                                    <select name="area">
                                                        <option value>선택</option>
                                                        <option value="서울">서울</option>
                                                        <option value="인천">인천</option>
                                                        <option value="경기">경기</option>
                                                        <option value="강원">강원</option>
                                                        <option value="충남">충남</option>
                                                        <option value="대전">대전</option>
                                                        <option value="충북">충북</option>
                                                        <option value="경북">경북</option>
                                                        <option value="대구">대구</option>
                                                        <option value="울산">울산</option>
                                                        <option value="전북">전북</option>
                                                        <option value="광주">광주</option>
                                                        <option value="전남">전남</option>
                                                        <option value="경남">경남</option>
                                                        <option value="부산">부산</option>
                                                        <option value="제주">제주</option>
                                                    </select>
                                                </div>
                                            </td>
                                        </tr>   
                                        <tr>
                                            <th>오픈유형</th>
                                            <td>
                                                <label><input type="radio" name="open" value="1" checked readOnly/>신규오픈</label>
                                                <label><input type="radio" name="open" value="2" />업종변경</label>
                                                <label><input type="radio" name="open" value="3" />양도양수</label>
                                                <label><input type="radio" name="open" value="4" />기타</label>
                                            </td>
                                        </tr>   
                                        <tr>
                                            <th>점포유무</th>
                                            <td>
                                                <label><input type="radio" name="store" value="Y" />유</label>
                                                &nbsp;&nbsp;
                                                <label><input type="radio" name="store" value="N" />무</label>
                                            </td>
                                        </tr>   
                                        <tr>
                                            <th>점포주소</th>
                                            <td>
                                                <input type="text" name="store_addr" className={styles.typeText} />
                                                <p>(*'유'를 선택하신 경우에는 해당 항목에 점포 주소 및 전용면적을 적어주시기 바랍니다.)</p>
                                            </td>
                                        </tr>   
                                        <tr>
                                            <th>사업예산</th>
                                            <td>
                                                <select name="money">
                                                    <option value>선택하세요</option>
                                                    <option value="5천만원 미만">5천만원 미만</option>
                                                    <option value="5천만원 이상8천만원 미만">5천만원 이상 8천만원 미만</option>
                                                    <option value="8천만원 이상 1억 2천만원 미만">5천만원 이상 1억 2천만원 미만</option>
                                                    <option value="1억 2천만원 이상">1억 2천만원 이상</option>
                                                </select>
                                            </td>
                                        </tr>   
                                        <tr>
                                            <th>오픈 희망일</th>
                                            <td>
                                                <select name="open_date">
                                                    <option value>선택하세요</option>
                                                    <option value="즉시">즉시</option>
                                                    <option value="3개월 이내">3개월 이내</option>
                                                    <option value="3개월 이후">3개월 이후</option>
                                                </select>
                                            </td>
                                        </tr>       
                                    </tbody>
                                </table>
                                <div className={styles.poli}>
                                    [개인정보 수집 및 이용에 대한 동의]<br />
                                    주식회사 샐러디는 다음과 같이 귀하의 개인정보를 수집, 이용할 수 있습니다.<br />
                                    <br />
                                    1. 수집하는 개인정보의 항목<br />
                                    이름, 연령대, 연락처, 이메일, 가맹희망지역, 점포유무, 점포주소(*점포유무에서 ‘유’ 선택한 경우만)<br />
                                    <br />
                                    2. 개인정보의 수집 및 이용목적<br />
                                    창업 문의 상담, 기타 관련 문의사항 답변, 창업 관련 정보제공 및 관련 안내 문자(SMS) 발송<br />
                                    <br />
                                    3. 개인정보의 보유, 이용기간<br />
                                    수집일로부터 5년 또는 목적달성시까지<br /> 
                                    <br />
                                    ※위의 개인정보 수집 및 이용에 대해 동의하지 않을 수 있습니다. 다만, 이에 동의하지 않을 경우 접수가 불가능할 수 있습니다.<br />
                                </div>
                                <div className={styles.labelWrap}>
                                    <label>
                                        <input type="checkbox" name="agree01" value="Y" />
                                        <p>동의합니다</p>
                                    </label>
                                    <label>
                                        <input type="checkbox" name="agree01" value="N" />
                                        <p>동의하지 않습니다</p>
                                    </label>
                                </div>
                                <div className={styles.btnWrap}>
                                    <input type="submit" className={styles.btn} value="상담 신청하기" />
                                </div>
                            </form>
                        </div>
                        {/* 가맹설명회 예약하기 */}
                        <div className={styles.form}>
                            <form className={styles.rig}>
                                <div className={styles.rig__t}>
                                    <h4>
                                        <strong>가맹설명회 </strong>
                                        예약하기
                                    </h4>
                                    <p> 가맹설명회는 강남구 (역삼역)에 위치한 샐러디 본사에서 오프라인으로 진행합니다.</p>
                                    <p className={styles.tel}>
                                        * 접수는 홈페이지로만 가능하며, 개별상담 및 지역별 계약 우선순위는 “가맹상담 신청하기” 접수순으로 결정됩니다. 설명회 신청과 별도로 개별상담을 원하시는 분은 가맹상담 신청하기를 꼭 접수해주시기 바랍니다.
                                    </p>
                                </div>
                                <div className={styles.inqLocImg}>
                                    <img src="images/fran_infobox_img_1.png" alt="" />
                                </div>
                                <div className={styles.btnWrap}>
                                    <input type="submit" className={styles.btn} value="설명회 신청하기" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
            

            {/* footer */}
            <Footer />
        </div>
    )
}

export default Franchise;
