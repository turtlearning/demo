"use client";

import { useEffect, useState } from "react";

export default function PostDetail({ params }) {
  const { id } = params;
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/board/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error("상세 게시글 불러오기 실패:", err));
  }, [id]);

  if (!post) return <p style={{ textAlign: "center" }}>로딩 중...</p>;

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1000px",
        margin: "80px auto",
        padding: "40px 20px",
        border: "1px solid #ddd",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        backgroundColor: "#fff",
        boxSizing: "border-box",
      }}
    >
      {/* 제목 */}
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "700",
          color: "#333",
          marginLeft: "10px",
          
        }}
      >
        {post.title}
      </h1>

      {/* 작성자 및 날짜 */}
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "10px",
          marginBottom: "30px",
          fontSize: "14px",
          color: "#777",
          borderBottom: "1px solid #ddd",
          paddingBottom: "10px",
        }}
      >
        <span>관리자</span>
        <span>{new Date().toLocaleDateString("ko-KR")}</span>
      </div>

      {/* 본문 내용 */}
      <div
        style={{
          lineHeight: "1.8",
          fontSize: "16px",
          color: "#444",
          whiteSpace: "pre-wrap",
          marginLeft: "10px",
        }}
      >
        {post.content}
      </div>
    </div>
  );
}