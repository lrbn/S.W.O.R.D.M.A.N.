var game = new Phaser.Game(800, 600, Phaser.CANVAS, '', { preload: preload, create: create, update: update });

function preload() {
  game.load.image('test', 'assets/test.png');
}

function create() {
  game.add.sprite(0, 0, 'test');
}

function update() {

}