"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Trail } from "@react-three/drei";
import * as THREE from "three";

function FloatingOrb({ position, color, speed }: { position: [number, number, number], color: string, speed: number }) {
    const mesh = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        mesh.current.position.y += Math.sin(t * speed) * 0.002;
        mesh.current.rotation.x = Math.cos(t * 0.3) * 0.2;
        mesh.current.rotation.y = Math.sin(t * 0.2) * 0.2;
    });

    return (
        <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={mesh} position={position}>
                <sphereGeometry args={[0.4, 32, 32]} />
                <meshStandardMaterial
                    color={color}
                    emissive={color}
                    emissiveIntensity={2}
                    roughness={0.1}
                    metalness={0.8}
                />
                <pointLight color={color} intensity={2} distance={3} />
            </mesh>
        </Float>
    );
}

function GridPlane() {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
            <planeGeometry args={[20, 20, 20, 20]} />
            <meshBasicMaterial wireframe color="#22c55e" transparent opacity={0.1} />
        </mesh>
    );
}

export default function Scene3D() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />

                <FloatingOrb position={[-2, 1, 0]} color="#0ea5e9" speed={1.5} />
                <FloatingOrb position={[2, -1, -1]} color="#22c55e" speed={2} />
                <FloatingOrb position={[0, 2, -2]} color="#06b6d4" speed={1} />
                <GridPlane />
                <fog attach="fog" args={['#020617', 5, 15]} />
            </Canvas>
        </div>
    );
}
