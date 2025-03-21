
export default function Home() {
  const whales = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      {/* 메인 배너 */}
      <div className="main-page">
        <img src="/banner.png" alt="커피 이미지" className="hero-image" />
        <div className="hero-text-container">
        <div className="hero-text">
          <h2>㈜ 프리웨일</h2>
          <p>
          FREE WHALE은 새로운 공익적 가치의 길을 걸어가는 사회적 기업입니다. <br />
          FREE WHALE은 경제선 지능 청년 바리스타들에게 평범한 일상을 제공하는 따뜻한 일터입니다. <br />
          청년 바리스타들이 꿈을 이루며 한 걸음씩 나아갈 수 있도록 우리의 이야기를 응원해 주세요.
          </p>
        </div>
        </div>
      </div>

      {/* 무한 고래 스크롤 */}
      <div className="marquee">
        <div className="marquee-content">
          {[...whales, ...whales].map((n, i) => (
            <img key={i} src={`/whale${n}.png`} alt={`고래${n}`} className="whale-img" />
          ))}
        </div>
      </div>
    </div>
  );
}