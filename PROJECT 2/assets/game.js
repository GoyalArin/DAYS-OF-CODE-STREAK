var config={
  type:Phaser.AUTO,
  width: 1400,
  height: 800,
  physics: {
      default: "arcade",
      arcade: {
          debug: false
      }
  },
  scene:[start,congrats,Menu,Poster1,Poster2,Poster3],
};

var pieceManager=[];
var triggerManager=[];
var p=0;
var pc=0;
var bgm;
var game = new Phaser.Game(config);