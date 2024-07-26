import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export const Model: React.FC<{ url: string; rotation: number[] }> = ({ url, rotation }) => {
  const group = useRef<THREE.Group>(null);
  const { scene } = useGLTF(url);
// 毎フレームごとに呼び出される関数
useFrame(() => {
  // モデルを回転させる
  if (group.current) {
    group.current.rotation.y += 0.005; // 任意の速度で回転
  }
});

  return (
      <group ref={group} position={[0, 0, 0]} rotation={[rotation[0], rotation[1], rotation[2]]}>
        <primitive object={scene} scale={[1.2, 1.2, 1.2]} />
      </group>
    
  );
};
