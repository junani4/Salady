import React, { useState } from 'react';
import Footer from './Footer.jsx'
import Calendar from 'react-calendar';
import moment from 'moment';
import styles from '../css/Reservation.module.css'
import '../css/Calendar.css';

const items = [
    {
        id: 1,
        src: 'images/fran-slist-icon3.gif',
        title: 'STEP 01',
        strong: '창업설명회 주제',
        p: '샐러디 창업 설명회 주제는 샐러디\n 창업안내 외에 분기별로 다양한\n 주제들을 포함하여 진행될 예정입니다.',
    },
    {
        id: 2,
        src: 'images/fran-slist-icon1.gif',
        title: 'STEP 02',
        strong: '사전 예약',
        p: '효과적인 상담을 위해 창업설명회는\n 예약제로만 운영됩니다. 아래 양식에 맞추어\n 창업설명회 신청을 해주시기 바랍니다.',
    },
    {
        id: 3,
        src: 'images/fran-slist-icon2.gif',
        title: 'STEP 03',
        strong: '예약 확인',
        p: '작성해주신 이메일 또는 핸드폰 번호로\n 예약 확인 및 안내장을 발송해드립니다.',
    },
]

function Item({ item }) {
    return (
        <div className={styles.items}>
            <div className={styles.item__box}>
                <img src={item.src} alt="" />
            </div>
            <dl>
                <dt>
                    <span>{item.title}</span>
                    <strong>{item.strong}</strong>  
                </dt>
                <dd>
                    <p>{item.p}</p>
                </dd>
            </dl>
        </div>
    )
}

export default function Reservation() {
    const [value, onChange] = useState(new Date());

    return (
        <div id="reservation">
            <div className={styles.app}>
                <div className={styles.app__title}>
                    <div className={styles.title}>
                        <h1>가맹설명회 신청하기</h1>
                        <div className={styles.line}></div>
                    </div>
                </div>
                <div className={styles.fran}>
                    <h4>
                        <p>
                            *가맹설명회는 강남구(역삼역)에 위치한 샐러디 본사에서 오프라인으로 진행합니다.<br />
                            *가맹설명회 신청은 온라인 접수만 가능하며, 설명회 전날 24시까지 접수해주신 분에 한해 신청됩니다.<br />
                            *개별상담 및 지역별 계약 우선순위는 “가맹상담 신청하기“ 접수순으로 이루어집니다. 별도로 개별 상담을 원하시는 분은 가맹상담 신청하기를 통해 접수해주시기 바랍니다.
                        </p>
                    </h4>
                    <div className={styles.addSection}>
                        <div className={styles.titType1}>
                            <h3>샐러디 가맹설명회 안내</h3>
                        </div>
                        <ul>
                            {items.map( (item) => (
                                <li key={item.id}><Item item={item} /></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Calendar onChange={onChange} value={value} 
                    formatDay={(locale, date) => moment(date).format("DD")}
                />
                {/* <div className={styles.schedule}>
                    <div className={styles.schedule__top}>
                        <div className={styles.schedule__dateBox}></div>
                        <div className={styles.schedule__sel}></div>
                    </div>
                </div> */}
                <div className={styles.section}>
                    <dl className={styles.titType2}>
                        <dt>RESERVATION</dt>
                        <dd>가맹설명회 예약 정보 작성</dd>
                    </dl>
                </div>
                <div className={styles.sb__wrap}>
                    <div className={styles.sb__form}>
                        <fieldset>
                            <legend>개인정보 수집, 이용에 대한 안내</legend>
                            <div className={styles.privacy}>
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
                                ※위의 개인정보 수집 및 이용에 대해 동의하지 않을 수 있습니다. 다만, 이에 동의하지 않을 경우 접수가 불가능할 수 있습니다. 
                            </div>
                            <label className={styles.agree}>
                                <input type="checkbox" name="agree01" value="Y" />
                                동의합니다
                            </label>
                            <label className={styles.agree}>
                                <input type="checkbox" name="agree01" value="N" />
                                동의하지 않습니다
                            </label>
                        </fieldset>
                        <fieldset>
                            <legend>상담내용 작성</legend>
                            <table className={styles.inqTable}>
                                    <tbody>
                                        <tr>
                                            <th>* 이름</th>
                                            <td>
                                                <input type="text" name="name" className={styles.typeText}></input>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>* 연령대</th>
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
                                            <th>* 연락처</th>
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
                                            <th>* 이메일</th>
                                            <td>
                                                <div className={styles.mail}>
                                                    <input type="text" name="email1" className={styles.typeText} />
                                                     @
                                                    <input type="text" name="email2" className={styles.typeText} />
                                                    <select name="email_select" className={styles.ml10} >
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
                                                <label><input type="radio" name="open" value="1" checked readOnly />신규오픈</label>
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
                                        <tr>
                                            <th>문의내용 /<br/>창업희망지역</th>
                                            <td>
                                                <textarea name="wm__content" id="wm__content" cols="30" rows="10"></textarea>
                                            </td>    
                                        </tr>       
                                    </tbody>
                                </table>
                        </fieldset>
                    </div>
                    <div className={styles.sb__footer}>
                        <div className={styles.center}>
                            <input type="submit" value="확인" />
                        </div>
                    </div>
                </div>
            </div>
            {/* footer */}
            <Footer />
        </div>
    );
}