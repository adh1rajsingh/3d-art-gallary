// client/src/components/GalleryUI.tsx

import { useGallery } from "@/lib/stores/useGallery";
import Controls from "./Controls";
import { Panel } from "./ui/panel";
import { X } from "lucide-react";

/**
 * Heads-up display that sits on top of the 3-D scene.
 *   • WASD / pointer-lock instructions via <Controls />
 *   • Modal with artwork details when a painting is clicked.
 */
const GalleryUI = () => {
  const { activeArtwork, setActiveArtwork } = useGallery();

  return (
    <>
      {/* Movement / navigation helper */}
      <Controls />

      {/* ──────────────── Artwork detail modal ──────────────── */}
      {activeArtwork && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/30 p-4">
          <Panel className="w-full max-w-md">
            {/* Header */}
            <div className="mb-4 flex items-start justify-between">
              <h2 className="text-xl font-bold leading-tight">
                {activeArtwork.title}
              </h2>
              <button
                onClick={() => setActiveArtwork(null)}
                className="rounded-full p-1 hover:bg-gray-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Preview image  (object-contain so the whole artwork is visible) */}
            {activeArtwork.imageUrl ? (
              <img
                src={activeArtwork.imageUrl}
                alt={activeArtwork.title}
                className="mb-4 max-h-60 w-full rounded object-contain"
              />
            ) : (
              <div
                className="mb-4 h-40 w-full rounded"
                style={{ background: activeArtwork.color }}
              />
            )}

            {/* Meta grid */}
            <div className="mb-4 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Artist</p>
                <p>{activeArtwork.artist}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Year</p>
                <p>{activeArtwork.year}</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 whitespace-pre-line">
              {activeArtwork.description}
            </p>

            {/* Medium & dimensions */}
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
