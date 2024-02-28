import * as THREE from 'three';

import { GLTFLoader, DRACOLoader } from 'https://unpkg.com/three@0.161.0/examples/jsm/Addons.js';

function start() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;
    renderer.render(scene, camera);

    const dracoLoader = new DRACOLoader();

    dracoLoader.setDecoderPath('libs/draco/gltf/');


    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);

    loader.load('/models/gltf/LittlestTokyo.glb', function (gltf) {
        const model = gltf.scene;
        model.position.set(500, 100, 30);
        model.scale.set(0.50, 0.50, 0.50);
        scene.add(gltf.scene);
    }, undefined, function (error) {
        console.error(error);

    });



}



start()
