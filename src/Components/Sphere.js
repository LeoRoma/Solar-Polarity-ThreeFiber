import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';
import { useSpring, animated } from 'react-spring/three';

const Sphere = ({ position, args, color }) => {
    const mesh = useRef(null);
    useFrame(() => mesh.current.rotation.y += 0.05);
    const [expand, setExpand] = useState(false);
    const props = useSpring({
        scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1]
    });

    return (
        <animated.mesh
            onClick={() => setExpand(!expand)}
            scale={props.scale}
            castShadow
            position={position}
            ref={mesh}>
            <sphereBufferGeometry attach='geometry' args={args} />
            <meshStandardMaterial
                attach='material'
                color={color}
                metalness={0.3}
                roughness={0.3}
            />

        </animated.mesh>
    )
}

export default Sphere;