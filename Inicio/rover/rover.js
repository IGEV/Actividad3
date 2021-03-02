/**
Ejemplo extraido de Learning ThreeJs de Jos Kirsten
*/
var scene, renderer, camera;
var controls;
var step;
var cube;
var rueda1,rueda2,rueda3,rueda4,rueda5,rueda6;
function init() {
    // Escena 
    scene = new THREE.Scene();

    //Camara
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    //Render
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);

    //Posiciona la luz encima del rober
    const light = new THREE.DirectionalLight();
    light.position.set(0,10,2);
    scene.add(light);

    //Posicionar y apuntar la cámara 
    camera.position.x = 10;
    camera.position.y = 10;
    camera.position.z = 30;
    camera.lookAt(scene.position);

    //Nodo general del que cuelgan el cuerpo y los nodos para los lados del cuerpo
    const general = new THREE.Object3D();
    scene.add(general);


    //Cuerpo del rober
    var cubeGeometry  = new THREE.BoxGeometry(16, 12, 40); 
    var cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xFF0000
    });
    cube  = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.castShadow = true;


    //posicion del cuerpo del rober
    cube.position.x = 0;
    cube.position.y = 0;
    cube.position.z = 15;

    // añade el cuerpo al nodo padre
    general.add(cube);

    //nodo de ruedas del lado izquierdo del rober
    //se añade al nodo padre en el mismo nivel al cuerpo
    const ruedasIzdas = new THREE.Object3D();
    ruedasIzdas.position.x = 10;
    general.add(ruedasIzdas);

    
    //nodo de ruedas del lado derecho del rober
    //se añade al nodo padre en el mismo nivel al cuerpo
    const ruedasDcha = new THREE.Object3D();
    ruedasDcha.position.x = -10;
    general.add(ruedasDcha);


    // esfera para las ruedas
    var sphereGeometry = new THREE.SphereGeometry(6, 6, 6);
    var sphereMaterial = new THREE.MeshLambertMaterial({
        color: 0x7777ff
    });
    //creacion de las ruedas
    var sphere1 = new THREE.Mesh(sphereGeometry, sphereMaterial);
    var sphere2 = new THREE.Mesh(sphereGeometry, sphereMaterial);
    var sphere3 = new THREE.Mesh(sphereGeometry, sphereMaterial);
    var sphere4 = new THREE.Mesh(sphereGeometry, sphereMaterial);
    var sphere5 = new THREE.Mesh(sphereGeometry, sphereMaterial);
    var sphere6 = new THREE.Mesh(sphereGeometry, sphereMaterial);

    // posicionar las ruedas
    sphere1.position.set(5,0,0);
    sphere2.position.set(5,0,12);
    sphere3.position.set(5,0,24);

    sphere4.position.set(-5,0,0);
    sphere5.position.set(-5,0,12);
    sphere6.position.set(-5,0,24);

    // añade la mitad de las ruedas al lado izdo y la otra
    //mitad al dcho.
    ruedasIzdas.add(sphere1);
    ruedasIzdas.add(sphere2);
    ruedasIzdas.add(sphere3);

    ruedasDcha.add(sphere4);
    ruedasDcha.add(sphere5);
    ruedasDcha.add(sphere6);
 
    // add the output of the renderer to the html element
    document.getElementById("contenedor").appendChild(renderer.domElement);
    //controles
    createControls();

  // call the render function
   renderer.render(scene, camera);
}


function createControls() {

    controls = new THREE.TrackballControls( camera, renderer.domElement );

    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;

    controls.keys = [ 65, 83, 68 ];

 }
 
function animate() {

   requestAnimationFrame( animate );
   controls.update();
   render();

 }
function render() {
 renderer.render(scene, camera);}
 
