var class_text = document.getElementById("class-description");
var class_link = document.getElementById("class-link");
var canvas = document.getElementById("gl-canvas");
var class_background = document.getElementById("class-description-background");
var ctx = canvas.getContext('2d');

var cloud = "CSE546 Cloud Computing covered a wide range of topics related to cloud computing. These topics included: AWS EC2, AWS S3, AWS SQS, AWS Lambda, storage virtualization, network virtualization, and file system virtualization.";
var networks = "CSE434 Computer Networks covered the basics of how networks are made through routing, LANS, packets, and TCP/UDP network protocols.";
var data_mining = "CSE572 Data Mining covered different machine learning models and the different ways we can preprocess data to deal with impurities and create better predictive algorithms.";
var hci = "CSE463 Intro Human Computer Interaction covered the different ways human interact with computers from physical inputs like a keyboard and mouse, visual interactions like UI design, and ease of use through accessibility features and ideas like Fitts' Law."
var mobile = "CSE535 Mobile Computing covered app development on mobile devices. The projects introduced us to Android app creation on Android Studio. The concepts of the class brought up limitations such as energy, computation power, and security, how to combat these limitations with ideas like fog/cloud/swarm computing, and how mobile devices communicate and connect to cell towers.";
var os = "CSE330 Operating Systems covered how operating systems handle dividing resources among multiple applications, how memory is separated, and other basic functions of operating systems.";
var data_structures = "CSE310 Data Structures and Algorithms covered the concepts behind different data structures and algorithms. For example, we covered different types of trees like red-black trees and multiple sorting algorithms like quick sort, selection sort, and merge sort to compare time complexities among each algorithm.";
var distributed_software = "CSE445 Distributed Software Development covered multithreaded programming, web and desktop app development, and event-driven programming."
var machine_learning = "CSE475 Foundations of Machine Learning covered different machine learning models and how they're predictive algorithms work."
var krr = "CSE579 Knowledge Representation and Reasoning will cover representation and reasoning algorithms in AI (I am taking this Spring 2025)."
var blockchain = "CSE598 Topic: Engineering Blockchain Applications will cover things like blockchain's abstractions, hash functions, transactions, and more (I am taking this Spring 2025)."
var quantum = "CSE598 Topic: Quantum Computation will cover the basics of quantum computing, quantum states, quantum algorithms, and more (I am taking this Spring 2025)."

var onGame = false;
var player = { x: 0, y: canvas.height / 2 - 25, width: 40, height: 30, color: 'blue' };
var gravity = 0;
var speed = .2;
var started = false;
let animId = null;
var score = 0;
var obstacles = [{x: canvas.width - 12, y: 0, width: 12, height: canvas.height / 2 - 30}, {x: canvas.width - 12, y: canvas.height / 2 + 30, width: 12, height: canvas.height / 2}];
var keys = {};
window.addEventListener("keydown", (event) => {
    keys[event.key] = true; // Mark the key as pressed
    if(event.key == " " && onGame){
        event.preventDefault();
    }
});
window.addEventListener("keyup", (event) => {
    keys[event.key] = false; // Mark the key as released
});

canvas.addEventListener("click", (event) => {
    // Get the mouse position relative to the canvas
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
  
    console.log(`Mouse Clicked at: (${x}, ${y})`);
  
    // Example: Draw a circle where the user clicks
    if(x > 173 && x < 256 && y < 214 && y > 153 && started == false){
        started = true;
    }

    if(x > 186 && x < 370 && y > 373 && y < 406){
        window.open('https://catalog.apps.asu.edu/catalog/courses/courselist?catalogNbr=470&subject=CSE&term=2241', '_blank');
    }
});

function cloud_handler(event){
    event.preventDefault();
    onGame = false;
    canvas.style.display = "none";
    class_background.style.display = "inline";
    class_text.textContent = cloud;
    class_link.textContent = "Click here to learn more";
    class_link.setAttribute("href", "https://catalog.apps.asu.edu/catalog/courses/courselist?catalogNbr=546&subject=CSE&term=2247");
    class_link.setAttribute("target", "_blank");
}

function graphics_handler(event){
    event.preventDefault();
    onGame = true;
    canvas.style.display = "inline";
    class_background.style.display = "none";
    create_graphic();
}

