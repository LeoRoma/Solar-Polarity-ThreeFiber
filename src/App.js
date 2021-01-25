import React, {useRef} from 'react';
import './App.scss';

import { Canvas, useFrame } from "react-three-fiber";

import Sphere from './Components/Sphere';

function App() {

  return (
    <>
      <Canvas colorManagement camera={{position: [-5, 2, 10], fov: 50}}>
        <ambientLight intensity={0.7} />
        <Sphere />
      </Canvas>
    </>
  );
}

export default App;


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