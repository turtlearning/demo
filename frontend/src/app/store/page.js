"use client";
import styles from "./store.module.css";
import React from "react";

export default function StoreInfo() {
  return (
    <div className={styles.container}>
      {/* 주소 */}
      <h2 className={styles.sectionTitle}>주소</h2>
      <p className={styles.address}>
        서울특별시 동대문구 서울시립대로 117 청년UP플랫폼 101호
      </p>

      {/* 버튼 */}
      <div className={styles.buttons}>
        <a
          href="https://map.naver.com/p/directions/-/14143297.5867185,4520414.2740567,%EC%84%9C%EC%9A%B8%20%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC%20%EC%84%9C%EC%9A%B8%EC%8B%9C%EB%A6%BD%EB%8C%80%EB%A1%9C%20117,,ADDRESS_POI/-/transit?c=15.00,0,0,0,dh"
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          🧭 길찾기
        </a>
        <a
          href="https://map.naver.com/p/search/서울특별시%20동대문구%20서울시립대로117%20청년UP플랫폼%20101호/address/14143297.5867185,4520414.2740567?c=15.00,0,0,0,dh"
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
        >
          🗺 지도에서 보기
        </a>
      </div>

      {/* 오시는 길 */}
      <div className={styles.subSection}>
        <h3>오시는 길</h3>
        <p>✔ 청량리역 도보 10분 (경의중앙선 3번 출구)</p>
        <p>✔ 버스 "서울시립대학교 앞" 하차 도보 5분</p>
        <p><strong>주차정보:</strong> 건물 내 주차 불가, 인근 유료주차장 이용</p>
      </div>

      {/* 이용시간 */}
      <div className={styles.subSection}>
        <h3>이용시간</h3>
        <p><strong>평일:</strong> 09:00 ~ 18:00</p>
        <p><strong>토요일:</strong> 10:00 ~ 16:00</p>
        <p className={styles.holiday}>공휴일은 휴무입니다.</p>
      </div>

      {/* 이용안내 */}
      <div className={styles.subSection}>
        <h3>이용 안내</h3>
        <ul className={styles.bulletList}>
          <li>👥 단체석</li>
          <li>🎁 포장 가능</li>
          <li>🏃 방문 접수 / 출장 가능</li>
          <li>📶 무선 인터넷 제공</li>
          <li>🐶 애완동물 동반 가능</li>
          <li>🚻 남/녀 화장실 구분</li>
        </ul>
      </div>
    </div>
  );
}