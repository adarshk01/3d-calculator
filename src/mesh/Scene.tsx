import { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: { [key: string]: THREE.Mesh };
  materials: { [key: string]: THREE.Material };
};

export function Scene(props: any) {
  const group = useRef(null);

  const { nodes, materials, animations } = useGLTF(
    "/scene.gltf"
  ) as unknown as GLTFResult;

  const { actions } = useAnimations(animations, group);

  console.log(animations);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Plane" rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            name="Plane003_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane003_1.geometry}
            material={materials.screenBody}
          />
          <mesh
            name="Plane003_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane003_2.geometry}
            material={materials.Material}
          />
        </group>{" "}
        <mesh
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "default";
          }}
          name="CBtn"
          castShadow
          receiveShadow
          geometry={nodes.CBtn.geometry}
          material={materials.C}
          position={[1, 1, -0.143]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plane002"
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials.screenBody}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plane003"
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials.lcd}
          position={[-0.5, 2.005, -0.156]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "default";
          }}
          name="percentBtn"
          castShadow
          receiveShadow
          geometry={nodes.percentBtn.geometry}
          material={materials["keys.001"]}
          position={[0, 1, -0.143]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "default";
          }}
          name="divBtn"
          castShadow
          receiveShadow
          geometry={nodes.divBtn.geometry}
          material={materials["keys.001"]}
          position={[-1, 1, -0.143]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          // addEventListener("mouseenter", () => {
          //   document.body.style.cursor = "pointer";
          // })
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "default";
          }}
          name="mulBtn"
          castShadow
          receiveShadow
          geometry={nodes.mulBtn.geometry}
          material={materials["keys.001"]}
          position={[-2, 1, -0.143]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "default";
          }}
          name="btn7"
          castShadow
          receiveShadow
          geometry={nodes.btn7.geometry}
          material={materials.keys}
          position={[1, 0, -0.143]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "default";
          }}
          name="btn8"
          castShadow
          receiveShadow
          geometry={nodes.btn8.geometry}
          material={materials.keys}
          position={[0, 0, -0.143]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "default";
          }}
          name="btn9"
          castShadow
          receiveShadow
          geometry={nodes.btn9.geometry}
          material={materials.keys}
          position={[-1, 0, -0.143]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "default";
          }}
          name="subBtn"
          castShadow
          receiveShadow
          geometry={nodes.subBtn.geometry}
          material={materials.keys}
          position={[-2, 0, -0.143]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "default";
          }}
          name="btn4"
          castShadow
          receiveShadow
          geometry={nodes.btn4.geometry}
          material={materials.keys}
          position={[1, -1, -0.143]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "default";
          }}
          name="btn5"
          castShadow
          receiveShadow
          geometry={nodes.btn5.geometry}
          material={materials.keys}
          position={[0, -1, -0.143]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "default";
          }}
          name="btn6"
          castShadow
          receiveShadow
          geometry={nodes.btn6.geometry}
          material={materials.keys}
          position={[-1, -1, -0.143]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "default";
          }}
          name="addBtn"
          castShadow
          receiveShadow
          geometry={nodes.addBtn.geometry}
          material={materials["keys.002"]}
          position={[-2, -1, -0.143]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "default";
          }}
          name="btn1"
          castShadow
          receiveShadow
          geometry={nodes.btn1.geometry}
          material={materials.keys}
          position={[1, -2, -0.143]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "default";
          }}
          name="btn2"
          castShadow
          receiveShadow
          geometry={nodes.btn2.geometry}
          material={materials.keys}
          position={[0, -2, -0.143]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "default";
          }}
          name="btn3"
          castShadow
          receiveShadow
          geometry={nodes.btn3.geometry}
          material={materials.keys}
          position={[-1, -2, -0.143]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "default";
          }}
          name="eqlBtn"
          castShadow
          receiveShadow
          geometry={nodes.eqlBtn.geometry}
          material={materials.equal}
          position={[-2, -2.5, -0.143]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 1, 2]}
        />
        <mesh
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "default";
          }}
          name="btn0"
          castShadow
          receiveShadow
          geometry={nodes.btn0.geometry}
          material={materials.keys}
          position={[0.5, -3, -0.143]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[2, 1, 1]}
        />
        <mesh
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "default";
          }}
          name="ptBtn"
          castShadow
          receiveShadow
          geometry={nodes.ptBtn.geometry}
          material={materials["keys.002"]}
          position={[-1, -3, -0.143]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          name="Plane023"
          castShadow
          receiveShadow
          geometry={nodes.Plane023.geometry}
          material={materials.back}
          position={[-0.053, 0.764, 13.147]}
          rotation={[Math.PI / 2, 0, Math.PI]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
