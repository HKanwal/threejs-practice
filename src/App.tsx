import { Canvas } from "@react-three/fiber";
import "./App.css";
import Box from "./components/Box";

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, 0, 5]} />

        <Box position={[-3, 0, 0]} />
        <Box position={[3, 0, 0]} />
      </Canvas>
    </div>
  );
}

export default App;
