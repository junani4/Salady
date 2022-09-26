import React from 'react';
import Footer from './Footer.jsx'
import styles from '../css/Brand.module.css'


export default function Brand({ text }) {
    return (
        <div id="brand">
            <div className={styles.brand}>
                <div className={styles.brand__title}>
                    <div className={styles.title}>
                        <h1>샐러디</h1>
                        <div className={styles.line}></div>
                    </div>
                </div>
                <div className={styles.brand}>
                    <div className={styles.brand__img}>
                        <img src="images/brand_top_img.jpg" alt="" />
                        <div className={styles.brand__img__text}>
                            <p>샐러디 선릉점, 2013년</p>
                        </div>
                    </div>
                </div>
                <div className={styles.brand}>
                    <div className={styles.brand__story}>    
                        <div className={styles.mission}>
                            <h3>미션</h3>
                            <p><strong>음식을 통해 사람들의 삶을 즐기고 건강하게 만든다</strong></p>
                        </div>
                        <div className={styles.brandStory}>
                            <h3>브랜드 스토리</h3>
                            <p>2013년 겨울, 평범한 대학생이었던 두 청년은 선릉역 뒷골목에 작은 식당을 열었습니다. 미숙한 손길이 곳곳에 묻어 있던 이 식당이 한 가지 특별했던 점은 한 끼 식사로 샐러드를 판매했다는 것입니다.</p> 
                            <p>그러나 당시만 하더라도 샐러드를 '식사'로 여기는 사람들이 드물었기 때문에 식당의 앞날은 불투명하기만 했죠. 매일같이 마주하는 어려움 속, 작은 식당을 지탱한 것은 기름진 식문화를 보다 신선하고 건강하게 바꾸겠다는 의지였습니다.</p>
                            <p>그렇게 다양한 문제를 해결하고 개선하는 동안 식단 트렌드에도 변화가 찾아왔고, 10명 남짓의 손님들이 찾아오던 작은 식당은 어느새 하루 3만명의 손님들을 맞이하는 브랜드가 되었죠.</p>
                            <p>샐러디는 이제 웜볼, 랩, 샌드위치 등 더욱 다양한 메뉴군과 함께, 샐러드 전문점을 넘어 건강한 패스트푸드로 도약하고자 합니다.<br></br> 더 맛있고 건강한 메뉴들로 보다 많은 사람들에게 즐거움과 건강함을 선사하는 브랜드가 되겠습니다.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer */}
            <Footer />
        </div>
    );
}