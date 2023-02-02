class Poster1 extends Phaser.Scene
{
    constructor()
    {
        super('Poster1');
    }
    preload()
    {
        this.load.image('piece1','assets/Poster-01/piece1.jpeg');
        this.load.image('piece2','assets/Poster-01/piece2.jpeg');
        this.load.image('piece3','assets/Poster-01/piece3.jpeg');
        this.load.image('piece4','assets/Poster-01/piece4.jpeg');
        this.load.image('piece5','assets/Poster-01/piece5.jpeg');
        this.load.image('piece6','assets/Poster-01/piece6.jpeg');
        this.load.image('piece7','assets/Poster-01/piece7.jpeg');
        this.load.image('piece8','assets/Poster-01/piece8.jpeg');
        this.load.image('piece9','assets/Poster-01/piece9.jpeg');
        this.load.image('piece10','assets/Poster-01/piece10.jpeg');
        this.load.image('piece11','assets/Poster-01/piece11.jpeg');
        this.load.image('piece12','assets/Poster-01/piece12.jpeg');
        this.load.image('preview1','assets/Poster-01/preview1.png');
        this.load.image('trigger','assets/trigger.png');
        this.load.image('bk','assets/Background_2.png');
        this.load.audio('bgm','assets/background.mp3');
    }
    create()
    {
        pc=1;
        bgm=this.sound.add('bgm');
        bgm.setLoop(true);
        bgm.play();
        p=0;
        this.add.image(700,400,'bk');
        this.add.image(200,650,'preview1').setScale(0.2);
        for (var i = 0; i < 12; i++) {
            var piece = this.add.sprite(90 + (i * 100), 90, 'piece'+(i+1)).setScale(0.4);
            piece.setName('piece'+(i+1));
            pieceManager.push(piece);
        }  
        for (var i = 0; i < pieceManager.length; i++) {
            pieceManager[i].setInteractive();
            this.input.setDraggable(pieceManager[i]);
            this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
                gameObject.x = dragX;
                gameObject.y = dragY;
            });
        }
        var p=1;
        for(var i=0;i<4;i++){
            for(var j=0;j<3;j++){
                this.trigger=this.add.sprite(660+(i*160),290+(j*160),'trigger').setAlpha(0.5);
                this.trigger.name='piece'+p;
                triggerManager.push(this.trigger);
                p++;
            }
        }
    }
    update()
    {
        var pck=0;
        for(var i=0;i<12;i++){
            if(this.checkOverlap(triggerManager[i],pieceManager[i])){
                pieceManager[i].x=triggerManager[i].x;
                pieceManager[i].y=triggerManager[i].y;
                triggerManager[i].setAlpha(0);
                pieceManager[i].setInteractable=false;
                pck++;
            }
        }
        if(pck==12){
            this.time.addEvent({
                delay: 2000,
                callback: ()=> {this.scene.switch('congrats');},
                callbackScope: this,
                loop: false
            }); 
        }
    }
    checkOverlap(spriteA, spriteB) {

        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
    
        return Phaser.Geom.Intersects.RectangleToRectangle(boundsB, boundsA);
    }
}