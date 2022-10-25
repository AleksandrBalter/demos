(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"728_90_atlas_1", frames: [[0,0,728,90],[853,0,88,69],[0,92,203,56],[730,0,121,117]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.fon = function() {
	this.initialize(ss["728_90_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.gears = function() {
	this.initialize(ss["728_90_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.initialize(ss["728_90_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.lupa = function() {
	this.initialize(ss["728_90_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-302,52.5).lineTo(-302,-52.5).lineTo(302,-52.5).lineTo(302,52.5).closePath();
	this.shape.setTransform(302,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,-52.5,604,105), null);


(lib.Symbol19 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.9,1).curveTo(-1.3,0.5,-1.4,0).curveTo(-1.3,-0.5,-0.9,-1).curveTo(-0.6,-1.4,-0,-1.4).curveTo(0.6,-1.4,0.9,-1).curveTo(1.3,-0.5,1.3,0).curveTo(1.3,0.5,0.9,1).curveTo(0.6,1.3,-0,1.3).curveTo(-0.6,1.3,-0.9,1).closePath();
	this.shape.setTransform(245.65,5.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.2,4.2).curveTo(-3.2,3.6,-3.6,2.6).lineTo(-1.9,1.6).curveTo(-1.5,3,0,3).curveTo(1.6,3,1.6,1.9).curveTo(1.6,1.2,-0.1,0.8).lineTo(-1.2,0.5).lineTo(-2.2,0).curveTo(-2.7,-0.3,-3,-0.8).curveTo(-3.2,-1.3,-3.2,-2).curveTo(-3.3,-3.2,-2.3,-4).curveTo(-1.3,-4.7,0,-4.8).curveTo(1.2,-4.8,2,-4.2).curveTo(2.9,-3.8,3.4,-2.9).lineTo(1.7,-2).curveTo(1.3,-3,0,-3).curveTo(-0.5,-2.9,-0.9,-2.7).curveTo(-1.3,-2.5,-1.2,-2).curveTo(-1.2,-1.6,-0.9,-1.3).lineTo(0.4,-0.9).lineTo(1.5,-0.5).curveTo(2,-0.4,2.5,-0.1).curveTo(3.1,0.2,3.3,0.7).curveTo(3.6,1.2,3.6,1.9).curveTo(3.6,3.3,2.6,4).curveTo(1.5,4.8,0,4.8).curveTo(-1.3,4.7,-2.2,4.2).closePath();
	this.shape_1.setTransform(238.2,2.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.3,3.4).curveTo(-4.6,2,-4.6,0).curveTo(-4.6,-2,-3.3,-3.3).curveTo(-2,-4.7,0.1,-4.8).curveTo(2.1,-4.7,3.3,-3.3).curveTo(4.6,-2,4.6,0).lineTo(4.6,0.8).lineTo(-2.6,0.8).curveTo(-2.4,1.9,-1.6,2.4).curveTo(-0.9,3,0.3,3).curveTo(1.8,3,2.6,1.8).lineTo(4.2,2.7).curveTo(2.9,4.8,0.3,4.8).curveTo(-1.9,4.8,-3.3,3.4).closePath().moveTo(-1.7,-2.3).curveTo(-2.4,-1.8,-2.6,-0.8).lineTo(2.7,-0.8).curveTo(2.5,-1.8,1.8,-2.4).curveTo(1.1,-2.9,0.1,-3).curveTo(-1,-3,-1.7,-2.3).closePath();
	this.shape_2.setTransform(227.825,2.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.4,4.6).lineTo(-2.4,-4.4).lineTo(-0.4,-4.4).lineTo(-0.4,-2.9).curveTo(0.3,-4.6,2.3,-4.6).lineTo(2.3,-2.5).curveTo(1.3,-2.6,0.4,-1.9).curveTo(-0.4,-1.3,-0.4,0).lineTo(-0.4,4.6).closePath();
	this.shape_3.setTransform(218.9,1.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.1,3.6).curveTo(-4.1,2.6,-4.1,0.9).lineTo(-4.1,-4.6).lineTo(-2.2,-4.6).lineTo(-2.2,0.7).curveTo(-2.1,1.7,-1.6,2.2).curveTo(-1,2.8,-0.2,2.8).curveTo(1,2.8,1.5,2.1).curveTo(2.2,1.5,2.2,0.2).lineTo(2.2,-4.6).lineTo(4.1,-4.6).lineTo(4.1,4.4).lineTo(2.2,4.4).lineTo(2.2,3.2).curveTo(1.2,4.6,-0.6,4.6).curveTo(-2.2,4.6,-3.1,3.6).closePath();
	this.shape_4.setTransform(209.15,2.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.3,5.3).curveTo(-1.3,4.7,-1.3,2.9).lineTo(-1.3,-1.4).lineTo(-2.9,-1.4).lineTo(-2.9,-3.3).lineTo(-1.3,-3.3).lineTo(-1.3,-5.2).lineTo(0.6,-5.8).lineTo(0.6,-3.3).lineTo(2.9,-3.3).lineTo(2.9,-1.4).lineTo(0.6,-1.4).lineTo(0.6,2.9).curveTo(0.6,3.5,0.9,3.7).curveTo(1.2,4,1.6,4).lineTo(2.9,4).lineTo(2.9,5.7).lineTo(1.8,5.8).curveTo(0.4,5.8,-0.3,5.3).closePath();
	this.shape_5.setTransform(199.45,0.8347);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.5,3.4).curveTo(-4.8,2,-4.8,0).curveTo(-4.8,-2,-3.5,-3.3).curveTo(-2.2,-4.7,-0.3,-4.8).curveTo(1.7,-4.7,2.8,-3.2).lineTo(2.8,-4.5).lineTo(4.8,-4.5).lineTo(4.8,4.5).lineTo(2.8,4.5).lineTo(2.8,3.2).curveTo(1.7,4.7,-0.3,4.8).curveTo(-2.2,4.8,-3.5,3.4).closePath().moveTo(-2,-2).curveTo(-2.8,-1.2,-2.8,0).curveTo(-2.8,1.2,-2,2.1).curveTo(-1.2,2.9,-0,2.9).curveTo(1.2,2.9,2,2.1).curveTo(2.8,1.3,2.8,0).curveTo(2.8,-1.2,2,-2).curveTo(1.2,-2.9,-0,-2.9).curveTo(-1.2,-2.9,-2,-2).closePath();
	this.shape_6.setTransform(189.275,2.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.3,3.4).curveTo(-4.6,2,-4.6,0).curveTo(-4.6,-2,-3.3,-3.3).curveTo(-2,-4.7,0.1,-4.8).curveTo(2.1,-4.7,3.3,-3.3).curveTo(4.6,-2,4.6,0).lineTo(4.6,0.8).lineTo(-2.6,0.8).curveTo(-2.4,1.9,-1.6,2.4).curveTo(-0.9,3,0.3,3).curveTo(1.8,3,2.6,1.8).lineTo(4.2,2.7).curveTo(2.9,4.8,0.3,4.8).curveTo(-1.9,4.8,-3.3,3.4).closePath().moveTo(-1.7,-2.3).curveTo(-2.4,-1.8,-2.6,-0.8).lineTo(2.7,-0.8).curveTo(2.5,-1.8,1.8,-2.4).curveTo(1.1,-2.9,0.1,-3).curveTo(-1,-3,-1.7,-2.3).closePath();
	this.shape_7.setTransform(177.625,2.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.3,6.4).lineTo(-1.3,-0.7).lineTo(-2.7,-0.7).lineTo(-2.7,-2.6).lineTo(-1.3,-2.6).lineTo(-1.3,-2.8).curveTo(-1.3,-4.6,-0.3,-5.6).curveTo(0.7,-6.5,2.7,-6.4).lineTo(2.7,-4.5).curveTo(0.6,-4.7,0.6,-2.8).lineTo(0.6,-2.6).lineTo(2.7,-2.6).lineTo(2.7,-0.7).lineTo(0.6,-0.7).lineTo(0.6,6.4).closePath();
	this.shape_8.setTransform(168.675,0.1202);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.4,6.3).lineTo(-4.4,-6.3).lineTo(0.2,-6.3).curveTo(2,-6.3,3.2,-5.1).curveTo(4.4,-3.9,4.4,-2.1).curveTo(4.4,-0.4,3.2,0.8).curveTo(2,2,0.2,2).lineTo(-2.3,2).lineTo(-2.3,6.3).closePath().moveTo(-2.3,0).lineTo(0.2,0).curveTo(1.1,0.1,1.7,-0.6).curveTo(2.3,-1.2,2.3,-2.1).curveTo(2.3,-3.1,1.7,-3.8).curveTo(1.1,-4.3,0.2,-4.4).lineTo(-2.3,-4.4).closePath();
	this.shape_9.setTransform(154.125,0.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.5,6.3).lineTo(-0.2,1.7).lineTo(-2.6,1.7).lineTo(-2.6,6.3).lineTo(-4.7,6.3).lineTo(-4.7,-6.3).lineTo(0.3,-6.3).curveTo(2,-6.3,3.2,-5.1).curveTo(4.4,-3.9,4.4,-2.2).curveTo(4.4,-1.1,3.7,-0.1).curveTo(3,1,1.9,1.4).lineTo(4.7,6.3).closePath().moveTo(-2.6,-0.2).lineTo(0.3,-0.2).curveTo(1.2,-0.1,1.7,-0.8).curveTo(2.3,-1.4,2.3,-2.2).curveTo(2.3,-3.1,1.7,-3.8).curveTo(1.2,-4.3,0.3,-4.4).lineTo(-2.6,-4.4).closePath();
	this.shape_10.setTransform(142.425,0.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.8,6.3).lineTo(-3.8,-6.3).lineTo(3.7,-6.3).lineTo(3.7,-4.3).lineTo(-1.7,-4.3).lineTo(-1.7,-1.1).lineTo(3.3,-1.1).lineTo(3.3,0.9).lineTo(-1.7,0.9).lineTo(-1.7,4.3).lineTo(3.8,4.3).lineTo(3.8,6.3).closePath();
	this.shape_11.setTransform(130.975,0.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.9,5.7).curveTo(-4.2,4.9,-4.7,3.4).lineTo(-2.9,2.4).curveTo(-2.1,4.5,0.2,4.5).curveTo(1.4,4.5,2,4.1).curveTo(2.6,3.6,2.6,2.8).curveTo(2.6,2.1,1.9,1.7).curveTo(1.3,1.3,-0.3,0.8).curveTo(-1.9,0.3,-2.9,-0.3).curveTo(-4.2,-1.2,-4.2,-2.9).curveTo(-4.2,-4.6,-3,-5.6).curveTo(-1.8,-6.6,-0.1,-6.6).curveTo(1.4,-6.5,2.5,-5.8).curveTo(3.7,-5,4.3,-3.8).lineTo(2.5,-2.8).curveTo(1.7,-4.5,-0.1,-4.5).curveTo(-1,-4.5,-1.5,-4.1).curveTo(-2.1,-3.7,-2.1,-3).curveTo(-2.1,-2.2,-1.5,-1.9).curveTo(-1,-1.4,0.4,-1).lineTo(1.5,-0.6).lineTo(2.4,-0.2).curveTo(3,-0.1,3.3,0.3).curveTo(4.8,1.3,4.6,2.8).curveTo(4.6,4.6,3.4,5.5).curveTo(2.2,6.6,0.2,6.6).curveTo(-1.6,6.6,-2.9,5.7).closePath();
	this.shape_12.setTransform(119.707,0.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1,1).curveTo(-1.3,0.5,-1.3,0).curveTo(-1.3,-0.5,-1,-1).curveTo(-0.6,-1.4,0,-1.4).curveTo(0.5,-1.4,0.9,-1).curveTo(1.4,-0.5,1.4,0).curveTo(1.4,0.5,0.9,1).curveTo(0.5,1.3,0,1.3).curveTo(-0.6,1.3,-1,1).closePath();
	this.shape_13.setTransform(105.65,5.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.5,3.4).curveTo(-4.8,2,-4.8,0).curveTo(-4.8,-2,-3.5,-3.3).curveTo(-2.2,-4.7,-0.3,-4.8).curveTo(1.7,-4.7,2.8,-3.2).lineTo(2.8,-4.5).lineTo(4.8,-4.5).lineTo(4.8,4.5).lineTo(2.8,4.5).lineTo(2.8,3.2).curveTo(1.7,4.7,-0.3,4.8).curveTo(-2.2,4.8,-3.5,3.4).closePath().moveTo(-2,-2).curveTo(-2.8,-1.2,-2.8,0).curveTo(-2.8,1.2,-2,2.1).curveTo(-1.2,2.9,-0,2.9).curveTo(1.2,2.9,2,2.1).curveTo(2.8,1.3,2.8,0).curveTo(2.8,-1.2,2,-2).curveTo(1.2,-2.9,-0,-2.9).curveTo(-1.2,-2.9,-2,-2).closePath();
	this.shape_14.setTransform(96.425,2.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.6,4.5).lineTo(-2,0.4).lineTo(-2,4.5).lineTo(-4,4.5).lineTo(-4,-4.5).lineTo(-2,-4.5).lineTo(-2,-0.5).lineTo(1.4,-4.5).lineTo(3.8,-4.5).lineTo(-0.1,-0.1).lineTo(4,4.5).closePath();
	this.shape_15.setTransform(85.875,2.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.1,4.5).lineTo(2.1,-1.2).lineTo(-2.5,4.5).lineTo(-4,4.5).lineTo(-4,-4.5).lineTo(-2.1,-4.5).lineTo(-2.1,1.2).lineTo(2.5,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_16.setTransform(74.7,2.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.9,4.5).lineTo(-0.9,-2.7).lineTo(-3.9,-2.7).lineTo(-3.9,-4.5).lineTo(3.9,-4.5).lineTo(3.9,-2.7).lineTo(1,-2.7).lineTo(1,4.5).closePath();
	this.shape_17.setTransform(64.45,2.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.1,4.5).lineTo(2.1,-1.2).lineTo(-2.5,4.5).lineTo(-4,4.5).lineTo(-4,-4.5).lineTo(-2.1,-4.5).lineTo(-2.1,1.2).lineTo(2.5,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_18.setTransform(54.3,2.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.3,4.5).lineTo(-4.3,2.7).curveTo(-3.5,2.8,-3.1,2.3).curveTo(-2.6,1.8,-2.6,0.6).lineTo(-2.6,-4.5).lineTo(4.3,-4.5).lineTo(4.3,4.5).lineTo(2.3,4.5).lineTo(2.3,-2.7).lineTo(-0.7,-2.7).lineTo(-0.7,0.7).curveTo(-0.7,2.8,-1.6,3.7).curveTo(-2.4,4.5,-3.8,4.5).lineTo(-4.3,4.5).closePath();
	this.shape_19.setTransform(42.825,2.0607);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.5,3.4).curveTo(-4.8,2,-4.8,0).curveTo(-4.8,-2,-3.5,-3.3).curveTo(-2.2,-4.7,-0.3,-4.8).curveTo(1.7,-4.7,2.8,-3.2).lineTo(2.8,-4.5).lineTo(4.8,-4.5).lineTo(4.8,4.5).lineTo(2.8,4.5).lineTo(2.8,3.2).curveTo(1.7,4.7,-0.3,4.8).curveTo(-2.2,4.8,-3.5,3.4).closePath().moveTo(-2,-2).curveTo(-2.8,-1.2,-2.8,0).curveTo(-2.8,1.2,-2,2.1).curveTo(-1.2,2.9,-0,2.9).curveTo(1.2,2.9,2,2.1).curveTo(2.8,1.3,2.8,0).curveTo(2.8,-1.2,2,-2).curveTo(1.2,-2.9,-0,-2.9).curveTo(-1.2,-2.9,-2,-2).closePath();
	this.shape_20.setTransform(31.425,2.05);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2,4.5).lineTo(2,0.9).lineTo(-2,0.9).lineTo(-2,4.5).lineTo(-4,4.5).lineTo(-4,-4.5).lineTo(-2,-4.5).lineTo(-2,-0.9).lineTo(2,-0.9).lineTo(2,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_21.setTransform(19.95,2.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3.5,6.3).lineTo(2.7,3.7).lineTo(-2.7,3.7).lineTo(-3.6,6.3).lineTo(-5.8,6.3).lineTo(-1.2,-6.3).lineTo(1.3,-6.3).lineTo(5.8,6.3).closePath().moveTo(-2,1.8).lineTo(2,1.8).lineTo(0,-3.9).closePath();
	this.shape_22.setTransform(7.9,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,-13,251.2,26.1), null);


(lib.Symbol18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.9,0.9).curveTo(-1.4,0.6,-1.4,-0).curveTo(-1.4,-0.6,-0.9,-0.9).curveTo(-0.5,-1.3,-0,-1.4).curveTo(0.6,-1.3,1,-0.9).curveTo(1.3,-0.6,1.3,-0).curveTo(1.3,0.6,1,0.9).curveTo(0.6,1.3,-0,1.3).curveTo(-0.5,1.3,-0.9,0.9).closePath();
	this.shape.setTransform(243.55,5.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.8,4.5).lineTo(-3.8,-4.5).lineTo(0.5,-4.5).curveTo(1.8,-4.5,2.6,-3.8).curveTo(3.4,-3.2,3.4,-2).curveTo(3.4,-0.7,2.4,-0.1).curveTo(3.8,0.5,3.8,2).curveTo(3.8,3.1,3,3.8).curveTo(2.2,4.5,0.8,4.5).closePath().moveTo(-1.9,2.8).lineTo(0.6,2.8).curveTo(1.9,2.8,1.9,1.8).curveTo(1.9,1.3,1.5,1).curveTo(1.2,0.8,0.6,0.8).lineTo(-1.9,0.8).closePath().moveTo(-1.9,-0.8).lineTo(0.3,-0.8).curveTo(1.5,-0.9,1.5,-1.8).curveTo(1.5,-2.8,0.3,-2.8).lineTo(-1.9,-2.8).closePath();
	this.shape_1.setTransform(236.025,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.4,3.3).curveTo(-4.8,2,-4.8,-0).curveTo(-4.8,-2,-3.4,-3.4).curveTo(-2,-4.8,-0,-4.8).curveTo(2,-4.8,3.3,-3.4).curveTo(4.7,-2,4.8,-0).curveTo(4.7,2,3.3,3.3).curveTo(2,4.7,-0,4.8).curveTo(-2,4.7,-3.4,3.3).closePath().moveTo(-2,-2.1).curveTo(-2.8,-1.2,-2.8,-0).curveTo(-2.8,1.2,-2,2).curveTo(-1.2,2.9,-0,2.9).curveTo(1.2,2.9,2,2).curveTo(2.8,1.2,2.8,-0).curveTo(2.8,-1.2,2,-2.1).curveTo(1.2,-2.8,-0,-2.8).curveTo(-1.2,-2.8,-2,-2.1).closePath();
	this.shape_2.setTransform(224.75,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.9,4.5).lineTo(-0.9,-2.6).lineTo(-3.9,-2.6).lineTo(-3.9,-4.5).lineTo(3.9,-4.5).lineTo(3.9,-2.6).lineTo(1,-2.6).lineTo(1,4.5).closePath();
	this.shape_3.setTransform(214.25,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.1,4.5).lineTo(2.1,0.9).lineTo(-2,0.9).lineTo(-2,4.5).lineTo(-4,4.5).lineTo(-4,-4.5).lineTo(-2,-4.5).lineTo(-2,-0.9).lineTo(2.1,-0.9).lineTo(2.1,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_4.setTransform(204.1,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.3,3.4).curveTo(-4.6,2.1,-4.6,-0).curveTo(-4.6,-2,-3.3,-3.4).curveTo(-2,-4.8,0.1,-4.8).curveTo(2.1,-4.8,3.3,-3.4).curveTo(4.6,-1.9,4.6,-0).lineTo(4.6,0.9).lineTo(-2.6,0.9).curveTo(-2.4,1.8,-1.6,2.4).curveTo(-0.9,2.9,0.3,2.9).curveTo(1.8,3,2.6,1.9).lineTo(4.2,2.8).curveTo(2.9,4.7,0.3,4.8).curveTo(-1.9,4.7,-3.3,3.4).closePath().moveTo(-1.7,-2.4).curveTo(-2.4,-1.8,-2.6,-0.7).lineTo(2.7,-0.7).curveTo(2.5,-1.8,1.8,-2.4).curveTo(1.1,-3,0.1,-3).curveTo(-1,-2.9,-1.7,-2.4).closePath();
	this.shape_5.setTransform(192.725,2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.8,6.4).lineTo(-4.8,-6.2).lineTo(-2.8,-6.2).lineTo(-2.8,-4.9).curveTo(-1.8,-6.4,0.3,-6.4).curveTo(2.1,-6.4,3.5,-5).curveTo(4.8,-3.7,4.8,-1.7).curveTo(4.8,0.3,3.5,1.7).curveTo(2.2,3.1,0.3,3.1).curveTo(-1.7,3.1,-2.8,1.6).lineTo(-2.8,6.4).closePath().moveTo(-2,-3.7).curveTo(-2.8,-2.9,-2.8,-1.7).curveTo(-2.8,-0.5,-2,0.4).curveTo(-1.2,1.2,-0,1.2).curveTo(1.2,1.2,2,0.4).curveTo(2.8,-0.4,2.8,-1.7).curveTo(2.8,-2.9,2,-3.7).curveTo(1.2,-4.6,-0,-4.6).curveTo(-1.2,-4.6,-2,-3.7).closePath();
	this.shape_6.setTransform(181.025,3.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.3,6.3).lineTo(-3.3,4.5).curveTo(-1.5,4.6,-0.9,2.7).lineTo(-0.8,2.6).lineTo(-4.6,-6.3).lineTo(-2.5,-6.3).lineTo(0.2,0.2).lineTo(2.5,-6.3).lineTo(4.6,-6.3).lineTo(1.1,3).curveTo(0.5,4.7,-0.6,5.5).curveTo(-1.7,6.3,-3,6.3).lineTo(-3.3,6.3).closePath();
	this.shape_7.setTransform(169.425,3.8053);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.6,4.5).lineTo(-2,0.3).lineTo(-2,4.5).lineTo(-4,4.5).lineTo(-4,-4.5).lineTo(-2,-4.5).lineTo(-2,-0.5).lineTo(1.4,-4.5).lineTo(3.8,-4.5).lineTo(-0.1,-0.1).lineTo(4,4.5).closePath();
	this.shape_8.setTransform(159.625,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2,4.5).lineTo(2,0.9).lineTo(-2,0.9).lineTo(-2,4.5).lineTo(-4,4.5).lineTo(-4,-4.5).lineTo(-2,-4.5).lineTo(-2,-0.9).lineTo(2,-0.9).lineTo(2,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_9.setTransform(148.45,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.4,3.3).curveTo(-4.7,2,-4.7,-0).curveTo(-4.7,-2,-3.4,-3.4).curveTo(-2,-4.8,0,-4.8).curveTo(2,-4.8,3.4,-3.4).curveTo(4.7,-2,4.7,-0).curveTo(4.7,2,3.4,3.3).curveTo(2,4.7,0,4.8).curveTo(-2,4.7,-3.4,3.3).closePath().moveTo(-2,-2.1).curveTo(-2.8,-1.2,-2.8,-0).curveTo(-2.8,1.2,-2,2).curveTo(-1.2,2.9,0,2.9).curveTo(1.2,2.9,2,2).curveTo(2.8,1.2,2.8,-0).curveTo(2.8,-1.2,2,-2.1).curveTo(1.2,-2.8,0,-2.8).curveTo(-1.2,-2.8,-2,-2.1).closePath();
	this.shape_10.setTransform(136.95,2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.6,4.5).lineTo(-2,0.3).lineTo(-2,4.5).lineTo(-4,4.5).lineTo(-4,-4.5).lineTo(-2,-4.5).lineTo(-2,-0.5).lineTo(1.4,-4.5).lineTo(3.8,-4.5).lineTo(-0.1,-0.1).lineTo(4,4.5).closePath();
	this.shape_11.setTransform(126.425,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3,4.5).lineTo(-3,-4.5).lineTo(3,-4.5).lineTo(3,-2.6).lineTo(-1.1,-2.6).lineTo(-1.1,4.5).closePath();
	this.shape_12.setTransform(111.6,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2,4.5).lineTo(2,0.9).lineTo(-2,0.9).lineTo(-2,4.5).lineTo(-4,4.5).lineTo(-4,-4.5).lineTo(-2,-4.5).lineTo(-2,-0.9).lineTo(2,-0.9).lineTo(2,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_13.setTransform(101.4,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.1,4.5).lineTo(2.1,-1.2).lineTo(-2.5,4.5).lineTo(-4,4.5).lineTo(-4,-4.5).lineTo(-2.1,-4.5).lineTo(-2.1,1.2).lineTo(2.5,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_14.setTransform(90.2,2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.8,6.4).lineTo(-4.8,-6.2).lineTo(-2.8,-6.2).lineTo(-2.8,-4.9).curveTo(-1.8,-6.4,0.3,-6.4).curveTo(2.1,-6.4,3.5,-5).curveTo(4.8,-3.7,4.8,-1.7).curveTo(4.8,0.3,3.5,1.7).curveTo(2.2,3.1,0.3,3.1).curveTo(-1.7,3.1,-2.8,1.6).lineTo(-2.8,6.4).closePath().moveTo(-2,-3.7).curveTo(-2.8,-2.9,-2.8,-1.7).curveTo(-2.8,-0.5,-2,0.4).curveTo(-1.2,1.2,-0,1.2).curveTo(1.2,1.2,2,0.4).curveTo(2.8,-0.4,2.8,-1.7).curveTo(2.8,-2.9,2,-3.7).curveTo(1.2,-4.6,-0,-4.6).curveTo(-1.2,-4.6,-2,-3.7).closePath();
	this.shape_15.setTransform(78.625,3.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.4,3.3).curveTo(-4.8,2,-4.8,-0).curveTo(-4.8,-2,-3.4,-3.4).curveTo(-2,-4.8,-0,-4.8).curveTo(2,-4.8,3.3,-3.4).curveTo(4.7,-2,4.7,-0).curveTo(4.7,2,3.3,3.3).curveTo(2,4.7,-0,4.8).curveTo(-2,4.7,-3.4,3.3).closePath().moveTo(-2,-2.1).curveTo(-2.8,-1.2,-2.8,-0).curveTo(-2.8,1.2,-2,2).curveTo(-1.2,2.9,-0,2.9).curveTo(1.2,2.9,2,2).curveTo(2.8,1.2,2.8,-0).curveTo(2.8,-1.2,2,-2.1).curveTo(1.2,-2.8,-0,-2.8).curveTo(-1.2,-2.8,-2,-2.1).closePath();
	this.shape_16.setTransform(66.35,2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1,4.5).lineTo(-1,-2.6).lineTo(-3.9,-2.6).lineTo(-3.9,-4.5).lineTo(3.9,-4.5).lineTo(3.9,-2.6).lineTo(1,-2.6).lineTo(1,4.5).closePath();
	this.shape_17.setTransform(55.85,2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.1,4.5).lineTo(2.1,-1.2).lineTo(-2.5,4.5).lineTo(-4,4.5).lineTo(-4,-4.5).lineTo(-2.1,-4.5).lineTo(-2.1,1.2).lineTo(2.5,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_18.setTransform(45.7,2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2,4.5).lineTo(2,0.9).lineTo(-2,0.9).lineTo(-2,4.5).lineTo(-4,4.5).lineTo(-4,-4.5).lineTo(-2,-4.5).lineTo(-2,-0.9).lineTo(2,-0.9).lineTo(2,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_19.setTransform(34.5,2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.4,3.3).curveTo(-4.7,2,-4.7,-0).curveTo(-4.7,-2,-3.4,-3.4).curveTo(-2,-4.8,0,-4.8).curveTo(2,-4.8,3.4,-3.4).curveTo(4.7,-2,4.7,-0).curveTo(4.7,2,3.4,3.3).curveTo(2,4.7,0,4.8).curveTo(-2,4.7,-3.4,3.3).closePath().moveTo(-2,-2.1).curveTo(-2.8,-1.2,-2.8,-0).curveTo(-2.8,1.2,-2,2).curveTo(-1.2,2.9,0,2.9).curveTo(1.1,2.9,2,2).curveTo(2.8,1.2,2.8,-0).curveTo(2.8,-1.2,2,-2.1).curveTo(1.1,-2.8,0,-2.8).curveTo(-1.2,-2.8,-2,-2.1).closePath();
	this.shape_20.setTransform(23,2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#FFFFFF").beginStroke().moveTo(4,6.3).lineTo(4,-2.7).lineTo(0.1,3.7).lineTo(-0.1,3.7).lineTo(-3.9,-2.7).lineTo(-3.9,6.3).lineTo(-6,6.3).lineTo(-6,-6.3).lineTo(-3.8,-6.3).lineTo(0,-0).lineTo(3.8,-6.3).lineTo(6,-6.3).lineTo(6,6.3).closePath();
	this.shape_21.setTransform(9.275,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,-13,249.1,26), null);


(lib.Symbol17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.9,0.9).curveTo(-1.4,0.6,-1.4,-0).curveTo(-1.4,-0.6,-0.9,-0.9).curveTo(-0.5,-1.3,-0,-1.4).curveTo(0.6,-1.3,1,-0.9).curveTo(1.3,-0.6,1.3,-0).curveTo(1.3,0.6,1,0.9).curveTo(0.6,1.3,-0,1.3).curveTo(-0.5,1.3,-0.9,0.9).closePath();
	this.shape.setTransform(190.65,5.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.5,3.3).curveTo(-4.8,2,-4.8,-0).curveTo(-4.8,-2,-3.5,-3.4).curveTo(-2.2,-4.8,-0.3,-4.8).curveTo(1.7,-4.8,2.8,-3.3).lineTo(2.8,-4.5).lineTo(4.8,-4.5).lineTo(4.8,4.5).lineTo(2.8,4.5).lineTo(2.8,3.2).curveTo(1.7,4.7,-0.3,4.8).curveTo(-2.2,4.7,-3.5,3.3).closePath().moveTo(-2,-2.1).curveTo(-2.8,-1.3,-2.8,-0).curveTo(-2.8,1.2,-2,2).curveTo(-1.2,2.9,-0,2.9).curveTo(1.2,2.9,2,2).curveTo(2.8,1.2,2.8,-0).curveTo(2.8,-1.3,2,-2.1).curveTo(1.2,-2.9,-0,-2.9).curveTo(-1.2,-2.9,-2,-2.1).closePath();
	this.shape_1.setTransform(181.425,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.6,4.5).lineTo(-2,0.3).lineTo(-2,4.5).lineTo(-4,4.5).lineTo(-4,-4.5).lineTo(-2,-4.5).lineTo(-2,-0.5).lineTo(1.4,-4.5).lineTo(3.8,-4.5).lineTo(-0.1,-0.1).lineTo(4,4.5).closePath();
	this.shape_2.setTransform(170.875,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.1,6).lineTo(2.1,0.3).lineTo(-2.5,6).lineTo(-4,6).lineTo(-4,-3).lineTo(-2.1,-3).lineTo(-2.1,2.7).lineTo(2.5,-3).lineTo(4,-3).lineTo(4,6).closePath().moveTo(-2.6,-4.3).lineTo(-2.6,-6).lineTo(2.5,-6).lineTo(2.5,-4.3).closePath();
	this.shape_3.setTransform(159.7,0.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.4,3.3).curveTo(-4.7,2,-4.7,-0).curveTo(-4.7,-2,-3.4,-3.4).curveTo(-2,-4.8,0,-4.8).curveTo(2,-4.8,3.4,-3.4).curveTo(4.7,-2,4.7,-0).curveTo(4.7,2,3.4,3.3).curveTo(2,4.7,0,4.8).curveTo(-2,4.7,-3.4,3.3).closePath().moveTo(-2,-2.1).curveTo(-2.8,-1.2,-2.8,-0).curveTo(-2.8,1.2,-2,2).curveTo(-1.2,2.9,0,2.9).curveTo(1.2,2.9,2,2).curveTo(2.8,1.2,2.8,-0).curveTo(2.8,-1.2,2,-2.1).curveTo(1.2,-2.8,0,-2.8).curveTo(-1.2,-2.8,-2,-2.1).closePath();
	this.shape_4.setTransform(148.2,2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.8,6.4).lineTo(-4.8,-6.2).lineTo(-2.8,-6.2).lineTo(-2.8,-4.9).curveTo(-1.8,-6.4,0.3,-6.4).curveTo(2.1,-6.4,3.5,-5).curveTo(4.8,-3.7,4.8,-1.7).curveTo(4.8,0.3,3.5,1.7).curveTo(2.2,3.1,0.3,3.1).curveTo(-1.7,3.1,-2.8,1.6).lineTo(-2.8,6.4).closePath().moveTo(-2,-3.7).curveTo(-2.8,-2.9,-2.8,-1.7).curveTo(-2.8,-0.5,-2,0.4).curveTo(-1.2,1.2,-0,1.2).curveTo(1.2,1.2,2,0.4).curveTo(2.8,-0.4,2.8,-1.7).curveTo(2.8,-2.9,2,-3.7).curveTo(1.2,-4.6,-0,-4.6).curveTo(-1.2,-4.6,-2,-3.7).closePath();
	this.shape_5.setTransform(136.375,3.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1,4.5).lineTo(-1,-2.6).lineTo(-3.9,-2.6).lineTo(-3.9,-4.5).lineTo(3.9,-4.5).lineTo(3.9,-2.6).lineTo(1,-2.6).lineTo(1,4.5).closePath();
	this.shape_6.setTransform(125.35,2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.1,3.3).curveTo(-4.4,2,-4.4,-0).curveTo(-4.4,-2,-3.1,-3.4).curveTo(-1.7,-4.8,0.4,-4.8).curveTo(1.7,-4.8,2.7,-4.1).curveTo(3.8,-3.5,4.3,-2.4).lineTo(2.7,-1.5).curveTo(2.4,-2.1,1.7,-2.5).curveTo(1.1,-2.8,0.3,-2.8).curveTo(-0.9,-2.9,-1.7,-2).curveTo(-2.5,-1.2,-2.4,-0).curveTo(-2.5,1.2,-1.7,2).curveTo(-0.9,2.9,0.3,2.9).curveTo(1.1,2.9,1.7,2.4).curveTo(2.4,2.1,2.7,1.4).lineTo(4.4,2.4).curveTo(3.8,3.4,2.7,4.1).curveTo(1.7,4.7,0.4,4.8).curveTo(-1.7,4.7,-3.1,3.3).closePath();
	this.shape_7.setTransform(115.55,2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.5,3.3).curveTo(-4.8,2,-4.8,-0).curveTo(-4.8,-2,-3.5,-3.4).curveTo(-2.2,-4.8,-0.3,-4.8).curveTo(1.7,-4.8,2.8,-3.3).lineTo(2.8,-4.5).lineTo(4.8,-4.5).lineTo(4.8,4.5).lineTo(2.8,4.5).lineTo(2.8,3.2).curveTo(1.7,4.7,-0.3,4.8).curveTo(-2.2,4.7,-3.5,3.3).closePath().moveTo(-2,-2.1).curveTo(-2.8,-1.3,-2.8,-0).curveTo(-2.8,1.2,-2,2).curveTo(-1.2,2.9,-0,2.9).curveTo(1.2,2.9,2,2).curveTo(2.8,1.2,2.8,-0).curveTo(2.8,-1.3,2,-2.1).curveTo(1.2,-2.9,-0,-2.9).curveTo(-1.2,-2.9,-2,-2.1).closePath();
	this.shape_8.setTransform(103.575,2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2,4.5).lineTo(2,0.9).lineTo(-2,0.9).lineTo(-2,4.5).lineTo(-4,4.5).lineTo(-4,-4.5).lineTo(-2,-4.5).lineTo(-2,-0.9).lineTo(2,-0.9).lineTo(2,-4.5).lineTo(4,-4.5).lineTo(4,4.5).closePath();
	this.shape_9.setTransform(92.1,2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.9,4.5).lineTo(1.9,1.5).lineTo(0.8,1.5).lineTo(-1.5,4.5).lineTo(-3.8,4.5).lineTo(-1.4,1.3).curveTo(-2.3,1,-2.9,0.2).curveTo(-3.4,-0.6,-3.4,-1.5).curveTo(-3.4,-2.7,-2.5,-3.6).curveTo(-1.7,-4.5,-0.2,-4.5).lineTo(3.8,-4.5).lineTo(3.8,4.5).closePath().moveTo(-1.1,-2.4).curveTo(-1.5,-2,-1.5,-1.5).curveTo(-1.5,-0.9,-1.1,-0.6).curveTo(-0.7,-0.2,-0.1,-0.2).lineTo(1.9,-0.2).lineTo(1.9,-2.7).lineTo(-0.1,-2.7).curveTo(-0.7,-2.8,-1.1,-2.4).closePath();
	this.shape_10.setTransform(75.525,2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.5,3.3).curveTo(-4.8,2,-4.8,-0).curveTo(-4.8,-2,-3.5,-3.4).curveTo(-2.2,-4.8,-0.3,-4.8).curveTo(1.7,-4.8,2.8,-3.3).lineTo(2.8,-4.5).lineTo(4.8,-4.5).lineTo(4.8,4.5).lineTo(2.8,4.5).lineTo(2.8,3.2).curveTo(1.7,4.7,-0.3,4.8).curveTo(-2.2,4.7,-3.5,3.3).closePath().moveTo(-2,-2.1).curveTo(-2.8,-1.3,-2.8,-0).curveTo(-2.8,1.2,-2,2).curveTo(-1.2,2.9,-0,2.9).curveTo(1.2,2.9,2,2).curveTo(2.8,1.2,2.8,-0).curveTo(2.8,-1.3,2,-2.1).curveTo(1.2,-2.9,-0,-2.9).curveTo(-1.2,-2.9,-2,-2.1).closePath();
	this.shape_11.setTransform(64.275,2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.9,4.5).lineTo(-0.9,-2.6).lineTo(-3.9,-2.6).lineTo(-3.9,-4.5).lineTo(3.9,-4.5).lineTo(3.9,-2.6).lineTo(1,-2.6).lineTo(1,4.5).closePath();
	this.shape_12.setTransform(53.75,2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.1,3.3).curveTo(-4.4,2,-4.4,-0).curveTo(-4.4,-2,-3.1,-3.4).curveTo(-1.7,-4.8,0.3,-4.8).curveTo(1.6,-4.8,2.8,-4.1).curveTo(3.8,-3.5,4.4,-2.4).lineTo(2.7,-1.5).curveTo(2.3,-2.1,1.8,-2.5).curveTo(1.1,-2.8,0.3,-2.8).curveTo(-0.9,-2.9,-1.7,-2).curveTo(-2.4,-1.2,-2.5,-0).curveTo(-2.4,1.2,-1.7,2).curveTo(-0.9,2.9,0.3,2.9).curveTo(1.1,2.9,1.8,2.4).curveTo(2.4,2.1,2.7,1.4).lineTo(4.4,2.4).curveTo(3.8,3.4,2.7,4.1).curveTo(1.7,4.7,0.3,4.8).curveTo(-1.7,4.7,-3.1,3.3).closePath();
	this.shape_13.setTransform(43.95,2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.4,3.3).curveTo(-4.7,2,-4.7,-0).curveTo(-4.7,-2,-3.4,-3.4).curveTo(-2,-4.8,0,-4.8).curveTo(2,-4.8,3.4,-3.4).curveTo(4.7,-2,4.7,-0).curveTo(4.7,2,3.4,3.3).curveTo(2,4.7,0,4.8).curveTo(-2,4.7,-3.4,3.3).closePath().moveTo(-2,-2.1).curveTo(-2.8,-1.2,-2.8,-0).curveTo(-2.8,1.2,-2,2).curveTo(-1.2,2.9,0,2.9).curveTo(1.2,2.9,2,2).curveTo(2.8,1.2,2.8,-0).curveTo(2.8,-1.2,2,-2.1).curveTo(1.2,-2.8,0,-2.8).curveTo(-1.2,-2.8,-2,-2.1).closePath();
	this.shape_14.setTransform(32.55,2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.8,6.4).lineTo(-4.8,-6.2).lineTo(-2.8,-6.2).lineTo(-2.8,-4.9).curveTo(-1.8,-6.4,0.3,-6.4).curveTo(2.1,-6.4,3.5,-5).curveTo(4.8,-3.7,4.8,-1.7).curveTo(4.8,0.3,3.5,1.7).curveTo(2.2,3.1,0.3,3.1).curveTo(-1.7,3.1,-2.8,1.6).lineTo(-2.8,6.4).closePath().moveTo(-2,-3.7).curveTo(-2.8,-2.9,-2.8,-1.7).curveTo(-2.8,-0.5,-2,0.4).curveTo(-1.2,1.2,-0,1.2).curveTo(1.2,1.2,2,0.4).curveTo(2.8,-0.4,2.8,-1.7).curveTo(2.8,-2.9,2,-3.7).curveTo(1.2,-4.6,-0,-4.6).curveTo(-1.2,-4.6,-2,-3.7).closePath();
	this.shape_15.setTransform(20.725,3.675);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.5,6.3).lineTo(2.5,-4.3).lineTo(-2.6,-4.3).lineTo(-2.6,6.3).lineTo(-4.7,6.3).lineTo(-4.7,-6.3).lineTo(4.6,-6.3).lineTo(4.6,6.3).closePath();
	this.shape_16.setTransform(7.9,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,-13,196.2,26), null);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.gears();
	this.instance.setTransform(0,-34.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,-34.5,88,69), null);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(0,0,0,0.886)").beginStroke().moveTo(2.1,10.3).lineTo(2.1,3).lineTo(-3,10.3).lineTo(-6.7,10.3).lineTo(-6.7,-5.8).lineTo(-2.1,-5.8).lineTo(-2.1,1.6).lineTo(3,-5.8).lineTo(6.7,-5.8).lineTo(6.7,10.3).closePath().moveTo(-4,-6.9).lineTo(-4,-10.4).lineTo(4,-10.4).lineTo(4,-6.9).closePath();
	this.shape.setTransform(240.375,10.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("rgba(0,0,0,0.886)").beginStroke().moveTo(2.1,8).lineTo(2.1,0.7).lineTo(-3,8).lineTo(-6.7,8).lineTo(-6.7,-8.1).lineTo(-2.1,-8.1).lineTo(-2.1,-0.7).lineTo(3,-8.1).lineTo(6.7,-8.1).lineTo(6.7,8).closePath();
	this.shape_1.setTransform(223.725,12.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("rgba(0,0,0,0.886)").beginStroke().moveTo(2.9,9.6).lineTo(2.9,6.5).lineTo(-7.5,6.5).lineTo(-7.5,-9.6).lineTo(-2.7,-9.6).lineTo(-2.7,2.1).lineTo(0.8,2.1).lineTo(0.8,-9.6).lineTo(5.6,-9.6).lineTo(5.6,2.1).lineTo(7.5,2.1).lineTo(7.5,9.6).closePath();
	this.shape_2.setTransform(207.125,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("rgba(0,0,0,0.886)").beginStroke().moveTo(2.1,8).lineTo(2.1,0.7).lineTo(-3,8).lineTo(-6.7,8).lineTo(-6.7,-8.1).lineTo(-2.1,-8.1).lineTo(-2.1,-0.7).lineTo(3,-8.1).lineTo(6.7,-8.1).lineTo(6.7,8).closePath();
	this.shape_3.setTransform(189.625,12.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("rgba(0,0,0,0.886)").beginStroke().moveTo(-6.2,4.7).lineTo(-2.3,2.4).curveTo(-1.6,4,0.1,4.1).curveTo(1.6,4,1.6,3).curveTo(1.6,2,0.5,1.9).lineTo(-2,1.9).lineTo(-2,-2).lineTo(-0,-2.1).curveTo(1.2,-2.1,1.2,-3.1).curveTo(1.2,-4.1,-0.2,-4.1).curveTo(-1.7,-4.1,-2.3,-2.7).lineTo(-6.1,-4.9).curveTo(-5.4,-6.6,-3.8,-7.5).curveTo(-2.2,-8.4,-0.1,-8.4).curveTo(2.5,-8.4,4.1,-7).curveTo(5.7,-5.7,5.7,-3.5).curveTo(5.7,-1.3,4.1,-0.2).curveTo(6.2,1,6.2,3.5).curveTo(6.2,5.8,4.6,7.1).curveTo(3,8.4,0.1,8.4).curveTo(-4.7,8.4,-6.2,4.7).closePath();
	this.shape_4.setTransform(174.225,12.95);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("rgba(0,0,0,0.886)").beginStroke().moveTo(-6.1,6).curveTo(-8.6,3.6,-8.6,0).curveTo(-8.6,-3.6,-6.1,-6).curveTo(-3.6,-8.4,-0,-8.4).curveTo(3.6,-8.4,6.1,-6).curveTo(8.5,-3.6,8.5,0).curveTo(8.5,3.6,6.1,6).curveTo(3.6,8.4,-0,8.4).curveTo(-3.5,8.4,-6.1,6).closePath().moveTo(-2.8,-2.8).curveTo(-3.9,-1.7,-3.9,0).curveTo(-3.9,1.6,-2.8,2.8).curveTo(-1.7,3.9,-0,3.9).curveTo(1.7,3.9,2.8,2.8).curveTo(3.9,1.7,3.9,0).curveTo(3.9,-1.7,2.8,-2.8).curveTo(1.7,-3.9,-0,-3.9).curveTo(-1.7,-3.9,-2.8,-2.8).closePath();
	this.shape_5.setTransform(157.8,12.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("rgba(0,0,0,0.886)").beginStroke().moveTo(1.7,8).lineTo(1.7,-3.6).lineTo(-1.7,-3.6).lineTo(-1.7,8).lineTo(-6.3,8).lineTo(-6.3,-8.1).lineTo(6.3,-8.1).lineTo(6.3,8).closePath();
	this.shape_6.setTransform(140.225,12.95);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("rgba(0,0,0,0.886)").beginStroke().moveTo(2.1,8).lineTo(2.1,0.7).lineTo(-3,8).lineTo(-6.7,8).lineTo(-6.7,-8.1).lineTo(-2.1,-8.1).lineTo(-2.1,-0.7).lineTo(3,-8.1).lineTo(6.7,-8.1).lineTo(6.7,8).closePath();
	this.shape_7.setTransform(118.325,12.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("rgba(0,0,0,0.886)").beginStroke().moveTo(1.7,8).lineTo(-2.2,1.2).lineTo(-2.2,8).lineTo(-6.8,8).lineTo(-6.8,-8.1).lineTo(-2.2,-8.1).lineTo(-2.2,-1.6).lineTo(1.5,-8.1).lineTo(6.7,-8.1).lineTo(1.8,-0.3).lineTo(6.9,8).closePath();
	this.shape_8.setTransform(102.85,12.95);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("rgba(0,0,0,0.886)").beginStroke().moveTo(-6.2,8).lineTo(-6.2,-8.1).lineTo(0.3,-8.1).curveTo(2.7,-8.1,4.5,-6.5).curveTo(6.2,-4.9,6.1,-2.3).curveTo(6.2,0.3,4.5,2).curveTo(2.7,3.5,0.3,3.5).lineTo(-1.6,3.5).lineTo(-1.6,8).closePath().moveTo(-1.6,-1).lineTo(0.3,-1).curveTo(0.8,-1,1.2,-1.3).curveTo(1.5,-1.7,1.6,-2.3).curveTo(1.5,-2.9,1.2,-3.2).curveTo(0.8,-3.6,0.3,-3.6).lineTo(-1.6,-3.6).closePath();
	this.shape_9.setTransform(87.45,12.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("rgba(0,0,0,0.886)").beginStroke().moveTo(-5.3,8).lineTo(-5.3,-8.1).lineTo(5.2,-8.1).lineTo(5.2,-3.9).lineTo(-0.7,-3.9).lineTo(-0.7,-2.1).lineTo(4.6,-2.1).lineTo(4.6,2).lineTo(-0.7,2).lineTo(-0.7,3.8).lineTo(5.3,3.8).lineTo(5.3,8).closePath();
	this.shape_10.setTransform(73.175,12.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("rgba(0,0,0,0.886)").beginStroke().moveTo(-6.2,8).lineTo(-6.2,-8.1).lineTo(0.2,-8.1).curveTo(2.9,-8.1,4.3,-6.9).curveTo(5.8,-5.7,5.8,-3.5).curveTo(5.8,-1.4,4.2,-0.3).curveTo(6.2,0.9,6.2,3.3).curveTo(6.2,5.6,4.8,6.8).curveTo(3.3,8,0.6,8).closePath().moveTo(-1.6,4.1).lineTo(0.4,4.1).curveTo(0.9,4.1,1.3,3.8).curveTo(1.6,3.4,1.6,3).curveTo(1.6,1.9,0.6,1.8).lineTo(-1.6,1.8).closePath().moveTo(-1.6,-2).lineTo(0.1,-2).curveTo(1.2,-2.1,1.2,-3).curveTo(1.2,-3.5,0.8,-3.8).curveTo(0.4,-4.1,-0.1,-4.1).lineTo(-1.6,-4.1).closePath();
	this.shape_11.setTransform(59.2,12.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("rgba(0,0,0,0.886)").beginStroke().moveTo(-6,6).curveTo(-8.5,3.6,-8.5,0).curveTo(-8.5,-3.6,-6,-6).curveTo(-3.6,-8.4,0,-8.4).curveTo(3.6,-8.4,6,-6).curveTo(8.6,-3.6,8.6,0).curveTo(8.6,3.6,6,6).curveTo(3.6,8.4,0,8.4).curveTo(-3.5,8.4,-6,6).closePath().moveTo(-2.8,-2.8).curveTo(-3.9,-1.7,-3.9,0).curveTo(-3.9,1.6,-2.8,2.8).curveTo(-1.7,3.9,0,3.9).curveTo(1.7,3.9,2.8,2.8).curveTo(4,1.7,4,0).curveTo(4,-1.7,2.8,-2.8).curveTo(1.7,-3.9,0,-3.9).curveTo(-1.7,-3.9,-2.8,-2.8).closePath();
	this.shape_12.setTransform(41.75,12.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("rgba(0,0,0,0.886)").beginStroke().moveTo(-6.2,8).lineTo(-6.2,-8.1).lineTo(0.3,-8.1).curveTo(2.7,-8.1,4.5,-6.5).curveTo(6.2,-4.9,6.2,-2.3).curveTo(6.2,0.3,4.5,2).curveTo(2.7,3.5,0.3,3.5).lineTo(-1.6,3.5).lineTo(-1.6,8).closePath().moveTo(-1.6,-1).lineTo(0.3,-1).curveTo(0.8,-1,1.2,-1.3).curveTo(1.5,-1.7,1.6,-2.3).curveTo(1.5,-2.9,1.2,-3.2).curveTo(0.8,-3.6,0.3,-3.6).lineTo(-1.6,-3.6).closePath();
	this.shape_13.setTransform(25.25,12.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("rgba(0,0,0,0.886)").beginStroke().moveTo(1.7,8).lineTo(1.7,-3.6).lineTo(-1.7,-3.6).lineTo(-1.7,8).lineTo(-6.3,8).lineTo(-6.3,-8.1).lineTo(6.3,-8.1).lineTo(6.3,8).closePath();
	this.shape_14.setTransform(9.475,12.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("rgba(0,0,0,0.886)").beginStroke().moveTo(-5.3,6).curveTo(-7.8,3.6,-7.8,-0).curveTo(-7.8,-3.6,-5.3,-6).curveTo(-3,-8.4,0.7,-8.4).curveTo(2.9,-8.4,4.8,-7.4).curveTo(6.7,-6.3,7.7,-4.5).lineTo(3.7,-2.2).curveTo(3.3,-3,2.6,-3.4).curveTo(1.7,-3.9,0.7,-3.9).curveTo(-1,-3.9,-2,-2.8).curveTo(-3.1,-1.7,-3.1,-0).curveTo(-3.1,1.7,-2,2.8).curveTo(-1,3.9,0.7,3.9).curveTo(1.7,3.9,2.6,3.4).curveTo(3.3,3,3.7,2.2).lineTo(7.7,4.5).curveTo(6.7,6.3,4.8,7.4).curveTo(2.9,8.4,0.7,8.4).curveTo(-3,8.4,-5.3,6).closePath();
	this.shape_15.setTransform(181.65,-14.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("rgba(0,0,0,0.886)").beginStroke().moveTo(2.1,8).lineTo(2.1,0.7).lineTo(-3,8).lineTo(-6.7,8).lineTo(-6.7,-8).lineTo(-2.1,-8).lineTo(-2.1,-0.7).lineTo(3,-8).lineTo(6.7,-8).lineTo(6.7,8).closePath();
	this.shape_16.setTransform(164.525,-14.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("rgba(0,0,0,0.886)").beginStroke().moveTo(-6.2,8).lineTo(-6.2,-8).lineTo(0.2,-8).curveTo(2.9,-8.1,4.4,-6.9).curveTo(5.8,-5.7,5.7,-3.5).curveTo(5.8,-1.4,4.1,-0.3).curveTo(6.2,0.9,6.2,3.3).curveTo(6.2,5.5,4.7,6.8).curveTo(3.3,8,0.6,8).closePath().moveTo(-1.6,4.1).lineTo(0.3,4.1).curveTo(0.9,4.1,1.2,3.8).curveTo(1.6,3.4,1.6,3).curveTo(1.6,1.9,0.6,1.8).lineTo(-1.6,1.8).closePath().moveTo(-1.6,-2).lineTo(0.2,-2).curveTo(1.2,-2.1,1.2,-3).curveTo(1.1,-3.5,0.8,-3.8).curveTo(0.5,-4.1,-0.1,-4.1).lineTo(-1.6,-4.1).closePath();
	this.shape_17.setTransform(149.15,-14.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("rgba(0,0,0,0.886)").beginStroke().moveTo(-6.2,8).lineTo(-6.2,-8).lineTo(0.3,-8).curveTo(2.7,-8,4.5,-6.5).curveTo(6.2,-4.9,6.2,-2.3).curveTo(6.2,0.3,4.5,2).curveTo(2.7,3.5,0.3,3.5).lineTo(-1.6,3.5).lineTo(-1.6,8).closePath().moveTo(-1.6,-1).lineTo(0.3,-1).curveTo(0.8,-1,1.2,-1.4).curveTo(1.6,-1.7,1.6,-2.3).curveTo(1.6,-2.9,1.2,-3.2).curveTo(0.8,-3.6,0.3,-3.6).lineTo(-1.6,-3.6).closePath();
	this.shape_18.setTransform(134.4,-14.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("rgba(0,0,0,0.886)").beginStroke().moveTo(-5.3,8).lineTo(-5.3,-8).lineTo(5.2,-8).lineTo(5.2,-3.9).lineTo(-0.7,-3.9).lineTo(-0.7,-2.1).lineTo(4.6,-2.1).lineTo(4.6,2).lineTo(-0.7,2).lineTo(-0.7,3.8).lineTo(5.3,3.8).lineTo(5.3,8).closePath();
	this.shape_19.setTransform(120.125,-14.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("rgba(0,0,0,0.886)").beginStroke().moveTo(-5.3,6).curveTo(-7.7,3.6,-7.8,-0).curveTo(-7.7,-3.6,-5.3,-6).curveTo(-3,-8.4,0.7,-8.4).curveTo(2.9,-8.4,4.8,-7.4).curveTo(6.7,-6.3,7.7,-4.5).lineTo(3.8,-2.2).curveTo(3.3,-3,2.5,-3.4).curveTo(1.7,-3.9,0.7,-3.9).curveTo(-1,-3.9,-2.1,-2.8).curveTo(-3.1,-1.7,-3.1,-0).curveTo(-3.1,1.7,-2.1,2.8).curveTo(-1,3.9,0.7,3.9).curveTo(1.8,3.9,2.5,3.4).curveTo(3.3,3,3.8,2.2).lineTo(7.7,4.5).curveTo(6.7,6.3,4.8,7.4).curveTo(2.9,8.4,0.7,8.4).curveTo(-3,8.4,-5.3,6).closePath();
	this.shape_20.setTransform(104.5,-14.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("rgba(0,0,0,0.886)").beginStroke().moveTo(2.1,10.3).lineTo(2.1,3).lineTo(-3,10.3).lineTo(-6.7,10.3).lineTo(-6.7,-5.7).lineTo(-2.1,-5.7).lineTo(-2.1,1.6).lineTo(3,-5.7).lineTo(6.7,-5.7).lineTo(6.7,10.3).closePath().moveTo(-4,-6.9).lineTo(-4,-10.4).lineTo(4,-10.4).lineTo(4,-6.9).closePath();
	this.shape_21.setTransform(81.775,-16.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("rgba(0,0,0,0.886)").beginStroke().moveTo(4.5,8).lineTo(4.5,-8).lineTo(9.1,-8).lineTo(9.1,8).closePath().moveTo(-9.1,8).lineTo(-9.1,-8).lineTo(-4.5,-8).lineTo(-4.5,-3.4).lineTo(-2.6,-3.4).curveTo(-0.2,-3.4,1.6,-1.9).curveTo(3.2,-0.3,3.2,2.3).curveTo(3.2,4.9,1.6,6.5).curveTo(-0.2,8,-2.6,8).closePath().moveTo(-4.5,3.6).lineTo(-2.6,3.6).curveTo(-2.1,3.6,-1.7,3.2).curveTo(-1.4,2.9,-1.4,2.3).curveTo(-1.4,1.7,-1.7,1.3).curveTo(-2.1,1,-2.6,1).lineTo(-4.5,1).closePath();
	this.shape_22.setTransform(62.725,-14.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("rgba(0,0,0,0.886)").beginStroke().moveTo(-6.2,8).lineTo(-6.2,-8).lineTo(0.2,-8).curveTo(2.9,-8.1,4.4,-6.9).curveTo(5.7,-5.7,5.7,-3.5).curveTo(5.7,-1.4,4.2,-0.3).curveTo(6.2,0.9,6.2,3.3).curveTo(6.2,5.5,4.7,6.8).curveTo(3.3,8,0.6,8).closePath().moveTo(-1.6,4.1).lineTo(0.3,4.1).curveTo(0.9,4.1,1.2,3.8).curveTo(1.6,3.4,1.6,3).curveTo(1.6,1.9,0.6,1.8).lineTo(-1.6,1.8).closePath().moveTo(-1.6,-2).lineTo(0.1,-2).curveTo(1.2,-2.1,1.1,-3).curveTo(1.2,-3.5,0.8,-3.8).curveTo(0.5,-4.1,-0.1,-4.1).lineTo(-1.6,-4.1).closePath();
	this.shape_23.setTransform(44.95,-14.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("rgba(0,0,0,0.886)").beginStroke().moveTo(-6.1,6).curveTo(-8.6,3.6,-8.5,-0).curveTo(-8.6,-3.6,-6.1,-6).curveTo(-3.6,-8.4,0,-8.4).curveTo(3.6,-8.4,6.1,-6).curveTo(8.6,-3.6,8.6,-0).curveTo(8.6,3.6,6.1,6).curveTo(3.6,8.4,0,8.4).curveTo(-3.6,8.4,-6.1,6).closePath().moveTo(-2.8,-2.8).curveTo(-3.9,-1.7,-3.9,-0).curveTo(-3.9,1.6,-2.8,2.8).curveTo(-1.7,3.9,0,3.9).curveTo(1.7,3.9,2.8,2.8).curveTo(4,1.7,3.9,-0).curveTo(4,-1.7,2.8,-2.8).curveTo(1.7,-3.9,0,-3.9).curveTo(-1.7,-3.9,-2.8,-2.8).closePath();
	this.shape_24.setTransform(27.5,-14.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("rgba(0,0,0,0.886)").beginStroke().moveTo(1.9,8).lineTo(1.9,2.1).lineTo(-2,2.1).lineTo(-2,8).lineTo(-6.6,8).lineTo(-6.6,-8).lineTo(-2,-8).lineTo(-2,-2.3).lineTo(1.9,-2.3).lineTo(1.9,-8).lineTo(6.6,-8).lineTo(6.6,8).closePath();
	this.shape_25.setTransform(9.7,-14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,-31.8,251.4,60.7), null);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.3,5.9).curveTo(-1.9,5.3,-1.9,4.6).curveTo(-1.9,3.8,-1.3,3.2).curveTo(-0.8,2.7,0,2.7).curveTo(0.8,2.7,1.3,3.2).curveTo(1.9,3.8,1.9,4.6).curveTo(1.9,5.3,1.3,5.9).curveTo(0.8,6.4,0,6.4).curveTo(-0.8,6.4,-1.3,5.9).closePath().moveTo(-1.2,1.6).lineTo(-1.8,-2.8).lineTo(-1.8,-6.4).lineTo(1.9,-6.4).lineTo(1.9,-2.8).lineTo(1.3,1.6).closePath();
	this.shape.setTransform(215.575,0.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.6,6.3).lineTo(-1.9,-0.1).lineTo(-1.9,6.3).lineTo(-5.1,6.3).lineTo(-5.1,-6.3).lineTo(-2.6,-6.3).lineTo(1.9,0.1).lineTo(1.9,-6.3).lineTo(5.1,-6.3).lineTo(5.1,6.3).closePath();
	this.shape_1.setTransform(205.875,0.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.6,5.2).curveTo(-5,4,-5,2).lineTo(-5,-6.4).lineTo(-1.8,-6.4).lineTo(-1.8,1.7).curveTo(-1.8,3.3,-0,3.3).curveTo(1.8,3.3,1.8,1.7).lineTo(1.8,-6.4).lineTo(5,-6.4).lineTo(5,2).curveTo(5,4,3.6,5.2).curveTo(2.2,6.4,-0,6.4).curveTo(-2.2,6.4,-3.6,5.2).closePath();
	this.shape_2.setTransform(193,0.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.6,4.7).curveTo(-6.5,2.8,-6.5,-0).curveTo(-6.5,-2.7,-4.6,-4.7).curveTo(-2.7,-6.5,0.1,-6.6).curveTo(1.8,-6.6,3.3,-5.8).curveTo(4.7,-5,5.6,-3.7).lineTo(2.8,-2.1).curveTo(2.5,-2.7,1.7,-3.1).curveTo(1,-3.4,0.1,-3.4).curveTo(-1.4,-3.4,-2.4,-2.4).curveTo(-3.3,-1.5,-3.3,0.1).curveTo(-3.3,1.5,-2.4,2.5).curveTo(-1.4,3.5,0.3,3.5).curveTo(2.5,3.5,3.2,1.9).lineTo(0.1,1.9).lineTo(0.1,-0.9).lineTo(6.5,-0.9).lineTo(6.5,0.4).curveTo(6.5,3.2,4.7,4.9).curveTo(3,6.5,0.2,6.6).curveTo(-2.7,6.6,-4.6,4.7).closePath();
	this.shape_3.setTransform(179.15,0.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.7,4.7).curveTo(-6.6,2.8,-6.6,-0).curveTo(-6.6,-2.7,-4.7,-4.7).curveTo(-2.8,-6.5,0,-6.6).curveTo(2.8,-6.5,4.7,-4.7).curveTo(6.6,-2.7,6.6,-0).curveTo(6.6,2.8,4.7,4.7).curveTo(2.8,6.6,0,6.6).curveTo(-2.8,6.6,-4.7,4.7).closePath().moveTo(-2.4,-2.4).curveTo(-3.4,-1.5,-3.4,-0).curveTo(-3.4,1.5,-2.4,2.4).curveTo(-1.4,3.4,0,3.4).curveTo(1.4,3.4,2.4,2.4).curveTo(3.4,1.5,3.4,-0).curveTo(3.4,-1.5,2.4,-2.4).curveTo(1.4,-3.4,0,-3.4).curveTo(-1.4,-3.4,-2.4,-2.4).closePath();
	this.shape_4.setTransform(164.05,0.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4,6.3).lineTo(-4,-6.3).lineTo(4,-6.3).lineTo(4,-3.3).lineTo(-0.9,-3.3).lineTo(-0.9,-1.5).lineTo(3.5,-1.5).lineTo(3.5,1.4).lineTo(-0.9,1.4).lineTo(-0.9,3.3).lineTo(4.1,3.3).lineTo(4.1,6.3).closePath();
	this.shape_5.setTransform(151.35,0.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.1,5.8).curveTo(-4.5,4.9,-5,3.4).lineTo(-2.2,1.9).curveTo(-1.5,3.5,0.3,3.5).curveTo(1.8,3.5,1.8,2.6).curveTo(1.8,2.2,0.9,1.7).lineTo(-0.7,1.3).curveTo(-2.5,0.7,-3.5,-0.2).curveTo(-4.4,-1.1,-4.4,-2.6).curveTo(-4.4,-4.4,-3.2,-5.5).curveTo(-1.9,-6.6,-0,-6.6).curveTo(1.5,-6.6,2.8,-5.8).curveTo(4,-5.1,4.6,-3.7).lineTo(1.9,-2.1).curveTo(1.4,-3.5,-0,-3.5).curveTo(-0.6,-3.5,-0.9,-3.3).curveTo(-1.2,-3,-1.2,-2.7).curveTo(-1.2,-2.3,-0.7,-2).curveTo(-0.3,-1.7,1,-1.3).lineTo(2.4,-0.8).lineTo(3.7,-0.1).curveTo(5,0.8,4.9,2.6).curveTo(5,4.5,3.7,5.6).curveTo(2.4,6.5,0.2,6.6).curveTo(-1.8,6.5,-3.1,5.8).closePath();
	this.shape_6.setTransform(140.05,0.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(4.3,6.3).lineTo(4.3,-3.6).lineTo(0.1,3.3).lineTo(-0.1,3.3).lineTo(-4.2,-3.6).lineTo(-4.2,6.3).lineTo(-5.9,6.3).lineTo(-5.9,-6.3).lineTo(-4,-6.3).lineTo(0,0.4).lineTo(4,-6.3).lineTo(5.9,-6.3).lineTo(5.9,6.3).closePath();
	this.shape_7.setTransform(120.4,0.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.6,4.7).curveTo(-6.5,2.7,-6.5,0).curveTo(-6.5,-2.8,-4.6,-4.6).curveTo(-2.8,-6.6,-0,-6.6).curveTo(2.7,-6.6,4.6,-4.6).curveTo(6.5,-2.8,6.5,0).curveTo(6.5,2.7,4.6,4.7).curveTo(2.7,6.6,-0,6.6).curveTo(-2.8,6.6,-4.6,4.7).closePath().moveTo(-3.5,-3.5).curveTo(-4.9,-2.1,-4.9,0).curveTo(-4.9,2,-3.5,3.5).curveTo(-2.1,4.9,-0,4.9).curveTo(2.1,4.9,3.4,3.5).curveTo(4.8,2,4.8,0).curveTo(4.8,-2.1,3.4,-3.5).curveTo(2.1,-4.9,-0,-4.9).curveTo(-2.1,-4.9,-3.5,-3.5).closePath();
	this.shape_8.setTransform(104.975,0.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.1,4.7).curveTo(-6,2.8,-6,0).curveTo(-6,-2.7,-4.1,-4.7).curveTo(-2.3,-6.5,0.6,-6.6).curveTo(2.3,-6.6,3.7,-5.7).curveTo(5.2,-4.9,6,-3.4).lineTo(4.5,-2.7).curveTo(4,-3.7,2.9,-4.3).curveTo(1.9,-4.9,0.6,-4.9).curveTo(-1.6,-4.9,-3,-3.5).curveTo(-4.4,-2.1,-4.4,0).curveTo(-4.4,2.1,-3,3.5).curveTo(-1.6,4.9,0.6,4.9).curveTo(1.9,4.9,2.9,4.3).curveTo(4,3.6,4.5,2.6).lineTo(6,3.4).curveTo(5.2,4.9,3.7,5.7).curveTo(2.3,6.6,0.6,6.6).curveTo(-2.3,6.6,-4.1,4.7).closePath();
	this.shape_9.setTransform(90.15,0.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3.1,6.3).lineTo(3.1,-3.1).lineTo(-3.4,6.3).lineTo(-4.7,6.3).lineTo(-4.7,-6.3).lineTo(-3.1,-6.3).lineTo(-3.1,3.1).lineTo(3.4,-6.3).lineTo(4.7,-6.3).lineTo(4.7,6.3).closePath();
	this.shape_10.setTransform(76.35,0.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.6,6.3).lineTo(-4.6,-6.3).lineTo(0.5,-6.3).curveTo(2,-6.3,3,-5.3).curveTo(4,-4.3,4,-2.9).curveTo(4,-1.2,2.6,-0.3).curveTo(3.5,0.2,4.1,0.9).curveTo(4.5,1.8,4.5,2.7).curveTo(4.5,4.3,3.5,5.2).curveTo(2.4,6.3,0.9,6.3).closePath().moveTo(-2.9,4.8).lineTo(0.9,4.8).curveTo(1.7,4.7,2.3,4.2).curveTo(2.9,3.6,2.9,2.7).curveTo(2.9,1.8,2.3,1.3).curveTo(1.7,0.6,0.9,0.6).lineTo(-2.9,0.6).closePath().moveTo(-2.9,-0.9).lineTo(0.5,-0.9).curveTo(1.3,-0.9,1.8,-1.4).curveTo(2.4,-2,2.4,-2.8).curveTo(2.3,-3.6,1.8,-4.1).curveTo(1.2,-4.8,0.5,-4.8).lineTo(-2.9,-4.8).closePath();
	this.shape_11.setTransform(64.15,0.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.3,6.3).lineTo(-4.3,-6.3).lineTo(0.2,-6.3).curveTo(2,-6.3,3.1,-5.1).curveTo(4.3,-3.9,4.3,-2.2).curveTo(4.3,-0.6,3.1,0.6).curveTo(2,1.8,0.2,1.8).lineTo(-2.7,1.8).lineTo(-2.7,6.3).closePath().moveTo(-2.7,0.3).lineTo(0.2,0.3).curveTo(1.3,0.2,2,-0.4).curveTo(2.7,-1.2,2.7,-2.2).curveTo(2.7,-3.4,2,-4).curveTo(1.3,-4.8,0.2,-4.8).lineTo(-2.7,-4.8).closePath();
	this.shape_12.setTransform(52.325,0.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.8,6.3).lineTo(-3.8,-6.3).lineTo(3.7,-6.3).lineTo(3.7,-4.7).lineTo(-2.1,-4.7).lineTo(-2.1,-0.9).lineTo(3.2,-0.9).lineTo(3.2,0.7).lineTo(-2.1,0.7).lineTo(-2.1,4.7).lineTo(3.8,4.7).lineTo(3.8,6.3).closePath();
	this.shape_13.setTransform(41.225,0.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.1,4.7).curveTo(-6,2.8,-6,0).curveTo(-6,-2.7,-4.1,-4.7).curveTo(-2.3,-6.5,0.6,-6.6).curveTo(2.3,-6.6,3.7,-5.7).curveTo(5.2,-4.9,6,-3.4).lineTo(4.5,-2.7).curveTo(4,-3.7,2.9,-4.3).curveTo(1.9,-4.9,0.6,-4.9).curveTo(-1.6,-4.9,-3,-3.5).curveTo(-4.4,-2.1,-4.4,0).curveTo(-4.4,2.1,-3,3.5).curveTo(-1.6,4.9,0.6,4.9).curveTo(1.9,4.9,2.9,4.3).curveTo(4,3.6,4.5,2.6).lineTo(6,3.4).curveTo(5.2,4.9,3.7,5.7).curveTo(2.3,6.6,0.6,6.6).curveTo(-2.3,6.6,-4.1,4.7).closePath();
	this.shape_14.setTransform(28.5,0.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.1,4.7).curveTo(-6,2.8,-6,0).curveTo(-6,-2.7,-4.1,-4.7).curveTo(-2.3,-6.5,0.6,-6.6).curveTo(2.3,-6.6,3.7,-5.7).curveTo(5.2,-4.9,6,-3.4).lineTo(4.5,-2.7).curveTo(4,-3.7,2.9,-4.3).curveTo(1.9,-4.9,0.6,-4.9).curveTo(-1.6,-4.9,-3,-3.5).curveTo(-4.4,-2.1,-4.4,0).curveTo(-4.4,2.1,-3,3.5).curveTo(-1.6,4.9,0.6,4.9).curveTo(1.9,4.9,2.9,4.3).curveTo(4,3.6,4.5,2.6).lineTo(6,3.4).curveTo(5.2,4.9,3.7,5.7).curveTo(2.3,6.6,0.6,6.6).curveTo(-2.3,6.6,-4.1,4.7).closePath();
	this.shape_15.setTransform(8.7,0.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,-13.3,221.5,26.700000000000003), null);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.8,6.3).lineTo(-3.8,-6.3).lineTo(3.7,-6.3).lineTo(3.7,-4.7).lineTo(-2.1,-4.7).lineTo(-2.1,-0.9).lineTo(3.2,-0.9).lineTo(3.2,0.7).lineTo(-2.1,0.7).lineTo(-2.1,4.7).lineTo(3.8,4.7).lineTo(3.8,6.3).closePath();
	this.shape.setTransform(233.075,10.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.2,4.6).curveTo(-6,2.8,-6,0).curveTo(-6,-2.8,-4.2,-4.6).curveTo(-2.3,-6.5,0.5,-6.5).curveTo(2.3,-6.5,3.7,-5.7).curveTo(5.2,-4.9,6,-3.5).lineTo(4.6,-2.7).curveTo(4,-3.7,2.9,-4.3).curveTo(1.8,-4.9,0.5,-4.9).curveTo(-1.6,-4.9,-3,-3.5).curveTo(-4.3,-2.1,-4.3,0).curveTo(-4.3,2.1,-3,3.5).curveTo(-1.6,4.9,0.5,4.9).curveTo(1.8,4.9,2.9,4.3).curveTo(4,3.7,4.6,2.6).lineTo(6,3.4).curveTo(5.2,4.8,3.7,5.7).curveTo(2.3,6.6,0.5,6.5).curveTo(-2.3,6.6,-4.2,4.6).closePath();
	this.shape_1.setTransform(220.35,10.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.3,6.3).lineTo(-4.3,-6.3).lineTo(-2.7,-6.3).lineTo(-2.7,-1.8).lineTo(0.2,-1.8).curveTo(2,-1.8,3.1,-0.7).curveTo(4.3,0.5,4.3,2.3).curveTo(4.3,4,3.1,5.2).curveTo(2,6.3,0.2,6.3).closePath().moveTo(-2.7,4.7).lineTo(0.2,4.7).curveTo(1.3,4.7,2,4.1).curveTo(2.7,3.3,2.7,2.3).curveTo(2.7,1.2,2,0.5).curveTo(1.3,-0.2,0.2,-0.2).lineTo(-2.7,-0.2).closePath();
	this.shape_2.setTransform(207.725,10.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.4,6.3).lineTo(-5.4,4.8).curveTo(-4.1,4.9,-3.5,4).curveTo(-2.9,3.1,-2.9,0.8).lineTo(-2.9,-6.3).lineTo(5.4,-6.3).lineTo(5.4,6.3).lineTo(3.8,6.3).lineTo(3.8,-4.7).lineTo(-1.2,-4.7).lineTo(-1.2,0.8).curveTo(-1.2,2.5,-1.5,3.6).curveTo(-1.9,4.8,-2.4,5.4).curveTo(-3.1,5.9,-3.8,6.2).lineTo(-4.8,6.3).lineTo(-5.4,6.3).closePath();
	this.shape_3.setTransform(194.3,10.0667);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.5,6.3).lineTo(-3.5,4.7).curveTo(-2.5,4.8,-1.8,4.4).curveTo(-1.2,4,-0.7,3).lineTo(-0.6,2.7).lineTo(-4.9,-6.3).lineTo(-3.2,-6.3).lineTo(0.2,0.9).lineTo(3.2,-6.3).lineTo(4.9,-6.3).lineTo(0.8,3.3).curveTo(-0.4,6.3,-3.2,6.3).lineTo(-3.5,6.3).closePath();
	this.shape_4.setTransform(182.575,10.0559);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.9,6.3).lineTo(2.9,-4.7).lineTo(-2.9,-4.7).lineTo(-2.9,6.3).lineTo(-4.6,6.3).lineTo(-4.6,-6.3).lineTo(4.6,-6.3).lineTo(4.6,6.3).closePath();
	this.shape_5.setTransform(170.275,10.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(4.3,6.3).lineTo(4.3,-3.6).lineTo(0.1,3.3).lineTo(-0.1,3.3).lineTo(-4.3,-3.6).lineTo(-4.3,6.3).lineTo(-5.9,6.3).lineTo(-5.9,-6.3).lineTo(-4,-6.3).lineTo(-0,0.4).lineTo(4,-6.3).lineTo(5.9,-6.3).lineTo(5.9,6.3).closePath();
	this.shape_6.setTransform(150.6,10.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.6,4.6).curveTo(-6.5,2.7,-6.5,0).curveTo(-6.5,-2.7,-4.6,-4.6).curveTo(-2.8,-6.6,-0,-6.5).curveTo(2.7,-6.6,4.6,-4.6).curveTo(6.5,-2.7,6.5,0).curveTo(6.5,2.7,4.6,4.6).curveTo(2.7,6.6,-0,6.5).curveTo(-2.8,6.6,-4.6,4.6).closePath().moveTo(-3.5,-3.5).curveTo(-4.9,-2.1,-4.9,0).curveTo(-4.9,2,-3.5,3.5).curveTo(-2.1,4.9,-0,4.9).curveTo(2.1,4.9,3.4,3.5).curveTo(4.8,2,4.8,0).curveTo(4.8,-2.1,3.4,-3.5).curveTo(2.1,-4.9,-0,-4.9).curveTo(-2.1,-4.9,-3.5,-3.5).closePath();
	this.shape_7.setTransform(135.175,10.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.6,6.3).lineTo(-4.6,-6.3).lineTo(0.5,-6.3).curveTo(2,-6.3,3,-5.3).curveTo(4,-4.3,4,-2.9).curveTo(4,-1.2,2.6,-0.2).curveTo(3.6,0.2,4.1,0.9).curveTo(4.5,1.7,4.5,2.7).curveTo(4.6,4.2,3.5,5.3).curveTo(2.4,6.3,0.9,6.3).closePath().moveTo(-2.9,4.7).lineTo(0.9,4.7).curveTo(1.8,4.7,2.3,4.2).curveTo(2.9,3.5,2.9,2.7).curveTo(2.9,1.8,2.3,1.3).curveTo(1.8,0.6,0.9,0.7).lineTo(-2.9,0.7).closePath().moveTo(-2.9,-0.9).lineTo(0.5,-0.9).curveTo(1.3,-0.9,1.8,-1.4).curveTo(2.4,-2,2.3,-2.8).curveTo(2.3,-3.6,1.8,-4.1).curveTo(1.2,-4.8,0.5,-4.7).lineTo(-2.9,-4.7).closePath();
	this.shape_8.setTransform(121.85,10.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.6,4.6).curveTo(-6.5,2.7,-6.5,0).curveTo(-6.5,-2.7,-4.6,-4.6).curveTo(-2.8,-6.6,-0,-6.5).curveTo(2.7,-6.6,4.6,-4.6).curveTo(6.5,-2.7,6.5,0).curveTo(6.5,2.7,4.6,4.6).curveTo(2.7,6.6,-0,6.5).curveTo(-2.8,6.6,-4.6,4.6).closePath().moveTo(-3.5,-3.5).curveTo(-4.9,-2.1,-4.9,0).curveTo(-4.9,2,-3.5,3.5).curveTo(-2.1,4.9,-0,4.9).curveTo(2.1,4.9,3.4,3.5).curveTo(4.8,2,4.8,0).curveTo(4.8,-2.1,3.4,-3.5).curveTo(2.1,-4.9,-0,-4.9).curveTo(-2.1,-4.9,-3.5,-3.5).closePath();
	this.shape_9.setTransform(107.775,10.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.5,6.3).lineTo(-2.9,0.2).lineTo(-2.9,6.3).lineTo(-4.6,6.3).lineTo(-4.6,-6.3).lineTo(-2.9,-6.3).lineTo(-2.9,-0.6).lineTo(2.4,-6.3).lineTo(4.4,-6.3).lineTo(-1.2,-0.2).lineTo(4.6,6.3).closePath();
	this.shape_10.setTransform(94.875,10.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.1,4.6).curveTo(-6,2.8,-6,0).curveTo(-6,-2.8,-4.1,-4.6).curveTo(-2.3,-6.5,0.6,-6.5).curveTo(2.3,-6.5,3.8,-5.7).curveTo(5.2,-4.9,6,-3.5).lineTo(4.5,-2.7).curveTo(4,-3.7,3,-4.3).curveTo(1.9,-4.9,0.6,-4.9).curveTo(-1.6,-4.9,-3,-3.5).curveTo(-4.3,-2.1,-4.3,0).curveTo(-4.3,2.1,-3,3.5).curveTo(-1.6,4.9,0.6,4.9).curveTo(1.9,4.9,3,4.3).curveTo(4,3.7,4.5,2.6).lineTo(6,3.4).curveTo(5.2,4.8,3.8,5.7).curveTo(2.3,6.6,0.6,6.5).curveTo(-2.3,6.6,-4.1,4.6).closePath();
	this.shape_11.setTransform(81.35,10.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3.1,6.3).lineTo(3.1,-3.1).lineTo(-3.4,6.3).lineTo(-4.7,6.3).lineTo(-4.7,-6.3).lineTo(-3.1,-6.3).lineTo(-3.1,3.1).lineTo(3.4,-6.3).lineTo(4.7,-6.3).lineTo(4.7,6.3).closePath();
	this.shape_12.setTransform(67.55,10.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.6,4.6).curveTo(-6.5,2.7,-6.5,0).curveTo(-6.5,-2.7,-4.6,-4.6).curveTo(-2.8,-6.6,-0,-6.5).curveTo(2.7,-6.6,4.6,-4.6).curveTo(6.5,-2.7,6.5,0).curveTo(6.5,2.7,4.6,4.6).curveTo(2.7,6.6,-0,6.5).curveTo(-2.8,6.6,-4.6,4.6).closePath().moveTo(-3.5,-3.5).curveTo(-4.9,-2.1,-4.9,0).curveTo(-4.9,2,-3.5,3.5).curveTo(-2.1,4.9,-0,4.9).curveTo(2.1,4.9,3.4,3.5).curveTo(4.8,2,4.8,0).curveTo(4.8,-2.1,3.4,-3.5).curveTo(2.1,-4.9,-0,-4.9).curveTo(-2.1,-4.9,-3.5,-3.5).closePath();
	this.shape_13.setTransform(53.275,10.05);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.9,6.3).lineTo(2.9,-4.7).lineTo(-2.9,-4.7).lineTo(-2.9,6.3).lineTo(-4.6,6.3).lineTo(-4.6,-6.3).lineTo(4.6,-6.3).lineTo(4.6,6.3).closePath();
	this.shape_14.setTransform(39.125,10.05);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3.9,6.3).lineTo(2.8,3.4).lineTo(-2.9,3.4).lineTo(-3.9,6.3).lineTo(-5.6,6.3).lineTo(-1,-6.3).lineTo(0.9,-6.3).lineTo(5.7,6.3).closePath().moveTo(-2.3,1.9).lineTo(2.3,1.9).lineTo(-0.1,-4.3).closePath();
	this.shape_15.setTransform(20.95,10.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3.1,6.3).lineTo(3.1,0.7).lineTo(-3.1,0.7).lineTo(-3.1,6.3).lineTo(-4.7,6.3).lineTo(-4.7,-6.3).lineTo(-3.1,-6.3).lineTo(-3.1,-1).lineTo(3.1,-1).lineTo(3.1,-6.3).lineTo(4.7,-6.3).lineTo(4.7,6.3).closePath();
	this.shape_16.setTransform(8.075,10.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.5,6.3).lineTo(-3.5,4.7).curveTo(-2.5,4.8,-1.8,4.4).curveTo(-1.2,4,-0.7,3).lineTo(-0.6,2.7).lineTo(-4.9,-6.3).lineTo(-3.2,-6.3).lineTo(0.2,0.9).lineTo(3.2,-6.3).lineTo(4.9,-6.3).lineTo(0.8,3.3).curveTo(-0.4,6.3,-3.2,6.3).lineTo(-3.5,6.3).closePath();
	this.shape_17.setTransform(112.925,-9.7941);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.5,6.3).lineTo(-2.9,0.3).lineTo(-2.9,6.3).lineTo(-4.6,6.3).lineTo(-4.6,-6.3).lineTo(-2.9,-6.3).lineTo(-2.9,-0.6).lineTo(2.4,-6.3).lineTo(4.4,-6.3).lineTo(-1.2,-0.2).lineTo(4.6,6.3).closePath();
	this.shape_18.setTransform(101.875,-9.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.5,6.3).lineTo(-3.5,4.7).curveTo(-2.5,4.8,-1.8,4.4).curveTo(-1.2,4,-0.7,3).lineTo(-0.6,2.7).lineTo(-4.9,-6.3).lineTo(-3.2,-6.3).lineTo(0.2,0.9).lineTo(3.2,-6.3).lineTo(4.9,-6.3).lineTo(0.8,3.3).curveTo(-0.4,6.3,-3.2,6.3).lineTo(-3.5,6.3).closePath();
	this.shape_19.setTransform(89.875,-9.7941);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.3,6.3).lineTo(-4.3,-6.3).lineTo(0.2,-6.3).curveTo(2,-6.3,3.1,-5.1).curveTo(4.3,-3.9,4.3,-2.3).curveTo(4.3,-0.6,3.1,0.6).curveTo(2,1.8,0.2,1.8).lineTo(-2.7,1.8).lineTo(-2.7,6.3).closePath().moveTo(-2.7,0.3).lineTo(0.2,0.3).curveTo(1.3,0.3,2,-0.5).curveTo(2.7,-1.2,2.7,-2.3).curveTo(2.7,-3.3,2,-4.1).curveTo(1.3,-4.7,0.2,-4.8).lineTo(-2.7,-4.8).closePath();
	this.shape_20.setTransform(78.575,-9.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3.1,6.3).lineTo(3.1,-3.1).lineTo(-3.4,6.3).lineTo(-4.8,6.3).lineTo(-4.8,-6.3).lineTo(-3.1,-6.3).lineTo(-3.1,3.1).lineTo(3.4,-6.3).lineTo(4.8,-6.3).lineTo(4.8,6.3).closePath();
	this.shape_21.setTransform(60.3,-9.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#FFFFFF").beginStroke().moveTo(5.6,6.3).lineTo(0.8,0.3).lineTo(0.8,6.3).lineTo(-0.8,6.3).lineTo(-0.8,0.3).lineTo(-5.6,6.3).lineTo(-7.5,6.3).lineTo(-2.5,-0.2).lineTo(-7.3,-6.3).lineTo(-5.4,-6.3).lineTo(-0.8,-0.5).lineTo(-0.8,-6.3).lineTo(0.8,-6.3).lineTo(0.8,-0.5).lineTo(5.4,-6.3).lineTo(7.3,-6.3).lineTo(2.4,-0.2).lineTo(7.5,6.3).closePath();
	this.shape_22.setTransform(45.425,-9.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.3,6.3).lineTo(-4.3,-6.3).lineTo(0.2,-6.3).curveTo(2,-6.3,3.1,-5.1).curveTo(4.3,-3.9,4.3,-2.3).curveTo(4.3,-0.6,3.1,0.6).curveTo(2,1.8,0.2,1.8).lineTo(-2.7,1.8).lineTo(-2.7,6.3).closePath().moveTo(-2.7,0.3).lineTo(0.2,0.3).curveTo(1.3,0.3,2,-0.5).curveTo(2.7,-1.2,2.7,-2.3).curveTo(2.7,-3.3,2,-4.1).curveTo(1.3,-4.7,0.2,-4.8).lineTo(-2.7,-4.8).closePath();
	this.shape_23.setTransform(31.675,-9.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.8,6.3).lineTo(-3.8,-6.3).lineTo(3.7,-6.3).lineTo(3.7,-4.7).lineTo(-2.1,-4.7).lineTo(-2.1,-0.8).lineTo(3.2,-0.8).lineTo(3.2,0.7).lineTo(-2.1,0.7).lineTo(-2.1,4.7).lineTo(3.8,4.7).lineTo(3.8,6.3).closePath();
	this.shape_24.setTransform(20.575,-9.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#FFFFFF").beginStroke().moveTo(4.1,7.5).lineTo(4.1,5.1).lineTo(-4.1,5.1).lineTo(-4.1,7.5).lineTo(-5.8,7.5).lineTo(-5.8,3.5).lineTo(-4.8,3.5).curveTo(-3.5,2.1,-3.5,-0.9).lineTo(-3.5,-7.5).lineTo(4.5,-7.5).lineTo(4.5,3.5).lineTo(5.8,3.5).lineTo(5.8,7.5).closePath().moveTo(-1.9,-0.9).curveTo(-1.9,2,-2.9,3.5).lineTo(2.8,3.5).lineTo(2.8,-6).lineTo(-1.9,-6).closePath();
	this.shape_25.setTransform(8.1,-8.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,-22.8,240.7,45.7), null);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-56.9,56.9).curveTo(-80.5,33.4,-80.5,0).curveTo(-80.5,-33.3,-56.9,-57).curveTo(-33.3,-80.5,-0,-80.5).curveTo(33.3,-80.5,56.9,-57).curveTo(80.5,-33.3,80.5,0).curveTo(80.5,33.4,56.9,56.9).curveTo(33.3,80.5,-0,80.5).curveTo(-33.3,80.5,-56.9,56.9).closePath().moveTo(-44.9,-44.9).curveTo(-63.5,-26.3,-63.5,0.1).curveTo(-63.5,26.3,-44.9,44.9).curveTo(-26.3,63.6,-0,63.5).curveTo(26.3,63.6,44.9,44.9).curveTo(63.5,26.3,63.5,0.1).curveTo(63.5,-26.3,44.9,-44.9).curveTo(26.3,-63.5,-0,-63.5).curveTo(-26.3,-63.5,-44.9,-44.9).closePath();
	this.shape.setTransform(80.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,-80.5,161,161), null);


(lib.Symbol8copy2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(12.4,36.7).lineTo(6.3,-31.4).lineTo(-1.4,16.3).curveTo(-1.4,16.9,-2,16.9).curveTo(-2.5,16.9,-2.6,16.3).lineTo(-5.4,-3.2).lineTo(-8,11.4).curveTo(-8.1,12,-8.7,12).curveTo(-9.1,12,-9.2,11.4).lineTo(-11.5,-1.5).lineTo(-13.9,2.6).curveTo(-14.1,3,-14.4,3).lineTo(-45.4,3).lineTo(-45.9,1.7).lineTo(-14.9,1.7).lineTo(-11.7,-3.7).curveTo(-11.4,-4.1,-11,-4).curveTo(-10.5,-3.9,-10.5,-3.5).lineTo(-8.6,7.6).lineTo(-6.1,-7.3).curveTo(-6,-7.8,-5.4,-7.8).curveTo(-4.8,-7.8,-4.7,-7.3).lineTo(-1.9,12).lineTo(5.8,-36.7).curveTo(5.9,-37.3,6.5,-37.3).curveTo(7.1,-37.3,7.1,-36.7).lineTo(13.2,30.7).lineTo(18.6,-11.3).curveTo(18.6,-11.8,19.2,-11.8).curveTo(19.7,-11.8,19.8,-11.3).lineTo(22.6,11.8).lineTo(26.8,-4.8).curveTo(26.8,-5.3,27.4,-5.3).curveTo(27.9,-5.2,28,-4.8).lineTo(29.9,6.8).lineTo(31.8,0.6).curveTo(31.9,0.2,32.4,0.2).curveTo(32.8,0.1,33.1,0.5).lineTo(35.5,5.1).lineTo(37.7,1.9).curveTo(38,1.7,38.2,1.7).lineTo(45.9,1.7).lineTo(45.9,3).lineTo(38.6,3).lineTo(36.1,6.6).curveTo(35.9,6.9,35.4,6.9).curveTo(35.1,6.9,34.9,6.6).lineTo(32.6,2.4).lineTo(30.4,9.7).curveTo(30.3,10.2,29.7,10.2).curveTo(29.2,10.1,29.1,9.6).lineTo(27.2,-1.5).lineTo(23.1,15.5).curveTo(23,16,22.5,16).curveTo(21.9,16,21.8,15.4).lineTo(19.1,-6.1).lineTo(13.6,36.7).curveTo(13.5,37.3,13,37.3).curveTo(12.4,37.2,12.4,36.7).closePath();
	this.shape.setTransform(45.85,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-37.3,91.7,74.6);


(lib.Symbol8copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-12.3,36.7).lineTo(-18.4,-31.4).lineTo(-26.1,16.3).curveTo(-26.1,16.9,-26.7,16.9).curveTo(-27.2,16.9,-27.3,16.3).lineTo(-30.1,-3.2).lineTo(-32.7,11.4).curveTo(-32.8,12,-33.4,12).curveTo(-33.8,12,-33.9,11.4).lineTo(-36.2,-1.5).lineTo(-38.6,2.6).curveTo(-38.8,3,-39.1,3).lineTo(-39.7,3).lineTo(-39.7,1.7).lineTo(-39.6,1.7).lineTo(-36.4,-3.7).curveTo(-36.1,-4.1,-35.7,-4).curveTo(-35.2,-3.9,-35.2,-3.5).lineTo(-33.3,7.6).lineTo(-30.8,-7.3).curveTo(-30.7,-7.8,-30.1,-7.8).curveTo(-29.5,-7.8,-29.4,-7.3).lineTo(-26.6,12).lineTo(-18.9,-36.7).curveTo(-18.8,-37.3,-18.2,-37.3).curveTo(-17.6,-37.3,-17.6,-36.7).lineTo(-11.5,30.7).lineTo(-6.1,-11.3).curveTo(-6.1,-11.8,-5.5,-11.8).curveTo(-5,-11.8,-4.9,-11.3).lineTo(-2.1,11.8).lineTo(2.1,-4.8).curveTo(2.1,-5.3,2.7,-5.3).curveTo(3.2,-5.2,3.3,-4.8).lineTo(5.2,6.8).lineTo(7.1,0.6).curveTo(7.2,0.2,7.7,0.2).curveTo(8.1,0.1,8.4,0.5).lineTo(10.8,5.1).lineTo(13,1.9).curveTo(13.3,1.7,13.5,1.7).lineTo(39.6,1.7).lineTo(39.2,3).lineTo(13.9,3).lineTo(11.4,6.6).curveTo(11.2,6.9,10.7,6.9).curveTo(10.4,6.9,10.2,6.6).lineTo(7.9,2.4).lineTo(5.7,9.7).curveTo(5.6,10.2,5,10.2).curveTo(4.5,10.1,4.4,9.6).lineTo(2.5,-1.5).lineTo(-1.6,15.5).curveTo(-1.7,16,-2.2,16).curveTo(-2.8,16,-2.9,15.4).lineTo(-5.6,-6.1).lineTo(-11.1,36.7).curveTo(-11.2,37.3,-11.7,37.3).curveTo(-12.3,37.2,-12.3,36.7).closePath();
	this.shape.setTransform(70.55,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30.9,-37.3,79.30000000000001,74.6);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3.2,36.7).lineTo(-3,-31.4).lineTo(-10.6,16.3).curveTo(-10.7,16.9,-11.2,16.9).curveTo(-11.8,16.9,-11.9,16.3).lineTo(-14.7,-3.2).lineTo(-17.3,11.4).curveTo(-17.4,12,-17.9,12).curveTo(-18.4,12,-18.5,11.4).lineTo(-20.7,-1.5).lineTo(-23.1,2.6).curveTo(-23.4,3,-23.7,3).lineTo(-54.6,3).lineTo(-55.1,1.7).lineTo(-24.1,1.7).lineTo(-20.9,-3.7).curveTo(-20.7,-4.1,-20.2,-4).curveTo(-19.8,-3.9,-19.8,-3.5).lineTo(-17.9,7.6).lineTo(-15.3,-7.3).curveTo(-15.2,-7.8,-14.7,-7.8).curveTo(-14.1,-7.8,-14,-7.3).lineTo(-11.2,12).lineTo(-3.4,-36.7).curveTo(-3.3,-37.3,-2.8,-37.3).curveTo(-2.1,-37.3,-2.1,-36.7).lineTo(3.9,30.7).lineTo(9.3,-11.3).curveTo(9.4,-11.8,9.9,-11.8).curveTo(10.5,-11.8,10.6,-11.3).lineTo(13.4,11.8).lineTo(17.5,-4.8).curveTo(17.6,-5.3,18.1,-5.3).curveTo(18.7,-5.2,18.7,-4.8).lineTo(20.7,6.8).lineTo(22.6,0.6).curveTo(22.7,0.2,23.1,0.2).curveTo(23.5,0.1,23.8,0.5).lineTo(26.3,5.1).lineTo(28.5,1.9).curveTo(28.7,1.7,29,1.7).lineTo(55.1,1.7).lineTo(54.6,3).lineTo(29.3,3).lineTo(26.8,6.6).curveTo(26.6,6.9,26.2,6.9).curveTo(25.9,6.9,25.7,6.6).lineTo(23.4,2.4).lineTo(21.2,9.7).curveTo(21,10.2,20.4,10.2).curveTo(20,10.1,19.9,9.6).lineTo(18,-1.5).lineTo(13.8,15.5).curveTo(13.8,16,13.2,16).curveTo(12.6,16,12.5,15.4).lineTo(9.9,-6.1).lineTo(4.4,36.7).curveTo(4.3,37.3,3.7,37.3).curveTo(3.2,37.2,3.2,36.7).closePath();
	this.shape.setTransform(55.1,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-37.3,110.2,74.6);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.lupa();
	this.instance.setTransform(0,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,-58.5,121,117), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#FFCC33").setStrokeStyle(3,1,1).moveTo(-42,-22).lineTo(42,-22).curveTo(51.1,-22,57.5,-15.6).curveTo(64,-9.1,64,0).curveTo(64,9.1,57.5,15.6).curveTo(51.1,22,42,22).lineTo(-42,22).curveTo(-51.1,22,-57.5,15.6).curveTo(-64,9.1,-64,0).curveTo(-64,-9.1,-57.5,-15.6).curveTo(-51.1,-22,-42,-22).closePath();
	this.shape.setTransform(64,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#F1C232").beginStroke().moveTo(-42,22).curveTo(-51.1,22,-57.5,15.6).curveTo(-64,9.1,-64,0).curveTo(-64,-9.1,-57.5,-15.6).curveTo(-51.1,-22,-42,-22).lineTo(42,-22).curveTo(51.1,-22,57.6,-15.6).curveTo(64,-9.1,64,0).curveTo(64,9.1,57.6,15.6).curveTo(51.1,22,42,22).closePath();
	this.shape_1.setTransform(64,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-1.5,-23.5,131,47), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.fon();
	this.instance.setTransform(0,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,-45,728,90), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-72,48).lineTo(-72,-48).lineTo(72,-48).lineTo(72,48).closePath();
	this.shape.setTransform(72,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,-48,144,96), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.logo();
	this.instance.setTransform(0,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,-28,203,56), null);


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol15();
	this.instance.setTransform(44,0,0.3864,0.3864,0,0,0,44,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,alpha:1},19).to({scaleX:0.8636,scaleY:0.8636,x:44.05},76).to({regX:44.1,scaleX:0.9446,scaleY:0.9446,x:44.1},57).to({_off:true},1).wait(407));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-34.5,88,69);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-0.9,4.5).lineTo(-0.9,2.7).lineTo(0.9,2.7).lineTo(0.9,4.5).closePath().moveTo(-0.4,1.7).lineTo(-0.9,-4.1).lineTo(-0.9,-4.5).lineTo(0.9,-4.5).lineTo(0.9,-4.1).lineTo(0.4,1.7).closePath();
	this.shape.setTransform(101.575,7.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-2.6,2.5).curveTo(-3.7,1.5,-3.7,0).curveTo(-3.7,-1.5,-2.6,-2.5).curveTo(-1.6,-3.6,0,-3.6).curveTo(1.6,-3.6,2.6,-2.5).curveTo(3.7,-1.5,3.7,-0).lineTo(3.7,0).curveTo(3.7,1.5,2.6,2.5).curveTo(1.6,3.6,-0,3.6).curveTo(-1.6,3.6,-2.6,2.5).closePath().moveTo(-1.5,-1.6).curveTo(-2.1,-0.9,-2.1,-0).lineTo(-2.1,0).curveTo(-2.1,0.9,-1.5,1.6).curveTo(-0.9,2.2,0,2.2).curveTo(0.9,2.2,1.5,1.6).curveTo(2.1,0.9,2.1,0).curveTo(2.1,-0.9,1.5,-1.6).curveTo(0.9,-2.2,-0,-2.2).curveTo(-0.9,-2.2,-1.5,-1.6).closePath();
	this.shape_1.setTransform(95.325,8.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(1.6,3.4).lineTo(1.6,0.7).lineTo(-1.6,0.7).lineTo(-1.6,3.4).lineTo(-3.1,3.4).lineTo(-3.1,-3.4).lineTo(-1.6,-3.4).lineTo(-1.6,-0.7).lineTo(1.6,-0.7).lineTo(1.6,-3.4).lineTo(3.2,-3.4).lineTo(3.2,3.4).closePath();
	this.shape_2.setTransform(86.9,8.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-0.8,3.4).lineTo(-0.8,-2).lineTo(-3.2,-2).lineTo(-3.2,-3.4).lineTo(3.2,-3.4).lineTo(3.2,-2).lineTo(0.8,-2).lineTo(0.8,3.4).closePath();
	this.shape_3.setTransform(79.125,8.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-2.4,3).curveTo(-3.1,2.4,-3.1,1.4).lineTo(-3.1,1.4).curveTo(-3.1,0.3,-2.3,-0.2).curveTo(-1.6,-0.8,-0.3,-0.8).curveTo(0.7,-0.8,1.6,-0.5).lineTo(1.6,-0.7).curveTo(1.6,-2.2,-0.1,-2.2).curveTo(-1,-2.2,-2.1,-1.7).lineTo(-2.5,-3).curveTo(-1.2,-3.5,0.1,-3.5).curveTo(1.6,-3.5,2.4,-2.8).curveTo(3.1,-2,3.1,-0.7).lineTo(3.1,3.4).lineTo(1.6,3.4).lineTo(1.6,2.6).curveTo(0.7,3.5,-0.7,3.6).curveTo(-1.7,3.5,-2.4,3).closePath().moveTo(-1.1,0.5).curveTo(-1.6,0.8,-1.6,1.3).curveTo(-1.6,1.8,-1.2,2.1).curveTo(-0.8,2.4,-0.2,2.4).curveTo(0.6,2.4,1.1,2).curveTo(1.6,1.6,1.6,1).lineTo(1.6,0.4).curveTo(0.9,0.2,0.1,0.2).curveTo(-0.7,0.2,-1.1,0.5).closePath();
	this.shape_4.setTransform(71.425,8.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(2,3.4).lineTo(0,-1.5).lineTo(-2,3.4).lineTo(-3.7,3.4).lineTo(-0.7,-3.5).lineTo(0.8,-3.5).lineTo(3.7,3.4).closePath();
	this.shape_5.setTransform(63.725,8.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(1.5,3.4).lineTo(1.5,-2).lineTo(-1.6,-2).lineTo(-1.6,3.4).lineTo(-3.2,3.4).lineTo(-3.2,-3.4).lineTo(3.1,-3.4).lineTo(3.1,3.4).closePath();
	this.shape_6.setTransform(55.55,8.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-2.1,2.5).curveTo(-3.2,1.5,-3.2,0).curveTo(-3.2,-1.5,-2.1,-2.5).curveTo(-1.1,-3.6,0.4,-3.6).curveTo(2,-3.6,3.2,-2.4).lineTo(2.2,-1.3).curveTo(1.3,-2.2,0.4,-2.2).curveTo(-0.4,-2.2,-1,-1.6).curveTo(-1.6,-0.9,-1.6,-0).lineTo(-1.6,0).curveTo(-1.6,0.9,-1,1.6).curveTo(-0.4,2.2,0.5,2.2).curveTo(1.4,2.2,2.2,1.4).lineTo(3.2,2.3).curveTo(2.6,2.9,2,3.2).curveTo(1.3,3.6,0.4,3.6).curveTo(-1.1,3.6,-2.1,2.5).closePath();
	this.shape_7.setTransform(47.775,8.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-2.3,2.6).curveTo(-3.3,1.6,-3.3,0).lineTo(-3.3,-0).curveTo(-3.3,-1.5,-2.4,-2.5).curveTo(-1.4,-3.6,0,-3.6).curveTo(1.6,-3.6,2.5,-2.5).curveTo(3.3,-1.5,3.3,0.1).lineTo(3.3,0.5).lineTo(-1.7,0.5).curveTo(-1.6,1.4,-1.1,1.8).curveTo(-0.5,2.3,0.2,2.3).curveTo(1.2,2.3,2.1,1.5).lineTo(3,2.3).curveTo(1.9,3.6,0.2,3.6).curveTo(-1.3,3.6,-2.3,2.6).closePath().moveTo(-1.2,-1.8).curveTo(-1.7,-1.3,-1.8,-0.5).lineTo(1.8,-0.5).curveTo(1.7,-1.3,1.2,-1.8).curveTo(0.8,-2.3,0,-2.3).curveTo(-0.7,-2.3,-1.2,-1.8).closePath();
	this.shape_8.setTransform(40.075,8.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-2.5,3.9).curveTo(-3.6,2.8,-3.6,0.7).curveTo(-3.6,-1.7,-2.7,-2.9).curveTo(-1.8,-4.2,0.1,-4.5).lineTo(2.6,-4.9).lineTo(2.8,-3.5).lineTo(0.4,-3.1).curveTo(-0.8,-2.9,-1.4,-2.3).curveTo(-1.9,-1.8,-2.1,-0.7).curveTo(-1.2,-1.7,0.4,-1.7).curveTo(1.9,-1.7,2.7,-0.9).curveTo(3.6,0,3.6,1.4).curveTo(3.6,2.9,2.6,3.9).curveTo(1.6,4.9,-0,4.9).curveTo(-1.5,4.9,-2.5,3.9).closePath().moveTo(-1.4,0).curveTo(-2,0.6,-2,1.5).lineTo(-2,1.5).curveTo(-2,2.4,-1.4,3).curveTo(-0.9,3.5,0,3.5).curveTo(0.9,3.5,1.5,2.9).curveTo(2,2.3,2,1.4).curveTo(2,0.6,1.5,0).curveTo(1,-0.5,0.1,-0.5).curveTo(-0.9,-0.5,-1.4,0).closePath();
	this.shape_9.setTransform(31.925,7.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-2.9,3.4).lineTo(-2.9,-3.4).lineTo(-1.4,-3.4).lineTo(-1.4,-1.3).lineTo(0.2,-1.3).curveTo(1.5,-1.3,2.2,-0.7).curveTo(2.9,-0.1,2.9,1).curveTo(2.9,2.1,2.2,2.8).curveTo(1.5,3.4,0.1,3.4).closePath().moveTo(-1.4,2.1).lineTo(0.1,2.1).curveTo(1.4,2.1,1.4,1).curveTo(1.4,0.5,1.1,0.2).curveTo(0.7,-0,0.1,-0).lineTo(-1.4,-0).closePath();
	this.shape_10.setTransform(107.675,-5.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-0.8,3.4).lineTo(-0.8,-2).lineTo(-3.2,-2).lineTo(-3.2,-3.4).lineTo(3.2,-3.4).lineTo(3.2,-2).lineTo(0.8,-2).lineTo(0.8,3.4).closePath();
	this.shape_11.setTransform(100.125,-5.225);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-2.4,3).curveTo(-3.1,2.4,-3.1,1.4).lineTo(-3.1,1.4).curveTo(-3.1,0.3,-2.3,-0.3).curveTo(-1.6,-0.8,-0.3,-0.8).curveTo(0.7,-0.8,1.6,-0.5).lineTo(1.6,-0.7).curveTo(1.6,-2.2,-0.1,-2.2).curveTo(-1,-2.2,-2.1,-1.7).lineTo(-2.5,-3).curveTo(-1.2,-3.6,0.1,-3.5).curveTo(1.6,-3.5,2.4,-2.8).curveTo(3.1,-2,3.1,-0.7).lineTo(3.1,3.4).lineTo(1.6,3.4).lineTo(1.6,2.6).curveTo(0.7,3.5,-0.7,3.6).curveTo(-1.7,3.6,-2.4,3).closePath().moveTo(-1.1,0.5).curveTo(-1.6,0.8,-1.6,1.3).curveTo(-1.6,1.8,-1.2,2.1).curveTo(-0.8,2.4,-0.2,2.4).curveTo(0.6,2.4,1.1,2).curveTo(1.6,1.6,1.6,1).lineTo(1.6,0.4).curveTo(0.9,0.2,0.1,0.2).curveTo(-0.7,0.2,-1.1,0.5).closePath();
	this.shape_12.setTransform(92.425,-5.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-3.1,3.4).lineTo(-3.1,-3.4).lineTo(0.4,-3.4).curveTo(1.5,-3.4,2.1,-3).curveTo(2.8,-2.5,2.8,-1.7).curveTo(2.8,-0.6,1.7,-0.1).curveTo(3.1,0.3,3.1,1.5).curveTo(3.1,2.4,2.3,2.9).curveTo(1.6,3.4,0.4,3.4).closePath().moveTo(-1.6,2.3).lineTo(0.3,2.3).curveTo(1.5,2.3,1.5,1.4).curveTo(1.5,1,1.2,0.7).curveTo(0.9,0.5,0.3,0.5).lineTo(-1.6,0.5).closePath().moveTo(-1.6,-0.6).lineTo(0.1,-0.6).curveTo(0.7,-0.6,0.9,-0.8).curveTo(1.2,-1.1,1.2,-1.5).curveTo(1.2,-1.8,0.9,-2.1).curveTo(0.7,-2.3,0.1,-2.3).lineTo(-1.6,-2.3).closePath();
	this.shape_13.setTransform(85.125,-5.225);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-2.6,2.5).curveTo(-3.7,1.5,-3.7,0).curveTo(-3.7,-1.5,-2.6,-2.5).curveTo(-1.6,-3.6,0,-3.6).curveTo(1.6,-3.6,2.6,-2.5).curveTo(3.7,-1.5,3.7,-0).lineTo(3.7,0).curveTo(3.7,1.5,2.6,2.5).curveTo(1.6,3.6,-0,3.6).curveTo(-1.6,3.6,-2.6,2.5).closePath().moveTo(-1.5,-1.6).curveTo(-2.1,-0.9,-2.1,-0).lineTo(-2.1,0).curveTo(-2.1,0.9,-1.5,1.6).curveTo(-0.9,2.2,0,2.2).curveTo(0.9,2.2,1.5,1.6).curveTo(2.1,0.9,2.1,0).curveTo(2.1,-0.9,1.5,-1.6).curveTo(0.9,-2.2,-0,-2.2).curveTo(-0.9,-2.2,-1.5,-1.6).closePath();
	this.shape_14.setTransform(76.775,-5.225);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-2.5,3.9).curveTo(-3.6,2.8,-3.6,0.7).curveTo(-3.6,-1.7,-2.7,-2.9).curveTo(-1.8,-4.2,0.1,-4.5).lineTo(2.6,-4.9).lineTo(2.8,-3.5).lineTo(0.4,-3.1).curveTo(-0.8,-2.9,-1.4,-2.3).curveTo(-1.9,-1.8,-2.1,-0.7).curveTo(-1.2,-1.7,0.4,-1.7).curveTo(1.9,-1.7,2.7,-0.9).curveTo(3.6,0,3.6,1.4).curveTo(3.6,2.9,2.6,3.9).curveTo(1.6,4.9,-0,4.9).curveTo(-1.5,4.9,-2.5,3.9).closePath().moveTo(-1.4,0).curveTo(-2,0.6,-2,1.5).lineTo(-2,1.5).curveTo(-2,2.4,-1.4,3).curveTo(-0.9,3.5,0,3.5).curveTo(0.9,3.5,1.5,2.9).curveTo(2,2.3,2,1.4).curveTo(2,0.6,1.5,0).curveTo(1,-0.5,0.1,-0.5).curveTo(-0.9,-0.5,-1.4,0).closePath();
	this.shape_15.setTransform(68.275,-6.525);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-2.6,2.5).curveTo(-3.7,1.5,-3.7,0).curveTo(-3.7,-1.5,-2.6,-2.5).curveTo(-1.6,-3.6,0,-3.6).curveTo(1.6,-3.6,2.6,-2.5).curveTo(3.7,-1.5,3.7,-0).lineTo(3.7,0).curveTo(3.7,1.5,2.6,2.5).curveTo(1.6,3.6,-0,3.6).curveTo(-1.6,3.6,-2.6,2.5).closePath().moveTo(-1.5,-1.6).curveTo(-2.1,-0.9,-2.1,-0).lineTo(-2.1,0).curveTo(-2.1,0.9,-1.5,1.6).curveTo(-0.9,2.2,0,2.2).curveTo(0.9,2.2,1.5,1.6).curveTo(2.1,0.9,2.1,0).curveTo(2.1,-0.9,1.5,-1.6).curveTo(0.9,-2.2,-0,-2.2).curveTo(-0.9,-2.2,-1.5,-1.6).closePath();
	this.shape_16.setTransform(59.725,-5.225);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-3.5,4.5).lineTo(-3.5,-4.4).lineTo(-2,-4.4).lineTo(-2,-3.2).curveTo(-1.1,-4.5,0.4,-4.6).curveTo(1.6,-4.6,2.6,-3.6).curveTo(3.6,-2.7,3.5,-1).lineTo(3.5,-1).curveTo(3.6,0.6,2.6,1.6).curveTo(1.6,2.6,0.4,2.6).curveTo(-1.1,2.6,-2,1.4).lineTo(-2,4.5).closePath().moveTo(-1.4,-2.6).curveTo(-2.1,-2,-2.1,-1).lineTo(-2.1,-1).curveTo(-2.1,0,-1.4,0.6).curveTo(-0.9,1.2,-0,1.2).curveTo(0.8,1.2,1.3,0.6).curveTo(1.9,0,2,-1).lineTo(2,-1).curveTo(1.9,-2,1.3,-2.6).curveTo(0.8,-3.2,-0,-3.2).curveTo(-0.9,-3.2,-1.4,-2.6).closePath();
	this.shape_17.setTransform(51.3,-4.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(1.6,3.4).lineTo(1.6,-2).lineTo(-1.6,-2).lineTo(-1.6,3.4).lineTo(-3.2,3.4).lineTo(-3.2,-3.4).lineTo(3.1,-3.4).lineTo(3.1,3.4).closePath();
	this.shape_18.setTransform(42.6,-5.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-2.6,2.5).curveTo(-3.7,1.5,-3.7,0).curveTo(-3.7,-1.5,-2.6,-2.5).curveTo(-1.6,-3.6,0,-3.6).curveTo(1.6,-3.6,2.6,-2.5).curveTo(3.7,-1.5,3.7,-0).lineTo(3.7,0).curveTo(3.7,1.5,2.6,2.5).curveTo(1.6,3.6,-0,3.6).curveTo(-1.6,3.6,-2.6,2.5).closePath().moveTo(-1.5,-1.6).curveTo(-2.1,-0.9,-2.1,-0).lineTo(-2.1,0).curveTo(-2.1,0.9,-1.5,1.6).curveTo(-0.9,2.2,0,2.2).curveTo(0.9,2.2,1.5,1.6).curveTo(2.1,0.9,2.1,0).curveTo(2.1,-0.9,1.5,-1.6).curveTo(0.9,-2.2,-0,-2.2).curveTo(-0.9,-2.2,-1.5,-1.6).closePath();
	this.shape_19.setTransform(34.175,-5.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(2.1,4.5).lineTo(2.1,-3.1).lineTo(-2.2,-3.1).lineTo(-2.2,4.5).lineTo(-3.7,4.5).lineTo(-3.7,-4.5).lineTo(3.8,-4.5).lineTo(3.8,4.5).closePath();
	this.shape_20.setTransform(24.95,-6.35);

	this.instance = new lib.Symbol4();
	this.instance.setTransform(64,0,1,1,0,0,0,64,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-1.5,-23.5,131,47), null);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Symbol9();
	this.instance.setTransform(80.55,0,0.4534,0.4534,0,0,0,80.5,0);
	this.instance.alpha = 0.5391;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24).to({_off:false},0).to({scaleX:1.8882,scaleY:1.8882,x:80.5,alpha:0},23).to({_off:true},1).wait(7));

	// Layer_2
	this.instance_1 = new lib.Symbol9();
	this.instance_1.setTransform(80.55,0,0.4534,0.4534,0,0,0,80.5,0);
	this.instance_1.alpha = 0.5391;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({scaleX:1.8882,scaleY:1.8882,x:80.5,alpha:0},23).to({_off:true},1).wait(21));

	// Layer_1
	this.instance_2 = new lib.Symbol9();
	this.instance_2.setTransform(80.55,0,0.4534,0.4534,0,0,0,80.5,0);
	this.instance_2.alpha = 0.5391;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.8882,scaleY:1.8882,x:80.5,alpha:0},23).to({_off:true},1).wait(31));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.5,-152,304,304);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(35,0.7).lineTo(35,-0.7).lineTo(55.1,-0.7).lineTo(54.6,0.7).closePath().moveTo(-54.7,0.7).lineTo(-55.1,-0.7).lineTo(-33.1,-0.7).lineTo(-33.1,0.7).closePath();
	this.shape.setTransform(55.1,2.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(55));

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.moveTo(-23.7,23.8).curveTo(-33.5,14,-33.5,-0).curveTo(-33.5,-14,-23.7,-23.9).curveTo(-13.9,-33.8,-0,-33.8).lineTo(0.5,-33.8).curveTo(14.1,-33.6,23.7,-23.9).curveTo(33.5,-14,33.5,-0).curveTo(33.5,14,23.7,23.8).curveTo(13.9,33.7,-0,33.7).curveTo(-13.9,33.7,-23.7,23.8).closePath();
	mask.setTransform(55.8,0.1);

	// Layer_1
	this.instance = new lib.Symbol8("synched",0);
	this.instance.setTransform(55.1,-0.1,1,1,0,0,0,55.1,-0.1);

	this.instance_1 = new lib.Symbol8copy2("synched",0);
	this.instance_1.setTransform(35.1,-0.1,1,1,0,0,0,55.1,-0.1);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{scaleY:1,x:55.1}}]}).to({state:[{t:this.instance,p:{scaleY:1.2013,x:50.1}}]},12).to({state:[{t:this.instance_1}]},12).to({state:[{t:this.instance,p:{scaleY:0.5839,x:75.1}}]},11).to({state:[{t:this.instance,p:{scaleY:0.4632,x:65.1}}]},9).wait(11));

	// Layer_3
	this.instance_2 = new lib.Symbol8copy("synched",0);
	this.instance_2.setTransform(95.1,-0.1,1,1,0,0,0,55.1,-0.1);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(24).to({_off:false},0).to({_off:true},11).wait(20));

	// Layer_5
	this.instance_3 = new lib.Symbol10("synched",0);
	this.instance_3.setTransform(56.05,0.55,1,1,0,0,0,80.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},54).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.9,-151.4,304,304);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_15
	this.instance = new lib.Symbol20();
	this.instance.setTransform(443,-17.45,1,1,0,0,0,302,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},11).wait(368).to({alpha:1},16).wait(5));

	// Аналитика__SERP_features_
	this.instance_1 = new lib.Symbol19();
	this.instance_1.setTransform(438.5,4,1,1,0,0,0,125.5,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(290).to({_off:false},0).to({x:410.5,alpha:1},15).wait(95));

	// Мониторинг_конкурентов_
	this.instance_2 = new lib.Symbol18();
	this.instance_2.setTransform(437.5,-16.05,1,1,0,0,0,124.5,-0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(275).to({_off:false},0).to({x:409.5,alpha:1},15).wait(110));

	// Простая_настройка_
	this.instance_3 = new lib.Symbol17();
	this.instance_3.setTransform(411,-36.05,1,1,0,0,0,98,-0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(260).to({_off:false},0).to({x:383,alpha:1},15).wait(125));

	// Layer_8
	this.instance_4 = new lib.Symbol14();
	this.instance_4.setTransform(407.8,-14.2,1,1,0,0,0,120.3,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(175).to({_off:false},0).wait(64).to({alpha:0},5).to({_off:true},1).wait(155));

	// Layer_9
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-5.7,5.6).curveTo(-8,3.3,-8,0).curveTo(-8,-3.3,-5.7,-5.6).curveTo(-3.3,-8,0,-8).curveTo(3.3,-8,5.7,-5.6).curveTo(8,-3.3,8,0).curveTo(8,3.3,5.7,5.6).curveTo(3.3,8,0,8).curveTo(-3.3,8,-5.7,5.6).closePath();
	this.shape.setTransform(233,-16.95);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(175).to({_off:false},0).to({_off:true},74).wait(151));

	// Layer_7
	this.instance_5 = new lib.Symbol1();
	this.instance_5.setTransform(73.5,-14.7,0.49,0.49,0,0,0,101.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(159).to({scaleX:0.7462,scaleY:0.7462,x:96.5},16).wait(64).to({scaleX:0.49,scaleY:0.49,x:73.5},12).wait(149));

	// Layer_6
	this.instance_6 = new lib.Symbol2();
	this.instance_6.setTransform(-1,-16.5,1,1,0,0,0,-1,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(159).to({scaleX:5.0971,x:-5.1},16).wait(64).to({scaleX:1,x:-1},12).wait(149));

	// Layer_10
	this.instance_7 = new lib.Symbol16("synched",0);
	this.instance_7.setTransform(216,-13.5,1,1,0,0,0,44,0);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(247).to({_off:false},0).wait(153));

	// Layer_5
	this.instance_8 = new lib.Symbol12();
	this.instance_8.setTransform(298.2,4.7,1,1,0,0,0,110.7,0);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(54).to({_off:false},0).to({alpha:1},16).to({_off:true},105).wait(225));

	// Layer_4
	this.instance_9 = new lib.Symbol11();
	this.instance_9.setTransform(307.9,-5.15,1,1,0,0,0,120.4,0);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:-28.15,alpha:1},19).to({y:-25.15},7).to({_off:true},149).wait(225));

	// Layer_2
	this.instance_10 = new lib.Symbol5();
	this.instance_10.setTransform(558.5,5.5,1,1,0,0,0,60.5,0);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(4).to({_off:false},0).to({x:523.5,alpha:1},20).to({_off:true},151).wait(225));

	// Layer_3
	this.instance_11 = new lib.Symbol7("synched",0);
	this.instance_11.setTransform(507.7,-16.85,1,1,0,0,0,55.1,-0.1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(24).to({_off:false},0).to({alpha:1,startPosition:10},10).to({_off:true},141).wait(225));

	// Layer_1
	this.instance_12 = new lib.Symbol3();
	this.instance_12.setTransform(367,-16,1,1,0,0,0,364,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(239).to({skewY:180},0).wait(161));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-168.2,745,304);


