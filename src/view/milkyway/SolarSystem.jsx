import { Canvas } from "@react-three/fiber";
import { ScrollControls, Stars } from "@react-three/drei";
import Planets from "./Planets";

export default function SolarSystem() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 60 }}
    >
      <color attach="background" args={["#000"]} />

      {/* Stars background */}
      <Stars radius={100} depth={50} count={10} factor={4} />

      {/* Scroll = horizontal movement */}
      <ScrollControls pages={3} vertical damping={0.2}>
        <Planets/>
      </ScrollControls>
      <ambientLight intensity={0.4} />
    <pointLight position={[0, 0, 0]} intensity={2} color="#ffcc88" />
    </Canvas>
  );
}
