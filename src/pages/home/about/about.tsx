/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from 'react'
import {Link} from 'react-router-dom';
import osakaStation from "../../../assets/img/osaka_station.webp"

const about = css`
  display: flex;
  @media (max-width: 520px) {
    display: block;
  }
`

const img = css`
  width: 40vw;
  aspect-raito: 1 / 1;
  margin-right: 4rem;
  @media (max-width: 520px) {
    width: 100%;
    margin-right: 0;
  }
  &:hover{
    img{
      filter:grayscale(0%);
    }
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter:grayscale(100%);
    transition: filter .5s;
  }
`

const info = css`
  flex: 1;
`

const infoBox = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`

const infoBoxWrapper = css`
  display:flex;
  flex-flow: column;
`

const text = css`
  width: 100%;
  font-size: 1.4rem;
  margin-bottom: 2rem;
  @media (max-width: 520px) {
    margin-top: 2rem;
  }
`

const link = css`
  font-size: 1.4rem;
  a{
    display: flex;
    font-weight: bold;
    width: fit-content;
    &:hover{
      .iconBox{
        transform: translateX(50%);
      }
    }
    svg{
      height: 1em;
      fill: white;
    }
  }
`

const icon = css`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s;
`

export const About = () => {

  useEffect(() => {
      window.scrollTo(0, 0)
  }, []);

  return (
    <div css={about}>
      <div css={img}>
        <img src={osakaStation} alt="" />
      </div>
      <div css={info}>
        <div css={infoBox}>
          <div css={infoBoxWrapper}>
            <div css={text}>
              <p>2002年生まれ、大阪府出身。幼少期は野球、サッカー、ソフトボール、将棋と多くの習い事に取り組む。17歳の時にブログ記事を読んだことがきっかけで、独学でHTML、CSS、JavaScriptを勉強し、初めて自分のWebサイトを公開する。自分の頭に思い浮かんだものを形にできることに楽しみを覚え、よりWeb制作について学びたいと思い、専門学校に進学。進学後はPythonによるデータ分析、機械学習に興味を持ち、専攻はAI開発専攻を選択。Web制作だけでなくAI開発についても学んでいる。個人としては3つのWebサイトを運営しており、デザインからコーディング、コンテンツ制作まですべて自分で手掛けている。これらのサイト運営を通じて、実践的なスキルを磨きながら、サイト高速化などユーザーエクスペリエンスの向上に努めている。Web制作に取り組む際には、時間を忘れて没頭することが多く、しばしばご飯を食べるのも忘れてしまうほど集中してしまう。コーディング中に直面するエラーが解消された瞬間には、大きな達成感と喜びを感じる。また、公開後に頂くサイトユーザーからの感謝の言葉が何よりも嬉しい。将来的には社会に貢献できる、より革新的で使いやすいWebアプリケーションを開発していきたい。</p>
            </div>
            <div css={link}>
              <Link to={'/about/'}>
                <p>More</p>
                <div className={"iconBox"} css={icon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path></svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}