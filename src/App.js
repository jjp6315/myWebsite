import logo from "./logo.svg";
import "./App.css";
import Box from "./Components/Box";
import Circle from "./Components/Circle";
import styled from "styled-components";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <Wrapper>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Box />
      </Canvas>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Circle />
      </Canvas>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  position: relative;
  background-color: #282c34;
`;
