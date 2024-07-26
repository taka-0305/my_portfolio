/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from 'react-router-dom';
import workArticleArray from "../../workArticle/json/workArticle.json"
import { breakpoints as b } from '../../../components/madiaQuery';


const work = css`
  display: flex;
  flex-wrap: wrap;
`

const workContainer = css`
  width: calc(95% / 2);
  margin-bottom: 5%;
  &:nth-of-type(2n+1){
    margin-right: 5%;
  }
  @media (max-width:  ${b.tablet}) {
    width: 100%;
    &:nth-of-type(2n+1){
      margin-right: 0;
    }
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
  width: 90%;
  margin: 1rem auto;
  text-align: center;
  h3{
    font-size: 1.75rem;
    font-weight: bold;
  }
  p{
    font-size: 1.2rem;
  }
`


const viewSite = css`
  font-size: 1.2rem;
  display: flex;
  justify-content: center;
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

export const Works = () => {
  return (
    <div css={work}>
      {workArticleArray.map((item,index) => (
      <div key={index} css={workContainer}>
        <div css={img}>
          <img src={`./img/mockup/${item.image_path}`} alt="" />
          </div>
          <div css={text}>
            <h3>{item.title}</h3>
            {/* <p>{item.description}</p>
            <p css={info}>{item.url}</p>
            <p css={info}>{item.date}作成</p>
            <p css={info}>
              {item.lang.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </p> */}
            <div css={viewSite}>
              <Link to={'/works/'+item.id}>
                <span css={viewText}>詳細を見る</span>
                <span css={viewIcon}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path></svg></span>
              </Link>
            </div>
          </div>
      </div>
      ))}
    </div>
  )
}