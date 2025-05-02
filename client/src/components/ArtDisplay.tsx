// client/src/components/ArtDisplay.tsx

import React, { useMemo, useRef, useState } from "react";
import { Text, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { artworks } from "@/data/artworks";
import { useGallery } from "@/lib/stores/useGallery";

const ArtDisplay: React.FC = () => {
  const { setActiveArtwork } = useGallery();

  const textureUrls = useMemo(
    () => artworks.map((a) => a.imageUrl && a.imageUrl.trim() !== "" ? a.imageUrl : "/transparent-1px.png"),
    []
  );
  
  const textures = useTexture(
    textureUrls,
    (texture: THREE.Texture) => {
      texture.flipY = false;
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.needsUpdate = true;
    }
  );
  
  

  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const rotatingArtRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (rotatingArtRef.current) {
      rotatingArtRef.current.rotation.y = clock.getElapsedTime() * 0.5;
      rotatingArtRef.current.position.y = 1.5 + Math.sin(clock.getElapsedTime()) * 0.1;
    }
  });

  const wallPositions = useMemo(() => {
    const positions: { position: [number, number, number]; rotation: [number, number, number] }[] = [];
    const roomWidth = 20;
    const roomLength = 20;
    const wallOffset = 0.21;

    for (let x = -7; x <= 7; x += 3.5) {
      positions.push({ position: [x, 2, -roomLength / 2 + wallOffset], rotation: [0, 0, 0] });
    }
    for (let x = -7; x <= 7; x += 3.5) {
      positions.push({ position: [x, 2, roomLength / 2 - wallOffset], rotation: [0, Math.PI, 0] });
    }
    for (let z = -7; z <= 7; z += 3.5) {
      positions.push({ position: [roomWidth / 2 - wallOffset, 2, z], rotation: [0, -Math.PI / 2, 0] });
    }
    for (let z = -7; z <= 7; z += 3.5) {
      positions.push({ position: [-roomWidth / 2 + wallOffset, 2, z], rotation: [0, Math.PI / 2, 0] });
    }

    return positions;
  }, []);

  const handleArtworkClick = (artwork: (typeof artworks)[number]) => {
    setActiveArtwork(artwork);
  };

  return (
    <group>
      {artworks.slice(0, wallPositions.length).map((artwork, index) => {
        const { position, rotation } = wallPositions[index];
        const isHovered = hoveredId === artwork.id;
        const texture = textures[index];

        const imgWidth = texture.image.width;
        const imgHeight = texture.image.height;
        const scale = (artwork as any).scale ?? 1; // <- Optional scale multiplier

        const artHeight = 1.3 * scale;
        const artWidth = (imgWidth / imgHeight) * artHeight;
        const framePadding = 0.1 * scale;
        const frameWidth = artWidth + 2 * framePadding;
        const frameHeight = artHeight + 2 * framePadding;

        return (
          <group key={artwork.id} position={position} rotation={rotation}>
            {/* Frame */}
            <mesh
              //castShadow
              receiveShadow
              onPointerOver={() => setHoveredId(artwork.id)}
              onPointerOut={() => setHoveredId(null)}
              onClick={() => handleArtworkClick(artwork)}
            >
              <planeGeometry args={[frameWidth, frameHeight]} />
              <meshStandardMaterial color={isHovered ? "#444444" : "#000000"} />
            </mesh>

            {/* Picture */}
            <mesh position={[0, 0, 0.01]}>
              <planeGeometry args={[artWidth, artHeight]} />
              <meshStandardMaterial map={texture} toneMapped={false} />
            </mesh>

            {/* Title */}
            <Text
              position={[0, -(frameHeight / 2 + 0.2), 0.05]}
              fontSize={0.1}
              color="#333"
              anchorX="center"
              anchorY="middle"
              maxWidth={frameWidth}
            >
              {artwork.title}
            </Text>

            {/* Hover overlay */}
            {isHovered && (
              <mesh position={[0, 0, 0.1]}>
                <planeGeometry args={[frameWidth, frameHeight]} />
                <meshBasicMaterial color="#fff" transparent opacity={0.1} />
              </mesh>
            )}
          </group>
        );
      })}

      {/* Central rotating 3D art */}
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

     
    </group>
  );
};

export default ArtDisplay;