// src/components/ArtDisplay.tsx

import React, { useState, useMemo, useRef, Suspense } from "react";
import { Text, useTexture } from "@react-three/drei"; // useTexture is needed
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
// Remove imports related to artwork data and audio store if no longer needed elsewhere
// import { artworks, Artwork } from "@/data/artworks"; // No longer needed for wall art
// import { useAudio } from "@/lib/stores/useAudio"; // No longer needed
import { useGallery } from "@/lib/stores/useGallery"; // Keep for central piece interaction? (Optional)

// --- Helper Component for the Artwork Plane ---
interface ArtworkPlaneProps {
  imageUrl: string;
  width: number;
  height: number;
}

function ArtworkPlane({ imageUrl, width, height }: ArtworkPlaneProps) {
  const texture = useTexture(imageUrl);
  // texture.encoding = THREE.sRGBEncoding; // Optional: Adjust color space if needed
  return (
    <mesh position={[0, 0, 0.01]}>
      <planeGeometry args={[width, height]} />
      <meshStandardMaterial map={texture} side={THREE.DoubleSide} />
    </mesh>
  );
}
// --- End Helper Component ---

// --- Define Image URLs directly here ---
// IMPORTANT: Replace these with your ACTUAL Cloudinary/CDN URLs!
// Make sure you have at least as many URLs as wall positions (20 in this case).
const wallImageUrls = [
  "https://res.cloudinary.com/dskj7wqn8/image/upload/v1744121731/ChatGPT_Image_Apr_8_2025_10_15_15_AM_aednrg.png", // North 1
  "https://res.cloudinary.com/dskj7wqn8/image/upload/v1744121731/ChatGPT_Image_Apr_8_2025_10_15_15_AM_aednrg.png", // North 2
  "https://res.cloudinary.com/dskj7wqn8/image/upload/v1744121731/ChatGPT_Image_Apr_8_2025_10_15_15_AM_aednrg.png", // North 3
  "https://res.cloudinary.com/dskj7wqn8/image/upload/v1744121731/ChatGPT_Image_Apr_8_2025_10_15_15_AM_aednrg.png", // North 4
  "https://res.cloudinary.com/dskj7wqn8/image/upload/v1744121731/ChatGPT_Image_Apr_8_2025_10_15_15_AM_aednrg.png", // North 5
  "https://res.cloudinary.com/dskj7wqn8/image/upload/v1744121731/ChatGPT_Image_Apr_8_2025_10_15_15_AM_aednrg.png", // South 1
  "https://res.cloudinary.com/dskj7wqn8/image/upload/v1744121731/ChatGPT_Image_Apr_8_2025_10_15_15_AM_aednrg.png", // South 2
  "https://res.cloudinary.com/dskj7wqn8/image/upload/v1744121731/ChatGPT_Image_Apr_8_2025_10_15_15_AM_aednrg.png", // South 3
  "https://res.cloudinary.com/dskj7wqn8/image/upload/v1744121731/ChatGPT_Image_Apr_8_2025_10_15_15_AM_aednrg.png", // South 4
  "https://res.cloudinary.com/dskj7wqn8/image/upload/v1744121731/ChatGPT_Image_Apr_8_2025_10_15_15_AM_aednrg.png", // South 5
  "https://res.cloudinary.com/dskj7wqn8/image/upload/v1744121731/ChatGPT_Image_Apr_8_2025_10_15_15_AM_aednrg.png", // East 1
  "https://res.cloudinary.com/dskj7wqn8/image/upload/v1744121731/ChatGPT_Image_Apr_8_2025_10_15_15_AM_aednrg.png", // East 2
  "https://res.cloudinary.com/dskj7wqn8/image/upload/v1744121731/ChatGPT_Image_Apr_8_2025_10_15_15_AM_aednrg.png", // East 3
  "https://res.cloudinary.com/dskj7wqn8/image/upload/v1744121731/ChatGPT_Image_Apr_8_2025_10_15_15_AM_aednrg.png", // East 4
  "https://res.cloudinary.com/dskj7wqn8/image/upload/v1744121731/ChatGPT_Image_Apr_8_2025_10_15_15_AM_aednrg.png", // East 5
  "https://res.cloudinary.com/dskj7wqn8/image/upload/v1744121731/ChatGPT_Image_Apr_8_2025_10_15_15_AM_aednrg.png", // West 1
  "https://res.cloudinary.com/dskj7wqn8/image/upload/v1744121731/ChatGPT_Image_Apr_8_2025_10_15_15_AM_aednrg.png", // West 2
  "https://res.cloudinary.com/dskj7wqn8/image/upload/v1744121731/ChatGPT_Image_Apr_8_2025_10_15_15_AM_aednrg.png", // West 3
  "https://res.cloudinary.com/dskj7wqn8/image/upload/v1744121731/ChatGPT_Image_Apr_8_2025_10_15_15_AM_aednrg.png", // West 4
  "https://res.cloudinary.com/dskj7wqn8/image/upload/v1744121731/ChatGPT_Image_Apr_8_2025_10_15_15_AM_aednrg.png", // West 5
  // Add more if you have more positions...
];
// --- End Image URLs ---


