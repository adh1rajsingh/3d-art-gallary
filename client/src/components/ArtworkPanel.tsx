import React, { Suspense, useMemo } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { Artwork } from "@/data/artworks";

interface ArtworkPanelProps {
  artwork: Artwork;
  hovered: boolean;
  onHover: (state: boolean) => void;
  onSelect: () => void;
}

const FRAME_W = 2;      // outer width of the picture frame (m)
const FRAME_H = 1.5;    // outer height of the picture frame (m)
const FRAME_D = 0.05;   // thickness of the wooden frame (m)
const ART_W   = 1.8;    // actual artwork width (m)
const ART_H   = 1.3;    // actual artwork height (m)

/**
 * A single framed painting that can be hung on any wall.
 * Handles image‑loading, hover highlight, and click‑through selection.
 */
export default function ArtworkPanel({
  artwork,
  hovered,
  onHover,
  onSelect,
}: ArtworkPanelProps) {
  /* load the image once; Drei caches identical URLs */
  const texture = useTexture(artwork.imageUrl);

  // Configure colour‑space & quality only when texture changes
  useMemo(() => {
    if (texture) {
      texture.colorSpace  = THREE.SRGBColorSpace;  // proper gamma
      texture.anisotropy  = 8;                     // sharper at oblique angles
      texture.needsUpdate = true;
    }
  }, [texture]);

  return (
    <group
      onPointerOver={() => onHover(true)}
      onPointerOut={() => onHover(false)}
      onClick={onSelect}
      // lift slightly so the frame sits flush with the wall surface
      position={[0, 0, FRAME_D / 2]}
    >
      {/* wooden frame */}
      <mesh castShadow receiveShadow position={[0, 0, -FRAME_D / 2]}>
        <boxGeometry args={[FRAME_W, FRAME_H, FRAME_D]} />
        <meshStandardMaterial
          color={hovered ? "#f0f0f0" : "#8d7551"}
          roughness={0.6}
          metalness={0.2}
        />
      </mesh>

      {/* painting surface (loaded asynchronously) */}
      <Suspense fallback={null}>
        <mesh position={[0, 0, 0.01]}>
          <planeGeometry args={[ART_W, ART_H]} />
          {artwork.imageUrl ? (
            <meshStandardMaterial map={texture} toneMapped={false} />
          ) : (
            <meshStandardMaterial color={artwork.color} /> /* fallback */
          )}
        </mesh>
      </Suspense>
    </group>
  );
}
