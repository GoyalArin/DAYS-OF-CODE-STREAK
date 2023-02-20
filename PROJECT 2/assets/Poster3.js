class Poster3 extends Phaser.Scene
{
    constructor()
    {
        super('Poster3');
    }
    preload()
    {
        this.load.image('piece122','assets/Poster-03/piece1.jpg');
        this.load.image('piece222','assets/Poster-03/piece2.jpg');
        this.load.image('piece322','assets/Poster-03/piece3.jpg');
        this.load.image('piece422','assets/Poster-03/piece4.jpg');
        this.load.image('piece522','assets/Poster-03/piece5.jpg');
        this.load.image('piece622','assets/Poster-03/piece6.jpg');
        this.load.image('piece722','assets/Poster-03/piece7.jpg');
        this.load.image('piece822','assets/Poster-03/piece8.jpg');
        this.load.image('piece922','assets/Poster-03/piece9.jpg');
        this.load.image('piece1022','assets/Poster-03/piece10.jpg');
        this.load.image('piece1122','assets/Poster-03/piece11.jpg');
        this.load.image('piece1222','assets/Poster-03/piece12.jpg');
        this.load.image('preview3','assets/Poster-03/preview3.png');
        this.load.image('trigger','assets/trigger.png');
        this.load.image('bk','assets/Background_2.png');
    }

    create()
    {
        pc=3;
        p=0;
        pieceManager=[];
        triggerManager=[];
        this.add.image(700,400,'bk');
        this.add.image(200,650,'preview3').setScale(0.2);
        for (var i = 0; i < 12; i++) {
            var piece = this.add.sprite(90 + (i * 100), 90, 'piece'+(i+1)+'22').setScale(0.4);
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
                pieceManager[i].setInteractable=false;
                triggerManager[i].setAlpha(0);
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