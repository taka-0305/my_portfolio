/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from 'react-router-dom';
import WorkArticle from "../workArticle/json/workArticle.json";
import { Loading } from '../load'
import { breakpoints as b } from '../../components/madiaQuery';

const contentsWrapper = css`
  width: 100%;
  padding: 10rem 0;
`

const title = css`
  padding: 5rem 0;
  text-align: center;
  color: white;
  h1{
    font-size: 4rem;
    font-weight: bold;
  }
`

const productWrapper = css`
`

const productContainer = css`
  width: 100%;
  margin-bottom: 10rem;
`

const imageList = css`
  width: 100%;
  padding: 0 5%;
`

const imageListWrapper = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-auto-flow: row dense;
  gap: 1rem;
  @media (max-width: ${b.tablet}){
    grid-template-columns: repeat(2, 1fr);
  }
`

const productImage = css`
  display: inline-block;
  aspect-ratio: 1 / 1;
  &:first-of-type{
    grid-row: 1 / 3;
    grid-column: 1 / 3;
  }
  img{
    width : 100%;
    height: 100%;
    object-fit: cover;
  }
`

const productText = css`
  width: 90%;
  margin: 0 auto;
  transform: translateY(0);
  transition: transform 0.5s,color 0.5s;
`

const productTitle = css`
width: 100%;
color: white;
h3{
  font-size: 3rem;
  font-weight: bold;
}
`

const viewSite = css`
  width: 90%;
  margin: 0 auto;
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

export const Works = () => {
  return (
    <>
    <Loading />
    <div css={contentsWrapper}>
      <div css={title}>
        <h1>WORKS</h1>
      </div>
      <div css={productWrapper}>
        {
          WorkArticle.map((item, index) => (
            <div key={index} css={productContainer}>
              <div css={imageList}>
                <div css={imageListWrapper}>
                  <div css={productImage}>
                    <img src={`/img/mockup/${item.image_path}`} alt="" />
                  </div>
                  {item.data.length != 0 && item.data.map((value, index) => (
                  <div key={index} css={productImage}>
                    <img src={`/img/mockup/${value.image_path}`} alt="" />
                  </div>
                  ))}
                </div>
              </div>
              <div css={productText}>
                <div css={productTitle}>
                  <h3>{item.title}</h3>
                </div>
              </div>
              <div css={viewSite}>
                <Link to={'/works/'+item.id}>
                  <span css={viewText}>詳細を見る</span>
                  <span css={viewIcon}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256"><path d="M224,104a8,8,0,0,1-16,0V59.32l-66.33,66.34a8,8,0,0,1-11.32-11.32L196.68,48H152a8,8,0,0,1,0-16h64a8,8,0,0,1,8,8Zm-40,24a8,8,0,0,0-8,8v72H48V80h72a8,8,0,0,0,0-16H48A16,16,0,0,0,32,80V208a16,16,0,0,0,16,16H176a16,16,0,0,0,16-16V136A8,8,0,0,0,184,128Z"></path></svg></span>
                </Link>
              </div>
            </div>
          ))}
        
      </div>
    </div>
    </>
  )
}