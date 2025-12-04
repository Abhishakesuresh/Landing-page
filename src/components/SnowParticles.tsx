"use client";

import { useEffect } from "react";
import * as THREE from "three";

export default function SnowParticles() {
    useEffect(() => {
        const CONFIG = {
            count: 1500,
            size: 0.03,
            range: 10,
            speed: 0.002,
            colors: [0xFFFFFF, 0xE0E0E0, 0xB0B0B0]
        };

        let scene: THREE.Scene;
        let camera: THREE.PerspectiveCamera;
        let renderer: THREE.WebGLRenderer;
        let particles: THREE.Points;
        let mouseX = 0, mouseY = 0;
        let animationId: number;

        function init() {
            const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement;
            if (!canvas) {
                console.warn('Canvas not found');
                return false;
            }

            canvas.style.opacity = '0';
            canvas.style.transition = 'opacity 2s ease-in-out';

            scene = new THREE.Scene();
            scene.fog = new THREE.FogExp2(0x000000, 0.05);

            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 5;

            renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
            renderer.setClearColor(0x000000, 0);
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);

            setTimeout(() => {
                canvas.style.opacity = '0.4';
            }, 100);

            createParticles();

            const handleMouseMove = (event: MouseEvent) => {
                mouseX = (event.clientX - window.innerWidth / 2) * 0.001;
                mouseY = (event.clientY - window.innerHeight / 2) * 0.001;
            };

            const handleResize = () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            };

            document.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('resize', handleResize);

            animate();

            return true;
        }

        function createParticles() {
            const geometry = new THREE.BufferGeometry();
            const vertices: number[] = [];
            const colors: number[] = [];
            const velocities: number[] = [];

            const colorObjs = CONFIG.colors.map((c: number) => new THREE.Color(c));

            for (let i = 0; i < CONFIG.count; i++) {
                const x = (Math.random() - 0.5) * CONFIG.range * 3;
                const y = (Math.random() - 0.5) * CONFIG.range * 2;
                const z = (Math.random() - 0.5) * CONFIG.range * 2;
                vertices.push(x, y, z);

                const color = colorObjs[Math.floor(Math.random() * colorObjs.length)];
                colors.push(color.r, color.g, color.b);

                velocities.push(
                    (Math.random() - 0.5) * 0.01,
                    (Math.random() - 0.5) * 0.01,
                    (Math.random() - 0.5) * 0.01
                );
            }

            geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
            geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
            geometry.setAttribute('velocity', new THREE.Float32BufferAttribute(velocities, 3));

            const material = new THREE.PointsMaterial({
                size: CONFIG.size,
                vertexColors: true,
                transparent: true,
                opacity: 0.8,
                sizeAttenuation: true
            });

            particles = new THREE.Points(geometry, material);
            scene.add(particles);
        }

        function animate() {
            animationId = requestAnimationFrame(animate);

            if (!particles) return;

            const positions = particles.geometry.attributes.position.array as Float32Array;
            const velocities = particles.geometry.attributes.velocity.array as Float32Array;

            for (let i = 0; i < CONFIG.count; i++) {
                positions[i * 3] += velocities[i * 3] - (mouseX * 0.05);
                positions[i * 3 + 1] += velocities[i * 3 + 1] + (mouseY * 0.05);
                positions[i * 3 + 2] += velocities[i * 3 + 2];

                const limit = CONFIG.range;
                if (positions[i * 3] > limit) positions[i * 3] = -limit;
                if (positions[i * 3] < -limit) positions[i * 3] = limit;
                if (positions[i * 3 + 1] > limit) positions[i * 3 + 1] = -limit;
                if (positions[i * 3 + 1] < -limit) positions[i * 3 + 1] = limit;
                if (positions[i * 3 + 2] > limit) positions[i * 3 + 2] = -limit;
                if (positions[i * 3 + 2] < -limit) positions[i * 3 + 2] = limit;
            }

            particles.geometry.attributes.position.needsUpdate = true;
            particles.rotation.y += 0.0005;

            renderer.render(scene, camera);
        }

        // Initialize after component mounts
        init();

        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
            if (renderer) {
                renderer.dispose();
            }
        };
    }, []);

    return <canvas id="hero-canvas" className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none" />;
}
