import { Canvas } from "@react-three/fiber";
import "./App.css";
import Box from "./components/Box";

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="grey" position={[0, 0, 5]} />

        <Box />
      </Canvas>
    </div>
  );
}

export default App;