const ArtDisplay = () => {
  // Remove setActiveArtwork if not used for central piece either
  // const { setActiveArtwork } = useGallery();
  // Remove playHit
  // const { playHit } = useAudio();
  const [hoveredId, setHoveredId] = useState<string | null>(null); // Keep for frame hover

  const rotatingArtRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => { /* ... rotation code ... */ });

  const wallPositions = useMemo(() => {
    const positions = [];
    const roomWidth = 20; const roomLength = 20; const wallThickness = 0.2;
    const artDepthOffset = 0.01; const wallFaceOffset = wallThickness / 2 + artDepthOffset;
    const northZ = -roomLength / 2 + wallFaceOffset;
    for (let x = -7; x <= 7; x += 3.5) positions.push({ position: [x, 2, northZ], rotation: [0, 0, 0], wall: "north" });
    const southZ = roomLength / 2 - wallFaceOffset;
    for (let x = -7; x <= 7; x += 3.5) positions.push({ position: [x, 2, southZ], rotation: [0, Math.PI, 0], wall: "south" });
    const eastX = roomWidth / 2 - wallFaceOffset;
    for (let z = -7; z <= 7; z += 3.5) positions.push({ position: [eastX, 2, z], rotation: [0, -Math.PI / 2, 0], wall: "east" });
    const westX = -roomWidth / 2 + wallFaceOffset;
    for (let z = -7; z <= 7; z += 3.5) positions.push({ position: [westX, 2, z], rotation: [0, Math.PI / 2, 0], wall: "west" });
    return positions;
  }, []);

  // Remove handleArtworkClick if not needed for central piece
  // const handleArtworkClick = (artwork: Artwork) => {
  //   setActiveArtwork(artwork);
  //   // playHit(); // Removed
  // };

  // Define fixed dimensions
  const artworkPlaneWidth = 1.8;
  const artworkPlaneHeight = 1.3;
  const framePlaneWidth = 2;
  const framePlaneHeight = 1.5;

  return (
    <group>
      {/* Map directly over wallPositions */}
      {wallPositions.map((posData, index) => {
        // Get the image URL from the local array using the index
        const imageUrl = wallImageUrls[index];

        // Skip if no position data or no image URL for this index
        if (!posData?.position || !imageUrl) {
           console.warn(`Skipping wall position index ${index} due to missing position or image URL.`);
           return null;
        }

        // Use index for hover state ID since we don't have artwork IDs
        const currentHoverId = `wall-art-${index}`;
        const isHovered = hoveredId === currentHoverId;

        // --- RENDER ARTWORK DISPLAY (No Title/Data Interaction) ---
        return (
          <group
            key={`wall-art-${posData.wall}-${index}`} // Unique key
            position={posData.position as [number, number, number]}
            rotation={posData.rotation as [number, number, number]}
          >
            {/* Artwork frame */}
            <mesh
              // Shadows optional
              // Interaction handlers on the frame
              onPointerOver={(e) => { e.stopPropagation(); setHoveredId(currentHoverId); }}
              onPointerOut={(e) => { e.stopPropagation(); setHoveredId(null); }}
              // Remove onClick or make it do something else if needed
              // onClick={(e) => { e.stopPropagation(); /* handleArtworkClick(artwork); */ }}
            >
              <planeGeometry args={[framePlaneWidth, framePlaneHeight]} />
              <meshStandardMaterial
                color={isHovered ? "#ffffff" : "#cccccc"}
                roughness={0.8}
                metalness={0.1}
              />
            </mesh>

            {/* Artwork content plane */}
            <Suspense fallback={<mesh><boxGeometry args={[0.2, 0.2, 0.2]} /><meshBasicMaterial color="green" wireframe /></mesh>}>
                <ArtworkPlane
                  imageUrl={imageUrl}
                  width={artworkPlaneWidth}
                  height={artworkPlaneHeight}
                />
              </Suspense>

            {/* Removed Text Title */}
          </group>
        );
        // --- END RENDER ARTWORK DISPLAY ---
      })}

      {/* Central 3D art piece */}
      <mesh
        ref={rotatingArtRef}
        position={[0, 1.5, 0]}
        castShadow
        // Remove onClick interaction if not needed
        // onClick={(e) => { ... }}
        onPointerOver={(e) => { e.stopPropagation(); setHoveredId("central-piece"); }}
        onPointerOut={(e) => { e.stopPropagation(); setHoveredId(null); }}
      >
        <torusKnotGeometry args={[0.5, 0.2, 128, 32]} />
        <meshStandardMaterial
          // Use a fixed color or keep hover effect
          color={hoveredId === "central-piece" ? "#ff6b6b" : "#ff4757"}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>

      {/* Central piece title (Optional - keep if desired) */}
      <Text
        position={[0, 0.8, 0]}
        fontSize={0.15}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
      >
        {"Central Piece"} {/* Static title or remove */}
      </Text>
    </group>
  );
};

export default ArtDisplay;
