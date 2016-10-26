var game = new Phaser.Game(1000, 800, Phaser.CANVAS, 'phaser-dfa', {preload: preload,
create: create, update: update, render: render});

function preload() {
	/*Various*/
	this.load.image('background','assets/background.jpg');
	
	/*Grid and types of square*/
	this.load.image('greensqr', 'assets/greensqr.png');
	this.load.image('bluesqr', 'assets/bluesqr.png');
	this.load.image('orangesqr', 'assets/orangesqr.png');
	this.load.image('sector', 'assets/gridcomp.png');
	
	/*Menu*/
	this.load.image('menu', 'assets/menu.png');
	this.load.image('createSelect','assets/menu_createS_highlight.png');
	this.load.image('infoSelect','assets/menu_info_highlight.png');
}

/*Font styles for text declared here*/
var style = { font: "12px Arial", fill: "#000000" };


/*The state class*/
var state = function(x,y,name,edges)
{
	this.x = x;
	this.y = y;
	this.name = name;
	for(var i = 0; i < edges.length; i++)
		this.edges[i] = edges[i];
}

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



/*Sprite variables*/
var textArea; 
var selector;
var menu;
var createSelect;



var menuHover = 0;
/*
Menu hover type
0 - none
1 - create state
2 - delete state
3 - create edge
4 - info
*/ 



/*Testing i.e. FPS, mouse position, stats*/
var positionTxt;
var testTxt;

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

function hoverOver(position,lX,rX,uY,bY)
{
	var hover = false;
	testTxt.setText("Test: Pos.x: " + position.x + " Pos.y: " + position.y
					+ "\n lX: " + lX + " rX: " + rX
					+ "\n uY: " + uY + " bY: " + bY);
	if(position.x > lX && position.x < rX)
	{
		if(position.y < bY && position.y > uY)
			hover = true;
	}
	return hover;
}

/*PhaserJS main functions*/
function create() {
	
	/*Place game div in middle of screen*/
	this.game.scale.pageAlignHorizontally = true;
	this.game.scale.pageAlignVertically = true;
	this.game.scale.refresh();
	
	
	this.game.input.mouse.capture = true;
	
	
	this.background = this.game.add.sprite(0, 0, 'background');

	this.text = game.add.text(34,10,"State Machine Creator",style);
	this.text = game.add.text(5,44,"Left click on a square to show menu.",style);
	this.text = game.add.text(5,55,"\nLeft click on created state\nand select \"create edge\"\nto connect states",style);
	//this.game.time.advancedTiming = true;
	var pos = this.game.input.activePointer.position;
	positionTxt = game.add.text(55,500,"x:" + pos.x + " y:" + pos.y, style);
	testTxt = game.add.text(55,520,"test:", style);
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
	
	createSelect = this.game.add.sprite(0,0,'createSelect');
	createSelect.visible = false;
	
	infoSelect = this.game.add.sprite(0,0,'infoSelect');
	infoSelect.visible = false;
	
	
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
	testTxt.setText("Test");
	
	if(this.game.input.activePointer.leftButton.isDown == true)
		ismbDown = true;
	
	/*The lmb was pressed and then let go on the grid*/
	if(ismbDown == true && this.game.input.activePointer.leftButton.isUp == true && pos.x > 200)
	{
		/*if the menu was already up, check to see if over an option, also hide it*/
		if(menu.visible == true)
		{
		
			/*Check hoverings*/
			if(menuHover == 1) /*Create State*/
			{
				menuHover = 0;
			}
			else if(menuHover == 2) /*Delete State*/
			{
				menuHover = 0;
			}
			else if(menuHover == 3) /*Create Edge*/
			{
				menuHover = 0;
			}
			else if(menuHover == 4) /*Info*/
			{
				menuHover = 0;
			}
			
			
			/*createState(X,Y)
			infoState(X,Y)*/
			
			
			/*End hovering check*/
			menu.visible = false;
			createSelect.visible = false;
			infoSelect.visible = false;
		}
		else /*Otherwise place it, conditionals for making sure menu doesn't go right of pointer when that would overflow to right*/
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
			/*Set it visible no matter the condition and store coord of menu square*/
			menu.visible = true;
			menuX = currX;
			menuY = currY;
		}
		/*The mouse can't be down at this point since this checks for it being up, set bool back*/
		ismbDown = false;
	}
	
	
	/*This statement checks for menu selection hoverings*/
	if(menu.visible == true)
	{
	
		/*Check Create State hover*/
		var hover = false;
		hover = hoverOver(pos,menu.x,menu.x+216,menu.y,menu.y+27);
		
		if(hover == true)
		{
			createSelect.x = menu.x;
			createSelect.y = menu.y;
			createSelect.visible = true;
			menuHover = 1;
		}
		else
			createSelect.visible = false;
		
		
		/*Check Delete State hover*/
		hover = hoverOver(pos,menu.x,menu.x+216,menu.y+28,menu.y+53);
		
		if(hover == true)
		{
			menuHover = 2;
		}
		//else
		
		/*Check Create Edge hover*/
		hover = hoverOver(pos,menu.x,menu.x+216,menu.y+54,menu.y+79);
		
		if(hover == true)
		{
			menuHover = 3;
		}
		//else
		
		
		/*Check Info hover*/
		hover = hoverOver(pos,menu.x,menu.x+216,menu.y+80,menu.y+112);
		
		if(hover == true)
		{
			infoSelect.x = menu.x;
			infoSelect.y = menu.y+80;			
			infoSelect.visible = true;
			menuHover = 4;
		}
		else
			infoSelect.visible = false;
		
	}
	
	/*Hide the menu if click is off the grid*/
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