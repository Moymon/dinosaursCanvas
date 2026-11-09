/*Se crea la escena*/

/**Text*/
let dinosarus = [
    {
        name:'Tyrannosaurus Rex',
        period: 'Cretaceous',
        class: 'Sauropsida',
    },
];

let name = '', 
    bevelEnable = true, 
    font = undefined, 
    fontName = 'optimer',
    fontWeight = 'bold';
/**Characteristics deep*/
const depth = 20,
    size = 70,
    hover = 30,
    curveSegments = 4,
    beveLThickness =2,
    bevelSize = 1.5;


let object;
/**Scene */
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x00FF41); // Green color similar to matrix

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0,2,5);

const renderer = new THREE.WebGLRenderer({ antialias:true });
renderer.setSize(window.innerWidth/2, window.innerHeight/2);
document.body.appendChild(renderer.domElement);



const loader = new THREE.GLTFLoader();
/**Progress charge model */
loader.load(
    'models/dinosaur-trackway.glb',
    
    /**Model charge succefull */
    function(gltf){
        const model = gltf.scene;
        object = gltf.scene;
        model.position.set(0,0,0);
        model.scale.set(1,1,1);
        model.rotation.set(0,0,0);
        scene.add(model);

        console.log("Model loaded successfully");
    }, 
    undefined, 
    function(error){
        console.error("An error occurred while loading the model:", error);
    }
);




function animate(){
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

document.addEventListener('keydown',(event) =>{
    switch(event.key){
        /**Movimiento normal */
        case 'ArrowUp':
            object.position.z -= 0.1;
            break;
        case 'ArrowDown':
            object.position.z += 0.1;
            break; 
        case 'ArrowLeft':
            object.position.x -= 0.1;
            break;
        case 'ArrowRight':
            object.position.x += 0.1;
            break;

        /*Rotacion*/
        case 'w':
            object.rotation.x -= 0.1;
            break;
        case 's':
            object.rotation.x += 0.1;
            break; 
        case 'a':
            object.rotation.z += 0.1;
            break;
        case 'd':
            object.rotation.z -= 0.1;
            break;
    }
});