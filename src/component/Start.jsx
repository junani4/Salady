import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Footer from './Footer.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../css/Start.module.css';

// items
function Item({ item }) {
    return (
        <div className={styles.items}>
            <img src={item.src} alt={item.mainTitle} />
        </div>
    )
}

// items
const items = [
    {
        id: 1,
        src: 'images/instagram01.jpg',
        mainTitle: '인스타1',
    },
    {
        id: 2,
        src: 'images/instagram02.jpg',
        mainTitle: '인스타2',
    },
    {
        id: 3,
        src: 'images/instagram03.jpg',
        mainTitle: '인스타3',
    },
    {
        id: 4,
        src: 'images/instagram04.jpg',
        mainTitle: '인스타4',
    },
    {
        id: 5 ,
        src: 'images/instagram05.jpg',
        mainTitle: '인스타5',
    },
    {
        id: 6,
        src: 'images/instagram06.jpg',
        mainTitle: '인스타6',
    },
    {
        id: 7,
        src: 'images/instagram07.jpg',
        mainTitle: '인스타7',
    },
    {
        id: 8,
        src: 'images/instagram08.jpg',
        mainTitle: '인스타8',
    },
    {
        id: 9,
        src: 'images/instagram09.jpg',
        mainTitle: '인스타9',
    },
    {
        id: 10,
        src: 'images/instagram10.jpg',
        mainTitle: '인스타10',
    },
];

// slide
function SlideImg({ slideImg }) {
    return (
        <div>
            <img src={slideImg.src} alt={slideImg.name} />
        </div>
    )
};

const sliders = [
    {
        id: 1,
        src: 'images/slide1.png',
        name: '슬라이드1'
    },
    {
        id: 2,
        src: 'images/slide2.png',
        name: '슬라이드2'
    },
    {
        id: 3,
        src: 'images/slide3.png',
        name: '슬라이드3'
    },
    {
        id: 4,
        src: 'images/slide4.jpg',
        name: '슬라이드4'
    },
    {
        id: 5,
        src: 'images/slide5.jpg',
        name: '슬라이드5'
    },
];

// slick
const settings = {
    dots: true,
    Infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    appendDots: (dots) => (
        <div
          style={{
            width: '100%',
            position: 'absolute',
            bottom: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <ul> {dots} </ul>
        </div>
      ),
      dotsClass: 'dots_custom'
};

const StyledSlider = styled(Slider)`
    
    .slick-list {
        width: 1920px;
        margin: 0 auto;
        padding: 0;
    }
    .slick-slide {
        display: inline-block;
    }

    .dots_custom {
        display: inline-block;
        vertical-align: middle;
        margin: auto 0;
        padding: 0;
    }

    .dots_custom li {
        list-style: none;
        cursor: pointer;
        display: inline-block;
        margin: 0 6px;
        padding: 0;
    }

    .dots_custom li button {
        width: 11px;
        height: 11px;
        border: none;
        color: transparent;
        cursor: pointer;
        display: block;
        border-radius: 100%;
        background: #ddd;
        margin-bottom: 80px ;
    }

    .dots_custom li.slick-active button {
        width: 30px;
        border-radius: 11px;
        background: #ffd040;
    }
`;


export default function Start() {
    return (
            <div id="contents">
                <div className={styles.contents}>
                    <div className={styles.slide}>
                        <StyledSlider className={styles.S_Slider} {...settings}>
                            {sliders.map((slideImg) => {
                                return (
                                    <SlideImg slideImg={slideImg} key={slideImg.id} />
                                );
                            })}
                        </StyledSlider>
                    </div>
                    <div className={styles.instagram}>
                        <div className={styles.insta__box}>
                            <div className={styles.title}>
                                <h3><b>SALADY</b> INSTAGRAM</h3>
                            </div>
                            {items.map( (item) => (
                                <Item item={item} key={item.id}/>
                            ))}
                        </div>
                    </div>
                </div>
                {/* footer */}
                <Footer />
            </div>
    )
};
