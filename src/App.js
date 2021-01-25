import React from 'react';
import './App.scss';

import { Canvas } from "react-three-fiber";

function App() {
  return (
    <>
      <Canvas>
        <mesh>
          <circleBufferGeometry attach='geometry' args={[1, 100]} />
          <meshStandardMaterial attach='material' />
        </mesh>
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