/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 airpods.gltf 
Author: JY_JY_ (https://sketchfab.com/JY_JY_)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/airpods-pro-4478dddbfa244f6f9b93eebbd027a73b
Title: AirPods Pro
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/airpods.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, 0]}>
        <group position={[0, 0, 0.673]} scale={2.39}>
          <mesh
            geometry={nodes.Object_5.geometry}
            material={materials.cEVcwrpGKjNUrED}
          />
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials.DrEQLAPBkLNlpSM}
          />
          <mesh
            geometry={nodes.Object_7.geometry}
            material={materials.FJixwyYXpYmTghW}
          />
          <mesh
            geometry={nodes.Object_8.geometry}
            material={materials.czaVLhHNccVShhr}
          />
          <mesh
            geometry={nodes.Object_9.geometry}
            material={materials.OXPzgZBrHvcYhRk}
          />
          <mesh
            geometry={nodes.Object_10.geometry}
            material={materials.BQKMNbgpcCWqzPH}
          />
        </group>
        <group position={[0, 0, 3.009]} scale={2.39}>
          <mesh
            geometry={nodes.Object_12.geometry}
            material={materials.czaVLhHNccVShhr}
          />
          <mesh
            geometry={nodes.Object_13.geometry}
            material={materials.FJixwyYXpYmTghW}
          />
          <mesh
            geometry={nodes.Object_14.geometry}
            material={materials.BQKMNbgpcCWqzPH}
          />
          <mesh
            geometry={nodes.Object_15.geometry}
            material={materials.cEVcwrpGKjNUrED}
          />
          <mesh
            geometry={nodes.Object_16.geometry}
            material={materials.OXPzgZBrHvcYhRk}
          />
          <mesh
            geometry={nodes.Object_17.geometry}
            material={materials.DrEQLAPBkLNlpSM}
          />
        </group>
        <group position={[0, 0, -0.755]} scale={2.39}>
          <mesh
            geometry={nodes.Object_19.geometry}
            material={materials.FJixwyYXpYmTghW}
          />
          <mesh
            geometry={nodes.Object_20.geometry}
            material={materials.nYnEcgaBKlfIhcZ}
          />
          <mesh
            geometry={nodes.Object_21.geometry}
            material={materials.mSInhyaRsmkclHz}
          />
          <mesh
            geometry={nodes.Object_22.geometry}
            material={materials.cEVcwrpGKjNUrED}
          />
        </group>
        <group position={[0, 0, -0.755]} scale={2.39}>
          <mesh
            geometry={nodes.Object_24.geometry}
            material={materials.EGgayDtrTMexFep}
          />
          <mesh
            geometry={nodes.Object_25.geometry}
            material={materials.FJixwyYXpYmTghW}
          />
          <mesh
            geometry={nodes.Object_26.geometry}
            material={materials.wTooIPSyZGyHobK}
          />
          <mesh
            geometry={nodes.Object_27.geometry}
            material={materials.mSInhyaRsmkclHz}
          />
          <mesh
            geometry={nodes.Object_28.geometry}
            material={materials.xddcGVJYfrnQmdy}
          />
          <mesh
            geometry={nodes.Object_29.geometry}
            material={materials.cEVcwrpGKjNUrED}
          />
          <mesh
            geometry={nodes.Object_30.geometry}
            material={materials.nYnEcgaBKlfIhcZ}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/airpods.gltf");
