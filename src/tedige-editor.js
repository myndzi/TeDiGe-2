﻿/** @preserve TeDiGe-2 - Editor code, used in the editor page - https://github.com/PetitPrince/TeDiGe-2/  */
/** Draw a single palette decoration

	@function
	@param {string} kind Define the color of the block to be drawn. Possible values: (SZLJTOIG)
	@param {number} blockSize Size of a typical block
	@param sprite Sprite object
*/
function drawPaletteDecoCell(kind,blockSize,sprite){

	var Canvas = $('#editor-palette-deco-'+kind);
	var ctx = Canvas[0].getContext('2d');

	var spriteOffsetStart, spriteOffsetEnd;
	switch(kind){
		case 'n1':	spriteOffsetStart = decoration.n1.s; spriteOffsetEnd = decoration.n1.e; break;
		case 'n2':	spriteOffsetStart = decoration.n2.s; spriteOffsetEnd = decoration.n2.e; break;
		case 'n3':	spriteOffsetStart = decoration.n3.s; spriteOffsetEnd = decoration.n3.e; break;
		case 'n4':	spriteOffsetStart = decoration.n4.s; spriteOffsetEnd = decoration.n4.e; break;
		case 'n5':	spriteOffsetStart = decoration.n5.s; spriteOffsetEnd = decoration.n5.e; break;
		case 'n6':	spriteOffsetStart = decoration.n6.s; spriteOffsetEnd = decoration.n6.e; break;
		case 'n7':	spriteOffsetStart = decoration.n7.s; spriteOffsetEnd = decoration.n7.e; break;
		case 'n8':	spriteOffsetStart = decoration.n8.s; spriteOffsetEnd = decoration.n8.e; break;
		case 'n9':	spriteOffsetStart = decoration.n9.s; spriteOffsetEnd = decoration.n9.e; break;
		case 'n0':	spriteOffsetStart = decoration.n0.s; spriteOffsetEnd = decoration.n0.e; break;
		case 'smallcw':	spriteOffsetStart = decoration.smallcw.s; spriteOffsetEnd = decoration.smallcw.e; break;
		case 'smallccw':	spriteOffsetStart = decoration.smallccw.s; spriteOffsetEnd = decoration.smallccw.e; break;
		case 'smalloktick':	spriteOffsetStart = decoration.smalloktick.s; spriteOffsetEnd = decoration.smalloktick.e; break;
		case 'smallokcircle':	spriteOffsetStart = decoration.smallokcircle.s; spriteOffsetEnd = decoration.smallokcircle.e; break;
		case 'smallnocross':	spriteOffsetStart = decoration.smallnocross.s; spriteOffsetEnd = decoration.smallnocross.e; break;
		case 'smallquestion':	spriteOffsetStart = decoration.smallquestion.s; spriteOffsetEnd = decoration.smallquestion.e; break;
		case 'smallexclamation':	spriteOffsetStart = decoration.smallexclamation.s; spriteOffsetEnd = decoration.smallexclamation.e; break;
		case 'nwarrow':	spriteOffsetStart = decoration.nwarrow.s; spriteOffsetEnd = decoration.nwarrow.e; break;
		case 'narrow':	spriteOffsetStart = decoration.narrow.s; spriteOffsetEnd = decoration.narrow.e; break;
		case 'nearrow':	spriteOffsetStart = decoration.nearrow.s; spriteOffsetEnd = decoration.nearrow.e; break;
		case 'earrow':	spriteOffsetStart = decoration.earrow.s; spriteOffsetEnd = decoration.earrow.e; break;
		case 'searrow':	spriteOffsetStart = decoration.searrow.s; spriteOffsetEnd = decoration.searrow.e; break;
		case 'sarrow':	spriteOffsetStart = decoration.sarrow.s; spriteOffsetEnd = decoration.sarrow.e; break;
		case 'swarrow':	spriteOffsetStart = decoration.swarrow.s; spriteOffsetEnd = decoration.swarrow.e; break;
		case 'warrow':	spriteOffsetStart = decoration.warrow.s; spriteOffsetEnd = decoration.warrow.e; break;
		case 'bigcw':	spriteOffsetStart = decoration.bigcw.s; spriteOffsetEnd = decoration.bigcw.e; break;
		case 'bigccw':	spriteOffsetStart = decoration.bigccw.s; spriteOffsetEnd = decoration.bigccw.e; break;
		case 'bigquestion':	spriteOffsetStart = decoration.bigquestion.s; spriteOffsetEnd = decoration.bigquestion.e; break;
		case 'bigexclamation':	spriteOffsetStart = decoration.bigexclamation.s; spriteOffsetEnd = decoration.bigexclamation.e; break;
		case 'bigoktick':	spriteOffsetStart = decoration.bigoktick.s; spriteOffsetEnd = decoration.bigoktick.e; break;
		case 'bigokcircle':	spriteOffsetStart = decoration.bigokcircle.s; spriteOffsetEnd = decoration.bigokcircle.e; break;
		case 'bignocross':	spriteOffsetStart = decoration.bignocross.s; spriteOffsetEnd = decoration.bignocross.e; break;
		case 'overlayyellow':	spriteOffsetStart = decoration.overlayyellow.s; spriteOffsetEnd = decoration.overlayyellow.e; break;
		case 'overlayblue':	spriteOffsetStart = decoration.overlayblue.s; spriteOffsetEnd = decoration.overlayblue.e; break;
		case 'overlaygreen':	spriteOffsetStart = decoration.overlaygreen.s; spriteOffsetEnd = decoration.overlaygreen.e; break;
		case 'overlaypink':	spriteOffsetStart = decoration.overlaypink.s; spriteOffsetEnd = decoration.overlaypink.e; break;
		case 'overlayorange':	spriteOffsetStart = decoration.overlayorange.s; spriteOffsetEnd = decoration.overlayorange.e; break;
		case 'clear1':	spriteOffsetStart = decoration.clear1.s; spriteOffsetEnd = decoration.clear1.e; break;
		case 'clear2':	spriteOffsetStart = decoration.clear2.s; spriteOffsetEnd = decoration.clear2.e; break;
		case 'clear3':	spriteOffsetStart = decoration.clear3.s; spriteOffsetEnd = decoration.clear3.e; break;
		case 'clear4':	spriteOffsetStart = decoration.clear4.s; spriteOffsetEnd = decoration.clear4.e; break;
		case 'clear5':	spriteOffsetStart = decoration.clear5.s; spriteOffsetEnd = decoration.clear5.e; break;
		case 'clear6':	spriteOffsetStart = decoration.clear6.s; spriteOffsetEnd = decoration.clear6.e; break;
		case 'clear7':	spriteOffsetStart = decoration.clear7.s; spriteOffsetEnd = decoration.clear7.e; break;
		}

	var ox = spriteOffsetStart[0]*(blockSize);
	var oy = spriteOffsetStart[1]*(blockSize);
	var w = (spriteOffsetEnd[0]-spriteOffsetStart[0])*(blockSize);

	var h = (spriteOffsetEnd[1]-spriteOffsetStart[1])*(blockSize);
	var nx = 0;
	var ny = 0;

	ctx.drawImage(sprite, // original image
				  ox,oy, //coordinate on the original image
				  w,h, // size of the rectangle to will be cut
				  nx,ny, // destination coordinate
				  w,h); // destination size

}

/** Draw a single palette piece

	@function
	@param {string} type Piece type. Possible value: SZLJTOIG
	@param {string} orientation Piece orientation. Possible value:  i cw ccw u
	@param {string} RS Define the style of the block. Possible value: 'ARS, 'SRS'
	@param {number} blockSize Size of a typical block
	@param sprite Sprite object
*/
function drawPaletteCell(type,orientation,RS,blockSize,sprite){
	var Canvas = $('#editor-palette-'+type+orientation);
	var ctx = Canvas[0].getContext('2d');
	var matrix = getMatrix(type, orientation, RS);
	$.data(Canvas,'width',Canvas.width()); // data is faster than Canvas.attr('width',Canvas.width()); http://jsperf.com/jquery-data-vs-attr/22

	var color,spriteOffset;
	switch(RS){
		case 'ARS':
			switch(type){
				case 'I':
					color = ARS.I.color;
					spriteOffset = ARS.I.offset;
					break;
				case 'T':
					color = ARS.T.color;
					spriteOffset = ARS.T.offset;
					break;
				case 'L':
					color = ARS.L.color;
					spriteOffset = ARS.L.offset;
					break;
				case 'J':
					color = ARS.J.color;
					spriteOffset = ARS.J.offset;
					break;
				case 'S':
					color = ARS.S.color;
					spriteOffset = ARS.S.offset;
					break;
				case 'Z':
					color = ARS.Z.color;
					spriteOffset = ARS.Z.offset;
					break;
				case 'O':
					color = ARS.O.color;
					spriteOffset = ARS.O.offset;
					break;
				case 'G':
					color = ARS.G.color;
					spriteOffset = ARS.G.offset;
					break;
			}
		break;
		case 'SRS':
			switch(type){
				case 'I':
					color = SRS.I.color;
					spriteOffset = SRS.I.offset;
					break;
				case 'T':
					color = SRS.T.color;
					spriteOffset = SRS.T.offset;
					break;
				case 'L':
					color = SRS.L.color;
					spriteOffset = SRS.L.offset;
					break;
				case 'J':
					color = SRS.J.color;
					spriteOffset = SRS.J.offset;
					break;
				case 'S':
					color = SRS.S.color;
					spriteOffset = SRS.S.offset;
					break;
				case 'Z':
					color = SRS.Z.color;
					spriteOffset = SRS.Z.offset;
					break;
				case 'O':
					color = SRS.O.color;
					spriteOffset = SRS.O.offset;
					break;
				case 'G':
					color = SRS.G.color;
					spriteOffset = SRS.G.offset;
					break;
			}
		break;
		}

	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 4; j++) {
			if (matrix[i][j]) {
				ctx.beginPath();
				ctx.rect(parseInt(j*blockSize,10),parseInt(i*blockSize,10),blockSize,blockSize);
				ctx.fillStyle = color;
				ctx.fill();
				ctx.closePath();
				if (sprite) {
					ctx.drawImage(sprite, // original image
								  spriteOffset[0]*blockSize,spriteOffset[1]*blockSize, //coordinate on the original image
								  blockSize,blockSize, // size of the rectangle to will be cut
								  parseInt(j*blockSize,10),parseInt(i*blockSize,10), // destination coordinate
								  blockSize,blockSize); // destination size
				}

			}
		}
	}

}//end drawpalettecell

/** Draw the entire tetramino palette

	@function
	@param {string} RS Define the style of the block. Possible value: 'ARS, 'SRS'
	@param {number} blockSize Size of a typical block
	@param sprite Sprite object
*/
function drawPalette(RS, blockSize,sprite){
	var type = ['I','T','S','Z','L','J','O'];
	var orientation = ['i','cw','ccw','u'];

	for (var i = 0; i < type.length; i++) {
		for (var j = 0; j < orientation.length; j++) {
			drawPaletteCell(type[i],orientation[j],RS,blockSize,sprite);
		}
	}
}

