import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Scene } from "./mesh/Scene";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

function App() {
  return (
    <div className=" h-screen  bg-black  ">
      <Canvas>
        <PerspectiveCamera makeDefault position={[-5, 0, -8.5]} />
        <OrbitControls />
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
        <pointLight castShadow intensity={300} position={[-15, 0, 0]} />
        <pointLight
          castShadow
          intensity={75}
          position={[-8, -5.5, -3.8]}
          color={"#FDA468"}
          // color={"#68CBFD"}
        />
        <pointLight
          intensity={1000}
          position={[0, 0, 8]}
          color={"#2ECBFF"}
          // color={"#68CBFD"}
        />{" "}
        <pointLight intensity={325} position={[4, 0, -15]} />
      </Canvas>
    </div>
  );
}

export default App;
