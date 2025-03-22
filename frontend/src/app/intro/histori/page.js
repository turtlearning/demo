"use client";
import "../subnav.css";

import { usePathname } from "next/navigation";
import styles from "../intro.module.css";

export default function IntroHistori() {
  const pathname = usePathname();

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

      {/* ✅ 연혁 이미지 표시 */}
      <div className={styles.introContainer}>
        <div className={styles.introContent}>
          <img src="/intro2.png" alt="연혁 이미지" className={styles.introImage} />
        </div>
      </div>
    </div>
  );
}