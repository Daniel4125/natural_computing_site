
// creating the scene

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, 200 / 200, 0.1, 1000 );


var container = document.getElementById('myCanvas'); 
var w = container.offsetWidth;
var h = container.offsetHeight;

// render in the canvas tags
var renderer = new THREE.WebGLRenderer({ canvas: myCanvas });
// to adjust width and height change width and height 
// setting in canvas tags in html file
renderer.setSize( w, h ); 
// document.body.appendChild( renderer.domElement );
 //document.getElementById("myCanvas").appendChild( renderer.domElement );


// new cube
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

// render the scene

function animate() {
	requestAnimationFrame( animate );
   renderer.render( scene, camera );
   
   // animationg the cube
   cube.rotation.x += 0.01;
   cube.rotation.y += 0.01;
}

animate();





