"use client"; // ✅ 클라이언트 컴포넌트 선언
import { usePathname } from "next/navigation"; // ✅ usePathname 가져오기
import "../style/subnav.css";

export default function Menunav() {
  const pathname = usePathname(); // ✅ 현재 경로 가져오기

  return (
    <div className="sub-nav">
      <a href="/menu/drink" className={`sub-nav-link ${pathname === "/menu/drink" ? "active" : ""}`}>
        Drink
      </a>
      <a href="/menu/dessert" className={`sub-nav-link ${pathname === "/menu/dessert" ? "active" : ""}`}>
        Dessert
      </a>
      <a href="/menu/mdgoods" className={`sub-nav-link ${pathname === "/menu/mdgoods" ? "active" : ""}`}>
        MD Goods
      </a>
      <a href="/menu/cater" className={`sub-nav-link ${pathname === "/menu/cater" ? "active" : ""}`}>
        Cater
      </a>
    </div>
  );
}