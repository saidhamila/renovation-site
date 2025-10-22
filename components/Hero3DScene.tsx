"use client"

import React, { useRef, useEffect } from "react"
import * as THREE from "three"

export function Hero3DScene() {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const meshesRef = useRef<Array<{
    mesh: THREE.Mesh
    rotationSpeed: { x: number; y: number; z: number }
    floatSpeed: number
    floatOffset: number
  }>>([])

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    )
    camera.position.set(0, 0, 8)
    cameraRef.current = camera

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Create floating geometric shapes
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.SphereGeometry(0.8, 32, 32),
      new THREE.ConeGeometry(0.8, 1.5, 8),
      new THREE.CylinderGeometry(0.5, 0.8, 1.2, 8),
      new THREE.OctahedronGeometry(0.9)
    ]

    const materials = [
      new THREE.MeshPhongMaterial({ color: 0x0891b2, transparent: true, opacity: 0.8 }),
      new THREE.MeshPhongMaterial({ color: 0x06b6d4, transparent: true, opacity: 0.7 }),
      new THREE.MeshPhongMaterial({ color: 0x0284c7, transparent: true, opacity: 0.6 }),
      new THREE.MeshPhongMaterial({ color: 0x0ea5e9, transparent: true, opacity: 0.8 }),
      new THREE.MeshPhongMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.7 })
    ]

    // Create meshes
    for (let i = 0; i < 8; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)]
      const material = materials[Math.floor(Math.random() * materials.length)]
      const mesh = new THREE.Mesh(geometry, material)
      
      // Random positioning
      mesh.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10
      )
      
      // Random rotation
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      )
      
      // Random scale
      const scale = 0.5 + Math.random() * 1.5
      mesh.scale.setScalar(scale)
      
      scene.add(mesh)
      meshesRef.current.push({
        mesh,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        },
        floatSpeed: 0.5 + Math.random() * 1.5,
        floatOffset: Math.random() * Math.PI * 2
      })
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)
    
    const directionalLight1 = new THREE.DirectionalLight(0x0891b2, 0.8)
    directionalLight1.position.set(5, 5, 5)
    scene.add(directionalLight1)
    
    const directionalLight2 = new THREE.DirectionalLight(0x06b6d4, 0.4)
    directionalLight2.position.set(-5, -3, 2)
    scene.add(directionalLight2)

    // Animation
    let time = 0
    const animate = () => {
      requestAnimationFrame(animate)
      time += 0.01

      meshesRef.current.forEach((item) => {
        const { mesh, rotationSpeed, floatSpeed, floatOffset } = item
        
        // Rotation
        mesh.rotation.x += rotationSpeed.x
        mesh.rotation.y += rotationSpeed.y
        mesh.rotation.z += rotationSpeed.z
        
        // Floating motion
        mesh.position.y += Math.sin(time * floatSpeed + floatOffset) * 0.005
      })

      // Camera movement
      camera.position.x = Math.sin(time * 0.2) * 2
      camera.position.y = Math.cos(time * 0.15) * 1

      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current || !camera || !renderer) return
      
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (mountRef.current && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement)
      }
      
      // Cleanup
      meshesRef.current.forEach(item => {
        if (item.mesh.geometry) item.mesh.geometry.dispose()
        if (item.mesh.material) {
          if (Array.isArray(item.mesh.material)) {
            item.mesh.material.forEach(mat => mat.dispose())
          } else {
            item.mesh.material.dispose()
          }
        }
      })
      
      if (renderer) renderer.dispose()
    }
  }, [])

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 w-full h-full"
      style={{ minHeight: '600px' }}
    />
  )
}
