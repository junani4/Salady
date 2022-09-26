import React from 'react';
import Footer from './Footer.jsx'
import styles from '../css/Application.module.css'


export default function Application({ text }) {
    return (
        <div id="application">
            <div className={styles.app}>
                <div className={styles.app__title}>
                    <div className={styles.title}>
                        <h1>가맹점 상담 신청하기</h1>
                        <div className={styles.line}></div>
                    </div>
                </div>
                <h5 className={styles.sub__tit}>현재 가맹 상담 문의가 많아 최소 2주, 최대 3주 이상 소요되는 점 참고 및 양해 부탁드립니다.</h5>
                <div className={styles.mt30}></div>
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