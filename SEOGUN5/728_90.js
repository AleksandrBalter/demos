(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"728_90_atlas_1", frames: [[492,184,27,29],[0,0,728,90],[0,92,728,90],[924,0,87,229],[440,184,50,50],[854,172,51,51],[325,184,113,83],[0,184,203,56],[730,172,122,93],[205,184,118,90],[730,0,192,170]]}
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



(lib.bullet2 = function() {
	this.initialize(ss["728_90_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.f2 = function() {
	this.initialize(ss["728_90_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.f3jpgcopy = function() {
	this.initialize(ss["728_90_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.gun = function() {
	this.initialize(ss["728_90_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.icon1 = function() {
	this.initialize(ss["728_90_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.icon2 = function() {
	this.initialize(ss["728_90_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.kalendar = function() {
	this.initialize(ss["728_90_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.initialize(ss["728_90_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.rose = function() {
	this.initialize(ss["728_90_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.skeleton = function() {
	this.initialize(ss["728_90_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.star = function() {
	this.initialize(ss["728_90_atlas_1"]);
	this.gotoAndStop(10);
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


(lib.Symbol91 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#CF0B0C").beginStroke().moveTo(-369.5,53).lineTo(-369.5,-53).lineTo(369.5,-53).lineTo(369.5,53).closePath();
	this.shape.setTransform(369.475,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol91, new cjs.Rectangle(0,-53,739,106), null);


(lib.Symbol90 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.f3jpgcopy();
	this.instance.setTransform(0,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol90, new cjs.Rectangle(0,-45,728,90), null);


(lib.Symbol89 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.2,7).curveTo(-4,6.3,-4,5.3).curveTo(-4,4.2,-3.2,3.4).curveTo(-2.3,2.6,-1.1,2.6).curveTo(0,2.6,0.8,3.3).curveTo(1.6,3.9,1.5,4.9).curveTo(1.6,6.1,0.7,6.9).curveTo(-0.2,7.6,-1.4,7.6).curveTo(-2.5,7.6,-3.2,7).closePath().moveTo(-2.7,1.8).curveTo(-2.6,0.8,-2,0.2).curveTo(-1.5,-0.4,-0.5,-1.1).lineTo(0.5,-2.1).curveTo(0.9,-2.4,0.9,-2.9).curveTo(0.9,-3.3,0.5,-3.5).curveTo(0.3,-3.8,-0.4,-3.8).curveTo(-1.1,-3.8,-1.7,-3.4).curveTo(-2.4,-3,-2.9,-2.3).lineTo(-6,-4.3).curveTo(-5.1,-5.8,-3.3,-6.7).curveTo(-1.5,-7.6,0.7,-7.6).curveTo(2.4,-7.6,3.6,-7.2).curveTo(4.7,-6.7,5.4,-5.9).curveTo(6.1,-5,6,-3.9).curveTo(6,-3,5.7,-2.3).curveTo(5.3,-1.5,4.7,-1.1).curveTo(4.2,-0.6,3.3,0).lineTo(2.1,0.9).curveTo(1.7,1.3,1.6,1.8).closePath();
	this.shape.setTransform(214.75,1.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.9,7.3).lineTo(2.5,-0.2).lineTo(-4,7.3).lineTo(-8.8,7.3).lineTo(-5.8,-7.4).lineTo(-1,-7.4).lineTo(-2.5,0.3).lineTo(4,-7.4).lineTo(8.8,-7.4).lineTo(5.8,7.3).closePath();
	this.shape_1.setTransform(199.425,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.6,7.3).lineTo(-1.2,2).lineTo(-2.9,2).lineTo(-3.9,7.3).lineTo(-8.9,7.3).lineTo(-5.9,-7.4).lineTo(-1,-7.4).lineTo(-2.1,-1.9).lineTo(-0.8,-1.9).lineTo(3.4,-7.4).lineTo(8.9,-7.4).lineTo(3,-0.1).lineTo(5.8,7.3).closePath();
	this.shape_2.setTransform(183.275,1.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.9,7.3).lineTo(2.5,-0.2).lineTo(-4,7.3).lineTo(-8.8,7.3).lineTo(-5.8,-7.4).lineTo(-1,-7.4).lineTo(-2.5,0.3).lineTo(4,-7.4).lineTo(8.8,-7.4).lineTo(5.8,7.3).closePath();
	this.shape_3.setTransform(165.975,1.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5,7.3).lineTo(-2.9,-3.5).lineTo(-7.1,-3.5).lineTo(-6.4,-7.4).lineTo(7.1,-7.4).lineTo(6.4,-3.5).lineTo(2,-3.5).lineTo(-0.1,7.3).closePath();
	this.shape_4.setTransform(151.375,1.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.9,7.3).lineTo(2.5,-0.2).lineTo(-4,7.3).lineTo(-8.8,7.3).lineTo(-5.8,-7.4).lineTo(-1,-7.4).lineTo(-2.5,0.3).lineTo(4,-7.4).lineTo(8.8,-7.4).lineTo(5.8,7.3).closePath();
	this.shape_5.setTransform(134.625,1.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-9.1,7.2).lineTo(-8.1,3.2).lineTo(-7.6,3.3).curveTo(-6.9,3.3,-6.4,2.8).curveTo(-5.9,2.4,-5.5,1.2).curveTo(-5,0.1,-4.6,-1.7).lineTo(-3.3,-7.5).lineTo(9.1,-7.5).lineTo(6.2,7.2).lineTo(1.3,7.2).lineTo(3.5,-3.6).lineTo(0.1,-3.6).lineTo(-0.5,-0.8).curveTo(-1.2,2.4,-2,4.2).curveTo(-2.9,5.9,-4.1,6.7).curveTo(-5.3,7.5,-7.1,7.5).curveTo(-8.3,7.5,-9.1,7.2).closePath();
	this.shape_6.setTransform(117.05,1.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3.9,7.3).lineTo(3.4,4.8).lineTo(-2.2,4.8).lineTo(-3.6,7.3).lineTo(-8.9,7.3).lineTo(0.5,-7.4).lineTo(5.4,-7.4).lineTo(8.9,7.3).closePath().moveTo(-0.1,1.2).lineTo(2.7,1.2).lineTo(2,-2.6).closePath();
	this.shape_7.setTransform(98.675,1.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.8,7.3).lineTo(1.9,1.9).lineTo(-2.7,1.9).lineTo(-3.8,7.3).lineTo(-8.7,7.3).lineTo(-5.8,-7.4).lineTo(-0.8,-7.4).lineTo(-1.9,-2.1).lineTo(2.7,-2.1).lineTo(3.7,-7.4).lineTo(8.7,-7.4).lineTo(5.8,7.3).closePath();
	this.shape_8.setTransform(82.675,1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3.9,7.3).lineTo(3.4,4.8).lineTo(-2.2,4.8).lineTo(-3.6,7.3).lineTo(-8.9,7.3).lineTo(0.5,-7.4).lineTo(5.4,-7.4).lineTo(8.9,7.3).closePath().moveTo(-0.1,1.2).lineTo(2.7,1.2).lineTo(2,-2.6).closePath();
	this.shape_9.setTransform(63.725,1.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.5,1.8).lineTo(-2.8,-1.8).lineTo(3.5,-1.8).lineTo(2.8,1.8).closePath();
	this.shape_10.setTransform(51.9,2.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.8,6.9).curveTo(-6.5,6,-7.5,4.5).curveTo(-8.4,3,-8.4,1.1).curveTo(-8.4,-1.4,-7.2,-3.5).curveTo(-6,-5.4,-3.9,-6.5).curveTo(-1.8,-7.7,0.9,-7.7).curveTo(3.1,-7.7,4.8,-6.8).curveTo(6.5,-6.1,7.4,-4.6).curveTo(8.4,-3.1,8.4,-1.1).curveTo(8.4,1.5,7.2,3.4).curveTo(6,5.5,3.9,6.5).curveTo(1.8,7.7,-0.9,7.7).curveTo(-3.2,7.7,-4.8,6.9).closePath().moveTo(-1.6,-3).curveTo(-2.4,-2.5,-2.9,-1.4).curveTo(-3.4,-0.4,-3.4,0.8).curveTo(-3.4,2.1,-2.6,2.9).curveTo(-1.8,3.7,-0.5,3.7).curveTo(0.7,3.7,1.6,3.1).curveTo(2.4,2.4,2.9,1.4).curveTo(3.4,0.4,3.4,-0.8).curveTo(3.4,-2.1,2.6,-2.9).curveTo(1.8,-3.6,0.5,-3.7).curveTo(-0.7,-3.7,-1.6,-3).closePath();
	this.shape_11.setTransform(39.175,1.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.5,7.3).lineTo(-4.5,-7.4).lineTo(7.5,-7.4).lineTo(6.7,-3.6).lineTo(-0.4,-3.6).lineTo(-0.7,-1.9).lineTo(5.5,-1.9).lineTo(4.8,1.7).lineTo(-1.4,1.7).lineTo(-1.9,3.6).lineTo(5.5,3.6).lineTo(4.8,7.3).closePath();
	this.shape_12.setTransform(23.3,1.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.6,7.3).curveTo(-6.3,6.8,-7.4,6.2).lineTo(-5.5,2.5).curveTo(-3.1,3.9,-0.5,3.9).curveTo(0.5,3.9,0.9,3.7).curveTo(1.5,3.5,1.4,3.1).curveTo(1.4,2.6,0.9,2.5).curveTo(0.4,2.2,-0.7,1.9).lineTo(-3.1,1.1).curveTo(-4.1,0.8,-4.9,-0.1).curveTo(-5.6,-0.8,-5.6,-2.1).curveTo(-5.5,-3.9,-4.7,-5).curveTo(-3.8,-6.3,-2.1,-7).curveTo(-0.4,-7.7,1.9,-7.7).curveTo(3.5,-7.7,5,-7.4).curveTo(6.3,-7.1,7.4,-6.4).lineTo(5.6,-2.8).curveTo(4.7,-3.4,3.7,-3.7).curveTo(2.6,-3.9,1.5,-3.9).curveTo(0.5,-3.9,-0.1,-3.6).curveTo(-0.6,-3.3,-0.6,-2.9).curveTo(-0.6,-2.5,-0.1,-2.3).curveTo(0.4,-2.1,1.6,-1.8).curveTo(3.1,-1.4,4,-1.1).curveTo(5,-0.7,5.7,0.1).curveTo(6.4,0.9,6.4,2.2).curveTo(6.4,3.8,5.5,5.1).curveTo(4.6,6.3,2.9,7).curveTo(1.2,7.7,-1,7.7).curveTo(-3,7.7,-4.6,7.3).closePath();
	this.shape_13.setTransform(8.9,1.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol89, new cjs.Rectangle(0,-16.4,222.7,32.9), null);


(lib.Symbol88 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-8.8,6.9).lineTo(-7.2,3.5).lineTo(-6,3.6).curveTo(-5.3,3.6,-4.7,3.4).curveTo(-4.2,3.1,-3.7,2.6).lineTo(-7.2,-7.6).lineTo(-2.1,-7.6).lineTo(-0.4,-1.5).lineTo(3.8,-7.6).lineTo(8.8,-7.6).lineTo(0.6,3.7).curveTo(-0.8,5.6,-2.5,6.5).curveTo(-4.1,7.6,-5.8,7.5).curveTo(-7.3,7.5,-8.8,6.9).closePath();
	this.shape.setTransform(306.5,1.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.8,7.4).lineTo(1.9,2).lineTo(-2.7,2).lineTo(-3.8,7.4).lineTo(-8.7,7.4).lineTo(-5.8,-7.4).lineTo(-0.8,-7.4).lineTo(-1.9,-2.2).lineTo(2.7,-2.2).lineTo(3.7,-7.4).lineTo(8.7,-7.4).lineTo(5.8,7.4).closePath();
	this.shape_1.setTransform(289.225,1.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.5,7.4).lineTo(-4.5,-7.4).lineTo(7.5,-7.4).lineTo(6.7,-3.6).lineTo(-0.4,-3.6).lineTo(-0.7,-1.9).lineTo(5.5,-1.9).lineTo(4.8,1.7).lineTo(-1.4,1.7).lineTo(-1.8,3.6).lineTo(5.6,3.6).lineTo(4.8,7.4).closePath();
	this.shape_2.setTransform(273.7,1.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.6,8.8).lineTo(3.1,5.9).lineTo(-8.7,5.9).lineTo(-5.7,-8.8).lineTo(-0.9,-8.8).lineTo(-3,2).lineTo(1.6,2).lineTo(3.8,-8.8).lineTo(8.7,-8.8).lineTo(6.5,2).lineTo(8.4,2).lineTo(7.1,8.8).closePath();
	this.shape_3.setTransform(256.925,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.1,6.9).curveTo(-2.6,6.3,-3.6,4.9).curveTo(-4.5,3.6,-4.7,2).lineTo(-5.8,2).lineTo(-6.9,7.4).lineTo(-11.8,7.4).lineTo(-8.8,-7.4).lineTo(-4,-7.4).lineTo(-5,-2.2).lineTo(-4.1,-2.2).curveTo(-3.4,-3.8,-2.1,-5).curveTo(-0.7,-6.3,1,-7).curveTo(2.7,-7.7,4.7,-7.7).curveTo(6.8,-7.7,8.4,-6.9).curveTo(10,-6,11,-4.5).curveTo(11.8,-3,11.8,-1.1).curveTo(11.8,1.4,10.5,3.3).curveTo(9.3,5.3,7.1,6.5).curveTo(4.9,7.7,2.4,7.7).curveTo(0.4,7.7,-1.1,6.9).closePath().moveTo(2.3,-3.1).curveTo(1.4,-2.5,0.8,-1.5).curveTo(0.3,-0.4,0.3,0.7).curveTo(0.3,2.1,1,2.9).curveTo(1.7,3.7,2.9,3.7).curveTo(3.9,3.7,4.8,3).curveTo(5.7,2.5,6.2,1.4).curveTo(6.8,0.4,6.8,-0.8).curveTo(6.7,-2.1,6.1,-2.9).curveTo(5.4,-3.7,4.2,-3.6).curveTo(3.2,-3.7,2.3,-3.1).closePath();
	this.shape_4.setTransform(229.85,1.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-8.8,6.9).lineTo(-7.2,3.5).lineTo(-6,3.6).curveTo(-5.2,3.6,-4.7,3.4).curveTo(-4.2,3.1,-3.7,2.6).lineTo(-7.2,-7.6).lineTo(-2.1,-7.6).lineTo(-0.4,-1.5).lineTo(3.8,-7.6).lineTo(8.8,-7.6).lineTo(0.6,3.7).curveTo(-0.8,5.6,-2.5,6.5).curveTo(-4.1,7.6,-5.9,7.5).curveTo(-7.3,7.5,-8.8,6.9).closePath();
	this.shape_5.setTransform(210.9,1.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-11.7,7.4).lineTo(-8.8,-7.4).lineTo(-3.9,-7.4).lineTo(-6,3.5).lineTo(-3.1,3.5).lineTo(-1,-7.4).lineTo(3.9,-7.4).lineTo(1.8,3.5).lineTo(4.7,3.5).lineTo(6.9,-7.4).lineTo(11.7,-7.4).lineTo(8.8,7.4).closePath();
	this.shape_6.setTransform(190.625,1.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.8,6.8).curveTo(-6.5,6.1,-7.4,4.6).curveTo(-8.4,3.1,-8.3,1.1).curveTo(-8.4,-1.5,-7.2,-3.4).curveTo(-6,-5.5,-3.8,-6.6).curveTo(-1.8,-7.7,0.9,-7.7).curveTo(3.1,-7.7,4.9,-6.9).curveTo(6.6,-6.1,7.4,-4.5).curveTo(8.3,-3.1,8.3,-1.1).curveTo(8.3,1.5,7.1,3.4).curveTo(6,5.5,3.9,6.6).curveTo(1.7,7.7,-0.9,7.7).curveTo(-3.2,7.7,-4.8,6.8).closePath().moveTo(-1.6,-3.1).curveTo(-2.4,-2.4,-2.9,-1.5).curveTo(-3.4,-0.4,-3.4,0.8).curveTo(-3.4,2.1,-2.6,2.9).curveTo(-1.8,3.7,-0.5,3.7).curveTo(0.7,3.7,1.6,3).curveTo(2.5,2.4,2.9,1.4).curveTo(3.3,0.4,3.4,-0.8).curveTo(3.3,-2.1,2.6,-2.9).curveTo(1.8,-3.7,0.5,-3.6).curveTo(-0.7,-3.6,-1.6,-3.1).closePath();
	this.shape_7.setTransform(170.25,1.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.8,7.4).lineTo(-4.9,-7.4).lineTo(1.6,-7.4).curveTo(4.6,-7.4,6.2,-6).curveTo(7.8,-4.8,7.8,-2.4).curveTo(7.8,-0.7,6.9,0.8).curveTo(6,2.2,4.3,3).curveTo(2.6,3.7,0.4,3.8).lineTo(-2.2,3.8).lineTo(-2.9,7.4).closePath().moveTo(-1.4,-0.1).lineTo(0.6,-0.1).curveTo(1.7,-0.1,2.2,-0.6).curveTo(2.8,-1.1,2.8,-2.1).curveTo(2.8,-3.5,0.9,-3.5).lineTo(-0.7,-3.5).closePath();
	this.shape_8.setTransform(153.375,1.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.9,6.8).curveTo(-6.5,6.1,-7.5,4.6).curveTo(-8.3,3.1,-8.4,1.1).curveTo(-8.4,-1.5,-7.1,-3.4).curveTo(-6,-5.5,-3.9,-6.6).curveTo(-1.8,-7.7,0.9,-7.7).curveTo(3.2,-7.7,4.8,-6.9).curveTo(6.5,-6.1,7.4,-4.5).curveTo(8.4,-3.1,8.3,-1.1).curveTo(8.4,1.5,7.2,3.4).curveTo(6,5.5,3.9,6.6).curveTo(1.7,7.7,-0.9,7.7).curveTo(-3.1,7.7,-4.9,6.8).closePath().moveTo(-1.6,-3.1).curveTo(-2.5,-2.4,-2.9,-1.5).curveTo(-3.3,-0.4,-3.4,0.8).curveTo(-3.3,2.1,-2.6,2.9).curveTo(-1.8,3.7,-0.5,3.7).curveTo(0.7,3.7,1.6,3).curveTo(2.5,2.4,2.9,1.4).curveTo(3.4,0.4,3.3,-0.8).curveTo(3.4,-2.1,2.6,-2.9).curveTo(1.9,-3.7,0.5,-3.6).curveTo(-0.7,-3.6,-1.6,-3.1).closePath();
	this.shape_9.setTransform(137,1.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.2,7.4).lineTo(-0.4,3.6).lineTo(-3.7,7.4).lineTo(-9.6,7.4).lineTo(-2.8,-0.2).lineTo(-6.2,-7.4).lineTo(-0.6,-7.4).lineTo(0.8,-3.9).lineTo(3.7,-7.4).lineTo(9.6,-7.4).lineTo(3.3,-0.4).lineTo(6.9,7.4).closePath();
	this.shape_10.setTransform(119.75,1.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.4,7.4).lineTo(-4.5,-7.4).lineTo(0.4,-7.4).lineTo(-0.5,-2.9).lineTo(2.5,-2.9).curveTo(5,-2.9,6.2,-1.8).curveTo(7.4,-0.8,7.4,1.2).curveTo(7.4,3.1,6.5,4.5).curveTo(5.6,5.9,3.9,6.6).curveTo(2.2,7.4,-0.1,7.4).closePath().moveTo(-1.9,3.9).lineTo(0.2,3.9).curveTo(1.1,3.9,1.7,3.3).curveTo(2.3,2.7,2.3,1.8).curveTo(2.3,1.2,2,0.9).curveTo(1.7,0.6,1,0.6).lineTo(-1.2,0.6).closePath();
	this.shape_11.setTransform(97.175,1.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-11.7,7.4).lineTo(-8.8,-7.4).lineTo(-3.9,-7.4).lineTo(-6,3.5).lineTo(-3.1,3.5).lineTo(-1,-7.4).lineTo(3.9,-7.4).lineTo(1.8,3.5).lineTo(4.7,3.5).lineTo(6.9,-7.4).lineTo(11.7,-7.4).lineTo(8.8,7.4).closePath();
	this.shape_12.setTransform(78.375,1.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.5,7.4).lineTo(-4.5,-7.4).lineTo(7.5,-7.4).lineTo(6.7,-3.6).lineTo(-0.4,-3.6).lineTo(-0.7,-1.9).lineTo(5.5,-1.9).lineTo(4.8,1.7).lineTo(-1.4,1.7).lineTo(-1.9,3.6).lineTo(5.6,3.6).lineTo(4.8,7.4).closePath();
	this.shape_13.setTransform(59.85,1.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.2,7.4).lineTo(0.7,2.8).curveTo(-0.6,3.1,-1.7,3.1).curveTo(-4.6,3.1,-6.1,1.9).curveTo(-7.6,0.7,-7.6,-1.5).curveTo(-7.6,-2.3,-7.4,-3.1).lineTo(-6.6,-7.4).lineTo(-1.7,-7.4).lineTo(-2.5,-3.3).lineTo(-2.7,-2.3).curveTo(-2.6,-1.5,-2.2,-1.2).curveTo(-1.8,-0.8,-1,-0.8).curveTo(0.5,-0.8,1.5,-1.3).lineTo(2.7,-7.4).lineTo(7.6,-7.4).lineTo(4.6,7.4).closePath();
	this.shape_14.setTransform(45.15,1.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.8,6.8).curveTo(-6.5,6.1,-7.4,4.6).curveTo(-8.4,3.1,-8.3,1.1).curveTo(-8.4,-1.5,-7.2,-3.4).curveTo(-6,-5.5,-3.8,-6.6).curveTo(-1.7,-7.7,0.9,-7.7).curveTo(3.1,-7.7,4.9,-6.9).curveTo(6.5,-6.1,7.5,-4.5).curveTo(8.3,-3.1,8.4,-1.1).curveTo(8.4,1.5,7.1,3.4).curveTo(6,5.5,3.9,6.6).curveTo(1.8,7.7,-0.9,7.7).curveTo(-3.2,7.7,-4.8,6.8).closePath().moveTo(-1.5,-3.1).curveTo(-2.5,-2.4,-2.9,-1.5).curveTo(-3.4,-0.4,-3.3,0.8).curveTo(-3.4,2.1,-2.6,2.9).curveTo(-1.8,3.7,-0.5,3.7).curveTo(0.7,3.7,1.6,3).curveTo(2.4,2.4,2.9,1.4).curveTo(3.3,0.4,3.3,-0.8).curveTo(3.3,-2.1,2.6,-2.9).curveTo(1.8,-3.7,0.5,-3.6).curveTo(-0.7,-3.6,-1.5,-3.1).closePath();
	this.shape_15.setTransform(27.7,1.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.2,7.4).lineTo(-0.5,3.6).lineTo(-3.7,7.4).lineTo(-9.6,7.4).lineTo(-2.8,-0.2).lineTo(-6.1,-7.4).lineTo(-0.6,-7.4).lineTo(0.8,-3.9).lineTo(3.7,-7.4).lineTo(9.5,-7.4).lineTo(3.3,-0.4).lineTo(6.9,7.4).closePath();
	this.shape_16.setTransform(10.45,1.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol88, new cjs.Rectangle(0,-16.5,315.7,33), null);


(lib.Symbol86 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.star();
	this.instance.setTransform(0,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol86, new cjs.Rectangle(0,-85,192,170), null);


(lib.Symbol85 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#CF0B0C").beginStroke().moveTo(-4.7,9.7).curveTo(-5.8,8.7,-5.8,7.4).curveTo(-5.8,5.7,-4.6,4.6).curveTo(-3.4,3.5,-1.6,3.5).curveTo(0.1,3.5,1.1,4.4).curveTo(2.2,5.4,2.2,6.8).curveTo(2.2,8.4,0.9,9.5).curveTo(-0.3,10.6,-2,10.6).curveTo(-3.7,10.6,-4.7,9.7).closePath().moveTo(-3.5,2.3).lineTo(-2.3,-10.6).lineTo(5.8,-10.6).lineTo(1.9,2.3).closePath();
	this.shape.setTransform(346.875,2.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#CF0B0C").beginStroke().moveTo(4.1,10.5).lineTo(5.9,1).lineTo(0,8.6).lineTo(-3.1,8.6).lineTo(-6.3,1).lineTo(-8.2,10.5).lineTo(-14.7,10.5).lineTo(-10.5,-10.5).lineTo(-4.7,-10.5).lineTo(-0.1,0.7).lineTo(8.7,-10.5).lineTo(14.7,-10.5).lineTo(10.5,10.5).closePath();
	this.shape_1.setTransform(327.325,2.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#CF0B0C").beginStroke().moveTo(5.6,10.5).lineTo(5,6.8).lineTo(-3.1,6.8).lineTo(-5.2,10.5).lineTo(-12.7,10.5).lineTo(0.7,-10.5).lineTo(7.7,-10.5).lineTo(12.6,10.5).closePath().moveTo(-0.2,1.8).lineTo(4,1.8).lineTo(2.9,-3.6).closePath();
	this.shape_2.setTransform(298.05,2.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#CF0B0C").beginStroke().moveTo(-6,9.8).curveTo(-8.4,8.6,-9.7,6.5).curveTo(-11,4.3,-11,1.6).curveTo(-11,-2.1,-9.4,-4.9).curveTo(-7.7,-7.8,-4.6,-9.4).curveTo(-1.6,-11,2.2,-11).curveTo(5.2,-11,7.6,-9.9).curveTo(9.9,-8.8,11,-6.8).lineTo(5.9,-2.8).curveTo(4.5,-5.3,1.8,-5.3).curveTo(0.1,-5.3,-1.2,-4.5).curveTo(-2.5,-3.7,-3.2,-2.2).curveTo(-3.9,-0.7,-3.9,1.1).curveTo(-3.9,3,-2.7,4.1).curveTo(-1.6,5.2,0.4,5.2).curveTo(3,5.2,5.1,2.8).lineTo(9.2,6.8).curveTo(7.4,9,5.1,10).curveTo(2.7,11,-0.3,11).curveTo(-3.5,11,-6,9.8).closePath();
	this.shape_3.setTransform(276.6,2.125);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#CF0B0C").beginStroke().moveTo(-10.6,10.5).lineTo(-6.4,-10.5).lineTo(10.6,-10.5).lineTo(9.6,-5.2).lineTo(-0.5,-5.2).lineTo(-1,-2.7).lineTo(7.9,-2.7).lineTo(6.8,2.4).lineTo(-2.1,2.4).lineTo(-2.6,5.2).lineTo(7.9,5.2).lineTo(6.8,10.5).closePath();
	this.shape_4.setTransform(245.875,2.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#CF0B0C").beginStroke().moveTo(-10.6,10.5).lineTo(-6.4,-10.5).lineTo(10.6,-10.5).lineTo(9.6,-5.2).lineTo(-0.5,-5.2).lineTo(-1,-2.7).lineTo(7.9,-2.7).lineTo(6.8,2.4).lineTo(-2.1,2.4).lineTo(-2.6,5.2).lineTo(7.9,5.2).lineTo(6.8,10.5).closePath();
	this.shape_5.setTransform(225.525,2.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#CF0B0C").beginStroke().moveTo(1.4,13.7).lineTo(3.7,2.8).lineTo(-5.7,13.7).lineTo(-12.5,13.7).lineTo(-8.3,-7.3).lineTo(-1.4,-7.3).lineTo(-3.6,3.6).lineTo(5.8,-7.3).lineTo(12.5,-7.3).lineTo(8.3,13.7).closePath().moveTo(-2.1,-9.4).curveTo(-3.5,-10.5,-3.5,-12.5).lineTo(-3.5,-13.7).lineTo(0.9,-13.7).lineTo(0.9,-13.2).curveTo(0.9,-11.7,2.7,-11.7).curveTo(3.7,-11.7,4.3,-12.1).curveTo(4.9,-12.6,5,-13.7).lineTo(9.5,-13.7).curveTo(9.1,-10.9,7.4,-9.6).curveTo(5.7,-8.4,2.4,-8.4).curveTo(-0.6,-8.4,-2.1,-9.4).closePath();
	this.shape_6.setTransform(193.875,-1.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#CF0B0C").beginStroke().moveTo(-6.9,9.8).curveTo(-9.3,8.6,-10.6,6.5).curveTo(-11.9,4.3,-11.9,1.6).curveTo(-11.9,-2.1,-10.2,-5).curveTo(-8.5,-7.8,-5.5,-9.4).curveTo(-2.5,-11,1.3,-11).curveTo(4.5,-11,6.9,-9.8).curveTo(9.3,-8.6,10.6,-6.5).curveTo(11.9,-4.4,11.9,-1.6).curveTo(11.9,2.1,10.2,4.9).curveTo(8.6,7.8,5.5,9.4).curveTo(2.5,11,-1.3,11).curveTo(-4.5,11,-6.9,9.8).closePath().moveTo(-2.2,-4.4).curveTo(-3.5,-3.5,-4.1,-2.1).curveTo(-4.8,-0.6,-4.8,1.1).curveTo(-4.8,3,-3.7,4.1).curveTo(-2.6,5.2,-0.7,5.2).curveTo(1,5.2,2.2,4.4).curveTo(3.5,3.5,4.2,2).curveTo(4.8,0.5,4.8,-1.2).curveTo(4.8,-3.1,3.7,-4.2).curveTo(2.6,-5.3,0.7,-5.3).curveTo(-1,-5.3,-2.2,-4.4).closePath();
	this.shape_7.setTransform(169.025,2.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#CF0B0C").beginStroke().moveTo(-11.2,10.5).lineTo(-7,-10.5).lineTo(2.4,-10.5).curveTo(6.6,-10.5,8.9,-8.7).curveTo(11.2,-6.8,11.2,-3.5).curveTo(11.2,-0.9,9.9,1.1).curveTo(8.6,3.1,6.2,4.3).curveTo(3.7,5.3,0.6,5.4).lineTo(-3.1,5.4).lineTo(-4.1,10.5).closePath().moveTo(-2,-0.1).lineTo(0.9,-0.1).curveTo(2.4,-0.1,3.2,-0.8).curveTo(4,-1.6,4,-2.9).curveTo(4,-5,1.4,-5.1).lineTo(-1,-5.1).closePath();
	this.shape_8.setTransform(144.875,2.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#CF0B0C").beginStroke().moveTo(-7.1,10.5).lineTo(-4.1,-5).lineTo(-10.2,-5).lineTo(-9.1,-10.5).lineTo(10.2,-10.5).lineTo(9.1,-5).lineTo(2.8,-5).lineTo(-0.2,10.5).closePath();
	this.shape_9.setTransform(125.575,2.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#CF0B0C").beginStroke().moveTo(-6,9.8).curveTo(-8.4,8.6,-9.7,6.5).curveTo(-11,4.3,-11,1.6).curveTo(-11.1,-2.1,-9.3,-4.9).curveTo(-7.6,-7.8,-4.6,-9.4).curveTo(-1.7,-11,2.2,-11).curveTo(5.2,-11,7.6,-9.9).curveTo(9.9,-8.8,11,-6.8).lineTo(6,-2.8).curveTo(4.6,-5.3,1.7,-5.3).curveTo(0.1,-5.3,-1.2,-4.5).curveTo(-2.4,-3.7,-3.2,-2.2).curveTo(-3.9,-0.7,-3.9,1.1).curveTo(-3.9,3,-2.8,4.1).curveTo(-1.5,5.2,0.4,5.2).curveTo(3.1,5.2,5.1,2.8).lineTo(9.2,6.8).curveTo(7.4,9,5.1,10).curveTo(2.7,11,-0.3,11).curveTo(-3.5,11,-6,9.8).closePath();
	this.shape_10.setTransform(103.1,2.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#CF0B0C").beginStroke().moveTo(5.6,10.5).lineTo(4.9,6.8).lineTo(-3.1,6.8).lineTo(-5.2,10.5).lineTo(-12.7,10.5).lineTo(0.7,-10.5).lineTo(7.7,-10.5).lineTo(12.7,10.5).closePath().moveTo(-0.2,1.8).lineTo(4,1.8).lineTo(2.9,-3.6).closePath();
	this.shape_11.setTransform(76.5,2.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#CF0B0C").beginStroke().moveTo(1.2,10.5).lineTo(2.8,2.8).lineTo(-3.8,2.8).lineTo(-5.3,10.5).lineTo(-12.4,10.5).lineTo(-8.3,-10.5).lineTo(-1.2,-10.5).lineTo(-2.6,-3.1).lineTo(3.9,-3.1).lineTo(5.4,-10.5).lineTo(12.4,-10.5).lineTo(8.3,10.5).closePath();
	this.shape_12.setTransform(53.65,2.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#CF0B0C").beginStroke().moveTo(-15.4,2).lineTo(-14.6,-2).lineTo(15.4,-2).lineTo(14.6,2).closePath();
	this.shape_13.setTransform(17.1,3.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol85, new cjs.Rectangle(0,-22.6,353,45.3), null);


(lib.Symbol84 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.9,8.6).lineTo(2.3,1.8).lineTo(-3.6,8.6).lineTo(-7.9,8.6).lineTo(-5.3,-4.6).lineTo(-0.9,-4.6).lineTo(-2.3,2.2).lineTo(3.7,-4.6).lineTo(7.9,-4.6).lineTo(5.3,8.6).closePath().moveTo(-1.3,-6).curveTo(-2.3,-6.7,-2.3,-7.9).lineTo(-2.2,-8.7).lineTo(0.6,-8.7).lineTo(0.6,-8.4).curveTo(0.6,-7.4,1.7,-7.4).curveTo(2.4,-7.4,2.7,-7.7).curveTo(3.1,-8,3.2,-8.7).lineTo(6,-8.7).curveTo(5.7,-6.9,4.7,-6.1).curveTo(3.6,-5.3,1.5,-5.3).curveTo(-0.4,-5.4,-1.3,-6).closePath();
	this.shape.setTransform(362.475,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.9,6.6).lineTo(2.3,-0.2).lineTo(-3.6,6.6).lineTo(-7.9,6.6).lineTo(-5.3,-6.6).lineTo(-0.9,-6.6).lineTo(-2.3,0.2).lineTo(3.7,-6.6).lineTo(7.9,-6.6).lineTo(5.3,6.6).closePath();
	this.shape_1.setTransform(346.925,1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.7,6.6).lineTo(1.7,1.8).lineTo(-2.4,1.8).lineTo(-3.4,6.6).lineTo(-7.9,6.6).lineTo(-5.2,-6.6).lineTo(-0.8,-6.6).lineTo(-1.7,-1.9).lineTo(2.4,-1.9).lineTo(3.4,-6.6).lineTo(7.9,-6.6).lineTo(5.2,6.6).closePath();
	this.shape_2.setTransform(331.425,1.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6.7,6.6).lineTo(-4.1,-6.6).lineTo(6.7,-6.6).lineTo(6,-3.3).lineTo(-0.4,-3.3).lineTo(-0.7,-1.7).lineTo(5,-1.7).lineTo(4.3,1.5).lineTo(-1.3,1.5).lineTo(-1.7,3.3).lineTo(5,3.3).lineTo(4.3,6.6).closePath();
	this.shape_3.setTransform(317.375,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-8.3,6.5).lineTo(-7.3,2.9).lineTo(-6.8,3).curveTo(-6.2,3,-5.8,2.6).curveTo(-5.3,2.1,-4.9,1.1).lineTo(-4.2,-1.6).lineTo(-2.9,-6.8).lineTo(8.3,-6.8).lineTo(5.6,6.5).lineTo(1.2,6.5).lineTo(3.2,-3.3).lineTo(0.2,-3.3).lineTo(-0.4,-0.7).curveTo(-1.1,2.2,-1.8,3.8).curveTo(-2.6,5.4,-3.7,6.1).curveTo(-4.7,6.8,-6.4,6.8).curveTo(-7.5,6.8,-8.3,6.5).closePath();
	this.shape_4.setTransform(302.625,1.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.2,6.6).lineTo(-4.6,-6.6).lineTo(2.5,-6.6).curveTo(4.8,-6.6,6,-5.9).curveTo(7.2,-5,7.2,-3.5).curveTo(7.2,-2.4,6.6,-1.5).curveTo(6,-0.7,4.9,-0.2).curveTo(5.7,0.2,6.2,0.9).curveTo(6.7,1.5,6.7,2.4).curveTo(6.7,4.6,4.9,5.6).curveTo(3.2,6.6,0.4,6.6).closePath().moveTo(-2.2,3.5).lineTo(0.7,3.5).curveTo(1.4,3.5,1.8,3.2).curveTo(2.2,2.9,2.2,2.3).curveTo(2.2,1.9,1.9,1.7).curveTo(1.6,1.5,1.1,1.5).lineTo(-1.8,1.5).closePath().moveTo(-1.2,-1.6).lineTo(1.1,-1.6).curveTo(2.6,-1.6,2.6,-2.7).curveTo(2.6,-3.1,2.3,-3.3).curveTo(2,-3.5,1.4,-3.5).lineTo(-0.8,-3.5).closePath();
	this.shape_5.setTransform(287.725,1.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.4,6.2).curveTo(-5.9,5.5,-6.7,4.1).curveTo(-7.6,2.7,-7.6,1).curveTo(-7.6,-1.3,-6.5,-3.2).curveTo(-5.4,-4.9,-3.5,-6).curveTo(-1.6,-6.9,0.8,-7).curveTo(2.9,-7,4.4,-6.2).curveTo(5.9,-5.5,6.7,-4.1).curveTo(7.6,-2.7,7.6,-1).curveTo(7.6,1.3,6.5,3.1).curveTo(5.4,4.9,3.5,6).curveTo(1.6,6.9,-0.8,7).curveTo(-2.8,7,-4.4,6.2).closePath().moveTo(-1.4,-2.8).curveTo(-2.2,-2.2,-2.6,-1.3).curveTo(-3,-0.3,-3,0.8).curveTo(-3,1.9,-2.3,2.6).curveTo(-1.6,3.4,-0.4,3.4).curveTo(0.6,3.3,1.4,2.7).curveTo(2.2,2.2,2.6,1.3).curveTo(3.1,0.3,3.1,-0.8).curveTo(3.1,-1.9,2.4,-2.6).curveTo(1.7,-3.3,0.4,-3.3).curveTo(-0.6,-3.3,-1.4,-2.8).closePath();
	this.shape_6.setTransform(272.725,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.7,6.6).lineTo(1.7,1.8).lineTo(-2.4,1.8).lineTo(-3.4,6.6).lineTo(-7.9,6.6).lineTo(-5.2,-6.6).lineTo(-0.8,-6.6).lineTo(-1.7,-1.9).lineTo(2.4,-1.9).lineTo(3.4,-6.6).lineTo(7.9,-6.6).lineTo(5.2,6.6).closePath();
	this.shape_7.setTransform(257.025,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.1,6.6).lineTo(-4.4,-6.6).lineTo(7.1,-6.6).lineTo(6.4,-3.3).lineTo(-0.7,-3.3).lineTo(-1,-1.8).lineTo(2.2,-1.8).curveTo(4.2,-1.8,5.4,-0.8).curveTo(6.5,0.1,6.5,1.9).curveTo(6.5,3.4,5.7,4.4).curveTo(4.9,5.5,3.4,6.1).curveTo(1.9,6.6,-0.1,6.6).closePath().moveTo(-2.1,3.5).lineTo(0.2,3.5).curveTo(1,3.5,1.4,3.1).curveTo(1.9,2.9,1.9,2.2).curveTo(1.9,1.4,0.7,1.4).lineTo(-1.6,1.4).closePath();
	this.shape_8.setTransform(241.975,1.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.4,6.2).curveTo(-5.9,5.5,-6.7,4.1).curveTo(-7.6,2.7,-7.6,1).curveTo(-7.6,-1.3,-6.5,-3.2).curveTo(-5.4,-4.9,-3.5,-6).curveTo(-1.6,-6.9,0.8,-7).curveTo(2.9,-7,4.4,-6.2).curveTo(5.9,-5.5,6.7,-4.1).curveTo(7.6,-2.7,7.6,-1).curveTo(7.6,1.3,6.5,3.1).curveTo(5.4,4.9,3.5,6).curveTo(1.6,6.9,-0.8,7).curveTo(-2.8,7,-4.4,6.2).closePath().moveTo(-1.4,-2.8).curveTo(-2.2,-2.2,-2.6,-1.3).curveTo(-3,-0.3,-3,0.8).curveTo(-3,1.9,-2.3,2.6).curveTo(-1.6,3.4,-0.4,3.4).curveTo(0.6,3.3,1.4,2.7).curveTo(2.2,2.2,2.6,1.3).curveTo(3.1,0.3,3.1,-0.8).curveTo(3.1,-1.9,2.4,-2.6).curveTo(1.7,-3.3,0.4,-3.3).curveTo(-0.6,-3.3,-1.4,-2.8).closePath();
	this.shape_9.setTransform(227.025,1.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.9,6.2).lineTo(-6.5,3.1).lineTo(-5.4,3.3).curveTo(-4.8,3.3,-4.3,3).curveTo(-3.8,2.8,-3.4,2.3).lineTo(-6.5,-6.8).lineTo(-1.9,-6.8).lineTo(-0.4,-1.3).lineTo(3.5,-6.8).lineTo(7.9,-6.8).lineTo(0.6,3.3).curveTo(-0.7,5.1,-2.2,5.9).curveTo(-3.7,6.8,-5.3,6.8).curveTo(-6.6,6.8,-7.9,6.2).closePath();
	this.shape_10.setTransform(206.675,1.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.5,6.6).lineTo(-2.6,-3.2).lineTo(-6.4,-3.2).lineTo(-5.8,-6.6).lineTo(6.4,-6.6).lineTo(5.8,-3.2).lineTo(1.8,-3.2).lineTo(-0.1,6.6).closePath();
	this.shape_11.setTransform(193.375,1.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.4,6.2).curveTo(-5.9,5.5,-6.7,4.1).curveTo(-7.6,2.7,-7.6,1).curveTo(-7.6,-1.3,-6.5,-3.2).curveTo(-5.4,-4.9,-3.5,-6).curveTo(-1.6,-6.9,0.8,-7).curveTo(2.9,-7,4.4,-6.2).curveTo(5.9,-5.5,6.7,-4.1).curveTo(7.6,-2.7,7.6,-1).curveTo(7.6,1.3,6.5,3.1).curveTo(5.4,4.9,3.5,6).curveTo(1.6,6.9,-0.8,7).curveTo(-2.8,7,-4.4,6.2).closePath().moveTo(-1.4,-2.8).curveTo(-2.2,-2.2,-2.6,-1.3).curveTo(-3,-0.3,-3,0.8).curveTo(-3,1.9,-2.3,2.6).curveTo(-1.6,3.4,-0.4,3.4).curveTo(0.6,3.3,1.4,2.7).curveTo(2.2,2.2,2.6,1.3).curveTo(3.1,0.3,3.1,-0.8).curveTo(3.1,-1.9,2.4,-2.6).curveTo(1.7,-3.3,0.4,-3.3).curveTo(-0.6,-3.3,-1.4,-2.8).closePath();
	this.shape_12.setTransform(177.975,1.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.5,6.6).lineTo(-2.6,-3.2).lineTo(-6.4,-3.2).lineTo(-5.8,-6.6).lineTo(6.4,-6.6).lineTo(5.8,-3.2).lineTo(1.8,-3.2).lineTo(-0.1,6.6).closePath();
	this.shape_13.setTransform(164.575,1.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.7,6.2).curveTo(-5.3,5.5,-6.2,4.1).curveTo(-7,2.7,-7,1).curveTo(-7,-1.3,-5.9,-3.1).curveTo(-4.8,-4.9,-2.9,-6).curveTo(-1,-6.9,1.4,-7).curveTo(3.4,-7,4.8,-6.3).curveTo(6.3,-5.5,7,-4.3).lineTo(3.8,-1.8).curveTo(2.9,-3.3,1.1,-3.3).curveTo(0.1,-3.3,-0.7,-2.8).curveTo(-1.5,-2.3,-2,-1.4).curveTo(-2.5,-0.5,-2.5,0.7).curveTo(-2.5,1.9,-1.7,2.6).curveTo(-1,3.4,0.3,3.4).curveTo(2,3.4,3.3,1.8).lineTo(5.9,4.3).curveTo(4.7,5.8,3.3,6.4).curveTo(1.8,6.9,-0.1,7).curveTo(-2.2,7,-3.7,6.2).closePath();
	this.shape_14.setTransform(150.35,1.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3.6,6.6).lineTo(3.1,4.4).lineTo(-2,4.4).lineTo(-3.3,6.6).lineTo(-8,6.6).lineTo(0.5,-6.6).lineTo(4.9,-6.6).lineTo(8,6.6).closePath().moveTo(-0.1,1.1).lineTo(2.5,1.1).lineTo(1.8,-2.3).closePath();
	this.shape_15.setTransform(133.525,1.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-0.2,6.6).lineTo(0.6,2.5).curveTo(-0.6,2.8,-1.6,2.8).curveTo(-4.2,2.8,-5.5,1.7).curveTo(-6.9,0.6,-6.9,-1.4).lineTo(-6.7,-2.8).lineTo(-6,-6.6).lineTo(-1.6,-6.6).lineTo(-2.3,-2.9).lineTo(-2.4,-2.1).curveTo(-2.4,-1.4,-2,-1.1).curveTo(-1.7,-0.8,-0.8,-0.8).curveTo(0.5,-0.8,1.3,-1.2).lineTo(2.5,-6.6).lineTo(6.9,-6.6).lineTo(4.2,6.6).closePath();
	this.shape_16.setTransform(120.1,1.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.9,8.6).lineTo(2.3,1.8).lineTo(-3.6,8.6).lineTo(-7.9,8.6).lineTo(-5.3,-4.6).lineTo(-0.9,-4.6).lineTo(-2.3,2.2).lineTo(3.7,-4.6).lineTo(7.9,-4.6).lineTo(5.3,8.6).closePath().moveTo(-1.3,-6).curveTo(-2.3,-6.7,-2.3,-7.9).lineTo(-2.2,-8.7).lineTo(0.6,-8.7).lineTo(0.6,-8.4).curveTo(0.6,-7.4,1.7,-7.4).curveTo(2.4,-7.4,2.7,-7.7).curveTo(3.1,-8,3.2,-8.7).lineTo(6,-8.7).curveTo(5.7,-6.9,4.7,-6.1).curveTo(3.6,-5.3,1.5,-5.3).curveTo(-0.4,-5.4,-1.3,-6).closePath();
	this.shape_17.setTransform(98.825,-0.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.4,6.2).curveTo(-5.9,5.5,-6.7,4.1).curveTo(-7.6,2.7,-7.6,1).curveTo(-7.6,-1.3,-6.5,-3.2).curveTo(-5.4,-4.9,-3.5,-6).curveTo(-1.6,-6.9,0.8,-7).curveTo(2.9,-7,4.4,-6.2).curveTo(5.9,-5.5,6.7,-4.1).curveTo(7.6,-2.7,7.6,-1).curveTo(7.6,1.3,6.5,3.1).curveTo(5.4,4.9,3.5,6).curveTo(1.6,6.9,-0.8,7).curveTo(-2.8,7,-4.4,6.2).closePath().moveTo(-1.4,-2.8).curveTo(-2.2,-2.2,-2.6,-1.3).curveTo(-3,-0.3,-3,0.8).curveTo(-3,1.9,-2.3,2.6).curveTo(-1.6,3.4,-0.4,3.4).curveTo(0.6,3.3,1.4,2.7).curveTo(2.2,2.2,2.6,1.3).curveTo(3.1,0.3,3.1,-0.8).curveTo(3.1,-1.9,2.4,-2.6).curveTo(1.7,-3.3,0.4,-3.3).curveTo(-0.6,-3.3,-1.4,-2.8).closePath();
	this.shape_18.setTransform(83.025,1.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.1,6.6).lineTo(-4.4,-6.6).lineTo(1.5,-6.6).curveTo(4.1,-6.7,5.6,-5.5).curveTo(7.1,-4.3,7.1,-2.3).curveTo(7.1,-0.5,6.2,0.7).curveTo(5.4,2,3.9,2.7).curveTo(2.4,3.4,0.3,3.4).lineTo(-2,3.4).lineTo(-2.6,6.6).closePath().moveTo(-1.3,-0.1).lineTo(0.6,-0.1).curveTo(1.5,-0.1,2,-0.6).curveTo(2.5,-1,2.5,-1.8).curveTo(2.5,-3.2,0.9,-3.2).lineTo(-0.6,-3.2).closePath();
	this.shape_19.setTransform(67.775,1.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.5,6.6).lineTo(-2.6,-3.2).lineTo(-6.4,-3.2).lineTo(-5.8,-6.6).lineTo(6.4,-6.6).lineTo(5.8,-3.2).lineTo(1.8,-3.2).lineTo(-0.1,6.6).closePath();
	this.shape_20.setTransform(55.525,1.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.8,6.2).curveTo(-5.3,5.5,-6.1,4.1).curveTo(-7,2.7,-7,1).curveTo(-7,-1.3,-5.9,-3.1).curveTo(-4.9,-4.9,-2.9,-6).curveTo(-1,-6.9,1.4,-7).curveTo(3.4,-7,4.8,-6.3).curveTo(6.3,-5.5,7,-4.3).lineTo(3.8,-1.8).curveTo(2.9,-3.3,1.2,-3.3).curveTo(0.1,-3.3,-0.7,-2.8).curveTo(-1.6,-2.3,-2,-1.4).curveTo(-2.5,-0.5,-2.4,0.7).curveTo(-2.5,1.9,-1.7,2.6).curveTo(-0.9,3.4,0.3,3.4).curveTo(1.9,3.4,3.2,1.8).lineTo(5.9,4.3).curveTo(4.7,5.8,3.2,6.4).curveTo(1.8,6.9,-0.2,7).curveTo(-2.2,7,-3.8,6.2).closePath();
	this.shape_21.setTransform(41.3,1.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3.6,6.6).lineTo(3.1,4.4).lineTo(-2,4.4).lineTo(-3.3,6.6).lineTo(-8,6.6).lineTo(0.5,-6.6).lineTo(4.9,-6.6).lineTo(8,6.6).closePath().moveTo(-0.1,1.1).lineTo(2.5,1.1).lineTo(1.8,-2.3).closePath();
	this.shape_22.setTransform(24.475,1.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.7,6.6).lineTo(1.7,1.8).lineTo(-2.4,1.8).lineTo(-3.4,6.6).lineTo(-7.9,6.6).lineTo(-5.2,-6.6).lineTo(-0.8,-6.6).lineTo(-1.7,-1.9).lineTo(2.4,-1.9).lineTo(3.4,-6.6).lineTo(7.9,-6.6).lineTo(5.2,6.6).closePath();
	this.shape_23.setTransform(10.025,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol84, new cjs.Rectangle(0,-15.1,372.2,30.2), null);


(lib.Symbol83 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-8.4,7.7).lineTo(-5.3,-7.7).lineTo(2.9,-7.7).curveTo(5.6,-7.7,7,-6.8).curveTo(8.4,-5.8,8.4,-4.1).curveTo(8.4,-2.8,7.7,-1.7).curveTo(6.9,-0.7,5.6,-0.2).curveTo(6.6,0.2,7.2,1).curveTo(7.7,1.8,7.7,2.8).curveTo(7.7,5.2,5.7,6.5).curveTo(3.7,7.7,0.5,7.7).closePath().moveTo(-2.5,4).lineTo(0.8,4).curveTo(1.6,4.1,2.1,3.7).curveTo(2.6,3.3,2.6,2.7).curveTo(2.6,2.2,2.2,1.9).curveTo(1.8,1.7,1.3,1.7).lineTo(-2.1,1.7).closePath().moveTo(-1.4,-1.8).lineTo(1.3,-1.8).curveTo(3,-1.8,3,-3.2).curveTo(3,-3.6,2.6,-3.9).curveTo(2.3,-4.1,1.6,-4.1).lineTo(-0.9,-4.1).closePath();
	this.shape.setTransform(355.575,1.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.1,7.2).curveTo(-6.9,6.3,-7.8,4.7).curveTo(-8.8,3.2,-8.8,1.2).curveTo(-8.8,-1.5,-7.5,-3.6).curveTo(-6.3,-5.7,-4.1,-6.9).curveTo(-1.8,-8,1,-8).curveTo(3.3,-8,5,-7.2).curveTo(6.9,-6.3,7.8,-4.8).curveTo(8.8,-3.2,8.8,-1.2).curveTo(8.8,1.5,7.5,3.6).curveTo(6.3,5.7,4,6.9).curveTo(1.9,8.1,-0.9,8.1).curveTo(-3.3,8.1,-5.1,7.2).closePath().moveTo(-1.6,-3.2).curveTo(-2.6,-2.6,-3.1,-1.5).curveTo(-3.5,-0.4,-3.5,0.9).curveTo(-3.5,2.2,-2.7,3).curveTo(-1.9,3.9,-0.5,3.9).curveTo(0.7,3.8,1.7,3.2).curveTo(2.5,2.6,3,1.5).curveTo(3.5,0.4,3.5,-0.8).curveTo(3.5,-2.2,2.7,-3.1).curveTo(1.9,-3.8,0.5,-3.9).curveTo(-0.7,-3.9,-1.6,-3.2).closePath();
	this.shape_1.setTransform(338.25,1.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.4,7.2).curveTo(-6.1,6.3,-7.2,4.7).curveTo(-8.1,3.2,-8.1,1.2).curveTo(-8.1,-1.5,-6.8,-3.6).curveTo(-5.7,-5.7,-3.4,-6.9).curveTo(-1.2,-8,1.6,-8).curveTo(3.8,-8.1,5.5,-7.2).curveTo(7.3,-6.5,8.1,-5).lineTo(4.3,-2.1).curveTo(3.4,-3.9,1.3,-3.9).curveTo(0,-3.8,-0.9,-3.3).curveTo(-1.8,-2.6,-2.3,-1.6).curveTo(-2.9,-0.5,-2.9,0.9).curveTo(-2.9,2.2,-2,3).curveTo(-1.2,3.9,0.3,3.9).curveTo(2.3,3.8,3.7,2).lineTo(6.8,5).curveTo(5.5,6.6,3.7,7.4).curveTo(2,8,-0.2,8.1).curveTo(-2.5,8.1,-4.4,7.2).closePath();
	this.shape_2.setTransform(321.1,1.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.1,7.2).curveTo(-6.9,6.3,-7.8,4.7).curveTo(-8.8,3.2,-8.8,1.2).curveTo(-8.8,-1.5,-7.5,-3.6).curveTo(-6.3,-5.7,-4.1,-6.9).curveTo(-1.8,-8,0.9,-8).curveTo(3.3,-8,5.1,-7.2).curveTo(6.8,-6.3,7.8,-4.8).curveTo(8.8,-3.2,8.8,-1.2).curveTo(8.8,1.5,7.5,3.6).curveTo(6.3,5.7,4,6.9).curveTo(1.9,8.1,-0.9,8.1).curveTo(-3.3,8.1,-5.1,7.2).closePath().moveTo(-1.7,-3.2).curveTo(-2.6,-2.6,-3,-1.5).curveTo(-3.6,-0.4,-3.6,0.9).curveTo(-3.5,2.2,-2.7,3).curveTo(-1.9,3.9,-0.5,3.9).curveTo(0.7,3.8,1.7,3.2).curveTo(2.5,2.6,3,1.5).curveTo(3.5,0.4,3.5,-0.8).curveTo(3.5,-2.2,2.7,-3.1).curveTo(1.9,-3.8,0.5,-3.9).curveTo(-0.7,-3.9,-1.7,-3.2).closePath();
	this.shape_3.setTransform(303.25,1.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-8.2,7.7).lineTo(-5.1,-7.7).lineTo(1.7,-7.7).curveTo(4.8,-7.7,6.5,-6.3).curveTo(8.2,-5,8.2,-2.6).curveTo(8.2,-0.6,7.2,0.8).curveTo(6.3,2.3,4.5,3.1).curveTo(2.7,3.9,0.4,3.9).lineTo(-2.2,3.9).lineTo(-3,7.7).closePath().moveTo(-1.4,-0.1).lineTo(0.6,-0.1).curveTo(1.7,-0.1,2.4,-0.7).curveTo(2.9,-1.1,2.9,-2.2).curveTo(2.9,-3.7,1,-3.7).lineTo(-0.8,-3.7).closePath();
	this.shape_4.setTransform(285.55,1.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.8,7.7).lineTo(3,-3.7).lineTo(-1.6,-3.7).lineTo(-3.9,7.7).lineTo(-9,7.7).lineTo(-5.9,-7.7).lineTo(9,-7.7).lineTo(5.9,7.7).closePath();
	this.shape_5.setTransform(268.85,1.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(4.1,7.7).lineTo(3.6,5).lineTo(-2.2,5).lineTo(-3.8,7.7).lineTo(-9.3,7.7).lineTo(0.5,-7.7).lineTo(5.6,-7.7).lineTo(9.3,7.7).closePath().moveTo(-0.1,1.3).lineTo(2.9,1.3).lineTo(2.1,-2.6).closePath();
	this.shape_6.setTransform(249.125,1.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.8,6.7).lineTo(-5.5,3.1).curveTo(-4.5,3.6,-3.4,3.8).curveTo(-2.3,4,-1.3,4).curveTo(0.1,4,1,3.6).curveTo(1.8,3.2,1.9,2.5).curveTo(1.9,1.7,0.5,1.7).lineTo(-3.6,1.7).lineTo(-2.9,-2).lineTo(0.8,-2).curveTo(1.5,-2,2,-2.3).curveTo(2.3,-2.6,2.3,-3.1).curveTo(2.4,-3.6,1.8,-3.8).curveTo(1.3,-4.1,0.3,-4.1).curveTo(-0.7,-4.1,-1.7,-3.9).curveTo(-2.8,-3.6,-3.9,-3.1).lineTo(-4.7,-7).curveTo(-1.8,-8.1,1.1,-8.1).curveTo(2.9,-8.1,4.5,-7.6).curveTo(6,-7.1,6.9,-6.2).curveTo(7.7,-5.3,7.7,-4).curveTo(7.7,-2.9,7,-1.9).curveTo(6.2,-0.8,4.9,-0.3).curveTo(5.9,0.2,6.5,1).curveTo(7,1.9,7,2.9).curveTo(7,4.5,5.9,5.7).curveTo(4.7,6.9,2.9,7.5).curveTo(0.9,8.1,-1.4,8.1).curveTo(-4.8,8.1,-7.8,6.7).closePath();
	this.shape_7.setTransform(233.2,1.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3,7.7).lineTo(4.4,0.7).lineTo(0,6.3).lineTo(-2.2,6.3).lineTo(-4.6,0.8).lineTo(-6,7.7).lineTo(-10.8,7.7).lineTo(-7.6,-7.7).lineTo(-3.5,-7.7).lineTo(-0.1,0.5).lineTo(6.3,-7.7).lineTo(10.8,-7.7).lineTo(7.8,7.7).closePath();
	this.shape_8.setTransform(209.3,1.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-7.8,7.7).lineTo(-4.7,-7.7).lineTo(7.8,-7.7).lineTo(7,-3.8).lineTo(-0.4,-3.8).lineTo(-0.7,-2).lineTo(5.7,-2).lineTo(5,1.8).lineTo(-1.6,1.8).lineTo(-1.9,3.8).lineTo(5.8,3.8).lineTo(5,7.7).closePath();
	this.shape_9.setTransform(191.45,1.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6.9,7.7).lineTo(-4.7,-3.7).lineTo(-8.6,-3.7).lineTo(-7.8,-7.7).lineTo(1.2,-7.7).lineTo(0.3,-3).lineTo(3.5,-3).curveTo(5.9,-3,7.3,-1.9).curveTo(8.6,-1,8.6,1.1).curveTo(8.6,3.1,7.6,4.7).curveTo(6.6,6.1,4.8,6.9).curveTo(3,7.7,0.7,7.7).closePath().moveTo(-1.1,4).lineTo(1.1,4).curveTo(2,4,2.6,3.5).curveTo(3.3,2.9,3.3,1.9).curveTo(3.3,0.6,1.7,0.6).lineTo(-0.4,0.6).closePath();
	this.shape_10.setTransform(174.475,1.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-8.2,7.7).lineTo(-5.1,-7.7).lineTo(8.2,-7.7).lineTo(7.4,-3.8).lineTo(-0.8,-3.8).lineTo(-1.2,-2).lineTo(2.5,-2).curveTo(4.9,-2,6.2,-0.9).curveTo(7.5,0.2,7.5,2.2).curveTo(7.5,3.9,6.6,5.1).curveTo(5.7,6.3,3.9,7.1).curveTo(2.2,7.7,-0.1,7.7).closePath().moveTo(-2.4,4).lineTo(0.3,4).curveTo(1.2,4,1.7,3.7).curveTo(2.2,3.2,2.2,2.6).curveTo(2.2,1.6,0.8,1.6).lineTo(-1.9,1.6).closePath();
	this.shape_11.setTransform(156.275,1.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.1,7.2).curveTo(-6.9,6.3,-7.8,4.7).curveTo(-8.8,3.2,-8.8,1.2).curveTo(-8.8,-1.5,-7.5,-3.6).curveTo(-6.3,-5.7,-4.1,-6.9).curveTo(-1.8,-8,0.9,-8).curveTo(3.3,-8,5.1,-7.2).curveTo(6.8,-6.3,7.8,-4.8).curveTo(8.8,-3.2,8.8,-1.2).curveTo(8.8,1.5,7.5,3.6).curveTo(6.3,5.7,4,6.9).curveTo(1.9,8.1,-0.9,8.1).curveTo(-3.3,8.1,-5.1,7.2).closePath().moveTo(-1.7,-3.2).curveTo(-2.6,-2.6,-3,-1.5).curveTo(-3.6,-0.4,-3.6,0.9).curveTo(-3.5,2.2,-2.7,3).curveTo(-1.9,3.9,-0.5,3.9).curveTo(0.7,3.8,1.7,3.2).curveTo(2.5,2.6,3,1.5).curveTo(3.5,0.4,3.5,-0.8).curveTo(3.5,-2.2,2.7,-3.1).curveTo(1.9,-3.8,0.5,-3.9).curveTo(-0.7,-3.9,-1.7,-3.2).closePath();
	this.shape_12.setTransform(139,1.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1,10).lineTo(2.7,2).lineTo(-4.2,10).lineTo(-9.2,10).lineTo(-6.1,-5.4).lineTo(-1,-5.4).lineTo(-2.6,2.6).lineTo(4.3,-5.4).lineTo(9.2,-5.4).lineTo(6.1,10).closePath().moveTo(-1.5,-6.9).curveTo(-2.6,-7.7,-2.6,-9.2).lineTo(-2.5,-10).lineTo(0.7,-10).lineTo(0.7,-9.7).curveTo(0.7,-8.6,2,-8.6).curveTo(2.7,-8.6,3.2,-8.9).curveTo(3.6,-9.2,3.7,-10).lineTo(7,-10).curveTo(6.7,-8,5.4,-7.1).curveTo(4.2,-6.2,1.8,-6.2).curveTo(-0.4,-6.2,-1.5,-6.9).closePath();
	this.shape_13.setTransform(114.125,-0.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.1,7.2).curveTo(-6.8,6.3,-7.8,4.7).curveTo(-8.8,3.2,-8.8,1.2).curveTo(-8.8,-1.5,-7.5,-3.6).curveTo(-6.3,-5.7,-4,-6.9).curveTo(-1.9,-8,0.9,-8).curveTo(3.3,-8,5.1,-7.2).curveTo(6.9,-6.3,7.8,-4.8).curveTo(8.8,-3.2,8.8,-1.2).curveTo(8.8,1.5,7.5,3.6).curveTo(6.2,5.7,4.1,6.9).curveTo(1.8,8.1,-1,8.1).curveTo(-3.3,8.1,-5.1,7.2).closePath().moveTo(-1.7,-3.2).curveTo(-2.5,-2.6,-3,-1.5).curveTo(-3.6,-0.4,-3.6,0.9).curveTo(-3.6,2.2,-2.7,3).curveTo(-1.9,3.9,-0.5,3.9).curveTo(0.7,3.8,1.7,3.2).curveTo(2.6,2.6,3,1.5).curveTo(3.5,0.4,3.5,-0.8).curveTo(3.5,-2.2,2.7,-3.1).curveTo(1.9,-3.8,0.5,-3.9).curveTo(-0.7,-3.9,-1.7,-3.2).closePath();
	this.shape_14.setTransform(95.9,1.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-8.2,7.7).lineTo(-5.1,-7.7).lineTo(1.7,-7.7).curveTo(4.8,-7.7,6.5,-6.3).curveTo(8.2,-5,8.2,-2.6).curveTo(8.2,-0.6,7.2,0.8).curveTo(6.3,2.3,4.5,3.1).curveTo(2.8,3.9,0.4,3.9).lineTo(-2.2,3.9).lineTo(-3,7.7).closePath().moveTo(-1.4,-0.1).lineTo(0.6,-0.1).curveTo(1.8,-0.1,2.3,-0.7).curveTo(2.9,-1.1,2.9,-2.2).curveTo(2.9,-3.7,1,-3.7).lineTo(-0.7,-3.7).closePath();
	this.shape_15.setTransform(78.2,1.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.2,7.7).lineTo(-3,-3.7).lineTo(-7.5,-3.7).lineTo(-6.7,-7.7).lineTo(7.5,-7.7).lineTo(6.7,-3.7).lineTo(2.1,-3.7).lineTo(-0.2,7.7).closePath();
	this.shape_16.setTransform(64,1.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.3,7.2).curveTo(-6.1,6.3,-7.1,4.7).curveTo(-8.1,3.2,-8.1,1.2).curveTo(-8.1,-1.5,-6.9,-3.6).curveTo(-5.7,-5.7,-3.4,-6.9).curveTo(-1.2,-8,1.6,-8).curveTo(3.9,-8.1,5.5,-7.2).curveTo(7.3,-6.5,8.1,-5).lineTo(4.4,-2.1).curveTo(3.3,-3.9,1.3,-3.9).curveTo(0.1,-3.8,-0.8,-3.3).curveTo(-1.8,-2.6,-2.4,-1.6).curveTo(-2.9,-0.5,-2.9,0.9).curveTo(-2.9,2.2,-2,3).curveTo(-1.1,3.9,0.3,3.9).curveTo(2.2,3.8,3.7,2).lineTo(6.8,5).curveTo(5.4,6.6,3.7,7.4).curveTo(2.1,8,-0.2,8.1).curveTo(-2.6,8.1,-4.3,7.2).closePath();
	this.shape_17.setTransform(47.55,1.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FFFFFF").beginStroke().moveTo(4.1,7.7).lineTo(3.6,5).lineTo(-2.2,5).lineTo(-3.8,7.7).lineTo(-9.3,7.7).lineTo(0.5,-7.7).lineTo(5.6,-7.7).lineTo(9.3,7.7).closePath().moveTo(-0.1,1.3).lineTo(2.9,1.3).lineTo(2.1,-2.6).closePath();
	this.shape_18.setTransform(28.025,1.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#FFFFFF").beginStroke().moveTo(0.9,7.7).lineTo(2,2).lineTo(-2.8,2).lineTo(-3.9,7.7).lineTo(-9.1,7.7).lineTo(-6,-7.7).lineTo(-0.9,-7.7).lineTo(-1.9,-2.3).lineTo(2.8,-2.3).lineTo(3.9,-7.7).lineTo(9.1,-7.7).lineTo(6.1,7.7).closePath();
	this.shape_19.setTransform(11.275,1.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol83, new cjs.Rectangle(0,-17.1,366.4,34.3), null);


(lib.Symbol82 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.6,9.6).lineTo(-4.3,7.6).curveTo(-8,7.2,-9.9,5.6).curveTo(-11.8,3.9,-11.8,1.1).curveTo(-11.9,-1.4,-10.7,-3.3).curveTo(-9.4,-5.3,-7,-6.4).curveTo(-4.6,-7.6,-1.1,-7.9).lineTo(-0.8,-9.6).lineTo(4.6,-9.6).lineTo(4.3,-7.8).curveTo(8,-7.4,9.9,-5.8).curveTo(11.9,-4.1,11.8,-1.2).curveTo(11.8,1.4,10.6,3.3).curveTo(9.3,5.2,6.9,6.4).curveTo(4.4,7.5,1.1,7.7).lineTo(0.8,9.6).closePath().moveTo(2,3.1).curveTo(4.2,2.9,5.1,2).curveTo(6.1,1.1,6.1,-0.4).curveTo(6.1,-1.7,5.4,-2.4).curveTo(4.8,-3.1,3.4,-3.3).closePath().moveTo(-5.2,-2.1).curveTo(-6,-1.3,-6.1,0.3).curveTo(-6,1.5,-5.4,2.2).curveTo(-4.8,2.8,-3.4,3).lineTo(-2,-3.3).curveTo(-4.3,-3,-5.2,-2.1).closePath();
	this.shape.setTransform(324.05,1.775);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.2,8.8).lineTo(3.1,-0.3).lineTo(-4.8,8.8).lineTo(-10.4,8.8).lineTo(-6.9,-8.8).lineTo(-1.2,-8.8).lineTo(-3,0.3).lineTo(4.9,-8.8).lineTo(10.5,-8.8).lineTo(6.9,8.8).closePath();
	this.shape_1.setTransform(301.4,1.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-9.3,8.8).lineTo(-5.8,-8.8).lineTo(2,-8.8).curveTo(5.4,-8.7,7.4,-7.2).curveTo(9.3,-5.7,9.3,-2.9).curveTo(9.3,-0.8,8.2,1).curveTo(7.1,2.6,5.1,3.6).curveTo(3.1,4.5,0.5,4.5).lineTo(-2.6,4.5).lineTo(-3.4,8.8).closePath().moveTo(-1.7,-0.1).lineTo(0.7,-0.1).curveTo(2,-0.1,2.6,-0.7).curveTo(3.3,-1.3,3.3,-2.4).curveTo(3.3,-4.2,1.1,-4.2).lineTo(-0.9,-4.2).closePath();
	this.shape_2.setTransform(281.575,1.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(4.7,8.8).lineTo(4.1,5.7).lineTo(-2.5,5.7).lineTo(-4.3,8.8).lineTo(-10.5,8.8).lineTo(0.6,-8.8).lineTo(6.4,-8.8).lineTo(10.5,8.8).closePath().moveTo(-0.2,1.5).lineTo(3.2,1.5).lineTo(2.4,-3).closePath();
	this.shape_3.setTransform(260.2,1.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6,8.8).lineTo(-3.4,-4.2).lineTo(-8.5,-4.2).lineTo(-7.6,-8.8).lineTo(8.5,-8.8).lineTo(7.6,-4.2).lineTo(2.4,-4.2).lineTo(-0.1,8.8).closePath();
	this.shape_4.setTransform(244.2,1.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.2,11.4).lineTo(3.1,2.3).lineTo(-4.8,11.4).lineTo(-10.4,11.4).lineTo(-6.9,-6.1).lineTo(-1.1,-6.1).lineTo(-3,3).lineTo(4.9,-6.1).lineTo(10.5,-6.1).lineTo(6.9,11.4).closePath().moveTo(-1.8,-7.8).curveTo(-3,-8.7,-2.9,-10.4).lineTo(-2.9,-11.4).lineTo(0.8,-11.4).lineTo(0.7,-11).curveTo(0.7,-9.7,2.3,-9.7).curveTo(3.1,-9.7,3.6,-10.1).curveTo(4,-10.5,4.2,-11.4).lineTo(7.9,-11.4).curveTo(7.6,-9,6.1,-8).curveTo(4.7,-7,2,-7).curveTo(-0.5,-7,-1.8,-7.8).closePath();
	this.shape_5.setTransform(216.7,-0.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.8,8.1).curveTo(-7.7,7.2,-8.8,5.4).curveTo(-9.9,3.6,-9.9,1.3).curveTo(-9.9,-1.7,-8.6,-4.1).curveTo(-7.2,-6.5,-4.6,-7.9).curveTo(-2.1,-9.2,1.1,-9.1).curveTo(3.8,-9.2,5.7,-8.1).curveTo(7.8,-7.2,8.9,-5.4).curveTo(9.9,-3.6,10,-1.3).curveTo(9.9,1.7,8.5,4.1).curveTo(7.1,6.5,4.6,7.8).curveTo(2.1,9.1,-1,9.1).curveTo(-3.7,9.2,-5.8,8.1).closePath().moveTo(-1.8,-3.6).curveTo(-2.9,-2.9,-3.4,-1.7).curveTo(-4,-0.5,-4,1).curveTo(-4,2.5,-3.1,3.5).curveTo(-2.2,4.4,-0.6,4.4).curveTo(0.8,4.4,1.9,3.7).curveTo(2.9,2.9,3.5,1.7).curveTo(4,0.4,4,-1).curveTo(4,-2.5,3.1,-3.5).curveTo(2.2,-4.4,0.5,-4.4).curveTo(-0.9,-4.4,-1.8,-3.6).closePath();
	this.shape_6.setTransform(195.95,1.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-9.5,8.8).lineTo(-6,-8.8).lineTo(3.3,-8.8).curveTo(6.3,-8.7,7.9,-7.7).curveTo(9.5,-6.5,9.5,-4.6).curveTo(9.5,-3.1,8.7,-2).curveTo(7.9,-0.9,6.4,-0.2).curveTo(7.5,0.2,8.1,1.1).curveTo(8.7,2,8.7,3.1).curveTo(8.7,6,6.5,7.3).curveTo(4.2,8.8,0.6,8.8).closePath().moveTo(-2.9,4.6).lineTo(0.9,4.6).curveTo(1.8,4.6,2.4,4.2).curveTo(2.9,3.8,2.9,3).curveTo(2.9,2.5,2.5,2.1).curveTo(2.1,1.9,1.4,1.9).lineTo(-2.3,1.9).closePath().moveTo(-1.6,-2).lineTo(1.4,-2).curveTo(3.4,-2,3.4,-3.6).curveTo(3.4,-4.1,3,-4.4).curveTo(2.6,-4.6,1.8,-4.6).lineTo(-1.1,-4.6).closePath();
	this.shape_7.setTransform(175.275,1.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5,8.1).curveTo(-7,7.2,-8.1,5.4).curveTo(-9.2,3.6,-9.2,1.3).curveTo(-9.2,-1.7,-7.8,-4.1).curveTo(-6.4,-6.5,-3.9,-7.8).curveTo(-1.4,-9.1,1.9,-9.1).curveTo(4.4,-9.2,6.4,-8.2).curveTo(8.3,-7.4,9.2,-5.6).lineTo(4.9,-2.3).curveTo(3.8,-4.4,1.4,-4.4).curveTo(0.1,-4.3,-1,-3.7).curveTo(-2,-3,-2.6,-1.8).curveTo(-3.3,-0.6,-3.2,1).curveTo(-3.3,2.5,-2.2,3.5).curveTo(-1.3,4.4,0.4,4.4).curveTo(2.6,4.4,4.2,2.4).lineTo(7.7,5.6).curveTo(6.2,7.6,4.2,8.3).curveTo(2.4,9.2,-0.3,9.1).curveTo(-2.9,9.2,-5,8.1).closePath();
	this.shape_8.setTransform(157.05,1.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.2,11.4).lineTo(3.1,2.3).lineTo(-4.8,11.4).lineTo(-10.4,11.4).lineTo(-6.9,-6.1).lineTo(-1.2,-6.1).lineTo(-3,3).lineTo(4.9,-6.1).lineTo(10.4,-6.1).lineTo(6.9,11.4).closePath().moveTo(-1.8,-7.8).curveTo(-2.9,-8.7,-3,-10.4).lineTo(-2.9,-11.4).lineTo(0.8,-11.4).lineTo(0.7,-11).curveTo(0.7,-9.7,2.3,-9.7).curveTo(3.1,-9.7,3.6,-10.1).curveTo(4,-10.5,4.1,-11.4).lineTo(7.9,-11.4).curveTo(7.6,-9,6.1,-8).curveTo(4.7,-7,2,-7).curveTo(-0.5,-7,-1.8,-7.8).closePath();
	this.shape_9.setTransform(129.5,-0.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5.8,8.1).curveTo(-7.7,7.2,-8.8,5.4).curveTo(-10,3.6,-9.9,1.3).curveTo(-10,-1.7,-8.6,-4.1).curveTo(-7.2,-6.5,-4.6,-7.9).curveTo(-2.1,-9.2,1.1,-9.1).curveTo(3.8,-9.2,5.7,-8.1).curveTo(7.8,-7.2,8.9,-5.4).curveTo(9.9,-3.6,10,-1.3).curveTo(9.9,1.7,8.5,4.1).curveTo(7.1,6.5,4.6,7.8).curveTo(2.1,9.1,-1,9.1).curveTo(-3.7,9.2,-5.8,8.1).closePath().moveTo(-1.8,-3.6).curveTo(-2.9,-2.9,-3.5,-1.7).curveTo(-4,-0.5,-4,1).curveTo(-4,2.5,-3.1,3.5).curveTo(-2.1,4.4,-0.6,4.4).curveTo(0.8,4.4,1.9,3.7).curveTo(2.9,2.9,3.5,1.7).curveTo(4,0.4,4,-1).curveTo(4,-2.5,3.1,-3.5).curveTo(2.2,-4.4,0.5,-4.4).curveTo(-0.8,-4.4,-1.8,-3.6).closePath();
	this.shape_10.setTransform(108.75,1.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-9.3,8.8).lineTo(-5.8,-8.8).lineTo(2,-8.8).curveTo(5.4,-8.7,7.4,-7.2).curveTo(9.3,-5.7,9.3,-2.9).curveTo(9.3,-0.8,8.2,1).curveTo(7.1,2.6,5.1,3.6).curveTo(3.1,4.5,0.5,4.5).lineTo(-2.6,4.5).lineTo(-3.4,8.8).closePath().moveTo(-1.7,-0.1).lineTo(0.7,-0.1).curveTo(2,-0.1,2.6,-0.7).curveTo(3.3,-1.3,3.3,-2.4).curveTo(3.3,-4.2,1.1,-4.2).lineTo(-0.9,-4.2).closePath();
	this.shape_11.setTransform(88.625,1.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-6,8.8).lineTo(-3.4,-4.2).lineTo(-8.5,-4.2).lineTo(-7.5,-8.8).lineTo(8.5,-8.8).lineTo(7.6,-4.2).lineTo(2.4,-4.2).lineTo(-0.1,8.8).closePath();
	this.shape_12.setTransform(72.5,1.75);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-5,8.1).curveTo(-7,7.2,-8.1,5.4).curveTo(-9.2,3.6,-9.2,1.3).curveTo(-9.2,-1.7,-7.8,-4.1).curveTo(-6.4,-6.5,-3.9,-7.8).curveTo(-1.4,-9.1,1.9,-9.1).curveTo(4.4,-9.2,6.4,-8.2).curveTo(8.3,-7.4,9.2,-5.6).lineTo(4.9,-2.3).curveTo(3.8,-4.4,1.4,-4.4).curveTo(0.1,-4.3,-0.9,-3.7).curveTo(-2.1,-3,-2.6,-1.8).curveTo(-3.3,-0.6,-3.3,1).curveTo(-3.3,2.5,-2.3,3.5).curveTo(-1.3,4.4,0.3,4.4).curveTo(2.6,4.4,4.2,2.4).lineTo(7.7,5.6).curveTo(6.2,7.6,4.2,8.3).curveTo(2.3,9.2,-0.3,9.1).curveTo(-2.9,9.2,-5,8.1).closePath();
	this.shape_13.setTransform(53.75,1.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(4.7,8.8).lineTo(4.1,5.7).lineTo(-2.5,5.7).lineTo(-4.3,8.8).lineTo(-10.5,8.8).lineTo(0.6,-8.8).lineTo(6.4,-8.8).lineTo(10.5,8.8).closePath().moveTo(-0.2,1.5).lineTo(3.2,1.5).lineTo(2.4,-3).closePath();
	this.shape_14.setTransform(31.6,1.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1,8.8).lineTo(2.3,2.3).lineTo(-3.2,2.3).lineTo(-4.4,8.8).lineTo(-10.4,8.8).lineTo(-6.9,-8.8).lineTo(-1,-8.8).lineTo(-2.2,-2.6).lineTo(3.2,-2.6).lineTo(4.5,-8.8).lineTo(10.4,-8.8).lineTo(6.9,8.8).closePath();
	this.shape_15.setTransform(12.525,1.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol82, new cjs.Rectangle(0,-19.2,338.3,38.5), null);


(lib.Symbol81 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#CF0B0C").beginStroke().moveTo(-8.9,8.8).lineTo(-5.4,-8.8).lineTo(8.9,-8.8).lineTo(8,-4.3).lineTo(-0.5,-4.3).lineTo(-0.8,-2.3).lineTo(6.6,-2.3).lineTo(5.7,2).lineTo(-1.7,2).lineTo(-2.2,4.3).lineTo(6.6,4.3).lineTo(5.7,8.8).closePath();
	this.shape.setTransform(244.675,1.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#CF0B0C").beginStroke().moveTo(-5.7,8.1).curveTo(-7.8,7.2,-8.9,5.4).curveTo(-10,3.6,-9.9,1.3).curveTo(-9.9,-1.7,-8.5,-4.1).curveTo(-7.1,-6.5,-4.6,-7.9).curveTo(-2.1,-9.2,1.1,-9.1).curveTo(3.8,-9.2,5.7,-8.1).curveTo(7.8,-7.2,8.9,-5.4).curveTo(10,-3.6,9.9,-1.3).curveTo(10,1.7,8.6,4.1).curveTo(7.2,6.5,4.6,7.8).curveTo(2.1,9.1,-1,9.1).curveTo(-3.8,9.2,-5.7,8.1).closePath().moveTo(-1.9,-3.6).curveTo(-2.9,-2.9,-3.5,-1.7).curveTo(-4,-0.5,-4,1).curveTo(-4,2.5,-3.1,3.5).curveTo(-2.1,4.4,-0.6,4.4).curveTo(0.8,4.4,1.8,3.7).curveTo(2.9,2.9,3.5,1.7).curveTo(4,0.4,4,-1).curveTo(4,-2.5,3.1,-3.5).curveTo(2.1,-4.4,0.6,-4.4).curveTo(-0.8,-4.4,-1.9,-3.6).closePath();
	this.shape_1.setTransform(225.5,1.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#CF0B0C").beginStroke().moveTo(1,8.8).lineTo(2.3,2.3).lineTo(-3.2,2.3).lineTo(-4.4,8.8).lineTo(-10.4,8.8).lineTo(-6.9,-8.8).lineTo(-1,-8.8).lineTo(-2.2,-2.6).lineTo(3.2,-2.6).lineTo(4.5,-8.8).lineTo(10.4,-8.8).lineTo(6.9,8.8).closePath();
	this.shape_2.setTransform(204.775,1.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#CF0B0C").beginStroke().moveTo(-0.2,8.8).lineTo(0.8,3.3).curveTo(-0.7,3.6,-2,3.7).curveTo(-5.5,3.6,-7.2,2.2).curveTo(-9,0.8,-9,-1.8).curveTo(-9.1,-2.7,-8.8,-3.7).lineTo(-7.9,-8.8).lineTo(-2,-8.8).lineTo(-3,-3.9).lineTo(-3.2,-2.7).curveTo(-3.1,-1.8,-2.7,-1.4).curveTo(-2.2,-1,-1.1,-1).curveTo(0.6,-1,1.8,-1.6).lineTo(3.3,-8.8).lineTo(9,-8.8).lineTo(5.5,8.8).closePath();
	this.shape_3.setTransform(185.8,1.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#CF0B0C").beginStroke().moveTo(1.2,8.8).lineTo(3.1,-0.3).lineTo(-4.8,8.8).lineTo(-10.4,8.8).lineTo(-6.9,-8.8).lineTo(-1.2,-8.8).lineTo(-3,0.3).lineTo(4.8,-8.8).lineTo(10.4,-8.8).lineTo(6.9,8.8).closePath();
	this.shape_4.setTransform(165.25,1.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#CF0B0C").beginStroke().moveTo(-10.9,8.6).lineTo(-9.7,3.9).lineTo(-9,3.9).curveTo(-8.2,3.9,-7.6,3.4).curveTo(-7.1,2.8,-6.5,1.5).curveTo(-6,0.2,-5.5,-2.1).lineTo(-3.9,-8.9).lineTo(10.9,-8.9).lineTo(7.4,8.6).lineTo(1.6,8.6).lineTo(4.2,-4.4).lineTo(0.2,-4.4).lineTo(-0.6,-0.9).curveTo(-1.4,2.9,-2.5,5).curveTo(-3.5,7.1,-4.9,8).curveTo(-6.3,8.9,-8.5,8.9).curveTo(-9.9,8.9,-10.9,8.6).closePath();
	this.shape_5.setTransform(144.3,1.925);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#CF0B0C").beginStroke().moveTo(-5.9,8.8).lineTo(-3.4,-4.2).lineTo(-8.5,-4.2).lineTo(-7.5,-8.8).lineTo(8.5,-8.8).lineTo(7.6,-4.2).lineTo(2.4,-4.2).lineTo(-0.2,8.8).closePath();
	this.shape_6.setTransform(127.7,1.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#CF0B0C").beginStroke().moveTo(-5.8,8.1).curveTo(-7.8,7.2,-8.8,5.4).curveTo(-10,3.6,-10,1.3).curveTo(-10,-1.7,-8.5,-4.1).curveTo(-7.1,-6.5,-4.6,-7.9).curveTo(-2.1,-9.2,1.1,-9.1).curveTo(3.7,-9.2,5.8,-8.1).curveTo(7.8,-7.2,8.8,-5.4).curveTo(9.9,-3.6,9.9,-1.3).curveTo(9.9,1.7,8.6,4.1).curveTo(7.2,6.5,4.6,7.8).curveTo(2.1,9.1,-1.1,9.1).curveTo(-3.8,9.2,-5.8,8.1).closePath().moveTo(-1.9,-3.6).curveTo(-2.9,-2.9,-3.4,-1.7).curveTo(-4,-0.5,-4,1).curveTo(-4,2.5,-3.1,3.5).curveTo(-2.1,4.4,-0.5,4.4).curveTo(0.9,4.4,1.8,3.7).curveTo(2.9,2.9,3.4,1.7).curveTo(4,0.4,4,-1).curveTo(4,-2.5,3.1,-3.5).curveTo(2.2,-4.4,0.5,-4.4).curveTo(-0.8,-4.4,-1.9,-3.6).closePath();
	this.shape_7.setTransform(107.45,1.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#000000").beginStroke().moveTo(-5,8.1).curveTo(-7,7.2,-8.1,5.4).curveTo(-9.2,3.6,-9.2,1.3).curveTo(-9.2,-1.7,-7.8,-4.1).curveTo(-6.4,-6.5,-3.8,-7.8).curveTo(-1.4,-9.1,1.9,-9.1).curveTo(4.4,-9.2,6.4,-8.2).curveTo(8.2,-7.4,9.2,-5.6).lineTo(4.9,-2.3).curveTo(3.8,-4.4,1.4,-4.4).curveTo(0.1,-4.3,-0.9,-3.7).curveTo(-2.1,-3,-2.6,-1.8).curveTo(-3.3,-0.6,-3.3,1).curveTo(-3.2,2.5,-2.3,3.5).curveTo(-1.3,4.4,0.3,4.4).curveTo(2.5,4.4,4.3,2.4).lineTo(7.7,5.6).curveTo(6.2,7.6,4.3,8.3).curveTo(2.3,9.2,-0.2,9.1).curveTo(-2.9,9.2,-5,8.1).closePath();
	this.shape_8.setTransform(80.4,1.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#000000").beginStroke().moveTo(4.7,8.8).lineTo(4.1,5.7).lineTo(-2.5,5.7).lineTo(-4.3,8.8).lineTo(-10.5,8.8).lineTo(0.6,-8.8).lineTo(6.4,-8.8).lineTo(10.5,8.8).closePath().moveTo(-0.1,1.5).lineTo(3.2,1.5).lineTo(2.4,-3).closePath();
	this.shape_9.setTransform(58.25,1.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#000000").beginStroke().moveTo(1,8.8).lineTo(2.3,2.3).lineTo(-3.2,2.3).lineTo(-4.4,8.8).lineTo(-10.4,8.8).lineTo(-6.9,-8.8).lineTo(-1,-8.8).lineTo(-2.2,-2.6).lineTo(3.2,-2.6).lineTo(4.5,-8.8).lineTo(10.4,-8.8).lineTo(6.9,8.8).closePath();
	this.shape_10.setTransform(39.175,1.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#000000").beginStroke().moveTo(-10.4,8.2).lineTo(-8.6,4.1).curveTo(-7.7,4.3,-7.1,4.3).curveTo(-6.3,4.3,-5.6,4).curveTo(-5,3.7,-4.4,3).lineTo(-8.6,-9).lineTo(-2.5,-9).lineTo(-0.5,-1.7).lineTo(4.6,-9).lineTo(10.4,-9).lineTo(0.7,4.4).curveTo(-0.9,6.7,-2.9,7.8).curveTo(-4.9,9,-7,9).curveTo(-8.7,9,-10.4,8.2).closePath();
	this.shape_11.setTransform(12.775,1.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol81, new cjs.Rectangle(0,-19.2,254.8,38.5), null);


(lib.Symbol80 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#CF0B0C").beginStroke().moveTo(-3.9,8.1).curveTo(-4.8,7.3,-4.8,6.1).curveTo(-4.8,4.7,-3.8,3.8).curveTo(-2.9,2.9,-1.3,2.9).curveTo(0.1,2.9,0.9,3.7).curveTo(1.8,4.5,1.8,5.6).curveTo(1.8,7,0.8,7.9).curveTo(-0.2,8.9,-1.7,8.9).curveTo(-3,8.9,-3.9,8.1).closePath().moveTo(-2.9,1.9).lineTo(-2,-8.9).lineTo(4.8,-8.9).lineTo(1.6,1.9).closePath();
	this.shape.setTransform(198.25,1.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#CF0B0C").beginStroke().moveTo(-8.9,8.8).lineTo(-5.4,-8.8).lineTo(8.9,-8.8).lineTo(8,-4.3).lineTo(-0.5,-4.3).lineTo(-0.8,-2.3).lineTo(6.6,-2.3).lineTo(5.7,2).lineTo(-1.7,2).lineTo(-2.2,4.3).lineTo(6.6,4.3).lineTo(5.7,8.8).closePath();
	this.shape_1.setTransform(185.725,1.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#CF0B0C").beginStroke().moveTo(1.1,8.8).lineTo(3,-0.3).lineTo(-4.8,8.8).lineTo(-10.5,8.8).lineTo(-7,-8.8).lineTo(-1.1,-8.8).lineTo(-3,0.3).lineTo(4.8,-8.8).lineTo(10.4,-8.8).lineTo(7,8.8).closePath();
	this.shape_2.setTransform(166.8,1.75);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#CF0B0C").beginStroke().moveTo(1,8.8).lineTo(2.3,2.3).lineTo(-3.2,2.3).lineTo(-4.4,8.8).lineTo(-10.4,8.8).lineTo(-6.9,-8.8).lineTo(-1,-8.8).lineTo(-2.2,-2.6).lineTo(3.2,-2.6).lineTo(4.5,-8.8).lineTo(10.4,-8.8).lineTo(6.9,8.8).closePath();
	this.shape_3.setTransform(146.375,1.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#CF0B0C").beginStroke().moveTo(-8.9,8.8).lineTo(-5.4,-8.8).lineTo(8.9,-8.8).lineTo(8,-4.3).lineTo(-0.5,-4.3).lineTo(-0.8,-2.3).lineTo(6.6,-2.3).lineTo(5.7,2).lineTo(-1.7,2).lineTo(-2.2,4.3).lineTo(6.6,4.3).lineTo(5.7,8.8).closePath();
	this.shape_4.setTransform(127.925,1.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#CF0B0C").beginStroke().moveTo(-5.8,8.1).curveTo(-7.7,7.2,-8.8,5.4).curveTo(-10,3.6,-9.9,1.3).curveTo(-10,-1.7,-8.6,-4.1).curveTo(-7.2,-6.5,-4.6,-7.9).curveTo(-2.1,-9.2,1.1,-9.1).curveTo(3.8,-9.2,5.7,-8.1).curveTo(7.8,-7.2,8.9,-5.4).curveTo(9.9,-3.6,10,-1.3).curveTo(9.9,1.7,8.5,4.1).curveTo(7.1,6.5,4.6,7.8).curveTo(2.1,9.1,-1,9.1).curveTo(-3.7,9.2,-5.8,8.1).closePath().moveTo(-1.8,-3.6).curveTo(-2.9,-2.9,-3.5,-1.7).curveTo(-4,-0.5,-4,1).curveTo(-4,2.5,-3.1,3.5).curveTo(-2.1,4.4,-0.6,4.4).curveTo(0.8,4.4,1.9,3.7).curveTo(2.9,2.9,3.5,1.7).curveTo(4,0.4,4,-1).curveTo(4,-2.5,3.1,-3.5).curveTo(2.2,-4.4,0.5,-4.4).curveTo(-0.8,-4.4,-1.8,-3.6).closePath();
	this.shape_5.setTransform(108.75,1.75);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#CF0B0C").beginStroke().moveTo(-9.3,8.8).lineTo(-5.8,-8.8).lineTo(2,-8.8).curveTo(5.4,-8.7,7.4,-7.2).curveTo(9.3,-5.7,9.3,-2.9).curveTo(9.3,-0.8,8.2,1).curveTo(7.1,2.6,5.1,3.6).curveTo(3.1,4.5,0.5,4.5).lineTo(-2.6,4.5).lineTo(-3.4,8.8).closePath().moveTo(-1.7,-0.1).lineTo(0.7,-0.1).curveTo(2,-0.1,2.6,-0.7).curveTo(3.3,-1.3,3.3,-2.4).curveTo(3.3,-4.2,1.1,-4.2).lineTo(-0.9,-4.2).closePath();
	this.shape_6.setTransform(88.625,1.75);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#CF0B0C").beginStroke().moveTo(-6,8.8).lineTo(-3.4,-4.2).lineTo(-8.5,-4.2).lineTo(-7.5,-8.8).lineTo(8.5,-8.8).lineTo(7.6,-4.2).lineTo(2.4,-4.2).lineTo(-0.1,8.8).closePath();
	this.shape_7.setTransform(72.5,1.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#CF0B0C").beginStroke().moveTo(-5,8.1).curveTo(-7,7.2,-8.1,5.4).curveTo(-9.2,3.6,-9.2,1.3).curveTo(-9.2,-1.7,-7.8,-4.1).curveTo(-6.4,-6.5,-3.9,-7.8).curveTo(-1.4,-9.1,1.9,-9.1).curveTo(4.4,-9.2,6.4,-8.2).curveTo(8.3,-7.4,9.2,-5.6).lineTo(4.9,-2.3).curveTo(3.8,-4.4,1.4,-4.4).curveTo(0.1,-4.3,-0.9,-3.7).curveTo(-2.1,-3,-2.6,-1.8).curveTo(-3.3,-0.6,-3.3,1).curveTo(-3.3,2.5,-2.3,3.5).curveTo(-1.3,4.4,0.3,4.4).curveTo(2.6,4.4,4.2,2.4).lineTo(7.7,5.6).curveTo(6.2,7.6,4.2,8.3).curveTo(2.3,9.2,-0.3,9.1).curveTo(-2.9,9.2,-5,8.1).closePath();
	this.shape_8.setTransform(53.75,1.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#CF0B0C").beginStroke().moveTo(4.7,8.8).lineTo(4.1,5.7).lineTo(-2.5,5.7).lineTo(-4.3,8.8).lineTo(-10.5,8.8).lineTo(0.6,-8.8).lineTo(6.4,-8.8).lineTo(10.5,8.8).closePath().moveTo(-0.2,1.5).lineTo(3.2,1.5).lineTo(2.4,-3).closePath();
	this.shape_9.setTransform(31.6,1.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#CF0B0C").beginStroke().moveTo(1,8.8).lineTo(2.3,2.3).lineTo(-3.2,2.3).lineTo(-4.4,8.8).lineTo(-10.4,8.8).lineTo(-6.9,-8.8).lineTo(-1,-8.8).lineTo(-2.2,-2.6).lineTo(3.2,-2.6).lineTo(4.5,-8.8).lineTo(10.4,-8.8).lineTo(6.9,8.8).closePath();
	this.shape_10.setTransform(12.525,1.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol80, new cjs.Rectangle(0,-19.2,203.7,38.5), null);


(lib.Symbol78 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.rose();
	this.instance.setTransform(0,-46.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol78, new cjs.Rectangle(0,-46.5,122,93), null);


(lib.Symbol75 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_9 = new cjs.Graphics().moveTo(2.6,6.6).curveTo(1.3,6.2,0.3,5.3).lineTo(-0.1,4.9).curveTo(-0.8,5,-1.5,5).curveTo(-3,5,-4.1,4.4).curveTo(-5.4,4.4,-6.5,3.9).curveTo(-7.9,3.2,-8.8,2).curveTo(-9.7,0.7,-9.8,-0.8).curveTo(-9.9,-2.3,-9.2,-3.7).curveTo(-8.5,-5.1,-7.2,-5.9).curveTo(-5.9,-6.7,-4.4,-6.8).curveTo(-2.9,-6.9,-1.6,-6.2).lineTo(-0.8,-6.2).curveTo(0.9,-5.9,2.3,-4.8).lineTo(2.8,-4.2).curveTo(3.6,-4.4,4.5,-4.3).curveTo(6,-4.3,7.1,-3.6).curveTo(8.3,-2.9,9,-1.6).curveTo(9.8,-0.4,9.8,1).curveTo(10,3.8,7.7,5.7).curveTo(6.1,6.9,4.3,6.9).curveTo(3.5,6.9,2.6,6.6).closePath();
	var mask_graphics_11 = new cjs.Graphics().moveTo(-12.2,6.5).curveTo(-13.4,5.8,-14.2,4.5).curveTo(-15,3.2,-15,1.7).curveTo(-15,0.3,-14.3,-1.1).curveTo(-13.6,-2.4,-12.3,-3.1).curveTo(-11.1,-3.9,-9.6,-4).curveTo(-8.5,-4,-7.6,-3.7).lineTo(-6.9,-4.1).curveTo(-5.5,-4.7,-3.9,-4.5).curveTo(-3.2,-5.6,-2.1,-6.3).curveTo(-0.8,-7.1,0.7,-7.2).curveTo(2.2,-7.3,3.6,-6.6).lineTo(4.3,-6.6).curveTo(6,-6.3,7.4,-5.2).lineTo(8,-4.6).curveTo(8.8,-4.8,9.6,-4.7).curveTo(11.1,-4.7,12.2,-4).curveTo(13.4,-3.3,14.1,-2).curveTo(14.9,-0.8,14.9,0.6).curveTo(15.1,3.4,12.8,5.3).curveTo(10.5,7,7.7,6.2).curveTo(6.4,5.8,5.4,4.9).lineTo(5,4.5).curveTo(4.4,4.6,3.6,4.6).curveTo(2.2,4.6,1,4).lineTo(0.2,4).curveTo(-0.3,4.8,-1.2,5.5).curveTo(-2.4,6.5,-4.1,6.6).curveTo(-5.3,6.7,-6.3,6.4).lineTo(-6.6,6.5).curveTo(-7.8,7.2,-9.4,7.2).curveTo(-10.9,7.2,-12.2,6.5).closePath();
	var mask_graphics_13 = new cjs.Graphics().moveTo(-17.3,8).curveTo(-18.7,7.3,-19.4,5.9).curveTo(-20.1,4.6,-20,3).curveTo(-19.9,1.4,-19.1,0.2).curveTo(-18.3,-1,-17.1,-1.7).curveTo(-15.8,-2.3,-14.4,-2.3).curveTo(-12.8,-2.3,-11.4,-1.5).lineTo(-11.2,-1.4).lineTo(-10.4,-2).lineTo(-9.4,-2.3).lineTo(-9.2,-2.7).curveTo(-8.5,-4,-7.3,-4.7).curveTo(-6,-5.5,-4.5,-5.6).curveTo(-3.5,-5.6,-2.5,-5.3).lineTo(-1.9,-5.7).curveTo(-0.4,-6.3,1.2,-6.1).curveTo(1.9,-7.3,2.9,-7.9).curveTo(4.2,-8.7,5.8,-8.8).curveTo(7.3,-8.9,8.6,-8.3).lineTo(9.4,-8.2).curveTo(11.1,-7.9,12.4,-6.8).lineTo(13,-6.2).curveTo(13.8,-6.4,14.7,-6.4).curveTo(16.1,-6.3,17.3,-5.6).curveTo(18.4,-4.9,19.2,-3.7).curveTo(19.9,-2.4,20,-1.1).curveTo(20.1,1.7,17.8,3.7).curveTo(15.6,5.4,12.8,4.6).curveTo(11.5,4.2,10.5,3.3).lineTo(10.1,2.9).curveTo(9.4,3,8.7,3).curveTo(7.2,3,6,2.4).lineTo(5.2,2.3).curveTo(4.8,3.1,3.9,3.9).curveTo(2.6,4.9,1,5).curveTo(-0.2,5.1,-1.3,4.8).lineTo(-1.5,4.9).lineTo(-2.7,5.4).curveTo(-3,6.2,-3.7,7).curveTo(-4.9,8.1,-6.5,8.5).curveTo(-8.2,8.9,-9.7,8.4).curveTo(-10.4,8.1,-11,7.7).lineTo(-11.5,8).curveTo(-12.9,8.9,-14.4,8.8).lineTo(-14.6,8.9).curveTo(-16,8.9,-17.3,8).closePath();
	var mask_graphics_15 = new cjs.Graphics().moveTo(-10.9,10).lineTo(-11,9.9).lineTo(-11.6,10).curveTo(-13.2,10.3,-14.7,9.6).curveTo(-15.6,9.2,-16.3,8.7).lineTo(-16.5,8.7).curveTo(-18.7,9.1,-20.6,7.8).curveTo(-22,6.9,-22.6,5.2).curveTo(-23.2,3.6,-22.9,2).curveTo(-22.5,0.3,-21.2,-0.9).curveTo(-19.9,-2.1,-18.3,-2.3).curveTo(-16.9,-2.5,-15.6,-2.1).curveTo(-15,-2.8,-14.1,-3.3).curveTo(-12.8,-4,-11.4,-4).curveTo(-9.8,-4,-8.4,-3.1).lineTo(-8.2,-3).lineTo(-7.4,-3.6).lineTo(-6.4,-4).lineTo(-6.2,-4.3).curveTo(-5.5,-5.6,-4.3,-6.4).curveTo(-3,-7.2,-1.5,-7.2).curveTo(-0.5,-7.3,0.5,-7).lineTo(1.1,-7.3).curveTo(2.6,-8,4.2,-7.7).curveTo(4.8,-8.9,5.9,-9.6).curveTo(7.2,-10.4,8.8,-10.5).curveTo(10.3,-10.5,11.6,-9.9).lineTo(12.4,-9.8).curveTo(14.1,-9.6,15.4,-8.4).lineTo(16,-7.9).curveTo(16.8,-8,17.7,-8).curveTo(19.1,-7.9,20.3,-7.2).curveTo(21.4,-6.5,22.2,-5.3).curveTo(22.9,-4.1,23,-2.7).curveTo(23.1,0.1,20.8,2).curveTo(18.6,3.8,15.8,3).curveTo(14.5,2.6,13.5,1.7).lineTo(13.1,1.2).curveTo(12.4,1.4,11.7,1.4).curveTo(10.2,1.4,9,0.7).lineTo(8.2,0.7).curveTo(7.7,1.5,6.9,2.2).curveTo(5.6,3.2,4,3.4).curveTo(2.8,3.5,1.7,3.1).lineTo(1.5,3.3).lineTo(0.3,3.7).curveTo(-0,4.6,-0.7,5.3).curveTo(-1.8,6.4,-3.3,6.8).lineTo(-3.4,7).curveTo(-3.9,8.4,-5.2,9.3).curveTo(-6.5,10.3,-8,10.5).lineTo(-8.5,10.5).curveTo(-9.7,10.5,-10.9,10).closePath();
	var mask_graphics_17 = new cjs.Graphics().moveTo(-20.1,16.2).curveTo(-21.1,16,-21.8,15.6).curveTo(-24.2,15.5,-25.8,13.7).curveTo(-26.3,13.1,-26.6,12.6).curveTo(-27.7,10.4,-26.9,8.1).curveTo(-26,5.8,-23.8,4.9).curveTo(-21.5,3.9,-19.3,4.9).lineTo(-19.3,4.9).curveTo(-20,3.8,-20.1,2.6).curveTo(-20.3,1.1,-19.6,-0.4).curveTo(-19.3,-1.2,-18.7,-1.8).curveTo(-18.9,-2.8,-18.7,-3.8).curveTo(-18.3,-5.5,-17,-6.7).curveTo(-15.7,-7.9,-14.1,-8.1).curveTo(-12.7,-8.3,-11.4,-7.9).curveTo(-10.8,-8.6,-9.9,-9.1).curveTo(-8.6,-9.8,-7.2,-9.8).curveTo(-5.6,-9.8,-4.2,-8.9).lineTo(-4,-8.8).lineTo(-3.2,-9.4).lineTo(-2.2,-9.8).lineTo(-2,-10.1).curveTo(-1.3,-11.4,-0.1,-12.2).curveTo(1.2,-13,2.7,-13).curveTo(3.7,-13.1,4.7,-12.8).lineTo(5.3,-13.1).curveTo(6.8,-13.8,8.4,-13.5).curveTo(9.1,-14.7,10.1,-15.4).curveTo(11.4,-16.2,13,-16.3).curveTo(14.5,-16.3,15.8,-15.7).lineTo(16.6,-15.6).curveTo(18.3,-15.4,19.6,-14.2).lineTo(20.2,-13.7).curveTo(21,-13.9,21.9,-13.8).curveTo(23.3,-13.7,24.5,-13).curveTo(25.6,-12.3,26.4,-11.1).curveTo(27.1,-9.9,27.2,-8.5).curveTo(27.3,-5.7,25,-3.8).curveTo(22.8,-2,20,-2.8).curveTo(18.7,-3.2,17.7,-4.1).lineTo(17.3,-4.6).curveTo(16.6,-4.4,15.9,-4.4).curveTo(14.4,-4.4,13.2,-5.1).lineTo(12.4,-5.1).curveTo(12,-4.3,11.1,-3.6).curveTo(9.8,-2.6,8.2,-2.4).curveTo(7,-2.3,5.9,-2.7).lineTo(5.7,-2.5).lineTo(4.5,-2.1).curveTo(4.2,-1.2,3.5,-0.5).curveTo(2.4,0.6,0.9,1).lineTo(0.8,1.2).curveTo(0.3,2.6,-1,3.5).curveTo(-2.3,4.5,-3.8,4.7).curveTo(-4.8,4.8,-5.8,4.5).lineTo(-5.7,5.4).curveTo(-5.7,7.2,-6.6,8.6).curveTo(-7.5,10,-9.2,10.7).curveTo(-10.8,11.4,-12.4,11).lineTo(-13.4,10.6).lineTo(-13.5,11).curveTo(-13.5,12.6,-14.5,14).curveTo(-15.5,15.3,-17,15.9).curveTo(-18,16.3,-19,16.3).lineTo(-20.1,16.2).closePath();
	var mask_graphics_19 = new cjs.Graphics().moveTo(-15.9,16.2).curveTo(-16.9,16,-17.6,15.6).curveTo(-20.1,15.5,-21.6,13.7).curveTo(-22.1,13.1,-22.4,12.6).lineTo(-22.8,11.4).curveTo(-24,11.4,-25.1,11).curveTo(-26,10.6,-26.8,9.9).curveTo(-27.2,9.5,-27.7,8.8).curveTo(-28.1,8.1,-28.3,7.5).curveTo(-28.8,6.1,-28.4,4.5).lineTo(-28.3,4.4).lineTo(-29,4).curveTo(-30.2,3.2,-30.8,1.8).curveTo(-31.5,0.4,-31.4,-1).curveTo(-31.2,-3.7,-29.1,-5.2).curveTo(-27,-6.7,-24.4,-6.1).curveTo(-21.9,-5.4,-20.7,-3.1).curveTo(-20.1,-1.7,-20.2,-0.1).lineTo(-20.4,0.8).lineTo(-19.9,1.1).curveTo(-19,0,-17.9,-0.4).curveTo(-18.3,-1.5,-18.2,-2.8).curveTo(-18.1,-4.1,-17.5,-5.2).lineTo(-17.4,-5.9).curveTo(-17,-7.5,-15.9,-8.6).curveTo(-14.7,-9.7,-13,-10.1).curveTo(-11.3,-10.4,-9.8,-9.7).curveTo(-8.5,-9.2,-7.6,-8).lineTo(-7.2,-7.9).curveTo(-6.6,-8.6,-5.7,-9.1).curveTo(-4.4,-9.8,-3,-9.8).curveTo(-1.4,-9.8,-0,-8.9).lineTo(0.2,-8.8).lineTo(1,-9.4).lineTo(2,-9.8).lineTo(2.2,-10.1).curveTo(2.9,-11.4,4.1,-12.2).curveTo(5.4,-13,6.9,-13).curveTo(7.9,-13.1,8.9,-12.8).lineTo(9.5,-13.1).curveTo(11,-13.8,12.6,-13.5).curveTo(13.2,-14.7,14.3,-15.4).curveTo(15.6,-16.2,17.2,-16.3).curveTo(18.7,-16.3,20,-15.7).lineTo(20.8,-15.6).curveTo(22.5,-15.4,23.8,-14.2).lineTo(24.4,-13.7).curveTo(25.2,-13.9,26.1,-13.8).curveTo(27.5,-13.7,28.7,-13).curveTo(29.8,-12.3,30.6,-11.1).curveTo(31.3,-9.9,31.4,-8.5).curveTo(31.5,-5.7,29.2,-3.8).curveTo(27,-2,24.2,-2.8).curveTo(22.9,-3.2,21.9,-4.1).lineTo(21.5,-4.6).curveTo(20.8,-4.4,20.1,-4.4).curveTo(18.6,-4.4,17.4,-5.1).lineTo(16.6,-5.1).curveTo(16.1,-4.3,15.3,-3.6).curveTo(14,-2.6,12.4,-2.4).curveTo(11.2,-2.3,10.1,-2.7).lineTo(9.9,-2.5).lineTo(8.7,-2.1).curveTo(8.4,-1.2,7.7,-0.5).curveTo(6.6,0.6,5.1,1).lineTo(5,1.2).curveTo(4.5,2.6,3.2,3.5).curveTo(1.9,4.5,0.4,4.7).curveTo(-0.6,4.8,-1.6,4.5).lineTo(-1.5,5.4).curveTo(-1.5,7.2,-2.4,8.6).curveTo(-3.3,10,-5,10.7).curveTo(-6.6,11.4,-8.2,11).lineTo(-9.2,10.6).lineTo(-9.3,11).curveTo(-9.3,12.6,-10.3,14).curveTo(-11.3,15.3,-12.8,15.9).curveTo(-13.8,16.3,-14.8,16.3).lineTo(-15.9,16.2).closePath();
	var mask_graphics_21 = new cjs.Graphics().moveTo(-15.9,16.2).curveTo(-16.9,16,-17.6,15.6).curveTo(-20.1,15.5,-21.6,13.7).curveTo(-22.1,13.1,-22.4,12.6).lineTo(-22.8,11.4).curveTo(-24,11.4,-25.1,11).curveTo(-26,10.6,-26.8,9.9).curveTo(-27.2,9.5,-27.7,8.8).curveTo(-28.1,8.1,-28.3,7.5).curveTo(-28.8,6.1,-28.4,4.5).lineTo(-28.3,4.4).lineTo(-29,4).curveTo(-30.2,3.2,-30.8,1.8).curveTo(-31.5,0.4,-31.4,-1).curveTo(-31.2,-3.7,-29.1,-5.2).curveTo(-27.4,-6.4,-25.5,-6.3).curveTo(-25.2,-7.6,-24.4,-8.6).curveTo(-23.3,-9.9,-21.9,-10.4).curveTo(-20.7,-10.8,-19.4,-10.7).curveTo(-19.4,-11.7,-19.1,-12.6).curveTo(-18.5,-14.1,-17.3,-15).curveTo(-16.1,-15.9,-14.5,-16.1).curveTo(-13,-16.3,-11.6,-15.7).curveTo(-10.2,-15.1,-9.3,-13.8).curveTo(-8.4,-12.5,-8.3,-11).curveTo(-8.1,-10,-8.5,-8.9).curveTo(-8,-8.5,-7.6,-8).lineTo(-7.2,-7.9).curveTo(-6.6,-8.6,-5.7,-9.1).curveTo(-4.4,-9.8,-3,-9.8).curveTo(-1.4,-9.8,-0,-8.9).lineTo(0.2,-8.8).lineTo(1,-9.4).lineTo(2,-9.8).lineTo(2.2,-10.1).curveTo(2.9,-11.4,4.1,-12.2).curveTo(5.4,-13,6.9,-13).curveTo(7.9,-13.1,8.9,-12.8).lineTo(9.5,-13.1).curveTo(11,-13.8,12.6,-13.5).curveTo(13.2,-14.7,14.3,-15.4).curveTo(15.6,-16.2,17.2,-16.3).curveTo(18.7,-16.3,20,-15.7).lineTo(20.8,-15.6).curveTo(22.5,-15.4,23.8,-14.2).lineTo(24.4,-13.7).curveTo(25.2,-13.9,26.1,-13.8).curveTo(27.5,-13.7,28.7,-13).curveTo(29.8,-12.3,30.6,-11.1).curveTo(31.3,-9.9,31.4,-8.5).curveTo(31.5,-5.7,29.2,-3.8).curveTo(27,-2,24.2,-2.8).curveTo(22.9,-3.2,21.9,-4.1).lineTo(21.5,-4.6).curveTo(20.8,-4.4,20.1,-4.4).curveTo(18.6,-4.4,17.4,-5.1).lineTo(16.6,-5.1).curveTo(16.1,-4.3,15.3,-3.6).curveTo(14,-2.6,12.4,-2.4).curveTo(11.2,-2.3,10.1,-2.7).lineTo(9.9,-2.5).lineTo(8.7,-2.1).curveTo(8.4,-1.2,7.7,-0.5).curveTo(6.6,0.6,5.1,1).lineTo(5,1.2).curveTo(4.5,2.6,3.2,3.5).curveTo(1.9,4.5,0.4,4.7).curveTo(-0.6,4.8,-1.6,4.5).lineTo(-1.5,5.4).curveTo(-1.5,7.2,-2.4,8.6).curveTo(-3.3,10,-5,10.7).curveTo(-6.6,11.4,-8.2,11).lineTo(-9.2,10.6).lineTo(-9.3,11).curveTo(-9.3,12.6,-10.3,14).curveTo(-11.3,15.3,-12.8,15.9).curveTo(-13.8,16.3,-14.8,16.3).lineTo(-15.9,16.2).closePath();
	var mask_graphics_23 = new cjs.Graphics().moveTo(-15.9,23.8).curveTo(-16.9,23.7,-17.6,23.2).curveTo(-20.1,23.1,-21.6,21.3).curveTo(-22.1,20.7,-22.4,20.2).lineTo(-22.8,19).curveTo(-24,19,-25.1,18.6).curveTo(-26,18.2,-26.8,17.5).curveTo(-27.2,17.1,-27.7,16.4).curveTo(-28.1,15.7,-28.3,15.1).curveTo(-28.8,13.7,-28.4,12.1).lineTo(-28.3,12).lineTo(-29,11.6).curveTo(-30.2,10.8,-30.8,9.4).curveTo(-31.5,8,-31.4,6.6).curveTo(-31.2,3.9,-29.1,2.4).curveTo(-27.4,1.2,-25.5,1.3).curveTo(-25.2,0,-24.4,-1).curveTo(-23.3,-2.3,-21.9,-2.8).curveTo(-20.7,-3.2,-19.4,-3.1).curveTo(-19.4,-4.1,-19.1,-5).curveTo(-18.8,-5.7,-18.3,-6.3).curveTo(-18.4,-7,-18.2,-7.8).curveTo(-17.8,-9.6,-16.6,-10.7).curveTo(-17.1,-11.7,-17.1,-12.9).curveTo(-17.2,-14.4,-16.5,-15.6).curveTo(-15.9,-16.9,-14.7,-17.7).lineTo(-14.4,-17.9).curveTo(-14.5,-19.8,-13.5,-21.4).curveTo(-12.6,-22.7,-11.1,-23.4).curveTo(-9.6,-24.1,-8.1,-23.9).curveTo(-6.6,-23.7,-5.3,-22.7).curveTo(-4,-21.7,-3.5,-20.3).curveTo(-3,-18.8,-3.3,-17.2).curveTo(-3.6,-15.7,-4.6,-14.5).curveTo(-5.2,-13.9,-5.9,-13.5).lineTo(-6,-12.2).curveTo(-6.2,-10.8,-7.1,-9.7).lineTo(-7.7,-9).lineTo(-7.4,-8.1).curveTo(-6.7,-5.7,-7.9,-3.7).lineTo(-8.2,-3.2).curveTo(-8.2,-2.3,-8.5,-1.3).curveTo(-8,-0.9,-7.6,-0.4).lineTo(-7.2,-0.3).curveTo(-6.6,-1,-5.7,-1.5).curveTo(-4.4,-2.2,-3,-2.2).curveTo(-1.4,-2.2,-0,-1.3).lineTo(0.2,-1.2).lineTo(1,-1.8).lineTo(2,-2.2).lineTo(2.2,-2.5).curveTo(2.9,-3.8,4.1,-4.6).curveTo(5.4,-5.4,6.9,-5.4).curveTo(7.9,-5.5,8.9,-5.2).lineTo(9.5,-5.5).curveTo(11,-6.2,12.6,-5.9).curveTo(13.2,-7.1,14.3,-7.8).curveTo(15.6,-8.6,17.2,-8.7).curveTo(18.7,-8.7,20,-8.1).lineTo(20.8,-8).curveTo(22.5,-7.8,23.8,-6.6).lineTo(24.4,-6.1).curveTo(25.2,-6.2,26.1,-6.2).curveTo(27.5,-6.1,28.7,-5.4).curveTo(29.8,-4.7,30.6,-3.5).curveTo(31.3,-2.3,31.4,-0.9).curveTo(31.5,1.9,29.2,3.8).curveTo(27,5.6,24.2,4.8).curveTo(22.9,4.4,21.9,3.5).lineTo(21.5,3).curveTo(20.8,3.2,20.1,3.2).curveTo(18.6,3.2,17.4,2.5).lineTo(16.6,2.5).curveTo(16.1,3.3,15.3,4).curveTo(14,5,12.4,5.2).curveTo(11.2,5.3,10.1,4.9).lineTo(9.9,5.1).lineTo(8.7,5.5).curveTo(8.4,6.4,7.7,7.1).curveTo(6.6,8.2,5.1,8.6).lineTo(5,8.8).curveTo(4.5,10.2,3.2,11.1).curveTo(1.9,12.1,0.4,12.3).curveTo(-0.6,12.4,-1.6,12.1).lineTo(-1.5,13).curveTo(-1.5,14.8,-2.4,16.2).curveTo(-3.3,17.6,-5,18.3).curveTo(-6.6,19,-8.2,18.6).lineTo(-9.2,18.2).lineTo(-9.3,18.6).curveTo(-9.3,20.2,-10.3,21.6).curveTo(-11.3,22.9,-12.8,23.5).curveTo(-13.8,23.9,-14.8,23.9).lineTo(-15.9,23.8).closePath();
	var mask_graphics_25 = new cjs.Graphics().moveTo(-15.9,30.6).curveTo(-16.9,30.5,-17.6,30).curveTo(-20.1,29.9,-21.6,28.1).curveTo(-22.1,27.5,-22.4,27).lineTo(-22.8,25.8).curveTo(-24,25.8,-25.1,25.4).curveTo(-26,25,-26.8,24.3).curveTo(-27.2,23.9,-27.7,23.2).curveTo(-28.1,22.5,-28.3,21.9).curveTo(-28.8,20.5,-28.4,18.9).lineTo(-28.3,18.8).lineTo(-29,18.4).curveTo(-30.2,17.6,-30.8,16.2).curveTo(-31.5,14.8,-31.4,13.4).curveTo(-31.2,10.7,-29.1,9.2).curveTo(-27.4,8,-25.5,8.2).curveTo(-25.2,6.9,-24.4,5.8).curveTo(-23.3,4.5,-21.9,4).curveTo(-20.7,3.6,-19.4,3.7).curveTo(-19.4,2.7,-19.1,1.8).curveTo(-18.8,1.1,-18.3,0.5).curveTo(-18.4,-0.2,-18.2,-1).curveTo(-17.8,-2.8,-16.6,-3.8).curveTo(-17.1,-4.9,-17.1,-6.1).curveTo(-17.2,-7.6,-16.5,-8.8).curveTo(-15.9,-10.1,-14.7,-10.9).lineTo(-14.4,-11.1).curveTo(-14.5,-13,-13.5,-14.6).curveTo(-12.7,-15.7,-11.4,-16.4).curveTo(-11.3,-17.8,-10.5,-19).curveTo(-9.8,-19.9,-8.8,-20.5).curveTo(-9,-21.6,-8.7,-22.7).curveTo(-8.4,-24,-7.7,-24.9).lineTo(-7.6,-26).curveTo(-7.4,-27.3,-6.6,-28.4).curveTo(-5.7,-29.6,-4.5,-30.1).curveTo(-1.8,-31.4,0.7,-29.9).curveTo(1.9,-29.2,2.7,-28.1).curveTo(3.4,-26.9,3.5,-25.6).curveTo(3.7,-23.7,2.6,-22).lineTo(2.4,-21.6).curveTo(2.4,-20.8,2.2,-20).curveTo(1.6,-17.8,-0.3,-16.6).curveTo(-0.1,-15.4,-0.5,-14.1).curveTo(-1,-12.5,-2.1,-11.5).curveTo(-2.6,-11,-3.2,-10.7).lineTo(-3.3,-10.4).curveTo(-3.6,-8.9,-4.6,-7.7).curveTo(-5.2,-7.1,-5.9,-6.7).lineTo(-6,-5.4).curveTo(-6.2,-4,-7.1,-2.9).lineTo(-7.7,-2.2).lineTo(-7.4,-1.3).curveTo(-6.7,1.1,-7.9,3.1).lineTo(-8.2,3.6).curveTo(-8.2,4.5,-8.5,5.5).curveTo(-8,5.9,-7.6,6.4).lineTo(-7.2,6.5).curveTo(-6.6,5.8,-5.7,5.3).curveTo(-4.4,4.6,-3,4.6).curveTo(-1.4,4.6,-0,5.5).lineTo(0.2,5.6).lineTo(1,5).lineTo(2,4.7).lineTo(2.2,4.3).curveTo(2.9,3,4.1,2.2).curveTo(5.4,1.4,6.9,1.4).curveTo(7.9,1.3,8.9,1.7).lineTo(9.5,1.3).curveTo(11,0.6,12.6,0.9).curveTo(13.2,-0.3,14.3,-1).curveTo(15.6,-1.8,17.2,-1.9).curveTo(18.7,-1.9,20,-1.3).lineTo(20.8,-1.2).curveTo(22.5,-1,23.8,0.2).lineTo(24.4,0.8).curveTo(25.2,0.6,26.1,0.6).curveTo(27.5,0.7,28.7,1.4).curveTo(29.8,2.1,30.6,3.3).curveTo(31.3,4.5,31.4,5.9).curveTo(31.5,8.7,29.2,10.6).curveTo(27,12.4,24.2,11.6).curveTo(22.9,11.2,21.9,10.3).lineTo(21.5,9.8).curveTo(20.8,10,20.1,10).curveTo(18.6,10,17.4,9.3).lineTo(16.6,9.3).curveTo(16.1,10.1,15.3,10.8).curveTo(14,11.8,12.4,12).curveTo(11.2,12.1,10.1,11.8).lineTo(9.9,11.9).lineTo(8.7,12.4).curveTo(8.4,13.2,7.7,13.9).curveTo(6.6,15,5.1,15.4).lineTo(5,15.6).curveTo(4.5,17,3.2,17.9).curveTo(1.9,18.9,0.4,19.1).curveTo(-0.6,19.2,-1.6,18.9).lineTo(-1.5,19.8).curveTo(-1.5,21.6,-2.4,23).curveTo(-3.3,24.4,-5,25.1).curveTo(-6.6,25.8,-8.2,25.4).lineTo(-9.2,25.1).lineTo(-9.3,25.4).curveTo(-9.3,27,-10.3,28.4).curveTo(-11.3,29.7,-12.8,30.3).curveTo(-13.8,30.7,-14.8,30.7).lineTo(-15.9,30.6).closePath();
	var mask_graphics_27 = new cjs.Graphics().moveTo(-15.9,35.9).curveTo(-16.9,35.7,-17.6,35.3).curveTo(-20.1,35.2,-21.6,33.4).curveTo(-22.1,32.8,-22.4,32.3).lineTo(-22.8,31.1).curveTo(-24,31.1,-25.1,30.7).curveTo(-26,30.3,-26.8,29.6).curveTo(-27.2,29.2,-27.7,28.5).curveTo(-28.1,27.8,-28.3,27.2).curveTo(-28.8,25.8,-28.4,24.2).lineTo(-28.3,24.1).lineTo(-29,23.7).curveTo(-30.2,22.9,-30.8,21.5).curveTo(-31.5,20.1,-31.4,18.7).curveTo(-31.2,16,-29.1,14.5).curveTo(-27.4,13.3,-25.5,13.4).curveTo(-25.2,12.1,-24.4,11.1).curveTo(-23.3,9.8,-21.9,9.3).curveTo(-20.7,8.9,-19.4,9).curveTo(-19.4,8,-19.1,7.1).curveTo(-18.8,6.4,-18.3,5.8).curveTo(-18.4,5,-18.2,4.3).curveTo(-17.8,2.5,-16.6,1.4).curveTo(-17.1,0.4,-17.1,-0.8).curveTo(-17.2,-2.3,-16.5,-3.5).curveTo(-15.9,-4.8,-14.7,-5.6).lineTo(-14.4,-5.8).curveTo(-14.5,-7.7,-13.5,-9.3).curveTo(-12.7,-10.4,-11.4,-11.1).curveTo(-11.3,-12.5,-10.5,-13.7).curveTo(-9.8,-14.6,-8.8,-15.2).curveTo(-9,-16.3,-8.7,-17.4).curveTo(-8.4,-18.7,-7.7,-19.6).lineTo(-7.6,-20.7).curveTo(-7.4,-22,-6.6,-23.1).lineTo(-6.4,-23.3).curveTo(-7.2,-23.3,-7.9,-23.4).curveTo(-9.3,-23.8,-10.4,-24.7).curveTo(-11.4,-25.7,-11.9,-27).curveTo(-12.2,-27.7,-12.3,-28.8).curveTo(-12.3,-30,-12.1,-30.6).curveTo(-11.8,-32.1,-10.6,-33.3).curveTo(-9.5,-34.4,-8,-34.8).curveTo(-6.4,-35.2,-4.9,-34.7).lineTo(-4.5,-34.6).lineTo(-3.7,-35.2).curveTo(-2.5,-35.9,-1.2,-36).curveTo(0.2,-36.1,1.6,-35.5).lineTo(2.7,-35.2).curveTo(4.4,-34.8,5.4,-33.5).lineTo(6,-32.8).curveTo(7.5,-32.1,8.5,-30.7).curveTo(9.4,-29.3,9.4,-27.6).curveTo(9.4,-25.8,8.4,-24.4).curveTo(7.5,-23,5.9,-22.4).lineTo(5.1,-22.1).lineTo(4.7,-21).curveTo(4.3,-20.1,3.5,-19.4).curveTo(3.4,-18,2.6,-16.7).lineTo(2.4,-16.3).curveTo(2.4,-15.5,2.2,-14.7).curveTo(1.6,-12.6,-0.3,-11.4).curveTo(-0.1,-10.1,-0.5,-8.8).curveTo(-1,-7.2,-2.1,-6.2).curveTo(-2.6,-5.7,-3.2,-5.4).lineTo(-3.3,-5.1).curveTo(-3.6,-3.6,-4.6,-2.4).curveTo(-5.2,-1.8,-5.9,-1.4).lineTo(-6,-0.1).curveTo(-6.2,1.3,-7.1,2.4).lineTo(-7.7,3.1).lineTo(-7.4,4).curveTo(-6.7,6.4,-7.9,8.4).lineTo(-8.2,8.9).curveTo(-8.2,9.8,-8.5,10.8).curveTo(-8,11.2,-7.6,11.7).lineTo(-7.2,11.8).curveTo(-6.6,11.1,-5.7,10.6).curveTo(-4.4,9.9,-3,9.9).curveTo(-1.4,9.9,-0,10.8).lineTo(0.2,10.9).lineTo(1,10.3).lineTo(2,9.9).lineTo(2.2,9.6).curveTo(2.9,8.3,4.1,7.5).curveTo(5.4,6.7,6.9,6.7).curveTo(7.9,6.6,8.9,6.9).lineTo(9.5,6.6).curveTo(11,5.9,12.6,6.2).curveTo(13.2,5,14.3,4.3).curveTo(15.6,3.5,17.2,3.4).curveTo(18.7,3.4,20,4).lineTo(20.8,4.1).curveTo(22.5,4.3,23.8,5.5).lineTo(24.4,6).curveTo(25.2,5.8,26.1,5.9).curveTo(27.5,6,28.7,6.7).curveTo(29.8,7.4,30.6,8.6).curveTo(31.3,9.8,31.4,11.2).curveTo(31.5,14,29.2,15.9).curveTo(27,17.7,24.2,16.9).curveTo(22.9,16.5,21.9,15.6).lineTo(21.5,15.1).curveTo(20.8,15.3,20.1,15.3).curveTo(18.6,15.3,17.4,14.6).lineTo(16.6,14.6).curveTo(16.1,15.4,15.3,16.1).curveTo(14,17.1,12.4,17.3).curveTo(11.2,17.4,10.1,17).lineTo(9.9,17.2).lineTo(8.7,17.6).curveTo(8.4,18.5,7.7,19.2).curveTo(6.6,20.3,5.1,20.7).lineTo(5,20.9).curveTo(4.5,22.3,3.2,23.2).curveTo(1.9,24.2,0.4,24.4).curveTo(-0.6,24.5,-1.6,24.2).lineTo(-1.5,25.1).curveTo(-1.5,26.9,-2.4,28.3).curveTo(-3.3,29.7,-5,30.4).curveTo(-6.6,31.1,-8.2,30.7).lineTo(-9.2,30.3).lineTo(-9.3,30.7).curveTo(-9.3,32.3,-10.3,33.7).curveTo(-11.3,35,-12.8,35.6).curveTo(-13.8,36,-14.8,36).lineTo(-15.9,35.9).closePath();
	var mask_graphics_29 = new cjs.Graphics().moveTo(-15.9,35.9).curveTo(-16.9,35.7,-17.6,35.3).curveTo(-20.1,35.2,-21.6,33.4).curveTo(-22.1,32.8,-22.4,32.3).lineTo(-22.8,31.1).curveTo(-24,31.1,-25.1,30.7).curveTo(-26,30.3,-26.8,29.6).curveTo(-27.2,29.2,-27.7,28.5).curveTo(-28.1,27.8,-28.3,27.2).curveTo(-28.8,25.8,-28.4,24.2).lineTo(-28.3,24.1).lineTo(-29,23.7).curveTo(-30.2,22.9,-30.8,21.5).curveTo(-31.5,20.1,-31.4,18.7).curveTo(-31.2,16,-29.1,14.5).curveTo(-27.4,13.3,-25.5,13.4).curveTo(-25.2,12.1,-24.4,11.1).curveTo(-23.3,9.8,-21.9,9.3).curveTo(-20.7,8.9,-19.4,9).curveTo(-19.4,8,-19.1,7.1).curveTo(-18.8,6.4,-18.3,5.8).curveTo(-18.4,5,-18.2,4.3).curveTo(-17.8,2.5,-16.6,1.4).curveTo(-17.1,0.4,-17.1,-0.8).curveTo(-17.2,-2.3,-16.5,-3.5).curveTo(-15.9,-4.8,-14.7,-5.6).lineTo(-14.4,-5.8).curveTo(-14.5,-7.7,-13.5,-9.3).curveTo(-12.7,-10.4,-11.4,-11.1).curveTo(-11.3,-12.5,-10.5,-13.7).curveTo(-9.8,-14.6,-8.8,-15.2).curveTo(-9,-16.3,-8.7,-17.4).curveTo(-8.4,-18.7,-7.7,-19.6).lineTo(-7.6,-20.7).curveTo(-7.4,-22,-6.6,-23.1).lineTo(-6.4,-23.3).curveTo(-7.2,-23.3,-7.9,-23.4).lineTo(-8.5,-23.6).curveTo(-9.6,-23.4,-10.6,-23.6).curveTo(-11.8,-23.8,-12.7,-24.4).lineTo(-13.5,-24.3).curveTo(-14.8,-24.1,-16.1,-24.6).curveTo(-17.4,-25.1,-18.3,-26.1).curveTo(-20.2,-28.3,-19.6,-31.1).curveTo(-19,-33.7,-16.6,-34.9).curveTo(-14,-36.2,-11.5,-34.8).lineTo(-11,-34.6).curveTo(-10.4,-34.8,-9.7,-34.7).lineTo(-8.6,-34.6).lineTo(-8,-34.8).curveTo(-6.4,-35.2,-4.9,-34.7).lineTo(-4.5,-34.6).lineTo(-3.7,-35.2).curveTo(-2.5,-35.9,-1.2,-36).curveTo(0.2,-36.1,1.6,-35.5).lineTo(2.7,-35.2).curveTo(4.4,-34.8,5.4,-33.5).lineTo(6,-32.8).curveTo(7.5,-32.1,8.5,-30.7).curveTo(9.4,-29.3,9.4,-27.6).curveTo(9.4,-25.8,8.4,-24.4).curveTo(7.5,-23,5.9,-22.4).lineTo(5.1,-22.1).lineTo(4.7,-21).curveTo(4.3,-20.1,3.5,-19.4).curveTo(3.4,-18,2.6,-16.7).lineTo(2.4,-16.3).curveTo(2.4,-15.5,2.2,-14.7).curveTo(1.6,-12.6,-0.3,-11.4).curveTo(-0.1,-10.1,-0.5,-8.8).curveTo(-1,-7.2,-2.1,-6.2).curveTo(-2.6,-5.7,-3.2,-5.4).lineTo(-3.3,-5.1).curveTo(-3.6,-3.6,-4.6,-2.4).curveTo(-5.2,-1.8,-5.9,-1.4).lineTo(-6,-0.1).curveTo(-6.2,1.3,-7.1,2.4).lineTo(-7.7,3.1).lineTo(-7.4,4).curveTo(-6.7,6.4,-7.9,8.4).lineTo(-8.2,8.9).curveTo(-8.2,9.8,-8.5,10.8).curveTo(-8,11.2,-7.6,11.7).lineTo(-7.2,11.8).curveTo(-6.6,11.1,-5.7,10.6).curveTo(-4.4,9.9,-3,9.9).curveTo(-1.4,9.9,-0,10.8).lineTo(0.2,10.9).lineTo(1,10.3).lineTo(2,9.9).lineTo(2.2,9.6).curveTo(2.9,8.3,4.1,7.5).curveTo(5.4,6.7,6.9,6.7).curveTo(7.9,6.6,8.9,6.9).lineTo(9.5,6.6).curveTo(11,5.9,12.6,6.2).curveTo(13.2,5,14.3,4.3).curveTo(15.6,3.5,17.2,3.4).curveTo(18.7,3.4,20,4).lineTo(20.8,4.1).curveTo(22.5,4.3,23.8,5.5).lineTo(24.4,6).curveTo(25.2,5.8,26.1,5.9).curveTo(27.5,6,28.7,6.7).curveTo(29.8,7.4,30.6,8.6).curveTo(31.3,9.8,31.4,11.2).curveTo(31.5,14,29.2,15.9).curveTo(27,17.7,24.2,16.9).curveTo(22.9,16.5,21.9,15.6).lineTo(21.5,15.1).curveTo(20.8,15.3,20.1,15.3).curveTo(18.6,15.3,17.4,14.6).lineTo(16.6,14.6).curveTo(16.1,15.4,15.3,16.1).curveTo(14,17.1,12.4,17.3).curveTo(11.2,17.4,10.1,17).lineTo(9.9,17.2).lineTo(8.7,17.6).curveTo(8.4,18.5,7.7,19.2).curveTo(6.6,20.3,5.1,20.7).lineTo(5,20.9).curveTo(4.5,22.3,3.2,23.2).curveTo(1.9,24.2,0.4,24.4).curveTo(-0.6,24.5,-1.6,24.2).lineTo(-1.5,25.1).curveTo(-1.5,26.9,-2.4,28.3).curveTo(-3.3,29.7,-5,30.4).curveTo(-6.6,31.1,-8.2,30.7).lineTo(-9.2,30.3).lineTo(-9.3,30.7).curveTo(-9.3,32.3,-10.3,33.7).curveTo(-11.3,35,-12.8,35.6).curveTo(-13.8,36,-14.8,36).lineTo(-15.9,35.9).closePath();
	var mask_graphics_31 = new cjs.Graphics().moveTo(-15.9,43).curveTo(-16.9,42.8,-17.6,42.4).curveTo(-20.1,42.3,-21.6,40.4).curveTo(-22.1,39.9,-22.4,39.3).lineTo(-22.8,38.1).curveTo(-24,38.2,-25.1,37.7).curveTo(-26,37.4,-26.8,36.6).curveTo(-27.2,36.2,-27.7,35.5).curveTo(-28.1,34.9,-28.3,34.3).curveTo(-28.8,32.9,-28.4,31.3).lineTo(-28.3,31.1).lineTo(-29,30.8).curveTo(-30.2,30,-30.8,28.6).curveTo(-31.5,27.2,-31.4,25.7).curveTo(-31.2,23.1,-29.1,21.6).curveTo(-27.4,20.4,-25.5,20.5).curveTo(-25.2,19.2,-24.4,18.1).curveTo(-23.3,16.8,-21.9,16.3).curveTo(-20.7,15.9,-19.4,16.1).curveTo(-19.4,15.1,-19.1,14.1).curveTo(-18.8,13.4,-18.3,12.8).curveTo(-18.4,12.1,-18.2,11.4).curveTo(-17.8,9.6,-16.6,8.5).curveTo(-17.1,7.5,-17.1,6.2).curveTo(-17.2,4.8,-16.5,3.5).curveTo(-15.9,2.3,-14.7,1.5).lineTo(-14.4,1.2).curveTo(-14.5,-0.6,-13.5,-2.2).curveTo(-12.7,-3.4,-11.4,-4.1).curveTo(-11.3,-5.4,-10.5,-6.6).curveTo(-9.8,-7.6,-8.8,-8.2).curveTo(-9,-9.2,-8.7,-10.4).curveTo(-8.4,-11.6,-7.7,-12.6).lineTo(-7.6,-13.6).curveTo(-7.4,-15,-6.6,-16.1).lineTo(-6.4,-16.3).curveTo(-7.2,-16.2,-7.9,-16.4).lineTo(-8.5,-16.6).curveTo(-9.6,-16.4,-10.6,-16.5).curveTo(-11.8,-16.7,-12.7,-17.4).lineTo(-13.5,-17.2).curveTo(-14.8,-17.1,-16.1,-17.6).curveTo(-17.4,-18.1,-18.3,-19.1).curveTo(-20.2,-21.3,-19.6,-24.1).lineTo(-19.5,-24.4).lineTo(-19.8,-24.8).curveTo(-20.6,-26.4,-20.5,-28).curveTo(-20.4,-29.7,-19.3,-31).curveTo(-18.2,-32.4,-16.7,-32.9).lineTo(-15.9,-33.1).curveTo(-15.5,-34.2,-14.7,-35.1).lineTo(-14.2,-35.6).lineTo(-14.2,-35.9).curveTo(-13.7,-37.5,-12.3,-38.6).curveTo(-11.6,-39.3,-10.7,-39.6).curveTo(-10.2,-40.9,-9.1,-41.8).curveTo(-7.8,-42.9,-6.1,-43).curveTo(-4.4,-43.2,-2.9,-42.5).curveTo(-1.5,-41.7,-0.7,-40.3).curveTo(0,-39.1,0.1,-37.6).curveTo(0.1,-36.1,-0.6,-34.8).curveTo(-1.4,-33.4,-2.9,-32.6).lineTo(-3.6,-32.3).curveTo(-4,-31.3,-4.7,-30.5).lineTo(-5,-30.2).lineTo(-5.3,-29.2).curveTo(-5.7,-28.5,-6.1,-27.9).lineTo(-4.9,-27.6).lineTo(-4.5,-27.5).lineTo(-3.7,-28.1).curveTo(-2.5,-28.8,-1.2,-28.9).curveTo(0.2,-29.1,1.6,-28.4).lineTo(2.7,-28.2).curveTo(4.4,-27.7,5.4,-26.5).lineTo(6,-25.7).curveTo(7.5,-25.1,8.5,-23.7).curveTo(9.4,-22.3,9.4,-20.5).curveTo(9.4,-18.8,8.4,-17.4).curveTo(7.5,-16,5.9,-15.3).lineTo(5.1,-15.1).lineTo(4.7,-14).curveTo(4.3,-13,3.5,-12.3).curveTo(3.4,-11,2.6,-9.7).lineTo(2.4,-9.3).curveTo(2.4,-8.5,2.2,-7.7).curveTo(1.6,-5.5,-0.3,-4.3).curveTo(-0.1,-3.1,-0.5,-1.8).curveTo(-1,-0.2,-2.1,0.9).curveTo(-2.6,1.3,-3.2,1.6).lineTo(-3.3,1.9).curveTo(-3.6,3.5,-4.6,4.6).curveTo(-5.2,5.3,-5.9,5.7).lineTo(-6,6.9).curveTo(-6.2,8.4,-7.1,9.5).lineTo(-7.7,10.2).lineTo(-7.4,11.1).curveTo(-6.7,13.4,-7.9,15.5).lineTo(-8.2,15.9).curveTo(-8.2,16.9,-8.5,17.8).curveTo(-8,18.2,-7.6,18.8).lineTo(-7.2,18.9).curveTo(-6.6,18.1,-5.7,17.6).curveTo(-4.4,17,-3,17).curveTo(-1.4,17,-0,17.8).lineTo(0.2,17.9).lineTo(1,17.4).lineTo(2,17).lineTo(2.2,16.6).curveTo(2.9,15.3,4.1,14.6).curveTo(5.4,13.8,6.9,13.7).curveTo(7.9,13.7,8.9,14).lineTo(9.5,13.6).curveTo(11,13,12.6,13.2).curveTo(13.2,12.1,14.3,11.4).curveTo(15.6,10.6,17.2,10.5).curveTo(18.7,10.4,20,11.1).lineTo(20.8,11.1).curveTo(22.5,11.4,23.8,12.5).lineTo(24.4,13.1).curveTo(25.2,12.9,26.1,13).curveTo(27.5,13,28.7,13.7).curveTo(29.8,14.4,30.6,15.7).curveTo(31.3,16.9,31.4,18.3).curveTo(31.5,21.1,29.2,23).curveTo(27,24.7,24.2,23.9).curveTo(22.9,23.5,21.9,22.6).lineTo(21.5,22.2).curveTo(20.8,22.3,20.1,22.3).curveTo(18.6,22.3,17.4,21.7).lineTo(16.6,21.6).curveTo(16.1,22.5,15.3,23.2).curveTo(14,24.2,12.4,24.3).curveTo(11.2,24.4,10.1,24.1).lineTo(9.9,24.2).lineTo(8.7,24.7).curveTo(8.4,25.6,7.7,26.3).curveTo(6.6,27.3,5.1,27.8).lineTo(5,27.9).curveTo(4.5,29.3,3.2,30.3).curveTo(1.9,31.2,0.4,31.4).curveTo(-0.6,31.5,-1.6,31.2).lineTo(-1.5,32.2).curveTo(-1.5,33.9,-2.4,35.4).curveTo(-3.3,36.8,-5,37.4).curveTo(-6.6,38.1,-8.2,37.7).lineTo(-9.2,37.4).lineTo(-9.3,37.8).curveTo(-9.3,39.4,-10.3,40.7).curveTo(-11.3,42.1,-12.8,42.7).curveTo(-13.8,43.1,-14.8,43.1).lineTo(-15.9,43).closePath();
	var mask_graphics_33 = new cjs.Graphics().moveTo(-15.9,51.5).curveTo(-16.9,51.3,-17.6,50.9).curveTo(-20.1,50.8,-21.6,49).curveTo(-22.1,48.4,-22.4,47.9).lineTo(-22.8,46.7).curveTo(-24,46.7,-25.1,46.3).curveTo(-26,45.9,-26.8,45.2).curveTo(-27.2,44.8,-27.7,44.1).curveTo(-28.1,43.4,-28.3,42.8).curveTo(-28.8,41.4,-28.4,39.8).lineTo(-28.3,39.7).lineTo(-29,39.3).curveTo(-30.2,38.5,-30.8,37.1).curveTo(-31.5,35.7,-31.4,34.3).curveTo(-31.2,31.6,-29.1,30.1).curveTo(-27.4,28.9,-25.5,29).curveTo(-25.2,27.7,-24.4,26.7).curveTo(-23.3,25.4,-21.9,24.9).curveTo(-20.7,24.5,-19.4,24.6).curveTo(-19.4,23.6,-19.1,22.7).curveTo(-18.8,22,-18.3,21.4).curveTo(-18.4,20.6,-18.2,19.9).curveTo(-17.8,18.1,-16.6,17).curveTo(-17.1,16,-17.1,14.8).curveTo(-17.2,13.3,-16.5,12.1).curveTo(-15.9,10.8,-14.7,10).lineTo(-14.4,9.8).curveTo(-14.5,7.9,-13.5,6.3).curveTo(-12.7,5.2,-11.4,4.5).curveTo(-11.3,3.1,-10.5,1.9).curveTo(-9.8,1,-8.8,0.4).curveTo(-9,-0.7,-8.7,-1.8).curveTo(-8.4,-3.1,-7.7,-4).lineTo(-7.6,-5.1).curveTo(-7.4,-6.4,-6.6,-7.5).lineTo(-6.4,-7.7).curveTo(-7.2,-7.7,-7.9,-7.8).lineTo(-8.5,-8).curveTo(-9.6,-7.8,-10.6,-8).curveTo(-11.8,-8.2,-12.7,-8.8).lineTo(-13.5,-8.7).curveTo(-14.8,-8.5,-16.1,-9).curveTo(-17.4,-9.5,-18.3,-10.5).curveTo(-20.2,-12.7,-19.6,-15.5).lineTo(-19.5,-15.8).lineTo(-19.8,-16.3).curveTo(-20.6,-17.8,-20.5,-19.5).curveTo(-20.4,-21.1,-19.3,-22.5).curveTo(-18.2,-23.8,-16.7,-24.4).lineTo(-15.9,-24.6).curveTo(-15.5,-25.7,-14.7,-26.6).lineTo(-14.2,-27.1).lineTo(-14.2,-27.3).curveTo(-13.7,-28.9,-12.3,-30.1).curveTo(-11.6,-30.7,-10.7,-31.1).curveTo(-10.2,-32.4,-9.1,-33.3).curveTo(-8.1,-34.1,-6.7,-34.4).curveTo(-6.2,-36.8,-4,-38.1).lineTo(-2.9,-38.6).curveTo(-2.6,-40,-1.6,-41.3).curveTo(0.2,-43.3,3,-43.2).lineTo(3.2,-43.2).curveTo(3.6,-43.8,4.2,-44.3).lineTo(5.1,-44.9).curveTo(5.2,-46.3,6,-47.6).curveTo(6.8,-48.9,8.2,-49.6).curveTo(9.5,-50.3,11.1,-50.1).lineTo(12,-50).lineTo(12.4,-50.4).curveTo(14.2,-51.9,16.8,-51.5).curveTo(19.3,-51.1,20.6,-49).curveTo(21.5,-47.6,21.5,-45.9).curveTo(21.4,-44.2,20.5,-42.8).curveTo(19,-40.7,16.5,-40.4).curveTo(15.5,-40.3,14.6,-40.5).curveTo(14.1,-40,13.5,-39.7).curveTo(13.5,-38.6,13,-37.6).curveTo(12.3,-36.1,10.8,-35.2).curveTo(9.3,-34.2,7.6,-34.3).lineTo(7.2,-34.4).lineTo(7.2,-34.3).lineTo(6.4,-33.4).curveTo(5.4,-32.5,4.2,-32.2).lineTo(4.1,-31.7).curveTo(3.7,-30.2,2.7,-29.2).curveTo(1.7,-28.1,0.2,-27.7).lineTo(-0.1,-27.7).curveTo(-0.3,-26.9,-0.6,-26.3).curveTo(-1.4,-24.8,-2.9,-24).lineTo(-3.6,-23.8).curveTo(-4,-22.8,-4.7,-22).lineTo(-5,-21.6).lineTo(-5.3,-20.6).curveTo(-5.7,-19.9,-6.1,-19.4).lineTo(-4.9,-19.1).lineTo(-4.5,-19).lineTo(-3.7,-19.6).curveTo(-2.5,-20.3,-1.2,-20.4).curveTo(0.2,-20.5,1.6,-19.9).lineTo(2.7,-19.6).curveTo(4.4,-19.2,5.4,-17.9).lineTo(6,-17.2).curveTo(7.5,-16.5,8.5,-15.1).curveTo(9.4,-13.7,9.4,-12).curveTo(9.4,-10.2,8.4,-8.8).curveTo(7.5,-7.4,5.9,-6.8).lineTo(5.1,-6.5).lineTo(4.7,-5.4).curveTo(4.3,-4.5,3.5,-3.8).curveTo(3.4,-2.4,2.6,-1.1).lineTo(2.4,-0.7).curveTo(2.4,0.1,2.2,0.9).curveTo(1.6,3,-0.3,4.2).curveTo(-0.1,5.5,-0.5,6.8).curveTo(-1,8.4,-2.1,9.4).curveTo(-2.6,9.9,-3.2,10.2).lineTo(-3.3,10.5).curveTo(-3.6,12,-4.6,13.2).curveTo(-5.2,13.8,-5.9,14.2).lineTo(-6,15.5).curveTo(-6.2,16.9,-7.1,18).lineTo(-7.7,18.7).lineTo(-7.4,19.6).curveTo(-6.7,22,-7.9,24).lineTo(-8.2,24.5).curveTo(-8.2,25.4,-8.5,26.4).curveTo(-8,26.8,-7.6,27.3).lineTo(-7.2,27.4).curveTo(-6.6,26.7,-5.7,26.2).curveTo(-4.4,25.5,-3,25.5).curveTo(-1.4,25.5,-0,26.4).lineTo(0.2,26.5).lineTo(1,25.9).lineTo(2,25.5).lineTo(2.2,25.2).curveTo(2.9,23.9,4.1,23.1).curveTo(5.4,22.3,6.9,22.3).curveTo(7.9,22.2,8.9,22.5).lineTo(9.5,22.2).curveTo(11,21.5,12.6,21.8).curveTo(13.2,20.6,14.3,19.9).curveTo(15.6,19.1,17.2,19).curveTo(18.7,19,20,19.6).lineTo(20.8,19.7).curveTo(22.5,19.9,23.8,21.1).lineTo(24.4,21.6).curveTo(25.2,21.5,26.1,21.5).curveTo(27.5,21.6,28.7,22.3).curveTo(29.8,23,30.6,24.2).curveTo(31.3,25.4,31.4,26.8).curveTo(31.5,29.6,29.2,31.5).curveTo(27,33.3,24.2,32.5).curveTo(22.9,32.1,21.9,31.2).lineTo(21.5,30.7).curveTo(20.8,30.9,20.1,30.9).curveTo(18.6,30.9,17.4,30.2).lineTo(16.6,30.2).curveTo(16.1,31,15.3,31.7).curveTo(14,32.7,12.4,32.9).curveTo(11.2,33,10.1,32.6).lineTo(9.9,32.8).lineTo(8.7,33.2).curveTo(8.4,34.1,7.7,34.8).curveTo(6.6,35.9,5.1,36.3).lineTo(5,36.5).curveTo(4.5,37.9,3.2,38.8).curveTo(1.9,39.8,0.4,40).curveTo(-0.6,40.1,-1.6,39.8).lineTo(-1.5,40.7).curveTo(-1.5,42.5,-2.4,43.9).curveTo(-3.3,45.3,-5,46).curveTo(-6.6,46.7,-8.2,46.3).lineTo(-9.2,45.9).lineTo(-9.3,46.3).curveTo(-9.3,47.9,-10.3,49.3).curveTo(-11.3,50.6,-12.8,51.2).curveTo(-13.8,51.6,-14.8,51.6).lineTo(-15.9,51.5).closePath();
	var mask_graphics_35 = new cjs.Graphics().moveTo(-19.3,57.3).curveTo(-20.2,57.2,-21,56.7).curveTo(-23.4,56.6,-25,54.8).curveTo(-25.5,54.2,-25.7,53.7).lineTo(-26.2,52.5).curveTo(-27.4,52.5,-28.4,52.1).curveTo(-29.4,51.7,-30.1,51).curveTo(-30.6,50.6,-31,49.9).curveTo(-31.4,49.2,-31.6,48.6).curveTo(-32.1,47.2,-31.7,45.6).lineTo(-31.7,45.5).lineTo(-32.3,45.1).curveTo(-33.5,44.3,-34.2,42.9).curveTo(-34.8,41.5,-34.7,40.1).curveTo(-34.6,37.4,-32.4,35.9).curveTo(-30.8,34.7,-28.9,34.9).curveTo(-28.6,33.6,-27.7,32.5).curveTo(-26.7,31.2,-25.2,30.7).curveTo(-24.1,30.3,-22.8,30.4).curveTo(-22.8,29.4,-22.4,28.5).curveTo(-22.2,27.8,-21.7,27.2).curveTo(-21.8,26.5,-21.6,25.7).curveTo(-21.2,24,-20,22.9).curveTo(-20.5,21.8,-20.5,20.6).curveTo(-20.5,19.1,-19.9,17.9).curveTo(-19.3,16.6,-18.1,15.8).lineTo(-17.7,15.6).curveTo(-17.8,13.7,-16.8,12.1).curveTo(-16.1,11,-14.8,10.3).curveTo(-14.7,8.9,-13.8,7.7).curveTo(-13.2,6.8,-12.2,6.2).curveTo(-12.3,5.1,-12.1,4).curveTo(-11.8,2.7,-11.1,1.8).lineTo(-11,0.7).curveTo(-10.7,-0.6,-9.9,-1.7).lineTo(-9.8,-1.9).curveTo(-10.5,-1.8,-11.3,-2).lineTo(-11.9,-2.2).curveTo(-13,-2,-14,-2.2).curveTo(-15.1,-2.3,-16.1,-3).lineTo(-16.8,-2.9).curveTo(-18.1,-2.7,-19.5,-3.2).curveTo(-20.8,-3.7,-21.7,-4.7).curveTo(-23.6,-6.9,-22.9,-9.7).lineTo(-22.9,-10).lineTo(-23.1,-10.5).curveTo(-24,-12,-23.8,-13.7).curveTo(-23.7,-15.3,-22.6,-16.7).curveTo(-21.6,-18,-20,-18.6).lineTo(-19.2,-18.8).curveTo(-18.9,-19.8,-18.1,-20.8).lineTo(-17.6,-21.3).lineTo(-17.5,-21.5).curveTo(-17.1,-23.1,-15.7,-24.3).curveTo(-14.9,-24.9,-14.1,-25.2).curveTo(-13.6,-26.6,-12.4,-27.5).curveTo(-11.4,-28.3,-10.1,-28.6).curveTo(-9.6,-31,-7.4,-32.3).lineTo(-6.2,-32.7).curveTo(-6,-34.2,-4.9,-35.5).curveTo(-3.2,-37.5,-0.3,-37.4).lineTo(-0.2,-37.4).curveTo(0.2,-38,0.8,-38.5).lineTo(1.7,-39.1).curveTo(1.8,-40.5,2.6,-41.8).curveTo(3.5,-43.1,4.8,-43.8).curveTo(6.2,-44.5,7.8,-44.3).lineTo(8.6,-44.2).lineTo(9,-44.6).curveTo(10.6,-45.9,12.8,-45.8).lineTo(13.4,-46.9).curveTo(14.3,-48.2,15.8,-48.9).curveTo(16.6,-49.2,17.4,-49.3).curveTo(17.9,-50.4,18.9,-51.2).curveTo(20,-52.1,21.4,-52.3).lineTo(21.8,-52.8).curveTo(22.5,-54,23.8,-54.6).lineTo(24.5,-55).lineTo(24.6,-55.1).curveTo(26,-57.2,28.6,-57.4).curveTo(31,-57.7,32.9,-56).curveTo(34.7,-54.4,34.8,-51.9).curveTo(34.8,-50.1,33.8,-48.6).curveTo(32.8,-47.3,31.3,-46.7).lineTo(31.2,-46.6).curveTo(30.6,-45.7,29.6,-45.1).curveTo(28.6,-44.4,27.4,-44.2).curveTo(26.8,-43.1,25.8,-42.3).curveTo(24.7,-41.5,23.1,-41.3).lineTo(23.1,-41.3).curveTo(22.4,-39.9,21,-39).curveTo(19.7,-38.2,18.1,-38.1).lineTo(17.7,-38.1).lineTo(17.2,-37).curveTo(15.7,-34.9,13.1,-34.6).curveTo(12.1,-34.5,11.2,-34.7).curveTo(10.7,-34.2,10.1,-33.9).curveTo(10.1,-32.8,9.7,-31.8).curveTo(9,-30.3,7.4,-29.4).curveTo(5.9,-28.4,4.2,-28.5).lineTo(3.9,-28.5).lineTo(3.8,-28.5).lineTo(3.1,-27.6).curveTo(2,-26.7,0.9,-26.4).lineTo(0.8,-25.9).curveTo(0.4,-24.4,-0.6,-23.4).curveTo(-1.7,-22.3,-3.2,-21.9).lineTo(-3.4,-21.8).curveTo(-3.6,-21.1,-4,-20.5).curveTo(-4.8,-19,-6.3,-18.2).lineTo(-6.9,-17.9).curveTo(-7.3,-16.9,-8,-16.2).lineTo(-8.4,-15.8).lineTo(-8.7,-14.8).curveTo(-9,-14.1,-9.5,-13.5).lineTo(-8.2,-13.3).lineTo(-7.9,-13.1).lineTo(-7,-13.8).curveTo(-5.9,-14.5,-4.6,-14.6).curveTo(-3.1,-14.7,-1.8,-14).lineTo(-0.6,-13.8).curveTo(1,-13.4,2.1,-12.1).lineTo(2.6,-11.3).curveTo(4.2,-10.7,5.1,-9.3).curveTo(6,-7.9,6,-6.2).curveTo(6,-4.4,5.1,-3).curveTo(4.1,-1.6,2.5,-1).lineTo(1.8,-0.7).lineTo(1.4,0.4).curveTo(0.9,1.3,0.2,2.1).curveTo(0,3.4,-0.7,4.7).lineTo(-1,5.1).curveTo(-1,5.9,-1.2,6.7).curveTo(-1.7,8.9,-3.7,10.1).curveTo(-3.5,11.3,-3.8,12.6).curveTo(-4.3,14.2,-5.5,15.2).curveTo(-6,15.7,-6.6,16).lineTo(-6.6,16.3).curveTo(-6.9,17.8,-8,19).curveTo(-8.6,19.6,-9.3,20).lineTo(-9.3,21.3).curveTo(-9.6,22.7,-10.4,23.8).lineTo(-11.1,24.5).lineTo(-10.7,25.4).curveTo(-10.1,27.8,-11.3,29.8).lineTo(-11.6,30.3).curveTo(-11.5,31.3,-11.9,32.2).curveTo(-11.4,32.6,-11,33.1).lineTo(-10.6,33.2).curveTo(-9.9,32.5,-9,32).curveTo(-7.8,31.3,-6.4,31.3).curveTo(-4.8,31.3,-3.4,32.2).lineTo(-3.2,32.3).lineTo(-2.3,31.7).lineTo(-1.4,31.4).lineTo(-1.2,31).curveTo(-0.5,29.7,0.8,28.9).curveTo(2,28.1,3.5,28.1).curveTo(4.6,28.1,5.5,28.4).lineTo(6.2,28).curveTo(7.6,27.4,9.2,27.6).curveTo(9.9,26.4,11,25.7).curveTo(12.3,24.9,13.8,24.8).curveTo(15.3,24.8,16.6,25.4).lineTo(17.4,25.5).curveTo(19.1,25.7,20.5,26.9).lineTo(21,27.5).curveTo(21.8,27.3,22.7,27.3).curveTo(24.2,27.4,25.3,28.1).curveTo(26.5,28.8,27.2,30).curveTo(28,31.2,28,32.6).curveTo(28.2,35.4,25.9,37.3).curveTo(23.6,39.1,20.8,38.3).curveTo(19.5,37.9,18.5,37).lineTo(18.1,36.5).curveTo(17.4,36.7,16.7,36.7).curveTo(15.2,36.7,14.1,36).lineTo(13.3,36).curveTo(12.8,36.8,11.9,37.5).curveTo(10.7,38.5,9,38.7).curveTo(7.8,38.8,6.7,38.5).lineTo(6.5,38.6).lineTo(5.4,39.1).curveTo(5,39.9,4.3,40.6).curveTo(3.2,41.7,1.7,42.1).lineTo(1.7,42.3).curveTo(1.1,43.7,-0.2,44.6).curveTo(-1.4,45.6,-2.9,45.8).curveTo(-4,45.9,-4.9,45.6).lineTo(-4.8,46.5).curveTo(-4.8,48.3,-5.7,49.7).curveTo(-6.7,51.1,-8.3,51.8).curveTo(-10,52.5,-11.6,52.1).lineTo(-12.6,51.8).lineTo(-12.6,52.1).curveTo(-12.7,53.7,-13.7,55.1).curveTo(-14.6,56.4,-16.1,57).curveTo(-17.1,57.4,-18.2,57.4).lineTo(-19.3,57.3).closePath();
	var mask_graphics_37 = new cjs.Graphics().moveTo(-23.4,65.5).curveTo(-24.3,65.4,-25.1,64.9).curveTo(-27.5,64.8,-29.1,63).curveTo(-29.6,62.4,-29.8,61.9).lineTo(-30.3,60.7).curveTo(-31.4,60.7,-32.5,60.3).curveTo(-33.5,59.9,-34.2,59.2).curveTo(-34.7,58.8,-35.1,58.1).curveTo(-35.5,57.4,-35.7,56.8).curveTo(-36.2,55.4,-35.8,53.8).lineTo(-35.8,53.7).lineTo(-36.4,53.3).curveTo(-37.6,52.5,-38.3,51.1).curveTo(-38.9,49.7,-38.8,48.3).curveTo(-38.7,45.6,-36.5,44.1).curveTo(-34.9,42.9,-32.9,43.1).curveTo(-32.7,41.8,-31.8,40.7).curveTo(-30.8,39.4,-29.3,38.9).curveTo(-28.1,38.5,-26.9,38.6).curveTo(-26.9,37.6,-26.5,36.7).curveTo(-26.2,36,-25.8,35.4).curveTo(-25.8,34.7,-25.7,33.9).curveTo(-25.2,32.1,-24.1,31.1).curveTo(-24.6,30,-24.6,28.8).curveTo(-24.6,27.3,-24,26.1).curveTo(-23.4,24.8,-22.2,24).lineTo(-21.8,23.8).curveTo(-21.9,21.9,-20.9,20.3).curveTo(-20.2,19.2,-18.9,18.5).curveTo(-18.7,17.1,-17.9,15.9).curveTo(-17.3,15,-16.2,14.4).curveTo(-16.4,13.3,-16.2,12.2).curveTo(-15.9,10.9,-15.1,10).lineTo(-15.1,8.9).curveTo(-14.8,7.6,-14,6.5).lineTo(-13.9,6.3).curveTo(-14.6,6.3,-15.4,6.2).lineTo(-16,6).curveTo(-17,6.2,-18.1,6).curveTo(-19.2,5.8,-20.2,5.2).lineTo(-20.9,5.3).curveTo(-22.2,5.5,-23.6,5).curveTo(-24.9,4.5,-25.8,3.5).curveTo(-27.7,1.3,-27,-1.5).lineTo(-26.9,-1.8).lineTo(-27.2,-2.3).curveTo(-28.1,-3.8,-27.9,-5.5).curveTo(-27.8,-7.1,-26.7,-8.5).curveTo(-25.7,-9.8,-24.1,-10.4).lineTo(-23.3,-10.6).curveTo(-23,-11.6,-22.2,-12.6).lineTo(-21.7,-13.1).lineTo(-21.6,-13.3).curveTo(-21.2,-14.9,-19.8,-16.1).curveTo(-19,-16.7,-18.1,-17).curveTo(-17.6,-18.4,-16.5,-19.3).curveTo(-15.5,-20.1,-14.2,-20.4).curveTo(-13.6,-22.8,-11.5,-24.1).lineTo(-10.3,-24.5).curveTo(-10.1,-26,-9,-27.3).curveTo(-7.3,-29.3,-4.4,-29.2).lineTo(-4.2,-29.2).curveTo(-3.8,-29.8,-3.3,-30.3).lineTo(-2.4,-30.9).curveTo(-2.2,-32.3,-1.5,-33.6).curveTo(-0.6,-34.9,0.7,-35.6).curveTo(2.1,-36.3,3.7,-36.1).lineTo(4.5,-36).lineTo(4.9,-36.4).curveTo(6.6,-37.7,8.7,-37.6).lineTo(9.3,-38.7).curveTo(10.2,-40,11.7,-40.7).curveTo(12.5,-41,13.3,-41.1).curveTo(13.8,-42.2,14.8,-43).curveTo(15.9,-43.9,17.4,-44.1).lineTo(17.7,-44.6).curveTo(18.4,-45.8,19.7,-46.4).lineTo(20.4,-46.8).lineTo(20.5,-46.9).curveTo(21.9,-49,24.5,-49.2).lineTo(24.8,-49.2).lineTo(24.9,-49.5).curveTo(25.5,-51.1,26.7,-52).lineTo(27.6,-52.5).lineTo(27.6,-52.7).curveTo(27.8,-53.6,28.2,-54.3).lineTo(28.1,-54.5).curveTo(26.7,-54.8,25.5,-55.8).curveTo(24.3,-56.9,23.9,-58.4).curveTo(23.5,-59.5,23.7,-60.8).curveTo(23.8,-61.6,24.2,-62.5).curveTo(25.1,-64.3,26.9,-65.1).curveTo(29.5,-66.3,32,-64.9).curveTo(33.2,-64.2,33.9,-63.1).lineTo(34.4,-62.2).curveTo(35.8,-61.9,36.8,-61).curveTo(37.8,-60.2,38.3,-59).curveTo(39,-57.5,38.7,-55.8).curveTo(38.6,-54.9,38.2,-54.1).curveTo(38.6,-53.2,38.7,-52.2).curveTo(38.8,-50.4,37.9,-48.9).curveTo(37.1,-47.4,35.7,-46.7).curveTo(35.5,-45.2,34.6,-44.1).curveTo(33.6,-42.9,32,-42.3).curveTo(31.2,-42,30.4,-41.9).curveTo(30.2,-41.1,29.7,-40.4).curveTo(28.7,-39.1,27.2,-38.5).lineTo(27.1,-38.4).curveTo(26.5,-37.5,25.5,-36.9).curveTo(24.5,-36.2,23.3,-36).curveTo(22.7,-34.9,21.7,-34.1).curveTo(20.6,-33.3,19,-33.1).lineTo(19,-33.1).curveTo(18.3,-31.7,16.9,-30.8).curveTo(15.6,-30,14,-29.9).lineTo(13.7,-29.9).lineTo(13.1,-28.8).curveTo(11.6,-26.7,9,-26.4).curveTo(8,-26.3,7.2,-26.5).curveTo(6.7,-26,6.1,-25.7).curveTo(6,-24.6,5.6,-23.6).curveTo(4.9,-22.1,3.3,-21.2).curveTo(1.8,-20.2,0.1,-20.3).lineTo(-0.2,-20.3).lineTo(-0.3,-20.3).lineTo(-1,-19.4).curveTo(-2,-18.5,-3.2,-18.2).lineTo(-3.3,-17.7).curveTo(-3.7,-16.2,-4.7,-15.2).curveTo(-5.8,-14.1,-7.3,-13.7).lineTo(-7.5,-13.6).curveTo(-7.7,-12.9,-8.1,-12.3).curveTo(-8.9,-10.8,-10.4,-10).lineTo(-11,-9.7).curveTo(-11.4,-8.7,-12.1,-8).lineTo(-12.5,-7.6).lineTo(-12.8,-6.6).curveTo(-13.1,-5.9,-13.6,-5.3).lineTo(-12.3,-5.1).lineTo(-12,-4.9).lineTo(-11.1,-5.6).curveTo(-10,-6.3,-8.7,-6.4).curveTo(-7.2,-6.5,-5.9,-5.8).lineTo(-4.7,-5.6).curveTo(-3.1,-5.2,-2,-3.9).lineTo(-1.5,-3.1).curveTo(0.1,-2.5,1,-1.1).curveTo(1.9,0.3,1.9,2).curveTo(1.9,3.8,1,5.2).curveTo(0,6.6,-1.6,7.2).lineTo(-2.3,7.5).lineTo(-2.7,8.6).curveTo(-3.2,9.5,-3.9,10.3).curveTo(-4,11.6,-4.8,12.9).lineTo(-5.1,13.3).curveTo(-5,14.1,-5.3,14.9).curveTo(-5.8,17.1,-7.8,18.3).curveTo(-7.5,19.5,-7.9,20.8).curveTo(-8.4,22.4,-9.6,23.4).curveTo(-10.1,23.9,-10.7,24.2).lineTo(-10.7,24.5).curveTo(-11,26,-12.1,27.2).curveTo(-12.6,27.8,-13.4,28.2).lineTo(-13.4,29.5).curveTo(-13.7,30.9,-14.5,32).lineTo(-15.2,32.7).lineTo(-14.8,33.6).curveTo(-14.2,36,-15.4,38).lineTo(-15.7,38.5).curveTo(-15.6,39.5,-15.9,40.4).curveTo(-15.4,40.8,-15,41.3).lineTo(-14.7,41.4).curveTo(-14,40.7,-13.1,40.2).curveTo(-11.9,39.5,-10.5,39.5).curveTo(-8.9,39.5,-7.5,40.4).lineTo(-7.3,40.5).lineTo(-6.4,39.9).lineTo(-5.4,39.6).lineTo(-5.3,39.2).curveTo(-4.6,37.9,-3.3,37.1).curveTo(-2.1,36.3,-0.6,36.3).curveTo(0.5,36.3,1.4,36.6).lineTo(2.1,36.2).curveTo(3.5,35.5,5.1,35.8).curveTo(5.8,34.6,6.9,33.9).curveTo(8.2,33.1,9.7,33).curveTo(11.2,33,12.6,33.6).lineTo(13.3,33.7).curveTo(15,33.9,16.4,35.1).lineTo(17,35.7).curveTo(17.8,35.5,18.6,35.5).curveTo(20.1,35.6,21.2,36.3).curveTo(22.4,37,23.1,38.2).curveTo(23.9,39.4,23.9,40.8).curveTo(24.1,43.6,21.8,45.5).curveTo(19.5,47.3,16.7,46.5).curveTo(15.4,46.1,14.4,45.2).lineTo(14,44.7).curveTo(13.4,44.9,12.6,44.9).curveTo(11.2,44.9,10,44.2).lineTo(9.2,44.2).curveTo(8.7,45,7.8,45.7).curveTo(6.6,46.7,4.9,46.9).curveTo(3.7,47,2.7,46.7).lineTo(2.4,46.8).lineTo(1.3,47.3).curveTo(0.9,48.1,0.2,48.8).curveTo(-0.8,49.9,-2.3,50.3).lineTo(-2.4,50.5).curveTo(-3,51.9,-4.3,52.8).curveTo(-5.5,53.8,-7,54).curveTo(-8,54.1,-9,53.8).lineTo(-8.9,54.7).curveTo(-8.9,56.5,-9.8,57.9).curveTo(-10.8,59.3,-12.4,60).curveTo(-14.1,60.7,-15.7,60.3).lineTo(-16.7,60).lineTo(-16.7,60.3).curveTo(-16.8,61.9,-17.8,63.3).curveTo(-18.7,64.6,-20.2,65.2).curveTo(-21.2,65.6,-22.3,65.6).lineTo(-23.4,65.5).closePath();
	var mask_graphics_39 = new cjs.Graphics().moveTo(-23.4,66.5).curveTo(-24.3,66.3,-25.1,65.9).curveTo(-27.5,65.8,-29.1,63.9).curveTo(-29.6,63.4,-29.8,62.8).lineTo(-30.3,61.7).curveTo(-31.4,61.7,-32.5,61.2).curveTo(-33.5,60.9,-34.2,60.1).curveTo(-34.7,59.7,-35.1,59).curveTo(-35.5,58.4,-35.7,57.8).curveTo(-36.2,56.4,-35.8,54.8).lineTo(-35.8,54.7).lineTo(-36.4,54.3).curveTo(-37.6,53.5,-38.3,52.1).curveTo(-38.9,50.7,-38.8,49.2).curveTo(-38.7,46.6,-36.5,45.1).curveTo(-34.9,43.9,-32.9,44).curveTo(-32.7,42.7,-31.8,41.6).curveTo(-30.8,40.3,-29.3,39.8).curveTo(-28.1,39.4,-26.9,39.6).curveTo(-26.9,38.6,-26.5,37.6).curveTo(-26.2,36.9,-25.8,36.4).curveTo(-25.8,35.6,-25.7,34.9).curveTo(-25.2,33.1,-24.1,32).curveTo(-24.6,31,-24.6,29.7).curveTo(-24.6,28.3,-24,27).curveTo(-23.4,25.8,-22.2,25).lineTo(-21.8,24.8).curveTo(-21.9,22.9,-20.9,21.3).curveTo(-20.2,20.1,-18.9,19.5).curveTo(-18.7,18.1,-17.9,16.9).curveTo(-17.3,15.9,-16.2,15.4).curveTo(-16.4,14.3,-16.2,13.1).curveTo(-15.9,11.9,-15.1,10.9).lineTo(-15.1,9.9).curveTo(-14.8,8.5,-14,7.4).lineTo(-13.9,7.3).curveTo(-14.6,7.3,-15.4,7.1).lineTo(-16,6.9).curveTo(-17,7.2,-18.1,7).curveTo(-19.2,6.8,-20.2,6.2).lineTo(-20.9,6.3).curveTo(-22.2,6.4,-23.6,5.9).curveTo(-24.9,5.4,-25.8,4.4).curveTo(-27.7,2.2,-27,-0.6).lineTo(-26.9,-0.9).lineTo(-27.2,-1.3).curveTo(-28.1,-2.9,-27.9,-4.5).curveTo(-27.8,-6.2,-26.7,-7.5).curveTo(-25.7,-8.9,-24.1,-9.4).lineTo(-23.3,-9.6).curveTo(-23,-10.7,-22.2,-11.6).lineTo(-21.7,-12.1).lineTo(-21.6,-12.4).curveTo(-21.2,-14,-19.8,-15.1).curveTo(-19,-15.8,-18.1,-16.1).curveTo(-17.6,-17.4,-16.5,-18.3).curveTo(-15.5,-19.2,-14.2,-19.4).curveTo(-13.6,-21.8,-11.5,-23.1).lineTo(-10.3,-23.6).curveTo(-10.1,-25.1,-9,-26.3).curveTo(-7.3,-28.4,-4.4,-28.2).lineTo(-4.2,-28.2).curveTo(-3.8,-28.8,-3.3,-29.3).lineTo(-2.4,-29.9).curveTo(-2.2,-31.4,-1.5,-32.6).curveTo(-0.6,-33.9,0.7,-34.6).curveTo(2.1,-35.3,3.7,-35.2).lineTo(4.5,-35).lineTo(4.9,-35.4).curveTo(6.6,-36.8,8.7,-36.6).lineTo(9.3,-37.8).curveTo(10.2,-39,11.7,-39.7).curveTo(12.5,-40.1,13.3,-40.2).curveTo(13.8,-41.3,14.8,-42).curveTo(15.9,-42.9,17.4,-43.1).lineTo(17.7,-43.7).curveTo(18.4,-44.8,19.7,-45.5).lineTo(20.4,-45.8).lineTo(20.5,-45.9).curveTo(21.9,-48,24.5,-48.3).lineTo(24.8,-48.3).lineTo(24.9,-48.5).curveTo(25.5,-50.1,26.7,-51.1).lineTo(27.6,-51.6).lineTo(27.6,-51.7).curveTo(27.8,-52.6,28.2,-53.4).lineTo(28.1,-53.5).curveTo(26.7,-53.9,25.5,-54.9).lineTo(25,-55.4).curveTo(23.8,-55.2,22.7,-55.6).curveTo(22,-54.7,21,-54.2).curveTo(19.3,-53.3,17.5,-53.6).curveTo(16.8,-52.4,15.5,-51.7).curveTo(14,-50.8,12.1,-51.1).curveTo(11,-51.2,10,-51.7).curveTo(9,-51.2,7.8,-51.1).curveTo(6.3,-51,4.9,-51.7).curveTo(3.6,-52.4,2.7,-53.7).curveTo(1.6,-55.6,2,-57.7).curveTo(2.4,-59.9,4.1,-61.1).curveTo(5.2,-62,6.8,-62.3).curveTo(8.3,-62.4,9.7,-61.8).lineTo(10.2,-61.6).lineTo(10.8,-61.9).curveTo(12.1,-62.4,13.5,-62.2).lineTo(13.6,-62.2).curveTo(13.9,-62.7,14.3,-63.2).curveTo(15.4,-64.2,16.9,-64.6).curveTo(18.3,-65,19.7,-64.7).lineTo(19.9,-64.6).curveTo(20.8,-65.6,21.9,-66.1).curveTo(23.2,-66.7,24.6,-66.6).curveTo(26,-66.5,27.2,-65.7).curveTo(28,-65.2,28.5,-64.6).curveTo(30.3,-64.9,32,-63.9).curveTo(33.2,-63.3,33.9,-62.1).lineTo(34.4,-61.2).curveTo(35.8,-61,36.8,-60.1).curveTo(37.8,-59.3,38.3,-58.1).curveTo(39,-56.6,38.7,-54.8).curveTo(38.6,-53.9,38.2,-53.1).curveTo(38.6,-52.2,38.7,-51.2).curveTo(38.8,-49.5,37.9,-48).curveTo(37.1,-46.5,35.7,-45.8).curveTo(35.5,-44.3,34.6,-43.2).curveTo(33.6,-41.9,32,-41.3).curveTo(31.2,-41,30.4,-41).curveTo(30.2,-40.2,29.7,-39.5).curveTo(28.7,-38.2,27.2,-37.5).lineTo(27.1,-37.5).curveTo(26.5,-36.6,25.5,-35.9).curveTo(24.5,-35.2,23.3,-35).curveTo(22.7,-33.9,21.7,-33.2).curveTo(20.6,-32.3,19,-32.1).lineTo(19,-32.1).curveTo(18.3,-30.7,16.9,-29.9).curveTo(15.6,-29,14,-29).lineTo(13.7,-29).lineTo(13.1,-27.9).curveTo(11.6,-25.7,9,-25.5).curveTo(8,-25.4,7.2,-25.5).curveTo(6.7,-25.1,6.1,-24.7).curveTo(6,-23.7,5.6,-22.7).curveTo(4.9,-21.2,3.3,-20.2).curveTo(1.8,-19.3,0.1,-19.4).lineTo(-0.2,-19.4).lineTo(-0.3,-19.3).lineTo(-1,-18.4).curveTo(-2,-17.5,-3.2,-17.2).lineTo(-3.3,-16.8).curveTo(-3.7,-15.3,-4.7,-14.2).curveTo(-5.8,-13.2,-7.3,-12.8).lineTo(-7.5,-12.7).curveTo(-7.7,-12,-8.1,-11.3).curveTo(-8.9,-9.9,-10.4,-9.1).lineTo(-11,-8.8).curveTo(-11.4,-7.8,-12.1,-7).lineTo(-12.5,-6.7).lineTo(-12.8,-5.7).curveTo(-13.1,-5,-13.6,-4.4).lineTo(-12.3,-4.1).lineTo(-12,-4).lineTo(-11.1,-4.6).curveTo(-10,-5.3,-8.7,-5.4).curveTo(-7.2,-5.5,-5.9,-4.9).lineTo(-4.7,-4.7).curveTo(-3.1,-4.2,-2,-3).lineTo(-1.5,-2.2).curveTo(0.1,-1.5,1,-0.2).curveTo(1.9,1.2,1.9,3).curveTo(1.9,4.7,1,6.1).curveTo(0,7.5,-1.6,8.2).lineTo(-2.3,8.4).lineTo(-2.7,9.5).curveTo(-3.2,10.5,-3.9,11.2).curveTo(-4,12.6,-4.8,13.8).lineTo(-5.1,14.2).curveTo(-5,15,-5.3,15.8).curveTo(-5.8,18,-7.8,19.2).curveTo(-7.5,20.4,-7.9,21.7).curveTo(-8.4,23.3,-9.6,24.4).curveTo(-10.1,24.8,-10.7,25.1).lineTo(-10.7,25.4).curveTo(-11,27,-12.1,28.1).curveTo(-12.6,28.8,-13.4,29.2).lineTo(-13.4,30.4).curveTo(-13.7,31.9,-14.5,33).lineTo(-15.2,33.7).lineTo(-14.8,34.6).curveTo(-14.2,36.9,-15.4,39).lineTo(-15.7,39.5).curveTo(-15.6,40.4,-15.9,41.4).curveTo(-15.4,41.8,-15,42.3).lineTo(-14.7,42.4).curveTo(-14,41.6,-13.1,41.1).curveTo(-11.9,40.5,-10.5,40.5).curveTo(-8.9,40.5,-7.5,41.3).lineTo(-7.3,41.5).lineTo(-6.4,40.9).lineTo(-5.4,40.5).lineTo(-5.3,40.1).curveTo(-4.6,38.8,-3.3,38.1).curveTo(-2.1,37.3,-0.6,37.2).curveTo(0.5,37.2,1.4,37.5).lineTo(2.1,37.1).curveTo(3.5,36.5,5.1,36.7).curveTo(5.8,35.6,6.9,34.9).curveTo(8.2,34.1,9.7,34).curveTo(11.2,33.9,12.6,34.6).lineTo(13.3,34.6).curveTo(15,34.9,16.4,36).lineTo(17,36.6).curveTo(17.8,36.4,18.6,36.5).curveTo(20.1,36.5,21.2,37.2).curveTo(22.4,37.9,23.1,39.2).curveTo(23.9,40.4,23.9,41.8).curveTo(24.1,44.6,21.8,46.5).curveTo(19.5,48.2,16.7,47.4).curveTo(15.4,47,14.4,46.1).lineTo(14,45.7).curveTo(13.4,45.8,12.6,45.8).curveTo(11.2,45.8,10,45.2).lineTo(9.2,45.2).curveTo(8.7,46,7.8,46.7).curveTo(6.6,47.7,4.9,47.8).curveTo(3.7,47.9,2.7,47.6).lineTo(2.4,47.7).lineTo(1.3,48.2).curveTo(0.9,49.1,0.2,49.8).curveTo(-0.8,50.9,-2.3,51.3).lineTo(-2.4,51.4).curveTo(-3,52.8,-4.3,53.8).curveTo(-5.5,54.7,-7,54.9).curveTo(-8,55,-9,54.8).lineTo(-8.9,55.7).curveTo(-8.9,57.4,-9.8,58.9).curveTo(-10.8,60.3,-12.4,60.9).curveTo(-14.1,61.6,-15.7,61.2).lineTo(-16.7,60.9).lineTo(-16.7,61.3).curveTo(-16.8,62.9,-17.8,64.2).curveTo(-18.7,65.6,-20.2,66.2).curveTo(-21.2,66.6,-22.3,66.6).lineTo(-23.4,66.5).closePath();
	var mask_graphics_41 = new cjs.Graphics().moveTo(-23.4,66.5).curveTo(-24.3,66.3,-25.1,65.9).curveTo(-27.5,65.8,-29.1,63.9).curveTo(-29.6,63.4,-29.8,62.8).lineTo(-30.3,61.7).curveTo(-31.4,61.7,-32.5,61.2).curveTo(-33.5,60.9,-34.2,60.1).curveTo(-34.7,59.7,-35.1,59).curveTo(-35.5,58.4,-35.7,57.8).curveTo(-36.2,56.4,-35.8,54.8).lineTo(-35.8,54.7).lineTo(-36.4,54.3).curveTo(-37.6,53.5,-38.3,52.1).curveTo(-38.9,50.7,-38.8,49.2).curveTo(-38.7,46.6,-36.5,45.1).curveTo(-34.9,43.9,-32.9,44).curveTo(-32.7,42.7,-31.8,41.6).curveTo(-30.8,40.3,-29.3,39.8).curveTo(-28.1,39.4,-26.9,39.6).curveTo(-26.9,38.6,-26.5,37.6).curveTo(-26.2,36.9,-25.8,36.4).curveTo(-25.8,35.6,-25.7,34.9).curveTo(-25.2,33.1,-24.1,32).curveTo(-24.6,31,-24.6,29.7).curveTo(-24.6,28.3,-24,27).curveTo(-23.4,25.8,-22.2,25).lineTo(-21.8,24.8).curveTo(-21.9,22.9,-20.9,21.3).curveTo(-20.2,20.1,-18.9,19.5).curveTo(-18.7,18.1,-17.9,16.9).curveTo(-17.3,15.9,-16.2,15.4).curveTo(-16.4,14.3,-16.2,13.1).curveTo(-15.9,11.9,-15.1,10.9).lineTo(-15.1,9.9).curveTo(-14.8,8.5,-14,7.4).lineTo(-13.9,7.3).curveTo(-14.6,7.3,-15.4,7.1).lineTo(-16,6.9).curveTo(-17,7.2,-18.1,7).curveTo(-19.2,6.8,-20.2,6.2).lineTo(-20.9,6.3).curveTo(-22.2,6.4,-23.6,5.9).curveTo(-24.9,5.4,-25.8,4.4).curveTo(-27.7,2.2,-27,-0.6).lineTo(-26.9,-0.9).lineTo(-27.2,-1.3).curveTo(-28.1,-2.9,-27.9,-4.5).curveTo(-27.8,-6.2,-26.7,-7.5).curveTo(-25.7,-8.9,-24.1,-9.4).lineTo(-23.3,-9.6).curveTo(-23,-10.7,-22.2,-11.6).lineTo(-21.7,-12.1).lineTo(-21.6,-12.4).curveTo(-21.2,-14,-19.8,-15.1).curveTo(-19,-15.8,-18.1,-16.1).curveTo(-17.6,-17.4,-16.5,-18.3).curveTo(-15.5,-19.2,-14.2,-19.4).curveTo(-13.6,-21.8,-11.5,-23.1).lineTo(-10.3,-23.6).curveTo(-10.1,-25.1,-9,-26.3).curveTo(-7.3,-28.4,-4.4,-28.2).lineTo(-4.2,-28.2).curveTo(-3.8,-28.8,-3.3,-29.3).lineTo(-2.4,-29.9).curveTo(-2.2,-31.4,-1.5,-32.6).curveTo(-0.6,-33.9,0.7,-34.6).curveTo(2.1,-35.3,3.7,-35.2).lineTo(4.5,-35).lineTo(4.9,-35.4).curveTo(6.6,-36.8,8.7,-36.6).lineTo(9.3,-37.8).curveTo(10.2,-39,11.7,-39.7).curveTo(12.5,-40.1,13.3,-40.2).curveTo(13.8,-41.3,14.8,-42).curveTo(15.9,-42.9,17.4,-43.1).lineTo(17.7,-43.7).curveTo(18.4,-44.8,19.7,-45.5).lineTo(20.4,-45.8).lineTo(20.5,-45.9).curveTo(21.9,-48,24.5,-48.3).lineTo(24.8,-48.3).lineTo(24.9,-48.5).curveTo(25.5,-50.1,26.7,-51.1).lineTo(27.6,-51.6).lineTo(27.6,-51.7).curveTo(27.8,-52.6,28.2,-53.4).lineTo(28.1,-53.5).curveTo(26.7,-53.9,25.5,-54.9).lineTo(25,-55.4).curveTo(23.8,-55.2,22.7,-55.6).curveTo(22,-54.7,21,-54.2).curveTo(19.3,-53.3,17.5,-53.6).curveTo(16.8,-52.4,15.5,-51.7).curveTo(14,-50.8,12.1,-51.1).curveTo(11,-51.2,10,-51.7).curveTo(9.1,-51.2,8.1,-51.1).curveTo(7.7,-50.4,7.1,-49.8).curveTo(6,-48.7,4.7,-48.3).lineTo(3.9,-48.1).curveTo(3.4,-47.5,2.6,-47).curveTo(1.7,-46.3,0.6,-46.1).lineTo(0.5,-46).curveTo(-0.2,-44.4,-1.6,-43.6).lineTo(-1.8,-43.5).lineTo(-1.8,-43.2).curveTo(-2.1,-41.8,-3,-40.7).lineTo(-3.6,-40).curveTo(-3.7,-39.1,-4.2,-38.1).curveTo(-5,-36.4,-6.8,-35.6).curveTo(-9.1,-34.6,-11.3,-35.5).curveTo(-13.6,-36.5,-14.5,-38.9).curveTo(-15.3,-41.3,-14.1,-43.4).curveTo(-13.6,-44.3,-12.9,-44.8).lineTo(-12.7,-45.9).curveTo(-12.2,-47.6,-10.9,-48.6).lineTo(-10.1,-49.1).lineTo(-10,-49.6).curveTo(-9.6,-51.2,-8.4,-52.4).curveTo(-7.2,-53.5,-5.7,-53.8).lineTo(-5.7,-54).curveTo(-4.6,-56.4,-1.9,-57.1).lineTo(-1.3,-57.2).lineTo(-0.7,-57.8).curveTo(0.7,-59.1,2.5,-59.3).curveTo(3.1,-60.4,4.1,-61.1).curveTo(5.2,-62,6.8,-62.3).curveTo(8.3,-62.4,9.7,-61.8).lineTo(10.2,-61.6).lineTo(10.8,-61.9).curveTo(12.1,-62.4,13.5,-62.2).lineTo(13.6,-62.2).curveTo(13.9,-62.7,14.3,-63.2).curveTo(15.4,-64.2,16.9,-64.6).curveTo(18.3,-65,19.7,-64.7).lineTo(19.9,-64.6).curveTo(20.8,-65.6,21.9,-66.1).curveTo(23.2,-66.7,24.6,-66.6).curveTo(26,-66.5,27.2,-65.7).curveTo(28,-65.2,28.5,-64.6).curveTo(30.3,-64.9,32,-63.9).curveTo(33.2,-63.3,33.9,-62.1).lineTo(34.4,-61.2).curveTo(35.8,-61,36.8,-60.1).curveTo(37.8,-59.3,38.3,-58.1).curveTo(39,-56.6,38.7,-54.8).curveTo(38.6,-53.9,38.2,-53.1).curveTo(38.6,-52.2,38.7,-51.2).curveTo(38.8,-49.5,37.9,-48).curveTo(37.1,-46.5,35.7,-45.8).curveTo(35.5,-44.3,34.6,-43.2).curveTo(33.6,-41.9,32,-41.3).curveTo(31.2,-41,30.4,-41).curveTo(30.2,-40.2,29.7,-39.5).curveTo(28.7,-38.2,27.2,-37.5).lineTo(27.1,-37.5).curveTo(26.5,-36.6,25.5,-35.9).curveTo(24.5,-35.2,23.3,-35).curveTo(22.7,-33.9,21.7,-33.2).curveTo(20.6,-32.3,19,-32.1).lineTo(19,-32.1).curveTo(18.3,-30.7,16.9,-29.9).curveTo(15.6,-29,14,-29).lineTo(13.7,-29).lineTo(13.1,-27.9).curveTo(11.6,-25.7,9,-25.5).curveTo(8,-25.4,7.2,-25.5).curveTo(6.7,-25.1,6.1,-24.7).curveTo(6,-23.7,5.6,-22.7).curveTo(4.9,-21.2,3.3,-20.2).curveTo(1.8,-19.3,0.1,-19.4).lineTo(-0.2,-19.4).lineTo(-0.3,-19.3).lineTo(-1,-18.4).curveTo(-2,-17.5,-3.2,-17.2).lineTo(-3.3,-16.8).curveTo(-3.7,-15.3,-4.7,-14.2).curveTo(-5.8,-13.2,-7.3,-12.8).lineTo(-7.5,-12.7).curveTo(-7.7,-12,-8.1,-11.3).curveTo(-8.9,-9.9,-10.4,-9.1).lineTo(-11,-8.8).curveTo(-11.4,-7.8,-12.1,-7).lineTo(-12.5,-6.7).lineTo(-12.8,-5.7).curveTo(-13.1,-5,-13.6,-4.4).lineTo(-12.3,-4.1).lineTo(-12,-4).lineTo(-11.1,-4.6).curveTo(-10,-5.3,-8.7,-5.4).curveTo(-7.2,-5.5,-5.9,-4.9).lineTo(-4.7,-4.7).curveTo(-3.1,-4.2,-2,-3).lineTo(-1.5,-2.2).curveTo(0.1,-1.5,1,-0.2).curveTo(1.9,1.2,1.9,3).curveTo(1.9,4.7,1,6.1).curveTo(0,7.5,-1.6,8.2).lineTo(-2.3,8.4).lineTo(-2.7,9.5).curveTo(-3.2,10.5,-3.9,11.2).curveTo(-4,12.6,-4.8,13.8).lineTo(-5.1,14.2).curveTo(-5,15,-5.3,15.8).curveTo(-5.8,18,-7.8,19.2).curveTo(-7.5,20.4,-7.9,21.7).curveTo(-8.4,23.3,-9.6,24.4).curveTo(-10.1,24.8,-10.7,25.1).lineTo(-10.7,25.4).curveTo(-11,27,-12.1,28.1).curveTo(-12.6,28.8,-13.4,29.2).lineTo(-13.4,30.4).curveTo(-13.7,31.9,-14.5,33).lineTo(-15.2,33.7).lineTo(-14.8,34.6).curveTo(-14.2,36.9,-15.4,39).lineTo(-15.7,39.5).curveTo(-15.6,40.4,-15.9,41.4).curveTo(-15.4,41.8,-15,42.3).lineTo(-14.7,42.4).curveTo(-14,41.6,-13.1,41.1).curveTo(-11.9,40.5,-10.5,40.5).curveTo(-8.9,40.5,-7.5,41.3).lineTo(-7.3,41.5).lineTo(-6.4,40.9).lineTo(-5.4,40.5).lineTo(-5.3,40.1).curveTo(-4.6,38.8,-3.3,38.1).curveTo(-2.1,37.3,-0.6,37.2).curveTo(0.5,37.2,1.4,37.5).lineTo(2.1,37.1).curveTo(3.5,36.5,5.1,36.7).curveTo(5.8,35.6,6.9,34.9).curveTo(8.2,34.1,9.7,34).curveTo(11.2,33.9,12.6,34.6).lineTo(13.3,34.6).curveTo(15,34.9,16.4,36).lineTo(17,36.6).curveTo(17.8,36.4,18.6,36.5).curveTo(20.1,36.5,21.2,37.2).curveTo(22.4,37.9,23.1,39.2).curveTo(23.9,40.4,23.9,41.8).curveTo(24.1,44.6,21.8,46.5).curveTo(19.5,48.2,16.7,47.4).curveTo(15.4,47,14.4,46.1).lineTo(14,45.7).curveTo(13.4,45.8,12.6,45.8).curveTo(11.2,45.8,10,45.2).lineTo(9.2,45.2).curveTo(8.7,46,7.8,46.7).curveTo(6.6,47.7,4.9,47.8).curveTo(3.7,47.9,2.7,47.6).lineTo(2.4,47.7).lineTo(1.3,48.2).curveTo(0.9,49.1,0.2,49.8).curveTo(-0.8,50.9,-2.3,51.3).lineTo(-2.4,51.4).curveTo(-3,52.8,-4.3,53.8).curveTo(-5.5,54.7,-7,54.9).curveTo(-8,55,-9,54.8).lineTo(-8.9,55.7).curveTo(-8.9,57.4,-9.8,58.9).curveTo(-10.8,60.3,-12.4,60.9).curveTo(-14.1,61.6,-15.7,61.2).lineTo(-16.7,60.9).lineTo(-16.7,61.3).curveTo(-16.8,62.9,-17.8,64.2).curveTo(-18.7,65.6,-20.2,66.2).curveTo(-21.2,66.6,-22.3,66.6).lineTo(-23.4,66.5).closePath();

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(9).to({graphics:mask_graphics_9,x:58.4483,y:39.3988}).wait(2).to({graphics:mask_graphics_11,x:53.303,y:39.7733}).wait(2).to({graphics:mask_graphics_13,x:48.2529,y:41.3997}).wait(2).to({graphics:mask_graphics_15,x:45.2651,y:43.0374}).wait(2).to({graphics:mask_graphics_17,x:41.0612,y:48.8483}).wait(2).to({graphics:mask_graphics_19,x:36.8729,y:48.8483}).wait(2).to({graphics:mask_graphics_21,x:36.8729,y:48.8483}).wait(2).to({graphics:mask_graphics_23,x:36.8729,y:41.2278}).wait(2).to({graphics:mask_graphics_25,x:36.8729,y:34.4232}).wait(2).to({graphics:mask_graphics_27,x:36.8729,y:29.1395}).wait(2).to({graphics:mask_graphics_29,x:36.8729,y:29.1395}).wait(2).to({graphics:mask_graphics_31,x:36.8729,y:22.0789}).wait(2).to({graphics:mask_graphics_33,x:36.8729,y:13.534}).wait(2).to({graphics:mask_graphics_35,x:40.2433,y:7.709}).wait(2).to({graphics:mask_graphics_37,x:44.3133,y:-0.4843}).wait(2).to({graphics:mask_graphics_39,x:44.3133,y:-1.4321}).wait(2).to({graphics:mask_graphics_41,x:44.3133,y:-1.4321}).wait(279));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#333333").beginStroke().moveTo(-28.5,58.9).curveTo(-30.8,57.3,-31.9,54.5).curveTo(-32.8,51.9,-32.4,46.2).lineTo(-31.7,41.3).lineTo(-31.8,43.8).lineTo(-31.9,48.1).lineTo(-31.8,49.7).lineTo(-31.8,49.8).lineTo(-31.8,49.8).curveTo(-31.6,52.7,-30.5,54.7).curveTo(-28.6,58.4,-25.1,58.7).curveTo(-22.2,59,-18.5,57.1).lineTo(-7.8,51.2).curveTo(-1.6,47.8,3.2,46.3).curveTo(-5.9,51.1,-10.4,53.8).lineTo(-16.6,57.7).curveTo(-20.5,59.8,-23.4,60.1).lineTo(-24.4,60.2).curveTo(-26.7,60.2,-28.5,58.9).closePath().moveTo(-24.8,55.9).lineTo(-24.8,55.9).curveTo(-25.8,55.7,-26.5,55.3).curveTo(-27.3,55,-28.1,54.3).curveTo(-28.6,53.7,-29.1,52.8).curveTo(-29.9,51.4,-30.2,49.6).lineTo(-30.2,49.5).curveTo(-30.3,49.4,-30.3,49.4).curveTo(-30.3,49.4,-30.3,49.4).curveTo(-30.3,49.3,-30.3,49.3).curveTo(-30.2,49.3,-30.2,49.3).lineTo(-30.1,49.3).lineTo(-30.1,49.2).lineTo(-29.8,49.2).lineTo(-29.8,49.3).lineTo(-29.7,49.4).curveTo(-29.2,50.8,-28.6,51.7).lineTo(-28.3,52.2).lineTo(-27.8,52.8).curveTo(-27.2,53.5,-26.5,53.9).lineTo(-26.1,54.1).curveTo(-25.4,54.4,-24.4,54.4).lineTo(-24.2,54.4).lineTo(-23.3,54.3).lineTo(-23.2,54.3).curveTo(-22,54.2,-20.4,53.6).lineTo(-17.7,52.4).lineTo(-17.5,52.4).lineTo(-16.4,51.8).lineTo(-16.3,51.7).lineTo(-16.3,51.7).lineTo(-14.8,50.9).lineTo(-9.1,48).lineTo(-1.2,44.6).curveTo(2.2,43.5,8.3,43.3).curveTo(15.1,43.6,18.5,45.1).lineTo(17.1,46).lineTo(13.8,46.1).lineTo(15.4,45.8).lineTo(14.3,45.7).curveTo(12.4,45.7,11.1,46).curveTo(11,46,11,46).curveTo(10.9,46,10.9,46).curveTo(10.9,46,10.9,45.9).curveTo(10.9,45.9,10.9,45.9).lineTo(10.8,45.8).curveTo(10.7,45.7,10.7,45.7).curveTo(10.7,45.7,10.7,45.6).curveTo(10.7,45.6,10.7,45.6).curveTo(10.8,45.6,10.8,45.6).lineTo(10.9,45.5).lineTo(13.1,44.8).lineTo(12.3,44.7).lineTo(12.3,44.7).curveTo(11,44.5,9.3,44.4).curveTo(8,44.4,6.3,44.6).curveTo(5.3,44.7,3.3,45.2).lineTo(3,45.3).lineTo(2.9,45.3).curveTo(-1.6,46.4,-8.3,49.7).lineTo(-16.8,54).lineTo(-16.8,54).curveTo(-18.5,54.8,-19.8,55.2).curveTo(-21.4,55.8,-23.1,55.9).lineTo(-23.7,56).lineTo(-24.8,55.9).closePath().moveTo(-29.9,49.5).lineTo(-29.9,49.5).lineTo(-29.8,49.5).lineTo(-29.9,49.4).lineTo(-29.9,49.5).closePath().moveTo(11,45.8).lineTo(11.1,45.8).lineTo(11,45.8).curveTo(10.9,45.9,11,45.8).closePath().moveTo(-24.4,53.1).curveTo(-25.6,52.8,-26.6,51.9).lineTo(-26.6,51.8).lineTo(-27.3,50.8).lineTo(-27.4,50.8).lineTo(-27.9,49.8).lineTo(-28.6,47.4).curveTo(-29,45.2,-28.8,42.9).curveTo(-28.5,39.1,-27,35.1).lineTo(-26.6,34.2).curveTo(-25.2,30.6,-22.7,26.4).curveTo(-21.5,24.3,-18.2,19.2).lineTo(-18.1,19.1).lineTo(-16,15.6).lineTo(-14.1,11.9).curveTo(-13,9.7,-12.5,8).curveTo(-12.2,6.7,-12.2,6).lineTo(-12.2,6).curveTo(-12.2,5.4,-12.4,5.1).curveTo(-12.6,4.7,-13,4.6).lineTo(-13.1,4.5).curveTo(-13.2,4.5,-13.2,4.5).curveTo(-13.2,4.5,-13.2,4.4).curveTo(-13.3,4.4,-13.3,4.4).curveTo(-13.3,4.4,-13.2,4.3).lineTo(-13.1,4.1).lineTo(-13.1,4.1).lineTo(-12.9,4.1).curveTo(-12.2,4.1,-11.8,4.7).lineTo(-11.8,4.8).curveTo(-11.5,5.2,-11.3,5.9).curveTo(-11.2,6.8,-11.4,8.3).lineTo(-12,10.5).lineTo(-12,10.5).lineTo(-12.8,12.5).lineTo(-14.6,16.4).lineTo(-16.7,20.2).lineTo(-21.2,27.4).curveTo(-23.2,30.9,-24.6,34.3).lineTo(-24.9,35).curveTo(-26.7,39.3,-26.9,43).curveTo(-27.2,45.1,-26.8,47.1).lineTo(-26.7,48.1).lineTo(-26.3,49.1).curveTo(-26.2,49.4,-25.9,49.9).lineTo(-25.9,49.9).lineTo(-25.7,50.3).lineTo(-25.6,50.4).lineTo(-25.4,50.6).lineTo(-25.4,50.6).curveTo(-24.8,51.2,-24,51.5).curveTo(-23.2,51.7,-22.2,51.6).lineTo(-20.3,51.3).lineTo(-18.4,50.6).lineTo(-14.6,49).lineTo(-11,47.2).lineTo(-10.9,47.1).lineTo(-10.8,47.1).lineTo(-10.7,47.2).lineTo(-10.6,47.2).lineTo(-10.6,47.3).lineTo(-10.6,47.5).lineTo(-10.6,47.5).lineTo(-10.6,47.6).lineTo(-10.8,47.6).lineTo(-10.8,47.6).lineTo(-10.9,47.7).curveTo(-14.3,50,-16.5,51.2).lineTo(-17.9,51.9).curveTo(-20.1,52.9,-22,53.2).lineTo(-22.9,53.3).lineTo(-24.4,53.1).closePath().moveTo(-11,47.5).lineTo(-10.9,47.5).lineTo(-10.9,47.5).closePath().moveTo(4.9,51.9).lineTo(4.8,51.9).lineTo(5,51.9).closePath().moveTo(6,51.1).lineTo(6,51.3).lineTo(6,51.3).closePath().moveTo(10.4,49.1).lineTo(10.4,49.1).lineTo(10.4,49.1).closePath().moveTo(-16.2,23.2).lineTo(-16.1,22.9).curveTo(-12.1,16.3,-10.8,13.9).lineTo(-10.8,13.9).lineTo(-10.6,13.6).curveTo(-9.4,11.1,-8.6,9.4).lineTo(-8.5,9.3).lineTo(-8.1,8.2).curveTo(-7.6,6.8,-7.3,5.4).lineTo(-7.2,4).curveTo(-7.2,3.2,-7.4,2.7).curveTo(-7.7,2.2,-8.2,1.8).lineTo(-8.7,1.6).curveTo(-9.1,1.5,-9.3,1.5).curveTo(-10.2,1.4,-12,1.8).lineTo(-13.5,2.2).lineTo(-13.6,2.2).lineTo(-13.6,2.2).lineTo(-14.6,2.5).lineTo(-17.6,3.4).curveTo(-21.3,4.6,-23.2,4.9).lineTo(-24.7,5.2).curveTo(-25.9,5.2,-26.4,5).curveTo(-26.9,4.9,-27.3,4.5).curveTo(-27.8,4.1,-27.9,3.6).lineTo(-28.2,1.9).curveTo(-28.4,0.4,-28,-1.4).lineTo(-27.9,-2.2).lineTo(-27.1,-4.4).curveTo(-26,-6.9,-24,-9.7).curveTo(-20.9,-14.1,-16.3,-18.7).lineTo(-16.2,-18.8).curveTo(-14.4,-20.6,-12,-22.5).lineTo(-12,-22.5).curveTo(-10,-24.1,-7.7,-25.7).lineTo(-6.9,-26.2).curveTo(-3,-28.9,3.1,-32.3).lineTo(13.4,-37.9).curveTo(19.5,-41.4,23.2,-44.2).lineTo(27.5,-48.1).curveTo(28.5,-49.1,29.4,-50.3).curveTo(30.4,-51.7,30.8,-52.8).curveTo(31.4,-54.3,31.3,-55.3).curveTo(31.1,-56.6,30,-57.4).curveTo(29.1,-58,27.4,-58.5).curveTo(26.2,-58.8,24.7,-58.9).curveTo(19.8,-59,13.4,-57.2).curveTo(7.8,-55.5,2.7,-52.8).curveTo(0.1,-51.4,-2.2,-49.8).curveTo(-4.7,-48.1,-6.7,-46.1).lineTo(-6.7,-46.1).lineTo(-6.8,-46).lineTo(-6.9,-45.9).curveTo(-9,-43.7,-10.2,-41.4).curveTo(-11,-39.9,-11.3,-38.6).curveTo(-11.6,-37.8,-11.7,-36.4).lineTo(-11.7,-36.3).lineTo(-11.7,-35.6).curveTo(-12,-38.6,-10.7,-41.7).curveTo(-9.5,-44.2,-7.3,-46.7).curveTo(-3.7,-50.7,2.2,-53.8).curveTo(7.2,-56.6,13,-58.4).curveTo(16.3,-59.4,18.7,-59.8).curveTo(21.8,-60.3,24.7,-60.2).curveTo(26.4,-60.1,27.7,-59.8).lineTo(29.2,-59.3).lineTo(30.7,-58.5).curveTo(31.3,-58.1,31.9,-57.3).curveTo(32.4,-56.5,32.5,-55.6).curveTo(32.7,-54,32,-52.2).curveTo(31.5,-51,30.4,-49.4).lineTo(28.4,-47.1).lineTo(24,-43.2).curveTo(20.2,-40.3,14,-36.8).lineTo(3.7,-31.2).curveTo(-2.3,-27.8,-6.2,-25.2).curveTo(-11.6,-21.6,-15.3,-17.8).curveTo(-19.9,-13.1,-22.9,-8.9).curveTo(-24.9,-6.1,-25.9,-3.9).lineTo(-26.7,-1.8).lineTo(-26.8,-1).curveTo(-27.1,0.4,-26.9,1.8).lineTo(-26.9,2.5).lineTo(-26.7,3.2).lineTo(-26.5,3.5).lineTo(-26.1,3.7).curveTo(-25.6,3.8,-24.9,3.8).lineTo(-23.5,3.6).curveTo(-22,3.3,-17.9,2.1).curveTo(-14.2,1,-12.3,0.5).curveTo(-10.6,0.1,-9.2,0.3).lineTo(-8.4,0.4).lineTo(-7.5,0.8).curveTo(-6.8,1.4,-6.4,2.3).curveTo(-6.1,2.9,-6,4).curveTo(-6,4.9,-6.2,5.6).curveTo(-6.5,7.1,-7,8.7).lineTo(-8.3,11.5).curveTo(-9.2,13.3,-9.8,14.2).curveTo(-11.2,16.6,-13.1,19.3).curveTo(-14.5,21.2,-16.1,23.3).lineTo(-16.7,24).lineTo(-16.2,23.2).closePath();
	this.shape.setTransform(47.1487,-3.0769);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9).to({_off:false},0).wait(311));

	// Layer_4 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().moveTo(-2,5.7).curveTo(-3.6,5.5,-4.9,4.5).curveTo(-6.1,3.4,-6.6,1.9).curveTo(-7.1,0.4,-6.7,-1.3).curveTo(-6.3,-2.9,-5.1,-4).curveTo(-3.9,-5,-2.3,-5.3).curveTo(-1.6,-5.4,-0.9,-5.4).curveTo(1.1,-6.2,3.2,-5.5).curveTo(5.5,-4.6,6.4,-2.4).curveTo(7.5,0.2,6.1,2.6).curveTo(5.4,3.8,4.2,4.5).curveTo(3,5.3,1.7,5.4).lineTo(0.8,5.4).curveTo(-0.2,5.8,-1.2,5.8).lineTo(-2,5.7).closePath();
	var mask_1_graphics_2 = new cjs.Graphics().moveTo(-7.2,6.2).curveTo(-8.7,5.4,-9.5,3.9).curveTo(-10.4,2.4,-10.2,0.7).curveTo(-10.1,-1,-9,-2.3).curveTo(-7.9,-3.7,-6.3,-4.2).lineTo(-5.1,-4.4).lineTo(-4.4,-4.7).curveTo(-3.1,-5.2,-1.7,-4.9).curveTo(-0.5,-5.9,1.1,-6.2).curveTo(1.8,-6.4,2.5,-6.3).curveTo(4.4,-7.1,6.6,-6.4).curveTo(8.8,-5.5,9.8,-3.3).curveTo(10.8,-0.7,9.4,1.7).curveTo(8.8,2.9,7.6,3.6).curveTo(6.4,4.4,5.1,4.5).lineTo(4.1,4.5).curveTo(2.7,5,1.3,4.8).lineTo(1.1,4.8).curveTo(0.5,5.4,-0.5,5.8).curveTo(-1.3,6.1,-2.2,6.2).curveTo(-3,6.6,-4,6.7).lineTo(-4.7,6.7).curveTo(-6,6.7,-7.2,6.2).closePath();
	var mask_1_graphics_4 = new cjs.Graphics().moveTo(-8.3,9.1).curveTo(-9.7,9,-11,8.2).curveTo(-12.3,7.5,-13,6.2).curveTo(-13.7,4.9,-13.6,3.4).curveTo(-13.6,1.9,-12.9,0.7).curveTo(-12.2,-0.6,-10.9,-1.3).curveTo(-10.1,-1.9,-9.2,-2).lineTo(-9,-2.2).curveTo(-8,-3.2,-6.6,-3.6).lineTo(-6.2,-3.7).lineTo(-5.6,-4.6).curveTo(-4.5,-6,-2.9,-6.5).lineTo(-1.7,-6.7).lineTo(-1,-7).curveTo(0.3,-7.5,1.7,-7.2).curveTo(2.8,-8.3,4.5,-8.5).curveTo(5.2,-8.7,5.9,-8.6).curveTo(7.8,-9.4,10,-8.7).curveTo(12.2,-7.8,13.2,-5.6).curveTo(14.2,-3,12.8,-0.6).curveTo(12.2,0.6,11,1.3).curveTo(9.8,2.1,8.5,2.2).lineTo(7.5,2.2).curveTo(6.1,2.7,4.7,2.5).lineTo(4.5,2.5).curveTo(3.9,3.1,2.9,3.5).curveTo(2.1,3.8,1.2,3.9).curveTo(0.6,4.2,-0,4.3).lineTo(-0.4,4.9).curveTo(-1.1,6,-2.3,6.7).curveTo(-3.1,7.1,-3.9,7.3).curveTo(-4.6,7.9,-5.5,8.4).curveTo(-6.7,9.1,-8.1,9.1).lineTo(-8.3,9.1).closePath();
	var mask_1_graphics_6 = new cjs.Graphics().moveTo(-13.2,12.4).curveTo(-14.8,12.4,-16.2,11.4).curveTo(-17.6,10.4,-18.2,8.9).curveTo(-18.8,7.4,-18.4,5.7).curveTo(-18.1,4,-17,2.9).curveTo(-16,1.9,-14.6,1.5).lineTo(-13.5,0.9).lineTo(-13.3,0.5).curveTo(-11.6,-1.8,-8.7,-1.8).lineTo(-8.4,-1.8).lineTo(-8,-2.8).curveTo(-7.3,-4,-6,-4.8).curveTo(-5.1,-5.3,-4.3,-5.5).lineTo(-4.1,-5.7).curveTo(-3.1,-6.7,-1.7,-7.1).lineTo(-1.3,-7.2).lineTo(-0.7,-8.1).curveTo(0.4,-9.4,2,-9.9).lineTo(3.2,-10.1).lineTo(3.9,-10.5).curveTo(5.2,-10.9,6.6,-10.6).curveTo(7.8,-11.7,9.4,-12).curveTo(10.1,-12.1,10.8,-12.1).curveTo(12.7,-12.8,14.9,-12.1).curveTo(17.1,-11.2,18.1,-9).curveTo(19.1,-6.5,17.7,-4).curveTo(17.1,-2.9,15.9,-2.1).curveTo(14.7,-1.4,13.4,-1.3).lineTo(12.4,-1.3).curveTo(11,-0.7,9.6,-0.9).lineTo(9.4,-0.9).curveTo(8.8,-0.3,7.8,0).curveTo(7,0.4,6.1,0.5).curveTo(5.5,0.8,4.9,0.9).lineTo(4.5,1.4).curveTo(3.8,2.5,2.6,3.2).curveTo(1.8,3.7,1,3.8).curveTo(0.3,4.5,-0.6,5).curveTo(-1.9,5.7,-3.4,5.6).lineTo(-3.4,5.6).lineTo(-3.6,6).curveTo(-4.2,7.4,-5.4,8.3).lineTo(-6.5,8.9).curveTo(-7.3,10.4,-8.8,11.1).lineTo(-9.7,11.4).lineTo(-10.1,11.7).curveTo(-11.5,12.5,-12.9,12.5).lineTo(-13.2,12.4).closePath();
	var mask_1_graphics_8 = new cjs.Graphics().moveTo(-20.9,16.3).curveTo(-22.4,15.6,-23.2,14.2).curveTo(-24.1,12.8,-24,11.1).curveTo(-24,9.3,-23,8).curveTo(-22.2,6.9,-20.9,6.2).lineTo(-20.4,5.3).curveTo(-19.5,4.1,-18.1,3.5).curveTo(-16.9,3,-15.6,2.9).curveTo(-14.7,2,-13.2,1.6).lineTo(-12.9,1.5).lineTo(-12.9,1.3).curveTo(-12.6,-0.4,-11.4,-1.5).curveTo(-10.5,-2.5,-9.1,-2.9).lineTo(-8,-3.5).lineTo(-7.7,-3.9).curveTo(-6.1,-6.2,-3.2,-6.2).lineTo(-2.9,-6.2).lineTo(-2.5,-7.2).curveTo(-1.8,-8.4,-0.5,-9.2).curveTo(0.4,-9.7,1.3,-9.9).lineTo(1.5,-10.1).curveTo(2.5,-11.1,3.8,-11.5).lineTo(4.3,-11.6).lineTo(4.9,-12.5).curveTo(6,-13.8,7.5,-14.3).lineTo(8.7,-14.6).lineTo(9.5,-14.9).curveTo(10.7,-15.3,12.1,-15.1).curveTo(13.3,-16.1,14.9,-16.4).curveTo(15.6,-16.5,16.3,-16.5).curveTo(18.2,-17.3,20.4,-16.5).curveTo(22.7,-15.6,23.6,-13.4).curveTo(24.7,-10.9,23.3,-8.4).curveTo(22.6,-7.3,21.4,-6.5).curveTo(20.2,-5.8,18.9,-5.7).lineTo(17.9,-5.7).curveTo(16.5,-5.1,15.2,-5.3).lineTo(15,-5.4).curveTo(14.3,-4.8,13.4,-4.4).curveTo(12.5,-4,11.7,-3.9).curveTo(11,-3.7,10.4,-3.5).lineTo(10.1,-3).curveTo(9.3,-1.9,8.1,-1.2).curveTo(7.3,-0.8,6.5,-0.6).curveTo(5.8,0.1,5,0.6).curveTo(3.6,1.3,2.2,1.2).lineTo(2.1,1.2).lineTo(2,1.6).curveTo(1.4,3,0.2,3.9).lineTo(-1,4.5).curveTo(-1.8,5.9,-3.3,6.7).lineTo(-4.2,7).lineTo(-4.6,7.3).curveTo(-5.4,7.7,-6.2,7.9).curveTo(-6.6,10,-8.3,11.5).curveTo(-9.9,12.8,-12,12.7).curveTo(-12.6,13.2,-13.3,13.6).curveTo(-13.9,14.7,-14.9,15.6).curveTo(-16.2,16.7,-17.8,16.9).lineTo(-18.3,16.9).curveTo(-19.6,16.9,-20.9,16.3).closePath();
	var mask_1_graphics_10 = new cjs.Graphics().moveTo(-20.2,16.3).curveTo(-21,15.9,-21.6,15.4).curveTo(-22.3,15.4,-22.9,15.2).lineTo(-23.3,15.1).curveTo(-24.5,15.6,-25.7,15.5).curveTo(-27.4,15.3,-28.8,14.2).curveTo(-30.1,13.1,-30.6,11.5).curveTo(-31.1,10,-30.6,8.3).curveTo(-30.1,6.6,-28.8,5.5).curveTo(-27.5,4.5,-25.7,4.3).curveTo(-24.7,4.2,-23.8,4.5).lineTo(-23.6,4.4).curveTo(-22.3,4,-21,4.2).curveTo(-19.6,4.4,-18.5,5.2).lineTo(-18,5.6).curveTo(-16.2,5.5,-14.7,6.6).lineTo(-14.1,6.2).lineTo(-13.6,5.3).curveTo(-12.7,4.1,-11.3,3.5).curveTo(-10.1,2.9,-8.8,2.9).curveTo(-7.9,2,-6.4,1.6).lineTo(-6.1,1.5).lineTo(-6.1,1.3).curveTo(-5.8,-0.4,-4.6,-1.5).curveTo(-3.6,-2.5,-2.3,-2.9).lineTo(-1.2,-3.5).lineTo(-0.9,-3.9).curveTo(0.7,-6.2,3.6,-6.2).lineTo(3.9,-6.2).lineTo(4.3,-7.2).curveTo(5,-8.4,6.3,-9.2).curveTo(7.2,-9.7,8.1,-9.9).lineTo(8.3,-10.1).curveTo(9.3,-11.1,10.6,-11.5).lineTo(11.1,-11.6).lineTo(11.7,-12.5).curveTo(12.8,-13.8,14.3,-14.3).lineTo(15.5,-14.6).lineTo(16.3,-14.9).curveTo(17.6,-15.3,18.9,-15.1).curveTo(20.1,-16.1,21.7,-16.4).curveTo(22.4,-16.5,23.1,-16.5).curveTo(25,-17.3,27.2,-16.5).curveTo(29.5,-15.6,30.4,-13.4).curveTo(31.5,-10.9,30.1,-8.4).curveTo(29.4,-7.3,28.2,-6.5).curveTo(27,-5.8,25.7,-5.7).lineTo(24.7,-5.7).curveTo(23.4,-5.1,22,-5.3).lineTo(21.8,-5.4).curveTo(21.1,-4.8,20.2,-4.4).curveTo(19.3,-4,18.5,-3.9).curveTo(17.9,-3.7,17.2,-3.5).lineTo(16.9,-3).curveTo(16.1,-1.9,14.9,-1.2).curveTo(14.1,-0.8,13.3,-0.6).curveTo(12.6,0.1,11.8,0.6).curveTo(10.4,1.3,9,1.2).lineTo(8.9,1.2).lineTo(8.8,1.6).curveTo(8.2,3,7,3.9).lineTo(5.8,4.5).curveTo(5,5.9,3.5,6.7).lineTo(2.6,7).lineTo(2.2,7.3).curveTo(1.4,7.7,0.6,7.9).curveTo(0.2,10,-1.5,11.5).curveTo(-3.1,12.8,-5.2,12.7).curveTo(-5.8,13.2,-6.5,13.6).curveTo(-7,14.7,-8.1,15.6).curveTo(-9.4,16.7,-11,16.9).curveTo(-12.6,17,-14.1,16.3).lineTo(-14.7,15.9).lineTo(-15.5,16.4).curveTo(-16.6,16.9,-17.8,16.9).curveTo(-19.1,16.9,-20.2,16.3).closePath();
	var mask_1_graphics_12 = new cjs.Graphics().moveTo(-17,16.3).curveTo(-17.8,15.9,-18.4,15.4).curveTo(-19,15.4,-19.7,15.2).lineTo(-20.1,15.1).curveTo(-21.2,15.6,-22.5,15.5).curveTo(-24.1,15.3,-25.5,14.2).curveTo(-26.9,13.1,-27.4,11.5).lineTo(-27.4,11.5).curveTo(-28.3,11.5,-29.1,11.3).curveTo(-30.8,10.8,-32,9.3).curveTo(-32.9,8,-33,6.3).lineTo(-33.1,5.7).curveTo(-33.8,4.6,-34,3.3).curveTo(-34.2,1.8,-33.7,0.4).curveTo(-33.1,-1.1,-31.9,-2).curveTo(-30.5,-3,-29.1,-3.1).curveTo(-27.5,-3.3,-25.9,-2.5).curveTo(-24.4,-1.7,-23.6,-0.3).curveTo(-22.9,1,-22.9,2.6).curveTo(-22.6,3.1,-22.3,3.7).lineTo(-22.1,4.3).curveTo(-21.3,4.3,-20.5,4.5).lineTo(-20.4,4.4).curveTo(-19.1,4,-17.7,4.2).curveTo(-16.3,4.4,-15.3,5.2).lineTo(-14.7,5.6).curveTo(-12.9,5.5,-11.5,6.6).lineTo(-10.9,6.2).lineTo(-10.3,5.3).curveTo(-9.5,4.1,-8,3.5).curveTo(-6.8,2.9,-5.6,2.9).curveTo(-4.6,2,-3.1,1.6).lineTo(-2.9,1.5).lineTo(-2.8,1.3).curveTo(-2.5,-0.4,-1.4,-1.5).curveTo(-0.4,-2.5,0.9,-2.9).lineTo(2.1,-3.5).lineTo(2.3,-3.9).curveTo(4,-6.2,6.9,-6.2).lineTo(7.1,-6.2).lineTo(7.6,-7.2).curveTo(8.3,-8.4,9.6,-9.2).curveTo(10.4,-9.7,11.3,-9.9).lineTo(11.5,-10.1).curveTo(12.5,-11.1,13.9,-11.5).lineTo(14.3,-11.6).lineTo(14.9,-12.5).curveTo(16,-13.8,17.6,-14.3).lineTo(18.7,-14.6).lineTo(19.5,-14.9).curveTo(20.8,-15.3,22.1,-15.1).curveTo(23.3,-16.1,25,-16.4).curveTo(25.7,-16.5,26.3,-16.5).curveTo(28.3,-17.3,30.5,-16.5).curveTo(32.7,-15.6,33.7,-13.4).curveTo(34.7,-10.9,33.3,-8.4).curveTo(32.7,-7.3,31.5,-6.5).curveTo(30.3,-5.8,29,-5.7).lineTo(28,-5.7).curveTo(26.6,-5.1,25.2,-5.3).lineTo(25,-5.4).curveTo(24.3,-4.8,23.4,-4.4).curveTo(22.5,-4,21.7,-3.9).curveTo(21.1,-3.7,20.4,-3.5).lineTo(20.1,-3).curveTo(19.4,-1.9,18.2,-1.2).curveTo(17.3,-0.8,16.5,-0.6).curveTo(15.9,0.1,15,0.6).curveTo(13.7,1.3,12.2,1.2).lineTo(12.2,1.2).lineTo(12,1.6).curveTo(11.4,3,10.2,3.9).lineTo(9.1,4.5).curveTo(8.2,5.9,6.8,6.7).lineTo(5.9,7).lineTo(5.5,7.3).curveTo(4.6,7.7,3.8,7.9).curveTo(3.5,10,1.7,11.5).curveTo(0.1,12.8,-1.9,12.7).curveTo(-2.5,13.2,-3.3,13.6).curveTo(-3.8,14.7,-4.8,15.6).curveTo(-6.1,16.7,-7.7,16.9).curveTo(-9.3,17,-10.8,16.3).lineTo(-11.5,15.9).lineTo(-12.2,16.4).curveTo(-13.3,16.9,-14.5,16.9).curveTo(-15.8,16.9,-17,16.3).closePath();
	var mask_1_graphics_14 = new cjs.Graphics().moveTo(-15.5,16.3).curveTo(-16.3,15.9,-16.9,15.4).curveTo(-17.5,15.4,-18.2,15.2).lineTo(-18.5,15.1).curveTo(-19.7,15.6,-21,15.5).curveTo(-22.6,15.3,-24,14.2).curveTo(-25.4,13.1,-25.9,11.5).lineTo(-25.9,11.5).curveTo(-26.7,11.5,-27.6,11.3).curveTo(-29.3,10.8,-30.5,9.3).curveTo(-31.4,8,-31.5,6.3).lineTo(-31.5,5.7).curveTo(-32.3,4.6,-32.5,3.3).curveTo(-32.6,2.5,-32.5,1.8).curveTo(-34,1.1,-34.9,-0.4).curveTo(-35.7,-1.9,-35.6,-3.6).curveTo(-35.5,-5.2,-34.5,-6.6).lineTo(-34.1,-7.2).curveTo(-34.6,-8.4,-34.5,-9.7).curveTo(-34.5,-10.8,-34,-11.7).lineTo(-33.9,-12.7).curveTo(-33.4,-14.2,-32.3,-15.3).curveTo(-31.2,-16.4,-29.6,-16.7).curveTo(-28,-17.1,-26.6,-16.6).curveTo(-25.1,-16,-24.1,-14.8).curveTo(-23.1,-13.5,-22.9,-12).curveTo(-22.8,-11,-22.9,-10.4).lineTo(-23.3,-9.1).curveTo(-23.3,-8,-23.8,-6.9).curveTo(-24.2,-6.1,-24.9,-5.5).lineTo(-24.7,-5).curveTo(-24.3,-3.8,-24.5,-2.5).lineTo(-24.4,-2.5).curveTo(-22.9,-1.7,-22.1,-0.3).curveTo(-21.4,1,-21.4,2.6).curveTo(-21,3.1,-20.8,3.7).lineTo(-20.6,4.3).curveTo(-19.7,4.3,-19,4.5).lineTo(-18.9,4.4).curveTo(-17.6,4,-16.2,4.2).curveTo(-14.8,4.4,-13.8,5.2).lineTo(-13.2,5.6).curveTo(-11.4,5.5,-9.9,6.6).lineTo(-9.4,6.2).lineTo(-8.8,5.3).curveTo(-8,4.1,-6.5,3.5).curveTo(-5.3,2.9,-4.1,2.9).curveTo(-3.1,2,-1.6,1.6).lineTo(-1.4,1.5).lineTo(-1.3,1.3).curveTo(-1,-0.4,0.1,-1.5).curveTo(1.1,-2.5,2.5,-2.9).lineTo(3.6,-3.5).lineTo(3.8,-3.9).curveTo(5.5,-6.2,8.4,-6.2).lineTo(8.7,-6.2).lineTo(9.1,-7.2).curveTo(9.8,-8.4,11.1,-9.2).curveTo(11.9,-9.7,12.8,-9.9).lineTo(13,-10.1).curveTo(14,-11.1,15.4,-11.5).lineTo(15.8,-11.6).lineTo(16.4,-12.5).curveTo(17.5,-13.8,19.1,-14.3).lineTo(20.3,-14.6).lineTo(21,-14.9).curveTo(22.3,-15.3,23.7,-15.1).curveTo(24.8,-16.1,26.5,-16.4).curveTo(27.2,-16.5,27.9,-16.5).curveTo(29.8,-17.3,32,-16.5).curveTo(34.2,-15.6,35.2,-13.4).curveTo(36.2,-10.9,34.8,-8.4).curveTo(34.2,-7.3,33,-6.5).curveTo(31.8,-5.8,30.5,-5.7).lineTo(29.5,-5.7).curveTo(28.1,-5.1,26.7,-5.3).lineTo(26.5,-5.4).curveTo(25.9,-4.8,24.9,-4.4).curveTo(24.1,-4,23.2,-3.9).curveTo(22.6,-3.7,22,-3.5).lineTo(21.6,-3).curveTo(20.9,-1.9,19.7,-1.2).curveTo(18.9,-0.8,18.1,-0.6).curveTo(17.4,0.1,16.5,0.6).curveTo(15.2,1.3,13.7,1.2).lineTo(13.7,1.2).lineTo(13.5,1.6).curveTo(12.9,3,11.7,3.9).lineTo(10.6,4.5).curveTo(9.8,5.9,8.3,6.7).lineTo(7.4,7).lineTo(7,7.3).curveTo(6.2,7.7,5.3,7.9).curveTo(5,10,3.2,11.5).curveTo(1.6,12.8,-0.4,12.7).curveTo(-1,13.2,-1.8,13.6).curveTo(-2.3,14.7,-3.3,15.6).curveTo(-4.6,16.7,-6.2,16.9).curveTo(-7.8,17,-9.3,16.3).lineTo(-9.9,15.9).lineTo(-10.7,16.4).curveTo(-11.8,16.9,-13,16.9).curveTo(-14.3,16.9,-15.5,16.3).closePath();
	var mask_1_graphics_16 = new cjs.Graphics().moveTo(-15.5,21.6).curveTo(-16.3,21.2,-16.9,20.6).curveTo(-17.5,20.6,-18.2,20.5).lineTo(-18.5,20.4).curveTo(-19.7,20.8,-21,20.7).curveTo(-22.6,20.6,-24,19.5).curveTo(-25.4,18.4,-25.9,16.8).lineTo(-25.9,16.7).curveTo(-26.7,16.8,-27.6,16.5).curveTo(-29.3,16.1,-30.5,14.5).curveTo(-31.4,13.2,-31.5,11.6).lineTo(-31.5,10.9).curveTo(-32.3,9.8,-32.5,8.6).curveTo(-32.6,7.8,-32.5,7).curveTo(-34,6.3,-34.9,4.8).curveTo(-35.7,3.3,-35.6,1.7).curveTo(-35.5,0,-34.5,-1.4).lineTo(-34.1,-1.9).curveTo(-34.6,-3.1,-34.5,-4.4).curveTo(-34.5,-5.5,-34,-6.5).lineTo(-33.9,-7.4).curveTo(-33.4,-9,-32.3,-10.1).lineTo(-32,-10.4).curveTo(-32.3,-11,-32.4,-11.8).curveTo(-32.5,-13.3,-31.8,-14.7).curveTo(-31.2,-16,-30.3,-16.8).lineTo(-30.1,-17.9).curveTo(-29.7,-19.6,-28.5,-20.7).curveTo(-27.2,-21.8,-25.5,-22.1).curveTo(-23.8,-22.3,-22.2,-21.6).curveTo(-20.7,-20.9,-19.8,-19.4).curveTo(-19,-17.9,-19.1,-16.2).lineTo(-19.3,-14.9).curveTo(-19.9,-13.2,-21.2,-12.2).lineTo(-21.4,-10.8).curveTo(-21.7,-9.8,-22.1,-9.2).curveTo(-22.5,-8.6,-23.1,-8.2).lineTo(-23.2,-8.1).curveTo(-23,-7.4,-22.9,-6.7).curveTo(-22.8,-5.8,-22.9,-5.1).lineTo(-23.3,-3.9).curveTo(-23.3,-2.7,-23.8,-1.7).curveTo(-24.2,-0.9,-24.9,-0.2).lineTo(-24.7,0.3).curveTo(-24.3,1.4,-24.5,2.7).lineTo(-24.4,2.8).curveTo(-22.9,3.6,-22.1,5).curveTo(-21.4,6.2,-21.4,7.8).curveTo(-21,8.3,-20.8,9).lineTo(-20.6,9.5).curveTo(-19.7,9.5,-19,9.7).lineTo(-18.9,9.7).curveTo(-17.6,9.3,-16.2,9.5).curveTo(-14.8,9.6,-13.8,10.4).lineTo(-13.2,10.9).curveTo(-11.4,10.8,-9.9,11.8).lineTo(-9.4,11.5).lineTo(-8.8,10.6).curveTo(-8,9.4,-6.5,8.7).curveTo(-5.3,8.2,-4.1,8.2).curveTo(-3.1,7.3,-1.6,6.9).lineTo(-1.4,6.8).lineTo(-1.3,6.6).curveTo(-1,4.9,0.1,3.7).curveTo(1.1,2.7,2.5,2.3).lineTo(3.6,1.7).lineTo(3.8,1.3).curveTo(5.5,-1,8.4,-1).lineTo(8.7,-1).lineTo(9.1,-1.9).curveTo(9.8,-3.2,11.1,-3.9).curveTo(11.9,-4.5,12.8,-4.6).lineTo(13,-4.8).curveTo(14,-5.8,15.4,-6.2).lineTo(15.8,-6.3).lineTo(16.4,-7.2).curveTo(17.5,-8.6,19.1,-9.1).lineTo(20.3,-9.3).lineTo(21,-9.6).curveTo(22.3,-10.1,23.7,-9.8).curveTo(24.8,-10.8,26.5,-11.1).curveTo(27.2,-11.3,27.9,-11.2).curveTo(29.8,-12,32,-11.3).curveTo(34.2,-10.4,35.2,-8.2).curveTo(36.2,-5.6,34.8,-3.2).curveTo(34.2,-2,33,-1.3).curveTo(31.8,-0.5,30.5,-0.4).lineTo(29.5,-0.4).curveTo(28.1,0.1,26.7,-0.1).lineTo(26.5,-0.1).curveTo(25.9,0.5,24.9,0.9).curveTo(24.1,1.2,23.2,1.3).curveTo(22.6,1.6,22,1.7).lineTo(21.6,2.3).curveTo(20.9,3.4,19.7,4.1).curveTo(18.9,4.5,18.1,4.7).curveTo(17.4,5.3,16.5,5.8).curveTo(15.2,6.5,13.7,6.5).lineTo(13.7,6.5).lineTo(13.5,6.9).curveTo(12.9,8.2,11.7,9.1).lineTo(10.6,9.8).curveTo(9.8,11.2,8.3,11.9).lineTo(7.4,12.2).lineTo(7,12.5).curveTo(6.2,13,5.3,13.2).curveTo(5,15.3,3.2,16.7).curveTo(1.6,18,-0.4,17.9).curveTo(-1,18.5,-1.8,18.8).curveTo(-2.3,20,-3.3,20.9).curveTo(-4.6,21.9,-6.2,22.1).curveTo(-7.8,22.3,-9.3,21.5).lineTo(-9.9,21.2).lineTo(-10.7,21.6).curveTo(-11.8,22.2,-13,22.2).curveTo(-14.3,22.2,-15.5,21.6).closePath();
	var mask_1_graphics_18 = new cjs.Graphics().moveTo(-15.5,27.9).curveTo(-16.3,27.5,-16.9,27).curveTo(-17.5,27,-18.2,26.8).lineTo(-18.5,26.8).curveTo(-19.7,27.2,-21,27.1).curveTo(-22.6,26.9,-24,25.8).curveTo(-25.4,24.7,-25.9,23.1).lineTo(-25.9,23.1).curveTo(-26.7,23.1,-27.6,22.9).curveTo(-29.3,22.4,-30.5,20.9).curveTo(-31.4,19.6,-31.5,17.9).lineTo(-31.5,17.3).curveTo(-32.3,16.2,-32.5,14.9).curveTo(-32.6,14.2,-32.5,13.4).curveTo(-34,12.7,-34.9,11.2).curveTo(-35.7,9.7,-35.6,8).curveTo(-35.5,6.4,-34.5,5).lineTo(-34.1,4.5).curveTo(-34.6,3.3,-34.5,1.9).curveTo(-34.5,0.8,-34,-0.1).lineTo(-33.9,-1.1).curveTo(-33.4,-2.6,-32.3,-3.7).lineTo(-32,-4).curveTo(-32.3,-4.7,-32.4,-5.4).curveTo(-32.5,-6.9,-31.8,-8.4).curveTo(-31.2,-9.6,-30.3,-10.4).lineTo(-30.1,-11.5).curveTo(-29.7,-13.2,-28.5,-14.4).lineTo(-27.8,-14.9).curveTo(-27.9,-16.1,-27.4,-17.3).curveTo(-26.8,-18.7,-25.5,-19.6).curveTo(-25.6,-20.4,-25.5,-21.3).curveTo(-25.2,-22.9,-24.2,-24).lineTo(-23.3,-24.8).lineTo(-23.2,-25).curveTo(-22.3,-27.4,-19.8,-28.3).curveTo(-17.2,-29.1,-15,-27.7).curveTo(-13,-26.4,-12.5,-24.1).curveTo(-12,-21.8,-13.3,-19.8).curveTo(-13.9,-18.9,-14.7,-18.4).lineTo(-15,-17.7).curveTo(-15.6,-16.6,-16.6,-15.9).curveTo(-16.6,-15.2,-16.6,-14.6).curveTo(-16.8,-13,-17.8,-11.6).curveTo(-18.4,-10.9,-19.1,-10.5).lineTo(-19.1,-9.8).lineTo(-19.3,-8.5).curveTo(-19.9,-6.8,-21.2,-5.8).lineTo(-21.4,-4.4).curveTo(-21.7,-3.5,-22.1,-2.9).curveTo(-22.5,-2.2,-23.1,-1.8).lineTo(-23.2,-1.7).curveTo(-23,-1.1,-22.9,-0.4).curveTo(-22.8,0.6,-22.9,1.2).lineTo(-23.3,2.5).curveTo(-23.3,3.7,-23.8,4.7).curveTo(-24.2,5.5,-24.9,6.2).lineTo(-24.7,6.6).curveTo(-24.3,7.8,-24.5,9.1).lineTo(-24.4,9.1).curveTo(-22.9,9.9,-22.1,11.3).curveTo(-21.4,12.6,-21.4,14.2).curveTo(-21,14.7,-20.8,15.3).lineTo(-20.6,15.9).curveTo(-19.7,15.9,-19,16.1).lineTo(-18.9,16).curveTo(-17.6,15.6,-16.2,15.8).curveTo(-14.8,16,-13.8,16.8).lineTo(-13.2,17.3).curveTo(-11.4,17.2,-9.9,18.2).lineTo(-9.4,17.9).lineTo(-8.8,16.9).curveTo(-8,15.7,-6.5,15.1).curveTo(-5.3,14.6,-4.1,14.6).curveTo(-3.1,13.6,-1.6,13.2).lineTo(-1.4,13.2).lineTo(-1.3,12.9).curveTo(-1,11.2,0.1,10.1).curveTo(1.1,9.1,2.5,8.7).lineTo(3.6,8.1).lineTo(3.8,7.7).curveTo(5.5,5.4,8.4,5.4).lineTo(8.7,5.4).lineTo(9.1,4.4).curveTo(9.8,3.2,11.1,2.4).curveTo(11.9,1.9,12.8,1.7).lineTo(13,1.5).curveTo(14,0.5,15.4,0.1).lineTo(15.8,0).lineTo(16.4,-0.9).curveTo(17.5,-2.2,19.1,-2.7).lineTo(20.3,-2.9).lineTo(21,-3.3).curveTo(22.3,-3.7,23.7,-3.4).curveTo(24.8,-4.5,26.5,-4.8).curveTo(27.2,-4.9,27.9,-4.9).curveTo(29.8,-5.6,32,-4.9).curveTo(34.2,-4,35.2,-1.8).curveTo(36.2,0.7,34.8,3.2).curveTo(34.2,4.3,33,5.1).curveTo(31.8,5.8,30.5,5.9).lineTo(29.5,5.9).curveTo(28.1,6.5,26.7,6.3).lineTo(26.5,6.3).curveTo(25.9,6.9,24.9,7.2).curveTo(24.1,7.6,23.2,7.7).curveTo(22.6,8,22,8.1).lineTo(21.6,8.6).curveTo(20.9,9.7,19.7,10.4).curveTo(18.9,10.9,18.1,11).curveTo(17.4,11.7,16.5,12.2).curveTo(15.2,12.9,13.7,12.8).lineTo(13.7,12.8).lineTo(13.5,13.2).curveTo(12.9,14.6,11.7,15.5).lineTo(10.6,16.1).curveTo(9.8,17.5,8.3,18.3).lineTo(7.4,18.6).lineTo(7,18.9).curveTo(6.2,19.4,5.3,19.5).curveTo(5,21.7,3.2,23.1).curveTo(1.6,24.4,-0.4,24.3).curveTo(-1,24.9,-1.8,25.2).curveTo(-2.3,26.4,-3.3,27.2).curveTo(-4.6,28.3,-6.2,28.5).curveTo(-7.8,28.6,-9.3,27.9).lineTo(-9.9,27.6).lineTo(-10.7,28).curveTo(-11.8,28.5,-13,28.5).curveTo(-14.3,28.5,-15.5,27.9).closePath();
	var mask_1_graphics_20 = new cjs.Graphics().moveTo(-15.5,30.6).curveTo(-16.3,30.2,-16.9,29.6).curveTo(-17.5,29.6,-18.2,29.5).lineTo(-18.5,29.4).curveTo(-19.7,29.8,-21,29.7).curveTo(-22.6,29.6,-24,28.5).curveTo(-25.4,27.4,-25.9,25.8).lineTo(-25.9,25.7).curveTo(-26.7,25.7,-27.6,25.5).curveTo(-29.3,25.1,-30.5,23.5).curveTo(-31.4,22.2,-31.5,20.6).lineTo(-31.5,19.9).curveTo(-32.3,18.8,-32.5,17.6).curveTo(-32.6,16.8,-32.5,16).curveTo(-34,15.3,-34.9,13.8).curveTo(-35.7,12.3,-35.6,10.7).curveTo(-35.5,9,-34.5,7.6).lineTo(-34.1,7.1).curveTo(-34.6,5.9,-34.5,4.6).curveTo(-34.5,3.4,-34,2.5).lineTo(-33.9,1.6).curveTo(-33.4,0,-32.3,-1.1).lineTo(-32,-1.4).curveTo(-32.3,-2.1,-32.4,-2.8).curveTo(-32.5,-4.3,-31.8,-5.7).curveTo(-31.2,-7,-30.3,-7.8).lineTo(-30.1,-8.9).curveTo(-29.7,-10.6,-28.5,-11.7).lineTo(-27.8,-12.2).curveTo(-27.9,-13.5,-27.4,-14.7).curveTo(-26.8,-16.1,-25.5,-17).curveTo(-25.6,-17.8,-25.5,-18.6).curveTo(-25.2,-20.3,-24.2,-21.4).lineTo(-23.3,-22.2).lineTo(-23.2,-22.3).curveTo(-22.8,-23.5,-22,-24.3).lineTo(-22,-24.3).curveTo(-21.7,-25.9,-20.7,-27.2).lineTo(-20,-27.8).lineTo(-20,-27.9).curveTo(-19.4,-29.2,-18.3,-30).curveTo(-17.1,-30.8,-15.7,-31.1).curveTo(-14.2,-31.3,-13,-30.8).curveTo(-11.7,-30.3,-10.7,-29.2).curveTo(-9.7,-28.1,-9.5,-26.7).curveTo(-9.2,-25.8,-9.4,-25).curveTo(-9.5,-23.6,-10.3,-22.4).curveTo(-10.7,-21.8,-11.3,-21.3).curveTo(-11.7,-20.4,-12.4,-19.7).curveTo(-12.5,-18.4,-13.3,-17.2).curveTo(-13.9,-16.3,-14.7,-15.7).lineTo(-15,-15.1).curveTo(-15.6,-14,-16.6,-13.3).curveTo(-16.6,-12.6,-16.6,-11.9).curveTo(-16.8,-10.3,-17.8,-9).curveTo(-18.4,-8.3,-19.1,-7.8).lineTo(-19.1,-7.2).lineTo(-19.3,-5.9).curveTo(-19.9,-4.2,-21.2,-3.2).lineTo(-21.4,-1.8).curveTo(-21.7,-0.8,-22.1,-0.2).curveTo(-22.5,0.4,-23.1,0.8).lineTo(-23.2,0.9).curveTo(-23,1.6,-22.9,2.3).curveTo(-22.8,3.2,-22.9,3.9).lineTo(-23.3,5.1).curveTo(-23.3,6.3,-23.8,7.3).curveTo(-24.2,8.1,-24.9,8.8).lineTo(-24.7,9.3).curveTo(-24.3,10.4,-24.5,11.7).lineTo(-24.4,11.8).curveTo(-22.9,12.6,-22.1,14).curveTo(-21.4,15.2,-21.4,16.8).curveTo(-21,17.3,-20.8,18).lineTo(-20.6,18.5).curveTo(-19.7,18.5,-19,18.7).lineTo(-18.9,18.7).curveTo(-17.6,18.3,-16.2,18.5).curveTo(-14.8,18.6,-13.8,19.4).lineTo(-13.2,19.9).curveTo(-11.4,19.8,-9.9,20.8).lineTo(-9.4,20.5).lineTo(-8.8,19.6).curveTo(-8,18.4,-6.5,17.7).curveTo(-5.3,17.2,-4.1,17.2).curveTo(-3.1,16.3,-1.6,15.9).lineTo(-1.4,15.8).lineTo(-1.3,15.6).curveTo(-1,13.9,0.1,12.7).curveTo(1.1,11.7,2.5,11.3).lineTo(3.6,10.7).lineTo(3.8,10.3).curveTo(5.5,8,8.4,8).lineTo(8.7,8).lineTo(9.1,7.1).curveTo(9.8,5.8,11.1,5.1).curveTo(11.9,4.5,12.8,4.4).lineTo(13,4.2).curveTo(14,3.2,15.4,2.8).lineTo(15.8,2.7).lineTo(16.4,1.8).curveTo(17.5,0.4,19.1,-0.1).lineTo(20.3,-0.3).lineTo(21,-0.6).curveTo(22.3,-1.1,23.7,-0.8).curveTo(24.8,-1.8,26.5,-2.1).curveTo(27.2,-2.3,27.9,-2.2).curveTo(29.8,-3,32,-2.3).curveTo(34.2,-1.4,35.2,0.8).curveTo(36.2,3.4,34.8,5.8).curveTo(34.2,7,33,7.7).curveTo(31.8,8.5,30.5,8.6).lineTo(29.5,8.6).curveTo(28.1,9.1,26.7,8.9).lineTo(26.5,8.9).curveTo(25.9,9.5,24.9,9.9).curveTo(24.1,10.2,23.2,10.3).curveTo(22.6,10.6,22,10.7).lineTo(21.6,11.3).curveTo(20.9,12.4,19.7,13.1).curveTo(18.9,13.5,18.1,13.7).curveTo(17.4,14.3,16.5,14.8).curveTo(15.2,15.5,13.7,15.5).lineTo(13.7,15.5).lineTo(13.5,15.9).curveTo(12.9,17.2,11.7,18.1).lineTo(10.6,18.8).curveTo(9.8,20.2,8.3,20.9).lineTo(7.4,21.2).lineTo(7,21.5).curveTo(6.2,22,5.3,22.2).curveTo(5,24.3,3.2,25.7).curveTo(1.6,27,-0.4,26.9).curveTo(-1,27.5,-1.8,27.8).curveTo(-2.3,29,-3.3,29.9).curveTo(-4.6,30.9,-6.2,31.1).curveTo(-7.8,31.3,-9.3,30.5).lineTo(-9.9,30.2).lineTo(-10.7,30.6).curveTo(-11.8,31.2,-13,31.2).curveTo(-14.3,31.2,-15.5,30.6).closePath();
	var mask_1_graphics_22 = new cjs.Graphics().moveTo(-15.5,32.4).curveTo(-16.3,32,-16.9,31.5).curveTo(-17.5,31.5,-18.2,31.3).lineTo(-18.5,31.3).curveTo(-19.7,31.7,-21,31.6).curveTo(-22.6,31.4,-24,30.3).curveTo(-25.4,29.2,-25.9,27.6).lineTo(-25.9,27.6).curveTo(-26.7,27.6,-27.6,27.4).curveTo(-29.3,26.9,-30.5,25.4).curveTo(-31.4,24.1,-31.5,22.4).lineTo(-31.5,21.8).curveTo(-32.3,20.7,-32.5,19.4).curveTo(-32.6,18.6,-32.5,17.9).curveTo(-34,17.2,-34.9,15.7).curveTo(-35.7,14.2,-35.6,12.5).curveTo(-35.5,10.9,-34.5,9.5).lineTo(-34.1,8.9).curveTo(-34.6,7.8,-34.5,6.4).curveTo(-34.5,5.3,-34,4.4).lineTo(-33.9,3.4).curveTo(-33.4,1.9,-32.3,0.8).lineTo(-32,0.5).curveTo(-32.3,-0.2,-32.4,-0.9).curveTo(-32.5,-2.4,-31.8,-3.9).curveTo(-31.2,-5.1,-30.3,-5.9).lineTo(-30.1,-7).curveTo(-29.7,-8.7,-28.5,-9.9).lineTo(-27.8,-10.4).curveTo(-27.9,-11.6,-27.4,-12.8).curveTo(-26.8,-14.2,-25.5,-15.1).curveTo(-25.6,-15.9,-25.5,-16.8).curveTo(-25.2,-18.4,-24.2,-19.5).lineTo(-23.3,-20.3).lineTo(-23.2,-20.5).lineTo(-23.1,-20.7).curveTo(-24.6,-20.6,-26,-21.2).curveTo(-27.5,-21.9,-28.3,-23.4).curveTo(-29.2,-24.9,-29.1,-26.4).curveTo(-29.1,-28,-28.1,-29.4).curveTo(-27.2,-30.8,-25.7,-31.5).lineTo(-24.5,-31.8).curveTo(-23.6,-32.5,-22.6,-32.8).curveTo(-21.2,-33.2,-19.6,-32.8).curveTo(-18.8,-32.6,-18.2,-32.3).curveTo(-17.5,-32.5,-16.8,-32.6).curveTo(-15.4,-32.8,-14.1,-32.3).curveTo(-12.8,-31.8,-11.8,-30.7).curveTo(-10.9,-29.6,-10.6,-28.2).lineTo(-10.5,-27.1).curveTo(-9.7,-26.1,-9.5,-24.9).curveTo(-9.2,-23.9,-9.4,-23.2).curveTo(-9.5,-21.8,-10.3,-20.6).curveTo(-10.7,-19.9,-11.3,-19.4).curveTo(-11.7,-18.5,-12.4,-17.8).curveTo(-12.5,-16.5,-13.3,-15.3).curveTo(-13.9,-14.5,-14.7,-13.9).lineTo(-15,-13.2).curveTo(-15.6,-12.1,-16.6,-11.4).curveTo(-16.6,-10.8,-16.6,-10.1).curveTo(-16.8,-8.5,-17.8,-7.1).curveTo(-18.4,-6.4,-19.1,-6).lineTo(-19.1,-5.3).lineTo(-19.3,-4).curveTo(-19.9,-2.3,-21.2,-1.3).lineTo(-21.4,0.1).curveTo(-21.7,1,-22.1,1.6).curveTo(-22.5,2.3,-23.1,2.7).lineTo(-23.2,2.8).curveTo(-23,3.4,-22.9,4.1).curveTo(-22.8,5.1,-22.9,5.7).lineTo(-23.3,7).curveTo(-23.3,8.2,-23.8,9.2).curveTo(-24.2,10,-24.9,10.6).lineTo(-24.7,11.1).curveTo(-24.3,12.3,-24.5,13.6).lineTo(-24.4,13.6).curveTo(-22.9,14.4,-22.1,15.8).curveTo(-21.4,17.1,-21.4,18.7).curveTo(-21,19.2,-20.8,19.8).lineTo(-20.6,20.4).curveTo(-19.7,20.4,-19,20.6).lineTo(-18.9,20.5).curveTo(-17.6,20.1,-16.2,20.3).curveTo(-14.8,20.5,-13.8,21.3).lineTo(-13.2,21.7).curveTo(-11.4,21.7,-9.9,22.7).lineTo(-9.4,22.3).lineTo(-8.8,21.4).curveTo(-8,20.2,-6.5,19.6).curveTo(-5.3,19.1,-4.1,19).curveTo(-3.1,18.1,-1.6,17.7).lineTo(-1.4,17.7).lineTo(-1.3,17.4).curveTo(-1,15.7,0.1,14.6).curveTo(1.1,13.6,2.5,13.2).lineTo(3.6,12.6).lineTo(3.8,12.2).curveTo(5.5,9.9,8.4,9.9).lineTo(8.7,9.9).lineTo(9.1,8.9).curveTo(9.8,7.7,11.1,6.9).curveTo(11.9,6.4,12.8,6.2).lineTo(13,6).curveTo(14,5,15.4,4.6).lineTo(15.8,4.5).lineTo(16.4,3.6).curveTo(17.5,2.3,19.1,1.8).lineTo(20.3,1.6).lineTo(21,1.2).curveTo(22.3,0.8,23.7,1).curveTo(24.8,0,26.5,-0.3).curveTo(27.2,-0.4,27.9,-0.4).curveTo(29.8,-1.2,32,-0.4).curveTo(34.2,0.5,35.2,2.7).curveTo(36.2,5.2,34.8,7.7).curveTo(34.2,8.8,33,9.6).curveTo(31.8,10.3,30.5,10.4).lineTo(29.5,10.4).curveTo(28.1,11,26.7,10.8).lineTo(26.5,10.7).curveTo(25.9,11.3,24.9,11.7).curveTo(24.1,12.1,23.2,12.2).curveTo(22.6,12.5,22,12.6).lineTo(21.6,13.1).curveTo(20.9,14.2,19.7,14.9).curveTo(18.9,15.3,18.1,15.5).curveTo(17.4,16.2,16.5,16.7).curveTo(15.2,17.4,13.7,17.3).lineTo(13.7,17.3).lineTo(13.5,17.7).curveTo(12.9,19.1,11.7,20).lineTo(10.6,20.6).curveTo(9.8,22,8.3,22.8).lineTo(7.4,23.1).lineTo(7,23.4).curveTo(6.2,23.8,5.3,24).curveTo(5,26.2,3.2,27.6).curveTo(1.6,28.9,-0.4,28.8).curveTo(-1,29.3,-1.8,29.7).curveTo(-2.3,30.8,-3.3,31.7).curveTo(-4.6,32.8,-6.2,33).curveTo(-7.8,33.1,-9.3,32.4).lineTo(-9.9,32.1).lineTo(-10.7,32.5).curveTo(-11.8,33,-13,33).curveTo(-14.3,33,-15.5,32.4).closePath();
	var mask_1_graphics_24 = new cjs.Graphics().moveTo(-15.5,36.7).curveTo(-16.3,36.3,-16.9,35.8).curveTo(-17.5,35.8,-18.2,35.6).lineTo(-18.5,35.6).curveTo(-19.7,36,-21,35.9).curveTo(-22.6,35.7,-24,34.6).curveTo(-25.4,33.5,-25.9,31.9).lineTo(-25.9,31.9).curveTo(-26.7,31.9,-27.6,31.7).curveTo(-29.3,31.2,-30.5,29.7).curveTo(-31.4,28.4,-31.5,26.7).lineTo(-31.5,26.1).curveTo(-32.3,25,-32.5,23.7).curveTo(-32.6,23,-32.5,22.2).curveTo(-34,21.5,-34.9,20).curveTo(-35.7,18.5,-35.6,16.8).curveTo(-35.5,15.2,-34.5,13.8).lineTo(-34.1,13.3).curveTo(-34.6,12.1,-34.5,10.7).curveTo(-34.5,9.6,-34,8.7).lineTo(-33.9,7.7).curveTo(-33.4,6.2,-32.3,5.1).lineTo(-32,4.8).curveTo(-32.3,4.1,-32.4,3.4).curveTo(-32.5,1.9,-31.8,0.4).curveTo(-31.2,-0.8,-30.3,-1.6).lineTo(-30.1,-2.7).curveTo(-29.7,-4.4,-28.5,-5.6).lineTo(-27.8,-6.1).curveTo(-27.9,-7.3,-27.4,-8.5).curveTo(-26.8,-9.9,-25.5,-10.8).curveTo(-25.6,-11.6,-25.5,-12.5).curveTo(-25.2,-14.1,-24.2,-15.2).lineTo(-23.3,-16).lineTo(-23.2,-16.2).lineTo(-23.1,-16.4).curveTo(-24.6,-16.3,-26,-16.9).curveTo(-27.5,-17.6,-28.3,-19.1).curveTo(-29.2,-20.6,-29.1,-22.1).lineTo(-29,-23.1).lineTo(-29.1,-23.2).curveTo(-29.9,-24.4,-30.1,-25.8).curveTo(-30.2,-27.2,-29.6,-28.6).curveTo(-29.3,-29.3,-28.9,-29.9).curveTo(-29.3,-31.1,-29.1,-32.6).curveTo(-28.7,-35.1,-26.6,-36.4).curveTo(-25,-37.5,-23.1,-37.3).curveTo(-21.2,-37.2,-19.7,-35.9).curveTo(-18.3,-34.6,-18,-32.7).curveTo(-17.6,-30.9,-18.5,-29.1).lineTo(-19,-28.3).lineTo(-18.2,-27.9).curveTo(-17.5,-28.2,-16.8,-28.3).curveTo(-15.4,-28.5,-14.1,-28).curveTo(-12.8,-27.5,-11.8,-26.4).curveTo(-10.9,-25.3,-10.6,-23.9).lineTo(-10.5,-22.8).curveTo(-9.7,-21.8,-9.5,-20.6).curveTo(-9.2,-19.6,-9.4,-18.9).curveTo(-9.5,-17.5,-10.3,-16.3).curveTo(-10.7,-15.6,-11.3,-15.1).curveTo(-11.7,-14.2,-12.4,-13.5).curveTo(-12.5,-12.2,-13.3,-11).curveTo(-13.9,-10.1,-14.7,-9.6).lineTo(-15,-8.9).curveTo(-15.6,-7.8,-16.6,-7.1).curveTo(-16.6,-6.5,-16.6,-5.8).curveTo(-16.8,-4.2,-17.8,-2.8).curveTo(-18.4,-2.1,-19.1,-1.7).lineTo(-19.1,-1).lineTo(-19.3,0.3).curveTo(-19.9,2,-21.2,3).lineTo(-21.4,4.4).curveTo(-21.7,5.3,-22.1,5.9).curveTo(-22.5,6.6,-23.1,7).lineTo(-23.2,7.1).curveTo(-23,7.7,-22.9,8.4).curveTo(-22.8,9.4,-22.9,10).lineTo(-23.3,11.3).curveTo(-23.3,12.5,-23.8,13.5).curveTo(-24.2,14.3,-24.9,15).lineTo(-24.7,15.4).curveTo(-24.3,16.6,-24.5,17.9).lineTo(-24.4,17.9).curveTo(-22.9,18.7,-22.1,20.1).curveTo(-21.4,21.4,-21.4,23).curveTo(-21,23.5,-20.8,24.1).lineTo(-20.6,24.7).curveTo(-19.7,24.7,-19,24.9).lineTo(-18.9,24.8).curveTo(-17.6,24.4,-16.2,24.6).curveTo(-14.8,24.8,-13.8,25.6).lineTo(-13.2,26.1).curveTo(-11.4,26,-9.9,27).lineTo(-9.4,26.7).lineTo(-8.8,25.7).curveTo(-8,24.5,-6.5,23.9).curveTo(-5.3,23.4,-4.1,23.4).curveTo(-3.1,22.4,-1.6,22).lineTo(-1.4,22).lineTo(-1.3,21.7).curveTo(-1,20,0.1,18.9).curveTo(1.1,17.9,2.5,17.5).lineTo(3.6,16.9).lineTo(3.8,16.5).curveTo(5.5,14.2,8.4,14.2).lineTo(8.7,14.2).lineTo(9.1,13.2).curveTo(9.8,12,11.1,11.2).curveTo(11.9,10.7,12.8,10.5).lineTo(13,10.3).curveTo(14,9.3,15.4,8.9).lineTo(15.8,8.8).lineTo(16.4,7.9).curveTo(17.5,6.6,19.1,6.1).lineTo(20.3,5.9).lineTo(21,5.5).curveTo(22.3,5.1,23.7,5.4).curveTo(24.8,4.3,26.5,4).curveTo(27.2,3.9,27.9,3.9).curveTo(29.8,3.1,32,3.9).curveTo(34.2,4.8,35.2,7).curveTo(36.2,9.5,34.8,12).curveTo(34.2,13.1,33,13.9).curveTo(31.8,14.6,30.5,14.7).lineTo(29.5,14.7).curveTo(28.1,15.3,26.7,15.1).lineTo(26.5,15.1).curveTo(25.9,15.7,24.9,16).curveTo(24.1,16.4,23.2,16.5).curveTo(22.6,16.8,22,16.9).lineTo(21.6,17.4).curveTo(20.9,18.5,19.7,19.2).curveTo(18.9,19.7,18.1,19.8).curveTo(17.4,20.5,16.5,21).curveTo(15.2,21.7,13.7,21.6).lineTo(13.7,21.6).lineTo(13.5,22).curveTo(12.9,23.4,11.7,24.3).lineTo(10.6,24.9).curveTo(9.8,26.3,8.3,27.1).lineTo(7.4,27.4).lineTo(7,27.7).curveTo(6.2,28.1,5.3,28.3).curveTo(5,30.5,3.2,31.9).curveTo(1.6,33.2,-0.4,33.1).curveTo(-1,33.6,-1.8,34).curveTo(-2.3,35.2,-3.3,36).curveTo(-4.6,37.1,-6.2,37.3).curveTo(-7.8,37.4,-9.3,36.7).lineTo(-9.9,36.4).lineTo(-10.7,36.8).curveTo(-11.8,37.3,-13,37.3).curveTo(-14.3,37.3,-15.5,36.7).closePath();
	var mask_1_graphics_26 = new cjs.Graphics().moveTo(-15.5,45.4).curveTo(-16.3,45,-16.9,44.5).curveTo(-17.5,44.5,-18.2,44.3).lineTo(-18.5,44.3).curveTo(-19.7,44.7,-21,44.6).curveTo(-22.6,44.4,-24,43.3).curveTo(-25.4,42.2,-25.9,40.6).lineTo(-25.9,40.6).curveTo(-26.7,40.6,-27.6,40.4).curveTo(-29.3,39.9,-30.5,38.4).curveTo(-31.4,37.1,-31.5,35.4).lineTo(-31.5,34.8).curveTo(-32.3,33.7,-32.5,32.4).curveTo(-32.6,31.7,-32.5,30.9).curveTo(-34,30.2,-34.9,28.7).curveTo(-35.7,27.2,-35.6,25.5).curveTo(-35.5,23.9,-34.5,22.5).lineTo(-34.1,22).curveTo(-34.6,20.8,-34.5,19.4).curveTo(-34.5,18.3,-34,17.4).lineTo(-33.9,16.4).curveTo(-33.4,14.9,-32.3,13.8).lineTo(-32,13.5).curveTo(-32.3,12.8,-32.4,12.1).curveTo(-32.5,10.6,-31.8,9.1).curveTo(-31.2,7.9,-30.3,7.1).lineTo(-30.1,6).curveTo(-29.7,4.3,-28.5,3.1).lineTo(-27.8,2.6).curveTo(-27.9,1.4,-27.4,0.2).curveTo(-26.8,-1.2,-25.5,-2.1).curveTo(-25.6,-2.9,-25.5,-3.8).curveTo(-25.2,-5.4,-24.2,-6.5).lineTo(-23.3,-7.3).lineTo(-23.2,-7.5).lineTo(-23.1,-7.7).curveTo(-24.6,-7.6,-26,-8.2).curveTo(-27.5,-8.9,-28.3,-10.4).curveTo(-29.2,-11.9,-29.1,-13.4).lineTo(-29,-14.4).lineTo(-29.1,-14.5).curveTo(-29.9,-15.7,-30.1,-17.1).curveTo(-30.2,-18.5,-29.6,-19.9).curveTo(-29.3,-20.6,-28.9,-21.2).curveTo(-29.3,-22.4,-29.1,-23.9).curveTo(-28.8,-25.5,-27.9,-26.6).lineTo(-28.4,-27.1).curveTo(-29.3,-28.2,-29.5,-29.7).curveTo(-29.8,-31.1,-29.4,-32.5).curveTo(-28.9,-33.9,-27.8,-34.9).curveTo(-27.1,-35.5,-26.3,-35.8).curveTo(-26.7,-37.8,-25.8,-39.5).lineTo(-25.8,-39.7).curveTo(-26,-41.2,-25.5,-42.5).curveTo(-25,-43.8,-23.9,-44.7).curveTo(-22.8,-45.7,-21.4,-45.9).curveTo(-20.1,-46.2,-18.7,-45.8).curveTo(-17.3,-45.4,-16.3,-44.4).curveTo(-15,-43.1,-14.7,-41.2).curveTo(-14.5,-39.4,-15.3,-37.9).curveTo(-15,-36.4,-15.6,-34.9).curveTo(-16.2,-33.4,-17.5,-32.5).curveTo(-18,-32.1,-18.6,-31.8).lineTo(-18.6,-31.7).curveTo(-18.3,-30.2,-18.8,-28.8).curveTo(-19.1,-27.9,-19.7,-27.1).curveTo(-18.3,-25.9,-18,-24).curveTo(-17.6,-22.2,-18.5,-20.4).lineTo(-19,-19.6).lineTo(-18.2,-19.2).curveTo(-17.5,-19.5,-16.8,-19.6).curveTo(-15.4,-19.8,-14.1,-19.3).curveTo(-12.8,-18.8,-11.8,-17.7).curveTo(-10.9,-16.6,-10.6,-15.2).lineTo(-10.5,-14.1).curveTo(-9.7,-13.1,-9.5,-11.9).curveTo(-9.2,-10.9,-9.4,-10.2).curveTo(-9.5,-8.8,-10.3,-7.6).curveTo(-10.7,-6.9,-11.3,-6.4).curveTo(-11.7,-5.5,-12.4,-4.8).curveTo(-12.5,-3.5,-13.3,-2.3).curveTo(-13.9,-1.4,-14.7,-0.9).lineTo(-15,-0.2).curveTo(-15.6,0.9,-16.6,1.6).curveTo(-16.6,2.3,-16.6,2.9).curveTo(-16.8,4.5,-17.8,5.9).curveTo(-18.4,6.6,-19.1,7).lineTo(-19.1,7.7).lineTo(-19.3,9).curveTo(-19.9,10.7,-21.2,11.7).lineTo(-21.4,13.1).curveTo(-21.7,14,-22.1,14.6).curveTo(-22.5,15.3,-23.1,15.7).lineTo(-23.2,15.8).curveTo(-23,16.4,-22.9,17.1).curveTo(-22.8,18.1,-22.9,18.7).lineTo(-23.3,20).curveTo(-23.3,21.2,-23.8,22.2).curveTo(-24.2,23,-24.9,23.7).lineTo(-24.7,24.1).curveTo(-24.3,25.3,-24.5,26.6).lineTo(-24.4,26.6).curveTo(-22.9,27.4,-22.1,28.8).curveTo(-21.4,30.1,-21.4,31.7).curveTo(-21,32.2,-20.8,32.8).lineTo(-20.6,33.4).curveTo(-19.7,33.4,-19,33.6).lineTo(-18.9,33.5).curveTo(-17.6,33.1,-16.2,33.3).curveTo(-14.8,33.5,-13.8,34.3).lineTo(-13.2,34.8).curveTo(-11.4,34.7,-9.9,35.7).lineTo(-9.4,35.4).lineTo(-8.8,34.4).curveTo(-8,33.2,-6.5,32.6).curveTo(-5.3,32.1,-4.1,32.1).curveTo(-3.1,31.1,-1.6,30.7).lineTo(-1.4,30.7).lineTo(-1.3,30.4).curveTo(-1,28.7,0.1,27.6).curveTo(1.1,26.6,2.5,26.2).lineTo(3.6,25.6).lineTo(3.8,25.2).curveTo(5.5,22.9,8.4,22.9).lineTo(8.7,22.9).lineTo(9.1,21.9).curveTo(9.8,20.7,11.1,19.9).curveTo(11.9,19.4,12.8,19.2).lineTo(13,19).curveTo(14,18,15.4,17.6).lineTo(15.8,17.5).lineTo(16.4,16.6).curveTo(17.5,15.3,19.1,14.8).lineTo(20.3,14.6).lineTo(21,14.2).curveTo(22.3,13.8,23.7,14.1).curveTo(24.8,13,26.5,12.7).curveTo(27.2,12.6,27.9,12.6).curveTo(29.8,11.9,32,12.6).curveTo(34.2,13.5,35.2,15.7).curveTo(36.2,18.2,34.8,20.7).curveTo(34.2,21.8,33,22.6).curveTo(31.8,23.3,30.5,23.4).lineTo(29.5,23.4).curveTo(28.1,24,26.7,23.8).lineTo(26.5,23.8).curveTo(25.9,24.4,24.9,24.7).curveTo(24.1,25.1,23.2,25.2).curveTo(22.6,25.5,22,25.6).lineTo(21.6,26.1).curveTo(20.9,27.2,19.7,27.9).curveTo(18.9,28.4,18.1,28.5).curveTo(17.4,29.2,16.5,29.7).curveTo(15.2,30.4,13.7,30.3).lineTo(13.7,30.3).lineTo(13.5,30.7).curveTo(12.9,32.1,11.7,33).lineTo(10.6,33.6).curveTo(9.8,35,8.3,35.8).lineTo(7.4,36.1).lineTo(7,36.4).curveTo(6.2,36.8,5.3,37).curveTo(5,39.2,3.2,40.6).curveTo(1.6,41.9,-0.4,41.8).curveTo(-1,42.3,-1.8,42.7).curveTo(-2.3,43.9,-3.3,44.7).curveTo(-4.6,45.8,-6.2,46).curveTo(-7.8,46.1,-9.3,45.4).lineTo(-9.9,45.1).lineTo(-10.7,45.5).curveTo(-11.8,46,-13,46).curveTo(-14.3,46,-15.5,45.4).closePath();
	var mask_1_graphics_28 = new cjs.Graphics().moveTo(-15.5,54.3).curveTo(-16.3,53.9,-16.9,53.4).curveTo(-17.5,53.4,-18.2,53.2).lineTo(-18.5,53.1).curveTo(-19.7,53.6,-21,53.5).curveTo(-22.6,53.3,-24,52.2).curveTo(-25.4,51.1,-25.9,49.5).lineTo(-25.9,49.5).curveTo(-26.7,49.5,-27.6,49.3).curveTo(-29.3,48.8,-30.5,47.3).curveTo(-31.4,46,-31.5,44.3).lineTo(-31.5,43.7).curveTo(-32.3,42.6,-32.5,41.3).curveTo(-32.6,40.5,-32.5,39.8).curveTo(-34,39.1,-34.9,37.6).curveTo(-35.7,36.1,-35.6,34.4).curveTo(-35.5,32.8,-34.5,31.4).lineTo(-34.1,30.8).curveTo(-34.6,29.6,-34.5,28.3).curveTo(-34.5,27.2,-34,26.3).lineTo(-33.9,25.3).curveTo(-33.4,23.8,-32.3,22.7).lineTo(-32,22.4).curveTo(-32.3,21.7,-32.4,21).curveTo(-32.5,19.5,-31.8,18).curveTo(-31.2,16.8,-30.3,16).lineTo(-30.1,14.9).curveTo(-29.7,13.2,-28.5,12).lineTo(-27.8,11.5).curveTo(-27.9,10.2,-27.4,9.1).curveTo(-26.8,7.7,-25.5,6.8).curveTo(-25.6,6,-25.5,5.1).curveTo(-25.2,3.5,-24.2,2.4).lineTo(-23.3,1.6).lineTo(-23.2,1.4).lineTo(-23.1,1.2).curveTo(-24.6,1.3,-26,0.7).curveTo(-27.5,-0,-28.3,-1.5).curveTo(-29.2,-3,-29.1,-4.5).lineTo(-29,-5.5).lineTo(-29.1,-5.6).curveTo(-29.9,-6.8,-30.1,-8.2).curveTo(-30.2,-9.6,-29.6,-11).curveTo(-29.3,-11.7,-28.9,-12.3).curveTo(-29.3,-13.6,-29.1,-15).curveTo(-28.8,-16.6,-27.9,-17.7).lineTo(-28.4,-18.2).curveTo(-29.3,-19.3,-29.5,-20.8).curveTo(-29.8,-22.2,-29.4,-23.6).curveTo(-28.9,-25,-27.8,-26).curveTo(-27.1,-26.6,-26.3,-27).curveTo(-26.7,-28.9,-25.8,-30.6).lineTo(-25.8,-30.8).curveTo(-26,-32.3,-25.5,-33.6).curveTo(-25,-34.9,-23.9,-35.8).curveTo(-22.8,-36.8,-21.4,-37).lineTo(-21.2,-37.1).curveTo(-21.3,-37.9,-21.1,-38.8).curveTo(-20.7,-40.2,-19.8,-41.2).curveTo(-18.9,-42.2,-17.6,-42.7).curveTo(-17.4,-43.5,-17.1,-44.2).curveTo(-16.4,-45.6,-15,-46.4).curveTo(-14.4,-46.8,-13.7,-47).curveTo(-13.3,-48.2,-12.3,-49.1).curveTo(-11.3,-50.1,-10.1,-50.5).curveTo(-9.9,-51.4,-9.3,-52.3).curveTo(-8.4,-53.8,-6.8,-54.5).curveTo(-5.6,-55,-4.1,-54.9).curveTo(-2.7,-54.7,-1.5,-54).curveTo(-0.4,-53.2,0.3,-52).curveTo(1,-50.7,1,-49.4).curveTo(1,-48,0.4,-46.7).curveTo(-0.3,-45.5,-1.4,-44.7).curveTo(-2.1,-44.2,-2.9,-44).curveTo(-3.2,-42.5,-4.2,-41.4).curveTo(-5.2,-40.3,-6.7,-39.8).lineTo(-6.8,-39.8).lineTo(-7.2,-38.9).curveTo(-7.9,-37.6,-9.2,-36.8).lineTo(-10.1,-36.4).lineTo(-10.3,-35.9).curveTo(-10.6,-34.7,-11.2,-34).curveTo(-12.4,-32.5,-14.2,-32).lineTo(-14.7,-31.9).curveTo(-14.6,-30.4,-15.3,-29).curveTo(-15,-27.5,-15.6,-26).curveTo(-16.2,-24.5,-17.5,-23.6).curveTo(-18,-23.2,-18.6,-22.9).lineTo(-18.6,-22.8).curveTo(-18.3,-21.3,-18.8,-19.9).curveTo(-19.1,-19,-19.7,-18.3).curveTo(-18.3,-17,-18,-15.1).curveTo(-17.6,-13.3,-18.5,-11.5).lineTo(-19,-10.8).lineTo(-18.2,-10.4).curveTo(-17.5,-10.6,-16.8,-10.7).curveTo(-15.4,-10.9,-14.1,-10.4).curveTo(-12.8,-9.9,-11.8,-8.8).curveTo(-10.9,-7.7,-10.6,-6.3).lineTo(-10.5,-5.2).curveTo(-9.7,-4.2,-9.5,-3).curveTo(-9.2,-2,-9.4,-1.3).curveTo(-9.5,0.1,-10.3,1.3).curveTo(-10.7,2,-11.3,2.5).curveTo(-11.7,3.4,-12.4,4.1).curveTo(-12.5,5.4,-13.3,6.6).curveTo(-13.9,7.4,-14.7,8).lineTo(-15,8.7).curveTo(-15.6,9.8,-16.6,10.5).curveTo(-16.6,11.1,-16.6,11.8).curveTo(-16.8,13.4,-17.8,14.8).curveTo(-18.4,15.4,-19.1,15.9).lineTo(-19.1,16.6).lineTo(-19.3,17.9).curveTo(-19.9,19.6,-21.2,20.6).lineTo(-21.4,22).curveTo(-21.7,22.9,-22.1,23.5).curveTo(-22.5,24.2,-23.1,24.6).lineTo(-23.2,24.7).curveTo(-23,25.3,-22.9,26).curveTo(-22.8,27,-22.9,27.6).lineTo(-23.3,28.9).curveTo(-23.3,30,-23.8,31.1).curveTo(-24.2,31.9,-24.9,32.5).lineTo(-24.7,33).curveTo(-24.3,34.2,-24.5,35.5).lineTo(-24.4,35.5).curveTo(-22.9,36.3,-22.1,37.7).curveTo(-21.4,39,-21.4,40.6).curveTo(-21,41.1,-20.8,41.7).lineTo(-20.6,42.3).curveTo(-19.7,42.3,-19,42.5).lineTo(-18.9,42.4).curveTo(-17.6,42,-16.2,42.2).curveTo(-14.8,42.4,-13.8,43.2).lineTo(-13.2,43.6).curveTo(-11.4,43.6,-9.9,44.6).lineTo(-9.4,44.2).lineTo(-8.8,43.3).curveTo(-8,42.1,-6.5,41.5).curveTo(-5.3,40.9,-4.1,40.9).curveTo(-3.1,40,-1.6,39.6).lineTo(-1.4,39.5).lineTo(-1.3,39.3).curveTo(-1,37.6,0.1,36.5).curveTo(1.1,35.5,2.5,35.1).lineTo(3.6,34.5).lineTo(3.8,34.1).curveTo(5.5,31.8,8.4,31.8).lineTo(8.7,31.8).lineTo(9.1,30.8).curveTo(9.8,29.6,11.1,28.8).curveTo(11.9,28.3,12.8,28.1).lineTo(13,27.9).curveTo(14,26.9,15.4,26.5).lineTo(15.8,26.4).lineTo(16.4,25.5).curveTo(17.5,24.2,19.1,23.7).lineTo(20.3,23.4).lineTo(21,23.1).curveTo(22.3,22.7,23.7,22.9).curveTo(24.8,21.9,26.5,21.6).curveTo(27.2,21.5,27.9,21.5).curveTo(29.8,20.7,32,21.5).curveTo(34.2,22.4,35.2,24.6).curveTo(36.2,27.1,34.8,29.6).curveTo(34.2,30.7,33,31.5).curveTo(31.8,32.2,30.5,32.3).lineTo(29.5,32.3).curveTo(28.1,32.9,26.7,32.7).lineTo(26.5,32.6).curveTo(25.9,33.2,24.9,33.6).curveTo(24.1,34,23.2,34.1).curveTo(22.6,34.3,22,34.5).lineTo(21.6,35).curveTo(20.9,36.1,19.7,36.8).curveTo(18.9,37.2,18.1,37.4).curveTo(17.4,38.1,16.5,38.6).curveTo(15.2,39.3,13.7,39.2).lineTo(13.7,39.2).lineTo(13.5,39.6).curveTo(12.9,41,11.7,41.9).lineTo(10.6,42.5).curveTo(9.8,43.9,8.3,44.7).lineTo(7.4,45).lineTo(7,45.3).curveTo(6.2,45.7,5.3,45.9).curveTo(5,48,3.2,49.5).curveTo(1.6,50.8,-0.4,50.7).curveTo(-1,51.2,-1.8,51.6).curveTo(-2.3,52.7,-3.3,53.6).curveTo(-4.6,54.7,-6.2,54.9).curveTo(-7.8,55,-9.3,54.3).lineTo(-9.9,53.9).lineTo(-10.7,54.4).curveTo(-11.8,54.9,-13,54.9).curveTo(-14.3,54.9,-15.5,54.3).closePath();
	var mask_1_graphics_30 = new cjs.Graphics().moveTo(-15.5,58.9).curveTo(-16.3,58.5,-16.9,58).curveTo(-17.5,58,-18.2,57.8).lineTo(-18.5,57.7).curveTo(-19.7,58.2,-21,58.1).curveTo(-22.6,57.9,-24,56.8).curveTo(-25.4,55.7,-25.9,54.1).lineTo(-25.9,54.1).curveTo(-26.7,54.1,-27.6,53.9).curveTo(-29.3,53.4,-30.5,51.9).curveTo(-31.4,50.6,-31.5,48.9).lineTo(-31.5,48.3).curveTo(-32.3,47.2,-32.5,45.9).curveTo(-32.6,45.1,-32.5,44.4).curveTo(-34,43.7,-34.9,42.2).curveTo(-35.7,40.7,-35.6,39).curveTo(-35.5,37.4,-34.5,36).lineTo(-34.1,35.4).curveTo(-34.6,34.2,-34.5,32.9).curveTo(-34.5,31.8,-34,30.9).lineTo(-33.9,29.9).curveTo(-33.4,28.4,-32.3,27.3).lineTo(-32,27).curveTo(-32.3,26.3,-32.4,25.6).curveTo(-32.5,24.1,-31.8,22.6).curveTo(-31.2,21.4,-30.3,20.6).lineTo(-30.1,19.5).curveTo(-29.7,17.8,-28.5,16.6).lineTo(-27.8,16.1).curveTo(-27.9,14.8,-27.4,13.7).curveTo(-26.8,12.3,-25.5,11.4).curveTo(-25.6,10.6,-25.5,9.7).curveTo(-25.2,8.1,-24.2,7).lineTo(-23.3,6.2).lineTo(-23.2,6).lineTo(-23.1,5.8).curveTo(-24.6,5.9,-26,5.3).curveTo(-27.5,4.6,-28.3,3.1).curveTo(-29.2,1.6,-29.1,0.1).lineTo(-29,-0.9).lineTo(-29.1,-1).curveTo(-29.9,-2.2,-30.1,-3.6).curveTo(-30.2,-5,-29.6,-6.4).curveTo(-29.3,-7.1,-28.9,-7.7).curveTo(-29.3,-9,-29.1,-10.4).curveTo(-28.8,-12,-27.9,-13.1).lineTo(-28.4,-13.6).curveTo(-29.3,-14.7,-29.5,-16.2).curveTo(-29.8,-17.6,-29.4,-19).curveTo(-28.9,-20.4,-27.8,-21.4).curveTo(-27.1,-22,-26.3,-22.4).curveTo(-26.7,-24.3,-25.8,-26).lineTo(-25.8,-26.2).curveTo(-26,-27.7,-25.5,-29).curveTo(-25,-30.3,-23.9,-31.2).curveTo(-22.8,-32.2,-21.4,-32.4).lineTo(-21.2,-32.5).curveTo(-21.3,-33.3,-21.1,-34.2).curveTo(-20.7,-35.6,-19.8,-36.6).curveTo(-18.9,-37.6,-17.6,-38.1).curveTo(-17.4,-38.9,-17.1,-39.6).curveTo(-16.4,-41,-15,-41.8).curveTo(-14.4,-42.2,-13.7,-42.4).curveTo(-13.3,-43.6,-12.3,-44.5).curveTo(-11.3,-45.5,-10.1,-45.9).curveTo(-9.9,-46.8,-9.3,-47.7).curveTo(-8.4,-49.2,-6.8,-49.9).curveTo(-5.6,-50.4,-4.1,-50.3).curveTo(-2.7,-50.1,-1.5,-49.4).lineTo(-1.2,-49.1).curveTo(-0.4,-49.8,0.7,-50.2).lineTo(1.8,-50.4).curveTo(2.2,-51.1,2.9,-51.7).curveTo(4.2,-52.9,5.9,-53.1).lineTo(6.2,-53.1).curveTo(6.7,-53.6,7.2,-54).curveTo(7.9,-54.5,8.7,-54.8).curveTo(9.6,-56,10.9,-56.5).curveTo(11.7,-56.9,12.6,-56.9).curveTo(13.1,-57.7,13.9,-58.3).curveTo(15.6,-59.6,17.8,-59.5).curveTo(20.5,-59.2,22.1,-56.8).curveTo(23.5,-54.5,22.5,-51.8).curveTo(21.5,-49.2,18.8,-48.5).lineTo(17.9,-48.3).lineTo(17,-47.3).curveTo(16,-46.4,14.9,-46).curveTo(14.1,-45,12.9,-44.4).curveTo(12,-44,10.9,-43.9).curveTo(9.9,-42.7,8.5,-42.1).curveTo(7.8,-41.9,7.2,-41.8).curveTo(6.6,-40.9,5.6,-40.2).curveTo(4.2,-39.3,2.6,-39.3).curveTo(1,-39.2,-0.4,-40.1).lineTo(-0.9,-40.5).lineTo(-1.4,-40.1).curveTo(-2.1,-39.6,-2.9,-39.4).curveTo(-3.2,-37.9,-4.2,-36.8).curveTo(-5.2,-35.7,-6.7,-35.2).lineTo(-6.8,-35.2).lineTo(-7.2,-34.3).curveTo(-7.9,-33,-9.2,-32.2).lineTo(-10.1,-31.8).lineTo(-10.3,-31.3).curveTo(-10.6,-30.1,-11.2,-29.4).curveTo(-12.4,-27.9,-14.2,-27.4).lineTo(-14.7,-27.3).curveTo(-14.6,-25.8,-15.3,-24.4).curveTo(-15,-22.9,-15.6,-21.4).curveTo(-16.2,-19.9,-17.5,-19).curveTo(-18,-18.6,-18.6,-18.3).lineTo(-18.6,-18.2).curveTo(-18.3,-16.7,-18.8,-15.3).curveTo(-19.1,-14.4,-19.7,-13.7).curveTo(-18.3,-12.4,-18,-10.5).curveTo(-17.6,-8.7,-18.5,-6.9).lineTo(-19,-6.2).lineTo(-18.2,-5.8).curveTo(-17.5,-6,-16.8,-6.1).curveTo(-15.4,-6.3,-14.1,-5.8).curveTo(-12.8,-5.3,-11.8,-4.2).curveTo(-10.9,-3.1,-10.6,-1.7).lineTo(-10.5,-0.6).curveTo(-9.7,0.4,-9.5,1.6).curveTo(-9.2,2.6,-9.4,3.3).curveTo(-9.5,4.7,-10.3,5.9).curveTo(-10.7,6.6,-11.3,7.1).curveTo(-11.7,8,-12.4,8.7).curveTo(-12.5,10,-13.3,11.2).curveTo(-13.9,12,-14.7,12.6).lineTo(-15,13.3).curveTo(-15.6,14.4,-16.6,15.1).curveTo(-16.6,15.7,-16.6,16.4).curveTo(-16.8,18,-17.8,19.4).curveTo(-18.4,20,-19.1,20.5).lineTo(-19.1,21.2).lineTo(-19.3,22.5).curveTo(-19.9,24.2,-21.2,25.2).lineTo(-21.4,26.6).curveTo(-21.7,27.5,-22.1,28.1).curveTo(-22.5,28.8,-23.1,29.2).lineTo(-23.2,29.3).curveTo(-23,29.9,-22.9,30.6).curveTo(-22.8,31.6,-22.9,32.2).lineTo(-23.3,33.5).curveTo(-23.3,34.6,-23.8,35.7).curveTo(-24.2,36.5,-24.9,37.1).lineTo(-24.7,37.6).curveTo(-24.3,38.8,-24.5,40.1).lineTo(-24.4,40.1).curveTo(-22.9,40.9,-22.1,42.3).curveTo(-21.4,43.6,-21.4,45.2).curveTo(-21,45.7,-20.8,46.3).lineTo(-20.6,46.9).curveTo(-19.7,46.9,-19,47.1).lineTo(-18.9,47).curveTo(-17.6,46.6,-16.2,46.8).curveTo(-14.8,47,-13.8,47.8).lineTo(-13.2,48.2).curveTo(-11.4,48.2,-9.9,49.2).lineTo(-9.4,48.8).lineTo(-8.8,47.9).curveTo(-8,46.7,-6.5,46.1).curveTo(-5.3,45.5,-4.1,45.5).curveTo(-3.1,44.6,-1.6,44.2).lineTo(-1.4,44.1).lineTo(-1.3,43.9).curveTo(-1,42.2,0.1,41.1).curveTo(1.1,40.1,2.5,39.7).lineTo(3.6,39.1).lineTo(3.8,38.7).curveTo(5.5,36.4,8.4,36.4).lineTo(8.7,36.4).lineTo(9.1,35.4).curveTo(9.8,34.2,11.1,33.4).curveTo(11.9,32.9,12.8,32.7).lineTo(13,32.5).curveTo(14,31.5,15.4,31.1).lineTo(15.8,31).lineTo(16.4,30.1).curveTo(17.5,28.8,19.1,28.3).lineTo(20.3,28).lineTo(21,27.7).curveTo(22.3,27.3,23.7,27.5).curveTo(24.8,26.5,26.5,26.2).curveTo(27.2,26.1,27.9,26.1).curveTo(29.8,25.3,32,26.1).curveTo(34.2,27,35.2,29.2).curveTo(36.2,31.7,34.8,34.2).curveTo(34.2,35.3,33,36.1).curveTo(31.8,36.8,30.5,36.9).lineTo(29.5,36.9).curveTo(28.1,37.5,26.7,37.3).lineTo(26.5,37.2).curveTo(25.9,37.8,24.9,38.2).curveTo(24.1,38.6,23.2,38.7).curveTo(22.6,38.9,22,39.1).lineTo(21.6,39.6).curveTo(20.9,40.7,19.7,41.4).curveTo(18.9,41.8,18.1,42).curveTo(17.4,42.7,16.5,43.2).curveTo(15.2,43.9,13.7,43.8).lineTo(13.7,43.8).lineTo(13.5,44.2).curveTo(12.9,45.6,11.7,46.5).lineTo(10.6,47.1).curveTo(9.8,48.5,8.3,49.3).lineTo(7.4,49.6).lineTo(7,49.9).curveTo(6.2,50.3,5.3,50.5).curveTo(5,52.6,3.2,54.1).curveTo(1.6,55.4,-0.4,55.3).curveTo(-1,55.8,-1.8,56.2).curveTo(-2.3,57.3,-3.3,58.2).curveTo(-4.6,59.3,-6.2,59.5).curveTo(-7.8,59.6,-9.3,58.9).lineTo(-9.9,58.5).lineTo(-10.7,59).curveTo(-11.8,59.5,-13,59.5).curveTo(-14.3,59.5,-15.5,58.9).closePath();
	var mask_1_graphics_32 = new cjs.Graphics().moveTo(-15.5,66.1).curveTo(-16.3,65.7,-16.9,65.1).curveTo(-17.5,65.1,-18.2,65).lineTo(-18.5,64.9).curveTo(-19.7,65.3,-21,65.2).curveTo(-22.6,65.1,-24,64).curveTo(-25.4,62.9,-25.9,61.3).lineTo(-25.9,61.2).curveTo(-26.7,61.2,-27.6,61).curveTo(-29.3,60.6,-30.5,59).curveTo(-31.4,57.7,-31.5,56.1).lineTo(-31.5,55.4).curveTo(-32.3,54.3,-32.5,53.1).curveTo(-32.6,52.3,-32.5,51.5).curveTo(-34,50.8,-34.9,49.3).curveTo(-35.7,47.8,-35.6,46.2).curveTo(-35.5,44.5,-34.5,43.1).lineTo(-34.1,42.6).curveTo(-34.6,41.4,-34.5,40.1).curveTo(-34.5,38.9,-34,38).lineTo(-33.9,37.1).curveTo(-33.4,35.5,-32.3,34.4).lineTo(-32,34.1).curveTo(-32.3,33.4,-32.4,32.7).curveTo(-32.5,31.2,-31.8,29.8).curveTo(-31.2,28.5,-30.3,27.7).lineTo(-30.1,26.6).curveTo(-29.7,24.9,-28.5,23.8).lineTo(-27.8,23.3).curveTo(-27.9,22,-27.4,20.8).curveTo(-26.8,19.4,-25.5,18.5).curveTo(-25.6,17.7,-25.5,16.9).curveTo(-25.2,15.2,-24.2,14.1).lineTo(-23.3,13.3).lineTo(-23.2,13.2).lineTo(-23.1,12.9).curveTo(-24.6,13,-26,12.4).curveTo(-27.5,11.7,-28.3,10.3).curveTo(-29.2,8.8,-29.1,7.2).lineTo(-29,6.3).lineTo(-29.1,6.2).curveTo(-29.9,5,-30.1,3.5).curveTo(-30.2,2.1,-29.6,0.7).curveTo(-29.3,0,-28.9,-0.5).curveTo(-29.3,-1.8,-29.1,-3.3).curveTo(-28.8,-4.9,-27.9,-6).lineTo(-28.4,-6.5).curveTo(-29.3,-7.6,-29.5,-9).curveTo(-29.8,-10.5,-29.4,-11.8).curveTo(-28.9,-13.2,-27.8,-14.2).curveTo(-27.1,-14.9,-26.3,-15.2).curveTo(-26.7,-17.2,-25.8,-18.9).lineTo(-25.8,-19.1).curveTo(-26,-20.5,-25.5,-21.8).curveTo(-25,-23.1,-23.9,-24.1).curveTo(-22.8,-25,-21.4,-25.3).lineTo(-21.2,-25.3).curveTo(-21.3,-26.2,-21.1,-27.1).curveTo(-20.7,-28.5,-19.8,-29.4).curveTo(-18.9,-30.4,-17.6,-30.9).curveTo(-17.4,-31.7,-17.1,-32.4).curveTo(-16.4,-33.8,-15,-34.6).curveTo(-14.4,-35,-13.7,-35.2).curveTo(-13.3,-36.5,-12.3,-37.4).curveTo(-11.3,-38.3,-10.1,-38.7).curveTo(-9.9,-39.7,-9.3,-40.6).curveTo(-8.4,-42,-6.8,-42.7).curveTo(-5.6,-43.2,-4.1,-43.1).curveTo(-2.7,-43,-1.5,-42.2).lineTo(-1.2,-42).curveTo(-0.4,-42.7,0.7,-43).lineTo(1.8,-43.3).curveTo(2.2,-44,2.9,-44.6).curveTo(4.2,-45.7,5.9,-45.9).lineTo(6.2,-46).curveTo(6.7,-46.5,7.2,-46.9).curveTo(7.9,-47.4,8.7,-47.6).curveTo(9.6,-48.8,10.9,-49.4).curveTo(11.7,-49.7,12.6,-49.8).curveTo(13.1,-50.6,13.9,-51.2).curveTo(15.1,-52.1,16.6,-52.3).lineTo(16.7,-52.7).curveTo(16,-53.5,15.7,-54.4).lineTo(15.5,-55.4).lineTo(14.7,-55.5).lineTo(13.9,-55.7).lineTo(13.5,-55.4).curveTo(12.2,-54.7,10.7,-54.7).lineTo(10.4,-54.7).curveTo(9.8,-53.7,8.7,-53).curveTo(7.5,-52.3,6.1,-52.2).curveTo(4.7,-52.1,3.5,-52.6).curveTo(2.2,-53.2,1.4,-54.3).curveTo(0.5,-55.4,0.2,-56.7).curveTo(-0.1,-58.2,0.5,-59.7).curveTo(1,-61.2,2.2,-62.2).curveTo(3.3,-63,4.6,-63.3).lineTo(6,-63.4).curveTo(6.7,-64.4,7.7,-65).curveTo(9,-65.8,10.5,-65.9).curveTo(11.5,-65.9,12.4,-65.6).lineTo(12.4,-65.6).curveTo(13.8,-66.6,15.5,-66.6).curveTo(17.3,-66.7,18.7,-65.7).curveTo(20.6,-64.5,21.1,-62.3).lineTo(21.2,-61.7).curveTo(22.2,-61.7,23.1,-61.3).curveTo(25.2,-60.5,26.1,-58.5).curveTo(26.7,-57.2,26.6,-55.7).lineTo(26.5,-54.9).lineTo(26.7,-54.5).curveTo(27.5,-53.4,27.6,-52.3).curveTo(27.9,-50.7,27.2,-49.2).curveTo(26.6,-47.7,25.3,-46.8).curveTo(24.2,-46,22.9,-45.8).lineTo(22.5,-44.7).curveTo(21.5,-42,18.8,-41.3).lineTo(17.9,-41.1).lineTo(17,-40.1).curveTo(16,-39.2,14.9,-38.9).curveTo(14.1,-37.9,12.9,-37.3).curveTo(12,-36.8,10.9,-36.7).curveTo(9.9,-35.6,8.5,-35).curveTo(7.8,-34.8,7.2,-34.7).curveTo(6.6,-33.8,5.6,-33.1).curveTo(4.2,-32.2,2.6,-32.1).curveTo(1,-32.1,-0.4,-33).lineTo(-0.9,-33.3).lineTo(-1.4,-32.9).curveTo(-2.1,-32.5,-2.9,-32.2).curveTo(-3.2,-30.7,-4.2,-29.7).curveTo(-5.2,-28.5,-6.7,-28).lineTo(-6.8,-28).lineTo(-7.2,-27.1).curveTo(-7.9,-25.8,-9.2,-25.1).lineTo(-10.1,-24.6).lineTo(-10.3,-24.1).curveTo(-10.6,-23,-11.2,-22.2).curveTo(-12.4,-20.8,-14.2,-20.2).lineTo(-14.7,-20.1).curveTo(-14.6,-18.6,-15.3,-17.3).curveTo(-15,-15.8,-15.6,-14.3).curveTo(-16.2,-12.8,-17.5,-11.8).curveTo(-18,-11.4,-18.6,-11.2).lineTo(-18.6,-11.1).curveTo(-18.3,-9.6,-18.8,-8.2).curveTo(-19.1,-7.3,-19.7,-6.5).curveTo(-18.3,-5.2,-18,-3.4).curveTo(-17.6,-1.5,-18.5,0.2).lineTo(-19,1).lineTo(-18.2,1.4).curveTo(-17.5,1.1,-16.8,1).curveTo(-15.4,0.8,-14.1,1.3).curveTo(-12.8,1.9,-11.8,2.9).curveTo(-10.9,4.1,-10.6,5.4).lineTo(-10.5,6.5).curveTo(-9.7,7.5,-9.5,8.8).curveTo(-9.2,9.7,-9.4,10.5).curveTo(-9.5,11.9,-10.3,13.1).curveTo(-10.7,13.7,-11.3,14.2).curveTo(-11.7,15.1,-12.4,15.8).curveTo(-12.5,17.1,-13.3,18.3).curveTo(-13.9,19.2,-14.7,19.8).lineTo(-15,20.4).curveTo(-15.6,21.5,-16.6,22.2).curveTo(-16.6,22.9,-16.6,23.6).curveTo(-16.8,25.2,-17.8,26.5).curveTo(-18.4,27.2,-19.1,27.7).lineTo(-19.1,28.3).lineTo(-19.3,29.6).curveTo(-19.9,31.3,-21.2,32.3).lineTo(-21.4,33.7).curveTo(-21.7,34.7,-22.1,35.3).curveTo(-22.5,35.9,-23.1,36.3).lineTo(-23.2,36.4).curveTo(-23,37.1,-22.9,37.8).curveTo(-22.8,38.7,-22.9,39.4).lineTo(-23.3,40.6).curveTo(-23.3,41.8,-23.8,42.8).curveTo(-24.2,43.6,-24.9,44.3).lineTo(-24.7,44.8).curveTo(-24.3,45.9,-24.5,47.2).lineTo(-24.4,47.3).curveTo(-22.9,48.1,-22.1,49.5).curveTo(-21.4,50.7,-21.4,52.3).curveTo(-21,52.8,-20.8,53.5).lineTo(-20.6,54).curveTo(-19.7,54,-19,54.2).lineTo(-18.9,54.2).curveTo(-17.6,53.8,-16.2,54).curveTo(-14.8,54.1,-13.8,54.9).lineTo(-13.2,55.4).curveTo(-11.4,55.3,-9.9,56.3).lineTo(-9.4,56).lineTo(-8.8,55.1).curveTo(-8,53.9,-6.5,53.2).curveTo(-5.3,52.7,-4.1,52.7).curveTo(-3.1,51.8,-1.6,51.4).lineTo(-1.4,51.3).lineTo(-1.3,51.1).curveTo(-1,49.4,0.1,48.2).curveTo(1.1,47.2,2.5,46.8).lineTo(3.6,46.2).lineTo(3.8,45.8).curveTo(5.5,43.5,8.4,43.5).lineTo(8.7,43.5).lineTo(9.1,42.6).curveTo(9.8,41.3,11.1,40.6).curveTo(11.9,40,12.8,39.9).lineTo(13,39.7).curveTo(14,38.7,15.4,38.3).lineTo(15.8,38.2).lineTo(16.4,37.3).curveTo(17.5,35.9,19.1,35.4).lineTo(20.3,35.2).lineTo(21,34.9).curveTo(22.3,34.4,23.7,34.7).curveTo(24.8,33.6,26.5,33.4).curveTo(27.2,33.2,27.9,33.3).curveTo(29.8,32.5,32,33.2).curveTo(34.2,34.1,35.2,36.3).curveTo(36.2,38.9,34.8,41.3).curveTo(34.2,42.5,33,43.2).curveTo(31.8,44,30.5,44.1).lineTo(29.5,44.1).curveTo(28.1,44.6,26.7,44.4).lineTo(26.5,44.4).curveTo(25.9,45,24.9,45.4).curveTo(24.1,45.7,23.2,45.8).curveTo(22.6,46.1,22,46.2).lineTo(21.6,46.8).curveTo(20.9,47.9,19.7,48.6).curveTo(18.9,49,18.1,49.2).curveTo(17.4,49.8,16.5,50.3).curveTo(15.2,51,13.7,51).lineTo(13.7,51).lineTo(13.5,51.4).curveTo(12.9,52.7,11.7,53.6).lineTo(10.6,54.3).curveTo(9.8,55.7,8.3,56.4).lineTo(7.4,56.7).lineTo(7,57).curveTo(6.2,57.5,5.3,57.7).curveTo(5,59.8,3.2,61.2).curveTo(1.6,62.5,-0.4,62.4).curveTo(-1,63,-1.8,63.3).curveTo(-2.3,64.5,-3.3,65.4).curveTo(-4.6,66.4,-6.2,66.6).curveTo(-7.8,66.8,-9.3,66).lineTo(-9.9,65.7).lineTo(-10.7,66.1).curveTo(-11.8,66.7,-13,66.7).curveTo(-14.3,66.7,-15.5,66.1).closePath();
	var mask_1_graphics_34 = new cjs.Graphics().moveTo(-15.5,66.1).curveTo(-16.3,65.7,-16.9,65.1).curveTo(-17.5,65.1,-18.2,65).lineTo(-18.5,64.9).curveTo(-19.7,65.3,-21,65.2).curveTo(-22.6,65.1,-24,64).curveTo(-25.4,62.9,-25.9,61.3).lineTo(-25.9,61.2).curveTo(-26.7,61.2,-27.6,61).curveTo(-29.3,60.6,-30.5,59).curveTo(-31.4,57.7,-31.5,56.1).lineTo(-31.5,55.4).curveTo(-32.3,54.3,-32.5,53.1).curveTo(-32.6,52.3,-32.5,51.5).curveTo(-34,50.8,-34.9,49.3).curveTo(-35.7,47.8,-35.6,46.2).curveTo(-35.5,44.5,-34.5,43.1).lineTo(-34.1,42.6).curveTo(-34.6,41.4,-34.5,40.1).curveTo(-34.5,38.9,-34,38).lineTo(-33.9,37.1).curveTo(-33.4,35.5,-32.3,34.4).lineTo(-32,34.1).curveTo(-32.3,33.4,-32.4,32.7).curveTo(-32.5,31.2,-31.8,29.8).curveTo(-31.2,28.5,-30.3,27.7).lineTo(-30.1,26.6).curveTo(-29.7,24.9,-28.5,23.8).lineTo(-27.8,23.3).curveTo(-27.9,22,-27.4,20.8).curveTo(-26.8,19.4,-25.5,18.5).curveTo(-25.6,17.7,-25.5,16.9).curveTo(-25.2,15.2,-24.2,14.1).lineTo(-23.3,13.3).lineTo(-23.2,13.2).lineTo(-23.1,12.9).curveTo(-24.6,13,-26,12.4).curveTo(-27.5,11.7,-28.3,10.3).curveTo(-29.2,8.8,-29.1,7.2).lineTo(-29,6.3).lineTo(-29.1,6.2).curveTo(-29.9,5,-30.1,3.5).curveTo(-30.2,2.1,-29.6,0.7).curveTo(-29.3,0,-28.9,-0.5).curveTo(-29.3,-1.8,-29.1,-3.3).curveTo(-28.8,-4.9,-27.9,-6).lineTo(-28.4,-6.5).curveTo(-29.3,-7.6,-29.5,-9).curveTo(-29.8,-10.5,-29.4,-11.8).curveTo(-28.9,-13.2,-27.8,-14.2).curveTo(-27.1,-14.9,-26.3,-15.2).curveTo(-26.7,-17.2,-25.8,-18.9).lineTo(-25.8,-19.1).curveTo(-26,-20.5,-25.5,-21.8).curveTo(-25,-23.1,-23.9,-24.1).curveTo(-22.8,-25,-21.4,-25.3).lineTo(-21.2,-25.3).curveTo(-21.3,-26.2,-21.1,-27.1).curveTo(-20.7,-28.5,-19.8,-29.4).curveTo(-18.9,-30.4,-17.6,-30.9).curveTo(-17.4,-31.7,-17.1,-32.4).curveTo(-16.4,-33.8,-15,-34.6).curveTo(-14.4,-35,-13.7,-35.2).curveTo(-13.3,-36.5,-12.3,-37.4).curveTo(-11.3,-38.3,-10.1,-38.7).curveTo(-9.9,-39.7,-9.3,-40.6).curveTo(-8.4,-42,-6.8,-42.7).curveTo(-5.6,-43.2,-4.1,-43.1).curveTo(-2.7,-43,-1.5,-42.2).lineTo(-1.2,-42).curveTo(-0.4,-42.7,0.7,-43).lineTo(1.8,-43.3).curveTo(2.2,-44,2.9,-44.6).curveTo(4.2,-45.7,5.9,-45.9).lineTo(6.2,-46).lineTo(6.8,-46.6).lineTo(6,-47.1).lineTo(4.8,-46.6).curveTo(3.4,-46.3,1.9,-46.7).curveTo(0.5,-47,-0.6,-48.2).curveTo(-1.6,-49.3,-2,-50.7).curveTo(-2.4,-52.2,-1.9,-53.6).curveTo(-1.5,-55.1,-0.4,-56.1).lineTo(0.2,-56.7).lineTo(0.2,-56.7).curveTo(-0.1,-58.2,0.5,-59.7).curveTo(1,-61.2,2.2,-62.2).curveTo(3.3,-63,4.6,-63.3).lineTo(6,-63.4).curveTo(6.7,-64.4,7.7,-65).curveTo(9,-65.8,10.5,-65.9).curveTo(11.5,-65.9,12.4,-65.6).lineTo(12.4,-65.6).curveTo(13.8,-66.6,15.5,-66.6).curveTo(17.3,-66.7,18.7,-65.7).curveTo(20.6,-64.5,21.1,-62.3).lineTo(21.2,-61.7).curveTo(22.2,-61.7,23.1,-61.3).curveTo(25.2,-60.5,26.1,-58.5).curveTo(26.7,-57.2,26.6,-55.7).lineTo(26.5,-54.9).lineTo(26.7,-54.5).curveTo(27.5,-53.4,27.6,-52.3).curveTo(27.9,-50.7,27.2,-49.2).curveTo(26.6,-47.7,25.3,-46.8).curveTo(24.2,-46,22.9,-45.8).lineTo(22.5,-44.7).curveTo(21.5,-42,18.8,-41.3).lineTo(17.9,-41.1).lineTo(17,-40.1).curveTo(16,-39.2,14.9,-38.9).curveTo(14.1,-37.9,12.9,-37.3).curveTo(12,-36.8,10.9,-36.7).curveTo(9.9,-35.6,8.5,-35).curveTo(7.8,-34.8,7.2,-34.7).curveTo(6.6,-33.8,5.6,-33.1).curveTo(4.2,-32.2,2.6,-32.1).curveTo(1,-32.1,-0.4,-33).lineTo(-0.9,-33.3).lineTo(-1.4,-32.9).curveTo(-2.1,-32.5,-2.9,-32.2).curveTo(-3.2,-30.7,-4.2,-29.7).curveTo(-5.2,-28.5,-6.7,-28).lineTo(-6.8,-28).lineTo(-7.2,-27.1).curveTo(-7.9,-25.8,-9.2,-25.1).lineTo(-10.1,-24.6).lineTo(-10.3,-24.1).curveTo(-10.6,-23,-11.2,-22.2).curveTo(-12.4,-20.8,-14.2,-20.2).lineTo(-14.7,-20.1).curveTo(-14.6,-18.6,-15.3,-17.3).curveTo(-15,-15.8,-15.6,-14.3).curveTo(-16.2,-12.8,-17.5,-11.8).curveTo(-18,-11.4,-18.6,-11.2).lineTo(-18.6,-11.1).curveTo(-18.3,-9.6,-18.8,-8.2).curveTo(-19.1,-7.3,-19.7,-6.5).curveTo(-18.3,-5.2,-18,-3.4).curveTo(-17.6,-1.5,-18.5,0.2).lineTo(-19,1).lineTo(-18.2,1.4).curveTo(-17.5,1.1,-16.8,1).curveTo(-15.4,0.8,-14.1,1.3).curveTo(-12.8,1.9,-11.8,2.9).curveTo(-10.9,4.1,-10.6,5.4).lineTo(-10.5,6.5).curveTo(-9.7,7.5,-9.5,8.8).curveTo(-9.2,9.7,-9.4,10.5).curveTo(-9.5,11.9,-10.3,13.1).curveTo(-10.7,13.7,-11.3,14.2).curveTo(-11.7,15.1,-12.4,15.8).curveTo(-12.5,17.1,-13.3,18.3).curveTo(-13.9,19.2,-14.7,19.8).lineTo(-15,20.4).curveTo(-15.6,21.5,-16.6,22.2).curveTo(-16.6,22.9,-16.6,23.6).curveTo(-16.8,25.2,-17.8,26.5).curveTo(-18.4,27.2,-19.1,27.7).lineTo(-19.1,28.3).lineTo(-19.3,29.6).curveTo(-19.9,31.3,-21.2,32.3).lineTo(-21.4,33.7).curveTo(-21.7,34.7,-22.1,35.3).curveTo(-22.5,35.9,-23.1,36.3).lineTo(-23.2,36.4).curveTo(-23,37.1,-22.9,37.8).curveTo(-22.8,38.7,-22.9,39.4).lineTo(-23.3,40.6).curveTo(-23.3,41.8,-23.8,42.8).curveTo(-24.2,43.6,-24.9,44.3).lineTo(-24.7,44.8).curveTo(-24.3,45.9,-24.5,47.2).lineTo(-24.4,47.3).curveTo(-22.9,48.1,-22.1,49.5).curveTo(-21.4,50.7,-21.4,52.3).curveTo(-21,52.8,-20.8,53.5).lineTo(-20.6,54).curveTo(-19.7,54,-19,54.2).lineTo(-18.9,54.2).curveTo(-17.6,53.8,-16.2,54).curveTo(-14.8,54.1,-13.8,54.9).lineTo(-13.2,55.4).curveTo(-11.4,55.3,-9.9,56.3).lineTo(-9.4,56).lineTo(-8.8,55.1).curveTo(-8,53.9,-6.5,53.2).curveTo(-5.3,52.7,-4.1,52.7).curveTo(-3.1,51.8,-1.6,51.4).lineTo(-1.4,51.3).lineTo(-1.3,51.1).curveTo(-1,49.4,0.1,48.2).curveTo(1.1,47.2,2.5,46.8).lineTo(3.6,46.2).lineTo(3.8,45.8).curveTo(5.5,43.5,8.4,43.5).lineTo(8.7,43.5).lineTo(9.1,42.6).curveTo(9.8,41.3,11.1,40.6).curveTo(11.9,40,12.8,39.9).lineTo(13,39.7).curveTo(14,38.7,15.4,38.3).lineTo(15.8,38.2).lineTo(16.4,37.3).curveTo(17.5,35.9,19.1,35.4).lineTo(20.3,35.2).lineTo(21,34.9).curveTo(22.3,34.4,23.7,34.7).curveTo(24.8,33.6,26.5,33.4).curveTo(27.2,33.2,27.9,33.3).curveTo(29.8,32.5,32,33.2).curveTo(34.2,34.1,35.2,36.3).curveTo(36.2,38.9,34.8,41.3).curveTo(34.2,42.5,33,43.2).curveTo(31.8,44,30.5,44.1).lineTo(29.5,44.1).curveTo(28.1,44.6,26.7,44.4).lineTo(26.5,44.4).curveTo(25.9,45,24.9,45.4).curveTo(24.1,45.7,23.2,45.8).curveTo(22.6,46.1,22,46.2).lineTo(21.6,46.8).curveTo(20.9,47.9,19.7,48.6).curveTo(18.9,49,18.1,49.2).curveTo(17.4,49.8,16.5,50.3).curveTo(15.2,51,13.7,51).lineTo(13.7,51).lineTo(13.5,51.4).curveTo(12.9,52.7,11.7,53.6).lineTo(10.6,54.3).curveTo(9.8,55.7,8.3,56.4).lineTo(7.4,56.7).lineTo(7,57).curveTo(6.2,57.5,5.3,57.7).curveTo(5,59.8,3.2,61.2).curveTo(1.6,62.5,-0.4,62.4).curveTo(-1,63,-1.8,63.3).curveTo(-2.3,64.5,-3.3,65.4).curveTo(-4.6,66.4,-6.2,66.6).curveTo(-7.8,66.8,-9.3,66).lineTo(-9.9,65.7).lineTo(-10.7,66.1).curveTo(-11.8,66.7,-13,66.7).curveTo(-14.3,66.7,-15.5,66.1).closePath();

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:62.0184,y:48.1528}).wait(2).to({graphics:mask_1_graphics_2,x:58.6638,y:49.0924}).wait(2).to({graphics:mask_1_graphics_4,x:55.2733,y:51.398}).wait(2).to({graphics:mask_1_graphics_6,x:50.3605,y:54.8016}).wait(2).to({graphics:mask_1_graphics_8,x:44.8486,y:59.2338}).wait(2).to({graphics:mask_1_graphics_10,x:38.031,y:59.2463}).wait(2).to({graphics:mask_1_graphics_12,x:34.7983,y:59.2463}).wait(2).to({graphics:mask_1_graphics_14,x:33.2697,y:59.2463}).wait(2).to({graphics:mask_1_graphics_16,x:33.2697,y:53.9921}).wait(2).to({graphics:mask_1_graphics_18,x:33.2697,y:47.6045}).wait(2).to({graphics:mask_1_graphics_20,x:33.2697,y:44.9964}).wait(2).to({graphics:mask_1_graphics_22,x:33.2697,y:43.125}).wait(2).to({graphics:mask_1_graphics_24,x:33.2697,y:38.8156}).wait(2).to({graphics:mask_1_graphics_26,x:33.2697,y:30.1107}).wait(2).to({graphics:mask_1_graphics_28,x:33.2697,y:21.2417}).wait(2).to({graphics:mask_1_graphics_30,x:33.2697,y:16.6422}).wait(2).to({graphics:mask_1_graphics_32,x:33.2697,y:9.4988}).wait(2).to({graphics:mask_1_graphics_34,x:33.2697,y:9.4988}).wait(286));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#333333").beginStroke().moveTo(-17.4,59.9).curveTo(-19.5,59.6,-21.2,59).curveTo(-23.2,58.3,-24.6,57.2).lineTo(-24.7,57.2).curveTo(-26.3,56,-27.5,54.3).curveTo(-28.8,52.6,-29.4,50.8).curveTo(-30.2,48.8,-30.4,46.9).curveTo(-30.9,44.8,-30.8,43).curveTo(-31,40.8,-30.7,39).curveTo(-30.6,37.1,-30,35.2).curveTo(-29.1,31.6,-27.3,28).lineTo(-23.6,21.4).curveTo(-21.5,17.5,-20.3,14.8).curveTo(-19.1,11.9,-18,7.9).lineTo(-18,7.7).lineTo(-17.9,7.5).lineTo(-17.7,7.5).lineTo(-17.5,7.5).lineTo(-17.5,7.6).lineTo(-17.5,7.7).lineTo(-17.5,7.8).lineTo(-17.7,8.9).curveTo(-18.4,12,-19.5,15.2).lineTo(-19.8,16.1).lineTo(-20.9,18.7).lineTo(-21.8,20.7).lineTo(-22.5,22.1).lineTo(-22.5,22.2).lineTo(-24.3,25.4).lineTo(-25.9,28.7).lineTo(-26.2,29.3).lineTo(-26.2,29.4).curveTo(-27.7,32.7,-28.5,35.5).lineTo(-28.4,35.6).curveTo(-28.9,37.6,-29,39.2).curveTo(-29.2,40.7,-29.2,42.9).curveTo(-29.1,44.8,-28.8,46.6).lineTo(-28.8,46.7).lineTo(-28.7,47).curveTo(-28.4,48.6,-27.8,50.1).curveTo(-27.1,52,-26.1,53.2).curveTo(-25.1,54.7,-23.6,55.7).curveTo(-22.2,56.7,-20.6,57.3).curveTo(-19.1,57.9,-17.2,58.1).lineTo(-17.2,58).curveTo(-15.6,58.2,-13.8,58.1).lineTo(-10.4,57.6).curveTo(-8.8,57,-7.2,56.3).curveTo(-5.7,55.4,-4.4,54.4).lineTo(1.2,49.7).lineTo(6.8,45).lineTo(12.6,40.6).curveTo(16.1,37.9,18.8,36.5).curveTo(20.3,35.6,22,34.7).lineTo(22.1,34.7).lineTo(25.5,33.5).lineTo(27.6,32.9).lineTo(30.9,32.7).lineTo(30.8,32.7).lineTo(28.6,33.4).curveTo(19.6,35.4,8.5,46.2).lineTo(8,46.6).lineTo(7.9,46.6).lineTo(2.4,51.2).curveTo(-1.4,54.6,-3.3,56).curveTo(-4.7,57.1,-6.3,58.1).curveTo(-8,59,-9.9,59.5).lineTo(-13.6,60).lineTo(-13.6,60).lineTo(-14.9,60.1).lineTo(-17.4,59.9).closePath().moveTo(-17.7,7.7).lineTo(-17.7,7.8).lineTo(-17.6,7.8).lineTo(-17.6,7.7).lineTo(-17.7,7.7).closePath().moveTo(-22,25.6).lineTo(-22.1,25.5).lineTo(-22,25.3).lineTo(-20.9,22.9).lineTo(-19.3,19.4).lineTo(-19.3,19.3).lineTo(-18.2,16.8).lineTo(-18.2,16.7).lineTo(-16.5,12.3).lineTo(-15.9,10.1).curveTo(-15.6,8.7,-15.5,7.9).curveTo(-15.5,6.6,-15.8,6).lineTo(-15.8,6).lineTo(-16.3,5.6).lineTo(-17.1,5.5).lineTo(-18.2,5.7).lineTo(-18.7,5.8).lineTo(-21.2,6.6).lineTo(-23.5,7.5).curveTo(-25,7.9,-26.1,7.6).curveTo(-27,7.4,-27.6,6.8).curveTo(-28.1,6.2,-28.4,5.4).curveTo(-28.8,4.4,-28.8,2.7).curveTo(-28.7,0.5,-27.9,-2.3).curveTo(-27.3,-4.8,-26.6,-7).curveTo(-25,-11.4,-22.4,-15.7).curveTo(-18.2,-22.9,-10.7,-30.5).curveTo(-4.6,-36.9,3.1,-43.1).lineTo(10.3,-48.6).lineTo(10.4,-48.7).lineTo(14.1,-51.5).curveTo(16,-53.1,17.4,-54.6).curveTo(18.2,-55.5,18.6,-56.2).lineTo(18.7,-56.2).lineTo(19,-57).curveTo(19,-57.5,18.9,-57.7).lineTo(18.9,-57.7).lineTo(18.9,-57.9).lineTo(18.9,-57.9).lineTo(18.6,-58.1).curveTo(18.5,-58.2,17.9,-58.2).curveTo(16.9,-58.3,15.8,-58.1).curveTo(13.9,-57.6,11.7,-56.6).curveTo(10.5,-56.1,9.7,-55.6).lineTo(7.9,-54.4).curveTo(5.9,-52.9,4.9,-51.3).curveTo(4.2,-50.3,4.1,-49.4).lineTo(4.1,-49.1).lineTo(4.3,-49.1).lineTo(4.7,-49.1).lineTo(4.7,-49.1).curveTo(5.5,-49.3,6.7,-49.8).lineTo(8.6,-51).lineTo(12.2,-53.7).lineTo(12.2,-53.7).curveTo(12.3,-53.7,12.3,-53.8).curveTo(12.3,-53.8,12.4,-53.8).curveTo(12.4,-53.8,12.4,-53.8).curveTo(12.5,-53.8,12.5,-53.8).curveTo(12.6,-53.8,12.6,-53.8).curveTo(12.6,-53.8,12.6,-53.7).curveTo(12.6,-53.7,12.7,-53.7).curveTo(12.7,-53.6,12.7,-53.6).lineTo(12.7,-53.4).lineTo(12.6,-53.4).lineTo(11.6,-52.4).curveTo(10.5,-51.2,9.3,-50.2).lineTo(9.2,-50).curveTo(8.2,-49.2,7.3,-48.7).curveTo(6,-48,5,-47.7).lineTo(4.4,-47.7).lineTo(4.3,-47.6).curveTo(3.8,-47.6,3.4,-47.8).lineTo(3.4,-47.8).lineTo(3,-48.2).lineTo(2.9,-48.2).lineTo(2.7,-48.7).curveTo(2.6,-49.1,2.7,-49.6).lineTo(2.6,-49.6).curveTo(2.7,-50.2,3,-51).lineTo(3,-51).lineTo(3.5,-52.1).lineTo(3.6,-52.1).curveTo(4.8,-54.3,6.9,-55.8).curveTo(7.7,-56.5,8.9,-57.1).curveTo(10,-57.9,11,-58.2).lineTo(13.4,-59.2).curveTo(14.5,-59.6,15.4,-59.8).curveTo(16.9,-60.2,18,-60.1).lineTo(19.4,-59.8).curveTo(19.8,-59.6,20.1,-59.2).lineTo(20.2,-59.2).lineTo(20.2,-59.2).lineTo(20.4,-58.9).lineTo(20.4,-58.8).lineTo(20.5,-58.8).lineTo(20.6,-58.4).lineTo(20.8,-57.5).lineTo(20.7,-56.7).lineTo(20.2,-55.3).lineTo(20.2,-55.2).curveTo(19.6,-54.2,18.7,-53.3).lineTo(18.6,-53.2).curveTo(17.4,-51.8,15.1,-50).lineTo(15.2,-50).lineTo(11.5,-47.1).curveTo(8.4,-45,4.1,-41.6).lineTo(4,-41.6).curveTo(-2.8,-36.1,-8,-30.9).lineTo(-8.1,-30.8).lineTo(-9.5,-29.3).curveTo(-12.2,-26.5,-14.5,-23.7).lineTo(-14.6,-23.7).lineTo(-14.6,-23.6).curveTo(-17.5,-20,-19.8,-16.5).lineTo(-20.9,-14.7).lineTo(-22.4,-12.1).curveTo(-23.4,-10.2,-24.2,-8.3).lineTo(-24.9,-6.3).lineTo(-24.9,-6.3).curveTo(-25.8,-3.9,-26.2,-2).lineTo(-26.2,-1.9).curveTo(-26.9,1,-26.9,2.7).curveTo(-27,4,-26.7,4.8).curveTo(-26.4,5.6,-25.7,5.8).curveTo(-25.1,5.9,-23.9,5.7).lineTo(-21.9,5).lineTo(-21.8,5).lineTo(-19.6,4.2).lineTo(-18.3,3.8).lineTo(-18.3,3.8).lineTo(-17.1,3.7).curveTo(-16.4,3.7,-15.7,4).lineTo(-15,4.4).lineTo(-14.4,5.1).curveTo(-14.1,5.7,-13.9,6.6).curveTo(-13.8,7.2,-13.9,8).curveTo(-14,9,-14.3,10.4).lineTo(-14.3,10.5).lineTo(-15.1,12.9).lineTo(-16.9,17.3).curveTo(-19,21.4,-21.6,25.6).lineTo(-21.8,25.7).lineTo(-22,25.6).closePath().moveTo(12.4,-53.6).lineTo(12.5,-53.7).lineTo(12.4,-53.6).lineTo(12.4,-53.6).lineTo(12.4,-53.6).closePath().moveTo(-23.3,0.8).curveTo(-24,-1.2,-23.3,-3.9).lineTo(-21.8,-8.4).lineTo(-22.1,-6).curveTo(-22.6,-3.2,-22.6,-1.8).curveTo(-22.6,-0.4,-22.2,0.4).curveTo(-21.8,1.5,-20.6,1.9).curveTo(-20,2.1,-18.8,2.2).lineTo(-17.8,2.3).lineTo(-18.7,2.6).curveTo(-19.6,2.8,-20.4,2.8).curveTo(-22.5,2.8,-23.3,0.8).closePath();
	this.shape_1.setTransform(33.3594,10.1556);

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(320));

	// Layer_6 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_5 = new cjs.Graphics().moveTo(-11.3,14.7).curveTo(-14.2,13.3,-15.8,10.8).curveTo(-17.4,8.3,-17.5,5.3).curveTo(-17.7,2.3,-16.4,-0.4).curveTo(-15.6,-1.8,-14.5,-3).curveTo(-14.7,-4,-14.6,-5).curveTo(-14.6,-7.3,-13.6,-9.3).curveTo(-12.5,-11.8,-10.2,-13.6).curveTo(-8,-15.3,-5.2,-15.8).curveTo(-2.5,-16.2,0.3,-15.3).curveTo(3,-14.3,4.9,-12.3).curveTo(5.7,-11.4,6.2,-10.4).curveTo(8.2,-10.5,10,-9.8).curveTo(12.8,-8.8,14.8,-6.6).curveTo(16.8,-4.2,17.3,-1.4).curveTo(17.9,1.2,17.1,3.8).curveTo(16.4,6.5,14.6,8.4).curveTo(12.3,10.8,8.9,11.6).curveTo(5.7,12.4,2.7,11.4).curveTo(1.6,12.8,-0,13.9).curveTo(-2.5,15.7,-5.4,15.9).lineTo(-6.4,15.9).curveTo(-8.9,15.9,-11.3,14.7).closePath();
	var mask_2_graphics_7 = new cjs.Graphics().moveTo(-16.2,22.6).curveTo(-19.8,21.7,-22.2,18.8).curveTo(-22.9,18,-23.5,16.9).curveTo(-24.8,14.4,-24.7,11.5).curveTo(-24.7,8.6,-23.3,6.1).curveTo(-22.3,4.4,-20.8,3.2).curveTo(-20.8,2.2,-20.6,1.3).curveTo(-20.4,0.2,-19.9,-0.8).lineTo(-20,-2.1).curveTo(-20.1,-5.4,-18.4,-8.1).curveTo(-16.8,-10.9,-13.8,-12.3).curveTo(-10.8,-13.8,-7.6,-13.5).lineTo(-7.3,-13.4).curveTo(-7.1,-14.9,-6.4,-16.3).curveTo(-5.3,-18.8,-3,-20.6).curveTo(-0.8,-22.3,2,-22.8).curveTo(4.7,-23.2,7.5,-22.3).curveTo(10.2,-21.3,12.1,-19.3).curveTo(12.8,-18.4,13.4,-17.4).curveTo(15.3,-17.5,17.2,-16.8).curveTo(20,-15.8,22,-13.6).curveTo(24,-11.2,24.5,-8.4).curveTo(25.1,-5.8,24.3,-3.2).curveTo(23.6,-0.5,21.8,1.4).curveTo(19.5,3.8,16.1,4.6).curveTo(12.9,5.4,9.9,4.4).curveTo(8.8,5.8,7.2,6.9).curveTo(4.7,8.7,1.8,8.9).lineTo(0.2,8.9).lineTo(0.1,9.2).curveTo(-0.9,10.9,-2.4,12.1).curveTo(-2.4,14.1,-3.1,15.9).curveTo(-4.2,18.5,-6.5,20.4).curveTo(-8.7,22.2,-11.5,22.7).curveTo(-12.5,22.9,-13.6,22.9).curveTo(-14.9,22.9,-16.2,22.6).closePath();
	var mask_2_graphics_9 = new cjs.Graphics().moveTo(-24.2,21.5).curveTo(-27.1,19.8,-28.5,17).curveTo(-30,14.2,-29.7,10.9).curveTo(-29.4,7.6,-27.5,5.1).curveTo(-26.6,3.9,-25.4,3).curveTo(-25.1,1.6,-24.5,0.4).curveTo(-23.2,-2.4,-20.4,-4.1).curveTo(-17.8,-5.7,-14.6,-5.7).curveTo(-14.2,-7.1,-13.4,-8.3).curveTo(-11.8,-11,-8.8,-12.5).curveTo(-5.8,-14,-2.6,-13.6).lineTo(-2.3,-13.6).curveTo(-2.1,-15.1,-1.4,-16.4).curveTo(-0.3,-19,2,-20.7).curveTo(4.2,-22.5,7,-22.9).curveTo(9.7,-23.4,12.5,-22.4).curveTo(15.2,-21.5,17.1,-19.4).curveTo(17.8,-18.6,18.4,-17.6).curveTo(20.3,-17.6,22.2,-17).curveTo(25,-16,27,-13.7).curveTo(29,-11.4,29.5,-8.5).curveTo(30.1,-5.9,29.3,-3.3).curveTo(28.6,-0.7,26.8,1.3).curveTo(24.5,3.7,21.1,4.5).curveTo(17.9,5.2,14.9,4.2).curveTo(13.8,5.7,12.2,6.8).curveTo(9.7,8.5,6.8,8.7).lineTo(5.2,8.7).lineTo(5.1,9.1).curveTo(4.1,10.7,2.6,12).curveTo(2.6,13.9,1.9,15.8).curveTo(0.8,18.4,-1.5,20.2).curveTo(-3.7,22.1,-6.5,22.6).curveTo(-8.8,23,-11.2,22.5).curveTo(-12.3,22.2,-13.2,21.7).curveTo(-15.5,23,-18.2,23.1).lineTo(-18.6,23.1).curveTo(-21.5,23.1,-24.2,21.5).closePath();
	var mask_2_graphics_11 = new cjs.Graphics().moveTo(-32.1,24).curveTo(-34.5,23.8,-36.7,22.4).curveTo(-39.9,20.5,-41.3,17).curveTo(-42.3,14.5,-42.1,11.8).curveTo(-41.9,9.1,-40.5,6.8).curveTo(-39.2,4.5,-36.9,3).curveTo(-34.5,1.6,-31.9,1.3).curveTo(-29.3,1.1,-26.7,2.1).lineTo(-25.9,2.5).curveTo(-23.6,0.9,-20.8,0.5).curveTo(-19.6,0.3,-18.5,0.4).curveTo(-18.6,-1.6,-17.9,-3.7).curveTo(-17.1,-6.1,-15.4,-7.9).curveTo(-13.2,-10.2,-10,-10.9).curveTo(-6.7,-11.7,-3.7,-10.7).curveTo(-2.3,-10.2,-1,-9.4).curveTo(0.6,-12,3.6,-13.5).curveTo(6.6,-15,9.7,-14.6).lineTo(10.1,-14.6).curveTo(10.3,-16.1,10.9,-17.4).curveTo(12,-20,14.3,-21.7).curveTo(16.6,-23.5,19.3,-23.9).curveTo(22.1,-24.4,24.8,-23.4).curveTo(27.6,-22.5,29.4,-20.4).curveTo(30.2,-19.5,30.8,-18.5).curveTo(32.7,-18.6,34.6,-18).curveTo(37.3,-17,39.3,-14.7).curveTo(41.3,-12.4,41.9,-9.5).curveTo(42.4,-6.9,41.7,-4.3).curveTo(40.9,-1.7,39.1,0.3).curveTo(36.9,2.7,33.5,3.5).curveTo(30.2,4.3,27.3,3.2).curveTo(26.2,4.7,24.5,5.8).curveTo(22,7.5,19.1,7.7).lineTo(17.6,7.8).lineTo(17.4,8.1).curveTo(16.5,9.8,15,11).curveTo(15,13,14.2,14.8).curveTo(13.2,17.4,10.9,19.2).curveTo(8.6,21.1,5.9,21.6).curveTo(3.5,22,1.2,21.5).curveTo(0.1,21.2,-0.8,20.8).curveTo(-3.2,22.1,-5.9,22.1).curveTo(-9,22.2,-11.8,20.5).lineTo(-12.2,20.3).curveTo(-13.8,21.5,-15.7,22.2).curveTo(-18.8,23.2,-21.9,22.5).curveTo(-23,22.3,-24.1,21.8).curveTo(-27.1,24.1,-30.8,24.1).lineTo(-32.1,24).closePath();
	var mask_2_graphics_13 = new cjs.Graphics().moveTo(-30.7,24).curveTo(-33.1,23.8,-35.3,22.4).curveTo(-38.5,20.5,-39.9,17).curveTo(-40.9,14.5,-40.7,11.8).curveTo(-40.6,10.2,-40,8.7).curveTo(-42.1,6.7,-43,3.7).curveTo(-44,0.4,-43,-2.8).curveTo(-42,-6,-39.3,-8.1).curveTo(-36.6,-10.3,-33.3,-10.6).curveTo(-30.1,-10.9,-27,-9.3).curveTo(-26,-8.7,-25.1,-8).curveTo(-23.6,-9.8,-21.6,-10.9).curveTo(-19.4,-12.1,-16.9,-12.2).curveTo(-14.5,-12.3,-12.2,-11.3).curveTo(-11.2,-10.9,-10.3,-10.4).lineTo(-8.6,-10.9).curveTo(-5.3,-11.7,-2.3,-10.7).curveTo(-0.9,-10.2,0.4,-9.4).curveTo(2,-12,5,-13.5).curveTo(8,-15,11.1,-14.6).lineTo(11.4,-14.6).curveTo(11.7,-16.1,12.3,-17.4).curveTo(13.4,-20,15.7,-21.7).curveTo(18,-23.5,20.7,-23.9).curveTo(23.5,-24.4,26.2,-23.4).curveTo(29,-22.5,30.8,-20.4).curveTo(31.6,-19.5,32.2,-18.5).curveTo(34.1,-18.6,36,-18).curveTo(38.7,-17,40.7,-14.7).curveTo(42.7,-12.4,43.3,-9.5).curveTo(43.8,-6.9,43.1,-4.3).curveTo(42.3,-1.7,40.5,0.3).curveTo(38.3,2.7,34.9,3.5).curveTo(31.6,4.3,28.6,3.2).curveTo(27.5,4.7,25.9,5.8).curveTo(23.4,7.5,20.5,7.7).lineTo(19,7.8).lineTo(18.8,8.1).curveTo(17.9,9.8,16.4,11).curveTo(16.4,13,15.6,14.8).curveTo(14.6,17.4,12.3,19.2).curveTo(10,21.1,7.3,21.6).curveTo(4.9,22,2.6,21.5).curveTo(1.5,21.2,0.5,20.8).curveTo(-1.8,22.1,-4.5,22.1).curveTo(-7.6,22.2,-10.4,20.5).lineTo(-10.9,20.3).curveTo(-12.4,21.5,-14.3,22.2).curveTo(-17.4,23.2,-20.5,22.5).curveTo(-21.7,22.3,-22.7,21.8).curveTo(-25.7,24.1,-29.4,24.1).lineTo(-30.7,24).closePath();
	var mask_2_graphics_15 = new cjs.Graphics().moveTo(-29.4,24.9).curveTo(-31.9,24.7,-34.1,23.4).curveTo(-37.3,21.4,-38.7,17.9).curveTo(-39.6,15.5,-39.4,12.7).curveTo(-39.3,11.1,-38.8,9.7).curveTo(-40.9,7.6,-41.8,4.7).curveTo(-42.7,1.3,-41.8,-1.9).lineTo(-41.3,-3.1).curveTo(-41.5,-4.4,-41.4,-5.8).curveTo(-43.2,-7.6,-44.2,-10.3).curveTo(-45.2,-13.4,-44.5,-16.5).curveTo(-43.6,-19.9,-41,-22.3).curveTo(-38.6,-24.4,-35.3,-24.9).curveTo(-31.9,-25.4,-29,-24.1).curveTo(-26.1,-22.8,-24.2,-20).lineTo(-23.9,-19.5).curveTo(-22.2,-19.6,-20.6,-19.1).curveTo(-17.6,-18.1,-15.5,-15.7).curveTo(-13.5,-13.6,-12.9,-11).curveTo(-11.9,-10.8,-10.9,-10.4).curveTo(-9.9,-10,-9.1,-9.4).lineTo(-7.3,-10).curveTo(-4.1,-10.8,-1.1,-9.8).curveTo(0.4,-9.3,1.6,-8.4).curveTo(3.3,-11.1,6.2,-12.5).curveTo(9.2,-14,12.4,-13.7).lineTo(12.7,-13.6).curveTo(12.9,-15.1,13.6,-16.5).curveTo(14.7,-19,17,-20.8).curveTo(19.2,-22.5,22,-23).curveTo(24.7,-23.4,27.5,-22.5).curveTo(30.2,-21.5,32.1,-19.5).curveTo(32.9,-18.6,33.4,-17.6).curveTo(35.4,-17.6,37.2,-17).curveTo(40,-16,42,-13.8).curveTo(44,-11.4,44.5,-8.6).curveTo(45.1,-6,44.3,-3.4).curveTo(43.6,-0.7,41.8,1.2).curveTo(39.5,3.6,36.1,4.4).curveTo(32.9,5.2,29.9,4.2).curveTo(28.8,5.7,27.2,6.7).curveTo(24.7,8.5,21.8,8.7).lineTo(20.3,8.7).lineTo(20.1,9).curveTo(19.1,10.7,17.7,11.9).curveTo(17.6,13.9,16.9,15.7).curveTo(15.8,18.3,13.5,20.2).curveTo(11.3,22,8.5,22.5).curveTo(6.2,23,3.8,22.4).curveTo(2.8,22.2,1.8,21.7).curveTo(-0.5,23,-3.2,23).curveTo(-6.3,23.1,-9.2,21.5).lineTo(-9.6,21.2).curveTo(-11.1,22.4,-13.1,23.1).curveTo(-16.2,24.2,-19.2,23.5).curveTo(-20.4,23.2,-21.4,22.7).curveTo(-24.5,25,-28.2,25).lineTo(-29.4,24.9).closePath();
	var mask_2_graphics_17 = new cjs.Graphics().moveTo(-29.4,29.2).curveTo(-31.9,29,-34.1,27.6).curveTo(-37.3,25.7,-38.7,22.2).curveTo(-39.6,19.7,-39.4,17).curveTo(-39.3,15.4,-38.8,13.9).curveTo(-40.9,11.9,-41.8,8.9).curveTo(-42.7,5.6,-41.8,2.4).lineTo(-41.3,1.1).curveTo(-41.5,-0.2,-41.4,-1.6).curveTo(-43.2,-3.4,-44.2,-6).curveTo(-45.2,-9.2,-44.5,-12.3).curveTo(-43.6,-15.7,-41,-18).curveTo(-38.9,-19.9,-36.1,-20.5).curveTo(-35.7,-22,-34.8,-23.7).curveTo(-34,-25,-32.9,-26.2).curveTo(-30.6,-28.4,-27.2,-29).curveTo(-23.9,-29.6,-20.9,-28.4).curveTo(-18.6,-27.5,-16.9,-25.7).lineTo(-15.6,-24.8).curveTo(-13.2,-23,-12,-20.4).lineTo(-11.7,-19.5).lineTo(-10.7,-18.5).curveTo(-8.9,-16.5,-8.2,-13.7).curveTo(-7.5,-10.9,-8.2,-8.2).curveTo(-8.6,-6.7,-9.4,-5.4).lineTo(-9.1,-5.2).lineTo(-7.3,-5.7).curveTo(-4.1,-6.5,-1.1,-5.5).curveTo(0.4,-5,1.6,-4.2).curveTo(3.3,-6.9,6.2,-8.3).curveTo(9.2,-9.8,12.4,-9.4).lineTo(12.7,-9.4).curveTo(12.9,-10.9,13.6,-12.2).curveTo(14.7,-14.8,17,-16.5).curveTo(19.2,-18.3,22,-18.7).curveTo(24.7,-19.2,27.5,-18.2).curveTo(30.2,-17.3,32.1,-15.2).curveTo(32.9,-14.4,33.4,-13.4).curveTo(35.4,-13.4,37.2,-12.8).curveTo(40,-11.8,42,-9.5).curveTo(44,-7.2,44.5,-4.3).curveTo(45.1,-1.7,44.3,0.9).curveTo(43.6,3.5,41.8,5.5).curveTo(39.5,7.9,36.1,8.7).curveTo(32.9,9.4,29.9,8.4).curveTo(28.8,9.9,27.2,11).curveTo(24.7,12.7,21.8,12.9).lineTo(20.3,12.9).lineTo(20.1,13.3).curveTo(19.1,14.9,17.7,16.2).curveTo(17.6,18.1,16.9,20).curveTo(15.8,22.6,13.5,24.4).curveTo(11.3,26.3,8.5,26.8).curveTo(6.2,27.2,3.8,26.7).curveTo(2.8,26.4,1.8,25.9).curveTo(-0.5,27.2,-3.2,27.3).curveTo(-6.3,27.4,-9.2,25.7).lineTo(-9.6,25.4).curveTo(-11.1,26.7,-13.1,27.4).curveTo(-16.2,28.4,-19.2,27.7).curveTo(-20.4,27.4,-21.4,26.9).curveTo(-24.5,29.2,-28.2,29.2).lineTo(-29.4,29.2).closePath();
	var mask_2_graphics_19 = new cjs.Graphics().moveTo(-29.4,36.1).curveTo(-31.9,35.9,-34.1,34.5).curveTo(-37.3,32.6,-38.7,29.1).curveTo(-39.6,26.6,-39.4,23.9).curveTo(-39.3,22.3,-38.8,20.8).curveTo(-40.9,18.8,-41.8,15.8).curveTo(-42.7,12.5,-41.8,9.3).lineTo(-41.3,8).curveTo(-41.5,6.7,-41.4,5.3).curveTo(-43.2,3.5,-44.2,0.9).curveTo(-45.2,-2.3,-44.5,-5.4).curveTo(-43.6,-8.8,-41,-11.1).curveTo(-38.9,-13,-36.1,-13.6).curveTo(-35.7,-15.1,-34.8,-16.8).curveTo(-34,-18.1,-32.9,-19.3).curveTo(-31.4,-20.7,-29.5,-21.5).lineTo(-29.3,-22.1).curveTo(-28,-25.3,-25.4,-27.2).curveTo(-24.2,-28,-22.9,-28.5).lineTo(-22.6,-29.3).curveTo(-21.6,-31.8,-19.4,-33.5).curveTo(-17.3,-35.3,-14.7,-35.9).curveTo(-12.1,-36.4,-9.4,-35.7).curveTo(-6.7,-35,-4.7,-33.2).curveTo(-3,-31.6,-2.1,-29.4).curveTo(-1.1,-27.3,-1.1,-25).lineTo(-1.2,-23.4).curveTo(-0.5,-22.2,-0.1,-20.9).curveTo(0.8,-17.7,-0.3,-14.4).curveTo(-1.3,-11.1,-3.8,-9).curveTo(-5.6,-7.4,-8.1,-6.5).curveTo(-7.5,-3.8,-8.2,-1.3).curveTo(-8.6,0.2,-9.4,1.5).lineTo(-9.1,1.7).lineTo(-7.3,1.2).curveTo(-4.1,0.4,-1.1,1.4).curveTo(0.4,1.9,1.6,2.7).curveTo(3.3,0,6.2,-1.4).curveTo(9.2,-2.9,12.4,-2.5).lineTo(12.7,-2.5).curveTo(12.9,-4,13.6,-5.3).curveTo(14.7,-7.9,17,-9.6).curveTo(19.2,-11.4,22,-11.8).curveTo(24.7,-12.3,27.5,-11.3).curveTo(30.2,-10.4,32.1,-8.3).curveTo(32.9,-7.5,33.4,-6.5).curveTo(35.4,-6.5,37.2,-5.9).curveTo(40,-4.9,42,-2.6).curveTo(44,-0.3,44.5,2.6).curveTo(45.1,5.2,44.3,7.8).curveTo(43.6,10.4,41.8,12.4).curveTo(39.5,14.8,36.1,15.6).curveTo(32.9,16.3,29.9,15.3).curveTo(28.8,16.8,27.2,17.9).curveTo(24.7,19.6,21.8,19.8).lineTo(20.3,19.8).lineTo(20.1,20.2).curveTo(19.1,21.8,17.7,23.1).curveTo(17.6,25,16.9,26.9).curveTo(15.8,29.5,13.5,31.3).curveTo(11.3,33.2,8.5,33.7).curveTo(6.2,34.1,3.8,33.6).curveTo(2.8,33.3,1.8,32.8).curveTo(-0.5,34.1,-3.2,34.2).curveTo(-6.3,34.3,-9.2,32.6).lineTo(-9.6,32.3).curveTo(-11.1,33.6,-13.1,34.3).curveTo(-16.2,35.3,-19.2,34.6).curveTo(-20.4,34.3,-21.4,33.8).curveTo(-24.5,36.1,-28.2,36.1).lineTo(-29.4,36.1).closePath();
	var mask_2_graphics_21 = new cjs.Graphics().moveTo(-29.4,37.9).curveTo(-31.9,37.7,-34.1,36.4).curveTo(-37.3,34.4,-38.7,30.9).curveTo(-39.6,28.5,-39.4,25.7).curveTo(-39.3,24.1,-38.8,22.6).curveTo(-40.9,20.6,-41.8,17.7).curveTo(-42.7,14.3,-41.8,11.1).lineTo(-41.3,9.9).curveTo(-41.5,8.5,-41.4,7.2).curveTo(-43.2,5.4,-44.2,2.7).curveTo(-45.2,-0.4,-44.5,-3.5).curveTo(-43.6,-6.9,-41,-9.3).curveTo(-38.9,-11.1,-36.1,-11.7).curveTo(-35.7,-13.3,-34.8,-15).curveTo(-34,-16.3,-32.9,-17.4).curveTo(-31.4,-18.8,-29.5,-19.6).lineTo(-29.3,-20.3).lineTo(-28.4,-22).curveTo(-29,-23.6,-29.1,-25.4).curveTo(-29.2,-26.7,-29,-28.2).curveTo(-28.7,-29.7,-27.9,-31.4).curveTo(-26.5,-33.9,-24,-35.5).curveTo(-21.5,-37.1,-18.7,-37.3).curveTo(-16.2,-37.4,-13.9,-36.5).curveTo(-12.3,-37.4,-10.6,-37.8).curveTo(-7.5,-38.4,-4.5,-37.2).curveTo(-1.5,-36.1,0.4,-33.7).curveTo(2.3,-31.2,2.7,-28).curveTo(3,-24.8,1.7,-22).curveTo(1,-20.5,-0.2,-19.2).lineTo(-0.1,-19).curveTo(0.8,-15.9,-0.3,-12.5).curveTo(-1.3,-9.3,-3.8,-7.1).curveTo(-5.6,-5.5,-8.1,-4.6).curveTo(-7.5,-2,-8.2,0.5).curveTo(-8.6,2,-9.4,3.4).lineTo(-9.1,3.6).lineTo(-7.3,3).curveTo(-4.1,2.2,-1.1,3.2).curveTo(0.4,3.7,1.6,4.6).curveTo(3.3,1.9,6.2,0.5).curveTo(9.2,-1,12.4,-0.7).lineTo(12.7,-0.6).curveTo(12.9,-2.1,13.6,-3.5).curveTo(14.7,-6,17,-7.8).curveTo(19.2,-9.5,22,-10).curveTo(24.7,-10.4,27.5,-9.5).curveTo(30.2,-8.5,32.1,-6.5).curveTo(32.9,-5.6,33.4,-4.6).curveTo(35.4,-4.7,37.2,-4).curveTo(40,-3,42,-0.8).curveTo(44,1.6,44.5,4.4).curveTo(45.1,7,44.3,9.6).curveTo(43.6,12.3,41.8,14.2).curveTo(39.5,16.6,36.1,17.4).curveTo(32.9,18.2,29.9,17.2).curveTo(28.8,18.6,27.2,19.7).curveTo(24.7,21.5,21.8,21.7).lineTo(20.3,21.7).lineTo(20.1,22).curveTo(19.1,23.7,17.7,24.9).curveTo(17.6,26.9,16.9,28.7).curveTo(15.8,31.3,13.5,33.2).curveTo(11.3,35,8.5,35.5).curveTo(6.2,36,3.8,35.4).curveTo(2.8,35.1,1.8,34.7).curveTo(-0.5,36,-3.2,36).curveTo(-6.3,36.1,-9.2,34.5).lineTo(-9.6,34.2).curveTo(-11.1,35.4,-13.1,36.1).curveTo(-16.2,37.2,-19.2,36.5).curveTo(-20.4,36.2,-21.4,35.7).curveTo(-24.5,38,-28.2,38).lineTo(-29.4,37.9).closePath();
	var mask_2_graphics_23 = new cjs.Graphics().moveTo(-29.4,43.6).curveTo(-31.9,43.4,-34.1,42).curveTo(-37.3,40.1,-38.7,36.6).curveTo(-39.6,34.1,-39.4,31.4).curveTo(-39.3,29.8,-38.8,28.3).curveTo(-40.9,26.3,-41.8,23.3).curveTo(-42.7,20,-41.8,16.8).lineTo(-41.3,15.5).curveTo(-41.5,14.2,-41.4,12.8).curveTo(-43.2,11,-44.2,8.4).curveTo(-45.2,5.2,-44.5,2.1).curveTo(-43.6,-1.3,-41,-3.6).curveTo(-38.9,-5.5,-36.1,-6.1).curveTo(-35.7,-7.6,-34.8,-9.3).curveTo(-34,-10.6,-32.9,-11.8).curveTo(-31.4,-13.2,-29.5,-14).lineTo(-29.3,-14.6).lineTo(-28.4,-16.3).curveTo(-29,-17.9,-29.1,-19.8).lineTo(-29.1,-20).curveTo(-31.1,-22.1,-31.9,-24.7).curveTo(-32.7,-27.8,-31.7,-30.9).curveTo(-30.8,-34.1,-28.4,-36.2).curveTo(-27.6,-36.9,-26.7,-37.4).curveTo(-25.7,-39.4,-24.1,-40.9).curveTo(-21.8,-42.9,-18.6,-43.4).curveTo(-15.4,-44,-12.5,-42.8).curveTo(-9.6,-41.7,-7.7,-39.1).curveTo(-5.8,-36.5,-5.5,-33.4).lineTo(-5.4,-31.9).lineTo(-4.5,-31.6).lineTo(-3.5,-31.2).curveTo(-2.2,-31.9,-0.6,-32.3).curveTo(2.8,-33.1,6,-32).curveTo(9.2,-30.8,11.2,-27.9).curveTo(13.3,-25,13.3,-21.6).curveTo(13.4,-18.2,11.4,-15.2).curveTo(9.3,-12.3,6.2,-11).curveTo(3.4,-9.9,0.3,-10.4).curveTo(0.3,-8.7,-0.3,-6.9).curveTo(-1.3,-3.6,-3.8,-1.5).curveTo(-5.6,0.1,-8.1,1).curveTo(-7.5,3.6,-8.2,6.2).curveTo(-8.6,7.7,-9.4,9).lineTo(-9.1,9.2).lineTo(-7.3,8.7).curveTo(-4.1,7.9,-1.1,8.9).curveTo(0.4,9.4,1.6,10.2).curveTo(3.3,7.5,6.2,6.1).curveTo(9.2,4.6,12.4,5).lineTo(12.7,5).curveTo(12.9,3.5,13.6,2.2).curveTo(14.7,-0.4,17,-2.1).curveTo(19.2,-3.9,22,-4.3).curveTo(24.7,-4.8,27.5,-3.8).curveTo(30.2,-2.9,32.1,-0.8).curveTo(32.9,0,33.4,1).curveTo(35.4,1,37.2,1.6).curveTo(40,2.6,42,4.9).curveTo(44,7.2,44.5,10.1).curveTo(45.1,12.7,44.3,15.3).curveTo(43.6,17.9,41.8,19.9).curveTo(39.5,22.3,36.1,23.1).curveTo(32.9,23.8,29.9,22.8).curveTo(28.8,24.3,27.2,25.4).curveTo(24.7,27.1,21.8,27.3).lineTo(20.3,27.3).lineTo(20.1,27.7).curveTo(19.1,29.3,17.7,30.6).curveTo(17.6,32.5,16.9,34.4).curveTo(15.8,37,13.5,38.8).curveTo(11.3,40.7,8.5,41.2).curveTo(6.2,41.6,3.8,41.1).curveTo(2.8,40.8,1.8,40.3).curveTo(-0.5,41.6,-3.2,41.7).curveTo(-6.3,41.8,-9.2,40.1).lineTo(-9.6,39.8).curveTo(-11.1,41.1,-13.1,41.8).curveTo(-16.2,42.8,-19.2,42.1).curveTo(-20.4,41.8,-21.4,41.3).curveTo(-24.5,43.6,-28.2,43.6).lineTo(-29.4,43.6).closePath();
	var mask_2_graphics_25 = new cjs.Graphics().moveTo(-29.4,55.6).curveTo(-31.9,55.4,-34.1,54.1).curveTo(-37.3,52.1,-38.7,48.6).curveTo(-39.6,46.2,-39.4,43.4).curveTo(-39.3,41.8,-38.8,40.3).curveTo(-40.9,38.3,-41.8,35.4).curveTo(-42.7,32,-41.8,28.8).lineTo(-41.3,27.6).curveTo(-41.5,26.2,-41.4,24.9).curveTo(-43.2,23.1,-44.2,20.4).curveTo(-45.2,17.3,-44.5,14.2).curveTo(-43.6,10.8,-41,8.4).curveTo(-38.9,6.6,-36.1,6).curveTo(-35.7,4.4,-34.8,2.7).curveTo(-34,1.4,-32.9,0.3).curveTo(-31.4,-1.1,-29.5,-1.9).lineTo(-29.3,-2.6).lineTo(-28.4,-4.3).curveTo(-29,-5.9,-29.1,-7.7).lineTo(-29.1,-7.9).curveTo(-31.1,-10,-31.9,-12.7).curveTo(-32.7,-15.7,-31.7,-18.9).curveTo(-30.8,-22.1,-28.4,-24.1).curveTo(-27.6,-24.9,-26.7,-25.4).curveTo(-25.7,-27.4,-24.1,-28.8).lineTo(-23.8,-29.1).curveTo(-23.3,-31.2,-22,-33.1).curveTo(-21,-34.6,-19.6,-35.7).curveTo(-21.8,-37.4,-22.9,-39.9).curveTo(-24,-42.5,-23.8,-45.4).curveTo(-23.5,-48.3,-22,-50.6).curveTo(-20.4,-52.9,-17.9,-54.3).curveTo(-15.3,-55.7,-12.5,-55.7).curveTo(-9.7,-55.6,-7.2,-54.2).curveTo(-4.6,-52.8,-3.1,-50.4).curveTo(-1.5,-47.8,-1.4,-44.6).lineTo(-1.4,-44.5).curveTo(-0.2,-45.5,1.4,-46.2).curveTo(4.5,-47.6,7.6,-47.1).curveTo(11.1,-46.5,13.7,-44).curveTo(16,-41.8,16.7,-38.5).curveTo(17.5,-35.3,16.4,-32.3).curveTo(15.4,-29.3,12.8,-27.2).curveTo(10.1,-25.1,7,-24.8).curveTo(5.8,-24.7,4.6,-24.8).lineTo(4.2,-24.2).curveTo(2.8,-22.1,0.8,-20.9).lineTo(-0.1,-20.4).curveTo(3.1,-21,6,-19.9).curveTo(9.2,-18.8,11.2,-15.8).curveTo(13.3,-12.9,13.3,-9.5).curveTo(13.4,-6.2,11.4,-3.2).curveTo(9.3,-0.2,6.2,1).curveTo(3.4,2.1,0.3,1.6).curveTo(0.3,3.4,-0.3,5.2).curveTo(-1.3,8.4,-3.8,10.6).curveTo(-5.6,12.2,-8.1,13.1).curveTo(-7.5,15.7,-8.2,18.2).curveTo(-8.6,19.7,-9.4,21.1).lineTo(-9.1,21.3).lineTo(-7.3,20.7).curveTo(-4.1,19.9,-1.1,20.9).curveTo(0.4,21.4,1.6,22.3).curveTo(3.3,19.6,6.2,18.2).curveTo(9.2,16.7,12.4,17).lineTo(12.7,17.1).curveTo(12.9,15.6,13.6,14.2).curveTo(14.7,11.7,17,9.9).curveTo(19.2,8.2,22,7.7).curveTo(24.7,7.3,27.5,8.2).curveTo(30.2,9.2,32.1,11.2).curveTo(32.9,12.1,33.4,13.1).curveTo(35.4,13,37.2,13.7).curveTo(40,14.7,42,16.9).curveTo(44,19.3,44.5,22.1).curveTo(45.1,24.7,44.3,27.3).curveTo(43.6,30,41.8,31.9).curveTo(39.5,34.3,36.1,35.1).curveTo(32.9,35.9,29.9,34.9).curveTo(28.8,36.3,27.2,37.4).curveTo(24.7,39.2,21.8,39.4).lineTo(20.3,39.4).lineTo(20.1,39.7).curveTo(19.1,41.4,17.7,42.6).curveTo(17.6,44.6,16.9,46.4).curveTo(15.8,49,13.5,50.9).curveTo(11.3,52.7,8.5,53.2).curveTo(6.2,53.7,3.8,53.1).curveTo(2.8,52.8,1.8,52.4).curveTo(-0.5,53.7,-3.2,53.7).curveTo(-6.3,53.8,-9.2,52.2).lineTo(-9.6,51.9).curveTo(-11.1,53.1,-13.1,53.8).curveTo(-16.2,54.9,-19.2,54.2).curveTo(-20.4,53.9,-21.4,53.4).curveTo(-24.5,55.7,-28.2,55.7).lineTo(-29.4,55.6).closePath().moveTo(-3.6,-19.3).lineTo(-3.8,-19.3).lineTo(-3.5,-19.1).lineTo(-2.9,-19.4).lineTo(-3.6,-19.3).closePath();
	var mask_2_graphics_27 = new cjs.Graphics().moveTo(-29.4,61.2).curveTo(-31.9,61,-34.1,59.7).curveTo(-37.3,57.7,-38.7,54.2).curveTo(-39.6,51.8,-39.4,49).curveTo(-39.3,47.4,-38.8,46).curveTo(-40.9,43.9,-41.8,41).curveTo(-42.7,37.6,-41.8,34.4).lineTo(-41.3,33.2).curveTo(-41.5,31.8,-41.4,30.5).curveTo(-43.2,28.7,-44.2,26).curveTo(-45.2,22.9,-44.5,19.8).curveTo(-43.6,16.4,-41,14).curveTo(-38.9,12.2,-36.1,11.6).curveTo(-35.7,10,-34.8,8.3).curveTo(-34,7,-32.9,5.9).curveTo(-31.4,4.5,-29.5,3.7).lineTo(-29.3,3).lineTo(-28.4,1.3).curveTo(-29,-0.2,-29.1,-2.1).lineTo(-29.1,-2.3).curveTo(-31.1,-4.4,-31.9,-7.1).curveTo(-32.7,-10.1,-31.7,-13.3).curveTo(-30.8,-16.5,-28.4,-18.5).curveTo(-27.6,-19.2,-26.7,-19.8).curveTo(-25.7,-21.7,-24.1,-23.2).lineTo(-23.8,-23.4).curveTo(-23.3,-25.6,-22,-27.5).curveTo(-21,-29,-19.6,-30.1).curveTo(-21.8,-31.8,-22.9,-34.3).curveTo(-24,-36.9,-23.8,-39.8).curveTo(-23.5,-42.7,-22,-45).curveTo(-20.4,-47.3,-17.9,-48.7).curveTo(-15.3,-50.1,-12.5,-50.1).curveTo(-9.7,-50,-7.2,-48.6).curveTo(-4.6,-47.2,-3.1,-44.8).lineTo(-3,-44.6).lineTo(-2.8,-44.7).curveTo(-1.5,-45.6,0.1,-46.1).curveTo(1.6,-48.4,4.2,-49.9).curveTo(5.5,-50.6,6.9,-50.9).curveTo(8.6,-52.6,10.9,-53.5).curveTo(12.9,-54.2,15,-54.1).lineTo(16.4,-55.3).curveTo(18,-56.4,19.8,-56.9).curveTo(20.5,-57.8,21.3,-58.5).curveTo(23.4,-60.3,26,-61).curveTo(28.6,-61.6,31.3,-61).curveTo(34,-60.4,36,-58.7).curveTo(37.9,-57.3,38.9,-55.1).curveTo(40,-53,40.2,-50.6).curveTo(40.3,-48.3,39.5,-46.1).curveTo(38.6,-43.8,37,-42.1).curveTo(35.1,-40.2,32.4,-39.3).lineTo(31.6,-39).curveTo(30.6,-37.7,29.2,-36.8).curveTo(26.4,-34.8,22.9,-34.8).lineTo(22.3,-34.8).curveTo(20.5,-33.1,18.1,-32.2).lineTo(17,-30.9).curveTo(17.2,-28.7,16.4,-26.7).curveTo(15.4,-23.7,12.8,-21.6).curveTo(10.1,-19.5,7,-19.2).curveTo(5.8,-19.1,4.6,-19.2).lineTo(4.2,-18.6).curveTo(2.8,-16.5,0.8,-15.3).lineTo(-0.1,-14.7).curveTo(3.1,-15.4,6,-14.3).curveTo(9.2,-13.2,11.2,-10.2).curveTo(13.3,-7.3,13.3,-3.9).curveTo(13.4,-0.6,11.4,2.4).curveTo(9.3,5.4,6.2,6.6).curveTo(3.4,7.8,0.3,7.2).curveTo(0.3,9,-0.3,10.8).curveTo(-1.3,14,-3.8,16.2).curveTo(-5.6,17.8,-8.1,18.7).curveTo(-7.5,21.3,-8.2,23.8).curveTo(-8.6,25.3,-9.4,26.7).lineTo(-9.1,26.9).lineTo(-7.3,26.3).curveTo(-4.1,25.5,-1.1,26.5).curveTo(0.4,27,1.6,27.9).curveTo(3.3,25.2,6.2,23.8).curveTo(9.2,22.3,12.4,22.6).lineTo(12.7,22.7).curveTo(12.9,21.2,13.6,19.8).curveTo(14.7,17.3,17,15.5).curveTo(19.2,13.8,22,13.3).curveTo(24.7,12.9,27.5,13.8).curveTo(30.2,14.8,32.1,16.8).curveTo(32.9,17.7,33.4,18.7).curveTo(35.4,18.7,37.2,19.3).curveTo(40,20.3,42,22.5).curveTo(44,24.9,44.5,27.7).curveTo(45.1,30.3,44.3,32.9).curveTo(43.6,35.6,41.8,37.5).curveTo(39.5,39.9,36.1,40.7).curveTo(32.9,41.5,29.9,40.5).curveTo(28.8,42,27.2,43).curveTo(24.7,44.8,21.8,45).lineTo(20.3,45).lineTo(20.1,45.3).curveTo(19.1,47,17.7,48.2).curveTo(17.6,50.2,16.9,52).curveTo(15.8,54.6,13.5,56.5).curveTo(11.3,58.3,8.5,58.8).curveTo(6.2,59.3,3.8,58.7).curveTo(2.8,58.5,1.8,58).curveTo(-0.5,59.3,-3.2,59.3).curveTo(-6.3,59.4,-9.2,57.8).lineTo(-9.6,57.5).curveTo(-11.1,58.7,-13.1,59.4).curveTo(-16.2,60.5,-19.2,59.8).curveTo(-20.4,59.5,-21.4,59).curveTo(-24.5,61.3,-28.2,61.3).lineTo(-29.4,61.2).closePath().moveTo(-3.6,-13.7).lineTo(-3.8,-13.6).lineTo(-3.5,-13.5).lineTo(-2.9,-13.8).lineTo(-3.6,-13.7).closePath();
	var mask_2_graphics_29 = new cjs.Graphics().moveTo(-31.3,68.3).curveTo(-33.7,68.1,-35.9,66.8).curveTo(-39.1,64.8,-40.5,61.3).curveTo(-41.5,58.9,-41.3,56.1).curveTo(-41.2,54.5,-40.6,53.1).curveTo(-42.7,51,-43.6,48.1).curveTo(-44.6,44.7,-43.6,41.5).lineTo(-43.1,40.3).curveTo(-43.4,39,-43.3,37.6).curveTo(-45.1,35.8,-46,33.1).curveTo(-47.1,30,-46.3,26.9).curveTo(-45.5,23.5,-42.8,21.1).curveTo(-40.7,19.3,-37.9,18.7).curveTo(-37.6,17.1,-36.7,15.4).curveTo(-35.9,14.1,-34.7,13).curveTo(-33.3,11.6,-31.4,10.8).lineTo(-31.1,10.1).lineTo(-30.3,8.4).curveTo(-30.8,6.9,-30.9,5).lineTo(-30.9,4.8).curveTo(-33,2.7,-33.7,0).curveTo(-34.5,-3,-33.6,-6.2).curveTo(-32.6,-9.4,-30.3,-11.4).curveTo(-29.5,-12.1,-28.5,-12.7).curveTo(-27.6,-14.6,-25.9,-16.1).lineTo(-25.6,-16.3).curveTo(-25.2,-18.5,-23.9,-20.4).curveTo(-22.9,-21.9,-21.4,-23).curveTo(-23.7,-24.7,-24.8,-27.2).curveTo(-25.9,-29.8,-25.6,-32.7).curveTo(-25.4,-35.6,-23.8,-37.9).curveTo(-22.3,-40.2,-19.7,-41.6).curveTo(-17.2,-43,-14.4,-43).curveTo(-11.6,-42.9,-9,-41.5).curveTo(-6.5,-40.1,-5,-37.7).lineTo(-4.8,-37.5).lineTo(-4.7,-37.6).curveTo(-3.3,-38.5,-1.7,-39).curveTo(-0.2,-41.3,2.3,-42.8).curveTo(3.6,-43.5,5,-43.8).curveTo(6.2,-45,7.7,-45.8).curveTo(8.7,-48.1,10.8,-49.8).curveTo(10.7,-51.8,11.3,-53.8).curveTo(12.3,-57.2,14.9,-59.3).curveTo(16.9,-60.9,19.6,-61.5).curveTo(22.2,-62.1,24.7,-61.4).lineTo(25.4,-62.7).curveTo(27,-65.7,29.9,-67.2).curveTo(32.7,-68.7,36.1,-68.4).curveTo(39.4,-68.1,42,-66.1).curveTo(44.5,-64.1,45.7,-61).curveTo(46.8,-57.8,46,-54.7).curveTo(46.7,-52.8,46.6,-50.7).curveTo(46.5,-47.7,44.9,-45.1).curveTo(43.2,-42.5,40.6,-41.1).curveTo(39.4,-40.4,38,-40.1).lineTo(37.6,-39).curveTo(36.8,-36.7,35.2,-35).curveTo(33.2,-33.1,30.6,-32.2).lineTo(29.8,-31.9).curveTo(28.8,-30.6,27.4,-29.7).curveTo(24.6,-27.7,21,-27.7).lineTo(20.5,-27.7).curveTo(18.7,-26,16.2,-25.1).lineTo(15.2,-23.8).curveTo(15.3,-21.6,14.6,-19.6).curveTo(13.5,-16.6,10.9,-14.5).curveTo(8.3,-12.4,5.1,-12.1).curveTo(3.9,-12,2.8,-12.1).lineTo(2.4,-11.5).curveTo(1,-9.4,-1,-8.2).lineTo(-2,-7.6).curveTo(1.2,-8.3,4.1,-7.2).curveTo(7.3,-6.1,9.4,-3.1).curveTo(11.4,-0.2,11.5,3.2).curveTo(11.5,6.5,9.5,9.5).curveTo(7.5,12.5,4.4,13.7).curveTo(1.6,14.9,-1.5,14.3).curveTo(-1.6,16.1,-2.1,17.9).curveTo(-3.1,21.1,-5.6,23.3).curveTo(-7.4,24.9,-10,25.8).curveTo(-9.4,28.4,-10.1,30.9).curveTo(-10.5,32.4,-11.3,33.8).lineTo(-10.9,34).lineTo(-9.2,33.4).curveTo(-5.9,32.6,-2.9,33.6).curveTo(-1.5,34.1,-0.2,35).curveTo(1.4,32.3,4.4,30.9).curveTo(7.4,29.4,10.5,29.7).lineTo(10.9,29.8).curveTo(11.1,28.3,11.7,26.9).curveTo(12.8,24.4,15.1,22.6).curveTo(17.4,20.9,20.1,20.4).curveTo(22.9,20,25.6,20.9).curveTo(28.4,21.9,30.2,23.9).curveTo(31,24.8,31.6,25.8).curveTo(33.5,25.8,35.4,26.4).curveTo(38.1,27.4,40.1,29.6).curveTo(42.1,32,42.7,34.8).curveTo(43.2,37.4,42.5,40).curveTo(41.7,42.7,39.9,44.6).curveTo(37.7,47,34.3,47.8).curveTo(31,48.6,28.1,47.6).curveTo(27,49.1,25.3,50.1).curveTo(22.8,51.9,19.9,52.1).lineTo(18.4,52.1).lineTo(18.2,52.4).curveTo(17.3,54.1,15.8,55.3).curveTo(15.8,57.3,15,59.1).curveTo(14,61.7,11.7,63.6).curveTo(9.4,65.4,6.7,65.9).curveTo(4.3,66.4,2,65.8).curveTo(0.9,65.6,-0,65.1).curveTo(-2.3,66.4,-5.1,66.4).curveTo(-8.2,66.5,-11,64.9).lineTo(-11.4,64.6).curveTo(-13,65.8,-14.9,66.5).curveTo(-18,67.6,-21.1,66.9).curveTo(-22.2,66.6,-23.3,66.1).curveTo(-26.3,68.4,-30,68.4).lineTo(-31.3,68.3).closePath().moveTo(-5.4,-6.6).lineTo(-5.7,-6.5).lineTo(-5.3,-6.4).lineTo(-4.8,-6.7).lineTo(-5.4,-6.6).closePath();
	var mask_2_graphics_31 = new cjs.Graphics().moveTo(-33.2,73).curveTo(-35.6,72.8,-37.8,71.4).curveTo(-41,69.5,-42.4,66).curveTo(-43.4,63.5,-43.2,60.8).curveTo(-43.1,59.2,-42.5,57.7).curveTo(-44.7,55.7,-45.5,52.7).curveTo(-46.5,49.4,-45.5,46.2).lineTo(-45.1,44.9).curveTo(-45.3,43.6,-45.2,42.2).curveTo(-47,40.4,-47.9,37.8).curveTo(-49,34.6,-48.2,31.5).curveTo(-47.4,28.1,-44.7,25.8).curveTo(-42.6,23.9,-39.8,23.3).curveTo(-39.5,21.8,-38.6,20.1).curveTo(-37.8,18.8,-36.6,17.6).curveTo(-35.2,16.2,-33.3,15.4).lineTo(-33,14.8).lineTo(-32.2,13.1).curveTo(-32.8,11.5,-32.8,9.6).lineTo(-32.9,9.4).curveTo(-34.9,7.3,-35.6,4.7).curveTo(-36.4,1.6,-35.5,-1.5).curveTo(-34.5,-4.7,-32.2,-6.8).curveTo(-31.4,-7.5,-30.5,-8).curveTo(-29.5,-10,-27.8,-11.5).lineTo(-27.6,-11.7).curveTo(-27.1,-13.9,-25.8,-15.8).curveTo(-24.8,-17.3,-23.4,-18.4).curveTo(-25.6,-20.1,-26.7,-22.6).curveTo(-27.8,-25.1,-27.5,-28).curveTo(-27.3,-31,-25.7,-33.3).curveTo(-24.2,-35.6,-21.6,-37).curveTo(-19.1,-38.3,-16.3,-38.3).curveTo(-13.5,-38.3,-10.9,-36.9).curveTo(-8.4,-35.4,-6.9,-33.1).lineTo(-6.7,-32.8).lineTo(-6.6,-32.9).curveTo(-5.3,-33.9,-3.7,-34.3).curveTo(-2.2,-36.7,0.4,-38.1).curveTo(1.7,-38.9,3.1,-39.2).curveTo(4.3,-40.4,5.8,-41.2).curveTo(6.8,-43.5,8.9,-45.2).curveTo(8.8,-47.1,9.3,-49).curveTo(6.7,-47,3.6,-46.7).curveTo(0.3,-46.4,-2.9,-48.2).curveTo(-6,-50,-7.4,-53).curveTo(-8.9,-56,-8.4,-59.5).curveTo(-7.9,-62.9,-5.7,-65.4).curveTo(-3.5,-67.8,-0.1,-68.7).curveTo(1.6,-69.2,3.2,-69.1).curveTo(4,-70,5,-70.7).curveTo(6.8,-72,8.6,-72.5).curveTo(11.5,-73.4,14.6,-72.6).curveTo(16.3,-72.2,17.8,-71.3).lineTo(19,-71.7).curveTo(22.2,-72.8,25.3,-72).curveTo(27.9,-71.3,30,-69.4).curveTo(32.5,-71.7,35.8,-72.2).curveTo(39.1,-72.7,42.3,-71.1).curveTo(45.5,-69.5,47.2,-66.6).curveTo(48.9,-63.7,48.5,-60.1).curveTo(48.2,-56.6,46.1,-53.9).curveTo(45.3,-53.1,44.4,-52.3).curveTo(44.4,-51.2,44.1,-50).curveTo(44.8,-48.2,44.7,-46).curveTo(44.6,-43.1,43,-40.4).curveTo(41.3,-37.8,38.7,-36.4).curveTo(37.5,-35.8,36.1,-35.5).lineTo(35.7,-34.3).curveTo(34.9,-32.1,33.3,-30.4).curveTo(31.3,-28.4,28.7,-27.5).lineTo(27.9,-27.3).curveTo(26.8,-26,25.5,-25).curveTo(22.7,-23.1,19.1,-23).lineTo(18.6,-23).curveTo(16.8,-21.3,14.3,-20.5).lineTo(13.3,-19.2).curveTo(13.4,-17,12.7,-14.9).curveTo(11.6,-11.9,9,-9.8).curveTo(6.4,-7.8,3.2,-7.5).curveTo(2,-7.4,0.9,-7.5).lineTo(0.5,-6.8).curveTo(-0.9,-4.8,-2.9,-3.5).lineTo(-3.9,-3).curveTo(-0.7,-3.7,2.2,-2.6).curveTo(5.4,-1.4,7.5,1.5).curveTo(9.5,4.4,9.6,7.8).curveTo(9.6,11.2,7.6,14.2).curveTo(5.6,17.1,2.5,18.4).curveTo(-0.4,19.5,-3.5,19).curveTo(-3.5,20.7,-4,22.5).curveTo(-5,25.8,-7.5,27.9).curveTo(-9.3,29.5,-11.9,30.4).curveTo(-11.3,33,-12,35.6).curveTo(-12.4,37.1,-13.2,38.4).lineTo(-12.8,38.6).lineTo(-11.1,38.1).curveTo(-7.8,37.3,-4.8,38.3).curveTo(-3.4,38.8,-2.1,39.6).curveTo(-0.5,36.9,2.5,35.5).curveTo(5.5,34,8.6,34.4).lineTo(8.9,34.4).curveTo(9.2,32.9,9.8,31.6).curveTo(10.9,29,13.2,27.3).curveTo(15.5,25.5,18.2,25.1).curveTo(21,24.6,23.7,25.6).curveTo(26.5,26.5,28.3,28.6).curveTo(29.1,29.4,29.7,30.4).curveTo(31.6,30.4,33.5,31).curveTo(36.2,32,38.2,34.3).curveTo(40.2,36.6,40.8,39.5).curveTo(41.3,42.1,40.6,44.7).curveTo(39.8,47.3,38,49.3).curveTo(35.8,51.7,32.4,52.5).curveTo(29.1,53.2,26.1,52.2).curveTo(25,53.7,23.4,54.8).curveTo(20.9,56.5,18,56.7).lineTo(16.5,56.7).lineTo(16.3,57.1).curveTo(15.4,58.7,13.9,60).curveTo(13.8,61.9,13.1,63.8).curveTo(12.1,66.4,9.8,68.2).curveTo(7.5,70.1,4.8,70.6).curveTo(2.4,71,0.1,70.5).curveTo(-1,70.2,-2,69.7).curveTo(-4.3,71,-7,71.1).curveTo(-10.1,71.2,-12.9,69.5).lineTo(-13.4,69.2).curveTo(-14.9,70.5,-16.8,71.2).curveTo(-19.9,72.2,-23,71.5).curveTo(-24.2,71.2,-25.2,70.7).curveTo(-28.2,73,-31.9,73).lineTo(-33.2,73).closePath().moveTo(-7.3,-1.9).lineTo(-7.6,-1.9).lineTo(-7.3,-1.8).lineTo(-6.7,-2).lineTo(-7.3,-1.9).closePath();
	var mask_2_graphics_33 = new cjs.Graphics().moveTo(-33.2,73).curveTo(-35.6,72.8,-37.8,71.4).curveTo(-41,69.5,-42.4,66).curveTo(-43.4,63.5,-43.2,60.8).curveTo(-43.1,59.2,-42.5,57.7).curveTo(-44.7,55.7,-45.5,52.7).curveTo(-46.5,49.4,-45.5,46.2).lineTo(-45.1,44.9).curveTo(-45.3,43.6,-45.2,42.2).curveTo(-47,40.4,-47.9,37.8).curveTo(-49,34.6,-48.2,31.5).curveTo(-47.4,28.1,-44.7,25.8).curveTo(-42.6,23.9,-39.8,23.3).curveTo(-39.5,21.8,-38.6,20.1).curveTo(-37.8,18.8,-36.6,17.6).curveTo(-35.2,16.2,-33.3,15.4).lineTo(-33,14.8).lineTo(-32.2,13.1).curveTo(-32.8,11.5,-32.8,9.6).lineTo(-32.9,9.4).curveTo(-34.9,7.3,-35.6,4.7).curveTo(-36.4,1.6,-35.5,-1.5).curveTo(-34.5,-4.7,-32.2,-6.8).curveTo(-31.4,-7.5,-30.5,-8).curveTo(-29.5,-10,-27.8,-11.5).lineTo(-27.6,-11.7).curveTo(-27.1,-13.9,-25.8,-15.8).curveTo(-24.8,-17.3,-23.4,-18.4).curveTo(-25.6,-20.1,-26.7,-22.6).curveTo(-27.8,-25.1,-27.5,-28).curveTo(-27.3,-31,-25.7,-33.3).curveTo(-24.2,-35.6,-21.6,-37).curveTo(-19.1,-38.3,-16.3,-38.3).curveTo(-13.5,-38.3,-10.9,-36.9).curveTo(-8.4,-35.4,-6.9,-33.1).lineTo(-6.7,-32.8).lineTo(-6.6,-32.9).curveTo(-5.3,-33.9,-3.7,-34.3).curveTo(-2.8,-35.8,-1.4,-36.9).curveTo(-3.8,-37.4,-5.7,-38.8).curveTo(-8,-40.4,-9.2,-43).curveTo(-10.4,-45.5,-10.3,-48.3).curveTo(-10.2,-51.7,-8.1,-54.5).lineTo(-8,-54.5).curveTo(-8.8,-56.9,-8.4,-59.5).curveTo(-7.9,-62.9,-5.7,-65.4).curveTo(-3.5,-67.8,-0.1,-68.7).curveTo(1.6,-69.2,3.2,-69.1).curveTo(4,-70,5,-70.7).curveTo(6.8,-72,8.6,-72.5).curveTo(11.5,-73.4,14.6,-72.6).curveTo(16.3,-72.2,17.8,-71.3).lineTo(19,-71.7).curveTo(22.2,-72.8,25.3,-72).curveTo(27.9,-71.3,30,-69.4).curveTo(32.5,-71.7,35.8,-72.2).curveTo(39.1,-72.7,42.3,-71.1).curveTo(45.5,-69.5,47.2,-66.6).curveTo(48.9,-63.7,48.5,-60.1).curveTo(48.2,-56.6,46.1,-53.9).curveTo(45.3,-53.1,44.4,-52.3).curveTo(44.4,-51.2,44.1,-50).curveTo(44.8,-48.2,44.7,-46).curveTo(44.6,-43.1,43,-40.4).curveTo(41.3,-37.8,38.7,-36.4).curveTo(37.5,-35.8,36.1,-35.5).lineTo(35.7,-34.3).curveTo(34.9,-32.1,33.3,-30.4).curveTo(31.3,-28.4,28.7,-27.5).lineTo(27.9,-27.3).curveTo(26.8,-26,25.5,-25).curveTo(22.7,-23.1,19.1,-23).lineTo(18.6,-23).curveTo(16.8,-21.3,14.3,-20.5).lineTo(13.3,-19.2).curveTo(13.4,-17,12.7,-14.9).curveTo(11.6,-11.9,9,-9.8).curveTo(6.4,-7.8,3.2,-7.5).curveTo(2,-7.4,0.9,-7.5).lineTo(0.5,-6.8).curveTo(-0.9,-4.8,-2.9,-3.5).lineTo(-3.9,-3).curveTo(-0.7,-3.7,2.2,-2.6).curveTo(5.4,-1.4,7.5,1.5).curveTo(9.5,4.4,9.6,7.8).curveTo(9.6,11.2,7.6,14.2).curveTo(5.6,17.1,2.5,18.4).curveTo(-0.4,19.5,-3.5,19).curveTo(-3.5,20.7,-4,22.5).curveTo(-5,25.8,-7.5,27.9).curveTo(-9.3,29.5,-11.9,30.4).curveTo(-11.3,33,-12,35.6).curveTo(-12.4,37.1,-13.2,38.4).lineTo(-12.8,38.6).lineTo(-11.1,38.1).curveTo(-7.8,37.3,-4.8,38.3).curveTo(-3.4,38.8,-2.1,39.6).curveTo(-0.5,36.9,2.5,35.5).curveTo(5.5,34,8.6,34.4).lineTo(8.9,34.4).curveTo(9.2,32.9,9.8,31.6).curveTo(10.9,29,13.2,27.3).curveTo(15.5,25.5,18.2,25.1).curveTo(21,24.6,23.7,25.6).curveTo(26.5,26.5,28.3,28.6).curveTo(29.1,29.4,29.7,30.4).curveTo(31.6,30.4,33.5,31).curveTo(36.2,32,38.2,34.3).curveTo(40.2,36.6,40.8,39.5).curveTo(41.3,42.1,40.6,44.7).curveTo(39.8,47.3,38,49.3).curveTo(35.8,51.7,32.4,52.5).curveTo(29.1,53.2,26.1,52.2).curveTo(25,53.7,23.4,54.8).curveTo(20.9,56.5,18,56.7).lineTo(16.5,56.7).lineTo(16.3,57.1).curveTo(15.4,58.7,13.9,60).curveTo(13.8,61.9,13.1,63.8).curveTo(12.1,66.4,9.8,68.2).curveTo(7.5,70.1,4.8,70.6).curveTo(2.4,71,0.1,70.5).curveTo(-1,70.2,-2,69.7).curveTo(-4.3,71,-7,71.1).curveTo(-10.1,71.2,-12.9,69.5).lineTo(-13.4,69.2).curveTo(-14.9,70.5,-16.8,71.2).curveTo(-19.9,72.2,-23,71.5).curveTo(-24.2,71.2,-25.2,70.7).curveTo(-28.2,73,-31.9,73).lineTo(-33.2,73).closePath().moveTo(-7.3,-1.9).lineTo(-7.6,-1.9).lineTo(-7.3,-1.8).lineTo(-6.7,-2).lineTo(-7.3,-1.9).closePath();

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(5).to({graphics:mask_2_graphics_5,x:61.6836,y:43.2216}).wait(2).to({graphics:mask_2_graphics_7,x:54.4904,y:50.2289}).wait(2).to({graphics:mask_2_graphics_9,x:49.4906,y:50.3805}).wait(2).to({graphics:mask_2_graphics_11,x:37.124,y:51.3594}).wait(2).to({graphics:mask_2_graphics_13,x:35.7288,y:51.3594}).wait(2).to({graphics:mask_2_graphics_15,x:34.4601,y:50.4103}).wait(2).to({graphics:mask_2_graphics_17,x:34.4601,y:46.1817}).wait(2).to({graphics:mask_2_graphics_19,x:34.4601,y:39.2857}).wait(2).to({graphics:mask_2_graphics_21,x:34.4601,y:37.4289}).wait(2).to({graphics:mask_2_graphics_23,x:34.4601,y:31.7928}).wait(2).to({graphics:mask_2_graphics_25,x:34.4601,y:19.7317}).wait(2).to({graphics:mask_2_graphics_27,x:34.4601,y:14.1127}).wait(2).to({graphics:mask_2_graphics_29,x:36.3211,y:7.0067}).wait(2).to({graphics:mask_2_graphics_31,x:38.2486,y:2.3935}).wait(2).to({graphics:mask_2_graphics_33,x:38.2486,y:2.3935}).wait(287));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-25.1,66.6).curveTo(-27.2,66.3,-28.9,65.7).curveTo(-30.9,65,-32.3,63.9).lineTo(-32.4,63.9).curveTo(-34,62.7,-35.2,61).curveTo(-36.5,59.3,-37.1,57.5).curveTo(-37.9,55.5,-38.1,53.6).curveTo(-38.6,51.5,-38.5,49.7).curveTo(-38.7,47.5,-38.4,45.7).curveTo(-38.3,43.8,-37.7,41.9).curveTo(-36.8,38.3,-35,34.7).lineTo(-31.3,28.1).curveTo(-29.5,24.8,-28.4,22.3).lineTo(-28.4,22.3).lineTo(-28,21.5).lineTo(-28,21.5).curveTo(-26.8,18.6,-25.7,14.6).lineTo(-25.7,14.4).lineTo(-25.6,14.2).lineTo(-25.4,14.2).lineTo(-25.2,14.2).lineTo(-25.2,14.3).lineTo(-25.2,14.4).lineTo(-25.2,14.5).lineTo(-25.4,15.6).curveTo(-26.1,18.7,-27.1,21.8).lineTo(-27.1,21.8).lineTo(-27.2,21.9).lineTo(-27.4,22.8).lineTo(-27.5,22.8).lineTo(-28.6,25.4).lineTo(-28.2,25.6).lineTo(-28.1,25.5).lineTo(-28.1,25.5).lineTo(-27.7,24.5).lineTo(-27,23).lineTo(-26.6,22).lineTo(-26.6,21.9).lineTo(-25.6,19.4).lineTo(-26.8,23.1).lineTo(-26.8,23.1).lineTo(-27.3,24.6).lineTo(-27.4,24.7).lineTo(-27.7,25.7).lineTo(-27.8,25.7).lineTo(-27.8,25.8).lineTo(-29.1,29.3).lineTo(-29.1,29.4).lineTo(-30.1,31.9).lineTo(-29.7,32).lineTo(-28.6,29.6).lineTo(-28.6,29.5).lineTo(-27,26.1).lineTo(-27,26).lineTo(-27,26).lineTo(-25.9,23.4).lineTo(-24.4,19.8).lineTo(-24.2,19).lineTo(-23.6,16.8).curveTo(-23.3,15.4,-23.2,14.6).curveTo(-23.2,13.3,-23.5,12.7).lineTo(-23.5,12.7).lineTo(-24,12.3).lineTo(-24.8,12.2).curveTo(-25.3,12.2,-25.9,12.4).lineTo(-26.1,12.4).lineTo(-26.4,12.5).lineTo(-28.9,13.3).lineTo(-31.2,14.2).curveTo(-32.7,14.6,-33.8,14.3).lineTo(-34.4,14.2).curveTo(-34.9,13.9,-35.3,13.5).curveTo(-35.8,12.9,-36.1,12.1).curveTo(-36.5,11.1,-36.5,9.4).curveTo(-36.4,7.2,-35.6,4.5).lineTo(-35.6,4.4).lineTo(-35.6,4.2).curveTo(-35,1.8,-34.3,-0.3).lineTo(-33.5,-2.3).curveTo(-32.7,-4.2,-31.7,-6.1).lineTo(-31.7,-6.2).lineTo(-31.6,-6.2).curveTo(-30.9,-7.6,-30.1,-9).lineTo(-28.9,-10.8).lineTo(-27.2,-13.4).lineTo(-27.1,-13.5).curveTo(-25.6,-15.8,-23.7,-18).curveTo(-21.3,-20.9,-18.4,-23.8).lineTo(-16.9,-25.3).curveTo(-13.2,-29.1,-9,-32.7).lineTo(-4.6,-36.4).lineTo(2.6,-41.9).lineTo(2.7,-42).lineTo(6.4,-44.8).curveTo(8.3,-46.4,9.7,-47.9).curveTo(10.5,-48.8,10.9,-49.5).lineTo(11,-49.5).lineTo(11.3,-50.3).curveTo(11.3,-50.8,11.2,-51).lineTo(11.2,-51).lineTo(11.2,-51.2).lineTo(11.2,-51.2).lineTo(10.9,-51.4).curveTo(10.8,-51.5,10.2,-51.5).curveTo(9.2,-51.6,8.1,-51.4).curveTo(6.2,-50.9,4,-49.9).curveTo(2.8,-49.4,2,-48.9).lineTo(0.2,-47.7).curveTo(-1.8,-46.2,-2.8,-44.6).curveTo(-3.5,-43.6,-3.6,-42.7).lineTo(-3.6,-42.4).lineTo(-3.4,-42.4).lineTo(-3,-42.4).lineTo(-3,-42.4).curveTo(-2.2,-42.6,-1,-43.1).lineTo(0.9,-44.3).lineTo(4.5,-47).lineTo(4.5,-47).lineTo(4.7,-47.1).lineTo(4.8,-47.1).lineTo(4.9,-47.1).lineTo(5,-46.9).lineTo(5,-46.7).lineTo(4.9,-46.7).lineTo(3.9,-45.7).curveTo(2.8,-44.5,1.6,-43.5).lineTo(1.6,-43.5).lineTo(1.5,-43.3).curveTo(0.5,-42.5,-0.4,-42).curveTo(-1.7,-41.3,-2.7,-41).lineTo(-3.3,-41).lineTo(-3.4,-40.9).curveTo(-3.9,-40.9,-4.3,-41.1).lineTo(-4.3,-41.1).lineTo(-4.7,-41.5).lineTo(-4.8,-41.5).lineTo(-5,-42).curveTo(-5.1,-42.4,-5,-42.9).lineTo(-5.1,-42.9).lineTo(-5.6,-42.9).lineTo(-5.7,-42.2).curveTo(-5.9,-45.1,-4.6,-48.2).curveTo(-3.4,-50.8,-1.2,-53.2).curveTo(2.4,-57.2,8.2,-60.4).curveTo(13.2,-63.2,19.1,-64.9).curveTo(22.3,-65.9,24.8,-66.3).curveTo(27.9,-66.8,30.7,-66.7).curveTo(32.5,-66.6,33.7,-66.3).lineTo(35.2,-65.9).lineTo(36.7,-65.1).curveTo(37.4,-64.6,37.9,-63.8).curveTo(38.4,-63.1,38.6,-62.1).curveTo(38.8,-60.6,38,-58.7).curveTo(37.5,-57.5,36.4,-56).lineTo(34.5,-53.7).lineTo(30,-49.7).curveTo(26.3,-46.9,20,-43.4).lineTo(9.7,-37.8).curveTo(3.7,-34.4,-0.2,-31.7).curveTo(-5.5,-28.1,-9.3,-24.4).curveTo(-13.9,-19.7,-16.9,-15.5).curveTo(-18.9,-12.7,-19.9,-10.4).lineTo(-20.6,-8.3).lineTo(-20.8,-7.6).curveTo(-21.1,-6.2,-20.9,-4.8).lineTo(-20.8,-4.1).lineTo(-20.6,-3.4).lineTo(-20.4,-3).lineTo(-20,-2.9).curveTo(-19.6,-2.7,-18.8,-2.8).lineTo(-17.4,-2.9).curveTo(-15.9,-3.2,-11.9,-4.5).curveTo(-8.2,-5.6,-6.2,-6).curveTo(-4.5,-6.4,-3.2,-6.3).lineTo(-2.3,-6.2).lineTo(-1.5,-5.8).curveTo(-0.7,-5.2,-0.3,-4.3).curveTo(-0,-3.6,0,-2.6).curveTo(0,-1.7,-0.1,-0.9).curveTo(-0.4,0.5,-1,2.2).lineTo(-2.3,4.9).curveTo(-3.2,6.8,-3.7,7.6).curveTo(-5.1,10.1,-7,12.7).curveTo(-8.4,14.7,-10,16.7).lineTo(-10.6,17.4).lineTo(-10.1,16.7).lineTo(-10,16.4).lineTo(-7.6,12.4).lineTo(-7.6,12.3).lineTo(-4.7,7.4).lineTo(-4.7,7.3).lineTo(-4.6,7.1).curveTo(-3.3,4.6,-2.5,2.8).lineTo(-2.5,2.7).lineTo(-2.1,1.7).curveTo(-1.5,0.2,-1.3,-1.1).lineTo(-1.1,-2.5).curveTo(-1.2,-3.4,-1.4,-3.8).curveTo(-1.7,-4.4,-2.1,-4.7).lineTo(-2.7,-4.9).curveTo(-3,-5.1,-3.2,-5).curveTo(-4.2,-5.1,-6,-4.7).lineTo(-7.3,-4.3).lineTo(-7.4,-4.3).lineTo(-7.5,-4.3).lineTo(-8.6,-4).lineTo(-11.5,-3.2).lineTo(-14.8,-2.2).lineTo(-17.1,-1.6).lineTo(-17.2,-1.6).lineTo(-18.7,-1.4).lineTo(-18.7,-0.6).curveTo(-17.3,-0.7,-15.3,-1.2).lineTo(-14.6,-1.4).lineTo(-11.3,-2.4).lineTo(-11.2,-2.4).lineTo(-8.4,-3.4).lineTo(-7.3,-3.7).lineTo(-7.1,-3.7).curveTo(-5.6,-4.1,-5,-4.1).curveTo(-3,-4.2,-2.5,-2.4).curveTo(-2,-0.7,-3.4,2.4).curveTo(-3.8,3.4,-5.7,6.8).curveTo(-7.5,10,-8.4,11.3).lineTo(-8.6,11.7).curveTo(-10,13.8,-11.3,15.3).lineTo(-11.5,15.5).lineTo(-10.5,13.7).lineTo(-10.5,13.7).lineTo(-9.3,11.7).lineTo(-9,11).lineTo(-9.1,10.9).lineTo(-9.5,11.6).lineTo(-9.5,11.6).lineTo(-10.7,13.6).lineTo(-11.9,15.6).lineTo(-15.1,20.9).curveTo(-17.1,24.3,-18.6,27.7).lineTo(-18.8,28.4).curveTo(-20.6,32.8,-20.9,36.5).curveTo(-21.1,38.6,-20.8,40.6).lineTo(-20.6,41.6).lineTo(-20.3,42.5).curveTo(-20.2,42.9,-19.8,43.3).lineTo(-19.9,43.3).lineTo(-19.6,43.7).lineTo(-19.6,43.8).lineTo(-19.4,44.1).lineTo(-19.3,44.1).curveTo(-18.8,44.6,-17.9,44.9).curveTo(-17.2,45.1,-16.1,45).lineTo(-14.2,44.7).lineTo(-12.3,44.1).lineTo(-8.6,42.4).lineTo(-5,40.6).lineTo(-4.8,40.5).lineTo(-4.7,40.6).lineTo(-4.6,40.6).lineTo(-4.5,40.7).lineTo(-4.5,40.8).lineTo(-4.5,40.9).lineTo(-4.6,41).lineTo(-4.6,41).lineTo(-4.7,41).lineTo(-4.7,41.1).lineTo(-4.8,41.2).lineTo(-8,43.3).lineTo(-8.1,43.3).lineTo(-9.1,43.9).lineTo(-10.5,44.7).lineTo(-10.2,45.2).lineTo(-10.2,45.2).lineTo(-8.7,44.3).lineTo(-3.1,41.4).lineTo(5.2,37.9).lineTo(5.4,37.8).curveTo(13.2,35.8,22.7,39).curveTo(17.3,40.6,12.2,43.7).curveTo(6.3,47.3,0.8,52.8).lineTo(0.3,53.3).lineTo(0.2,53.3).lineTo(-5.3,57.9).curveTo(-9.1,61.3,-11,62.7).curveTo(-12.4,63.8,-14,64.8).curveTo(-15.7,65.7,-17.6,66.2).lineTo(-21.3,66.7).lineTo(-21.3,66.7).lineTo(-22.6,66.7).lineTo(-25.1,66.6).closePath().moveTo(-23.1,37.9).curveTo(-23,40,-22.5,41.9).lineTo(-22.4,42.2).lineTo(-22.3,42.5).lineTo(-22.3,42.5).lineTo(-22.2,42.6).lineTo(-22,43.2).lineTo(-21.9,43.2).lineTo(-21.9,43.2).lineTo(-22.5,40.9).curveTo(-22.9,38.6,-22.7,36.3).lineTo(-23.1,36.3).lineTo(-23.1,37.9).closePath().moveTo(-23.8,42.9).lineTo(-23.8,43).lineTo(-23.8,43).lineTo(-23.8,42.9).lineTo(-23.8,42.9).closePath().moveTo(-4.9,41).lineTo(-4.9,41).lineTo(-4.8,40.9).closePath().moveTo(9.3,39.7).lineTo(9.3,38.6).lineTo(9,38.7).lineTo(9,38.7).closePath().moveTo(17,39.3).lineTo(17.1,39.3).lineTo(17,39.2).curveTo(16.9,39.3,17,39.3).closePath().moveTo(-25.4,14.4).lineTo(-25.4,14.5).lineTo(-25.3,14.5).lineTo(-25.4,14.4).lineTo(-25.4,14.4).closePath().moveTo(-31.9,-1.6).lineTo(-31.5,-1.5).curveTo(-30.8,-3.2,-29.8,-5.2).lineTo(-30.1,-5.4).curveTo(-31.1,-3.5,-31.9,-1.6).closePath().moveTo(-7.1,-2.4).lineTo(-6.9,-2.5).lineTo(-7,-2.7).lineTo(-7.1,-2.7).lineTo(-7.1,-2.7).closePath().moveTo(-25.7,-12.5).lineTo(-25.8,-12.4).lineTo(-27.4,-9.9).lineTo(-27.5,-9.8).lineTo(-27.3,-9.7).lineTo(-27.2,-9.8).lineTo(-25.5,-12.3).curveTo(-24,-14.6,-22.1,-16.8).lineTo(-22.3,-16.9).curveTo(-24.1,-14.7,-25.7,-12.5).closePath().moveTo(4.7,-46.9).lineTo(4.7,-46.9).lineTo(4.8,-47).lineTo(4.7,-46.9).closePath().moveTo(11,45.4).lineTo(10.8,45.3).lineTo(11.1,45.4).closePath();
	this.shape_2.setTransform(41.0929,3.4833);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(5).to({_off:false},0).wait(315));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.5,-63.2,77.2,133.5);


(lib.Symbol74 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.gun();
	this.instance.setTransform(0,-114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol74, new cjs.Rectangle(0,-114.5,87,229), null);


(lib.Symbol72 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.skeleton();
	this.instance.setTransform(0,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol72, new cjs.Rectangle(0,-45,118,90), null);


(lib.Symbol70 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("rgba(0,0,0,0.169)").beginStroke().moveTo(-50,23).curveTo(-59.6,23,-66.3,16.3).curveTo(-73,9.6,-73,0).curveTo(-73,-9.5,-66.3,-16.3).curveTo(-59.6,-23,-50,-23).lineTo(50,-23).curveTo(59.5,-23,66.2,-16.3).curveTo(73,-9.5,73,0).curveTo(73,9.6,66.2,16.3).curveTo(59.5,23,50,23).closePath();
	this.shape.setTransform(73,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol70, new cjs.Rectangle(0,-23,146,46), null);


(lib.Symbol69 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill().beginStroke("#FF6633").setStrokeStyle(2,1,1).moveTo(-50,-23).lineTo(50,-23).curveTo(59.6,-23,66.2,-16.3).curveTo(73,-9.6,73,0).curveTo(73,9.6,66.2,16.2).curveTo(59.6,23,50,23).lineTo(-50,23).curveTo(-59.5,23,-66.3,16.2).curveTo(-73,9.6,-73,0).curveTo(-73,-9.6,-66.3,-16.3).curveTo(-59.5,-23,-50,-23).closePath();
	this.shape.setTransform(73,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#CF0B0C").beginStroke().moveTo(-50,23).curveTo(-59.6,23,-66.3,16.3).curveTo(-73,9.6,-73,0).curveTo(-73,-9.5,-66.3,-16.3).curveTo(-59.6,-23,-50,-23).lineTo(50,-23).curveTo(59.5,-23,66.2,-16.3).curveTo(73,-9.5,73,0).curveTo(73,9.6,66.2,16.3).curveTo(59.5,23,50,23).closePath();
	this.shape_1.setTransform(73,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol69, new cjs.Rectangle(-1,-24,148,48), null);


(lib.Symbol68copy2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#996600").beginStroke().moveTo(-0.8,0.7).curveTo(-1,0.5,-1,0.1).curveTo(-1,-0.4,-0.7,-0.7).curveTo(-0.4,-1,0.1,-1).curveTo(0.5,-1,0.8,-0.8).curveTo(1,-0.5,1,-0.1).curveTo(1,0.4,0.7,0.7).curveTo(0.4,1,-0.1,1).curveTo(-0.5,1,-0.8,0.7).closePath();
	this.shape.setTransform(38.225,18.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#996600").beginStroke().moveTo(-1.4,2.2).curveTo(-2,2,-2.3,1.5).curveTo(-2.7,0.9,-2.7,0.3).curveTo(-2.7,-0.5,-2.3,-1.2).curveTo(-1.9,-1.8,-1.2,-2.2).curveTo(-0.5,-2.5,0.4,-2.5).curveTo(1.2,-2.5,1.8,-2.2).curveTo(2.4,-1.8,2.7,-1.2).lineTo(1.2,-0.5).curveTo(0.9,-1.2,0.3,-1.2).curveTo(-0.2,-1.2,-0.6,-0.8).curveTo(-0.9,-0.4,-0.9,0.2).curveTo(-0.9,0.6,-0.7,0.9).curveTo(-0.4,1.1,0,1.1).curveTo(0.4,1.1,0.6,1).curveTo(0.9,0.8,1.1,0.5).lineTo(2.3,1.2).curveTo(2,1.8,1.4,2.2).curveTo(0.7,2.5,-0.1,2.5).curveTo(-0.9,2.5,-1.4,2.2).closePath();
	this.shape_1.setTransform(34.575,17.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#996600").beginStroke().moveTo(-1.5,2.2).curveTo(-2.1,2,-2.4,1.5).curveTo(-2.7,1,-2.7,0.3).curveTo(-2.7,-0.5,-2.3,-1.2).curveTo(-1.9,-1.8,-1.3,-2.2).curveTo(-0.6,-2.5,0.3,-2.5).curveTo(1,-2.5,1.5,-2.3).curveTo(2.1,-2,2.4,-1.5).curveTo(2.7,-1,2.7,-0.4).lineTo(2.6,0.4).lineTo(-1,0.4).curveTo(-0.9,1.2,0.1,1.2).lineTo(0.7,1.1).lineTo(1.3,0.8).lineTo(2,1.9).curveTo(1.1,2.5,-0.1,2.5).curveTo(-0.9,2.5,-1.5,2.2).closePath().moveTo(-0.5,-1.1).curveTo(-0.8,-0.9,-0.9,-0.5).lineTo(1.1,-0.5).curveTo(1.1,-0.9,0.8,-1.1).curveTo(0.6,-1.3,0.2,-1.3).curveTo(-0.2,-1.3,-0.5,-1.1).closePath();
	this.shape_2.setTransform(28.875,17.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#996600").beginStroke().moveTo(1.1,2.4).lineTo(1.6,-0.1).lineTo(-0,2).lineTo(-0.8,2).lineTo(-1.6,-0.2).lineTo(-2.1,2.4).lineTo(-3.6,2.4).lineTo(-2.7,-2.4).lineTo(-0.9,-2.4).lineTo(-0,0.1).lineTo(2,-2.4).lineTo(3.6,-2.4).lineTo(2.6,2.4).closePath();
	this.shape_3.setTransform(22.225,17.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#996600").beginStroke().moveTo(-3.1,4.2).lineTo(1.5,-4.2).lineTo(3.1,-4.2).lineTo(-1.5,4.2).closePath();
	this.shape_4.setTransform(16.85,16.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#996600").beginStroke().moveTo(-2.3,8.5).lineTo(-1.9,6.5).curveTo(-3.2,6.4,-4.3,6).curveTo(-5.4,5.7,-6.1,5.2).lineTo(-4.7,2.5).curveTo(-3.8,3.2,-2.7,3.4).curveTo(-1.6,3.8,-0.5,3.8).curveTo(0.5,3.8,1.1,3.5).curveTo(1.7,3.2,1.7,2.6).curveTo(1.6,2.2,1.1,2).lineTo(-0.5,1.4).curveTo(-1.7,1.1,-2.5,0.7).curveTo(-3.3,0.4,-3.9,-0.3).curveTo(-4.5,-0.9,-4.5,-2.1).curveTo(-4.5,-3.9,-3.1,-5.1).curveTo(-1.7,-6.3,0.7,-6.5).lineTo(1.1,-8.5).lineTo(3.2,-8.5).lineTo(2.9,-6.5).curveTo(4.8,-6.2,6.1,-5.5).lineTo(4.8,-2.8).curveTo(4.1,-3.3,3.2,-3.6).curveTo(2.3,-3.8,1.3,-3.8).curveTo(0.3,-3.8,-0.3,-3.4).curveTo(-0.9,-3.1,-0.9,-2.5).curveTo(-0.9,-2.1,-0.4,-1.9).lineTo(1.2,-1.3).curveTo(2.5,-1,3.2,-0.6).curveTo(4,-0.3,4.7,0.3).curveTo(5.2,1,5.2,2.1).curveTo(5.2,3.8,3.9,5).curveTo(2.6,6.3,0.2,6.5).lineTo(-0.1,8.5).closePath();
	this.shape_5.setTransform(41.15,1.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#996600").beginStroke().moveTo(-3.7,6.1).curveTo(-4.9,5.7,-5.9,5).lineTo(-4.2,2.5).curveTo(-3.6,3,-2.7,3.3).curveTo(-1.8,3.5,-0.9,3.5).curveTo(0.2,3.5,0.8,3.2).curveTo(1.3,2.8,1.3,2.1).curveTo(1.4,1.5,0.9,1.2).curveTo(0.4,0.9,-0.7,0.9).lineTo(-4.3,0.9).lineTo(-2.1,-6.4).lineTo(5.8,-6.4).lineTo(5.3,-3.7).lineTo(0.2,-3.7).lineTo(-0.3,-1.8).lineTo(0.2,-1.8).curveTo(2.5,-1.8,3.7,-0.9).curveTo(4.9,-0,4.9,1.7).curveTo(5,3.1,4.2,4.2).curveTo(3.4,5.3,2,5.8).curveTo(0.7,6.4,-1.1,6.4).curveTo(-2.5,6.4,-3.7,6.1).closePath();
	this.shape_6.setTransform(28.75,1.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#996600").beginStroke().moveTo(-1.6,1.5).curveTo(-2,1,-2,0.2).curveTo(-2,-0.8,-1.5,-1.4).curveTo(-0.8,-2,0.1,-2).curveTo(1,-2,1.5,-1.5).curveTo(2.1,-1,2,-0.1).curveTo(2,0.8,1.4,1.4).curveTo(0.7,2,-0.1,2).curveTo(-0.9,2,-1.6,1.5).closePath();
	this.shape_7.setTransform(20.2,5.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#996600").beginStroke().moveTo(-5.1,6.3).lineTo(0.9,-3.4).lineTo(-2.2,-3.4).lineTo(-2.7,-1.5).lineTo(-5.7,-1.5).lineTo(-4.8,-6.3).lineTo(5.7,-6.3).lineTo(5.2,-4).lineTo(-1.2,6.3).closePath();
	this.shape_8.setTransform(16.55,1.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#996600").beginStroke().moveTo(-3.8,6.1).curveTo(-5,5.7,-6,5).lineTo(-4.3,2.5).curveTo(-3.7,3,-2.7,3.3).curveTo(-1.9,3.5,-1,3.5).curveTo(0.1,3.5,0.7,3.2).curveTo(1.3,2.8,1.3,2.1).curveTo(1.3,1,-0.4,1).lineTo(-1.9,1).lineTo(-1.5,-1.2).lineTo(1.2,-3.7).lineTo(-3.7,-3.7).lineTo(-3.2,-6.4).lineTo(5.9,-6.4).lineTo(5.6,-4.2).lineTo(2.3,-1.3).curveTo(3.6,-1,4.2,-0.1).curveTo(4.9,0.7,4.9,1.9).curveTo(4.9,3.2,4.1,4.2).curveTo(3.3,5.2,1.9,5.8).curveTo(0.5,6.4,-1.2,6.4).curveTo(-2.6,6.4,-3.8,6.1).closePath();
	this.shape_9.setTransform(5.25,1.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol68copy2, new cjs.Rectangle(-2,-14.4,52.2,38.7), null);


(lib.Symbol68copy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#996600").beginStroke().moveTo(-0.8,0.7).curveTo(-1,0.5,-1,0.1).curveTo(-1,-0.4,-0.7,-0.7).curveTo(-0.4,-1,0.1,-1).curveTo(0.5,-1,0.8,-0.8).curveTo(1,-0.5,1,-0.1).curveTo(1,0.4,0.7,0.7).curveTo(0.4,1,-0.1,1).curveTo(-0.5,1,-0.8,0.7).closePath();
	this.shape.setTransform(38.225,18.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#996600").beginStroke().moveTo(-1.4,2.2).curveTo(-2,2,-2.3,1.5).curveTo(-2.7,0.9,-2.7,0.3).curveTo(-2.7,-0.5,-2.3,-1.2).curveTo(-1.9,-1.8,-1.2,-2.2).curveTo(-0.5,-2.5,0.4,-2.5).curveTo(1.2,-2.5,1.8,-2.2).curveTo(2.4,-1.8,2.7,-1.2).lineTo(1.2,-0.5).curveTo(0.9,-1.2,0.3,-1.2).curveTo(-0.2,-1.2,-0.6,-0.8).curveTo(-0.9,-0.4,-0.9,0.2).curveTo(-0.9,0.6,-0.7,0.9).curveTo(-0.4,1.1,0,1.1).curveTo(0.4,1.1,0.6,1).curveTo(0.9,0.8,1.1,0.5).lineTo(2.3,1.2).curveTo(2,1.8,1.4,2.2).curveTo(0.7,2.5,-0.1,2.5).curveTo(-0.9,2.5,-1.4,2.2).closePath();
	this.shape_1.setTransform(34.575,17.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#996600").beginStroke().moveTo(-1.5,2.2).curveTo(-2.1,2,-2.4,1.5).curveTo(-2.7,1,-2.7,0.3).curveTo(-2.7,-0.5,-2.3,-1.2).curveTo(-1.9,-1.8,-1.3,-2.2).curveTo(-0.6,-2.5,0.3,-2.5).curveTo(1,-2.5,1.5,-2.3).curveTo(2.1,-2,2.4,-1.5).curveTo(2.7,-1,2.7,-0.4).lineTo(2.6,0.4).lineTo(-1,0.4).curveTo(-0.9,1.2,0.1,1.2).lineTo(0.7,1.1).lineTo(1.3,0.8).lineTo(2,1.9).curveTo(1.1,2.5,-0.1,2.5).curveTo(-0.9,2.5,-1.5,2.2).closePath().moveTo(-0.5,-1.1).curveTo(-0.8,-0.9,-0.9,-0.5).lineTo(1.1,-0.5).curveTo(1.1,-0.9,0.8,-1.1).curveTo(0.6,-1.3,0.2,-1.3).curveTo(-0.2,-1.3,-0.5,-1.1).closePath();
	this.shape_2.setTransform(28.875,17.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#996600").beginStroke().moveTo(1.1,2.4).lineTo(1.6,-0.1).lineTo(-0,2).lineTo(-0.8,2).lineTo(-1.6,-0.2).lineTo(-2.1,2.4).lineTo(-3.6,2.4).lineTo(-2.7,-2.4).lineTo(-0.9,-2.4).lineTo(-0,0.1).lineTo(2,-2.4).lineTo(3.6,-2.4).lineTo(2.6,2.4).closePath();
	this.shape_3.setTransform(22.225,17.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#996600").beginStroke().moveTo(-3.1,4.2).lineTo(1.5,-4.2).lineTo(3.1,-4.2).lineTo(-1.5,4.2).closePath();
	this.shape_4.setTransform(16.85,16.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#996600").beginStroke().moveTo(-2.3,8.5).lineTo(-1.9,6.5).curveTo(-3.2,6.4,-4.3,6).curveTo(-5.4,5.7,-6.1,5.2).lineTo(-4.7,2.5).curveTo(-3.8,3.2,-2.7,3.4).curveTo(-1.6,3.8,-0.5,3.8).curveTo(0.5,3.8,1.1,3.5).curveTo(1.7,3.2,1.6,2.6).curveTo(1.6,2.2,1.2,2).lineTo(-0.4,1.4).curveTo(-1.7,1.1,-2.5,0.7).curveTo(-3.3,0.4,-3.9,-0.3).curveTo(-4.5,-0.9,-4.5,-2.1).curveTo(-4.5,-3.9,-3.1,-5.1).curveTo(-1.7,-6.3,0.7,-6.5).lineTo(1.1,-8.5).lineTo(3.2,-8.5).lineTo(2.9,-6.5).curveTo(4.8,-6.2,6.1,-5.5).lineTo(4.8,-2.8).curveTo(4.1,-3.3,3.2,-3.6).curveTo(2.3,-3.8,1.4,-3.8).curveTo(0.3,-3.8,-0.3,-3.4).curveTo(-0.9,-3.1,-0.9,-2.5).curveTo(-0.9,-2.1,-0.4,-1.9).lineTo(1.3,-1.3).curveTo(2.4,-1,3.2,-0.6).curveTo(4.1,-0.3,4.7,0.3).curveTo(5.2,1,5.2,2.1).curveTo(5.2,3.8,3.9,5).curveTo(2.5,6.3,0.3,6.5).lineTo(-0.2,8.5).closePath();
	this.shape_5.setTransform(34.1,1.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#996600").beginStroke().moveTo(-4.2,6.3).curveTo(-5.2,6.1,-5.8,5.7).lineTo(-4.2,3.1).curveTo(-3.2,3.7,-1.8,3.7).curveTo(-0.3,3.7,0.5,3).curveTo(1.4,2.2,1.9,0.9).curveTo(0.9,1.8,-0.6,1.7).curveTo(-1.7,1.8,-2.7,1.3).curveTo(-3.6,0.9,-4.2,0).curveTo(-4.8,-0.8,-4.8,-1.9).curveTo(-4.7,-3.3,-4.1,-4.3).curveTo(-3.4,-5.4,-2.2,-6).curveTo(-1,-6.5,0.5,-6.6).curveTo(2.1,-6.6,3.3,-5.9).curveTo(4.4,-5.4,5.1,-4.2).curveTo(5.8,-3.1,5.8,-1.4).curveTo(5.8,0.5,4.9,2.3).curveTo(4.1,4.1,2.3,5.3).curveTo(0.5,6.6,-2.1,6.6).curveTo(-3.1,6.6,-4.2,6.3).closePath().moveTo(-0.7,-3.6).curveTo(-1.3,-3.1,-1.3,-2.2).curveTo(-1.3,-1.6,-0.8,-1.2).curveTo(-0.3,-0.9,0.3,-0.9).curveTo(1.2,-0.8,1.7,-1.3).curveTo(2.2,-1.7,2.2,-2.5).curveTo(2.2,-3.1,1.8,-3.6).curveTo(1.3,-4,0.6,-4).curveTo(-0.2,-4,-0.7,-3.6).closePath();
	this.shape_6.setTransform(21.35,1.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#996600").beginStroke().moveTo(-0.1,6.3).lineTo(0.4,3.9).lineTo(-6.3,3.9).lineTo(-5.8,1.5).lineTo(1.3,-6.3).lineTo(5.1,-6.3).lineTo(-1.4,1.1).lineTo(1.1,1.1).lineTo(1.5,-1.1).lineTo(4.8,-1.1).lineTo(4.4,1.1).lineTo(6.3,1.1).lineTo(5.7,3.9).lineTo(3.8,3.9).lineTo(3.4,6.3).closePath();
	this.shape_7.setTransform(8.275,1.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol68copy, new cjs.Rectangle(0,-14.4,43.1,38.7), null);


(lib.Symbol68 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#996600").beginStroke().moveTo(-0.8,0.7).curveTo(-1,0.5,-1,0.1).curveTo(-1,-0.4,-0.7,-0.7).curveTo(-0.4,-1,0.1,-1).curveTo(0.5,-1,0.8,-0.8).curveTo(1,-0.5,1,-0.1).curveTo(1,0.4,0.7,0.7).curveTo(0.4,1,-0.1,1).curveTo(-0.5,1,-0.8,0.7).closePath();
	this.shape.setTransform(38.225,18.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#996600").beginStroke().moveTo(-1.4,2.2).curveTo(-2,2,-2.3,1.5).curveTo(-2.7,0.9,-2.7,0.3).curveTo(-2.7,-0.5,-2.3,-1.2).curveTo(-1.9,-1.8,-1.2,-2.2).curveTo(-0.5,-2.5,0.4,-2.5).curveTo(1.2,-2.5,1.8,-2.2).curveTo(2.4,-1.8,2.7,-1.2).lineTo(1.2,-0.5).curveTo(0.9,-1.2,0.3,-1.2).curveTo(-0.2,-1.2,-0.6,-0.8).curveTo(-0.9,-0.4,-0.9,0.2).curveTo(-0.9,0.6,-0.7,0.9).curveTo(-0.4,1.1,0,1.1).curveTo(0.4,1.1,0.6,1).curveTo(0.9,0.8,1.1,0.5).lineTo(2.3,1.2).curveTo(2,1.8,1.4,2.2).curveTo(0.7,2.5,-0.1,2.5).curveTo(-0.9,2.5,-1.4,2.2).closePath();
	this.shape_1.setTransform(34.575,17.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#996600").beginStroke().moveTo(-1.5,2.2).curveTo(-2.1,2,-2.4,1.5).curveTo(-2.7,1,-2.7,0.3).curveTo(-2.7,-0.5,-2.3,-1.2).curveTo(-1.9,-1.8,-1.3,-2.2).curveTo(-0.6,-2.5,0.3,-2.5).curveTo(1,-2.5,1.5,-2.3).curveTo(2.1,-2,2.4,-1.5).curveTo(2.7,-1,2.7,-0.4).lineTo(2.6,0.4).lineTo(-1,0.4).curveTo(-0.9,1.2,0.1,1.2).lineTo(0.7,1.1).lineTo(1.3,0.8).lineTo(2,1.9).curveTo(1.1,2.5,-0.1,2.5).curveTo(-0.9,2.5,-1.5,2.2).closePath().moveTo(-0.5,-1.1).curveTo(-0.8,-0.9,-0.9,-0.5).lineTo(1.1,-0.5).curveTo(1.1,-0.9,0.8,-1.1).curveTo(0.6,-1.3,0.2,-1.3).curveTo(-0.2,-1.3,-0.5,-1.1).closePath();
	this.shape_2.setTransform(28.875,17.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#996600").beginStroke().moveTo(1.1,2.4).lineTo(1.6,-0.1).lineTo(-0,2).lineTo(-0.8,2).lineTo(-1.6,-0.2).lineTo(-2.1,2.4).lineTo(-3.6,2.4).lineTo(-2.7,-2.4).lineTo(-0.9,-2.4).lineTo(-0,0.1).lineTo(2,-2.4).lineTo(3.6,-2.4).lineTo(2.6,2.4).closePath();
	this.shape_3.setTransform(22.225,17.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#996600").beginStroke().moveTo(-3.1,4.2).lineTo(1.5,-4.2).lineTo(3.1,-4.2).lineTo(-1.5,4.2).closePath();
	this.shape_4.setTransform(16.85,16.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#996600").beginStroke().moveTo(-2.3,8.5).lineTo(-1.9,6.5).curveTo(-3.2,6.4,-4.3,6).curveTo(-5.4,5.7,-6.1,5.2).lineTo(-4.7,2.5).curveTo(-3.8,3.2,-2.7,3.4).curveTo(-1.6,3.8,-0.5,3.8).curveTo(0.5,3.8,1.1,3.5).curveTo(1.7,3.2,1.6,2.6).curveTo(1.6,2.2,1.2,2).lineTo(-0.4,1.4).curveTo(-1.7,1.1,-2.5,0.7).curveTo(-3.3,0.4,-3.9,-0.3).curveTo(-4.5,-0.9,-4.5,-2.1).curveTo(-4.5,-3.9,-3.1,-5.1).curveTo(-1.7,-6.3,0.7,-6.5).lineTo(1.1,-8.5).lineTo(3.2,-8.5).lineTo(2.9,-6.5).curveTo(4.8,-6.2,6.1,-5.5).lineTo(4.8,-2.8).curveTo(4.1,-3.3,3.2,-3.6).curveTo(2.3,-3.8,1.4,-3.8).curveTo(0.3,-3.8,-0.3,-3.4).curveTo(-0.9,-3.1,-0.9,-2.5).curveTo(-0.9,-2.1,-0.4,-1.9).lineTo(1.3,-1.3).curveTo(2.4,-1,3.2,-0.6).curveTo(4.1,-0.3,4.7,0.3).curveTo(5.2,1,5.2,2.1).curveTo(5.2,3.8,3.9,5).curveTo(2.5,6.3,0.3,6.5).lineTo(-0.2,8.5).closePath();
	this.shape_5.setTransform(32.3,1.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#996600").beginStroke().moveTo(-5.6,6.4).lineTo(-5.2,4.2).lineTo(0.3,-0.1).curveTo(1.3,-0.8,1.7,-1.3).curveTo(2,-1.9,2,-2.4).curveTo(2,-2.9,1.6,-3.3).curveTo(1.2,-3.6,0.5,-3.6).curveTo(-0.2,-3.6,-0.8,-3.2).curveTo(-1.4,-2.9,-1.9,-2.3).lineTo(-4.3,-3.9).curveTo(-3.5,-5,-2.1,-5.7).curveTo(-0.7,-6.4,1,-6.4).curveTo(2.4,-6.4,3.4,-6).curveTo(4.4,-5.5,5.1,-4.7).curveTo(5.6,-3.9,5.6,-2.9).curveTo(5.7,-1.7,5,-0.7).curveTo(4.4,0.3,2.7,1.5).lineTo(0,3.6).lineTo(4.7,3.6).lineTo(4.2,6.4).closePath();
	this.shape_6.setTransform(19.85,1.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#996600").beginStroke().moveTo(-3.3,5.9).curveTo(-4.5,5.4,-5.1,4.2).curveTo(-5.8,3.1,-5.8,1.4).curveTo(-5.8,-0.5,-5,-2.3).curveTo(-4.1,-4.2,-2.3,-5.4).curveTo(-0.6,-6.5,2,-6.6).curveTo(3.2,-6.5,4.2,-6.3).curveTo(5.1,-6,5.8,-5.7).lineTo(4.2,-3.1).curveTo(3.2,-3.7,1.8,-3.8).curveTo(0.4,-3.7,-0.6,-3).curveTo(-1.4,-2.2,-1.8,-0.9).curveTo(-0.8,-1.7,0.8,-1.7).curveTo(1.8,-1.7,2.7,-1.3).curveTo(3.7,-0.8,4.2,-0.1).curveTo(4.8,0.8,4.7,1.9).curveTo(4.8,3.3,4,4.3).curveTo(3.4,5.4,2.2,6).curveTo(1,6.6,-0.6,6.6).curveTo(-2.1,6.5,-3.3,5.9).closePath().moveTo(-1.7,1.3).curveTo(-2.2,1.8,-2.2,2.5).curveTo(-2.2,3.2,-1.8,3.6).curveTo(-1.3,4,-0.6,4).curveTo(0.2,4,0.7,3.5).curveTo(1.3,3,1.2,2.3).curveTo(1.3,1.6,0.8,1.2).curveTo(0.3,0.8,-0.3,0.8).curveTo(-1.2,0.8,-1.7,1.3).closePath();
	this.shape_7.setTransform(8.5,1.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol68, new cjs.Rectangle(0,-14.4,42,38.7), null);


(lib.Symbol66 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.kalendar();
	this.instance.setTransform(0,-41.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol66, new cjs.Rectangle(0,-41.5,113,83), null);


(lib.Symbol26 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.icon2();
	this.instance.setTransform(0,-25.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,-25.5,51,51), null);


(lib.Symbol25 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.icon1();
	this.instance.setTransform(0,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,-25,50,50), null);


(lib.Symbol24 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.9,8.1).lineTo(1.9,1.7).lineTo(-2.6,8.1).lineTo(-5.1,8.1).lineTo(-5.1,-4.6).lineTo(-1.9,-4.6).lineTo(-1.9,1.8).lineTo(2.6,-4.6).lineTo(5.1,-4.6).lineTo(5.1,8.1).closePath().moveTo(-2.9,-5.5).lineTo(-2.9,-8.1).lineTo(2.9,-8.1).lineTo(2.9,-5.5).closePath();
	this.shape.setTransform(64.725,-1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(3.6,6.3).lineTo(3.6,-6.3).lineTo(6.8,-6.3).lineTo(6.8,6.3).closePath().moveTo(-6.8,6.3).lineTo(-6.8,-6.3).lineTo(-3.6,-6.3).lineTo(-3.6,-2.5).lineTo(-1.9,-2.5).curveTo(-0,-2.5,1.3,-1.3).curveTo(2.6,0,2.6,1.9).curveTo(2.6,3.8,1.3,5).curveTo(-0,6.3,-1.9,6.3).closePath().moveTo(-3.6,3.2).lineTo(-1.9,3.2).curveTo(-1.4,3.2,-1,2.9).curveTo(-0.7,2.5,-0.7,1.9).curveTo(-0.7,1.3,-1,1).curveTo(-1.4,0.5,-1.9,0.5).lineTo(-3.6,0.5).closePath();
	this.shape_1.setTransform(49.825,0.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.8,6.3).lineTo(-4.8,-6.3).lineTo(0.2,-6.3).curveTo(2.1,-6.3,3.2,-5.3).curveTo(4.3,-4.4,4.3,-2.7).curveTo(4.3,-1.2,3.2,-0.2).curveTo(4.8,0.7,4.8,2.6).curveTo(4.8,4.3,3.6,5.3).curveTo(2.4,6.3,0.5,6.3).closePath().moveTo(-1.6,3.4).lineTo(0.4,3.4).curveTo(0.9,3.4,1.2,3.1).curveTo(1.5,2.8,1.5,2.3).curveTo(1.5,1.9,1.2,1.6).curveTo(0.9,1.3,0.4,1.3).lineTo(-1.6,1.3).closePath().moveTo(-1.6,-1.4).lineTo(0.1,-1.4).curveTo(0.5,-1.5,0.8,-1.7).curveTo(1.1,-2,1.1,-2.4).curveTo(1.1,-2.9,0.8,-3.2).curveTo(0.5,-3.4,0.1,-3.4).lineTo(-1.6,-3.4).closePath();
	this.shape_2.setTransform(35.925,0.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.7,4.7).curveTo(-6.6,2.8,-6.6,-0).curveTo(-6.6,-2.7,-4.7,-4.7).curveTo(-2.8,-6.5,-0,-6.6).curveTo(2.8,-6.5,4.7,-4.7).curveTo(6.6,-2.7,6.6,-0).curveTo(6.6,2.8,4.7,4.7).curveTo(2.8,6.6,-0,6.6).curveTo(-2.8,6.6,-4.7,4.7).closePath().moveTo(-2.4,-2.4).curveTo(-3.4,-1.5,-3.4,-0).curveTo(-3.4,1.5,-2.4,2.4).curveTo(-1.4,3.4,-0,3.4).curveTo(1.4,3.4,2.4,2.4).curveTo(3.4,1.5,3.4,-0).curveTo(3.4,-1.5,2.4,-2.4).curveTo(1.4,-3.4,-0,-3.4).curveTo(-1.4,-3.4,-2.4,-2.4).closePath();
	this.shape_3.setTransform(22.05,0.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.8,6.3).lineTo(1.8,1.4).lineTo(-1.8,1.4).lineTo(-1.8,6.3).lineTo(-5,6.3).lineTo(-5,-6.3).lineTo(-1.8,-6.3).lineTo(-1.8,-1.6).lineTo(1.8,-1.6).lineTo(1.8,-6.3).lineTo(5,-6.3).lineTo(5,6.3).closePath();
	this.shape_4.setTransform(7.975,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,-13.3,74,26.700000000000003), null);


(lib.Symbol23 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.9,8.1).lineTo(1.9,1.7).lineTo(-2.6,8.1).lineTo(-5.1,8.1).lineTo(-5.1,-4.6).lineTo(-1.9,-4.6).lineTo(-1.9,1.8).lineTo(2.6,-4.6).lineTo(5.1,-4.6).lineTo(5.1,8.1).closePath().moveTo(-2.9,-5.5).lineTo(-2.9,-8.1).lineTo(2.9,-8.1).lineTo(2.9,-5.5).closePath();
	this.shape.setTransform(271.375,-1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.9,6.3).lineTo(1.9,-0.1).lineTo(-2.6,6.3).lineTo(-5.1,6.3).lineTo(-5.1,-6.3).lineTo(-1.9,-6.3).lineTo(-1.9,0.1).lineTo(2.6,-6.3).lineTo(5.1,-6.3).lineTo(5.1,6.3).closePath();
	this.shape_1.setTransform(258.225,0.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.4,7.5).lineTo(2.4,5.1).lineTo(-5.7,5.1).lineTo(-5.7,-7.5).lineTo(-2.3,-7.5).lineTo(-2.3,2).lineTo(0.9,2).lineTo(0.9,-7.5).lineTo(4.2,-7.5).lineTo(4.2,2).lineTo(5.7,2).lineTo(5.7,7.5).closePath();
	this.shape_2.setTransform(245.15,1.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.9,6.3).lineTo(1.9,-0.1).lineTo(-2.6,6.3).lineTo(-5.1,6.3).lineTo(-5.1,-6.3).lineTo(-1.9,-6.3).lineTo(-1.9,0.1).lineTo(2.6,-6.3).lineTo(5.1,-6.3).lineTo(5.1,6.3).closePath();
	this.shape_3.setTransform(231.425,0.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.8,3.6).lineTo(-2,2.1).curveTo(-1.5,3.5,0.1,3.5).curveTo(1.6,3.6,1.6,2.4).curveTo(1.6,1.4,0.4,1.3).lineTo(-1.5,1.3).lineTo(-1.5,-1.5).lineTo(-0.3,-1.5).curveTo(1.2,-1.5,1.2,-2.5).curveTo(1.2,-3.6,-0.1,-3.5).curveTo(-1.4,-3.5,-1.9,-2.3).lineTo(-4.6,-3.9).curveTo(-4,-5.1,-2.9,-5.9).curveTo(-1.7,-6.6,-0.1,-6.6).curveTo(1.9,-6.5,3.1,-5.6).curveTo(4.4,-4.5,4.4,-2.8).curveTo(4.4,-1.2,3.1,-0.2).curveTo(4.8,0.7,4.8,2.8).curveTo(4.8,4.5,3.5,5.6).curveTo(2.2,6.5,0.1,6.6).curveTo(-3.6,6.5,-4.8,3.6).closePath();
	this.shape_4.setTransform(219.225,0.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.7,4.7).curveTo(-6.6,2.8,-6.6,-0).curveTo(-6.6,-2.7,-4.7,-4.7).curveTo(-2.8,-6.5,0,-6.6).curveTo(2.8,-6.5,4.7,-4.7).curveTo(6.6,-2.7,6.6,-0).curveTo(6.6,2.8,4.7,4.7).curveTo(2.7,6.6,0,6.6).curveTo(-2.8,6.6,-4.7,4.7).closePath().moveTo(-2.4,-2.4).curveTo(-3.4,-1.5,-3.4,-0).curveTo(-3.4,1.5,-2.4,2.4).curveTo(-1.5,3.4,0,3.4).curveTo(1.5,3.4,2.5,2.4).curveTo(3.4,1.5,3.4,-0).curveTo(3.4,-1.5,2.5,-2.4).curveTo(1.5,-3.4,0,-3.4).curveTo(-1.5,-3.4,-2.4,-2.4).closePath();
	this.shape_5.setTransform(206.15,0.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.6,6.3).lineTo(1.6,-3.2).lineTo(-1.6,-3.2).lineTo(-1.6,6.3).lineTo(-4.9,6.3).lineTo(-4.9,-6.3).lineTo(4.8,-6.3).lineTo(4.8,6.3).closePath();
	this.shape_6.setTransform(192.25,0.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.9,6.3).lineTo(1.9,-0.1).lineTo(-2.6,6.3).lineTo(-5.1,6.3).lineTo(-5.1,-6.3).lineTo(-1.9,-6.3).lineTo(-1.9,0.1).lineTo(2.6,-6.3).lineTo(5.1,-6.3).lineTo(5.1,6.3).closePath();
	this.shape_7.setTransform(174.225,0.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.6,6.3).lineTo(-2,0.6).lineTo(-2,6.3).lineTo(-5.2,6.3).lineTo(-5.2,-6.3).lineTo(-2,-6.3).lineTo(-2,-1).lineTo(1.4,-6.3).lineTo(5,-6.3).lineTo(1,-0.2).lineTo(5.2,6.3).closePath();
	this.shape_8.setTransform(162.025,0.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.7,6.3).lineTo(-4.7,-6.3).lineTo(0.2,-6.3).curveTo(2.1,-6.3,3.4,-5).curveTo(4.7,-3.8,4.7,-1.9).curveTo(4.7,0.1,3.4,1.3).curveTo(2.1,2.5,0.2,2.5).lineTo(-1.5,2.5).lineTo(-1.5,6.3).closePath().moveTo(-1.5,-0.5).lineTo(0.2,-0.5).curveTo(0.7,-0.6,1.1,-0.9).curveTo(1.5,-1.3,1.5,-1.9).curveTo(1.5,-2.5,1.1,-2.9).curveTo(0.7,-3.2,0.2,-3.2).lineTo(-1.5,-3.2).closePath();
	this.shape_9.setTransform(149.9,0.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4,6.3).lineTo(-4,-6.3).lineTo(4,-6.3).lineTo(4,-3.3).lineTo(-0.8,-3.3).lineTo(-0.8,-1.5).lineTo(3.5,-1.5).lineTo(3.5,1.4).lineTo(-0.8,1.4).lineTo(-0.8,3.3).lineTo(4,3.3).lineTo(4,6.3).closePath();
	this.shape_10.setTransform(138.6,0.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.8,6.3).lineTo(-4.8,-6.3).lineTo(0.2,-6.3).curveTo(2.1,-6.3,3.2,-5.3).curveTo(4.3,-4.4,4.3,-2.7).curveTo(4.3,-1.2,3.2,-0.2).curveTo(4.8,0.7,4.8,2.6).curveTo(4.8,4.3,3.6,5.3).curveTo(2.4,6.3,0.5,6.3).closePath().moveTo(-1.6,3.4).lineTo(0.4,3.4).curveTo(0.9,3.4,1.2,3.1).curveTo(1.5,2.8,1.5,2.3).curveTo(1.5,1.9,1.2,1.6).curveTo(0.9,1.3,0.4,1.3).lineTo(-1.6,1.3).closePath().moveTo(-1.6,-1.4).lineTo(0.1,-1.4).curveTo(0.5,-1.5,0.8,-1.7).curveTo(1.1,-2,1.1,-2.4).curveTo(1.1,-2.9,0.8,-3.2).curveTo(0.5,-3.4,0.1,-3.4).lineTo(-1.6,-3.4).closePath();
	this.shape_11.setTransform(127.475,0.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.7,4.7).curveTo(-6.6,2.8,-6.6,-0).curveTo(-6.6,-2.7,-4.7,-4.7).curveTo(-2.8,-6.5,-0,-6.6).curveTo(2.8,-6.5,4.7,-4.7).curveTo(6.6,-2.7,6.6,-0).curveTo(6.6,2.8,4.7,4.7).curveTo(2.7,6.6,-0,6.6).curveTo(-2.8,6.6,-4.7,4.7).closePath().moveTo(-2.4,-2.4).curveTo(-3.4,-1.5,-3.4,-0).curveTo(-3.4,1.5,-2.4,2.4).curveTo(-1.5,3.4,-0,3.4).curveTo(1.5,3.4,2.4,2.4).curveTo(3.4,1.5,3.4,-0).curveTo(3.4,-1.5,2.4,-2.4).curveTo(1.5,-3.4,-0,-3.4).curveTo(-1.5,-3.4,-2.4,-2.4).closePath();
	this.shape_12.setTransform(113.6,0.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.7,6.3).lineTo(-4.7,-6.3).lineTo(0.2,-6.3).curveTo(2.1,-6.3,3.4,-5).curveTo(4.7,-3.8,4.7,-1.9).curveTo(4.7,0.1,3.4,1.3).curveTo(2.1,2.5,0.2,2.5).lineTo(-1.5,2.5).lineTo(-1.5,6.3).closePath().moveTo(-1.5,-0.5).lineTo(0.2,-0.5).curveTo(0.7,-0.6,1.1,-0.9).curveTo(1.4,-1.3,1.5,-1.9).curveTo(1.4,-2.5,1.1,-2.9).curveTo(0.7,-3.2,0.2,-3.2).lineTo(-1.5,-3.2).closePath();
	this.shape_13.setTransform(100.6,0.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.6,6.3).lineTo(1.6,-3.2).lineTo(-1.6,-3.2).lineTo(-1.6,6.3).lineTo(-4.8,6.3).lineTo(-4.8,-6.3).lineTo(4.9,-6.3).lineTo(4.9,6.3).closePath();
	this.shape_14.setTransform(88.1,0.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.2,4.7).curveTo(-6,2.9,-6,-0).curveTo(-6,-2.8,-4.2,-4.7).curveTo(-2.3,-6.6,0.6,-6.6).curveTo(2.3,-6.5,3.7,-5.8).curveTo(5.2,-4.9,6,-3.6).lineTo(3.3,-2).curveTo(2.9,-2.7,2.1,-3.1).curveTo(1.5,-3.4,0.6,-3.4).curveTo(-0.9,-3.4,-1.9,-2.4).curveTo(-2.8,-1.5,-2.8,-0).curveTo(-2.8,1.5,-1.9,2.5).curveTo(-0.9,3.4,0.6,3.4).curveTo(1.5,3.4,2.1,3.1).curveTo(2.9,2.7,3.3,2).lineTo(6,3.6).curveTo(5.2,4.9,3.7,5.8).curveTo(2.3,6.5,0.6,6.6).curveTo(-2.2,6.6,-4.2,4.7).closePath();
	this.shape_15.setTransform(69.7,0.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.9,6.3).lineTo(1.9,-0.1).lineTo(-2.6,6.3).lineTo(-5.1,6.3).lineTo(-5.1,-6.3).lineTo(-1.9,-6.3).lineTo(-1.9,0.1).lineTo(2.6,-6.3).lineTo(5.1,-6.3).lineTo(5.1,6.3).closePath();
	this.shape_16.setTransform(56.125,0.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.8,6.3).lineTo(-4.8,-6.3).lineTo(0.2,-6.3).curveTo(2.1,-6.3,3.2,-5.3).curveTo(4.3,-4.4,4.3,-2.7).curveTo(4.3,-1.2,3.2,-0.2).curveTo(4.8,0.7,4.8,2.6).curveTo(4.8,4.3,3.6,5.3).curveTo(2.4,6.3,0.5,6.3).closePath().moveTo(-1.6,3.4).lineTo(0.4,3.4).curveTo(0.9,3.4,1.2,3.1).curveTo(1.5,2.8,1.5,2.3).curveTo(1.5,1.9,1.2,1.6).curveTo(0.9,1.3,0.4,1.3).lineTo(-1.6,1.3).closePath().moveTo(-1.6,-1.4).lineTo(0.1,-1.4).curveTo(0.5,-1.5,0.8,-1.7).curveTo(1.1,-2,1.1,-2.4).curveTo(1.1,-2.9,0.8,-3.2).curveTo(0.5,-3.4,0.1,-3.4).lineTo(-1.6,-3.4).closePath();
	this.shape_17.setTransform(43.975,0.45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.7,6.3).lineTo(-4.7,-6.3).lineTo(0.2,-6.3).curveTo(2.1,-6.3,3.4,-5).curveTo(4.7,-3.8,4.7,-1.9).curveTo(4.7,0.1,3.4,1.3).curveTo(2.1,2.5,0.2,2.5).lineTo(-1.5,2.5).lineTo(-1.5,6.3).closePath().moveTo(-1.5,-0.5).lineTo(0.2,-0.5).curveTo(0.7,-0.6,1.1,-0.9).curveTo(1.4,-1.3,1.5,-1.9).curveTo(1.4,-2.5,1.1,-2.9).curveTo(0.7,-3.2,0.2,-3.2).lineTo(-1.5,-3.2).closePath();
	this.shape_18.setTransform(32.3,0.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.1,6.3).lineTo(-4.1,-6.3).lineTo(3.9,-6.3).lineTo(3.9,-3.3).lineTo(-0.8,-3.3).lineTo(-0.8,-1.5).lineTo(3.5,-1.5).lineTo(3.5,1.4).lineTo(-0.8,1.4).lineTo(-0.8,3.3).lineTo(4,3.3).lineTo(4,6.3).closePath();
	this.shape_19.setTransform(21,0.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.2,4.7).curveTo(-6,2.9,-6,-0).curveTo(-6,-2.8,-4.2,-4.7).curveTo(-2.3,-6.6,0.6,-6.6).curveTo(2.3,-6.5,3.7,-5.8).curveTo(5.2,-4.9,6,-3.6).lineTo(3.3,-2).curveTo(2.9,-2.7,2.1,-3.1).curveTo(1.5,-3.4,0.6,-3.4).curveTo(-0.9,-3.4,-1.9,-2.4).curveTo(-2.8,-1.5,-2.8,-0).curveTo(-2.8,1.5,-1.9,2.5).curveTo(-0.9,3.4,0.6,3.4).curveTo(1.5,3.4,2.1,3.1).curveTo(2.9,2.7,3.3,2).lineTo(6,3.6).curveTo(5.2,4.9,3.7,5.8).curveTo(2.3,6.5,0.6,6.6).curveTo(-2.2,6.6,-4.2,4.7).closePath();
	this.shape_20.setTransform(8.5,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,-13.3,280.7,26.700000000000003), null);


(lib.Symbol21 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#D40C0C").beginStroke().moveTo(-366.5,46.5).lineTo(-366.5,-46.5).lineTo(366.5,-46.5).lineTo(366.5,46.5).closePath();
	this.shape.setTransform(366.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,-46.5,733,93), null);


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


(lib.Symbol87 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_6
	this.instance = new lib.bullet2();
	this.instance.setTransform(54,-19,0.7315,0.7315);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(71).to({_off:true},1).wait(219));

	// Layer_5
	this.instance_1 = new lib.bullet2();
	this.instance_1.setTransform(141,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).wait(60).to({_off:true},1).wait(219));

	// Layer_4
	this.instance_2 = new lib.bullet2();
	this.instance_2.setTransform(122,-40,0.7037,0.7037);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(50).to({_off:false},0).wait(50).to({_off:true},1).wait(219));

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-4.1,-1.1).lineTo(-2.6,-2).lineTo(0.1,0.4).lineTo(0.8,-3.9).lineTo(2.2,-4.7).lineTo(4.1,1.1).lineTo(2.8,1.8).lineTo(1.6,-1.5).lineTo(1.1,2.2).lineTo(0.4,2.5).lineTo(-2.1,0.4).lineTo(-0.9,3.9).lineTo(-2.2,4.7).closePath();
	this.shape.setTransform(136.425,0.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#000000").beginStroke().moveTo(-1.7,3).curveTo(-2.3,2.7,-2.6,2).curveTo(-3.1,1.2,-3.1,0.2).curveTo(-3.1,-0.7,-2.6,-1.5).curveTo(-2.2,-2.3,-1.3,-2.8).curveTo(-0.5,-3.2,0.3,-3.3).curveTo(1,-3.3,1.6,-3).curveTo(2.3,-2.6,2.7,-1.9).curveTo(3.1,-1.1,3.1,-0.2).curveTo(3.1,0.7,2.6,1.5).curveTo(2.1,2.3,1.3,2.8).curveTo(0.5,3.2,-0.3,3.3).curveTo(-1,3.3,-1.7,3).closePath().moveTo(-0.7,-1.5).curveTo(-1.1,-1.3,-1.3,-0.8).curveTo(-1.5,-0.4,-1.5,0.1).curveTo(-1.5,0.5,-1.2,1).curveTo(-0.9,1.6,-0.4,1.7).curveTo(0.1,1.8,0.7,1.5).curveTo(1.1,1.3,1.3,0.9).curveTo(1.5,0.4,1.5,-0).curveTo(1.5,-0.5,1.2,-1).curveTo(0.9,-1.5,0.4,-1.7).lineTo(0,-1.7).curveTo(-0.3,-1.7,-0.7,-1.5).closePath();
	this.shape_1.setTransform(129.375,4.4969);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#000000").beginStroke().moveTo(-3.2,-1.9).lineTo(-0.6,-3.4).curveTo(0.3,-3.9,0.9,-3.8).curveTo(1.6,-3.8,1.9,-3.2).curveTo(2.2,-2.8,2.1,-2.3).curveTo(2.1,-1.9,1.7,-1.4).curveTo(2.5,-1.5,3,-0.7).curveTo(3.4,0,3,0.8).curveTo(2.6,1.6,1.5,2.2).lineTo(-1.3,3.8).closePath().moveTo(0.6,-0.1).lineTo(-0.7,0.6).lineTo(-0.3,1.9).lineTo(1,1.2).curveTo(1.4,0.9,1.6,0.6).curveTo(1.7,0.2,1.6,-0.1).curveTo(1.5,-0.1,1.5,-0.2).curveTo(1.4,-0.2,1.4,-0.2).curveTo(1.3,-0.3,1.3,-0.3).curveTo(1.2,-0.3,1.2,-0.3).curveTo(0.9,-0.3,0.6,-0.1).closePath().moveTo(-0.3,-2.2).lineTo(-1.4,-1.6).lineTo(-1,-0.4).lineTo(0.1,-1).curveTo(0.5,-1.2,0.6,-1.5).curveTo(0.8,-1.9,0.6,-2.1).curveTo(0.6,-2.2,0.5,-2.2).curveTo(0.5,-2.3,0.4,-2.3).curveTo(0.4,-2.4,0.3,-2.4).curveTo(0.3,-2.4,0.2,-2.4).lineTo(-0.3,-2.2).closePath();
	this.shape_2.setTransform(123.2317,8.3167);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-1.7,3).curveTo(-2.3,2.7,-2.6,2).curveTo(-3.1,1.2,-3.1,0.2).curveTo(-3.1,-0.7,-2.6,-1.5).curveTo(-2.2,-2.3,-1.3,-2.8).curveTo(-0.5,-3.2,0.3,-3.3).curveTo(1,-3.3,1.6,-3).curveTo(2.3,-2.6,2.7,-1.9).curveTo(3.1,-1.1,3.1,-0.2).curveTo(3.1,0.7,2.6,1.5).curveTo(2.1,2.3,1.3,2.8).curveTo(0.5,3.2,-0.3,3.3).curveTo(-1,3.3,-1.7,3).closePath().moveTo(-0.7,-1.5).curveTo(-1.1,-1.3,-1.3,-0.8).curveTo(-1.5,-0.4,-1.5,0.1).curveTo(-1.5,0.5,-1.2,1).curveTo(-0.9,1.6,-0.4,1.7).curveTo(0.1,1.8,0.7,1.5).curveTo(1.1,1.3,1.3,0.9).curveTo(1.5,0.4,1.5,-0).curveTo(1.5,-0.5,1.2,-1).curveTo(0.9,-1.5,0.4,-1.7).lineTo(0,-1.7).curveTo(-0.3,-1.7,-0.7,-1.5).closePath();
	this.shape_3.setTransform(117.125,11.4969);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,2.5).lineTo(-3.3,2.4).curveTo(-2.5,1.9,-3.2,-0.6).lineTo(-3.8,-2.5).lineTo(0.7,-5.1).lineTo(2.1,-0.7).lineTo(2.9,-1.1).lineTo(3.8,1.4).lineTo(2.4,2.2).lineTo(2,1).lineTo(-1.6,3.1).lineTo(-1.2,4.3).lineTo(-2.6,5.1).closePath().moveTo(-2,-1.9).lineTo(-1.8,-1.1).lineTo(-1.4,0.4).curveTo(-1.3,0.9,-1.5,1.4).lineTo(0.7,0.1).lineTo(-0.4,-2.9).closePath();
	this.shape_4.setTransform(111.35,16.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#000000").beginStroke().moveTo(-1.7,3).curveTo(-2.3,2.7,-2.6,2).curveTo(-3.1,1.2,-3.1,0.2).curveTo(-3.1,-0.7,-2.6,-1.5).curveTo(-2.2,-2.3,-1.3,-2.8).curveTo(-0.5,-3.2,0.3,-3.3).curveTo(1,-3.3,1.6,-3).curveTo(2.3,-2.6,2.7,-1.9).curveTo(3.1,-1.1,3.1,-0.2).curveTo(3.1,0.7,2.6,1.5).curveTo(2.1,2.3,1.3,2.8).curveTo(0.5,3.2,-0.3,3.3).curveTo(-1,3.3,-1.7,3).closePath().moveTo(-0.7,-1.5).curveTo(-1.1,-1.3,-1.3,-0.8).curveTo(-1.5,-0.4,-1.5,0.1).curveTo(-1.5,0.5,-1.2,1).curveTo(-0.9,1.6,-0.4,1.7).curveTo(0.1,1.8,0.7,1.5).curveTo(1.1,1.3,1.3,0.9).curveTo(1.5,0.4,1.5,-0).curveTo(1.5,-0.5,1.2,-1).curveTo(0.9,-1.5,0.4,-1.7).lineTo(0,-1.7).curveTo(-0.3,-1.7,-0.7,-1.5).closePath();
	this.shape_5.setTransform(104.125,18.8969);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#000000").beginStroke().moveTo(-2.3,-1.7).lineTo(1.8,-4.1).lineTo(2.3,-2.6).lineTo(-0.4,-1.1).lineTo(1.1,3.2).lineTo(-0.4,4).closePath();
	this.shape_6.setTransform(98.125,21.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#000000").beginStroke().moveTo(-3.6,-1.4).lineTo(-2.2,-2.2).lineTo(-1,1.3).lineTo(0.3,-3.6).lineTo(1.7,-4.4).lineTo(3.6,1.3).lineTo(2.1,2.2).lineTo(1,-1.4).lineTo(-0.3,3.6).lineTo(-1.7,4.4).closePath();
	this.shape_7.setTransform(90.025,26.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,-2.8).lineTo(-2,-3.6).lineTo(-1.8,-3.1).curveTo(-1.5,-4,-0.6,-4.5).curveTo(-0,-4.9,0.7,-5).curveTo(1.4,-5,2,-4.6).curveTo(2.6,-4.2,3,-3.5).curveTo(3.4,-2.6,3.4,-1.8).curveTo(3.5,-0.9,3,-0.1).curveTo(2.6,0.6,1.8,1).curveTo(0.6,1.7,-0.3,1.2).lineTo(0.7,4.1).lineTo(-0.8,4.9).closePath().moveTo(-0.4,-3.1).curveTo(-0.8,-2.9,-1,-2.4).curveTo(-1.2,-2,-1.2,-1.5).curveTo(-1.2,-1,-0.9,-0.6).curveTo(-0.6,0,-0.1,0.1).curveTo(0.4,0.2,0.9,-0).curveTo(1.4,-0.3,1.6,-0.7).curveTo(1.8,-1.2,1.8,-1.6).curveTo(1.8,-2.1,1.5,-2.6).curveTo(1.2,-3.1,0.7,-3.3).lineTo(0.3,-3.3).curveTo(-0,-3.3,-0.4,-3.1).closePath();
	this.shape_8.setTransform(83.1775,32.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#000000").beginStroke().moveTo(-3.5,-1.4).lineTo(1.6,-4.3).lineTo(3.5,1.4).lineTo(2,2.2).lineTo(0.5,-2.1).lineTo(-1.6,-0.9).lineTo(-0.1,3.5).lineTo(-1.6,4.3).closePath();
	this.shape_9.setTransform(76.7,34.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#000000").beginStroke().moveTo(-0.2,1.1).lineTo(-0.9,2.3).lineTo(-1.8,1.8).lineTo(-0.9,0.5).lineTo(-2.1,0.5).lineTo(-2,-0.7).lineTo(-0.7,-0.5).lineTo(-1.2,-1.9).lineTo(-0.3,-2.4).lineTo(0.1,-1).lineTo(1,-2.3).lineTo(1.8,-1.7).lineTo(0.9,-0.5).lineTo(2.1,-0.5).lineTo(2,0.6).lineTo(0.7,0.5).lineTo(1.1,1.8).lineTo(0.2,2.4).closePath();
	this.shape_10.setTransform(67.725,36.225);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#D40C0C").beginStroke().moveTo(0.9,5.1).curveTo(0.4,5,0.2,4.5).curveTo(-0.1,4,0.1,3.5).curveTo(0.2,3,0.7,2.7).curveTo(1.2,2.4,1.7,2.5).curveTo(2.2,2.7,2.4,3.1).curveTo(2.7,3.6,2.5,4.1).curveTo(2.4,4.7,1.9,5).curveTo(1.5,5.2,1.2,5.2).lineTo(0.9,5.1).closePath().moveTo(-2.6,-3.9).lineTo(-0.3,-5.2).lineTo(1.3,1.2).lineTo(-0.2,2.1).closePath();
	this.shape_11.setTransform(137.2781,-15.2357);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#D40C0C").beginStroke().moveTo(-5.5,-2.5).lineTo(-3.5,-3.7).lineTo(-2.2,0.2).lineTo(-0.9,-0.6).lineTo(0,-5.7).lineTo(2.3,-6.9).lineTo(0.9,-0.7).lineTo(5.4,2.5).lineTo(3.4,3.7).lineTo(-0.2,1.1).lineTo(-1.6,2).lineTo(-0.3,5.8).lineTo(-2.3,6.9).closePath();
	this.shape_12.setTransform(131.55,-11.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#D40C0C").beginStroke().moveTo(-2.7,5.1).curveTo(-3.7,4.5,-4.3,3.4).curveTo(-5.1,2,-5.1,0.4).curveTo(-5.2,-1.1,-4.3,-2.5).curveTo(-3.5,-3.8,-2,-4.7).curveTo(-0.7,-5.4,0.5,-5.5).curveTo(1.7,-5.6,2.7,-5).curveTo(3.7,-4.5,4.3,-3.4).curveTo(5.1,-1.9,5.1,-0.4).curveTo(5.1,1.1,4.3,2.5).curveTo(3.5,3.9,2,4.7).curveTo(0.7,5.5,-0.5,5.6).curveTo(-1.7,5.6,-2.7,5.1).closePath().moveTo(-1.2,-3).curveTo(-2.1,-2.4,-2.6,-1.6).curveTo(-3,-0.7,-3,0.3).curveTo(-2.9,1.3,-2.4,2.2).curveTo(-1.8,3.1,-0.9,3.4).curveTo(0.1,3.6,1.2,2.9).curveTo(2.1,2.4,2.5,1.6).curveTo(3,0.7,3,-0.3).curveTo(2.9,-1.2,2.4,-2.1).curveTo(1.8,-3.1,0.9,-3.3).lineTo(0.3,-3.4).curveTo(-0.4,-3.4,-1.2,-3).closePath();
	this.shape_13.setTransform(121.4736,-6.0021);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#D40C0C").beginStroke().moveTo(-4.4,-3.4).lineTo(-1,-5.4).curveTo(0.6,-6.3,1.9,-6.1).curveTo(3.2,-5.9,3.9,-4.6).curveTo(4.5,-3.6,4.4,-2.5).curveTo(4.3,-1.4,3.7,-0.4).curveTo(3,0.5,1.7,1.2).lineTo(-0.2,2.3).lineTo(0.7,4.9).lineTo(-1.3,6.1).closePath().moveTo(-0.3,-3.6).lineTo(-1.9,-2.7).lineTo(-0.8,0.5).lineTo(0.9,-0.4).curveTo(1.9,-1,2.2,-1.7).curveTo(2.5,-2.5,2,-3.3).curveTo(1.6,-3.9,1,-4).lineTo(0.8,-4).curveTo(0.3,-4,-0.3,-3.6).closePath();
	this.shape_14.setTransform(111.2571,0.1068);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#D40C0C").beginStroke().moveTo(-4.1,-5.3).lineTo(-2.2,-6.4).lineTo(4.8,0.9).lineTo(2.8,2.1).lineTo(1.3,0.5).lineTo(-2.6,2.8).lineTo(-2.7,5.2).lineTo(-4.8,6.4).closePath().moveTo(-2.6,0.7).lineTo(0.2,-0.8).lineTo(-2.4,-3.7).closePath();
	this.shape_15.setTransform(104.175,5.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#D40C0C").beginStroke().moveTo(-5.1,4.4).lineTo(-4.9,4.3).curveTo(-4.1,3.8,-4.2,2.3).curveTo(-4.3,0.9,-4.9,-1.4).lineTo(-5.8,-4.4).lineTo(0.8,-8.1).lineTo(3.3,-0.4).lineTo(4.5,-1.1).lineTo(5.8,2.6).lineTo(3.9,3.7).lineTo(3.3,1.7).lineTo(-2.7,5.2).lineTo(-2.1,7.1).lineTo(-3.9,8.1).closePath().moveTo(-3.5,-3.6).lineTo(-3.1,-2.1).curveTo(-2.5,-0.3,-2.3,0.8).curveTo(-2.2,2,-2.3,2.8).lineTo(1.4,0.7).lineTo(-0.6,-5.2).closePath();
	this.shape_16.setTransform(93.925,11.775);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#D40C0C").beginStroke().moveTo(-2.7,5.1).curveTo(-3.7,4.5,-4.3,3.4).curveTo(-5.1,2,-5.1,0.4).curveTo(-5.2,-1.1,-4.3,-2.5).curveTo(-3.5,-3.8,-2,-4.7).curveTo(-0.7,-5.4,0.5,-5.5).curveTo(1.7,-5.6,2.7,-5).curveTo(3.7,-4.5,4.3,-3.4).curveTo(5.1,-1.9,5.1,-0.4).curveTo(5.1,1.1,4.3,2.5).curveTo(3.5,3.9,2,4.7).curveTo(0.7,5.5,-0.5,5.6).curveTo(-1.7,5.6,-2.7,5.1).closePath().moveTo(-1.2,-3).curveTo(-2.1,-2.4,-2.6,-1.6).curveTo(-3,-0.7,-3,0.3).curveTo(-2.9,1.3,-2.4,2.2).curveTo(-1.8,3.1,-0.9,3.4).curveTo(0.1,3.6,1.2,2.9).curveTo(2.1,2.4,2.5,1.6).curveTo(3,0.7,3,-0.3).curveTo(2.9,-1.2,2.4,-2.1).curveTo(1.8,-3.1,0.9,-3.3).lineTo(0.3,-3.4).curveTo(-0.4,-3.4,-1.2,-3).closePath();
	this.shape_17.setTransform(82.5236,16.2979);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#D40C0C").beginStroke().moveTo(-5.4,-2.5).lineTo(2.3,-6.9).lineTo(5.4,2.5).lineTo(3.5,3.7).lineTo(0.9,-4).lineTo(-2.9,-1.9).lineTo(-0.3,5.8).lineTo(-2.3,6.9).closePath();
	this.shape_18.setTransform(72.4,22.05);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#D40C0C").beginStroke().moveTo(-5.2,-3.2).lineTo(-1.1,-5.5).curveTo(0.3,-6.3,1.4,-6.3).curveTo(2.3,-6.2,2.9,-5.2).curveTo(3.3,-4.5,3.2,-3.7).curveTo(3.2,-2.9,2.6,-2.2).curveTo(3.3,-2.3,3.8,-2).curveTo(4.4,-1.8,4.7,-1.2).curveTo(5.5,0.2,4.8,1.4).curveTo(4.2,2.7,2.4,3.7).lineTo(-2,6.3).closePath().moveTo(1,-0.2).lineTo(-1.4,1.1).lineTo(-0.6,3.5).lineTo(1.7,2.2).curveTo(2.5,1.7,2.8,1.1).curveTo(3.1,0.6,2.8,-0).curveTo(2.5,-0.5,2,-0.5).curveTo(1.6,-0.5,1,-0.2).closePath().moveTo(-0.7,-3.8).lineTo(-2.7,-2.7).lineTo(-1.9,-0.4).lineTo(0.1,-1.6).curveTo(0.9,-2,1.1,-2.6).curveTo(1.4,-3.1,1,-3.7).curveTo(0.8,-4.1,0.3,-4.1).curveTo(-0.1,-4.1,-0.7,-3.8).closePath();
	this.shape_19.setTransform(59.3509,30.0235);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#D40C0C").beginStroke().moveTo(-4.1,-5.3).lineTo(-2.2,-6.4).lineTo(4.8,0.9).lineTo(2.8,2.1).lineTo(1.3,0.5).lineTo(-2.6,2.8).lineTo(-2.7,5.2).lineTo(-4.8,6.4).closePath().moveTo(-2.6,0.7).lineTo(0.2,-0.8).lineTo(-2.4,-3.7).closePath();
	this.shape_20.setTransform(121.175,-19.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#D40C0C").beginStroke().moveTo(-6.4,-2.5).lineTo(-4.4,-3.6).lineTo(-1.8,4).lineTo(2,1.9).lineTo(-0.6,-5.8).lineTo(1.3,-6.9).lineTo(3.9,0.8).lineTo(5.1,0.1).lineTo(6.4,3.9).lineTo(4.6,4.9).lineTo(3.9,2.9).lineTo(-3.2,6.9).closePath();
	this.shape_21.setTransform(110.375,-14.475);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#D40C0C").beginStroke().moveTo(-1.7,2.9).curveTo(-2.5,3,-3.2,2.6).curveTo(-3.8,2.2,-4.3,1.4).curveTo(-4.9,0.3,-4.8,-0.8).curveTo(-4.8,-2,-4.1,-3).curveTo(-3.3,-4,-2,-4.7).lineTo(1.7,-6.8).lineTo(4.8,2.6).lineTo(2.9,3.7).lineTo(2,1.2).lineTo(0.3,2.2).lineTo(-0.4,5.6).lineTo(-2.5,6.8).closePath().moveTo(-1.4,-3).curveTo(-2.4,-2.4,-2.6,-1.6).curveTo(-2.9,-0.8,-2.4,0.1).curveTo(-2.1,0.7,-1.5,0.8).curveTo(-1,0.9,-0.3,0.5).lineTo(1.4,-0.5).lineTo(0.3,-3.9).closePath();
	this.shape_22.setTransform(100.2683,-8.975);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#D40C0C").beginStroke().moveTo(-2.5,5.1).curveTo(-3.5,4.5,-4.1,3.4).curveTo(-4.9,2,-4.9,0.4).curveTo(-5,-1.1,-4.1,-2.5).curveTo(-3.3,-3.8,-1.7,-4.7).curveTo(-0.6,-5.4,0.5,-5.5).curveTo(1.6,-5.6,2.5,-5.1).lineTo(1.7,-3.2).curveTo(0.4,-3.8,-0.9,-3).curveTo(-1.9,-2.5,-2.3,-1.6).curveTo(-2.8,-0.7,-2.7,0.2).curveTo(-2.7,1.2,-2.2,2.2).curveTo(-1.6,3.1,-0.7,3.4).curveTo(0.3,3.6,1.4,2.9).curveTo(2.8,2.1,3.1,0.7).lineTo(5,1.2).curveTo(4.6,3.4,2.2,4.7).curveTo(0.9,5.4,-0.3,5.5).lineTo(-0.6,5.5).curveTo(-1.6,5.5,-2.5,5.1).closePath();
	this.shape_23.setTransform(91.5987,-4.415);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#D40C0C").beginStroke().moveTo(-4.9,-2.9).lineTo(1.6,-6.6).lineTo(2.1,-4.8).lineTo(-2.3,-2.3).lineTo(-1.6,-0.2).lineTo(2.3,-2.5).lineTo(2.9,-0.7).lineTo(-1.1,1.5).lineTo(-0.3,3.7).lineTo(4.3,1).lineTo(4.9,2.8).lineTo(-1.7,6.6).closePath();
	this.shape_24.setTransform(82.825,0.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#D40C0C").beginStroke().moveTo(-6.4,-2).lineTo(-4.8,-3).lineTo(0.4,1.2).lineTo(1.5,-6.5).lineTo(3.2,-7.5).lineTo(6.4,2).lineTo(4.5,3.1).lineTo(2.6,-2.6).lineTo(1.8,3.4).lineTo(0.9,4).lineTo(-3.3,0.7).lineTo(-1.4,6.4).lineTo(-3.2,7.5).closePath();
	this.shape_25.setTransform(72.625,6.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#D40C0C").beginStroke().moveTo(-2.2,4.5).lineTo(-0,-0.7).curveTo(0.3,-1.7,0.4,-2.3).curveTo(0.4,-2.8,0.2,-3.3).curveTo(0,-3.7,-0.5,-3.7).curveTo(-1,-3.8,-1.5,-3.5).curveTo(-2.1,-3.2,-2.4,-2.7).curveTo(-2.8,-2.2,-2.9,-1.6).lineTo(-4.8,-1.7).curveTo(-4.6,-2.7,-4,-3.7).curveTo(-3.3,-4.6,-2.3,-5.3).curveTo(-1.3,-5.8,-0.5,-5.9).curveTo(0.3,-5.9,1.1,-5.6).curveTo(1.7,-5.4,2.1,-4.7).curveTo(2.5,-3.9,2.4,-3).curveTo(2.4,-2,1.9,-0.5).lineTo(0.6,2.5).lineTo(4.1,0.5).lineTo(4.8,2.2).lineTo(-1.7,5.9).closePath();
	this.shape_26.setTransform(59.85,14.5464);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},13).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},87).to({state:[]},1).wait(219));

	// Layer_1
	this.instance_3 = new lib.Symbol86();
	this.instance_3.setTransform(95.8,0,2.0706,2.0706,0,0,0,95.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:96,scaleX:0.8229,scaleY:0.8229,x:96},9).to({scaleX:1,scaleY:1},4).wait(16).to({scaleX:0.9375,scaleY:0.9375},0).to({scaleX:1,scaleY:1},4).wait(7).to({scaleX:0.9375,scaleY:0.9375},0).to({scaleX:1,scaleY:1},4).wait(6).to({scaleX:0.9375,scaleY:0.9375},0).to({scaleX:1,scaleY:1},4).wait(46).to({_off:true},1).wait(219));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.7,-176,397.5,352);


(lib.Symbol79 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_6
	this.instance = new lib.Symbol78();
	this.instance.setTransform(-119.05,6.35,0.1784,0.1784,4.2818,0,0,60.7,0.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).to({regX:60.8,regY:0.5,scaleX:0.6907,scaleY:0.6907,rotation:4.2848,x:-136.75,y:12.7},24).wait(269));

	// Layer_5
	this.instance_1 = new lib.Symbol78();
	this.instance_1.setTransform(-169.1,-87.6,0.1535,0.1535,4.2812,0,0,60.8,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({_off:false},0).to({regY:0.2,scaleX:0.4717,scaleY:0.4717,rotation:4.2854},24).wait(263));

	// Layer_4
	this.instance_2 = new lib.Symbol78();
	this.instance_2.setTransform(-185.15,0.35,0.1677,0.1677,156.2518,0,0,61.4,0.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({regX:61.1,regY:0.4,scaleX:0.5632,scaleY:0.5632,rotation:156.2512,x:-185.1},24).wait(288));

	// Layer_3
	this.instance_3 = new lib.Symbol78();
	this.instance_3.setTransform(41,-75.15,0.088,0.088,139.0516,0,0,60.9,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).to({regY:0.2,scaleX:0.7436,scaleY:0.7436,rotation:139.0504,x:41.05,y:-75.05},24).wait(277));

	// Layer_2
	this.instance_4 = new lib.Symbol78();
	this.instance_4.setTransform(-4.9,-85.4,0.1726,0.1726,0,0,0,60.9,0);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(14).to({_off:false},0).to({regX:61.1,regY:0.2,scaleX:0.4717,scaleY:0.4717},24).wait(282));

	// Layer_1
	this.instance_5 = new lib.Symbol78();
	this.instance_5.setTransform(34.8,-6.95,0.1436,0.1436,0,0,0,61.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:61.1,regY:0.2,scaleX:0.4717,scaleY:0.4717,y:-6.9},24).wait(296));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226.9,-130.7,324.9,178.29999999999998);


(lib.Symbol76 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol75("synched",0);
	this.instance.setTransform(37.8,-2.8,0.7994,0.7994,0,0,0,49.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(292).to({startPosition:292},0).to({_off:true},1).wait(67));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-53.3,61.7,106.69999999999999);


(lib.Symbol71 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1,4.6).curveTo(-1.3,4.2,-1.3,3.7).curveTo(-1.3,3.2,-1,2.8).curveTo(-0.6,2.5,-0,2.5).curveTo(0.5,2.5,1,2.8).curveTo(1.3,3.2,1.3,3.7).curveTo(1.3,4.2,1,4.6).curveTo(0.5,5,-0,4.9).curveTo(-0.6,5,-1,4.6).closePath().moveTo(-0.9,1.4).lineTo(-1.3,-5).lineTo(1.3,-5).lineTo(0.8,1.4).closePath();
	this.shape.setTransform(120.6,-2.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.9,4.8).curveTo(-2.9,4.3,-3.4,3.5).curveTo(-4,2.5,-4,1.5).curveTo(-4,0.4,-3.4,-0.6).curveTo(-2.9,-1.4,-2,-1.9).curveTo(-1.1,-2.5,0.1,-2.5).curveTo(1.1,-2.5,2.1,-1.9).curveTo(3,-1.5,3.4,-0.6).curveTo(4,0.3,4,1.5).lineTo(4,2).lineTo(-1.7,2).curveTo(-1.6,2.8,-1.1,3.1).curveTo(-0.4,3.6,0.4,3.6).curveTo(1,3.5,1.4,3.4).curveTo(1.9,3.2,2.3,2.8).lineTo(3.4,4.1).curveTo(2.4,5.3,0.3,5.3).curveTo(-0.9,5.3,-1.9,4.8).closePath().moveTo(-1.2,-0.3).curveTo(-1.7,0.1,-1.8,0.8).lineTo(1.9,0.8).curveTo(1.8,0.1,1.3,-0.3).curveTo(0.8,-0.8,0.1,-0.8).curveTo(-0.7,-0.8,-1.2,-0.3).closePath().moveTo(0.7,-3.6).curveTo(0.4,-3.9,0.4,-4.4).curveTo(0.4,-4.7,0.7,-5.1).curveTo(1,-5.3,1.4,-5.3).curveTo(1.8,-5.3,2.1,-5.1).curveTo(2.4,-4.7,2.4,-4.4).curveTo(2.4,-3.9,2.1,-3.6).curveTo(1.8,-3.4,1.4,-3.4).curveTo(1,-3.4,0.7,-3.6).closePath().moveTo(-2.1,-3.6).curveTo(-2.4,-3.9,-2.4,-4.4).curveTo(-2.4,-4.7,-2.1,-5.1).curveTo(-1.8,-5.3,-1.4,-5.3).curveTo(-1,-5.3,-0.7,-5.1).curveTo(-0.4,-4.7,-0.5,-4.4).curveTo(-0.4,-3.9,-0.7,-3.6).curveTo(-1,-3.4,-1.4,-3.4).curveTo(-1.8,-3.4,-2.1,-3.6).closePath();
	this.shape_1.setTransform(113.95,-3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.8,3.4).curveTo(-2.7,2.9,-3.3,2).curveTo(-3.8,1.1,-3.8,0).curveTo(-3.8,-1.1,-3.3,-2).curveTo(-2.7,-2.9,-1.8,-3.4).curveTo(-0.8,-3.9,0.4,-3.9).curveTo(1.6,-3.9,2.5,-3.4).curveTo(3.4,-2.9,3.8,-2).lineTo(2.1,-1).curveTo(1.5,-2.1,0.4,-2.1).curveTo(-0.5,-2.1,-1,-1.5).curveTo(-1.6,-1,-1.6,0).curveTo(-1.6,1,-1,1.5).curveTo(-0.5,2.1,0.4,2.1).curveTo(1.5,2.1,2.1,1.1).lineTo(3.8,2).curveTo(3.4,2.9,2.5,3.4).curveTo(1.6,3.9,0.4,3.9).curveTo(-0.8,3.9,-1.8,3.4).closePath();
	this.shape_2.setTransform(105.475,-1.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.6,3.8).lineTo(-3.6,-3.8).lineTo(0.3,-3.8).curveTo(1.7,-3.8,2.5,-3.2).curveTo(3.3,-2.7,3.3,-1.8).curveTo(3.3,-1.2,3,-0.8).curveTo(2.7,-0.4,2.2,-0.2).curveTo(3.6,0.3,3.6,1.6).curveTo(3.6,2.7,2.8,3.2).curveTo(2,3.8,0.4,3.8).closePath().moveTo(-1.6,2.3).lineTo(0.3,2.3).curveTo(1.5,2.3,1.5,1.5).curveTo(1.5,1,1.2,0.8).curveTo(1,0.6,0.3,0.6).lineTo(-1.6,0.6).closePath().moveTo(-1.6,-0.7).lineTo(0.1,-0.7).curveTo(1.2,-0.7,1.2,-1.5).curveTo(1.2,-2.3,0.1,-2.3).lineTo(-1.6,-2.3).closePath();
	this.shape_3.setTransform(97.15,-1.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.7,5.2).lineTo(1.7,0.7).lineTo(-1.9,5.2).lineTo(-3.9,5.2).lineTo(-3.9,-2.3).lineTo(-1.8,-2.3).lineTo(-1.8,2.2).lineTo(1.9,-2.3).lineTo(3.9,-2.3).lineTo(3.9,5.2).closePath().moveTo(-2.6,-5.2).lineTo(-1.2,-5.2).curveTo(-1.2,-4.7,-0.9,-4.5).curveTo(-0.7,-4.2,-0.2,-4.2).curveTo(0.3,-4.2,0.6,-4.5).curveTo(0.9,-4.7,0.9,-5.2).lineTo(2.3,-5.2).curveTo(2.3,-3.1,-0.1,-3.1).curveTo(-2.6,-3.1,-2.6,-5.2).closePath();
	this.shape_4.setTransform(83.625,-3.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.1,3.4).curveTo(-3.1,2.9,-3.6,2).curveTo(-4.1,1.1,-4.1,0).curveTo(-4.1,-1.1,-3.6,-2).curveTo(-3.1,-2.9,-2.1,-3.4).curveTo(-1.2,-3.9,0,-3.9).curveTo(1.2,-3.9,2.1,-3.4).curveTo(3.1,-2.9,3.6,-2).curveTo(4.1,-1.1,4.1,0).curveTo(4.1,1.1,3.6,2).curveTo(3.1,2.9,2.1,3.4).curveTo(1.2,3.9,0,3.9).curveTo(-1.2,3.9,-2.1,3.4).closePath().moveTo(-1.4,-1.5).curveTo(-1.9,-0.9,-1.9,0).curveTo(-1.9,1,-1.4,1.5).curveTo(-0.8,2.1,0,2.1).curveTo(0.8,2.1,1.4,1.5).curveTo(1.9,1,1.9,0).curveTo(1.9,-0.9,1.4,-1.5).curveTo(0.8,-2.1,0,-2.1).curveTo(-0.8,-2.1,-1.4,-1.5).closePath();
	this.shape_5.setTransform(74.075,-1.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-4.1,5.2).lineTo(-4.1,-5.1).lineTo(-2,-5.1).lineTo(-2,-4.2).curveTo(-1.2,-5.2,0.4,-5.2).curveTo(1.4,-5.2,2.3,-4.7).curveTo(3.1,-4.2,3.6,-3.3).curveTo(4.1,-2.5,4.1,-1.3).curveTo(4.1,-0.1,3.6,0.7).curveTo(3.1,1.6,2.3,2.1).curveTo(1.4,2.6,0.4,2.6).curveTo(-1.1,2.6,-2,1.7).lineTo(-2,5.2).closePath().moveTo(-1.4,-2.8).curveTo(-1.9,-2.2,-2,-1.3).curveTo(-1.9,-0.3,-1.4,0.2).curveTo(-0.9,0.8,-0.1,0.8).curveTo(0.8,0.8,1.4,0.2).curveTo(1.9,-0.3,1.9,-1.3).curveTo(1.9,-2.2,1.4,-2.8).curveTo(0.8,-3.4,-0.1,-3.4).curveTo(-0.9,-3.4,-1.4,-2.8).closePath();
	this.shape_6.setTransform(64.95,-0.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.1,3.8).lineTo(-1.1,-2).lineTo(-3.7,-2).lineTo(-3.7,-3.8).lineTo(3.6,-3.8).lineTo(3.6,-2).lineTo(1.1,-2).lineTo(1.1,3.8).closePath();
	this.shape_7.setTransform(56.05,-1.775);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.8,3.4).curveTo(-2.7,2.9,-3.3,2).curveTo(-3.8,1.1,-3.8,0).curveTo(-3.8,-1.1,-3.3,-2).curveTo(-2.7,-2.9,-1.8,-3.4).curveTo(-0.8,-3.9,0.4,-3.9).curveTo(1.6,-3.9,2.5,-3.4).curveTo(3.4,-2.9,3.8,-2).lineTo(2.1,-1).curveTo(1.5,-2.1,0.4,-2.1).curveTo(-0.5,-2.1,-1,-1.5).curveTo(-1.6,-1,-1.6,0).curveTo(-1.6,1,-1,1.5).curveTo(-0.5,2.1,0.4,2.1).curveTo(1.5,2.1,2.1,1.1).lineTo(3.8,2).curveTo(3.4,2.9,2.5,3.4).curveTo(1.6,3.9,0.4,3.9).curveTo(-0.8,3.9,-1.8,3.4).closePath();
	this.shape_8.setTransform(48.225,-1.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-2.3,3.6).curveTo(-2.9,3.3,-3.2,2.8).curveTo(-3.6,2.3,-3.6,1.6).curveTo(-3.6,0.6,-2.8,-0).curveTo(-2,-0.6,-0.3,-0.6).lineTo(1.4,-0.6).curveTo(1.4,-1.4,1,-1.7).curveTo(0.5,-2.1,-0.3,-2.1).curveTo(-0.9,-2.1,-1.5,-1.9).curveTo(-2.1,-1.8,-2.5,-1.4).lineTo(-3.3,-3).curveTo(-2.7,-3.4,-1.8,-3.6).curveTo(-1,-3.9,-0,-3.9).curveTo(1.7,-3.9,2.6,-3).curveTo(3.6,-2.2,3.6,-0.5).lineTo(3.6,3.8).lineTo(1.5,3.8).lineTo(1.5,2.8).curveTo(0.9,3.9,-0.8,3.9).curveTo(-1.6,3.9,-2.3,3.6).closePath().moveTo(-1.4,1.5).curveTo(-1.4,1.9,-1.1,2.2).curveTo(-0.8,2.4,-0.2,2.4).curveTo(0.3,2.4,0.8,2.2).curveTo(1.2,1.9,1.4,1.4).lineTo(1.4,0.6).lineTo(-0.1,0.6).curveTo(-1.4,0.6,-1.4,1.5).closePath();
	this.shape_9.setTransform(39.575,-1.775);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#FFFFFF").beginStroke().moveTo(2.2,4.9).lineTo(2.2,0.9).lineTo(-2.2,0.9).lineTo(-2.2,4.9).lineTo(-4.5,4.9).lineTo(-4.5,-4.9).lineTo(-2.2,-4.9).lineTo(-2.2,-1.1).lineTo(2.2,-1.1).lineTo(2.2,-4.9).lineTo(4.5,-4.9).lineTo(4.5,4.9).closePath();
	this.shape_10.setTransform(29.8,-2.9);

	this.instance = new lib.Symbol69();
	this.instance.setTransform(73.15,-1.75,0.88,0.88,0,0,0,73,0);

	this.instance_1 = new lib.Symbol70();
	this.instance_1.setTransform(74.9,1.75,0.88,0.88,0,0,0,73,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol71, new cjs.Rectangle(8,-22.8,131.2,44.8), null);


(lib.Symbol67 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol68copy2();
	this.instance.setTransform(75.75,0.95,0.4576,0.4576,0,0,0,20.7,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(105).to({_off:false},0).to({scaleX:1,scaleY:1},9).wait(45).to({_off:true},1).wait(48));

	// Layer_3
	this.instance_1 = new lib.Symbol68copy();
	this.instance_1.setTransform(75.75,0.95,0.1982,0.1982,0,0,0,20.7,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(59).to({_off:false},0).to({scaleX:1,scaleY:1},7).wait(31).to({scaleX:0.375,scaleY:0.375},7).to({_off:true},1).wait(103));

	// Layer_2
	this.instance_2 = new lib.Symbol68();
	this.instance_2.setTransform(75.75,0.95,0.3911,0.3911,0,0,0,20.7,0);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},8).wait(28).to({regX:20.6,scaleX:0.3443,scaleY:0.3443,x:75.7},8).to({_off:true},1).wait(149));

	// Layer_1
	this.instance_3 = new lib.Symbol66();
	this.instance_3.setTransform(56.5,0,1,1,0,0,0,56.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(159).to({_off:true},1).wait(48));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-41.5,113,83);


(lib.Symbol22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_6
	this.instance = new lib.Symbol26();
	this.instance.setTransform(646.55,2.5,0.3333,0.3333,0,0,0,25.5,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({regY:0.1,scaleX:1.1961,scaleY:1.1961,y:2.6,alpha:0.6992},8).to({regY:0,scaleX:1,scaleY:1,x:646.5,y:2.5},3).wait(51).to({_off:true},1).wait(390));

	// Layer_5
	this.instance_1 = new lib.Symbol25();
	this.instance_1.setTransform(92,3,0.24,0.24,0,0,0,25,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).to({regX:25.1,scaleX:1.24,scaleY:1.24,x:92.1,alpha:0.6992},8).to({regX:25,scaleX:1,scaleY:1,x:92},3).wait(51).to({_off:true},1).wait(390));

	// Layer_4
	this.instance_2 = new lib.Symbol24();
	this.instance_2.setTransform(229,59.85,1,1,0,0,0,37,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({y:19.85},10).to({y:23.85},4).wait(58).to({_off:true},1).wait(390));

	// Layer_3
	this.instance_3 = new lib.Symbol23();
	this.instance_3.setTransform(408.3,59.85,1,1,0,0,0,140.3,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({y:19.85},10).to({y:23.85},4).wait(58).to({_off:true},1).wait(390));

	// Layer_2
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(368.2,0.5,1.1208,1.1208,0,0,0,101.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.5591,scaleY:0.5591,x:368.1,y:-15.45},16).to({regX:101.5,regY:0.1,scaleX:0.6577,scaleY:0.6577,x:368,y:-14.45},4).wait(61).to({_off:true},1).wait(390));

	// Layer_1
	this.instance_5 = new lib.Symbol21();
	this.instance_5.setTransform(366.5,0,1,1,0,0,0,366.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(81).to({_off:true},1).wait(390));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-46.5,733,119.7);


(lib.Symbol77 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol76("synched",0);
	this.instance.setTransform(30.9,-65.4,1,1,0,0,0,30.9,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(89).to({_off:false},0).wait(53).to({startPosition:53},0).to({_off:true},1).wait(61).to({_off:false,startPosition:3},0).wait(138));

	// Layer_3
	this.instance_1 = new lib.Symbol76("synched",0);
	this.instance_1.setTransform(30.9,-65.4,1,1,0,0,0,30.9,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).wait(93).to({startPosition:93},0).to({_off:true},1).wait(61).to({_off:false,startPosition:155},0).wait(138));

	// Layer_1
	this.instance_2 = new lib.Symbol74();
	this.instance_2.setTransform(55.5,22.65,0.7467,0.7467,0,0,0,43.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(142).to({_off:true},1).wait(61).to({_off:false},0).wait(138));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-118.7,88.1,226.8);


(lib.Symbol73 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol79("synched",0);
	this.instance.setTransform(124.05,40.5,1,1,0,0,0,28.8,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(188).to({startPosition:188},0).to({_off:true},1).wait(192));

	// Layer_1
	this.instance_1 = new lib.Symbol77("synched",0);
	this.instance_1.setTransform(77,-8.1,1,1,0,0,0,44,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-19,y:28.9,startPosition:59},59,cjs.Ease.quadOut).to({x:-46,y:17.9,startPosition:204},60).wait(88).to({startPosition:292},0).to({_off:true},1).wait(192));

	// Layer_1
	this.instance_2 = new lib.Symbol72();
	this.instance_2.setTransform(190,0,1,1,0,0,0,59,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:70},59,cjs.Ease.quadOut).wait(148).to({_off:true},1).wait(192));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.7,-100.8,380.7,237.8);


(lib.Symbol49 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol71();
	this.instance.setTransform(620.5,2.55,0.345,0.345,0,0,0,73.5,-0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(429).to({_off:false},0).to({scaleX:1.1828,scaleY:1.1828,x:620.55,y:2.5},15).to({scaleX:1,scaleY:1,x:620.5,y:2.55},6).wait(80).to({_off:true},1).wait(19));

	// Layer_14
	this.instance_1 = new lib.Symbol73("synched",0);
	this.instance_1.setTransform(656,1,1,1,0,0,0,59,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(342).to({_off:false},0).wait(188).to({startPosition:188},0).to({_off:true},1).wait(19));

	// Layer_16
	this.instance_2 = new lib.Symbol80();
	this.instance_2.setTransform(379.75,12,0.3716,0.3716,0,0,0,101.9,0);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(365).to({_off:false},0).to({regY:0.1,scaleX:1.54,scaleY:1.54,x:379.9,y:12.15,alpha:1},16).to({regY:0,scaleX:1,scaleY:1,x:379.8,y:12},11).wait(138).to({_off:true},1).wait(19));

	// Layer_6
	this.instance_3 = new lib.Symbol81();
	this.instance_3.setTransform(345.3,-12,1,1,0,0,0,127.4,0);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(342).to({_off:false},0).to({x:315.3,alpha:1},27).wait(161).to({_off:true},1).wait(19));

	// Layer_11
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(76.6,1.6,0.5121,0.5121,0,0,0,101.7,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(530).to({_off:true},1).wait(19));

	// Layer_9
	this.instance_5 = new lib.Symbol90();
	this.instance_5.setTransform(364,0,1,1,0,0,0,364,0);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(330).to({_off:false},0).to({alpha:1},15).wait(185).to({_off:true},1).wait(19));

	// Layer_13
	this.instance_6 = new lib.Symbol87("synched",0);
	this.instance_6.setTransform(642,-4,1,1,0,0,0,96,0);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(242).to({_off:false},0).to({_off:true},101).wait(207));

	// Layer_12
	this.instance_7 = new lib.Symbol67("synched",0);
	this.instance_7.setTransform(653.55,3.5,0.2389,0.2389,0,0,0,56.5,0);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(85).to({_off:false},0).to({scaleX:1,scaleY:1,x:653.5,startPosition:11},11).to({_off:true},149).wait(305));

	// Layer_10
	this.instance_8 = new lib.Symbol82();
	this.instance_8.setTransform(366.15,-2.7,0.4147,0.4147,0,0,0,169.2,0);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(208).to({_off:false},0).to({regX:169.1,scaleX:1,scaleY:1,x:366.1,alpha:1},11).to({_off:true},124).wait(207));

	// Layer_8
	this.instance_9 = new lib.Symbol83();
	this.instance_9.setTransform(380.2,1.2,0.4432,0.4432,0,0,0,183.2,0);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(160).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},11).wait(17).to({y:-59.8,alpha:0},31).to({_off:true},66).wait(265));

	// Layer_7
	this.instance_10 = new lib.Symbol84();
	this.instance_10.setTransform(383.1,-1.85,0.4734,0.4734,0,0,0,186.1,0);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(116).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},11).wait(19).to({y:-61.85,alpha:0},25).to({_off:true},114).wait(265));

	// Layer_5
	this.instance_11 = new lib.Symbol85();
	this.instance_11.setTransform(393.5,12.75,0.5166,0.5166,0,0,0,176.5,0.1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(53).to({_off:false},0).to({scaleX:1.1983,scaleY:1.1983,x:393.55,y:12.8,alpha:1},19,cjs.Ease.quadIn).to({regY:0,scaleX:1,scaleY:1,x:393.5,y:12.7},7,cjs.Ease.quadOut).wait(30).to({alpha:0},6).to({_off:true},1).wait(434));

	// Layer_2
	this.instance_12 = new lib.Symbol89();
	this.instance_12.setTransform(488.3,14.5,1,1,0,0,0,111.3,0);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(5).to({_off:false},0).to({x:471.85},43).to({x:469.95},5).to({x:467.3,alpha:0},7).to({_off:true},1).wait(489));

	// Layer_3
	this.instance_13 = new lib.Symbol88();
	this.instance_13.setTransform(364.8,-15.55,1,1,0,0,0,157.8,-0.1);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(5).to({_off:false},0).wait(104).to({alpha:0},6).to({_off:true},1).wait(434));

	// Layer_1
	this.instance_14 = new lib.f2();
	this.instance_14.setTransform(0,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true},343).wait(207));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-179.9,846,352);


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

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(600));

	// Layer_8
	this.instance = new lib.Symbol91();
	this.instance.setTransform(364.45,45.05,1,1,0,0,0,369.4,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(569).to({_off:false},0).to({alpha:1},15).wait(16));

	// Layer_7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_69 = new cjs.Graphics().moveTo(-577.9,-61).lineTo(577.9,-61).lineTo(462.9,59).lineTo(-577.9,61).closePath();
	var mask_graphics_70 = new cjs.Graphics().moveTo(-577.9,-61).lineTo(577.9,-61).lineTo(462.9,59).lineTo(-577.9,61).closePath();
	var mask_graphics_71 = new cjs.Graphics().moveTo(-577.9,-61).lineTo(578,-61).lineTo(462.9,59).lineTo(-577.9,61).closePath();
	var mask_graphics_72 = new cjs.Graphics().moveTo(-577.9,-61).lineTo(578,-61).lineTo(462.9,59).lineTo(-577.9,61).closePath();
	var mask_graphics_73 = new cjs.Graphics().moveTo(-578,-61).lineTo(578,-61).lineTo(463,59).lineTo(-578,61).closePath();
	var mask_graphics_74 = new cjs.Graphics().moveTo(-578,-61).lineTo(578,-61).lineTo(463,59).lineTo(-578,61).closePath();
	var mask_graphics_75 = new cjs.Graphics().moveTo(-578,-61).lineTo(577.9,-61).lineTo(463,59).lineTo(-578,61).closePath();
	var mask_graphics_76 = new cjs.Graphics().moveTo(-578,-61).lineTo(577.9,-61).lineTo(463,59).lineTo(-578,61).closePath();
	var mask_graphics_77 = new cjs.Graphics().moveTo(-578,-61).lineTo(577.9,-61).lineTo(462.9,59).lineTo(-578,61).closePath();
	var mask_graphics_78 = new cjs.Graphics().moveTo(-577.9,-61).lineTo(577.9,-61).lineTo(462.9,59).lineTo(-577.9,61).closePath();
	var mask_graphics_79 = new cjs.Graphics().moveTo(-577.9,-61).lineTo(577.9,-61).lineTo(462.9,59).lineTo(-577.9,61).closePath();
	var mask_graphics_80 = new cjs.Graphics().moveTo(-577.9,-61).lineTo(577.9,-61).lineTo(462.9,59).lineTo(-577.9,61).closePath();
	var mask_graphics_81 = new cjs.Graphics().moveTo(-577.9,-61).lineTo(578,-61).lineTo(462.9,59).lineTo(-577.9,61).closePath();
	var mask_graphics_82 = new cjs.Graphics().moveTo(-578,-61).lineTo(578,-61).lineTo(463,59).lineTo(-578,61).closePath();

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(69).to({graphics:mask_graphics_69,x:-572.9,y:49.05}).wait(1).to({graphics:mask_graphics_70,x:-509.0577,y:49.05}).wait(1).to({graphics:mask_graphics_71,x:-445.2154,y:49.05}).wait(1).to({graphics:mask_graphics_72,x:-381.3731,y:49.05}).wait(1).to({graphics:mask_graphics_73,x:-317.5308,y:49.05}).wait(1).to({graphics:mask_graphics_74,x:-253.6885,y:49.05}).wait(1).to({graphics:mask_graphics_75,x:-189.8462,y:49.05}).wait(1).to({graphics:mask_graphics_76,x:-126.0038,y:49.05}).wait(1).to({graphics:mask_graphics_77,x:-62.1615,y:49.05}).wait(1).to({graphics:mask_graphics_78,x:1.6808,y:49.05}).wait(1).to({graphics:mask_graphics_79,x:65.5231,y:49.05}).wait(1).to({graphics:mask_graphics_80,x:129.3654,y:49.05}).wait(1).to({graphics:mask_graphics_81,x:193.2077,y:49.05}).wait(1).to({graphics:mask_graphics_82,x:257.05,y:49.05}).wait(518));

	// Layer_1
	this.instance_1 = new lib.Symbol49("synched",0);
	this.instance_1.setTransform(364,45,1,1,0,0,0,364,0);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(69).to({_off:false},0).wait(531));

	// Isolation_Mode
	this.instance_2 = new lib.Symbol22("synched",0);
	this.instance_2.setTransform(364.5,45.55,1,1,0,0,0,366.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},82).wait(518));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(359.1,33.1,475.9,85.69999999999999);
// library properties:
lib.properties = {
	id: 'AEDC430DAE636748BAC31A6C01E90BA7',
	width: 728,
	height: 90,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/728_90_atlas_1.png?1667646007089", id:"728_90_atlas_1"}
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