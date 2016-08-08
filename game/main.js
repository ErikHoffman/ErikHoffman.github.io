var game = new Phaser.Game(1000, 800, Phaser.AUTO);

var GameState ={
	preload: function(){
		this.load.image('background','assets/background.jpg');
		this.load.image('greensqr', 'assets/greensqr.png');
		this.load.image('bluesqr', 'assets/bluesqr.png');
		this.load.image('orangesqr', 'assets/orangesqr.png');
		this.load.image('sector', 'assets/gridcomp.png');
	},
	create: function(){
		
		//this.greensqr.anchor.setTo(0.5, 0.5);
		this.background = this.game.add.sprite(0, 0, 'background');
		
		var style = { font: "12px Arial" };
		this.text = game.add.text(34,10,"State Machine Creator",style);
		this.text = game.add.text(7,44,"Left click on a square to add a state",style);
		this.text = game.add.text(7,55,"\nLeft click on created state\nand select \"create edge\"\nto connect states",style);
	},
	update: function(){
		var xinc = 0;
		var yinc = 0;
		for(yinc = 0; yinc < 13; yinc++)
		{
			
			for(xinc = 0; xinc < 13; xinc++){
				this.sector = this.game.add.sprite(200+xinc*80,yinc*80,'sector');
			}
			
		}
		
		var pos = this.game.input.activePointer.position;
		this.game.debug.text("x:" + pos.x + " y:" + pos.y, 55, 500);
		if(pos.x >= 200)
			this.sector = this.game.add.sprite(200+Math.floor((pos.x-200)/80)*80+5,Math.floor(pos.y/80)*80+5,'orangesqr');
	}
};

game.state.add('GameState', GameState);
game.state.start('GameState');