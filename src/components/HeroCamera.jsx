import { useRef } from 'react'; // Hook for referencing DOM/3D objects directly
import { useFrame } from '@react-three/fiber'; // Hook for animating each frame
import { easing } from 'maath'; // Library for smooth damping animations

const HeroCamera = ({ isMobile, children }) => {
  const group = useRef(); // Ref to access and manipulate the 3D group directly

  useFrame((state, delta) => {
    // Smoothly adjust the camera's position using damping (ease-in-out effect)
    // Moves the camera towards [0, 0, 5] over time with a smoothing factor of 0.25
    easing.damp3(state.camera.position, [0, 0, 5], 0.50, delta);

    if (!isMobile) {
      // Apply smooth rotation to the group based on pointer movement
      // Rotation dampens over time for a natural effect
      easing.dampE(
        group.current.rotation, // Current rotation of the group
        [
          -state.pointer.y / 3, // Rotate on X-axis inversely proportional to pointer's vertical position
          state.pointer.x / 5,  // Rotate on Y-axis proportional to pointer's horizontal position
          0,                    // No rotation on Z-axis
        ],
        0.25, // Smoothing factor for rotation
        delta // Time elapsed since the last frame
      );
    }
  });

  return (
    // Wrap the children in a group, which can be referenced for animations
    <group ref={group}>
      {children}
    </group>
  );
};

export default HeroCamera;
