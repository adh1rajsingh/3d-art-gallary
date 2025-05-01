import { useEffect, useRef } from "react";
import { useGallery } from "@/lib/stores/useGallery";
import Room from "./Room";
import { PointerLockControls } from "@react-three/drei";
import Navigation from "./Navigation";
import ArtDisplay from "./ArtDisplay";

const ArtGallery = () => {
  const controlsRef = useRef<any>(null);
  const { setControlsLocked, isControlsLocked } = useGallery();
  
  // Set up pointer lock event handlers
  useEffect(() => {
    if (controlsRef.current) {
      const onLock = () => {
        setControlsLocked(true);
      };
      
      const onUnlock = () => {
        setControlsLocked(false);
      };

      controlsRef.current.addEventListener('lock', onLock);
      controlsRef.current.addEventListener('unlock', onUnlock);
      
      return () => {
        if (controlsRef.current) {
          controlsRef.current.removeEventListener('lock', onLock);
          controlsRef.current.removeEventListener('unlock', onUnlock);
        }
      };
    }
  }, [controlsRef.current]);

  return (
    <>
      <PointerLockControls ref={controlsRef} />

      {/* Ambient light for base illumination */}
      <ambientLight intensity={0.5} />
      
      {/* Main directional light with shadows */}
      <directionalLight 
        position={[5, 8, 5]} 
        intensity={5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      
      {/* Spotlights for artwork illumination */}
      <spotLight 
        position={[0, 5, 0]} 
        angle={0.5} 
        penumbra={0.5} 
        intensity={8} 
        castShadow 
        color="#ffffff"
      />
      
      {/* Gallery room structure */}
      <Room />
      
      {/* Art displays on walls <ArtDisplay /> */}
      <ArtDisplay />
      
      {/* Navigation and collision detection */}
      <Navigation />
    </>
  );
};

export default ArtGallery;
