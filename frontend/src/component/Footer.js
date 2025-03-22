import "../style/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          주식회사 휘카페 │ 권석원 │ 서울특별시 동대문구 서울시립대로117 청년UP플랫폼 1F │
          사업자등록번호: 116-88-02470 사업자정보 확인
        </p>
        <p>
          통신판매업 신고번호: 제 2023-서울동대문-0149호 │ 전화번호: 070-8667-6332 │
          이메일: hygafe@naver.com │ 기타: 내부 시설 기타입력란
        </p>
        <div className="footer-sns">
          <a
            href="https://www.instagram.com/f.ree.whale/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/instar.png"
              alt="Instagram"
              className="insta-icon"
            />
          </a>
          <a
            href="https://smartstore.naver.com/hygafe2022/category/ALL?cp=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/naverstore.png"
              alt="naver store"
              className="naver-icon"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}