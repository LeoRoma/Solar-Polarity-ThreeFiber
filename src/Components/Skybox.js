// import React from 'react';
import {useThree} from 'react-three-fiber';
import {CubeTextureLoader} from 'three';

const Skybox = () => {
    const {scene} = useThree();
    const loader = new CubeTextureLoader();
    const texture = loader.load([
        "/1.jpg", 
        "/space.jpg",
        "/1.jpg",
        "/1.jpg",
        "/1.jpg",
        "/1.jpg"
    ]);

    scene.background = texture;
    return null;
}

export default Skybox;