import React from 'react';
import './App.scss';

import { Canvas } from "react-three-fiber";
import {softShadows, MeshWobbleMaterial, OrbitControls} from 'drei';

import Box from './Components/Box';
import Sphere from './Components/Sphere';
import Skybox from './Components/Skybox';

function App() {

  return (
    <>
      <Canvas>
        <ambientLight intensity={0.7} />
        <directionalLight
          castShadow
          position={[70, 0, 0]}
          intensity={0.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        {/* <pointLight position={[70, 0, 0]} intensity={0.5} /> */}

        <group>
          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <shadowMaterial attach='material' />
          </mesh>
        </group>
        <Sphere position={[0, 0, 0]} args={[1, 8, 8]} color='yellow' />
        <Sphere position={[-4, 0, 0]} args={[1, 5, 1]} color='blue' />
        <Sphere position={[-8, 0, 0]} args={[1, 5, 1]} color="grey"/>

        {/* <Box position={[0, 0, 0]} args={[1, 1, 3]} />
        <Box position={[-4, 0, 0]} args={[1, 1, 3]} />
        <Box position={[-8, 0, 0]} args={[1, 1, 3]} /> */}
        <Skybox />
        <OrbitControls autoRotate />
      </Canvas>
    </>
  );
}

export default App;
// video stopped at 30:42

// Mesh: 
// Class representing triangular polygon mesh based ObjectSpaceNormalMap

// BufferGeometry: 
// An Efficient representation of mesh, line, or point geometry. 
// Includes vertex positions, face indices, normals, colors, UVs, 
// and custom attributes within buffers, reducing the cost of passing all this data to the GPU

// Material: 
// Materials describe the appearance of ObjectSpaceNormalMap. They are defined in a (mostly) renderer-independent way,
// so you don't have to rewrite materials if you decide to use a different renderer.

// useFrame():
// This hook calls you back everyframe, which is good for running effects, updating controls, etc.
// You receive the state (same as useThree) and a clock delta. If you supply a render priority greater than zero 
// it will switch off automatic rendering entirely, you can then control rendering yourself.
// If you have multiple frames with a render priority last, similar th the web's z-index. 
// Frames are managed, three-fiber will remove them automatically when the component that holds them is unmounted. 