/** Draw the entire decoration palette

	@function
	@param {number} blockSize Size of a typical block
	@param sprite Sprite object
*/
function drawPaletteDeco(blockSize,sprite){
	var type = ['n1','n2','n3','n4','n5','n6','n7','n8','n9','n0','smallccw','smallcw','smalloktick','smallokcircle','smallnocross','smallquestion','smallexclamation','nwarrow','narrow','nearrow','earrow','searrow','sarrow','swarrow','warrow','bigcw','bigccw','smallquestion','bigquestion','bigexclamation','bigoktick','bigokcircle','bignocross','overlayyellow','overlayblue','overlaygreen','overlaypink','overlaypink','clear1','clear2','clear3','clear4','clear5','clear6','clear7'];

	for (var i = 0; i < type.length; i++) {
			drawPaletteDecoCell(type[i],blockSize,sprite);
	}
}


	/** Get the jQuery object of the export canvas.*/
	Painter.prototype.CanvasExport;
	/** Get the 2d context of the related canvas*/
	Painter.prototype.ContextExport;

		/** Export the current frame into a png image. TODO: move this to tedige-editor.js
	*/
	Painter.prototype.exportImage = function(){
		this.ContextExport.clearRect(0,0,this.CanvasWidth,this.CanvasHeight);
		this.CanvasExport.attr('width',this.CanvasExport.width());
		var buffer = document.createElement('canvas');
		buffer.width = this.CanvasWidth;
		buffer.height = this.CanvasHeight;

		this.ContextExport.drawImage(this.CanvasBorder[0],0,0);
		this.ContextExport.drawImage(this.CanvasBackground[0],0,0);
		var imgData_PF = this.ContextPF.getImageData(0,0,this.CanvasWidth,this.CanvasHeight);
		var tmp = 0;
		for(var i=0, istop = imgData_PF.data.length ; i<istop ; i+=4)
		{
			imgData_PF.data[i+3]=parseInt(255*0.65,10); // get 0.65 opacity,
			tmp = imgData_PF.data[i] + imgData_PF.data[i+1] + imgData_PF.data[i+2];

			if(!tmp)
			{
				imgData_PF.data[i+3]= 0; // if black pixel -> transparent
			}
			tmp = 0;

		}
		buffer.getContext('2d').putImageData(imgData_PF,0,0);
		this.ContextExport.drawImage(buffer,0,0);
		this.ContextExport.drawImage(this.CanvasActive[0],0,0);
		this.ContextExport.drawImage(this.CanvasWhiteborder[0],0,0);
		this.ContextExport.drawImage(this.CanvasDeco[0],0,0);
	};

/* ------------------------------------------- */
/* -- Frame:: Frames-wide properties change -- */
/* ------------------------------------------- */

/** Changes the border style of the diagram.

	@param {string} kind Desired border type. Currently supported:
		'master' (gray-bluish), 'easy' (green) and 'death' (red). Defaults to master if
		none is selected
*/
Diagram.prototype.modify_border = function(kind){
	for(var i=0, istop = this.frames.length ; i<istop ;i++)
	{
		this.frames[i].border = kind;
	}
	this.frames[this.current_frame].modify_border(kind);
};

/** Change the rotation system for the whole diagram

	@param {string} system Desired rotation system. Possible value: 'ARS', 'SRS'
*/
Diagram.prototype.modify_RS = function(system){
	for(var i=0, istop = this.frames.length ; i<istop ;i++)
	{
		this.frames[i].RS = system;
	}
	this.frames[this.current_frame].modify_RS(system);
};

/** Change the state of the white border for every frame

	@param {boolean} Whiteborder status
*/
Diagram.prototype.modify_whiteborder = function(value){
	for(var i=0, istop = this.frames.length ; i<istop ;i++)
	{
		this.frames[i].whiteborder = value;
	}
	this.frames[this.current_frame].modify_whiteborder(value);
};

/** Change the duration of each frame of a diagram

	@param {number} Desired new duration
*/
Diagram.prototype.modify_duration = function(new_duration){
	for(var i=0, istop = this.frames.length ; i<istop ;i++)
	{
		this.frames[i].duration = new_duration;
	}
};

/** Encode a string with deflate

	@param {string} Input string
	@return {string} Output encoded string
*/
Diagram.prototype.flate_encode = function (str) {
return $.base64.encode(RawDeflate.deflate(unescape(encodeURIComponent(str))));
};

/** Decode a string with deflate

	@param {string} Input string
	@return {string} Output decoded string
*/
Diagram.prototype.flate_decode = function(str) {
return decodeURIComponent(escape(RawDeflate.inflate($.base64.decode(str))));
};

/** Generate a gif from the diagram data*/
Diagram.prototype.getGIF = function(){
	var encoder = new GIFEncoder();
	encoder.setRepeat(0); // sets an infinite loop
	encoder.setDelay(500); // frame rate in ms... maybe I should try to patch this and get a variable rate ?
	encoder.start();
	encoder.setQuality(50);
	for(var i=0, istop = this.frames.length ; i<istop ;i++)
	{
		this.goto_frame(i);
		this.painter.exportImage();
		encoder.addFrame(this.painter.ContextExport);
	}
	encoder.finish();
	var binary_gif = encoder.stream().getData();
	document.getElementById('export-gif').src = 'data:image/gif;base64,'+$.base64.encode(encoder.stream().getData());
};


/* --------------------------- */
/* -- Modifications (basic) -- */
/* --------------------------- */

/** Remove a block at the given coordinate.

	@param {number} x Horizontal coordinate
	@param {number} y Vertical coordinate
*/
Frame.prototype.removeBlock = function(x,y){
	this.playfield[x][y][0] = '';
	this.painter.eraseBlock(x,y);
	//this.painter.drawBrowserBlock(x,y,'E',this.RS,this.id); // I hope putting this here won't have any nasty side-effect
	if (this.whiteborder)
	{
		this.painter.drawLocalWhiteBorder(this.playfield,x,y,'inactive');
	}

};

/** Remove a decoration block at the given coordinate.

	@param {number} x Horizontal coordinate
	@param {number} y Vertical coordinate
*/
Frame.prototype.removeDeco = function(x,y){
	this.painter.drawDeco(x,y,this.playfield[x][y][1],'eraser');
	this.playfield[x][y][1] = '';
};

/** Modify the next pieces.

		@param {number} position Define which position will be modified. 0 is hold, 1 is the next1 piece, 2 is the next2 piece, ...
		@param {string} type Type of the tetraminmo. Possible value: (SZLJTOIG)
	*/
Frame.prototype.modify_nexthold = function(position,type){
	this.nexthold[position] = type;
};

/** Modify the active piece.

	@param {number} level Opacity level, a number between 0 and 1.
*/
Frame.prototype.modify_AP_opacity = function(level){
	this.activePieceOpacity = level;
	this.painter.changeActiveOpacity(level);
	if (level == 'Flash' || level == 'flash')
	{
	  this.addPiece(this.activePiecePositionX,this.activePiecePositionY,this.activePieceType,this.activePieceOrientation,'Flash',false);
	}

};

/**Changes the rotation system and call a redraw.

	@param {string} system Desired rotation system
*/
Frame.prototype.modify_RS = function(system){
	this.RS = system;
	this.draw();
};
/** Changes the duration of a frame.

	@param {number} new_duration Desired new duration.
*/
Frame.prototype.modify_duration = function(new_duration){
	this.duration = new_duration;
};

/** Changes the border type.

	@param {string} kind Desired border type. Currently supported:
		'master' (gray-bluish), 'easy' (green) and 'death' (red). Defaults to master if
		none is selected
*/
Frame.prototype.modify_border = function(new_border){
	this.border = new_border;
	this.painter.drawBorder(this.border);
};

/** Change the whiteborder status (on or off)
	@param {boolean} Whiteborder status
*/
Frame.prototype.modify_whiteborder = function(new_border){
	this.whiteborder = new_border;
	if (this.whiteborder)
	{
		this.painter.drawWhiteBorder(this.playfield);
	}
	else
	{
		this.painter.eraseLayer('whiteborder');

	}

};

/* ----------------------------- */
/* -- Modifications (advanced)-- */
/* ----------------------------- */

/** 	Fill the playfield with a piece type, similar to a 'paint bucket' tool. Thanks DigitalDevil for the original code !

	@param {number} x Horizontal coordinate
	@param {number} y Vertical coordinate
	@param {string} replaced Possible value: SZLJTOIG
	@param {string} replacer Possible value: SZLJTOIG
*/
Frame.prototype.recursive_fill = function(x,y, replaced, replacer) {

	x = parseFloat(x);
	y = parseFloat(y);

	if (this.playfield[x][y][0] != replaced)
		{return;}

	this.modify(x, y, replacer);
	this.painter.drawBlock(x,y,replacer,this.RS,'inactive');
	if (this.whiteborder)
		{this.painter.drawLocalWhiteBorder(this.playfield,x,y);}

	if (y-1 >= 0)
		{this.recursive_fill(x, y-1, replaced, replacer);}

	if (y+1 < this.height)
		{this.recursive_fill(x, y+1, replaced, replacer);}

	if (x+1 < this.width)
		{this.recursive_fill(x+1, y, replaced, replacer);}

	if (x-1 >= 0)
		{this.recursive_fill(x-1, y, replaced, replacer);}
};

Frame.prototype.stack_lines = function(){
	var row_empty = true;
	for (var j = 0, jstop = this.height; j < jstop; j++) // start at the top row and go down
		{
			row_empty = true;
			// searches the row to find out how many blocks are in it
			for (var i = 0, istop = this.width; i < istop; i++)
			{
				if (this.playfield[i][j][0])
				{
					row_empty = false;
				}
			}
	
			// if the line is empty, shift the upwards rows
			if (row_empty)
			{
				// shifts rows down beginning at specified row and going up
				for (k = j; k > -1; k--)
				{
					// if not the top row, copy row above
					if ( k != 0)
					{
						for (i = 0; i < this.width; i++)
						{
							this.modify(i, k, this.playfield[i][k-1][0]);
						}
					}
				}
			}
		}
	this.painter.eraseLayer('inactive');
	this.draw();
};

Frame.prototype.clear_lines = function(){
	var row_occupation = 0; // to track how many blocks are on a row
	for (var j = 0, jstop = this.height; j < jstop; j++) // start at the top row and go down
		{
			row_occupation = 0;
			// searches the row to find out how many blocks are in it
			for (var i = 0, istop = this.width; i < istop; i++)
			{
				if (this.playfield[i][j][0])
				{
					row_occupation++;
				}
			}
	
			// clears line if row is completely occupied
			if (row_occupation == this.width)
			{
				for (var k=0,kstop = this.width;k<kstop;k++)
				{
					this.removeBlock(k,j);
				}
			}
		}
};
/* ------------------------ */
/* -- Active piece stuff -- */
/* ------------------------ */

/**'Paint' the active piece into the inactive layer
*/
Frame.prototype.paintActivePiece = function(){
	if(this.activePiecePositionX)
	{
		this.addPiece(this.activePiecePositionX,this.activePiecePositionY,this.activePieceType,this.activePieceOrientation,'inactive',false);

	}
};

/** Set the active piece variable to zero, paint the active piece
*/
Frame.prototype.lockActivePiece = function(){
	if(this.activePiecePositionX)
	{
		this.paintActivePiece();
		this.clear('active');
		this.activePieceOpacity = 1.0;
		this.painter.eraseLayer('active');
	}
};

/** Call addPiece at the same coordinate than the current one, only with the drop flag on,
effectively dropping the active piece
*/
Frame.prototype.dropActivePiece = function(){
		if(this.activePiecePositionX)
	{

		this.addPiece(this.activePiecePositionX,this.activePiecePositionY,this.activePieceType,this.activePieceOrientation,'active',true);
	}
};

/** Move the active piece in the given direction by calling addPiece again

	@param {string} direction Direction in which the piece move. Possible value:'left', 'right', 'up', 'down'
	*/
