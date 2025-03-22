"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function CommunityPage() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    fetch("http://localhost:8080/board")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("게시글 불러오기 실패:", err));
  }, []);

  const totalPages = Math.ceil(posts.length / postsPerPage);

  const paginatedPosts = [...posts]
    .reverse()
    .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <div style={{ maxWidth: "900px", margin: "auto", padding: "20px 20px" }}>
      <h1
        style={{
          fontSize: "26px",
          marginBottom: "20px",
          borderBottom: "1px solid #ccc",
          paddingBottom: "10px",
        }}
      >
        🐋 FREE WHALE 커뮤니티
      </h1>

      <div style={{ textAlign: "right", marginBottom: "20px" }}>
        <Link href="/community/write">
          <button style={writeBtnStyle}>✏️ 글 작성하기</button>
        </Link>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#f9f9f9", borderBottom: "1px solid #ccc" }}>
            <th style={thStyle}>번호</th>
            <th style={thStyle}>제목</th>
            <th style={thStyle}>글쓴이</th>
            <th style={thStyle}>작성일</th>
          </tr>
        </thead>
        <tbody>
          {paginatedPosts.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: "center", padding: "30px" }}>
                게시글이 없습니다.
              </td>
            </tr>
          ) : (
            paginatedPosts.map((post, idx) => (
              <tr key={post.id} style={{ borderBottom: "1px solid #eee" }}>
                <td style={tdStyle}>{posts.length - ((currentPage - 1) * postsPerPage + idx)}</td>
                <td style={{ ...tdStyle, textAlign: "left" }}>
                  <Link href={`/community/${post.id}`} style={{ textDecoration: "none", color: "#333" }}>
                    {post.title}
                  </Link>
                </td>
                <td style={tdStyle}>관리자</td>
                <td style={tdStyle}>
                  {new Date(post.createdAt ?? Date.now()).toLocaleDateString("ko-KR", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* 페이지네이션 */}
      {/* 페이지네이션 */}
<div style={{ marginTop: "30px", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", gap: "12px" }}>
  <button onClick={handlePrev} style={{ ...pageBtnStyle, opacity: currentPage === 1 ? 0.5 : 1 }} disabled={currentPage === 1}>
    〈
  </button>
  <span style={{ fontSize: "15px", fontWeight: "bold" }}>
    {currentPage} / {totalPages}
  </span>
  <button onClick={handleNext} style={{ ...pageBtnStyle, opacity: currentPage === totalPages ? 0.5 : 1 }} disabled={currentPage === totalPages}>
    〉
  </button>
</div>
    </div>
  );
}

const writeBtnStyle = {
  padding: "8px 16px",
  backgroundColor: "#456EB7",
  color: "white",
  border: "none",
  borderRadius: "6px",
  fontSize: "14px",
  cursor: "pointer",
};

const thStyle = {
  padding: "12px",
  fontWeight: "bold",
  fontSize: "15px",
  color: "#555",
  borderBottom: "1px solid #ddd",
};

const tdStyle = {
  padding: "12px",
  fontSize: "14px",
  textAlign: "center",
  color: "#333",
};

const pageBtnStyle = {
  padding: "5px 10px",
  fontSize: "14px",
  backgroundColor: "#eee",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};