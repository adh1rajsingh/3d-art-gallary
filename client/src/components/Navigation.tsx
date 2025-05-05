import * as THREE from "three";
import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import { useGallery } from "@/lib/stores/useGallery";

// Enum for controls
enum Controls {
  forward = 'forward',
  backward = 'backward',
  leftward = 'leftward',
  rightward = 'rightward',
  jump = 'jump',
}

const Navigation = () => {
  const { camera } = useThree();
  const { colliders, isControlsLocked } = useGallery();
  
  // Player state
  const playerHeight = 1.7;
  const playerRef = useRef<THREE.Object3D>(new THREE.Object3D());
  const velocityRef = useRef<THREE.Vector3>(new THREE.Vector3());
  const directionRef = useRef<THREE.Vector3>(new THREE.Vector3());
  
  // Movement constants
  const SPEED = 2;
  const GRAVITY = 30;
  const playerRadius = 0.5;
  const jumpHeight = 1.0;
  
  // Physics state
  const onGround = useRef(true);
  const jumpTime = useRef(0);
  
  // Setup player starting position
  useEffect(() => {
    playerRef.current.position.set(0, playerHeight, 3);
    camera.position.set(0, playerHeight, 3);
  }, []);
  
  // Get keyboard controls
  const [, getControls] = useKeyboardControls<Controls>();
  
  // Raycasters for collision detection
  const downRaycaster = useRef(new THREE.Raycaster());
  const frontRaycaster = useRef(new THREE.Raycaster());
  
  // Handle player movement and collisions
  useFrame((state, delta) => {
    if (!isControlsLocked) return;
    
    // Get current controls state
    const { forward, backward, leftward, rightward, jump } = getControls();
    
    // Get player position
    const playerPos = playerRef.current.position;
    
    // Calculate movement direction from camera
    const camDir = new THREE.Vector3();
    camera.getWorldDirection(camDir);
    camDir.y = 0;
    camDir.normalize();
    
    // Get right vector from camera direction
    const rightDir = new THREE.Vector3(camDir.z, 0, -camDir.x);
    
    // Calculate movement direction
    directionRef.current.set(0, 0, 0);
    
    if (forward) {
      directionRef.current.add(camDir);
    }
    if (backward) {
      directionRef.current.sub(camDir);
    }
    if (rightward) {
      directionRef.current.add(rightDir);
    }
    if (leftward) {
      directionRef.current.sub(rightDir);
    }
    
    // Normalize direction if moving diagonally
    if (directionRef.current.lengthSq() > 0) {
      directionRef.current.normalize();
    }
    
    // Apply movement to velocity
    velocityRef.current.x = directionRef.current.x * SPEED;
    velocityRef.current.z = directionRef.current.z * SPEED;
    
    // Handle jumping
    if (jump && onGround.current) {
      velocityRef.current.y = Math.sqrt(2 * GRAVITY * jumpHeight);
      onGround.current = false;
      jumpTime.current = state.clock.getElapsedTime();
    }
    
    // Apply gravity
    if (!onGround.current) {
      const time = state.clock.getElapsedTime() - jumpTime.current;
      velocityRef.current.y -= GRAVITY * delta;
    }
    
    // Check ground collision
    downRaycaster.current.set(
      playerPos.clone().add(new THREE.Vector3(0, 0.1, 0)),
      new THREE.Vector3(0, -1, 0)
    );
    
    // Apply velocity to position with collision detection
    const nextPos = playerPos.clone().addScaledVector(velocityRef.current, delta);
    
    // Check wall collisions
    let canMove = true;
    
    // Check collisions with each wall
    for (const collider of colliders) {
      // Create a box for the wall
      const wallBox = new THREE.Box3().setFromCenterAndSize(
        new THREE.Vector3(...collider.position),
        new THREE.Vector3(...collider.size)
      );
      
      // Create a sphere for the player
      const playerSphere = new THREE.Sphere(
        nextPos.clone(),
        playerRadius
      );
      
      // Check collision
      if (wallBox.intersectsSphere(playerSphere)) {
        canMove = false;
        break;
      }
    }
    
    // If no collisions, update position
    if (canMove) {
      // Update player position
      playerPos.copy(nextPos);
      
      // Keep player at minimum height
      if (playerPos.y < playerHeight) {
        playerPos.y = playerHeight;
        velocityRef.current.y = 0;
        onGround.current = true;
      }
      
      // Update camera position to follow player
      camera.position.copy(playerPos);
    } else {
      // On collision, stop momentum in that direction
      velocityRef.current.set(0, velocityRef.current.y, 0);
    }
  });
  
  // Return an empty mesh for the player (invisible)
  return <mesh ref={playerRef} visible={false} />;
};

export default Navigation;
