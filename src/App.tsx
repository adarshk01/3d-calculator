import { Canvas } from "@react-three/fiber";

import "./App.css";
import { Scene } from "./mesh/Scene";
import { PerspectiveCamera } from "@react-three/drei";
import { useEffect, useState } from "react";

function App() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  const [aspect, setAspect] = useState(window.innerWidth / window.innerHeight);
  const [cameraAngle, setCameraAngle] = useState(-9);

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setAspect(width / height);
  }, [height, width]);

  useEffect(() => {
    if (aspect < 1) {
      setCameraAngle(-11);
    } else {
      setCameraAngle(-9);
    }
  }, [aspect]);

  return (
    <div className=" h-screen  bg-black  ">
      <Canvas>
        {/* <ResizeHandler /> */}
        <PerspectiveCamera
          makeDefault
          position={[cameraAngle, 1, -2.9]}
          onUpdate={(self) => self.lookAt(0, 0, 0)}
          aspect={aspect}
        />
        {/* <OrbitControls /> */}
        <Scene />
        {/*Lights*/}
        <ambientLight intensity={0.25} color={"#252525"} />
        <pointLight castShadow intensity={200} position={[3, 7, -1]} />
        <pointLight
          castShadow
          intensity={450}
          position={[9, 4.6, -2.5]}
          color={"#68CBFD"}
        />
        <pointLight castShadow intensity={500} position={[-15, 0, 0]} />
        <pointLight
          castShadow
          intensity={75}
          position={[-8, -5.5, -3.8]}
          color={"#FDA468"}
          // color={"#68CBFD"}
        />
        <pointLight
          intensity={2500}
          position={[11, 0, 3]}
          color={"#2ECBFF"}
          // color={"#68CBFD"}
        />{" "}
        <pointLight intensity={325} position={[5, 0, -15]} />
      </Canvas>
    </div>
  );
}

export default App;
