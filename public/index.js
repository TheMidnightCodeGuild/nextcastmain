import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function Home() {
  const mountRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      dimensions.width / dimensions.height,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    // Add tone mapping and proper color space
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

    renderer.setSize(dimensions.width, dimensions.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for better performance
    mountRef.current.appendChild(renderer.domElement);

    // Add orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.5;
    controls.enableZoom = true;
    controls.minDistance = dimensions.width < 768 ? 12 : 8; // Adjust min distance for mobile
    controls.maxDistance = dimensions.width < 768 ? 20 : 30;

    // Stars setup
    const starsGeometry = new THREE.BufferGeometry();
    const starCount = dimensions.width < 768 ? 5000 : 10000; // Reduce stars on mobile
    const positions = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
      sizes[i] = Math.random() * 2;
    }

    starsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    starsGeometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: dimensions.width < 768 ? 1.5 : 1, // Larger stars on mobile
      transparent: true,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
    });

    const starField = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(starField);

    // Meteors setup
    const meteorCount = dimensions.width < 768 ? 10 : 20; // Fewer meteors on mobile
    const meteors = [];
    const meteorGeometry = new THREE.BufferGeometry();
    const meteorVertices = new Float32Array(6);
    meteorGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(meteorVertices, 3)
    );
    const meteorMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
    });

    for (let i = 0; i < meteorCount; i++) {
      const meteor = {
        line: new THREE.Line(meteorGeometry.clone(), meteorMaterial.clone()),
        speed: Math.random() * 10 + 5,
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 2000,
          (Math.random() - 0.5) * 2000,
          (Math.random() - 0.5) * 2000
        ),
        direction: new THREE.Vector3(
          Math.random() - 0.5,
          -1,
          Math.random() - 0.5
        ).normalize(),
      };
      meteor.line.geometry.setFromPoints([
        meteor.position,
        meteor.position
          .clone()
          .add(meteor.direction.clone().multiplyScalar(20)),
      ]);
      scene.add(meteor.line);
      meteors.push(meteor);
    }

    // Earth setup
    const earthGroup = new THREE.Group();
    earthGroup.rotation.z = (-23.4 * Math.PI) / 180;
    scene.add(earthGroup);

    const textureLoader = new THREE.TextureLoader();
    const detail = dimensions.width < 768 ? 8 : 12; // Lower detail on mobile
    const earthGeometry = new THREE.IcosahedronGeometry(5, detail);

    const earthMaterial = new THREE.MeshPhongMaterial({
      map: textureLoader.load("/texture.jpg"),
      specularMap: textureLoader.load("/earth-specular.jpg"),
      bumpMap: textureLoader.load("/earth-bump.jpg"),
      bumpScale: 0.04,
    });

    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earthGroup.add(earth);

    // Add country boundaries
    fetch("/data/globe.json")
      .then((response) => response.json())
      .then((geoData) => {
        const countryLines = new THREE.Group();

        geoData.features.forEach((feature) => {
          if (feature.geometry.type === "Polygon") {
            feature.geometry.coordinates.forEach((ring) => {
              const points = ring.map((coord) => {
                const [lon, lat] = coord;
                const phi = (90 - lat) * (Math.PI / 180);
                const theta = (lon + 180) * (Math.PI / 180);
                const x = -(5.05 * Math.sin(phi) * Math.cos(theta));
                const y = 5.05 * Math.cos(phi);
                const z = 5.05 * Math.sin(phi) * Math.sin(theta);
                return new THREE.Vector3(x, y, z);
              });

              const geometry = new THREE.BufferGeometry().setFromPoints(points);
              const material = new THREE.LineBasicMaterial({
                color: 0x666666,
                transparent: true,
                opacity: dimensions.width < 768 ? 0.2 : 0.3, // Lower opacity on mobile
              });
              const line = new THREE.Line(geometry, material);
              countryLines.add(line);
            });
          } else if (feature.geometry.type === "MultiPolygon") {
            feature.geometry.coordinates.forEach((polygon) => {
              polygon.forEach((ring) => {
                const points = ring.map((coord) => {
                  const [lon, lat] = coord;
                  const phi = (90 - lat) * (Math.PI / 180);
                  const theta = (lon + 180) * (Math.PI / 180);
                  const x = -(5.05 * Math.sin(phi) * Math.cos(theta));
                  const y = 5.05 * Math.cos(phi);
                  const z = 5.05 * Math.sin(phi) * Math.sin(theta);
                  return new THREE.Vector3(x, y, z);
                });

                const geometry = new THREE.BufferGeometry().setFromPoints(
                  points
                );
                const material = new THREE.LineBasicMaterial({
                  color: 0x666666,
                  transparent: true,
                  opacity: dimensions.width < 768 ? 0.2 : 0.3,
                });
                const line = new THREE.Line(geometry, material);
                countryLines.add(line);
              });
            });
          }
        });

        earthGroup.add(countryLines);
      });

    // Add city lights
    const lightsMaterial = new THREE.MeshBasicMaterial({
      map: textureLoader.load("/earth-lights.jpg"),
      blending: THREE.AdditiveBlending,
    });
    const lightsMesh = new THREE.Mesh(earthGeometry, lightsMaterial);
    earthGroup.add(lightsMesh);

    // Add clouds
    const cloudsMaterial = new THREE.MeshStandardMaterial({
      map: textureLoader.load("/earth-cloud1.jpg"),
      transparent: true,
      opacity: dimensions.width < 768 ? 0.6 : 0.8, // Lower opacity on mobile
      blending: THREE.AdditiveBlending,
      alphaMap: textureLoader.load("/earth-cloud2.jpg"),
    });
    const cloudsMesh = new THREE.Mesh(earthGeometry, cloudsMaterial);
    cloudsMesh.scale.setScalar(1.003);
    earthGroup.add(cloudsMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
    sunLight.position.set(-2, 0.5, 1.5);
    scene.add(sunLight);

    // Position camera
    camera.position.z = dimensions.width < 768 ? 15 : 12;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      starField.rotation.y += 0.0001;
      earth.rotation.y += 0.002;
      lightsMesh.rotation.y += 0.002;
      cloudsMesh.rotation.y += 0.0023;

      // Animate meteors
      meteors.forEach((meteor) => {
        meteor.position.add(
          meteor.direction.clone().multiplyScalar(meteor.speed)
        );
        meteor.line.geometry.setFromPoints([
          meteor.position,
          meteor.position
            .clone()
            .add(meteor.direction.clone().multiplyScalar(20)),
        ]);

        // Reset meteor position when it goes out of bounds
        if (meteor.position.y < -1000) {
          meteor.position.set(
            (Math.random() - 0.5) * 2000,
            1000,
            (Math.random() - 0.5) * 2000
          );
          meteor.direction
            .set(Math.random() - 0.5, -1, Math.random() - 0.5)
            .normalize();
          meteor.speed = Math.random() * 10 + 5;
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setDimensions({ width, height });

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Update controls based on screen size
      controls.minDistance = width < 768 ? 12 : 8;
      controls.maxDistance = width < 768 ? 20 : 30;
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      earthGeometry.dispose();
      earthMaterial.dispose();
      lightsMaterial.dispose();
      cloudsMaterial.dispose();
      starsGeometry.dispose();
      starsMaterial.dispose();
      meteorGeometry.dispose();
      meteorMaterial.dispose();
      meteors.forEach((meteor) => {
        meteor.line.geometry.dispose();
        meteor.line.material.dispose();
      });
      renderer.dispose();
      controls.dispose();
    };
  }, [dimensions]);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100vw",
        height: "100vh",
        background: "linear-gradient(to bottom, black, #000)",
        overflow: "hidden", // Prevent scrolling
        position: "fixed", // Fix position to viewport
        top: 0,
        left: 0,
      }}
    />
  );
}
