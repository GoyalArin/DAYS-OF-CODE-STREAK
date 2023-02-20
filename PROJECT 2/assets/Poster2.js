class Poster2 extends Phaser.Scene
{
    constructor()
    {
        super('Poster2');
    }
    preload()
    {
        this.load.image('piece111','assets/Poster-02/piece1.jpg');
        this.load.image('piece211','assets/Poster-02/piece2.jpg');
        this.load.image('piece311','assets/Poster-02/piece3.jpg');
        this.load.image('piece411','assets/Poster-02/piece4.jpg');
        this.load.image('piece511','assets/Poster-02/piece5.jpg');
        this.load.image('piece611','assets/Poster-02/piece6.jpg');
        this.load.image('piece711','assets/Poster-02/piece7.jpg');
        this.load.image('piece811','assets/Poster-02/piece8.jpg');
        this.load.image('piece911','assets/Poster-02/piece9.jpg');
        this.load.image('piece1011','assets/Poster-02/piece10.jpg');
        this.load.image('piece1111','assets/Poster-02/piece11.jpg');
        this.load.image('piece1211','assets/Poster-02/piece12.jpg');
        this.load.image('preview2','assets/Poster-02/preview2.png');
        this.load.image('trigger','assets/trigger.png');
        this.load.image('bk','assets/Background_2.png');
    }

    create()
    {
        pc=2;
        p=0;
        pieceManager=[];
        triggerManager=[];
        this.add.image(700,400,'bk');
        this.add.image(200,650,'preview2').setScale(0.2);
        for (var i = 0; i < 12; i++) {
            var piece = this.add.sprite(90 + (i * 100), 90, 'piece'+(i+1)+'11').setScale(0.4);
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