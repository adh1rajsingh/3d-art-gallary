import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import { KeyboardControls } from "@react-three/drei";
import "@fontsource/inter";
import ArtGallery from "./components/ArtGallery";
import GalleryUI from "./components/GalleryUI";
import { Loader } from "@react-three/drei";

// Define control keys for movement
const controls = [
  { name: "forward", keys: ["KeyW", "ArrowUp"] },
  { name: "backward", keys: ["KeyS", "ArrowDown"] },
  { name: "leftward", keys: ["KeyD", "ArrowLeft"] },
  { name: "rightward", keys: ["KeyA", "ArrowRight"] },
  { name: "jump", keys: ["Space"] },
];

// Main App component
function App() {
  const [showCanvas, setShowCanvas] = useState(false);

  // Initialize audio elements and show canvas once loaded
  useEffect(() => {

    // Show canvas after setup
    setShowCanvas(true);
    
    // Play background music (muted by default in store)
    setTimeout(() => {
      
    }, 1000);
    
    return () => {
      
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
