class Anim6 extends Phaser.Scene{
    constructor(){
        super("Anim6")
    }
    preload(){
        this.load.image('help','assets/help.jpeg');
    }
    create(){
        this.add.image(700,400,'help');
    }
}