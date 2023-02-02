class congrats extends Phaser.Scene
{
    constructor()
    {
        super('congrats');
    }
    preload(){
        this.load.image('congrats','assets/congrats.jpg');
    }
    create()
    {
        this.next=this.add.image(700,400,'congrats').setScale(0.3,0.179);
        this.textS = this.add.text(450, 400, 'Level Complete', { fontSize: '64px', fill: '#000' });
        this.next.setInteractive();
        this.next.visible=true;
        this.next.on('pointerdown',()=>this.loadNext());
    }
    loadNext(){
        if(pc==3){
            bgm.stop();
            this.scene.switch('menu');
        }
        else{
            this.scene.switch('Poster'+(pc+1));
        }
    }
}