function network_handler(event){
    event.preventDefault();
    onGame = false;
    canvas.style.display = "none";
    class_background.style.display = "inline";
    class_text.textContent = networks;
    class_link.textContent = "Click here to learn more";
    class_link.setAttribute("href", "https://catalog.apps.asu.edu/catalog/courses/courselist?catalogNbr=434&subject=CSE&term=2237");
    class_link.setAttribute("target", "_blank");
}

function hci_handler(event){
    event.preventDefault();
    onGame = false;
    canvas.style.display = "none";
    class_background.style.display = "inline";
    class_text.textContent = hci;
    class_link.textContent = "Click here to learn more";
    class_link.setAttribute("href", "https://catalog.apps.asu.edu/catalog/courses/courselist?catalogNbr=463&subject=CSE&term=2237");
    class_link.setAttribute("target", "_blank");
}

function mobile_handler(event){
    event.preventDefault();
    onGame = false;
    canvas.style.display = "none";
    class_background.style.display = "inline";
    class_text.textContent = mobile;
    class_link.textContent = "Click here to learn more";
    class_link.setAttribute("href", "https://catalog.apps.asu.edu/catalog/courses/courselist?catalogNbr=535&subject=CSE&term=2247");
    class_link.setAttribute("target", "_blank");
}

function data_mining_handler(event){
    event.preventDefault();
    onGame = false;
    canvas.style.display = "none";
    class_background.style.display = "inline";
    class_text.textContent = data_mining;
    class_link.textContent = "Click here to learn more";
    class_link.setAttribute("href", "https://catalog.apps.asu.edu/catalog/courses/courselist?catalogNbr=572&subject=CSE&term=2241");
    class_link.setAttribute("target", "_blank");
}

function os_handler(event){
    event.preventDefault();
    onGame = false;
    canvas.style.display = "none";
    class_background.style.display = "inline";
    class_text.textContent = os;
    class_link.textContent = "Click here to learn more";
    class_link.setAttribute("href", "https://catalog.apps.asu.edu/catalog/courses/courselist?catalogNbr=330&subject=CSE&term=2231");
    class_link.setAttribute("target", "_blank");
}

function data_structures_handler(event){
    event.preventDefault();
    onGame = false;
    canvas.style.display = "none";
    class_background.style.display = "inline";
    class_text.textContent = data_structures;
    class_link.textContent = "Click here to learn more";
    class_link.setAttribute("href", "https://catalog.apps.asu.edu/catalog/courses/courselist?catalogNbr=310&subject=CSE&term=2227");
    class_link.setAttribute("target", "_blank");
}

function distributed_software_handler(event){
    event.preventDefault();
    onGame = false;
    canvas.style.display = "none";
    class_background.style.display = "inline";
    class_text.textContent = distributed_software;
    class_link.textContent = "Click here to learn more";
    class_link.setAttribute("href", "https://catalog.apps.asu.edu/catalog/courses/courselist?catalogNbr=445&subject=CSE&term=2244");
    class_link.setAttribute("target", "_blank");
}

function machine_learning_handler(event){
    event.preventDefault();
    onGame = false;
    canvas.style.display = "none";
    class_background.style.display = "inline";
    class_text.textContent = machine_learning;
    class_link.textContent = "Click here to learn more";
    class_link.setAttribute("href", "https://catalog.apps.asu.edu/catalog/courses/courselist?catalogNbr=475&subject=CSE&term=2241");
    class_link.setAttribute("target", "_blank");
}

function krr_handler(event){
    event.preventDefault();
    onGame = false;
    canvas.style.display = "none";
    class_background.style.display = "inline";
    class_text.textContent = krr;
    class_link.textContent = "Click here to learn more";
    class_link.setAttribute("href", "https://catalog.apps.asu.edu/catalog/courses/courselist?catalogNbr=579&subject=CSE&term=2251");
    class_link.setAttribute("target", "_blank");
}

function blockchain_handler(event){
    event.preventDefault();
    onGame = false;
    canvas.style.display = "none";
    class_background.style.display = "inline";
    class_text.textContent = blockchain;
    class_link.textContent = "Click here to learn more";
    class_link.setAttribute("href", "https://catalog.apps.asu.edu/catalog/courses/courselist?catalogNbr=598&subject=CSE&term=2251");
    class_link.setAttribute("target", "_blank");
}

