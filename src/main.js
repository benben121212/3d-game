// main.js

import scene from './scenes/Scene';
import camera from './cameras/Camera';
import renderer from './renderers/Renderer';
import cube from './objects/Cube';
import { directionalLight, ambientLight } from './lights/Lights';
import {
  animateRotation,
  animateLateralMovement,
  animateZoom,
  animateWaveMovement,
  animateColorChange,
  animateCombinedMovement,
  AnimationManager,
} from './animations/Animations';

// Ajoutez la lumière directionnelle et ambiante à la scène
scene.add(directionalLight);
scene.add(ambientLight);

// Ajoutez le cube à la scène
scene.add(cube);

// Créez une instance de AnimationManager
const animationManager = new AnimationManager();

// Ajoutez vos animations à AnimationManager
animationManager.addAnimation(animateRotation);
animationManager.addAnimation(animateLateralMovement);
animationManager.addAnimation(() => animateZoom(zoomDirection, isCubeGrabbed));
animationManager.addAnimation(animateWaveMovement);
animationManager.addAnimation(animateColorChange);
animationManager.addAnimation(animateCombinedMovement);

// Déclarez la variable zoomDirection
let zoomDirection = 1;

// Ajoutez un gestionnaire d'événements pour le mouvement de la souris
document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mousedown', onMouseDown);
document.addEventListener('mouseup', onMouseUp);

// Empêche les animations par défaut lorsque le cube est attrapé
let isCubeGrabbed = false;

// Déclarez une fonction pour arrêter toutes les animations
function stopAllAnimations() {
  animationManager.stopAllAnimations();
}

// Déclarez une fonction pour redémarrer toutes les animations
function restartAllAnimations() {
  animationManager.restartAllAnimations();
}

// Appelez les différentes animations
animationManager.startAllAnimations();

// Ajoutez un gestionnaire d'événements pour le redimensionnement de la fenêtre
import handleResize from './utils/ResizeHandler';
window.addEventListener('resize', handleResize);

// Variables pour suivre l'état du clic
let isDragging = false;
let startPosition = { x: 0, y: 0 };

// Gestionnaire d'événements pour le mouvement de la souris
function onMouseMove(event) {
  // Si le clic gauche est enfoncé
  if (isDragging) {
    // Si le cube est attrapé, mettez à jour sa position en fonction du déplacement de la souris
    if (isCubeGrabbed) {
      const deltaX = event.clientX - startPosition.x;
      const deltaY = event.clientY - startPosition.y;

      cube.position.x += deltaX * 0.01;
      cube.position.y -= deltaY * 0.01;

      startPosition.x = event.clientX;
      startPosition.y = event.clientY;
    }
  }
}

// Gestionnaire d'événements pour le clic de la souris
function onMouseDown(event) {
  if (event.button === 0) {
    // Bouton gauche de la souris (0)
    isDragging = true;
    startPosition.x = event.clientX;
    startPosition.y = event.clientY;

    // Si le cube est attrapé, arrêtez toutes les animations
    if (isCubeGrabbed) {
      stopAllAnimations();
    }

    // Indiquez que le cube est attrapé lors du clic
    isCubeGrabbed = true;
  }
}

// Gestionnaire d'événements pour le relâchement du clic de la souris
function onMouseUp(event) {
  if (event.button === 0) {
    // Bouton gauche de la souris (0)
    isDragging = false;

    // Si le cube est attrapé, redémarrez toutes les animations
    if (isCubeGrabbed) {
      restartAllAnimations();
    }

    // Indiquez que le cube n'est plus attrapé lors du relâchement du clic
    isCubeGrabbed = false;
  }
}
