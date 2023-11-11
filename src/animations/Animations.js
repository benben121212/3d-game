import * as THREE from 'three';
import cube from '../objects/Cube'; // Assurez-vous que le chemin est correct si nécessaire
import renderer from '../renderers/Renderer';
import scene from '../scenes/Scene';
import camera from '../cameras/Camera';

// Créez une instance de AnimationManager
class AnimationManager {
  constructor() {
    this.animations = [];
  }

  addAnimation(animation) {
    this.animations.push(animation);
  }

  startAllAnimations() {
    this.animations.forEach((animation) => animation());
  }

  stopAllAnimations() {
    this.animations.forEach((animation) => cancelAnimationFrame(animation));
    this.animations = [];
  }

  restartAllAnimations() {
    this.stopAllAnimations();
    this.startAllAnimations();
  }
}

let zoomDirection = 1;

// Animation de rotation
const animateRotation = function () {
  requestAnimationFrame(animateRotation);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
};

// Animation de zoom
const animateZoom = function () {
  requestAnimationFrame(animateZoom);
  cube.scale.x += 0.01 * zoomDirection;
  cube.scale.y += 0.01 * zoomDirection;
  cube.scale.z += 0.01 * zoomDirection;
  if (cube.scale.x > 1.5 || cube.scale.x < 0.5) {
    zoomDirection *= -1;
  }
  renderer.render(scene, camera);
};

// Animation de mouvement latéral
const animateLateralMovement = function () {
  requestAnimationFrame(animateLateralMovement);
  cube.position.x = 2 * Math.sin(Date.now() * 0.001);
  renderer.render(scene, camera);
};

// Animation de mouvement ondulatoire
const animateWaveMovement = function () {
  requestAnimationFrame(animateWaveMovement);
  cube.position.z = Math.sin(Date.now() * 0.001) * 2;
  renderer.render(scene, camera);
};

// Animation de changement de couleur
const animateColorChange = function () {
  requestAnimationFrame(animateColorChange);
  const time = Date.now() * 0.001;
  const hue = (time % 360) / 360;
  cube.material.color.setHSL(hue, 1, 0.5);
  renderer.render(scene, camera);
};

// Animation de mouvement combiné
const animateCombinedMovement = function () {
  requestAnimationFrame(animateCombinedMovement);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.position.x = 2 * Math.sin(Date.now() * 0.001);
  cube.position.z = Math.cos(Date.now() * 0.001) * 2;
  renderer.render(scene, camera);
};

// Exportez cube, renderer, scene, camera et AnimationManager
export {
  animateRotation,
  animateZoom,
  animateLateralMovement,
  animateWaveMovement,
  animateColorChange,
  animateCombinedMovement,
  AnimationManager,
  cube,
  renderer,
  scene,
  camera,
};
