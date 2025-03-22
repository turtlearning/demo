"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function WritePage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = `http://localhost:8080/board?title=${encodeURIComponent(title)}&content=${encodeURIComponent(content)}`;

    const res = await fetch(url, {
      method: "POST",
    });

    if (res.ok) {
      alert("게시글이 작성되었습니다.");
      router.push("/community");
    } else {
      alert("작성 실패");
    }
  };

  return (
    <div style={{ maxWidth: "700px", margin: "auto", padding: "40px 20px" }}>
      <h1 style={{ fontSize: "32px", textAlign: "center", color: "#000000", marginBottom: "30px" }}>
        ✏️ 글 작성하기
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{
            padding: "12px",
            fontSize: "16px",
            border: "1px solid #ddd",
            borderRadius: "6px",
          }}
        />

        <textarea
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={8}
          style={{
            padding: "12px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            resize: "vertical",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "12px",
            fontSize: "16px",
            backgroundColor: "#456EB7",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
        >
          작성하기
        </button>
      </form>
    </div>
  );
}