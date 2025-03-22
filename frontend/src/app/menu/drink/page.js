"use client";
import "../../../style/subnav.css";
import Menunav from "../../../component/Menunav"; // ✅ 수정된 import
import { useEffect, useState } from "react";

export default function IntroHistori() {
  return (
    <div>
      <Menunav /> {/* ✅ 올바른 네비게이션 바 */}

      {/* ✅ 음료 메뉴 리스트 출력 */}
      <DrinkMenu />
    </div>
  );
}

// ✅ 음료 메뉴 데이터를 불러오는 컴포넌트
function DrinkMenu() {
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // ✅ API 호출하여 BEVERAGE 메뉴 가져오기
    fetch("http://35.216.10.87/menu/category/BEVERAGE")
      .then((res) => {
        if (!res.ok) {
          throw new Error("메뉴를 불러오는 데 실패했습니다.");
        }
        return res.json();
      })
      .then((data) => {
        setDrinks(data); // ✅ 가져온 데이터 저장
        setLoading(false);
      })
      .catch((error) => {
        console.error("API 호출 에러:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>🥤 음료 메뉴</h1>
      {loading ? (
        <p style={{ textAlign: "center" }}>로딩 중...</p>
      ) : drinks.length === 0 ? (
        <p style={{ textAlign: "center", color: "red" }}>메뉴를 불러오지 못했습니다.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {drinks.map((drink) => (
            <li key={drink.id} style={{ marginBottom: "15px", borderBottom: "1px solid #ddd", paddingBottom: "10px" }}>
              <h3>{drink.name}</h3>
              <p>가격: {drink.price}원</p>
              <p>설명: {drink.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}