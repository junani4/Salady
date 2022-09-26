/*global kakao*/ 
import React, { useEffect } from 'react';
import styles from '../css/Map.module.css';
import { MdSearch } from "react-icons/md";

const Location=()=>{

  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(33.45072333820743, 126.57067185617824),
      level: 3
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(37.365264512305174, 127.10676860117488); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);

    }, [])


    return (
        <div className={styles.index}>
          <div id="map" className={styles.map}>
            <div className={styles.Wrap}>
              <div className={styles.body}>
                <div className={styles.top}>
                  <div className={styles.title}>매장 위치</div>
                  <div className={styles.search}>
                    <form id="cfrom">
                      <div className={styles.search__box}>
                        <input type="text" name="stx" id="stx" placeholder="매장명 또는 주소를 입력해주세요."/>
                        <button type="submit"><MdSearch fontSize="28px" /></button>
                      </div>
                      <p>내 위치 중심으로 지도 보기</p>
                    </form>
                  </div>
                </div>
                {/* list */}
                <div className={styles.list}>
                  <div className={styles.list__box}>
						        <strong>샐러디 선릉점</strong>
						          <div className={styles.tag__box}>
                        <span className={styles.tag2}></span>
                        <span className={styles.tag3}></span>
                        <span className={styles.tag4}></span>
                        <span className={styles.tag5}></span>
                        <span className={styles.tag6}></span>
                        <span className={styles.tag7}></span>
                      </div>
                      <p className={styles.call}>02-556-4066</p>
                      <p className={styles.more}>자세히보기</p>
                  </div>
                  <div className={styles.list__box}>
						        <strong>샐러디 연세대점</strong>
						          <div className={styles.tag__box}>
                        <span className={styles.tag1}></span>
                        <span className={styles.tag2}></span>
                        <span className={styles.tag3}></span>
                        <span className={styles.tag4}></span>
                        <span className={styles.tag5}></span>
                        <span className={styles.tag6}></span>
                      </div>
                      <p className={styles.call}>02-312-8696</p>
                      <p className={styles.more}>자세히보기</p>
                  </div>
                  <div className={styles.list__box}>
						        <strong>샐러디 역삼점</strong>
						          <div className={styles.tag__box}>
                        <span className={styles.tag2}></span>
                        <span className={styles.tag3}></span>
                        <span className={styles.tag4}></span>
                        <span className={styles.tag5}></span>
                        <span className={styles.tag6}></span>
                        <span className={styles.tag7}></span>
                      </div>
                      <p className={styles.call}>02-538-4066</p>
                      <p className={styles.more}>자세히보기</p>
                  </div>
                  <div className={styles.list__box}>
						        <strong>샐러디 삼성점</strong>
						          <div className={styles.tag__box}>
                        <span className={styles.tag2}></span>
                        <span className={styles.tag3}></span>
                        <span className={styles.tag4}></span>
                        <span className={styles.tag5}></span>
                        <span className={styles.tag7}></span>
                      </div>
                      <p className={styles.call}>02-2191-5071</p>
                      <p className={styles.more}>자세히보기</p>
                  </div>
                  <div className={styles.list__box}>
						        <strong>샐러디 이화여대점</strong>
						          <div className={styles.tag__box}>
                        <span className={styles.tag1}></span>
                        <span className={styles.tag2}></span>
                        <span className={styles.tag4}></span>
                        <span className={styles.tag5}></span>
                        <span className={styles.tag7}></span>
                      </div>
                      <p className={styles.call}>02-3277-4856</p>
                      <p className={styles.more}>자세히보기</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Location;