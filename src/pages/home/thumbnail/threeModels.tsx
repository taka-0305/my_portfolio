/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Model } from './model';
import { OrbitControls,PerspectiveCamera,Stage } from '@react-three/drei';


export const ThreeModels: React.FC<{ modelUrl: string; isShow: boolean }> = ({ modelUrl, isShow }) => {
  const [rotation, setRotation] = useState([0, 7 * Math.PI / 4, 0]);

  useEffect(() => {
    const handleResize = () => {
      // ウィンドウの幅に応じて回転角度を更新するロジック
      const windowWidth = window.innerWidth;
      let newRotation;

      if (windowWidth <= 1024) {
        newRotation = [0, 265 * Math.PI / 180, 0]; // 520以下の場合の回転角度
      } else {
        newRotation = [0, 265 * Math.PI / 180, 0]; // 520より大きい場合の回転角度
      }

      setRotation(newRotation);
    };

    // 初回マウント時に1度だけ実行される
    handleResize();

    window.addEventListener('resize', handleResize);

    // cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function CanvasBox() {
    return (
      <Canvas style={{ width: '100%', height: '100%' }}>
        <PerspectiveCamera
          makeDefault
          args={[40, innerWidth / innerHeight, innerWidth / innerHeight, 2000]}
          position={[0, 0, 9.5]}
        />
        <Stage adjustCamera={false}>
          <Model url={modelUrl} rotation={rotation} />
        </Stage>
        <ambientLight args={[0xffffff]} intensity={0.5} color="white"/>
        <directionalLight position={[1, 1, 1]} intensity={0.8} />
        <OrbitControls makeDefault enableZoom={false} />
      </Canvas>
    )
  }

  const ModelBox = css({
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
  })

  const showModel = css({
    display: "block"
  })
  
  const hideModel = css({
    display: "none"
  })

  return (
    <>
      {isShow ? (
        <div css={[ModelBox, showModel]}>
          <CanvasBox />
        </div>
      ) : (
        <div css={[ModelBox, hideModel]}>
          <CanvasBox />
        </div>
      )}
    
    </>
  );
};