Frame.prototype.moveActivePiece = function(direction){
	if(this.activePiecePositionX)
	{
		var posX = this.activePiecePositionX;
		var posY = this.activePiecePositionY;
		switch(direction)
		{
			case 'left':
				posX--;
			break;
			case 'right':
				posX++;
			break;
			case 'up':
				posY--;
			break;
			case 'down':
				posY++;
			break;
		}
		if (this.piece_is_in(posX,posY,this.activePieceType,this.activePieceOrientation))
		{
		this.addPiece(posX,posY,this.activePieceType,this.activePieceOrientation,'active',false);
		}
	}
};

/** Rotate the active piece in the given direction by calling addPiece again

	@param {string} direction Direction in which the piece rotate. Possible value:'cw', 'ccw'
	*/
Frame.prototype.rotateActivePiece = function(direction){
var ori = this.activePieceOrientation;

	switch(direction)
	{
		case 'cw':
			switch(ori)
			{
				case 'i':
					ori = 'cw';
				break;
				case 'cw':
					ori = 'u';
				break;
				case 'u':
					ori = 'ccw';
				break;
				case 'ccw':
					ori = 'i';
				break;
			}
		break;
		case 'ccw':
			switch(ori)
			{
				case 'i':
					ori = 'ccw';
				break;
				case 'ccw':
					ori = 'u';
				break;
				case 'u':
					ori = 'cw';
				break;
				case 'cw':
					ori = 'i';
				break;
			}
		break;

	}
	if (this.piece_is_in(this.activePiecePositionX,this.activePiecePositionY,this.activePieceType,ori))
	{
	  this.addPiece(this.activePiecePositionX,this.activePiecePositionY,this.activePieceType,ori,'active',false);
	}
};




