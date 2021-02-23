// import React from 'react';
import {useThree} from 'react-three-fiber';
import {CubeTextureLoader} from 'three';

const Skybox = () => {
    const {scene} = useThree();
    const loader = new CubeTextureLoader();
    const texture = loader.load([
        "/back.jpg", 
        "/bottom.jpg",
        "/front.jpg",
        "/left.jpg",
        "/right.jpg",
        "/top.jpg"
    ]);

    scene.background = texture;
    return null;
}

export default Skybox;