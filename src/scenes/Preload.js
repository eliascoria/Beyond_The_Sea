import Phaser from "phaser";

export default class Preload extends Phaser.Scene{
    constructor(){
        super("Preload");
    }

    preload(){
        this.load.image("player", "/assets/sprites/player.png");
        this.load.image('bullet', '/assets/sprites/bullet.png');
        this.load.image('wall', '/assets/sprites/wall.png');
        this.load.image('floor', '/assets/sprites/floor.png');
        this.load.image('wall1_BTS', '/assets/sprites/wall1_BTS.png');
        this.load.image('floor1-BTS', '/assets/sprites/floor1-BTS.png');

        this.load.tilemapTiledJSON("map", "/assets/tilemaps/map.json");
        this.load.tilemapTiledJSON("map1", "/assets/tilemaps/map1.json");
    }

    create(){
        this.scene.start("MainMenu");
    }
}