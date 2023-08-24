import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <div>
      <Canvas>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial />

        <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
      </Canvas>
    </div>
  );
}

export default App;
