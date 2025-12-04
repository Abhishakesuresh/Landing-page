// ========================================
// TITANIUM FLOW ENGINE (White Particles)
// ========================================

const CONFIG = {
    count: 4000,
    size: 0.03,
    range: 10, // Spread range
    speed: 0.002,
    colors: [0xFFFFFF, 0xE0E0E0, 0xB0B0B0] // Pure White, Off-White, Titanium Grey
};
let scene, camera, renderer, particles;
let mouseX = 0, mouseY = 0;

function init() {
    const canvas = document.getElementById('hero-canvas');
    canvas.style.opacity = 0;
    canvas.style.transition = 'opacity 2s ease-in-out';

    // 1. Scene
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.05);

    // 2. Camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // 3. Renderer
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    setTimeout(() => { canvas.style.opacity = 0.6; }, 100);

    // 4. Create Particle Flow
    createParticles();

    // 5. Events
    document.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);

    // 6. Scroll Observer
    // 6. Scroll Observer (Moved to DOMContentLoaded)


    // 7. Start
    animate();
}

function createParticles() {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];
    const velocities = []; // Store random speeds for each particle

    const colorObjs = CONFIG.colors.map(c => new THREE.Color(c));

    for (let i = 0; i < CONFIG.count; i++) {
        // Random position in a large box
        const x = (Math.random() - 0.5) * CONFIG.range * 3; // Wide spread
        const y = (Math.random() - 0.5) * CONFIG.range * 2;
        const z = (Math.random() - 0.5) * CONFIG.range * 2;

        vertices.push(x, y, z);

        // Random color (White/Grey mix)
        const color = colorObjs[Math.floor(Math.random() * colorObjs.length)];
        colors.push(color.r, color.g, color.b);

        // Random velocity (drift)
        velocities.push(
            (Math.random() - 0.5) * 0.01, // x speed
            (Math.random() - 0.5) * 0.01, // y speed
            (Math.random() - 0.5) * 0.01  // z speed
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

function onMouseMove(event) {
    mouseX = (event.clientX - window.innerWidth / 2) * 0.001;
    mouseY = (event.clientY - window.innerHeight / 2) * 0.001;
}

function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);

    const positions = particles.geometry.attributes.position.array;
    const velocities = particles.geometry.attributes.velocity.array;

    // Move particles individually
    for (let i = 0; i < CONFIG.count; i++) {
        // Apply velocity
        positions[i * 3] += velocities[i * 3] - (mouseX * 0.05); // React to mouse X
        positions[i * 3 + 1] += velocities[i * 3 + 1] + (mouseY * 0.05); // React to mouse Y
        positions[i * 3 + 2] += velocities[i * 3 + 2];

        // Boundary check (Reset if too far)
        const limit = CONFIG.range;

        if (positions[i * 3] > limit) positions[i * 3] = -limit;
        if (positions[i * 3] < -limit) positions[i * 3] = limit;

        if (positions[i * 3 + 1] > limit) positions[i * 3 + 1] = -limit;
        if (positions[i * 3 + 1] < -limit) positions[i * 3 + 1] = limit;

        if (positions[i * 3 + 2] > limit) positions[i * 3 + 2] = -limit;
        if (positions[i * 3 + 2] < -limit) positions[i * 3 + 2] = limit;
    }

    particles.geometry.attributes.position.needsUpdate = true;

    // Slow global rotation for extra depth
    particles.rotation.y += 0.0005;

    renderer.render(scene, camera);
}

// --- Scroll Animations ---
function setupScrollObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    // Start Scroll Animations immediately (critical for visibility)
    setupScrollObserver();

    // Try to start the particle background
    try {
        if (typeof THREE !== 'undefined') {
            init();
        } else {
            console.warn('Three.js not loaded, skipping background animation.');
        }
    } catch (e) {
        console.error('Failed to initialize particle background:', e);
    }

    // Initialize custom cursor - DISABLED
    // initCustomCursor();
});

// --- Custom Cursor ---
function initCustomCursor() {
    // Only on desktop
    if (window.innerWidth <= 768) return;

    // Create cursor elements
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const cursorDot = document.createElement('div');
    cursorDot.className = 'custom-cursor-dot';
    document.body.appendChild(cursorDot);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Smooth cursor follow
    function animateCursor() {
        // Smooth following with easing
        cursorX += (mouseX - cursorX) * 0.15;
        cursorY += (mouseY - cursorY) * 0.15;
        dotX += (mouseX - dotX) * 0.25;
        dotY += (mouseY - dotY) * 0.25;

        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, .btn, .glass-card, .info-item');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursor.style.backgroundColor = 'rgba(207, 174, 157, 0.2)';
        });
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.backgroundColor = 'transparent';
        });
    });
}


