class Menu extends Phaser.Scene
{
    constructor()
    {
        super('Menu');
    }
    preload(){
        this.load.image('button','assets/trigger.png');
        this.load.image('bk','assets/Background_2.png');
        this.load.audio('mbgm','assets/mbackground.mp3');
    }
    create()
    {
        bgm=this.sound.add('mbgm');
        bgm.setLoop(true);
        bgm.play();
        this.add.image(500,400,'bk');
        this.textS = this.add.text(50, 50, 'Select Poster', { fontSize: '64px', fill: '#000' });
        this.text1 = this.add.text(532, 375, '1', { fontSize: '64px', fill: '#000' });
        this.button1 = this.add.image(550,400,'button').setScale(0.5);
        this.button1.setInteractive();
        this.button1.visible=true;
        this.button1.on('pointerdown',()=>this.loadLevel1());
        this.text2 = this.add.text(682, 375, '2', { fontSize: '64px', fill: '#000' });
        this.button2 = this.add.image(700,400,'button').setScale(0.5);
        this.button2.setInteractive();
        this.button2.visible=true;
        this.button2.on('pointerdown',()=>this.loadLevel2());
        this.text3 = this.add.text(832, 375, '3', { fontSize: '64px', fill: '#000' });
        this.button3 = this.add.image(850,400,'button').setScale(0.5);
        this.button3.setInteractive();
        this.button3.visible=true;
        this.button3.on('pointerdown',()=>this.loadLevel3());
    }
    loadLevel1()
    {
        bgm.stop();
        this.scene.switch('Poster1');
    }
    loadLevel2()
    {
        bgm.stop();
        this.scene.switch('Poster2');
    }
    loadLevel3()
    {
        bgm.stop();
        this.scene.switch('Poster3');
    }
}
