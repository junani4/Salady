import React from 'react';
import Footer from './Footer';
import styles from '../css/Farm.module.css';

const items = [
    {
        id: 1,
        span: '규모',
        b: '약 1만평'
    },
    {
        id: 2,
        span: '일일 재배량',
        b: '약 2톤'
    },
    {
        id: 3,
        span: '지리적 이점',
        b: '해발고도 400m 고원'
    },
]

const items2 = [
    {
        id: 1,
        title: '01',
        src: 'images/farm_img_3.png',
        p: '토경재배',
    },
    {
        id: 2,
        title: '02',
        src: 'images/farm_img_5.png',
        p: '수경 재배',
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
                <p>{item2.p}</p>
            </div>  
        </div>
    )
}

export default function Farm() {
    return (
        <div>
            <div className={styles.farm}>
                <div className={styles.farm__title}>
                    <div className={styles.title}>
                        <h1>샐러디팜</h1>
                        <div className={styles.line}></div>
                    </div>
                </div>
                <div className={styles.farm}>
                    <div className={styles.farm__img}>
                        <img src="images/farm_img_1.png" alt="" />
                        <div className={styles.farm__img__text}>
                            <img src="images/farm_img_6.png" alt="" />
                            <h3>샐러디는 채소를 직접 재배합니다.</h3>
                        </div>
                    </div>
                </div>
                <div className={styles.farm__1}>
                    <strong>샐러디팜은 핵심 식재료인 채소원물을 재배하는 샐러디 전용 농장입니다.</strong>
                    <p>
                        샐러디는 시중에서 쉽게 접할 수 없는 멀티리프 계열의 유럽형 채소를 직접 재배함으로써 메뉴의 맛과 식감을 극대화하고 있습니다.<br />
                        전북 진안고원에 위치한 샐러디팜에서는 계절에 관계없이 1년 내내 안정적인 재배가 가능하며,<br />
                        특히 최근 도입한 수경재배방식(NFT)은 공급의 안정성은 물론 원물의 신선도를 한층 높이는데 기여하고 있습니다.
                    </p>
                    {items.map( (item) => (
                        <Item item={item} key={item.id} />
                    ))}
                </div>
                <div className={styles.farm__2}>
                    <div className={styles.title}>
                        <h1>재배 방식</h1>
                        <div className={styles.line}></div>
                        <ul>
                            {items2.map( (item2) => (
                                <li key={item2.id}><Item2 item2={item2} /></li>
                            ))}
                        </ul>
                    </div>
                    
                </div>
                
            </div>
            <Footer />
        </div>
    )
}