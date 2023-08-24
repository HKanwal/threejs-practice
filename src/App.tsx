import { Canvas } from "@react-three/fiber";
import "./App.css";

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh>

        <ambientLight intensity={0.1} />
        <directionalLight color="grey" position={[0, 0, 5]} />
      </Canvas>
    </div>
  );
}

export default App;
