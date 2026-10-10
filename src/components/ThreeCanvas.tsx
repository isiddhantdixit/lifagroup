import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x060C18, 0.0018);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 32;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Group for primary objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Central 3D Golden Polyhedron
    const icosahedronGeo = new THREE.IcosahedronGeometry(7, 1);
    const icosahedronMat = new THREE.MeshStandardMaterial({
      color: 0xC5A880,
      metalness: 0.85,
      roughness: 0.25,
      wireframe: true,
      transparent: true,
      opacity: 0.38
    });
    const icosahedron = new THREE.Mesh(icosahedronGeo, icosahedronMat);
    mainGroup.add(icosahedron);

    // Inner Glowing Core
    const coreGeo = new THREE.IcosahedronGeometry(4, 0);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xEAD1A6,
      wireframe: true,
      transparent: true,
      opacity: 0.5
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    mainGroup.add(coreMesh);

    // 2. Concentric Orbiting Golden Rings
    const ringGeo1 = new THREE.TorusGeometry(12, 0.06, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0xC5A880, transparent: true, opacity: 0.45 });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(15, 0.05, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0xEAD1A6, transparent: true, opacity: 0.3 });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    mainGroup.add(ring2);

    // 3. Floating 3D Gold Particles Cloud
    const particleCount = 1400;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 110;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 110;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;
      scales[i] = Math.random();
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

    const particleMat = new THREE.PointsMaterial({
      color: 0xEBD6B5,
      size: 0.28,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xEAD1A6, 2.5);
    dirLight1.position.set(15, 20, 15);
    scene.add(dirLight1);

    const pointLight = new THREE.PointLight(0x0E244D, 3, 50);
    pointLight.position.set(-15, -10, 10);
    scene.add(pointLight);

    // Mouse & Scroll Interactivity Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = 0;
    let targetScrollY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const onScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth Lerp for Mouse
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Smooth Lerp for Scroll
      targetScrollY += (scrollY - targetScrollY) * 0.08;

      // Base rotation
      icosahedron.rotation.x += delta * 0.12;
      icosahedron.rotation.y += delta * 0.18;
      coreMesh.rotation.x -= delta * 0.2;
      coreMesh.rotation.y -= delta * 0.25;

      ring1.rotation.z += delta * 0.15;
      ring2.rotation.x += delta * 0.1;

      // Scroll-driven 3D parallax effect
      const scrollProgress = targetScrollY * 0.0012;
      mainGroup.rotation.y = scrollProgress * 1.5 + targetX * 0.5;
      mainGroup.rotation.x = scrollProgress * 0.8 + targetY * 0.4;
      mainGroup.position.y = -scrollProgress * 2.5;

      // Gentle floating particle drift
      particles.rotation.y = elapsedTime * 0.03 + targetX * 0.2;
      particles.rotation.x = elapsedTime * 0.015 + targetY * 0.15;

      // Dynamic Camera drift
      camera.position.x = targetX * 2.5;
      camera.position.y = targetY * 2.5;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
      aria-hidden="true"
    />
  );
};