function quantum_handler(event){
    event.preventDefault();
    onGame = false;
    canvas.style.display = "none";
    class_background.style.display = "inline";
    class_text.textContent = quantum;
    class_link.textContent = "Click here to learn more";
    class_link.setAttribute("href", "https://catalog.apps.asu.edu/catalog/courses/courselist?catalogNbr=598&subject=CSE&term=2251");
    class_link.setAttribute("target", "_blank");
}

function create_graphic(){
    if (animId) {
        cancelAnimationFrame(animId);
        animId = null; // Clear the previous animation ID
    }

    resetGame(); // Reset game variables
    onGame = true;

    function gameLoop() {
        if (!onGame) {
            cancelAnimationFrame(animId); // Stop the loop if onGame is false
            return;
        }
        update(); // Update game state
        render(); // Render to the canvas
        animId = requestAnimationFrame(gameLoop); // Schedule next frame
    }

    gameLoop(); // Start the game loop
}

function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    if(started){
        if(keys[" "]){
            if(gravity > -.2){
                gravity = -.2;
            }
            else if(gravity > -.7){
                gravity -= .05;
            }
        }
        else{
            gravity += .01;
        }
        if(player.y + player.height - 3 < canvas.height){
            player.y = player.y + gravity;
        }
        else{
            resetGame();
        }

        if(player.y + 3 < obstacles[0].y + obstacles[0].height && player.x + player.width - 5 > obstacles[0].x){
            resetGame();
        }
        else if(player.y + player.height - 3 > obstacles[1].y && player.x + player.width - 5 > obstacles[1].x){
            resetGame();
        }

        for(var i = 0; i < obstacles.length; i++){
            obstacles[i].x -= speed;
        }
        obstacles = obstacles.filter(obstacle => obstacle.x + 12 > 0);
        if(obstacles.length < 10){
            score += 1;
            var height = Math.random() * (canvas.height - 60);
            obstacles.push({x: obstacles[obstacles.length - 1].x + (canvas.width / 3), y: 0, width: 12, height: height});
            obstacles.push({x: obstacles[obstacles.length - 1].x, y: obstacles[obstacles.length - 1].height + 60, width: 12, height: canvas.height});
        }
    }
}

function resetGame() {
    started = false;
    score = 0;
    gravity = 0;
    player = { x: 0, y: canvas.height / 2 - 25, width: 40, height: 30, color: 'blue' };
    obstacles = [{x: canvas.width - 12, y: 0, width: 12, height: canvas.height / 2 - 30}, {x: canvas.width - 12, y: canvas.height / 2 + 30, width: 12, height: canvas.height / 2}];
    for(var i = obstacles.length; obstacles.length < 10; i += 2){
        var height = Math.random() * (canvas.height - 60);
        obstacles.push({x: obstacles[obstacles.length - 1].x + (canvas.width / 3), y: 0, width: 12, height: height});
        obstacles.push({x: obstacles[obstacles.length - 1].x, y: obstacles[obstacles.length - 1].height + 60, width: 12, height: canvas.height});
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if(!started){
        // make start button
        ctx.fillStyle = 'grey';
        ctx.fillRect(canvas.width / 2 - 30, canvas.height / 2 - 20, 60, 20);

        // make start text
        ctx.font = "16px sans-serif"; // Font size and family
        ctx.fillStyle = "black";  // Text color
        ctx.textAlign = "left"; // Align text horizontally
        ctx.textBaseline = "top"; // Align text vertically
        ctx.fillText('Start', canvas.width / 2 - 20, canvas.height / 2 - 15, 50)
    }
    // Draw player
    const playerSprite = new Image();
    playerSprite.src = 'player-sprite.png';
    ctx.drawImage(playerSprite, player.x, player.y, player.width, player.height);

    // Draw obstacle
    ctx.fillStyle = 'green';
    for(var i = 0; i < obstacles.length; i++){
        ctx.fillRect(obstacles[i].x, obstacles[i].y, obstacles[i].width, obstacles[i].height);
    }

    ctx.fillStyle = "black";
    ctx.fillText("Score: " + score.toString(), 0, canvas.height - 16, 50);
    ctx.fillText("Flappy Zak", canvas.width / 2 - 65, 0, 130);
    ctx.fillStyle = "blue";
    ctx.fillText("Click here to learn more", canvas.width / 2 - 65, canvas.height - 16, 130);
}