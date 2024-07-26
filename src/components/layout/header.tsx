/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { breakpoints as b } from '../madiaQuery';

const header = css`
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translate(-50%,-100%);
  min-width: 60%;
  z-index: 100;
  transition: transform 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${b.tablet}){
    top: 0;
    width: 100%;
  }
`

const isShow = css`
  transform: translate(-50%,0);
`
const headerWrapper = css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: white;
  border-radius: 10px;
  box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, .3);
  @media (max-width: ${b.tablet}){
    margin-top: 10px;
    width: 90%;
  }
`

const headerContents = css`
  display: flex;
  width: 100%;
  height: 100%;
  @media (max-width: ${b.tablet}){
    justify-content: end;
    align-items: center;
  }
`

const link = css`
  flex: 1;
  margin-left: 1rem;
  display: flex;
  justify-content:space-around;
  align-items: center;
  @media (max-width: ${b.mobile}){
    display:none;
  }
`

const linkContainer = css`
  font-size: 1.6rem;
  a{
    text-transform: uppercase;
    display: block;
    line-height: 1.5;
    width: fit-content;
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
  }
`
const menuButton = css`
  content: '';
  display: block;
  position: absolute;
  height: 2px;
  width: 30px;
  border-radius: 1px;
  background-color: black;
  transition: .2s;
`

const headerMenu = css`
  display: none;
  height: 30px;
  width: 30px;
  z-index: 10001;
  cursor: pointer;
  @media (max-width: ${b.mobile}){
    display: block;
  }
  div{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    span{
      ${menuButton}
      &:before{
        transform: translateY(-8px);
        ${menuButton}
      }
      &:after{
        transform: translateY(8px);
        ${menuButton}
      }
    }
    &#active{
      span{
        background-color: transparent;
        &:before{
          transform:rotate(45deg);
        }
        &:after{ 
          transform:rotate(-45deg);
        }
      }
    }
  }
}
`

const isActiveNav = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgb(255,255,255,0.8);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`

const isActiveNavList = css`
  margin: 1rem: 0;
  text-align: center;
  a{
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
  }
`




export const Header = () => {
  const [loading, setLoading] = useState(true);
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const nowLoading = setInterval(function() {
      const loadingElement = document.getElementById('isLoading');
      if (loadingElement) {
        setLoading(false)
        clearInterval(nowLoading);
      }
    }, 10);
  }, []);
  return (
    <>
      <header css={loading ? header : [header, isShow]}>
        <div css={headerWrapper}>
          <div css={headerContents}>
            <div css={link}>
              <div css={linkContainer}>
                <Link to={"/"}>TOP</Link>
              </div>
              <div css={linkContainer}>
                <Link to={"/about"}>about</Link>
              </div>
              <div css={linkContainer}>
                <Link to={"/works"}>works</Link>
              </div>
              {/* <div css={linkContainer}>
                <Link to={"/"}>Twitter</Link>
              </div> */}
            </div>
            <div id="header-menu" css={headerMenu} onClick={toggleMenu}>
              <div id={isActive ? 'active' : ''}><span></span></div>
            </div>
          </div>
        </div>
        {
          isActive && (
            <div css={isActiveNav}>
              <div>
                <div css={isActiveNavList}>
                  <Link to={"/"}>TOP</Link>
                </div>
                <div css={isActiveNavList}>
                  <Link to={"/about"}>about</Link>
                </div>
                <div css={isActiveNavList}>
                  <Link to={"/works"}>works</Link>
                </div>
                {/* <div css={isActiveNavList}>
                  <Link to={"/"}>Twitter</Link>
                </div> */}
              </div>
            </div>
          )
        }
      </header>
    </>
  )
}