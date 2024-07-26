/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from 'react';

export const Loading = () => {
  const [loadingNow, setLoadingNow] =useState(true);

  useEffect(() => {
    const startTime = Date.now();

    const images = document.getElementsByTagName('img');
    
    let count = 0;
    let current = 0;
    let intervalCount = 0;

    // 画像の読み込み
    const onLoadImage = setInterval(function() {
      const img = new Image(); // 画像の作成
    // 画像読み込み完了したとき
      img.onload = function() {
        count += 1;
        current = Math.floor(count / images.length * 100);
      }
      // 画像読み込み失敗したとき
      img.onerror = function() {
        count += 1;
      }
      img.src = images[intervalCount].src; // 画像にsrcを指定して読み込み開始

      intervalCount++
      if (intervalCount >= images.length) {
        clearInterval(onLoadImage);
      }
    }, 100) // 0.1sごとにループ

    // ローディング処理
    const nowLoading = setInterval(function() {
      // 全て読み込んだ時
      if (current >= 100 && Date.now() - startTime >= 3000) {
        // ローディング要素の非表示
        setLoadingNow(false)
        // ローディングの終了
        clearInterval(nowLoading);
      }
    }, 1000);
  }, [])

  const load = css`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    background: black;
    opacity: 1;
    visibility: visible;
    transition: all 1s;
  `

  const none = css`
    opacity: 0;
    visibility: hidden;
  `

const loader = css`
  width: 40px;
  aspect-ratio: 1;
  --c: linear-gradient(white 0 0);
  --r1: radial-gradient(farthest-side at bottom,white 93%,#0000);
  --r2: radial-gradient(farthest-side at top   ,white 93%,#0000);
  background: 
    var(--c) ,var(--r1),var(--r2),
    var(--c) ,var(--r1),var(--r2),
    var(--c) ,var(--r1),var(--r2);
  background-repeat: no-repeat;
  animation: l2 1s infinite alternate;
  @keyframes l2 {
    0%,25% {
      background-size: 8px 0,8px 4px,8px 4px,8px 0,8px 4px,8px 4px,8px 0,8px 4px,8px 4px;
      background-position: 0 50%,0 calc(50% - 2px),0 calc(50% + 2px),50% 50%,50% calc(50% - 2px),50% calc(50% + 2px),100% 50%,100% calc(50% - 2px),100% calc(50% + 2px);
    }
    50% {
      background-size: 8px 100%,8px 4px,8px 4px,8px 0,8px 4px,8px 4px,8px 0,8px 4px,8px 4px;
      background-position: 0 50%,0 calc(0% - 2px),0 calc(100% + 2px),50% 50%,50% calc(50% - 2px),50% calc(50% + 2px),100% 50%,100% calc(50% - 2px),100% calc(50% + 2px);
    }
    75% {
      background-size: 8px 100%,8px 4px,8px 4px,8px 100%,8px 4px,8px 4px,8px 0,8px 4px,8px 4px;
      background-position: 0 50%,0 calc(0% - 2px),0 calc(100% + 2px),50% 50%,50% calc(0% - 2px),50% calc(100% + 2px),100% 50%,100% calc(50% - 2px),100% calc(50% + 2px);
    }
    95%,100% {
      background-size: 8px 100%,8px 4px, 8px 4px,8px 100%,8px 4px,8px 4px,8px 100%,8px 4px,8px 4px;
      background-position: 0 50%,0 calc(0% - 2px),0 calc(100% + 2px),50% 50%,50% calc(0% - 2px),50% calc(100% + 2px),100% 50%,100% calc(0% - 2px),100% calc(100% + 2px);
    }
  }
`

  return (
    <div id={loadingNow ? '' : 'isLoading'} css={loadingNow ? load : [load, none]}>
      <div css={loader}></div>
    </div>
  )
}