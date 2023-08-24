import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { BufferGeometry, Material, Mesh, NormalBufferAttributes } from "three";

type MeshElement = Mesh<
  BufferGeometry<NormalBufferAttributes>,
  Material | Material[]
>;

function Box() {
  const meshRef = useRef<MeshElement>(null);

  useFrame((state, delta) => {
    meshRef.current?.rotateX(delta);
    meshRef.current?.rotateZ(delta);
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial />
    </mesh>
  );
}

export default Box;
