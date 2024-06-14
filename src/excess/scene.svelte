<!-- <script>
  import { onMount } from "svelte";
  import * as THREE from "three";
  import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
  import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
  let scene, camera, renderer, controls;

  onMount(() => {
    // Create Three.js scene
    scene = new THREE.Scene();
    
    // Create camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(3, 2, 4);

    // Create renderer
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // // Create ambient light
    // const ambientLight = new THREE.AmbientLight(0xffffff, 10);
    // scene.add(ambientLight);

    // // Create directional light
    // const directionalLight = new THREE.DirectionalLight(0xffffff, 10);
    // directionalLight.position.set(1, 1, 1).normalize();
    // scene.add(directionalLight);

    // Add orbit controls
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    // Load glTF model
    const loader = new GLTFLoader();
    loader.load(
      // resource URL
      "src/lib/3D model/renew.glb",
      // called when the resource is loaded
      function (gltf) {
        scene.add(gltf.scene);
      },
      // called while loading is progressing
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      // called when loading has errors
      function (error) {
        console.log("An error happened");
      }
    );

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    // Resize handling
    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  });
</script>

<main></main>

<style>
  main{
    z-index: 9999999999;
  }
</style> -->
