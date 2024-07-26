/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useParams } from "react-router-dom";
import workArticleArray from "./json/workArticle.json"
import { Loading } from '../load'
import { breakpoints as b } from '../../components/madiaQuery';

const matchData = (id:number) => {
  const matchedData = workArticleArray.filter((data) => data.id == id);
  return matchedData.length > 0 ? matchedData[0] : null;
}

const work = css`
  width: 100%;
  padding: 10rem 5%;
`

const workTop = css`
  display: flex;
  @media (max-width: ${b.tablet}){
    flex-wrap: wrap;
  }
`

const topImg = css`
  width: 50%;
  aspect-ratio: 1 / 1;
  @media (max-width: ${b.tablet}){
    width: 100%;
  }
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const topText = css`
  flex: 1;
  padding: 5%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  h3{
    font-size: 1.75rem;
    font-weight: bold;
  }
  p{
    font-size: 1.2rem;
  }
`

const workArray = css`
  margin-top: 5rem;
  display: flex;
`

const workContainer = css`
  color: white;
  width: calc(95% / 3);
  margin-bottom: 5%;
  @media (max-width: ${b.tablet}){
    width: 100%;
  }
  &:nth-of-type(3n+1){
    margin-right: 5%;
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
  h3{
    font-size: 1.75rem;
    font-weight: bold;
  }
  p{
    font-size: 1.2rem;
  }
`

const info = css`
  color: gray;
  span{
    margin-right: 0.5rem;
  }
`

const viewSite = css`
  font-size: 1.2rem;
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

export const WorkArticle = () => {
  const { id } = useParams();
  const parsedId = id ? Number(id) : undefined;
  let matchedDataBody = null;
  if (parsedId) {
    matchedDataBody = matchData(parsedId)
  }
  return (
    <>
    <Loading />
    <div css={work}>
      {matchedDataBody && ( // nullチェックを行ってから値を表示
      <>
        <div>
          <div css={workTop}>
            <div css={topImg}>
              <img src={`/img/mockup/${matchedDataBody.image_path}`} />
            </div>
              <div css={topText}>
                <div>
                  <h3>{matchedDataBody.title}</h3>
                  <p>{matchedDataBody.description}</p>
                  <p css={info}>{matchedDataBody.date}作成</p>
                  <p css={info}>
                    {matchedDataBody.lang.map((item, index) => (
                      <span key={index}>{item}</span>
                    ))}
                  </p>
                  <div css={viewSite}>
                    <a href={matchedDataBody.url} target="_blank" rel="noopener noreferrer">
                      <span css={viewText}>Webサイトを見る</span>
                      <span css={viewIcon}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path></svg></span>
                    </a>
                  </div>
                </div>
            </div>
          </div>
        </div>
        {matchedDataBody.data.length != 0 && (
          <div css={workArray}>
            { matchedDataBody.data.map((item,index) => (
            <div key={index} css={workContainer}>
              <div css={img}>
                <img src={`/img/mockup/${item.image_path}`} alt="" />
              </div>
              <div css={text}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p css={info}>{item.date}作成</p>
                <p css={info}>
                  {item.lang.map((item, index) => (
                    <span key={index}>{item}</span>
                  ))}
                </p>
                <div css={viewSite}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <span css={viewText}>View Site</span>
                    <span css={viewIcon}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path></svg></span>
                  </a>
                </div>
              </div>
          </div>
          ))}
        </div>
          )}
      </>
      )}
    </div>
    </>
  )
}