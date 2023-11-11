// main.js
import scene from './scenes/Scene';
import camera from './cameras/Camera';
import renderer from './renderers/Renderer';
import cube from './objects/Cube';

import { directionalLight , ambientLight } from './lights/Lights';
import {
    animateRotation,
    animateZoom,
    animateLateralMovement,
    animateWaveMovement,
    animateColorChange,
    animateCombinedMovement
  } from './animations/Animations';

// Ajoutez la lumière directionnelle et ambiante à la scène
scene.add(directionalLight);
scene.add(ambientLight);

// Ajoutez le cube à la scène
scene.add(cube);

// Déclarez la variable zoomDirection
let zoomDirection = 1;

// Appelez les différentes animations
animateRotation();
animateZoom(zoomDirection); // Passez la variable zoomDirection en argument
animateLateralMovement();
animateWaveMovement();
animateColorChange();
animateCombinedMovement();

// Ajoutez un gestionnaire d'événements pour le redimensionnement de la fenêtre
import handleResize from './utils/ResizeHandler';
window.addEventListener('resize', handleResize);
