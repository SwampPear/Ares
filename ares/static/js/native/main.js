import * as THREE from 'three';


document.addEventListener('DOMContentLoaded', () => {
  // setup
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )

  const renderer = new THREE.WebGLRenderer()
  renderer.setSize( window.innerWidth, window.innerHeight )

  const RENDER = document.querySelector( '.render' )
  RENDER.appendChild( renderer.domElement )


  const geometry = new THREE.BoxGeometry( 1, 1, 1 )
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } )
  const cube = new THREE.Mesh( geometry, material )
  scene.add( cube )

  camera.position.z = 5


  // animation
  const animate = () => {
    requestAnimationFrame( animate )
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render( scene, camera )
  }
  animate()


  // loading screen
  const LOADING_CONTAINER = document.querySelector( '.render__loading__container' )
  const LOADING_ELLIPSIS_1 = document.querySelector( '.render__loading__ellipsis1' )
  const LOADING_ELLIPSIS_2 = document.querySelector( '.render__loading__ellipsis2' )
  const LOADING_ELLIPSIS_3 = document.querySelector( '.render__loading__ellipsis3' )

  LOADING_CONTAINER.addEventListener('animationend', () => {
    LOADING_ELLIPSIS_1.classList.add( 'render__loading__ellipsis1__anim' )
    LOADING_ELLIPSIS_2.classList.add( 'render__loading__ellipsis2__anim' )
    LOADING_ELLIPSIS_3.classList.add( 'render__loading__ellipsis3__anim' )
  })



})