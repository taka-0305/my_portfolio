/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from 'react-router-dom';
import { Myfave } from "../home/myfave/myfave"
import Career from "./json/career.json";
import { Loading } from '../load'
import { breakpoints as b } from '../../components/madiaQuery';

const title = css`
  padding: 2.5rem 0;
  color: white;
  h1{
    font-size: 4rem;
    font-weight: bold;
  }
`

const text = css`
  padding-bottom: 2.5rem;
  p{
    font-size: 1.4rem;
  }
`

const img = css`
  padding-bottom: 2.5rem;
  img{
    width: 100%;
    height: auto;
  }
`

const about = css`
  color: white;
  width: 60%;
  margin: 0 auto;
  padding: 10em 0;
  @media (max-width: ${b.tablet}){
    width: 90%;
  }
`

const boxTitle = css`
  h3{
    font-size: 2.4rem;
    font-weight: bold;
  }
`

const boxMargin = css`
  margin: 10rem auto;
  &:first-of-type{
    margin: 0 auto 10rem;
  }
`

const table = css`
  tr{
    font-size: 1.6rem;
    line-height: 2;
    td{
      padding: 1rem;
      p{
        display: inline-block;
      }
    }
  }
`

const space = css`
  margin: 0 0.5em;
  display: inline-block;
  &:first-of-type{
    margin-left: 0;
  }
`

const date = css`
  padding-right: 2em;
`

const viewSite = css`
  display: inline-block;
  padding-left: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  a{
    display: flex;
    width: fit-content;
    align-items: center;
    position: relative;
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
    &:hover::before{
      transform-origin: center left;
      transform: scaleX(1);
    }
  }
`

const viewText = css`
`

const viewIcon = css`
  margin-left: 0.25rem;
  display: inline-flex;
  width: 1.25em;
  height: 1.25em;
  svg{
    width: 100%;
    height: 100%;
    fill: white;
  }
`

export const About = () => { 
  const skillList = ["HTML","CSS","JavaScript","PHP","Python","MySQL"]
  return (
    <>
    <Loading />
    <div css={about}>
      <div css={title}>
        <h1>About</h1>
      </div>
      <div css={text}>
        <p>2002年生まれ、大阪府出身。独学でWeb制作を勉強し、17歳で初めてWebサイトを公開する。現在は専門学校に進学し、AI開発を学びながら3サイトを運営中。制作を始めるとご飯を食べ忘れるほどのめりこんでしまう。好きな瞬間はエラーが解消されたとき。</p>
      </div>
      <div css={img}>
        <img src={'/img/about/heart_flower.webp'} alt="" />
      </div>
      <div>
        <div css={boxMargin}>
          <div css={boxTitle}>
            <h3>Profile</h3>
          </div>
          <table css={table}>
            <tr>
              <td>Name</td>
              <td>飛田貴之（Tobita Takayuki）</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>21</td>
            </tr>
            <tr>
              <td>Link</td>
              <td><p>Twitter</p>
                <div css={viewSite}>
                  <a css={space} href="http://" target="_blank" rel="noopener noreferrer"><span css={viewText}>View</span>
                    <span css={viewIcon}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path></svg></span>
                  </a>
                </div>
                <p>Github</p>
                <div css={viewSite}>
                  <a css={space} href="http://" target="_blank" rel="noopener noreferrer"><span css={viewText}>View</span>
                    <span css={viewIcon}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path></svg></span>
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>Skills</td>
              <td>{skillList.map((item, index) => (
                <span key={index} css={space}>{item}</span>
              ))  }</td>
            </tr>
          </table>
        </div>
        <div css={boxMargin}>
          <div css={boxTitle}>
            <h3>My Career</h3>
          </div>
          <table css={table}>
            {Career.map((item, index) => (
              <tr key={index}>
                <td css={date}>{item.date}</td>
                <td>{item.text}{
                  item.link != "" && <div css={viewSite}><Link to={item.link}>
                  <span css={viewText}>View</span>
                  <span css={viewIcon}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path></svg></span></Link>
                    </div>
                }</td>
            </tr>
            ))}
          </table>
        </div>
        <div css={boxMargin}>
          <div css={boxTitle}>
            <h3>My Fave</h3>
          </div>
          <Myfave />
        </div>
      </div>
    </div>
    </>
  )
}