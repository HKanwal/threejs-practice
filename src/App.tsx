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
  const [sequence, setSequence] = useState<null | number[]>(null);
  const [playerIndex, setPlayerIndex] = useState(0);

  useEffect(() => {
    const seq = generateSequence(5);
    let i = 0;

    function colorNextBox() {
      if (i === seq.length) {
        setTurn("player");
        setSequence(seq);
        setPlayerIndex(0);
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

  const handleBoxClick = (i: number) => {
    if (
      turn !== "player" ||
      boxColors.includes("green") ||
      boxColors.includes("red")
    ) {
      return;
    }

    const correct = i === sequence?.[playerIndex];

    const newBoxColors = boxColors.map((color, ci) => {
      return ci === i ? (correct ? "green" : "red") : "white";
    }) as BoxColors;
    setBoxColors(newBoxColors);

    setPlayerIndex(playerIndex + 1);

    setTimeout(() => {
      if (!correct) {
        setTurn("computer");
        alert("Game Over! Refresh to play again.");
      } else {
        setBoxColors(["white", "white", "white", "white", "white", "white"]);
      }
    }, 700);
  };

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
          onClick={() => handleBoxClick(0)}
        />
        <Box
          position={[0, 1, 0]}
          color={boxColors[1]}
          onHover={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          turn={turn}
          onClick={() => handleBoxClick(1)}
        />
        <Box
          position={[2, 1, 0]}
          color={boxColors[2]}
          onHover={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          turn={turn}
          onClick={() => handleBoxClick(2)}
        />
        <Box
          position={[-2, -1, 0]}
          color={boxColors[3]}
          onHover={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          turn={turn}
          onClick={() => handleBoxClick(3)}
        />
        <Box
          position={[0, -1, 0]}
          color={boxColors[4]}
          onHover={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          turn={turn}
          onClick={() => handleBoxClick(4)}
        />
        <Box
          position={[2, -1, 0]}
          color={boxColors[5]}
          onHover={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
          turn={turn}
          onClick={() => handleBoxClick(5)}
        />
      </Canvas>
    </div>
  );
}

export default App;
