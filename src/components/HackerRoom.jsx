/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const HackerRoom = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/HackerRoom.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group>
        <group name="World-Global" rotation={[-Math.PI, 0, -Math.PI]} scale={[-1, 1, 1]}>
          <group name="World-Local" />
          <group name="Controller-Global" position={[0, 25, 0]}>
            <group name="Controller-Local" />
            <group name="Hip-Global" position={[-0.134, 0, -0.287]} rotation={[-0.08, 0.71, 0.073]}>
              <mesh
                name="Hip-Local"
                geometry={nodes['Hip-Local'].geometry}
                material={materials['Hip-Material']}
                position={[0, 0.5, 0]}
              />
              <group name="Belly-Global" position={[0, 2.5, 0]} rotation={[0, -0.087, 0]}>
                <mesh
                  name="Belly-Local"
                  geometry={nodes['Belly-Local'].geometry}
                  material={materials['Belly-Material']}
                  position={[0, -2, 0.031]}
                />
                <group name="Chest-Global" position={[0, 4, 0]} rotation={[0.087, -0.135, -0.012]}>
                  <mesh
                    name="Chest-Local"
                    geometry={nodes['Chest-Local'].geometry}
                    material={materials['Chest_A-Material']}
                    position={[0, 7, 0]}
                  />
                  <group
                    name="Head-Global"
                    position={[-0.008, 10.053, 0.089]}
                    rotation={[-0.046, -0.51, 0.046]}>
                    <mesh
                      name="Head-Local"
                      geometry={nodes['Head-Local'].geometry}
                      material={materials['Head_A-Material']}
                      position={[0, 11, 0]}
                    />
                  </group>
                  <group
                    name="Left_Arm-Global"
                    position={[-7.241, 8.778, 0.026]}
                    rotation={[0.042, -0.2, 1.408]}>
                    <mesh
                      name="Left_Arm-Local"
                      geometry={nodes['Left_Arm-Local'].geometry}
                      material={materials['LeftArm-Material']}
                      position={[-4, 1.5, 0]}
                    />
                    <group
                      name="Left_Forearm-Global"
                      position={[-11, 0, -0.5]}
                      rotation={[0.053, 0.714, -0.099]}>
                      <mesh
                        name="Left_Forearm-Local"
                        geometry={nodes['Left_Forearm-Local'].geometry}
                        material={materials['LeftForearm-Material']}
                        position={[-3.5, 0.557, 0.447]}
                      />
                      <group
                        name="Left_Hand-Global"
                        position={[-8, 0, 0]}
                        rotation={[-Math.PI / 2, -0.183, 0]}>
                        <mesh
                          name="Left_Hand-Local"
                          geometry={nodes['Left_Hand-Local'].geometry}
                          material={materials['LeftHand-Material']}
                          position={[-5, 0, -0.5]}
                        />
                      </group>
                    </group>
                    <group name="t2-Global" position={[0, 0.51, 0]}>
                      <mesh
                        name="t2-Local"
                        geometry={nodes['t2-Local'].geometry}
                        material={materials['black_cube-Material']}
                        position={[0, 0.5, 0]}
                      />
                    </group>
                  </group>
                  <group
                    name="Right_Arm-Global"
                    position={[7.261, 8.946, 0.044]}
                    rotation={[0.182, -0.316, -1.233]}>
                    <mesh
                      name="Right_Arm-Local"
                      geometry={nodes['Right_Arm-Local'].geometry}
                      material={materials['RightArm-Material']}
                      position={[4, 1.5, 0]}
                    />
                    <group
                      name="Right_Forearm-Global"
                      position={[11, 0, -0.5]}
                      rotation={[0, -0.554, -0.087]}>
                      <mesh
                        name="Right_Forearm-Local"
                        geometry={nodes['Right_Forearm-Local'].geometry}
                        material={materials['RightForearm-Material']}
                        position={[3.5, 0.557, 0.447]}
                      />
                      <group
                        name="Right_Hand-Global"
                        position={[8, 0, 0]}
                        rotation={[-2.106, -0.175, 0.578]}>
                        <mesh
                          name="Right_Hand-Local"
                          geometry={nodes['Right_Hand-Local'].geometry}
                          material={materials['RightHand-Material']}
                          position={[5, 0, -0.5]}
                        />
                      </group>
                    </group>
                    <group name="t1-Global" position={[0, 0.51, 0]}>
                      <mesh
                        name="t1-Local"
                        geometry={nodes['t1-Local'].geometry}
                        material={materials['black_cube-Material']}
                        position={[0, 0.5, 0]}
                      />
                    </group>
                  </group>
                </group>
              </group>
              <group
                name="Right_Thigh-Global"
                position={[4, -0.5, 0]}
                rotation={[-0.057, 0.341, 0.075]}>
                <mesh
                  name="Right_Thigh-Local"
                  geometry={nodes['Right_Thigh-Local'].geometry}
                  material={materials['RightThigh-Material']}
                  position={[-0.053, -6, -0.057]}
                />
                <group name="Right_Leg-Global" position={[0.5, -12, -0.5]} rotation={[0.458, 0, 0]}>
                  <mesh
                    name="Right_Leg-Local"
                    geometry={nodes['Right_Leg-Local'].geometry}
                    material={materials['RightLeg-Material']}
                    position={[-0.5, -5, -0.5]}
                  />
                  <group
                    name="Right_Foot-Global"
                    position={[0, -10, 0.5]}
                    rotation={[-0.3, 0.138, -0.064]}>
                    <mesh
                      name="Right_Foot-Local"
                      geometry={nodes['Right_Foot-Local'].geometry}
                      material={materials['RightFoot-Material']}
                      position={[0.021, -0.5, 2]}
                    />
                  </group>
                </group>
              </group>
              <group
                name="Left_Thigh-Global"
                position={[-4, -0.5, 0]}
                rotation={[-0.175, -0.029, -0.1]}>
                <mesh
                  name="Left_Thigh-Local"
                  geometry={nodes['Left_Thigh-Local'].geometry}
                  material={materials['LeftThigh-Material']}
                  position={[0.053, -6, -0.057]}
                />
                <group
                  name="Left_Leg-Global"
                  position={[-0.5, -12, -0.5]}
                  rotation={[0.343, 0.021, 0.073]}>
                  <mesh
                    name="Left_Leg-Local"
                    geometry={nodes['Left_Leg-Local'].geometry}
                    material={materials['LeftLeg-Material']}
                    position={[0.5, -5, -0.5]}
                  />
                  <group
                    name="Left_Foot-Global"
                    position={[0, -10, 0.5]}
                    rotation={[-0.11, -0.424, 0.016]}>
                    <mesh
                      name="Left_Foot-Local"
                      geometry={nodes['Left_Foot-Local'].geometry}
                      material={materials['LeftFoot-Material']}
                      position={[-0.021, -0.5, 2]}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}
useGLTF.preload('/models/HackerRoom.gltf')
export default HackerRoom;
