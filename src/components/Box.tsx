import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface BoxProps {
  position?: [number, number, number];
}

function Box(props: BoxProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    meshRef.current?.rotateX(delta);
    meshRef.current?.rotateZ(delta);
  });

  return (
    <mesh ref={meshRef} position={props.position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"white"} />
    </mesh>
  );
}

export default Box;
