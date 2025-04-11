import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import { KeyboardControls } from "@react-three/drei";
import { useAudio } from "./lib/stores/useAudio";
import "@fontsource/inter";
import ArtGallery from "./components/ArtGallery";
import GalleryUI from "./components/GalleryUI";
import { Loader } from "@react-three/drei";

// Define control keys for movement
const controls = [
  { name: "forward", keys: ["KeyW", "ArrowUp"] },
  { name: "backward", keys: ["KeyS", "ArrowDown"] },
  { name: "leftward", keys: ["KeyA", "ArrowLeft"] },
  { name: "rightward", keys: ["KeyD", "ArrowRight"] },
  { name: "jump", keys: ["Space"] },
];

// Main App component
function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const { setBackgroundMusic, toggleMute } = useAudio();

  // Initialize audio elements and show canvas once loaded
  useEffect(() => {
    // Background music setup
    const bgMusic = new Audio("/sounds/background.mp3");
    bgMusic.volume = 0.3;
    bgMusic.loop = true;
    setBackgroundMusic(bgMusic);

    // Hit sound for interactions
    const hitSfx = new Audio("/sounds/hit.mp3");
    hitSfx.volume = 0.5;
    useAudio.getState().setHitSound(hitSfx);

    // Success sound for special interactions
    const successSfx = new Audio("/sounds/success.mp3");
    successSfx.volume = 0.5;
    useAudio.getState().setSuccessSound(successSfx);

    // Show canvas after setup
    setShowCanvas(true);
    
    // Play background music (muted by default in store)
    setTimeout(() => {
      toggleMute(); // Unmute to start playing
      bgMusic.play().catch(err => console.log("Audio autoplay prevented:", err));
    }, 1000);
    
    return () => {
      bgMusic.pause();
      bgMusic.currentTime = 0;
    };
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden">
      {showCanvas && (
        <>
          <KeyboardControls map={controls}>
            <Canvas
              shadows
              camera={{
                position: [0, 1.7, 5],
                fov: 75,
                near: 0.1,
                far: 100
              }}
              gl={{
                antialias: true,
                powerPreference: "default"
              }}
            >
              <color attach="background" args={["#111111"]} />
              <fog attach="fog" args={["#111111", 10, 30]} />
              
              <Suspense fallback={null}>
                <ArtGallery />
              </Suspense>
            </Canvas>
          </KeyboardControls>
          
          <GalleryUI />
          <Loader />
        </>
      )}
    </div>
  );
}

export default App;