$(document).ready(function(){
	/* ------------------------------------------------------------------------- */
	/* ------------------------------------------------------------------------- */
	/* --------------------------- GLOBAL STUFF -------------------------------- */
	/* ------------------------------------------------------------------------- */
	/* ------------------------------------------------------------------------- */

	// Default state for the tetramino selection
	$('input[type=radio][name="select"][value=Ii]').attr('checked',true);
	$('input[type=radio][name="editor-tab"][value=inactive]').attr('checked',true);
	// Interface global constant
	var IS_CLICKING;
	// current tools:
	var TOOL_DROP = false;
	var TOOL_FILL = false;
	var TOOL_RECTANGULAR = false;
	var TOOL_PENCIL = false;
	var TOOL_ERASER = false; // todo: use hidden checkbox instead
	var TOOL_ERASER_DECO = false;
	// current panel
	var	DECORATION_PANEL = false;
	var	TETRAMINO_PANEL = true;
	var APCONTROL_PANEL = false;

	// initialization of the system
	var aPainter = new Painter('pf');
	var aDiag = new Diagram(aPainter);
	aDiag.init();
	aPainter.init();

	var initiator = setInterval(function(){
		if(aPainter.ready) {
			clearInterval(initiator);
			drawPalette('ARS',8,aPainter.sprite);
			drawPaletteDeco(8,aPainter.spritedeco);
			var URLsearch = window.location.search;
			if(URLsearch) // load if there's something in the url
			{
				$('#import').val(URLsearch);
				$('#import-button').click();
			}
			//aDiag.frames[0].addPiece(2,3,'L','i','inactive');
			//aDiag.new_copy_frame();
			//aDiag.frames[1].addPiece(7,8,'T','u','inactive');
			//aDiag.frames[1].addPiece(5,6,'S','ccw','inactive');
			//aDiag.frames[0].load('I~Ibdbebfbgbhcedfeefdfefffgfh~Sgdgdgegfggghhdhfhhidihjdjh_');
			//aDiag.frames[1].load('N~ISZ_J~p8_C~rhhp_I~Tadaeafbfbhcdcecfcgch~Gededeeefegehfdfffh~Shdhdhehfhhidifihjdjfjgjh_');
			//aDiag.new_frame();
			//aDiag.frames[2].load('N~JJZ_J~p8_C~rhpr_I~Sadaeafbfbhcdcecfcgch~Gededeeefegehfdfffh~Ihdhdhehfhhidifihjdjfjgjh_');
			//aDiag.frames[2].draw();
		}
	},10);

	/** Get the jQuery object of the export canvas.*/
	aPainter.CanvasExport = $('#pf-export');
	/** Get the 2d context of the related canvas*/
	aPainter.ContextExport = aPainter.CanvasExport[0].getContext('2d');


	/* ------------------------------------------------------------------------- */
	/* ------------------------------------------------------------------------- */
	/* --------------------------- MOUSE MANAGEMENT  --------------------------- */
	/* ------------------------------------------------------------------------- */
	/* ------------------------------------------------------------------------- */


	aDiag.painter.CanvasPreview.mousemove(function(e){
		var mouseX = e.pageX;
		var mouseY = e.pageY;
		// this.PFOriginX,this.PFOriginY, 10*this.block, 20*this.block
			if(mouseX > aDiag.painter.PFOriginXAbsolute && mouseX <= aDiag.painter.PFOriginXAbsolute+(10*aDiag.painter.blockSize) &&
				mouseY < aDiag.painter.PFOriginYAbsolute){}

			// if the mouse is in the playfield
			if(mouseX > aDiag.painter.PFOriginXAbsolute && mouseX <= aDiag.painter.PFOriginXAbsolute+(10*aDiag.painter.blockSize) &&
				mouseY > aDiag.painter.PFOriginYAbsolute && mouseY <= aDiag.painter.PFOriginYAbsolute+(20*aDiag.painter.blockSize))
			{
				var pfX = parseInt(Math.floor((mouseX - aDiag.painter.PFOriginXAbsolute)/aDiag.painter.blockSize),10);
				var pfY = parseInt(Math.floor((mouseY - aDiag.painter.PFOriginYAbsolute)/aDiag.painter.blockSize),10);
				aDiag.painter.eraseLayer('preview'); //erase the preview layer
				// depending on the current active panel...
				if(TETRAMINO_PANEL)
				{
					//console.log('['+mouseX+','+mouseY+']');
					//console.log('['+pfX+','+pfY+']');
					var extract = $('input[type=radio][name=select]:checked').attr('value');
					var type = extract.charAt(0);
					var orientation = extract.slice(1);
					var mode = '';
					// set the right mode
					if ($('#checkbox-active').is(':checked'))
						{mode ='active';}
					// set the right mode
					else
						{mode='inactive';}
					if ($('#checkbox-garbage').is(':checked'))
						{mode ='garbage';}

					if (IS_CLICKING)
						{
							//aDiag.painter.highlight(pfX,pfY);
							if (TOOL_PENCIL)
								{aDiag.frames[aDiag.current_frame].addPiece(pfX,pfY,type,'singleton',mode,TOOL_DROP);}
							else if (TOOL_ERASER)
								{aDiag.frames[aDiag.current_frame].removeBlock(pfX,pfY);}
							else
								{aDiag.frames[aDiag.current_frame].addPiece(pfX,pfY,type,orientation,mode,TOOL_DROP);}
						}
					else
						{
							if (TOOL_ERASER)
								{aDiag.frames[aDiag.current_frame].addPiece(pfX,pfY,'G','singleton','preview',TOOL_DROP);}
							else if(TOOL_FILL || TOOL_PENCIL)
								{aDiag.frames[aDiag.current_frame].addPiece(pfX,pfY,type,'singleton','preview',TOOL_DROP);}
							else
							{
								if (type == 'I') { //offset I so it doesn't look weird on mouseover
									aDiag.frames[aDiag.current_frame].addPiece(parseInt(pfX-1,10),pfY,type,orientation,'preview',TOOL_DROP);}
								else
									{aDiag.frames[aDiag.current_frame].addPiece(pfX,pfY,type,orientation,'preview',TOOL_DROP);}
							}
						}
				}
				else
				{
				aDiag.painter.eraseLayer('preview'); //erase the preview layer
					if(TOOL_ERASER_DECO){
					aDiag.frames[aDiag.current_frame].addPiece(pfX,pfY,'G','singleton','preview',TOOL_DROP);
					}
					else
					{
						var extract = $('input[type=radio][name="select-deco"]:checked').attr('value');
						aDiag.frames[aDiag.current_frame].addPiece(pfX,pfY,extract,'singleton','decoration-preview',false);

					}

				}
			}
	//var clientCoords = "( " + e.clientX + ", " + e.clientY + " )";
	//console.log("( e.clientX, e.clientY ) : " + clientCoords);
	});// CanvasPreview.mousemove

	/*Event: CanvasPreview.click
	Manages the click event on the outermost canvas*/
	aDiag.painter.CanvasPreview.mousedown(function(e){
		var mouseX = e.pageX;
		var mouseY = e.pageY;
			if(mouseX > aDiag.painter.PFOriginXAbsolute && mouseX <= aDiag.painter.PFOriginXAbsolute+(10*aDiag.painter.blockSize) &&
				mouseY > aDiag.painter.PFOriginYAbsolute && mouseY <= aDiag.painter.PFOriginYAbsolute+(20*aDiag.painter.blockSize))
			{
				var pfX = parseInt(Math.floor((mouseX - aDiag.painter.PFOriginXAbsolute)/aDiag.painter.blockSize),10);
				var pfY = parseInt(Math.floor((mouseY - aDiag.painter.PFOriginYAbsolute)/aDiag.painter.blockSize),10);
					//aDiag.painter.highlight(pfX,pfY);
				if(TETRAMINO_PANEL)
				{
					var extract = $('input[type=radio][name="select"]:checked').attr('value');
					var type = extract.charAt(0);
					var orientation = extract.slice(1);
					var mode = '';


					if ($('#checkbox-active').is(':checked'))
					{
						mode ='active';
					}
					else{
						mode='inactive';
					}

					if ($('#checkbox-garbage').is(':checked'))
						{
						mode ='garbage';
						}


					if (TOOL_FILL && type != aDiag.frames[aDiag.current_frame].lookup(pfX,pfY)) {
						aDiag.frames[aDiag.current_frame].recursive_fill(pfX,
																			pfY,
																			aDiag.frames[aDiag.current_frame].lookup(pfX,pfY),
																			type);
						//addPiece(pfX,pfY,type,orientation,mode,TOOL_DROP);
						//aDiag.frames[aDiag.current_frame].addPiece(pfX,pfY,type,orientation,mode,TOOL_DROP);
						}
						else if (TOOL_PENCIL)
						{
							aDiag.frames[aDiag.current_frame].addPiece(pfX,pfY,type,'singleton',mode,TOOL_DROP);
						}
						else if (TOOL_ERASER)
						{
							aDiag.frames[aDiag.current_frame].removeBlock(pfX,pfY);
						}
						else
						{
							if (type == 'I') { //offset I so it doesn't look weird on mouseover
								if(aDiag.frames[aDiag.current_frame].lookup(pfX,pfY)) // erase on occucupied case here
								{
									aDiag.frames[aDiag.current_frame].addPiece(parseInt(pfX-1,10),pfY,type,orientation,'erase',TOOL_DROP);
								}
								else
								{
								aDiag.frames[aDiag.current_frame].addPiece(parseInt(pfX-1,10),pfY,type,orientation,mode,TOOL_DROP);
								}
							}
							else
							{
								if(aDiag.frames[aDiag.current_frame].lookup(pfX,pfY))  // erase on occucupied case here
								{
									aDiag.frames[aDiag.current_frame].addPiece(pfX,pfY,type,orientation,'erase',TOOL_DROP);
								}
								else
								{
								aDiag.frames[aDiag.current_frame].addPiece(pfX,pfY,type,orientation,mode,TOOL_DROP);
								}
							}
						}

				}
			else // aka if(DECORATION_PANEL)
			{
				if(TOOL_ERASER_DECO)
				{
					aDiag.frames[aDiag.current_frame].removeDeco(pfX,pfY);
				}
				else
				{
				var extract = $('input[type=radio][name="select-deco"]:checked').attr('value');
				aDiag.frames[aDiag.current_frame].addPiece(pfX,pfY,extract,'singleton','decoration',false);
				//aDiag.frames[aDiag.current_frame].drawDeco(pfX,pfY,extract);
				}
			}
		}
	});//end CanvasPreview.mousedown

	/*Event: CanvasControl.click
	Manages the click event on the joystick visualisation canvas*/
	aDiag.painter.CanvasControl.mousedown(function(e){
		var mouseX = e.pageX;
		var mouseY = e.pageY;
		var height = aDiag.painter.CanvasControl.height();
		var direction;
		if (mouseX < height + aDiag.painter.CntrlOriginX) // that if separates the joystick and the button
		{
			if (mouseX < aDiag.painter.CntrlOriginX + height/3 &&
				mouseY < aDiag.painter.CntrlOriginY + height/3)
			{
				//ul
				direction = 'ul';
			}

			if (mouseX > aDiag.painter.CntrlOriginX + height/3 &&
				mouseX < aDiag.painter.CntrlOriginX + 2*height/3 &&
				mouseY < aDiag.painter.CntrlOriginY + height/3)
			{
				//u
				direction = 'u';
			}

			if (mouseX > aDiag.painter.CntrlOriginX + 2*height/3 &&
				mouseX < aDiag.painter.CntrlOriginX + height &&
				mouseY < aDiag.painter.CntrlOriginY + height/3)
			{
				//ur
				direction = 'ur';
			}

			if (mouseX < aDiag.painter.CntrlOriginX + height/3 &&
				mouseY > aDiag.painter.CntrlOriginY + height/3 &&
				mouseY < aDiag.painter.CntrlOriginY + 2*height/3)
			{
				//l
				direction = 'l';
			}

			if (mouseX > aDiag.painter.CntrlOriginX + height/3 &&
				mouseX < aDiag.painter.CntrlOriginX + 2*height/3 &&
				mouseY > aDiag.painter.CntrlOriginY + height/3 &&
				mouseY < aDiag.painter.CntrlOriginY + 2*height/3)
			{
				//center
				aDiag.painter.resetJoystick();
				aDiag.frames[aDiag.current_frame].modify_control('c','rest');
				aPainter.drawJoystick('c','rest');
				return;
			}


			if (mouseX > aDiag.painter.CntrlOriginX + 2*height/3 &&
				mouseY > aDiag.painter.CntrlOriginY + height/3 &&
				mouseY < aDiag.painter.CntrlOriginY + 2*height/3)
			{
				//r
				direction = 'r';
			}


			if (mouseX < aDiag.painter.CntrlOriginX + height/3 &&
				mouseY > aDiag.painter.CntrlOriginY + 2*height/3 &&
				mouseY < aDiag.painter.CntrlOriginY + height)
			{
				//dl
				direction = 'dl';
			}

			if (mouseX > aDiag.painter.CntrlOriginX + height/3 &&
				mouseY > aDiag.painter.CntrlOriginY + 2*height/3 &&
				mouseY < aDiag.painter.CntrlOriginY + height)
			{
				//d
				direction = 'd';
			}

			if (mouseX > aDiag.painter.CntrlOriginX + 2*height/3 &&
				mouseY > aDiag.painter.CntrlOriginY + 2*height/3 &&
				mouseY < aDiag.painter.CntrlOriginY + height)
			{
				//dr
				direction = 'dr';
				//aDiag.painter.drawJoystick('dr','holded')
			}

			if (direction != aDiag.frames[aDiag.current_frame].joystick_direction)
			{
				aDiag.painter.resetJoystick();
				aDiag.frames[aDiag.current_frame].modify_control(direction,'pressed');
				aPainter.drawJoystick(direction,'pressed');
			}
			else
			{
				switch(aDiag.frames[aDiag.current_frame].joystick_state)
				{
				case 'rest':
					aDiag.painter.resetJoystick();
					aDiag.frames[aDiag.current_frame].modify_control(direction,'pressed');
					aPainter.drawJoystick(direction,'pressed');

				break;
				case 'pressed':
					aDiag.painter.resetJoystick();
					aDiag.frames[aDiag.current_frame].modify_control(direction,'holded');
					aPainter.drawJoystick(direction,'holded');
				break;
				case 'holded':
					aDiag.painter.resetJoystick();
					aDiag.frames[aDiag.current_frame].modify_control(direction,'rest');
					aPainter.drawJoystick(direction,'rest');
				break;
				default: break;
				}
			}

		} // end joystick

		if (mouseX > height + aDiag.painter.CntrlOriginX) //buttons
		{
			var radius = height/5;
			var button = '';
			var index = '';

			if(mouseX < height+height/4+radius + aDiag.painter.CntrlOriginX &&
				mouseY < height/4+radius + aDiag.painter.CntrlOriginY)
			{
				//A
				button = 'A';
			}
			if(mouseX > height+height/4+2*radius+height/16-radius + aDiag.painter.CntrlOriginX &&
				mouseX < height+height/4+2*radius+height/16+radius + aDiag.painter.CntrlOriginX &&
				mouseY < height/4+radius + aDiag.painter.CntrlOriginY)
			{
				// B
				button = 'B';
			}
			if(mouseX > height+height/4+4*radius+2*height/16-radius + aDiag.painter.CntrlOriginX&
				mouseX < height+height/4+4*radius+2*height/16+radius + aDiag.painter.CntrlOriginX&
				mouseY < height/4+radius + aDiag.painter.CntrlOriginY)
			{
				// C
				button = 'C';
			}

			if(mouseX < height+height/4+radius + aDiag.painter.CntrlOriginX &&
				mouseY > 3*height/4-radius + aDiag.painter.CntrlOriginY)
			{
				// D
				button = 'D';
			}
			/*
			if(mouseX > height+height/4+2*radius+height/16-radius + aDiag.painter.CntrlOriginX &&
				mouseX < height+height/4+2*radius+height/16+radius + aDiag.painter.CntrlOriginX &&
				mouseY > 3*height/4-radius + aDiag.painter.CntrlOriginY)
			{
				// E
				button = 'E';
			}
			if(mouseX > height+height/4+4*radius+2*height/16-radius + aDiag.painter.CntrlOriginX&
				mouseX < height+height/4+4*radius+2*height/16+radius + aDiag.painter.CntrlOriginX&
				mouseY > 3*height/4-radius + aDiag.painter.CntrlOriginY)
			{
				// F
				console.log ('F');
			}
			*/

			switch(button)
			{
				case 'A': index = 0; break;
				case 'B': index = 1; break;
				case 'C': index = 2; break;
				case 'D': index = 3; break;
				case 'E': index = 4; break;
				case 'F': index = 5; break;
			}
			switch(aDiag.frames[aDiag.current_frame].button_state[index])
			{
				case 'pressed':
					aDiag.frames[aDiag.current_frame].modify_button(button,'holded');
					aPainter.drawButton(button,'holded');
					break;
				case 'holded':
					aDiag.frames[aDiag.current_frame].modify_button(button,'rest');
					aPainter.drawButton(button,'rest');
					break;
				case 'rest':
					aDiag.frames[aDiag.current_frame].modify_button(button,'pressed');
					aPainter.drawButton(button,'pressed');
					break;
			}
		}//end buttons



		// aDiag.painter.CntrlOriginX;
		// aDiag.painter.CntrlOriginY;

	});//end CanvasControl.click


	/*Event: CanvasNextHold.click
	Manages the click event on the next & hold canvas*/
	aDiag.painter.CanvasNextHold.click(function(e){
		var mouseX = e.pageX;
		var mouseY = e.pageY;
		//console.log('['+mouseX+','+mouseY+']');
		//var pfX = parseInt(Math.floor((mouseX)/aDiag.painter.blockSize),10);
		//var pfY = parseInt(Math.floor((mouseY)/aDiag.painter.blockSize),10);
		var pfX = parseInt(1+((mouseX - aDiag.painter.CanvasNextHold.offset().left)/aDiag.painter.blockSize),10);
		var pfY = parseInt(1+((mouseY - aDiag.painter.CanvasNextHold.offset().top)/aDiag.painter.blockSize),10);
		var extract = $('input[type=radio][name=select]:checked').attr('value');
		var type = extract.charAt(0);
		if (pfX >= 0 && pfX < 4) {
			if(!aDiag.frames[aDiag.current_frame].nexthold[0])
			{
				aDiag.frames[aDiag.current_frame].modify_nexthold(0,type);
				aDiag.painter.drawNextHold(0,type,aDiag.frames[aDiag.current_frame].RS);
			}
			else
			{
				aDiag.frames[aDiag.current_frame].modify_nexthold(0,'');
				aDiag.painter.drawNextHold(0,'',aDiag.frames[aDiag.current_frame].RS);
			}

		}
		if (pfX >= 4 && pfX < 8) {
			if(!aDiag.frames[aDiag.current_frame].nexthold[1])
			{
				aDiag.frames[aDiag.current_frame].modify_nexthold(1,type);
				aDiag.painter.drawNextHold(1,type,aDiag.frames[aDiag.current_frame].RS);
			}
			else
			{
				aDiag.frames[aDiag.current_frame].modify_nexthold(1,'');
				aDiag.painter.drawNextHold(1,'',aDiag.frames[aDiag.current_frame].RS);
			}
		}
		if (pfX >= 8 && pfX < 11) {
			if(!aDiag.frames[aDiag.current_frame].nexthold[2])
			{
				aDiag.frames[aDiag.current_frame].modify_nexthold(2,type);
				aDiag.painter.drawNextHold(2,type,aDiag.frames[aDiag.current_frame].RS);
			}
			else
			{
				aDiag.frames[aDiag.current_frame].modify_nexthold(2,'');
				aDiag.painter.drawNextHold(2,'',aDiag.frames[aDiag.current_frame].RS);
			}
		}
		if (pfX >= 11) {
			if(!aDiag.frames[aDiag.current_frame].nexthold[3])
			{
				aDiag.frames[aDiag.current_frame].modify_nexthold(3,type);
				aDiag.painter.drawNextHold(3,type,aDiag.frames[aDiag.current_frame].RS);
			}
			else
			{
				aDiag.frames[aDiag.current_frame].modify_nexthold(3,'');
				aDiag.painter.drawNextHold(3,'',aDiag.frames[aDiag.current_frame].RS);
			}
		}

	}); //end CanvasNextHold.click

	/* ------------------------------------------------------------------------- */
	/* --------------------------- BUTTON MANAGEMENT  -------------------------- */
	/* ------------------------------------------------------------------------- */
	/*--- Playfield ---*/
	$('#pf-cmd_first').click(function(){
		aDiag.first_frame();

	});

	$('#pf-cmd_prev').click(function(){
		aDiag.previous_frame();
		opacity_highlight_remove();
		opacity_auto_highlight();
	});

	$('#pf-cmd_next').click(function(){
		if(aDiag.current_frame < aDiag.frames.length - 1){
		aDiag.next_frame();
		opacity_highlight_remove();
		opacity_auto_highlight();
		}
		else
		{
		$('#pf-cmd_clone').click();
		}
	});

	$('#pf-cmd_last').click(function(){
		aDiag.last_frame();
	});
	
	// Progressbar
	$('#pf-current-frame').blur(function(){
		if ($('#pf-current-frame').val() > 0 && $('#pf-current-frame').val() <= aDiag.frames.length)
		{aDiag.goto_frame(parseInt($('#pf-current-frame').val()-1,10));}
	});

	// Comment
	$('#pf-comment').blur(function(){
		aDiag.frames[aDiag.current_frame].comment = $(this).val();
	});

	/*--- Active piece buttons ---*/

	$('#cmd_move_up').click(function(){
		if($('#pf-auto-action-frame-increment:checked').val())
		{
			$('#pf-cmd_clone').click();
		}
		aDiag.frames[aDiag.current_frame].moveActivePiece('up');
		
	});
	$('#cmd_move_down').click(function(){
		if($('#pf-auto-action-frame-increment:checked').val())
		{
			$('#pf-cmd_clone').click();
		}
		aDiag.frames[aDiag.current_frame].moveActivePiece('down');
	});
	$('#cmd_move_left').click(function(){
		if($('#pf-auto-action-frame-increment:checked').val())
		{
			$('#pf-cmd_clone').click();
		}
		aDiag.frames[aDiag.current_frame].moveActivePiece('left');
	});
	$('#cmd_move_right').click(function(){
		if($('#pf-auto-action-frame-increment:checked').val())
		{
			$('#pf-cmd_clone').click();
		}
		aDiag.frames[aDiag.current_frame].moveActivePiece('right');
	});

	$('#cmd_ccw').click(function(){
		if($('#pf-auto-action-frame-increment:checked').val())
		{
			$('#pf-cmd_clone').click();
		}
		aDiag.frames[aDiag.current_frame].rotateActivePiece('ccw');
	});
	$('#cmd_cw').click(function(){
		if($('#pf-auto-action-frame-increment:checked').val())
		{
			$('#pf-cmd_clone').click();
		}
		aDiag.frames[aDiag.current_frame].rotateActivePiece('cw');
	});

	$('#cmd_paint').click(function(){
		aDiag.frames[aDiag.current_frame].paintActivePiece();
	});
	$('#cmd_lock').click(function(){
		aDiag.frames[aDiag.current_frame].lockActivePiece();
		if(IS_TIMING)
		{
			$('#cmd_reset_timer').click();
		}
		
	});
	$('#cmd_drop').click(function(){
		aDiag.frames[aDiag.current_frame].dropActivePiece();
	});
	
	$('#pf-duration').blur(function(){
		aDiag.frames[aDiag.current_frame].duration = parseFloat($(this).val());
	});

	$('#pf-active-opacity').blur(function(){
		aDiag.frames[aDiag.current_frame].modify_AP_opacity($(this).val());
	});
	// TODO: var $cmd_opacity_3 = $('#cmd_opacity_3') 

	var $cmd_opacity_none = $('#cmd_opacity_none'),
	$cmd_opacity_3 = $('#cmd_opacity_3'),
	$cmd_opacity_2 = $('#cmd_opacity_2'),
	$cmd_opacity_1 = $('#cmd_opacity_1'),
	$cmd_opacity_lock = $('#cmd_opacity_lock'),
	$cmd_opacity_flash = $('#cmd_opacity_flash'); 

	function opacity_highlight_remove(){
		$cmd_opacity_none.removeClass('pressed');
		$cmd_opacity_3.removeClass('pressed');
		$cmd_opacity_2.removeClass('pressed');
		$cmd_opacity_1.removeClass('pressed');
		$cmd_opacity_lock.removeClass('pressed');
		$cmd_opacity_flash.removeClass('pressed');
	}
	function opacity_auto_highlight(){
		switch($('#pf-active-opacity').val()){
		case '1.0':
			$('#cmd_opacity_none').addClass('pressed')
			break;
		case '0.9':
			$('#cmd_opacity_3').addClass('pressed')
			break;
		case '0.8':
			$('#cmd_opacity_2').addClass('pressed')
			break;
		case '0.7':
			$('#cmd_opacity_1').addClass('pressed')
			break;
		case '0.55':
			$('#cmd_opacity_lock').addClass('pressed')
			break;
		case 'Flash':
			$('#cmd_opacity_flash').addClass('pressed')
			break;
		}
	}

	// TODO more cache !

	$('#cmd_opacity_none').click(function(){
		$('#pf-active-opacity').val('1.0').blur();
		opacity_highlight_remove();
		$(this).addClass('pressed');
	});
	$('#cmd_opacity_3').click(function(){
		$('#pf-active-opacity').val('0.9').blur();
		opacity_highlight_remove();
		$(this).addClass('pressed');
	});
	$('#cmd_opacity_2').click(function(){
		$('#pf-active-opacity').val('0.8').blur();
		opacity_highlight_remove();
		$(this).addClass('pressed');
	});
	$('#cmd_opacity_1').click(function(){
		$('#pf-active-opacity').val('0.7').blur();
		opacity_highlight_remove();
		$(this).addClass('pressed');
	});
	$('#cmd_opacity_lock').click(function(){
		$('#pf-active-opacity').val('0.55').blur();
		opacity_highlight_remove();
		$(this).addClass('pressed');
	});
	$('#cmd_opacity_flash').click(function(){
		$('#pf-active-opacity').val('Flash').blur();
		opacity_highlight_remove();
		$(this).addClass('pressed');
	});

	var TIMER, TIMER_MODE,IS_TIMING = false;
	$('#cmd_reset_timer').click(function(){
		IS_TIMING = true;
		TIMER = 1;
		$('#indic').html(parseInt(TIMER_MODEL[$('#timer-select').val()].lock-TIMER,10)+' frames left until lock');
		$('#cmd_timer_tick').attr('style','');
		$('#cmd_reset_timer').attr('style','');
		$('#hr_tick').attr('style','');
	});

	$('#cmd_startstop_timer').click(function(){
		
		if(IS_TIMING) // -> stop timer
		{
			$(this).attr('value','Start timer');
			IS_TIMING = false;
			$('#indic').html('');
			$('#cmd_reset_timer').attr('style','display:none');
			$('#cmd_timer_tick').attr('style','display:none');
			$('#hr_tick').attr('style','display:none;');
		}
		else // -> start timer
		{
			$(this).attr('value','Stop timer');
			IS_TIMING = true;
			TIMER = 1;
			$('#indic').html(parseInt(TIMER_MODEL[$('#timer-select').val()].lock-TIMER,10)+' frames left until lock');
			$('#cmd_timer_tick').attr('style','');
			$('#cmd_reset_timer').attr('style','');
			$('#hr_tick').attr('style','');
		}
		
	});

	function timer_tick(){
		TIMER++;
		$('#indic').html(parseInt(TIMER_MODEL[$('#timer-select').val()].lock-TIMER,10)+' frames left until lock');
		if(TIMER <= TIMER_MODEL[$('#timer-select').val()].separation1) // 12
		{
			$('#cmd_opacity_none').click();
		}
		if (TIMER <= TIMER_MODEL[$('#timer-select').val()].separation2 &&
			TIMER > TIMER_MODEL[$('#timer-select').val()].separation1) //18
		{
			$('#cmd_opacity_3').click();
		}
		if (TIMER <= TIMER_MODEL[$('#timer-select').val()].separation3 &&
			TIMER > TIMER_MODEL[$('#timer-select').val()].separation1 &&
			TIMER > TIMER_MODEL[$('#timer-select').val()].separation2) //24
		{
			$('#cmd_opacity_2').click();
		}
		if (TIMER <= TIMER_MODEL[$('#timer-select').val()].separation4 &&
			TIMER > TIMER_MODEL[$('#timer-select').val()].separation1 &&
			TIMER > TIMER_MODEL[$('#timer-select').val()].separation2 &&
			TIMER > TIMER_MODEL[$('#timer-select').val()].separation3) // 30
		{
			$('#cmd_opacity_1').click();
		}
		if(TIMER  == parseInt(TIMER_MODEL[$('#timer-select').val()].separation4)) // 30
		{
			$('#cmd_opacity_lock').click();
			$('#indic').html('Lock');
		}
		if(TIMER  == parseInt(1+TIMER_MODEL[$('#timer-select').val()].separation4)) // 30
		{
			$('#cmd_opacity_flash').click();
			$('#indic').html('Flash');
		}
		if(TIMER  == parseInt(2+TIMER_MODEL[$('#timer-select').val()].separation4)) // 30
		{
			$('#cmd_opacity_flash').click();
			$('#indic').html('Flash');
		}
		if(TIMER  > parseInt(2+TIMER_MODEL[$('#timer-select').val()].separation4)) // 30
		{
			$('#indic').html('Locked!');
			$('#cmd_lock').click();
			$('#cmd_startstop_timer').click();
		}
		
	}
	var TIMER_MODEL = {
		TGM1: {
			ARE: 30,
			lock: 30, // 30 -1
			separation1: 12, // +12f = 40%
			separation2: 18, // +6f = 20%
			separation3: 24, // +6f = 20%
			separation4: 30 // +6f =20%
			// 
			},
		Master000699:{
			ARE: 25,
			lock: 30,
			separation1: 12,
			separation2: 18,
			separation3: 24,
			separation4: 30
		},
		Master700799:{
			ARE: 16,
			lock: 30,
			separation1: 12,
			separation2: 18,
			separation3: 24,
			separation4: 30
		},
		Master800899:{
			ARE: 12,
			lock: 30,
			separation1: 12,
			separation2: 18,
			separation3: 24,
			separation4: 30
		},
		Master900999:{
			ARE: 12,
			lock: 17,
			separation1: 6,
			separation2: 10,
			separation3: 14,
			separation4: 17
		},
		Master10001099:{
			ARE: 6,
			lock: 17,
			separation1: 6,
			separation2: 10,
			separation3: 14,
			separation4: 17
		},
		Master11001199:{
			ARE: 5,
			lock: 15,
			separation1: 6,
			separation2: 10,
			separation3: 13,
			separation4: 15
		},
		Master12001299:{
			ARE: 4,
			lock: 15,
			separation1: 6,
			separation2: 10,
			separation3: 13,
			separation4: 15
		},
		Death000099:{
			ARE: 16,
			lock: 30,
			separation1: 12,
			separation2: 18,
			separation3: 24,
			separation4: 30
		},
		Death100199:{
			ARE: 12,
			lock: 26,
			separation1: 10,
			separation2: 16,
			separation3: 21,
			separation4: 26
		},
		Death200299:{
			ARE: 12,
			lock: 22,
			separation1: 9,
			separation2: 14,
			separation3: 18,
			separation4: 22
		},
		Death300399:{
			ARE: 6,
			lock: 18,
			separation1: 8,
			separation2: 12,
			separation3: 15,
			separation4: 18
		},
		Death400499:{
			ARE: 5,
			lock: 15,
			separation1: 6,
			separation2: 9,
			separation3: 12,
			separation4: 15
		},
		Death500999:{
			ARE: 4,
			lock: 15,
			separation1: 6,
			separation2: 9,
			separation3: 12,
			separation4: 15
		},
		Shirase000199:{
			ARE: 10,
			lock: 18,
			separation1: 8,
			separation2: 12,
			separation3: 15,
			separation4: 18
		},
		Shirase200299:{
			ARE: 10,
			lock: 17,
			separation1: 7,
			separation2: 11,
			separation3: 14,
			separation4: 17
		},
		Shirase300499:{
			ARE: 4,
			lock: 15,
			separation1: 6,
			separation2: 9,
			separation3: 12,
			separation4: 15
		},
		Shirase500599:{
			ARE: 4,
			lock: 13,
			separation1: 6,
			separation2: 9,
			separation3: 11,
			separation4: 13
		},
		Shirase6001099:{
			ARE: 4,
			lock: 12,
			separation1: 6,
			separation2: 8,
			separation3: 10,
			separation4: 12
		},
		Shirase11001199:{
			ARE: 4,
			lock: 10,
			separation1: 4,
			separation2: 6,
			separation3: 8,
			separation4: 10
		},
		Shirase12001299:{
			ARE: 4,
			lock: 8,
			separation1: 4,
			separation2: 6,
			separation3: 7,
			separation4: 8
		},
		TDSSRS:{
			ARE: 1, // 0 in reality
			lock: 30,
			separation1: 10,
			separation2: 17,
			separation3: 25,
			separation4: 30
		}
	}

	/*--- Frame buttons ---*/
	$('#cmd_clear_lines').click(function(){
		aDiag.frames[aDiag.current_frame].clear_lines();
	});
	$('#cmd_stack_lines').click(function(){
		aDiag.frames[aDiag.current_frame].stack_lines();
	});
	$('#cmd_clearstack_lines').click(function(){
		aDiag.frames[aDiag.current_frame].clear_lines();
		aDiag.frames[aDiag.current_frame].stack_lines();
	});

	$('#cmd_clear_inactive').click(function(){
		aDiag.frames[aDiag.current_frame].clear('inactive');
	});
	$('#cmd_clear_active').click(function(){
		aDiag.frames[aDiag.current_frame].clear('active');
	});
	$('#cmd_clear_decoration').click(function(){
		aDiag.frames[aDiag.current_frame].clear('decoration');
	});

	$('#cmd_clear_all').click(function(){
		aDiag.frames[aDiag.current_frame].clear('all');
	});

	$('#activate-white-border').click(function(){
	//change-all-border

		if ($('#activate-white-border:checked').val())
		{
			aDiag.frames[aDiag.current_frame].modify_whiteborder(true);
		}
		else
		{
			aDiag.frames[aDiag.current_frame].modify_whiteborder(false);
		}

	});
	$('#change-all-whiteborder').click(function(){
		aDiag.modify_whiteborder($('#border-select').val());
	});

	$('#border-select').change(function(){
		aDiag.frames[aDiag.current_frame].modify_border($('#border-select').val());
	});
	$('#change-all-border').click(function(){
		aDiag.modify_border($('#border-select').val());
	});

	$('#rs-select').change(function(){
		aDiag.frames[aDiag.current_frame].modify_RS($('#rs-select').val());
	});
	$('#change-all-rs').click(function(){
		aDiag.modify_RS($('#rs-select').val());
	});

	$('#duration-1f').click(function(){
		$('#pf-duration').val('1').blur();
	});
	$('#duration-5f').click(function(){
		$('#pf-duration').val('5').blur();
	});
	$('#duration-15f').click(function(){
		$('#pf-duration').val('15').blur();
	});
	$('#duration-60f').click(function(){
		$('#pf-duration').val('60').blur();
	});
	$('#duration-remaining').click(function(){
	var one = TIMER_MODEL[$('#timer-select').val()].separation1 - TIMER;
	var two = TIMER_MODEL[$('#timer-select').val()].separation2 - TIMER;
	var three = TIMER_MODEL[$('#timer-select').val()].separation3 - TIMER;
	var four = TIMER_MODEL[$('#timer-select').val()].separation4 - TIMER;

	var time_remaining = Math.min((one > 0) ? one : 1000 ,(two > 0) ? two : 1000,(three > 0) ? three : 1000, (four > 0) ? four : 1000);
	aDiag.modify_duration(time_remaining);
	});
	$('#change-all-duration').click(function(){
		aDiag.modify_duration(parseInt($('#pf-duration').val(),10));
		//console.log(parseInt($('#pf-duration').val(),10));
	});

	/*--- Diagram buttons ---*/

	$('#pf-cmd_new').click(function(){
		aDiag.new_frame();
		aDiag.frames[aDiag.current_frame].draw();
	});
	$('#pf-cmd_clone').click(function(){
		aDiag.new_copy_frame();
		aDiag.frames[aDiag.current_frame].draw();
		if(IS_TIMING)
		{
			timer_tick();
		}
	});
	$('#pf-cmd_del').click(function(){
		aDiag.remove_current_frame();
		aDiag.frames[aDiag.current_frame].draw();
		aDiag.update_framecount();
	});
	$('#pf-cmd_remove_following').click(function(){
		aDiag.remove_following_frames();
		aDiag.frames[aDiag.current_frame].draw();
		aDiag.update_framecount();
	});

	$('#cmd_nuke').click(function(){
		var confirmation = window.confirm('This will reset everything ! Are you sure ?');
		if (confirmation)
		{
		aDiag.remove_all_playfields();
		aDiag.frames[aDiag.current_frame].draw();
		}
	});
	$('#cmd_timer_tick').click(function(){
		timer_tick();
	});
	/* -------------------------- */

	$('#tetramino-panel table').click(function(){
		$('#tetramino-panel td').removeClass('pressed');
		$('#tetramino-panel input[type=radio]:checked').parent().parent().addClass('pressed');
	});

	$('#panel-decorations').click(function(){
		$('#panel-decorations td').removeClass('pressed');
		$('#panel-decorations input:checked').parent().parent().addClass('pressed');
	});

	$('#fumen_import').click(function(){

	var fumenstring = $('#import').val();
	var encstr = fumenstring.slice(fumenstring.indexOf('@')); // look for the thing that's after the version metadata
	//'7ebhiipqbxqb5qbiqbqqbyqb6qbjqbrqbzqb7qbkqb?sqb0qb8qblqbtqb1qb9qbmqbuqb2qb+qbnqbvqb3qb/qb';// full rotation
	//var encstr = '7eYKHWOA0BeTASIjRASIyQEF2BAABmBUcBviBLjBWe?BAwNyAU9sJEFb0HEvT98AwSVTASY6dD2488AwA2JEnoo2AD?MeGEzXpTASICKEFbEcEP5BAAMQBOGBrRBtXBqHBpPBEOBv4?A9JBJPBnDBO+ALABdHBFgBdgBlfBAAA';
	//var encstr ='/dD3hbH3ibI3gbH3hbI3gbC3pbAoUxAso2TAySzTAS?ITeDZ2vvAuno2A5H5TASY6dD2488AQ+74Dzoo2Azo2TASo/?QEOAAAA7eEh9OEAlsyfCAAAbKBVJBSFBNdE3kbC3mbC3mbC?3mbC3icAwNEA6HXyD7eVtOqyAFreRAyp+5APGVTAyp78Axn?A6AFr+5AxnA6AFreRAyp7CEFStJEFreRAypeRAyZAAAlecF?ectHBtocFocNyc13cdiBt3cl3cF3cNBd1mBjYBZzcBcBGZB?aYBUycchBAAA";
	//First, run some actual fumen code, 'cause I (PP) am not a CS genius. Thanks myndzi for the hints about how it works
	// I stripped some useless (for my purposes) part of the code. Gomenasai Mihys-san !
	enclim=32768;
	enc=new Array(enclim+1024);
	enctbl='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	asctbl=' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
	framelim=2000;
	f=new Array(220);encf=new Array(220);af=new Array(220*(framelim+1));
	p=new Array(3);ap=new Array(3*(framelim+1));
	au=new Array(framelim);
	am=new Array(framelim);
	ac=new Array(framelim);
	ad=new Array(framelim);
	ct=1;
	b=new Array(
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,1,1,1,2,1,3,1,1,0,1,1,1,2,1,3,0,1,1,1,2,1,3,1,1,0,1,1,1,2,1,3,
	0,1,1,1,2,1,0,2,1,0,1,1,1,2,2,2,2,0,0,1,1,1,2,1,0,0,1,0,1,1,1,2,
	1,1,2,1,1,2,2,2,1,1,2,1,1,2,2,2,1,1,2,1,1,2,2,2,1,1,2,1,1,2,2,2,
	0,1,1,1,1,2,2,2,2,0,1,1,2,1,1,2,0,1,1,1,1,2,2,2,2,0,1,1,2,1,1,2,
	0,1,1,1,2,1,1,2,1,0,1,1,2,1,1,2,1,0,0,1,1,1,2,1,1,0,0,1,1,1,1,2,
	0,1,1,1,2,1,2,2,1,0,2,0,1,1,1,2,0,0,0,1,1,1,2,1,1,0,1,1,0,2,1,2,
	1,1,2,1,0,2,1,2,0,0,0,1,1,1,1,2,1,1,2,1,0,2,1,2,0,0,0,1,1,1,1,2
	);

	enclen=0;
	for(i=0;i<encstr.length;i++){
		tmp=enctbl.indexOf(encstr.charAt(i));if(tmp>=0)enc[enclen++]=tmp;
	}
	for(i=enclen;i<enclim;i++)enc[i]=0;
	encc=0;
	fldrepcnt=0;
	for(i=0;i<220;i++)af[i]=0;
	for(e=0;encc<enclen;e++){
		if(fldrepcnt<1){
		for(j=0;j<220;){
			tmp=enc[encc++];tmp+=enc[encc++]*64;
			tmp2=tmp%220;tmp=Math.floor(tmp/220);
			tmp1=tmp%17;tmp=Math.floor(tmp/17);
			for(i=0;i<=tmp2;i++)af[e*220+(j++)]+=tmp1-8;
			if(tmp1*220+tmp2==1979)fldrepcnt=enc[encc++];
		}
		}else{
		fldrepcnt--;
		}
		tmp=enc[encc++];tmp+=enc[encc++]*64;tmp+=enc[encc++]*4096;
		ap[e*3+0]=tmp%8;tmp=Math.floor(tmp/8);
		ap[e*3+1]=tmp%4;tmp=Math.floor(tmp/4);
		ap[e*3+2]=tmp%220;tmp=Math.floor(tmp/220);
		au[e]=tmp%2;tmp=Math.floor(tmp/2);
		am[e]=tmp%2;tmp=Math.floor(tmp/2);
		if(e===0){ct=tmp%2;}tmp=Math.floor(tmp/2);
		acflg=tmp%2;tmp=Math.floor(tmp/2);
		ac[e]=(e>0)?ac[e-1]:'';
		cmstrrep=ac[e];
		ac[e]=cmstrrep;
		ad[e]=tmp%2;tmp=Math.floor(tmp/2);
		if(acflg){
		tmp=enc[encc++];
		tmp+=enc[encc++]*64;
		tmplen=(tmp%4096);tmp=Math.floor(tmp/4096);
		tmpstr='';
		for(i=0;i<tmplen;i+=4){
			tmp=enc[encc++];
			tmp+=enc[encc++]*64;
			tmp+=enc[encc++]*4096;
			tmp+=enc[encc++]*262144;
			tmp+=enc[encc++]*16777216;
			tmpstr+=asctbl.charAt(tmp%96);tmp=Math.floor(tmp/96);
			tmpstr+=asctbl.charAt(tmp%96);tmp=Math.floor(tmp/96);
			tmpstr+=asctbl.charAt(tmp%96);tmp=Math.floor(tmp/96);
			tmpstr+=asctbl.charAt(tmp%96);tmp=Math.floor(tmp/96);
		}
		ac[e]=unescape(tmpstr.substring(0,tmplen));
		}
		for(i=0;i<220;i++)af[(e+1)*220+i]=af[e*220+i];
		if(!ad[e]){
		if(ap[e*3+0]>0){
			for(j=0;j<4;j++)af[(e+1)*220+ap[e*3+2]+b[ap[e*3+0]*32+ap[e*3+1]*8+j*2+1]*10+b[ap[e*3+0]*32+ap[e*3+1]*8+j*2]-11]=ap[e*3+0];
		}
		for(i=20,k=20;k>=0;k--){
			chk=0;for(j=0;j<10;j++)chk+=(af[(e+1)*220+k*10+j]>0);
			if(chk<10){
			for(j=0;j<10;j++)af[(e+1)*220+i*10+j]=af[(e+1)*220+k*10+j];
			i--;
			}
		}
		for(;i>=0;i--)for(j=0;j<10;j++)af[(e+1)*220+i*10+j]=0;
		if(au[e]){for(i=0;i<210;i++)af[(e+1)*220+i]=af[(e+1)*220+i+10];for(i=210;i<220;i++)af[(e+1)*220+i]=0;}
		if(am[e])for(i=0;i<21;i++)for(j=0;j<5;j++){tmp=af[(e+1)*220+i*10+j];af[(e+1)*220+i*10+j]=af[(e+1)*220+i*10+9-j];af[(e+1)*220+i*10+9-j]=tmp;}
		}
	}

	// Now for the actual tedige function.
	/* While I'm at it here's the variable that we are interested in:
	(foreword: fumen always initialize 2000 'frames' even if there's no data in it)
	= af - playfield =
		Always contains 440220 elements (2000 * 22 * 10). It stores the playfield matrix (size 22 x 10), each matrix appended to the other. So the first 220 elements is the first matrix, the 220 next the second one, etc. There's an extra line at the top and at the bottom

	= ap - active piece =
		Always contains 6000 elements. The data is stored in triplet in the 1D array: first is the piece type (0-6, see the translation table), then its orientation (0-3), then its position.

	= ac - comments =
		2000 elements, one for each playfield. Contains the comment string.

	= e - # of playfield =
		the amount of playfield, apparently

	=ct - rotation system=
		0 = ars
		1 = srs
	*/

	aDiag.remove_all_playfields(); // let's nuke everything first

	for (z=0;z<e;z++)
	{
		aDiag.new_frame(); // add a new frame for each playfield

		// rotation system
		if (ct)
		{
		  aDiag.frames[z].RS = 'SRS';
		}
		else
		{
		  aDiag.frames[z].RS = 'ARS';
		}

		// playfield
		for(var i=0;i<10;i++)
		{
			for (j=0;j<20;j++)
			{
			aDiag.frames[z].modify(i,j,fconvert(af[(z*220+10*(j+1)+i)])); // get the right case in the big array (z: frame; j: line; i: column; we dump the first and last line, hence the j+1 and why we go from 0 to 20 and not to 22)
			}
		}

		// active piece
		// fumen models a 3x3 (4x4 for I) bounding box, centered on the coordinate ( for the 4x4 box it's the center upper left case that define the center)

			aDiag.frames[z].activePieceType = fconvert(ap[3*z+0]);
			if (aDiag.frames[z].activePieceType)
			{
			aDiag.frames[z].activePieceOrientation = oconvert(ap[3*z+1],ct,aDiag.frames[z].activePieceType);
			var activePositions = pconvert(ap[3*z+2],aDiag.frames[z].activePieceOrientation,ct);
			aDiag.frames[z].activePiecePositionX = activePositions[0];
			aDiag.frames[z].activePiecePositionY = activePositions[1];
			}

		// comments
		if(ac[z])
		{
		aDiag.frames[z].comment = ac[z]; // todo: maybe a should do a method to change the comment ? (so it can be displayed ?)
		}

	}

	aDiag.remove_current_frame(); // dunno why it bugs when I try for (z=0;z<e-1;z++), so I do this instead; draw is in remove_current_frame, so I don't need to call it

	function pconvert(input,orientation,system){
		var x;
		var y;
			x = input%10;
			y = parseInt((input - x - 10)/10,10);
		return [x,y];
	}

	function fconvert(input){
		var out;
		switch(input){
			case 0:
				out = '';
			break;
			case 1:
				out = 'I';
			break;
			case 2:
				out = 'L';
			break;
			case 3:
				out = 'O';
			break;
			case 4:
				out = 'Z';
			break;
			case 5:
				out = 'T';
			break;
			case 6:
				out = 'J';
			break;
			case 7:
				out = 'S';
			break;
			case 8:
				out = 'G';
			break;
			default:
			break;
		}
		return out;
	}

	function oconvert(input, rs,piecetype)
	{
	/* cw i ccw u
	ars
	all piece follows: i ccw u cw
	*/
	var output;
	if (rs) // srs
	{
		switch(input) // SRS: some manual adjustement are needed because fumen SRS model isn't the same as tedige
		{
			case 0 :
			output =  'u';
			if (piecetype == 'I' || piecetype == 'Z')
			{
			  output =  'i';
			}

			break;
			case 1 :
			output =  'cw';
			if (piecetype == 'S')
			{
			  output =  'ccw';
			}

			break;
			case 2 :
			output = 'i';
			if (piecetype == 'Z' || piecetype == 'S')
			{
			  output =  'u';
			}

			break;
			case 3 :
			output = 'ccw';
			if (piecetype == 'Z')
			{
			  output =  'ccw';
			}
			break;
		}

	}
	else // ars
	{
		switch(input)
		{
			case 0 :
			output =  'i';
			break;
			case 1 :
			output =  'ccw';
			break;
			case 2 :
			output = 'u';
			break;
			case 3 :
			output = 'cw';
			break;
		}
	}

	return output;
	}

	});




	/* ---------------------------------------------------------------------------- */
	/* --------------------------- ANIMATION MANAGEMENT  -------------------------- */
	/* ---------------------------------------------------------------------------- */


	var _frames = 16.6666667;
	//aDiag.load('M~MyFoobarIsRich_A~Jgkccw_I~Tadaeafbfbhcdcecfcgch~Gededeeefegehfdfffh~Shdhdhehfhhidifihjdjfjgjh_+A~e_I~Tahagbd~Shgje~Ebfbhif+I~Zaa+I~Zab+I~Zac+I~Zad+I~Zae+I~Zaf+I~Zag+I~Zai+I~Zba+I~Zbb+I~Zbc+I~Zbd+I~Zbe+I~Zbf+I~Zbg+I~Zbi+I~Zda+I~Zdb+I~Zdc+I~Zdd+I~Zde+I~Zdf+I~Zdg+I~Zdi+I~Zea+I~Zeb+I~Zec+I~Zed+I~Zee+I~Zef+I~Zeg+I~Zei+I~Zfa+I~Zfb+I~Zfc+I~Zfd+I~Zfe+I~Zff');

	// aDiag.painter.drawWhitePixel(aDiag.frames[aDiag.current_frame].playfield);
	//aDiag.painter.drawLocalWhitePixel(aDiag.frames[aDiag.current_frame].playfield,5,6)

	$('#pf-cmd_playpause').click(function(){
	//console.log('tick');
		var i = aDiag.current_frame;
		var len = aDiag.frames.length;
		if(aDiag.playing)
		{
			aDiag.playing = false;
			$('#pf-cmd_playpause').attr('value','▷');
		}
		else{
			aDiag.playing = true;
			$('#pf-cmd_playpause').attr('value','∥');
		}
		var counter = 0;
		function render(){
			// TODO: does not escape properly when we press pause
			//console.log('rendering... @'+i+' - '+counter);

			if (i < len && aDiag.playing)
				{
					if(counter < aDiag.frames[aDiag.current_frame].duration)
					{
						aDiag.goto_frame(i);
						counter++;
					}
					else{
					counter = 0;
					i++;
					}

					//interval = aDiag.frames[aDiag.current_frame].duration;
					requestAnimationFrame(render);
				}
				else if($('#pf-loop').is(':checked'))
				{
					i = 0;
					requestAnimationFrame(render);
				}
		}
		render();
	/* v2
		var i = aDiag.current_frame;
		var len = aDiag.frames.length;
		var interval = '';
		if(playpause)
		{
			playpause = false;
		}
		else{
			playpause = true;
		}

		function draw() {
			setTimeout(function() {
				var myReq = window.requestAnimationFrame(draw);
				console.log('req');
			if (i < len && playpause)
				{
					aDiag.goto_frame(i);
					interval = aDiag.frames[aDiag.current_frame].duration;
					i++;
				}
				else if($('#pf-loop').is(':checked'))
				{
					i = 0;
				}

				else
				{
				window.cancelAnimationFrame(myReq);
				console.log('release');
				}

			}, interval);
		}
		draw();
	*/

	/* v1
		aDiag.first_frame();
		var i = 0;
		advance();
		function advance(){
			//console.log('Doki '+i);
			if(i<aDiag.frames.length-1)
			{
				aDiag.next_frame();
				setTimeout(advance,1*_frames);
				i++;
			} // change and see http://paulirish.com/2011/requestanimationframe-for-smart-animating/
			else
			{
				console.log('Finished !');
			}
		}

		*/
	});


	/* ------------------------------------------------------------------------- */
	/* --------------------------- PANEL MANAGEMENT  -------------------------- */
	/* ------------------------------------------------------------------------- */


	var $mainutilities = $('#main-utilities');
	var $tabdeco = $('#tab-deco');
	var $tabtetramino = $('#tab-tetramino');

	var $tetraminopanel = $('#tetramino-panel');
	var $decorationspanel = $('#panel-decorations');
	var $tools = $('#tools');

	//var $actionspanel = $("#panel-actions");

	$('body').mousedown(function(){IS_CLICKING = true;}).mouseup(function(){IS_CLICKING = false;});

	function setpanelfalse(){
		DECORATION_PANEL = false;
		TETRAMINO_PANEL = false;
	}

	function primary_hideallpanelexcept(exception){
		if (exception !='decorationspanel')
			{$decorationspanel.fadeOut(200);}
		if (exception !='tetraminopanel')
			{$tetraminopanel.fadeOut(200);}
	}

	$tabdeco.click(function(){
		primary_hideallpanelexcept('decorationspanel');
		setpanelfalse();
		DECORATION_PANEL = true;
		$decorationspanel.delay(200).fadeIn();
		$mainutilities.removeClass().addClass('border-deco');
	});

	$tabtetramino.mousedown(function(){
		primary_hideallpanelexcept('tetraminopanel');
		setpanelfalse();
		TETRAMINO_PANEL = true;
		$tetraminopanel.delay(200).fadeIn();
		$mainutilities.removeClass().addClass('border-tetramino');
	});
	
	function settoolfalse(){
		TOOL_DROP = false;
		TOOL_FILL = false;
		TOOL_RECTANGULAR = false;
		TOOL_PENCIL = false;
		TOOL_ERASER = false;
		$drop.removeClass('pressed');
		$fill.removeClass('pressed');
		$pencil.removeClass('pressed');
		$eraser.removeClass('pressed');
	}

	var $drop = $('#button-drop');
	$drop.mousedown(function(){
		if (TOOL_DROP) {
			settoolfalse();
		}
		else
		{
			settoolfalse();
			TOOL_DROP = true;
			$drop.addClass('pressed');

		}
	});

	var $fill = $('#button-paint-bucket');
	$fill.mousedown(function(){
		if (TOOL_FILL) {
			settoolfalse();
		}
		else
		{
			settoolfalse();
			TOOL_FILL = true;
			$fill.addClass('pressed');

		}
	});

	var $pencil = $('#button-pencil');
	$pencil.mousedown(function(){
		if (TOOL_PENCIL) {
			settoolfalse();
		}
		else
		{
			settoolfalse();
			TOOL_PENCIL = true;
			$pencil.addClass('pressed');

		}
	});

	var $eraser = $('#button-eraser');
	$eraser.mousedown(function(){
		if (TOOL_ERASER) {
			settoolfalse();
		}
		else
		{
			settoolfalse();
			TOOL_ERASER = true;
			$eraser.addClass('pressed');

		}
	});


	var $eraserdeco = $('#button-eraser-deco');
	$eraserdeco.mousedown(function(){
		if (TOOL_ERASER_DECO) {
			TOOL_ERASER_DECO = false;
			$eraserdeco.removeClass('pressed');
		}
		else
		{
			TOOL_ERASER_DECO = true;
			$eraserdeco.addClass('pressed');

		}
	});


//////// Properties panel////////////
	/*
	$('#next1-select').change(function(){
		aDiag.frames[aDiag.current_frame].modify_nexthold(1,$('#next1-select').val());
	});

	$('#next2-select').change(function(){
		aDiag.frames[aDiag.current_frame].modify_nexthold(2,$('#next2-select').val());
	});

	$('#next3-select').change(function(){
		aDiag.frames[aDiag.current_frame].modify_nexthold(3,$('#next3-select').val());
	});

	$('#hold-select').change(function(){
		aDiag.frames[aDiag.current_frame].modify_nexthold(0,$('#hold-select').val());
	});
	*/
	


	$('#export-image-frame-button').click(function(){
		aDiag.painter.exportImage();
		$('#export-gif').attr('style','display: none');
		$('#pf-export').attr('style','display: block');
	});

	$('#export-image-diagram-button').click(function(){
		aDiag.getGIF();
		$('#export-gif').attr('style','display: block');
		$('#pf-export').attr('style','display: none');
	});


	/* ---------------------------------------------------------------------------- */
	/* --------------------------- SAVE/LOAD MANAGEMENT  -------------------------- */
	/* ---------------------------------------------------------------------------- */


	$('.export-button').click(function(){

		var export_string = '';
		var destination = $(this).attr('id');
		if($('input[name=export-type]:checked').val() == 'All')
		{
			export_string = 'all-'+aDiag.flate_encode(aDiag.print()); // compressed
			//export_string = 'all-'+aDiag.print(); // not compressed
			// export_string = aDiag.print();
		}

		if($('input[name=export-type]:checked').val() == 'Current')
		{
			export_string = 'current-'+aDiag.flate_encode(aDiag.frames[aDiag.current_frame].print()); // compressed
			//export_string = 'current-'+aDiag.frames[aDiag.current_frame].print(); // not compressed
		}
		switch(destination)
		{
			case 'export-forum-button':
				$('#export').html('[tedige]v01-'+export_string+'[/tedige]').select();
			break;
			case 'export-editor-button':
				$('#export').html(window.location.href.split('?')[0]+'?v01-'+export_string).select(); // the extra split is here to make sure you don't catch a leftover from a previous URL import.
			break;
			case 'export-viewer-button':
				var URL = window.location.href.split('?')[0].split('/');
				URL.pop();
				$('#export').html(URL.join('/')+'/viewer.html?v01-'+export_string).select();
			break;
		}


	});
	// textarea selection http://stackoverflow.com/questions/5797539/jquery-select-all-text-from-a-textarea#5797700
	$('#export').focus(function() {
		var $this = $(this);
		$this.select();
		// Work around Chrome's little problem
		$this.mouseup(function() {
			// Prevent further mouseup intervention
			$this.unbind('mouseup');
			return false;
		});
	});

/*
				var output = window.location.protocol+window.location.hostname;
				var tmp = window.location.pathname.split("/");

				for(var i = 0; i<tmp.length-1;i++)
				{
					output += tmp[i]+"/";
				}
				output+="tedige.html";
				$("#export").html(output+"#"+this.print());
	*/
	var regforum = /\[tedige\](.+)\[\/tedige\]/; // matches everything between [tedige] and [/tedige]
	var regURL = /v01.+/; // matches everything after v01
	$('#import-button').click(function(){
		var bigstr = $('#import').val();

		resultforum = regforum.exec(bigstr); // todo: make that work ?
		resultURL = regURL.exec(bigstr);
		//console.log(resultforum.split('-'));
		var littlestr;
		if (resultURL)
		{
			littlestr = resultURL[0].split('-');
		}

		if (resultforum)
		{
			littlestr = resultforum[0].split('-');
			littlestr[2] = littlestr[2].split('[')[0];
		}

		switch(littlestr[1])
		{
			case 'all':
				aDiag.load(aDiag.flate_decode(littlestr[2])); // compressed
				//aDiag.load(littlestr[2]); // not compressed
				aDiag.frames[aDiag.current_frame].draw();
			break;

			case 'current':
				aDiag.frames[aDiag.current_frame].load(aDiag.flate_decode(littlestr[2]));	 // compressed
				//aDiag.frames[aDiag.current_frame].load(littlestr[2]); //not compressed
				aDiag.frames[aDiag.current_frame].draw();
			break;
		}


		/*switch($('#import-export-wrapper input[type=radio][name=export-type]:checked').attr('value')){

			case 'All':
				if(result)
				{
					aDiag.load(xflatedecode(result[1]));
					// aDiag.load(result[1]);
				}
				else
				{
					aDiag.load(xflatedecode(bigstr));
					// aDiag.load(bigstr);
				}
				break;

			case 'Current':
				if(result)
				{
					aDiag.frames[aDiag.current_frame].load(xflatedecode(result[1]));
					// aDiag.frames[aDiag.current_frame].load(result[1]);
				}
				else
				{
					aDiag.frames[aDiag.current_frame].load(xflatedecode(bigstr));
					// // aDiag.frames[aDiag.current_frame].load(bigstr);
				}
				break;
			break;

		}*/

	});

	/*
	$('.preview-table').click(function(){
		console.log('barabar');
		//$(this).parent().parent().parent().parent().parent().addClass('pressed');
	});
	*/

	
	$(window).keydown(function(event){
		if(event.keyCode == 37) // left arrow
			{$('#pf-cmd_prev').click();}
		if(event.keyCode == 39) // right arrow
			{$('#pf-cmd_next').click();}
	});
	$('#foobartest').click(function(){
		console.log(aDiag);
		console.log(aDiag.frames[aDiag.current_frame]);
		console.log(aDiag.print());
		//aDiag.painter.generateNewPreviewTable(1);
		//aDiag.frames[aDiag.current_frame].whiteborder = true;
		//aDiag.painter.drawWhiteBorder(aDiag.frames[aDiag.current_frame].playfield);
		//aPainter.highlight(3,4);
		//console.log(aDiag.frames[aDiag.current_frame].comment);
		//console.log(aDiag.flate_decode('bY6xDsIwDEQ/iJkPAIRQKsHQMHWJkthnN1MVmP3tuBESCz7J2717s53mmM52z6839zRZP6aL9XEpWChUuKBI0coEZvgDIFCLQh4WiIgqKVRXWrVR03QI9syUOcPLWqlyRZWqdh1AIThGfnW7MbHTWVh9AjteeUVDkxRca5dS3VzqYSEu+0D8OxDchL8uGDaOcKMwCFsfhGla0gc='));
		// file:///D:/Hoang/TeDiGe/Tetris-Diagram-Generator-2/tedige.html?v01-all-bY6xDsIwDEQ/iJkPAIRQKsHQMHWJkthnN1MVmP3tuBESCz7J2717s53mmM52z6839zRZP6aL9XEpWChUuKBI0coEZvgDIFCLQh4WiIgqKVRXWrVR03QI9syUOcPLWqlyRZWqdh1AIThGfnW7MbHTWVh9AjteeUVDkxRca5dS3VzqYSEu+0D8OxDchL8uGDaOcKMwCFsfhGla0gc=?v01-all-jcw9DoAgDIbhAzl7AHWi0ZAAE0sjxIEVNW49u3+DXzdhKXl52olJqbAT7zz3Ms3rtlQmqS0PUp/DTXd/ygeb676PAnP+ypjSDrMKBcNXLBCLxAKxikQoEUmEXVGRACUgCbArKEJACAkBIUU8EP+nnA==
		//'all-jcw9DoAgDIbhAzl7AHWi0ZAAE0sjxIEVNW49u3+DXzdhKXl52olJqbAT7zz3Ms3rtlQmqS0PUp/DTXd/ygeb676PAnP+ypjSDrMKBcNXLBCLxAKxikQoEUmEXVGRACUgCbArKEJACAkBIUU8EP+nnA=='
	});


}); // end jquery.ready

