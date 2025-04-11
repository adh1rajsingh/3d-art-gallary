import { create } from "zustand";
import { Artwork } from "@/data/artworks";

interface Collider {
  position: [number, number, number];
  size: [number, number, number];
}

interface GalleryState {
  // Active artwork being viewed in detail
  activeArtwork: Artwork | null;
  setActiveArtwork: (artwork: Artwork | null) => void;
  
  // Controls state
  isControlsLocked: boolean;
  setControlsLocked: (locked: boolean) => void;
  
  // Collision detection
  colliders: Collider[];
  setColliders: (colliders: Collider[]) => void;
}

export const useGallery = create<GalleryState>((set) => ({
  activeArtwork: null,
  setActiveArtwork: (artwork) => set({ activeArtwork: artwork }),
  
  isControlsLocked: false,
  setControlsLocked: (locked) => set({ isControlsLocked: locked }),
  
  colliders: [],
  setColliders: (colliders) => set({ colliders }),
}));