// stage content:
(lib._728_90 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill().beginStroke("#000000").setStrokeStyle(1,1,1).moveTo(-364,-45).lineTo(364,-45).lineTo(364,45).lineTo(-364,45).closePath();
	this.shape.setTransform(364,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(400));

	// Layer_5
	this.instance = new lib.Symbol13();
	this.instance.setTransform(646.55,46.3,2.7656,2.7656,0,0,0,64.2,0.1);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:false},0).to({regX:64,scaleX:0.8864,scaleY:0.8864,x:646.05,y:46.1,alpha:1},17).to({regY:0,scaleX:1,scaleY:1,x:646,y:46},5).wait(116).to({scaleX:1.0781,scaleY:1.0781},4).to({regX:64.2,scaleX:0.7767,scaleY:0.7767,x:646.15},4).to({regX:64,scaleX:1,scaleY:1,x:646},11).wait(124).to({regY:0.1,scaleX:0.8594,scaleY:0.8594,y:46.1},5).to({regY:0,scaleX:1,scaleY:1,y:46,alpha:0},11).wait(14));

	// Layer_1
	this.instance_1 = new lib.Symbol6("synched",0);
	this.instance_1.setTransform(362.5,61,1,1,0,0,0,365.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(400));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(361,-62.2,466.20000000000005,259);
// library properties:
lib.properties = {
	id: 'AEDC430DAE636748BAC31A6C01E90BA7',
	width: 728,
	height: 90,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/728_90_atlas_1.png?1666187673884", id:"728_90_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['AEDC430DAE636748BAC31A6C01E90BA7'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;