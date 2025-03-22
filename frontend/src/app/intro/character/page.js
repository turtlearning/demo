"use client"; // ✅ 클라이언트 컴포넌트 설정
import "../subnav.css"; // ✅ 서브 네비게이션 관련 CSS
import styles from "./character.module.css";
import { usePathname } from "next/navigation"; 

export default function IntroGreet() {
  const pathname = usePathname(); // ✅ 현재 페이지 경로 가져오기

  return (
    <div>
      {/* ✅ 서브 네비게이션 바 */}
      <div className="sub-nav">
        <a href="/intro/greet" className={`sub-nav-link ${pathname === "/intro/greet" ? "active" : ""}`}>
          인사말
        </a>
        <a href="/intro/histori" className={`sub-nav-link ${pathname === "/intro/histori" ? "active" : ""}`}>
          연혁
        </a>
        <a href="/intro/character" className={`sub-nav-link ${pathname === "/intro/character" ? "active" : ""}`}>
          캐릭터 소개
        </a>
      </div>

<div className={styles.introContainer}> {/* ✅ 클래스명 변경 */}
        <div className={styles.introContent}>
          <img src="/intro3.png" alt="회사소개 이미지" className={styles.introImage} />
          </div>
          <div className={styles.characterContent}>
          <p>(c) 2024.휘카페 Inc. all rights reserved.</p>
          </div>
        <div className={styles.introContent}>
          <img src="/intro4.jpeg" alt="회사소개 이미지" className={styles.introImage} />
          <img src="/intro5.jpeg" alt="회사소개 이미지" className={styles.introImage} />
          <img src="/intro6.jpeg" alt="회사소개 이미지" className={styles.introImage} />
          <img src="/intro7.jpeg" alt="회사소개 이미지" className={styles.introImage} />
          <img src="/intro8.jpeg" alt="회사소개 이미지" className={styles.introImage} />
          <img src="/intro9.jpeg" alt="회사소개 이미지" className={styles.introImage} />
          <img src="/intro10.jpeg" alt="회사소개 이미지" className={styles.introImage} />
          <img src="/intro11.jpeg" alt="회사소개 이미지" className={styles.introImage} />
        </div>
        <div className={styles.characterContent}>
        <p>Copyright by HYGAFE All rights reserved.</p>
        </div>
     </div>
    </div>
  );
}