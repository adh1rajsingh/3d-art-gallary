import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { useGallery } from "@/lib/stores/useGallery";
import { useEffect } from "react";

const Room = () => {
  const woodTexture = useTexture("/textures/wood.jpg");
  const { setColliders } = useGallery();
  
  // Prepare textures
  woodTexture.wrapS = woodTexture.wrapT = THREE.RepeatWrapping;
  woodTexture.repeat.set(4, 4);
  
  // Dimensions
  const roomWidth = 20;
  const roomLength = 20;
  const roomHeight = 5;
  const wallThickness = 0.2;
  /*
  // Define wall positions and dimensions for colliders
  useEffect(() => {
    const newColliders = [
      // North wall
      {
        position: [0, roomHeight / 2, -roomLength / 2],
        size: [roomWidth, roomHeight, wallThickness],
      },
      // South wall
      {
        position: [0, roomHeight / 2, roomLength / 2],
        size: [roomWidth, roomHeight, wallThickness],
      },
      // East wall
      {
        position: [roomWidth / 2, roomHeight / 2, 0],
        size: [wallThickness, roomHeight, roomLength],
      },
      // West wall
      {
        position: [-roomWidth / 2, roomHeight / 2, 0],
        size: [wallThickness, roomHeight, roomLength],
      },
    ];
    
    setColliders(newColliders);
  }, []);
  */
  useEffect(() => {
    const newColliders = [
      // ───────── walls ─────────
      {
        position: [0, roomHeight / 2, -roomLength / 2] as [number, number, number],
        size:      [roomWidth, roomHeight, wallThickness] as [number, number, number],
      },
      {
        position: [0, roomHeight / 2,  roomLength / 2] as [number, number, number],
        size:      [roomWidth, roomHeight, wallThickness] as [number, number, number],
      },
      {
        position: [ roomWidth / 2, roomHeight / 2, 0] as [number, number, number],
        size:      [wallThickness, roomHeight, roomLength] as [number, number, number],
      },
      {
        position: [-roomWidth / 2, roomHeight / 2, 0] as [number, number, number],
        size:      [wallThickness, roomHeight, roomLength] as [number, number, number],
      },
  
      // ─────── pedestal ───────
      {
        position: [0,roomHeight/2 , 0] as [number, number, number],
        size:      [2, roomHeight, 2]  as [number, number, number],
      },
    ];
  
    setColliders(newColliders);
  }, [setColliders]);
  

  return (
    <group>
      {/* Floor */}
      <mesh 
        rotation={[-Math.PI / 2, 0, 0]} 
        position={[0, 0, 0]} 
        receiveShadow
      >
        <planeGeometry args={[roomWidth, roomLength]} />
        <meshStandardMaterial 
          map={woodTexture} 
          color="#aa8866" 
          roughness={0.8}
        />
      </mesh>
      
      {/* Ceiling */}
      <mesh 
        rotation={[Math.PI / 2, 0, 0]} 
        position={[0, roomHeight, 0]}
      >
        <planeGeometry args={[roomWidth, roomLength]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
      {/* North Wall */}
      <mesh 
        position={[0, roomHeight / 2, -roomLength / 2 + wallThickness / 2]} 
        castShadow
        receiveShadow
      >
        <boxGeometry args={[roomWidth, roomHeight, wallThickness]} />
        <meshStandardMaterial color="#f5f5f5" />
      </mesh>
      
      {/* South Wall */}
      <mesh 
        position={[0, roomHeight / 2, roomLength / 2 - wallThickness / 2]} 
        //castShadow
        receiveShadow
      >
        <boxGeometry args={[roomWidth, roomHeight, wallThickness]} />
        <meshStandardMaterial color="#f5f5f5" />
      </mesh>
      
      {/* East Wall */}
      <mesh 
        position={[roomWidth / 2 - wallThickness / 2, roomHeight / 2, 0]} 
        //castShadow
        receiveShadow
      >
        <boxGeometry args={[wallThickness, roomHeight, roomLength]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
      
      {/* West Wall */}
      <mesh 
        position={[-roomWidth / 2 + wallThickness / 2, roomHeight / 2, 0]} 
        castShadow
        receiveShadow
      >
        <boxGeometry args={[wallThickness, roomHeight, roomLength]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
      
      {/* Central pedestal for 3D art */}
      <mesh 
        position={[0, 0.5, 0]} 
        castShadow
        receiveShadow
      >
        <boxGeometry args={[2, 1, 2]} />
        <meshStandardMaterial color="#dddddd" />
      </mesh>
    </group>
  );
};

export default Room;