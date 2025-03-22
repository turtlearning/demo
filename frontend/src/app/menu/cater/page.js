"use client";
import "../../../style/subnav.css";
import Menunav from "../../../component/Menunav";
import { useEffect, useState } from "react";

export default function IntroHistori() {
  return (
    <div>
      <Menunav />
      <DrinkMenu />
    </div>
  );
}

function DrinkMenu() {
  const [drinks, setDrinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/menu/category/CATER")
      .then((res) => {
        if (!res.ok) throw new Error("메뉴를 불러오는 데 실패했습니다.");
        return res.json();
      })
      .then((data) => {
        setDrinks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API 호출 에러:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ maxWidth: "1000px", margin: "auto", padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>CATER 메뉴</h1>
      {loading ? (
        <p style={{ textAlign: "center" }}>로딩 중...</p>
      ) : drinks.length === 0 ? (
        <p style={{ textAlign: "center", color: "red" }}>메뉴를 불러오지 못했습니다.</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {drinks.map((drink) => (
            <div
              key={drink.id}
              style={{
                width: "280px",
                height: "420px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <img
                src={drink.image}
                alt={drink.name}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "15px", flexGrow: 1 }}>
                <h3 style={{ margin: "10px 0", fontSize: "17px", color: "#333" }}>{drink.name}</h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#666",
                    height: "45px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {drink.description}
                </p>
                <p style={{ fontWeight: "bold", marginTop: "10px", fontSize: "15px" }}>
                  ₩{drink.price.toLocaleString()}
                </p>
              </div>
              <div style={{ padding: "0 15px 15px" }}>
                <a
                  href={drink.purchaseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "8px 12px",
                    backgroundColor: "#456EB7",
                    color: "white",
                    borderRadius: "5px",
                    textDecoration: "none",
                    fontSize: "14px",
                  }}
                >
                  구매하러 가기
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}