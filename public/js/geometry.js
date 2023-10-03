import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('canvas') });
renderer.setSize(window.innerWidth - 100, window.innerHeight - 200);
const outlineMaterial = new THREE.LineBasicMaterial({ color: 'blue' })


function computeTriangulation(verts) {
  scene.clear();
  verts.forEach(vert => {
    const geometry = new THREE.BufferGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 'red' });
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vert), 3));
    const triangle = new THREE.Mesh(geometry, material);
    scene.add(triangle);

    const outlineGeometry = new THREE.EdgesGeometry(geometry);
    const outline = new THREE.LineSegments(outlineGeometry, outlineMaterial);
    triangle.add(outline);
  });

  camera.position.z = 15;
}

function animate() {
  requestAnimationFrame(animate);
  scene.rotation.x += 0.01;
  scene.rotation.y += 0.01;
  scene.rotation.z += 0.01;
  renderer.render(scene, camera);
}

export { computeTriangulation, animate };