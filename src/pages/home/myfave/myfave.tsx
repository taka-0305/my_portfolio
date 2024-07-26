/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { breakpoints as b } from '../../../components/madiaQuery';

const myfaveList = [
  {
    "title": "飛行機",
    "description": "子供のころから飛行機が好きで、旅行するときは移動手段として出来るだけ飛行機を選ぶ。カメラも購入し、旅行先の空港では写真撮影にいそしむ。目標は日本の全空港制覇。好きな空港は旧石垣空港。好きな機体はボーイング787。",
    "image_path": "airplane.webp",
  },
  {
    "title": "スポーツ",
    "description": "スポーツ全般なんでも大好き。今は野球とサッカー、F1を中心に追いかけている。野球ではオリックス・バファローズ、サッカーではガンバ大阪が好き。F1は鈴鹿サーキットまで日本GPを見に行った経験あり。夢はリヴァプール（イングランド）にあるアンフィールドで試合を見ること。",
    "image_path": "football.webp",
  },
  {
    "title": "旅行",
    "description": "好奇心が強く知らない場所に行くのが大好き。旅行のスタイルは行きたい場所を数か所決めて、その間にわざと余白を作り、辺りを散策し気になった路地などに入る自由なもの。あまりに自由なので誰かと巡ることは出来なさそう。基本的に一人旅。",
    "image_path": "trip.webp",
  },
]

const work = css`
  display: flex;
  flex-wrap: wrap;
`

const workContainer = css`
  width: calc(95% / 3);
  aspect-ratio: 1 / 1;
  overflow: hidden;
  margin-bottom: 5%;
  margin-right: 2.5%;
  position: relative;
  &:hover .text{
    transform: translateY(0);
  }
  &:nth-of-type(3n){
    margin-right: 0%;
  }
  @media (max-width: ${b.tablet}) {
    width: 100%;
    margin-right: 0;
  }
`
const img = css`
  width : 100%;
  aspect-ratio: 1 / 1;
  img{
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }
`

const text = css`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: 100%;
  padding: 3rem 5%; 1rem;
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 100%);
  h3{
    font-size: 1.75rem;
    font-weight: bold;
  }
  p{
    font-size: 1.2rem;
  }
`

export const Myfave = () => {
  return (
    <div css={work}>
      {myfaveList.map((item,index) => (
      <div key={index} css={workContainer}>
        <div css={img}>
          <img src={`/img/myfave/${item.image_path}`} alt="" />
        </div>
        <div className="text" css={text}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </div>
      ))}
    </div>
  )
}