import React, {useRef} from 'react';

const Box = ({position, args}) => {
    const mesh = useRef(null);
    return (
        <mesh castShadow position={position} ref={mesh}>
            <boxBufferGeometry attach="geometry" args={args}/>
            <meshStandardMaterial attach="material" color="blue"
             roughness={0.5} metalness={0.5}/>
        </mesh>
    );

}

export default Box;