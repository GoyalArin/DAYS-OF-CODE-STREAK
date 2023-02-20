var config={
    type:Phaser.AUTO,
    width: 1400,
    height: 800,
    backgroundColor: 0x000000,
    scene:[Anim1,Anim2,Anim3,Anim4,Anim5,Anim6],
    physics: {
        default: "arcade",
    },
};
var game = new Phaser.Game(config);