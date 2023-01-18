class Anim5 extends Phaser.Scene{
    constructor(){
        super("Anim5")
    }
    preload(){
        this.load.image('Girl','assets/WingGirl.png')
        this.load.image('bk','assets/Background_2.png');
    }
    create(){
        this.add.image(500,400,'bk');
        this.Girl=this.physics.add.image(0,200,'Girl').setScale(0.5); 
        this.Girl.setVelocityX(200);

        this.add.text(60, 400, '"Never cut the wings of women,\n      let them fly and spread \n            the fragrance."', {
			fontFamily: 'cursive',
			fontSize: '100px',
			color: 'black',
		})
    }
}