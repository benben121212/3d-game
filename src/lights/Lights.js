// Lights.js
import * as THREE from 'three';
import scene from '../scenes/Scene';

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7);
directionalLight.castShadow = true;

const ambientLight = new THREE.AmbientLight(0x404040, 0.3);

scene.add(directionalLight);
scene.add(ambientLight);

export { directionalLight, ambientLight };
