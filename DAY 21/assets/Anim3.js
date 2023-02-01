class Anim3 extends Phaser.Scene{
    constructor(){
        super("Anim3");
    }
    preload(){
        this.load.image('bk','assets/Background_2.png');
    }
    create(){
        this.add.image(500,400,'bk');
        this.spring1=false;
        this.mainText=this.add.text(100, 50, 'Why Should we Educate Girls?', { fontSize: '48px', fill: '#DF9B00'});
        this.benifit1=this.add.text(300,-30,'-> National growth rates rise',{ fontSize: '32px', fill: '#DF9B00' });
        this.physics.world.enableBody(this.benifit1);
        this.benifit2=this.add.text(500,-30,'-> Child marriage rates decline',{ fontSize: '32px', fill: '#DF9B00'});
        this.physics.world.enableBody(this.benifit2);
        this.benifit3=this.add.text(200,-30,'-> The lifetime earnings of girls dramatically increase',{ fontSize: '32px', fill: '#DF9B00'});
        this.physics.world.enableBody(this.benifit3);
        this.benifit4=this.add.text(400,-30,'-> Child stunting drops',{ fontSize: '32px', fill: '#DF9B00'});
        this.physics.world.enableBody(this.benifit4);
        this.benifitFirst();
    }
    update(){
        if(Math.floor(this.benifit1.body.y)>200){
            this.benifit1.body.setVelocityY(-150);
            this.spring1=true;
        }
        if(Math.floor(this.benifit1.body.y)<160 && this.spring1==true){
            this.benifit1.body.setVelocityY(0);
            this.benifitSecond();
        }

        if(Math.floor(this.benifit2.body.y)>400){
            this.benifit2.body.setVelocityX(150);
        }
        if(Math.floor(this.benifit2.body.y)>700){
            this.benifit2.body.setVelocityY(0);
            this.benifit2.body.setVelocityX(0);
            this.benifitThird();
        }

        if(Math.floor(this.benifit3.body.y)>400){
            this.benifit3.body.setVelocityX(-200);
        }
        if(Math.floor(this.benifit3.body.y)>550){
            this.benifit3.body.setVelocityY(0);
            this.benifit3.body.setVelocityX(0);
            this.benifitFourth();
        }

        if(Math.floor(this.benifit4.body.y)>250){
            this.benifit4.body.setVelocityX(150);
        }
        if(Math.floor(this.benifit4.body.y)>350){
            this.benifit4.body.setVelocityY(0);
            this.benifit4.body.setVelocityX(0);
            this.time.addEvent({
                delay: 2000,
                callback: ()=> {this.scene.switch('Anim4')},
                callbackScope: this,
                loop: false
            }); 
        }
    }
    benifitFirst(){
        this.benifit1.body.setVelocityY(300);
    }
    benifitSecond(){
        this.benifit2.body.setVelocityY(300);
    }
    benifitThird(){
        this.benifit3.body.setVelocityY(300);
    }
    benifitFourth(){
        this.benifit4.body.setVelocityY(300);
    }
}