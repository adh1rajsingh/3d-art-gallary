import { useEffect } from "react";
import { useGallery } from "@/lib/stores/useGallery";
import Controls from "./Controls";
import { Panel } from "./ui/panel";
import { X } from "lucide-react";

const GalleryUI = () => {
  const { activeArtwork, setActiveArtwork } = useGallery();
  
  // Play success sound when artwork is selected
  
  return (
    <>
      {/* Navigation controls */}
      <Controls />
      
     
      
      {/* Artwork detail panel */}
      {activeArtwork && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 p-4 z-10">
          <Panel className="w-full max-w-md">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-bold">{activeArtwork.title}</h2>
              <button 
                onClick={() => setActiveArtwork(null)}
                className="p-1 rounded-full hover:bg-gray-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div 
              className="w-full h-40 mb-4 rounded" 
              style={{ background: activeArtwork.color }} 
            />
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500">Artist</p>
                <p>{activeArtwork.artist}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Year</p>
                <p>{activeArtwork.year}</p>
              </div>
            </div>
            
            <p className="text-gray-700">{activeArtwork.description}</p>
            
            <div className="mt-4 text-sm text-gray-500">
              <p>Medium: {activeArtwork.medium}</p>
              <p>Dimensions: {activeArtwork.dimensions}</p>
            </div>
          </Panel>
        </div>
      )}
    </>
  );
};

export default GalleryUI;
