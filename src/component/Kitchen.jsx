import React from 'react';
import Footer from './Footer';
import styles from '../css/Kitchen.module.css';

const items = [
    {
        id: 1,
        span: '일일 최대 생산량',
        b: '약 10톤'
    },
    {
        id: 2,
        span: '최신 설비',
        b: '자동화 라인 구축'
    },
    {
        id: 3,
        span: '위생적인 공정',
        b: 'HACCP인증'
    },
]

const items2 = [
    {
        id: 1,
        title: 'step.01',
        src: 'images/kitchen_img_3.png',
        text: '전처리·절단',
        p: '채소원물의 겉잎 및\n 밑둥 제거 후 이물 선별 및\n 절단',
    },
    {
        id: 2,
        title: 'step.02',
        src: 'images/kitchen_img_4.png',
        text: '세척',
        p: '3단 와류 세척 및\n 전해수 소독',
    },
    {
        id: 3,
        title: 'step.03',
        src: 'images/kitchen_img_5.png',
        text: '탈수',
        p: '연속식 자동 탈수',
    },
    {
        id: 4,
        title: 'step.04',
        src: 'images/kitchen_img_6.png',
        text: '내포장',
        p: '조합식 계량 및\n 로터리 파우치 포장',
    },
    {
        id: 5,
        title: 'step.05',
        src: 'images/kitchen_img_7.png',
        text: '외포장',
        p: '금속 검출 및 \n 중량 검사 후 박스 포장',
    },
]

function Item({ item }) {
    return (
        <div className={styles.items}>
            <div className={styles.item__box}>
                <span>{item.span}</span>
                <b>{item.b}</b>
            </div>  
        </div>
    )
}



function Item2({ item2 }) {
    return (
        <div className={styles.items2}>
            <div className={styles.item2__box}>
                <span>{item2.title}</span>
                <img src={item2.src} alt="" />
                <strong>{item2.text}</strong>
                <p>{item2.p}</p>
            </div>  
        </div>
    )
}

export default function Kitchen() {
    return (
        <div>
            <div className={styles.kitchen}>
                <div className={styles.kitchen__title}>
                    <div className={styles.title}>
                        <h1>샐러디키친</h1>
                        <div className={styles.line}></div>
                    </div>
                </div>
                <div className={styles.kitchen}>
                    <div className={styles.kitchen__img}>
                        <img src="images/kitchen_img_1.png" alt="" />
                        <div className={styles.kitchen__img__text}>
                            <img src="images/kitchen_img_2.png" alt="" />
                            <h3>샐러디는 채소를 직접 가공합니다.</h3>
                        </div>
                    </div>
                </div>
                <div className={styles.kitchen__1}>
                    <strong>샐러디키친은 국내에서 손꼽히는 규모와 최신 설비를 갖춘 채소믹스 가공 공장입니다.</strong>
                    <p>
                        매일 공급되는 신선한 채소원물을 전처리·절단·세척·소독·탈수 후 소포장하여 가맹점에 공급합니다.<br />
                        매장에서는 배송된 채소믹스를 개봉 및 검수한 후 바로 사용할 수 있습니다.
                    </p>
                    <p>
                        샐러디키친은 샐러디의 핵심 식재료인 채소믹스 품질을 유지하고 공급을 원활하게 함으로써 매장 운영에 도움을 주며,<br />
                        샐러디가 업계 NO.1 브랜드로서 더욱 앞서갈 수 있는 원동력이자 지속성을 갖출 수 있게 하는데 핵심적인 역할을 합니다.
                    </p>
                    <ul>
                        {items.map( (item) => (
                            <li key={item.id}><Item item={item} /></li>
                        ))}
                    </ul>
                </div>
                <div className={styles.kitchen__2}>
                    <div className={styles.title}>
                        <h1>가공 프로세스</h1>
                        <div className={styles.line}></div>
                        <ul>
                            {items2.map( (item2) => (
                                <li key={item2.id}><Item2 item2={item2}/></li>
                            ))}
                        </ul>
                    </div>
                    
                </div>
                
            </div>
            <Footer />
        </div>
    )
}