var game = new Phaser.Game(1000, 800, Phaser.CANVAS, 'phaser-dfa', {preload: preload,
create: create, update: update, render: render});

function preload() {
	this.load.image('background','assets/background.jpg');
	this.load.image('greensqr', 'assets/greensqr.png');
	this.load.image('bluesqr', 'assets/bluesqr.png');
	this.load.image('orangesqr', 'assets/orangesqr.png');
	this.load.image('sector', 'assets/gridcomp.png');
	this.load.image('menu', 'assets/menu.png');
}

var style = { font: "12px Arial", fill: "#000000" };

/*CurrX/CurrY: Current x and y positions of mouse in terms of the grid for replacing
gray squares after orange selector cursor

fps crashses when replacing the whole board but better practice
anyways to just replace the one square

*/
var currX = 0;
var currY = 0;
var pastX = 0;
var pastY = 0;
var keys;
var ismbDown = false;

var menuX = 0;
var menuY = 0;

var textArea; 


var selector;
var menu;



/*Testing i.e. FPS, mouse position, stats*/
var positionTxt;

/*Library and helper functions*/
function createEventListeners() {
	game.input.mouse.capture = true;
	game.input.onDown.add(onDown, this);
	game.input.onUp.add(onUp, this);

}

function onDown(pointer) {
}

function onUp() {
	isDown = false;
}

/*Converts coordinates to find their representation in the grid form*/
function convertToGrid(coord,type)
{	
	if(type == 'x')
		return ((coord-205)/80);
	else
		return ((coord-5)/80);
}

/*PhaserJS main functions*/
function create() {
	this.game.scale.pageAlignHorizontally = true;
	this.game.scale.pageAlignVertically = true;
	this.game.scale.refresh();
	this.game.input.mouse.capture = true;
	//this.greensqr.anchor.setTo(0.5, 0.5);
	this.background = this.game.add.sprite(0, 0, 'background');

	this.text = game.add.text(34,10,"State Machine Creator",style);
	this.text = game.add.text(5,44,"Left click on a square to show menu.",style);
	this.text = game.add.text(5,55,"\nLeft click on created state\nand select \"create edge\"\nto connect states",style);
	//this.game.time.advancedTiming = true;
	var pos = this.game.input.activePointer.position;
	positionTxt = game.add.text(55,500,"x:" + pos.x + " y:" + pos.y, style);
	var xinc = 0;
	var yinc = 0;
	for(yinc = 0; yinc < 13; yinc++)
	{
		
		for(xinc = 0; xinc < 13; xinc++){
			this.sector = this.game.add.sprite(200+xinc*80,yinc*80,'sector');
		}
		
	}
	
	selector = this.game.add.sprite(0,0,'orangesqr');
	selector.visible = false;
	menu = this.game.add.sprite(0,0,'menu');
	menu.visible = false;
}

function update() {
	
	//Get the mouse position
	var pos = this.game.input.activePointer.position;
	
	//[currX,currY] = the current square the mouse is hovering over
	currX = 200 + Math.floor((pos.x-200)/80)*80+5;
	currY = Math.floor(pos.y/80)*80+5;
	
	//Display for testing
	//Position on grid
	var txtX = 0;
	var txtY = 0;
	
	if(pos.x >= 200)
	{
		txtX = (currX-205)/80;
		txtY = (currY-5)/80;
		
		selector.visible = true;
		if(menu.visible == false)
		{
			selector.x = currX;
			selector.y = currY;
		}
	}
	else
	{
		txtX = "NA";
		txtY = "NA";
		if(menu.visible == false)
			selector.visible = false;
	}
	positionTxt.setText("x:" + txtX + " y:" + txtY);
	
	if(this.game.input.activePointer.leftButton.isDown == true)
		ismbDown = true;
	
	if(ismbDown == true && this.game.input.activePointer.leftButton.isUp == true && pos.x > 200)
	{
		if(menu.visible == true)
			menu.visible = false;
		else
		{
			if(pos.y < 688)
			{
				if(pos.x < 774)
				{
					menu.x = pos.x;
					menu.y = pos.y;
				}
				else
				{
					menu.x = pos.x - 216;
					menu.y = pos.y;
				}
			}
			else
			{
				if(pos.x < 774)
				{
					menu.x = pos.x;
					menu.y = pos.y - 112;
				}
				else
				{
					menu.x = pos.x - 216;
					menu.y = pos.y - 112;
				}
			}
			menu.visible = true;
			menuX = currX;
			menuY = currY;
		}
		ismbDown = false;
	}
	
	if(ismbDown == true && pos.x <= 200)
	{
		ismbDown = false;
		menu.visible = false;
	}
	
	//textArea = new Phaser.Rectangle(0, 370, 200, 430);
	//this.text = game.add.text(10,450,"State Machine Creator",style);
	//this.text(this.game.time.fps,55,600);
}

function render() {
	//this.game.debug.geom(textArea,'#ffffff');
}