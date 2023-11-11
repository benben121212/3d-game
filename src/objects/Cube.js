import * as THREE from 'three';
import scene from '/src/scenes/Scene.js';

// Création d'un cube sans charger de modèle externe
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x000033 });
const cube = new THREE.Mesh(geometry, material);
cube.castShadow = true;
cube.receiveShadow = true;
cube.position.set(0, 0, 0);

scene.add(cube);

export default cube;
