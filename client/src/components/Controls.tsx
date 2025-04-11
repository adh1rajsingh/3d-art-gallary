import { useEffect, useState } from "react";
import { useGallery } from "@/lib/stores/useGallery";
import { useAudio } from "@/lib/stores/useAudio";

const Controls = () => {
  const { isControlsLocked, setControlsLocked } = useGallery();
  const { isMuted, toggleMute } = useAudio();
  const [showControls, setShowControls] = useState(true);
  
  // Hide controls after a delay
  useEffect(() => {
    if (isControlsLocked) {
      const timer = setTimeout(() => {
        setShowControls(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    } else {
      setShowControls(true);
    }
  }, [isControlsLocked]);
  
  // Show controls when pressing ESC
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowControls(true);
      }
      
      // Toggle audio with M key
      if (e.key === "m") {
        toggleMute();
      }
    };
    
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 p-4 bg-black bg-opacity-70 text-white transition-opacity duration-300 ${
        showControls || !isControlsLocked ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-2 md:mb-0">
          <span className="font-bold mr-4">Controls:</span>
          <span className="mr-4">WASD / Arrow Keys - Move</span>
          <span className="mr-4">Mouse - Look</span>
          <span className="mr-4">Click - Select Artwork</span>
          <span className="mr-4">M - Toggle Sound {isMuted ? "(Off)" : "(On)"}</span>
          <span>ESC - Mouse Control</span>
        </div>
        
        {!isControlsLocked && (
          <button 
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md"
            onClick={() => {
              const canvas = document.querySelector("canvas");
              if (canvas) {
                canvas.requestPointerLock();
              }
            }}
          >
            Click to Explore
          </button>
        )}
      </div>
    </div>
  );
};

export default Controls;
