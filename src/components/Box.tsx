import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

interface BoxProps {
  position?: [number, number, number];
  color?: string;
  onHover?: () => void;
  onHoverEnd?: () => void;
}

function Box(props: BoxProps) {
  const meshRef = useRef<Mesh>(null);
  const [hover, setHover] = useState(false);

  useFrame((state, delta) => {
    meshRef.current?.rotateX(hover ? delta * 2 : delta / 2);
    meshRef.current?.rotateZ(hover ? delta * 2 : delta / 2);
  });

  const handleHover = () => {
    setHover(true);
    props.onHover?.();
  };

  const handleHoverEnd = () => {
    setHover(false);
    props.onHoverEnd?.();
  };

  return (
    <mesh
      ref={meshRef}
      position={props.position}
      onPointerOver={handleHover}
      onPointerOut={handleHoverEnd}
      scale={hover ? 1.2 : 1}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
}

export default Box;
