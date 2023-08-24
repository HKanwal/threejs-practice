import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface BoxProps {
  position?: [number, number, number];
}

function Box(props: BoxProps) {
  const meshRef = useRef<Mesh>(null);
  const [hover, setHover] = useState(false);

  useFrame((state, delta) => {
    meshRef.current?.rotateX(hover ? delta * 2 : delta / 2);
    meshRef.current?.rotateZ(hover ? delta * 2 : delta / 2);
  });

  return (
    <mesh
      ref={meshRef}
      position={props.position}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
      scale={hover ? 1.2 : 1}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"white"} />
    </mesh>
  );
}

export default Box;
