import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Planet({ image, orbitRadius, size, index, scroll }) {
  const mesh = useRef();
  const texture = useTexture(image);

  useFrame(() => {
    const t = scroll.offset * Math.PI * 2;

    // Orbit math
    const angle = t + index * 1.5;

    mesh.current.position.x = Math.cos(angle) * orbitRadius;
    mesh.current.position.z = Math.sin(angle) * orbitRadius;
    mesh.current.position.y = Math.sin(angle) * 0.5;

    // Planet spin
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <sphereGeometry args={[size, 64, 64]} />
      <meshStandardMaterial
        map={texture}
        roughness={0.4}
        metalness={0.1}
      />
    </mesh>
  );
}
