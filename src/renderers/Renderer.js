// Renderer.js
import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.setClearColor(new THREE.Color(0x660000));

document.body.appendChild(renderer.domElement);

export default renderer;
