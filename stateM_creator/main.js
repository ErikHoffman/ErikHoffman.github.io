var game = new Phaser.Game(1000, 800, Phaser.CANVAS, 'phaser-dfa', {preload: preload,
create: create, update: update, render: render});

function preload() {
	/*Various*/
	this.load.image('background','assets/background.jpg');
	
	/*Grid and types of squares*/
	this.load.image('greensqr', 'assets/greensqr.png');
	this.load.image('bluesqr', 'assets/bluesqr.png');
	this.load.image('orangesqr', 'assets/orangesqr.png');
	this.load.image('sector', 'assets/gridcomp.png');
	
	/////////////
	/*Main Menu*/
	/////////////
	this.load.image('menu', 'assets/menu.png');
	this.load.image('createSelect','assets/menu_createS_highlight.png');
	this.load.image('infoSelect','assets/menu_info_highlight.png');
	/////////////
	/*Main Menu*/
	/////////////
	
	/////////////////////
	/*State create menu*/
	/////////////////////
	this.load.image('createMenu','assets/create_state_screen.png');
	
	//////////////
	/*Highlights*/
	//////////////
	this.load.image('createAccept','assets/create_state_screen_accept_highlight.png');
	this.load.image('createCancel','assets/create_state_screen_cancel_highlight.png');
	this.load.image('createAcceptH','assets/create_state_screen_acceptS_highlight.png');
	this.load.image('createName','assets/create_state_screen_name_highlight.png');
	this.load.image('createSymbolH','assets/create_state_screen_symbol_highlight.png');
	this.load.image('createDescH','assets/create_state_screen_description_highlight.png');
	//////////////
	/*Highlights*/
	//////////////
	
	/////////////
	/*Selecteds*/
	/////////////
	this.load.image('createAcceptS','assets/create_state_screen_acceptS_selected.png');
	this.load.image('txt_index','assets/txt_index.png');
	/////////////
	/*Selecteds*/
	/////////////
	
	
	/*For disabling cursor, might need
	this.game.canvas.id = 'phaser-dfa';
	document.getElementById('phaser-dfa').style.cursor = 'none';
	*/
	this.game.canvas.id = 'phaser-dfa';

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

var ismbDown = false;

var keyA, keyB, keyC, keyD, keyE, keyF, keyG,keyH, keyI, keyJ, keyK, keyL, keyM, keyN, keyO, keyP, keyQ, keyR, keyS, keyT;
var keyU, keyV, keyW, keyX, keyY, keyZ;

var key1, key2, key3, key4, key5, key6, key7, key8, key9, key0;
var keyShift, keyCtrl, keyBackSpace, keySpace;

//The previously held key to prevent super fast typing
var oldKey = -1;

var menuX = 0;
var menuY = 0;

/*These stay static once a square is selected*/
var gridX = 0;
var gridY = 0;

/*Sprite variables*/
var textArea; 
var selector;
var menu;
var createSelect;



var menuHover = 0;
var createMenuHover = 0;
/*
Menu hover type
0 - none
1 - create state
2 - delete state
3 - create edge
4 - info
*/ 

/*
Create Menu hover type
0 - none
1- accept
2 - cancel
3 - name
4 - symbol
5 - accept state toggle
6 - description
*/

/*Booleans for text area selections*/
var createMenuNameSel = false;
var createMenuSymbolSel = false;
var createMenuDescSel = false;
/*Temporary text storage when creating states*/
var createMenuNameText;
var createMenuSymbolText;
var createMenuDescText;


/*Testing i.e. FPS, mouse position, stats*/
var positionTxt;
var testTxt;
var createPosRefX; //The grid position of the currently selected state, this is for
var createPosRefY; //user reference in case they come back and don't know what state they have selected

/*Library and helper functions*/
function createEventListeners() {
	
	keyA = game.input.keyboard.addKey(Phaser.Keyboard.A);
	keyB = game.input.keyboard.addKey(Phaser.Keyboard.B);
	keyC = game.input.keyboard.addKey(Phaser.Keyboard.C);
	keyD = game.input.keyboard.addKey(Phaser.Keyboard.D);
	keyE = game.input.keyboard.addKey(Phaser.Keyboard.E);
	keyF = game.input.keyboard.addKey(Phaser.Keyboard.F);
	keyG = game.input.keyboard.addKey(Phaser.Keyboard.G);
	keyH = game.input.keyboard.addKey(Phaser.Keyboard.H);
	keyI = game.input.keyboard.addKey(Phaser.Keyboard.I);
	keyJ = game.input.keyboard.addKey(Phaser.Keyboard.J);
	keyK = game.input.keyboard.addKey(Phaser.Keyboard.K);
	keyL = game.input.keyboard.addKey(Phaser.Keyboard.L);
	keyM = game.input.keyboard.addKey(Phaser.Keyboard.M);
	keyN = game.input.keyboard.addKey(Phaser.Keyboard.N);
	keyO = game.input.keyboard.addKey(Phaser.Keyboard.O);
	keyP = game.input.keyboard.addKey(Phaser.Keyboard.P);
	keyQ = game.input.keyboard.addKey(Phaser.Keyboard.Q);
	keyR = game.input.keyboard.addKey(Phaser.Keyboard.R);
	keyS = game.input.keyboard.addKey(Phaser.Keyboard.S);
	keyT = game.input.keyboard.addKey(Phaser.Keyboard.T);
	keyU = game.input.keyboard.addKey(Phaser.Keyboard.U);
	keyV = game.input.keyboard.addKey(Phaser.Keyboard.V);
	keyW = game.input.keyboard.addKey(Phaser.Keyboard.W);
	keyX = game.input.keyboard.addKey(Phaser.Keyboard.X);
	keyY = game.input.keyboard.addKey(Phaser.Keyboard.Y);
	keyZ = game.input.keyboard.addKey(Phaser.Keyboard.Z);
	keyShift = game.input.keyboard.addKey(Phaser.Keyboard.SHIFT);
	keyBackSpace = game.input.keyboard.addKey(Phaser.Keyboard.BACKSPACE);
	keySpace = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	
}

function returnKeyInput() {
	if(keyA.isDown == true)
	{
		if(keyShift.isDown == true)
			return "A";
		else
			return "a";
	}
	else if(keyB.isDown == true)
	{
		if(keyShift.isDown == true)
			return "B";
		else
			return "b";
	}
	else if(keyC.isDown == true)
	{
		if(keyShift.isDown == true)
			return "C";
		else
			return "c";
	}
	else if(keyD.isDown == true)
	{
		if(keyShift.isDown == true)
			return "D";
		else
			return "d";
	}
	else if(keyE.isDown == true)
	{
		if(keyShift.isDown == true)
			return "E";
		else
			return "e";
	}
	else if(keyF.isDown == true)
	{
		if(keyShift.isDown == true)
			return "F";
		else
			return "f";
	}
	else if(keyG.isDown == true)
	{
		if(keyShift.isDown == true)
			return "G";
		else
			return "g";
	}
	else if(keyH.isDown == true)
	{
		if(keyShift.isDown == true)
			return "H";
		else
			return "h";
	}
	else if(keyI.isDown == true)
	{
		if(keyShift.isDown == true)
			return "I";
		else
			return "i";
	}
	else if(keyJ.isDown == true)
	{
		if(keyShift.isDown == true)
			return "J";
		else
			return "j";
	}
	else if(keyK.isDown == true)
	{
		if(keyShift.isDown == true)
			return "K";
		else
			return "k";
	}
	else if(keyL.isDown == true)
	{
		if(keyShift.isDown == true)
			return "L";
		else
			return "l";
	}
	else if(keyM.isDown == true)
	{
		if(keyShift.isDown == true)
			return "M";
		else
			return "m";
	}
	else if(keyN.isDown == true)
	{
		if(keyShift.isDown == true)
			return "N";
		else
			return "n";
	}
	else if(keyO.isDown == true)
	{
		if(keyShift.isDown == true)
			return "O";
		else
			return "o";
	}
	else if(keyP.isDown == true)
	{
		if(keyShift.isDown == true)
			return "P";
		else
			return "p";
	}
	else if(keyQ.isDown == true)
	{
		if(keyShift.isDown == true)
			return "Q";
		else
			return "q";
	}
	else if(keyR.isDown == true)
	{
		if(keyShift.isDown == true)
			return "R";
		else
			return "r";
	}
	else if(keyS.isDown == true)
	{
		if(keyShift.isDown == true)
			return "S";
		else
			return "s";
	}
	else if(keyT.isDown == true)
	{
		if(keyShift.isDown == true)
			return "T";
		else
			return "t";
	}
	else if(keyU.isDown == true)
	{
		if(keyShift.isDown == true)
			return "U";
		else
			return "u";
	}
	else if(keyV.isDown == true)
	{
		if(keyShift.isDown == true)
			return "V";
		else
			return "v";
	}
	else if(keyW.isDown == true)
	{
		if(keyShift.isDown == true)
			return "W";
		else
			return "w";
	}
	else if(keyB.isDown == true)
	{
		if(keyShift.isDown == true)
			return "B";
		else
			return "b";
	}
	else if(keyX.isDown == true)
	{
		if(keyShift.isDown == true)
			return "X";
		else
			return "x";
	}
	else if(keyY.isDown == true)
	{
		if(keyShift.isDown == true)
			return "Y";
		else
			return "y";
	}
	else if(keyZ.isDown == true)
	{
		if(keyShift.isDown == true)
			return "Z";
		else
			return "z";
	}
	else if(keyBackSpace.isDown == true)
	{
		return -1;
	}
	else if(keySpace.isDown == true)
	{
		return 1;
	}
	else
		return 0;
}

/*
function: addText
params: area - the text contained in the area
		type - the actual area, need this as the symbol and description areas function differently
description: Examines which keys are pressed during game loop and placed text in text areas
if they are selected and certain conditions apply
*/
function addText(area, type)
{
	/*Let's capture the keyboard input if the user is in any of
	the text areas*/
	var oldText = area.text;
	var newText = returnKeyInput();
	
	
	if(newText != 0 && newText != -1 && newText != 1 && oldKey != newText)
	{
		area.setText(oldText + newText)
	}
	else if(newText == -1 && oldKey != newText)
	{
		oldText = oldText.substring(0, oldText.length -1);
		area.setText(oldText);
		txt_index.x = area.width;
	}
	else if(newText == 1 && oldKey != newText)
	{
		oldText = oldText + ' ';
		area.setText(oldText);
		txt_index.x = area.width;
	}
	if(type == 0)
		txt_index.x = createName.x + 3 + area.width;
	else if(type == 1)
		txt_index.x = createSymbolH.x + 3 + area.width;
	else if(type == 2)
		txt_index.x = createDescH.x + 3 + area.width;
	/*Place restriction as key press will be too quick*/
	oldKey = newText;
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

/*Displays window in a way that doesn't result in overflow off screen*/
function displayOverflow(item,xover,yover,pos)
{
	if(pos.y < 800-yover)
	{
		if(pos.x < 1000-xover)
		{
			item.x = pos.x;
			item.y = pos.y;
		}
		else
		{
			item.x = pos.x - xover;
			item.y = pos.y;
		}
	}
	else
	{
		if(pos.x < 1000-xover)
		{
			item.x = pos.x;
			item.y = pos.y - yover;
		}
		else
		{
			item.x = pos.x - xover;
			item.y = pos.y - yover;
		}
	}

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
	
	createPosRefX = game.add.text(0,0,"",style);
	createPosRefY = game.add.text(0,0,"",style);
	
	createPosRefX.visible = false;
	createPosRefY.visible = false;
	var xinc = 0;
	var yinc = 0;
	for(yinc = 0; yinc < 13; yinc++)
	{
		
		for(xinc = 0; xinc < 13; xinc++){
			this.sector = this.game.add.sprite(200+xinc*80,yinc*80,'sector');
		}
		
	}
	
	selector = this.game.add.sprite(0,0,'orangesqr');
	selector.alpha = 0.5;
	selector.visible = false;
	
	menu = this.game.add.sprite(0,0,'menu');
	menu.visible = false;
	
	createSelect = this.game.add.sprite(0,0,'createSelect');
	createSelect.visible = false;
	
	infoSelect = this.game.add.sprite(0,0,'infoSelect');
	infoSelect.visible = false;
	
	createMenu = this.game.add.sprite(0,0,'createMenu');
	createMenu.visible = false;
	
	/*Code for dragging image
	createMenu.inputEnabled = true;
	createMenu.input.enableDrag(true);
	*/
	
	createAccept = this.game.add.sprite(0,0,'createAccept');
	createAccept.visible = false;
	
	createCancel = this.game.add.sprite(0,0,'createCancel');
	createCancel.visible = false;
	
	createAcceptH = this.game.add.sprite(0,0,'createAcceptH');
	createAcceptH.visible = false;
	
	createName = this.game.add.sprite(0,0,'createName');
	createName.visible = false;
	
	createSymbolH = this.game.add.sprite(0,0,'createSymbolH');
	createSymbolH.visible = false;
	
	createAcceptS = this.game.add.sprite(0,0,'createAcceptS');
	createAcceptS.visible = false;
	
	createDescH = this.game.add.sprite(0,0,'createDescH');
	createDescH.visible = false;
	
	txt_index = this.game.add.sprite(0,0,'txt_index');
	txt_index.visible = false;
	
	createEventListeners()
	
	createMenuNameText = game.add.text(0,0,"",style);
	createMenuSymbolText = game.add.text(0,0,"",style);
	createMenuDescText = game.add.text(0,0,"",style);
	createMenuNameText.visible = false;
	createMenuSymbolText.visible = false;
	createMenuDescText.visible = false;
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
		if(menu.visible == false && createMenu.visible == false)
		{
			selector.x = currX;
			selector.y = currY;
		}
	}
	else
	{
		txtX = "NA";
		txtY = "NA";
		if(menu.visible == false && createMenu.visible == false)
			selector.visible = false;
	}
	positionTxt.setText("x:" + txtX + " y:" + txtY);
	testTxt.setText("Test");
	
	if(this.game.input.activePointer.leftButton.isDown == true)
		ismbDown = true;
	
	/*The lmb was pressed and then let go on the grid*/
	//This if represents the letting go
	if(ismbDown == true && this.game.input.activePointer.leftButton.isUp == true && pos.x > 200)
	{
		/*
		If the menu was already up, check to see if over an option, also hide it
		If you have the create state menu open do not compute
		*/
		if(menu.visible == true && createMenu.visible == false)
		{
		
			/*Check hoverings*/
			if(menuHover == 1) /*Create State*/
			{
				menuHover = 0;
				menu.visible = false;
				
				/*Display the state creation menu*/
				createMenu.visible = true;
				
				displayOverflow(createMenu,312,343,pos);
				
				/*Place the info text for grid reference*/
				gridX = txtX;
				gridY = txtY;
				
				createPosRefX.setText(gridX);
				createPosRefY.setText(gridY);
				
				createPosRefX.x = createPosRefY.x = createMenu.x + 150;
				createPosRefX.y = createMenu.y + 25;
				createPosRefY.y = createMenu.y + 45;
				
				/*.parent finds the parent layer in a child object, need 
				it since text will default under images*/
				createPosRefX.parent.bringToTop(createPosRefX);
				createPosRefY.parent.bringToTop(createPosRefY);
				createPosRefX.visible = true;
				createPosRefY.visible = true;
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
			else
				menu.visible = false;
			
			
			/*createState(X,Y)
			infoState(X,Y)*/
			
			
			/*End hovering check*/
			createSelect.visible = false;
			infoSelect.visible = false;
		}
		else if(menu.visible == false && createMenu.visible == true) 
		{
			if(createMenuHover == 1) //Cancel button clicked
			{
				createMenuHover = 0;
				createMenu.visible = false;
				createPosRefX.visible = false;
				createPosRefY.visible = false;
				createAcceptS.visible = false;
				
				//Reset text area selections
				txt_index.visible = false;
				createMenuNameSel = false;
				createMenuSymbolSel = false;
				createMenuDescSel = false;
				createMenuNameText.setText("")
				createMenuSymbolText.setText("")
				createMenuDescText.setText("")
				oldKey = -1;
			}
			else if(createMenuHover == 2) //Accept button clicked
			{
				createMenuHover = 0;
				createMenu.visible = false;
				createPosRefX.visible = false;
				createPosRefY.visible = false;
				createAcceptS.visible = false;
				
				//Reset text area selections
				txt_index.visible = false;
				createMenuNameSel = false;
				createMenuSymbolSel = false;
				createMenuDescSel = false;
				createMenuNameText.setText("")
				createMenuSymbolText.setText("")
				createMenuDescText.setText("")
				oldKey = -1;
			}
			else if(createMenuHover == 3) //Name text area clicked
			{
				createMenuHover = 0;
				txt_index.x = createName.x + 3;
				txt_index.y = createName.y + 2;
				txt_index.visible = true;
				
				//Reset text area selections
				createMenuNameSel = true;
				createMenuSymbolSel = false;
				createMenuDescSel = false;
				createMenuNameText.visible = true;
				createMenuNameText.x = createName.x + 3;
				createMenuNameText.y = createName.y + 2;
				oldKey = -1;
			}
			else if(createMenuHover == 4) //Symbol text area clicked
			{
				createMenuHover = 0;
				txt_index.x = createSymbolH.x + 3;
				txt_index.y = createSymbolH.y + 2;
				txt_index.visible = true;
				
				//Reset text area selections
				createMenuSymbolSel = true;
				createMenuNameSel = false;
				createMenuDescSel = false;
				
				//Show text for when user types
				createMenuSymbolText.visible = true;
				createMenuSymbolText.x = createSymbolH.x + 3;
				createMenuSymbolText.y = createSymbolH.y + 2;
				oldKey = -1;
			}
			else if(createMenuHover == 5) //Accept State toggled
			{
			    if(createAcceptS.visible == true)
					createAcceptS.visible = false;
				else
				{
					createAcceptS.x = createMenu.x+138;
					createAcceptS.y = createMenu.y+136;
					createAcceptS.visible = true;
				}
				oldKey = -1;
			}
			else if(createMenuHover == 6) //Description text area clicked
			{
				createMenuHover = 0;
				txt_index.x = createDescH.x + 3;
				txt_index.y = createDescH.y + 2;
				txt_index.visible = true;
				
				//Reset text area selections
				createMenuDescSel = true;
				createMenuNameSel = false;
				createMenuSymbolSel = false;
				
				//Show text for when user types
				createMenuDescText.visible = true;
				createMenuDescText.x = createDescH.x + 3;
				createMenuDescText.y = createDescH.y + 2;
				oldKey = -1;
			}
			
			/*Same as above, end check*/
			createAccept.visible = false;
			createCancel.visible = false;
		}
		else/*Otherwise nothing is up and place regular menu, conditionals for making sure menu doesn't go right of pointer when that would overflow to right*/
		{
			displayOverflow(menu,216,112,pos)
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
	
		/*CAN ABSTRACT THESE TO A HOVER FUNCTION WHICH LOOPS THROUGH 
		OBJECTS THAT INCLUDE PICTURE, AND X AND Y BOUNDS AND MENUHOVER LEVEL*/
		/*Check Create State hover*/
		var hover = false;
		menuHover = 0;
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
	
	
	if(createMenu.visible == true)
	{
		var hover = false;
		
		
		if(createMenuNameSel == true)
		{
			addText(createMenuNameText,0);
		}
		else if(createMenuSymbolSel == true)
		{
			addText(createMenuSymbolText,1);
		}
		else if(createMenuDescSel == true)
		{
			addText(createMenuDescText,2);
		}
			
		createMenuHover = 0;
		/*Cancel hover*/
		hover = hoverOver(pos,createMenu.x+24,createMenu.x+126,createMenu.y+314,createMenu.y+339);
		
		if(hover == true)
		{
			createMenuHover = 1;
			createCancel.x = createMenu.x+24;
			createCancel.y = createMenu.y+314;
			createCancel.visible = true;
		}
		else
		{
			createCancel.visible = false;
		}
		
		
		/*Accept hover*/
		hover = hoverOver(pos,createMenu.x+187,createMenu.x+289,createMenu.y+314,createMenu.y+339);
		
		if(hover == true)
		{
			createMenuHover = 2;
			createAccept.x = createMenu.x+187;
			createAccept.y = createMenu.y+314;
			createAccept.visible = true;
		}
		else
		{
			createAccept.visible = false;
		}
		
		/*Name hover*/
		hover = hoverOver(pos,createMenu.x+132,createMenu.x+296,createMenu.y+68,createMenu.y+91);
		
		if(hover == true)
		{
			createMenuHover = 3;
			createName.x = createMenu.x+132;
			createName.y = createMenu.y+68;
			createName.visible = true;
		}
		else
		{
			createName.visible = false;
		}
		
		/*Symbol hover*/
		hover = hoverOver(pos,createMenu.x+96,createMenu.x+119,createMenu.y+101,createMenu.y+124);
		
		if(hover == true)
		{
			createMenuHover = 4;
			createSymbolH.x = createMenu.x+96;
			createSymbolH.y = createMenu.y+101;
			createSymbolH.visible = true;
		}
		else
		{
			createSymbolH.visible = false;
		}
		
		/*Accept state checkbox hover*/
		hover = hoverOver(pos,createMenu.x+138,createMenu.x+161,createMenu.y+136,createMenu.y+159);
		
		if(hover == true)
		{
			createMenuHover = 5;
			createAcceptH.x = createMenu.x+138;
			createAcceptH.y = createMenu.y+136;
			createAcceptH.visible = true;
		}
		else
		{
			createAcceptH.visible = false;
		}
		
		/*Description hover*/
		hover = hoverOver(pos,createMenu.x+25,createMenu.x+288,createMenu.y+194,createMenu.y+295);
		
		if(hover == true)
		{
			createMenuHover = 6;
			createDescH.x = createMenu.x+25;
			createDescH.y = createMenu.y+194;
			createDescH.visible = true;
		}
		else
		{
			createDescH.visible = false;
		}
		
		
		/*
		Change the cursor based on what's been highlighted
		Text cursor so the user knows it is a text area
		*/
		if(createDescH.visible == true || createSymbolH.visible == true || createName.visible == true)
			document.getElementById('phaser-dfa').style.cursor = "text";
		else
			document.getElementById('phaser-dfa').style.cursor = "default";
		
		
		
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