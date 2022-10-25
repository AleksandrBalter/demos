(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"728_90_atlas_1", frames: [[935,92,61,61],[730,146,53,53],[890,146,41,41],[935,0,82,90],[0,0,728,90],[0,92,728,90],[0,184,728,90],[838,146,50,50],[785,146,51,51],[730,88,203,56],[730,0,179,86]]}
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



(lib.ball1 = function() {
	this.initialize(ss["728_90_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ball2 = function() {
	this.initialize(ss["728_90_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ball3 = function() {
	this.initialize(ss["728_90_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.bigball = function() {
	this.initialize(ss["728_90_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.f1 = function() {
	this.initialize(ss["728_90_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.f2 = function() {
	this.initialize(ss["728_90_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.f3 = function() {
	this.initialize(ss["728_90_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.icon1 = function() {
	this.initialize(ss["728_90_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.icon2 = function() {
	this.initialize(ss["728_90_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.initialize(ss["728_90_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.planet = function() {
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


(lib.Group_3_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3_0, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,0,0), null);


(lib.Group_2_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#ED1C24").beginStroke().moveTo(-74.1,-10.7).curveTo(-43.1,-24.9,-10.4,-30.8).curveTo(-5.7,-31.7,8.6,-32.8).curveTo(24.7,-34,39.1,-34.2).curveTo(79.5,-35.1,73.2,-28.2).curveTo(71.3,-26.2,59.2,-19.9).curveTo(46.3,-13.4,43.7,-11.9).curveTo(36.1,-7.5,26.6,1.2).curveTo(13.6,13,10.4,15.5).curveTo(2.8,21.6,-7.2,34.3).curveTo(-37.1,3.9,-74.1,-10.7).closePath();
	this.shape.setTransform(74.0504,34.3284);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_0, new cjs.Rectangle(0,0,148.1,68.7), null);


(lib.Group_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#ED1C24").beginStroke().moveTo(-30.8,25.6).curveTo(-24.9,14.3,-17.6,1.9).curveTo(-11.1,-9.1,-8.6,-12.4).curveTo(9,-36.1,32.5,-55.2).curveTo(29.5,-19.8,42,15.7).curveTo(27.8,18.7,20.1,22.3).curveTo(17,23.8,2.2,29.6).curveTo(-8.3,33.7,-14.9,38).lineTo(-27.3,47.2).curveTo(-37.1,54.4,-39.4,55).lineTo(-40.4,55.2).curveTo(-46.2,55.2,-30.8,25.6).closePath();
	this.shape.setTransform(41.8825,55.1809);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(-0.1,0,84,110.4), null);


(lib.Group_1_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#ED1C24").beginStroke().moveTo(-55,-14.3).curveTo(-42,-18.1,-29.4,-20.4).curveTo(-24.7,-21.2,-10.4,-22.3).curveTo(5.7,-23.5,20.1,-23.8).curveTo(60.5,-24.6,54.2,-17.7).curveTo(52.3,-15.7,40.2,-9.4).curveTo(27.3,-2.9,24.7,-1.5).curveTo(17.4,2.8,8.8,10.6).curveTo(-0.7,19.5,-6,23.9).curveTo(-29.8,1.9,-55,-14.3).closePath();
	this.shape.setTransform(55.0254,23.8784);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_0, new cjs.Rectangle(0,0,110.1,47.8), null);


(lib.Group_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#ED1C24").beginStroke().moveTo(-18.5,13.2).curveTo(-12.6,2,-5.3,-10.4).curveTo(1.2,-21.4,3.7,-24.8).curveTo(10.3,-33.7,18.6,-42.8).curveTo(21.5,-16.8,29.6,11.2).lineTo(13.2,17.7).curveTo(3.7,21.5,-2.6,25.7).lineTo(-15,34.8).curveTo(-24.8,42,-27.1,42.7).lineTo(-28,42.8).curveTo(-33.9,42.8,-18.5,13.2).closePath();
	this.shape.setTransform(29.5575,42.8309);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(-0.1,0,59.300000000000004,85.7), null);


(lib.Group_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#ED1C24").beginStroke().moveTo(-39.7,-16.1).curveTo(-15.3,-18.8,10.7,-18.9).curveTo(44.6,-19.1,38.8,-12.8).curveTo(37,-10.8,24.9,-4.5).curveTo(11.9,2,9.4,3.5).curveTo(4.2,6.5,-1.1,10.8).curveTo(-4.7,13.7,-10.3,18.9).curveTo(-23.6,0.8,-39.7,-16.1).closePath();
	this.shape.setTransform(39.6675,18.9233);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,79.4,37.9), null);


(lib.Group = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#ED1C24").beginStroke().moveTo(-14.8,7).curveTo(-4.5,-13.7,7.3,-32).curveTo(14.5,-12.3,23.6,5.2).curveTo(17.2,7.6,13.5,9.3).curveTo(8,11.8,3.5,14.8).lineTo(-8.9,23.9).curveTo(-18.7,31.1,-21,31.8).lineTo(-22,32).curveTo(-27.3,32,-14.8,7).closePath();
	this.shape.setTransform(23.4909,31.9546);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,47.1,63.9), null);


(lib.Symbol48 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#000000").beginStroke().moveTo(2.9,5.5).lineTo(2.9,-2.2).lineTo(-3.2,5.5).lineTo(-4.8,5.5).lineTo(-4.8,-5.5).lineTo(-2.9,-5.5).lineTo(-2.9,2.2).lineTo(3.2,-5.5).lineTo(4.8,-5.5).lineTo(4.8,5.5).closePath();
	this.shape.setTransform(185.325,2.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#000000").beginStroke().moveTo(2.9,5.5).lineTo(2.9,-2.2).lineTo(-3.2,5.5).lineTo(-4.8,5.5).lineTo(-4.8,-5.5).lineTo(-2.9,-5.5).lineTo(-2.9,2.2).lineTo(3.2,-5.5).lineTo(4.8,-5.5).lineTo(4.8,5.5).closePath();
	this.shape_1.setTransform(171.875,2.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#000000").beginStroke().moveTo(3.6,7).lineTo(3.6,4).lineTo(-5.5,4).lineTo(-5.5,-7).lineTo(-3.6,-7).lineTo(-3.6,2.2).lineTo(1.8,2.2).lineTo(1.8,-7).lineTo(3.7,-7).lineTo(3.7,2.2).lineTo(5.5,2.2).lineTo(5.5,7).closePath();
	this.shape_2.setTransform(158.525,3.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(2.9,5.5).lineTo(2.9,-2.2).lineTo(-3.2,5.5).lineTo(-4.8,5.5).lineTo(-4.8,-5.5).lineTo(-2.9,-5.5).lineTo(-2.9,2.2).lineTo(3.2,-5.5).lineTo(4.8,-5.5).lineTo(4.8,5.5).closePath();
	this.shape_3.setTransform(144.325,2.35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#000000").beginStroke().moveTo(-4.3,3.1).lineTo(-2.7,2.2).curveTo(-2.1,4,0.1,4).curveTo(1.2,4,1.8,3.6).curveTo(2.5,3.1,2.5,2.3).curveTo(2.5,1.6,2,1.2).curveTo(1.5,0.8,0.6,0.8).lineTo(-1,0.8).lineTo(-1,-0.9).lineTo(0.2,-0.9).curveTo(1,-0.9,1.5,-1.4).curveTo(2,-1.8,2,-2.4).curveTo(2,-3.2,1.4,-3.6).curveTo(0.9,-4,-0.1,-4.1).curveTo(-1.9,-4,-2.6,-2.4).lineTo(-4.1,-3.3).curveTo(-3,-5.8,-0.1,-5.8).curveTo(1.7,-5.8,2.8,-4.9).curveTo(3.8,-4,3.8,-2.6).curveTo(3.8,-0.9,2.5,-0.2).curveTo(4.3,0.7,4.3,2.5).curveTo(4.3,3.9,3.2,4.8).curveTo(2.1,5.8,0.1,5.8).curveTo(-3.2,5.8,-4.3,3.1).closePath();
	this.shape_4.setTransform(132.125,2.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#000000").beginStroke().moveTo(-4.2,4.1).curveTo(-5.8,2.4,-5.8,-0).curveTo(-5.8,-2.5,-4.2,-4.1).curveTo(-2.4,-5.8,-0,-5.8).curveTo(2.4,-5.8,4.1,-4.1).curveTo(5.8,-2.4,5.8,-0).curveTo(5.8,2.4,4.1,4.1).curveTo(2.4,5.8,-0,5.8).curveTo(-2.4,5.8,-4.2,4.1).closePath().moveTo(-2.8,-2.8).curveTo(-3.9,-1.7,-3.9,-0).curveTo(-3.9,1.7,-2.8,2.8).curveTo(-1.6,3.9,-0,3.9).curveTo(1.6,3.9,2.8,2.8).curveTo(3.9,1.7,3.8,-0).curveTo(3.9,-1.7,2.8,-2.8).curveTo(1.6,-3.9,-0,-3.9).curveTo(-1.6,-3.9,-2.8,-2.8).closePath();
	this.shape_5.setTransform(119.65,2.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#000000").beginStroke().moveTo(2.8,5.5).lineTo(2.8,-3.6).lineTo(-2.9,-3.6).lineTo(-2.9,5.5).lineTo(-4.8,5.5).lineTo(-4.8,-5.5).lineTo(4.8,-5.5).lineTo(4.8,5.5).closePath();
	this.shape_6.setTransform(105.775,2.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#000000").beginStroke().moveTo(-4.2,5.5).lineTo(-4.2,-5.5).lineTo(-2.3,-5.5).lineTo(-2.3,-1.5).lineTo(0.4,-1.5).curveTo(2.1,-1.6,3.1,-0.6).curveTo(4.2,0.4,4.2,2).curveTo(4.2,3.5,3.1,4.6).curveTo(2,5.5,0.4,5.5).closePath().moveTo(-2.3,3.7).lineTo(0.4,3.7).curveTo(1.2,3.7,1.8,3.2).curveTo(2.3,2.8,2.3,2).curveTo(2.4,1.2,1.7,0.7).curveTo(1.2,0.2,0.4,0.2).lineTo(-2.3,0.2).closePath();
	this.shape_7.setTransform(87.2,2.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#000000").beginStroke().moveTo(-4.5,5.5).lineTo(-4.5,-5.5).lineTo(0.5,-5.5).curveTo(2.2,-5.5,3.1,-4.7).curveTo(4,-3.8,4,-2.5).curveTo(4,-0.9,2.9,-0.2).curveTo(4.5,0.5,4.5,2.4).curveTo(4.5,3.8,3.6,4.7).curveTo(2.7,5.5,1,5.5).closePath().moveTo(-2.6,3.8).lineTo(0.9,3.8).curveTo(1.7,3.8,2.2,3.3).curveTo(2.7,3,2.7,2.2).curveTo(2.7,1.6,2.2,1.2).curveTo(1.7,0.8,0.9,0.8).lineTo(-2.6,0.8).closePath().moveTo(-2.6,-0.9).lineTo(0.4,-0.9).curveTo(2.1,-0.9,2.1,-2.3).curveTo(2.1,-3.8,0.4,-3.8).lineTo(-2.6,-3.8).closePath();
	this.shape_8.setTransform(75.35,2.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#000000").beginStroke().moveTo(-4.2,4.1).curveTo(-5.8,2.4,-5.8,-0).curveTo(-5.8,-2.4,-4.2,-4.1).curveTo(-2.6,-5.8,-0.3,-5.8).curveTo(2.5,-5.8,3.9,-3.6).lineTo(3.9,-5.5).lineTo(5.8,-5.5).lineTo(5.8,5.5).lineTo(3.9,5.5).lineTo(3.9,3.6).curveTo(2.5,5.8,-0.3,5.8).curveTo(-2.6,5.8,-4.2,4.1).closePath().moveTo(-2.8,-2.8).curveTo(-3.9,-1.7,-3.9,-0).curveTo(-3.9,1.6,-2.8,2.8).curveTo(-1.6,3.9,0,3.9).curveTo(1.6,3.9,2.8,2.8).curveTo(3.9,1.6,3.9,-0).curveTo(3.9,-1.7,2.8,-2.8).curveTo(1.6,-4,0,-4).curveTo(-1.6,-4,-2.8,-2.8).closePath();
	this.shape_9.setTransform(61.1,2.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#000000").beginStroke().moveTo(-0.9,5.5).lineTo(-0.9,-3.6).lineTo(-4.7,-3.6).lineTo(-4.7,-5.5).lineTo(4.7,-5.5).lineTo(4.7,-3.6).lineTo(1,-3.6).lineTo(1,5.5).closePath();
	this.shape_10.setTransform(48.525,2.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#000000").beginStroke().moveTo(-3.7,4.1).curveTo(-5.3,2.5,-5.3,-0).curveTo(-5.3,-2.5,-3.7,-4.1).curveTo(-2.1,-5.8,0.4,-5.8).curveTo(2.1,-5.8,3.4,-5).curveTo(4.7,-4.2,5.3,-2.9).lineTo(3.7,-2).curveTo(3.3,-2.8,2.4,-3.4).curveTo(1.5,-3.9,0.4,-3.9).curveTo(-1.2,-3.9,-2.4,-2.8).curveTo(-3.5,-1.6,-3.5,-0).curveTo(-3.5,1.6,-2.4,2.8).curveTo(-1.2,3.9,0.4,3.9).curveTo(1.5,3.9,2.4,3.3).curveTo(3.3,2.9,3.8,2).lineTo(5.4,2.9).curveTo(4.6,4.2,3.4,5).curveTo(2,5.8,0.4,5.8).curveTo(-2.1,5.8,-3.7,4.1).closePath();
	this.shape_11.setTransform(36.75,2.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#000000").beginStroke().moveTo(-4.2,4.1).curveTo(-5.8,2.4,-5.8,-0).curveTo(-5.8,-2.4,-4.2,-4.1).curveTo(-2.5,-5.8,-0.3,-5.8).curveTo(2.5,-5.8,3.9,-3.6).lineTo(3.9,-5.5).lineTo(5.8,-5.5).lineTo(5.8,5.5).lineTo(3.9,5.5).lineTo(3.9,3.6).curveTo(2.5,5.8,-0.3,5.8).curveTo(-2.6,5.8,-4.2,4.1).closePath().moveTo(-2.8,-2.8).curveTo(-3.9,-1.7,-3.9,-0).curveTo(-3.9,1.6,-2.8,2.8).curveTo(-1.6,3.9,-0,3.9).curveTo(1.6,3.9,2.8,2.8).curveTo(3.9,1.6,3.9,-0).curveTo(3.9,-1.7,2.8,-2.8).curveTo(1.6,-4,-0,-4).curveTo(-1.6,-4,-2.8,-2.8).closePath();
	this.shape_12.setTransform(22.25,2.35);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#000000").beginStroke().moveTo(-3.5,7).curveTo(-4.9,6.1,-5.4,4.4).lineTo(-3.7,3.4).curveTo(-3,6.1,0.1,6.1).curveTo(1.6,6.1,2.5,5.3).curveTo(3.4,4.7,3.4,3.4).curveTo(3.4,2.2,2.6,1.5).curveTo(1.7,0.8,0.2,0.8).lineTo(-1.6,0.8).lineTo(-1.6,-1.1).lineTo(-0.2,-1.1).curveTo(1.2,-1.1,2,-1.8).curveTo(2.8,-2.4,2.8,-3.6).curveTo(2.9,-4.7,2,-5.4).curveTo(1.3,-6.1,-0.1,-6.1).curveTo(-2.7,-6,-3.5,-3.8).lineTo(-5.3,-4.8).curveTo(-3.9,-8,-0.1,-8).curveTo(2.1,-8,3.5,-6.7).curveTo(4.8,-5.5,4.8,-3.7).curveTo(4.9,-1.4,2.9,-0.2).curveTo(5.5,0.8,5.5,3.5).curveTo(5.4,5.5,3.9,6.8).curveTo(2.5,8,0.1,8).curveTo(-2.2,8,-3.5,7).closePath();
	this.shape_13.setTransform(8.4,0.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol48, new cjs.Rectangle(0,-15.3,194.6,30.700000000000003), null);


(lib.Symbol47 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-2.1,9.5).curveTo(-3,8.6,-3,7.4).curveTo(-3,6.1,-2.1,5.2).curveTo(-1.3,4.3,-0,4.3).curveTo(1.2,4.3,2.1,5.2).curveTo(3,6.1,3,7.4).curveTo(3,8.6,2.1,9.5).curveTo(1.2,10.3,-0,10.3).curveTo(-1.3,10.3,-2.1,9.5).closePath().moveTo(-2,2.5).lineTo(-3,-4.6).lineTo(-3,-10.4).lineTo(2.9,-10.4).lineTo(2.9,-4.6).lineTo(2,2.5).closePath();
	this.shape.setTransform(105.175,0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#000000").beginStroke().moveTo(-6.4,7.3).lineTo(-6.4,-7.3).lineTo(-1.6,-7.3).lineTo(-1.6,-3.2).lineTo(0.8,-3.2).curveTo(3.4,-3.1,4.9,-1.7).curveTo(6.4,-0.4,6.4,2).curveTo(6.4,4.5,4.9,5.8).curveTo(3.4,7.3,0.8,7.3).closePath().moveTo(-1.6,3.2).lineTo(0.5,3.2).curveTo(1.1,3.2,1.4,2.9).curveTo(1.7,2.6,1.7,2).curveTo(1.7,1.5,1.4,1.2).curveTo(1.1,0.8,0.5,0.8).lineTo(-1.6,0.8).closePath();
	this.shape_1.setTransform(93.025,3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#000000").beginStroke().moveTo(-2.4,7.3).lineTo(-2.4,-2.6).lineTo(-6.6,-2.6).lineTo(-6.6,-7.3).lineTo(6.6,-7.3).lineTo(6.6,-2.6).lineTo(2.4,-2.6).lineTo(2.4,7.3).closePath();
	this.shape_2.setTransform(77.375,3.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-5.9,5.5).curveTo(-7.9,3.2,-7.9,-0).curveTo(-7.9,-3.3,-5.9,-5.5).curveTo(-4,-7.6,-1.1,-7.7).curveTo(1.6,-7.7,3.1,-5.9).lineTo(3.1,-7.3).lineTo(7.9,-7.3).lineTo(7.9,7.3).lineTo(3.1,7.3).lineTo(3.1,5.9).curveTo(1.6,7.6,-1.1,7.7).curveTo(-4,7.7,-5.9,5.5).closePath().moveTo(-2.2,-2.3).curveTo(-3,-1.4,-3,-0).curveTo(-3,1.4,-2.2,2.3).curveTo(-1.4,3.1,0,3.1).curveTo(1.4,3.1,2.2,2.3).curveTo(3.1,1.4,3.1,-0).curveTo(3.1,-1.4,2.2,-2.3).curveTo(1.4,-3.1,0,-3.2).curveTo(-1.4,-3.1,-2.2,-2.3).closePath();
	this.shape_3.setTransform(60.275,3.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#000000").beginStroke().moveTo(-2.4,7.3).lineTo(-2.4,-2.6).lineTo(-6.6,-2.6).lineTo(-6.6,-7.3).lineTo(6.6,-7.3).lineTo(6.6,-2.6).lineTo(2.4,-2.6).lineTo(2.4,7.3).closePath();
	this.shape_4.setTransform(43.875,3.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#000000").beginStroke().moveTo(-5.4,5.5).curveTo(-7.6,3.4,-7.6,0.1).curveTo(-7.6,-3.3,-5.5,-5.5).curveTo(-3.2,-7.6,0.1,-7.7).curveTo(3.3,-7.7,5.5,-5.5).curveTo(7.6,-3.4,7.6,-0.1).curveTo(7.6,1,7.4,1.7).lineTo(-2.6,1.7).curveTo(-1.9,3.6,0.6,3.5).curveTo(2.1,3.6,3.2,2.5).lineTo(6.8,5).curveTo(4.7,7.6,0.5,7.7).curveTo(-3.1,7.7,-5.4,5.5).closePath().moveTo(-2.7,-1.5).lineTo(2.9,-1.5).curveTo(2.3,-3.6,0.2,-3.6).curveTo(-2.1,-3.6,-2.7,-1.5).closePath();
	this.shape_5.setTransform(27.8,3.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#000000").beginStroke().moveTo(-7.3,7.2).lineTo(-7.3,2.8).curveTo(-6.2,3,-5.8,2.5).curveTo(-5.2,1.9,-5.2,0.5).lineTo(-5.2,-7.3).lineTo(7.3,-7.3).lineTo(7.3,7.2).lineTo(2.5,7.2).lineTo(2.5,-2.7).lineTo(-0.4,-2.7).lineTo(-0.4,1.2).curveTo(-0.4,4.6,-2.1,6.1).curveTo(-3.4,7.3,-5.9,7.3).lineTo(-7.3,7.2).closePath();
	this.shape_6.setTransform(9.8,3.6421);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol47, new cjs.Rectangle(0,-20.3,112.5,40.6), null);


(lib.Symbol45 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bigball();
	this.instance.setTransform(0,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#1E94C6").beginStroke().moveTo(-28.8,28.8).curveTo(-40.8,16.9,-40.8,0).curveTo(-40.8,-16.9,-28.8,-28.9).curveTo(-16.9,-40.8,-0,-40.8).curveTo(16.9,-40.8,28.8,-28.9).curveTo(40.8,-16.9,40.8,0).curveTo(40.8,16.9,28.8,28.8).curveTo(16.9,40.8,-0,40.8).curveTo(-16.9,40.8,-28.8,28.8).closePath();
	this.shape.setTransform(42.5,4.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol45, new cjs.Rectangle(0,-45,83.3,90.5), null);


(lib.Symbol41 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginRadialGradientFill(["#3C1F0F","#341A0C","#1E0B04","#170601"],[0,0.337,0.863,1],2.6,0,0,2.6,0,37).beginStroke().moveTo(12.2,22.7).curveTo(6.2,18.1,-3.4,18).curveTo(-12.9,17.9,-21.9,22.4).curveTo(-30.2,26.4,-37.2,33.9).curveTo(-39.6,24.7,-36.7,12.7).curveTo(-33.8,0.9,-26.7,-9.7).curveTo(-19.2,-20.8,-9.2,-27.3).curveTo(1.9,-34.4,14.1,-34.3).curveTo(26.3,-34.2,32.6,-26.9).curveTo(38.3,-20.3,38.3,-9).curveTo(38.3,1.6,33.3,13.3).curveTo(28.3,25.2,19.7,34.4).curveTo(17.7,26.8,12.2,22.7).closePath();
	this.shape.setTransform(8.8414,-1.9325,0.2305,0.2305);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FF6368").beginStroke().moveTo(-10.5,16.4).curveTo(-24.4,16.2,-30.5,6.4).curveTo(-36,-2.4,-34,-16.4).lineTo(34.5,-15.6).curveTo(27.2,-1.7,15.8,7).curveTo(3.5,16.4,-10.1,16.4).lineTo(-10.5,16.4).closePath();
	this.shape_1.setTransform(8.2454,5.1687,0.2305,0.2305);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#F15365").beginStroke().moveTo(-14.3,42.6).curveTo(-30.8,42.4,-36.2,29).curveTo(-41,16.9,-35.3,-0.4).curveTo(-29.6,-17.7,-16.9,-29.6).curveTo(-2.7,-42.7,14.1,-42.6).curveTo(31,-42.4,36.3,-29).curveTo(41,-16.9,35.1,0.4).curveTo(29.2,17.6,16.3,29.6).curveTo(2.3,42.6,-13.8,42.6).lineTo(-14.3,42.6).closePath();
	this.shape_2.setTransform(8.8443,-0.036,0.2305,0.2305);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol41, new cjs.Rectangle(0,-9.8,17.8,19.6), null);


(lib.Symbol39 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.8,5.7).lineTo(-3.8,-5.7).lineTo(0.1,-5.7).curveTo(1.8,-5.7,2.8,-4.7).curveTo(3.8,-3.6,3.8,-1.9).curveTo(3.8,-0.3,2.8,0.7).curveTo(1.8,1.7,0.1,1.7).lineTo(-1.5,1.7).lineTo(-1.5,5.7).closePath().moveTo(-1.5,-0.2).lineTo(0.1,-0.2).curveTo(0.7,-0.2,1.1,-0.7).curveTo(1.4,-1.1,1.4,-1.9).curveTo(1.4,-2.8,1.1,-3.3).curveTo(0.7,-3.8,0.1,-3.8).lineTo(-1.5,-3.8).closePath();
	this.shape.setTransform(32.25,-0.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#FFFFFF").beginStroke().moveTo(1.3,5.7).lineTo(-0.4,1.5).lineTo(-1.5,1.5).lineTo(-1.5,5.7).lineTo(-3.8,5.7).lineTo(-3.8,-5.7).lineTo(-0.1,-5.7).curveTo(1.6,-5.7,2.5,-4.8).curveTo(3.5,-3.9,3.5,-2.3).curveTo(3.5,0,1.8,0.9).lineTo(3.8,5.6).lineTo(3.8,5.7).closePath().moveTo(-1.5,-0.4).lineTo(-0.2,-0.4).curveTo(0.5,-0.4,0.8,-0.8).curveTo(1.2,-1.3,1.2,-2.1).curveTo(1.2,-3.8,-0.2,-3.8).lineTo(-1.5,-3.8).closePath();
	this.shape_1.setTransform(23.425,-0.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-3.3,5.7).lineTo(-3.3,-5.7).lineTo(3.3,-5.7).lineTo(3.3,-3.8).lineTo(-1,-3.8).lineTo(-1,-1.1).lineTo(2.6,-1.1).lineTo(2.6,0.8).lineTo(-1,0.8).lineTo(-1,3.8).lineTo(3.3,3.8).lineTo(3.3,5.7).closePath();
	this.shape_2.setTransform(15.025,-0.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#FFFFFF").beginStroke().moveTo(-1.8,5.4).curveTo(-2.7,5,-3.2,4.1).curveTo(-3.7,3.3,-3.7,2.1).lineTo(-1.4,2.1).curveTo(-1.4,3.1,-1.1,3.5).curveTo(-0.7,4,0.2,4).curveTo(1.4,4,1.4,2.7).curveTo(1.4,2,1,1.6).curveTo(0.7,1.3,-0.3,0.9).curveTo(-2,0.3,-2.7,-0.6).curveTo(-3.5,-1.4,-3.5,-2.7).curveTo(-3.5,-4.1,-2.4,-4.9).curveTo(-1.4,-5.9,0.1,-5.8).curveTo(1.2,-5.8,2,-5.4).curveTo(2.8,-5,3.3,-4.1).curveTo(3.7,-3.3,3.7,-2.3).lineTo(1.4,-2.3).curveTo(1.4,-3.1,1.1,-3.6).curveTo(0.7,-4,0.1,-4).curveTo(-0.5,-3.9,-0.8,-3.6).curveTo(-1.2,-3.3,-1.2,-2.7).curveTo(-1.2,-2.1,-0.8,-1.8).curveTo(-0.4,-1.4,0.5,-1).curveTo(2.2,-0.4,3,0.5).curveTo(3.7,1.4,3.7,2.7).curveTo(3.7,4.2,2.8,5).curveTo(1.8,5.9,0.2,5.9).curveTo(-0.9,5.8,-1.8,5.4).closePath();
	this.shape_3.setTransform(6.525,-0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(0,-11.6,38.7,23.2), null);


(lib.Symbol32 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ball1();
	this.instance.setTransform(0,-30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,-30.5,61,61), null);


(lib.Symbol31 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ball3();
	this.instance.setTransform(0,-20.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,-20.5,41,41), null);


(lib.Symbol30 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.ball2();
	this.instance.setTransform(0,-26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,-26.5,53,53), null);


(lib.Symbol29 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.planet();
	this.instance.setTransform(0,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,-43,179,86), null);


(lib.Symbol28 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#70A22F").beginStroke().moveTo(-32.4,9).curveTo(-45.8,5.2,-45.8,-0).curveTo(-45.8,-5.2,-32.4,-8.9).curveTo(-18.9,-12.7,0,-12.6).curveTo(19,-12.7,32.4,-8.9).curveTo(45.8,-5.2,45.8,-0).curveTo(45.8,5.2,32.4,9).curveTo(19,12.7,0,12.7).curveTo(-19,12.7,-32.4,9).closePath();
	this.shape.setTransform(10.7693,0.0377,0.2351,0.2351);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,-2.9,21.6,5.9), null);


(lib.Symbol27 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#F3F3EB").beginStroke().moveTo(-20.4,22.5).curveTo(-30.4,16.5,-35,6.7).lineTo(-35,6.2).curveTo(-35,-8.2,-24.7,-18.4).curveTo(-14.4,-28.7,-0,-28.7).curveTo(14.5,-28.7,24.7,-18.4).curveTo(34.9,-8.2,35,6.2).curveTo(34.9,11.2,33.5,16).curveTo(27.9,21.9,19.9,25.2).curveTo(11.7,28.7,2.5,28.7).curveTo(-10,28.7,-20.4,22.5).closePath();
	this.shape.setTransform(8.1938,-1.4515,0.2351,0.2351);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#BCC6BB").beginStroke().moveTo(-24.7,24.7).curveTo(-35,14.5,-35,0).curveTo(-35,-14.4,-24.7,-24.7).curveTo(-14.4,-34.9,-0,-34.9).curveTo(14.5,-34.9,24.7,-24.7).curveTo(34.9,-14.4,35,0).curveTo(34.9,14.5,24.7,24.7).curveTo(14.5,34.9,-0,34.9).curveTo(-14.5,34.9,-24.7,24.7).closePath();
	this.shape_1.setTransform(8.1938,0.0122,0.2351,0.2351);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,-8.2,16.4,16.4), null);


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


(lib.Symbol11copy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-4.8,3.2).lineTo(-1.7,1.6).curveTo(-1.2,2.8,0.1,2.8).curveTo(1.1,2.8,1.1,2.2).curveTo(1.1,1.9,0.6,1.7).lineTo(-0.8,1.3).lineTo(-2,0.9).lineTo(-3.1,0.4).curveTo(-3.7,-0.1,-4,-0.7).curveTo(-4.3,-1.3,-4.3,-2.1).curveTo(-4.3,-3.8,-3,-4.8).curveTo(-1.7,-5.8,0.1,-5.8).curveTo(3.3,-5.8,4.6,-3.2).lineTo(1.6,-1.9).curveTo(1.1,-2.8,0.2,-2.8).curveTo(-0.6,-2.8,-0.6,-2.3).curveTo(-0.6,-2,-0.1,-1.8).lineTo(1.3,-1.4).curveTo(2,-1.3,2.5,-1).curveTo(3.1,-0.9,3.6,-0.4).curveTo(4.2,-0.1,4.5,0.6).curveTo(4.8,1.2,4.8,2.1).curveTo(4.8,4,3.4,4.9).curveTo(2,5.8,0.1,5.8).curveTo(-3.6,5.8,-4.8,3.2).closePath();
	this.shape.setTransform(187.725,22.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#000000").beginStroke().moveTo(-4.1,4.2).curveTo(-5.7,2.6,-5.7,0).curveTo(-5.7,-2.4,-4.1,-4.1).curveTo(-2.5,-5.8,0.1,-5.8).curveTo(2.6,-5.8,4.2,-4.1).curveTo(5.8,-2.5,5.8,0).curveTo(5.8,0.7,5.6,1.4).lineTo(-2,1.4).curveTo(-1.4,2.7,0.5,2.7).curveTo(1.6,2.7,2.5,1.9).lineTo(5.1,3.7).curveTo(3.5,5.8,0.4,5.8).curveTo(-2.4,5.8,-4.1,4.2).closePath().moveTo(-2.1,-1.2).lineTo(2.2,-1.2).curveTo(1.8,-2.8,0.1,-2.8).curveTo(-1.6,-2.8,-2.1,-1.2).closePath();
	this.shape_1.setTransform(175.3,22.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#000000").beginStroke().moveTo(-3.5,5.6).lineTo(-3.5,-5.4).lineTo(0.2,-5.4).lineTo(0.2,-3.4).curveTo(0.5,-4.4,1.4,-5).curveTo(2.3,-5.6,3.5,-5.6).lineTo(3.5,-1.6).curveTo(2.2,-1.7,1.2,-1.1).curveTo(0.2,-0.4,0.2,1).lineTo(0.2,5.6).closePath();
	this.shape_2.setTransform(164.175,22.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-4.2,4.4).curveTo(-5.4,3.1,-5.4,0.9).lineTo(-5.4,-5.6).lineTo(-1.7,-5.6).lineTo(-1.7,0.4).curveTo(-1.7,1.3,-1.3,1.8).curveTo(-0.9,2.2,-0,2.2).curveTo(0.8,2.2,1.2,1.7).curveTo(1.7,1.1,1.8,0.2).lineTo(1.8,-5.6).lineTo(5.4,-5.6).lineTo(5.4,5.4).lineTo(1.8,5.4).lineTo(1.8,4.3).curveTo(0.8,5.7,-1.4,5.6).curveTo(-3.1,5.6,-4.2,4.4).closePath();
	this.shape_3.setTransform(152.2,22.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#000000").beginStroke().moveTo(-0.8,6.4).curveTo(-2.1,5.3,-2.1,2.8).lineTo(-2.1,-0.5).lineTo(-3.8,-0.5).lineTo(-3.8,-4).lineTo(-2.1,-4).lineTo(-2.1,-6).lineTo(1.5,-7.1).lineTo(1.5,-4).lineTo(3.8,-4).lineTo(3.8,-0.5).lineTo(1.5,-0.5).lineTo(1.5,2.7).curveTo(1.5,3.4,2,3.6).curveTo(2.5,3.7,3.8,3.7).lineTo(3.8,7).lineTo(2.1,7.1).curveTo(0.1,7.1,-0.8,6.4).closePath();
	this.shape_4.setTransform(140.325,21.1571);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#000000").beginStroke().moveTo(-4.2,4.4).curveTo(-5.4,3.1,-5.4,0.9).lineTo(-5.4,-5.6).lineTo(-1.7,-5.6).lineTo(-1.7,0.4).curveTo(-1.7,1.3,-1.3,1.8).curveTo(-0.9,2.2,-0,2.2).curveTo(0.8,2.2,1.3,1.7).curveTo(1.7,1.1,1.8,0.2).lineTo(1.8,-5.6).lineTo(5.4,-5.6).lineTo(5.4,5.4).lineTo(1.8,5.4).lineTo(1.8,4.3).curveTo(0.8,5.7,-1.4,5.6).curveTo(-3.1,5.6,-4.2,4.4).closePath();
	this.shape_5.setTransform(128.8,22.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#000000").beginStroke().moveTo(-4.5,4.2).curveTo(-5.9,2.5,-5.9,0).curveTo(-5.9,-2.5,-4.5,-4.1).curveTo(-3,-5.8,-0.8,-5.8).curveTo(1.2,-5.8,2.3,-4.5).lineTo(2.3,-5.5).lineTo(6,-5.5).lineTo(6,5.5).lineTo(2.3,5.5).lineTo(2.3,4.5).curveTo(1.2,5.8,-0.8,5.8).curveTo(-3,5.8,-4.5,4.2).closePath().moveTo(-1.7,-1.8).curveTo(-2.3,-1,-2.3,0).curveTo(-2.3,1,-1.7,1.7).curveTo(-1,2.4,0,2.4).curveTo(1,2.4,1.7,1.7).curveTo(2.3,1,2.3,0).curveTo(2.3,-1,1.7,-1.8).curveTo(1,-2.4,0,-2.4).curveTo(-1,-2.4,-1.7,-1.8).closePath();
	this.shape_6.setTransform(114.45,22.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#000000").beginStroke().moveTo(-4.1,4.2).curveTo(-5.8,2.6,-5.8,0).curveTo(-5.8,-2.4,-4.1,-4.1).curveTo(-2.5,-5.8,0.1,-5.8).curveTo(2.6,-5.8,4.1,-4.1).curveTo(5.7,-2.5,5.8,0).curveTo(5.7,0.7,5.6,1.4).lineTo(-2,1.4).curveTo(-1.5,2.7,0.5,2.7).curveTo(1.6,2.7,2.5,1.9).lineTo(5.1,3.7).curveTo(3.5,5.8,0.4,5.8).curveTo(-2.4,5.8,-4.1,4.2).closePath().moveTo(-2.1,-1.2).lineTo(2.2,-1.2).curveTo(1.8,-2.8,0.1,-2.8).curveTo(-1.6,-2.8,-2.1,-1.2).closePath();
	this.shape_7.setTransform(100.7,22.65);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#000000").beginStroke().moveTo(-4.7,7.7).lineTo(-4.7,-7.7).lineTo(4.7,-7.7).lineTo(4.7,-3.9).lineTo(-0.8,-3.9).lineTo(-0.8,-1.4).lineTo(4.6,-1.4).lineTo(4.6,2.4).lineTo(-0.8,2.4).lineTo(-0.8,7.7).closePath();
	this.shape_8.setTransform(87.925,20.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#000000").beginStroke().moveTo(-5.8,7.7).lineTo(-5.8,-7.7).lineTo(0.3,-7.7).curveTo(2.6,-7.7,4.1,-6.2).curveTo(5.7,-4.7,5.7,-2.3).curveTo(5.7,0,4.1,1.5).curveTo(2.6,3.1,0.3,3.1).lineTo(-1.8,3.1).lineTo(-1.8,7.7).closePath().moveTo(-1.8,-0.7).lineTo(0.3,-0.7).curveTo(0.9,-0.7,1.3,-1.1).curveTo(1.8,-1.6,1.8,-2.3).curveTo(1.8,-3,1.3,-3.5).curveTo(0.9,-4,0.3,-4).lineTo(-1.8,-4).closePath();
	this.shape_9.setTransform(68.95,20.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#000000").beginStroke().moveTo(1.9,7.7).lineTo(-0.8,2.8).lineTo(-2.2,2.8).lineTo(-2.2,7.7).lineTo(-6.1,7.7).lineTo(-6.1,-7.7).lineTo(0,-7.7).curveTo(2.4,-7.7,4,-6.2).curveTo(5.6,-4.7,5.6,-2.4).curveTo(5.6,-1,4.9,0.2).curveTo(4.2,1.3,3,2).lineTo(6.1,7.7).closePath().moveTo(-2.2,-0.6).lineTo(0,-0.6).curveTo(0.7,-0.6,1.2,-1.1).curveTo(1.7,-1.5,1.7,-2.4).curveTo(1.7,-3.1,1.2,-3.6).curveTo(0.7,-4,0,-4.1).lineTo(-2.2,-4.1).closePath();
	this.shape_10.setTransform(54.675,20.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#000000").beginStroke().moveTo(-4.9,7.7).lineTo(-4.9,-7.7).lineTo(4.9,-7.7).lineTo(4.9,-4.1).lineTo(-1,-4.1).lineTo(-1,-1.9).lineTo(4.3,-1.9).lineTo(4.3,1.8).lineTo(-1,1.8).lineTo(-1,4).lineTo(5,4).lineTo(5,7.7).closePath();
	this.shape_11.setTransform(40.75,20.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#000000").beginStroke().moveTo(-3.8,7).curveTo(-5.4,6,-6.1,4.2).lineTo(-2.7,2.2).curveTo(-1.9,4.3,0.3,4.3).curveTo(2.1,4.3,2.1,3.2).curveTo(2.1,2.6,1.1,2.1).lineTo(-0.8,1.5).curveTo(-3.1,0.9,-4.3,-0.2).curveTo(-5.4,-1.3,-5.4,-3.3).curveTo(-5.4,-5.4,-3.9,-6.7).curveTo(-2.3,-8,-0.1,-8).curveTo(1.9,-8,3.4,-7.1).curveTo(4.9,-6.2,5.6,-4.5).lineTo(2.3,-2.5).curveTo(1.6,-4.3,-0.1,-4.3).curveTo(-0.7,-4.3,-1.1,-4).curveTo(-1.5,-3.8,-1.5,-3.3).curveTo(-1.5,-2.8,-0.9,-2.4).curveTo(-0.4,-2,1.2,-1.6).lineTo(3,-1).curveTo(3.7,-0.7,4.5,-0.1).curveTo(6.1,0.9,6.1,3.2).curveTo(6.1,5.5,4.5,6.7).curveTo(2.8,8.1,0.2,8.1).curveTo(-2.2,8.1,-3.8,7).closePath();
	this.shape_12.setTransform(27.225,20.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#000000").beginStroke().moveTo(-5,5.5).lineTo(-5,-5.5).lineTo(0.8,-5.5).curveTo(2.6,-5.5,3.6,-4.6).curveTo(4.6,-3.8,4.6,-2.3).curveTo(4.6,-0.8,3.5,-0.1).curveTo(5,0.6,5,2.4).curveTo(5,3.8,4,4.6).curveTo(3,5.5,1.1,5.5).closePath().moveTo(-1.5,2.7).lineTo(0.5,2.7).curveTo(1.4,2.8,1.3,1.9).curveTo(1.4,1.3,0.5,1.3).lineTo(-1.5,1.3).closePath().moveTo(-1.5,-1.3).lineTo(0.2,-1.3).curveTo(1.1,-1.3,1.1,-2).curveTo(1.1,-2.7,0.2,-2.8).lineTo(-1.5,-2.8).closePath();
	this.shape_13.setTransform(8.4,22.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#000000").beginStroke().moveTo(-3.3,3.4).curveTo(-4.6,2,-4.6,0).curveTo(-4.6,-2.1,-3.3,-3.4).curveTo(-2,-4.8,0.1,-4.8).curveTo(2.1,-4.7,3.3,-3.3).curveTo(4.6,-2,4.6,0).lineTo(4.5,0.7).lineTo(-3,0.7).curveTo(-2.8,1.9,-1.9,2.6).curveTo(-1.1,3.2,0.2,3.2).curveTo(2.1,3.3,2.8,2).lineTo(4.2,2.7).curveTo(2.9,4.7,0.2,4.8).curveTo(-1.9,4.8,-3.3,3.4).closePath().moveTo(-2,-2.5).curveTo(-2.8,-1.9,-3,-0.6).lineTo(3,-0.6).curveTo(2.8,-1.9,2,-2.6).curveTo(1.2,-3.2,0.1,-3.2).curveTo(-1.1,-3.3,-2,-2.5).closePath();
	this.shape_14.setTransform(187.8,-1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#000000").beginStroke().moveTo(2.4,4.5).lineTo(2.4,-1.8).lineTo(-2.7,4.5).lineTo(-3.9,4.5).lineTo(-3.9,-4.5).lineTo(-2.4,-4.5).lineTo(-2.4,1.8).lineTo(2.6,-4.5).lineTo(3.9,-4.5).lineTo(3.9,4.5).closePath();
	this.shape_15.setTransform(176.45,-1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#000000").beginStroke().moveTo(2.3,4.5).lineTo(2.3,0.7).lineTo(-2.3,0.7).lineTo(-2.3,4.5).lineTo(-3.9,4.5).lineTo(-3.9,-4.5).lineTo(-2.3,-4.5).lineTo(-2.3,-0.7).lineTo(2.3,-0.7).lineTo(2.3,-4.5).lineTo(3.9,-4.5).lineTo(3.9,4.5).closePath();
	this.shape_16.setTransform(165.3,-1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#000000").beginStroke().moveTo(-3.5,3.3).curveTo(-4.8,2,-4.8,0).curveTo(-4.8,-2,-3.5,-3.3).curveTo(-2.1,-4.7,-0.2,-4.8).curveTo(2,-4.7,3.2,-3).lineTo(3.2,-4.5).lineTo(4.8,-4.5).lineTo(4.8,4.5).lineTo(3.2,4.5).lineTo(3.2,3).curveTo(2,4.8,-0.2,4.8).curveTo(-2.1,4.8,-3.5,3.3).closePath().moveTo(-2.3,-2.3).curveTo(-3.2,-1.3,-3.2,0).curveTo(-3.2,1.4,-2.3,2.3).curveTo(-1.3,3.2,0,3.2).curveTo(1.4,3.2,2.3,2.3).curveTo(3.2,1.4,3.2,0).curveTo(3.2,-1.3,2.3,-2.3).curveTo(1.4,-3.2,0,-3.2).curveTo(-1.3,-3.2,-2.3,-2.3).closePath();
	this.shape_17.setTransform(153.25,-1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#000000").beginStroke().moveTo(3.4,5.7).lineTo(3.4,3.3).lineTo(-3.4,3.3).lineTo(-3.4,5.7).lineTo(-4.9,5.7).lineTo(-4.9,1.8).lineTo(-3.8,1.8).curveTo(-2.9,0.6,-2.9,-1.6).lineTo(-2.9,-5.7).lineTo(3.7,-5.7).lineTo(3.7,1.8).lineTo(4.9,1.8).lineTo(4.9,5.7).closePath().moveTo(-1.4,-1.6).curveTo(-1.4,0.4,-2,1.8).lineTo(2.2,1.8).lineTo(2.2,-4.3).lineTo(-1.4,-4.3).closePath();
	this.shape_18.setTransform(141.45,0.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,3.3).curveTo(-4.8,2,-4.8,0).curveTo(-4.8,-2,-3.4,-3.3).curveTo(-2.1,-4.7,-0.2,-4.8).curveTo(2.1,-4.7,3.2,-3).lineTo(3.2,-4.5).lineTo(4.8,-4.5).lineTo(4.8,4.5).lineTo(3.2,4.5).lineTo(3.2,3).curveTo(2.1,4.8,-0.2,4.8).curveTo(-2.1,4.8,-3.4,3.3).closePath().moveTo(-2.3,-2.3).curveTo(-3.2,-1.3,-3.2,0).curveTo(-3.2,1.4,-2.3,2.3).curveTo(-1.4,3.2,-0,3.2).curveTo(1.3,3.2,2.3,2.3).curveTo(3.2,1.4,3.2,0).curveTo(3.2,-1.3,2.3,-2.3).curveTo(1.3,-3.2,-0,-3.2).curveTo(-1.4,-3.2,-2.3,-2.3).closePath();
	this.shape_19.setTransform(129.25,-1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#000000").beginStroke().moveTo(2.3,4.5).lineTo(2.3,-3).lineTo(-2.4,-3).lineTo(-2.4,4.5).lineTo(-3.9,4.5).lineTo(-3.9,-4.5).lineTo(3.9,-4.5).lineTo(3.9,4.5).closePath();
	this.shape_20.setTransform(117.75,-1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,3.3).curveTo(-4.7,2,-4.7,0).curveTo(-4.7,-2,-3.4,-3.3).curveTo(-2,-4.7,-0,-4.8).curveTo(2,-4.7,3.4,-3.3).curveTo(4.7,-2,4.7,0).curveTo(4.7,2,3.4,3.3).curveTo(2,4.8,-0,4.8).curveTo(-2,4.8,-3.4,3.3).closePath().moveTo(-2.3,-2.3).curveTo(-3.2,-1.3,-3.2,0).curveTo(-3.2,1.4,-2.3,2.3).curveTo(-1.3,3.2,-0,3.2).curveTo(1.3,3.2,2.3,2.3).curveTo(3.2,1.4,3.2,0).curveTo(3.2,-1.3,2.3,-2.3).curveTo(1.3,-3.2,-0,-3.2).curveTo(-1.3,-3.2,-2.3,-2.3).closePath();
	this.shape_21.setTransform(106.225,-1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#000000").beginStroke().moveTo(2.3,4.5).lineTo(2.3,-3).lineTo(-2.3,-3).lineTo(-2.3,4.5).lineTo(-3.9,4.5).lineTo(-3.9,-4.5).lineTo(3.9,-4.5).lineTo(3.9,4.5).closePath();
	this.shape_22.setTransform(94.75,-1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,4.5).lineTo(-3.4,-4.5).lineTo(-1.9,-4.5).lineTo(-1.9,-1.3).lineTo(0.4,-1.3).curveTo(1.7,-1.3,2.5,-0.4).curveTo(3.4,0.3,3.4,1.6).curveTo(3.4,2.9,2.5,3.7).curveTo(1.7,4.5,0.4,4.5).closePath().moveTo(-1.9,3.1).lineTo(0.4,3.1).curveTo(1,3.1,1.4,2.6).curveTo(1.9,2.2,1.9,1.6).curveTo(1.9,1,1.4,0.6).curveTo(1,0.2,0.4,0.2).lineTo(-1.9,0.2).closePath();
	this.shape_23.setTransform(79.2,-1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#000000").beginStroke().moveTo(-4.7,6.4).lineTo(-4.7,-6.2).lineTo(-3.2,-6.2).lineTo(-3.2,-4.6).curveTo(-2.1,-6.4,0.2,-6.4).curveTo(2.1,-6.4,3.4,-5).curveTo(4.7,-3.6,4.7,-1.7).curveTo(4.7,0.3,3.4,1.7).curveTo(2.1,3.1,0.2,3.1).curveTo(-2.1,3.1,-3.2,1.3).lineTo(-3.2,6.4).closePath().moveTo(-2.3,-4).curveTo(-3.2,-3,-3.2,-1.7).curveTo(-3.2,-0.3,-2.3,0.6).curveTo(-1.3,1.6,0,1.6).curveTo(1.4,1.6,2.3,0.6).curveTo(3.2,-0.3,3.2,-1.7).curveTo(3.2,-3,2.3,-4).curveTo(1.4,-4.9,0,-4.9).curveTo(-1.3,-4.9,-2.3,-4).closePath();
	this.shape_24.setTransform(68.1,0.675);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#000000").beginStroke().moveTo(-3.3,3.4).curveTo(-4.6,2,-4.6,0).curveTo(-4.6,-2.1,-3.3,-3.4).curveTo(-2,-4.8,0.1,-4.8).curveTo(2.1,-4.7,3.3,-3.3).curveTo(4.6,-2,4.6,0).lineTo(4.5,0.7).lineTo(-3,0.7).curveTo(-2.8,1.9,-1.9,2.6).curveTo(-1.1,3.2,0.2,3.2).curveTo(2.1,3.3,2.8,2).lineTo(4.2,2.7).curveTo(2.9,4.7,0.2,4.8).curveTo(-1.9,4.8,-3.3,3.4).closePath().moveTo(-2,-2.5).curveTo(-2.8,-1.9,-3,-0.6).lineTo(3,-0.6).curveTo(2.8,-1.9,2,-2.6).curveTo(1.2,-3.2,0.1,-3.2).curveTo(-1.1,-3.3,-2,-2.5).closePath();
	this.shape_25.setTransform(55.95,-1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#000000").beginStroke().moveTo(-3.7,4.5).lineTo(-3.7,-4.5).lineTo(0.5,-4.5).curveTo(1.8,-4.5,2.5,-3.9).curveTo(3.3,-3.1,3.3,-2.1).curveTo(3.3,-0.8,2.3,-0.1).curveTo(3.7,0.4,3.7,2).curveTo(3.7,3.1,2.9,3.8).curveTo(2.2,4.5,0.8,4.5).closePath().moveTo(-2.2,3.1).lineTo(0.7,3.1).curveTo(1.4,3.1,1.8,2.7).curveTo(2.1,2.5,2.1,1.8).curveTo(2.1,1.3,1.8,0.9).curveTo(1.4,0.6,0.7,0.6).lineTo(-2.2,0.6).closePath().moveTo(-2.2,-0.7).lineTo(0.4,-0.7).curveTo(1.8,-0.7,1.8,-2).curveTo(1.8,-3.1,0.4,-3.1).lineTo(-2.2,-3.1).closePath();
	this.shape_26.setTransform(45.525,-1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,3.3).curveTo(-4.7,2,-4.7,0).curveTo(-4.7,-2,-3.4,-3.3).curveTo(-2,-4.7,-0,-4.8).curveTo(2,-4.7,3.4,-3.3).curveTo(4.7,-2,4.7,0).curveTo(4.7,2,3.4,3.3).curveTo(2,4.8,-0,4.8).curveTo(-2,4.8,-3.4,3.3).closePath().moveTo(-2.3,-2.3).curveTo(-3.2,-1.3,-3.2,0).curveTo(-3.2,1.4,-2.3,2.3).curveTo(-1.3,3.2,-0,3.2).curveTo(1.3,3.2,2.3,2.3).curveTo(3.2,1.4,3.2,0).curveTo(3.2,-1.3,2.3,-2.3).curveTo(1.3,-3.2,-0,-3.2).curveTo(-1.3,-3.2,-2.3,-2.3).closePath();
	this.shape_27.setTransform(34.225,-1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#000000").beginStroke().moveTo(-4.7,6.4).lineTo(-4.7,-6.2).lineTo(-3.2,-6.2).lineTo(-3.2,-4.6).curveTo(-2,-6.4,0.2,-6.4).curveTo(2.1,-6.4,3.5,-5).curveTo(4.8,-3.6,4.7,-1.7).curveTo(4.8,0.3,3.5,1.7).curveTo(2.1,3.1,0.2,3.1).curveTo(-2,3.1,-3.2,1.3).lineTo(-3.2,6.4).closePath().moveTo(-2.3,-4).curveTo(-3.2,-3,-3.2,-1.7).curveTo(-3.2,-0.3,-2.3,0.6).curveTo(-1.4,1.6,-0,1.6).curveTo(1.3,1.6,2.3,0.6).curveTo(3.2,-0.3,3.2,-1.7).curveTo(3.2,-3,2.3,-4).curveTo(1.3,-4.9,-0,-4.9).curveTo(-1.4,-4.9,-2.3,-4).closePath();
	this.shape_28.setTransform(22.35,0.675);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#000000").beginStroke().moveTo(2.9,6.3).lineTo(2.9,-4.7).lineTo(-2.9,-4.7).lineTo(-2.9,6.3).lineTo(-4.6,6.3).lineTo(-4.6,-6.3).lineTo(4.6,-6.3).lineTo(4.6,6.3).closePath();
	this.shape_29.setTransform(9.475,-2.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11copy, new cjs.Rectangle(0.2,-15.8,195.8,51.599999999999994), null);


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
	this.shape.graphics.beginFill("#000000").beginStroke().moveTo(-0.8,6.1).curveTo(-1.2,5.7,-1.2,5.2).curveTo(-1.2,4.7,-0.8,4.4).curveTo(-0.5,4,0,4).curveTo(0.5,4,0.8,4.4).curveTo(1.2,4.7,1.2,5.2).curveTo(1.2,5.7,0.8,6.1).curveTo(0.5,6.4,0,6.4).curveTo(-0.5,6.4,-0.8,6.1).closePath().moveTo(-0.6,2.5).lineTo(-0.9,-2.8).lineTo(-0.9,-6.4).lineTo(1,-6.4).lineTo(1,-2.8).lineTo(0.6,2.5).closePath();
	this.shape.setTransform(216.825,30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#000000").beginStroke().moveTo(-3.7,4.5).lineTo(-3.7,-4.5).lineTo(0.5,-4.5).curveTo(1.8,-4.5,2.5,-3.9).curveTo(3.3,-3.1,3.3,-2.1).curveTo(3.3,-0.7,2.3,-0.1).curveTo(3.7,0.5,3.7,2).curveTo(3.7,3.1,2.9,3.8).curveTo(2.2,4.5,0.8,4.5).closePath().moveTo(-2.2,3.1).lineTo(0.7,3.1).curveTo(1.4,3.1,1.8,2.8).curveTo(2.1,2.5,2.1,1.9).curveTo(2.1,1.2,1.8,1).curveTo(1.4,0.7,0.7,0.6).lineTo(-2.2,0.6).closePath().moveTo(-2.2,-0.7).lineTo(0.4,-0.7).curveTo(1.8,-0.8,1.8,-1.9).curveTo(1.8,-3.1,0.4,-3.1).lineTo(-2.2,-3.1).closePath();
	this.shape_1.setTransform(209.525,31.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,3.3).curveTo(-4.7,2,-4.7,-0).curveTo(-4.7,-2,-3.4,-3.3).curveTo(-2,-4.8,-0,-4.8).curveTo(2,-4.8,3.4,-3.3).curveTo(4.7,-2,4.7,-0).curveTo(4.7,2,3.4,3.3).curveTo(2,4.7,-0,4.8).curveTo(-2,4.7,-3.4,3.3).closePath().moveTo(-2.3,-2.3).curveTo(-3.2,-1.4,-3.2,-0).curveTo(-3.2,1.3,-2.3,2.3).curveTo(-1.3,3.2,-0,3.2).curveTo(1.3,3.2,2.3,2.3).curveTo(3.2,1.3,3.2,-0).curveTo(3.2,-1.4,2.3,-2.3).curveTo(1.3,-3.2,-0,-3.2).curveTo(-1.3,-3.2,-2.3,-2.3).closePath();
	this.shape_2.setTransform(198.225,31.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("#000000").beginStroke().moveTo(-0.8,4.5).lineTo(-0.8,-3).lineTo(-3.8,-3).lineTo(-3.8,-4.5).lineTo(3.8,-4.5).lineTo(3.8,-3).lineTo(0.8,-3).lineTo(0.8,4.5).closePath();
	this.shape_3.setTransform(187.8,31.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("#000000").beginStroke().moveTo(2.3,4.5).lineTo(2.3,0.8).lineTo(-2.4,0.8).lineTo(-2.4,4.5).lineTo(-3.9,4.5).lineTo(-3.9,-4.5).lineTo(-2.4,-4.5).lineTo(-2.4,-0.7).lineTo(2.3,-0.7).lineTo(2.3,-4.5).lineTo(3.9,-4.5).lineTo(3.9,4.5).closePath();
	this.shape_4.setTransform(177.7,31.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("#000000").beginStroke().moveTo(-3.3,3.4).curveTo(-4.6,2.1,-4.6,-0).curveTo(-4.6,-2,-3.3,-3.4).curveTo(-2,-4.8,0.1,-4.8).curveTo(2.1,-4.8,3.3,-3.3).curveTo(4.6,-1.9,4.6,-0).lineTo(4.5,0.7).lineTo(-3,0.7).curveTo(-2.8,1.9,-1.9,2.6).curveTo(-1.1,3.3,0.3,3.2).curveTo(2,3.2,2.9,2).lineTo(4.2,2.7).curveTo(2.8,4.8,0.2,4.8).curveTo(-1.9,4.8,-3.3,3.4).closePath().moveTo(-2,-2.5).curveTo(-2.8,-1.9,-3,-0.7).lineTo(3,-0.7).curveTo(2.8,-1.9,2,-2.6).curveTo(1.2,-3.2,0.1,-3.3).curveTo(-1.2,-3.3,-2,-2.5).closePath();
	this.shape_5.setTransform(166.4,31.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("#000000").beginStroke().moveTo(-4.7,6.4).lineTo(-4.7,-6.2).lineTo(-3.2,-6.2).lineTo(-3.2,-4.6).curveTo(-2,-6.4,0.2,-6.4).curveTo(2.1,-6.4,3.5,-5).curveTo(4.8,-3.6,4.7,-1.7).curveTo(4.8,0.3,3.5,1.7).curveTo(2.1,3.1,0.2,3.1).curveTo(-2,3.1,-3.2,1.3).lineTo(-3.2,6.4).closePath().moveTo(-2.3,-4).curveTo(-3.2,-3,-3.2,-1.7).curveTo(-3.2,-0.3,-2.3,0.6).curveTo(-1.4,1.6,-0,1.6).curveTo(1.3,1.6,2.3,0.6).curveTo(3.2,-0.3,3.2,-1.7).curveTo(3.2,-3,2.3,-4).curveTo(1.3,-4.9,-0,-4.9).curveTo(-1.4,-4.9,-2.3,-4).closePath();
	this.shape_6.setTransform(154.65,33.375);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("#000000").beginStroke().moveTo(-3.2,6.3).lineTo(-3.2,4.8).curveTo(-1.6,4.9,-0.7,3).lineTo(-0.6,2.7).lineTo(-4.5,-6.3).lineTo(-2.9,-6.3).lineTo(0.3,0.7).lineTo(2.8,-6.3).lineTo(4.5,-6.3).lineTo(0.8,3.2).curveTo(0.3,4.8,-0.8,5.6).curveTo(-1.7,6.3,-2.9,6.3).lineTo(-3.2,6.3).closePath();
	this.shape_7.setTransform(143.1,33.5056);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("#000000").beginStroke().moveTo(1.8,4.5).lineTo(-2.2,0.3).lineTo(-2.2,4.5).lineTo(-3.8,4.5).lineTo(-3.8,-4.5).lineTo(-2.2,-4.5).lineTo(-2.2,-0.5).lineTo(1.6,-4.5).lineTo(3.6,-4.5).lineTo(-0.6,-0.1).lineTo(3.8,4.5).closePath();
	this.shape_8.setTransform(133.45,31.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("#000000").beginStroke().moveTo(2.3,4.5).lineTo(2.3,0.8).lineTo(-2.3,0.8).lineTo(-2.3,4.5).lineTo(-3.9,4.5).lineTo(-3.9,-4.5).lineTo(-2.3,-4.5).lineTo(-2.3,-0.7).lineTo(2.3,-0.7).lineTo(2.3,-4.5).lineTo(3.9,-4.5).lineTo(3.9,4.5).closePath();
	this.shape_9.setTransform(122.4,31.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,3.3).curveTo(-4.7,2,-4.7,-0).curveTo(-4.7,-2,-3.4,-3.3).curveTo(-2,-4.8,-0,-4.8).curveTo(2,-4.8,3.4,-3.3).curveTo(4.7,-2,4.7,-0).curveTo(4.7,2,3.4,3.3).curveTo(2,4.7,-0,4.8).curveTo(-2,4.7,-3.4,3.3).closePath().moveTo(-2.3,-2.3).curveTo(-3.2,-1.4,-3.2,-0).curveTo(-3.2,1.3,-2.3,2.3).curveTo(-1.3,3.2,-0,3.2).curveTo(1.3,3.2,2.3,2.3).curveTo(3.2,1.3,3.2,-0).curveTo(3.2,-1.4,2.3,-2.3).curveTo(1.3,-3.2,-0,-3.2).curveTo(-1.3,-3.2,-2.3,-2.3).closePath();
	this.shape_10.setTransform(110.875,31.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("#000000").beginStroke().moveTo(1.9,4.5).lineTo(-2.3,0.3).lineTo(-2.3,4.5).lineTo(-3.8,4.5).lineTo(-3.8,-4.5).lineTo(-2.3,-4.5).lineTo(-2.3,-0.5).lineTo(1.6,-4.5).lineTo(3.7,-4.5).lineTo(-0.6,-0.1).lineTo(3.8,4.5).closePath();
	this.shape_11.setTransform(100.45,31.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("#000000").beginStroke().moveTo(2.3,4.5).lineTo(2.3,-1.8).lineTo(-2.6,4.5).lineTo(-3.9,4.5).lineTo(-3.9,-4.5).lineTo(-2.4,-4.5).lineTo(-2.4,1.8).lineTo(2.7,-4.5).lineTo(3.9,-4.5).lineTo(3.9,4.5).closePath();
	this.shape_12.setTransform(83.9,31.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("#000000").beginStroke().moveTo(-3.7,4.5).lineTo(-3.7,-4.5).lineTo(0.5,-4.5).curveTo(1.8,-4.5,2.5,-3.8).curveTo(3.3,-3.2,3.3,-2).curveTo(3.3,-0.8,2.3,-0.1).curveTo(3.7,0.4,3.7,1.9).curveTo(3.7,3.1,2.9,3.8).curveTo(2.2,4.5,0.8,4.5).closePath().moveTo(-2.2,3.1).lineTo(0.7,3.1).curveTo(1.4,3.1,1.8,2.7).curveTo(2.1,2.5,2.1,1.8).curveTo(2.1,1.2,1.8,0.9).curveTo(1.4,0.7,0.7,0.7).lineTo(-2.2,0.7).closePath().moveTo(-2.2,-0.8).lineTo(0.4,-0.8).curveTo(1.8,-0.8,1.8,-2).curveTo(1.8,-3.1,0.4,-3.1).lineTo(-2.2,-3.1).closePath();
	this.shape_13.setTransform(214.875,11.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,3.4).curveTo(-4.7,2,-4.7,0).curveTo(-4.7,-2,-3.4,-3.4).curveTo(-2,-4.8,-0,-4.7).curveTo(2,-4.8,3.4,-3.4).curveTo(4.7,-2,4.7,0).curveTo(4.7,2,3.4,3.4).curveTo(2,4.7,-0,4.7).curveTo(-2,4.7,-3.4,3.4).closePath().moveTo(-2.3,-2.3).curveTo(-3.2,-1.3,-3.2,0).curveTo(-3.2,1.4,-2.3,2.3).curveTo(-1.3,3.2,-0,3.2).curveTo(1.3,3.2,2.3,2.3).curveTo(3.2,1.4,3.2,0).curveTo(3.2,-1.3,2.3,-2.3).curveTo(1.3,-3.2,-0,-3.2).curveTo(-1.3,-3.2,-2.3,-2.3).closePath();
	this.shape_14.setTransform(203.575,11.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("#000000").beginStroke().moveTo(-0.8,4.5).lineTo(-0.8,-3).lineTo(-3.9,-3).lineTo(-3.9,-4.5).lineTo(3.9,-4.5).lineTo(3.9,-3).lineTo(0.8,-3).lineTo(0.8,4.5).closePath();
	this.shape_15.setTransform(193.15,11.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("#000000").beginStroke().moveTo(2.3,5.9).lineTo(2.3,-0.4).lineTo(-2.7,5.9).lineTo(-3.9,5.9).lineTo(-3.9,-3.1).lineTo(-2.3,-3.1).lineTo(-2.3,3.2).lineTo(2.6,-3.1).lineTo(3.9,-3.1).lineTo(3.9,5.9).closePath().moveTo(-2.4,-4.5).lineTo(-2.4,-5.8).lineTo(2.4,-5.8).lineTo(2.4,-4.5).closePath();
	this.shape_16.setTransform(183.05,10.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,3.4).curveTo(-4.7,2,-4.8,0).curveTo(-4.7,-2,-3.4,-3.4).curveTo(-2.1,-4.8,-0.2,-4.7).curveTo(2,-4.7,3.2,-2.9).lineTo(3.2,-4.5).lineTo(4.8,-4.5).lineTo(4.8,4.5).lineTo(3.2,4.5).lineTo(3.2,2.9).curveTo(2,4.8,-0.2,4.7).curveTo(-2.1,4.7,-3.4,3.4).closePath().moveTo(-2.3,-2.3).curveTo(-3.2,-1.3,-3.2,0).curveTo(-3.2,1.4,-2.3,2.3).curveTo(-1.4,3.3,0,3.3).curveTo(1.3,3.3,2.3,2.3).curveTo(3.2,1.4,3.2,0).curveTo(3.2,-1.3,2.3,-2.3).curveTo(1.3,-3.3,0,-3.2).curveTo(-1.4,-3.3,-2.3,-2.3).closePath();
	this.shape_17.setTransform(171,11.85);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.beginFill("#000000").beginStroke().moveTo(-3,3.4).curveTo(-4.4,2,-4.4,0).curveTo(-4.4,-2,-3,-3.4).curveTo(-1.7,-4.8,0.3,-4.7).curveTo(1.7,-4.7,2.7,-4.1).curveTo(3.8,-3.4,4.3,-2.3).lineTo(3,-1.6).curveTo(2.7,-2.4,2,-2.8).curveTo(1.2,-3.2,0.3,-3.2).curveTo(-1,-3.2,-1.9,-2.3).curveTo(-2.8,-1.3,-2.8,0).curveTo(-2.8,1.4,-1.9,2.3).curveTo(-1,3.2,0.3,3.2).curveTo(1.2,3.2,2,2.7).curveTo(2.7,2.4,3.1,1.6).lineTo(4.4,2.4).curveTo(3.8,3.5,2.7,4.1).curveTo(1.6,4.8,0.3,4.7).curveTo(-1.7,4.7,-3,3.4).closePath();
	this.shape_18.setTransform(159.825,11.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.beginFill("#000000").beginStroke().moveTo(2.5,4.5).lineTo(0,1.1).lineTo(-2.5,4.5).lineTo(-4.4,4.5).lineTo(-0.9,-0.1).lineTo(-4.2,-4.5).lineTo(-2.3,-4.5).lineTo(0,-1.3).lineTo(2.3,-4.5).lineTo(4.2,-4.5).lineTo(0.9,-0.2).lineTo(4.4,4.5).closePath();
	this.shape_19.setTransform(143.625,11.85);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.beginFill("#000000").beginStroke().moveTo(2.3,4.5).lineTo(2.3,-1.8).lineTo(-2.6,4.5).lineTo(-3.9,4.5).lineTo(-3.9,-4.5).lineTo(-2.4,-4.5).lineTo(-2.4,1.8).lineTo(2.7,-4.5).lineTo(3.9,-4.5).lineTo(3.9,4.5).closePath();
	this.shape_20.setTransform(132.95,11.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,3.4).curveTo(-4.7,2,-4.7,0).curveTo(-4.7,-2,-3.4,-3.4).curveTo(-2,-4.8,-0,-4.7).curveTo(2,-4.8,3.4,-3.4).curveTo(4.7,-2,4.7,0).curveTo(4.7,2,3.4,3.4).curveTo(2,4.7,-0,4.7).curveTo(-2,4.7,-3.4,3.4).closePath().moveTo(-2.3,-2.3).curveTo(-3.2,-1.3,-3.2,0).curveTo(-3.2,1.4,-2.3,2.3).curveTo(-1.3,3.2,-0,3.2).curveTo(1.3,3.2,2.3,2.3).curveTo(3.2,1.4,3.2,0).curveTo(3.2,-1.3,2.3,-2.3).curveTo(1.3,-3.2,-0,-3.2).curveTo(-1.3,-3.2,-2.3,-2.3).closePath();
	this.shape_21.setTransform(121.425,11.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.beginFill("#000000").beginStroke().moveTo(-3.7,4.5).lineTo(-3.7,-4.5).lineTo(0.5,-4.5).curveTo(1.8,-4.5,2.5,-3.8).curveTo(3.3,-3.2,3.3,-2).curveTo(3.3,-0.8,2.3,-0.1).curveTo(3.7,0.4,3.7,1.9).curveTo(3.7,3.1,2.9,3.8).curveTo(2.2,4.5,0.8,4.5).closePath().moveTo(-2.2,3.1).lineTo(0.7,3.1).curveTo(1.4,3.1,1.8,2.7).curveTo(2.1,2.5,2.1,1.8).curveTo(2.1,1.2,1.8,0.9).curveTo(1.4,0.7,0.7,0.7).lineTo(-2.2,0.7).closePath().moveTo(-2.2,-0.8).lineTo(0.4,-0.8).curveTo(1.8,-0.8,1.8,-2).curveTo(1.8,-3.1,0.4,-3.1).lineTo(-2.2,-3.1).closePath();
	this.shape_22.setTransform(110.875,11.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.beginFill("#000000").beginStroke().moveTo(-3,3.4).curveTo(-4.4,2,-4.4,0).curveTo(-4.4,-2,-3,-3.4).curveTo(-1.7,-4.8,0.3,-4.7).curveTo(1.7,-4.7,2.7,-4.1).curveTo(3.8,-3.4,4.3,-2.3).lineTo(3,-1.6).curveTo(2.7,-2.4,2,-2.8).curveTo(1.2,-3.2,0.3,-3.2).curveTo(-1,-3.2,-1.9,-2.3).curveTo(-2.8,-1.3,-2.8,0).curveTo(-2.8,1.4,-1.9,2.3).curveTo(-1,3.2,0.3,3.2).curveTo(1.2,3.2,2,2.7).curveTo(2.7,2.4,3.1,1.6).lineTo(4.4,2.4).curveTo(3.8,3.5,2.7,4.1).curveTo(1.6,4.8,0.3,4.7).curveTo(-1.7,4.7,-3,3.4).closePath();
	this.shape_23.setTransform(100.275,11.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.beginFill("#000000").beginStroke().moveTo(2.3,4.5).lineTo(2.3,-1.8).lineTo(-2.6,4.5).lineTo(-3.9,4.5).lineTo(-3.9,-4.5).lineTo(-2.4,-4.5).lineTo(-2.4,1.8).lineTo(2.7,-4.5).lineTo(3.9,-4.5).lineTo(3.9,4.5).closePath();
	this.shape_24.setTransform(213.95,-8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.beginFill("#000000").beginStroke().moveTo(2.3,4.5).lineTo(2.3,-1.8).lineTo(-2.6,4.5).lineTo(-3.9,4.5).lineTo(-3.9,-4.5).lineTo(-2.4,-4.5).lineTo(-2.4,1.8).lineTo(2.7,-4.5).lineTo(3.9,-4.5).lineTo(3.9,4.5).closePath();
	this.shape_25.setTransform(202.8,-8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.beginFill("#000000").beginStroke().moveTo(3,5.7).lineTo(3,3.3).lineTo(-4.5,3.3).lineTo(-4.5,-5.7).lineTo(-3,-5.7).lineTo(-3,1.8).lineTo(1.5,1.8).lineTo(1.5,-5.7).lineTo(3.1,-5.7).lineTo(3.1,1.8).lineTo(4.5,1.8).lineTo(4.5,5.7).closePath();
	this.shape_26.setTransform(191.7,-6.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.beginFill("#000000").beginStroke().moveTo(2.4,4.5).lineTo(2.4,-1.8).lineTo(-2.6,4.5).lineTo(-3.9,4.5).lineTo(-3.9,-4.5).lineTo(-2.4,-4.5).lineTo(-2.4,1.8).lineTo(2.7,-4.5).lineTo(3.9,-4.5).lineTo(3.9,4.5).closePath();
	this.shape_27.setTransform(179.95,-8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.beginFill("#000000").beginStroke().moveTo(-3.6,2.6).lineTo(-2.2,1.8).curveTo(-1.7,3.3,0.1,3.3).curveTo(1,3.3,1.5,2.9).curveTo(2,2.5,2,1.9).curveTo(2,1.3,1.6,1).curveTo(1.2,0.6,0.5,0.6).lineTo(-0.8,0.6).lineTo(-0.8,-0.7).lineTo(0.1,-0.7).curveTo(0.9,-0.8,1.2,-1.1).curveTo(1.6,-1.4,1.6,-2).curveTo(1.6,-2.6,1.1,-3).curveTo(0.7,-3.3,-0.1,-3.3).curveTo(-1.5,-3.3,-2.1,-2).lineTo(-3.4,-2.7).curveTo(-2.4,-4.8,-0.1,-4.8).curveTo(1.4,-4.8,2.3,-4).curveTo(3.1,-3.3,3.2,-2.2).curveTo(3.2,-0.7,2,-0.1).curveTo(3.6,0.5,3.5,2.1).curveTo(3.6,3.2,2.6,3.9).curveTo(1.7,4.8,0.1,4.8).curveTo(-2.6,4.8,-3.6,2.6).closePath();
	this.shape_28.setTransform(169.8,-8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,3.3).curveTo(-4.7,2,-4.7,-0).curveTo(-4.7,-2,-3.4,-3.3).curveTo(-2,-4.8,-0,-4.8).curveTo(2,-4.8,3.4,-3.3).curveTo(4.7,-2,4.7,-0).curveTo(4.7,2,3.4,3.3).curveTo(2,4.7,-0,4.8).curveTo(-2,4.7,-3.4,3.3).closePath().moveTo(-2.3,-2.3).curveTo(-3.2,-1.4,-3.2,-0).curveTo(-3.2,1.3,-2.3,2.3).curveTo(-1.3,3.2,-0,3.2).curveTo(1.3,3.2,2.3,2.3).curveTo(3.2,1.3,3.2,-0).curveTo(3.2,-1.4,2.3,-2.3).curveTo(1.3,-3.2,-0,-3.2).curveTo(-1.3,-3.2,-2.3,-2.3).closePath();
	this.shape_29.setTransform(159.375,-8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.beginFill("#000000").beginStroke().moveTo(2.3,4.5).lineTo(2.3,-3).lineTo(-2.4,-3).lineTo(-2.4,4.5).lineTo(-3.9,4.5).lineTo(-3.9,-4.5).lineTo(3.9,-4.5).lineTo(3.9,4.5).closePath();
	this.shape_30.setTransform(147.9,-8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.beginFill("#000000").beginStroke().moveTo(2.3,5.8).lineTo(2.3,-0.5).lineTo(-2.6,5.8).lineTo(-3.9,5.8).lineTo(-3.9,-3.2).lineTo(-2.4,-3.2).lineTo(-2.4,3.1).lineTo(2.7,-3.2).lineTo(3.9,-3.2).lineTo(3.9,5.8).closePath().moveTo(-2.5,-4.5).lineTo(-2.5,-5.9).lineTo(2.4,-5.9).lineTo(2.4,-4.5).closePath();
	this.shape_31.setTransform(131.25,-9.35);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.beginFill("#000000").beginStroke().moveTo(2.1,4.5).lineTo(2.1,1.2).lineTo(0.8,1.2).lineTo(-1.7,4.5).lineTo(-3.6,4.5).lineTo(-1,1.2).curveTo(-2,0.9,-2.7,0.2).curveTo(-3.3,-0.6,-3.3,-1.6).curveTo(-3.3,-2.9,-2.4,-3.6).curveTo(-1.5,-4.5,-0.2,-4.5).lineTo(3.6,-4.5).lineTo(3.6,4.5).closePath().moveTo(-1.3,-2.6).curveTo(-1.7,-2.2,-1.7,-1.6).curveTo(-1.7,-0.9,-1.3,-0.6).curveTo(-0.8,-0.2,-0.1,-0.2).lineTo(2.1,-0.2).lineTo(2.1,-3.1).lineTo(-0.1,-3.1).curveTo(-0.8,-3.1,-1.3,-2.6).closePath();
	this.shape_32.setTransform(120.325,-8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.beginFill("#000000").beginStroke().moveTo(-4.8,6.4).lineTo(-4.8,-6.2).lineTo(-3.2,-6.2).lineTo(-3.2,-4.6).curveTo(-2.1,-6.4,0.2,-6.4).curveTo(2.1,-6.4,3.4,-5).curveTo(4.8,-3.6,4.8,-1.7).curveTo(4.8,0.3,3.4,1.7).curveTo(2.1,3.1,0.2,3.1).curveTo(-2.1,3.1,-3.2,1.3).lineTo(-3.2,6.4).closePath().moveTo(-2.3,-4).curveTo(-3.2,-3,-3.2,-1.7).curveTo(-3.2,-0.3,-2.3,0.6).curveTo(-1.3,1.6,0,1.6).curveTo(1.4,1.6,2.3,0.6).curveTo(3.2,-0.3,3.2,-1.7).curveTo(3.2,-3,2.3,-4).curveTo(1.4,-4.9,0,-4.9).curveTo(-1.3,-4.9,-2.3,-4).closePath();
	this.shape_33.setTransform(109.6,-6.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.beginFill("#000000").beginStroke().moveTo(-3.3,3.4).curveTo(-4.6,2.1,-4.6,-0).curveTo(-4.6,-2,-3.3,-3.4).curveTo(-2,-4.8,0.1,-4.8).curveTo(2.1,-4.8,3.3,-3.3).curveTo(4.6,-1.9,4.6,-0).lineTo(4.5,0.7).lineTo(-3,0.7).curveTo(-2.8,1.9,-1.9,2.6).curveTo(-1.1,3.2,0.3,3.2).curveTo(2.1,3.3,2.8,2).lineTo(4.2,2.7).curveTo(2.9,4.8,0.2,4.8).curveTo(-1.9,4.8,-3.3,3.4).closePath().moveTo(-2,-2.5).curveTo(-2.8,-1.9,-3,-0.6).lineTo(3,-0.6).curveTo(2.8,-1.9,2,-2.6).curveTo(1.2,-3.2,0.1,-3.3).curveTo(-1.2,-3.3,-2,-2.5).closePath();
	this.shape_34.setTransform(97.45,-8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.beginFill("#000000").beginStroke().moveTo(-3.7,4.5).lineTo(-3.7,-4.5).lineTo(0.5,-4.5).curveTo(1.8,-4.5,2.5,-3.9).curveTo(3.3,-3.1,3.3,-2.1).curveTo(3.3,-0.7,2.3,-0.1).curveTo(3.7,0.4,3.7,2).curveTo(3.7,3.1,2.9,3.8).curveTo(2.2,4.5,0.8,4.5).closePath().moveTo(-2.2,3.1).lineTo(0.7,3.1).curveTo(1.4,3.1,1.8,2.8).curveTo(2.1,2.4,2.1,1.9).curveTo(2.1,1.2,1.8,1).curveTo(1.4,0.6,0.7,0.6).lineTo(-2.2,0.6).closePath().moveTo(-2.2,-0.7).lineTo(0.4,-0.7).curveTo(1.8,-0.8,1.8,-2).curveTo(1.8,-3.1,0.4,-3.1).lineTo(-2.2,-3.1).closePath();
	this.shape_35.setTransform(87.025,-8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.beginFill("#000000").beginStroke().moveTo(-3.4,3.3).curveTo(-4.7,2,-4.7,-0).curveTo(-4.7,-2,-3.4,-3.3).curveTo(-2,-4.8,-0,-4.8).curveTo(2,-4.8,3.4,-3.3).curveTo(4.7,-2,4.7,-0).curveTo(4.7,2,3.4,3.3).curveTo(2,4.7,-0,4.8).curveTo(-2,4.7,-3.4,3.3).closePath().moveTo(-2.3,-2.3).curveTo(-3.2,-1.4,-3.2,-0).curveTo(-3.2,1.3,-2.3,2.3).curveTo(-1.3,3.2,-0,3.2).curveTo(1.3,3.2,2.3,2.3).curveTo(3.2,1.3,3.2,-0).curveTo(3.2,-1.4,2.3,-2.3).curveTo(1.3,-3.2,-0,-3.2).curveTo(-1.3,-3.2,-2.3,-2.3).closePath();
	this.shape_36.setTransform(75.725,-8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.beginFill("#000000").beginStroke().moveTo(-4.7,6.4).lineTo(-4.7,-6.2).lineTo(-3.2,-6.2).lineTo(-3.2,-4.6).curveTo(-2,-6.4,0.2,-6.4).curveTo(2.1,-6.4,3.5,-5).curveTo(4.8,-3.6,4.7,-1.7).curveTo(4.8,0.3,3.5,1.7).curveTo(2.1,3.1,0.2,3.1).curveTo(-2,3.1,-3.2,1.3).lineTo(-3.2,6.4).closePath().moveTo(-2.3,-4).curveTo(-3.2,-3,-3.2,-1.7).curveTo(-3.2,-0.3,-2.3,0.6).curveTo(-1.3,1.6,-0,1.6).curveTo(1.3,1.6,2.3,0.6).curveTo(3.2,-0.3,3.2,-1.7).curveTo(3.2,-3,2.3,-4).curveTo(1.3,-4.9,-0,-4.9).curveTo(-1.3,-4.9,-2.3,-4).closePath();
	this.shape_37.setTransform(63.85,-6.325);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.beginFill("#000000").beginStroke().moveTo(2.9,6.3).lineTo(2.9,-4.7).lineTo(-2.9,-4.7).lineTo(-2.9,6.3).lineTo(-4.6,6.3).lineTo(-4.6,-6.3).lineTo(4.6,-6.3).lineTo(4.6,6.3).closePath();
	this.shape_38.setTransform(50.975,-9.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(42.9,-22.8,179.1,65.5), null);


(lib.Symbol4copy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("rgba(0,0,0,0.086)").beginStroke().moveTo(-35.1,25.4).curveTo(-45.6,25.4,-53.1,17.9).curveTo(-60.5,10.5,-60.5,0).lineTo(-60.5,-0).curveTo(-60.5,-10.5,-53.1,-18).curveTo(-45.6,-25.4,-35.1,-25.4).lineTo(35.2,-25.4).curveTo(45.7,-25.4,53.1,-18).curveTo(60.5,-10.5,60.5,-0).lineTo(60.5,0).curveTo(60.5,10.5,53.1,17.9).curveTo(45.7,25.4,35.2,25.4).closePath();
	this.shape.setTransform(62.75,0.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4copy, new cjs.Rectangle(2.3,-24.7,121,50.7), null);


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
	this.shape.graphics.beginFill().beginStroke("#FFCC33").setStrokeStyle(2,1,1).moveTo(-35.1,-25.4).lineTo(35.2,-25.4).curveTo(45.7,-25.4,53,-18).curveTo(60.5,-10.5,60.5,-0).lineTo(60.5,0).curveTo(60.5,10.5,53,17.9).curveTo(45.7,25.4,35.2,25.4).lineTo(-35.1,25.4).curveTo(-45.6,25.4,-53.1,17.9).curveTo(-60.5,10.5,-60.5,0).lineTo(-60.5,-0).curveTo(-60.5,-10.5,-53.1,-18).curveTo(-45.6,-25.4,-35.1,-25.4).closePath();
	this.shape.setTransform(62.75,0.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginLinearGradientFill(["#D1CC33","#FFCC33"],[0,1],0,25.6,0,-25.6).beginStroke().moveTo(-35.1,25.4).curveTo(-45.6,25.4,-53.1,17.9).curveTo(-60.5,10.5,-60.5,0).lineTo(-60.5,-0).curveTo(-60.5,-10.5,-53.1,-18).curveTo(-45.6,-25.4,-35.1,-25.4).lineTo(35.2,-25.4).curveTo(45.7,-25.4,53.1,-18).curveTo(60.5,-10.5,60.5,-0).lineTo(60.5,0).curveTo(60.5,10.5,53.1,17.9).curveTo(45.7,25.4,35.2,25.4).closePath();
	this.shape_1.setTransform(62.75,0.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(1.3,-25.7,123,52.7), null);


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


(lib.Symbol43 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Group_0();
	this.instance.setTransform(41.2,-10.5,0.2307,0.2307,0,0,0,40.1,18.9);
	this.instance.alpha = 0.2617;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.Group_1_0();
	this.instance_1.setTransform(37.6,-9.35,0.2307,0.2307,0,0,0,55.3,23.9);
	this.instance_1.alpha = 0.2617;
	this.instance_1.compositeOperation = "multiply";

	this.instance_2 = new lib.Group_2_0();
	this.instance_2.setTransform(33.3,-6.9,0.2307,0.2307,0,0,0,74.5,34.5);
	this.instance_2.alpha = 0.2617;
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.Group_3_0();
	this.instance_3.setTransform(18.9,-3,0.2307,0.2307,0,0,0,0.2,-0.2);
	this.instance_3.compositeOperation = "multiply";

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#ED1C24").beginStroke().moveTo(-67.8,64.2).curveTo(-73.9,62.4,-72.1,52.2).curveTo(-70.4,43,-62.9,29.7).curveTo(-55.5,16.6,-45.5,5).curveTo(-36.4,-5.6,-28.1,-11.4).lineTo(-46.4,1.1).curveTo(-61.8,11.8,-70.8,17.3).curveTo(-100.2,35.4,-106,28.2).curveTo(-114.1,18,-100.4,1.5).curveTo(-90.9,-9.8,-74.1,-21.3).curveTo(-52.9,-35.8,-26.7,-46.2).curveTo(-1.4,-56.2,24.6,-61).curveTo(29.2,-61.8,43.6,-62.9).curveTo(59.7,-64.1,74.1,-64.4).curveTo(114.4,-65.2,108.1,-58.3).curveTo(106.3,-56.3,94.2,-50).lineTo(78.7,-42.1).curveTo(71,-37.6,61.6,-29).curveTo(48.6,-17.2,45.3,-14.6).curveTo(37.6,-8.6,27.4,4.6).lineTo(10.2,27.8).curveTo(0.5,41,-5.2,46.1).curveTo(-12.7,53.1,-17.6,50.5).curveTo(-26.9,45.4,-15.7,22.6).curveTo(-7.4,5.6,7.7,-13.5).curveTo(0.7,-5.9,-12,10.6).curveTo(-28.2,31.7,-32.7,37.2).curveTo(-55,64.5,-65.7,64.5).curveTo(-66.8,64.5,-67.8,64.2).closePath();
	this.shape.setTransform(25.1199,-0.018,0.2305,0.2305);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol43, new cjs.Rectangle(0,-14.8,50.3,29.700000000000003), null);


(lib.Symbol42 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Group();
	this.instance.setTransform(5.55,9.1,0.2306,0.2306,0,0,0,24.1,31.9);
	this.instance.alpha = 0.2617;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.Group_1();
	this.instance_1.setTransform(7,6.6,0.2306,0.2306,0,0,0,30.4,42.5);
	this.instance_1.alpha = 0.2617;
	this.instance_1.compositeOperation = "multiply";

	this.instance_2 = new lib.Group_2();
	this.instance_2.setTransform(9.8,3.8,0.2306,0.2306,0,0,0,42.5,55.3);
	this.instance_2.alpha = 0.2617;
	this.instance_2.compositeOperation = "multiply";

	this.instance_3 = new lib.Group_3();
	this.instance_3.setTransform(21.15,-4.1,0.2306,0.2306,0,0,0,0.8,0.2);
	this.instance_3.compositeOperation = "multiply";

	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#ED1C24").beginStroke().moveTo(-73.5,42.2).curveTo(-67.6,31,-60.3,18.6).curveTo(-53.8,7.6,-51.3,4.2).curveTo(-37.3,-14.6,-19.3,-30.7).curveTo(-0.7,-47.4,19.1,-58.6).curveTo(34.7,-67.5,47.6,-70.5).curveTo(66.1,-75,71,-64.5).curveTo(74.4,-57,48.5,-40.8).curveTo(40.6,-35.9,26,-27.8).lineTo(9.2,-18.3).curveTo(17,-22.6,28.8,-25.6).curveTo(41.9,-28.9,55.2,-29.6).curveTo(68.8,-30.4,76.8,-28.1).curveTo(85.6,-25.5,84.6,-19.9).curveTo(82.9,-10.4,49.3,-2.7).curveTo(43.3,-1.3,20,3.3).curveTo(1.9,6.9,-6.9,9.5).curveTo(14.1,5,31,5.1).curveTo(53.6,5.1,53.9,14.6).curveTo(54,19.4,45.6,22.7).curveTo(39.3,25.2,25,27.8).lineTo(-0.3,32.3).curveTo(-14.8,35.3,-22.6,39).curveTo(-25.7,40.4,-40.5,46.2).curveTo(-51,50.3,-57.6,54.7).lineTo(-70,63.8).curveTo(-79.8,71,-82.1,71.7).lineTo(-83.1,71.8).curveTo(-88.9,71.8,-73.5,42.2).closePath();
	this.shape.setTransform(19.4851,-0.0653,0.2305,0.2305);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(0,-16.6,39.1,33.2), null);


(lib.Symbol40 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_79 = new cjs.Graphics().moveTo(11.8,7.2).curveTo(7.5,6.5,7.5,5.3).curveTo(7.5,5,7.8,4.8).lineTo(7.8,-8.1).lineTo(36.9,-8.1).lineTo(36.9,5).lineTo(37.1,5.3).curveTo(37.1,6.5,32.7,7.2).curveTo(28.4,8,22.3,8).curveTo(16.1,8,11.8,7.2).closePath();
	var mask_graphics_130 = new cjs.Graphics().moveTo(-10.5,7.2).curveTo(-14.8,6.5,-14.8,5.3).curveTo(-14.8,5,-14.4,4.8).lineTo(-14.4,-8.1).lineTo(14.6,-8.1).lineTo(14.6,5).lineTo(14.8,5.3).curveTo(14.8,6.5,10.5,7.2).curveTo(6.1,8,-0,8).curveTo(-6.1,8,-10.5,7.2).closePath();

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(79).to({graphics:mask_graphics_79,x:37.075,y:-0.55}).wait(51).to({graphics:mask_graphics_130,x:59.35,y:-0.55}).wait(1).to({graphics:null,x:0,y:0}).wait(19));

	// Symbol_27
	this.instance = new lib.Symbol27();
	this.instance.setTransform(-316.25,-0.3,1,1,0,0,0,8.2,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:46.25},50,cjs.Ease.circOut).to({x:43.75},9).to({x:46.25},15).to({x:56.25},5).to({x:60.75,y:16.7},4).wait(47).to({_off:true},1).wait(19));

	// Symbol_28
	this.instance_1 = new lib.Symbol28();
	this.instance_1.setTransform(-319.2,5.5,1,1,0,0,0,10.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:43.3},50,cjs.Ease.circOut).to({x:40.8},9).to({x:43.3},15).to({x:53.3},5).wait(1).to({scaleX:0.5667,scaleY:0.5667},0).wait(50).to({_off:true},1).wait(19));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-330,-8.5,397.9,17);


(lib.Symbol36 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol31();
	this.instance.setTransform(20.5,0,1,1,0,0,0,20.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:true},1).wait(9).to({_off:false},0).wait(1).to({x:15.5,y:-1.5},41).to({x:20.5,y:4.5},50).to({y:1.85},33).to({_off:true},1).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-22,46,47);


(lib.Symbol35 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol30();
	this.instance.setTransform(26.5,0,1,1,0,0,0,26.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:true},1).wait(9).to({_off:false},0).to({x:23,y:5.5},21).to({x:20.5,y:-0.5},21).to({x:26.5,y:0},22).to({x:23,y:8.5},38).to({x:21.5,y:4.5},22).to({x:21.65,y:4.55},1).to({_off:true},1).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-27,59,62);


(lib.Symbol34 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol32();
	this.instance.setTransform(30.5,0,1,1,0,0,0,30.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14).to({_off:true},1).wait(9).to({_off:false},0).to({x:35},29).to({x:33,y:7},31).to({x:30.5,y:0},35).to({x:27.85,y:0.65},30).to({_off:true},1).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-30.5,69.5,68);


(lib.Symbol33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol_32
	this.instance = new lib.Symbol34("synched",2);
	this.instance.setTransform(38.5,-22.45,1,1,0,0,0,30.5,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).wait(7).to({scaleX:0.2951,scaleY:0.2951,x:-171.95,y:51.55,startPosition:0},0).to({scaleX:1,scaleY:1,x:38.5,y:-22.45,startPosition:24},15).wait(84).to({startPosition:108},0).to({_off:true},1).wait(41));

	// Symbol_30
	this.instance_1 = new lib.Symbol35("synched",2);
	this.instance_1.setTransform(101.5,-4.8,1,1,0,0,0,26.5,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).wait(7).to({scaleX:0.2264,scaleY:0.2264,x:-48.9,y:9.2,startPosition:0},0).to({scaleX:1,scaleY:1,x:101.5,y:-4.8,startPosition:24},15).wait(84).to({startPosition:108},0).to({_off:true},1).wait(41));

	// Symbol_31
	this.instance_2 = new lib.Symbol36("synched",2);
	this.instance_2.setTransform(20.5,33.35,1,1,0,0,0,20.5,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).wait(7).to({regY:0.1,scaleX:0.6829,scaleY:0.6829,x:-61.5,y:-49.45,startPosition:0},0).to({regY:0,scaleX:1,scaleY:1,guide:{path:[-61.4,-49.3,0.3,-33.3,22.8,32.8]},startPosition:24},15).wait(84).to({startPosition:108},0).to({_off:true},1).wait(41));

	// Layer_9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_2 = new cjs.Graphics().moveTo(-78.4,-57.9).lineTo(21.4,-102.9).lineTo(78.4,23.3).lineTo(-21.4,68.4).closePath();
	var mask_graphics_9 = new cjs.Graphics().moveTo(-78.4,-57.9).lineTo(21.4,-102.9).lineTo(78.4,23.3).lineTo(-21.4,68.4).closePath();
	var mask_graphics_10 = new cjs.Graphics().moveTo(-78.4,-55.1).lineTo(21.4,-100.2).lineTo(78.4,26).lineTo(-21.4,71.1).closePath();
	var mask_graphics_11 = new cjs.Graphics().moveTo(-78.4,-52.4).lineTo(21.4,-97.4).lineTo(78.4,28.8).lineTo(-21.4,73.8).closePath();
	var mask_graphics_12 = new cjs.Graphics().moveTo(-78.4,-49.7).lineTo(21.4,-94.7).lineTo(78.4,31.5).lineTo(-21.4,76.6).closePath();
	var mask_graphics_13 = new cjs.Graphics().moveTo(-78.4,-46.9).lineTo(21.4,-92).lineTo(78.4,34.2).lineTo(-21.4,79.3).closePath();
	var mask_graphics_14 = new cjs.Graphics().moveTo(-78.4,-44.2).lineTo(21.4,-89.2).lineTo(78.4,37).lineTo(-21.4,82).closePath();
	var mask_graphics_15 = new cjs.Graphics().moveTo(-78.4,-41.5).lineTo(21.4,-86.5).lineTo(78.4,39.7).lineTo(-21.4,84.8).closePath();
	var mask_graphics_16 = new cjs.Graphics().moveTo(-78.4,-40.6).lineTo(21.4,-85.6).lineTo(78.4,40.6).lineTo(-21.4,85.6).closePath();
	var mask_graphics_17 = new cjs.Graphics().moveTo(-78.4,-40.6).lineTo(21.4,-85.6).lineTo(78.4,40.6).lineTo(-21.4,85.6).closePath();
	var mask_graphics_18 = new cjs.Graphics().moveTo(-78.4,-40.6).lineTo(21.4,-85.6).lineTo(78.4,40.6).lineTo(-21.4,85.6).closePath();
	var mask_graphics_19 = new cjs.Graphics().moveTo(-78.4,-40.6).lineTo(21.4,-85.6).lineTo(78.4,40.6).lineTo(-21.4,85.6).closePath();
	var mask_graphics_20 = new cjs.Graphics().moveTo(-78.4,-40.6).lineTo(21.4,-85.6).lineTo(78.4,40.6).lineTo(-21.4,85.6).closePath();
	var mask_graphics_21 = new cjs.Graphics().moveTo(-78.4,-40.6).lineTo(21.4,-85.6).lineTo(78.4,40.6).lineTo(-21.4,85.6).closePath();
	var mask_graphics_22 = new cjs.Graphics().moveTo(-78.4,-40.6).lineTo(21.4,-85.6).lineTo(78.4,40.6).lineTo(-21.4,85.6).closePath();
	var mask_graphics_23 = new cjs.Graphics().moveTo(-78.4,-40.6).lineTo(21.4,-85.6).lineTo(78.4,40.6).lineTo(-21.4,85.6).closePath();
	var mask_graphics_24 = new cjs.Graphics().moveTo(-78.4,-40.6).lineTo(21.4,-85.6).lineTo(78.4,40.6).lineTo(-21.4,85.6).closePath();
	var mask_graphics_108 = new cjs.Graphics().moveTo(-78.4,-40.6).lineTo(21.4,-85.6).lineTo(78.4,40.6).lineTo(-21.4,85.6).closePath();

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_graphics_2,x:-67.2047,y:-102.9144}).wait(7).to({graphics:mask_graphics_9,x:-67.2047,y:-102.9144}).wait(1).to({graphics:mask_graphics_10,x:-63.5947,y:-100.1812}).wait(1).to({graphics:mask_graphics_11,x:-59.9847,y:-97.4479}).wait(1).to({graphics:mask_graphics_12,x:-56.3747,y:-94.7145}).wait(1).to({graphics:mask_graphics_13,x:-52.7647,y:-91.9812}).wait(1).to({graphics:mask_graphics_14,x:-49.1547,y:-89.2479}).wait(1).to({graphics:mask_graphics_15,x:-45.5447,y:-86.5145}).wait(1).to({graphics:mask_graphics_16,x:-41.9347,y:-81.9184}).wait(1).to({graphics:mask_graphics_17,x:-38.3247,y:-76.4517}).wait(1).to({graphics:mask_graphics_18,x:-34.7147,y:-70.985}).wait(1).to({graphics:mask_graphics_19,x:-31.1047,y:-65.5184}).wait(1).to({graphics:mask_graphics_20,x:-27.4947,y:-60.0517}).wait(1).to({graphics:mask_graphics_21,x:-23.8847,y:-54.585}).wait(1).to({graphics:mask_graphics_22,x:-20.2747,y:-49.1184}).wait(1).to({graphics:mask_graphics_23,x:-16.6647,y:-43.6517}).wait(1).to({graphics:mask_graphics_24,x:-13.0547,y:-38.185}).wait(84).to({graphics:mask_graphics_108,x:-13.0547,y:-38.185}).wait(1).to({graphics:null,x:0,y:0}).wait(41));

	// Layer_7
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("#FF3399").beginStroke().moveTo(51.7,37.5).curveTo(51.3,37.4,51.2,37).lineTo(48.9,31.5).curveTo(48.8,31.1,48.9,30.7).curveTo(49.1,30.4,49.5,30.2).curveTo(49.9,30,50.2,30.2).curveTo(50.6,30.3,50.8,30.7).lineTo(53,36.2).curveTo(53.2,36.6,53,37).curveTo(52.9,37.4,52.5,37.5).lineTo(52.1,37.6).lineTo(51.7,37.5).closePath().moveTo(47.1,26.7).curveTo(46.7,26.5,46.5,26.1).lineTo(43.9,20.9).curveTo(43.7,20.5,43.8,20.1).curveTo(44,19.7,44.3,19.5).curveTo(44.7,19.3,45.1,19.5).curveTo(45.5,19.6,45.7,20).lineTo(48.3,25.3).curveTo(48.5,25.7,48.4,26).curveTo(48.2,26.4,47.8,26.6).lineTo(47.4,26.7).lineTo(47.1,26.7).closePath().moveTo(41.7,16.2).curveTo(41.3,16.1,41,15.7).lineTo(38,10.7).curveTo(37.8,10.3,37.9,9.9).curveTo(38,9.5,38.3,9.3).curveTo(38.7,9.1,39.1,9.2).curveTo(39.5,9.3,39.7,9.6).lineTo(42.8,14.7).curveTo(43,15.1,42.9,15.5).curveTo(42.8,15.9,42.4,16.1).lineTo(41.9,16.2).lineTo(41.7,16.2).closePath().moveTo(35.4,6.2).curveTo(35,6.1,34.7,5.8).lineTo(31.2,1.1).curveTo(31,0.8,31,0.3).curveTo(31.1,-0.1,31.4,-0.3).curveTo(31.7,-0.6,32.1,-0.5).curveTo(32.6,-0.5,32.8,-0.2).lineTo(36.4,4.6).curveTo(36.6,5,36.5,5.4).curveTo(36.5,5.8,36.1,6).curveTo(35.9,6.2,35.6,6.2).lineTo(35.4,6.2).closePath().moveTo(28.2,-3.1).curveTo(27.8,-3.1,27.5,-3.4).lineTo(23.4,-7.7).curveTo(23.2,-8,23.2,-8.4).curveTo(23.2,-8.9,23.5,-9.2).curveTo(23.8,-9.4,24.2,-9.4).curveTo(24.6,-9.4,24.9,-9.1).lineTo(29,-4.8).curveTo(29.2,-4.5,29.2,-4).curveTo(29.2,-3.6,28.9,-3.3).curveTo(28.6,-3.1,28.2,-3.1).lineTo(28.2,-3.1).closePath().moveTo(19.2,-11.7).curveTo(17,-13.7,14.7,-15.5).curveTo(14.3,-15.7,14.3,-16.2).curveTo(14.2,-16.6,14.5,-16.9).curveTo(14.7,-17.2,15.1,-17.3).curveTo(15.5,-17.3,15.9,-17.1).curveTo(18.3,-15.3,20.5,-13.2).curveTo(20.9,-13,20.9,-12.5).curveTo(20.9,-12.1,20.6,-11.8).curveTo(20.3,-11.5,19.9,-11.5).lineTo(19.9,-11.5).curveTo(19.5,-11.5,19.2,-11.7).closePath().moveTo(9.9,-19).curveTo(7.4,-20.7,4.9,-22.2).curveTo(4.5,-22.4,4.4,-22.8).curveTo(4.3,-23.2,4.5,-23.5).curveTo(4.7,-23.9,5.1,-24).curveTo(5.5,-24.1,5.9,-23.9).curveTo(8.5,-22.4,11,-20.7).curveTo(11.4,-20.4,11.4,-20).curveTo(11.5,-19.6,11.3,-19.3).curveTo(11.1,-18.9,10.7,-18.9).lineTo(10.5,-18.8).curveTo(10.2,-18.8,9.9,-19).closePath().moveTo(-0.3,-25).curveTo(-2.9,-26.3,-5.7,-27.5).curveTo(-6,-27.6,-6.2,-28).curveTo(-6.4,-28.4,-6.2,-28.8).curveTo(-6,-29.2,-5.7,-29.3).curveTo(-5.3,-29.5,-4.9,-29.3).curveTo(-2.1,-28.2,0.6,-26.8).curveTo(1,-26.6,1.1,-26.2).curveTo(1.3,-25.8,1.1,-25.4).curveTo(0.9,-25.1,0.5,-24.9).lineTo(0.2,-24.9).lineTo(-0.3,-25).closePath().moveTo(-11.2,-29.6).curveTo(-14,-30.6,-16.9,-31.4).curveTo(-17.2,-31.5,-17.5,-31.8).curveTo(-17.7,-32.2,-17.6,-32.6).curveTo(-17.4,-33,-17.1,-33.2).curveTo(-16.7,-33.4,-16.3,-33.3).curveTo(-13.4,-32.5,-10.6,-31.5).curveTo(-10.2,-31.3,-10,-31).curveTo(-9.8,-30.6,-9.9,-30.2).curveTo(-10.1,-29.8,-10.5,-29.6).lineTo(-10.9,-29.5).lineTo(-11.2,-29.6).closePath().moveTo(-22.6,-32.8).curveTo(-25.5,-33.5,-28.5,-34).curveTo(-28.8,-34,-29.1,-34.4).curveTo(-29.3,-34.7,-29.3,-35.1).curveTo(-29.2,-35.5,-28.9,-35.7).curveTo(-28.5,-36,-28.1,-35.9).curveTo(-25.1,-35.4,-22.2,-34.8).curveTo(-21.7,-34.7,-21.5,-34.3).curveTo(-21.3,-34,-21.4,-33.6).curveTo(-21.5,-33.2,-21.9,-32.9).curveTo(-22.1,-32.8,-22.4,-32.8).lineTo(-22.6,-32.8).closePath().moveTo(-34.4,-34.8).curveTo(-37.3,-35.1,-40.3,-35.3).curveTo(-40.7,-35.4,-41,-35.7).curveTo(-41.3,-36,-41.2,-36.4).curveTo(-41.2,-36.8,-40.9,-37.1).curveTo(-40.6,-37.4,-40.2,-37.3).curveTo(-37.1,-37.1,-34.1,-36.8).curveTo(-33.7,-36.7,-33.5,-36.4).curveTo(-33.2,-36.1,-33.2,-35.7).curveTo(-33.3,-35.3,-33.6,-35).curveTo(-33.9,-34.8,-34.2,-34.8).lineTo(-34.4,-34.8).closePath().moveTo(-46.3,-35.6).lineTo(-52.1,-35.6).curveTo(-52.5,-35.6,-52.8,-35.9).curveTo(-53.1,-36.2,-53.1,-36.6).curveTo(-53.1,-37,-52.9,-37.3).curveTo(-52.6,-37.6,-52.2,-37.6).lineTo(-46.2,-37.6).curveTo(-45.8,-37.6,-45.5,-37.3).curveTo(-45.2,-37,-45.2,-36.6).curveTo(-45.2,-36.2,-45.5,-35.9).curveTo(-45.8,-35.6,-46.2,-35.6).lineTo(-46.3,-35.6).closePath();
	this.shape.setTransform(-34.5729,-13.5603);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2).to({_off:false},0).wait(106).to({_off:true},1).wait(41));

	// Layer_10 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_2 = new cjs.Graphics().moveTo(-86.4,54.7).lineTo(-86.4,-54.7).lineTo(52.1,-54.7).lineTo(52.1,54.7).closePath();
	var mask_1_graphics_9 = new cjs.Graphics().moveTo(-86.4,54.7).lineTo(-86.4,-54.7).lineTo(52.1,-54.7).lineTo(52.1,54.7).closePath();
	var mask_1_graphics_10 = new cjs.Graphics().moveTo(-82.7,54.7).lineTo(-82.7,-54.7).lineTo(55.8,-54.7).lineTo(55.8,54.7).closePath();
	var mask_1_graphics_11 = new cjs.Graphics().moveTo(-79.1,54.7).lineTo(-79.1,-54.7).lineTo(59.4,-54.7).lineTo(59.4,54.7).closePath();
	var mask_1_graphics_12 = new cjs.Graphics().moveTo(-75.4,54.7).lineTo(-75.4,-54.7).lineTo(63.1,-54.7).lineTo(63.1,54.7).closePath();
	var mask_1_graphics_13 = new cjs.Graphics().moveTo(-71.8,54.7).lineTo(-71.8,-54.7).lineTo(66.7,-54.7).lineTo(66.7,54.7).closePath();
	var mask_1_graphics_14 = new cjs.Graphics().moveTo(-69.2,54.7).lineTo(-69.2,-54.7).lineTo(69.2,-54.7).lineTo(69.2,54.7).closePath();
	var mask_1_graphics_15 = new cjs.Graphics().moveTo(-69.2,54.7).lineTo(-69.2,-54.7).lineTo(69.2,-54.7).lineTo(69.2,54.7).closePath();
	var mask_1_graphics_16 = new cjs.Graphics().moveTo(-69.2,54.7).lineTo(-69.2,-54.7).lineTo(69.2,-54.7).lineTo(69.2,54.7).closePath();
	var mask_1_graphics_17 = new cjs.Graphics().moveTo(-69.2,54.7).lineTo(-69.2,-54.7).lineTo(69.2,-54.7).lineTo(69.2,54.7).closePath();
	var mask_1_graphics_18 = new cjs.Graphics().moveTo(-69.2,54.7).lineTo(-69.2,-54.7).lineTo(69.2,-54.7).lineTo(69.2,54.7).closePath();
	var mask_1_graphics_19 = new cjs.Graphics().moveTo(-69.2,54.7).lineTo(-69.2,-54.7).lineTo(69.2,-54.7).lineTo(69.2,54.7).closePath();
	var mask_1_graphics_20 = new cjs.Graphics().moveTo(-69.2,54.7).lineTo(-69.2,-54.7).lineTo(69.2,-54.7).lineTo(69.2,54.7).closePath();
	var mask_1_graphics_21 = new cjs.Graphics().moveTo(-69.2,54.7).lineTo(-69.2,-54.7).lineTo(69.2,-54.7).lineTo(69.2,54.7).closePath();
	var mask_1_graphics_22 = new cjs.Graphics().moveTo(-69.2,54.7).lineTo(-69.2,-54.7).lineTo(69.2,-54.7).lineTo(69.2,54.7).closePath();
	var mask_1_graphics_23 = new cjs.Graphics().moveTo(-69.2,54.7).lineTo(-69.2,-54.7).lineTo(69.2,-54.7).lineTo(69.2,54.7).closePath();
	var mask_1_graphics_24 = new cjs.Graphics().moveTo(-69.2,54.7).lineTo(-69.2,-54.7).lineTo(69.2,-54.7).lineTo(69.2,54.7).closePath();
	var mask_1_graphics_108 = new cjs.Graphics().moveTo(-69.2,54.7).lineTo(-69.2,-54.7).lineTo(69.2,-54.7).lineTo(69.2,54.7).closePath();

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_1_graphics_2,x:-86.35,y:-4.05}).wait(7).to({graphics:mask_1_graphics_9,x:-86.35,y:-4.05}).wait(1).to({graphics:mask_1_graphics_10,x:-82.7083,y:-4.05}).wait(1).to({graphics:mask_1_graphics_11,x:-79.0667,y:-4.05}).wait(1).to({graphics:mask_1_graphics_12,x:-75.425,y:-4.05}).wait(1).to({graphics:mask_1_graphics_13,x:-71.7833,y:-4.05}).wait(1).to({graphics:mask_1_graphics_14,x:-67.0344,y:-4.05}).wait(1).to({graphics:mask_1_graphics_15,x:-59.7511,y:-4.05}).wait(1).to({graphics:mask_1_graphics_16,x:-52.4677,y:-4.05}).wait(1).to({graphics:mask_1_graphics_17,x:-45.1844,y:-4.05}).wait(1).to({graphics:mask_1_graphics_18,x:-37.9011,y:-4.05}).wait(1).to({graphics:mask_1_graphics_19,x:-30.6177,y:-4.05}).wait(1).to({graphics:mask_1_graphics_20,x:-23.3344,y:-4.05}).wait(1).to({graphics:mask_1_graphics_21,x:-16.0511,y:-4.05}).wait(1).to({graphics:mask_1_graphics_22,x:-8.7677,y:-4.05}).wait(1).to({graphics:mask_1_graphics_23,x:-1.4844,y:-4.05}).wait(1).to({graphics:mask_1_graphics_24,x:5.7989,y:-4.05}).wait(84).to({graphics:mask_1_graphics_108,x:5.7989,y:-4.05}).wait(1).to({graphics:null,x:0,y:0}).wait(41));

	// Layer_6
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("#666699").beginStroke().moveTo(-51.6,4.8).curveTo(-51.9,4.5,-52,4.1).curveTo(-52,3.7,-51.8,3.4).curveTo(-51.5,3.1,-51,3.1).lineTo(-45.1,2.5).curveTo(-44.7,2.5,-44.4,2.8).curveTo(-44.1,3.1,-44,3.5).curveTo(-44,3.9,-44.3,4.2).curveTo(-44.5,4.5,-44.9,4.6).lineTo(-50.9,5).lineTo(-51,5.1).curveTo(-51.3,5.1,-51.6,4.8).closePath().moveTo(-39.7,3.9).curveTo(-40,3.6,-40,3.2).curveTo(-40.1,2.8,-39.8,2.5).curveTo(-39.5,2.2,-39.1,2.2).lineTo(-33.1,1.6).curveTo(-32.7,1.6,-32.4,1.9).curveTo(-32.1,2.2,-32,2.6).curveTo(-32,3,-32.2,3.3).curveTo(-32.5,3.6,-32.9,3.7).lineTo(-39,4.1).lineTo(-39.1,4.2).curveTo(-39.4,4.2,-39.7,3.9).closePath().moveTo(-27.7,2.9).curveTo(-28,2.6,-28,2.2).curveTo(-28.1,1.8,-27.8,1.5).curveTo(-27.5,1.2,-27.1,1.2).lineTo(-21.1,0.7).curveTo(-20.7,0.7,-20.4,1).curveTo(-20.1,1.3,-20,1.7).curveTo(-20,2.1,-20.3,2.4).curveTo(-20.5,2.7,-21,2.8).lineTo(-26.9,3.1).lineTo(-27,3.2).curveTo(-27.4,3.2,-27.7,2.9).closePath().moveTo(-15.7,2).curveTo(-16,1.7,-16,1.3).curveTo(-16.1,0.9,-15.8,0.6).curveTo(-15.5,0.3,-15.1,0.3).lineTo(-9.1,-0.2).curveTo(-8.7,-0.2,-8.4,0.1).curveTo(-8.1,0.4,-8,0.8).curveTo(-8,1.2,-8.3,1.5).curveTo(-8.5,1.8,-8.9,1.9).lineTo(-14.9,2.2).lineTo(-15,2.3).curveTo(-15.4,2.3,-15.7,2).closePath().moveTo(-3.7,1.1).curveTo(-4,0.8,-4,0.4).curveTo(-4.1,0,-3.8,-0.3).curveTo(-3.5,-0.6,-3.1,-0.6).lineTo(2.9,-1.1).curveTo(3.3,-1.1,3.6,-0.8).curveTo(3.9,-0.5,4,-0.1).curveTo(4,0.3,3.7,0.6).curveTo(3.5,0.9,3.1,1).lineTo(-3,1.3).lineTo(-3,1.4).curveTo(-3.4,1.4,-3.7,1.1).closePath().moveTo(8.3,0.2).curveTo(8,-0.1,8,-0.5).curveTo(7.9,-0.9,8.2,-1.2).curveTo(8.5,-1.5,8.9,-1.5).lineTo(14.9,-2.1).curveTo(15.3,-2.1,15.6,-1.8).curveTo(15.9,-1.5,16,-1.1).curveTo(16,-0.7,15.7,-0.4).curveTo(15.5,-0.1,15,-0.1).lineTo(9.1,0.4).lineTo(8.9,0.5).curveTo(8.6,0.5,8.3,0.2).closePath().moveTo(20.3,-0.8).curveTo(20,-1.1,20,-1.5).curveTo(19.9,-1.9,20.2,-2.2).curveTo(20.5,-2.5,20.9,-2.5).lineTo(26.9,-3.1).curveTo(27.3,-3.1,27.6,-2.8).curveTo(27.9,-2.5,28,-2.1).curveTo(28,-1.7,27.7,-1.4).curveTo(27.5,-1.1,27.1,-1.1).lineTo(21.1,-0.5).lineTo(20.9,-0.5).curveTo(20.6,-0.5,20.3,-0.8).closePath().moveTo(32.3,-1.8).curveTo(32,-2.1,32,-2.5).curveTo(31.9,-2.9,32.2,-3.2).curveTo(32.5,-3.5,32.9,-3.5).lineTo(38.9,-4.1).curveTo(39.3,-4.1,39.6,-3.8).curveTo(39.9,-3.5,40,-3.1).curveTo(40,-2.7,39.8,-2.4).curveTo(39.5,-2.1,39.1,-2.1).lineTo(33,-1.5).lineTo(32.9,-1.5).curveTo(32.6,-1.5,32.3,-1.8).closePath().moveTo(44.3,-2.8).curveTo(44,-3.1,44,-3.5).curveTo(43.9,-3.9,44.2,-4.2).curveTo(44.5,-4.5,44.9,-4.6).lineTo(50.9,-5).curveTo(51.3,-5.1,51.6,-4.8).curveTo(51.9,-4.5,52,-4.1).curveTo(52,-3.7,51.8,-3.4).curveTo(51.5,-3.1,51,-3.1).lineTo(45.1,-2.5).lineTo(44.9,-2.5).curveTo(44.6,-2.5,44.3,-2.8).closePath();
	this.shape_1.setTransform(20.025,3.6);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(2).to({_off:false},0).wait(106).to({_off:true},1).wait(41));

	// Layer_11 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_2 = new cjs.Graphics().moveTo(-183,54.7).lineTo(-183,-54.7).lineTo(12.5,-54.7).lineTo(12.5,54.7).closePath();
	var mask_2_graphics_9 = new cjs.Graphics().moveTo(-183,54.7).lineTo(-183,-54.7).lineTo(12.5,-54.7).lineTo(12.5,54.7).closePath();
	var mask_2_graphics_10 = new cjs.Graphics().moveTo(-177.1,54.7).lineTo(-177.1,-54.7).lineTo(18.4,-54.7).lineTo(18.4,54.7).closePath();
	var mask_2_graphics_11 = new cjs.Graphics().moveTo(-171.2,54.7).lineTo(-171.2,-54.7).lineTo(24.3,-54.7).lineTo(24.3,54.7).closePath();
	var mask_2_graphics_12 = new cjs.Graphics().moveTo(-165.3,54.7).lineTo(-165.3,-54.7).lineTo(30.1,-54.7).lineTo(30.1,54.7).closePath();
	var mask_2_graphics_13 = new cjs.Graphics().moveTo(-159.5,54.7).lineTo(-159.5,-54.7).lineTo(36,-54.7).lineTo(36,54.7).closePath();
	var mask_2_graphics_14 = new cjs.Graphics().moveTo(-153.6,54.7).lineTo(-153.6,-54.7).lineTo(41.9,-54.7).lineTo(41.9,54.7).closePath();
	var mask_2_graphics_15 = new cjs.Graphics().moveTo(-147.7,54.7).lineTo(-147.7,-54.7).lineTo(47.8,-54.7).lineTo(47.8,54.7).closePath();
	var mask_2_graphics_16 = new cjs.Graphics().moveTo(-141.8,54.7).lineTo(-141.8,-54.7).lineTo(53.7,-54.7).lineTo(53.7,54.7).closePath();
	var mask_2_graphics_17 = new cjs.Graphics().moveTo(-135.9,54.7).lineTo(-135.9,-54.7).lineTo(59.6,-54.7).lineTo(59.6,54.7).closePath();
	var mask_2_graphics_18 = new cjs.Graphics().moveTo(-130.1,54.7).lineTo(-130.1,-54.7).lineTo(65.4,-54.7).lineTo(65.4,54.7).closePath();
	var mask_2_graphics_19 = new cjs.Graphics().moveTo(-124.2,54.7).lineTo(-124.2,-54.7).lineTo(71.3,-54.7).lineTo(71.3,54.7).closePath();
	var mask_2_graphics_20 = new cjs.Graphics().moveTo(-118.3,54.7).lineTo(-118.3,-54.7).lineTo(77.2,-54.7).lineTo(77.2,54.7).closePath();
	var mask_2_graphics_21 = new cjs.Graphics().moveTo(-112.4,54.7).lineTo(-112.4,-54.7).lineTo(83.1,-54.7).lineTo(83.1,54.7).closePath();
	var mask_2_graphics_22 = new cjs.Graphics().moveTo(-106.5,54.7).lineTo(-106.5,-54.7).lineTo(89,-54.7).lineTo(89,54.7).closePath();
	var mask_2_graphics_23 = new cjs.Graphics().moveTo(-100.6,54.7).lineTo(-100.6,-54.7).lineTo(94.9,-54.7).lineTo(94.9,54.7).closePath();
	var mask_2_graphics_24 = new cjs.Graphics().moveTo(-97.7,54.7).lineTo(-97.7,-54.7).lineTo(97.7,-54.7).lineTo(97.7,54.7).closePath();
	var mask_2_graphics_108 = new cjs.Graphics().moveTo(-97.7,54.7).lineTo(-97.7,-54.7).lineTo(97.7,-54.7).lineTo(97.7,54.7).closePath();

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(2).to({graphics:mask_2_graphics_2,x:-183,y:8.3}).wait(7).to({graphics:mask_2_graphics_9,x:-183,y:8.3}).wait(1).to({graphics:mask_2_graphics_10,x:-177.1167,y:8.3}).wait(1).to({graphics:mask_2_graphics_11,x:-171.2333,y:8.3}).wait(1).to({graphics:mask_2_graphics_12,x:-165.35,y:8.3}).wait(1).to({graphics:mask_2_graphics_13,x:-159.4667,y:8.3}).wait(1).to({graphics:mask_2_graphics_14,x:-153.5833,y:8.3}).wait(1).to({graphics:mask_2_graphics_15,x:-147.7,y:8.3}).wait(1).to({graphics:mask_2_graphics_16,x:-141.8167,y:8.3}).wait(1).to({graphics:mask_2_graphics_17,x:-135.9333,y:8.3}).wait(1).to({graphics:mask_2_graphics_18,x:-130.05,y:8.3}).wait(1).to({graphics:mask_2_graphics_19,x:-124.1667,y:8.3}).wait(1).to({graphics:mask_2_graphics_20,x:-118.2833,y:8.3}).wait(1).to({graphics:mask_2_graphics_21,x:-112.4,y:8.3}).wait(1).to({graphics:mask_2_graphics_22,x:-106.5167,y:8.3}).wait(1).to({graphics:mask_2_graphics_23,x:-100.6333,y:8.3}).wait(1).to({graphics:mask_2_graphics_24,x:-91.7526,y:8.3}).wait(84).to({graphics:mask_2_graphics_108,x:-91.7526,y:8.3}).wait(1).to({graphics:null,x:0,y:0}).wait(41));

	// Layer_5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("#CCFF00").beginStroke().moveTo(-86,34.8).curveTo(-86.4,34.7,-86.6,34.3).curveTo(-86.8,34,-86.7,33.5).curveTo(-86.6,33.2,-86.3,32.9).lineTo(-80.8,29.7).curveTo(-80.5,29.5,-80.1,29.6).curveTo(-79.7,29.7,-79.5,30.1).curveTo(-79.3,30.5,-79.4,30.8).curveTo(-79.5,31.3,-79.8,31.5).lineTo(-85.2,34.6).curveTo(-85.5,34.8,-85.8,34.8).lineTo(-86,34.8).closePath().moveTo(-75.3,28.5).curveTo(-75.7,28.4,-75.9,28.1).curveTo(-76.1,27.7,-76,27.3).curveTo(-75.9,26.9,-75.5,26.7).lineTo(-70.2,23.9).curveTo(-69.9,23.7,-69.5,23.8).curveTo(-69.1,24,-68.9,24.3).curveTo(-68.7,24.7,-68.8,25.1).curveTo(-69,25.5,-69.3,25.7).lineTo(-74.6,28.5).lineTo(-75,28.6).lineTo(-75.3,28.5).closePath().moveTo(-64.8,23).curveTo(-65.2,22.9,-65.4,22.5).curveTo(-65.6,22.2,-65.4,21.8).curveTo(-65.3,21.4,-64.9,21.2).lineTo(-59.5,18.5).curveTo(-59.2,18.4,-58.8,18.5).curveTo(-58.4,18.6,-58.2,19).curveTo(-58,19.4,-58.1,19.8).curveTo(-58.3,20.2,-58.6,20.3).lineTo(-64,23).lineTo(-64.5,23.1).lineTo(-64.8,23).closePath().moveTo(-54.1,17.8).curveTo(-54.5,17.7,-54.6,17.3).curveTo(-54.8,16.9,-54.7,16.5).curveTo(-54.5,16.1,-54.2,15.9).lineTo(-48.8,13.4).curveTo(-48.4,13.3,-48,13.4).curveTo(-47.6,13.6,-47.4,13.9).curveTo(-47.3,14.3,-47.4,14.7).curveTo(-47.6,15.1,-47.9,15.2).lineTo(-53.3,17.7).lineTo(-53.8,17.9).lineTo(-54.1,17.8).closePath().moveTo(-43.2,12.9).curveTo(-43.6,12.7,-43.8,12.3).curveTo(-44,12,-43.8,11.6).curveTo(-43.7,11.2,-43.3,11).lineTo(-37.8,8.6).curveTo(-37.5,8.5,-37.1,8.6).curveTo(-36.7,8.8,-36.5,9.1).curveTo(-36.4,9.5,-36.5,9.9).curveTo(-36.7,10.3,-37,10.5).lineTo(-42.5,12.9).lineTo(-42.9,13).lineTo(-43.2,12.9).closePath().moveTo(-32.4,8.2).curveTo(-32.8,8,-32.9,7.6).curveTo(-33.1,7.3,-32.9,6.9).curveTo(-32.8,6.5,-32.4,6.3).lineTo(-26.9,4).curveTo(-26.5,3.9,-26.1,4).curveTo(-25.7,4.2,-25.6,4.6).curveTo(-25.4,4.9,-25.6,5.3).curveTo(-25.7,5.7,-26.1,5.9).lineTo(-31.6,8.2).lineTo(-32,8.3).lineTo(-32.4,8.2).closePath().moveTo(-21.4,3.7).curveTo(-21.8,3.5,-22,3.1).curveTo(-22.1,2.7,-22,2.4).curveTo(-21.8,2,-21.4,1.8).lineTo(-15.9,-0.4).curveTo(-15.5,-0.5,-15.1,-0.4).curveTo(-14.8,-0.2,-14.6,0.2).curveTo(-14.5,0.6,-14.6,0.9).curveTo(-14.8,1.3,-15.2,1.5).lineTo(-20.7,3.7).lineTo(-21,3.8).lineTo(-21.4,3.7).closePath().moveTo(-10.4,-0.7).curveTo(-10.8,-0.9,-10.9,-1.3).curveTo(-11.1,-1.6,-10.9,-2).curveTo(-10.7,-2.4,-10.3,-2.5).lineTo(-4.8,-4.6).curveTo(-4.4,-4.8,-4,-4.6).curveTo(-3.7,-4.4,-3.5,-4.1).curveTo(-3.4,-3.7,-3.5,-3.3).curveTo(-3.7,-2.9,-4.1,-2.8).lineTo(-9.6,-0.7).lineTo(-10,-0.6).lineTo(-10.4,-0.7).closePath().moveTo(0.7,-4.9).curveTo(0.3,-5.1,0.2,-5.5).curveTo(0,-5.8,0.2,-6.2).curveTo(0.4,-6.6,0.8,-6.8).lineTo(6.3,-8.8).curveTo(6.7,-8.9,7.1,-8.7).curveTo(7.5,-8.5,7.6,-8.1).curveTo(7.7,-7.7,7.6,-7.4).curveTo(7.4,-7,7,-6.9).lineTo(1.5,-4.9).lineTo(1.1,-4.8).lineTo(0.7,-4.9).closePath().moveTo(11.8,-8.9).curveTo(11.4,-9.1,11.3,-9.5).curveTo(11.1,-9.8,11.3,-10.2).curveTo(11.5,-10.6,11.9,-10.8).lineTo(17.4,-12.8).curveTo(17.8,-12.9,18.2,-12.7).curveTo(18.6,-12.5,18.7,-12.1).curveTo(18.8,-11.7,18.7,-11.4).curveTo(18.5,-11,18.1,-10.9).lineTo(12.6,-8.9).lineTo(12.2,-8.8).lineTo(11.8,-8.9).closePath().moveTo(23,-12.9).curveTo(22.6,-13.1,22.5,-13.5).curveTo(22.3,-13.9,22.5,-14.3).curveTo(22.7,-14.6,23.1,-14.8).lineTo(28.7,-16.7).curveTo(29.1,-16.8,29.5,-16.6).curveTo(29.9,-16.4,30,-16).curveTo(30.1,-15.6,30,-15.3).curveTo(29.8,-14.9,29.4,-14.8).lineTo(23.7,-12.9).lineTo(23.4,-12.8).lineTo(23,-12.9).closePath().moveTo(34.3,-16.7).curveTo(33.9,-16.9,33.8,-17.3).curveTo(33.6,-17.7,33.8,-18.1).curveTo(34,-18.4,34.4,-18.6).lineTo(40,-20.5).curveTo(40.4,-20.6,40.8,-20.4).curveTo(41.2,-20.2,41.3,-19.8).curveTo(41.4,-19.4,41.3,-19.1).curveTo(41.1,-18.7,40.7,-18.6).lineTo(35,-16.7).lineTo(34.7,-16.6).lineTo(34.3,-16.7).closePath().moveTo(45.6,-20.5).curveTo(45.2,-20.7,45.1,-21.1).curveTo(44.9,-21.5,45.1,-21.9).curveTo(45.3,-22.2,45.7,-22.4).lineTo(51.4,-24.2).curveTo(51.7,-24.3,52.1,-24.1).curveTo(52.5,-23.9,52.6,-23.5).curveTo(52.7,-23.1,52.5,-22.8).curveTo(52.3,-22.4,52,-22.3).lineTo(46.3,-20.5).lineTo(46,-20.4).lineTo(45.6,-20.5).closePath().moveTo(56.9,-24.1).curveTo(56.5,-24.3,56.4,-24.7).curveTo(56.2,-25.1,56.4,-25.5).curveTo(56.6,-25.8,57,-26).lineTo(62.7,-27.8).curveTo(63,-27.9,63.4,-27.7).curveTo(63.8,-27.5,63.9,-27.1).curveTo(64,-26.7,63.8,-26.4).curveTo(63.6,-26,63.3,-25.9).lineTo(57.6,-24.1).lineTo(57.3,-24).lineTo(56.9,-24.1).closePath().moveTo(68.2,-27.7).curveTo(67.8,-27.9,67.7,-28.3).curveTo(67.5,-28.7,67.7,-29.1).curveTo(67.9,-29.4,68.3,-29.6).lineTo(74,-31.4).curveTo(74.4,-31.5,74.8,-31.3).curveTo(75.1,-31.1,75.3,-30.7).curveTo(75.4,-30.3,75.2,-30).curveTo(75,-29.6,74.6,-29.5).lineTo(68.9,-27.7).lineTo(68.6,-27.6).lineTo(68.2,-27.7).closePath().moveTo(79.6,-31.2).curveTo(79.2,-31.4,79.1,-31.8).curveTo(79,-32.2,79.2,-32.6).curveTo(79.4,-32.9,79.8,-33.1).lineTo(85.5,-34.8).curveTo(85.9,-34.9,86.2,-34.7).curveTo(86.6,-34.5,86.7,-34.1).curveTo(86.8,-33.7,86.6,-33.3).curveTo(86.4,-33,86,-32.9).lineTo(80.3,-31.2).lineTo(80,-31.1).lineTo(79.6,-31.2).closePath();
	this.shape_2.setTransform(-83.2537,16.0037);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2).to({_off:false},0).wait(106).to({_off:true},1).wait(41));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.9,-63.4,308.9,124);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).to({regY:0.1,scaleX:1.1961,scaleY:1.1961,y:2.6,alpha:0.6992},8).to({regY:0,scaleX:1,scaleY:1,x:646.5,y:2.5},3).wait(55).to({_off:true},1).wait(386));

	// Layer_5
	this.instance_1 = new lib.Symbol25();
	this.instance_1.setTransform(92,3,0.24,0.24,0,0,0,25,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27).to({_off:false},0).to({regX:25.1,scaleX:1.24,scaleY:1.24,x:92.1,alpha:0.6992},8).to({regX:25,scaleX:1,scaleY:1,x:92},3).wait(55).to({_off:true},1).wait(386));

	// Layer_4
	this.instance_2 = new lib.Symbol24();
	this.instance_2.setTransform(229,59.85,1,1,0,0,0,37,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(13).to({_off:false},0).to({y:19.85},14).to({y:23.85},4).wait(23).to({alpha:0.2617},4).to({alpha:1},6).to({alpha:0.2617},6).to({alpha:1},7).wait(16).to({_off:true},1).wait(386));

	// Layer_3
	this.instance_3 = new lib.Symbol23();
	this.instance_3.setTransform(408.3,59.85,1,1,0,0,0,140.3,0);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).to({y:19.85},14).to({y:23.85},4).wait(62).to({_off:true},1).wait(386));

	// Layer_2
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(368.2,0.5,1.1208,1.1208,0,0,0,101.7,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:0.5591,scaleY:0.5591,x:368.1,y:-15.45},24).to({regX:101.5,regY:0.1,scaleX:0.6577,scaleY:0.6577,x:368,y:-14.45},4).wait(65).to({_off:true},1).wait(386));

	// Layer_1
	this.instance_5 = new lib.Symbol21();
	this.instance_5.setTransform(366.5,0,1,1,0,0,0,366.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(93).to({_off:true},1).wait(386));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-46.5,733,119.7);


(lib.Symbol13copy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-0.8,4.2).lineTo(-0.8,2.5).lineTo(0.8,2.5).lineTo(0.8,4.2).closePath().moveTo(-0.4,1.5).lineTo(-0.8,-3.8).lineTo(-0.8,-4.2).lineTo(0.9,-4.2).lineTo(0.9,-3.8).lineTo(0.4,1.5).closePath();
	this.shape.setTransform(97.75,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-0.7,4.2).lineTo(-0.7,-2.9).lineTo(-3.4,-2.9).lineTo(-3.4,-4.2).lineTo(3.4,-4.2).lineTo(3.4,-2.9).lineTo(0.7,-2.9).lineTo(0.7,4.2).closePath();
	this.shape_1.setTransform(91.575,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-3.1,5.2).lineTo(-3.1,-3.2).lineTo(3.1,-3.2).lineTo(3.1,-1.9).lineTo(-1.7,-1.9).lineTo(-1.7,0.3).lineTo(2.5,0.3).lineTo(2.5,1.7).lineTo(-1.7,1.7).lineTo(-1.7,3.9).lineTo(3.1,3.9).lineTo(3.1,5.2).closePath().moveTo(0.5,-3.9).lineTo(0.5,-5.2).lineTo(2,-5.2).lineTo(2,-3.9).closePath().moveTo(-2,-3.9).lineTo(-2,-5.2).lineTo(-0.5,-5.2).lineTo(-0.5,-3.9).closePath();
	this.shape_2.setTransform(83.375,-0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(2.6,4.2).lineTo(-0,-2.2).lineTo(-2.7,4.2).lineTo(-4.3,4.2).lineTo(-0.7,-4.2).lineTo(0.7,-4.2).lineTo(4.3,4.2).closePath();
	this.shape_3.setTransform(74.025,0.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-3.4,3.1).lineTo(-2.5,2.1).curveTo(-1.3,3,0.1,3).curveTo(0.9,3,1.4,2.7).curveTo(1.9,2.4,1.9,1.8).curveTo(1.9,1.2,1.4,0.9).curveTo(0.9,0.6,0,0.6).lineTo(-1.5,0.6).lineTo(-1.5,-0.6).lineTo(0.1,-0.6).curveTo(0.8,-0.7,1.3,-1).curveTo(1.7,-1.3,1.7,-1.8).lineTo(1.7,-1.9).curveTo(1.7,-2.4,1.3,-2.7).curveTo(0.9,-3,0.1,-3).curveTo(-1.1,-3,-2.4,-2).lineTo(-3.3,-3).curveTo(-1.7,-4.3,0.1,-4.3).curveTo(1.6,-4.3,2.4,-3.8).curveTo(3.2,-3.1,3.2,-2.1).curveTo(3.2,-0.6,1.7,-0.1).curveTo(3.4,0.3,3.4,1.9).lineTo(3.4,1.9).curveTo(3.4,2.9,2.5,3.7).curveTo(1.6,4.3,0,4.3).curveTo(-2,4.3,-3.4,3.1).closePath();
	this.shape_4.setTransform(64.825,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-3.5,4.2).lineTo(-3.5,-4.2).lineTo(0.3,-4.2).curveTo(1.7,-4.2,2.5,-3.4).curveTo(3,-2.9,3,-2.1).curveTo(3,-0.8,1.8,-0.2).curveTo(2.6,0.1,3.1,0.6).curveTo(3.5,1,3.5,1.9).lineTo(3.5,1.9).curveTo(3.5,3,2.7,3.6).curveTo(1.8,4.2,0.4,4.2).closePath().moveTo(-2,2.9).lineTo(0.4,2.9).curveTo(1.2,2.9,1.6,2.6).curveTo(2,2.3,2,1.8).lineTo(2,1.7).curveTo(2,0.6,0.3,0.6).lineTo(-2,0.6).closePath().moveTo(-2,-0.6).lineTo(-0,-0.6).curveTo(0.7,-0.6,1.1,-0.9).curveTo(1.6,-1.2,1.6,-1.8).curveTo(1.6,-2.4,1.2,-2.6).curveTo(0.8,-2.9,0.1,-2.9).lineTo(-2,-2.9).closePath();
	this.shape_5.setTransform(56.375,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(2.8,4.2).lineTo(2,2.2).lineTo(-2,2.2).lineTo(-2.9,4.2).lineTo(-4.4,4.2).lineTo(-0.7,-4.2).lineTo(0.7,-4.2).lineTo(4.4,4.2).closePath().moveTo(-1.4,0.9).lineTo(1.4,0.9).lineTo(-0,-2.5).closePath();
	this.shape_6.setTransform(42.425,0.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(2,4.2).lineTo(2,0.6).lineTo(-2,0.6).lineTo(-2,4.2).lineTo(-3.5,4.2).lineTo(-3.5,-4.2).lineTo(-2,-4.2).lineTo(-2,-0.7).lineTo(2,-0.7).lineTo(2,-4.2).lineTo(3.5,-4.2).lineTo(3.5,4.2).closePath();
	this.shape_7.setTransform(32.675,1);

	this.instance = new lib.Symbol4();
	this.instance.setTransform(63.95,0.15,0.8818,0.8818,0,0,0,64,0.1);

	this.instance_1 = new lib.Symbol4copy();
	this.instance_1.setTransform(64.6,3.9,0.8818,0.8818,0,0,0,64,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13copy, new cjs.Rectangle(8.6,-22.6,108.5,49.400000000000006), null);


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
	this.shape.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-0.8,4.2).lineTo(-0.8,2.5).lineTo(0.8,2.5).lineTo(0.8,4.2).closePath().moveTo(-0.4,1.5).lineTo(-0.8,-3.8).lineTo(-0.8,-4.2).lineTo(0.9,-4.2).lineTo(0.9,-3.8).lineTo(0.4,1.5).closePath();
	this.shape.setTransform(99.3,5.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-2.4,2.4).curveTo(-3.4,1.4,-3.4,0).curveTo(-3.4,-1.4,-2.4,-2.3).curveTo(-1.4,-3.3,0,-3.3).curveTo(1.5,-3.3,2.4,-2.3).curveTo(3.4,-1.4,3.4,-0.1).lineTo(3.4,0).curveTo(3.4,1.4,2.4,2.3).curveTo(1.5,3.3,0,3.3).curveTo(-1.4,3.3,-2.4,2.4).closePath().moveTo(-1.4,-1.4).curveTo(-1.9,-0.9,-1.9,-0.1).lineTo(-1.9,0).curveTo(-1.9,0.8,-1.4,1.5).curveTo(-0.8,2,0,2).curveTo(0.9,2,1.4,1.5).curveTo(1.9,0.8,1.9,0).curveTo(1.9,-0.9,1.4,-1.4).curveTo(0.8,-2.1,0,-2).curveTo(-0.9,-2.1,-1.4,-1.4).closePath();
	this.shape_1.setTransform(93.025,6.45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(1.5,3.2).lineTo(1.5,0.7).lineTo(-1.5,0.7).lineTo(-1.5,3.2).lineTo(-2.9,3.2).lineTo(-2.9,-3.2).lineTo(-1.5,-3.2).lineTo(-1.5,-0.7).lineTo(1.5,-0.7).lineTo(1.5,-3.2).lineTo(2.9,-3.2).lineTo(2.9,3.2).closePath();
	this.shape_2.setTransform(84.775,6.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-0.7,3.2).lineTo(-0.7,-1.9).lineTo(-3,-1.9).lineTo(-3,-3.2).lineTo(3,-3.2).lineTo(3,-1.9).lineTo(0.7,-1.9).lineTo(0.7,3.2).closePath();
	this.shape_3.setTransform(77.075,6.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-2.2,2.7).curveTo(-2.9,2.2,-2.8,1.3).lineTo(-2.8,1.3).curveTo(-2.8,0.3,-2.2,-0.2).curveTo(-1.4,-0.8,-0.3,-0.8).curveTo(0.7,-0.8,1.4,-0.5).lineTo(1.4,-0.7).curveTo(1.4,-2,-0.1,-2).curveTo(-1,-2,-1.9,-1.6).lineTo(-2.3,-2.8).curveTo(-1.1,-3.3,0.1,-3.3).curveTo(1.5,-3.3,2.2,-2.6).curveTo(2.8,-1.9,2.9,-0.6).lineTo(2.9,3.1).lineTo(1.4,3.1).lineTo(1.4,2.3).curveTo(0.7,3.3,-0.6,3.3).curveTo(-1.6,3.3,-2.2,2.7).closePath().moveTo(-1,0.4).curveTo(-1.5,0.7,-1.5,1.2).curveTo(-1.4,1.7,-1.1,1.9).curveTo(-0.7,2.2,-0.2,2.2).curveTo(0.6,2.2,1,1.8).curveTo(1.5,1.4,1.5,0.8).lineTo(1.5,0.4).curveTo(0.8,0.2,0.1,0.2).curveTo(-0.7,0.2,-1,0.4).closePath();
	this.shape_4.setTransform(69.5,6.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(1.9,3.2).lineTo(-0,-1.4).lineTo(-1.9,3.2).lineTo(-3.4,3.2).lineTo(-0.7,-3.2).lineTo(0.7,-3.2).lineTo(3.4,3.2).closePath();
	this.shape_5.setTransform(61.925,6.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(1.5,3.2).lineTo(1.5,-1.9).lineTo(-1.5,-1.9).lineTo(-1.5,3.2).lineTo(-2.9,3.2).lineTo(-2.9,-3.2).lineTo(2.9,-3.2).lineTo(2.9,3.2).closePath();
	this.shape_6.setTransform(53.875,6.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-2,2.4).curveTo(-3,1.4,-2.9,0).curveTo(-3,-1.4,-2,-2.3).curveTo(-1,-3.3,0.3,-3.3).curveTo(1.8,-3.3,2.9,-2.2).lineTo(2,-1.2).curveTo(1.3,-2.1,0.3,-2).curveTo(-0.4,-2.1,-0.9,-1.4).curveTo(-1.5,-0.8,-1.5,-0.1).lineTo(-1.5,0).curveTo(-1.5,0.8,-0.9,1.5).curveTo(-0.4,2,0.4,2).curveTo(1.3,2,2,1.3).lineTo(2.9,2.1).curveTo(2.4,2.7,1.8,3).curveTo(1.2,3.3,0.3,3.3).curveTo(-1,3.3,-2,2.4).closePath();
	this.shape_7.setTransform(46.2,6.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-2.1,2.4).curveTo(-3.1,1.5,-3.1,0).curveTo(-3.1,-1.4,-2.2,-2.3).curveTo(-1.3,-3.3,0,-3.3).curveTo(1.5,-3.3,2.3,-2.3).curveTo(3.1,-1.4,3.1,0.1).lineTo(3,0.5).lineTo(-1.6,0.5).curveTo(-1.5,1.2,-1,1.7).curveTo(-0.5,2.1,0.2,2.1).curveTo(1.1,2.1,1.9,1.4).lineTo(2.8,2.1).curveTo(1.8,3.3,0.2,3.3).curveTo(-1.2,3.3,-2.1,2.4).closePath().moveTo(-1.1,-1.7).curveTo(-1.5,-1.2,-1.6,-0.4).lineTo(1.6,-0.4).curveTo(1.6,-1.2,1.1,-1.7).curveTo(0.7,-2.1,0,-2.1).curveTo(-0.6,-2.1,-1.1,-1.7).closePath();
	this.shape_8.setTransform(38.575,6.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-2.3,3.7).curveTo(-3.3,2.6,-3.3,0.7).lineTo(-3.3,0.6).curveTo(-3.3,-1.5,-2.5,-2.7).curveTo(-1.7,-3.8,0.1,-4.1).lineTo(2.4,-4.5).lineTo(2.6,-3.2).lineTo(0.3,-2.8).curveTo(-0.7,-2.6,-1.2,-2.1).curveTo(-1.8,-1.6,-1.9,-0.7).curveTo(-1.1,-1.6,0.3,-1.6).curveTo(1.8,-1.6,2.5,-0.8).curveTo(3.3,0,3.3,1.3).curveTo(3.3,2.7,2.4,3.6).curveTo(1.5,4.5,-0,4.5).curveTo(-1.4,4.5,-2.3,3.7).closePath().moveTo(-1.3,0).curveTo(-1.8,0.6,-1.8,1.4).curveTo(-1.8,2.2,-1.4,2.8).curveTo(-0.8,3.3,-0,3.3).curveTo(0.9,3.3,1.3,2.7).curveTo(1.9,2.2,1.8,1.3).curveTo(1.8,0.5,1.4,0).curveTo(0.9,-0.5,0.1,-0.5).curveTo(-0.8,-0.5,-1.3,0).closePath();
	this.shape_9.setTransform(30.55,5.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-2.7,3.2).lineTo(-2.7,-3.2).lineTo(-1.3,-3.2).lineTo(-1.3,-1.2).lineTo(0.2,-1.2).curveTo(1.4,-1.2,2.1,-0.6).curveTo(2.7,-0.1,2.7,1).curveTo(2.7,2,2,2.6).curveTo(1.3,3.2,0.1,3.2).closePath().moveTo(-1.3,2).lineTo(0.1,2).curveTo(1.3,2,1.3,1).curveTo(1.3,0.5,1,0.2).curveTo(0.7,-0,0.1,-0).lineTo(-1.3,-0).closePath();
	this.shape_10.setTransform(89.325,-5.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-3.3,4.2).lineTo(-3.3,-4.1).lineTo(-1.8,-4.1).lineTo(-1.8,-3).curveTo(-1,-4.2,0.3,-4.2).curveTo(1.5,-4.2,2.4,-3.3).curveTo(3.3,-2.4,3.3,-0.9).lineTo(3.3,-0.9).curveTo(3.3,0.6,2.4,1.5).curveTo(1.5,2.4,0.3,2.4).curveTo(-1,2.4,-1.8,1.3).lineTo(-1.8,4.2).closePath().moveTo(-1.3,-2.4).curveTo(-1.8,-1.8,-1.8,-0.9).lineTo(-1.8,-0.9).curveTo(-1.8,0,-1.3,0.6).curveTo(-0.8,1.1,0,1.1).curveTo(0.8,1.1,1.3,0.6).curveTo(1.8,0,1.8,-0.9).lineTo(1.8,-0.9).curveTo(1.8,-1.8,1.3,-2.4).curveTo(0.8,-2.9,0,-2.9).curveTo(-0.8,-2.9,-1.3,-2.4).closePath();
	this.shape_11.setTransform(81.325,-5.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-2.1,2.4).curveTo(-3.1,1.4,-3.1,0).curveTo(-3.1,-1.4,-2.2,-2.3).curveTo(-1.3,-3.3,0,-3.3).curveTo(1.5,-3.3,2.3,-2.3).curveTo(3.1,-1.3,3.1,0.1).lineTo(3,0.5).lineTo(-1.6,0.5).curveTo(-1.5,1.2,-1,1.7).curveTo(-0.5,2.1,0.2,2.1).curveTo(1.1,2.1,1.9,1.4).lineTo(2.8,2.1).curveTo(1.8,3.3,0.2,3.3).curveTo(-1.2,3.3,-2.1,2.4).closePath().moveTo(-1.1,-1.6).curveTo(-1.5,-1.2,-1.6,-0.4).lineTo(1.6,-0.4).curveTo(1.6,-1.2,1.1,-1.6).curveTo(0.7,-2.2,0,-2.2).curveTo(-0.6,-2.2,-1.1,-1.6).closePath();
	this.shape_12.setTransform(73.025,-5.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-2.9,3.2).lineTo(-2.9,-3.2).lineTo(0.4,-3.2).curveTo(1.4,-3.2,2,-2.7).curveTo(2.5,-2.3,2.5,-1.5).curveTo(2.5,-0.5,1.6,-0.1).curveTo(2.8,0.3,2.8,1.4).lineTo(2.8,1.4).curveTo(2.8,2.3,2.2,2.7).curveTo(1.5,3.2,0.4,3.2).closePath().moveTo(-1.4,2.1).lineTo(0.3,2.1).curveTo(1.4,2.1,1.4,1.3).curveTo(1.4,0.9,1.1,0.7).curveTo(0.8,0.5,0.3,0.5).lineTo(-1.4,0.5).closePath().moveTo(-1.4,-0.5).lineTo(0.1,-0.5).curveTo(0.6,-0.5,0.9,-0.8).curveTo(1.2,-1,1.2,-1.3).curveTo(1.2,-1.7,0.9,-1.9).curveTo(0.6,-2.1,0.1,-2.1).lineTo(-1.4,-2.1).closePath();
	this.shape_13.setTransform(65.5,-5.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-2.4,2.3).curveTo(-3.4,1.4,-3.4,0).curveTo(-3.4,-1.4,-2.4,-2.3).curveTo(-1.4,-3.3,0,-3.3).curveTo(1.5,-3.3,2.4,-2.3).curveTo(3.4,-1.4,3.4,-0.1).lineTo(3.4,0).curveTo(3.4,1.4,2.4,2.3).curveTo(1.5,3.3,0,3.3).curveTo(-1.4,3.3,-2.4,2.3).closePath().moveTo(-1.4,-1.4).curveTo(-1.9,-0.9,-1.9,-0.1).lineTo(-1.9,0).curveTo(-1.9,0.9,-1.4,1.4).curveTo(-0.8,2,0,2).curveTo(0.9,2,1.4,1.4).curveTo(1.9,0.9,1.9,0).curveTo(1.9,-0.9,1.4,-1.4).curveTo(0.8,-2.1,0,-2.1).curveTo(-0.9,-2.1,-1.4,-1.4).closePath();
	this.shape_14.setTransform(57.275,-5.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(-3.3,4.2).lineTo(-3.3,-4.1).lineTo(-1.8,-4.1).lineTo(-1.8,-3).curveTo(-1,-4.2,0.3,-4.2).curveTo(1.5,-4.2,2.4,-3.3).curveTo(3.3,-2.4,3.3,-0.9).lineTo(3.3,-0.9).curveTo(3.3,0.6,2.4,1.5).curveTo(1.5,2.4,0.3,2.4).curveTo(-1,2.4,-1.8,1.3).lineTo(-1.8,4.2).closePath().moveTo(-1.3,-2.4).curveTo(-1.8,-1.8,-1.8,-0.9).lineTo(-1.8,-0.9).curveTo(-1.8,0,-1.3,0.6).curveTo(-0.8,1.1,0,1.1).curveTo(0.8,1.1,1.3,0.6).curveTo(1.8,0,1.8,-0.9).lineTo(1.8,-0.9).curveTo(1.8,-1.8,1.3,-2.4).curveTo(0.8,-2.9,0,-2.9).curveTo(-0.8,-2.9,-1.3,-2.4).closePath();
	this.shape_15.setTransform(48.975,-5.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.beginFill("rgba(0,0,0,0.898)").beginStroke().moveTo(2,4.2).lineTo(2,-2.8).lineTo(-2,-2.8).lineTo(-2,4.2).lineTo(-3.4,4.2).lineTo(-3.4,-4.2).lineTo(3.5,-4.2).lineTo(3.5,4.2).closePath();
	this.shape_16.setTransform(39.8,-7);

	this.instance = new lib.Symbol4();
	this.instance.setTransform(63.95,0.15,0.8818,0.8818,0,0,0,64,0.1);

	this.instance_1 = new lib.Symbol4copy();
	this.instance_1.setTransform(64.6,3.9,0.8818,0.8818,0,0,0,64,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(8.6,-22.6,108.5,49.400000000000006), null);


(lib.Symbol44 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol_43
	this.instance = new lib.Symbol43();
	this.instance.setTransform(49.1,12.15,1,1,0,0,0,49.1,-13.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regY:-13.6,rotation:30.4564,x:49.15},0).wait(2).to({regY:-13.5,rotation:0,x:49.1},0).wait(3).to({regY:-13.6,rotation:30.4564,x:49.15},0).wait(3).to({regY:-13.5,rotation:0,x:49.1},0).wait(3).to({regY:-13.6,rotation:30.4564,x:49.15},0).wait(2).to({regY:-13.5,rotation:0,x:49.1},0).wait(2).to({regY:-13.6,rotation:30.4568,x:49.15},0).wait(2).to({regY:-13.5,rotation:0,x:49.1},0).wait(1));

	// Symbol_41
	this.instance_1 = new lib.Symbol41();
	this.instance_1.setTransform(96,25,1,1,0,0,0,7.4,8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.2404,scaleY:1.2404,x:96.05},4).to({regY:8.1,scaleX:0.7596,scaleY:0.7596,x:96,y:25.1},6).to({regY:8,scaleX:1.1442,scaleY:1.1442,y:25.05},5).to({scaleX:1,scaleY:1,y:25},4).wait(1));

	// bigball_png
	this.instance_2 = new lib.Symbol45();
	this.instance_2.setTransform(76.05,0,1,1,0,0,0,41,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:2.5},10).to({y:0},9).wait(1));

	// Symbol_42
	this.instance_3 = new lib.Symbol42();
	this.instance_3.setTransform(103.15,-13.4,1,1,0,0,0,2,14.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({rotation:-21.6985,y:-13.45},0).wait(2).to({rotation:0,y:-13.4},0).wait(3).to({rotation:-21.6985,y:-13.45},0).wait(3).to({rotation:0,y:-13.4},0).wait(3).to({rotation:-21.6985,y:-13.45},0).wait(2).to({rotation:0,y:-13.4},0).wait(2).to({rotation:-21.6985,y:-13.45},0).wait(2).to({rotation:0,y:-13.4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-56,147.79999999999998,104);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},11).wait(98).to({alpha:1},10).to({alpha:0},10).wait(111).to({alpha:1},10).to({alpha:0},10).wait(178).to({_off:true},1).wait(81));

	// Layer_7
	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(73.5,-14.7,0.49,0.49,0,0,0,101.5,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(438).to({_off:true},1).wait(81));

	// Layer_6
	this.instance_2 = new lib.Symbol2();
	this.instance_2.setTransform(-1,-16.5,1,1,0,0,0,-1,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(438).to({_off:true},1).wait(81));

	// Layer_26
	this.instance_3 = new lib.Symbol47();
	this.instance_3.setTransform(336.6,-7.55,1,1,0,0,0,56.2,-0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(296).to({_off:false},0).to({x:384.6},12).to({x:337.6},83).wait(47).to({_off:true},1).wait(81));

	// Layer_25
	this.instance_4 = new lib.Symbol48();
	this.instance_4.setTransform(333.15,-30.65,1,1,0,0,0,97.2,0);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(285).to({_off:false},0).to({alpha:1},10).wait(143).to({_off:true},1).wait(81));

	// Isolation_Mode
	this.instance_5 = new lib.Symbol44("synched",0);
	this.instance_5.setTransform(298.6,25,0.4579,0.4579,0,0,0,70.1,0);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(257).to({_off:false},0).to({scaleX:1,scaleY:1,x:510.55,y:-24,startPosition:12},12).wait(86).to({startPosition:18},0).to({scaleX:1.3517,scaleY:1.3517,x:528.55,startPosition:2},44).wait(39).to({startPosition:1},0).to({_off:true},1).wait(81));

	// Layer_24 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_257 = new cjs.Graphics().moveTo(-177.2,-3.3).lineTo(125.9,-117.9).lineTo(177.2,17.7).lineTo(-125.9,132.3).closePath();
	var mask_graphics_258 = new cjs.Graphics().moveTo(-177.2,-7.6).lineTo(125.9,-122.2).lineTo(177.2,13.4).lineTo(-125.9,128).closePath();
	var mask_graphics_259 = new cjs.Graphics().moveTo(-177.2,-10.5).lineTo(125.9,-125.1).lineTo(177.2,10.5).lineTo(-125.9,125.1).closePath();
	var mask_graphics_260 = new cjs.Graphics().moveTo(-177.2,-10.5).lineTo(125.9,-125.1).lineTo(177.2,10.5).lineTo(-125.9,125.1).closePath();
	var mask_graphics_261 = new cjs.Graphics().moveTo(-177.2,-10.5).lineTo(125.9,-125.1).lineTo(177.2,10.5).lineTo(-125.9,125.1).closePath();
	var mask_graphics_262 = new cjs.Graphics().moveTo(-177.2,-10.5).lineTo(125.9,-125.1).lineTo(177.2,10.5).lineTo(-125.9,125.1).closePath();
	var mask_graphics_263 = new cjs.Graphics().moveTo(-167,-10.5).lineTo(136.1,-125.1).lineTo(187.3,10.5).lineTo(-115.7,125.1).closePath();
	var mask_graphics_264 = new cjs.Graphics().moveTo(-154.6,-10.5).lineTo(148.4,-125.1).lineTo(199.7,10.5).lineTo(-103.3,125.1).closePath();
	var mask_graphics_265 = new cjs.Graphics().moveTo(-142.3,-10.5).lineTo(160.8,-125.1).lineTo(212.1,10.5).lineTo(-91,125.1).closePath();
	var mask_graphics_266 = new cjs.Graphics().moveTo(-129.9,-10.5).lineTo(173.2,-125.1).lineTo(224.5,10.5).lineTo(-78.6,125.1).closePath();
	var mask_graphics_267 = new cjs.Graphics().moveTo(-117.5,-10.5).lineTo(185.5,-125.1).lineTo(236.8,10.5).lineTo(-66.2,125.1).closePath();
	var mask_graphics_268 = new cjs.Graphics().moveTo(-105.1,-10.5).lineTo(197.9,-125.1).lineTo(249.2,10.5).lineTo(-53.9,125.1).closePath();
	var mask_graphics_269 = new cjs.Graphics().moveTo(-92.8,-10.5).lineTo(210.3,-125.1).lineTo(261.6,10.5).lineTo(-41.5,125.1).closePath();
	var mask_graphics_438 = new cjs.Graphics().moveTo(-92.8,-10.5).lineTo(210.3,-125.1).lineTo(261.6,10.5).lineTo(-41.5,125.1).closePath();

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(257).to({graphics:mask_graphics_257,x:49.0289,y:132.2819}).wait(1).to({graphics:mask_graphics_258,x:73.7748,y:128.0344}).wait(1).to({graphics:mask_graphics_259,x:98.5206,y:122.4616}).wait(1).to({graphics:mask_graphics_260,x:123.2664,y:113.9658}).wait(1).to({graphics:mask_graphics_261,x:148.0123,y:105.4699}).wait(1).to({graphics:mask_graphics_262,x:172.7581,y:96.9741}).wait(1).to({graphics:mask_graphics_263,x:187.3379,y:88.4783}).wait(1).to({graphics:mask_graphics_264,x:199.7108,y:79.9824}).wait(1).to({graphics:mask_graphics_265,x:212.0838,y:71.4866}).wait(1).to({graphics:mask_graphics_266,x:224.4567,y:62.9908}).wait(1).to({graphics:mask_graphics_267,x:236.8296,y:54.4949}).wait(1).to({graphics:mask_graphics_268,x:249.2025,y:45.9991}).wait(1).to({graphics:mask_graphics_269,x:261.575,y:37.5033}).wait(169).to({graphics:mask_graphics_438,x:261.575,y:37.5033}).wait(1).to({graphics:null,x:0,y:0}).wait(81));

	// Layer_18
	this.shape = new cjs.Shape();
	this.shape.graphics.beginFill("rgba(255,255,255,0.627)").beginStroke().moveTo(-129.5,-1.2).lineTo(-141.5,-9.2).curveTo(-43.9,16.4,115.5,-22.2).lineTo(141.5,-1.2).curveTo(84,22.2,16.3,22.2).curveTo(-51.5,22.2,-129.5,-1.2).closePath();
	this.shape.setTransform(360.5,20.2831);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(257).to({_off:false},0).wait(181).to({_off:true},1).wait(81));

	// Layer_17
	this.instance_6 = new lib.Symbol29();
	this.instance_6.setTransform(245.5,30,1,1,0,0,0,89.5,41);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(257).to({_off:false},0).to({scaleX:0.676,scaleY:0.676,x:225.5},20,cjs.Ease.quadOut).wait(78).to({scaleX:0.3854,scaleY:0.3854,x:225.55},44).wait(39).to({_off:true},1).wait(81));

	// Layer_23
	this.instance_7 = new lib.Symbol11copy();
	this.instance_7.setTransform(357.9,-25.15,1,1,0,0,0,120.4,0);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(138).to({_off:false},0).to({x:307.9,alpha:1},16).to({_off:true},96).wait(270));

	// Layer_8
	this.instance_8 = new lib.Symbol40("synched",0);
	this.instance_8.setTransform(460.9,11.6,1,1,0,0,0,11,0);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(119).to({_off:false},0).to({_off:true},131).wait(270));

	// Layer_22
	this.instance_9 = new lib.Symbol39();
	this.instance_9.setTransform(551.85,-35.7,1,1,0,0,0,19.3,0);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(119).to({_off:false},0).wait(90).to({alpha:0},5).to({alpha:1},4).to({_off:true},32).wait(270));

	// Layer_4
	this.instance_10 = new lib.Symbol11();
	this.instance_10.setTransform(307.9,-5.15,1,1,0,0,0,120.4,0);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:-28.15,alpha:1},19).to({y:-25.15},7).to({_off:true},93).wait(401));

	// Layer_21
	this.instance_11 = new lib.Symbol33("synched",9);
	this.instance_11.setTransform(550.5,-16.65,1,1,0,0,0,95.5,0);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(19).to({_off:false},0).to({_off:true},100).wait(401));

	// Layer_1
	this.instance_12 = new lib.f1();
	this.instance_12.setTransform(5,-61);

	this.instance_13 = new lib.f2();
	this.instance_13.setTransform(4,-61);

	this.instance_14 = new lib.f3();
	this.instance_14.setTransform(5,-61);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_13}]},119).to({state:[{t:this.instance_14}]},131).to({state:[{t:this.instance_14}]},188).to({state:[]},1).wait(81));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-97,745,142.9);


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

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(520));

	// Layer_8
	this.instance = new lib.Symbol21();
	this.instance.setTransform(363,46.5,1,1,0,0,0,366.5,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(479).to({_off:false},0).to({alpha:1},15).wait(26));

	// Layer_5
	this.instance_1 = new lib.Symbol13();
	this.instance_1.setTransform(656,46,0.4134,0.4134,0,0,0,64,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.Symbol13copy();
	this.instance_2.setTransform(656.05,46,0.6216,0.6216,0,0,0,64,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(147).to({_off:false},0).to({scaleX:1.1514,scaleY:1.1514,x:656.05,alpha:1},17).to({scaleX:1,scaleY:1,x:656},5).wait(261).to({scaleX:0.6216,scaleY:0.6216,x:656.05},5).to({_off:true},1).wait(84));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(436).to({_off:false},0).to({scaleX:1,scaleY:1,x:656},7).wait(77));

	// Layer_7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_81 = new cjs.Graphics().moveTo(-577.9,-61).lineTo(577.9,-61).lineTo(462.9,59).lineTo(-577.9,61).closePath();
	var mask_graphics_82 = new cjs.Graphics().moveTo(-577.9,-61).lineTo(577.9,-61).lineTo(462.9,59).lineTo(-577.9,61).closePath();
	var mask_graphics_83 = new cjs.Graphics().moveTo(-577.9,-61).lineTo(578,-61).lineTo(462.9,59).lineTo(-577.9,61).closePath();
	var mask_graphics_84 = new cjs.Graphics().moveTo(-577.9,-61).lineTo(578,-61).lineTo(462.9,59).lineTo(-577.9,61).closePath();
	var mask_graphics_85 = new cjs.Graphics().moveTo(-578,-61).lineTo(578,-61).lineTo(463,59).lineTo(-578,61).closePath();
	var mask_graphics_86 = new cjs.Graphics().moveTo(-578,-61).lineTo(578,-61).lineTo(463,59).lineTo(-578,61).closePath();
	var mask_graphics_87 = new cjs.Graphics().moveTo(-578,-61).lineTo(577.9,-61).lineTo(463,59).lineTo(-578,61).closePath();
	var mask_graphics_88 = new cjs.Graphics().moveTo(-578,-61).lineTo(577.9,-61).lineTo(463,59).lineTo(-578,61).closePath();
	var mask_graphics_89 = new cjs.Graphics().moveTo(-578,-61).lineTo(577.9,-61).lineTo(462.9,59).lineTo(-578,61).closePath();
	var mask_graphics_90 = new cjs.Graphics().moveTo(-577.9,-61).lineTo(577.9,-61).lineTo(462.9,59).lineTo(-577.9,61).closePath();
	var mask_graphics_91 = new cjs.Graphics().moveTo(-577.9,-61).lineTo(577.9,-61).lineTo(462.9,59).lineTo(-577.9,61).closePath();
	var mask_graphics_92 = new cjs.Graphics().moveTo(-577.9,-61).lineTo(577.9,-61).lineTo(462.9,59).lineTo(-577.9,61).closePath();
	var mask_graphics_93 = new cjs.Graphics().moveTo(-577.9,-61).lineTo(578,-61).lineTo(462.9,59).lineTo(-577.9,61).closePath();
	var mask_graphics_94 = new cjs.Graphics().moveTo(-578,-61).lineTo(578,-61).lineTo(463,59).lineTo(-578,61).closePath();

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(81).to({graphics:mask_graphics_81,x:-572.9,y:49.05}).wait(1).to({graphics:mask_graphics_82,x:-509.0577,y:49.05}).wait(1).to({graphics:mask_graphics_83,x:-445.2154,y:49.05}).wait(1).to({graphics:mask_graphics_84,x:-381.3731,y:49.05}).wait(1).to({graphics:mask_graphics_85,x:-317.5308,y:49.05}).wait(1).to({graphics:mask_graphics_86,x:-253.6885,y:49.05}).wait(1).to({graphics:mask_graphics_87,x:-189.8462,y:49.05}).wait(1).to({graphics:mask_graphics_88,x:-126.0038,y:49.05}).wait(1).to({graphics:mask_graphics_89,x:-62.1615,y:49.05}).wait(1).to({graphics:mask_graphics_90,x:1.6808,y:49.05}).wait(1).to({graphics:mask_graphics_91,x:65.5231,y:49.05}).wait(1).to({graphics:mask_graphics_92,x:129.3654,y:49.05}).wait(1).to({graphics:mask_graphics_93,x:193.2077,y:49.05}).wait(1).to({graphics:mask_graphics_94,x:257.05,y:49.05}).wait(426));

	// Layer_1
	this.instance_3 = new lib.Symbol6("synched",0);
	this.instance_3.setTransform(362.5,61,1,1,0,0,0,365.5,0);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(81).to({_off:false},0).wait(439));

	// Isolation_Mode
	this.instance_4 = new lib.Symbol22("synched",0);
	this.instance_4.setTransform(364.5,45.55,1,1,0,0,0,366.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},94).wait(426));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(360.5,33.1,381.5,85.69999999999999);
// library properties:
lib.properties = {
	id: 'AEDC430DAE636748BAC31A6C01E90BA7',
	width: 728,
	height: 90,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/728_90_atlas_1.png?1666269350879", id:"728_90_atlas_1"}
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