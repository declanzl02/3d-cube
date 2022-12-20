const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const cubeGeometry = new THREE.BoxGeometry( 1.5, 1.5, 1.5 );
const cubeMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff } );
const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );

const edgesGeometry = new THREE.EdgesGeometry(cubeGeometry);
const lineMaterial = new THREE.LineBasicMaterial({ 
    color: 0x000000,
    linewidth: 2
}); // Create a black line material
const edges = new THREE.LineSegments(edgesGeometry, lineMaterial);

scene.add( cube );
scene.add( edges );

camera.position.z = 5;


function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    edges.rotation.x += 0.01;
    edges.rotation.y += 0.01;
    renderer.render(scene, camera);
};

animate();