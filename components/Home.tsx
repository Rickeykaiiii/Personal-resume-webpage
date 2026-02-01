
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Home: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    
    const camera = new THREE.PerspectiveCamera(35, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const vertexShader = `
      varying vec2 vUv;
      varying float vElevation;
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      uniform float uTime;
      uniform vec2 uMouse;

      void main() {
        vUv = uv;
        vNormal = normalize(normalMatrix * normal);
        
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewPosition = -mvPosition.xyz;
        vec4 projectedPos = projectionMatrix * mvPosition;
        vec2 screenPos = projectedPos.xy / projectedPos.w;
        
        float dist = distance(screenPos, uMouse);
        float influence = 1.0 - smoothstep(0.0, 0.7, dist);
        float diagonal = (position.x - position.y) * 1.8;
        float waveFreq = 12.0; 
        
        float phaseShift = influence * 3.5 * sin(uTime * 1.5);
        float localFreqDistortion = influence * 5.0;
        
        float wave = sin(diagonal * (waveFreq + localFreqDistortion) + uTime * 1.2 + phaseShift) * 0.06;
        float subWave = sin(diagonal * waveFreq * 2.0 - uTime * 0.6 + influence * 2.0) * 0.015;
        wave += subWave;

        float mousePush = influence * 0.15;
        float elevation = wave + mousePush;
        vec3 newPosition = position + normal * elevation;
        
        vElevation = elevation;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
      }
    `;

    const fragmentShader = `
      varying vec2 vUv;
      varying float vElevation;
      varying vec3 vNormal;
      varying vec3 vViewPosition;
      uniform float uTime;

      void main() {
        vec3 kleinBlue = vec3(0.0, 0.184, 0.655); 
        vec3 deepBlueShadow = vec3(0.0, 0.02, 0.1); 
        vec3 vibrantBlue = vec3(0.05, 0.25, 0.8);   
        vec3 softBlueGloss = vec3(0.3, 0.5, 1.0);

        float peak = smoothstep(-0.08, 0.12, vElevation);
        
        vec3 colorBase = mix(deepBlueShadow, kleinBlue, peak);
        vec3 finalBase = mix(colorBase, vibrantBlue, pow(peak, 2.0));
        finalBase = mix(finalBase, softBlueGloss, smoothstep(0.12, 0.3, vElevation) * 0.1);

        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewPosition);
        
        float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 4.0);
        float NdotL = max(dot(normal, vec3(0.0, 0.0, 1.0)), 0.0);
        float shadow = smoothstep(-0.2, 0.6, NdotL);

        vec3 color = finalBase;
        color += fresnel * 0.2 * kleinBlue; 
        color *= shadow;

        gl_FragColor = vec4(color, 1.0);
      }
    `;

    const geometry = new THREE.SphereGeometry(1.7, 512, 512);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) }
      },
      transparent: true
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const mouse = new THREE.Vector2(0, 0);
    const targetMouse = new THREE.Vector2(0, 0);

    const onMouseMove = (event: MouseEvent) => {
      targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    const clock = new THREE.Clock();
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      material.uniforms.uTime.value = elapsedTime;
      
      mouse.lerp(targetMouse, 0.08);
      material.uniforms.uMouse.value.copy(mouse);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <div ref={containerRef} className="absolute inset-0 z-0" />
    </div>
  );
};

export default Home;
