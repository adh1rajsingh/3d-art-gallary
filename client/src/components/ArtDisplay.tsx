// client/src/components/ArtDisplay.tsx

import React, { useMemo, useRef, useState } from "react";
import { Text, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { artworks } from "@/data/artworks";
import { useGallery } from "@/lib/stores/useGallery";

/**
 * A single gallery room full of 2‑D artworks plus one central 3‑D piece.
 * Each wall panel consists of a frame (plain grey) and an inner plane that
 * shows the actual picture loaded from its `imageUrl`.
 */
const ArtDisplay: React.FC = () => {
  const { setActiveArtwork } = useGallery();

  /* ─────────────────────────── texture loading ─────────────────────────── */
  // Build an array of every image URL (or a 1‑px transparent placeholder)
  const textureUrls = useMemo(
    () =>
      artworks.map((a) =>
        a.imageUrl && a.imageUrl.trim() !== ""
          ? a.imageUrl
          : "/transparent-1px.png" // put this tiny png in /public
      ),
    []
  );

  // Drei loads them all in one go and returns them in the same order
  const textures = useTexture(textureUrls);

  // Ensure correct colour‑space + orientation once (memoised)
  useMemo(() => {
    textures.forEach((t) => {
      t.colorSpace = THREE.SRGBColorSpace; // R152+ replaces Encoding
      t.flipY = false;
    });
  }, [textures]);

  /* ─────────────────────────── interaction state ────────────────────────── */
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  /* ───────────────────────── floating central art ───────────────────────── */
  const rotatingArtRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (rotatingArtRef.current) {
      rotatingArtRef.current.rotation.y = clock.getElapsedTime() * 0.5;
      rotatingArtRef.current.position.y = 1.5 + Math.sin(clock.getElapsedTime()) * 0.1;
    }
  });

  /* ───────────────────── calculate wall mounting positions ───────────── */
  const wallPositions = useMemo(() => {
    const positions: { position: [number, number, number]; rotation: [number, number, number] }[] = [];
    const roomWidth = 20;
    const roomLength = 20;
    const wallOffset = 0.21;


    // north
    for (let x = -7; x <= 7; x += 3.5) {
      positions.push({ position: [x, 2, -roomLength / 2 + wallOffset], rotation: [0, 0, 0] });
    }
    // south
    for (let x = -7; x <= 7; x += 3.5) {
      positions.push({ position: [x, 2, roomLength / 2 - wallOffset], rotation: [0, Math.PI, 0] });
    }
    // east
    for (let z = -7; z <= 7; z += 3.5) {
      positions.push({ position: [roomWidth / 2 - wallOffset, 2, z], rotation: [0, -Math.PI / 2, 0] });
    }
    // west
    for (let z = -7; z <= 7; z += 3.5) {
      positions.push({ position: [-roomWidth / 2 + wallOffset, 2, z], rotation: [0, Math.PI / 2, 0] });
    }

    return positions;
  }, []);

  /* ─────────────────────────── helpers ──────────────────────────────────── */
  const handleArtworkClick = (artwork: (typeof artworks)[number]) => {
    setActiveArtwork(artwork);
  };

  /* ─────────────────────────── render ───────────────────────────────────── */
  return (
    <group>
      {/* 2‑D artworks on the walls */}
      {artworks.slice(0, wallPositions.length).map((artwork, index) => {
        const { position, rotation } = wallPositions[index];
        const isHovered = hoveredId === artwork.id;

        return (
          <group key={artwork.id} position={position} rotation={rotation}>
            {/* Frame */}
            <mesh
              castShadow
              receiveShadow
              onPointerOver={() => setHoveredId(artwork.id)}
              onPointerOut={() => setHoveredId(null)}
              onClick={() => handleArtworkClick(artwork)}
            >
              <planeGeometry args={[2, 1.5]} />
              <meshStandardMaterial color={isHovered ? "#444444" : "#000000"} />
            </mesh>

            {/* Picture */}
            <mesh position={[0, 0, 0.01]}> {/* slight forward offset */}
              <planeGeometry args={[1.8, 1.3]} />
              <meshStandardMaterial map={textures[index]} toneMapped={false} />
            </mesh>

            {/* Title */}
            <Text
              position={[0, -0.9, 0.05]}
              fontSize={0.1}
              color="#333"
              anchorX="center"
              anchorY="middle"
              maxWidth={1.8}
            >
              {artwork.title}
            </Text>

            {/* Hover hint overlay */}
            {isHovered && (
              <mesh position={[0, 0, 0.1]}> {/* sits in front */}
                <planeGeometry args={[2, 1.5]} />
                <meshBasicMaterial color="#fff" transparent opacity={0.1} />
              </mesh>
            )}
          </group>
        );
      })}

      {/* Central 3‑D piece */}
      <mesh
        ref={rotatingArtRef}
        position={[0, 1.5, 0]}
        castShadow
        onClick={() => handleArtworkClick(artworks[artworks.length - 1])}
        onPointerOver={() => setHoveredId("central-piece")}
        onPointerOut={() => setHoveredId(null)}
      >
        <torusKnotGeometry args={[0.5, 0.2, 128, 32]} />
        <meshStandardMaterial
          color={hoveredId === "central-piece" ? "#ff6b6b" : "#ff4757"}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* Central title */}
      <Text position={[0, 0.8, 0]} fontSize={0.15} color="#fff" anchorX="center" anchorY="middle">
        {artworks[artworks.length - 1].title}
      </Text>
    </group>
  );
};

export default ArtDisplay;
