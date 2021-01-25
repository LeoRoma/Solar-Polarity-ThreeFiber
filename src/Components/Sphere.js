import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

const Sphere = ({position, args, color}) => {
    const mesh = useRef(null);
    useFrame(() => mesh.current.rotation.x = mesh.current.rotation.y += 0.05
    )
    return (
        <mesh position={position} ref={mesh}>
            <sphereBufferGeometry attach='geometry' args={args} />
            <meshStandardMaterial attach='material' color={color}/>

        </mesh>
    )
}

export default Sphere;