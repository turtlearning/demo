"use client"; // ✅ 클라이언트 컴포넌트 설정

import React from "react";
import Link from "next/link"; // ✅ Next.js의 Link 컴포넌트 추가
import Footer from "../component/Footer"; // ✅ components 폴더에 Footer가 있는지 확인
import "../style/globals.css";
import { usePathname } from "next/navigation"; 

export default function Layout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="ko">
      <body>
        <div className="page-container">
          <header className="header">
            {/* ✅ 로고 클릭 시 "/"(홈)으로 이동 */}
            <div className="header-top">
              <Link href="/">
                <img src="/freewhale.png" alt="FREE WHALE 로고" className="logo" />
              </Link>
            </div>
            <div className="header-under">
              {/* 네비게이션 바 */}
              <nav className="nav-menu">
          <Link href="/intro" className={`nav-link ${(pathname.startsWith("/intro") || pathname.startsWith("/intro/greet")) ? "active" : ""}`}>
            회사소개
          </Link>
          <Link href="/menu" className={`nav-link ${pathname.startsWith("/menu") ? "active" : ""}`}>
            메뉴
          </Link>
          <Link href="/stores" className={`nav-link ${pathname.startsWith("/stores") ? "active" : ""}`}>
            매장안내
          </Link>
          <Link href="/community" className={`nav-link ${pathname.startsWith("/community") ? "active" : ""}`}>
            커뮤니티
          </Link>
          <Link href="/game" className={`nav-link ${pathname.startsWith("/game") ? "active" : ""}`}>
            바리스타 게임
          </Link>
        </nav>
            </div>
          </header>

          <main className="content">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}