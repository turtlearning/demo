"use client"; // ✅ 클라이언트 컴포넌트 설정
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Intro() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/menu/drink"); // ✅ "/intro"에 접근하면 "/intro/greet"로 이동
  }, []);

  return null; // ✅ 아무것도 렌더링하지 않음 (자동 이동)
}