var canvas = new fabric.Canvas('canvas');

var player_x = 10;
var player_y = 10;

var block_width = 30;
var block_height = 30;

var playerObject = "";
var characterObject = "";

function playerUpdate(){
    fabric.Image.fromURL("player.png",function(Img){
        playerObject = Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top:player_y,
            left:player_x
        });
        canvas.add(playerObject);
    });
}

function blockUpdate(getImg){
    fabric.Image.fromURL(getImg,function(Img){
        characterObject = Img;
        characterObject.scaleToWidth(block_width);
        characterObject.scaleToHeight(block_height);
        characterObject.set({
            top:player_y,
            left:player_x
        });
        canvas.add(characterObject);
    });
}

window.addEventListener("keydown",keyPressed);
function keyPressed(e){
    keyPress = e.keyCode;
    console.log(keyPress);
    if(keyPress == '80' && e.shiftKey == true){
        if(block_width<100){
            block_width = block_width+10;
            block_height = block_height+10;
            document.getElementById("current_width").innerHTML = block_width;
            document.getElementById("current_height").innerHTML = block_height;
        }
    }
    if(keyPress == '77' && e.shiftKey == true){
        if(block_width>10){
            block_width = block_width-10;
            block_height = block_height-10;
            document.getElementById("current_width").innerHTML = block_width;
            document.getElementById("current_height").innerHTML = block_height;
        }
    }
    if(keyPress == '72'){
        blockUpdate("spiderman_face.png");
        console.log("h");
    }
    if(keyPress == '66'){
        blockUpdate("ironman_body.png");
        console.log("b");
    }
    if(keyPress == '76'){
        blockUpdate("spiderman_legs.png");
        console.log("l");
    }
    if(keyPress == '82'){
        blockUpdate("thor_right_hand.png");
        console.log("r");
    }
    if(keyPress == '87'){
        blockUpdate("hulk_left_hand.png");
        console.log("w");
    }
    if(keyPress == '38'){
        up();
    }
    if(keyPress == '40'){
        down();
    }
    if(keyPress == '37'){
        left();
    }
    if(keyPress == '39'){
        right();
    }
}

function up(){
    if(player_y>=0){
        player_y = player_y-block_height;
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function down(){
    if(player_y<=600){
        player_y = player_y+block_height;
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function left(){
    if(player_x>=0){
        player_x = player_x-block_width;
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function right(){
    if(player_y<=1000){
        player_x = player_x+block_width;
        canvas.remove(playerObject);
        playerUpdate();
    }
}