/*
	var TIMER_MODEL = {
		TGM1: {
			ARE: 30,
			lock: 30,
			separation1: 10,
			separation2: 6,
			separation3: 6,
			separation4: 6
			// 10+6+6+6 = 28; 28 + 1 + 2 = 31
			},
		Master000699:{
			ARE: 25,
			lock: 30,
			separation1: 10,
			separation2: 6,
			separation3: 6,
			separation4: 6
		},
		Master700799:{
			ARE: 16,
			lock: 30,
			separation1: 10,
			separation2: 6,
			separation3: 6,
			separation4: 6
		},
		Master800899:{
			ARE: 12,
			lock: 30,
			separation1: 10,
			separation2: 6,
			separation3: 6,
			separation4: 6
		},
		Master900999:{
			ARE: 12,
			lock: 17,
			separation1: 6,
			separation2: 4,
			separation3: 4,
			separation4: 3
			// 5 + 4 + 3 + 3 = 14
		},
		Master10001099:{
			ARE: 6,
			lock: 17,
			separation1: 6,
			separation2: 4,
			separation3: 4,
			separation4: 3
			// 5 + 4 + 3 + 3 = 14
		},
		Master11001199:{
			ARE: 5,
			lock: 15,
			separation1: 5,
			separation2: 4,
			separation3: 4,
			separation4: 3
			// 4 + 4 + 3 + 3 = 14
		},
		Master12001299:{
			ARE: 4,
			lock: 15,
			separation1: 5,
			separation2: 4,
			separation3: 4,
			separation4: 3
			// 4 + 4 + 3 + 3 = 14
		},
		Death000099:{
			ARE: 16,
			lock: 30,
			separation1: 10,
			separation2: 6,
			separation3: 6,
			separation4: 6
		},
		Death100199:{
			ARE: 12,
			lock: 26,
			separation1: 9,
			separation2: 6,
			separation3: 6,
			separation4: 5
		},
		Death200299:{
			ARE: 12,
			lock: 22,
			separation1: 7,
			separation2: 5,
			separation3: 4,
			separation4: 4
		},
		Death300399:{
			ARE: 6,
			lock: 18,
			separation1: 6,
			separation2: 4,
			separation3: 4,
			separation4: 4
		},
		Death400499:{
			ARE: 5,
			lock: 15,
			separation1: 5,
			separation2: 3,
			separation3: 3,
			separation4: 3
		},
		Death500999:{
			ARE: 4,
			lock: 15,
			separation1: 5,
			separation2: 3,
			separation3: 3,
			separation4: 3
		},
		Shirase000199:{
			ARE: 10,
			lock: 18,
			separation1: 6,
			separation2: 4,
			separation3: 4,
			separation4: 4
		},
		Shirase200299:{
			ARE: 10,
			lock: 17,
			separation1: 6,
			separation2: 4,
			separation3: 4,
			separation4: 3
		},
		Shirase300499:{
			ARE: 4,
			lock: 15,
			separation1: 5,
			separation2: 3,
			separation3: 3,
			separation4: 3
		},
		Shirase500599:{
			ARE: 4,
			lock: 13,
			separation1: 4,
			separation2: 3,
			separation3: 3,
			separation4: 3
		},
		Shirase6001099:{
			ARE: 4,
			lock: 12,
			separation1: 4,
			separation2: 3,
			separation3: 3,
			separation4: 2
		},
		Shirase11001199:{
			ARE: 4,
			lock: 10,
			separation1: 4,
			separation2: 2,
			separation3: 2,
			separation4: 2
		},
		Shirase12001299:{
			ARE: 4,
			lock: 8,
			separation1: 4,
			separation2: 2,
			separation3: 1,
			separation4: 1
		},
		TDSSRS:{
			ARE: 1, // 0 in reality
			lock: 30,
			separation1: 10,
			separation2: 7,
			separation3: 8,
			separation4: 6
		}
	}
*/