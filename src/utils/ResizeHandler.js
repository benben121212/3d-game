// ResizeHandler.js
import camera from '../cameras/Camera';
import renderer from '../renderers/Renderer';

const handleResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

export default handleResize;
