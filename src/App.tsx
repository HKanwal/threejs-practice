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
  const [turn, setTurn] = useState<"player" | "computer">("computer");
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const seq = generateSequence(5);
    let i = 0;

    function colorNextBox() {
      if (i === seq.length) {
        setTurn("player");
        return;
      }

      const newBoxColors = boxColors.map((color, ci) => {
        return ci === seq[i] ? "green" : "white";
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
    <div
      id="canvas-container"
      style={{ cursor: hover && turn === "player" ? "pointer" : "auto" }}
    >
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, 0, 5]} />

        <Box
          position={[-2, 1, 0]}
          color={boxColors[0]}
          onHover={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          turn={turn}
        />
        <Box
          position={[0, 1, 0]}
          color={boxColors[1]}
          onHover={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          turn={turn}
        />
        <Box
          position={[2, 1, 0]}
          color={boxColors[2]}
          onHover={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          turn={turn}
        />
        <Box
          position={[-2, -1, 0]}
          color={boxColors[3]}
          onHover={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          turn={turn}
        />
        <Box
          position={[0, -1, 0]}
          color={boxColors[4]}
          onHover={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          turn={turn}
        />
        <Box
          position={[2, -1, 0]}
          color={boxColors[5]}
          onHover={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          turn={turn}
        />
      </Canvas>
    </div>
  );
}

export default App;
