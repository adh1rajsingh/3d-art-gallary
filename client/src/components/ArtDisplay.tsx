import React from "react";
import { Text, useTexture } from "@react-three/drei";
import { useState, useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { artworks } from "@/data/artworks";
import { useGallery } from "@/lib/stores/useGallery";
import { useAudio } from "@/lib/stores/useAudio";

const ArtDisplay = () => {
  const { setActiveArtwork } = useGallery();
  const { playHit } = useAudio();
  
  // For interactive highlighting
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  
  // Create an empty texture loader for art frames
  const emptyTexture = useMemo(() => {
    const texture = new THREE.Texture();
    texture.needsUpdate = true;
    return texture;
  }, []);
  
  // Floating animation for the central 3D piece
  const rotatingArtRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (rotatingArtRef.current) {
      rotatingArtRef.current.rotation.y = clock.getElapsedTime() * 0.5;
      rotatingArtRef.current.position.y = 1.5 + Math.sin(clock.getElapsedTime()) * 0.1;
    }
  });
  
  // Calculate positions for artwork around the room
  const wallPositions = useMemo(() => {
    const positions = [];
    const roomWidth = 20;
    const roomLength = 20;
    const wallOffset = 0.11; // Slight offset from wall
    
    // North wall
    for (let x = -7; x <= 7; x += 3.5) {
      positions.push({
        position: [x, 2, -roomLength / 2 + wallOffset],
        rotation: [0, 0, 0],
        wall: "north"
      });
    }
    
    // South wall
    for (let x = -7; x <= 7; x += 3.5) {
      positions.push({
        position: [x, 2, roomLength / 2 - wallOffset],
        rotation: [0, Math.PI, 0],
        wall: "south"
      });
    }
    
    // East wall
    for (let z = -7; z <= 7; z += 3.5) {
      positions.push({
        position: [roomWidth / 2 - wallOffset, 2, z],
        rotation: [0, -Math.PI / 2, 0],
        wall: "east"
      });
    }
    
    // West wall
    for (let z = -7; z <= 7; z += 3.5) {
      positions.push({
        position: [-roomWidth / 2 + wallOffset, 2, z],
        rotation: [0, Math.PI / 2, 0],
        wall: "west"
      });
    }
    
    return positions;
  }, []);

  // Handle artwork interaction
  const handleArtworkClick = (artwork: any) => {
    setActiveArtwork(artwork);
    playHit();
  };

  return (
    <group>
      {/* Map artworks to wall positions */}
      {artworks.slice(0, wallPositions.length).map((artwork, index) => {
        const pos = wallPositions[index];
        const isHovered = hoveredId === artwork.id;
        
        return (
          <group
            key={artwork.id}
            position={pos.position}
            rotation={pos.rotation}
          >
            {/* Artwork frame */}
            <mesh
              castShadow
              receiveShadow
              onPointerOver={() => setHoveredId(artwork.id)}
              onPointerOut={() => setHoveredId(null)}
              onClick={() => handleArtworkClick(artwork)}
            >
              <planeGeometry args={[2, 1.5]} />
              <meshStandardMaterial 
                color={isHovered ? "#eeeeee" : "#dddddd"} 
                map={emptyTexture}
              />
            </mesh>
            
            {/* Artwork content (represented as colored plane) */}
            <mesh position={[0, 0, 0.01]}>
              <planeGeometry args={[1.8, 1.3]} />
              <meshStandardMaterial color={artwork.color} />
            </mesh>
            
            {/* Artwork title */}
            <Text
              position={[0, -0.9, 0.05]}
              fontSize={0.1}
              color="#333333"
              anchorX="center"
              anchorY="middle"
              maxWidth={1.8}
            >
              {artwork.title}
            </Text>
            
            {/* Interactive hint */}
            {isHovered && (
              <mesh position={[0, 0, 0.1]}>
                <planeGeometry args={[2, 1.5]} />
                <meshBasicMaterial 
                  color="#ffffff" 
                  transparent 
                  opacity={0.1} 
                />
              </mesh>
            )}
          </group>
        );
      })}
      
      {/* Central 3D art piece (represented as abstract shape) */}
      <mesh 
        ref={rotatingArtRef}
        position={[0, 1.5, 0]} 
        castShadow
        onClick={() => {
          handleArtworkClick(artworks[artworks.length - 1]);
        }}
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
      
      {/* Central piece title */}
      <Text
        position={[0, 0.8, 0]}
        fontSize={0.15}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {artworks[artworks.length - 1].title}
      </Text>
    </group>
  );
};

export default ArtDisplay;
