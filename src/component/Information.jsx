import React from 'react';
import styles from '../css/Information.module.css';
import Footer from './Footer';

const guideLists = [
    {
        id: 1,
        src: 'images/guide-icon1.gif',
        title: '영양성분표',
        text: '샐러디 전체 메뉴의 영양성분표입니다.\n 본인의 식습관과 식단을 고려하여 알맞은 메뉴를 선택하고\n 부족한 영양소는 토핑 추가 등을 통해 보완하세요.',
        show: '영양성분표보기'
    },
    {
        id: 2,
        src: 'images/guide-icon2.gif',
        title: '칼로리 계산하기',
        text: '샐러디 전체 메뉴의 칼로리를 계산할 수 있는 기능입니다.',
        show: '칼로리 계산하기'
    },
    {
        id: 3,
        src: 'images/guide-icon3.gif',
        title: '칼로리표',
        text: '보편적인 성인권장 일일 칼로리는 남성 2700kcal, 여성 2000kcal 입니다.\n 하지만 개인의 나이, 기초대사량에 따라 권장 칼로리는달라집니다.\n 본인에게 맞는 열량을 확인하고 다른 끼니의 열량을 고려하여 샐러디 메뉴를 선택하세요.',
        show: '칼로리표 보기'
    },
    {
        id: 4,
        src: 'images/guide-icon4.gif',
        title: '알레르기 정보',
        text: '특정 음식에 대해 알레르기가 있으신 고객분께서는\n 메뉴 선택전에 알레르기 정보를 꼭 확인하시길 바랍니다.',
        show: '알레르기 정보 보기'
    },
]


function GuideList({ guideList }) {
    return (
        <div className={styles.items}>
            <div className={styles.item__box}>
                <img src={guideList.src} alt={guideList.title} />
                <h3>{guideList.title}</h3>
                <p>{guideList.text}</p>
                <span>{guideList.show}</span>
            </div>  
        </div>
    )
}

export default function Information({ text }) {

    return (
        <div id="information">
            <div className={styles.information}>
                <div className={styles.info__title}>
                    <div className={styles.title}>
                        <h1>영양 정보</h1>
                        <div className={styles.line}></div>
                    </div>
                </div>
                <div className={styles.information}>
                    <div className={`${styles.info} ${styles.info__img01}`}>
                        <dl className={styles.info__img__text}>
                            <dt>균형</dt>
                            <dd>
                                샐러디는 3대 영양소인 탄수화물, 단백질, 지방의 적절한 분배와 균형을 추구합니다.<br />
                                개개인의 식습관에 따라 탄수화물, 단백질, 지방간의 구성 비율이 다양한 샐러디의 메뉴들을 선택할 수 있습니다.
                            </dd>
                        </dl>
                    </div>
                    <div className={`${styles.info} ${styles.info__img02}`}>
                        <dl className={styles.info__img__text}>
                            <dt>더하기</dt>
                            <dd>
                                일반적인 식습관을 가지고 있는 대부분의 사람들은 비타민, 무기질, 식이섬유 섭취가 부족합니다.<br />
                                샐러디의 다양한 종류의 채소와 토핑들은<br />
                                평소 섭취가 부족한 영양소들을 더하는데 도움을 줍니다.
                            </dd>
                        </dl>
                    </div>
                    <div className={`${styles.info} ${styles.info__img03}`}>
                        <dl className={styles.info__img__text}>
                            <dt>빼기</dt>
                            <dd>
                                샐러디의 메뉴들은 다른 일반적인 음식 대비 당, 포화지방, 나트륨 함량이 적습니다.<br />
                                대부분의 성인은 세 가지 영양소를 권장량에 비해 더 많이 섭취하고 있습니다.<br />
                                샐러디는 기존 메뉴에서 빼야 할 영양소는 줄여가고, 맛과 품질을 유지하는 선에서<br />
                                레시피 개선에 대한 연구를 지속하고 있습니다.
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className={styles.guideline}>
                    <div className={styles.info__title}>
                        <div className={styles.title}>
                            <h1>가이드라인</h1>
                            <div className={styles.line}></div>
                        </div>
                    </div>
                    <div className={styles.g__box}>
                        {guideLists.map( (guideList, index) => (
                            <GuideList guideList={guideList} key={index} />
                        ))}
                    </div>
                </div>
            </div>
            {/* guideline */}

            {/* footer */}
            <Footer />
        </div>
    )
}