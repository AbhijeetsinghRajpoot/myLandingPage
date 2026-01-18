import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useScroll, useTexture } from "@react-three/drei";
import * as THREE from "three";
import Planet from "./Planet";

const projects = [
  { image: "../../public/M1m.PNG", radius: 2, size: 1.2 },
  { image: "../../public/M1mLogin.PNG", radius: 4, size: 1.5 },
  { image: "../../public/M1mSignup.PNG", radius: 6, size: 1.1 },
  { image: "../../public/galasBlog.png", radius: 8, size: 1.2 },
  { image: "../../public/galasBlog2.png", radius: 10, size: 1.5 }
];

export default function Planets() {
  const scroll = useScroll();
  const group = useRef();

  useFrame(() => {
    // rotate whole system slowly
    group.current.rotation.y += 0.001;
  });

  return (
    <group ref={group}>
      {projects.map((p, i) => (
        <Planet
          key={i}
          image={p.image}
          orbitRadius={p.radius}
          size={p.size}
          index={i}
          scroll={scroll}
        />
      ))}
    </group>
  );
}
