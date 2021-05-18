var covid;
var pinkBush;
var gaming;
var batterySaver, form, player;
function setup(){
createCanvas(displayWidth,displayHeight)
covid=firebase.database();
batterySaver=new Game();
batterySaver.getGameState();
console.log(gaming);
setTimeout(batterySaver.startGame(), 10000);
//batterySaver.startGame();


}
function draw(){
if(pinkBush===3){
batterySaver.updateGameState(2);

}


}