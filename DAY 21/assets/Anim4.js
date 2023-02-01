class Anim4 extends Phaser.Scene{
    constructor(){
        super("Anim4")
    }
    preload(){
        this.load.image('bk','assets/Background_2.png');
        this.load.image('girl','assets/Girl_education.png');
        this.load.image('logo','assets/Logo.png');
    }
    create(){
        this.add.image(500,400,'bk');
        this.mainText1=this.add.text(-1000, 20, 'Our Mission:', { fontSize: '48px', fill: '#DF9B00'});
        this.physics.world.enableBody(this.mainText1);
        this.point6=this.add.text(60, 100, 'We strives to Educate and Empower Women across the Globe. \n“TO BE THE CHANGE - by educating Women"\nThus, building a Nation with a strong rigid backbone who can further \nbuild a sustainable generation.',{
			fontFamily: 'cursive',
			fontSize: '32px',
			color: '#DF9B00',
		});
        
        this.mainText=this.add.text(-1000, 300, 'How You Can Help:', { fontSize: '48px', fill: '#DF9B00'});
        this.physics.world.enableBody(this.mainText);
        this.point1 = this.add.text(-1000, 400, '->  Education Help:- 10Rs', { fontSize: '32px', fill: '#DF9B00'});
        this.physics.world.enableBody(this.point1);
        this.point2 = this.add.text(-1000, 450, '->  Educating and Empowering Women:- 501Rs', { fontSize: '32px', fill: '#DF9B00'});
        this.physics.world.enableBody(this.point2);
        this.point3 = this.add.text(-1000, 500, '->  One Girl Child One Month Education Help:- 1100Rs', { fontSize: '32px', fill: '#DF9B00'});
        this.physics.world.enableBody(this.point3);
        this.point4 = this.add.text(-1000, 550, '->  One Girl Child Yearly Education Help:- 11000Rs', { fontSize: '32px', fill: '#DF9B00'});
        this.physics.world.enableBody(this.point4);
        this.point5 = this.add.text(-1000, 600, '->  Adoring a Girl Child:- Contact Us', { fontSize: '32px', fill: '#DF9B00'});
        this.physics.world.enableBody(this.point5);
        this.add.image(1200,600,'girl').setScale(0.15);
        this.add.image(1300,100,'logo').setScale(1);
        this.heading();
        this.heading1();
    }
    update(){
        if(Math.floor(this.mainText1.body.x)>=100){
            this.mainText1.body.setVelocityX(0);
            this.help1();
        }

        if(Math.floor(this.mainText.body.x)>=100){
            this.mainText.body.setVelocityX(0);
            this.help1();
        }
        if(Math.floor(this.point1.body.x)>=120){
            this.point1.body.setVelocityX(0);
            this.help2();
        }
        if(Math.floor(this.point2.body.x)>=120){
            this.point2.body.setVelocityX(0);
            this.help3();
        }
        if(Math.floor(this.point3.body.x)>=120){
            this.point3.body.setVelocityX(0);
            this.help4();
        }
        if(Math.floor(this.point4.body.x)>=120){
            this.point4.body.setVelocityX(0);
            this.help5();
        }
        if(Math.floor(this.point5.body.x)>=120){
            this.point5.body.setVelocityX(0);
            this.scene.switch('Anim5');
        }
        if(Math.floor(this.mainText.body.x)>=100 && Math.floor(this.point1.body.x)>=120 && 
            Math.floor(this.point2.body.x)>=120 && Math.floor(this.point3.body.x)>=120 && 
            Math.floor(this.point4.body.x)>=120 && Math.floor(this.point5.body.x)>=120){
            this.scene.switch('Anim5');
        }
    }
    heading1(){
        this.mainText1.body.setVelocityX(350);
    }

    heading(){
        this.mainText.body.setVelocityX(350);
    }
    help1(){
        this.point1.body.setVelocityX(250);
    }
    help2(){
        this.point2.body.setVelocityX(250);
    }
    help3(){
        this.point3.body.setVelocityX(250);
    }
    help4(){
        this.point4.body.setVelocityX(250);
    }
    help5(){
        this.point5.body.setVelocityX(250);
    }
}