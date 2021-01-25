import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

const Sphere = () => {
    const mesh = useRef(null);
    useFrame(() => mesh.current.rotation.x = mesh.current.rotation.y += 0.05
    )
    return (
        <mesh ref={mesh}>
            <sphereBufferGeometry attach='geometry' args={[1, 40, 10]} />
            <meshStandardMaterial attach='material' color='yellow'/>

        </mesh>
    )
}

export default Sphere;