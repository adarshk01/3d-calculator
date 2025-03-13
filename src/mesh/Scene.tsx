import { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, Html, Text3D } from "@react-three/drei";
import { keys } from "../utils/keys";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: { [key: string]: THREE.Mesh };
  materials: { [key: string]: THREE.Material };
};

export function Scene(props: any) {
  const group = useRef(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { nodes, materials, animations } = useGLTF(
    "/scene.gltf"
  ) as unknown as GLTFResult;

  const { actions } = useAnimations(animations, group);
  const [numPlacement, setNumPlacement] = useState(-2.8);
  const [clicked, setClicked] = useState("");
  const [trigger, setTrigger] = useState(false);
  const [currDigtrigger, setCurrDigTrigger] = useState(false);
  const [currDig, setCurrDig] = useState<string>();
  const [currNum, setCurrNum] = useState<string[]>([]);
  const [screen, setScreen] = useState(false);
  useEffect(() => {
    setScreen(true);
  }, [currDigtrigger]);

  useEffect(() => {
    setNumPlacement(numPlacement + 0.5);
  }, [currDigtrigger]);

  useEffect(() => {
    if (clicked && actions && actions[keys[clicked]]) {
      const action = actions[keys[clicked]];

      if (action) {
        action.play();
        action.clampWhenFinished = true;
        action.loop = THREE.LoopOnce;
        action.reset();
        handlePlay();
      }
    }
  }, [clicked, trigger]);

  useEffect(() => {
    if (currDig) {
      setCurrNum((prev) => [...prev, currDig]);
    }
  }, [currDig, currDigtrigger]);

  const handlePlay = async () => {
    if (audioRef.current) {
      try {
        audioRef.current.volume = 1; // Set low volume
        audioRef.current.loop = false; // Enable loop
        await audioRef.current.play();
        // setIsPlaying(true);
      } catch (error) {
        console.log("Playback failed:", error);
      }
    }
  };

  function add(a: number, b: number) {
    return a + b;
  }

  function sub(a: number, b: number) {
    return a - b;
  }

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" position={[0.5, 1, 0]} rotation={[0, 0.6, 0]}>
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
        <Html>
          <audio ref={audioRef}>
            <source src="/hit.mp3" type="audio/mp3" />
          </audio>
        </Html>
        <mesh
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "default";
          }}
          onClick={() => {
            setTrigger(!trigger);
            setClicked("CBtn");
            setCurrNum([]);
            setCurrDig("");
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
          material={
            screen
              ? new THREE.MeshBasicMaterial({ transparent: true, opacity: 0 })
              : materials.lcd
          }
          position={[-0.5, 2.005, -0.156]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          position={[-0.5, 2.005, -0.155]}
          rotation={[Math.PI, 0, 0]}
          scale={[3.8, 0.75, 0]}
        >
          <planeGeometry />

          <meshBasicMaterial color={"#cdcdcd"} />
        </mesh>
        <mesh
          // position={[-1.8, 1.725, -0.135]}
          position={[1.3, 1.725, -0.135]}
          rotation={[0, Math.PI, 0]}
          scale={[0.6, 0.6, 0.101]}
        >
          {" "}
          <Text3D font="./Digital-7_Regular.json">
            {parseInt(currNum.join(""), 10)}
            <meshBasicMaterial
              color={"#1b1b1a"}
              transparent={currDig ? false : true}
              opacity={currDig ? 1 : 0}
            />
          </Text3D>
        </mesh>
        <mesh
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "default";
          }}
          onClick={() => {
            setTrigger(!trigger);
            setClicked("percentBtn");
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
          onClick={() => {
            setTrigger(!trigger);
            setClicked("divBtn");
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
          onClick={() => {
            setTrigger(!trigger);
            setClicked("mulBtn");
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
          onClick={() => {
            setTrigger(!trigger);
            setCurrDigTrigger(!currDigtrigger);
            setClicked("btn7");
            setCurrDig("7");
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
          onClick={() => {
            setTrigger(!trigger);
            setCurrDigTrigger(!currDigtrigger);
            setClicked("btn8");
            setCurrDig("8");
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
          onClick={() => {
            setTrigger(!trigger);
            setCurrDigTrigger(!currDigtrigger);
            setClicked("btn9");
            setCurrDig("9");
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
          onClick={() => {
            setTrigger(!trigger);
            setClicked("subBtn");
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
          onClick={() => {
            setTrigger(!trigger);
            setCurrDigTrigger(!currDigtrigger);
            setClicked("btn4");
            setCurrDig("4");
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
          onClick={() => {
            setTrigger(!trigger);
            setCurrDigTrigger(!currDigtrigger);
            setClicked("btn5");
            setCurrDig("5");
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
          onClick={() => {
            setTrigger(!trigger);
            setCurrDigTrigger(!currDigtrigger);
            setClicked("btn6");
            setCurrDig("6");
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
          onClick={() => {
            setTrigger(!trigger);
            setClicked("addBtn");
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
          onClick={() => {
            setTrigger(!trigger);
            setCurrDigTrigger(!currDigtrigger);
            setClicked("btn1");
            setCurrDig("1");
          }}
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
          onClick={() => {
            setTrigger(!trigger);
            setCurrDigTrigger(!currDigtrigger);
            setClicked("btn2");
            setCurrDig("2");
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
          onClick={() => {
            setTrigger(!trigger);
            setCurrDigTrigger(!currDigtrigger);
            setClicked("btn3");
            setCurrDig("3");
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
          onClick={() => {
            setTrigger(!trigger);
            setClicked("eqlBtn");
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
          onClick={() => {
            setTrigger(!trigger);
            setCurrDigTrigger(!currDigtrigger);
            setClicked("btn0");
            setCurrDig("0");
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
          onClick={() => {
            setTrigger(!trigger);
            setClicked("ptBtn");
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
