/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";


const footer = css`
  padding: 10em 0;
  with: 100%;
  height: 500px;
`

const footerWrapper = css`
  width: 90%;
  margin: 0 auto;
`

const hr = css`
  width: 100%;
  height: 2px;
  background: white;
`

const container = css`
  display: flex;
  justify-content: space-between;
  padding: 5em 0;
  @media (max-width: 520px) {
    display: block;
  }
`

const mail = css`
  color: white;
  a{
    font-size: 4rem;
    font-weight: bold;
    dispaly: block;
    position: relative;
    @media (max-width: 520px) {
      font-size: 2rem;
    }
    &::after{
      content: "";
      position: absolute;
      bottom: -1px;
      left: 0;
      height: 1px;
      width: 100%;
      background: white;
    }
  }
  @media (max-width: 520px) {
    width: 100%;
    margin-bottom: 4rem;
  }
`

const textContainer = css`
  display: flex;
`

const info = css`
  width: fit-content;
  color: white;
  padding: 0 4rem;
  @media (max-width: 520px) {
    padding: 0 4rem 0 0;
  }
`
const title = css`
  h3{
    font-size: 1.4rem;
    font-weight: bold;
  }
`


const infoList = css`
  a{
    display: block;
    font-size: 2rem;
    line-height: 1.5;
    width: fit-content;
    margin: 0.5em 0;
    font-weight: bold;
    position: relative;
    transition: color 0.5s;
    &::before{
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 2px;
      background: red;
      transform-origin: center right;
      transform: scaleX(0);
      transition: transform 0.5s;
    }
    &:hover{
      color: red;
      &::before{
        transform-origin: center left;
        transform: scaleX(1);
      }
    }
  }
`

const copyLight = css`
  width: 100%;
  color: white;
`

export const Footer = () => {
  return(
    <footer css={footer}>
      <div css={footerWrapper}>
        <hr css={hr} />
        <div css={container}>
          <div css={mail}>
            <a href="mailto:tobita.hal@gmail.com">tobita.hal@gmail.com</a>
          </div>
          <div css={textContainer}>
            <div css={info}>
              <div css={title}>
                <h3>INFO</h3>
              </div>
              <div css={infoList}>
                <Link to={'/'}>TOP</Link>
                <Link to={'/about/'}>ABOUT</Link>
                <Link to={'/works/'}>WORK</Link>
              </div>
            </div>
            <div css={info}>
              <div css={title}>
                <h3>SOCIAL</h3>
              </div>
              <div css={infoList}>
                <a href="">準備中</a>
                <a href="">準備中</a>
                <a href="">準備中</a>
              </div>
            </div>
          </div>
        </div>
        <div css={copyLight}>
          <p>© 2024 TAKA ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  )
}