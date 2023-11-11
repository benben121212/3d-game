// Animations.js
import cube from '../objects/Cube';
import renderer from '../renderers/Renderer';
import scene from '../scenes/Scene';
import camera from '../cameras/Camera';

let zoomDirection = 1;

const animateRotation = function () {
  requestAnimationFrame(animateRotation);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
};

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

const animateLateralMovement = function () {
  requestAnimationFrame(animateLateralMovement);
  cube.position.x = 2 * Math.sin(Date.now() * 0.001);
  renderer.render(scene, camera);
};

const animateWaveMovement = function () {
  requestAnimationFrame(animateWaveMovement);
  cube.position.z = Math.sin(Date.now() * 0.001) * 2;
  renderer.render(scene, camera);
};

const animateColorChange = function () {
  requestAnimationFrame(animateColorChange);
  const time = Date.now() * 0.001;
  const hue = (time % 360) / 360;
  cube.material.color.setHSL(hue, 1, 0.5);
  renderer.render(scene, camera);
};

const animateCombinedMovement = function () {
  requestAnimationFrame(animateCombinedMovement);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  cube.position.x = 2 * Math.sin(Date.now() * 0.001);
  cube.position.z = Math.cos(Date.now() * 0.001) * 2;
  renderer.render(scene, camera);
};

export {
  animateRotation,
  animateZoom,
  animateLateralMovement,
  animateWaveMovement,
  animateColorChange,
  animateCombinedMovement
};
