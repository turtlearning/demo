"use client"; // ✅ 클라이언트 컴포넌트 설정
import "./subnav.css"; // ✅ 서브 네비게이션 관련 CSS
import styles from "./intro.module.css";
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
        <a href="/intro/history" className={`sub-nav-link ${pathname === "/intro/history" ? "active" : ""}`}>
          연혁
        </a>
        <a href="/intro/character" className={`sub-nav-link ${pathname === "/intro/character" ? "active" : ""}`}>
          캐릭터 소개
        </a>
      </div>

<div className={styles.introContainer}> {/* ✅ 클래스명 변경 */}
        <div className={styles.introContent}>
          <img src="/intro1.png" alt="회사소개 이미지" className={styles.introImage} />
        </div>
      </div>
    </div>
  );
}