import { Canvas } from "@react-three/fiber";
import "./App.css";
import Box from "./components/Box";
import { useEffect, useState } from "react";
import { MathUtils } from "three/src/math/MathUtils.js";

type BoxColors = [string, string, string, string, string, string];

function generateSequence(length: number) {
  const randBox = () => MathUtils.randInt(0, 5);
  const sequence: number[] = [];

  for (let i = 0; i < length; i++) {
    sequence.push(randBox());
  }

  console.log(`Sequence: ${sequence}`);

  return sequence;
}

function App() {
  const [boxColors, setBoxColors] = useState<BoxColors>([
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
  ]);

  useEffect(() => {
    const sequence = generateSequence(5);
    let i = 0;

    function colorNextBox() {
      if (i === sequence.length) {
        return;
      }

      const newBoxColors = boxColors.map((color, ci) => {
        return ci === sequence[i] ? "green" : "white";
      }) as BoxColors;

      setBoxColors(newBoxColors);

      i++;
      setTimeout(() => {
        setBoxColors(["white", "white", "white", "white", "white", "white"]);
        setTimeout(colorNextBox, 400);
      }, 700);
    }

    setTimeout(colorNextBox, 1000);
  }, []);

  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, 0, 5]} />

        <Box position={[-2, 1, 0]} color={boxColors[0]} />
        <Box position={[0, 1, 0]} color={boxColors[1]} />
        <Box position={[2, 1, 0]} color={boxColors[2]} />
        <Box position={[-2, -1, 0]} color={boxColors[3]} />
        <Box position={[0, -1, 0]} color={boxColors[4]} />
        <Box position={[2, -1, 0]} color={boxColors[5]} />
      </Canvas>
    </div>
  );
}

export default App;
