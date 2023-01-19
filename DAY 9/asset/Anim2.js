class Anim2 extends Phaser.Scene{
    constructor(){
        super("Anim2");
    }

    preload(){

        this.load.image('bk','assets/Background_2.png');
        this.load.image('yellow','assets/yellow.jpg');
        this.load.image('red','assets/red.jpg');
        this.load.image('blue','assets/blue.png');
        this.load.image('green','assets/green.png');
        this.load.image('logo','assets/Logo.png');
    }

    create(){

        this.add.image(500,400,'bk');
        this.yellow=this.physics.add.image(400,0,'yellow').setScale(0.3); 
        this.yellow.setVelocityY(100);

        this.red=this.physics.add.image(1025,800,'red').setScale(0.3); 
        this.red.setVelocityY(-100);

        this.blue=this.physics.add.image(10,300,'blue').setScale(0.3);
        this.blue.setVelocityX(100); 

        this.green=this.physics.add.image(1496,500,'green').setScale(0.3);
        this.green.setVelocityX(-100); 
        this.add.image(1300,100,'logo').setScale(1);
    }
    update(){
        if(Math.floor(this.blue.x)>=900){
            this.blue.setVelocityX(0);
        }
        if(Math.floor(this.green.x)<=500){
            this.green.setVelocityX(0);
        }
        if(Math.floor(this.yellow.y)>=100){
            this.yellow.setVelocityY(0);
        }
        if(Math.floor(this.red.y)<=700){
            this.red.setVelocityY(0);
        }
        if(Math.floor(this.blue.x)>=900 && Math.floor(this.green.x)<=500 && 
            Math.floor(this.red.y)<=700 && Math.floor(this.yellow.y)>=100){
            this.scene.switch('Anim4');
        }
    }
   
}