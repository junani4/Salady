import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from '../css/Nav.module.css';
import '../css/Navbar.css';


function Navbar () {
    const [sidebar, setSidebar] = useState(false);
    const [open, setOpen] = useState(false);
    const [click, setClick] = useState(false);
    const [click1, setClick1] = useState(false);
    const [click2, setClick2] = useState(false);
    const [click3, setClick3] = useState(false);


    const showSidebar = () => setSidebar(!sidebar);
    const showClick = () => setClick(!click);
    const showClick1 = () => setClick1(!click1);
    const showClick2 = () => setClick2(!click2);
    const showClick3 = () => setClick3(!click3);

    return (
        <div id="navbar">
            <div className={styles.headerIn}>
                <Link className={styles.logo} to="/">
                    <img className={styles.logoImg} src="images/logo.jpg"  alt="샐러디" />
                </Link>
                <nav className={styles.menu}>
                    <ul className="mainmn">
                        <li onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}>
                            <Link to="/brand">브랜드</Link>
                            <ul className={open ? "on" : ""}>
                                <li><Link to="/brand">샐러디</Link></li>
                                <li><Link to="/kitchen">샐러디키친</Link></li>
                                <li><Link to="/farm">샐러디팜</Link></li>
                            </ul>
                            <div className={open ? "bga on" : ""}></div>
                        </li>
                        <li onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}>
                            <Link to="/menu">메뉴</Link>
                            <ul className={open ? "on" : ""}>
                                <li><Link to="/menu">ALL</Link></li>
                                <li><Link to="/bowl">웜볼</Link></li>
                                <li><Link to="/salad">샐러디</Link></li>
                                <li><Link to="/sand">샌드&랩</Link></li>
                                <li><Link to="/topping">토핑&드레싱</Link></li>
                                <li><Link to="/side">음료&사이드</Link></li>
                            </ul>
                            <div className={open ? "bga on" : ""}></div>
                        </li>
                        <li>
                            <Link to="/information">영양정보</Link>
                        </li>
                        <li>
                            <Link to="/store">매장</Link>
                        </li>
                        <li onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}>
                            <Link to="/franchise">프랜차이즈</Link>
                            <ul className={open ? "on" : ""}>
                                <li><Link to="/franchise">가맹안내</Link></li>
                                <li><Link to="/application">가맹상담 신청</Link></li>
                                <li><Link to="/reservation">가맹설명회 신청</Link></li>
                            </ul>
                            <div className={open ? "bga on" : ""}></div>
                        </li>
                        <li onMouseOver={() => setOpen(true)} onMouseOut={() => setOpen(false)}>
                            <Link to="/new">새소식</Link>
                            <ul className={open ? "on" : ""}>
                                <li><Link to="/notice">공지사항</Link></li>
                                <li><Link to="/new">이벤트</Link></li>
                            </ul>
                            <div className={open ? "bga on" : ""}></div>
                        </li>
                        <li>
                            <Link to="/faq">FAQ</Link>
                        </li>
                    </ul>
                {/* </FilterItem> */}
                </nav>
                {/* 메뉴바 */}
                <div className="slide__btn" onClick={showSidebar}>
                    <button className={sidebar ? 'on' : ''} >
                        <span></span>
                    </button>
                </div>
                <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <div className={styles.tit} onClick={showSidebar}>
                        <Link to='#'></Link>
                    </div>
                    <ul className="gnb" >
                        <li onClick={showClick}>
                            <Link to="#/" onClick={e => e.preventDefault}>브랜드</Link>
                            <ul className={click ? 'active' : ''}>
                                <li><Link to="/brand">샐러디</Link></li>
                                <li><Link to="/kitchen">샐러디키친</Link></li>
                                <li><Link to="/farm">샐러디팜</Link></li>
                            </ul>
                        </li>
                        <li onClick={showClick1}>
                            <Link to="#/" onClick={e => e.preventDefault}>메뉴</Link>
                            <ul className={click1 ? 'active' : ''}>
                                <li><Link to="/menu">ALL</Link></li>
                                <li><Link to="/bowl">웜볼</Link></li>
                                <li><Link to="/salad">샐러디</Link></li>
                                <li><Link to="/sand">샌드&랩</Link></li>
                                <li><Link to="/topping">토핑&드레싱</Link></li>
                                <li><Link to="/side">음료&사이드</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/information">영양정보</Link>
                        </li>
                        <li>
                            <Link to="/store">매장</Link>
                        </li>
                        <li onClick={showClick2}>
                            <Link to="#/" onClick={e => e.preventDefault}>프랜차이즈</Link>
                            <ul className={click2 ? 'active' : ''}>
                                <li><Link to="/franchise">가맹안내</Link></li>
                                <li><Link to="/application">가맹상담 신청</Link></li>
                                <li><Link to="/reservation">가맹설명회 신청</Link></li>
                            </ul>
                        </li>
                        <li onClick={showClick3}>
                            <Link to="#/" onClick={e => e.preventDefault}>새소식</Link>
                            <ul className={click3 ? 'active' : ''}>
                                <li><Link to="/notice">공지사항</Link></li>
                                <li><Link to="/new">이벤트</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/faq">FAQ</Link>
                        </li>
                    </ul>
                    <div className={styles.ico}>
                        <ul>
                            <li>
                                <img src="/images/gnb_insta_ico.png" alt="" />
                            </li>
                            <li>
                                <img src="/images/gnb_kko_ico.png" alt="" />
                            </li>
                        </ul>
                        <p>ⓒ 2022  ㈜샐러디. CO.LTD  All rights reserved.</p>
                    </div>
                </div>
                <div className={sidebar ? 'slide__bg on' : ''}></div>
            </div>
        </div>
    )
}

export default Navbar;
