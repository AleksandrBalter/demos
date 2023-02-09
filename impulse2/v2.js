(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"v2_atlas_P_1", frames: [[0,0,360,265]]}
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



(lib.Rectangle1 = function() {
	this.initialize(ss["v2_atlas_P_1"]);
	this.gotoAndStop(0);
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
	this.shape.graphics.f("#1C1A47").s().p("AAGEfQgeABgXgVQgYgTgFgeQgEgXgMgSIAAAAIhpikIgBgBQgHgKABgKQACgLAJgIQAHgGALAAQAKAAAIAGIA8AyQAFAEAGAAQAGAAAFgFQAEgFAAgFIAAkUQAAgJAHgHQAGgGAKAAIABAAQAJgBAGAHQAHAGAAAJIAADnQAAAHAFAEQAEAFAHgBQAGABAEgFQAEgEAAgHIAAhKQAAgJAHgGQAGgGAKAAQAKAAAGAHQAHAGAAAKIAABgQAAAGAFAEQAEAEAHAAQAGAAAFgEQAEgEAAgGIAAhGQABgJAGgGIAAAAQAHgHAJAAQAKAAAGAHQAHAGAAAKIAABlQAAAGAFAEQAEAFAHAAQAGAAAFgFQAEgEAAgGIAAhDQAAgJAHgGQAHgHAJAAIABAAQAJAAAHAHQAGAGAAAIIAABHQAABBgJAsQgHAegKASQgKASgEATQgGAegXATQgXATgfAAg");
	this.shape.setTransform(23.5868,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGE/QgpAAgggbQgggcgIgpIAAABQgDgRgIgNIhpikQgOgTADgXQACgYATgOQAQgOAWAAQAVAAARAOIAjAdIAAjzQAAgWAQgPQAPgQAXgBIABAAQAWAAAPAQQAPAPAAAWIAABtQALgEAMAAQAXAAAPAPQAJAJAEAJQALgGAPAAQAWAAAQAPQALALAEAOQALgFANAAIABAAQAWAAAQAPQAPAQAAAVIAABHQAABEgKAwQgIAjgMAVQgIAOgCANQgIApggAbQggAbgqAAgAhMDaQAFAeAYATQAXAVAegBIBMAAQAfAAAXgTQAXgTAGgeQAEgTAKgSQAKgSAHgeQAJgsAAhBIAAhHQAAgIgGgGQgHgHgJAAIgBAAQgJAAgHAHQgHAGAAAJIAABDQAAAGgEAEQgFAFgGAAQgHAAgEgFQgFgEAAgGIAAhlQAAgKgHgGQgGgHgKAAQgJAAgHAHIAAAAQgGAGgBAJIAABGQAAAGgEAEQgFAEgGAAQgHAAgEgEQgFgEAAgGIAAhgQAAgKgHgGQgGgHgKAAQgKAAgGAGQgHAGAAAJIAABKQAAAHgEAEQgEAFgGgBQgHABgEgFQgFgEAAgHIAAjnQAAgJgHgGQgGgHgJABIgBAAQgKAAgGAGQgHAHAAAJIAAEUQAAAFgEAFQgFAFgGAAQgGAAgFgEIg8gyQgIgGgKAAQgLAAgHAGQgJAIgCALQgBAKAHAKIABABIBpCkIAAAAQAMASAEAXg");
	this.shape_1.setTransform(23.5985,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol41, new cjs.Rectangle(0,-31.8,47.2,63.7), null);


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

	// Layer_1
	this.instance = new lib.Rectangle1();
	this.instance.setTransform(0,-132.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(0,-132.5,360,265), null);


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
	this.shape.graphics.f("#FF7320").s().p("AgVAVQgIgIAAgNQAAgLAIgKQAJgIAMAAQAMAAAJAIQAJAKAAALQAAANgJAIQgJAJgMAAQgMAAgJgJg");
	this.shape.setTransform(3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(0,-3,6,6), null);


(lib.Symbol38 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF7320").s().p("AgVAVQgIgIAAgNQAAgLAIgKQAJgIAMAAQAMAAAJAIQAJAKAAALQAAANgJAIQgJAJgMAAQgMAAgJgJg");
	this.shape.setTransform(3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(0,-3,6,6), null);


(lib.Symbol37 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FF7320").s().p("AgVAVQgIgIAAgNQAAgLAIgKQAJgIAMAAQAMAAAJAIQAJAKAAALQAAANgJAIQgJAJgMAAQgMAAgJgJg");
	this.shape.setTransform(3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(0,-3,6,6), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF7320").s().p("AgVAVQgIgIAAgNQAAgLAIgKQAJgIAMAAQAMAAAJAIQAJAKAAALQAAANgJAIQgJAJgMAAQgMAAgJgJg");
	this.shape.setTransform(3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(0,-3,6,6), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF7320").s().p("AgVAVQgIgIAAgNQAAgLAIgKQAJgIAMAAQAMAAAJAIQAJAKAAALQAAANgJAIQgJAJgMAAQgMAAgJgJg");
	this.shape.setTransform(3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(0,-3,6,6), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF7320").s().p("AgVAVQgIgIAAgNQAAgLAIgKQAJgIAMAAQAMAAAJAIQAJAKAAALQAAANgJAIQgJAJgMAAQgMAAgJgJg");
	this.shape.setTransform(3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,-3,6,6), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF7320").s().p("AgVAVQgIgIAAgNQAAgLAIgKQAJgIAMAAQAMAAAJAIQAJAKAAALQAAANgJAIQgJAJgMAAQgMAAgJgJg");
	this.shape.setTransform(3,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,-3,6,6), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgaAxQgMgGgHgNQgHgNAAgRQAAgaAPgPQAOgPAaAAQASAAAMAHQAMAGAGAOIgRAFQgEgJgIgFQgIgEgMAAQgRAAgJALQgKALAAAUQAAATAKAMQAKAMARgBQAKAAAJgDQAJgCAGgGIAAgSIgfAAIAAgNIAvAAIAAAmQgJAJgNAEQgNAGgPAAQgRAAgMgIg");
	this.shape.setTransform(184.475,-0.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAYA3Ig2haIAAALIABAJIAABGIgQAAIAAhtIAVAAIA3BbIgBgXIAAhEIAPAAIAABtg");
	this.shape_1.setTransform(172.7,-0.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIA3IAAhtIARAAIAABtg");
	this.shape_2.setTransform(164.675,-0.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AguAcIARgEQADAKAHAEQAIAFAMAAQAOAAAHgFQAHgEAAgJQAAgFgCgDQgDgEgFgCIgJgDIgMgDIgOgDIgJgDIgGgEQgFgEgCgFQgDgFAAgHQAAgOALgIQALgIAUAAQATABAKAFQAKAGAEAOIgRADQgDgIgGgEQgGgDgLAAQgMAAgGADQgHAEAAAIQAAAFADADQADADAEACIATAGIANADIAKADIAHADIAFAEIAFAIQACAFAAAGQAAAPgMAJQgMAIgXABQgngBgHgcg");
	this.shape_3.setTransform(157.125,-0.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AguAcIARgEQADAKAHAEQAIAFAMAAQAOAAAHgFQAHgEAAgJQAAgFgCgDQgDgEgFgCIgJgDIgMgDIgOgDIgJgDIgGgEQgFgEgCgFQgDgFAAgHQAAgOALgIQALgIAUAAQATABAKAFQAKAGAEAOIgRADQgDgIgGgEQgGgDgLAAQgMAAgGADQgHAEAAAIQAAAFADADQADADAEACIATAGIANADIAKADIAHADIAFAEIAFAIQACAFAAAGQAAAPgMAJQgMAIgXABQgngBgHgcg");
	this.shape_4.setTransform(146.475,-0.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrA3IAAhtIBUAAIAAAOIhCAAIAAAhIA9AAIAAAMIg9AAIAAAkIBFAAIAAAOg");
	this.shape_5.setTransform(136.125,-0.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgZAxQgMgGgHgNQgGgNAAgRQAAgSAGgMQAHgNAMgGQAMgHAQAAQASABAMAGQAMAIAFAOIgQAEQgDgJgJgEQgIgGgLAAQgQAAgKALQgJALAAAUQAAAMAEAKQAFAKAIAFQAIAGALgBQAWAAAKgWIAPAHQgGAOgNAIQgMAHgRABQgQAAgMgIg");
	this.shape_6.setTransform(124.825,-0.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcAxQgNgGgGgNQgHgNAAgRQAAgRAHgNQAGgNAMgGQANgHAQAAQARAAAMAHQANAGAGANQAHAMAAASQAAARgHANQgHAMgMAHQgMAIgRAAQgQAAgMgIgAgagfQgKALAAAUQAAAMAEAKQAFAKAIAFQAIAGALgBQASAAAJgLQAKgLAAgUQAAgTgKgMQgJgLgSAAQgRAAgJALg");
	this.shape_7.setTransform(112.725,-0.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAcA3IgbgsIgfAAIAAAsIgRAAIAAhtIAzAAQATAAALAJQAKAIAAAPQAAAMgHAIQgHAIgMACIAfAvgAgegCIAhAAQALAAAGgFQAGgGAAgJQAAgJgGgEQgGgFgLAAIghAAg");
	this.shape_8.setTransform(101.05,-0.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgqA3IAAhtIAuAAQASAAALAJQAKAJAAAPQAAALgEAIQgFAHgJAEQgIAFgMgBIgeAAIAAAqgAgZAAIAcAAQALAAAGgFQAFgFAAgKQAAgUgXAAIgbAAg");
	this.shape_9.setTransform(89.9,-0.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgrA3IAAhtIBUAAIAAAOIhCAAIAAAhIA9AAIAAAMIg9AAIAAAkIBFAAIAAAOg");
	this.shape_10.setTransform(74.825,-0.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgvA3IAAhtIAmAAQAbAAAPAOQAPAOAAAaQAAARgHAMQgHANgMAGQgMAHgPAAgAgdApIAXAAQAKAAAIgFQAJgFAFgKQAEgJAAgMQAAgTgKgLQgLgKgTAAIgTAAg");
	this.shape_11.setTransform(63.675,-0.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAkA3IgMgfIguAAIgMAfIgSAAIArhtIATAAIArBtgAgCggIgDAIIgNAjIAlAAIgNgjIgDgIIgDgJIgCAJg");
	this.shape_12.setTransform(52.175,-0.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZAxQgMgGgHgNQgGgNAAgRQAAgSAGgMQAHgNAMgGQAMgHAQAAQASABAMAGQAMAIAFAOIgQAEQgDgJgJgEQgIgGgLAAQgQAAgKALQgJALAAAUQAAAMAEAKQAFAKAIAFQAIAGALgBQAWAAAKgWIAPAHQgGAOgNAIQgMAHgRABQgQAAgMgIg");
	this.shape_13.setTransform(41.025,-0.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AguAcIARgEQADAKAHAEQAIAFAMAAQAOAAAHgFQAHgEAAgJQAAgFgCgDQgDgEgFgCIgJgDIgMgDIgOgDIgJgDIgGgEQgFgEgCgFQgDgFAAgHQAAgOALgIQALgIAUAAQATABAKAFQAKAGAEAOIgRADQgDgIgGgEQgGgDgLAAQgMAAgGADQgHAEAAAIQAAAFADADQADADAEACIATAGIANADIAKADIAHADIAFAEIAFAIQACAFAAAGQAAAPgMAJQgMAIgXABQgngBgHgcg");
	this.shape_14.setTransform(29.825,-0.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAkA3IgMgfIguAAIgMAfIgSAAIArhtIATAAIArBtgAgCggIgDAIIgNAjIAlAAIgNgjIgDgIIgDgJIgCAJg");
	this.shape_15.setTransform(19.025,-0.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgZAxQgMgGgHgNQgGgNAAgRQAAgSAGgMQAHgNAMgGQAMgHAQAAQASABAMAGQAMAIAFAOIgQAEQgDgJgJgEQgIgGgLAAQgQAAgKALQgJALAAAUQAAAMAEAKQAFAKAIAFQAIAGALgBQAWAAAKgWIAPAHQgGAOgNAIQgMAHgRABQgQAAgMgIg");
	this.shape_16.setTransform(7.875,-0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(0,-13.4,193.1,26.9), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguAcIARgEQADAKAHAEQAIAFAMAAQAOAAAHgFQAHgEAAgJQAAgFgCgDQgDgEgFgCIgJgDIgMgDIgOgDIgJgDIgGgEQgFgEgCgFQgDgFAAgHQAAgOALgIQALgIAUAAQATABAKAFQAKAGAEAOIgRADQgDgIgGgEQgGgDgLAAQgMAAgGADQgHAEAAAIQAAAFADADQADADAEACIATAGIANADIAKADIAHADIAFAEIAFAIQACAFAAAGQAAAPgMAJQgMAIgXABQgngBgHgcg");
	this.shape.setTransform(270.575,-0.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAZA3Ig3haIAAALIABAJIAABGIgPAAIAAhtIATAAIA3BbIgBgXIAAhEIARAAIAABtg");
	this.shape_1.setTransform(259.5,-0.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcAxQgNgGgGgNQgHgNAAgRQAAgRAHgNQAGgNAMgGQANgHAQAAQARAAAMAHQANAGAGANQAHAMAAASQAAARgHANQgHAMgMAHQgMAIgRAAQgQAAgMgIgAgagfQgKALAAAUQAAAMAEAKQAFAKAIAFQAIAGALgBQASAAAJgLQAKgLAAgUQAAgTgKgMQgJgLgSAAQgRAAgJALg");
	this.shape_2.setTransform(247.475,-0.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgIA3IAAhtIARAAIAABtg");
	this.shape_3.setTransform(239.025,-0.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIA3IAAhfIglAAIAAgOIBbAAIAAAOIglAAIAABfg");
	this.shape_4.setTransform(231.925,-0.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgZAxQgMgGgHgNQgGgNAAgRQAAgSAGgMQAHgNAMgGQAMgHAQAAQASABAMAGQAMAIAFAOIgQAEQgDgJgJgEQgIgGgLAAQgQAAgKALQgJALAAAUQAAAMAEAKQAFAKAIAFQAIAGALgBQAWAAAKgWIAPAHQgGAOgNAIQgMAHgRABQgQAAgMgIg");
	this.shape_5.setTransform(221.375,-0.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAkA3IgMgfIguAAIgMAfIgSAAIArhtIATAAIArBtgAgCggIgDAIIgNAjIAlAAIgNgjIgDgIIgDgJIgCAJg");
	this.shape_6.setTransform(210.025,-0.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguAcIARgEQADAKAHAEQAIAFAMAAQAOAAAHgFQAHgEAAgJQAAgFgCgDQgDgEgFgCIgJgDIgMgDIgOgDIgJgDIgGgEQgFgEgCgFQgDgFAAgHQAAgOALgIQALgIAUAAQATABAKAFQAKAGAEAOIgRADQgDgIgGgEQgGgDgLAAQgMAAgGADQgHAEAAAIQAAAFADADQADADAEACIATAGIANADIAKADIAHADIAFAEIAFAIQACAFAAAGQAAAPgMAJQgMAIgXABQgngBgHgcg");
	this.shape_7.setTransform(199.225,-0.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZA3Ig3haIABALIAAAJIAABGIgQAAIAAhtIAUAAIA3BbIgBgXIAAhEIAQAAIAABtg");
	this.shape_8.setTransform(188.15,-0.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAkA3IgMgfIguAAIgMAfIgSAAIArhtIATAAIArBtgAgCggIgDAIIgNAjIAlAAIgNgjIgDgIIgDgJIgCAJg");
	this.shape_9.setTransform(176.875,-0.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAdA3IgcgsIgfAAIAAAsIgSAAIAAhtIA0AAQATAAAKAJQALAIAAAPQAAAMgHAIQgHAIgMACIAfAvgAgegCIAhAAQALAAAGgFQAGgGAAgJQAAgJgGgEQgGgFgLAAIghAAg");
	this.shape_10.setTransform(165.95,-0.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgIA3IAAhfIglAAIAAgOIBbAAIAAAOIglAAIAABfg");
	this.shape_11.setTransform(154.975,-0.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgvA3IAAhtIAmAAQAbAAAPAOQAPAOAAAaQAAARgHAMQgHANgMAGQgMAHgPAAgAgdApIAXAAQAKAAAIgFQAJgFAFgKQAEgJAAgMQAAgTgKgLQgLgKgTAAIgTAAg");
	this.shape_12.setTransform(140.125,-0.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAcA3IgbgsIgfAAIAAAsIgRAAIAAhtIAzAAQATAAALAJQAKAIAAAPQAAAMgHAIQgHAIgMACIAeAvgAgegCIAhAAQALAAAGgFQAGgGAAgJQAAgJgGgEQgGgFgMAAIggAAg");
	this.shape_13.setTransform(128.65,-0.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAkA3IgMgfIguAAIgMAfIgSAAIArhtIATAAIArBtgAgCggIgDAIIgNAjIAlAAIgNgjIgDgIIgDgJIgCAJg");
	this.shape_14.setTransform(117.075,-0.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZAxQgMgGgHgNQgGgNAAgRQAAgSAGgMQAHgNAMgGQAMgHAQAAQASABAMAGQAMAIAFAOIgQAEQgDgJgJgEQgIgGgLAAQgQAAgKALQgJALAAAUQAAAMAEAKQAFAKAIAFQAIAGALgBQAWAAAKgWIAPAHQgGAOgNAIQgMAHgRABQgQAAgMgIg");
	this.shape_15.setTransform(105.925,-0.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgkA4IAAgMQAEgIAFgHIALgMIAOgMIAGgFIAFgFQAFgEACgFQACgEAAgGQAAgIgEgFQgFgEgJAAQgHAAgFAEQgFAFgBAIIgRgBQABgOAKgIQAKgIAOAAQARAAAJAIQAKAIAAAOQAAAHgEAHQgDAGgFAFIgJAJIgNAKIgMAMQgFAFgCAGIA2AAIAAAOg");
	this.shape_16.setTransform(95.575,-0.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgvA3IAAhtIAmAAQAbAAAPAOQAPAOAAAaQAAARgHAMQgHANgMAGQgMAHgPAAgAgdApIAXAAQAKAAAIgFQAJgFAFgKQAEgJAAgMQAAgTgKgLQgLgKgTAAIgTAAg");
	this.shape_17.setTransform(85.625,-0.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAdA3IgcgsIgfAAIAAAsIgSAAIAAhtIA0AAQATAAAKAJQALAIAAAPQAAAMgHAIQgHAIgMACIAfAvgAgegCIAhAAQALAAAGgFQAGgGAAgJQAAgJgGgEQgGgFgLAAIghAAg");
	this.shape_18.setTransform(74.15,-0.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAkA3IgMgfIguAAIgMAfIgSAAIArhtIATAAIArBtgAgCggIgDAIIgNAjIAlAAIgNgjIgDgIIgDgJIgCAJg");
	this.shape_19.setTransform(62.575,-0.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgZAxQgMgGgHgNQgGgNAAgRQAAgSAGgMQAHgNAMgGQAMgHAQAAQASABAMAGQAMAIAFAOIgQAEQgDgJgJgEQgIgGgLAAQgQAAgKALQgJALAAAUQAAAMAEAKQAFAKAIAFQAIAGALgBQAWAAAKgWIAPAHQgGAOgNAIQgMAHgRABQgQAAgMgIg");
	this.shape_20.setTransform(51.425,-0.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgVA7IAch1IAPAAIgcB1g");
	this.shape_21.setTransform(38.875,-0.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgrA3IAAhtIAvAAQATAAAKAJQALAJAAAPQAAALgGAIQgEAHgJAEQgJAFgLgBIgeAAIAAAqgAgZAAIAbAAQAMAAAFgFQAHgFgBgKQAAgUgYAAIgaAAg");
	this.shape_22.setTransform(27.15,-0.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgkA4IAAgMQAEgIAFgHIALgMIAOgMIAGgFIAFgFQAFgEACgFQACgEAAgGQAAgIgEgFQgFgEgJAAQgHAAgFAEQgFAFgBAIIgRgBQABgOAKgIQAKgIAOAAQARAAAJAIQAKAIAAAOQAAAHgEAHQgDAGgFAFIgJAJIgNAKIgMAMQgFAFgCAGIA2AAIAAAOg");
	this.shape_23.setTransform(17.075,-0.325);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgrA3IAAhtIAuAAQAUAAAKAJQALAJAAAPQAAALgGAIQgEAHgIAEQgKAFgMgBIgdAAIAAAqgAgZAAIAbAAQAMAAAFgFQAHgFAAgKQAAgUgZAAIgaAAg");
	this.shape_24.setTransform(7.6,-0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,-13.4,278.1,26.9), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrA3IAAhtIBUAAIAAAOIhCAAIAAAhIA9AAIAAAMIg9AAIAAAkIBFAAIAAAOg");
	this.shape.setTransform(158.725,-0.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkA3IAAhtIARAAIAABfIA4AAIAAAOg");
	this.shape_1.setTransform(148.85,-0.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgsA3IAAhtIAsAAQASAAAKAGQAKAIAAANQAAAJgFAHQgFAHgLACQAOACAGAFQAIAIgBALQAAAPgKAIQgLAIgUAAgAgaApIAcAAQANAAAGgEQAGgFAAgKQAAgRgagBIgbAAgAgagIIAaAAQAKAAAFgEQAGgFgBgIQABgIgGgEQgFgDgKgBIgaAAg");
	this.shape_2.setTransform(138.65,-0.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAkA3IgMgfIguAAIgMAfIgSAAIArhtIATAAIArBtgAgCggIgDAIIgNAjIAlAAIgNgjIgDgIIgDgJIgCAJg");
	this.shape_3.setTransform(127.475,-0.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkA3IAAhtIASAAIAABfIA3AAIAAAOg");
	this.shape_4.setTransform(117.75,-0.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIA3IAAhtIARAAIAABtg");
	this.shape_5.setTransform(110.575,-0.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAkA3IgMgfIguAAIgMAfIgSAAIArhtIATAAIArBtgAgCggIgDAIIgNAjIAlAAIgNgjIgDgIIgDgJIgCAJg");
	this.shape_6.setTransform(102.875,-0.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIA3IgshtIATAAIAbBKIAEAKIACAKIADgLIAEgJIAbhKIATAAIgsBtg");
	this.shape_7.setTransform(92.1,-0.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAkA3IgMgfIguAAIgMAfIgSAAIArhtIATAAIArBtgAgCggIgDAIIgNAjIAlAAIgNgjIgDgIIgDgJIgCAJg");
	this.shape_8.setTransform(81.275,-0.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcAxQgNgGgGgNQgHgNAAgRQAAgRAHgNQAGgNAMgGQANgHAQAAQARAAAMAHQANAGAGANQAHAMAAASQAAARgHANQgHAMgMAHQgMAIgRAAQgQAAgMgIgAgagfQgKALAAAUQAAAMAEAKQAFAKAIAFQAIAGALgBQASAAAJgLQAKgLAAgUQAAgTgKgMQgJgLgSAAQgRAAgJALg");
	this.shape_9.setTransform(65.125,-0.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgrA3IAAhtIBUAAIAAAOIhCAAIAAAhIA9AAIAAAMIg9AAIAAAkIBFAAIAAAOg");
	this.shape_10.setTransform(53.875,-0.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgaAxQgMgGgHgNQgHgNAAgRQAAgaAPgPQAOgPAaAAQASAAAMAHQAMAGAGAOIgRAFQgEgJgIgFQgIgEgMAAQgRAAgJALQgKALAAAUQAAATAKAMQAKAMARgBQAKAAAJgDQAJgCAGgGIAAgSIgfAAIAAgNIAvAAIAAAmQgJAJgNAEQgNAGgPAAQgRAAgMgIg");
	this.shape_11.setTransform(41.825,-0.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgkA3IAAhtIARAAIAABfIA4AAIAAAOg");
	this.shape_12.setTransform(27.1,-0.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkA3IAAhtIARAAIAABfIA4AAIAAAOg");
	this.shape_13.setTransform(17.9,-0.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAkA3IgMgfIguAAIgMAfIgSAAIArhtIATAAIArBtgAgCggIgDAIIgNAjIAlAAIgNgjIgDgIIgDgJIgCAJg");
	this.shape_14.setTransform(7.475,-0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol30, new cjs.Rectangle(0,-13.4,166,26.9), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgvA3IAAhtIAmAAQAbAAAPAOQAPAOAAAaQAAARgHAMQgHANgMAGQgMAHgPAAgAgdApIAXAAQAKAAAIgFQAJgFAFgKQAEgJAAgMQAAgTgKgLQgLgKgTAAIgTAAg");
	this.shape.setTransform(281.275,-0.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAcA3IgbgsIgfAAIAAAsIgRAAIAAhtIAzAAQATAAAKAJQALAIAAAPQAAAMgHAIQgHAIgMACIAfAvgAgegCIAhAAQALAAAGgFQAGgGAAgJQAAgJgGgEQgGgFgLAAIghAAg");
	this.shape_1.setTransform(269.8,-0.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAkA3IgMgfIguAAIgMAfIgSAAIArhtIATAAIArBtgAgCggIgDAIIgNAjIAlAAIgNgjIgDgIIgDgJIgCAJg");
	this.shape_2.setTransform(258.225,-0.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZAxQgMgGgHgNQgGgNAAgRQAAgSAGgMQAHgNAMgGQAMgHAQAAQASABAMAGQAMAIAFAOIgQAEQgDgJgJgEQgIgGgLAAQgQAAgKALQgJALAAAUQAAAMAEAKQAFAKAIAFQAIAGALgBQAWAAAKgWIAPAHQgGAOgNAIQgMAHgRABQgQAAgMgIg");
	this.shape_3.setTransform(247.075,-0.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAcA3IgbgsIgfAAIAAAsIgRAAIAAhtIAzAAQATAAALAJQAKAIAAAPQAAAMgHAIQgHAIgMACIAeAvgAgegCIAhAAQALAAAGgFQAGgGAAgJQAAgJgGgEQgGgFgMAAIggAAg");
	this.shape_4.setTransform(235.75,-0.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrA3IAAhtIBUAAIAAAOIhCAAIAAAhIA9AAIAAAMIg9AAIAAAkIBFAAIAAAOg");
	this.shape_5.setTransform(224.625,-0.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgIA3IAAhfIglAAIAAgOIBbAAIAAAOIglAAIAABfg");
	this.shape_6.setTransform(214.125,-0.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AguAcIARgEQADAKAHAEQAIAFAMAAQAOAAAHgFQAHgEAAgJQAAgFgCgDQgDgEgFgCIgJgDIgMgDIgOgDIgJgDIgGgEQgFgEgCgFQgDgFAAgHQAAgOALgIQALgIAUAAQATABAKAFQAKAGAEAOIgRADQgDgIgGgEQgGgDgLAAQgMAAgGADQgHAEAAAIQAAAFADADQADADAEACIATAGIANADIAKADIAHADIAFAEIAFAIQACAFAAAGQAAAPgMAJQgMAIgXABQgngBgHgcg");
	this.shape_7.setTransform(203.925,-0.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAkA3IgMgfIguAAIgMAfIgSAAIArhtIATAAIArBtgAgCggIgDAIIgNAjIAlAAIgNgjIgDgIIgDgJIgCAJg");
	this.shape_8.setTransform(193.125,-0.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAmA3IAAhGIABgLIAAgNIgEAPIgDAJIgaBGIgLAAIgahGIgHgYIAAANIAAALIAABGIgPAAIAAhtIAXAAIAaBHIADAKIABAIIACgGIACgHIABgEIAahIIAXAAIAABtg");
	this.shape_9.setTransform(180.975,-0.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgVA7IAch1IAPAAIgcB1g");
	this.shape_10.setTransform(172.075,-0.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAkA3IgMgfIguAAIgMAfIgSAAIArhtIATAAIArBtgAgCggIgDAIIgNAjIAlAAIgNgjIgDgIIgDgJIgCAJg");
	this.shape_11.setTransform(164.375,-0.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AguAcIARgEQADAKAHAEQAIAFAMAAQAOAAAHgFQAHgEAAgJQAAgFgCgDQgDgEgFgCIgJgDIgMgDIgOgDIgJgDIgGgEQgFgEgCgFQgDgFAAgHQAAgOALgIQALgIAUAAQATABAKAFQAKAGAEAOIgRADQgDgIgGgEQgGgDgLAAQgMAAgGADQgHAEAAAIQAAAFADADQADADAEACIATAGIANADIAKADIAHADIAFAEIAFAIQACAFAAAGQAAAPgMAJQgMAIgXABQgngBgHgcg");
	this.shape_12.setTransform(153.575,-0.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIA3IAAhtIARAAIAABtg");
	this.shape_13.setTransform(146.025,-0.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgIA3IgrhtIASAAIAcBKIADAKIACAKIAEgLIACgJIAchKIASAAIgrBtg");
	this.shape_14.setTransform(138.5,-0.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AguAcIARgEQADAKAHAEQAIAFAMAAQAOAAAHgFQAHgEAAgJQAAgFgCgDQgDgEgFgCIgJgDIgMgDIgOgDIgJgDIgGgEQgFgEgCgFQgDgFAAgHQAAgOALgIQALgIAUAAQATABAKAFQAKAGAEAOIgRADQgDgIgGgEQgGgDgLAAQgMAAgGADQgHAEAAAIQAAAFADADQADADAEACIATAGIANADIAKADIAHADIAFAEIAFAIQACAFAAAGQAAAPgMAJQgMAIgXABQgngBgHgcg");
	this.shape_15.setTransform(123.375,-0.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgIA3IAAhfIglAAIAAgOIBbAAIAAAOIglAAIAABfg");
	this.shape_16.setTransform(113.175,-0.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgYAzQgKgFgGgKQgFgJAAgNIAAhFIARAAIAABDQAAAPAIAHQAHAIANAAQANAAAIgIQAIgIAAgPIAAhCIARAAIAABEQAAANgFAKQgGAJgLAGQgKAFgOAAQgOAAgKgFg");
	this.shape_17.setTransform(102.525,-0.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgcAxQgNgGgGgNQgHgNAAgRQAAgRAHgNQAGgNAMgGQANgHAQAAQARAAAMAHQANAGAGANQAHAMAAASQAAARgHANQgHAMgMAHQgMAIgRAAQgQAAgMgIgAgagfQgKALAAAUQAAAMAEAKQAFAKAIAFQAIAGALgBQASAAAJgLQAKgLAAgUQAAgTgKgMQgJgLgSAAQgRAAgJALg");
	this.shape_18.setTransform(90.525,-0.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgIA3IAAgtIgphAIATAAIAeAyIAfgyIATAAIgqBAIAAAtg");
	this.shape_19.setTransform(79,-0.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAkA3IgMgfIguAAIgMAfIgSAAIArhtIATAAIArBtgAgCggIgDAIIgNAjIAlAAIgNgjIgDgIIgDgJIgCAJg");
	this.shape_20.setTransform(68.175,-0.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgrA3IAAhtIAuAAQATAAALAJQALAJAAAPQAAALgGAIQgEAHgIAEQgKAFgLgBIgeAAIAAAqgAgZAAIAbAAQAMAAAFgFQAHgFAAgKQAAgUgZAAIgaAAg");
	this.shape_21.setTransform(57.65,-0.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AguAcIARgEQADAKAHAEQAIAFAMAAQAOAAAHgFQAHgEAAgJQAAgFgCgDQgDgEgFgCIgJgDIgMgDIgOgDIgJgDIgGgEQgFgEgCgFQgDgFAAgHQAAgOALgIQALgIAUAAQATABAKAFQAKAGAEAOIgRADQgDgIgGgEQgGgDgLAAQgMAAgGADQgHAEAAAIQAAAFADADQADADAEACIATAGIANADIAKADIAHADIAFAEIAFAIQACAFAAAGQAAAPgMAJQgMAIgXABQgngBgHgcg");
	this.shape_22.setTransform(42.275,-0.25);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AguAcIARgEQADAKAHAEQAIAFAMAAQAOAAAHgFQAHgEAAgJQAAgFgCgDQgDgEgFgCIgJgDIgMgDIgOgDIgJgDIgGgEQgFgEgCgFQgDgFAAgHQAAgOALgIQALgIAUAAQATABAKAFQAKAGAEAOIgRADQgDgIgGgEQgGgDgLAAQgMAAgGADQgHAEAAAIQAAAFADADQADADAEACIATAGIANADIAKADIAHADIAFAEIAFAIQACAFAAAGQAAAPgMAJQgMAIgXABQgngBgHgcg");
	this.shape_23.setTransform(31.625,-0.25);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAkA3IgMgfIguAAIgMAfIgSAAIArhtIATAAIArBtgAgCggIgDAIIgNAjIAlAAIgNgjIgDgIIgDgJIgCAJg");
	this.shape_24.setTransform(20.825,-0.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAmA3IAAhGIABgLIAAgNIgEAPIgDAJIgaBGIgLAAIgahGIgHgYIAAANIAAALIAABGIgPAAIAAhtIAXAAIAaBHIADAKIABAIIACgGIACgHIABgEIAahIIAXAAIAABtg");
	this.shape_25.setTransform(8.675,-0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,-13.4,293.5,26.9), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgrA3IAAhtIBUAAIAAAOIhCAAIAAAhIA9AAIAAAMIg9AAIAAAkIBFAAIAAAOg");
	this.shape.setTransform(189.825,-0.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIA3IgshtIATAAIAcBKIADAKIACAKIAEgLIADgJIAbhKIASAAIgrBtg");
	this.shape_1.setTransform(178.9,-0.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAcA3IgbgsIgfAAIAAAsIgRAAIAAhtIAzAAQATAAAKAJQALAIAAAPQAAAMgHAIQgHAIgMACIAfAvgAgegCIAhAAQALAAAGgFQAGgGAAgJQAAgJgGgEQgGgFgLAAIghAAg");
	this.shape_2.setTransform(168.1,-0.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgrA3IAAhtIBUAAIAAAOIhCAAIAAAhIA9AAIAAAMIg9AAIAAAkIBFAAIAAAOg");
	this.shape_3.setTransform(156.975,-0.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AguAcIARgEQADAKAHAEQAIAFAMAAQAOAAAHgFQAHgEAAgJQAAgFgCgDQgDgEgFgCIgJgDIgMgDIgOgDIgJgDIgGgEQgFgEgCgFQgDgFAAgHQAAgOALgIQALgIAUAAQATABAKAFQAKAGAEAOIgRADQgDgIgGgEQgGgDgLAAQgMAAgGADQgHAEAAAIQAAAFADADQADADAEACIATAGIANADIAKADIAHADIAFAEIAFAIQACAFAAAGQAAAPgMAJQgMAIgXABQgngBgHgcg");
	this.shape_4.setTransform(146.025,-0.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrA3IAAhtIBUAAIAAAOIhCAAIAAAhIA9AAIAAAMIg9AAIAAAkIBFAAIAAAOg");
	this.shape_5.setTransform(135.675,-0.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAcA3IgbgsIgfAAIAAAsIgRAAIAAhtIAzAAQATAAALAJQAKAIAAAPQAAAMgHAIQgHAIgMACIAeAvgAgegCIAhAAQALAAAGgFQAGgGAAgJQAAgJgGgEQgGgFgMAAIggAAg");
	this.shape_6.setTransform(124.6,-0.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgaAxQgMgGgHgNQgHgNAAgRQAAgaAPgPQAOgPAaAAQASAAAMAHQAMAGAGAOIgRAFQgEgJgIgFQgIgEgMAAQgRAAgJALQgKALAAAUQAAATAKAMQAKAMARgBQAKAAAJgDQAJgCAGgGIAAgSIgfAAIAAgNIAvAAIAAAmQgJAJgNAEQgNAGgPAAQgRAAgMgIg");
	this.shape_7.setTransform(107.625,-0.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAYA3Ig2haIAAALIABAJIAABGIgQAAIAAhtIAVAAIA3BbIgBgXIAAhEIAQAAIAABtg");
	this.shape_8.setTransform(95.85,-0.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIA3IAAhtIARAAIAABtg");
	this.shape_9.setTransform(87.825,-0.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgkA3IAAhtIARAAIAABfIA4AAIAAAOg");
	this.shape_10.setTransform(81.35,-0.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgkA3IAAhtIARAAIAABfIA4AAIAAAOg");
	this.shape_11.setTransform(72.15,-0.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcAxQgNgGgGgNQgHgNAAgRQAAgRAHgNQAGgNAMgGQANgHAQAAQARAAAMAHQANAGAGANQAHAMAAASQAAARgHANQgHAMgMAHQgMAIgRAAQgQAAgMgIgAgagfQgKALAAAUQAAAMAEAKQAFAKAIAFQAIAGALgBQASAAAJgLQAKgLAAgUQAAgTgKgMQgJgLgSAAQgRAAgJALg");
	this.shape_12.setTransform(60.975,-0.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAcA3IgbgsIgfAAIAAAsIgRAAIAAhtIAzAAQATAAAKAJQALAIAAAPQAAAMgHAIQgHAIgMACIAfAvgAgegCIAhAAQALAAAGgFQAGgGAAgJQAAgJgGgEQgGgFgLAAIghAAg");
	this.shape_13.setTransform(49.3,-0.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAXA3IgRhDIgDgKIgDgNIgBAJIgBAIIgCAGIgSBDIgVAAIgfhtIASAAIATBEIACANIADAMIACgIIACgIIABgIIAThFIARAAIASBCIAEAOIACANIACgJIACgJIACgHIAShEIASAAIgfBtg");
	this.shape_14.setTransform(31.2,-0.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgcAxQgNgGgGgNQgHgNAAgRQAAgRAHgNQAGgNAMgGQANgHAQAAQARAAAMAHQANAGAGANQAHAMAAASQAAARgHANQgHAMgMAHQgMAIgRAAQgQAAgMgIgAgagfQgKALAAAUQAAAMAEAKQAFAKAIAFQAIAGALgBQASAAAJgLQAKgLAAgUQAAgTgKgMQgJgLgSAAQgRAAgJALg");
	this.shape_15.setTransform(17.425,-0.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgkA3IAAhtIASAAIAABfIA3AAIAAAOg");
	this.shape_16.setTransform(6.95,-0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(0,-13.4,197.1,26.9), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgIA3IAAhfIglAAIAAgOIBbAAIAAAOIglAAIAABfg");
	this.shape.setTransform(233.375,-0.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgvA3IAAhtIAmAAQAbAAAPAOQAPAOAAAaQAAARgHAMQgHANgMAGQgMAHgPAAgAgdApIAXAAQAKAAAIgFQAJgFAFgKQAEgJAAgMQAAgTgKgLQgLgKgTAAIgTAAg");
	this.shape_1.setTransform(222.975,-0.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguAcIARgEQADAKAHAEQAIAFAMAAQAOAAAHgFQAHgEAAgJQAAgFgCgDQgDgEgFgCIgJgDIgMgDIgOgDIgJgDIgGgEQgFgEgCgFQgDgFAAgHQAAgOALgIQALgIAUAAQATABAKAFQAKAGAEAOIgRADQgDgIgGgEQgGgDgLAAQgMAAgGADQgHAEAAAIQAAAFADADQADADAEACIATAGIANADIAKADIAHADIAFAEIAFAIQACAFAAAGQAAAPgMAJQgMAIgXABQgngBgHgcg");
	this.shape_2.setTransform(211.625,-0.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYAzQgKgFgGgKQgFgJAAgNIAAhFIARAAIAABDQAAAPAIAHQAHAIANAAQANAAAIgIQAIgIAAgPIAAhCIARAAIAABEQAAANgFAKQgGAJgLAGQgKAFgOAAQgOAAgKgFg");
	this.shape_3.setTransform(200.525,-0.175);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAZA3Ig3haIABALIAAAJIAABGIgQAAIAAhtIAUAAIA3BbIgBgXIAAhEIAQAAIAABtg");
	this.shape_4.setTransform(184.55,-0.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIA3IAAhtIARAAIAABtg");
	this.shape_5.setTransform(176.525,-0.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AguAcIARgEQADAKAHAEQAIAFAMAAQAOAAAHgFQAHgEAAgJQAAgFgCgDQgDgEgFgCIgJgDIgMgDIgOgDIgJgDIgGgEQgFgEgCgFQgDgFAAgHQAAgOALgIQALgIAUAAQATABAKAFQAKAGAEAOIgRADQgDgIgGgEQgGgDgLAAQgMAAgGADQgHAEAAAIQAAAFADADQADADAEACIATAGIANADIAKADIAHADIAFAEIAFAIQACAFAAAGQAAAPgMAJQgMAIgXABQgngBgHgcg");
	this.shape_6.setTransform(164.525,-0.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIA3IAAhfIglAAIAAgOIBbAAIAAAOIglAAIAABfg");
	this.shape_7.setTransform(154.325,-0.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZA3Ig3haIABALIAAAJIAABGIgQAAIAAhtIAUAAIA4BbIgCgXIAAhEIAQAAIAABtg");
	this.shape_8.setTransform(143.7,-0.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgrA3IAAhtIBUAAIAAAOIhCAAIAAAhIA9AAIAAAMIg9AAIAAAkIBFAAIAAAOg");
	this.shape_9.setTransform(132.875,-0.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAmA3IAAhGIABgLIAAgNIgEAPIgDAJIgaBGIgLAAIgahGIgHgYIAAANIAAALIAABGIgPAAIAAhtIAXAAIAaBHIADAKIABAIIACgGIACgHIABgEIAahIIAXAAIAABtg");
	this.shape_10.setTransform(120.575,-0.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgrA3IAAhtIBUAAIAAAOIhCAAIAAAhIA9AAIAAAMIg9AAIAAAkIBFAAIAAAOg");
	this.shape_11.setTransform(108.875,-0.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgkA3IAAhtIARAAIAABfIA4AAIAAAOg");
	this.shape_12.setTransform(99,-0.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIA3IAAhfIglAAIAAgOIBbAAIAAAOIglAAIAABfg");
	this.shape_13.setTransform(89.175,-0.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgIA3IAAhfIglAAIAAgOIBbAAIAAAOIglAAIAABfg");
	this.shape_14.setTransform(79.425,-0.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgrA3IAAhtIBUAAIAAAOIhCAAIAAAhIA9AAIAAAMIg9AAIAAAkIBFAAIAAAOg");
	this.shape_15.setTransform(69.525,-0.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AguAcIARgEQADAKAHAEQAIAFAMAAQAOAAAHgFQAHgEAAgJQAAgFgCgDQgDgEgFgCIgJgDIgMgDIgOgDIgJgDIgGgEQgFgEgCgFQgDgFAAgHQAAgOALgIQALgIAUAAQATABAKAFQAKAGAEAOIgRADQgDgIgGgEQgGgDgLAAQgMAAgGADQgHAEAAAIQAAAFADADQADADAEACIATAGIANADIAKADIAHADIAFAEIAFAIQACAFAAAGQAAAPgMAJQgMAIgXABQgngBgHgcg");
	this.shape_16.setTransform(58.575,-0.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIA3IAAgtIgphAIATAAIAeAyIAfgyIATAAIgpBAIAAAtg");
	this.shape_17.setTransform(43.5,-0.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgkA3IAAhtIASAAIAABfIA3AAIAAAOg");
	this.shape_18.setTransform(33.9,-0.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgIA3IAAhtIARAAIAABtg");
	this.shape_19.setTransform(26.725,-0.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAkA3IgMgfIguAAIgMAfIgSAAIArhtIATAAIArBtgAgCggIgDAIIgNAjIAlAAIgNgjIgDgIIgDgJIgCAJg");
	this.shape_20.setTransform(19.025,-0.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgvA3IAAhtIAmAAQAbAAAPAOQAPAOAAAaQAAARgHAMQgHANgMAGQgMAHgPAAgAgdApIAXAAQAKAAAIgFQAJgFAFgKQAEgJAAgMQAAgTgKgLQgLgKgTAAIgTAAg");
	this.shape_21.setTransform(8.025,-0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,-13.4,244.9,26.9), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAVAvQgGgIgBgSQABgSAGgIQAGgIAOAAQAMAAAHAJQAGAIAAARQAAARgHAJQgGAJgNAAQgMAAgHgJgAAfACQgDAFAAAOQAAANADAGQADAGAHABQAGgBADgGQADgGAAgNQAAgOgDgFQgDgFgGAAQgHAAgDAFgAgpA3IBHhtIANAAIhHBtgAg6AFQgHgIAAgRQAAgRAHgKQAFgIAOAAQAZAAABAjQgBARgGAIQgHAJgMAAQgNAAgGgJgAgwgoQgDAHAAANQAAANADAGQACAFAHAAQAHAAACgFQADgGAAgNQAAgNgDgHQgCgFgHAAQgHAAgCAFg");
	this.shape.setTransform(116.9,-0.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRA3QAAgMACgLQADgLAFgMIAKgWIASgbIg5AAIAAgOIBJAAIAAANIgOAYIgLARQgGANgDAOQgDANAAAPg");
	this.shape_1.setTransform(105.35,-0.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAmA3IAAhGIABgLIAAgNIgEAPIgDAJIgaBGIgLAAIgahGIgHgYIAAANIAAALIAABGIgPAAIAAhtIAXAAIAaBHIADAKIABAIIACgGIACgHIABgEIAahIIAXAAIAABtg");
	this.shape_2.setTransform(89.775,-0.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcAxQgNgGgGgNQgHgNAAgRQAAgRAHgNQAGgNAMgGQANgHAQAAQARAAAMAHQANAGAGANQAHAMAAASQAAARgHANQgHAMgMAHQgMAIgRAAQgQAAgMgIgAgagfQgKALAAAUQAAAMAEAKQAFAKAIAFQAIAGALgBQASAAAJgLQAKgLAAgUQAAgTgKgMQgJgLgSAAQgRAAgJALg");
	this.shape_3.setTransform(76.875,-0.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAcA3IgbgsIgfAAIAAAsIgRAAIAAhtIAzAAQATAAALAJQAKAIAAAPQAAAMgHAIQgHAIgMACIAeAvgAgegCIAhAAQALAAAGgFQAGgGAAgJQAAgJgGgEQgGgFgMAAIggAAg");
	this.shape_4.setTransform(65.2,-0.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnA3IAAhtIBPAAIAAAOIg9AAIAAAmIA7AAIAAAOIg7AAIAAArg");
	this.shape_5.setTransform(54.55,-0.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgrA3IAAhtIBUAAIAAAOIhCAAIAAAhIA9AAIAAAMIg9AAIAAAkIBFAAIAAAOg");
	this.shape_6.setTransform(39.875,-0.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgIA3IAAhfIglAAIAAgOIBbAAIAAAOIglAAIAABfg");
	this.shape_7.setTransform(29.375,-0.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAkA3IgMgfIguAAIgMAfIgSAAIArhtIATAAIArBtgAgCggIgDAIIgNAjIAlAAIgNgjIgDgIIgDgJIgCAJg");
	this.shape_8.setTransform(19.025,-0.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAdA3IgcgsIgfAAIAAAsIgSAAIAAhtIA0AAQATAAAKAJQALAIAAAPQAAAMgHAIQgHAIgMACIAfAvgAgegCIAhAAQALAAAGgFQAGgGAAgJQAAgJgGgEQgGgFgLAAIghAAg");
	this.shape_9.setTransform(8.1,-0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,-13.4,135.2,26.9), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AulgZIgoCmIhFAAIhIkZIA7AAIAnCsQADALADAOQADAOACAOQACgJACgJQACgJABgJQACgJACgIIAoisIBCAAIAnCmQACAIADAQQADAQACATQADgLACgJQACgJACgJQACgJADgMIAkimIA7AAIhIEZIhGAAIgmiiQgEgOgCgPQgDgPgDgQQgBAIgDAMQgCAMgCAKQgDAKAAAEgAnMBfIAAAuIjmAAIAAkZIDeAAIAAAuIijAAIAABHICWAAIAAAsIiWAAIAABKgAhDAAQAAgugWgZQgVgagnAAQgoAAgVAaQgWAZAAAuQAAAeAKAWQAKAWATANQASAMAaAAQAnAAAWgbQAVgZAAgvgAgHAAQAAArgRAhQgSAhggASQggASgrAAQgsAAgggSQgggSgRggQgRghAAgsQAAgtARggQAQggAhgRQAggSAsAAQAtAAAgASQAfARARAgQARAgAAAtgAFxCNIg7AAIAAkZIDPAAIAAAuIiUAAIAABXICQAAIAAAsIiQAAgABrAlIAABoIg7AAIAAkZIDQAAIAAAuIiVAAIAABXICQAAIAAAsgAMhBfIAAAuIjlAAIAAkZIDdAAIAAAuIiiAAIAABHICWAAIAAAsIiWAAIAABKgAQSg1QAAgUgMgLQgOgKgaAAIhLAAIAABTIBNAAQAZAAANgLQAMgLAAgUgAOTAiIAABrIg7AAIAAkZICMAAQAzAAAbAWQAbAWAAAoQAAAegQAVQgRAVgdAHIBMB2IhCAAIhBhrg");
	this.shape.setTransform(111.525,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#242346").s().p("AjhB/QgggSgRggQgRghAAgsQAAgtARggQAQggAhgRQAggSAsAAQAtAAAgASQAfARARAgQARAgAAAtQAAArgRAhQgSAhggASQggASgrAAQgsAAgggSgAjShHQgWAZAAAuQAAAeAKAWQAKAWATANQASAMAaAAQAnAAAWgbQAVgZAAgvQAAgugWgZQgVgagnAAQgoAAgVAagAQZCNIhBhrIhFAAIAABrIg7AAIAAkZICMAAQAzAAAbAWQAbAWAAAoQAAAegQAVQgRAVgdAHIBMB2gAOTgLIBNAAQAZAAANgLQAMgLAAgUQAAgUgMgLQgOgKgaAAIhLAAgAI8CNIAAkZIDdAAIAAAuIiiAAIAABHICWAAIAAAsIiWAAIAABKICqAAIAAAugAE2CNIAAkZIDPAAIAAAuIiUAAIAABXICQAAIAAAsIiQAAIAABogAAwCNIAAkZIDQAAIAAAuIiVAAIAABXICQAAIAAAsIiQAAIAABogAqyCNIAAkZIDeAAIAAAuIijAAIAABHICWAAIAAAsIiWAAIAABKICrAAIAAAugAtoCNIgmiiIgGgdIgGgfIgEAUIgEAWIgDAOIgoCmIhFAAIhIkZIA7AAIAnCsIAGAZIAFAcIAEgSIADgSIAEgRIAoisIBCAAIAnCmQACAIADAQIAFAjIAFgUIAEgSIAFgVIAkimIA7AAIhIEZg");
	this.shape_1.setTransform(111.525,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(-1,-15.4,225.1,30.9), null);


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
	this.shape.graphics.rf(["rgba(255,255,255,0)","#D7E513"],[0,1],61.3,-44.7,0,61.3,-44.7,168.1).s().p("AInLkIgDAAIgDAAIgEAAIgDAAIgDAAIgEAAIgCAAIgEAAIgEAAIgCAAIgEAAIgDAAIgDAAIgEAAIgDAAIgCgBIgBgDIgEAAIgDAAIgEAAIAAgDIgDAAIgDAAIgDAAIAAgDIgDAAIgEAAIAAgEIgDAAIgDAAIAAgDIgDAAIgDAAIgBgDIgDAAIgDgBIgBgDIgCAAIgBgCIgCgBIgBgDIgEAAIAAgEIgDAAIgDAAIgBADIgDABIgCAAIgEAAIgBADIgDABIgCAAIgEAAIgDAAIgDAAIgEAAIgDAAIgDAAIgEAAIgDAAIgEAAIgDAAIgDAAIgDAAIgEAAIgDAAIgDAAIgDgBIAAgDIgDAAIgEAAIgDAAIgDgBIgBgDIgDAAIgDAAIAAgCIgEAAIgDAAIgCgBIgBgDIgEAAIgCgBIgBgCIgCgBIgBgCIgEAAIgCgCIAAgCIgDgBIgBgCIgEAAIgBgBIgBgDIgDAAIgBgDIgCgBIgBgCIgCgBIgBgDIgDAAIgBgCIgCgBIgBgDIgCAAIgCgDIAAgDIgCgBIgBgDIgCgBIgBgCIAAgDIgEAAIAAgEIgCgBIgBgCIAAgDIgCgBIgBgDIAAgDIkUAAIqRAAIgEAAIgDAAIgDAAIgDAAIgBgDIgDAAIAAgEIgDAAIAAgDIgEAAIAAgDIgCgBIAAgDIAAgCIAAgEIAAgDIAAgDIAAp2IgEAAIgDgBIAAgDIgCgBIgBgCIgDAAIgBgDIgDgBIAAgDIgCAAIgBgCIgDgBIgBgDIAAgDIgDAAIAAgDIgCgBIgBgDIgDgBIgBgCIAAgDQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAgBIgBgCIgCgBIgBgCIAAgEIAAgDIgEAAIAAgDIAAgEIgDAAIAAgDIAAgDIAAgDIgDAAIAAgDIAAgEIAAgDIgDgBIgBgCIAAgEIAAgDIAAgDIAAgEIAAgDIAAgDIAAgEIAAgDIAAgDIAAgEIAAgCIAAgEIAAgEIAAgCIAAgEIAAgDIAAgDIAEAAIAAgEIAAgDIAAgEIADAAIAAgDIAAgDIAAgEIADAAIAAgCIAAgEIAAgEIAEAAIAAgCIADAAIAAgEIAAgDIADAAIAAgDIAAgEIAEAAIAAgDIADAAIAAgDIADAAIAAgEIAAgDIAEAAIAAgDIADAAIAAgEIADAAIAAgDIAEAAIAAgDIADAAIADAAIAAgEIAEAAIAAgDIACAAIAAgDIAEAAIADAAIAAgEIADAAIAAgCIAEAAIADAAIAAgEIADAAIAEAAIADAAIAAgDIAEAAIADAAIAAgDIADAAIAEAAIACAAIAEAAIAAgEIADAAIAAgDIADAAIAAgEIAAgDIAAgDIAAgEIAEAAIAAgDIAAgDIADAAIAAgEIAAgCIAAgEIADAAIAAgDIAAgDIAEAAIAAgEIADAAIAAgDIAAgDIADAAIAAgEIAEAAIAAgDIAAgDIADAAIAAgEIADAAIAAgDIAEAAIAAgDIADAAIAAgEIADAAIAAgDIAEAAIAAgDIADAAIADAAIAAgEIADAAIAAgCIADAAIAEAAIAAgEIADAAIAAgDIADAAIAEAAIAAgDIADAAIAEAAIADAAIAAgEIADAAIAEAAIAAgDIACAAIAEAAIAEAAIACAAIAAgEIAEAAIADAAIADAAIAEAAIADAAIADAAIAEAAIADAAIADAAIAEAAIADAAIADAAIAEAAIADAAIADAAIAEAAIACAAQABAAAAABQABAAAAAAQAAAAABAAQAAAAAAABIABACIADAAIADAAIAEAAIAAADIADAAIAEAAIACABIABADIADAAIAEAAIAAADIACAAIAEAAIAAADIAEAAIACABIAAADIAEAAIADAAIAAACIACABIABADIAEAAIAAADIADAAIACABIABACIADABIABADIACABIABACIACABIABACIADABIABADIAAADIADAAIAAADIACABIABADIADABIABACIADAAIADAAIAAgDIADAAIADAAIAEAAIAAgEIADAAIADAAIAEAAIADAAIAEAAIADAAIADAAIAKAAIAEAAIACAAIAEAAIAEAAIACAAIAEAAIADAAIACABIABADIAEAAIADAAIADAAIAAADIAEAAIADAAIAEAAIAAADIADAAIADAAIADABIAAADIADAAIAAADIAEAAIADAAIAAADIADAAIADABIAAADIADAAIABACIADAAIADABIABADIACABIABACIACABIABACIADABIABADIACABIABACIACABIABACIAAAEIAEAAIAAADIACABIAAADIADAAIABADIAAADIADABIABADIAAACIACAAIAAAEIAAADIAEAAIAAADIAAAEIADAAIAAADIAAADIAAAEIADAAIAAADIAAADIAAAEIADABIABACIKQAAIDXAAIADAAIADAAIAEAAIACABIABACIADAAIAAAEIADAAIAAADIADAAIAAADIADABIABADIAAACIAAAEIAAAEIAAKCIAAAEIADAAIAAACIADAAIADABIABADIACABIABADIACAAIABACIAEAAIAAAEIADAAIAAADIADAAIAAADQABAAAAABQAAAAABAAQAAAAAAAAQAAAAABABIABACIACABIABACIACABIABADIAAADIADAAIABADIAAAEIACAAIAAACIAAAEIAEAAIAAADIAAADIADABIAAADIAAADIAAADIAAAEIADAAIAAADIAAADIAAAEIAAADIAAADIAAAEIAAADIAAADIAAAEIAAADIAAADIAAADIAAADIAAAEIgDAAIAAADIAAADIAAAEIAAACIgDABIAAAEIAAADIgEAAIAAADIAAAEIgCAAIAAADIgBACIgDABIAAAEIgBACIgCAAIgBADIgCABIgBADIgDAAIAAADIgDAAIAAAEIgDAAIAAADIgEAAIgBACIgCABIgBADIgCABIgBACIgDABIgDAAIAAACIgDABIgBADIgDABIgDAAIAAACIgDABIgDAAIgDAAIgBACIgDABIgDAAIgDAAQAAAAgBABQAAAAAAABQAAAAAAAAQAAAAgBABIgCABIgDAAIgEAAIAAADIgDAAIAAADIAAAEIgDAAIAAACIgBADIgDABIAAADIgBADIgCAAIAAADIgDABIAAADIgEAAIAAAEIAAACIgCABIgBACIgDABIgBADIgCABIgBACIgCAAIgBADIgDABIgDAAIAAAEIgDAAIgBACIgDAAIgBADIgCABIgDAAIgBADIgDAAIgDAAIAAADIgDAAIgBADIgDABIgDAAIgDAAIgBADIgDAAIgDAAIgDAAIAAADIgDAAIgDAAIgEAAIgBADIgCABIgEAAgAG0KHIADAAIADAAIAEAAIADAAIADAAIAEAAIACABIABADIAEAAIACABIABACIACAAIABADIADABIAAADIADAAIABADIACAAIABADIADABIAAADIADAAIAAACIADAAIADABIABADIADAAIADABIABACIADAAIADAAIADABIABACIADAAIADAAIAEAAIACAAIAEAAIAGAAIAEAAIADAAIADAAIAEAAIADAAIADAAIAAgDIAEAAIADAAIAAgDIAEAAIADAAIAAgEIADAAIADAAIAAgCIADAAIAAgEIAEAAIADAAIAAgDIADAAIAAgDIAAgEIAEAAIAAgDIADAAIAAgDIADAAIAAgEIAAgDIAEAAIAAgDIAAgEIADAAIAAgDIAAgDIAAgEIADAAIAAgDIAAgDIAEAAIAAgEIAAgCIADAAIAAgEIADAAIAEAAIAAgDIADAAIADAAIAEAAIAAgDIACAAIADAAIABADIADAAIAAgDIADAAIAEAAIADAAIADAAIAAgEIAEAAIADAAIAEAAIAAgDIADAAIAAgDIADAAIAAgEIAEAAIAAgDIADAAIAAgEIADAAIAAgDIADAAIAAgDIAAgEIAAgDIADAAIAAgDIAAgDIAAgDIAAgEIAAgDIAAgDIAAgEIAAgDIAAgDIAAgEIgCgBIgBgCIAAgDIgDgBIAAgDIAAgDIgDAAIAAgDIgDgBIAAgDIgDAAIgBgDIgDAAIAAgDIgDAAIgDgBIgBgDIgDAAIgCAAIgCgCIgDAAIgDAAIgEAAIgDAAIgDAAIgEAAIgCAAIgEAAIgDAAIgDAAIgBACIgDAAIgDAAIgDAAIgEAAIgDAAIgDAAIgDAAIgBgCIgDAAIgCgBIgBgDIgDgBIgBgCIgCgBIgBgCIAAgEIgDgBIAAgCIAAgEIAAgDIAAgDIgEAAIAAgEIAAgCIgCgBIgBgDIAAgEIgCAAIgBgCIAAgEIgCgBIgBgCIgDgBIAAgCIAAgEIgEAAIAAgDIgDAAIAAgDIgEAAIgCgBIgBgDIgCgBIgBgCIgEAAIgCgBQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIgDAAIgDgBIgBgDIgCAAIgDgBIgBgCIgEAAIgCAAIgEAAIgDAAIgDAAIgDAAIgBgDIgDAAIgDAAIAAADIgEAAIgDAAIgEAAIgDAAIgDAAIgDAAIAAADIgDAAIgEAAIAAADIgDABIgDAAIgBACIgCABIgEAAIgBACIgCABIgBADIgDABIgDAAIAAADIgDAAIAAADIgEAAIAAAEIgBACIgCABIAAACIgDABIAAAEIgBACIgDAAIAAAEIAAADIgCABIAAACIAAAEIgBACIgDABIAAADIAAAEIgEAAIAAADIAAACIgCACIgBACIgDABIgDAAIAAADIgDAAIgEAAIgDAAIAAAEIgDAAIgEAAIAAgEIgDAAIAAAEIgEAAIgDAAIgDAAIgDAAIgEAAIAAACIgDAAIgDAAIgDAAIgBADIgCABIgEAAIgBADIgCAAIgEAAIgBADIgCAAIgBADIgCABIgBADIgDAAIgBACIgCABIAAADIgDABIgBACIgDABIAAADIgDAAIAAAEIAAACIgDABIAAADIgBADIgDABIAAADIAAADIAAADIgCABIAAADIAAADIAAADIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAEIAAADIAAADIACABIAAADIAAADIAAADIADABIABADIAAACIADABIAAADIAAADIADAAIAAADIADABIABADIADABIAAACQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAIABACIADABIABADIACABIABACIACABIABACIAEAAIACABIABADIAEAAIACABIABACIADAAIADAAIADAAIAAADIAEAAIADAAIADAAIADAAIAEAAIADAAIAEAAIADAAIADAAIAEAAIADAAIADAAIAAgDIAEAAIACAAIAEAAIAAgDIAEAAIACAAIAAgEIAEAAgAp5JCIAAADQFJABFHABQB9ABB0gGIAAgEIAAgDIAAgDIAAgDIAAgDIAAgEIAAgDIAAgDIAEAAIAAgEIAAgDIAAgDIAAgEIADAAIAAgDIAAgDIADAAIAAgEIgDAAIhaAAIqQAAIgCAAIgEAAIgDAAIgDgBIAAgCIgEAAIAAgDIgDAAIAAgEIgDAAIAAgDIgDAAIgBgDIAAgEIAAgCIAAgEIgCgBIgBgCIAAgDIAAgEIAAgDIAAgEIgCgBIgBgCIAAgDIgDgBIgBgDIAAgCIgCgBIgBgDIgCgBIgBgDIgDAAIgBgCIgCgBIgBgDIgDAAIAAgDIgEAAIgCAAIgDgBIgBgCIgEAAIgCAAIgEAAIgDAAIAAgEIgDAAIgEAAIgDAAIgEAAIgCgBIgBgCIgDAAIAAgDIgEAAIAAgEIgDAAIAAgDIgCgBIgBgCIAAgEIAAgDIAAgDIAAgEIAAmjIgDAAIgDAAIgEAAIgDAAIgDAAIgEAAIgDAAIgKAAIgDAAIgEAAIgDAAIgDAAIgEAAIgDAAIAAJCgAoPGNIAAADIADAAIADAAIADABIABACIADAAIADAAIADABIABADIADAAIACAAIABACIADABIABADIADAAIACAAIABADIADABIABACIACABIABADIADAAIAAADIAEAAIAAADIACAAIAAAEIADABIABACIACABIABACIADABIAAADIAAADIADAAIABADIACABIABADIAAADIACAAIACADIAAAEIAAACIACABIABADIAAAEIAAACIKQAAIBwAAIAAgCIAEAAIAAgEIACAAIAEAAIAAgEIADAAIAAgCIADAAIAEAAIAAgEIADAAIADAAIAEAAIAAgDIADAAIADAAIAAgDIAEAAIADAAIAEAAIADAAIAAgEIADAAIADAAIADAAIAEAAIAAgDIADAAIAAgDIAAgEIADAAIAAgDIAAgDIADAAIAAgEIAAgDIAEAAIAAgDIADAAIAAgEIAEAAIAAgDIAAgDIADAAIAAgEIADAAIAAgCIAEAAIAAgEIADAAIAAgDIADAAIAEAAIAAgDIACAAIAAgEIAEAAIAAgDIAEAAIACAAIAAgEIAEAAIADAAIAAgDIADAAIAAgDIAEAAIADAAIADAAIAAgEIAEAAIADAAIAEAAIAAgDIADAAIADAAIADAAIAAgDIAEAAIADAAIADAAIADAAIADAAIAEAAIADAAIAEAAIADAAIADAAIAEAAIADAAIADAAIAEAAIACAAIAEAAIAEAAIAAgEIAAlXIgEAAIgEAAIgCAAIAAgDIgEAAIgDAAIgCgBIgBgDIgEAAIgDAAIAAgDIgCAAIgBgDIgEAAIgCAAIgBgDIgCgBIgCgCIgCgBIgBgDIgDAAIAAgCIgDAAIAAgDIgDAAIAAgEIgDgBIgBgCIgDgBIAAgCIgDgBIAAgDIAAgDIgDAAIAAgDIgDgBIgBgDIAAgDIgCAAIgBgDIAAgEIAAgCIgDgBIgBgDIAAgDIAAgDIhwAAIqQAAIAAACIgDABIAAADIAAAEIAAACIgEAAIAAAEIAAADIgBACIgBABIAAAEIAAADIgBACIgDABIAAAEIgEAAIAAADIAAACIgCABIAAAEIgBACIgDABIgBACIgCAAIAAAEIgDAAIAAADIgBADIgDAAIgBADIgCAAIgBADIgCAAQAAABgBAAQAAABAAAAQAAAAAAABQAAAAgBAAIgCABIgBADIgCAAIgEAAIAAADIgDAAIgBADIgCABIgBACIgDABIgDAAIAAACQgBABAAAAQAAAAAAAAQgBAAAAAAQgBABAAAAIgDAAIAAADIgDAAIgBACIgDABIgDAAIgDAAIgBADIgDABIgDAAIgDAAIAAACIgEAAIgDAAIgDAAIgBADIgDABIgDAAIgDAAIgEAAIgCAAIgEAAIgEAAIgCAAIgEAAIgDAAIgDAAIgEAAIgDAAIgEAAIgDAAIgDAAIgEAAIgCgBIAAgDIgEAAIgDAAIgDAAIAAgCIgEAAIgDAAIgCgBIgBgDIgEAAIgDAAIAAgDIgDAAIgEAAIAAgDIgDAAIgCgCIgBgCIgEAAIgCgBIgBgCIgDAAIAAFvgAjih2IgBADIgDABIAAADIgBACIgDABIAAAEIKQAAIA2AAIADAAIADAAIADAAIADABIAAACIAEAAIAAADIADAAIAAAEIAEAAIAAADIACAAIABADIAAADIAAADIAAAEIAAADIADAAIAAADIAAAEIAAADIAAAEIADABIABACIAAADIAAAEIADAAIAAADIACAAIABADIADABIABADIACAAIAAACIADABIABADIAEAAIACABIAAACIAEAAIADABIAAACIADAAIAEAAIADAAIADAAIADABIABADIADAAIAEAAIADAAIACABIABACIADAAIAAADIADAAIAAAEIAEAAIAAADIADABIAAACIAAAEIAAADIAAACIAAGJIAAAEIADAAIADAAIABADIACABIABACIACABIABADIADAAIABACIACABIABADIACAAIABADIADABIABACIAAAEIACABIABACIACABIABACIAAAEIADABIABACIACABIABACIAAAEIACABIABACIAAADIAEAAIACAAIAEAAIAAgDIAApbIi8AAIqQAAIgBACIgDABIAAAEIAAACIAAAEIgDAAIAAAEIAAACIAAADIgDABIAAADIAAADIgBADIgDABIAAADIgCAAIAAADgAophIIADAAIADAAIAEAAIACAAQABAAAAABQABAAAAAAQAAAAABAAQAAAAAAABIABACIAEAAIACABIAAACIADABIABADIADABIAAACIAAADIADAAIAAAEIAAADIADAAIABADIAAAEIADAAIAAACIAAAEIACABIABACIADABIABACIACABQAAABAAAAQABAAAAAAQAAABAAAAQAAAAAAABIACABIABACIADABIABACIACABIABADIACABIABACIAEAAIACABIABACIADAAIADABIABADIACAAIAEAAIAAADIADAAIADAAIAEAAIADAAIAEAAIADAAIAAACIADAAIAEAAIAAgCIACAAIAEAAIAEAAIACAAIAEAAIADAAIAAgDIADAAIAEAAIAAgEIADAAIADAAIAAgDIAEAAIADAAIAAgDIADAAIAAgEIAEAAIADAAIAAgDIADAAIAAgDIAEAAIAAgEIAAgDIADAAIAAgDIADAAIAAgEIAAgCIADAAIAAgEIAAgDIADAAIAAgDIAAgEIAEAAIAAgDIAAgDIAAgEIAAgDIAAgEIAAgDIADAAIAAgDIAAgEIAAgDIAAgDIAAgDIADAAIAAgDIAAgEIAEAAIAAgDIADAAIAEAAIAAgDIADAAIADAAIAEAAIADAAIAAgEIADAAIAEAAIACAAIAEAAIAEAAIACAAIAEAAIAAgDIADAAIADAAIAAgDIAEAAIADAAIAAgEIADAAIAEAAIAAgDIADAAIAAgDIAEAAIADAAIAAgEIADAAIAAgDIADAAIAAgDIAAgEIADAAIAAgCIAEAAIAAgEIAAgEIADAAIAAgCIAAgEIADAAIAAgDIAAgDIADAAIAAgEIAAgDIAAgEIAAgDIAAgDIAAgEIAAgCIAAgEIAAgEIAAgCIAAgEIAAgDIAAgDIAAgEIgDAAIAAgDIAAgDIgCgBIgBgDIAAgDIgDgBIAAgCIAAgEIgDgBIgBgCIgCAAIgBgDIAAgEIgDAAIAAgDIgDAAIAAgDIgDAAIgDgBIgBgDIgCAAIgBgCIgEAAIgCgBIgBgDIgDAAIgDgBIgBgCIgDAAIgDAAIAAgDIgEAAIgCAAIgEAAIgEAAIgCAAIgEAAIgDAAIAAgEIgDAAIAAAEIgEAAIgDAAIgDAAIgEAAIgDAAIgEAAIAAADIgDAAIgDAAIgBACIgDABIgDAAIAAADIgDABIgDAAIgBACIgCAAIgEAAIgBADIgCABIgDAAIgEAAIgDAAIgDAAIgDgBIgBgDIgDAAIgCAAIgBgCIgDgBIgBgDIgCgBIgBgCIAAgDIgCgCIgBgCIAAgDIgDgBIgBgDIAAgDIgCAAIAAgDIAAgEIgDAAIgBgDIgDAAIgBgDIgCgBIAAgDIAAgCIgEAAIgDgBIAAgDIgCgBIgBgCIgDgBIgBgCIgDAAIgCgBQgBgBAAAAQAAAAAAAAQAAgBAAAAQgBAAAAgBIgDAAIgCgBIgBgCIgEAAIgCAAIAAgDIgEAAIgDAAIgDAAIgEAAIgDAAIgDAAIAAgEIgEAAIgDAAIgBADIgCABIgEAAIgDAAIgDAAIgEAAIgDAAIAAACIgDABIgEAAIAAACIgCABIgEAAIgBADIgDABIgCAAIgBACIgDABIgBACIgCABIgDAAIAAAEIgEAAIAAACIgDAAIAAAEIgBADIgDAAIgBADIgCAAIAAAEIAAADIgDAAIAAADIgBADIgDABIAAADIAAACIgDACIAAADIAAADIAAAEIAAACIAAAEIAAADIgDAAIAAADIAAAEIAAADIAAADIgBADIgCABIAAADIgDAAIAAADIgEAAIAAAEIgDAAIgBACIgCABIgEAAIgDAAIgDAAIgBACIgDABIgDAAIgDAAIgEAAIgDAAIgDAAIgEAAIAAAEIgDAAIgDAAIgBACIgDABIgCAAIgBACIgDABIgDAAIgBADIgCABIgCACIgCAAIgDAAIAAAEIgEAAIAAAEIgDAAIAAACIgBADIgCABIgBACIgDABIAAADIAAADIgDABIAAADIAAACIgDACIAAADIAAADIgEAAIAAAEIAAACIAAAEIAAAEIAAACIAAAEIAAADIAAADIAAAEIAAADIAAADIAAAEIAAADIAAADIAEAAIAAAEIAAADIADAAIAAADIAAAEIADABIAAACIAAADIADABIABACIACABIABACIAAAEIADAAIAAADIAEAAIAAADIADAAQABAAAAABQAAAAABAAQAAAAAAAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAQABAAAAABIACABIABACIADAAIADABIABADIACAAIADABIABACIADAAIADAAIAAADIAEAAIADAAIADAAIAEAAIADAAIADAAIAEAAIAAAEIADAAIAAgEIADAAIAEAAIADAAIADAAIAEAAIADAAIAAgDIADAAIADAAIAAgDIADAAIAEAAIAAgEIADAAIADAAIAAgDIAEAAIADAAIAAgEIAEAAgAAHGnIgDAAIgEAAIgCAAIgEAAIgDAAIgCgBIgBgDIgEAAIAAgDIgDAAIAAgDIgDAAIAAgEIgDAAIgBgCIAAgEIAAgDIAAgDIAAgEIgCAAIgEAAIgDgBIAAgCIgDAAIgEAAIgDgBIAAgDIgDAAIgDgBIgBgCIgCAAIgBgDIgDAAIgDgBIgBgDIgCAAIgBgDIgDAAIAAgDIgEAAIAAgEIgDAAIAAgCIgDAAIAAgEIgEAAIAAgDIgCgBIAAgCIgDgBIgBgDIAAgDIgDAAIAAgDIgDgBIAAgDIAAgDIgDgBIgBgCIAAgEIAAgDIgCgBIgBgCIAAgEIAAgDIgCAAIgCgDIAAgDIAAgEIAAgDIAAgDIAAgDIAAgEIAAgDIAAgEIAAgDIAAgDIAAgEIAEAAIAAgDIAAgDIADAAIAAgEIAEAAIADAAIAAgCIADAAIAEAAIACAAIAEAAIADAAIADAAIAEAAIACAAIABACIADAAIAAAEIAEAAIAAADIADAAIAAADIACABIABADIAAADIAAADIAAAEIADABIABACIAAAEIAAADIAAADIAAADIACABIABADIAAADIACAAIABADIAAADIADABIABADIACABIABACIACABIABACIADABIABADIACAAIADABIABACIADAAIADABIAAACIAEAAIADAAIADAAIAEAAIACAAIAEAAIADAAIADAAIAEAAIACAAIAAgDIAEAAIADAAIAAgDIADAAIAEAAIAAgEIADAAIAAgDIADAAIAAgDIAEAAIAAgEIADAAIAAgDIAAgDIADAAIAAgDIAAgEIAEAAIAAgDIAAgDIAAgDIAAgEIAAgDIAAgEIAAgDIAAgDIAAgEIAAgDIgDAAIgBgDIAAgEIgCAAIgBgCIAAgEIgCgBIgBgDIgDAAIgBgCIgCgBIgBgDIgCgBIgBgCIgEAAIgCgBIgBgCIgDAAIgDgBIgBgDIgCAAIgEAAIgDAAIgDAAIgDgBIgBgCIgCAAIgEAAIgDAAIgDAAIgEAAIgDAAIgDAAIgDgBIgBgCIgCAAIgEAAIgDgBIAAgDIgDAAIgEAAIgDgBIAAgCIgDAAIgDgBIgBgDIgDAAIAAgDIgDAAIgDAAIgBgDIgCAAIgBgDIgDAAIAAgEIgEAAIAAgDIgDAAIgDAAIAAgDIAAgDIgEAAIAAgDIgCgCIAAgCIgDgBIgBgCIAAgEIgDAAIAAgDIgDgBIAAgCIAAgEIgDgBIgBgCIAAgDIAAgEIgCAAIgBgCIAAgEIAAgEIgCAAIgCgCIAAgEIAAgDIAAgDIAAgEIAAgDIAAgDIAAgEIAAgDIAAgEIAAgDIAAgDIAAgDIAAgDIAAgEIAAgDIAEAAIAAgDIAAgDIAAgEIADAAIAAgDIAAgEIAAgDIAEAAIAAgDIAAgEIADAAIAAgDIADAAIAAgDIAAgEIAEAAIAAgDIACAAIAAgDIAEAAIAAgEIADAAIAAgCIADAAIAAgEIAEAAIAAgEIADAAIAAgCIADAAIAAgEIAEAAIADAAIAAgDIADAAIAAgDIAEAAIADAAIAAgEIADAAIAEAAIADAAIAAgDIADAAIAEAAIACAAIAAgEIAAgDIAAgDIAAgEIAAgDIAEAAIAAgDIAAgDIADAAIAAgDIADAAIAEAAIAAgEIADAAIADAAIAEAAIACAAIAEAAIADAAIADAAIADABIABADIACAAIAAADIAEAAIAAADIADAAIAAADIACABIABACIAAAEIAAADIAAADIAAAEIAEAAIADAAIACABIABACIAEAAIADAAIACABIABADIAEAAIACABQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAABIADAAIAAADIAEAAIACABIABADIACABIABABIAEAAIAAAEIACAAIADABIABADIAAACIAEAAIAAAEIACAAIAAADIADABIABACIACABIABADIAAADIADAAIAAADIADABIABADIAAADIACABIABACIAAAEIAAADIACABQABAAAAAAQAAABAAAAQAAAAAAABQABAAAAABIAAADIAAADIACAAIABADIAAAEIAAADIAAADIAAADIAAADIAAAEIAAADIAAAEIAAADIAAADIgBADIgCABIAAADIgEAAIAAADIgDAAIAAAEIgEAAIgBACIgCAAIgDAAIgEAAIgCAAIgEAAIgEAAIgCAAIgDAAIgBgCIgDAAIAAgEIgDAAIAAgDIgEAAIAAgDIgCgBIgBgDIAAgDIAAgDIAAgEIgCgBIgBgCIAAgEIAAgDIAAgDIAAgDIgDgBIgBgCIAAgEIgCAAIgBgDIAAgDIgCgBIgBgCIgDgCIgBgCIgCgBIgBgCIgCgBIgBgDIgEAAIgCgBIgBgCIgDAAIgDgBIgBgCIgCAAIgEAAIgDAAIgDAAIgEAAIAAgEIgCAAIAAAEIgEAAIgDAAIgDAAIgEAAIAAACIgDABIgDAAIgEAAIAAADIgCAAIgBADIgDABIgBACIgCABIgBACIgCACIgBACIgDABIAAADIgDAAIAAADIAAAEIgBACIgCABIAAADIAAADIAAADIAAAEIAAADIAAAEIAAADIAAADIAAAEIAAADIACAAIABADIAAAEIACAAIABACIAAAEIADABIABADIACAAIABACIACABIABADIADABIABACIACAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIABACIADAAIADABIAAADIAEAAIADAAIADAAIAEAAIACABIAAACIAEAAIADAAIADAAIAEAAIACAAIAEAAIADAAIACABIABACIAEAAIADAAIACABIABADIAEAAIADAAIACABIABACIAEAAIACABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIADAAIAAADIAEAAIACABIABACIACAAIABADIAEAAIAAADIACAAIAAAEIAEAAIAAADIAEAAIAAADIACAAIAAADQABAAAAABQABAAAAAAQAAAAABAAQAAAAAAABIABACIACABIABACIAAAEIADAAIAAADIADAAIABADIAAAEIACABIABACIAAADIAAAEIACABIACABIAAAEIAAAEIACAAIABACIAAAEIAAADIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAEIAAADIAAADIAAADIAAAEIAAADIgBADIgCAAIAAADIAAAEIgCACIgCABIAAADIAAAEIgBACIgCABIAAADIgBADIgDABIAAADIgDAAIAAADIgBADIgCABIgBACIgDABIAAADIgCAAIAAAEIgEAAIAAACIgEAAIAAAEIgCAAIAAADIgEAAIgBADIgCAAIgBADIgCABIgEAAIAAADIgDAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAIgCABIgEAAIgBADIgCABIgDAAIgEAAIgBACIgCABIgDAAIgEAAIAAAEIAAADIAAADIAAAEIgBACIgCAAIAAAEIgDAAIAAADIgEAAIAAADIgCAAIgBADIgDABIgDAAgAD+k8IgDAAIgDAAIgEAAIgDAAIgDAAIgEAAIgDAAIgDAAIgEAAIgCAAIgEAAIgDgBIAAgCIgDAAIgEAAIgDgBIAAgCIgDAAIgDgBIgBgDIgDAAIAAgDIgEAAIgCAAIgBgDIgCgBIgBgDIgDgBIgBgCIgCAAIgBgDIgCgBIgBgDIgDAAIAAgCIAAgEIgDAAIAAgDIgDgBIgBgCIAAgEIgDgBIAAgCIAAgEIAAgDIgCgBIgBgCIAAgEIAAgDIAAgDIAAgEIAAgCIAAgEIAAgDIAAgDIAAgEIAAgDIAAgDIAAgEIAAgDIADAAIAAgDIAAgEIAAgDIADAAIAAgEIAAgDIAEAAIAAgDIADAAIAAgDIAAgEIADAAIAAgDIADAAIAAgDIADAAIAAgDIAEAAIAAgDIADAAIAAgEIADAAIAEAAIAAgDIADAAIAAgEIAEAAIADAAIAAgDIADAAIAEAAIADAAIAAgDIADAAIAEAAIACAAIAEAAIADAAIADAAIAEAAIADAAIADAAIAEAAIADAAIADAAIAEAAIACABIABACIADAAIAEAAIACABIABACIADAAIADABIAAADIADAAIAAADIAEAAIACABIABADIADAAIAAADIADABIABACIACABIABACIACABIACACIACABIABADIAAADIADAAIAAADIADABIABACIAAAEIACABIAAACIAAAEIAAADQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAIABACIAAAEIAAADIAAADIAAAEIAAADIAAADIAAAEIAAACIAAAEIAAADIAAADIAAAEIgBACIgDABIAAADIAAAEIAAACIgCABIAAAEIgBACIgDABIAAADIgDAAIAAAEIgBACIgCAAIgCADIgCABIgBADIgCAAIgBACIgDABIAAADIgDABIgBADIgCAAIgEAAIAAADIgDAAIAAADIgDABIgDAAIgBACIgCABIgEAAIgDAAIgBACIgCABIgEAAgADXmVIAAAEIAAADIAAADIAAAEIAAACIAAAEIAAADIADAAIAAADIADABIABADIACAAIAAADIAEAAIADAAIADAAIAEAAIADAAIADAAIAEAAIADAAIAAgDIADAAIAAgEIAEAAIAAgDIADAAIAAgDIAAgEIAAgCIAAgEIAAgDIAAgDIAAgEIAAgDIgDAAIAAgDIgDgBIgBgDIgDAAIAAgDIgDAAIgEAAIgDAAIgDAAIgEAAIgDAAIgDAAIgEAAIAAADIgCAAIgBADIgDABIAAADIgDAAIAAADgAJIlxIgDAAIgDAAIgEAAIgDAAIgDAAIgDAAIgDAAIgEAAIgDAAIgEAAIgDAAIgDAAIgEAAIgDAAIgDAAIgEAAIgCAAIgEAAIgEAAIAAgDIgCAAIgEAAIgDAAIgDAAIgDgBIgBgCIgDAAIgDAAIgDgBIgBgDIgDAAIgEAAIgCgBIgBgCIgDAAIgDAAIAAgDIgDAAIgEAAIAAgEIgDAAIgDAAIAAgCIgDAAIgDgBIgBgDIgDAAIgDgBIgBgCIgCgBIgBgCIgDAAIAAgEIgEAAIgCgBIgBgCIgCgBIgBgCIgDgBIgBgDIgCAAIAAgDIgEAAIAAgDIgEAAIAAgEIgCAAIAAgDIgEAAIAAgEIgDAAIAAgDIgCgBIgBgCIgDAAIgBgDIgDgBIAAgDIAAgDIgCAAIgBgDIgDgBIgBgCIAAgDQAAAAAAgBQgBAAAAAAQAAAAgBAAQAAAAAAgBIgBgCIAAgDIgCgBIgCgDIAAgDIgDAAIAAgDIAAgEIgCgBIgBgCIAAgDIgDgBIAAgDIAAgCIAAgEIgDgBIgBgDIAAgCIAAgEIgCgBIgBgCIAAgDIAAgEIAAgDIAAgDIgDAAIAAgEIAAgDIAAgEIAAgDIAAgDIAAgDIAAgDIAAgEIAAgDIAAgDIAAgDIAAgEIAAgDIAAgEIAAgDIAAgDIAAgEIAAgDIAAgDIAAgEIADAAIAAgCIAAgEIAAgEIAAgCIAAgEIADAAIAAgDIAAgDIAAgEIAEAAIAAgDIAAgDIAAgEIADAAIAAgDIAAgEIADAAIAAgDIAAgDIADAAIAAgDIAAgDIAEAAIAAgEIAAgDIADAAIAAgDIAAgEIAEAAIAAgDIADAAIAAgDIAAgEIADAAIAAgDIAEAAIAAgDIADAAIAAgEIADAAIAAgDIAEAAIAAgDIACAAIAAgEIAEAAIAAgDIAEAAIAAgDIACAAIAAgEIAEAAIAAgCIADAAIAAgEIADAAIAAgEIAEAAIADAAIAAgCIADAAIAAgEIAEAAIADAAIAAgDIAEAAIADAAIAAgDIADAAIADAAIAAgEIAEAAIADAAIAAgDIADAAIADAAIAAgEIADAAIAEAAIADAAIAAgDIAEAAIADAAIADAAIAAgDIAEAAIADAAIADAAIAEAAIACAAIAAgEIAEAAIAEAAIACAAIAEAAIADAAIADAAIAEAAIADAAIADAAIAEAAIADAAIAEAAIADAAIADAAIADAAIADAAIAEAAIADAAIADAAIAEAAIAAAEIADAAIADAAIAEAAIADAAIACABIABACIAEAAIADAAIACABIABACIAEAAIADAAIACACIABACIAEAAIACABIAAACIAEAAIADAAIAAAEIADAAIADABIABACIADAAIACAAIABADIAEAAIACABIABADIACAAIACACIADAAIACABIABADIADABIABADIACAAIABACIACABIABADIADAAIAAADIADAAIAAADIAEAAIAAAEIADAAIAAADIADAAIAAADIADABIABADIACABIABACIACABIABACIADABIABADIAAADIACABIABACIACABIABADIAAADIADAAIABADIAAAEIACAAIABADIAAADIADAAIAAADIAAADQAAAAABABQAAAAABAAQAAAAAAAAQAAAAABABIABACIAAADIACABIAAADIAAADIAAADIADABIABADIAAADIAAADIADABIAAADIAAACIAAAEIAAAEIAAACIADAAIAAAEIAAADIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAEIAAADIAAADIAAADIAAAEIAAADIAAADIAAADIAAADIAAAEIAAADIAAAEIgDAAIAAADIAAADIAAAEIAAADIAAACIgDABIAAAEIAAACIgBADIgDABIAAAEIAAACIAAADIgCABIAAADIgBACIgDABIAAAEIgBACIgCABIAAADIgBADIgCABIAAADIgBACQgBABAAAAQAAAAAAAAQgBAAAAAAQAAABgBAAIAAADIgBACIgCABIgBADIgCAAIAAADIgEAAIAAAEIgBADIgCAAIgBACIgCABIgBADIgDAAIgBADIgCABIAAADIgDAAIAAAEIgEAAIAAADIgDAAIAAACIgDABIgBADIgCABIgBACIgCABIgBACIgDABIgDAAIAAAEIgDAAIgCACIgCABIgBACIgCABIgEAAIgBADIgCABIgDAAIgBACIgDAAIgDAAIAAADIgDABIgEAAIAAADIgCAAIgEAAIgBACIgCABIgDAAIgEAAIgBADIgCABIgDAAIgEAAIgBACIgCABIgDAAIgEAAIgDAAIgDAAIAAADIgEAAgAGmopIAAADIAEAAIAAADIAAAEIAAADIAAADIAAADIAAADIAAAEIAAADIAEAAIAAAEIAAADIAAADIACABIAAADIAAADIAAADIADABIABADIAAACIADABIAAADIAAAEIACAAIABACIAAAEIADABIABACIACABIABACIAAAEIACABIABACIADABIABACIACABIABADIACABIACACIACABIABADIACAAIABADIADABIAAACIADABIABACIADAAIADABIAAACIADABIAAADIADAAIADAAIABADIADAAIADABIABACIADAAIACABIABACIAEAAIADAAIACACIABACIAEAAIACAAIAEAAIAAADIAEAAIACAAIAEAAIADAAIADAAIAEAAIADAAIADAAIADABIABADIADAAIAAgEIAEAAIADAAIADAAIADAAIADAAIAEAAIADAAIADAAIAAgDIAEAAIADAAIADAAIAAgEIAEAAIADAAIADAAIAAgDIAEAAIADAAIAAgDIADAAIAEAAIAAgDIADAAIADAAIAAgEIAEAAIAAgDIACAAIAEAAIAAgDIADAAIAAgDIADAAIAAgDIAEAAIAAgEIADAAIAAgDIADAAIAAgEIAEAAIAAgDIADAAIAAgDIAEAAIAAgEIAAgDIADAAIAAgDIADAAIAAgEIAAgCIAEAAIAAgEIAAgEIADAAIAAgCIAAgEIADAAIAAgDIAAgDIAAgEIADAAIAAgDIAAgDIAAgEIADAAIAAgDIAAgEIAAgDIAAgDIAAgDIAAgDIAAgEIAAgDIAEAAIAAgDIgEAAIAAgDIAAgEIAAgDIAAgEIAAgDIAAgDIAAgEIAAgDIAAgDIgDAAIAAgEIAAgCIAAgEIgDgBIAAgDIAAgCIAAgEIgDgBIAAgCIAAgDIgDgBIAAgDIAAgDIgDgBIgBgCIAAgEIgDgBIAAgCIgDgBIAAgDIAAgDIgEAAIAAgDIgCgBIgBgCIgCgBIgCgCIgCgBIgBgDIgCAAIgBgDIgDgBIgBgCIgCgBIgBgDIgDAAIAAgDIgEAAIgCgBIAAgCIgDgBIgBgDIgDAAIgCgBIgBgCIgEAAIgDgBIAAgCIgDAAIgDgBIgBgDIgDAAIgDAAIgDgBIgBgCIgDAAIgDAAIgEAAIAAgDIgDAAIgDAAIgEAAIgDAAIgDAAIgDAAIgDAAIgEAAIAAgEIgDAAIgEAAIAAAEIgDAAIgDAAIgEAAIgDAAIgDAAIgEAAIgCAAIgEAAIgBADIgDAAIgCAAIgEAAIgBACIgCABIgDAAIgEAAIgBADIgCABIgDAAIgBACIgDABIgDAAIgBACIgDABIgDAAIAAADIgDABIAAACIgDABIgDAAIgBACIgDABIAAADIgDABIgBACIgCABIgBADIgCAAQAAAAgBABQAAAAAAABQAAAAAAAAQAAAAgBABIgCABIgBACIgCABIgBACIgDABIgBACIgCABIAAADIgBADIgCABIgBACIgDABIAAAEIgBACIgCABIAAADIAAADIgDABIAAADIgBACIgDABIAAAEIAAACIAAADIgCABIAAAEIAAACIAAAEIgEAAIAAADIAAADIAAAEIAAADIAAADIAAAEIAAADIAAAEIgEAAIAAADgAJmoPIgDAAIgDAAIgEAAIgDAAIgDAAIgDgBIgBgDIgDAAIAAgDIgDAAIAAgDIgEAAIAAgDIgCgBIgBgCIAAgEIAAgDIAAgDIgDgBIAAgCIAAgEIAAgDIAAgEIgEAAIAAgDIgCgBIgBgCIgDAAIAAgEIgDAAIgDAAIgEAAIgCgBIgBgCIgEAAIgDAAIgDAAIgDAAIgBgDIgDAAIAAgEIgDAAIAAgCIgEAAIAAgEIgCgBIAAgDIAAgCIAAgEIAAgDIAAgDIAAgEIAAgDIAAgDIACAAIAAgEIAAgDIAEAAIAAgEIADAAIADAAIAAgDIAEAAIADAAIADAAIAEAAIADAAIAEAAIADAAIADAAIADAAIADAAIADABIABACIADAAIADAAIADACIABACIADAAIACABIABACIAEAAIAAAEIADAAIACABIABACIADAAIABADIACABIABADIACABIABACIADAAIABADIACABIABADIAAACIADAAIAAAEIADABIABADIAAACIACABIAAADIAAADIAAADIADABIABADIAAADIAAADIAAAEIAAADIAAAEIAAADIAAADIAAADIAAAEIgBACIgDABIAAADIgCAAIAAADIgEAAIAAADIgDAAIgBADIgCABIgEAAg");
	this.shape.setTransform(42.5199,1.6344,0.6038,0.6038,-35.9689);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,-56.4,99.7,112.9), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","#D7E513"],[0,1],-14,36.9,0,-14,36.9,85.9).s().p("AmXGtIgBAAIgCAAIgBAAIgCAAIgBAAIgDAAIgBAAIAAgCIgBAAIgCAAIAAgBIgCAAIAAgCIgCAAIAAgCIgBgBIgBgBIAAgBIgBAAIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgCIABAAIAAgCIAAgBIACAAIAAgBIACAAIAAgCIACAAIAAgCIACAAIAAgCIABAAIAAgBIABAAIAAgCIADAAIAAgBIABAAIAAgDIACAAIAAgBIABAAIAAgCIACAAIAAgBIABAAIAAgCIADAAIAAgCIABAAIAAgCIABAAIAAgBIACAAIAAgCIACAAIAAgBIACAAIAAgCIACAAIAAgCIABAAIAAgCIACAAIAAgBIABAAIAAgCIACAAIAAgBIACAAIAAgCIACAAIAAgCIABAAIAAgCIACAAIAAgBIABAAIAAgCIACAAIAAgBIACAAIAAgCIACAAIAAgCIABAAIAAgBIACAAIAAgCIACAAIAAgCIABAAIAAgCIACAAIAAgCIABAAIAAgBIACAAIAAgBIACAAIAAgCIACAAIAAgCIACAAIAAgCIABAAIAAgCIABAAIAAgBIACAAIAAgBIACAAIAAgCIACAAIAAgCIABAAIAAgCIACAAIAAgCIABAAIAAgBIADAAIAAgCIABAAIAAgCIACAAIAAgBIABAAIAAgCIACAAIAAgBIABAAIAAgCIADAAIAAgCIABAAIAAgCIACAAIAAgBIABAAIAAgCIACAAIAAgBIACAAIAAgCIACAAIAAgCIABAAIAAgCIACAAIAAgBIABAAIAAgCIACAAIAAgBIACAAIAAgDIACAAIAAgBIABAAIAAgCIACAAIAAgBIABAAIAAgCIACAAIAAgBIACAAIAAgDIABAAIAAgBIACAAIAAgCIACAAIAAgBIACAAIAAgCIACAAIAAgCIABAAIAAgCIABAAIAAgBIACAAIAAgBIACAAIAAgCIACAAIAAgCIACAAIAAgCIABAAIAAgCIABAAIAAgBIACAAIAAgCIACAAIAAgBIACAAIAAgCIABAAIAAgCIACAAIAAgCIABAAIAAgBIADAAIAAgCIABAAIAAgCIACAAIAAgBIABAAIAAgCIACAAIAAgBIACAAIAAgCIACAAIAAgCIABAAIAAgCIACAAIAAgBIABAAIAAgCIACAAIAAgBIACAAIAAgCIACAAIAAgCIABAAIAAgCIACAAIAAgCIABAAIAAgBIACAAIAAgBIACAAIAAgDIACAAIAAgBIABAAIAAgCIACAAIAAgBIABAAIAAgCIADAAIAAgBIABAAIAAgDIABAAIAAgBIACAAIAAgCIACAAIAAgBIACAAIAAgCIACAAIAAgCIABAAIAAgCIABAAIAAgBIACAAIAAgCIACAAIAAgBIACAAIAAgCIACAAIAAgCIABAAIAAgCIABAAIAAgBIACAAIAAgCIACAAIAAgBIACAAIAAgCIACAAIAAgCIABAAIAAgCIACAAIAAgBIACAAIAAgCIABAAIAAgCIACAAIAAgBIABAAIACAAIAAgCIACAAIACAAIABAAIACAAIABAAIACAAIACAAIABAAIABACIABAAIAAABIACAAIABABIAAABIACABIABABIAAABIABAAIAAACIABAAIABACIAAACIAAABIAAACIAAABIAAACIAAACIgBABIgBABIAAABIAAACIgBAAIgBABIgCAAIAAACIgBAAIAAACIgCAAIAAACIgBAAIAAABIgCAAIAAACIgCAAIAAABIgCAAIAAADIgBAAIAAABIgCAAIAAACIgBAAIAAABIgCAAIAAACIgCAAIAAABIgCAAIAAADIgBAAIAAABIgCAAIAAABIgBAAIAAACIgCAAIAAACIgCAAIAAACIgBAAIAAACIgCAAIAAABIgCAAIAAACIgCAAIAAABIgCAAIAAACIgBAAIAAACIgBAAIAAACIgCAAIAAABIgCAAIAAACIgCAAIAAABIgCAAIAAACIgBAAIAAACIgBAAIAAABIgCAAIAAACIgCAAIAAACIgCAAIAAACIgCAAIAAABIgBAAIAAACIgBAAIAAABIgDAAIAAACIgBAAIAAACIgCAAIAAACIgBAAIAAACIgCAAIAAABIgCAAIAAABIgCAAIAAACIgBAAIAAACIgCAAIAAACIgBAAIAAABIgCAAIAAACIgCAAIAAABIgCAAIAAADIgBAAIAAABIgCAAIAAACIgBAAIAAABIgCAAIAAACIgCAAIAAABIgCAAIAAADIgBAAIAAABIgCAAIAAACIgBAAIAAABIgDAAIAAACIgBAAIAAACIgCAAIAAACIgBAAIAAABIgCAAIAAACIgCAAIAAABIgCAAIAAACIgBAAIAAACIgBAAIAAACIgCAAIAAABIgCAAIAAACIgCAAIAAABIgCAAIAAACIgBAAIAAACIgBAAIAAABIgCAAIAAACIgCAAIAAACIgCAAIAAACIgCAAIAAACIgBAAIAAABIgCAAIAAABIgCAAIAAACIgBAAIAAACIgCAAIAAACIgBAAIAAACIgCAAIAAABIgCAAIAAABIgCAAIAAACIgBAAIAAACIgCAAIAAACIgBAAIAAACIgCAAIAAABIgCAAIAAACIgCAAIAAACIgBAAIAAABIgCAAIAAACIgBAAIAAABIgDAAIAAACIgBAAIAAACIgCAAIAAACIgBAAIAAABIgCAAIAAACIgBAAIAAABIgDAAIAAACIgBAAIAAACIgCAAIAAACIgBAAIAAABIgCAAIAAACIgCAAIAAABIgCAAIAAACIgBAAIAAACIgBAAIAAACIgCAAIAAABIgCAAIAAACIgCAAIAAABIgCAAIAAADIgBAAIAAABIgCAAIAAACIgBAAIAAABIgCAAIAAACIgCAAIAAACIgBAAIAAACIgCAAIAAABIgCAAIAAABIgCAAIAAACIgBAAIAAACIgCAAIAAACIgBAAIAAACIgCAAIAAABIgCAAIAAACIgCAAIAAABIgBAAIAAACIgCAAIAAACIgBAAIAAABIgCAAIAAACIgCAAIAAACIgCAAIAAACIgCAAIAAABIgBAAIgBAAIAAACIgDAAgAiRGbIgCAAIgCAAIgBAAIgBAAIgCAAIgCAAIgBgBIgBgBIgBAAIgBAAIgBgCIgBgBIAAgBIgCAAIgBgCIgBAAIAAgBIAAgBIgCgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgDIAAgBIACAAIAAgCIAAgBIABAAIAAgCIADAAIAAgCIABAAIAAgCIACAAIABAAIAAgBIACAAIACAAIACAAIABAAIABAAIACAAIACAAIACAAIABAAIABABIAAABIABABIACAAIABABIAAABIAAACIACAAIAAABIACAAIAAACIAAABIAAADIAAABIABABIAAABIAAABIgBAAIAAACIAAACIAAACIAAABIgCAAIAAABIgCAAIAAACIAAABIgBABIgCAAIgBACIAAAAIgBABIgBABIgCAAgAhiFoIgBAAIgCgBIgBgBIgBAAIgBAAIgCAAIAAgBIgCAAIgCAAIAAgCIgBAAIgBgBIAAgCIgBAAIAAgCIgBgBIAAAAIAAgCIAAgCIAAgCIgCAAIAAgCIAAgBIACAAIAAgBIAAgCIAAgCIABAAIAAgCIAAgCIABAAIAAgBIACAAIAAgBIACAAIAAgCIACAAIAAgCIACAAIAAgCIABAAIAAgCIABAAIAAgBIADAAIAAgCIABAAIAAgCIACAAIAAgBIABAAIAAgCIACAAIAAgBIABAAIAAgCIADAAIAAgCIABAAIAAgCIABAAIAAgBIACAAIAAgCIACAAIAAgBIACAAIAAgCIACAAIAAgCIABAAIAAgCIACAAIAAgBIABAAIAAgCIACAAIAAgBIACAAIAAgDIACAAIAAgBIABAAIAAgCIACAAIAAgBIABAAIAAgCIACAAIAAgBIACAAIAAgDIACAAIAAgBIABAAIAAgCIACAAIAAgBIACAAIAAgCIACAAIAAgCIABAAIAAgCIABAAIAAgBIACAAIAAgBIACAAIAAgCIACAAIAAgCIACAAIAAgCIABAAIAAgCIABAAIAAgBIACAAIAAgCIACAAIAAgBIACAAIAAgCIABAAIAAgCIACAAIAAgCIABAAIAAgBIADAAIAAgCIABAAIAAgCIACAAIAAgBIABAAIAAgCIACAAIAAgBIACAAIAAgCIACAAIAAgCIABAAIAAgCIACAAIAAgBIABAAIAAgCIACAAIAAgBIACAAIAAgCIACAAIAAgCIABAAIAAgCIACAAIAAgCIABAAIAAgBIACAAIAAgBIABAAIAAgDIACAAIAAgBIABAAIAAgCIACAAIAAgBIgCgBIAAgBIgBAAIgCAAIAAAAIgBgBIgCAAIgBAAIgCgBIAAgCIgBAAIgCAAIgCAAIAAgBIgCAAIgBAAIgBgBIgBgBIgBAAIgCAAIAAgBIgCAAIgCAAIgBgBIAAgBIgCAAIgBAAIAAgCIgDAAIgBAAIAAgCIgCAAIgBAAIAAgBIgCAAIgCAAIAAgCIgCAAIgBAAIgBAAIAAgBIgCAAIgBgBIgBgBIgCAAIgBgBIgBgBIgBAAIgBAAIAAgCIgCAAIAAgBIgCAAIgCAAIAAgCIgBAAIgBAAIgBgBIgCAAIgBgBIgBgBIgBgBIAAgBIgCAAIgBgBIAAgBIgCAAIgBAAIgBgBIgCAAIAAgCIgBAAIgCAAIAAgCIgBAAIAAgBIgCAAIgCgBIAAgBIgBAAIgBgBIgCAAIAAgCIgBAAIgBAAIAAgCIgCgBIgBgBIgBAAIgBAAIgBgCIgBAAIAAgBIgCAAIAAgBIgBAAIgCgBIgBgBIgBAAIAAgCIgBgBIAAgBIgCAAIAAgBIgCAAIAAgCIgCAAIgBAAIgBgBIgBgBIAAgCIgBAAIAAgBIgCgBIAAgBIgBAAIgBgBIgCAAIAAgCIgCAAIgBAAIAAgBIgBgBIgBgCIgBAAIAAgBIgCgBIAAgBIgCAAIAAgBIAAgCIgCAAIAAgCIgBAAIAAgCIgCAAIAAgBIgBAAIgBgCIgBAAIAAgBIgCgBIAAgBIgBgBIAAgBIgCgBIAAgBIgBAAIgBgBIgBAAIgBgCIgBAAIgBgBIAAgCIgBAAIAAgCIgBgBIAAAAIgCgBIAAgBIgCAAIAAgCIAAgCIgCAAIAAgCIgBAAIAAgBIgBgBIgBAAIgBgBIAAgBIgCAAIgBgCIAAgCIgBAAIAAgCIgCAAIAAgBIAAgBIgBgBIAAgBIgBgBIgBgBIAAgCIgBAAIAAgBIgCgBIgBgBIAAgBIgBgBIAAgCIgCAAIAAgBIAAgCIgBAAIAAgBIgBgBIgBgBIAAgCIgCAAIAAgCIAAgBIgBgBIgBgBIAAgBIgBAAIAAgCIgBAAIgBgCIAAgCIgBAAIAAgBIAAgCIgBAAIgBgBIAAgCIgCgBIAAgBIAAgCIgBAAIgBgBIAAgCIgBAAIAAgBIAAgDIgBAAIgBgBIgBAAIgBABIgBAAIgBACIgBABIgBABIAAAAIgBACIgBAAIAAABIgCAAIAAABIgCABIAAABIgCABIAAABIgBABIgBABIAAAAIgBABIgBABIAAABIgCAAIgBABIgBABIAAACIgCAAIAAABIgBABIAAABIgBAAIgBABIgBABIgBABIgBAAIgBACIgBAAIAAACIgCAAIAAABIgBABIAAABIgBAAIgBABIgCABIAAABIgBAAIgBACIgBABIAAABIgBAAIgBABIgBABIAAABIgCAAIAAABIgCABIAAABIgBABIgBABIgBABIAAABIgBAAIgBABIgBAAIAAACIgCAAIAAABIgCABIAAACIgBAAIgBABIgBABIAAAAIgBABIgBABIgBAAIgBACIgBAAIgBACIgBAAIAAACIgBAAIAAABIgCABIAAAAIgBABIgBABIgCABIAAABIgBABIgBABIgBAAIAAACIgBAAIAAABIgCAAIAAABIgCABIAAABIgCABIAAABIgBABIAAABIgBAAIgBACIgBAAIgBABIgBAAIgBACIgBAAIAAACIgCAAIAAABIgBABIAAABIgBAAIgBABIgBABIgBABIgBAAIgBACIgBABIAAABIgCAAIAAABIgBABIAAABIgCAAIAAABIgCABIAAABIgBAAIgBACIgBABIAAABIgBAAIgBABIgBABIAAABIgCAAIAAABIgCABIAAACIgBAAIgBABIgBABIAAABIgBAAIgBABIgBAAIAAACIgCAAIgBABIgBABIAAACIgBAAIAAABIgCABIAAABIgBAAIgBABIgCABIAAABIgBAAIgBACIgBAAIAAACIgBAAIAAABIgCAAIAAABIgBABIgBABIgCABIAAABIgBABIgBABIgBAAIAAACIgBAAIgBABIgBAAIAAACIgCAAIAAABIgCABIAAABIgBABIgBABIAAAAIgBACIgBAAIgBABIgBAAIgBACIgBAAIgCAAIAAACIgBAAIAAABIgCABIgBAAIgCAAIgCAAIAAABIgBAAIgBAAIgBgBIgCAAIgCAAIgBAAIAAgCIgCAAIgBAAIAAgCIgCAAIAAgCIgBAAIgBgBIgBAAIgBgCIAAgBIgBgBIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIABAAIAAgCIACAAIAAgBIAAgCIACAAIAAgCIACAAIAAgBIABAAIAAgCIACAAIAAgBIABAAIAAgCIACAAIAAgCIACAAIAAgCIACAAIAAgCIABAAIAAgBIACAAIAAgBIACAAIAAgCIABAAIAAgCIACAAIAAgCIABAAIAAgBIACAAIAAgCIACAAIAAgBIACAAIAAgDIACAAIAAgBIABAAIAAgCIABAAIAAgBIACAAIAAgCIACAAIAAgBIACAAIAAgDIABAAIAAgBIACAAIAAgCIABAAIAAgBIADAAIAAgCIABAAIAAgCIACAAIAAgCIABAAIAAgBIACAAIAAgCIABAAIAAgBIADAAIAAgCIABAAIAAgCIACAAIAAgCIABAAIAAgBIACAAIAAgCIACAAIAAgBIACAAIAAgCIABAAIAAgCIACAAIAAgBIABAAIAAgCIACAAIAAgCIACAAIAAgCIACAAIAAgCIABAAIAAgBIACAAIAAgBIABAAIAAgCIACAAIAAgCIACAAIAAgCIABAAIAAgCIACAAIAAgBIACAAIAAgBIACAAIAAgCIACAAIAAgCIABAAIAAgCIABAAIAAgBIACAAIAAgCIACAAIAAgBIACAAIAAgDIACAAIAAgBIABAAIAAgCIABAAIAAgBIACAAIAAgCIACAAIAAgCIACAAIAAgCIABAAIAAgBIACAAIAAgCIABAAIAAgBIADAAIAAgCIABAAIAAgCIACAAIAAgCIABAAIAAgBIACAAIAAgCIACAAIAAgBIACAAIAAgCIABAAIAAgCIACAAIAAgCIABAAIAAgBIACAAIAAgCIACAAIAAgBIACAAIAAgDIABAAIAAgBIACAAIAAgBIABAAIAAgCIACAAIAAgCIACAAIAAgCIACAAIAAgCIABAAIAAgBIACAAIAAgBIABAAIAAgCIADAAIAAgCIABAAIAAgCIABAAIAAgCIACAAIAAgBIACAAIAAgBIACAAIAAgCIACAAIAAgCIABAAIAAgCIABAAIAAgCIACAAIAAgBIACAAIAAgCIACAAIAAgCIACAAIAAgBIABAAIAAgBIABAAIAAgBIgBAAIAAgCIAAgCIAAgCIgBAAIAAgBIAAgCIAAgBIAAgCIgCAAIAAgCIAAgCIAAgBIAAgCIgBAAIgBgBIAAgDIAAgBIAAgCIgCAAIAAgBIAAgCIAAgBIAAgDIgBAAIgBgBIAAgCIAAgBIAAgCIAAgCIAAgCIgBAAIAAgBIAAgBIAAgCIAAgCIAAgCIAAgCIgBAAIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgCIgCAAIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgCIAAgCIAAgBIAAgBIAAgCIAAgCIAAgCIAAgCIAAgBIAAgBIAAgDIgCAAIAAgBIAAgCIAAgBIAAgCIACAAIAAgBIAAgDIAAgBIAAgBIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIACAAIAAgCIAAgCIAAgBIAAgCIAAgCIAAgCIAAgBIABAAIAAgBIAAgCIAAgCIAAgCIAAgCIAAgBIAAgBIAAgCIABAAIAAgCIAAgCIAAgCIAAgBIAAgBIACAAIAAgDIAAgBIAAgCIAAgBIACAAIAAgCIAAgCIAAgCIAAgBIACAAIAAgCIAAgBIAAgCIAAgCIAAgCIACAAIAAgBIAAgCIAAgBIABAAIAAgCIAAgCIAAgCIABAAIAAgBIAAgCIAAgBIACAAIAAgDIAAgBIAAgCIACAAIAAgBIAAgCIAAgCIACAAIAAgCIAAgBIAAgBIACAAIAAgCIAAgCIABAAIAAgCIAAgCIACAAIAAgBIAAgBIAAgCIACAAIAAgCIAAgCIABAAIAAgCIAAgBIACAAIAAgCIAAgCIAAgBIABAAIAAgCIAAgBIACAAIAAgCIAAgCIACAAIAAgCIAAgBIACAAIAAgCIABAAIAAgBIAAgCIACAAIAAgCIAAgCIABAAIAAgBIAAgCIACAAIAAgBIAAgDIACAAIAAgBIAAgCIACAAIAAgBIABAAIAAgCIAAgBIACAAIAAgDIABAAIAAgBIAAgCIADAAIAAgBIABAAIAAgCIAAgCIACAAIAAgCIABAAIAAgBIAAgBIACAAIAAgCIABAAIAAgCIADAAIAAgCIAAgCIABAAIAAgBIACAAIAAgCIABAAIAAgBIACAAIAAgCIAAgCIACAAIAAgCIACAAIAAgBIABAAIAAgCIAAgCIABAAIAAgBIACAAIAAgCIACAAIAAgBIACAAIAAgCIACAAIAAgCIABAAIAAgCIACAAIAAgBIABAAIAAgCIACAAIAAgBIAAgCIACAAIAAgCIABAAIAAgCIACAAIAAgCIACAAIAAgBIACAAIAAgBIABAAIACAAIAAgDIABAAIAAgBIACAAIAAgCIACAAIAAgBIACAAIAAgCIACAAIAAgBIABAAIAAgDIABAAIAAgBIACAAIAAgCIACAAIACAAIAAgBIACAAIAAgCIABAAIAAgCIABAAIAAgCIADAAIABAAIAAgBIACAAIAAgCIABAAIAAgBIACAAIABAAIAAgCIADAAIAAgCIABAAIAAgCIABAAIACAAIAAgBIACAAIAAgCIACAAIACAAIAAgBIABAAIAAgCIACAAIABAAIAAgCIACAAIAAgCIACAAIACAAIAAgBIABAAIACAAIAAgCIABAAIAAgCIACAAIACAAIAAgBIACAAIABAAIAAgCIACAAIACAAIAAgBIACAAIABAAIAAgCIABAAIAAgCIACAAIACAAIAAgCIACAAIACAAIAAgCIABAAIABAAIAAgBIACAAIACAAIACAAIAAgBIABAAIACAAIAAgCIABAAIADAAIAAgCIABAAIACAAIAAgCIABAAIACAAIACAAIAAgCIACAAIABAAIACAAIAAgBIABAAIACAAIAAgBIACAAIACAAIABAAIAAgDIACAAIABAAIACAAIAAgBIABAAIACAAIABAAIAAgCIACAAIABAAIADAAIAAgBIABAAIABAAIACAAIACAAIAAgCIACAAIACAAIABAAIABAAIAAgCIACAAIACAAIACAAIACAAIAAgCIABAAIABAAIACAAIACAAIAAgBIACAAIABAAIACAAIACAAIACAAIABAAIAAgCIACAAIABAAIACAAIACAAIACAAIABAAIACAAIAAgBIABAAIACAAIACAAIACAAIABAAIACAAIABAAIAAgCIADAAIABAAIACAAIABAAIACAAIABAAIADAAIABAAIABAAIACAAIACAAIACAAIACAAIABAAIABAAIACAAIACAAIACAAIACAAIABAAIACAAIABAAIACAAIACAAIACAAIABAAIACAAIACAAIABAAIACAAIABAAIACAAIACAAIACAAIABAAIACAAIABAAIACAAIAAACIACAAIACAAIABAAIACAAIABAAIADAAIABAAIABAAIABABIABAAIACAAIABAAIADAAIABAAIACAAIABAAIABAAIABACIACAAIACAAIABAAIABAAIABABIABAAIACAAIACAAIACAAIAAABIABABIACAAIABAAIACAAIACAAIAAACIABAAIACAAIACAAIABABIABABIABAAIACAAIABAAIAAABIACAAIACAAIACAAIABAAIABACIABAAIABAAIACAAIAAABIACAAIACAAIABABIABACIABAAIABAAIACAAIABABIABAAIACAAIABABIAAAAIACAAIABABIABABIACAAIABAAIAAACIACAAIABAAIABAAIABACIACAAIABAAIABACIABAAIACAAIAAABIABAAIACAAIAAABIACAAIACAAIABABIAAABIACAAIABABIAAABIACAAIACABIAAABIACAAIAAACIABAAIABAAIABABIACAAIABAAIABACIABAAIABAAIAAABIACAAIABABIABABIACABIAAABIACAAIAAAAIABABIABAAIAAACIACAAIACAAIAAACIACAAIABAAIAAACIABAAIABABIACAAIABABIABABIABAAIAAABIACAAIAAACIABAAIABAAIABACIABABIABABIACAAIABAAIAAABIACABIAAABIABAAIAAABIACAAIACABIAAABIABAAIABACIABABIAAABIABAAIABABIABAAIACAAIAAACIACAAIAAABIABABIABACIABAAIAAABIABABIABABIABAAIAAABIACAAIABACIABAAIAAABIABAAIAAADIACAAIAAABIACAAIAAABIACAAIAAACIACAAIAAACIABAAIAAACIABAAIAAACIACAAIAAABIACAAIAAACIACAAIAAABIABABIABABIABABIAAABIABAAIABACIABAAIAAABIACAAIAAACIAAABIACAAIAAACIABABIAAABIABABIABAAIABABIABABIABAAIABACIAAACIABAAIAAABIACABIAAABIABAAIAAABIACABIAAABIAAACIABABIABABIABAAIABACIAAABIABAAIAAABIABABIABABIAAACIABAAIAAACIACAAIAAABIACAAIAAACIAAABIABABIABACIABAAIABABIAAACIAAAAIABABIAAACIABAAIAAABIAAADIADAAIAAABIABABIAAABIAAABIABABIABABIAAACIABAAIAAACIAAABIABABIABABIABAAIAAABIAAACIACABIABABIAAACIAAABIABAAIAAACIAAABIABABIAAABIAAACIACABIAAAAIAAACIABAAIABACIAAACIACAAIAAACIAAABIAAABIACAAIAAACIAAACIABABIAAABIAAACIAAABIACAAIAAABIAAACIABABIAAABIAAACIAAABIABABIABABIAAABIAAADIACAAIAAABIAAACIAAABIABABIABABIAAACIAAACIAAAAIABABIAAACIAAABIAAACIABAAIABACIAAACIAAABIAAACIABAAIAAABIAAACIAAACIAAACIACAAIAAABIAAACIAAABIAAADIACAAIAAABIAAABIAAACIAAACIAAACIAAACIABAAIABABIAAABIAAACIAAACIAAACIAAACIAAABIABAAIAAABIAAACIAAACIAAACIAAABIAAACIAAACIACAAIAAACIAAABIAAACIAAABIAAACIAAACIAAACIAAABIAAACIAAABIAAACIAAACIAAACIAAACIAAABIAAABIAAADIAAABIAAACIAAABIAAACIAAABIAAADIAAABIAAABIAAACIAAACIAAACIAAACIAAABIAAABIAAACIAAACIAAACIAAACIAAABIAAACIAAABIgCAAIAAACIAAACIAAACIAAABIAAACIAAACIAAABIAAACIAAABIgBAAIAAACIAAACIAAACIAAACIAAABIAAABIgBACIgBAAIAAACIAAACIAAABIAAACIAAABIgCAAIAAADIAAABIAAACIAAABIgCAAIAAACIAAABIAAADIAAABIgBAAIAAACIAAABIAAACIAAACIgCAAIAAACIAAABIAAACIgBABIAAAAIAAACIAAACIgBABIgBABIAAABIAAABIAAABIgCAAIAAACIAAACIgBABIgBAAIAAACIAAACIAAABIgBABIAAACIAAABIgBABIgBAAIAAACIAAABIgBABIAAACIAAACIgBABIgBAAIAAABIAAACIgCAAIAAACIAAACIgCAAIAAACIAAABIAAABIgCAAIAAADIgBAAIAAABIAAACIgBAAIAAABIAAACIgDAAIAAACIAAABIgBABIAAABIgBABIgBABIAAABIAAABIgBABIAAACIgBABIgBABIAAABIAAABIgBABIAAABIgBACIgCAAIAAACIgBAAIAAACIgBABIAAAAIAAACIgBABIgBAAIgBACIgBABIAAABIAAABIgCABIAAABIgCAAIAAACIAAABIgBABIgBABIgBABIAAABIAAABIgBAAIgBACIgBAAIgBABIgBABIAAACIAAABIgCABIAAAAIgBABIAAABIgCAAIAAACIAAACIgBAAIgBACIgBAAIgBABIgBABIgBAAIgBABIAAACIgBAAIAAACIAAABIgCAAIAAACIgCAAIAAABIgBAAIgBABIgBABIAAABIgBABIgBABIgBABIAAABIgCAAIAAACIgCAAIAAABIgCAAIAAACIAAACIgBAAIAAABIgBABIgBABIgBAAIAAABIgCABIgBABIgBAAIgCAAIAAADIgBAAIAAABIgBAAIgBABIgCABIAAABIgBAAIgBABIgBABIAAABIgBAAIgBACIgBABIAAABIgCAAIAAABIgCABIgBAAIgBABIgBAAIAAABIgBABIgBACIgBAAIAAABIgCABIgCAAIAAABIgBAAIAAABIgCAAIAAACIgBAAIgCAAIAAACIgCAAIgBACIgBAAIAAABIgBABIgCAAIAAABIgBAAIgBABIgBABIgCAAIAAABIgCAAIAAACIgBAAIgCAAIAAACIgCAAIAAABIgCAAIgBAAIgBABIAAABIgCAAIAAACIgCAAIgBABIgBABIgCAAIAAABIgBAAIgBAAIgBACIgBAAIgCAAIAAABIgCAAIAAACIgBAAIgCAAIAAABIgCABIgCAAIAAABIgBABIgCAAIAAABIgBAAIgCAAIAAACIgCAAIgCAAIgBAAIAAABIgCAAIgBAAIAAACIgCAAIgCAAIgBACIgBAAIgBAAIgBABIgBABIgBAAIgCAAIAAABIgCAAIgCAAIAAABIgBABIgCAAIgBAAIgBABIgCAAIgBAAIgBAAIAAADIgCAAIgCAAIgCAAIAAABIgCAAIgBAAIgBAAIgBABIgBABIgCAAIgCAAIAAABIgCAAIgBAAIgCAAIAAABIgBABIgCAAIgCAAIgCAAIAAABIgBAAIgCAAIgCAAIgBAAIgCAAIAAADIgBAAIgCAAIgCAAIgCAAIAAABIgBAAIgCAAIgBAAIgCAAIgCAAIgBABIgBAAIgBAAIgCAAIgBAAIgDAAIgBAAIgBACIgBAAIgBAAIgCAAIgBAAIgDAAIgBAAIgCAAIgBAAIgCAAIAAABIgCABIgCAAIgBAAIgCAAIgBAAIgCAAIgCAAIgCAAIgBAAIgCAAIgBAAIgCAAIgCAAIgBAAIgCAAIgCAAIgCAAIgBAAIAAACIgCAAIgBAAIgCAAIAAgCIgCAAIgCAAIgCAAIgBAAIgBAAIgCAAIgCAAIgCAAIgCAAIgBAAIgBAAIgDAAIgBAAIgCAAIgBAAIgCAAIgBAAIgCgBIgBgBIgBAAIgCAAIgBAAIgCAAIgCAAIgCAAIgBAAIgBAAIgBgCIgBAAIgCAAIgCAAIgCAAIgBAAIgCAAIAAACIgBAAIgBABIgBABIgBACIgBAAIgBABIgBABIAAABIgBAAIAAABIgCABIAAABIgCAAIAAABIgCABIAAACIgBAAIAAABIgBABIgBABIgBAAIAAABIgCABIgBABIgBAAIAAACIgCAAIAAACIgBAAIAAABIgBAAIgBACIgBAAIgBABIgBABIgBABIgBABIAAABIgCAAIAAACIgBAAIAAABIgBAAIgBACIgCAAIAAABIgBABIgBABIgBABIAAABIgBABIgBAAIgBABIAAABIgBAAIAAACIgCAAIAAACIgBAAIgBABIgBABIAAABIgBAAIgBABIgBABIAAABIgCAAIgBACIgBABIAAABIgBAAIAAACIgCAAIAAABIgBAAIgBABIgBABIgBABIgBAAIgBACIgBABIAAABIgBAAIAAABIgCABIAAABIgBAAIgBABIgCABIAAACIgBAAIgBABIgBABIAAABIgBAAIAAABIgCABIAAABIgCAAIAAACIgCAAIAAACIgBAAIgBABIAAABIgBABIgBAAIgBABIgBABIgBABIgBAAIAAACIgCAAIAAACIgBAAIAAABIgBAAIgBACIgBAAIgBABIgBABIgBABIgBABIAAABIgBABIgBABIgBAAIAAABIgCAAIAAACIgCAAIAAABIgBABIgBACIgBAAIAAABIgBABIgBAAIgBABIAAABIgCAAIgBACIgBAAIAAACIgBAAIgBACIgBAAIAAABIgBABIgBAAIgBABIAAABIgCABIgBABIgBABIAAABIgCAAIgBAAIAAACIgBAAIgBABIgCAAIgBAAIgCAAIAAABIgBABIgCAAgAACBDIgBABIgBABIAAABIAAABIgBABIAAABIgCAAIAAADIAAABIgBAAIgBABIgBABIAAABIAAABIgBABIAAACIABAAIAAACIAAABIABAAIABABIAAACIABABIAAABIACABIAAABIAAACIABAAIAAABIAAABIABABIABABIAAACIABABIAAABIABAAIABACIAAABIABAAIAAACIAAACIACAAIABABIAAACIABAAIAAABIABABIAAABIAAACIACAAIAAACIAAABIABABIABABIABAAIABABIAAACIABAAIABACIAAACIABAAIAAABIAAACIABAAIAAABIACABIAAACIAAABIABABIABABIAAABIACAAIAAACIAAABIABABIABACIABAAIAAABIAAACIABAAIAAABIAAACIACAAIAAACIACAAIAAACIAAABIACAAIAAABIAAACIABABIAAABIAAACIABAAIABACIABAAIABABIAAACIABAAIABABIAAACIABABIAAABIAAABIACABIAAABIABAAIAAACIAAACIABAAIABABIAAACIABAAIABABIACAAIABAAIABABIABABIABAAIACAAIACAAIACAAIABAAIACAAIABAAIACAAIABACIABAAIACAAIABAAIACAAIABAAIADAAIABAAIABAAIACAAIACAAIACAAIACAAIABAAIABAAIACAAIABABIABABIACAAIACAAIABAAIACAAIABAAIAAgCIACAAIACAAIACAAIABAAIACAAIACAAIABAAIACAAIABAAIACAAIACAAIACAAIABAAIACAAIABAAIACAAIAAgCIACAAIACAAIABAAIACAAIABAAIADAAIABAAIAAgCIACAAIABAAIACAAIABAAIAAgBIADAAIAAgCIAAgBIABAAIAAgCIAAgCIACAAIAAgCIABAAIAAgBIAAgCIACAAIAAgCIAAgBIACAAIAAgCIAAgBIACAAIAAgCIABAAIAAgCIAAgCIACAAIAAgCIAAgBIABAAIAAgBIAAgCIACAAIAAgCIACAAIAAgCIAAgBIACAAIAAgCIAAgBIABAAIAAgDIAAgBIACAAIAAgCIABAAIAAgBIAAgCIACAAIAAgBIAAgDIACAAIAAgBIABAAIAAgCIAAgBIACAAIAAgCIAAgCIACAAIAAgCIAAgBIACAAIAAgCIABAAIAAgBIAAgCIACAAIAAgCIAAgCIABAAIAAgBIAAgCIACAAIAAgBIACAAIAAgCIAAgCIACAAIAAgBIAAgCIACAAIAAgCIAAgCIABAAIAAgCIABAAIAAgBIAAgBIACAAIAAgCIAAgCIACAAIAAgCIAAgCIACAAIAAgBIACAAIAAgBIAAgCIABAAIAAgCIgBgBIAAgBIAAgBIgCgBIAAgBIgBAAIgBgBIAAgDIgCAAIAAgBIgBgBIgBgBIAAgBIgBgBIAAgBIgBAAIAAgCIAAgCIgCAAIAAgBIgBgBIgBgBIAAgBIgCgBIAAgBIAAgCIgBgBIgBgBIgBAAIAAgBIAAgCIgBAAIgBgBIgBgBIAAgBIAAgCIgCgBIAAgBIgCAAIAAgBIAAgCIgBAAIgBgBIAAgBIgBgCIAAgBIgBgBIgBAAIgBgBIgBgBIAAgCIgBAAIAAgCIgCAAIAAgCIAAgBIgBAAIAAgBIAAgCIgCgBIAAgBIgBgBIgBgBIAAgCIgBAAIgBgBIgBAAIAAgBIAAgCIgBgBIgBgBIgBgBIAAgBIAAgCIgCAAIAAgBIgCAAIAAgCIAAgCIgBAAIgBgBIgBAAIAAgBIAAgBIgBgBIgBgBIgBAAIAAgCIAAgCIgDAAIhkAAIgBABIgBABIAAACIAAABIgBABIAAABIgCAAIAAABIAAABIgBAAIAAACIgBACIgBAAIgBABIgBAAIAAACIgBABIgBABIAAABIgBABIAAACIAAABIgCAAIAAABIgCAAIAAACIAAABIgCABIAAABIgBABIAAACIAAABIgBAAIgBABIgBAAIAAACIAAACIgCAAIgBACIgBAAIAAACIAAAAIgCABIAAABIAAACIgBABIAAABIgBAAIAAACIgBABIgBAAIgBABIgBABIAAACIgBABIgBABIAAABIgCAAIAAACIAAABIgBAAIAAABIgBABIAAACIgBABIgCABIAAABIgBAAIAAACIgBABIgBAAIAAACIgBAAIAAACgADGCwIACAAIAAgCIABAAIABAAIAAgCIACAAIACAAIACAAIAAgBIACAAIABAAIABAAIAAgCIADAAIABAAIAAgBIACAAIABAAIAAgCIACAAIACAAIAAgCIACAAIABAAIACAAIAAgCIABAAIACAAIAAgCIACAAIACAAIAAgBIABAAIACAAIAAgBIABAAIAAgCIACAAIAAgCIACAAIAAgCIAAgBIACAAIAAgCIAAgBIABAAIAAgDIACAAIAAgBIAAgCIABAAIAAgBIAAgCIACAAIAAgBIACAAIAAgDIAAgBIACAAIAAgCIAAgBIABAAIAAgCIAAgCIACAAIAAgCIACAAIAAgBIAAgCIACAAIAAgBIAAgCIABAAIAAgCIAAgCIABAAIAAgBIACAAIAAgCIAAgBIACAAIAAgCIAAgCIACAAIAAgBIAAgCIACAAIAAgCIABAAIAAgCIAAgCIABAAIAAgBIAAgBIACAAIAAgCIAAgCIgCAAIgBAAIgBAAIgCAAIAAACIgCAAIgCAAIgCAAIgBAAIgBAAIgBABIgBABIgCAAIgCAAIgBAAIgCAAIgCAAIAAABIgCAAIgBAAIgCAAIgBAAIgCAAIAAABIgCAAIAAACIAAACIgCAAIAAACIAAABIgBABIAAABIgBABIgBABIAAACIgBAAIAAABIgBACIgBAAIAAABIAAABIgCABIAAACIgBABIgBABIAAABIgBAAIAAACIgBABIgBAAIAAACIAAACIgBAAIAAACIgBABIgBAAIgBABIgBABIAAABIgBACIgBABIAAABIAAABIgBABIAAABIgCAAIAAACIAAABIgBAAIAAADIgBABIgCAAIAAACIAAABIgBAAIAAACIgBAAIAAACIgBABIgBABIAAABIAAABIgCAAIAAACIAAABIgCABIAAACIgCAAIAAACIAAABIgBAAIAAACIAAABIgBAAIAAACIgCAAIAAACgAh9BUIAAACIACAAIAAABIABAAIAAABIACABIAAABIABABIABABIABABIABABIAAACIACAAIAAABIABAAIAAABIABABIAAABIACABIAAABIACABIAAABIABAAIABACIABAAIABABIAAAAIABACIABAAIAAACIACAAIABABIABABIAAABIACAAIAAABIABAAIABABIABABIABAAIAAACIACAAIABACIABAAIAAABIABABIAAABIACAAIAAABIACAAIAAACIACAAIABAAIABACIABABIAAABIACAAIAAABIABAAIABAAIABACIACAAIAAABIABABIABACIABAAIABAAIABABIABABIAAABIACAAIACAAIAAABIABAAIABACIABAAIABAAIABABIABABIABACIACAAIABAAIAAABIABAAIAAACIACAAIABAAIABABIACAAIABABIABABIABAAIABAAIAAACIACAAIAAACIACAAIACAAIAAABIABAAIABAAIABABIABAAIACABIABABIABAAIACAAIAAACIABAAIACAAIABABIABABIACAAIABAAIAAACIACAAIABAAIAAABIACAAIACAAIAAACIACAAIABAAIABAAIABABIABAAIACAAIABABIAAABIACAAIABAAIAAgCIgBAAIAAgBIgBgBIgBgBIgBAAIgBAAIgBgBIgBgBIAAgBIgCAAIgBAAIAAgCIgCgBIAAgBIgCAAIAAgCIgCAAIgBAAIAAgBIgBAAIgBgBIgBAAIAAgCIgCAAIgCAAIAAgCIgBgBIgBgBIgBAAIgBAAIgBgBIgBgBIAAgBIgCAAIgBgBIgBgBIAAgCIgBAAIgBgBIgBAAIAAgCIgCAAIgBAAIgBgBIgBgBIgBgBIgBAAIAAgBIgBgBIAAgCIgCAAIAAgBIgBgBIgBgBIgCAAIAAgBIgBgBIgBgBIgBAAIAAgCIgBAAIAAgCIgCAAIAAgBIgCAAIAAgCIgCAAIAAgBIgBgBIAAgBIgBgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBAAIAAgCIAAgBIgCAAIAAgCIgBgBIAAgBIgCgBIAAAAIgBgBIgBgBIgBAAIgBgCIAAgCIgBAAIAAgCIgCAAIAAgBIgBgBIAAAAIAAgCIgCAAIAAgCIgCgBIAAgBIgBAAIgBgCIgCAAIgBAAIgBAAIgCAAIgBgBIgBAAIgCAAIgBAAIgCAAIgBAAIAAgBIgDAAIgBAAIgBAAIgCAAIgCAAIgCgBIAAgBIgCAAIgBAAIgBAAIgCAAIgBgBIgBgBIgCAAIgCAAIgBAAIgCAAIAAACgAC1gcIAAACIABAAIAAABIACABIAAACIAAABIABABIABABIABAAIABABIAAACIABAAIAAACIACAAIAAACIAAABIABABIAAABIACAAIAAABIAAACIABABIABABIAAACIABAAIABABIABAAIABABIAAABIABABIAAABIABABIAAABIAAABIACABIAAABIACAAIAAACIAAACIACAAIAAACIABAAIABABIAAABIAAABIABABIABAAIAAACIAAACIACAAIABACIABAAIAAABIAAABIACABIAAABIAAACIABABIAAABIABAAIABACIAAABIABAAIABABIABABIABACIAAABIABABIAAABIABAAIABABIAAACIABAAIAAACIABAAIABACIAAABIACABIAAABIABAAIABABIAAACIABAAIAAACIABAAIABACIAAABIABABIAAABIACAAIACAAIACAAIABAAIACAAIAAgCIABAAIACAAIACAAIACAAIABAAIAAgBIACAAIACAAIACAAIABAAIABAAIACAAIAAgCIACAAIACAAIACAAIABAAIABAAIAAgCIACAAIACAAIACAAIABAAIACAAIAAgCIACAAIACAAIABAAIACAAIABAAIACAAIAAgBIACAAIACAAIABAAIACAAIABAAIAAgCIACAAIACAAIACAAIABAAIACAAIAAgBIABAAIACAAIACAAIACAAIABAAIACAAIAAgCIABAAIADAAIABAAIABAAIACAAIAAgCIACAAIACAAIACAAIABAAIABAAIAAgCIACAAIACAAIACAAIACAAIABAAIACAAIAAgBIABAAIACAAIACAAIABAAIACAAIAAgCIACAAIACAAIAAgBIAAgDIABAAIAAgBIAAgBIACAAIAAgCIAAgCIABAAIAAgCIAAgCIACAAIAAgBIAAgBIACAAIAAgCIAAgCIACAAIAAgCIAAgCIABAAIAAgBIAAgBIACAAIAAgCIAAgCIAAgCIABAAIAAgCIAAgBIAAgCIACAAIAAgCIAAgBIACAAIAAgBIAAgBIAAgCIACAAIAAgCIAAgCIACAAIAAgBIAAgCIAAgBIAAgCIABAAIAAgCIAAgCIAAgBIABAAIAAgCIAAgBIAAgDIAAgBIADAAIAAgCIAAgBIAAgCIABAAIAAgBIAAgDIAAgBIAAgCIAAgBIACAAIAAgCIAAgCIAAgCIAAgBIAAgBIABAAIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgBIgBgBIAAgBIgBgBIgBgBIgBAAIAAgBIgCgBIgBgBIgBAAIAAgCIgBAAIAAgCIgCAAIAAgBIgBgBIgBgBIgCgBIAAAAIgBgBIgBgBIgBAAIAAgCIgBgBIgBgBIgBAAIAAgCIgBAAIgBgBIgCAAIAAgBIgBgBIgBgBIgBAAIAAgCIgBgBIgBgBIgBAAIAAgCIAAgBIgCAAIAAgBIgCgBIAAgCIgBAAIgBgBIgBgBIAAgBIgBAAIgBgBIgBgBIgBgBIgBAAIAAgBIgCgBIAAgCIgBAAIAAgBIgCgBIAAAAIgBgBIgBgBIgBgBIgBgBIgBAAIgBgCIAAAAIgBgCIgBAAIAAgBIgCgBIAAgBIgCAAIAAgBIgCgBIAAgBIgBgBIgBgBIAAAAIgBgCIgBAAIAAgBIgCAAIgBgCIgBAAIAAgBIgCgBIAAgBIgBgBIAAgBIgBgBIgBgBIgBAAIgBgBIgBAAIgBgCIgBAAIAAgCIgCAAIAAgCIgBAAIAAgBIgCAAIgCAAIgCAAIAAABIgBAAIgCAAIgBAAIgCAAIgBACIgBAAIgCAAIgBAAIgCAAIgBAAIgBACIgBAAIgCAAIgCAAIgBAAIAAACIgCAAIgCAAIgCAAIgBAAIgBAAIgBABIgBAAIgCAAIgCAAIgCAAIAAABIgBABIgBAAIgCAAIgCAAIgBABIgBABIgBAAIgCAAIgCAAIgCAAIAAABIgBABIgCAAIgBAAIgCAAIAAABIgCAAIgCAAIgBAAIgCAAIgBAAIgBACIgBAAIgCAAIgCAAIgBAAIgBABIgBAAIgBAAIgCAAIgCAAIgCAAIAAACIgBAAIgCAAIgBAAIgDAAIAAACIAAABIgBABIAAABIAAACIgBABIAAAAIAAACIAAACIgBABIgBABIAAACIAAABIAAABIgCAAIAAADIAAABIAAABIgCABIAAABIAAACIAAABIgCAAIAAADIAAABIAAABIgBAAIAAACIAAACIAAACIgBAAIAAACIAAABIgBABIgBAAIAAACIAAACIgBACIgBAAIAAACIAAABIgBABIgBABIAAABIAAACIAAACIgCAAIAAACIAAABIAAABIgBABIAAACIAAABIAAACIAAABIgCAAIAAACIAAACIAAABIgBABIAAACIAAABIgBABIgBAAIAAACIAAACIgBABIgBABIAAABIAAACIAAABIgCAAIAAADIAAABIAAACIgBAAIAAABgAi6g+IgBABIAAABIgBABIAAABIAAACIABABIAAAAIAAACIAAACIAAACIAAACIABAAIABABIAAABIAAACIAAACIAAACIABAAIAAABIAAACIAAABIAAADIAAABIACABIAAABIAAABIAAACIACAAIAAABIAAADIAAABIAAACIABAAIABABIAAACIAAACIABAAIAAACIAAABIAAACIAAABIABABIABABIAAACIABAAIAAACIAAABIAAABIACAAIABABIAAACIAAACIABABIAAAAIAAACIABAAIABACIAAACIAAACIABAAIAAABIAAABIABABIABABIAAACIABABIAAABIAAACIACAAIABABIAAABIABABIAAABIAAACIACABIAAABIAAACIABAAIAAABIAAABIABABIABACIAAABIACAAIACAAIABAAIABABIAAABIACAAIACAAIACAAIACAAIAAAAIABABIACAAIABAAIACAAIACAAIABABIAAABIACAAIACAAIACAAIABAAIACAAIAAACIABAAIACAAIACAAIACAAIABAAIABACIABAAIABAAIACAAIACAAIACAAIABAAIABABIABAAIABAAIADAAIABAAIACABIAAABIABAAIACAAIABAAIADAAIABAAIAAABIABAAIACAAIACAAIACAAIABABIABABIABAAIACAAIABAAIACAAIACAAIAAACIACAAIABAAIACAAIABAAIACAAIACAAIAAACIACAAIABAAIACAAIACAAIABAAIABABIABAAIABAAIACAAIACAAIABABIABABIACAAIABAAIABAAIACAAIACAAIAAgCIACAAIAAgBIAAgCIABAAIAAgCIACAAIAAgCIAAgBIABAAIAAgCIADAAIAAgBIAAgCIABAAIAAgCIACAAIAAgCIAAgBIABAAIAAgCIACAAIAAgBIAAgDIACAAIAAgBIAAgBIACAAIAAgCIABAAIAAgCIAAgCIACAAIAAgCIABAAIAAgBIAAgBIACAAIAAgCIACAAIAAgCIAAgCIACAAIAAgCIABAAIAAgBIAAgBIACAAIAAgCIABAAIAAgCIAAgCIACAAIAAgCIABAAIAAgBIAAgCIACAAIAAgCIAAgBIABAAIAAgBIACAAIAAgBIAAgCIABAAIAAgCIADAAIAAgCIAAgBIABAAIAAgCIABAAIAAgBIAAgCIACAAIAAgCIACAAIAAgCIAAgBIACAAIAAgCIACAAIAAgBIAAgDIABAAIAAgBIABAAIAAgCIAAgBIAAAAIgBgCIAAgBIAAgDIgBAAIAAgBIAAgCIAAgBIgCgBIAAgBIAAgCIAAgCIgCAAIAAgBIAAgBIAAgCIgCgBIAAgBIAAgCIAAgCIgBAAIgBgBIAAgCIAAgBIAAgBIgBgBIAAgCIAAgBIgBgBIAAgBIAAgCIAAgCIgCAAIgBgBIAAgCIAAgBIgBgBIAAgBIAAgCIAAgCIAAgCIgCAAIAAgBIAAgBIAAgCIgBAAIAAgCIAAgCIAAgCIgBAAIgBgBIAAgBIAAgDIAAAAIgBgBIAAgCIAAgBIgBgBIgBgBIAAgBIAAgDIgBAAIAAgBIAAgBIAAgCIgCgBIAAgBIAAgCIAAgCIgBAAIAAgBIAAgCIAAgBIgCgBIAAgBIAAgCIgCAAIgCAAIgBAAIgBAAIgBgCIgBAAIgCAAIgCAAIgCAAIgBAAIAAgBIgCAAIgBAAIgDAAIgBAAIAAgCIgCAAIgBAAIgCAAIgCAAIgBAAIgBgBIgBAAIgBAAIgCAAIgBgBIgBgBIgCAAIgCAAIgBAAIgBAAIgCgBIAAgBIgCAAIgCAAIgBAAIgBgBIgBgBIgCAAIgCAAIgBAAIgCAAIgBAAIAAgBIgCAAIgCAAIgCAAIgBAAIAAgCIgCAAIgBAAIgCAAIgCAAIgBAAIgBgCIgCAAIgBAAIgBAAIgCAAIgBgCIgBAAIgCAAIgBAAIgBAAIgBgBIgBAAIgDAAIgBAAIgBABIAAAAIgBACIgBAAIgBACIgBAAIAAACIgCAAIAAABIgCAAIAAABIgBABIAAABIgBABIgBABIgBABIgBABIgBAAIgBACIgBAAIAAABIgCAAIAAACIgBAAIAAABIgCABIAAABIgBABIgBABIgBAAIgBABIgBABIAAABIgCAAIAAACIgBAAIAAACIgCAAIAAABIgCABIAAABIgBABIgBAAIgBABIgBABIAAAAIgBACIgBABIAAABIgCAAIgBABIgBABIAAABIgCAAIAAABIgBABIAAABIgBAAIgBACIgBABIAAABIgCAAIgBABIgBAAIAAACIgBAAIAAABIgCABIAAACIgBAAIgBABIgCABIAAABIgBAAIgBABIgBAAIAAACIgBAAIgBABIgBABIAAACIgBAAIgBABIgCABIAAAAIgBABIgBABIgBABIAAABIgBAAIgBACIgBAAIAAACIgCAAIAAABIgCABIAAABIgBAAIgBABgAAbiGIgCABIAAACIAAABIAAACIACAAIAAABIAAACIAAACIABABIABABIAAABIAAACIABAAIAAABIAAACIAAACIABABIAAABIAAACIAAABIAAABIACAAIAAADIAAABIAAACIACAAIAAABIAAACIAAABIACAAIAAADIAAABIAAABIABABIAAABIAAACIAAACIABAAIABACIAAABIAAABIABABIABABIAAACIAAACIABAAIABACIAAABIAAACIABAAIAAABIAAACIAAACIACAAIAAACIAAABIAAACIABAAIAAACIAAABIAAACIABABIABAAIAAACIAAACIABABIABABIAAACIAAABIAAABIACAAIAAACIA5AAIABAAIAAgCIAAgBIAAgBIgBgBIAAgBIAAgCIAAgCIgCAAIAAgCIAAgBIAAgCIgBAAIgBgBIAAgCIAAgCIgBAAIgBgBIAAgCIAAgCIAAgCIgBAAIAAgBIAAgCIAAgBIgCAAIAAgCIAAgCIAAgCIgBAAIAAgCIAAgBIAAgBIgCgBIAAgBIAAgCIAAgCIgBAAIgBgCIAAgBIAAgBIgBgBIgBgCIAAgBIAAgCIgBAAIgBgBIAAgCIAAgBIgBgBIAAgCIAAgBIAAgBIgBgBIAAgBIAAgCIAAgCIgCAAIAAgCIAAgBIAAgCIgCAAIAAgBIAAgCIAAgCIgBAAIgBgCIAAgBIAAgCIgBAAIgBgBIAAgCIAAgCIAAgCIgBAAIAAgBIAAgCIABAAIAAgCIACAAIAAgCIACAAIACAAIAAgBIACAAIAAgBIABAAIAAgCIABAAIACAAIAAgCIACAAIAAgCIACAAIACAAIAAgCIABAAIAAgBIACAAIAAgBIABAAIACAAIAAgCIACAAIAAgCIACAAIAAgCIABAAIACAAIAAgCIACAAIAAgBIABAAIACAAIAAgBIABAAIAAgDIACAAIAAgBIACAAIAAgCIgCAAIAAgBIgCAAIAAgBIgBgBIgBAAIgBgCIgBAAIAAgCIgCAAIgCAAIAAgBIgBgBIAAgBIgCAAIAAgBIgCAAIgBgBIgBgBIgBAAIAAgCIgCAAIgBAAIgCAAIAAACIgCAAIgCAAIAAACIgCAAIAAABIgBAAIAAABIgBABIgCAAIAAABIgCAAIgBACIgBAAIAAACIgCAAIgBAAIAAABIgBABIgBABIgCAAIgBAAIAAACIgCAAIAAABIgBAAIgBACIgBABIgBAAIgBABIgCAAIAAABIgBAAIgBACIgBAAIgBAAIgBABIgBABIAAABIgCABIgCAAIAAACIgBAAIgBABIgBAAIAAABIgBAAIgCAAIgBACIgBAAIgBABIgBABIgBAAIAAACIgCAAIAAABIgBABIgBAAIgBABIgCAAIAAABIgCAAIAAACIgBAAIAAACIgCAAIgCAAIAAACIgCAAIAAABIgBAAIgBAAIAAACIgCAAIAAABgAjAhrIACAAIAAgBIACAAIAAgBIABAAIAAgCIACAAIAAgCIABAAIAAgCIACAAIAAgCIACAAIAAgBIACAAIAAgCIABAAIAAgBIACAAIAAgCIABAAIAAgCIADAAIAAgCIABAAIAAgBIACAAIAAgCIABAAIAAgBIACAAIAAgCIAAgCIAAgCIABAAIAAgBIAAgCIAAgCIAAgCIAAgBIAAgBIADAAIAAgCIAAgCIAAgCIAAgCIAAgBIABAAIAAgBIAAgCIAAgCIAAgCIACAAIAAgCIAAgBIAAgBIAAgDIABAAIAAgBIAAgCIAAgBIAAgCIACAAIAAgCIAAgCIAAgBIACAAIAAgCIAAgBIAAgCIACAAIAAgCIAAgCIAAgBIABAAIAAgCIAAgBIAAgCIABAAIAAgCIAAgCIAAgBIACAAIAAgCIAAgBIACAAIAAgDIAAgBIAAgCIACAAIAAgBIAAgCIACAAIAAgCIAAgCIABAAIAAgBIAAgBIACAAIAAgCIAAgCIABAAIAAgCIAAgCIAAgBIAAgBIAAgCIAAgCIgBgBIAAgBIAAgCIAAgBIAAgCIAAgCIAAgBIgCgBIAAgBIAAgBIAAgCIAAgCIAAgCIAAgBIAAgCIgBAAIAAgBIAAgCIAAgCIAAgCIAAgBIgCAAIAAABIAAABIgCABIAAACIgCAAIAAACIAAABIgCAAIAAACIAAABIgBAAIAAABIgBABIAAACIgBABIgBABIAAABIAAABIgCABIAAABIgBACIgBAAIAAACIgBAAIAAABIAAACIgCAAIAAACIAAABIgBABIAAACIgBABIgCAAIAAABIAAACIAAABIgBABIAAACIgBABIgBABIAAABIAAABIgBAAIAAACIAAACIgCAAIAAACIAAABIAAABIgBABIAAABIAAADIgBABIgCAAIAAACIAAABIgBAAIAAACIAAACIgBABIgBABIAAABIAAACIAAABIgBAAIAAACIAAACIAAACIgBABIgBAAIAAACIAAABIAAACIgCAAIAAACIAAACIAAABIAAABIgCABIAAABIAAADIAAABIAAABIgBAAIAAACIAAACIAAACIAAACIAAABIgCAAIAAABIAAACIAAACIAAACIAAACIAAAAIgBABIAAABIAAACIAAACIAAACIAAABIAAACIAAACIgBABIgBABIAAABIAAACIAAABIAAACIAAACIAAACIAAABIAAACIAAABIAAACIAAACIAAACIAAACIAAABIgCAAIAAABgAFMi7IAAACIAAACIAAABIAAACIAAABIAAACIAAACIAAABIgCABIAAABIAAACIACAAIAAABIABABIABACIABAAIAAABIABABIAAAAIACABIAAABIABAAIABACIACAAIAAACIABAAIABACIABAAIAAABIABAAIABABIABABIAAABIACABIAAABIACABIAAABIABAAIAAACIABAAIABABIACAAIAAgBIAAgCIAAgCIAAgCIAAgCIACAAIAAgBIAAgBIAAgCIAAgCIAAgCIAAgCIAAgBIAAgBIAAgDIABAAIAAgBIAAgCIAAgBIAAgCIAAgCIAAgCIAAgBIAAgCIAAgBIACAAIAAgCIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIABAAIAAgCIAAgBIAAgCIAAgBIAAgDIAAgBIAAgCIAAgBIAAgCIACAAIAAgCIAAgCIAAgBIAAgBIAAgCIAAgCIAAgCIAAgCIAAgBIAAgBIAAgCIgCAAIAAgCIAAgCIgBAAIAAgCIgBAAIgBgBIAAgCIgBAAIAAgCIAAgBIgCgBIAAgBIAAgBIgCgBIAAgBIAAgCIgCAAIAAgCIgBAAIAAgBIAAgCIgBAAIgBgBIAAgCIgCAAIAAgCIgBgBIAAgBIAAgBIgCAAIAAgCIgBAAIAAgBIAAgDIgCAAIAAADIAAABIAAACIAAABIgCAAIAAACIAAACIAAACIAAABIAAACIAAABIAAACIAAACIgBABIgBABIAAABIAAACIAAABIAAACIAAACIAAABIAAACIAAACIgCAAIAAACIAAACIAAABIAAABIAAACIAAACIAAACIAAACIAAABIgBAAIAAABIAAACIAAACIAAACIAAABIAAACIAAABIAAADIAAABIgBAAIAAACIAAABIAAACIAAACIAAACIAAABIAAACIAAABIgCAAIAAACgAB3k0IAABYIAAACIABAAIAAABIACAAIAAABIACAAIABABIABABIABABIAAABIACAAIABABIAAABIACAAIAAABIACABIAAABIACAAIABAAIAAABIABABIABACIABAAIAAABIADAAIABABIAAABIABAAIABABIABAAIABABIABABIABAAIAAACIACAAIABACIABAAIACAAIAAABIABABIAAABIABAAIABABIACAAIABABIABABIABAAIAAACIACAAIABABIAAABIABAAIABABIACAAIAAACIACAAIAAAAIABABIABABIABABIABABIAAABIACAAIACABIAAABIABAAIAAABIACAAIABAAIABACIABAAIABABIABABIAAACIACAAIABAAIAAABIACABIAAAAIABABIABABIACAAIABAAIABACIABAAIAAACIABAAIACAAIACAAIACAAIAAgCIACAAIABAAIABAAIADAAIAAgCIABAAIACAAIABAAIACAAIACAAIAAgCIACAAIABAAIACAAIABAAIAAgBIACAAIACAAIACAAIABAAIACAAIAAgBIABAAIACAAIACAAIACAAIAAgDIABAAIACAAIABAAIACAAIACAAIAAgBIACAAIABAAIACAAIACAAIAAgCIACAAIABAAIABAAIACAAIACAAIAAgBIACAAIACAAIABAAIABAAIAAgCIACAAIACAAIACAAIABAAIACAAIAAgCIACAAIACAAIABAAIACAAIAAgCIABAAIACAAIACAAIACAAIAAgBIAAgCIAAgBIAAgCIAAgCIAAgCIAAgBIABAAIAAgCIAAgBIAAgCIAAgCIAAgCIAAgBIAAgCIAAgBIACAAIAAgDIAAgBIAAgCIAAgBIAAgCIAAgCIAAgCIAAgBIAAgBIABAAIAAgCIAAgCIAAgCIAAgCIAAgBIAAgBIAAgCIAAgCIAAgCIACAAIAAgCIAAgBIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIACAAIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgCIAAgBIACAAIAAgCIAAgBIAAgDIAAgBIAAgCIAAgBIAAgCIAAgBIABAAIAAgDIAAgBIAAgCIAAgBIAAgCIAAgCIAAgCIAAgBIAAgBIACAAIAAgCIAAgCIAAgCIAAgCIAAgBIAAgCIAAgBIAAgCIAAgCIAAgCIgCAAIgBAAIAAgBIgBAAIgBgCIgCAAIAAgCIgBAAIgBgBIgBgBIAAgBIgBgBIgBAAIgBgBIAAgBIgCAAIAAgCIgCgBIAAgBIgBAAIgBgBIgBgBIAAgBIgCAAIgBAAIAAgBIgCgBIAAgBIgCAAIAAgCIgCAAIgBgBIAAgBIgBAAIgBgCIgBAAIgBgBIgCAAIgBAAIAAgBIgBgBIAAgCIgCAAIAAgBIgCAAIgCgBIAAgBIgBAAIgBgBIgBgBIAAgBIgBAAIgCAAIAAgBIgCAAIgCgBIAAgCIgBAAIgBAAIgBgBIgBgBIgBgBIgCAAIgBAAIAAgBIgCAAIgBgBIAAgBIgBAAIgBgCIgCAAIgBAAIgBgCIgBAAIgCAAIAAgBIgBAAIgCgBIAAgBIgCAAIgBAAIgBgBIgBAAIgBgBIgBgBIgBAAIgCgBIAAgBIgCAAIgBAAIgBgCIgBAAIgCAAIgBAAIAAgBIgDAAIgBAAIAAgCIgBAAIgCAAIAAACIgCAAIAAABIgCAAIgCAAIAAACIgBAAIAAABIgBABIgBABIgBABIgCAAIgBABIgBAAIAAABIgCABIgBAAIAAABIgCAAIAAACIgBAAIgBACIgBAAIgCAAIAAABIgCABIAAABIgBAAIAAABIgCABIgCAAIAAABIgBAAIgBACIgBABIgBAAIgBABIgBAAIAAABIgCABIgBABIgBAAIgBAAIgBABIgBABIAAABIgBAAIgCAAIAAACIgCABIgBABIgBAAIAAABIgBAAIgCAAIAAACIgBAAIgBABIgCABIgBAAIgBACIgBAAIAAABIgBABIgBABIgBAAIgBAAIgBABIgCABIAAABIgBAAIgCAAIAAABIgBABIgBACIgBAAIAAABIgCABIgCAAIAAAAIgBABIgBABIgBABIgBAAIgBABIgBAAIgBACIgBAAIAAACIgCAAIgBAAIAAABgAhxkrIAAABIABABIAAABIAAACIAAACIAAACIAAABIAAABIACABIAAABIAAACIAAACIAAABIAAACIAAABIACABIAAACIAAABIAAACIAAABIAAACIAAABIABABIABACIAAABIAAACIAAABIAAACIAAACIAAACIABAAIABABIAAACIAAABIAAACIAAACIAAACIAAAAIABABIAAACIAAABIAAACIAAACIAAABIABABIAAABIAAACIAAACIAAACIAAABIAAABIACABIABABIAAACIAAACIAAACIAAABIAAABIAAACIABABIAAABIAAACIAAABIAAACIAAABIAAADIACAAIAAABIAAACIAAABIAAACIAAACIAAACIABAAIAAABIAAACIAAABIAAACIAAACIAAACIABAAIABABIAAACIAAABIABAAIADAAIABAAIABABIAAABIACAAIACAAIACAAIABABIABABIABAAIACAAIABAAIACAAIACABIAAABIACAAIABAAIACAAIABAAIAAABIACAAIACAAIACAAIABAAIABAAIABACIACAAIACAAIABAAIABAAIAAABIACAAIACAAIACAAIACAAIAAABIABACIABAAIACAAIACAAIACAAIAAABIABAAIACAAIABAAIADAAIABABIAAAAIACAAIABAAIACAAIABABIABABIACAAIABAAIACAAIABAAIAAACIACAAIACAAIACAAIABAAIABAAIABACIABAAIACAAIABAAIACAAIAAgCIABAAIAAgCIACAAIAAgCIABAAIADAAIAAgBIABAAIAAgBIABAAIACAAIAAgDIACAAIAAgBIACAAIAAgCIACAAIABAAIAAgBIABAAIAAgCIACAAIAAgCIACAAIACAAIAAgCIACAAIAAgBIABAAIABAAIAAgCIACAAIAAgBIACAAIAAgCIACAAIABAAIAAgCIACAAIAAgCIACAAIACAAIAAgBIABAAIAAgCIACAAIAAgBIABAAIACAAIAAgCIACAAIAAgCIACAAIAAgCIABAAIACAAIAAgBIABAAIAAgCIACAAIACAAIAAgBIACAAIAAgDIABAAIAAgBIACAAIABAAIAAgCIADAAIAAgBIABAAIAAgCIACAAIABAAIAAgCIACAAIAAgCIABAAIADAAIAAgBIABAAIAAgBIABAAIAAgCIAAhYIAAAAIgBgBIgBAAIgCAAIgBgCIgBAAIAAgCIgCAAIgBAAIAAgBIgCAAIgBgBIAAgBIgCgBIgBAAIgBAAIgBgBIgBgBIgBAAIgBAAIgBgCIgCgBIAAgBIgCAAIgBAAIAAgBIgBgBIgBgBIgBAAIgCAAIAAgBIgCAAIgBgBIgBgBIgBAAIAAgCIgCAAIgBgBIAAgBIgCAAIgCAAIAAgCIgBAAIgBgBIgBAAIgBAAIgBgBIgCAAIgBgBIgBgCIgBAAIAAgBIgBAAIgCgBIAAgBIgBAAIgBgBIgCAAIgBgBIgBgBIgBAAIgBAAIAAgBIgCgBIAAgCIgCAAIgCAAIAAgBIgCAAIAAgBIgBgBIgBAAIAAgBIgDAAIgBgBIAAgBIgCAAIgBAAIAAgCIgBAAIgBgCIgBAAIgBAAIgBgBIgBgBIAAgBIgCAAIgBAAIAAgBIgCAAIgCgBIAAgBIgBgBIgBgBIgBAAIgCAAIgBAAIgCAAIgBABIgBABIgCAAIAAABIgBABIgCAAIAAABIgBAAIgDAAIAAABIgBABIgCAAIAAABIgBAAIgCAAIAAACIgCAAIgCAAIAAACIgBAAIgBAAIgBABIgBABIgBABIgBAAIgCAAIAAABIgCABIgBAAIAAABIgBAAIgBACIgBABIgCAAIgBABIgBAAIAAABIgBABIgCAAIAAABIgCAAIAAABIgCABIgBAAIgBABIgBAAIAAACIgBABIgCAAIAAABIgCAAIgBABIgBAAIAAACIgBAAIgBABIgBABIgBAAIgBACIgBAAIAAABIgCABIgBABIgBAAIAAABIgCABIgBAAIAAABIgBAAIgBABIgCABIAAACIgBAAIgBABIgBABIAAAAIgBABIAAABIgCABIAAABIgBAAIgBACIgCAAIAAACIgBAAIgBABIAAAAIgBACIgBAAIgBABIgBABIAAABIgCABIAAABIgCAAIgBAAIAAACgAAbl/IACAAIAAACIABAAIABAAIAAABIACAAIACABIAAABIACAAIAAACIABAAIABAAIABACIACAAIABAAIABABIABABIAAABIACAAIABAAIAAABIACAAIABABIABABIABAAIABACIABAAIABABIABABIABAAIAAABIACAAIACABIAAABIACAAIABAAIAAABIACAAIAAACIABAAIACAAIABACIABAAIABABIABABIABAAIAAABIACAAIABAAIAAACIADAAIABAAIAAABIABABIAAACIACAAIABAAIABABIACAAIAAACIACAAIABAAIAAABIABAAIACAAIAAACIACAAIAAABIACAAIACAAIABAAIAAgBIACAAIABAAIAAgCIACAAIAAgBIACAAIACAAIAAgCIABAAIAAgBIACAAIAAgDIACAAIABAAIAAgBIACAAIAAgCIAAgBIgCAAIAAgCIgBAAIgCAAIAAgCIgCAAIgBAAIAAgCIgCAAIAAgBIgCAAIgBgBIgBgBIgBAAIgCAAIAAgBIgBgBIAAgBIgCAAIgBgBIgBgBIgCAAIgBAAIgBgCIgBAAIAAgBIgBAAIgCAAIAAgCIgCAAIAAgBIgCAAIgBgBIgBgBIgBAAIgBgBIAAgBIgDAAIAAgCIgBAAIgCAAIAAgBIgBAAIgBAAIgBgCIgBAAIAAgCIgDAAIgBAAIAAgBIgCAAIAAgCIgBAAIAAgBIABAAIAAgCIgBAAIgCAAIgCAAIgCAAIgBAAIAAACIgCAAIgBAAIgCAAIgCAAIgCAAIgBAAIAAABIgCAAIgBAAIgCAAIgCAAIgCAAIAAACIgBAAIgCAAIgCAAIgCAAIAAABIgBAAIgBAAIgCAAIAAACg");
	this.shape.setTransform(42.9,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,-42.9,85.8,85.8), null);


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
	this.shape.graphics.rf(["rgba(255,255,255,0)","#D7E513"],[0,1],16.5,7.9,0,16.5,7.9,61).s().p("AjjFpIgBAAIgBgBIgBAAIgCAAIgBAAIAAgBIgCAAIAAgBIgBAAIgCgBIgBgBIgBAAIAAgBIgBgCIgBABIAAgCIgBAAIgBgBIAAgBIgBgCIgBgBIAAgBIgBgBIAAgBIgFgeIAAgDIgCgQIgBgCIgBgFIAAgCIgBABIgCAAIgBAAIgCAAIAAgBIgCAAIgBAAIgCABIgBAAIgBAAIgBgBIgBAAIgCAAIgBAAIAAgCIgCABIgCAAIAAgCIgBABIgCAAIAAgCIgCABIgBgBIAAgBIgCABIAAgBIgCAAIgBgBIAAgBIgBAAIgBgBIgBAAIgBgBIgBAAIgBgCIgBAAIAAgBIgBAAIgBgBIAAgCIgCAAIAAgBIgBAAIgBgBIAAgBIgBAAIgBgCIgBAAIAAgBIgBgCIAAgBIgBAAIgBgBIAAgCIgBAAIgBgBIAAgCIAAgBIAAgBIgBgCIgBAAIAAgBIgBgCIAAgCIAAgBIAAgCIgBgBIgBgJIAAgCIgCgJIAAgBIgBgIIAAgCIgCgJIAAgBIgCgNIAAgCIgCgMIgBgCIgCgNIAAgCIgCgMIAAgBIgCgOIAAgBIgCgMIgBgCIgCgNIAAgCIgCgNIAAgCIgCgMIgBgBIgCgOIAAgCIgCgLIAAgCIgCgOIAAgBIgCgMIgBgBIgCgPIAAgBIgBgIIgBgBIgBgJIAAgCIgCgHIAAgCIgBgLIgBgBIgCgNIAAgCIgCgLIAAgBIgBgIIAAgBIgCgJIAAgCIgCgJIAAgBIgCgOIAAgCIgCgKIAAgBIgBgHIAAgBIgBgBIAAgCIAAgCIAAgBIgBgCIAAgBIACAAIAAgBIgBgCIAAgCIAAgBIABgBIAAgBIAAgBIAAgCIABAAIAAgBIAAgCIABgBIAAgBIAAgCIABAAIAAgBIAAgBIABgBIAAgBIABgBIAAgBIAAgBIABgBIABgBIABAAIAAgBIABgBIAAgCIABAAIABgCIAAAAIACAAIAAgCIABAAIABgBIABAAIAAgCIABAAIABAAIABgCIABAAIABgBIAAgBIABAAIACgBIAAgBIABAAIACgBIABAAIACAAIgBgBIACAAIABgBIACAAIABAAIACAAIABgBIACAAIAAgCIABAAIgDgVIgBgCIgDgTIAAgCIgCgLIAAgBIAAgCIAAgBIAAgBIABAAIAAgCIAAgCIgBgBIACAAIAAgBIAAgCIABAAIAAgCIABAAIAAgCIACAAIAAgCIABAAIAAgBIABgBIABAAIAAgBIACAAIABAAIACgBIAAgBIABAAIACgBIABAAIACgBIABABIAAABIACAAIABAAIACAAIAAABIABAAIACAAIABABIABAAIAAABIABAAIABABIABAAIABABIAAACIABAAQABAAAAABIAAACIABAAIABABIAAACIAAABIAAABIABACIAAAEIABACIAAABIAAACIACALIAAABIACALIAAABIABAIIAAABIADAOIABAAIABAAIABABIABAAIACAAIABAAIACgBIABAAIACAAIABAAIABABIABAAIACAAIABgBIAAACIACAAIABgBIABACIABAAIACgBIAAABIABAAIABAAIABABIACAAIABAAIAAABIABAAIABACIABAAIABACIABgBIAAACIACAAIAAABIABAAIABABIABAAIABABIABAAIAAABIABABIABABIAAACIABAAIABABIAAABIACAAIAAABIAAACIABAAIABABIAAACIACAAIAAABIAAACIABABIAAABIABAAIABABIAAACIAAACIAAABIAAABIABACIAAABIAAACIAAACIABAEIAAABIABAFIAAABIABAHIABABIAAAGIABACIABAFIAAACIABAEIAAACIACAOIAAABIABAGIAAACIABAEIAAACIABAGIABABIABAHIAAABIABAGIAAACIABAGIAAABIABAEIAAACIABAGIAAABIACAJIAAACIABAHIAAACIABAFIAAABIABADIAAACIABAEIAAABIABAGIAAABIACAJIAAACIAAADIABACIAAAEIABABIABAGIAAACIABAFIAAABIAAADIABABIABAJIAAACIABAGIAAABIABAFIAAABIABAHIABABIAAAGIABACIAAADIAAABIACAJIAAACIABAEIAAACIABAGIAAABIABAHIAAABIACAKIAAACIABADIAAACIABACIAAACIABAGIAAACIABAGIAAABIABADIAAABIABAFIAAACIAAACIABACIAAAEIABACIABAGIAAABIAAAFIABACIABAFIAAACIABAGIAAACIABADIAAABIABAIIAAABIABAGIAAACIABACIAAABIAAABIAAACIABACIAAABIAAACIgBAAIAAABIAAACIAAABIgBAAIAAACIAAACIgBAAIAAABIAAACIABABIgCAAIAAACIgBABIAAABIAAACIgBAAIAAABIgCAAIABACIgCAAIAAABIgBABIAAACIgBAAIAAABIgCABIABABIgCAAIAAABIgBAAIAAACIgBAAIgCAAIAAACIgBABIAAABIgBAAIgCABIAAABIgBAAIgCAAIABACIgCAAIgBAAIgCAAIAAACIgBABIgCAAIgBAAIgCAAIgBABIAAABIgBAAIgCABIgBAAIgCAAIgBAAIAAABIAAACIACAMIAAACIABACIAAACIABAJIABABIAAAEIAAABIACAOIABACIABAFIAAACIAAACIAAABIABACIgCAAIAAABIABABIgCABIAAACIABABIgCAAIAAACIgBAAIAAABIgBAAIAAACIgCAAIgBAAIAAACIgCABIgBAAIAAABIgCABIgBAAIgCAAIgBAAIgCABIgBAAgAkMD2IABAAIACABIAAAAIABAAIACAAIABAAIAmgGIACAAIABAAIABgCIABAAIABgBIAAgBIABAAIACgBIAAgBIAAgBIABAAIAAgCIgBgCIAAgCIgCgLIAAgBIgTh6IAAgBIgShwIAAgCIgNhRIgBgCIgHgrIAAgCIAAgBIAAgBIgBgCIAAgBIgBgBIgBgBIgBAAIAAgBIgBgBIgBgBIgBABIgCAAIAAgCIgCABIgBAAIgmAGIgCAAIgBABIAAABIgBAAIgCABIgBAAIAAABIgCAAIAAACIgBAAIAAACIAAABIgBABIAAABIAAABIABACIAAABIABAGIAAACIACAKIAAACIACANIAAACIACAJIAAACIACAJIAAABIABAIIAAABIACALIAAACIACANIABACIABAKIAAACIACAHIAAABIABAKIABABIABAJIAAABIACAOIABABIACALIAAADIACANIAAABIACANIAAABIACANIABACIACAMIAAACIACANIAAACIACANIABACIACAMIAAACIACANIAAABIACANIAAABIACANIABACIACAMIAAABIACAOIAAACIACAJIAAABIABAIIAAABIACAJIAAACIACAKIAAACIAAACIACAAIAAABIAAABIACAAIAAABIABAAIABABgAFBERIAAgBIgCAAIgBAAIgBgBIgBAAIgBAAIgBgBIgBAAIgBgBIgBAAIAAgBIgBgBIgBgBIAAgCIgCABIAAgCIAAgBIgCAAIAAgBIAAgCIgBgCIAAgBIgBgGIAAgCIgCgNIAAgCIgBgDIAAgBIgCgKIAAgBIAAgDIAAgBIgCgNIgBgBIgBgJIAAgBIgCAAIgBAAIgCABIgBAAIgCAAIgBAAIgBgBIgBAAIgCAAIgBABIgCgBIAAgBIgCABIgBAAIgBgBIgBAAIgBAAIgBgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBAAIgCgBIgBAAIgBAAIgBgBIgBgBIgBAAIAAgBIgCAAIAAgCIgBABIgCgBIAAgBIgCAAIAAAAIgBgBIgBgBIAAgBIgBAAIAAgCIgCAAIgBgBIgBAAIAAgBIAAgCIgCAAIAAgBIgBAAIgBgBIAAgBIgBgBIgBgBIAAgCIgBgBIgBAAIAAgBIgBgBIAAgCIgBAAIgBgCIAAgCIAAgBIAAgBIAAgBIgBgCIAAgCIAAgCIgBgFIAAgCIgBgDIAAgBIgBgHIAAgBIgBgGIgBgCIAAgEIAAgBIgBgGIgBgCIAAgFIgBgBIAAgDIAAgBIgBgFIAAgBIgBgDIAAgCIgBgGIAAgBIgBgGIAAgCIgBgDIAAgCIgBgCIAAgCIgCgKIAAgCIgBgGIAAgBIgBgGIAAgCIgBgFIAAgBIgCgKIAAAAIAAgDIgBgDIAAgFIgBgCIgBgGIAAAAIgBgFIAAgCIgBgGIAAgBIgBgJIgBgCIAAgCIAAgCIgBgEIAAgCIgBgGIgBgCIAAgEIgBgCIAAgDIAAgBIgCgJIAAgCIgBgGIAAgBIgBgFIAAgBIgBgDIAAgCIgBgFIAAgBIgBgIIAAgBIgCgJIAAgBIgBgHIAAgBIgBgFIAAgBIgBgGIAAgCIgBgFIAAgCIgBgGIgBgBIgBgHIAAgBIgBgFIAAgCIgBgFIAAgCIgCgNIAAgCIgBgFIAAgBIgBgGIgBgCIAAgFIgBgCIAAgCIAAgBIAAgBIgBgCIAAgBIAAgCIAAgCIAAgBIABAAIAAgBIgBgCIAAgBIACgBIgBgCIAAgBIAAgBIABgBIAAgBIABgBIAAgBIAAgCIACAAIAAgBIAAgBIABgBIAAgBIACAAIgBgCIAAgBIABgBIAAgBIACgBIAAgBIABgBIAAAAIABgBIAAgBIABgBIACAAIAAgBIABgBIAAgCIACAAIABAAIgBgBIACgBIAAgBIABAAIACAAIABAAIAAgCIACAAIABAAIABgDIABAAIABAAIACAAIABAAIAAgBIABgBIACAAIABgBIACAAIABAAIACAAIABAAIAAgFIgBgCIAAgEIAAgBIgCgIIAAgBIgCgPIAAgBIgCgIIAAAAIgBgLIgBgCIgBgHIAAgCIAAgCIgBgBIAAgCIAAgBIABAAIAAgBIAAgCIAAgBIABgBIABgBQgBAAABgBIAAgBIACgBIAAgBIABAAIAAgBIABgBIABgBIABgBIABAAIACAAIgBgCIACAAIABAAIACAAIABgBIACAAIABAAIACAAIABAAIABABIABAAIABAAIABABIABAAIABAAIABABIABAAIABACIABAAIAAABIACAAIAAABIAAABIACABQAAAAAAAAIAAACIABABIABABIAAABIABACIAAABIAAABIAAACIADATIABADIAEAZIAAACIACAOIACAAIABAAIACgBIABAAIACAAIABAAIABABIABAAIACAAIABAAIACgBIAAACIABAAIACgBIABABIABABIABgBIABAAIABACIABAAIABAAIABABIACAAIABAAIAAABIACAAIAAABIABAAIABABIABABIABAAIABAAIAAACIACgBIAAACIABAAIABACIABAAIABABIABAAIABABIAAABIABAAIAAACIABAAIABABIABACIABAAIAAABIAAACIABAAIABABIABABIAAABIABABIAAABIAAACIABABIAAABIABAAIABABIAAACIABABIAAACIAAACIAAABIABABIACAOIAAACIABAJIABACIABAIIAAABIABAIIABABIABALIABACIACAOIAAABIACAKIAAACIABAHIAAACIACAJIAAACIABAJIABABIACAOIAAABIACAMIAAACIACAOIABABIACAMIAAABIACAOIAAACIACALIAAACIACAOIABABIACANIAAACIACALIAAACIACAOIABABIACAMIAAABIACAOIAAABIACAMIAAACIADANIAAACIACAMIAAACIACANIAAABIABAEIAAABIAAABIABACIAAABIAAADIgCAAIAAABIAAACIABABIAAACIAAACIgBAAIAAABIABACIAAABIgCAAIAAACIAAABIgBAAIABACIAAACIgCAAIAAABIgBAAIAAACIABABIgCABIAAACIgCAAIABABIgCAAIAAACIgBAAIAAABIgBAAIAAACIgCAAIAAACIgBAAIAAACIgBAAIgCAAIAAACIgBAAIAAABIgBAAIgCABIAAABIgBAAIgCABIABACIgCAAIgBAAIgCAAIAAACIgBAAIgCAAIgBABIgCAAIgBAAIAAABIgBAAIgCAAIgBABIgCAAIgBAAIAAACIACAPIABABIACARIAAACIAFAeIAAACIABABIAAABIgCAAIABACIAAABIAAACIgBABIAAABIgCAAIABABIAAACIgCAAIABACIgCAAIgBAAIAAACIgCAAIABACIgCAAIgBAAIgCABIAAABIgBAAIgCAAIgBAAIgCABIgBAAIgCAAIgBAAgAEaCXIABABIABgBIACAAIABAAIACAAIAlgGIACgBIABAAIABgBIABgBIABAAIABgCIAAAAIABgBIABgBIAAgBIAAgBIABgBIAAgBIgBgCIAAgDIAAgBIgDgOIAAgCIgCgLIAAgCIgCgOIAAgBIgCgMIgBgBIgCgOIAAgBIgCgMIAAgCIgCgNIAAgCIgCgMIgBgCIgCgNIAAgBIgCgOIAAgBIgCgMIgBgCIgCgNIAAgBIgCgNIAAgBIgCgNIAAgCIgCgNIgBgBIgCgNIAAgCIgBgJIgBgCIgBgJIAAgBIgCgIIAAgBIgBgKIgBgCIgCgOIAAgBIgCgLIAAgBIgBgIIAAgBIgCgJIAAgCIgCgJIAAgCIgCgNIAAgBIAAgCIgBgCIAAgBIgBAAIgBgCIgBAAIAAAAIgBgBIgBgBIgBAAIgBgBIgBAAIgCAAIgBABIgmAFIgBAAIgCABIgBAAIgCAAIAAACIgBAAIgCABIABABIgCAAIAAACIgBAAIAAABIAAACIABACIAAABIAAACIAQBjIAAABIAOBaIAAABIANBQIABACIALBKIABACIAAABIAAABIABAAIABABIAAACIABAAIABABIABgBIABACgABzCiIgBgBIgBAAIgCAAIAAgBIgBABIgBgBIgBgCIgBABIgBgBIgBgBIgBgBIgBAAIAAgBIgBgBIgBAAIAAgCIgBgBIgBAAIAAgCIgBgBIAAgCIAAgBIAAgBIgBgCIgBgMIgBgCIgBgGIAAgBIgCgMIAAgBIgCAAIgBAAIgCAAIgBABIAAgCIgCAAIgBABIgCAAIgBAAIgCAAIAAgBIgBAAIgCAAIgBAAIgBgBIgBAAIgCAAIgBAAIAAgBIgCAAIgBAAIgBgBIgBgBIAAgBIgCABIgBgBIgBgBIgBAAIgBAAIgBgBIAAgBIgCAAIAAgBIgBAAIgBgBIgBAAIgBgCIgBAAIAAgBIgCgBIAAAAIgBgBIgBgBIAAgBIgBAAIgBgBIAAgBIgBgBIgBgBIAAgCIgBAAIgBgBIAAgBIgBgBIgBAAIAAgCIAAgCIAAgBIgCgBIAAAAIgBgBIAAgCIAAgBIAAgCIgBgCIAAgBIAAgCIgBgEIAAgCIgCgJIAAgBIAAgDIgBgCIgCgOIAAgBIgBgFIAAgBIgCgMIAAgBIAAgEIgBgBIgBgHIAAgBIAAgCIgCgHIAAgCIgBgHIAAgCIgBgCIAAgCIgCgNIAAgBIgBgEIAAgCIgBgDIAAgBIgBgJIAAgCIgCgHIAAgCIgBgFIAAgBIgBgIIAAgBIgCgIIAAgBIAAgEIgBgCIAAgDIAAgBIgBgCIAAgBIAAgCIAAgCIgBgBIAAgBIAAgCIACAAIAAgCIgBgCIAAgBIAAgBIABAAIAAgCIgBgBIABgCIABgBIAAgBIAAgBIABgBIAAgBIACAAIgBgCIAAgBIABAAIAAgDIACAAIAAgBIgBgCIABAAIABgBIABAAIAAgCIABAAIAAgCIACAAIgBgCIABAAIACgBIAAAAIABAAIABgCIABgBIABAAIAAgBIACgBIgBgBIACgBIABAAIAAgBIACgBIABAAIACAAIAAgBIABgBIABAAIACAAIAAgBIABgBIACAAIABAAIACAAIABgBIACAAIABgBIACAAIgCgMIAAgBIgCgMIgBgCIAAgBIgBgIIAAgBIgBgCIAAgBIAAgBIAAgCIABAAIAAgCIAAgCIAAgBIABAAIAAgBIAAgCIABAAIAAgBIABgBIABgCIABAAIABAAIAAgCIABAAIABgBIABAAIABgBIACAAIAAgBIABgBIABAAIACAAIABAAIACAAIABAAIABABIABAAIACgBIABAAIAAACIACgBIAAACIACAAIABgBIAAABIACABIAAABIAAABIACAAIAAABIACAAIAAACIAAACIAAABIABAAIABABIAAABIAAACIABACIAAABIACANIAAACIACAOIABABIABAGIABAAIACAAIABAAIACgBIABAAIACAAIABAAIAAABIACAAIABAAIACgBIABABIABABIACAAIABgBIABABIABABIABgBIABABIABABIABgBIAAABIACAAIABAAIABACIABAAIABABIABgBIABABIABACIABgBIABABIABABIABABIABAAIAAABIABABIABAAIAAABIABAAIABACIABAAIABABIAAACIABAAIABABIAAACIACAAIAAAAIAAACIABAAIABABIAAACIABAAIABACIAAABIAAABIAAACIABAAIABABIAAACIABACIAAABIAAABIAAACIABABIAAACIACANIAAACIACAMIAAACIADANIAAABIADASIAAADIAAADIABAAIABAJIAAACIABAGIAAACIABAGIABACIACALIAAACIABAGIAAABIACAOIABACIABAKIABACIAAAGIABACIACANIAAACIABAEIAAACIAAABIABACIAAABIAAACIAAACIABABIgCAAIAAACIABABIAAABIAAACIgCAAIABACIAAABIAAACIgBAAIAAABIAAACIgBAAIAAABIAAACIgBABIAAABIgCAAIABACIAAABIgCAAIABACIgCAAIAAACIgBAAIAAACIgBAAIAAABIgCAAIABACIgCAAIAAABIgBABIAAACIgCAAIgBAAIAAACIgCAAIgBAAIABABIgCAAIgBABIAAABIgCAAIgBABIAAABIgCAAIgBAAIgCABIAAACIgBAAIgCAAIgBAAIgCABIgBAAIAAABIgCABIgBAAIgCAAIgBAAIAAABIABAFIAAACIAEAUIAAACIABAHIAAACIAAACIABABIgCABIAAABIABABIAAACIgCAAIABACIAAABIgCABIABACIgCAAIAAAAIgBABIAAACIgBAAIgCAAIAAABIgBAAIgCABIABACIgCAAIgBABIgCAAIgBAAIgCAAIgBAAIgCABIgBgBgABSBDIABACIABgBIACAAIABAAIAmgGIABAAIACAAIAAgCIABAAIACgBIAAgBIABAAIAAgCIACAAIgBgBIABAAIAAgCIAAgCIAAgBIgDgOIAAgBIgCgRIgBgBIgCgNIAAgBIgDgVIgBgCIAAgCIgDgVIAAgBIgDgSIgBgBIgBgKIAAgCIgEgZIgBgCIgCgOIAAgCIgBgDIAAgCIAAgBIAAgBIgBgCIgBAAIAAgCIAAgBIgCAAIAAgBIgCAAIgBAAIgBgBIgBAAIgCAAIgBAAIgmAHIgBAAIgCAAIgBABIgCAAIgBAAIAAABIgBAAIAAACIgCAAIABACIAAACIgCAAIABABIAAABIAAACIAAABIAGAjIAAABIAGAjIAAACIADAXIABABIADAXIABACIADAWIABACIAEAZIAAACIAAACIAAABIABAAIABABIABAAIABABIABAAIABACIABgBIABAAgAhPB3IgBgBIgCAAIgBABIAAgCIgCAAIgBAAIgBgBIgBAAIAAgBIgBAAIgBgCIgBAAIgBgBIAAgCIgBAAIgBgBIAAgBIAAgBIgCAAIAAgCIAAgCIgBgBIgCgPIAAgCIgCgJIAAgBIgBAAIgBAAIgBgBIgCAAIgBAAIgCAAIgBAAIgCAAIgBABIAAgBIgCAAIgBAAIgCAAIgBAAIgBgBIgBAAIgBABIgBgBIgBAAIgBgBIgBgBIgCAAIgBABIAAgBIgBgBIgBgCIgCABIgBAAIAAgBIgBgBQgBAAAAgBIgBAAIgBgBIgBgBQAAABAAgBIgCAAIAAgBIgBgBQgBAAAAAAIAAgCIgCAAIAAgCIgBAAIgBgBIAAgBIgBAAIgBgBIgBgBIAAgBIgBgBIgBAAIAAgCIgBgBIAAgCIgBAAIgBgBIAAgBIAAgCIAAgCIgCAAIAAgBIAAgBIAAgCIgBgBIAAgBIAAgCIAAgCIgCgHIAAgCIgBgFIAAgCIgCgJIAAgCIgBgIIAAgCIgCgLIgBgBIgBgIIAAgCIgCgOIAAgBIgCgMIgBgCIAAgEIgBgBIgCgOIAAgCIgCgNIAAgCIgBgEIAAgCIgBgGIAAgBIgDgOIAAgCIgBgEIAAgBIgCgNIAAgBIgBgIIAAgBIgCgJIAAgBIgCgMIAAgCIgBgDIAAgBIgBgJIgBgCIgBgJIAAgBIgCgNIAAgBIgBgGIgBgCIgBgGIAAgBIgCgMIAAgCIgBgGIAAgCIAAgBIgBgBIAAgCIAAgCIAAgBIgBgBIAAgBIACgBIgBgCIAAgCIAAgBIAAgBIABgBIAAgBIAAgBIABgBIAAgBIAAgCIABAAIAAgCIAAgBIABgBIAAgBIAAgBIABAAIAAgBIACgBIgBgCIACAAIAAgCIAAAAIABgBIAAgBIABgBIAAgBIABAAIACgBIAAgCIABAAIAAgBIABgBIABgBIABAAIABAAIAAgBIABgBIABgBIABgBIABAAIACgBIgBgBIACAAIABgBIABgBIABAAIABAAIACAAIABgBIAAgBIABAAIACgBIABAAIACAAIABAAIACAAIABgBIgBgGIAAgBIgCgPIAAgBIgBgEIAAgCIAAgCIgBgBIABgBIABAAIgBgBIAAgCIABgCIAAAAIAAgCIABgBIAAAAIABgBIABgBIAAgBIABgBIAAgBIABgBIACAAIAAgBIABgBIACAAIABgBIAAgBIACAAIABAAIACAAIABgBIACAAIABAAIAAABIACAAIABAAIACAAIAAABIABAAIACAAIABABIABAAIAAABIABAAIABABIABABIAAABIAAACIACAAIABABIAAABIABAAIABABIAAACIAAACIAAACIABABIAAABIAAABIACAPIAAABIACAJIABAAIACAAIABgBIACAAIABAAIACAAIABgBIABACIABAAIACgBIABAAIABAAIABABIABAAIACAAIABAAIABABIABgBIABAAIABACIABgBIABACIABAAIABAAIABABIABAAIABACIABAAIABAAIABABIABAAIABABIABAAIAAABIABABIABAAIABAAIABABIAAACIACAAIAAACIABAAIABABIAAABIABAAIABABIABAAIAAABIAAACIACAAIAAABIAAACIABACIABAAIAAABIABABIAAABIAAACIACAAIAAACIAAABIAAACIABABIAAABIAAACIAAACIABABIABAGIAAACIAAADIAAABIABACIACANIAAACIAAABIABACIABAJIAAABIABAGIAAACIABABIACANIAAABIABAJIABABIAAADIAAACIACAMIAAABIABACIABAHIAAACIABAJIABABIAAAEIAAABIACAIIAAABIACAOIAAABIABAGIAAACIACALIAAABIABADIAAABIACALIAAACIABAFIAAACIABAHIABACIABALIABABIABAGIAAACIACALIAAACIAAABIABAIIABABIABAJIAAADIABAHIABACIAAAEIABABIACAMIAAABIAAACIAAABIABABIAAACIAAACIAAABIAAACIABABIAAABIgCAAIABACIAAACIAAABIgBABIAAABIAAABIAAACIgBAAIAAABIAAACIgBABIAAABIAAABIgBAAIAAACIgBAAIAAACIAAACIgBAAIAAABIgCABIABABIgCAAIAAABIgBABIAAABIgBAAIAAADIgCAAIAAABIgBAAIgCABIABACIgCAAIAAAAIgBAAIgCABIABACIgCAAIgBAAIAAACIgCAAIgBAAIAAACIgBAAIgCABIgBAAIAAAAIgCABIgBAAIgCAAIgBAAIgCABIgBAAIgCAAIABACIgCAAIgBABIAAABIAAADIABACIACAMIAAACIABAHIAAACIAAABIABACIAAABIgCAAIABABIAAACIgCABIAAABIAAACIgBAAIABABIgCAAIAAACIgBAAIAAABIgCABIAAACIgBAAIgCAAIgBAAIABACIgCAAIgBAAIgCAAIgBABIgCAAIgBAAIgCAAIgBAAIAAAAgAhuAjIABAAIAAABIACAAIABAAIAmgHIACAAIABAAIAAgBIACgBIABAAIABgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIAAgBIACgBIAAgBIABgBIAAgBIAAgBIgBgCIAAgBIgEgWIAAgBIgGglIAAgBIgEgaIAAgBIgGgjIAAgBIgDgXIgBgCIgDgXIAAgBIgIgxIgBgCIgCgPIAAgBIgDgTIAAgBIgDgUIgBgCIAAgBIAAgBIAAgCIgBABIgBgCIAAgCIgCAAIAAgBIgCAAIgBAAIAAgBIgCAAIgBAAIgCABIgmAGIgBAAIgCAAIgBAAIgCAAIAAACIgBAAIgCAAIABACIgCAAIAAACIABACIgCAAIAAABIABABIAAACIAAABIAAACIACANIABACIADASIAAACIABAHIAAACIAEAYIAAABIACANIAAABIAFAcIAAACIACAMIAAACIACAJIAAACIADAQIAAACIABAJIABABIACAOIAAABIADARIAAABIADASIAAACIACAPIABABIADATIAAABIADAUIAAABIABACIAAACIAAABIAAABIABABIABABIAAABIABABIABABIABAAIABABIABAAIACAAg");
	this.shape.setTransform(37.575,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(0,-36,75.2,72.1), null);


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
	this.shape.graphics.rf(["rgba(255,255,255,0)","#D7E513"],[0,1],25,12.1,0,25,12.1,65.9).s().p("AAUF8IgBAAIgBgBIgBABIgBAAIgCAAIgBAAIAAAAIgBAAIgBAAIgBAAIgCAAIgBgBIgBABIgBAAIgBAAIAAgBIgCABIgBgBIgBABIAAgBIgBABIgBgBIgBABIgBgBIgBABIgBAAIgBAAIgCgBIgBABIgBgBIgBABIgBAAIgBAAIAAgBIgCABIAAgBIgCABIgBgBIgBABIgBgBIgBAAIgBAAIgBABIgBgBIgBABIgCgBIgBgBIgBABIgBgBIAAABIgBgBIgCABIAAgBIgCABIgBgBIgBABIgBgBIgBAAIgBAAIgBAAIgBAAIgBgBIgBABIgCgBIAAABIgBgBIgBgBIgBABIgBgBIgBABIgCgBIgBABIgBgBIgBABIgBgBIgBgBIgBABIAAgBIgBABIgCgBIgBgCIgBACIgBgBIgBAAIgBAAIgBABIgBgBIgCgBIgBAAIgBAAIgBAAIgBAAIAAgCIgBABIgBgBIgBABIgCgBIgBgBIgBABIgBgBIgBABIgBgBIgBgBIgBABIgBgBIgBAAIgBAAIgCgBIAAABIgBgBIgBgBIgBABIgBgBIgCABIgBAAIgBgBIgBAAIgBAAIAAgBIgCAAIgBgBIgBgBIgBAAIgBAAIgBgBIgBABIgBgBIgBAAIgBAAIgBgBIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBIgBAAIgBAAIgBAAIAAgBIgBABIgBgBIgBgBIgCABIgBgBIgBgBIgBAAIgBAAIAAgCIgCABIgBAAIgBgCIgCgBIAAABIgBgBIgBgBIgBAAIgBAAIgBgBIgBAAIgCAAIgBgBIgBAAIgBAAIgBgBIAAgBIgCABIAAgBIgBgBIgCAAIgBAAIgBgBIgBgBIgBAAIgBgBIgBAAIgBgCIgCABIgBgBIgBAAIgBAAIgBAAIAAgBIgBgBIgBAAIgBAAIgCgCIgBgBIgBABIgBgBIgBgBIgBgBIAAABIgCgBIgBgBIgBgBIgBAAQAAABAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIgBgBIgBgBIgBgBIgBABIgBgBIgCgBIAAgCIgCgBIgBABIgBgBIAAgBIgBgBIgBABIgBgBIgCgBIgBAAIgBgBIgBAAIgBAAIgBgBIgBgBIgBgCIgCgBIgBABIAAgBIgCgBIgBgBIAAgBIgBAAIgBAAIgBgBIgCgBIgBgBIgBgCIgBgBIgBABIAAgBIgBgBIgCgBIAAgBIgCAAIgBgBIgBABIgBgCIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBABIgBgBIgBgBIgBgBIgBgBIgBgCIgCgBIgBgBIgBgBIgBgBIgBABIAAgBIgBgBIgBgBIgBgBIgCgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgCIgBgBIgBgBIgBgBIgBAAIgBgCIgBgBIgBgBIgCgBIgBgBIgBgBIgBgBIgBgBIAAgBIgBgBIgBgBIgCgBIgBgCIgBgBIgBgBIgBgBIgBAAIgBgCIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgCgCIAAAAIABgBIgBgBIgBgBIgBgCIgBgBIgCgBIgBgBIgBgBIgBgBIgBAAIABgBIgBgCIAAgBIgBgBIgCgBIAAgBIgCgBIgBgBIgBgBIABgBIgBgBIgBgCIgBgBIgBgBIgBAAIgBgBIABgBIgBgBIgBgBIgCgCIAAgBIgCgBIgBgBIABgBIgBgBIAAgBIgBgBIgBgBIABgBIgBgBIgBgCIgCgBIgBAAIgBgBIACgBIgCgBIAAgCIgCgBIAAgBIAAgBIAAgBIgBgBIgBgBIABgBIgBgCIgBgBIgCgBIgBgBIABAAIgBgBIgBgBIgBgBIgBgBIABgCIgBgBIgBgBIgBgBIABgBIgBgBIgBgBIgBgBIABgBIgBgBIgBgCIgBgBIABAAIgBgBIgBgBIgBgBIABgBIgCgCIAAgBIABgBIgBgBIgBgBIgBgBIABgBIgBgBIgBgBIgBgBIABgBIgBgBIgBgBIABgBIgBgBIgBgBIgBgBIABgBIgCgCIgBgBIABgBIgBgBIAAgBIABgBIgBgBIgBgBIABgBIgBgBIgBgBIgBgBIABgBIgBgBIgBgBIABgBIgBgCIgBgBIABgBIgCgBIgBAAIABgBIgBgBIgBgBIABgBIgBgCIgBgBIABgBIgBgBIAAgBIAAgBIAAgBIABgBIgBgBIgBgBIABgBIgBgBIgBgBIABgBIgBgBIgBgBIABgBIgBgCIgCgBIACgBIgCgBIACgBIgCgBIgBgBIABgBIgBgBIABgBIgBgBIgBgCIABAAIgBgBIgBgBIABgBIAAgBIAAgCIgBgBIgBgBIABgBIgBAAIABgBIgBgBIAAgBIAAgBIAAgCIAAgBIAAgBIgBgBIABgBIgBgBIABgBIgBgBIABgCIgBgBIgCgBIACgBIgBgBIABAAIgBgCIgCgBIACgBIgBgBIABgBIgBgBIABgBIgBgBIABgBIgBgBIgCgBIACgBIgCgCIACgBIgCAAIACgBIgCgBIgBgBIACgBIgBgBIAAgCIgBgBIABgBIAAgBIABgBIgCgBIABgBIgBgBIABgBIgBgCIgBAAIABgBIgBgCIABAAIgBgBIACgBIgBgBIABgCIgBgBIABgBIgBgBIABgBIgBAAIABgBIgBgBIABgBIgCgCIABgCIAAAAIABgBIgCgBIABAAIgBgBIACgBIgBgCIABgBIgBgBIABgBIgBAAIABgBIgBgBIABgBIgBgBIABgCIgBgBIABgBIgBgBIABgBIgBgBIABgBIgBgBIABgBIgBgBIABgCIgBgBIABAAIgBgBIABgBIABgBIgBgBIABgCIgBgBIABgBIgBgBIABgBIgBgBIABgBIgBgBIACgBIgCgBIACgBIABgBIgBgBIABgBIgBgBIABgBIgBgBIABgCIABgBIgBgBIABAAIgCgBIABgCIgBgBIACgBIgBgBIABgBIABgBIgBgBIABgBIgBgBIABgBIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIABgBIABgBIgBgBIABgBIgBgCIABgBIABgBIgBgBIABgBIgBgBIABgBIABgBIgBgBIABgBIgCgBIACgBIABgBIgBgBIABgBIABgBIgBgBIABgBIgBgBIABgBIABgCIgBgBIABAAIgBgBIABgCIACgBIgBgBIABgBIAAgBIAAgBIAAgBIABgBIgBgBIABgBIABgBIgBgBIABgBIgBgBIABgBIACgBIgCgBIABgBIABgBIAAgBIABgCIABgBIgBgBIABgBIABgBIgBgBIABgBIABgBIgBgBIABgBIABgBIgBgBIABgBIABgBIABgBIgBgBIABgBIABgCIgBgBIABAAIABgCIgBAAIABgBIACgBIgCgBIACgBIABgCIABgBIgBgBIABgBIABgBIgBgBIABgBIABgBIABgBIgBgBIABgCIABgBIABgBIgBAAIABgBIABgBIgBgBIACgCIAAgBIACgBIgBgBIABgBIABAAIAAgBIgBgBIABgBIABgCIABgBIgBgBIABgBIABgBIABgBIgBgBIABgBIACgCIABgBIABgBIgBAAIABgBIABgBIABgBIAAgBIgBgBIACgCIABgBIABgBIgBgBIABgBIABgBIABgBIABgBIgBgBIACgBIABgBIAAgBIABgBIABgBIgBgBIABgBIABgBIABgCIACgBIgBgBIABgBIABgBIABAAIABgBIABgBIABgBIgBgCIABgBIABgBIABgBIACgBIABAAIABgCIgBgBIABgBIABgBIAAgBIABgBIABgBIACgBIABgBIABgBIgCgBIACgCIABgBIABgBIABgBIAAgBIABgBIACgBIABgBIABgBIgBgBIACgBIABgBIABgBIABgBIAAAAIABgBIACgBIABgCIABgBIABgBIABgBIABgBIABgBIABgBIABgBIABgBIABgBIACgBIABgBIABgBIABgCIABAAIAAgBIACgBIABgBIABgCIABgBIABgBIABgBIABAAIABgBIABgBIABgBIABgCIACgBIABgBIABgBIABgBIAAgBIACgBIAAgBIACgBIABgBIABgBIABAAIABgBIABgBIAAgBIABgBIACgBIAAgBIACgBIABgBIABgBIACACIAAgCIABgBIABgBIABgBIACgBIABAAIABgCIABgBIABABIABgBIABgBIABgBIABgBIACgBIAAgBIACABIABgBIAAgBIABgBIABgBIABgBIABgBIACABIABgCIABgBIABgBIABgBIABABIABgBIABAAIABgBIABgBIACgBIAAABIABgBIABgBIABgCIABAAIABAAIACgBIABgBIABgBIABABIAAgBIABgBIABAAIACgBIABAAIABgBIABgBIABgBIABgBIABACIABgCIABgBIABgBIABABIACgBIABgBIABgBIABABIABgBIABgBIAAAAIACAAIABgBIABgBIABAAIABAAIABgBIABgCIABABIABAAIACgCIABAAIABAAIABgBIAAgBIABAAIABABIABgBIABAAIACAAIABgBIABgBIABgBIABABIABgBIABgBIABABIABgCIABAAIABABIABgCIABgBIABABIABgBIABgBIABAAIACAAIABgBIABAAIABAAIAAAAIACgBIABABIABgBIABgBIACABIABgBIAAgBIABABIABgBIABgBIABABIABgCIACAAIABAAIABgBIABABIABgBIAAAAIACAAIABgBIAAAAIACAAIABgBIACAAIAAAAIABgBIABAAIABABIABgBIABABIACgBIABgBIABABIAAgBIABABIABgBIACgBIAAABIACgBIABgBIABABIABgBIABABIABgBIABgBIABABIACgCIABABIABgBIAAAAIABAAIABAAIABAAIABgBIABAAIACAAIABAAIABAAIABgBIAAABIACgBIABgBIABABIABAAIABAAIABgBIACAAIAAAAIABAAIABAAIABAAIABAAIACgBIABABIABgBIABAAIABAAIAAAAIACAAIAAAAIACAAIABAAIABgBIABABIABgBIABABIABgBIABABIABgBIACAAIABAAIABABIABgBIAAABIABgBIABgBIABABIACgBIABABIABAAIABAAIABgBIABABIABAAQAAgBAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABgBIACABIAAgBIACABIABgBIAAABIABgBIABABIABgBIABABIABgBIABABIABAAIABAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAABIAAAAIACAAQAAgBAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABAAIABAAIABAAIACAAIAAgBIABABIABAAIABAAIABgBIACABIABAAIABAAIABAAIAAAAIABAAIABAAIABAAIACABIABgBIABAAIABABIABAAIABAAIABAAIABAAIABAAIABAAIABAAIACAAIABAAIAAAAIABAAIABAAIABABIABgBIACABIABAAIABAAIABgBIABABIABABIABgBIABABIABAAIABAAIABAAIABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIABAAIABABIABAAIABAAIACAAIABAAIABABIABgBIAAABIABAAIACAAIAAAAIACAAIABACIABAAQAAgBAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIACgBIAAABIABABIABgBIABABIACgBIAAABIACABIABgBIAAABIABAAIABAAIABABIABAAIACABIABAAIABgBIABABIABAAIABAAIABABIABgBIABABIACAAIAAAAIABABIABAAIABAAIABABIABAAIABAAIACACIABgBIABABIABABIAAgBIABABIABgBIACABIABABIABgBIABABIABABIABgBIABABIABABIABgBIABABIACABIABgBIABABIABABIAAgBIABAAIABABIABAAIABABIACABIABABIABgBIABABIABABIABAAIAAAAIABABIACAAIABAAIACABIAAAAIABAAIABABIABABIABAAIABAAIACABIAAgBIACABIABABIABACIABgBIAAABIABABIACABIABgBIABABIABABIABAAIABAAIABABIABABIABgBIABABIABABIABABIABgBIABABIABACIABABIABgBIABAAIACABIABABIABAAIABAAIABABIABABIABABIAAAAIACAAIABABIABABIABACIABgCIABACIABABIABABIABAAIABAAIACABIAAABIACABIABAAIAAAAIABABIABABIABACIACABIABgBIABABIABABIAAABIABAAIACAAIAAAAIACACIABAAIABACIABABIABABIABgBIABABIABABIABABIABABIABABIABABIACgBIABABIAAABIACABIAAACIACABIABABIABABIABABIABgBIABAAIABACIABABIABABIABABIABABIABABIACABIAAABIABgBIABABIABABIABABIACABIABABIABABIABABIAAABIABACIABABIABAAIACABIABABIABABIABACIABABIABABIABABIABABIABABIABABIABABIABABIABABIABABIABACIABAAIABABIABABIACABIABABIABACIABABIAAABIABABIABABIABABIABABIACABIABABIABABIABABIABABIABABIgBACIABABIABABIABABIABABIABABIABABIABABIABABIABABIgBABIABABIABACIABABIABABIACABIABAAIABABIABACIgCABIABABIACABIAAABIABABIABABIABABIgBABIABABIACABIABACIABABIABABIABAAIgBABIABABIAAABIACABIAAABIgBACIABABIACABIABABIABABIABABIgBABIABABIABABIABABIABACIgBAAIABABIABABIABABIgBABIABABIABACIACABIAAABIAAABIABAAIABABIAAABIABACIgBABIABABIABABIABACIgBAAIABABIABABIABABIgBABIABACIACABIAAABQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIABABIABABIAAABIAAABIAAABIABABIgBABIABACIABAAIABABIgBABIABABIACABIAAABIAAACIABABIAAABIAAABIABAAIABACIAAABIAAAAIABACIABABIgBABIABABIAAABIAAABIAAABIABABIgBABIACABIABACIAAABIAAAAIABABIAAABIAAACIABABIABABIgBABIABABIABABIgBABIABABIABABIgBABIABABIABABIgBACIABABIAAAAIAAABIABABIgBABIABABIAAACIAAABIABABIAAABIAAABIABABIAAABIAAABIABABIABABIgBABIABACIAAAAIAAABIABABIgBABIACABIgBACIABABIAAABIgBABIABABIABABIgBABIABAAIgBACIABABIABABIgBABIABABIgBABIABABIABABIgBABIAAACIAAABIABABQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAgBAAIAAAAIAAABIAAABIABABIgBABIABACIABABIgBABIAAABIAAABIABABIABABIgBABIAAABIAAACIAAABIAAABIABAAIgBABIACABIAAABIgBABIABACIgBABIABABIgBABIABABIABAAIgBACIABABIgBABIABACIgBAAIAAACIAAAAIABABIgBABIABABIgBABIABACIABABIgBABIABABIgBABIABAAIgBACIABABIgBABIABABIgBABIAAABIAAABIAAABIAAABIAAABIAAABIABACIgBABIAAABIAAAAIABAAIgBABIABABIgBACIABABIgBABIABABIgBABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAAAIAAABIAAABIAAABIAAABIAAABIABACIgBABIAAABIAAABIAAABIAAAAIgBABIABABIgBACIAAABIAAABIAAABIgBACIABAAIAAABIAAABIAAABIAAABIgBACIgBABQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAgBAAIAAAAIAAACIAAAAIAAACIAAAAIgBACIABABIgBABIABABIgBAAIABACIgBABIAAABIAAACIgBABIAAAAIAAACIAAAAIAAABIgCABIABABIAAABIAAACIgBABIABABIAAABIgBABIAAABIAAAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABIgBABIABABIgBACIAAAAIAAABIgBABIAAABIAAABIABACIgBABIgBABIABABIgBAAIgCABIACABIgCABIABACIgBABIgBABIABABIgBABIABABIgBABIgBABIABABIgBACIgBABIAAAAIAAACIAAAAIAAABIAAABIgCABIABABIgBACIABABIgBABIgBABIABABIgBAAIgBACIAAABIAAABIgBABIAAABIgBABIgBABIABABIgBABIgBABIABABIgBACIgBABIABAAIgBACIAAAAIgBABIABABIgCABIgBACIABABIgBABIgBABIABABIgBABIgBABIABABIAAABIgCABIgBABIAAACIAAABIgBAAIAAABIAAABIgBABIgBABIAAACIAAABIgBABIgBABIABABIgBABIgBABIAAAAIAAACIgCABIgBABIAAABIAAABIgBABIgBABIABABIgBABIgBABIgBABIABACIgBABIgBAAIgBABIABABIgBABIgBABIgBACIgBABIAAABIgBABIgBABIgBABIAAABIAAAAIAAABIgBACIgBABIAAABIAAABIgBABIgCABIgBABIABABIgBACIgBABIgBABIAAABIgBABIABAAIgBABIgBABIgCABIgBACIABABIgBABIgBABIgBABIgBABIgBABIgBABIAAABIAAABIgBABIgBABIgBABIgCABIgBABIABABIgBABIgBACIgBAAIgBACIgBABIgBAAIgBABIgBABIABABIgBABIgBACIgCABIAAABIgCABIAAAAIgBACIgBABIgBABIABACIgBABIgCABIgBABIgBABIgBAAIgBABIgBABIgBABIgBACIgBABIgBABIgCABIAAABIgBABIgBABIgBABIgBABIgBABIgCABIgBABIgBABIgBABIgBABIgBABIgBABIgBACIgBABIgBABIgBABIgCAAIgBABIAAABIgBABIgBABIgBACIgCABIgBABIgBABIgBABIgBABIgBABIgBABIgBABIgBABIgBgCIgBACIgBABIgCABIAAABIgBABIgBAAIgBACIgCABIgBABIgBgBIgBABIAAABIgCABIgBABIgBABIgBABIgBABIgBABIgBgBIgBABIgBABIgBACIgBABIgBABIgCAAIgBAAIgBABIgBABIgBAAIAAABIgBABIgCABIAAgBIgCABIgBACIgBABIgBABIgBgBIgBABIgBABIgBABIgBABIgCAAIgBAAIgBABIgBABIgBABIgBABIgBgCIgBACIgBABIgCABIgBAAIAAABIgBAAIgBABIgBAAQAAABAAAAQgBAAAAAAQAAAAAAgBQAAAAAAAAIgCABIgBABIgBABIgBABIgBgBIgBABIAAABIgBABIgCgBIgBACIgBABIgBAAIgBAAIgBABIgBAAIgBAAIgBAAIgCABIAAABIgCABIgBgBIAAABIgBACIgBgCIgBACIgBABIgCAAIgBAAIgBABIgBABIgBAAIAAAAIgCABIgBAAIgBgBIgBABIgBABIgCABIAAgBIgBABIgBABIgBgBIgCACIgBABIgBgCIgBACIgBABIgBgBIgBABIgBABIgBAAIgBAAIgBABIgBAAIgCAAIgBABIAAAAIgBAAIgBAAIgBABIgCAAIgBABQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAgBIgBgBIgBABIgBABIAAAAIgCABIgBABIgBgBIgBABIgBgBIgBABIgBAAIgBAAIgBABIgBABIgCgBIgBABIgBABIgBgBIgBABIAAAAIgCAAIAAAAIgCAAIgBABIgBAAIgBAAIgBABIgBgBIgBABIgBAAIgBAAIgBABIgBAAIgCAAIgBAAIAAAAIgBABIgCAAIAAAAIgBABIgCgBIgBACIgBAAIgBgCIgBACIAAgBIgBABIgCABIgCgBIAAABIgCgBIgBABIgBgBIAAABIgBABIgBgBIgBABIgCgBIgBABIgBABIgBgBIgBABIgBgBIAAABIgCgBIgBABIgBgBIgBABIgCAAIAAAAIgBAAIgBAAIgBAAIgBAAIgCABIgBAAIAAAAIgCAAIgBAAIAAAAIgCAAIAAAAIgCgBIgBABIgBgBIgBABIgBgBIgBACIgBAAIgBAAgAARFkIABgBIABgBIABAAIACAAIAAAAIABAAIABABQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAIABAAIACAAIABAAIABgBIABACIABgBIABgBIABAAIAAAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIABgBIABABIABgBIABABIABgBIABgBIABABIABgBIACABIABgBIABAAIABAAIAAABIABgCIABAAIABAAIACAAIABAAIABAAIABAAIABAAIABgBIABABIABgBIABgBIACABIAAgBIABABIABgBIABABIABgBIABAAIABAAIABgBIACAAIABAAIABAAIABAAIABgCIgBgBIABgBIgBgBIgBAAIABgBIgBgBIABgBIgBgBIgBgCIABgBIgBgBIgBgBIABgBIgBgBIgCgBIACgBIgCgBIACgBIgCgBIgBgBIACgBIgBgBIgBgBIABgBIgBgBIgBgCIABgBIgBgBIABgBIgBgBIgCgBIABgBIgBgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIABgBIgBgBIgBgBIABgBIgBgCIgBgBIABgBIgBAAIABgBIgBgBIgBgBIABgBIgCgCIgBgBIABgBIgBgBIgBgBIABgBIgBgBIABgBIgBgCIgBgBIABgBIgBgBIgBgBIAAAAIgBAAIgBABIgBgBIgCABIgBABIgBgBIgBABIgBgBIAAABIgCgBIgBABIgBABIgCgBIAAABIgCgBIgBABIAAgBIgBABIgBABIgBgBQgBABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgBgBIgBABIgBgBIgBABIAAABIgCgBIgBABIgBgBIgBACIgBgCIgBACIgBAAIgBAAIgBAAIgBAAIgBAAIgCAAIgBAAIgBAAIgBAAIgBAAIAAAAIgCgBIAAABIgCAAIgBAAIgBgBIgBABIgBAAIgBABIgBgBIgBABIgBAAIgBAAIgBAAIAAAAIgCAAIAAAAIgBAAIgBAAIgCgCIgBABIgBgBIgBABIgBgBIgBABIgBgBIAAABIgCgBIgBABIgBAAIgBAAIgBgBIgBABIgBAAIgBAAIgBgBIgBABIgBgBIgCABIgBgBIgBgBIgBABIgBgBIgBAAIAAAAIgBAAIgCAAIgBgCIgBABIgBAAIgBAAIgBgBIgBABIgBgBIgBgBIgCABIgBgBIgBABIgBAAIgBAAIAAgBIgBgBIgBABIgBgBIgCABIgBAAIgBAAIgBgBIgBAAIgBAAIgBAAIgBgBIgBABIgBAAIgCABIABABIgBABIgBABIABACIgBABIABABIAAABIgBABIAAABIAAABIgBABIAAABIAAABIgBABIABACIgBABIAAAAIAAABIgBABIAAABIAAACIgBABIAAABIAAABIgCAAIACABIgCABIABACIgBAAIgBACIABABIgBABIgBABIAAABIAAABIABABIgBABIgBABIAAABIAAACIgBABIAAABIAAAAIgBABIABABIgBABIABACIgBABIgBABIABABIgBABIgBABIAAABIAAABIgCABIACABIgCABIABABIgBACIgBAAIABABIgBABIABABIACAAIABAAIABgBIABABIABACIABgBIAAABIABABIABgBIACABIABgBIACABIAAgBIABABIABABIABgBIABABIACgBIABABIABABIABAAIAAAAIACAAIAAAAIABABIABgBIACABIABgBIABABIABgBIABABIABAAIABAAIABABIACgBIABABIAAgBIACABIAAgBIABABIABgBIABABIABABIACgBIABABIABgBIABABIABAAIAAAAIACgBIABABIABAAIACAAIAAAAIABAAIABABIABgBIABABIABgBIABABIABAAIACAAIABgBIABABIABAAIAAAAIABgBIABABIACAAIABAAIABAAIABAAIABAAIABABIABgBIABABIABgBIABAAIAAAAIABAAIACAAIAAAAIABAAIABAAIABgBIABABIACAAQAAAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAIABgBIABAAIABAAIABABIABgBIABABgABoFVIABgBIABgBIABABIACgBIABgBIABABIABgBIAAgCIABABIABgBIABAAIABABIACgCIABgBIABAAIABAAIABgBIABAAIABAAIABAAIACAAIAAAAIACgBIAAgBIABABIABgBIABgBIABgBIABABIACgCIABAAIABAAIABgBIABgBIABAAIABAAIABgBIACgBIABABIABgBIABAAIAAgBIABABIABgBIABgBIABgBIACAAIABgBIABgBIABAAIABAAIABgBIABgBIAAAAQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIABgBIABAAIABgBIABAAIABgBIABgBIABgBIABAAIACAAIABgBIABgBIABgBIAAABIABgBIABgBIACgBIABgBIABABIABgBIABgBIABgBIABgBIABgBIABABIABgCIACgBIABgBIABAAIABAAIAAgBIABAAIABgBIABgBIABgBIACABIABgBIABgBIABgCIABgBIABgBIABAAIABAAIACgBIABgBIABgBIABgBIABgBIABgBIABgBIABACIABgCIABgBIABgBIABgBIABgBIABgBIABgBIABgBIABAAIACAAIABgCIABgBIABgBIABgBIAAAAIABgBIACgBIABgCIABAAIABgCIABgBIABgBIABgBIABgBIgBAAIgwgyIgBACIgBABIgBABIgBABIgBABIgBAAIgBACIgBABIgBABIgBABIgCABIgBgBIgBABIgBABIgBABIAAABIgBABIgCABIAAABIgCgBIgBABIgBABIgBACIgBABIgBABIgBAAIgBABIgBgBIgCABIgBABIgBABIAAABIgBACIgBAAIgBAAIgBABIgCABIgBABIgBAAIgBAAIgBABIgBABIgBABIgBAAIgBgBIgBABIgBABIgBACIgBABIgBgBIgBABIgBACIgBAAIgCABIgBgBIgBABIgBABIgBAAIgBAAIgBABIgBABIgBAAIgCAAIgBABIgBABIgBABIAAgBIgBABIgBABIgBAAIgCABIgBAAIgBAAIgBAAIgBABIgBABIgBAAIgBAAIgBABIgBABIgBgBIgBABIgBABIgBABIgBAAIgBABIgBAAIgCAAIgBABIgBAAIgBAAIAAABIgCAAIAAAAIgBABIgCAAIgCAAIAAAAIgBABIgBgBIgBABIgBABIABABIgBACIABABIAAABIAAABIABAAIAAACIAAABIAAABIAAABIABACIAAAAIgBACIABAAIABABIAAABIABABIgCABIABACIABABIAAABIABABIABABIgBAAIABACIABAAIgBACIABABIgBABIABABIABABIgBABIABABIABABIgBABIABABIABACIgBABIABABIgBABIABAAIAAABIAAABIAAABIABACIAAABIABABIAAABIAAABIAAABIAAABIABABIAAABIAAACIABABIABAAIgBABIABABIgCABIACABIABABIgBACIABABIABABIABgBIABABgAhqFTIABgBIABgBIgBgBIABgBIABgCIgBAAIABgBIgBgCIABgBIABgBIgBgBIABgBIABgBIgBgBIABgBIgCgBIABgBIABgBIgBgBIABgBIACgBIgBgBIAAgBIACgBIgBgBIABgBIgBgCIABgBIABgBIgBgBIABgBIABAAIgBgCIACgBIABgBIgBgBIABgBIgBgBIABgBIAAgBIAAgBIAAgBIABgBIgBgCIABAAIABgCIgBgBIACgBIgBAAIABgBIABgBIgCgBIABgCIABgBIgBgBIABgBIgBgBIABgBIACgBIgCAAIACgBIABgCIgBgBIABgCIgBAAIgBgBIgCABIAAgBIgBgBIgCAAIAAAAIgBgBIgBAAIgCAAIgBgBIgBAAIgBAAIgBgCIgBACIgBgCIgBgBIgBABIgBgBIgBgBIgBgBIgBABIgBgBIgBgBIgBABIgBgBIgBgBIgCgBIgBABIAAgBIgCgBIgBgBIAAABIgBgCIgBgBIgBABIgCgBIgBgBIgBgBIgBABIgBAAIgBgBIgBgBIgBAAIgBAAIgCgCIgBgBIgBABIAAAAIgBgBIgBgCIgBgBIgBAAIgCAAIgBgBIgBgBIgBgBIgBAAIAAAAIgBgBIgBgBIgBgBIgCABIgBgBIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgCAAIAAAAIgBgBIgBgCIgBgBIgCgBIgBgBIgBgBIgBAAIgBAAIgBgBIgBgBIgBgBIgBgCIgBgBIgBgBIgBABIgBgBIgBgBIgBAAIgBgBIgBgBIgCgBIgBgCIgBgBIgBgBIgBgBIAAgBIgBABIgxAwIABABIABABIABABIABABIABABIABABIABABIABABIABACIACABIABABIABABIABABIAAABIABgBIABABIABABIABABIACABIABABIABABIABABIABABIABABIABgBIABABIABABIABABIABABIABACIABABIABABIABgBIABABIABABIACABIAAABIACABIABABIAAgCIABABIABABIABACIABABIACABIABAAIABAAIABABIABABIABABIABAAIABAAIAAABIACABIABACIABABIABgBIABABIABABIABABIABAAIACAAIABAAIABABIABABIAAAAIABABIABABIACABIAAABIACAAIABAAIABABIABABIABAAIABAAIABABIABABIABAAIABAAIABABIABABIABAAIABAAIABABIABACIABgBIACABIABABIABABIABgBIAAABIABABIABgBIACABIABABIABABIABgBIABABIABABIABgBIABABIABABIABABIACgBIABABIABABIABAAIAAAAIABABIABAAIABABIABAAIACAAIABABIABAAIABABIABgBIABABIABABIAAgBIABABIACABIACgBIABACIAAAAIABgBIABACIABABIABgBIACABgAATEFIABgBIABgBIABABIABgBIABABIABgBIABABIACgBIABABIABgBIABgBIAAABIABgBIABABIABgCIABABIACgBIABAAIABABQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIABABIABgCIABACIABgCIABAAIABAAIACgBIAAABIABgBIABAAIABAAIABgBIACABIABgBIABAAIABAAIABgBIAAAAIACAAIAAAAIACAAIABgBIACAAIAAABIABgBIABgBIABABIABgBIABABIABgBIACgBIABABIABgBIABgBIABABIAAgBIACgCIAAACIABgCIACAAIACAAIAAgBIABAAIABAAIABgBIABAAIABAAIACgBIABgBIABABIABgBIABAAIAAAAIACAAIAAgBIABgBIACABIABgCIABgBIABgBIABABIABgBIABgBIABABIABgBIACgBIAAgBIACABIAAgBIABgBIABAAIABAAIABgBIACgBIABAAIABAAIABgBIABgCIABgBIABACIABgBIABgBIABgBIABgBIABABIABgBIABgBIABgBIABgBIACABIABgBIABgBIABgCIABAAIABAAIAAgBIABgBIABgBIACAAIABgBIACABIABgBIAAgBIABgBIABgCIABgBIABgBIACAAIABAAIABgBIABgBIABgBIABgBIABgBIABgBIABABIABgBIABgBIABgBIABgBIABgCIABAAIABgBIABgBIACgBIABgBIABgCIABgBIABgBIABgBIABgBIABAAIABgBIABgCIABACIACgBIAAgBIgBgCIACgBIAAgBIABgBIABgBIABgBIACgBIABgBIABgBIABgBIABgBIABgCIABAAIABgBIABgBIABgBIABgBIACgCIAAgBIgBgBIACgBIAAAAIABgBIABgBIABgBIACgCIgCgBIACgBIABgBIABgBIABgBIABgBIABgBIABgBIgCgBIABgBIABgBIABgBIACgCIABAAIAAgBIABgBIABgBIABgCIAAgBIgBgBIABgBIABgBIABAAIABgBIgBgBIABgBIACgCIABgBIABgBIgBgBIABgBIABgBIABgBIgBgBIABgCIABgBIABgBIgBgBIABAAIABgBIABgBIgBgBIABgBIABgCIABgBIgBgBIACgBIABgBIgBgBIABAAIAAgCIABgBIgBgBIABgBIABgBIABgBIgBgBIABgBIACgBIgBgBIABgCIABgBIgCgBIACgBIABgBIgBAAIABgCIABAAIgBgBIABgCIABgBIgBgBIABgBIABgBIgBgBIABgBIABgBIgBgBIABgBIABgBIgBgBIABgBIgBgBIABgBIABgBIgBgBIABgCIACgBIgCgBIACgBIgCgBIACgBIABgBIgBgBIABgBIABgBIgBgBIABgBIgCgBIACgBIABgBIgBgBIABgBIgBgBIABgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAAAIABgCIgBgBIACgBIgBgBIABgBIgBgBIABgBIABgBIgBgBIABgBIgBgBIABgBIgBgBIABgBIgBgBIABgBIABgBIgCgCIACgBIgBgBIABgBIgBgBIABAAIgBgBIABgCIgBgBIABgBIgBgBIABgBIgBgBIABgBIgBgBIABgBIgBgBIABgCIgBgBIABgBIgBgBIABgBIgBAAIABAAIgBgBIABgBIgBgCIABgBIgBgBIABgBIgBgBIABgBIgBgBIABgBIgBgCIABgBIgBgBIABgBIgBgBIABAAIgBgBIgBgBIABgBIgBgCIABgBIgBgBIABgBIgBgBIABgBIgBAAIgBgCIACgBIgCgBIABgBIgBgBIABgBIgBgBIgBgBIABgBIgBgBIABgCIgBgBIABgBIgBgBIAAgBIAAAAIAAgCIAAgBIAAgBIgBgBIABgBIgBgBIABgBIgBgBIgBgBIAAgBIgBgBIgBgCIACgBIgBAAIABgBIgBgCIgCAAIACgBIgCgBIgBgBIABgCIgBgBIABgBIgBgBIgBgBIABgBIgBgBIgBgBIABgCIgBgBIgBgBIABgBIgBgBIAAAAIAAgBIgBgBIgBgBIACgCIgBgBIgBgBIABgBIgBgBIgBgBIABgBIgBgBIgCgBIABgBIgBgBIgBgBIgBgBIABgBIgBgBIgBgBIgBgBIABgCIgBgBIgBgBIABgBIgBgBIgBAAIgBgBIACgCIgBgBIgCgCIgBgBIABAAIgBgBIgBgBIgBgBIABgBIgBgBIgBgCIgBgBIABgBIgBgBIgBgBIgBgBIgBgBIABgBIgBgBIgBgBIgCgBIAAgBIABgBIgCgBIgBgBIAAgBIgBgBIABgCIgBgBIgBgBIgBgBIgBAAIgCgBIACgBIgCgBIgBgCIgBgBIgBgBIgBgBIgBgBIgBgBIACgBIgBgBIgBgBIgBgBIgCgCIgBgBIgBgBIABgBIgBAAIgBgBIgBgBIgBgBIgBgCIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgCgCIgBgBIgBAAIABgBIgBgBIgBgBIAAABIgBgBIgBgCIgBgBIgBgBIgCgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgCIgBgBIgBAAIgBgBIgBgBIgBgBIgBABIgBgBIgBgCIgBgBIgBgBIgCgBIgBgBIAAABIgCgBIgBgBIgBgBIgBgBIgBgCIgBAAIgBgCIgBABIgBgBIgBgBIgBgBIgBAAIgCgBIAAAAIgCAAIgBgCIAAAAIgBgCIgCABIAAgBIgBgBIgCgBIgBgBIgBABIgBgBIgBgBIgBgBIAAgBIgBABIgCgBIgBgBIgBgCIgBACIgBgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgCABIgBAAIgBgBIgBgBIgBABIAAgBIgCgBIgBAAIgBAAIgBgCIgBgBIAAAAQgBABAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIgBgBIgBgBIgBABIgBgBIgBgBIgBABIgBgBIgBgBIgBAAIgBAAIgBgBIgCABIgBgBIgBgBIgBAAIgBAAIAAgBIgBAAIgCAAIgBgCIgBABIgBgBIgBgBIgBABIgBgBIgBgBIgBABIgBgBIgCAAIAAAAIgCgBIgBAAIAAAAIgBgBIgBAAIgBAAIgBAAIgCAAIgBgBIgBABIgBgBIgBgBIgBABIgBgBIgBABIgBgBIgBgBIgBABIgBgBIgBABIgBgBIgBgCIgBACIgBgCIgCACIgBgCIgBACIgBgBIgBgBIgBABIgBgBIAAAAIgBAAIgCAAIgBAAIgBgCIgBABIgBgBIgBABIgBgBIgBABIgBgBIgCABIAAgBIgCgBIgBABIAAgBIgBABIgBgBIgBABIgCgBIgBABIgBgBIgBABIgBgBIgBABIgBgBIgBABIgBgBIgCAAIAAAAIgCAAIAAAAIgBAAIgBAAIgBAAIgBAAIgBAAIgBAAIgBABIgBgBIgBABIgBgBIgBABIgBgBIAAABIgCgBIgBAAIgBAAIgCAAIAAAAIgBAAIgBAAIgBABIgCgBIgBABIgBAAIgBAAIgBAAIAAAAIgCABIAAgBIgBABIgCgBIgBABIgBABIgBgBIgBAAIgBAAIgBABIgBgBIgCABIAAAAIgCAAIAAAAIgCAAIAAACIgBgCIgBACIgCAAIgBgBIgBABIgBgBIgBABIgBABIgBgBIgBABIgBgBIgBABIgBABIgBgBIgBABIgCABIAAgBQAAAAAAAAQAAABgBAAQAAAAAAAAQAAAAAAAAIgBgBIgBABIgCAAIAAAAIgCABIgBAAIgBAAIAAAAIgCAAIgBABIgBABIgBgBIgBABIgBABIgBgBIgBABIgBABIgBgBIgBABIgBABIgCAAIgBAAIgBABIgBAAIAAABIgBAAIgBgBIgBABIgCABIgBAAIgBAAIgBABIgBgBIgBABIgBABIgBABIgBgBIgBABIgBABIgCABIAAgBIgBACIgBABIgCgBIgBABIgBABIgBAAIgBAAIgBABIgBABIgBAAIgBAAIgBAAIgBABIgBABIgCgBIgBACIgBABIAAABIgBgCIgBACIgBABIgCABIgBABIgBgBIgBABIgBABIgBABIAAAAIgCgBIgBABIgBABIgBABIgCACIAAgBIgBABIgBABIgBABIgBABIgCABIgBgBIgBABIgBABIgBABIgBABIAAABIgCABIgBABIgBgBIgBACIgBABIgBAAIgBABIgBABIgBABIgBgBIgBABIgCABIgBACIgBABIgBABIAAABIgBAAIgBACIgCABIgBABIgBABIgBABIgBABIgBABIgBABIgBABIgBABIgCABIgBgBIAAABIgCABIABABIgBACIgBABIAAABIgBAAIgBABIgBABIgCABIgBABIgBACIgBABIgBABIgBABIgBAAIgBACIgCABIgBABIgBABIgBABIABABIgBABIgBABIAAABIgBABIgBABIgCABIABACIgBABIgBAAIgBABIgBABIgBABIgBABIgBABIABABIgBACIgBABIgBABIgCABIgBABIAAABIAAAAIgBABIgBACIgBABIABABIgBACIgBAAIgBABIgBABIABABIgBABIgBABIgBABIgBABIABACIgBAAIgBABIgCABIABABIgBACIAAABIgBABIAAABIAAABIgBABIgBABIAAAAIAAACIgCABIgBABIABABIgBABIgBABIABABIgBABIgBABIgBABIAAACIAAABIAAABIgCABIABABIgBABIgBABIABAAIgBABIgBACIABABIgBABIgBABIAAABIgBABIAAABIAAABIgBABIgBACIABABIgBABIgBAAIABABIgBABIAAABIAAABIAAACIgCABIABABIAAABIAAABIAAABIgBABIAAABIgBAAIgBACIABABIAAABIAAABIAAABIgCABIAAABIAAABIgBACIAAABIAAABIABABIgBABIgBAAIABABIgBABIAAACIAAABIgBABIABABIgBABIAAABIgBABIABABIgBABIAAABIAAABIAAACIAAAAIAAABIAAABIAAABIgBABIABABIgBACIAAABIAAABIAAABIAAABIAAABIAAABIgBABIABABIgBABIABABIgBABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIgBABIABABIgBABIABAAIAAACIAAAAIAAACIAAABIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAACIAAAAIAAACIgBAAIABABIgBABIABABIgBABIABABIgBACIABABIgBABIABABIgBABIACABIAAABIAAABIAAABIAAABIAAACIAAAAIABABIgCABIABABIABABIgBABIABACIgBABIABABIgBABIABABIAAABIAAAAIABACIgBABIABABIgBABIABABIAAABIAAABIAAABIAAABIABABIAAACIAAABIAAAAIAAACIABAAIABABIgBABIABABIABACIgBABIAAABIAAABIACABIAAAAIgBACIACABIAAABIAAABIAAACIAAAAIABABIAAACIgBAAIABABIABABIgBACIABABIABABIgBABIABABIABABIgBAAIABABIABACIgBABIABABIABABIgBACIABAAIACABIgCABIACABIABABIgBACIABABIABABIAAABIAAAAIABABIAAACIABABIgBABIABABIABABIgBABIABABIABABIABABIgBABIABABIACACIABABIgBABIABABIABABIAAABIAAAAIABABIAAABIACACIgBACIAAAAIACACIABAAIABABIgBABIABABIABACIABABIAAABIAAAAIABABIABABIABABIAAABIAAACIABABIABABIABABIACABIABABIgCABIABABIABABIABACIABABIABABIABABIABAAIgBABIABABIABABIACACIAAABIACABIABABIgBABIABABIAAABIABABIABABIABABIABACIACABIABABIABABIABAAIAAABIACABIABABIABACIABABIABABIABABIABABIgBABIABABIABABIABgBIABABIABABIABACIACABIABABIABAAIABABIAAABIABABIABABIABACIABABIACABIABABIABABIABABIABABIABABIABgBIABABIABABIABACIABABIABABIABABIABgBIABABIABAAIABABIABABIACABIABACIABABIABgBIABABIABABIABABIABABIABABIABgBIABAAIABACIABABIABABIABgBIABACIACABIABABIABABIABgBIAAABIABABIABABIABABIABgCIACABIABABIABABIABAAIAAAAIACACIAAABIACAAIAAAAIACABIABABIABAAIABAAIABABIABABIABgBIABABIABABIACAAIABAAIABABIAAACIABgCIABACIACABIAAABIACgBIABABIABABIABgBIABABIABAAIABAAIABAAIABACIABgBIABAAIABABIABAAIABAAIABABIABAAIABABIACABIABgBIAAAAIACACIAAAAIACAAIABABIAAAAIACAAIABAAIABAAIABABIABAAIABAAIABACIABgBIABAAIACAAIAAABIABAAIACAAIAAAAIABABIABAAIABAAIABAAIACAAIABABIABAAIABABIAAgBIACAAIABABIABAAIABABIABgBIABAAIABAAIABAAIABACIABgCIABACIABAAIACAAIABAAIABAAIABABIABgBIABABIAAAAIACAAIAAgBIACABIABgBIABABIABABIABgBIABABIABAAIABAAQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABABIAAAAIACAAIAAAAIABAAIABAAIABAAIACAAIAAAAIACAAIABAAIABAAIABAAIABAAIABAAIABAAIABAAIAAAAIABAAIABABIABgBIABABIABgBIABABIABgBIABABIACgBIABAAIABAAIABAAIAAAAIABAAIACAAIAAAAIABgBIACACgAEQBaIgCABIABAAIgCACIgBABIABABIAAABIgBABIAAABIAAABIgBABIAAABIAAABIgBABIAAACIAAABIgBABIAAABIAAAAIgBABIgBABIABACIgBABIgBABIAAABIAAABIgCABIgBABIABAAIgBACIgBABIgBABIAAABIAAABIgBACIAAABIAAAAIgBABIgBABIABABIgBACIgBABIgCABIABABIAAAAIgBABIgBABIAAACIAAABIgBABIgCABIAAACIAAAAIAAABIgBAAIgBACIgBABIAAABIAAACIgCABIgBABIgBAAIAAABIAAABIgBABIgBABIgBACIAAABIAAABIgBABIgBABIgCABIgBABIgBABIABAAIgBACIgBABIAAABIgBABIgCABIAAABIgCABIABABIgBABIgBACIgBABIgBABIgBAAIgBABIgBABIABABIgBABIgBACIgBABIgCABIgBABIgBAAIgBABIgBACIgBABIAAABIgCABIAwAxIABAAIABgBIABAAIABgBIACgCIABgBIABgBIABgBIABgBIAAgBIACgBIAAgBIACgBIABgBIABgBIgBgBIABgBIABgBIABgBIABgBIABgBIABgBIABgBIACgBIABgBIgBgCIABgBIABAAIABgBIAAgBIACgCIABAAIABgCIgCgBIABgBIABgBIACgBIABgBIABgBIABgBIgBgBIABgBIABgBIABgBIABgBIABgBIgBgBIABgBIABgBIABgCIACgBIgBgBIABgBIABgBIAAAAIABgBIABgBIgBgBIABgCIABgBIABgBIACgBIgBgBIABgBIABAAIABgCIgBgCIABgBIABgBIABgBIABAAIgBgBIABgBIABgBIABgBIgBgCIABgBIACgBIABgBIgBAAIABgCIABAAIABgCIgBgBIABgBIABgBIABgBIgBgBIABgBIABgBIABgBIgBgBIABgBIABgBIgCgBIABgBIACgBIABgBIgBgBIABgBIABgBIgBgCIABgBIABgBIABgBIgBgBIABAAIABgBIgBgCIABgBIABgBIgBgBIABgBIABgBIgBgBIABgBIACgBIABgBIgBgCIABAAIABgCIgBgBIABAAIABgBIgBgBIABgBIABgBIgBgCIABgBIABgBIgCgBIABgBIAAgBIgBgBIgBABIgBgBIgBgBIgCABIgBgBIAAAAIgCAAIgBgBIAAABIgBgCIgBgBIgCABIgBgBIgBABIgBgBIgBgBIgBABIgBgBIgBgBIgBABIgBAAIgCgBIgBAAIgBgBIAAABIgBgBIgBgBIgBABIgBAAIgCgBIAAAAIgCAAIgBgBIgBABIAAgBIgCAAIAAAAIgBgCIgCABIgBAAIgBgCIgBAAIgBAAIgBgBIgBABIgBgBIgBAAIgCAAIgBgBIgBAAIgBAAIAAgCIgCABIAAAAIgCAAIgBgBIgBAAIgBAAIgBAAIgBgBIgBAAIAAAAIgBABgAlSBlIgBABIABABIgBABIABABIABABIgBABIABABIABABIgBABIAAABIABABIAAACIABABIABABIgCABIABABIABAAIABACIAAABIABABIABABIgBABIABABIABACIgBAAIABABIABABIgBABIABABIABABIAAACIAAABIABABIAAAAIAAACIABABIABABIAAABIAAABIABABIABABIgBABIACABIABABIAAABIgBACIABABIABABIABABIgBAAIABABIABABIABABIgBABIABACIABABIABABIgBABIABABIACABIAAABIAAABIABABIABABIABABIAAACIAAAAIAAABIABABIACABIgBABIAAACIACABIABABIABABIgCABIACABIABABIABABIABACIAAAAIAAABIABABIABABIABABQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAgBAAIAAABIAAABIACACIABABIABABIABABIgBABIABABIABABIABABIABACIABAAIABABIgBACIABABIACAAIAAABIACABIABABIAAACIABABIgBABIABABIABABIABABIABABIACABIABABIABABIABABIAAABIAAACIAAAAIACABIABABIABABIABACIABABIABABIABABIABABIABABIABABIABABIABABIABABIAxgwIAAgBIAAgBIgBgBIgBgBIgBgBIgCgBIgBgCIgBgBIgBgBIgBgBIAAgBIgBAAIABgBIgBgBIgCgCIAAgBIgCgBIgBgBIgBgBIgBgBIABgBIgBgBIgBgBIAAgBIgBgCIgBAAIgBgCIgCAAIACgBIgCgBIgBgBIgBgBIgBgCIgBgBIgBgBIABgBIgBgBIgBgBIgBgBIgBgBIABgBIgBgBIgBgBIgBgBIgBgBIABgBIgCgBIAAgBIgBgBIgBgCIABgBIgBgBIgBgBIgBgBIgCAAIACgCIgCgBIgBgCIgBgBIABAAIgBgBIgBgBIgBgBIABgBIgBgBIgBgBIgBgCIACgBIgBgBIgBgBIABgBIgBgBIgBgBIgCgBIACgBIgCgBIgBgBIgBgBIABgBIgBgBIgBgBIABgBIgBgBIgBgCIgBgBIABgBIgBgBIgBgBIABAAIgBgBIgBgBIABgBIgBgCIgBgBIABgBIgBgBIgBgBIACgBIgCgBIgBgBIABgCIgBgBIgBgBQAAABAAAAQAAAAAAAAQAAAAgBAAQAAAAAAAAIgBAAIgBABIgBAAIgBAAIgCABIAAABIgCgCIgBACIgBgCIAAACIgBABIgBgBIgBABIgCABIgBgBIgBABIgBgBIgBABIgBABIgBgBIgBABIgCAAIAAAAIgBABIgCAAIAAAAIgBABIgBgBIgBABIgBAAIgCgBIgBABIgBABIgBgBIgBABIgBABIgBgBIgBACIgBgBIgCABIAAAAIgBAAIgCABIAAABIgBgBIgBABIgBAAIgCAAIgBABIgBgBIgBABIgBABIAAgBIgCABIgBAAIAAAAIgCAAIgBAAIgBABIgBAAIgBAAIgBABgAFaBTIAAgBIAAgBIAAgBIAAgBIABgBIAAgCIgBgBIACgBIABgBIgCAAIABgBIAAgBIABgBIgBgBIABgCIABgBIgCgBIABgBIgBgBIACgBIAAgBIgBgBIACgBIgBgBIABgCIABgBIgBgBIABAAIgBgBIABgBIgBgBIABgCIgBgBIABgBIACgBIgBgBIAAAAIgBgBIACgBIgBgCIABgBIgBgBIABgBIABgBIgBgBIABgBIgCgBIABgBIgBgCIABgBIgBgBIACgBIgBAAIAAgBIgBgBIACgBIABgBIgBgCIABgBIgBgBIABgBIgBgBIABAAIgBgCIABgBIgBgBIABgBIgBgBIABgCIgBgBIABAAIgBgBIABgBIgBgBIABgCIgBgBIABgBIgBgBIABgBIgBAAIABgBIgBgBIABgBIgBgBIABgBIgBgBIABgBIgBgBIABgBIgBgBIABgBIgBgBIABgBIgBgCIABgBIgBgBIgBgBIABAAIgBgBIABgBIgBgCIABgBIgBgBIABgBIgBgBIABgBIgBgBIABgBIgBgBIgBgCIABgBIgBgBIABgBIgBAAIABgBIgBgBIABgBIgBgCIgBgBIABgBIgBgBIABgBIgBAAIABgBIgBgBIABgCIgBgCIgBgBIABAAIgBgBIABgBIgBgBIgBgBIABgBIgBgCIABgBIgBgBIgBgBIABgBIgBAAIABgBIgCgCIABgBIgBgBIAAgBIABgBIgBgBIgBgBIABgBIgBgBIABgBIgBgBIgBAAIgBAAIgBABIgBABIgCgBIgBABIgBgBIgBABIgBABIAAgBIgBABIgBABIgBgBIgCABIgBAAIgBAAIgBABIgBgBIgBABIgBAAIgBAAIgCABIAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBIgBABIAAABIgBAAIgBAAIgBgBIgBABIgCABIgBgBIgBABIgBACIgBgBIgBABIgBgBIgBABIgCABIAAgBIgBABIgCAAIAAAAIgBABIgBABIgBgBIgBABIgCgBIgBABIgBAAIgBAAIgBABIgBAAIAAgBIgBABIgCABIgBAAIgBAAIgBgBIgCACIAAAAIgBAAIgBABIgBABIgCABIACABIAAACIAAAAIABABIAAABIAAABIAAABIAAABIABACIgBABIABABIAAAAIAAABIAAACIAAAAIABABIgBACIABABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIABABIAAABIAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAgBAAIABABIAAABIABABIAAACIgBABIABABIgBABIABABIgBABIABABIgBABIABABIgBABIABACIgBAAIABABIgBACIABAAIgBABIABABIgBABIABACIgBABIABABIABAAIgBABIABAAIgBACIABAAIgBACIABACIgBAAIgBABIABABIgBABIABABIgBABIABABIgBABIABACIgBAAIABACIgBABIABAAIgBACIABAAIgBACIAAABIAAABIAAABIAAABIAAABIAAABIgBABIABABIgBABIAAACIAAAAIABACIgBAAIgBABIABABIgBACIAAAAIAAACIABABIgBABIgBABIABABIgBABIABABIgBABIABABIgBABIgBABIABABIgBABIAAABIAAABIAAABIAAABIgBABIAAACIgBABIgBABIABABIACABIABABQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIABAAIAAABIACgBIABABIABAAIABAAIABACIABgBIABABIABABIABgBIABABIABABIABgBIACABIABgBIABABIABACIAAgBIABAAIABACIACgBIAAABIACAAIABAAIABAAIABAAIABAAIABABIABAAIABAAIACABIAAAAIACAAIABAAIABAAIAAABIABAAIABAAIABACIACAAIABAAIABABIABgBIAAABIACgBIAAABIABABIACgBIABABIACABIAAAAIABAAIABABIABgBIABABIABAAIACAAIABABIABgBIABABgAlXBNIABgBIABgBIABABIABgBIABABIABgBIABgBIABABIABgBIABgBIACAAIABAAIABgBIABABIAAgBIABABIABgBIACAAIABAAIABgBIABgBIABABIABgBIABgBIABABIABgBIABABIABgBIACgBIAAABIABgCIABAAIABAAIABgBIACABIABgBIABAAIABAAIABgBIABAAIABAAIABgBIABAAIABAAIABgBIABABIACgBIAAAAIABAAIABAAIABgBIABABIABgBIACgBIABABIABgBIABABIAAgBIACgBIAAABIACgBIABgCIABgBIgBgBIgBgBIABgBIgBAAIgBgBIABgBIgBgCIABgCIgBgBIABgBIgBgBIgBAAIABgBIgBgBIABgBIgCgCIACgBIgBgBIgBgBIABAAIgBgBIABgBIgBgCIABgBIgBgBIgBgBIABgBIgBgBIABgBIgBgBIABgBIgBgBIgBgBIABgBIgBgBIABgBIAAgBIAAgBIgBgBIABgCIgBgBIABgBIgBgBIABgBIgBgBIABgBIgBgBIABgBIgBgBIABgBIgBgBIABgBIgBgBIgBgBIACgBIgBAAIABgBIgBgBIABgCIgCgBIABgBIABgBIAAAAIAAgBIgBgBIABgCIgBgBIABgBIgBgBIABgBIgBgBIABgBIAAgBIAAgBIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAAAIAAgBIABgBIgBgBIABgCIgBgBIABgBIgBgBIABgBIABgBIAAgBIABgBIgBgCIABgBIgCgBIABgBIABgBIgBAAIABgBIgBgBIABgBIgBgCIABgBIACgBIgBgBIABAAIgBgBIABgBIgBgCIABgBIABgBIgBgBIABgBIABgBIgBgBIgBgBIgBgBIgBABIgCgBIAAgBIgBABIgBgBIgBAAIgBAAIgCgCIgBABIgBAAIgBgCIgBABIAAgBIgBgBIgBABIgBgBIgCAAIgBAAIgBgBIgBABIgBgBIgBgBIgBABIgBgBIgCgBIgBABIgBgBIAAABIgCgBIAAgBIgBABIgBgBIgBgBQgBAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgBgBIgBABIgBgBIgBgBQAAAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIAAgBIgBgBIgCAAIgCAAIgBgBIgBABIgBgBIAAAAIgBAAIgBgCIgBABIgCgBIgBgBIgBABIgBgBIgBAAIAAAAIgBAAIgCAAIAAAAIgCgBIgBAAIgBAAIgBABIAAAAIAAABIAAABIAAACIgBAAIAAACIAAABIgBABIABABIgBABIAAABIAAABIAAABIAAABIgBABIABABIgBABIABABIgBABIgBABIABABIgBABIAAACIAAABIgCABIACABIgCABIABABIgBABIABABIAAABIAAABIgBABIgBABIABABIgBABIABABIgBABIAAABIAAACIABAAIgBACIgBABIABAAIgBABIABABIgBABIABACIgBABIABABIgBABIABABIgBAAIABACIgBABIgBABIABABIgBABIAAABIAAACIAAAAIAAABIAAABIAAABIAAABIAAACIAAABIAAABIABABIgBABIAAABIAAAAIABACIgBACIAAAAIAAABIAAABIAAAAIAAABIAAABIAAABIAAABIAAABIgBACIABABIAAABIAAAAIAAABIAAACIAAAAIAAABIAAACIABABIgBABIABABIAAABIAAABIAAABIAAABIAAACIgBAAIABACIgBABIABABIgBAAIACABIgBABIABACIAAABIgBABIABABIAAABIAAABIAAABIABABIgBABIABABIAAACIAAAAIAAACIgBAAIABABIgBABIABABIgBABIABACIACABIgCABIABABIgBAAIACABIABACIgBABIAAABIAAABIABABIAAABIAAABIAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAIABABIgBABIABACIAAAAIAAACIABABIAAABIAAAAIAAACIAAAAIAAABIACAAIAAAAIABABgAEThSIAAAAIABgBIACAAIABAAIABgCIABAAIABABIABgBIABABIABgBIABgBIABAAIACAAIABgBIABABIABgCIAAABIACgBIAAAAIACAAIABgBIABAAIABAAIABAAIABgBIABABIABgBIABABIABgBIACgBIAAABIACgBIABgBIABABIAAgBIABgBIABABIABgCIACACIABgCIABAAIABAAIABgBIABAAIAAAAIACgBIABAAIACAAIAAAAIACABIAAgBIABgBIABAAIABgBIABAAIACABIABgBIABABIABgBIAAgBIACABIABgBIABgBIgBgBIABgCIgBgBIgBgBIABgBIgBgBIgBgBIABgBIgCgBIAAgBIAAgBIAAgBIgBgBIABgBIgBgBIgBgBIgBgBIABgBIgBgBIgBgCIABgBIgBgBIgBgBIABgBIgBgBIgBgBIABgBIgCgBIgBgBIgBgCIABgBIgBAAIAAgBIAAgBIAAgBIgBgCIgBgBIABgBIgBgBIgBAAIABgBIgBgBIgCgCIgBgBIABgBIgBgBIgBgBIgBgBIABgBIgBgBIAAgBIgBgBIABgBIgBgCIgBgBIgBgBIABgBIgBAAIgBgBIgCgBIABgBIgBgCIgBgBIgBgBIgBgBIABgBIgBgBIgBgBIgBgBIABgCIgBgBIgBgBIgBgBIgBgBIABAAIgBgBIgCgCIgBgBIAAgBIgCgBIABgBIgBgBIAAgBIgBgBIgBgBIABgBIgBgBIgBgCIgCgBIgBgBIgBgBIACAAIgBgBIgCgBIAAgBIgBgCIgBgBIgBgBIABgBIgBgBIgBgBIgCgBIgBgBIgBgBIgBgBIgBgBIABgBIgBgCIgBAAIgBgBIgBgBIgBgBIgBgCIgBgBIgBgBIgBgBIABgBIgBgBIgBgBIgBgBIgBgBIgBgBIgCgBIgBgBIgBgBIgBgBIAAgBIgBgBIgBgBIgBgCIgBgBIgCABIgwAxIABABIABABIABAAIABABIABACIABABIABABIABABIABABIABABIABABIgBABIABABIABABIABACIABABIABABIABABIABAAIgBABIABABIABABIABABIABACIABABIACABIAAABIAAABIABABIABABIABABIAAABIABABIABABIgBACIABAAIACABIAAABIABABIAAABIABACIABABIABABIAAABIAAABIABABIABABIABABIAAAAIAAACIABABIABABIACABIAAABIgBABIABABIACABIAAACIAAABIABABIAAABIABABIgBAAIABABIABABIABACIgBABIABABIABABIgBABIABABIACABIAAABIgBABIACABIABABIAAACIAAABIABAAIABABIgBABIABACIAAABIABABIgBABIABABIABABIgBABIABABIABABIAAABIAAABIABACIgBABIACABIAAAAIAAABIABABIAAACIAAAAIABACIABABIAAgBIABABgAkPhYIABgBIACAAIgCgBIACgBIABgBIgBgCIABgBIABgBIgBgBIABAAIABgBIgBgBIABgBIABgBIgBgCIABgBIABgBIgBgBIABgBIABgBIABgBIgBgBIABgCIABgBIgBAAIACgBIABgBIABgBIgCgBIACgBIAAgBIABgCIAAgBIAAgBIABgBIgBgBIABgBIABgBIABgBIgBgBIABgBIACgBIABgBIgBgBIABgBIABgBIABgBIgBgBIABgCIABAAIABgCIABgBIgBAAIABgBIABgBIABgBIACgBIgCgCIACgBIABgBIABgBIABgBIgBAAIABgBIABgCIABAAIABgCIgBgCIABgBIABgBIABAAIABgBIABgBIACgBIgBgCIABgBIAAgBIABgBIABgBIABgBIABgBIACAAIgCgBIABgCIACgBIABgBIABgBIAAgBIABgBIABgBIgBgBIABgBIABgBIABgBIACgBIABgBIABgBIABgBIABgBIABgBIABgCIABgBIgBgBIgwgwIAAABIgBAAIgBABIgBABIgCACIgBAAIgBACIgBABIgBABIgBABIgBABIgBABIgBABIgBABIAAACIAAABIgBABIgCABIgBABIAAAAIgBABIgBACIgBABIgCABIACABIgCABIgBABIgBABIgBABIgBABIgBABIgBABIABABIgBABIgBACIgBAAIgBABIgCABIgBABIABABIgBACIgBABIAAABIgBABIgBAAIAAABIAAABIgBABIgCABIgBACIABABIgBABIgBABIgBABIgBABIgBABIABABIgBABIgBABIgBABIgCABIACABIgCABIgBABIgBABIABABIAAACIgCABIAAABIgBABIAAAAIAAACIgBABIgBABIAAABIgBABIgBABIgBABIAAABIAAABIgBABIgBABIAAABIAAACIgBABIgBABIAAAAIAAABIgBABIgBABIABABIgBABIgBACIABABIgBABIgCABIgBABIABABIgBAAIgBABIAAACIAAACIgBABIgBABIABAAIgBABIgBABIABABIgBABIgBACIABAAIgBACIgBABIABABIgBAAIgBABIgCACIACABIgBABIgBABIABABIgBABIgBABIABABIgBABIgBABIABABIgBABIgBABIAAACIAAAAIAAABIABABIACgBIAAABIABABIACgBIABABIABAAIABAAIABABIABAAIABAAIABACIACgBIABABIABgBIABABIAAABIABAAIABAAIABABIABAAIACAAIABABIABgBIABABQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAABIABAAIABABIABAAIABAAIABABIABAAIACAAIAAABIABgBIABABIABgBIABABIACABIABgBIABABIABACIABgBIAAABIABABIACgBIABABIABgBIABABIABABIABgBIABABIABABIABgBIABABIABgBIACABIABAAIAAAAIABAAIABABIABAAIABAAIAAAAgAC5jZIABABIABABIABABIABABIABABIABABIABACIABABIABABIABABIAxgwIABgCIgBgBIgBgBIgCgBIgBgBIgBAAIgBgCIAAgBIgBgBIgBgBIgBgBIgCgBIgBgBIgBgBIgBgBIgBABIAAgBIgCgBIgBgBIgBgCIgBgBIgBgBIgBgBIgBgBIgBAAIgBABIgBgCIgBgBIgBgBIgCgBIAAgBIgCgBIgBgBIAAAAIgBgBIgBAAIgBgBIgCgBIgBgBIgBgBIgBABIgBgBIgBgCIgBgBIgBgBIgBgBIgBABIgCgBIgBgBIgBgBIAAgBIgBABIgBgBIgBgBIgCgBIgBgCIgBgBIgBABIAAgBIgBgBIgCgBIAAAAIgBABIgCgBIgBgBIgBgBIgBAAIgBAAIgBgBIgBgCIgBgBIgBABIgBgBIgBgBIgBgBIgCAAIAAAAIgBgBIgBgBIgBABIgBgBIgCgBIgBgBIgBABIgBgBIgBgBIgBgBIgBAAIgBAAIgBgCIgBgBIgBABIgBgBIgBAAIgBAAIgBAAIgBgBIgBgBIgBAAIgCAAIgBgBIAAAAIgBgBIgBgBIgBgBIgBABIgCgBIgBgBIgBABIgBgBIgBgBIgBAAIAAAAIgBgBIgCAAIgCAAIgBgBIgBgBIgBABIAAgBIgBgBIgBABIgBgBIgCgBIgBABIgBgBIgBgCIgBACIAAgCIgBgBIgBABIgBgBIgCABIgBACIAAABIAAABIgBABIABAAIgBACIAAABIAAAAIgBACIAAABIAAACIgBABIAAAAIAAABIABABIgBABIgBABIABACIgBABIgBABIABABIgBAAIgBABIABABIgBABQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABIgCABIABABIgBABIgBABIABABIgBABIgBABIABACIgBABIAAAAIAAACIgBAAIAAABIAAABIAAABIAAACIAAABIgCABIABABIgBABIABABIgBABIgBAAIABACIgBABIgBABIABABIgBABIABABIgBABIgBABIABABIgCABIgBACIABABIAAABIAAABIACAAIABAAIABAAIABABIABAAIABAAIABABIABAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAABAAIABABIAAgBIACABIABABIAAgBIABABIABABIABAAIACAAIABABIABABIABgBIABACIABAAIAAAAIACAAIABABIABABIACAAIAAAAIABABIABABIABAAIABAAIABACIACgBIAAABIACABIAAABIABAAIACAAIABABIABAAIAAAAIACAAIABACIABABIABgBIABABIABABIABABIABABIABAAIABAAIACACIAAAAIABABIABAAIABAAIABABIABABIACABIABAAIABAAIABABIABACIAAABIACgBIAAABIABABIACABIABABIABABIABABIABgBIABABIABABIABABIABACIABABIABABIABAAIABAAIABAAIABABIABABIABACIABAAIACACIABABIABgBIABABgAjhkSIgBACIgBABIgBABIgBABIgBAAIgBABIgBABIgBABIgBABIgBACIgCABIAAABIgBABIAvAxIABABIABgBIABgBIACgBIABgCIABAAIAAgBIABgBIABgBIABgCIACgBIABgBIABABIABgBIABgBIABgBIABAAIABgBIABgCIACAAIABAAIABgBIABgBIABgBIABgBIABgBIABgBIABgBIABABIABgBIABgBIABgBIABgBIABgCIABAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIACgBIABgBIABgBIABgBIAAAAIACAAIABgBIABgBIAAgBIACABIABgBIABgCIABAAIABgBIABABIABgCIABgBIACgBIAAAAIACAAIABAAIAAgBIABgBIABABIABgBIABgBIACgCIABACIABgCIABgBIABAAIABAAIABgBIABAAIABAAIABgBIABgBIACAAIAAAAIABAAIACgBIAAgBIABAAIACgBIABgBIABACIABgBIABgCIABgBIABABIABgBIABgBIACABIABgBIAAgBIABABIABgBIABgBIABABIABgBIACAAIABAAIABgBIABAAIAAAAIACgBIABgBIgBgCIABAAIgBgBIgBgBIABgBIgBgBIgBgBIABgBIgBgBIABgCIgBgBIgBgBIABgBIgBgBIgBgBIABgBIgBgBIABgBIgBgBIgBgBIABgBIgBgBIgBgBIABgBIgBgBIgBgBIABgBIgBgCIABgBIgBgBIgCgBIABAAIgBgBIgBgBIABgCIgBgBIgBgCIABgBIgBgBIABAAIgBgBIAAgBIAAgBIAAgCIgBgBIABgBIgBgBIgBAAIABgBIgBgBIABgBIgBgCIgBgBIABgBIgBgBIgCgBIACgBIgCgBIACgBIgCgBIgBgBIABgBIgBgBIgBgBIgBABIgBgCIAAABIgBABIgBgBIgBABIgCABIgBgBIgBABIgBACIgBgCIgBACIgBABIgBgBIgCABIgBABIAAABIgCgBIgBABIAAAAIgBAAIgBABIgBAAIgCAAIgBABIgBABIgBgBIgBABIgBABIgBAAIgBgBIgBACIgBABIgBgCIgBACIgCABIAAABIgBgBIgBABIgBABIgCgBIgBABIgBABIgBAAIgBAAIAAABIgBABIgCABIgBgBIgBABIgBABIgCABIgBAAIAAABIgBABIgBAAIgBAAIgBABIgCAAIgBAAIgBAAIgBABIAAABIgBABIgBABIgCgBIgBABIgBABIgBACIgBgBIgBABIgBABIgBABIgBAAIgCAAIgBAAIgBABIgBABIgBABIAAABIgBgBIgCABIgBACIgBABIgBAAIgBAAIgBABIgBABIgBABIgBABIgBABIgBgBIgCABIgBABIgBABIgBABIAAABIgBABIgBgBIgBACIgCAAIgBABIgBABIgBABIgBABIgBACIgBgCIgBACIgBABIgCABIAAABIgCABIgBAAIAAACIgBABIgCAAIAAgBIgCABgAA9kVIABABIACgBIABgBIABgBIgBgBIABgBIABgCIgBgBIABAAIgBgBIABgCIABAAIgBgBIABgBIABgBIgBgCIABgBIABgBIgBgBIABgBIgBgBIABgBIABgBIgBgBIABgBIACgBIgCgBIACgCIABAAIgCgBIABgBIgBgBIABgCIACgBIgBgBIABgBIABgBIgBAAIABgBIgBgCIABgBIABgBIgBgBIABgBIAAgBIAAgBIAAgBIACgBIgBgBIABgCIgBgBIABAAIABgCIgBgBIABAAIABgBIgBgBIABgBIABgCIgBgBIABgBIgBgBIACgBIABAAIgCgCIABgBIgBgBIgBABIgBgBIgBABIgBgBIgBgBIgBAAIgBAAIgBgBIgBABIgCgBIgBAAIgBAAIgBAAIgBgBIAAgBIgCABIgBgBIAAABIgCgBIgBgBIgBABIgBAAIgBAAIgBgBIgBAAIgBABIgBgBIgCAAIgBAAIAAAAIgCAAIAAAAIgBAAIgBgBIgBABIgCgBIgBAAIgBAAIgBAAIgBgBIgBABIAAAAIgBgCIgBABIgCgBIgBABIgBgBIgBABIgBgBIgBABIgBAAIgBAAIgCAAIgBAAIgBgBIgBgCIgBACIAAAAIgCAAIAAgBIgCABIgBgBIgBABIgBgBIgBABIgBgBIgBABIgBgBIgBAAIgCAAIAAABIgCgBIgBABIgBgCIAAACIgBgBIgBABIgBgCIgBACIgBgBIgBABIgBgCIgBACIgBgBIgBAAIgBAAIgBAAIgBAAIgBAAIgBAAIgCABIAAgCIgBACIgBgBIgBABIgCABIgBgBIgBABIgBgBIgBABIgBgBIAAABIgCgBIAAAAIgCAAIgBABIgBgBIgBABIgBAAIgBAAIgBAAIgBAAIgCAAIgBAAIAAABIgBgBIgCABIAAABIgBgBIgBABIgCgBIgBABIgBgBIgBABIgBgBIgBABIgBAAIgBAAIgBAAQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAIAAAAIgBABIgCgBIAAABIgBgBIgBABIgCABIAAgBIgCABIgBgBIgBABIgBgBIgBABIgBABIgBgBIAAABIgCABIgBgBIgCABIAAAAIgBABIAAABIAAABIABABIAAABIAAABIABABIgBABIABABIAAACIAAAAIABABIAAABIgBABIABABIACABIgCABIACABIgCACIACABIABABIgBABIABABIABABIgBABIABAAIABACIgBACIAAAAIAAABIABABIAAABIAAABIABABIAAABIgBACIABABIgBABIACABIAAAAIgBABIACACIAAAAIAAACIABABIAAABIAAABIABABIgBABIABABIAAABIAAABIABACIABABIgBAAIABACIABAAIgBABIACABIgCABIABABIABACIgBABIABABIABABIABABIABgBIABAAIACAAIABgBIAAAAIACAAIAAgBIABABIABgBIABABIABgBIACgBIABABIABAAIABAAIAAgBIABABIACgBIABAAIACAAIAAAAIACABIABgCIAAABIABgCIABAAIABABIABgBIACABIABgBIABABIABgBIAAgBIACABIAAgBIACABIABgBIABABIABgBIABABIABgBIABABIABgBIABABIABgBIACABIABgBIAAABIACgBIABABIABgBIAAABIABgBIABAAIABAAIABgBIABABIABgBIABABIABgBIABABIABABIACgBIABABIABgBIAAABIABgBIABABIABAAIABAAIABAAIACAAIABAAIABAAIABAAIABAAIABAAIABAAIABAAIABAAIABAAIACAAIABACIAAgCIABACIABgBIABABIABgBIACABIABABIABgBIABABIAAgBIABABIACgBIAAABIABABIACgBIABABIABgBIABABIABAAIABAAIABABIABgBIABABIABAAIACAAIAAAAIABAAIABABIABAAIABAAgAAaDsIgBABIgBgBIgBABIgBgBIAAABIgBgBIgCABIgBgBIgBABIgBgBIgBgBIgCgBIAAgBIgBgBIgBgBIgBgCIgCgBIACAAIgCgBIgBgBIACgBIABgBIgBgBIABgBIgBgCIABgBIABgBIABgBIgBgBIABgBIABACIABgBIABgBIABgBIABgBIACABIABgCIAAgBIACABIAAgBIABABIABgBIABABIABgBIACAAIABAAIABgBIABABIABgBIABABIABgBIABgBIABABIABgBIABABIABgBIABgBIABABIABgBIABABIACgBIABAAIABAAIABgBIABAAIABAAIAAAAIACAAIABgBIACAAIAAAAIABgBIABAAIABABIABgBIABgBIABABIABgBIACABIABgCIABgBIABABIAAgBIABgBIABABIABgBIABgBIACABIACgBIABgBIAAgBIABABIABgBIABgBIABABIABgBIABgBIACAAIABAAIABgBIAAAAIACAAIABgBIABgBIABgBIABABIABgBIABgBIABgBIABABIABgBIABgBIACgBIABABIABgBIABgBIABgBIAAgBIABABIABgCIABgBIACgBIABAAIABAAIABgBIABgBIABAAIABgBIABABIABgCIABgBIABAAIABgCIABgBIABABIABgBIABgBIABgBIACgBIABgBIABgBIABgBIABAAIAAABIACgBIABgCIABgBIABgBIABgBIABgBIABgBIABgBIABgBIABgBIABgBIACgBIABgBIABgBIABgBIAAAAIACAAIAAgBIgBgBIACgBIABgCIABgBIABgBIABgBIABgBIABAAIABgBIABgBIABgBIABgCIACgBIABgBIABgBIABgBIgBgBIABgBIABgBIAAgCIACgBIABgBIABgBIABAAIgBgBIABgBIABgCIABgBIABgBIABgBIABgBIgBgBIABgBIABgBIABgBIACgBIgCgBIACgBIABgBIABgCIABAAIgBgBIABgBIABgBIABgBIABgCIgBgBIABgBIABgBIACgBIgCAAIACgBIABgBIABgBIgBgCIABgBIABgBIgBgBIABgBIAAAAIABgCIgBgBIABgCIABgBIABgBIgBgBIABAAIABgBIAAgBIABgBIABgBIgCgCIACgBIABgBIgBgBIABAAIABgCIgBgBIABAAIABgCIABgBIgBgBIABgBIABgBIgBgBIABgBIgBgBIABgBIABgCIgBgBIABgBIABgBIgBgBIABAAIgBgBIABgBIACgCIgCgBIACgBIABgBIgBgBIABgBIgBgBIABgBIABgBIgBgCIABgBIgBAAIABgBIgBgBIABgBIABgBIgBgBIABgBIgBgCIABgBIgBgBIABgBIABgBIgBgBIABAAIgBgBIABgCIgBgBIABgBIgBgCIABgBIABAAIgBgBIABgBIgBgBIABgCIgCgBIACgBIgBgBIABgBIgBAAIABgBIgBgBIABgBIgBgCIABgBIgBgBIABgBIgBgBIABAAIgBgBIABAAIgBgCIABgCIgBgBIABgBIgBAAIABgBIgBgBIABgBIgBgBIABgCIgBgBIgBgBIABgBIgBgBIABgBIgBAAIABgBIgBgCIABgBIgBgBIgBgBIABgBIgBgBIABgBIAAgBIAAgBIAAgCIgBgBIABAAIgCgCIABgBIAAgBIABgBIgCgBIgBgBIABgBIgBgBIABgBIgBgBIgBgBIABgBIgBgBIgBgBIACgCIgCgBIACgBIgCgBIgBAAIABgBIgBgBIgBgBIABgBIgBgCIABgBIgBgBIgBgBIABgBIgBgBIgBgBIgBgBIABgCIgBgBIgBgBIACgBIgBgBIgBAAIAAgBIgBgBIgBgBIACgCIgCgBIgBgBIABgBIgBgBIgBgBIgBgBIABgBIgBgBIgBgBIgBgBIABgBIgBgBIgBgBIABgBIgBgBIgBgBIgBgCIABgBIgBgBIgCgBIAAAAIABgBIgCgBIgBgBIgBgCIAAgBIABgBIgBgBIgBgBIgBgBIgBgBIABgBIgBgBIgBgBIgCgCIgBgBIABgBIgBgBIgBAAIgBgBIgBgBIAAgBIgBgCIABgBIgBgBIgBgCIgBAAIgCgBIgBgBIgBgBIgBgCIABgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgCgBIACgCIgCgBIgBgBIgBABIgBgBIgBgBIAAgBIgBAAIgBgCIgBgBIgCgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgCIgCACIAAgCIgBgBIgBgBIgBgBIgBgBIgBgBIgCgBIgBACIgBgBIgBgBIgBgBIAAgCIgBgBIgBAAQgBABAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIgBgBIgBgBIgBgBIgBgBIgBABIgBgBIAAgBIgCgBIgBAAIgCAAIgBgCIgBAAIAAgCIgBABIgBgBIgBgBIgBAAIgCAAIgBAAIgBgBIgBgBIgBAAIgBgBIAAAAIgCgCIgBABIgBgBIgBgBIgBgBIgBABIgBgBIgBgBIgBAAIgBAAIgBgCIgCABIgBgBIgBAAIAAgBIgBABIgBgBIgBgBIgBAAIgCAAIgBgBIgBAAIgBAAIgBgCIAAABQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBIgBgBIgCABIAAgBIgBgBIgBgBIgCAAIAAAAIABgBIgBAAIgBgCIgBgBIgBgBIABgBIgBgBIgCgBIACgBIABgBIgBgBIABgBIgBgBIABgCIABgBIABgBIABgBIABgBIABAAIABgBIACgBIAAABIACgBIABABIAAgBIABABIABgBIACABIAAgBIACAAIABABIABAAIABABIABAAIAAAAIACAAIABABIABAAIABAAIABABIABAAIABAAIABABIABAAIABAAIABACIABABIACAAIABAAIABABIABAAIAAAAIABABIABABIACgBIABABIABABIABgBIABABIABABIABABIABgBIABABIABABIABACIABgBIACABIAAABIABABIABgBIABABIABABIACABIABABIABgCIABABIAAABIABACIACgBIAAAAIABACIACABIABABIABABIABgBIABABIABABIABABIABABIABAAIABAAIABABIABABIABACIABABIABABIABAAIABAAIACABIABABIABAAIABACIABABIABABIABABIABgBIABABIABABIABABIABABIABABIABABIABABIABABIABACIACABIABABIABABIABABIAAABIABABIABABIABABIABABIACABIABABIABABIABABIABABIABABIABABIABACIABABIABABIABABIABABIABABIABABIABABIABABIgBABIABABIABABIACABIABABIABABIABABIAAABIgBACIABABIABABIABABIABAAIABABIACABIgBABIABACIABABIABABIABABIAAABIAAABIABABIAAABIABABIABACIgBABIABABIACABIABAAIABACIgBABIABABIABABIABABIAAABIAAABIABABIABABIAAABIAAABIABABIABACIAAAAIAAACIACABIAAABIgBAAIABABIACACIAAAAQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAIABABIABABIABABIAAABIAAABIABABIgBABIABABIABABIgBABIABACIABAAIgBABIABABIABABIgBABIACACIABABIAAABIAAABIABAAIAAACIAAAAIABACIAAABIAAACIABABIgCABIABAAIABABIAAABIAAABIABABIgBACIABABIgBABIABABIABABIgBABIABABIABAAIgBACIABABIgBABIABABIAAABIAAABIACABIgCABIACABIAAACIgBABIABABIAAABIABAAIgBABIABABIAAACIAAABIAAABIAAABIABABIgBABIABABIAAABIAAABIAAABIAAACIABABIgBABIABABIAAAAIgBABIABABIgBABIABACIgBABIABABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIgBAAIABABIgBABIABABIgBABIABACIgBABIABABIgBABIABAAIgBACIABAAIgBABIABACIgBABIABACIAAAAIAAABIgBABIABABIgBABIABABIgBABIgBABIABABIgBACIABABIgBAAIAAABIAAACIgBABIABABIgBABIABABIgBABIABABIgBABIgCABIACABIgCABIABACIAAAAIABACIgCAAIgBABIABABIgBABQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIAAACIgCABIABABIgBABIABAAIgBACIgBABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIgBABIAAABIgBABIgBACIABABIgBAAIABACIgBABIgBAAIABABIgBACIgBABIABABIgBABIgCABIgBABIABABIgBABIgBABIABABIgBABIAAABIABABIgBACIgBAAIAAABIAAABIgBABIAAABIAAACIgBABIgBABIAAABIAAAAIgCABIgBABIABACIgBAAIgBACIAAABIAAABIgBABIgBABIAAABIAAABIgBABIgBACIABAAIgBACIgBABIgBABIgCAAIABABIgBABIgBABIgBACIAAABIAAABIAAABIgBABIgBAAIgCACIABABIgBABIgBABIgBABIgBABIgBABIABABIgBABIgBABIgBABIgBABIgBABIgBACIABABIgBAAIgCABIgBABIgBABIgBABIAAACIgCABIACABIgBABIgBAAIgBABIgBABIgCABIgBACIgBABIgBABIgBABIgBABIgBABIgBABIgBABIgBABIgBABIgCABIAAABIgBABIgBACIgBAAIgBABIgCABIgBABIgBACIgBABIgBABIgBABIgBAAIgBABIgBACIgBAAIgBACIgCABIgBABIgBgBIgBABIgBABIgBABIgBABIgBABIgBABIgBABIAAgBIgCABIgBACIgBAAIgBABIgBACIgBAAIgCAAIgBAAIAAABIgBABIgCABIAAABIgCgBIgBABIgBACIgBABIgBABIgBgBIgBABIgBABIgBABIgBAAIgCAAIgBABIgBABIAAABIgBgBIgBABIgBABIgCABIgBABIgBgBIgBABIgBABIgBABIgBgBIgBABIgBABIgBAAIgBAAIgBABIgBAAIgBAAIgBABIgBABIgBAAIgCAAIgBABIgBABIgBgBIgBABIAAABIgCgBIgBACIgCABIAAAAIgBAAIgCABIAAAAIgBAAIgBAAIgBAAIgBAAIgCABIgBABIgBgBIgBABIgBABIgBgBIAAABIgBABIgCgBIgBACIgBgCIgBACIgBAAIgBAAIgBABIgBAAIgBAAIgCAAIAAAAIgCABIgBAAIAAAAIgBABIgBgBIgBABIgBAAIgCgBIgBABIgBABIgBgBIgBABIAAgBIgCABIgBgBIgCABIAAAAIgBAAIgBABIgCgBIAAABIgBgBIgBABIgBABIgCgBgAgZDsIgBABIgBgCIgCABIAAAAIgCAAIAAgBIgBgBIgBABIgBgBIgCABIgBgBIgBABIgBAAIgBgBIAAAAIgCAAIAAAAIgCAAIgBAAIgBAAIgBgBIgBAAIgBAAIgBgBIgBABIgBgBIgCAAIAAAAIgBgBIgCAAIAAAAIgBAAIgCgBIAAgBIgBABIgCgBIgBgBIgBABIgBgBIgBABIgBgBIgBgBIgBAAIgBAAIgBgBIgBAAIgBAAIgBgBIgBABIgBgBIgBgBIgBABIgCgBIAAgBIgCAAIgBAAIgBgBIAAgCIgCACIgBgCIgBgBIgBABIgBgBIgBgBIgBABIgBgBIgBgBIgBAAIgBAAIgBAAIgCgCIAAABIgCgBIAAgBIgBgBIgBABIgBgBIgBgBIgCgBIgBAAIgBAAIgBgBIgBgCIAAAAIgBAAIgBAAIgBgBIgCgBIgBABIgCgBIAAgBIgBgBIgBgCIgBACIgBgCIgCgBIgBgBIgBgBIgBAAIgBAAIAAgBIgBgBIgBgBIgBgBIgCABIgBgBIgBgCIgBgBIgBgBIgBgBIgBgBIgBACIgBgBIgBgBIgBgBIgBgBIgBgBIgBgCIgBgBIgBAAIgBAAIgCgBIgBgBIgBgBIgBgBIgBgBIAAgBIgBgBIgBgBIgBgBIgCgBIgBgBIgBgBIgBgBIgBgBIgBgBIgBgCIgBgBIgBgBIgBgBIgBAAIgBgBIgBgCIgBgBIgBgBIgBgBIgBgBIgCgBIgBgBIgBgBIgBgBIgBgBIAAgBIgBgCIABgBIgBgBIgBgBIgBgBIgCgBIgBAAIgBgCIgBgBIABgCIgBgBIgBgBIgBgBIgBAAIgBgBIgBgCIABgBIgBgBIgBgBIgBgBIgBgBIgCgBIABAAIAAgBIgBgBIgBgBIgBgCIABgCIgBAAIgBgBIgCgBIgBgBIACgBIgBgBIgBgCIgBgBIgBgBIABgBIgCgBIAAAAIgBgCIABgBIgBgBIgBgBIgBgBIABgBIgBgBIgCgBIACgBIgCgBIgBgBIgBgCIABgBIgBgBIgBgBIgBgBIABAAIgBgBIgBgBIABgBIgBgCIgBgBIACgBIgBgBIgBgBIABgBIgBgBIgBgBIABgCIgBgBIgCgBIgBgBIABAAIgBgBIgBgBIABgCIgBgBIgBgBIABgBIgBgBIABgBIgBgBIgBgBIABgBIgBgBIgBgBIABgBIgBgBIABgBIAAgCIgBAAIABgBIgBgBIgBgBIABgCIgBgBIABgBIgCgBIAAgBIABAAIgCgBIABgBIgBgBIgBgCIABgCIgBgBIABAAIgBgBIABgBIgBgBIgBgBIABgCIgBgBIABgBIgBgBIABAAIgBgBIgBgBIABgBIgBgCIABgBIgBgBIABgBIgBgBIgBgBIABgBIgBgBIABgBIgBgBIABgBIgBgBIABgBIgBgBIABgBIgBgCIABgBIgBgBIABgBIgBgBIABgBIgBgBIABgBIgBAAIABgBIgBgBIABgBIgBgBIABgBIgBgBIABgBIgBgBIABgBIgBgBIABgBIgBgCIABgBIgBgBIABgBIgBgBIABgBIgBgBIABgBIgBgBIABgBIACgBIgBgBIABgBIgBgBIABgBIgBgBIABgBIABgBIgCgCIABgBIgBgBIABgBIgBAAIACgBIABgBIgCgBIACgCIgBgBIABgBIgBgBIABgBIABgBIgBgBIABgBIgBgBIABgBIABgBIgBgBIACgBIgBgBIAAgBIABgBIAAgBIAAgCIABgBIgBgBIABgBIgBgBIABAAIABgBIgBgBIABgCIABgBIgBgBIABgBIgBgBIABgBIABgBIgBgBIABgBIACgBIgCgBIACgBIABgBIABgBIgBgBIABgBIABgBIgBgBIABgCIABgBIgBgBIABgBIABgBIgBgBIABgBIABgBIgBgBIABgBIABgBIACgBIgCgBIACgBIABgBIABgBIgCgBIABgCIABgBIAAAAIABgCIABgBIABAAIgBgCIABgBIABgBIABgBIgCgBIABgBIABgBIACgBIABgBIgBgBIABgBIABgCIABAAIABgCIgBgBIABgBIABAAIABgBIABgBIgBgBIABgCIACgBIABgBIABgBIABgBIgBAAIABgBIAAgCIABgBIABgBIABgBIACgBIgBgBIABgBIABgBIABgBIABgBIABgBIABgBIABgBIgBgCIABgBIABAAIABgCIACAAIABgCIABgBIABgBIAAgBIABgBIACgBIABgBIABgBIABgBIABgBIABgBIABgCIABgBIABgBIABAAIABgBIACgBIABgBIABgCIABgBIAAgBIACgBIAAgBIACAAIABgCIABgBIABgBIABgBIABgBIABgBIABABIABgBIABgBIACAAIABgBIABgBIABgBIAAgBIACgCIAAABIABgBIACgBIABgBIABgBIABgBIABAAIABAAIABgBIABgBIABgBIABgBIABABIACgCIABAAIAAgCIABgBIABAAIABAAIABgBIACAAIABgBIABABIABgBIABgBIABgBIABgBIABABIACgCIABgBIABAAIABABIAAgBIABgCIABAAIABAAIABgBIACgBIABAAIABABIABgBIABgBIABABIABgBIABgBIABgCIABACIACgCIAAgBIABABIABgBIABgBIABAAIABAAIACgBIABAAIABAAIABgBIAAAAIABAAIACAAIABgBIABABIABgBIACgBIAAABIABgBIABgBIABAAIABAAIABABIABgCIACABIABgBIABABIAAAAIACAAIABABIABACIABAAIABABIABABIABABIABABIgBACIABABIgBABIABABIAAABIAAABIgBAAIABACIgBACIgBABIgBABIgBABIgBAAIgCABIgBABIgBABIgBgBIgBABIgBABIgBgBIgBABIgBABIgBgBIgBABIgBABIgBAAIgBABIgBABIgCgBIgBABIgBABIgBAAIgBAAIAAAAIgBABIgBgBIgBABIgCABIgBgBIgBABIgBACIgBAAIgBAAIgBAAIgBACIgCAAIAAAAIgBABIgBABIgCABIAAgBIgBABIgBABIgBAAIgCAAIgBAAIgBABIgBABIgBABIAAAAIgBAAIgCACIgBABIgCgBIgBABIgBABIgBABIAAABIgBAAIgBAAIgCABIgBABIgBABIgBABIgBACIgBgBIgBABIgBABIgBABIgBAAIgCABIAAABIgBABIgCgBIAAABIgBABIgBACIgBABIgCABIgBABIgBABIgBABIgBABIgBABIgBABIgBABIgBABIgBABIgBABIgCABIgBgBIAAABIgBABIABABIgBABIgBACIgBABIgCABIgBABIgBABIgBAAIgBABIgBABIgBABIgBACIgBABIgBABIgBABIgCABIABAAIgBACIgBABIAAABIgBABIgBABIgBABIgCABIABABIgBABIgBABIgBABIgBABIgBABIgBACIABAAIgBABIgBABIgBABIgBABIABABIgBACIgBABIgBABIgBABIAAABIgBAAIgBABIAAACIgBAAQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABIgBABIgBABIAAABIAAABIgCABIgBABIABABIgBACIgBABIAAABIAAAAIgBABIgBABIABABIgBACIgBABIgBABIABABIgBABIgBABIAAAAIAAACIgBABIABABIgCABIgBABIABACIgBAAIgBABIABABIgBABIgBABIgBACIABABIgBABIAAABIABABIgBABIAAAAIAAACIgBABIAAABIAAABIgBABIABABIgBABIAAAAIAAACIgCABIABABIAAABIgCABIABABIgBABIABABIgBABIgBABIAAABIAAACIAAABIAAABIAAABIAAABIgCABIABAAIAAACIAAABIgBABIABABIAAABIgBABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIgBAAIAAACIAAABIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAABIAAAAIAAACIAAAAIAAAAIAAACIAAAAIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAAAIAAACIAAABIAAABIAAABIABABIgBABIABABIgBABIABABIgBABIABABIgBACIABABIABABIgBABIABABIgBAAIABACIgBAAIABABIAAACIAAABIABABIgBABIAAABIAAABIABABIABABIgBACIABABIgBABIABABIABAAIgBABIABABIABABIgBABIACACIgBABIABABIAAABIAAABIABABIAAABIAAABIABABIgBABIABABIAAABIAAABIAAABIABABIABABIgBABIABACIABABIgBABIABABIABABIgBAAIABABIABACIgBABIACACIAAAAIAAACIABABIABAAIABABIgBABIABABIAAACIABABIAAABIAAABIABAAIAAACIABABIABABIAAABIAAABIABABIABABIAAABIAAABIABABIABABIABABIAAACIAAABIABABIAAABIACAAIAAACIAAAAIABABIABACIABABIABABIgBABIABABIABABIABABIABABIABABIAAACIAAAAIABACIABAAIACACIABAAIABABIABABIAAACIAAABIAAABIABABIABABIABABIABABIACABIABABIABACIABABIABABIABABIABABIABABIABABIABABIgBAAIABACIABABIABgBIABABIABABIABABIABABIABABIACABIABABIABACIABABIAAABIABABIABABIABABIABABIACABQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIABAAIABABIABACIABABIABABIABABIABABIABABIABgBIABABIABABIABABIABABIABABIABgBIACABIABACIABABIABAAIAAAAIABAAIABABIABABIABABIACAAIABAAIABACIABABIABABIABgBIABABIABABIACABIAAAAIACAAIABABIAAABIABgBIABABIABABIABABIACgBIABABIABACIABgBIAAABIACABIAAABIABgBIABABIACABIABgBIABABIABAAIABABIABAAIABABIABABIABgCIABABIABABIACgBIAAABIABACIABgBIABABIABgBIACABIABABIABAAIABAAIABABIABAAIABAAIABABIAAAAIACAAIACAAIAAABIABABIABgBIABABIABAAIABAAIABAAIACAAIABAAIABABIAAAAIABAAIABAAIACAAIABABIABgBIABABIABAAIABAAIABAAIABAAIABABIABgBIABABIACAAIAAABIACgBIAAAAIABACIABgBIABABIACABIABABIABABIACABIgBAAIABABIABABIAAABIgBABIABACIgBABIABABIABABIgBAAIgBABIABABIgBABIAAACIgBABIgBABIgBABIgCABIgBABIgBAAIgBAAIgBAAIgBAAIgBABIgBgBgABDChIgBABIgBAAIgBAAIgBgBIgCgBIgBgBIgBgBIgBgBIAAgBIgBgBIgBgCIABAAIgBgBIABgBIgBgBIgBgCIABgBIgBgBIABgBIgBgBIABgBIgBgBIABAAIgBgBIABgCIgBgBIABgBIgBgCIgCAAIACgBIgCgBIACgBIgCgCIACgBIgCgBIgBgBIABAAIgBgBIACgBIgBgBIgBgBIABgCIgCgBIABgBIAAgBIgCgBIABgBIgBgBIgBgBIABgBIgBgBIAAgBIAAgCIAAgBIAAAAIAAgCIgBgBIgBABIABABIgBABIgBABIgCABIgBABIABABIgBACIgBABIgBABIgBABIgBABIgBABIgBABIgBABIgBABIgBACIAAAAIgBACIgBABIgBAAIAAAAIgBAAIgBABIgBABIgCABIgBACIgBABIgBABIgBABIgBAAIgBgBIgBABIgBABIgBABIgBABIgBABIgBgBIgBABIgBACIgBABIgBgBIgCABIgBABIgBABIgBgBIgBABIgBABIgBAAIAAAAIgCABIAAAAIgCAAIgBABIAAAAIgBAAIgBABIgBAAIgBAAIgCAAIgBAAIgBABIgBABIgBgCIgBACIgBgCIgBACIAAABQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIgBABIgBgBIgBABIgBgBIgBABIgBgBIgBABIgCAAIgBAAIgBABIAAgBIgCABIAAgBIgBABIgCgBIAAABIgCgBIgBgBIgBABIgBgBIgBAAIgBAAIgBABIgBgBIgBAAIgBAAIgBgBIgCAAIgBAAIAAAAIgBgBIgBgBIgBABIgCgBIgBABIgBgBIgBgBIgBABIgBgBIAAgBIgCABIgBgBIgBgBIgBgBIgBABIgBgBIgBgBIgBABIgBgBIgBgBIgBgBIgCABIAAgBIgBgBIgBgCIgBgBIgCACIgBgBIgBgBIgBgBIgBgBIgBAAIgBAAIgBgBIgBgBIgBgCIgBgBIgBgBIgBgBIgBgBIgCgBIgBgBIAAgBIgBgBIgBgCIgBgBIgCgBIgBAAIgBgBIgBgBIgBgBIAAgBIgBgCIgCgBIABgBIgBgBIgBgBIgBAAIgBgBIgBgBIABgCIgBgBIgBgBIgBgBIAAgCIAAAAIAAgBIgCgBIAAgBIgBgCIABgBIgCgBIgBgBIgBgBIABAAIgBgCIgBgBIABgBIgBgBIgBgBIgBgBIABgBIgBgBIgBgBIABgBIgBgBIgBgBIgBgCIACgBIgCgBIABAAIgBgBIgCgBIACgBIgBgBIgBgCIABgBIgBgBIgBgBIABgBIgBgBIgBgBIABgBIgBgCIgBgBIABgBIgCgBIABgBIAAAAIgBgBIAAgBIAAgBIABgCIgBgBIgBgBIABgBIgBgBIABgBIgBgBIgBgBIABgBIgBgBIABgBIgBgBIABgBIgBgBIgBgBIABgBIgBgBIABgCIgBAAIABgCIgBgBIABgBIgBgBIgBgBIABgBIgCgBIACgBIgBgBIABgBIgBgBIABgBIgBgBIABgBIgBgBIABgCIgBgBIABgBIgBgBIgBgBIABAAIgCgBIACgBIgBgBIABgCIgCgBIACgBIgBgBIABgBIgBAAIABgBIgBgBIABgCIgBgBIABgBIgBgBIABAAIgBgBIABgBIgBgBIACgBIgCgCIACgBIgCgBIACgBIgCgBIACAAIgCgCIABgBIABgCIgBgBIABAAIAAgBIABgCIgCAAIACgBIgBgBIABgBIgBgCIABgBIgBgBIABgBIgBgBIABAAIABgBIgBgBIABgBIgBgCIABgBIgBgBIABgBIgBgBIABgBIgBgBIABgBIABgBIgBgBIABgCIgBgBIABAAIgBgBIABgBIABgBIgBgBIAAgCIAAgBIAAgBIAAgBIABgBIABgBIgBgBIABgBIgBgBIABgBIgBgBIABgBIABgCIgBAAIABgBIgBgBIABgBIgBgBIABgCIABgBIgBgBIABgBIgBAAIABgBIACgBIgCgCIABgBIgBgBIABgBIABgBIgBgBIABgBIgBgBIABgBIACgBIgBgBIABgCIgBgBIABAAIABgBIgBgBIABgBIgBgBIABgCIAAgBIAAgBIAAgBIACgBIgBgBIABgBIgBgBIABgBIABgBIgBgBIABgBIABgBIABgBIACgBIAAgBIACgBIAAgCIABAAIABAAIABgBIABAAIACAAIABgBIABABIABgBIAAAAIACABIAAgBIABgBIACABIABgBIABAAIABgBIABAAIABAAIABAAIABAAIABAAIACgBIAAABIACgBIABABIAAgBIABgBIABABIABgBIACABIABgBIABgBIABABIABgBIABABIABgBIABgBIABABIABgBIACABIAAgCIABACIABgCIABAAIABAAIABAAIABAAIACgBIABABIABgBIABAAIAAABIACgBIAAABIACgCIABAAIACABIAAgBIABAAIABAAIABAAIABgBIABABIABgBIACAAIABAAIABAAIABAAIAAAAIACAAIAAAAIACABIABgBIABgBIABABIABgBIABABIABgBIABAAIABAAIABABIACgBIAAABQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIABAAIABAAIAAAAIABAAIABAAIABAAIACgBIABABIABAAIABAAIAAAAIACAAIABgBIABABIABAAIABAAIACAAIAAAAIABAAIABAAIABAAIABAAIABAAIABAAIABAAIABAAIABAAIAAAAIACAAIABAAIABAAIAAAAIACAAIABAAIABAAIABAAIABAAIABAAIABABIABgBIACABIABgBIABABIABgBIAAABIABgBIABABIACgBIAAABIACAAIABAAIABABIABgBIABABIABAAIABAAIABAAIACAAIAAAAIACAAIABABIAAgBIABABIABAAIABAAIABAAIACAAIABABIABAAIABABIABgBIAAAAIABACIACgBIAAABIACgBIACABIAAABIABAAIABAAIABAAIABAAIABABIABAAIACAAIABABIABAAIAAAAIABABIABgBIABABIABABIACgBIABABIABAAIABAAIABABIABgBIABABIAAABIACACIACgCIABACIABABIAAgBIABABIABABIABABIABgBIACABIABABIABgBIABABIABABIABABIABgBIABABIAAABIACABIABABIABgCIABACIABABIABABIABABIABgBIABABIABABIABABIABABIABAAIABAAIABACIABABIABABIACABIABABIABABIABABIAAABIABABIABACIACgCIAAABIACABIgCACIACABIABAAIABABIABABIABABIABABIABACIABABIABABIABABIgBAAIABABIABABIABABIABABIABACIAAABIAAABIABABIABABIgBABIABABIABABIABACIgBABIACABIABABIAAAAIAAACIABABIAAAAIAAACIABABIAAABIAAABIABABIAAABIgBABIABABIgBABIABABIABACIgBABIABABIgBAAIABABIABABIgBABIABACIgBABIABABIgBABIACABIgBAAIAAABIABACIgBABIABABIgBACIABAAIgBACIABAAIgBABIABABIgBABIABACIgBABIgBABIABABIgBABIABABIgBAAIABACIgBAAIgBABIABACIgBABIABABIgBABIgBABIABABIgBABIABABIgBACIAAABIAAABIgBAAIgBAAIABABIgBABIgBABIABACIgBABIgBABIgBABIAAABIAAABIgBAAIgBACIABABIgCABIAAABIgBABIABABIgBABIgBABIgBABIgBABIAAABIAAACIgCABIgBABIgBABIgBABIgBAAIgBACIgBABIgBABIgBABIAAABIAAABIgCABIgBABIgBgBIgBABIAAABIgBABIgBABIgBACIgCAAIgBACIgBABIgBAAIgBAAQAAABAAAAQAAAAAAAAQgBAAAAgBQAAAAAAAAIgBABIgBABIgBABIgCABIABACIACgBIABABIABABIABgBIABABIABABIABAAIABAAIACABIABgBIAAABIACgBIAAABIABABIABgBIABABIABgBIACABIABABIABgBIABAAIABAAIABABIABgBIABABIABAAIABAAIABABIABgBIABABIABgBIABABIABgBIABABIACABIABgBIABABIABAAIABAAIAAgBIACABIAAgBIACABIABACIABgCIABACIABABIABABIABABIABAAIAAABIAAABIABACIAAAAIAAACIAAABIAAABIAAABIAAABIgBABIABABIgBABIgBABIgBABIgBABIgBACIhPBNIgBABIgBACIgBAAQgBAAAAAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgBAAIgBAAIgBAAIgBABIgBgCgAgfB+IABABIABgBIAAAAIACAAIABAAIABAAIABgBIABABIABgBIABABIABgBIABABIABgBIACAAIAAAAIACgBIABAAIAAAAIABgBIACAAIABAAIABgCIABACIABgCIABgBIABAAIABAAIABgBIABgBIABAAIABABIABgBIABgBIABgBIAAABIABgBIACgBIABgBIABgCIABgBIABgBIABgBIABgBIABABIABgBIABAAIABgBIgBgBIABgCIACgBIABgBIABgBIABgBIAAgBIABgBIABgBIgBgBIACgBIABgBIABgBIABgBIgCgCIACAAIABgCIABgBIgBgBIABgBIABgBIgBgBIABgBIABgBIgBgBIABgBIABgBIgBgBIABgBIgBgBIABgBIABgBIgBgBIABgBIgBgBIABgBIABgBIgBgBIABgCIACAAIABgCIgBgBIABgBIABgBIABAAIAAABIABgBIACgCIAAAAIACAAIABgBIABABIABgBIABABIABACIABgCIABACIABABIACgBIAAABIABABIABABIAAABIABABIAAABIABABIABABIgBABIABABIABABIABABIgBABIABABIACABIAAABIAAACIABABIABABQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABIABAAIAAABIAAABIAAABIABACIgBABIABABIABABIABABIgBABIABABIABABIgBABIABABIACACIgBAAIABABIABABIgBACIABABIgBAAIABACIABABIgBABIABABIABABIgBABIABABIABABIgBACIABAAIgBABIABACIAAAAIAAABIABABIgBABIABABIABACIAqgqIABgBIgBgBIgBAAIAAAAIgCgBIgCABIgBgBIAAAAIgBAAIgBgBIgBABIgBgCIgBACIgBgCIgCgBIgBABIgBgBIgBgBIAAABIgBgBIgBgBIgBABIgCgBIgBgBIgBABIgBgBIgBABIgBAAIgBgBIgBgBIgBABIgCgBIgBgBIAAAAIgBgBIgBgBIgBABIgBgBIgBgBIgBgBIgCABIgBgBIgBgBIgBAAIgBAAIgBgBIgBgBIAAAAIgCAAIgBgBIgBgBIgCAAIAAAAIgBgBIgBgCIgBABIgBgBIgBgBIgCgBIgBgBIAAgBIABgBIgCgBIgBgBIABgBIgBgBIAAgBIAAgBIAAgBIAAgBIABgBIgBgBIACgBIAAgBIACgBIABgCIABgBIABAAIABgBIABABIABgBIABgBIABABIABgBIACABIAAgBIACgBIABABIABgBIAAABIABgBQABgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIABABIABgBIABgBIABAAIABgBIABgBIABAAIAAAAIACgBIABAAIACAAIABgBIABAAIABgBIAAgBIABABIABgBIACgCIABAAIABgCIABgBIABgBIABgBIABgBIABABIABgBIACgBIABgBIgBgBIABgBIABgBIABgBIAAgCIABAAIABgBIABgBIACgBIgBgBIABgCIABgBIABgBIgBgBIABgBIABAAIABgBIgBgBIABgBIAAgBIACgBIgBgBIABgBIgBgBIABgBIABgBIgBgBIABgCIABgBIgBgBIABgBIABgBIgBAAIABgBIgBgBIACgBIgCgCIACgBIgCgBIACgBIgCgBIACgBIABgBIgBgBIgCgBIACgCIgCgBIACAAIgCgBIABgBIgBgBIACgBIgCgBIACgCIgCgBIgBgBIABgBIgBgBIgBgBIABgBIgBgBIgBgBIABgBIgBgBIgBgBIABgBIgBgBIAAgBIAAgBIgBgBIgBgCIgBgBIABgBIgBgBIgBgBIgBAAIABgBIgBgBIgBgBIgBgCIgBgBIgBgBIgBgBIgBgBIgBgBIgCgBIACgBIgBgBIgBgBIgBgCIgCABIAAgBIgBgBIgBgBIgBAAIgBgBIgCgBIgBgBIgBgCIgBgBIgBABIgBgBIgBgBIgBgBIAAAAIgCAAIgBgBIgBgBIgBgBIgBAAIgBAAIgBgBIgBgCIgCACIgBgCIAAgBIgBgBIgBABIgBgBIgBgBIgBABIgBgBIgCgBIgBABIgBgBIgBgBIgBABIAAgBIgBgBIgBgBIgCABIgBgBIgBABIgCgBIAAAAIgBAAIgBgCIgBgBIgBACIgCgBIgBAAIgBAAIgBgBIgBAAIAAAAIgBgBIgBABIgBgCIgCABIgBAAIgBAAIgBgBIgBgBIgBABIgBgBIgBABIgCgBIAAABIgBgBIgCAAIgBAAIAAAAIgBAAIgBgBIgBABIgCAAIgBgBIgBAAIgBgBIgBABIAAAAIgCAAIgBAAIgBAAIgBAAIgBAAIgBAAIgBAAIgBAAIgBAAIgBgBIgBAAIgBABIgCgCIgBABIgBgBIgBABIAAgBIgBABIgBgBIgBABIgBgBIgBABIgBAAIgBAAIgBAAIAAAAIgCgBIgBABIgBgBIgBABIgBgBIgBABIgCABIAAgBIgBABIgBgBIgBABIgCgBIgBABIgBgBIgBABIgBgBIgBABIgBgBIgBABIgBgBIgBABIgBgBIgBABIgCABIAAgBIgBABIgBgBIgBABIgCgBIgBAAIgBAAIgBABIgBgBIAAABIgCAAIAAAAIgCAAIgBAAIgBAAIgCAAIAAAAIgBAAIgBAAIgBABIgBgBIgBABIgCAAIgBABIgBgBIgBABIAAAAIgBAAIgBAAIgBAAIgCABIgBgBIgBABIgBAAIgBgBIgBABIgBgBIgBABIgBABIgBgBIgCABIAAgBIgBABQAAABAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgBAAIgBABIgCgBIgBABIgBAAIgBAAIgBAAIgBAAIgBABIAAAAIgCAAIgBABIgBgBIgBABIgBABIgBgBIgBABIgBgBIgBABIgBABIABABIgBABIABABIgBABIgCABIABABIgBACIABAAIgBABIgBABIABABIgBABIABABIgBACIgBABIABABIgBAAIABABIgBABIgBACIAAABIAAABIAAABIAAABIgBABIAAABIAAABIABABIgBABIgBACIABABIgBABIABAAIgBABIABABIgBABIgBABIABABIgBACIABABIgBABIABABIgBABIgBAAIABABIgBABIAAACIAAABIABABIgBACIAAAAIAAABIgBABIABABIgBABIAAACIgBABIACABIgCABIABABIgBAAIABACIgBAAIABACIgBABIgBABIABABIgBABIABABIgBABIABABIgBABIABABIgBACIABABIgBABIABAAIgBABIABABIgBABIAAACIAAABIgBABIABABIgBABIABABIgBABIABABIgBABIAAABIAAABIABABIgBABIABAAIgBABIABABIgBABIABABIAAACIAAABIABABIgBABIAAAAIAAACIAAAAIAAACIAAABIAAABIAAABIAAABIAAABIAAABIABABIgBABIABABIABACIgBABIAAABIAAAAIAAACIAAABIAAAAIgBACIACABIABABIgBABIABABIgBABIABABIgBABIABABIABABIgBACIABAAIgBABIABACIAAAAIAAABIABABIgBABIABABIABACIgBABIABABIgBABIABAAIAAACIAAABIABAAIAAACIAAABIABABIAAABIAAABIABABIABABIgBABIABABIABACIgBABIABABIABABIgBABIABABIACABIgBABIABABIAAABIABABIAAABIAAABIABABIABABIgBABIABABIABACIABABIABAAIgBACIACAAIABABIABABQAAABAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABIABABIAAABIABABIABABIABABIABABIACABIABABIABACIABABIAAABIABABIACAAIABABIABABIABABIABABIABACIABABIABAAIABAAIABABIABABIACABIAAgBIABABIABABIABABIABgBIACABIABABIAAgBIACABIABACIABgBIABABIABABIAAgBIACABIABABIACgBIAAABIACgBIAAABIABABIABgBIABABIABgBIACABIABAAIABAAIABAAIAAgBIABABgAAMjUIgBABIgBgBIgCABIgBAAIgBAAIgBgBIgBABIgBgBIgBABIgBgBIAAABIgBgBIgBABIgBgBIgBAAIgBAAIgBABIgBgBIgBAAIgCAAIgBgBIgBAAIgBAAIgBgBIAAgBIgBABIgBgBIgBgBIABgBIgCgBIgBgBIgBgBIABgBIgBgBIgBgCIABAAIgBgBIABgBIABgBIgBgCIABgBIACgBIABgBIABgBIABAAIAAgCIACgBIABAAIABAAIABAAIABAAIABgBIABACIABgBIABABIABgBIABABIABgBIAAABIACgBIABABIABgBIAAABIABgBIACAAIAAAAIACAAIABAAIABABIABgBIABABIABgBIABABIABgBIABABIABABIABABIABABIABAAIABABIABACIABABIgBABIABABIABABIgBABIABABIgBABIgBABIAAABIAAABIgBACIgBABIABABIgBAAIgBABIgBgBIgBABIgBABIgCABIAAgBIgBABIgBABIgBgBg");
	this.shape.setTransform(38.05,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(0,-38,76.1,76.1), null);


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
	this.shape.graphics.rf(["rgba(255,255,255,0)","#D7E513"],[0,1],6.6,3,0,6.6,3,53.1).s().p("AgbFfIgBgBIgCAAIgBABIgBAAIgBgBIgCAAIgCgBIgCAAIAAABIgBAAIgCgBIgCAAIgCgBIgBAAIhAgTIlDhiIgBAAIgCgBIgBAAIgDgBIgBAAIABgCIgCAAIgCgBIgBAAIgCgBIgBAAIAAgCIgCAAIgBgBIgCAAIAAgCIgBgBIgBAAIAAgCIgBAAIgCAAIAAgCIgCgBIgBAAIAAgBIgCgBIABgCIgBgBIgBAAIgBgBIAAgBIAAgCIgCAAIgBgBIAAgBIgBgCIAAAAIgBgCIAAAAIgBgCIAAAAIgBgCIAAgBIgBgBIABgCIgBAAIAAgBIgBgBIgBgCIABgBIgBgBIgBgBIABgCIgBgBIAAgBIABgCIABgBIgCgBIAAgCIAAgBIABgCIgCAAIABgCIAAgCIABgBIABgCIAAgCIABgBIAAgCIABgBIAThBIBilCIAAgCIABgCIAAgBIAAgCIABgCIAAgBIABgCIAAgCIACABIAAgCIABgBIABgCIACAAIAAgBIABgCIAAgBIABAAIAAgCIABgBIABAAIABgBIAAgCIADABIAAgCIACAAIAAgBIAAgCIACAAIAAgBIACABIAAgDIADABIAAgBIACAAIAAgCIABABIABgCIACAAIAAgBIACABIABgCIABAAIABgBIABABIACAAIAAgCIACAAIACABIAAgBIACAAIABABIABgCIABABIACAAIABgCIACABIABAAIABABIABgCIABABIADAAIABABIACAAIAAgBIACAAIABABIACAAIABABIADAAIDtBIIADABIAAgCIACABIAAgCIABgCIABABIAAgCIABgCIACABIAAgCIABgBIACAAIAAgBIACAAIAAgCIABgBIABAAIAAgBIABgCIACABIABgCIAAgCIACABIAAgCIABABIABgCIAAgCIACABIAAgCIABgBIACAAIABgCIABABIABgCIAAgBIABAAIABgCIAAgBIABABIABgCIAAgBIADAAIAAgCIACAAIAAgBIABgCIABABIAAgBIABgCIABAAIABgBIAAgCIACABIAAgDIABABIABgBIAAgCIACABIAAgCIABgCIACABIABgCIAAgBIACAAIAAgBIABAAIABgCIAAgBIACAAIABgBIABgCIABAAIABgBIABAAIAAgCIAAgBIACABIABgCIAAgCIACAAIABgBIAAgCIACABIABgCIABABIAAgCIABgBIABAAIAAgCIABgCIADABIAAgBIABgCIABAAIAAgBIABABIABgCIABgCIABAAIAAgBIACgCIACABIAAgBIABAAIAAgCIAAgCIACABIABgCIAAgBIACAAIABgBIAAgCIACAAIAAgBIACAAIAAgBIAAgCIACAAIAAgBIABgCIACABIABgCIAAgCIACABIAAgCIABABIABgCIAAgCIACABIABgCIABgBIABAAIABgBIAAgCIABAAIABgBIABAAIABgBIAAgCIADABIAAgCIABgCIABABIABgCIABABIAAgCIABgCIACABIAAgCIABgBIACAAIAAgCIABgBIABABIAAgCIACAAIAAgBIABgCIACAAIABgBIAAgBIACAAIAAgCIACABIAAgCIAAgCIACABIAAgBIADAAIAAgCIACABIAAgCIABABIABgCIACABIAAgCIABAAIABgBIACAAIABgBIABAAIAAgBIACAAIABABIABgCIACAAIABABIABgCIACABIABAAIABgBIABAAIACABIABgCIABABIABAAIACABIAAgCIACAAIACABIACAAIACABIABAAIAAgBIACAAIACAAIACABIACABIACAAIACABIACAAIABABIACAAIgBACIACAAIABABIACAAIACABIABABIAAABIACABIABAAIABABIAAABIACABIABAAIAAACIACAAIABABIAAABIABABIABABQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAIABABIABABIAAABIACAAIgBACIACAAIACABIgBABIABABIABABIAAABIACABIACAAIAAACIABAAIAAACIABAAIABAAIAAADIACAAIAAABIABABIACAAIABABIAAACIABAAIAAACIACAAIABAAIAAADIABAAIABAAIAAACIADABIgBABIACAAIABABIAAACIABABIABAAIAAABIACABIABAAIAAACIACABIAAABIABAAIABABIAAABIABABIACABIgBABIACABIABAAIAAABIACABIgBABIADABIABABIgBABIACABIAAABIAAABIACAAIAAACIABAAIACABIAAACIACAAIABABIAAABIABABIABABIAAABIACAAIgBACIACAAIACABIgBACIACAAIABABIAAABIABABIABABIAAABIACAAIAAACIACAAIABACIAAABIACAAIABABIAAABIABABIABABIAAABIABABIAAABIACABIABAAIAAACIABABIAAABIABAAIAAACIAAACIABAAIAAACIgBABIAAACIABABIgBABIAAABIAAACIAAACIgBgBIgBACIAAABIgBACIgCAAIgBABIgBAAIgBABIgBAAIgBACIgBgBIgBACIgBgBIgCAAIgBABIgCAAIgBAAIgBgBIgDAAIgBgBIgCAAIgBgBIgBgBIAAgBIgBgBIgBAAIgBgCIgCAAIABgCIgCgBIgBAAIAAgCIgBAAIgBgBIgBgBIgBgBIgBgBIAAgBIgCgBIAAgBIgCAAIAAgBIAAgCIgCAAIgBAAIAAgCIgCgBIgBAAIABgCIgDgBIAAgBIgBAAIAAgBIAAgBIgCgBIgBgBIAAgBIgDgBIABgBIgBAAIgBgBIAAgBIgCgBIgBgBIAAgBIgBgBIgCgBIAAgBIgCAAIABgCIgCAAIgBgBIAAgBIgCgBIAAgBIAAgBIgCgBIAAgBIgBgBIgCAAIAAgCIgBAAIgBgBIAAgCIgCAAIAAgBIgBgBIgBgBIgBgBIgBgBIgBgBIAAgBIgCAAIAAgBIgBgCIgBAAIgBgBIAAgBIgCgBIABgBIgCgBIgBgBIgBgBIgBAAIgBgBIAAgCIgBAAIgCgBIAAgBIgBgBIABgBIgDgBIgBgBIAAgBIgBgBIgCAAIABgCIgBAAIgCgBIAAgBIgBgBIAAgBIgCgBIgBAAIAAgCIgCgBIgBAAIAAgBIgBgBIgCAAIgBgBIAAgCIgCAAIgCgBIgBAAIgBgBIgCAAIgCgBIgCAAIAAACIgCAAIgBgBIgBAAIgBABIgCgBIgBACIgBAAIgBABIgBAAIgBABIgBAAIgBABIgCAAIgBABIgBAAIAAACIgBABIgBAAIgBACIAAAAIgBABIgBABIgCAAIgBABIAAACIgCAAIgBABIAAABIgBAAIgBACIAAABIgCAAIAAABIgCAAIAAACIgBABIgCAAIAAACIAAABIgCAAIAAABIgDAAIAAACIAAABIgCAAIAAABIgBABIgBABIgBABIAAABIgBAAIgBACIgCgBIAAACIgBABIgCAAIAAABIgBACIgBAAIAAABIgBACIgBgBIgCACIgBAAIAAABIgBACIgCAAIAAABIgBABIgBAAIAAACIgCgBIgBACIgBABIgBAAIAAABIgCACIAAAAIgBABIgBACIgBgBIAAACIgCAAIgBABIgBABIgBAAIAAACIgBABIgBAAIgBACIgBABIgBAAIgBACIgBgBIgBACIgBABIgBAAIAAABIgBACIgBAAIgBABIgBABIgBAAIgBABIgCAAIAAACIgBABIgBAAIAAACIgBABIgBAAIgBABIgCAAIAAACIgBABIgCgBIAAADIAAABIgCgBIAAACIgBABIAAAAIgBACIgCgBIgBACIgBABIgBAAIAAACIgBABIgBAAIgBABIAAABIgCABIAAACIgDgBIAAABIAAABIgBABIgBACIgBAAIgBABIAAABIgCABIgBAAIgBABIgBABIgBABIAAABIgCAAIAAABIgBACIgBAAIAAACIgBgBIgBACIgBABIgBAAIAAACIBRAZIACAAIAAgBIgBgBIAAgCIAAgBIABgCIgBgBIAAgBIABgCIAAgBIABgCIAAgCIgBgBIAAgBIAAgBIABgCIAAgCIABgBIABgCIAAgCIABgBIAAgCIABgBIACAAIAAgCIAAgBIABgCIAAgCIABABIAAgBIABgCIAAgBIADAAIAAgCIABgBIABAAIAAgCIABgBIABABIABgCIAAgCIACABIABgCIAAgCIACAAIABgBIABABIAAgCIACABIAAgCIADABIAAgCIACAAIAAgBIABAAIABgBIABAAIABgCIACABIABgCIABAAIACABIAAgCIABABIABgCIACABIACAAIAAgCIACABIACAAIAAgBIABAAIACABIACAAIAAgBIACAAIABABIACAAIACABIAAgCIACABIACAAIABABIABAAIACABIABAAIADABIABAAIABABIACAAIACABIACAAIABABIAAABIABABIACAAIABABIABABIAAABIACAAIACABIABAAIAAACIACAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAAAAAAAIAAACIABAAIABABIAAABIACABIAAABIACABIABAAIAAACIAAABIAAABIACABIAAABIABABIABAAIAAACIACAAIAAACIgBACIACAAIAAACIABAAIAAABIABABIAAACIABAAIAAACIAAACIAAAAIAAACIAAABIABABIgBABIAAABIABABIAAADIAAABIgBACIACAAIAAABIgBACIAAABIgBACIABABIABACIgBABIAAACIgBABIAAACIAAACIgBABIAAACIgBACIAAABIgBACIAAACIgBAAIgCAAIgBACIAAABIgBACIAAABIgCABIAAABIAAACIgCgBIgBACIAAABIgBABIgBABIgBACIgBAAIgBABIgBAAIgBAAIAAADIgBAAIgBAAIgCABIgBABIgBAAIgBAAIgBACIgBAAIAAACIgCgBIgBABIgBAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgBABIgBAAIAAAAIgBABIgBABIgDgBIAAAAIgCABIgBgBIAAACIgCAAQAAABAAgBIgCABIgBABIACABIAAABIgBACIABABIAAABIAAACIgBABIACABIgBACIAAABIgBACIABAAIAAACIAAACIgBABIAAACIgBACIgBABIAAACIgBACIg6DCIAAABIACAAIAAgBIAAgCIACAAIAAgBIACABIABgCIAAgCIACABIABgCIABABIAAgCIACAAIAAgBIACABIABgCIACABIAAgCIACAAIAAgBIABAAIABgBIACAAIACABIAAgCIABAAIABgCIABABIACAAIAAgBIADABIABAAIAAgCIABABIACABIABgCIABAAIACABIABAAIACAAIABgBIABAAIABABIACAAIACABIACAAIABABIAAgCIACABIACAAIACABIACAAIABABIAAABIABABIABAAIACABIACAAIACABIABABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAIABAAIACABIABABIAAABIACABIACAAIABABIAAABIABABIABABIABABIABAAIAAACIABAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIABABIABAAIAAACIACAAIAAABIAAABQAAAAABAAQAAAAAAAAQAAABAAAAQAAAAAAAAIABACIABAAIgBACIABABIAAAAIACABIAAACIgBABIACAAIAAACIABABIAAABIABABIAAABIgBACIACABIgBABIAAACIABAAIAAACIgBACIACAAIgBABIAAACIgBACIAAABIABABIAAABIgBACIAAACIAAABIgBACIACAAIgBACIAAACIAAABIgBACIAAACIgBABIAAACIgBACIgCgBIgBACIAAABIgBACIAAACIgBABIgBAAIAAABIgBACIAAABIgCAAIAAACIgBABIgBACIgBAAIAAABIgBABIgCAAIAAABIgBAAIgBACIAAABIgCAAIgBABIgCAAIAAACIgCgBIAAACIgBAAIgBACIgBgBIAAABIgDAAIgBACIgBAAIAAAAIgCAAIAAACIgBgBIgCABIgCAAIgBAAIgBACIgBgBIgBAAIgBABIgBAAIgCgBIgBABIgBAAIgCAAIgBgBIgBACIgBAAIgCgBIgCAAIgBABIgBAAIgBgBIgCAAIgCgBIgCAAIgBgBIgCAAIgBgBIgCAAIgCgBIgCAAIgBgBIgBAAIgCgBIgCAAIAAgCIgBAAIgCgBIgBAAIgBgBIAAgCIgBAAIgDgBIAAgBIgBgBIgBAAIAAgBIgBgBIgCAAIABgCIgCgBIgBgBIAAgBIgCAAIABgCIgCAAIgCgBIAAgBIAAgBIAAgCIgCAAIAAgBIgBgBIABgCIgBAAIAAgCIgCgBIABgBIAAgCIgCAAIAAgBIgBgBIAAgCIAAgBIgBgBIABgCIAAgBIgCAAIAAABIgUBCIgBADIACAAIABAAIAAACIABAAIAAACIACAAIABABIAAABIACABIABAAIAAACIACABIAAAAIAAACIACAAIgBACIACAAIACABIAAABIABAAIABABIAAACIABAAIACABIAAACIABAAIAAABIABABIACABIABABIABAAIABACIAAABIABAAIABABIAAABIABABIAAABIACABIABABIABABIABABIABABIAAABIABAAIAAACIACAAIAAABIABABIACABIAAABIABABIACABIAAABIAAABIACAAIgBACIACAAIABABIAAACIACAAIABABIABABIABABIABABIAAABIABAAIAAACIACAAIACABIABAAIAAACIABABIACAAIABABIABAAIADABIABAAIACABIABAAIAAgCIADABIABAAIACABIAAgCIACABIAAgCIACAAIABABIABgCIACABIAAgCIABgCIACABIAAgCIABABIABgCIAAgCIACABIAAgCIACABIABgCIAAgCIACABIABgCIAAgBIABAAIABgCIAAgBIACAAIABgBIACAAIAAgBIAAgCIABAAIABgBIAAgCIACABIAAgCIABgCIACABIAAgCIACABIABgCIAAgBIABABIABgDIAAgBIACABIAAgCIABgCIACABIAAgCIACABIABgCIAAgBIABAAIABgCIAAgBIACAAIABgBIACAAIAAgCIABgBIABAAIAAgBIABgCIABABIABgCIAAgCIACABIABgCIABABIABgCIAAgCIACABIAAgCIABgBIABAAIAAgCIABgBIADAAIAAgBIABAAIAAgBIABgCIABAAIABgBIAAgCIADABIAAgCIABgCIABABIABgCIABABIAAgBIABgDIABABIAAgBIABgCIADAAIAAgCIACABIAAgCIABgBIABAAIAAgBIABgCIABAAIAAgBIACgCIACABIAAgBIABAAIAAgCIABgBIABAAIABgBIAAgCIACAAIABgBIAAgCIACABIABgCIABABIAAgCIABgCIABABIABgCIAAgBIACAAIABgCIACABIAAgCIAAgBIACAAIAAgCIABgBIABAAIABgBIABgCIACABIAAgCIABAAIABgBIAAgCIACABIAAgCIABgCIACABIAAgCIABgBIACAAIAAgCIABABIABgCIAAgBIACABIAAgCIABgCIACABIABgCIAAgBIABAAIABgCIABAAIABgBIAAgBIACAAIABgCIAAgBIACAAIABgCIABABIAAgBIABgCIABABIABgCIAAgCIACAAIAAgBIABgCIACAAIAAgBIABAAIABgBIAAgCIACABIAAgCIABgCIACABIAAgCIABgCIABABIAAgCIACABIAAgCIABgBIABAAIABgCIABgBIACAAIAAgBIABgCIABABIAAgCIACAAIABgBIAAgCIACABIAAgCIABgCIACABIAAgCIABABIABgCIAAgCIACABIAAgBIABgCIACAAIABgBIAAgCIACAAIAAgBIABABIABgCIAAgCIACABIABgCIAAgBIACAAIABgBIAAgCIABAAIABgBIABAAIABgBIAAgCIADAAIAAgBIABgCIABABIAAgCIACABIAAgCIABgCIABABIABgCIABgBIACAAIAAgCIABgBIABAAIAAgBIACAAIAAgCIABgBIACAAIAAgBIABgCIACABIAAgCIAAgCIACABIAAgCIACABIAAgCIABgCIACABIABgCIAAgBIABAAIABgCIAAgBIABABIABgCIACAAIAAgBIABgCIACABIABgCIAAgBIABAAIABgCIABAAIAAgBIAAgCIADABIABgBIAAgCIABAAIABgCIAAgBIACABIAAgCIABAAIABgCIAAgBIADAAIAAgBIABgCIABAAIAAgBIABgCIABABIABgCIABABIABgCIABgCIACABIAAgCIABgCIABABIAAgCIABgBIABAAIABgBIACAAIABgCIAAgBIACAAIAAgBIABgCIABAAIAAgBIACAAIAAgBIABgCIACABIABgCIAAgCIACABIAAgBIAAgCIACAAIAAgBIACAAIABgCIAAgBIACABIABgCIAAgCIABABIAAgCIABgBIAAgCIABgCIAAgBIABgCIAAgCIABgBIABgCIAAgCIAAAAIgBgCIABgBIAAgBIgCAAIAAgCQgBAAABgBIgBgBIAAgBIgBgBQAAAAAAgBIgBgCIgBAAIAAgCIgBAAIgBgBIAAgBIgCgBIABgBIgDgBIAAAAIgBgCIgBgBIAAAAIgBgCIgCAAIgBAAIAAgCIgCgBIABgBIgCgBIgBAAIAAgCIgBgBIgBAAIAAgBIgCgBIgBAAIAAgCIgCAAIABgBIgCgBIgCgBIABgCIgCgBIAAAAIAAgBIgCAAIAAgCIgBgBIgCAAIAAgCIgCgBIgBAAIAAgBIgBgBIgBgBIAAgBIgCgBIABgBIgCAAIgCgCIABgBIgCgBIgBAAIAAgBIgBgBIgBgBIAAgBIgCAAIAAgCIgCgBIgBgBIAAgBIgBAAIgBgBIAAgBIgCgBIgBgBIAAgBIgBgBIAAgBIgCgBIgBgBIAAgBIgCAAIgBgBIAAgBIgBgBIAAgCIgBAAIgBgBIAAgBIgCgBIgCgBIAAgBIgBAAIgBgBIAAgBIgBAAIAAgCIgBgBIgCgBIABgBIgDAAIgBgBIAAgBIgBgBIgBgBIAAgBIgCAAIABgCIgCgBIgBgBIAAgBIgCAAIgBgBIAAgBIgBgBIAAgCIgBgBIAAgBIgBAAIAAgCIAAgBIgBgBIAAgCIABgBIAAgCIABgCIAAgBIAAgCIAAgBIABgCIABAAIABgBIAAgCIADABIAAgBIACAAIAAgCIABABIABgCIABABIABgCIACABIACAAIABABIACAAIAAgCIACAAIABABIACAAIAAADIACAAIABABIABAAIAAACIABAAIACAAIAAACIABAAIACABIAAACIABAAIAAABIABABIABABIAAABIABABIACAAIAAABIACABIABABIAAACIABAAIAAABIABABIABABIAAABIACABIABAAIABABIACABIgBACIACAAIAAABIABABIABABIABABIAAABIACAAIAAABIACACIABAAIAAACIABAAIABABIAAABIACABIAAABIABABIABAAIABACIABABIACAAIgBACIACAAIAAABIABABIABABIABAAIAAACIACABIABAAIAAACIACAAIAAACIABAAIABABIAAABIACABIAAAAIAAACIADABIgBABIABAAIACABIAAABIABABIABABIAAABIABAAQABAAAAABQAAAAAAAAQABAAAAAAQAAABgBAAIABABIACAAIgBACIACAAIABABIAAABIABABIACAAIgBACIACABIABABIAAABIACAAIAAACIABAAIABABIAAABIACABQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAgBAAIABABIABABIACAAIAAACIABABIAAAAIACABIABABIAAACIABAAIAAABIABABIABABIAAABIABABIABABIABABIAAABIABABIAAACIABAAIAAABIACABIgBACIABABIAAABIABABIAAABIgBABIACABQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAgBABIABABIAAABIgBABIACABIgBABIAAACIACABIgBABIgBABIAAABIACACIAAABIgBABIgBACIADAAIgBACIAAACIgBABIgBACIAAACIgBABIAAACIgBACIAAABIgBACIAAABIAAACIgBACIAAABIAAACIgBACIAAABIgCgBIgBACIgBACIAAACIgCgBIgBABIAAACIAAACIgCgBIAAACIgBABIgBAAIgBABIgBACIgBAAIAAABIgCACIgBgBIAAACIgBAAIgBABIgBABIgCAAIAAACIgBABIgBAAIgBACIgBABIAAAAIgBABIgBAAIgBACIgBABIgBAAIgBABIgBACIgBAAIgBABIgBAAIAAABIgBABIgBABIgBABIgBABIgCAAIAAACIgBABIgBAAIAAACIgCgBIAAACIgBABIgBgBIgBADIgBABIgBgBIgBACIAAABIgCABIAAABIgBgBIgBACIgBABIgCAAIgBACIAAABIgBAAIgBABIgBAAIAAABIgBACIgBAAIgBABIgBABIgCAAIAAACIgBABIgBAAIAAACIgCgBIAAACIgBACIgCgBIAAACIgBABIgCAAIAAACIgBABIgBAAIAAABIgCAAIAAABIgCACIgBAAIgBABIAAABIgBAAIgBACIAAABIgCAAIgBABIgBAAIgBACIAAABIgCAAIgBACIAAABIgBAAIAAACIgCgBIgBACIAAABIgCAAIAAABQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAIgBABIAAABIgBABIAAABIgCgBIAAACIgCABIgBAAIgBACIgBABIgBAAIAAACIgBABIgBgBIgBACIgBAAIgBACIAAABIgCAAIgBABIAAABIgBAAIgBACIAAABIgCAAIAAABIgDAAIAAACIgBABIgBAAIAAACIgBABIgBAAIgBACIgBgBIAAACIgCABIgBAAIgBABIgBACIAAAAIgBABIgBABIgBAAIAAACIgCAAIgBABIgBABIgBAAIgBACIgBABIAAAAIgBACIgBABIgBAAIAAABIgDgBIAAADIgBABIgBgBIAAACIgBACIgBgBIgBACIgBAAIgBABIgCABIgBAAIAAACIgBABIgBAAIAAABIgBABIgBAAIgBACIgCAAIgBABIgBACIAAgBIgBACIgBABIgBAAIAAACIgBABIgBAAIgBACIgCgBIgBACIAAABIgBAAIgBACIAAABIgCAAIAAABIAAABIgDAAIAAACIgCAAIAAABIgBABIgBAAIgBACIAAABIgBAAIgBACIgDgBIAAACIAAABIgCABIAAABIAAABIgCAAIAAABIgBACIgBAAIAAABIgDAAIAAABIgBABIgBAAIgBACIAAABIgCABIAAABIgBABIgCABIAAABIgCgBIAAACIgBAAIgBABIAAACIgBAAIgBABIgBABIgBABIgCABIgBAAIgBABIAAABIgBABIgBAAIAAACIgBABIgBAAIgBACIgCgBIgBACIgBABIgBAAIAAACIgBAAIgBABIAAACIgBAAIgCABIgBABIgBAAIgBABIAAABIgBABIgBABIAAABIgCAAIAAACIgCABIgBAAIgBACIgBgBIgBACIAAABIgBAAIgBACIgBAAIgBAAIgBADIAAAAIgCAAIgBABIgBAAIAAACIgBACIgBgBIgBACIgBABIgBAAIgBABIgCAAIAAACIAAABIgBAAIAAABIgBACIgCgBIAAACIgBABIgCAAIAAACIgCgBIgBACIAAABIgBAAIgBACIAAABIgBAAIgBACIgCABIgBAAIgBABIAAAAIgBACIgBABIgBAAIgBABIAAABIgCAAIgBACIgBAAIgBABIgBABIAAAAIgBACIgBABIgBAAIAAABIgCACIgBAAIgBABIgBAAIgBABIgBAAIAAABIgCAAIgBABIgCAAIAAACIgCAAIAAABIgBgBIgBACIgCAAIgBAAIgBAAIgBACIgBAAIgCgBIAAABIgCAAIgBACIgBgBIgCAAIAAABIgCAAIgBAAIAAABIgCAAIgCgBIgCAAIgBABIgBAAIgBgBIgCAAIgCAAIgCgBIAAACIgBgBIgCAAIgBgBIgCAAIgCgBIgCAAIgBgBIgBAAIgCgBIgCAAIgCgBIgBAAIAAgCIgCAAIgBgBIgBAAIgCgBIgBgBIgBgBIgBAAIgBgBIgBgBIgBgBIgBAAIgBgBIAAgCIgCAAIgCgBIAAgBIgBgBIAAgBIgBgBIgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAABAAIgCgBIgBgBIAAAAIgCgBIgBAAIAAgCIgCgBIABgBIgBAAIgBgBQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIgBAAIgCgBIAAgCIgBAAIgCAAIAAgCIAAAAIAAgCIgBAAIgCgBIAAgCIgBAAIgCgBIAAgCIgBAAIAAgBIgBAAIgCgBIAAgBIgBgBIgBgBIAAgBIgCgBIgCgBIABgBIgCAAIABgCIgCAAIgBgBIAAgCIgBAAIgCgBIABgBIgDgBIgJAfIgBACIAAABIgBACIAAABIgBACIAAACIgBABIAAACQAAABAAAAIgCAAIAAACIgBABIAAABIgCABIgBABIAAACIgBAAIgBABIAAACIgBAAIgCABIAAABIgBABIgCABIAAAAIgCABIAAABIgBABIgBAAIAAACIgCAAIgBABIgBAAIAAABIgCAAIAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAIAAABIgBAAIgBABIgCAAIAAABIgCAAIgCgBIgBADIgBgBIAAABIgBAAIgBgBIgCACIgCgBIgBAAIgBABIgBAAIgBgBIgBACIgCAAgAlFjaIhhFCIgTA9IAAACIACABIgBABIgBACIAAABIgBACIAAACIABAAIAAACIgBACIADAAIgBACIABABIAAABIABABIAAABIABABIAAABIABABIAAABIACABIABABIAAABIACAAIABABIACABIAAABIABABIACAAIABABIFDBhIBAATIABABIACAAIACABIABgCIABAAIABABIACAAIAAgBIADAAIABABIABgCIABABIAAgCIACAAIABgBIACAAIAAgBIACAAIAAgBIABAAIABgCIAAgBIACAAIAAgBIABgCIAAgCIABgBIABgCIACABIAAgCIASg+IBhlCIABgBIgCgBIAAgCIABgBIAAgCIABgCIAAgBIgBgBIAAgBIABgCIgCAAIABgCIgBgBIAAgBIgCgBIAAgBQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAAAIAAgCIgBAAIAAgCIgBAAQgCAAABgBIgBgBIgBgBIgBAAIAAgCIgCAAIgCgBIgCAAIhCgUIlChiIgDAAIgBgBIgCAAIAAABIgBAAIgCgBIAAABIgCAAIgCAAIgBABIgBAAIAAABIgCAAIAAABIgCAAIAAABIgCAAIgBACIgCAAIAAABIgBABIgBAAIAAACIgBACIAAABIgBACIAAACIgCgBIgBACgABqCTIgBABIAAACIgBABIAAACIAAACIgBABIAAACIABABIAAACIAAABIABABIgBABIAAACIABABIAAABIABAAIAAACIACABIgBABIACAAIACABIgBACIACAAIABABIAAABIABABIACAAIACABIACAAIABABIACAAIABABIACAAIACABIAAgCIACABIABAAIABgCIABABIADAAIAAgBIACAAIAAgBIABAAIABgBIAAgCIACAAIAAgBIABgCIACABIABgCIAAgCIABgBIABAAIABgBIAAgCIAAgCIABgBIAAgCIgBAAIAAgCIABgCIAAgBIgBgBIAAgCIAAgBIgBgBIABgBIgCgBIABgBIgBgBIAAgCIgCAAIgCgBIAAgBIgBgBIAAgBIgCAAIgBgBIgBAAIgBgBIAAgCIgDAAIgBgBIgCAAIgBgBIgBACIgBAAIgCgBIgCAAIgBAAIgBAAIgBAAIgBABIgBAAIgBABIgCAAIgBACIgBAAIgBABIgBgBIAAACIgBAAIgBACIAAABIgBABIgDAAIAAACgAB0iyIAAACIgBACIAAABIgBACIAAACIgBABIACABIgBABIAAACIAAABIABABIgBACIABABIAAABIABABIABABIABABIAAABIABABIAAABIACABIABAAIAAACIABABIACAAIABABIAAABIACABIABAAIACABIABAAIACABIACAAIAAgBIACAAIABABIABgCIABAAIACABIAAgCIADABIAAgCIACABIAAgCIABAAIABgBIABAAIABgBIACAAIABgBIAAgCIABgCIABABIAAgCIABgBIAAgCIABgCIAAgBIABgCIAAgCIgBAAIAAgCIABgBIAAgCIgBgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIgBgBIAAgBIAAgCIgBgBIAAgBIgBAAIgCgBIAAgCIgBAAIAAgBIgCgBIgBAAIgBgBIAAgCIgCgBIgBAAIgBgBIgDAAIgBgBIgCAAIgBgBIgBACIgBAAIgCAAIgCgBIAAABIgCAAIgBABIgBAAIAAABIgBAAIgCACIgBgBIgBACIgBgBIgBACIAAACIgBgBIgBACIAAABIgCAAIgBABgAhbDxIgCAAIgBgBIgCAAIgBgBIgBACIgCgBIgCAAIgBgBIgBAAIgCgBIgCAAIgBAAIgCgBIAAgCIgBAAIgCgBIgBAAIgDgBIgBAAIABgCIgCAAIgBgBIgCAAIABgCIgCgBIgCAAIgBgBIAAgBIgCAAIgBgBIABgBIgCgBIABgCIgCAAIgBgBIAAgBIgCgBIAAgBIgBgBIgCgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIgBgBIAAgCIABgBIgBgBIAAgBIgCgBIAAgCIABgBIgCgBIAAgBIgBgBIAAgBIAAgCIgBgBIAAgBIABgCIAAgBIgBgBIAAgCIABgBIAAgCIgBgBIAAAAIAAgDIABgBIAAgCIABgBIAAgCIABgBIgCgBIABgBIAAgDIABgBIACABIAAgCIABgCIAAgBIABgCIAAgBIABgCIAAgCIACABIAAgCIABgCIAAgBIACAAIABgBIAAgCIABgCIABABIABgCIAAgBIABAAIABgBIAAgCIACAAIABgBIACAAIAAgBIABgCIABAAIABgBIABAAIAAgBIACAAIAAgBIACABIABgDIACABIAAgBIABAAIABgCIACABIAAgCIACAAIACABIAAgCIACABIABAAIABgBIABAAIAAgBIADABIABAAIABAAIABgCIACABIABAAIAAgBIADABIABAAIABAAIACABIABgCIABAAIADABIABAAIACABIABAAIABABIADAAIABABIACAAIABABIACAAIABABIACAAIABABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAABIACAAIABABIABAAIACABIAAABIACAAIACABIgBACIACABIABAAIAAABIABABIABABIAAABIADAAIAAABIABABIAAACIABABIABAAIABABIAAACIABAAIAAABIABABIAAACIABABIABABIABABIAAABIABABIAAABIAAACIABAAIgBACQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAABIAAABIAAACIABAAIgBACIABABIAAABIAAABIABABIgBACIAAABIAAACIABAAIAAACIgBACIAAABIAAACIABAAIAAACIgBACIAAABIAAACIgBACIAAABIgBABIAAADIgBABIAAACIgBABIAAACIgBACIgBABIgBABIgBABIgBABIAAABIAAACIgBACIgCgBIAAACIgBABIgCAAIAAABIAAACIgCAAIAAABIgBABIgBAAIAAACIgBABIgCAAIAAABIgCAAIgBABIgBAAIgBACIgBAAIAAABIgBABIgBAAIgCAAIgBABIgBAAIgBACIgCgBIAAABIgBAAIgBABIgBAAIgCAAIgBACIgCgBIAAABIgBAAIgCAAIgBABIgBAAIgCgBIgCAAIAAABIgBAAIgCgBIgCAAIgBABIAAAAIgBAAgAhXDNIABAAIACABIAAgCIACABIAAgCIACAAIACABIAAgCIACABIAAgCIABgBIABABIABgDIABABIABgBIABgCIABAAIABgBIAAgCIABgBIAAgCIAAgCIABgBIAAgCIABgCIAAgBIgBgBIAAgBIABgCIgBAAIAAgCIAAgCIgBAAIAAgCIgBAAIAAgCIgBgBIAAgBIgBgBIgCAAIAAgCIgCAAIgBgBIAAgBIgBgBIgCAAIgBgBIgCAAIgCgBIgBAAIgBAAIgCgBIgCABIgBAAIgCgBIAAABIgBABIgCgBIgBABIgBAAIgBABIgBABIgBAAIgCAAIAAABIgBABIgBACIgBAAIgBAAIgBACIgBABIAAACIgBABIgBABIAAABIgBACIAAACIABAAIgBABIAAACIgBABIAAACIACABIgBABIACABIgBACIAAABIABABIAAABIABABIAAABIACAAIgBACIADABIABABIgBABIACABIABAAIACABIAAABIABAAIACABIACAAIABABIABAAIACABIAAgCIADABgAk4CvIgBgBIgCAAIgCgBIgCAAIAAABIgBAAIgCgBIgCAAIgCgBIgBAAIgBgBIgCAAIgCgBIABgBIgCgBIgCAAIgCgBIgBAAIgBgBIAAgCIgCAAIgCgBIgBAAIAAgCIgBAAIgCgBIgBAAIABgBIgCgBIgCgBIAAgBIgBgBIAAgBIgCgBIgBgBIABgBIgCgBIAAgBIgBAAIABgCIgCgBIABgBIgDgBIgBgBIAAgBIABgBIgCgBIABgCIgBgBIAAgBIgCgBIAAgBIAAgBIAAgBIAAgCIgBgBIAAgBIAAgBIAAgBIgBgCIABgBIgCgBIAAgBIABgCIgBAAIAAgCIAAgCIABgBIAAgBIgBgCIAAgBIABgBIAAgCIABgCIAAgBIABgCIAAgBIAAgDIABgBIAAgBIABgCIAAgCIABgBIAAgCIABgCIACABIAAgCIABgBIAAgCIABgCIABABIAAgCIABgBIAAgCIACAAIABgBIAAgCIACABIABgCIABABIABgCIAAgCIABABIABgCIACABIAAgCIABgCIACABIAAgCIACABIAAgBIABAAIABgCIACAAIAAgBIACABIABgCIABAAIACABIAAgCIABAAIABgCIACABIABAAIABgBIACAAIABABIAAgBIABAAIADABIABgDIABABIACAAIAAgBIABABIACAAIABABIACAAIABgCIACABIABAAIACABIABAAIADABIABAAIABABIACAAIACABIACAAIABABIACAAIABABIABABIAAABIABABIADAAIABABIABAAIABABIABABIACAAIgBADIABAAIACABIABAAIABABIACABIgBABIABABIABAAIAAACIACAAIABABIAAACIAAAAIAAACIACAAIAAABIACABIgBACIACABIAAABIAAABIAAABIABABIABABIABABIAAABIgBACIACAAIgBACIABABIAAABIAAACIACABIAAABIgBABIACABIgBACIAAABIgBACIACAAIgBACIAAACIgBABIACABIgBABIAAACIgBACIgBABIAAACIgBACIAAABIACABIgBABIAAACIgBACIgCgBIAAACIgBABIAAACIAAACIgBABIAAACIgBABIgBAAIgBABIgBACIgBACIgBgBIAAACIgBABIAAACIgBgBIgBACIAAACIgCgBIAAACIgCgBIgBACIgBABIgBAAIAAABIgBAAIgBACIgBABIgBAAIgBABIgCAAIAAABIgCAAIAAABIgCAAIAAACIgCAAIgBAAIgBABIgCgBIAAABIgCABIAAAAIgCABIgBAAIgBABIgBAAIgCgBIgBABIgBAAIgBAAIgCgBIgBACIgCgBIgBAAIgBgBIgBACIgCAAgAk1CKIACABIACAAIABgBIABAAIACABIAAgCIACAAIAAgBIACAAIAAgBIACAAIABgBIAAgCIACAAIAAgBIACABIAAgCIABgCIAAgBIABgCIACABIAAgCIABgCIAAgBIgBgBIAAgBIABgCIAAgCIABgBIgBgBIgBgBIABgCIgCgBIABgBIgCgBIAAgBIgBgBIAAgCIgBgBIAAgBIgCAAIAAgBIAAgBIgCgBIgBgBIAAgBIgCAAIgCgBIgCAAIgBgBIgBAAIgCgBIgCAAIgCgBIAAABIgBAAIgCAAIgBABIgCAAIgBgBIgBABIgBAAIgBACIgBAAIgBABIgBAAIgBABIgBACIgBAAIgBABIgBABIAAAAIgBACIAAACIAAABIgBABIAAADIgBABIAAACIgBABIAAACIAAABIAAABIAAABIABABIAAACIABABIAAABIgBABIACABIAAABIABABIABABIAAABIABABIACABIAAABIACAAIABABIAAABIABABIACAAIABABIACAAIACABIACAAIAAgBIABAAgAijBiIgCgBIAAABIgBAAIgCgBIgBAAIgCgBIgCAAIgBABIgBAAIgCAAIgCgBIgCAAIgBgBIgCAAIgBgBIgCAAIgCgBIAAgBQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIgBgBIgBAAIgBgBIgDAAIgBgBIAAgBIgCAAIgBgBIgCgBIAAgBIgBgBIgBgBIAAgBIgDAAIAAgBIAAgBIgCgBIAAAAIgBgCQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAIAAgBIgBgBIAAgBIgBgBQgBAAAAAAIAAgCIgCAAIAAgCIgBgBIAAgBQgBAAAAgBIAAgBIgCgBIAAgBIABgCIgBgBIAAgBQgBAAABgBIgBgBIABgCIgBgBIAAgBIgCgBIAAgBIABgCIAAgCIgBAAIAAgCIABgBIgBAAIAAgDIAAgBIABgCIgBAAIgBgCIABgCIAAgBIABgBIAAgCIABgCIAAgCIABgBIAAgCIAAgBIABgCIAAgCIABgBIAAgCIABgBIAAgCIABgCIACABIABgCIAAgBIABgCIABAAIAAgBIABgCIAAgBIABAAIABgBIAAgBIADAAIAAgBIACAAIAAgCIABgBIABAAIAAgBIACAAIAAgBIABgCIACAAIABgBIABAAIABgBIABAAIAAgBIACAAIABgCIACABIAAgCIACABIABAAIAAgBIACAAIABgBIABAAIACABIABgCIABAAIACABIAAgCIABABIACAAIABgBIACAAIABABIACAAIAAgCIABABIADAAIABABIACAAIAAgBIABABIACAAIACABIACAAIACABIABAAIABABIACAAIACABIACAAIABABIABAAIAAABIACABIABAAIACABIACAAIAAACIABABIACAAIAAABIAAABIACABIABAAIAAACIACAAIABABQAAAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAIABAAIABAAIAAACIABABIAAABIABAAIACABIAAABIABABIAAACIABABQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIABABIgBABIABABIAAABIABABIAAABIgBACIACAAIAAACIABABIAAABIgBACIACAAIgBACIACABIAAABIgBACIACAAIAAACIAAABIgBACIABABIAAABIAAACIgBABIABABIAAACIAAABIgBABIgBACIAAACIgBACIAAABIgBABIAAADIgBABIAAACIgBABIAAACIAAABIgBACIAAACIgBABIgBAAIgBABIgBACIAAACIgCgBIAAACIgBABIAAABQAAABgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBABIgBABIgBAAIgBACIgCgBIAAACIAAABIgCAAIAAABIgCAAIgBACIAAABIgBAAIgBABIgCAAIAAABIgCAAIgBACIgBAAIAAABIgCAAIgCgBIgBACIgBgBIgBABIgBAAIAAACIgCAAIgBgBIgCABIgBAAIgCAAIAAABIgBAAIgCAAIgBABIgCAAIgBAAgAilA9IACABIACAAIABgBIABAAIACABIAAgCIABAAIABgBIACAAIAAgBIACAAIABgBIAAgCIACAAIAAgBIAAgBIACAAIAAgCIABgBIAAgCIABgBIACAAIABgCIgDgBIABgBIABgBIAAgCIABgCIAAgCIgBAAIAAgBIgBgBIAAgBIABgCIgCgBIAAgBIgBgBIAAgBIgBgBIAAgCIgCAAIAAgBIAAgBIgCgBIgCAAIABgCIgCAAIgCgBIgCAAIgBgBIgBAAIgDgBIgBAAIgCgBIAAACIgCgBIgBAAIgBABIgCAAIgBgBIgBACIgCAAIAAABIgBAAIgBABIgBAAIgBACIgBABIgBAAIAAABIgCgBIgBACIAAACIAAACIgBABIAAABIgBADIAAABIgBACIAAABIgBACIACABIAAABIgBABIABABIAAACIgBABIACABIAAABIABABIgBABIACABIAAACIABAAIABABIAAABIABABIADAAIABABIAAABIABABIACAAIABABIACAAIACABIACAAIAAgBIABAAgAEsA7IgCgBIAAABIgCAAIgBgBIgCAAIgBABIgBAAIgBgBIgDAAIgBgBIgCAAIAAABIgBAAIgCgBIgCAAIgCgBIgBAAIgCgBIgBAAIgBgBIAAgBIgCgBIgCAAIgBgBIgCAAIgBgBIAAgBIgCgBIgCAAIgBgBIAAgBIgCAAIgBgBIgBgBIAAgCIgBAAIAAgBIgCgBQgBAAAAAAIAAgCIgBgBIgCAAIAAgBQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAAAIAAgCIgBgBIABgBIgCgBIAAgBIgCAAIABgDIgCAAIAAgBIgBgBIAAgBIgBgBIAAgBQgBAAAAgBIAAgCIAAgBIgBgBIABgBIgBgBIAAgBIAAgCIgBgBIAAgBIAAgCIgBAAIAAgCIABgCIAAgBIgBgBIAAgBIABgBIAAgCIgBAAIAAgCIAAgCIABgBIAAgCIABgBIAAgCIABgCIAAgBIAAgCIABgCIAAgBIABgCIAAgCIABgBIAAgBIADAAIAAgCIABgBIAAgCIABgBIABAAIAAgBIAAgCIACAAIAAgBIABgCIACABIABgCIAAgCIACABIAAgCIAAgBIACAAIAAgCIACABIAAgCIABgBIACAAIABgCIABABIABgCIABABIAAgCIACABIAAgCIADABIAAgCIACAAIABABIAAgCIACABIABgCIACABIABAAIABgCIABABIABAAIABgBIACAAIABABIABgCIACABIABAAIABABIABgCIACABIACAAIACABIAAgCIABAAIACABIABAAIACABIACAAIACABIABAAIABABIACAAIACABIACAAIABABIABAAIACABIAAACIABAAIACABIACAAIABABIAAABIABABIACAAIABABIAAABIACABIABAAIAAACIACAAIABABIAAACIABAAIAAACIABAAIACABIAAABIABABIAAACIABAAIAAACIABAAIAAABIABABIAAABIABACIAAABIABABIAAABIACAAIgBACIAAACIABAAIAAACIACABIgBABIgBABIACABIAAACIgBABIACABIAAABIAAACIABABIAAABIgBABIAAABIABABIAAABIAAACIgBABIAAACIgBACIAAABIAAABIAAABIAAACIgBACIgBABIAAACIgBACIgBgBIAAACIgBABIAAACIgBACIAAABIgBABIgBAAIgBACIAAACIgBABIgCAAIAAABIgBACIAAABIgCAAIAAACIgBABQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgBACIgCgBIAAACIgBABIgBAAIgBACIgBgBIAAACIgBABIgCAAIAAABIgBgBIgBACIgDAAIAAABIgBAAIAAABIgCABIgBgBIgBACIgCAAIgBAAIgBAAIgBAAIgBACIgBgBIgBABIgCAAIgBgBIgBACIgCAAIgBAAgAESgLIAAACIAAABIgBADIAAABIgBABIAAACIgBABIAAABIACABIAAABIgBACIABABIAAABIABABIAAABIgBACIACABIgBABIACABIABABIAAABIABAAIACABIAAABIACABIABAAIABAAIAAADIACAAIABABIACAAIACABIABAAIABgCIABABIACAAIACABIAAgCIACABIABAAIABgBIABAAIABgBIACAAIABgCIABABIABgCIAAgBIACAAIAAgCIABABIABgCIAAgBIABgCIAAgCIADABIAAgCIABgBIAAgCIABgCIgCAAIAAgCIABgBIAAgBIgBgBIAAgBIABgBIgBgBIAAgCIgBAAIAAgCIgCgBIAAgBIgBgBIAAgBIgCAAIABgCIgCAAIgBgBIgBgBIgBgBIgCgBIgCAAIgBgBIgBAAIgCgBIgCAAIgCgBIgBAAIgBAAIgBABIgBAAIgBABIgBAAIgCgBIgBABIgBAAIgBABIgBAAIgBACIgBgBIgBACIAAABIgCAAIAAABIgCACIgBAAIgBABgAgXAVIgBgBIgCAAIgCgBIgBABIgBAAIgBgBIgCAAIgCgBIgCAAIgBgBIgCAAIgBgBIgBAAIgDgBIgBAAIgCAAIAAgCIgBAAIgCgBIgBAAIgCAAIABgCIgCgBIgCAAIgBgBIAAgBIgBAAIgBgBIAAgCIgCgBIgCAAIABgBIgCgBIgBgBIAAAAIgBAAIAAgCIgBgBIgCgBIABgBIgCgBIAAgBIgBgBIAAgBIgBgBIAAgBIgBgBIgBgBIAAgBIAAgBIgBgBIAAgCIAAgBIgBgBIAAgBIgBgBIAAgBIAAgCIgBgBIAAgBIABgCIgBgBIAAgBIAAgCIABgBIgCgBIABgBIAAgCIABgCIgCAAIAAgCIABgBIAAgCIABgCIAAgBIABgCIAAgCIgBAAIAAgCIAAgBIABgCIACAAIAAgBIAAgCIAAgBIABgCIABgCIAAgBIABgCIACAAIAAgBIABgBIAAgCIACABIAAgCIAAgCIABgBIABAAIABgBIAAgCIACAAIABgBIACAAIAAgBIABgCIABAAIAAgBIACAAIAAgBIABgCIACABIAAgCIACAAIABgBIABAAIAAgBIACAAIAAgCIADABIAAgCIACABIABAAIABgBIABAAIAAgBIACAAIACABIABgCIABAAIACABIAAgCIACABIABAAIAAgBIADABIABAAIACABIAAgDIACABIABAAIADABIABAAIABABIABgCIABAAIACABIACAAIABABIACAAIABABIACAAIABABIACAAIABABIAAABIABABIACAAIABABIACAAIABACIAAABIACABIACAAIAAABIAAABIACAAIABABIAAABIACABIABABIAAABIACABIABABIAAABIABABIAAABIABAAIAAACIACAAIABACIAAABIABABIAAABIACABIAAABIAAABIAAABIAAACIABAAIAAACIABABIgBABIACAAIAAACIAAACIABAAIgBACIAAACIABAAIAAACIgBABIACABIgBABIAAACIACABIAAABIgBACIAAABIgBACIACABIAAABIgBACIgBACIAAABIgBACIAAABIgBACIAAABIAAACIgBABIAAACIgBACIAAABIAAACIgBACIgCgBIAAACIgBABIgBACIAAABIgCAAIgBACIAAABIgBAAIgBABIAAABIgCAAIAAABIgBACIgBAAIgBABIgBABIgBAAIgBABIgBAAIAAACIgBABIgCAAIgBABIgBAAIgBABIgBABIgBABIgBAAIgBABIgBAAIgBgBIgBACIgBgBIgBACIgBAAIgBABIgBAAIgCgBIgBABIgBAAIgCgBIgBACQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgCAAIgBABIgCgBIgBAAIgCgBIgBACIAAAAIgBAAgAgrgsIAAABIgBABIABAAIAAACIgBACIgBABIAAACIABABIABACIgBABIACAAIgBACIABABIABABIAAABIABACIAAAAIAAABIACABIABABIAAABIACABIACAAIgBACIACABIABAAIABAAIACABIACAAIACABIABAAIABgCIABABIACAAIABABIABgCIACABIACAAIAAgBIABAAIABgCIABABIABgCIACABIABgCIAAgBIACAAIAAgCIABgBIABAAIAAgBIABgCIAAgCIABgBIAAgBIAAgDIAAgBIABgCIAAgBIAAgBIgBgBIABgCIgBAAIAAgCIABgCIgCgBIAAgBIAAAAIgBgCIgBAAIAAgCIgBAAIgBgBIAAgCIgCAAIgCgBIgBAAIAAgCIgCAAIgBgBIgBAAIgCgBIgCAAIgBAAIgBAAIgCAAIgBAAIgCgBIAAACIgCAAIgCgBIAAABIgBABIgBAAIgBABIgBAAIgBAAIgCACIgBAAIAAABIgBABIgCAAIAAACIAAABIgBACIAAABIgBAAIgBADgAj0gtIgCAAIgBgBIgBAAIgBABIgCgBIgCAAIgBgBIgCAAIgBgBIgCAAIgCgBIgBAAIgCgBIgBAAIgCgBIgBAAIAAgBIgCgBIgCAAIgBgBIgBgBIAAgBIgCgBIgBAAIgCgBIABgBIgDAAIgBgBIABgCIgCgBIgBAAIAAgBIgBAAIgCgBIAAgCIgBAAIAAgCIgCgBIAAgBIgBAAIgBgBIAAgBIAAgBIgBgBIgBgCIAAgBIgBgBIAAgBIgBgBIAAgBIABgCIgDgBIABgBIgBgBIAAgBIAAgBIgBgBIAAgCIABgBIgCgBIABgBIAAgCIgCAAIABgCIAAgCIgBgBIAAgBIABgCIAAgBIABgCIgCAAIABgCIAAgCIABgBIAAgCIABgCIAAgBIABgCIAAgBIABgCIAAgBIABgCIAAgBIABgCIABgCIAAgBIABAAIABgCIAAgBIAAgCIABgBIABAAIABgCIAAgBIADAAIAAgBIABgCIABABIAAgCIABgCIABABIABgCIAAgCIACABIABgCIACABIAAgCIABABIABgCIAAgCIACABIAAgCIACABIABgCIACABIAAgCIABAAIABAAIABgBIACABIABgCIABAAIACABIABgBIAAAAIABgCIACAAIACABIABgBIABAAIACAAIABgBIAAABIACAAIABABIABgDIACABIACAAIABABIABAAIACABIABgCIACABIABAAIACABIABAAIACABIACAAIACABIABAAIABABIACAAIgBACIACAAIACABIACAAIABABIABABIAAACIACAAIABABIACAAIAAABIACABIABABIAAABIABAAIABABIAAACIABAAIACABIAAABIACABIgBABIACABIABAAIAAABIABACIAAABIABABIAAABIABABIAAABIABABIAAABIABABIABABIgBACIACAAIgBACIABAAIAAACIACABIgBABIAAACIABABIAAABIAAACIABAAIgBACIAAABIAAACIABABIgBABIAAACIAAABIAAABIAAACIAAABIAAACIgBACIAAABIgBACIAAABIACAAIgBADIAAABIAAABIgCAAIgBABIgBACIAAACIgBABIAAACIgBACIgBABIAAAAIgBABIAAACIgBACIgBgBIgBACIAAACIgBABIgCAAIAAABIgBABIgCAAIAAACIAAABIgCAAIgBABIgBAAIgBACIAAABIgCAAIgBABIgBAAIAAABIgCAAIAAABQgBAAAAABQAAAAAAAAQAAAAgBAAQAAAAAAAAIgBABIgCAAIAAABIgCAAIAAABIgBAAIgCgBIAAACIgCAAIgBABIgCAAIgBAAIAAABIgBgBIgCAAIgBACIgCAAIgBgBIgBABIgBAAIgCgBIgBAAIgBACIgCgBgAkFh0IgBACIAAABIgBACIAAABIAAACIgBABIAAACIgBACIAAABIABABIgBACIABABIAAABIAAABIAAABIABABIABABIAAACIACAAIgBACIACAAIABABIAAABIACABIABAAIABABIAAACIACAAIACABIACAAIABABIACAAIABABIACAAIABgCIABABIACAAIABgBIABAAIABABIABgCIACABIABgCIABAAIABgBIABAAIAAgBIACAAIAAgBIABgCIACAAIABgBIAAgCIABgCIAAgBIABAAIABgBIAAgBIABgDIgCAAIAAgBIABgCIAAgBIABgCIgBgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgBIgBAAIAAgDIAAAAIgBgBIgBgBIAAgBIgBgBIAAgBIgCgBIgBgBIAAgBIgCgBIgBAAIgBgBIAAgBIgCgBIgCAAIgCgBIgBAAIgBgBIgCAAIgBABIgCAAIgBgBIgCAAIAAABIgCAAIgBAAIgBABIgCAAIAAABIgCAAIAAABIgCgBIAAADIAAABIgCgBIgBACIAAABIgCABIAAABgAE0iZIgDgBIgBAAIgCgBIgBAAIAAgCIgBAAIgCgBIgBAAIAAgCIgCAAIAAgCIgBgBIAAgBIgBgBIAAgBIgBgBIAAgBIABgCIgCgBIABgBIAAgCIAAgCIABgBIAAgCIABgBIAAgCIABgCIACABIABgCIAAgCIACABIAAgCIABABIABgCIABABIABgCIACABIACAAIABABIABgCIABAAIACABIABAAIACABIACAAIABABIABABIAAABIACABIABABIAAABIACABIAAABIABABIgBABIACABIAAABIABABIAAABIgBACIAAACIABABIAAABIgBABIAAACIgBACIgBgBIgBACIgBABIAAABIgBABIgBABIgBABIgBAAIgBABIgBAAIgBACIgCAAIgBgBIgBABIgBAAIgBAAIgBABIgBAAIAAAAg");
	this.shape.setTransform(46.0117,-1.5264,0.9145,0.9145,10.4589);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(0,-31.3,89.1,62.6), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAxBuIgxhTIg2AAIAABTIgvAAIAAjbIBuAAQAnAAAVARQAVARABAfQgBAYgNAQQgMAQgXAGIA7BcgAg2gIIA7AAQATAAAKgJQAKgJAAgQQAAgQgKgHQgKgIgVAAIg5AAg");
	this.shape.setTransform(107.3,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhZBuIAAjbICsAAIAAAkIh+AAIAAA3IB1AAIAAAjIh1AAIAAA5ICFAAIAAAkg");
	this.shape_1.setTransform(83.775,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAwBuIAAheIhfAAIAABeIguAAIAAjbIAuAAIAABXIBfAAIAAhXIAuAAIAADbg");
	this.shape_2.setTransform(60.1,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWBuIAAi3IhHAAIAAgkIC7AAIAAAkIhHAAIAAC3g");
	this.shape_3.setTransform(37.775,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag7BkQgZgOgNgaQgNgaAAgiQAAgjANgZQANgZAZgOQAZgNAiAAQAjAAAZANQAZAOANAZQANAZAAAjQAAAigOAZQgNAagZAOQgaAOghAAQgiAAgZgNgAgvg4QgRAUAAAkQAAAXAIASQAIARAOAKQAPAJATAAQAfAAAQgUQARgUAAglQAAgjgRgVQgRgUgeAAQgeAAgRAUg");
	this.shape_4.setTransform(14.525,-0.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(0,-24.9,121.2,49.9), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AA3BuIg3hYIg2BYIgxAAIBMhzIhGhoIAxAAIAwBNIAxhNIAwAAIhCBoIBJBzg");
	this.shape.setTransform(105.625,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhZBuIAAjbICsAAIAAAkIh+AAIAAA3IB1AAIAAAjIh1AAIAAA5ICFAAIAAAkg");
	this.shape_1.setTransform(83.725,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAyBuIgyhTIg2AAIAABTIguAAIAAjbIBsAAQAoAAAVARQAWARgBAfQABAYgNAQQgNAQgXAGIA7BcgAg2gIIA7AAQATAAAKgJQAKgJAAgQQAAgQgKgHQgKgIgVAAIg5AAg");
	this.shape_2.setTransform(60.8,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag7BkQgZgOgNgaQgNgaAAgiQAAgjANgZQANgZAZgOQAZgNAiAAQAjAAAZANQAZAOANAZQANAZAAAjQAAAigOAZQgNAagZAOQgaAOghAAQgiAAgZgNgAgvg4QgRAUAAAkQAAAXAIASQAIARAOAKQAPAJATAAQAfAAAQgUQARgUAAglQAAgjgRgVQgRgUgeAAQgeAAgRAUg");
	this.shape_3.setTransform(35.025,-0.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhQBuIAAjbIChAAIAAAkIhzAAIAABDIBvAAIAAAjIhvAAIAABRg");
	this.shape_4.setTransform(12.325,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(0,-24.9,119.4,49.9), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4BkQgZgNgNgaQgNgZAAgkQAAg2AdgdQAdgdA2AAQAnAAAYAOQAZAOALAdIgrANQgHgRgOgIQgPgJgUAAQgfAAgSAUQgRATAAAlQABAlARAUQARAUAfAAQASAAARgFQAQgFAKgIIAAgfIg2AAIAAghIBgAAIAABQQgSASgcAKQgcAKgeAAQgjAAgZgNg");
	this.shape.setTransform(135.7,-0.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAoBuIhfipIACAXIABARIAACBIgpAAIAAjbIA1AAIBgCqQgDgYAAgTIAAh/IApAAIAADbg");
	this.shape_1.setTransform(111.05,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWBuIAAjbIAtAAIAADbg");
	this.shape_2.setTransform(94.05,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABHBuIAAiFIAAgSIACgeIgKAkIgHAXIgoB6IgfAAIgoh6IgRg7IACAfIAAARIAACFIgpAAIAAjbIA+AAIAnB6IAGAVIAEAUIADgLIAEgMIADgMIApiAIA9AAIAADbg");
	this.shape_3.setTransform(75.275,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AA+BuIgUg4IhTAAIgTA4IguAAIBQjbIA1AAIBQDbgAgDg8IgEAMIgXBDIA+AAIgYhFIgEgMIgEgNIgDAPg");
	this.shape_4.setTransform(49.375,-0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag4BkQgZgNgNgaQgNgZAAgkQAAg2AdgdQAegdA1AAQAnAAAYAOQAZAOAKAdIgqANQgHgRgPgIQgPgJgTAAQggAAgQAUQgRATAAAlQAAAlARAUQARAUAfAAQASAAARgFQARgFAJgIIAAgfIg2AAIAAghIBgAAIAABQQgRASgcAKQgdAKgfAAQgiAAgZgNg");
	this.shape_5.setTransform(24.05,-0.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgWBuIAAjbIAtAAIAADbg");
	this.shape_6.setTransform(6.5,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,-24.9,151.6,49.9), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag4BkQgZgNgNgaQgNgZAAgkQAAg2AdgdQAdgdA2AAQAnAAAYAOQAZAOALAdIgrANQgHgRgOgIQgPgJgUAAQgfAAgSAUQgRATAAAlQABAlARAUQARAUAfAAQASAAARgFQAQgFAKgIIAAgfIg2AAIAAghIBgAAIAABQQgSASgcAKQgcAKgeAAQgjAAgZgNg");
	this.shape.setTransform(135.7,-0.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAoBuIhfipIACAXIABARIAACBIgpAAIAAjbIA1AAIBgCqQgDgYAAgTIAAh/IApAAIAADbg");
	this.shape_1.setTransform(111.05,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWBuIAAjbIAtAAIAADbg");
	this.shape_2.setTransform(94.05,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgWBuIAAi3IhHAAIAAgkIC7AAIAAAkIhHAAIAAC3g");
	this.shape_3.setTransform(78.825,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWBuIAAi3IhHAAIAAgkIC7AAIAAAkIhHAAIAAC3g");
	this.shape_4.setTransform(58.275,-0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhZBuIAAjbICsAAIAAAkIh+AAIAAA3IB1AAIAAAjIh1AAIAAA5ICFAAIAAAkg");
	this.shape_5.setTransform(37.275,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhgBuIAAjbIBjAAQAoAAAWAOQAUAOAAAbQAAATgKANQgLAMgVAFQAbAEAOAMQANAOAAAWQAAAegWAQQgWARgoAAgAgyBMIA6AAQAXAAAKgIQAKgJAAgPQAAgggsAAIg5AAgAgygUIA0AAQATAAAJgHQAJgHAAgNQAAgQgKgGQgJgGgTAAIgzAAg");
	this.shape_6.setTransform(13.95,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,-24.9,151.6,49.9), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("Ag4BkQgZgNgNgaQgNgZAAgkQAAg2AdgdQAegdA1AAQAmAAAZAOQAZAOAKAdIgqANQgHgRgPgIQgPgJgTAAQgfAAgRAUQgRATgBAlQAAAlASAUQASAUAeAAQASAAARgFQAQgFAKgIIAAgfIg2AAIAAghIBgAAIAABQQgSASgbAKQgcAKggAAQgiAAgZgNg");
	this.shape.setTransform(170.5,-0.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAoBuIhfipIACAXIABARIAACBIgpAAIAAjbIA0AAIBhCqQgDgYAAgTIAAh/IApAAIAADbg");
	this.shape_1.setTransform(145.85,-0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWBuIAAjbIAtAAIAADbg");
	this.shape_2.setTransform(128.85,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhRBuIAAjbIAuAAIAAC3IB1AAIAAAkg");
	this.shape_3.setTransform(114.2,-0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhgBuIAAjbIBjAAQAoAAAVAOQAVAOAAAbQAAATgLANQgKAMgVAFQAaAEAOAMQAPAOAAAWQgBAegWAQQgXARgoAAgAgzBMIA8AAQAWAAAKgIQALgJAAgPQgBgggsAAIg6AAgAgzgUIA0AAQAUAAAJgHQAIgHAAgNQAAgQgJgGQgJgGgTAAIg0AAg");
	this.shape_4.setTransform(91.65,-0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABHBuIAAiFIAAgSIACgeIgKAkIgHAXIgoB6IgfAAIgoh6IgRg7IACAfIAAARIAACFIgpAAIAAjbIA+AAIAnB6IAGAVIAEAUIADgLIAEgMIADgMIApiAIA9AAIAADbg");
	this.shape_5.setTransform(65.425,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA+BuIgUg4IhTAAIgTA4IguAAIBQjbIA1AAIBQDbgAgDg8IgEAMIgXBDIA+AAIgYhFIgEgMIgEgNIgDAPg");
	this.shape_6.setTransform(39.525,-0.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag4BkQgZgNgNgaQgNgZAAgkQAAg2AdgdQAdgdA2AAQAnAAAYAOQAZAOALAdIgrANQgHgRgOgIQgPgJgUAAQgfAAgSAUQgRATAAAlQABAlARAUQARAUAfAAQASAAARgFQAQgFAKgIIAAgfIg2AAIAAghIBgAAIAABQQgSASgcAKQgcAKgeAAQgjAAgZgNg");
	this.shape_7.setTransform(14.2,-0.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,-24.9,186.4,49.9), null);


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
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AuFBNQAqAAAQgqIAoAPQgNAggZAQQgZAPgjAAQgjAAgZgNQgZgOgNgZQgNgaAAgjQAAgkAMgZQANgZAYgNQAZgNAjAAQAnAAAYAPQAYAQAKAeIgoALQgFgQgPgKQgQgKgUAAQgfAAgQATQgRAUAAAlQAAAYAIASQAHARAPAJQAOAJAVAAgAo5AAQAAAigOAZQgNAagZAOQgaAOghAAQgjAAgZgNQgZgOgNgaQgNgaAAgiQAAgjANgZQANgZAZgOQAZgNAjAAQAjAAAZANQAZAOANAZQANAZAAAjgApoAAQAAgjgRgVQgRgUgeAAQgfAAgRAUQgRAUAAAkQAAAXAIASQAIARAOAKQAPAJAUAAQAfAAAQgUQARgUAAglgAn3gTIAACBIgpAAIAAjbIA1AAIBhCqQgDgYAAgTIAAh/IApAAIAADbIg2AAIhgioQACAMAAAKQABAKAAAHgAkagTIAACBIgpAAIAAjbIA1AAIBhCqQgDgYAAgTIAAh/IApAAIAADbIg2AAIhgioQACAMAAAKQABAKAAAHgABNBLIAAAjIizAAIAAjbICsAAIAAAkIh+AAIAAA3IB1AAIAAAjIh1AAIAAA6gADLBNQAqAAAQgqIApAPQgNAggZAQQgaAPgjAAQgjAAgZgNQgZgOgMgZQgOgaAAgjQAAgkANgZQAMgZAZgNQAYgNAjAAQAnAAAZAPQAYAQAKAeIgpALQgFgQgPgKQgPgKgVAAQgfAAgQATQgQAUAAAlQAAAYAHASQAIARAOAJQAPAJAUAAgAGlhJIAAC3IguAAIAAi3IhHAAIAAgkIC8AAIAAAkgAMgAAQAAAigOAZQgNAagZAOQgaAOghAAQgjAAgZgNQgZgOgNgaQgNgaAAgiQAAgjANgZQANgZAZgOQAZgNAjAAQAjAAAZANQAZAOANAZQANAZAAAjgAIphtIAADbIguAAIAAjbgALxAAQAAgjgRgVQgRgUgeAAQgfAAgRAUQgRAUAAAkQAAAXAIASQAIARAOAKQAPAJAUAAQAfAAAQgUQARgUAAglgANigTIAACBIgpAAIAAjbIA1AAIBhCqQgDgYAAgTIAAh/IApAAIAADbIg2AAIhgioQACAMAAAKQABAKAAAHg");
	this.shape.setTransform(101.325,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16153C").s().p("AJ1BkQgZgOgNgaQgNgaAAgiQAAgjANgZQANgZAZgOQAZgNAjAAQAjAAAZANQAZAOANAZQANAZAAAjQAAAigOAZQgNAagZAOQgaAOghAAQgjAAgZgNgAKBg4QgRAUAAAkQAAAXAIASQAIARAOAKQAPAJAUAAQAfAAAQgUQARgUAAglQAAgjgRgVQgRgUgeAAQgfAAgRAUgACPBkQgZgOgMgZQgOgaAAgjQAAgkANgZQAMgZAZgNQAYgNAjAAQAnAAAZAPQAYAQAKAeIgpALQgFgQgPgKQgPgKgVAAQgfAAgQATQgQAUAAAlQAAAYAHASQAIARAOAJQAPAJAUAAQAqAAAQgqIApAPQgNAggZAQQgaAPgjAAQgjAAgZgNgArkBkQgZgOgNgaQgNgaAAgiQAAgjANgZQANgZAZgOQAZgNAjAAQAjAAAZANQAZAOANAZQANAZAAAjQAAAigOAZQgNAagZAOQgaAOghAAQgjAAgZgNgArYg4QgRAUAAAkQAAAXAIASQAIARAOAKQAPAJAUAAQAfAAAQgUQARgUAAglQAAgjgRgVQgRgUgeAAQgfAAgRAUgAvBBkQgZgOgNgZQgNgaAAgjQAAgkAMgZQANgZAYgNQAZgNAjAAQAnAAAYAPQAYAQAKAeIgoALQgFgQgPgKQgQgKgUAAQgfAAgQATQgRAUAAAlQAAAYAIASQAHARAPAJQAOAJAVAAQAqAAAQgqIAoAPQgNAggZAQQgZAPgjAAQgjAAgZgNgAO/BuIhgioIACAWIABARIAACBIgpAAIAAjbIA1AAIBhCqQgDgYAAgTIAAh/IApAAIAADbgAH7BuIAAjbIAuAAIAADbgAF3BuIAAi3IhHAAIAAgkIC8AAIAAAkIhHAAIAAC3gAhmBuIAAjbICsAAIAAAkIh+AAIAAA3IB1AAIAAAjIh1AAIAAA6ICFAAIAAAjgAi9BuIhgioIACAWIABARIAACBIgpAAIAAjbIA1AAIBhCqQgDgYAAgTIAAh/IApAAIAADbgAmaBuIhgioIACAWIABARIAACBIgpAAIAAjbIA1AAIBhCqQgDgYAAgTIAAh/IApAAIAADbg");
	this.shape_1.setTransform(101.325,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-1,-12.3,204.7,24.700000000000003), null);


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
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AlXAdIAABRIguAAIAAjbICiAAIAAAkIh0AAIAABEIBwAAIAAAigAhuhLQgBAGgDAJQgDAJgBADIgXBDIA/AAIgYhEQgCgGgCgHQgCgHgCgGgAiYA2IgTA4IguAAIBQjbIA2AAIBQDbIgtAAIgUg4gADEAvQAAAggYARQgYARgvAAQhTAAgOg8IAtgHQAEARANAIQANAIAYAAQAYAAAMgHQAMgIAAgPQAAgJgGgGQgFgGgKgEQgFgCgKgDQgKgCgOgDQgRgEgJgDQgJgCgGgDQgGgCgFgDQgMgHgGgLQgHgMAAgSQAAgdAXgQQAWgQArAAQApAAAVANQAUAMAGAeIgtAGQgDgOgLgHQgKgIgUAAQgVAAgKAHQgLAHAAANQAAAIAFAGQAEAFAJAEQAIAEAbAGQAQADALADQAMADAHADQAHADAFADQAFADAEADQAIAIAEALQAFAKAAAOgAE/hJIAAC3IguAAIAAi3IhHAAIAAgkIC8AAIAAAkg");
	this.shape.setTransform(39.025,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#16153C").s().p("AAEA1IAtgHQAEARANAIQANAIAYAAQAYAAAMgHQAMgIAAgPQAAgJgGgGQgFgGgKgEIgPgFIgYgFIgagHIgPgFIgLgFQgMgHgGgLQgHgMAAgSQAAgdAXgQQAWgQArAAQApAAAVANQAUAMAGAeIgtAGQgDgOgLgHQgKgIgUAAQgVAAgKAHQgLAHAAANQAAAIAFAGQAEAFAJAEQAIAEAbAGIAbAGIATAGIAMAGIAJAGQAIAIAEALQAFAKAAAOQAAAggYARQgYARgvAAQhTAAgOg8gAERBuIAAi3IhHAAIAAgkIC8AAIAAAkIhHAAIAAC3gAgwBuIgUg4IhUAAIgTA4IguAAIBQjbIA2AAIBQDbgAhyg8IgEAMIgXBDIA/AAIgYhEIgEgNIgEgNIgEAPgAmFBuIAAjbICiAAIAAAkIh0AAIAABEIBwAAIAAAiIhwAAIAABRg");
	this.shape_1.setTransform(39.025,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-1,-12.3,80.1,24.700000000000003), null);


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
	this.shape.graphics.f("#FF7320").s().p("Ah/CcIgbgcQgOgNAQgQIC3i3IigAAQgTAAAAgTIAAgnQAAgTATAAIEQAAQAQAAACAPIABEUQAAAUgTAAIgnAAQgUAAAAgUIAAieIi2C2QgIAIgIAAQgGAAgHgGg");
	this.shape.setTransform(16.1858,0.0322);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(0,-16.2,32.4,32.5), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkNBCIA3gJQAGAWARAKQAQAJAdAAQAeAAAPgJQAPgJAAgSQAAgMgGgIQgHgHgNgFIgSgGIgegHIghgIIgTgGIgNgHQgPgIgIgPQgIgPAAgWQAAglAcgUQAcgUA1AAQAzAAAaAQQAaAQAHAlIg4AIQgEgSgNgJQgNgJgZAAQgaAAgNAIQgNAJAAAQQAAALAFAHQAGAHALAEQAKAFAiAHIAiAJQAOADAJAEQAJADAGAFQAHADAFAEQAKAKAFANQAFANAAARQAAApgdAVQgfAWg6AAQhoAAgRhMgADKCKIhih/IgiAaIAABlIg6AAIAAkSIA6AAIAAB8IB8h8IBDAAIh2B0IB/Ceg");
	this.shape.setTransform(27.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,-14.1,54.1,28.299999999999997), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgcCKIAAkTIA5AAIAAETg");
	this.shape.setTransform(2.875,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,-13.7,5.8,27.5), null);


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
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AEJAAQAABuhNBOQhOBNhuAAQhtAAhOhNQhNhOAAhuQAAhtBNhOQBOhNBtAAQBuAABOBNQBNBOAABtg");
	this.shape.setTransform(26.5,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8copy, new cjs.Rectangle(-1,-27.5,55,55), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AjkB9QgSgKgNgOQgKgLgHgOQgQggAAgsQAAhEAkgkQAlglBEAAQAwAAAfASQAfASANAkIg1AQQgIgVgTgKQgSgLgZAAQgpAAgVAYQgVAZAAAuQAAAuAWAZQAWAaAnAAQAXAAAVgHQAVgHALgKIAAgmIhDAAIAAgpIB4AAIAABkIgHAHQgUARgeALQgjANgmAAQgtAAgfgRgAJqCKIhAhpIhEAAIAABpIg5AAIAAkSICJAAIANAAQAoADAXASQAbAVAAAoQAAAcgRAWQgQATgcAHIBKB0gAHmgKIBMAAQAJAAAIgCQAMgDAHgGQANgLAAgUQAAgUgNgKQgHgFgMgDQgIgCgLAAIhKAAgADOCKIAAh2Ih4AAIAAB2Ig5AAIAAkSIA5AAIAABtIB4AAIAAhtIA6AAIAAESgAmICKIAAkSIA5AAIAAESgAn4CKIAAh2Ih4AAIAAB2Ig5AAIAAkSIA5AAIAABtIB4AAIAAhtIA6AAIAAESg");
	this.shape.setTransform(68.225,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(0,-14.1,136.5,28.299999999999997), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ASbCPQgugDgfgQQgfgRgRggQgQggAAgtQAAhEAkgkQAlgkBEAAQAwAAAfASQAfASANAkIg1AQQgIgVgTgLQgSgLgZAAQgpAAgVAZQgVAYAAAuQAAAuAWAaQAWAZAnAAQAXAAAVgGQAVgHALgKIAAgmIhDAAIAAgqIB4AAIAABkQgUAXggAPQgbANgnAAIgLAAgAFuBBIA4gKQAGAWAQAKQAQAKAeAAQAeAAAPgJQAPgJAAgTQAAgLgHgIQgHgIgMgFIgTgFIgegHIgggIIgTgHIgOgGQgOgJgJgPQgIgOAAgWQAAglAcgUQAcgUA2AAQAzAAAaAQQAZAQAIAlIg4AIQgEgSgOgJQgNgJgYAAQgbAAgNAIQgNAIAAARQAAAKAGAHQAFAHALAFQALAFAiAHIAiAIQAOAEAIADQAJAEAHAEQAHAEAEAEQAKAJAGAOQAFANAAARQAAAogeAWQgeAVg6AAQhpAAgRhLgABjBBIA4gKQAGAWAQAKQAQAKAeAAQAeAAAPgJQAPgJAAgTQAAgLgHgIQgHgIgMgFIgTgFIgegHIgggIIgTgHIgOgGQgOgJgJgPQgIgOAAgWQAAglAcgUQAcgUA2AAQAzAAAaAQQAZAQAIAlIg4AIQgEgSgOgJQgNgJgYAAQgbAAgNAIQgNAIAAARQAAAKAGAHQAFAHALAFQALAFAiAHIAiAIQAOAEAIADQAJAEAHAEQAHAEAEAEQAKAJAGAOQAFANAAARQAAAogeAWQgeAVg6AAQhpAAgRhLgAmDB7QgfgRgQggQgRggAAgsQAAgtAQgfQAPgfAfgRQAegQAsAAQAxAAAeATQAfAUAMAmIgzANQgGgUgTgMQgTgNgZAAQgnAAgVAYQgUAZAAAuQAAAfAKAWQAJAVASAMQASALAaAAQA0AAAUg0IAzASQgRAogfAUQgfATgsAAQgsAAgfgRgAq6B7QgfgRgQggQgRggAAgsQAAgsARgfQAQggAfgQQAfgRAsAAQAsAAAfARQAfARAQAfQARAgAAArQAAAqgRAhQgRAgggARQgfASgqAAQgsAAgfgRgAqrhIQgVAZAAAtQAAAdAKAWQAKAWASAMQASAMAZAAQAmAAAVgaQAVgZAAguQAAgsgVgZQgVgagmAAQgnAAgVAZgAOfCIIh4jTIADAcIABAWIAAChIgzAAIAAkSIBBAAIB6DVQgEgeAAgYIAAifIA0AAIAAESgAKJCIIAAkSIA5AAIAAESgAiXCIIAAkSIDXAAIAAAtIieAAIAABFICSAAIAAArIiSAAIAABJICmAAIAAAsgAtTCIIhAhoIhEAAIAABoIg5AAIAAkSICJAAQAxAAAbAVQAbAVAAAoQAAAdgRAVQgQAUgcAHIBKBzgAvXgMIBMAAQAYAAAMgLQANgLAAgUQAAgTgNgKQgNgKgZAAIhKAAgA0bCIIAAkSIB7AAQAyAAAaAXQAbAXAAApQAAAbgMAVQgNATgWAMQgWALggAAIhEAAIAABhgAzigEIA9AAQAYAAANgMQANgMAAgWQAAgrgzAAIg8AAg");
	this.shape.setTransform(130.825,0.0121);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(0,-14.3,261.7,28.6), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","#FFFFCC","rgba(215,229,19,0)"],[0,0.447,1],0,0,0,0,0,87.7).s().p("ApmJnQj/j/AAloQAAloD/j/QD/j+FnAAQFoAAD/D+QD/D/AAFoQAAFoj/D/Qj/D/loAAQlnAAj/j/g");
	this.shape.setTransform(87,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,-87,174,174), null);


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
	this.shape.graphics.lf(["#E18C44","#D76446"],[0,1],-31.6,-37.6,12.4,-5.5).s().p("AgpHeIl5sEQhPitC4gKIL0AAInjO7g");
	this.shape.setTransform(44.2885,-0.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#E9A854","#F6ED54"],[0,1],-59.5,7.1,70,-8.9).s().p("ApDKRQi6gEBLigIIewrQAshLBEgHILsAAInkO6IicEyQgdAygvADg");
	this.shape_1.setTransform(198.302,18.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#E18C44","#D76446"],[0,1],-36.3,0.4,20.3,-0.1).s().p("ArHKRIHku7ICckyQAegxAugDII/AAQC6AEhLCgIoeQrQgrBLhFAHg");
	this.shape_2.setTransform(111.3899,-18.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#E9A854","#F6ED54"],[0,1],-17.5,2,9,22.6).s().p("Am6HeIHku7IAAAAIF5MEQBQCti5AKg");
	this.shape_3.setTransform(265.3967,0.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Eg82ALKIAAgKIAAxBIAAgKIDcAAIAKAAQAFAAADACQACADAAAFIAABQIAAAKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAKAAIAAgKIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAAgKIAKAAIAeAAIAKAAQAFAAACACQADADAAAFIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAACACQADADAAAFIAKAAIAKAAQAFAAACACQADADAAAFIAKAAQAFAAADACQACADAAAFIAKAAQAFAAADACQACADAAAFIAKAAQAFAAACACQADADAAAFQAFAAACACQADADAAAFQAFAAACACQADADAAAFQAFAAACACQADADAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAFAAACACQADADAAAFIAAAKQAFAAACACQADADAAAFQAFAAACACQADADAAAFIAAAKQAFAAACACQADADAAAFIAAAKIAAAKQAFAAACACQADADAAAFIAAAKQAFAAADACQACADAAAFIAAAKIAAAKIAAAKQAFAAADACQACADAAAFIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKQASAggIA5IAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAKQAAAFgDACQgCADgFAAIAAAKQAAAFgDACQgCADgFAAIAAAKQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAIAAAKQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAIgKAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAIgKAAQAAAFgCACQgDADgFAAIgKAAQAAAFgCACQgDADgFAAIgKAAQAAAFgDACQgCADgFAAIgKAAIgKAAIgKAAQAAAFgCACQgDADgFAAIgKAAIgKAAIgKAAIgKAAIgyAAIgKAAIgKAAIgKAAQgFAAgCgDQgDgCAAgFIgKAAIgKAAIgKAAQgFAAgDgDQgCgCAAgFIgKAAQgFAAgDgDQgCgCAAgFIgKAAQgFAAgDgDQgCgCAAgFIgKAAQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFIAAgKIgKAAIAAG4IAAAKQAAAFgCACQgDADgFAAIgKAAQgjACghAAQhSAAhGgMgEg4NgCeQgCADgFAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAIAAAKQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKIAAAKIAAAxIAAAKIAAAKIAAAKIAAAKIAAAKQAFAAADACQACADAAAFIAAAKQAFAAADACQACADAAAFIAAAKQAFAAADACQACADAAAFQAFAAACACQADADAAAFQAFAAACACQADADAAAFQAFAAACACQADADAAAFQAFAAACACQADADAAAFIAKAAQAFAAADACQACADAAAFIAKAAQAFAAADACQACADAAAFIAKAAIAKAAIAKAAIAUAAIAKAAIAKAAIAKAAIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAAgKIAAgKIAAgnIAAgKIAAgKIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgCgDQgDgCAAgFIgKAAQgFAAgCgDQgDgCAAgFIgKAAQgFAAgDgDQgCgCAAgFIgKAAIgKAAIgKAAIgKAAIgoAAIgKAAIgKAAIgKAAQAAAFgCACQgDADgFAAIgKAAQAAAFgDACQgCADgFAAIgKAAQAAAFgDACgAFPLUIgKAAIgKAAIgKAAIgKAAIgKAAIgyAAIgKAAIgKAAIgKAAIgKAAIgKAAIgKAAQgFAAgCgDQgDgCAAgFIgKAAIgKAAIgKAAQgFAAgDgDQgCgCAAgFIgKAAIgKAAQgFAAgCgDQgDgCAAgFIgKAAQgFAAgCgDQgDgCAAgFIgKAAQgFAAgDgDQgCgCAAgFIgKAAQgFAAgDgDQgCgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFIgKAAQgFAAgBgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFIAAgKQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFIAAgKQgFAAgDgDQgCgCAAgFQgFAAgCgDQgDgCAAgFIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAKAAIBtAAIAKAAQAFAAADACQACADAAAFIAAAKIAAAKQAFAAADACQACADAAAFIAAAKQAFAAADACQACADAAAFQAFAAADACQACADAAAFIAAAKQAFAAADACQACADAAAFQAFAAACACQADADAAAFQAFAAACACQADADAAAFIAKAAQAFAAACACQADADAAAFQAFAAADACQACADAAAFIAKAAQAFAAADACQACADAAAFIAKAAIAKAAQAFAAACACQADADAAAFIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAADACQACADAAAFIAeAAIAKAAIAAgKIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAAi0IgKAAIAAAKQAAAFgDACQgCADgFAAIAAAKQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgDACQgCADgFAAIgKAAQAAAFgDACQgCADgFAAIgKAAQAAAFgCACQgDADgFAAIgKAAIgKAAQAAAFgCACQgDADgFAAIgKAAIgKAAQAAAFgDACQgCADgFAAIgKAAIgKAAIgKAAIgKAAIgKAAIg8AAIgKAAIgKAAIgKAAQgFAAgDgDQgCgCAAgFIgKAAIgKAAIgKAAQgFAAgCgDQgDgCAAgFIgKAAQgFAAgDgDQgCgCAAgFIgKAAIgKAAQgFAAgDgDQgCgCAAgFQgFAAgCgDQgDgCAAgFIgKAAQgFAAgCgDQgDgCAAgFQgFAAgBgDQgDgCAAgFQgFAAgCgDQgDgCAAgFIgKAAQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFIAAgKQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgCgDQgDgCAAgFIAAgKQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAhZIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAKAAIAAgKIAJAAIAAgKIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAKAAIAAgKIAKAAIAKAAIAKAAIAAgKIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAyAAIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAACACQADADAAAFIAKAAIAKAAIAKAAQAFAAADACQACADAAAFIAKAAQAFAAADACQACADAAAFIAKAAQAFAAACACQADADAAAFIAKAAQAFAAACACQADADAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFIAKAAQAFAAADACQACADAAAFQAFAAADACQACADAAAFIAAAKQAFAAACACQADADAAAFQAFAAACACQADADAAAFQAFAAACACQADADAAAFIAAAKQAFAAACACQADADAAAFIAAAKIAKAAIAAgKIAAiMIAKAAIBkAAIAKAAQARF0gHGNIAAAKIAAAKIAAAKIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKQAAAFgCACQgDADgFAAIAAAKQAAAFgCACQgDADgFAAIAAAKQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAIAAAKQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAIgKAAQAAAFgCACQgDADgFAAQAAAFgDACQgCADgFAAIgKAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAIgKAAQAAAFgCACQgDADgFAAIgKAAIgKAAQAAAFgCACQgDADgFAAIgKAAIgKAAIgKAAQAAAFgDACQgCADgFAAIgKAAgABSjaQgCADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAIAAAKQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAIAAAKQAAAFgDACQgCADgFAAIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAKIAAAKIAAAKQAAAFgDACQgCADgEAAIAAAKIAAAKIAABFIAAAKIAAAKIAAAKQAEAAACACQADADAAAFIAAAKIAAAKIAAAKQAFAAACACQADADAAAFIAAAKIAAAKQAFAAACACQADADAAAFIAAAKQAFAAADACQACADAAAFQAFAAADACQACADAAAFIAAAKQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAFAAACACQADADAAAFIAKAAQAFAAACACQADADAAAFQAFAAACACQADADAAAFIAKAAQAFAAADACQACADAAAFIAKAAIAKAAQAFAAADACQACADAAAFIAKAAIAKAAIAKAAIAKAAIAyAAIAKAAIAKAAIAKAAIAKAAIAKAAIAAgKIAKAAIAKAAIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAAgxIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKQgFAAgCgDQgDgCAAgFIAAgKQgFAAgCgDQgDgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFIAAgKQgFAAgDgDQgCgCAAgFIgKAAQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFIgKAAQgFAAgCgDQgDgCAAgFIgKAAQgFAAgDgDQgCgCAAgFIgKAAIgKAAQgFAAgDgDQgCgCAAgFIgKAAIgKAAIgKAAIgKAAIg8AAIgKAAIgKAAIgKAAIgKAAQAAAFgCACQgDADgFAAIgKAAIgKAAQAAAFgCACQgDADgFAAIgKAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAIgKAAQAAAFgDACgEBSbALKIh4AAQgFAAgCgDQgDgCAAgFIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKQgFAAgDgDQgCgCAAgFIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKQgFAAgCgDQgDgCAAgFIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKQgFAAgCgDQgDgCAAgFIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKQgFAAgDgDQgCgCAAgFIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKQgFAAgCgDQgDgCAAgFIAAgKQgFAAgCgDQgDgCAAgFIAAgJIAAgKQgFAAgCgDQgDgCAAgFIAAgKQgFAAgCgDQgDgCAAgFIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKQgFAAgDgDQgCgCAAgFIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKQgFAAgCgDQgDgCAAgFIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKQgFAAgCgDQgDgCAAgFIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKQgFAAgDgDQgCgCAAgFIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAKAAIB4AAIAKAAQAFAAACACQADADAAAFQAFAAACACQADADAAAFIAAAKQAFAAACACQADADAAAFIAAAKIAAAKQAFAAADACQACADAAAFIAAAKQAFAAADACQACADAAAFIAAAKIAAAKQAFAAADACQACADAAAFIAAAKQAFAAADACQACADAAAFIAAAKIAAAKQAFAAADACQACADAAAFIAAAKQAFAAACACQADADAAAFIAAAKQAFAAACACQADADAAAFIAAAKIAAAKQAFAAACACQADADAAAFIAAAKQAFAAACACQADADAAAFIAAAKIAAAKQAFAAADACQACADAAAFIAAAKQAFAAADACQACADAAAFIAAAKIAAAKQAFAAADACQACADAAAFIAAAKQAFAAADACQACADAAAFIAAAKQAFAAADACQACADAAAEIAAAKIAAAKQAFAAACACQADADAAAFIAAAKQAFAAACACQADADAAAFIAAAKIAAAKQAFAAACACQADADAAAFIAAAKQAFAAACACQADADAAAFIAAAKIAAAKQAFAAADACQACADAAAFIAAAKQAFAAADACQACADAAAFIAAAKQAFAAADACQACADAAAFIAAAKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgJIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAKAAIBuAAIAKAAQAFAAADACQACADAAAFIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAKQAAAFgDACQgCADgFAAIAAAKQAAAFgDACQgCADgFAAIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAKQAAAFgDACQgCADgFAAIAAAKIAAAKQAAAFgDABQgCADgFAAIAAAKQAAAFgDACQgCADgFAAIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKQAAAFgDACQgCADgFAAIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAKQAAAFgDACQgCADgFAAIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAKQAAAFgDACQgCADgFAAIAAAKQAAAFgDACQgCADgFAAIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAKQAAAFgDACQgCADgFAAIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAKQAAAFgDACQgCADgFAAIAAAKQAAAFgCACQgDADgFAAIgKAAgEBG3AF2IgKAAIgKAAIgKAAIhGAAIgKAAIgKAAIgKAAQgFAAgCgDQgDgCAAgFIgKAAIgKAAIgKAAQgFAAgDgDQgCgCAAgFIgKAAQgFAAgCgDQgDgCAAgFIgKAAQgFAAgCgDQgDgCAAgFIgKAAQgFAAgDgDQgCgCAAgFIgKAAQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFIAAgKQgFAAgDgDQgCgCAAgFIAAgKQgFAAgDgDQgCgCAAgFIAAgKQgFAAgCgDQgDgCAAgFIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKIAAgKIAAgKIAAhZIAAgKIAAgKIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAKAAIAAgKIAKAAIAKAAIAKAAIAAgKIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAyAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAADACQACADAAAFIAKAAIAKAAQAFAAACACQADADAAAFIAKAAQAFAAACACQADADAAAFIAKAAQAFAAADACQACADAAAFIAKAAQAFAAADACQACADAAAFQAFAAADACQACADAAAFIAKAAQAFAAACACQADADAAAFQAFAAACACQADADAAAFQAFAAACACQADADAAAFQAFAAADACQACADAAAFIAAAKQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFIAAAKIAKAAIAAgKIAAiCIAKAAIBuAAIAKAAIAALPIAAAKIAAAFQg8AFg8AAQgFAAgCgDQgDgCAAgFIAAgKIAAh4IgKAAQAAAFgCACQgDADgFAAIAAAKQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAIAAAKQAAAFgCACQgDADgFAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAIgKAAQAAAFgDACQgCADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAIgKAAQAAAFgCACQgDADgFAAIgKAAQAAAFgDACQgCADgFAAIgKAAQAAAFgDACQgCADgFAAIgKAAIgKAAIgKAAQAAAFgCACQgDADgFAAIgKAAgEBEBgDaQgDADgFAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAIAAAKQAAAFgDACQgCADgFAAIAAAKQAAAFgCACQgDADgFAAIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAUIAAAKIAAAKIAAAJIAAAUIAAAKQAFAAADACQACADAAAFIAAAKIAAAKIAAAKIAAAKQAFAAADACQACADAAAFIAAAKIAAAKQAFAAADACQACADAAAFIAAAKQAFAAADACQACADAAAFIAAAKQAFAAACACQADADAAAFQAFAAACACQADADAAAFIAAAKQAFAAACACQADADAAAFQAFAAACACQADADAAAFQAFAAADACQACADAAAFIAKAAQAFAAADACQACADAAAFQAFAAADACQACADAAAFIAKAAIAKAAQAFAAACACQADADAAAFIAKAAQAFAAACACQADADAAAFIAKAAIAKAAIAKAAIAKAAIAyAAIAKAAIAKAAIAKAAIAKAAIAKAAIAAgKIAKAAIAKAAIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAAgKIAAgxIAAgKIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKQgFAAgDgDQgCgCAAgFQgFAAgCgDQgDgCAAgFIAAgKQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFIgKAAQgFAAgDgDQgCgCAAgFIgKAAQgFAAgDgDQgCgCAAgFIgKAAQgFAAgCgDQgDgCAAgFIgKAAQgFAAgCgDQgDgCAAgFIgKAAIgKAAIgKAAIgKAAIgKAAIg8AAIgKAAIgKAAIgKAAIgKAAQAAAFgDACQgCADgFAAIgKAAIgKAAQAAAFgDACQgCADgFAAIgKAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAIgKAAQAAAFgCACgEAotAF2IgKAAIgKAAIgKAAIgKAAIhGAAIgKAAIgKAAIgKAAQgFAAgCgDQgDgCAAgFIgKAAIgKAAIgKAAQgFAAgCgDQgDgCAAgFIgKAAIgKAAQgFAAgDgDQgCgCAAgFIgKAAQgFAAgCgDQgDgCAAgFIgKAAQgFAAgCgDQgDgCAAgFIgKAAQgFAAgCgDQgDgCAAgFQgFAAgDgDQgCgCAAgFIgKAAQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFIAAgKQgFAAgCgDQgDgCAAgFQgFAAgDgDQgCgCAAgFIAAgKQgFAAgDgDQgCgCAAgFIAAgKQgFAAgDgDQgCgCAAgFIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgdIAAgKIAKAAIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAKAAIAAgKIAKAAIAKAAIAKAAIAKAAIAAgKIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAyAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAACACQADADAAAFIAKAAIAKAAIAKAAQAFAAADACQACADAAAFIAKAAIAKAAQAFAAACACQADADAAAFIAKAAQAFAAACACQADADAAAFIAKAAQAFAAADACQACADAAAFIAKAAQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAFAAACACQADADAAAFQAFAAACACQADADAAAFQAFAAACACQADADAAAFQAFAAACACQADADAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFIAAAKQAFAAADACQACADAAAFQAFAAADACQACADAAAFIAAAKQAFAAADACQACADAAAFIAAAKQAFAAACACQADADAAAFIAAAKIAAAKQAFAAACACQADADAAAFIAAAKIAAAKIAAAKIAAAKQAFAAACACQADADAAAFIAAAKIAAAKIAAAoIAAAKIAAAKIAAAKIAAAJQAAAFgDACQgCADgFAAIAAAFQknAFknAAIAAAKQAFAAADACQACADAAAFIAAAKIAAAKIAAAKIAAAKIAAAKQAFAAADACQACADAAAFIAAAKIAAAKQAFAAADACQACADAAAFIAAAKIAAAKQAFAAACACQADADAAAFQAFAAACACQADADAAAFIAAAKQAFAAACACQADADAAAFQAFAAACACQADADAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFIAKAAQAFAAADACQACADAAAFIAKAAQAFAAACACQADADAAAFIAKAAQAFAAACACQADADAAAFIAKAAIAKAAQAFAAADACQACADAAAFIAKAAIAKAAIAUAAIAKAAIAKAAIAUAAIAKAAIAKAAIAKAAIAKAAIAAgKIAKAAIAKAAIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAKAAIAAgKIAAgKIAKAAIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIBuAAIAKAAQAFAAACACQADADAAAFIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAKQAAAFgCACQgDADgFAAIAAAKQAAAFgCACQgDADgFAAIAAAKQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAIAAAKQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAIgKAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAIgKAAQAAAFgCACQgDADgFAAIgKAAQAAAFgDACQgCADgFAAIgKAAQAAAFgDACQgCADgFAAIgKAAIgKAAQAAAFgCACQgDADgFAAIgKAAIgKAAIgKAAQAAAFgDACQgCADgFAAIgKAAgEAlPgDkQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAIAAAKQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKIAAAKQAAAFgCAEQgDAGgFAFIAAAKIHCAAIAKAAIAKAAIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKQgFAAgDgDQgCgCAAgFIAAgKQgFAAgCgDQgDgCAAgFIAAgKQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgDgDQgCgCAAgFIgKAAQgFAAgDgDQgCgCAAgFIgKAAQgFAAgCgDQgDgCAAgFIgKAAIgKAAQgFAAgCgDQgDgCAAgFIgKAAIgKAAIgKAAIgKAAIgKAAIgyAAIgKAAIgKAAIgKAAIgKAAQAAAFgCACQgDADgFAAIgKAAIgKAAQAAAFgDACQgCADgFAAIgKAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAIgKAAQAAAFgCACgASNF2IgKAAIgKAAIgKAAIg8AAIgKAAIgKAAIgKAAQgFAAgDgDQgCgCAAgFIgKAAIgKAAIgKAAQgFAAgCgDQgDgCAAgFIgKAAIgKAAQgFAAgDgDQgCgCAAgFIgKAAQgFAAgDgDQgCgCAAgFIgKAAQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFIgKAAQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgCgDQgDgCAAgFIAAgKQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFIAAgKQgFAAgCgDQgDgCAAgFIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKIAAgKIAAgUIAAgKIAAgdIAAgKIAAgUIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAKAAIAKAAIAAgKIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAoAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAACACQADADAAAFIAKAAIAKAAQAFAAADACQACADAAAFIAKAAIAKAAQAFAAACACQADADAAAFIAKAAQAFAAACACQADADAAAFQAFAAACACQADADAAAFIAKAAQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAFAAACACQADADAAAFQAFAAACACQADADAAAFIAAAKQAFAAACACQADADAAAFQAFAAACACQADADAAAFIAAAKQARg6gChSIAFAAIBuAAIAKAAQARFbgHF0IAAAKQAAAFgDACQgCADgFAAIgKAAIhuAAQgFAAgDgDQgCgCAAgFIAAgKIAAh4IgKAAIAAAKQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAIAAAKQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAIgKAAQAAAFgCACQgDADgFAAQAAAFgDACQgCADgFAAIgKAAQAAAFgDACQgCADgFAAIgKAAQAAAFgCACQgDADgFAAIgKAAQAAAFgCACQgDADgFAAIgKAAIgKAAIgKAAQAAAFgDACQgCADgFAAIgKAAgAOKAiIgBAKIAAAKIAAAKIAAAKIAAAKQAFAAACACQADADAAAFIAAAKIAAAKQAFAAACACQADADAAAFIAAAKQAFAAADACQACADAAAFIAAAKQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFIAAAKQAFAAADACQACADAAAFIAKAAQAFAAACACQADADAAAFQAFAAACACQADADAAAFIAKAAQAFAAADACQACADAAAFIAKAAQAFAAADACQACADAAAFIAKAAIAKAAQAFAAACACQADADAAAFIAKAAIAKAAIAKAAIAKAAIAyAAIAKAAIAKAAIAKAAIAKAAIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAKAAIAAgKIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgdIAAgKIAAgKIAAgKIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKQgFAAgCgDQgDgCAAgFIAAgKQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFIAAgKQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFIgKAAQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFIgKAAQgFAAgCgDQgDgCAAgFIgKAAIgKAAQgFAAgDgDQgCgCAAgFIgKAAIgKAAIgKAAIgKAAIgKAAIg8AAIgKAAIgKAAIgKAAQAAAFgDACQgCADgFAAIgKAAIgKAAQAAAFgCACQgDADgFAAIgKAAQAAAFgCACQgDADgFAAIgKAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAIgKAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAIAAAKQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAIAAAKQAAAFgCACQgDADgFAAIAAAKQAAAFgDACQgCADgFAAIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAdIAAAKIACAAQAOAAgFAUgAogF2IgKAAIgKAAIgKAAIgKAAIg8AAIgKAAIgKAAIgKAAIgKAAQgFAAgDgDQgCgCAAgFIgKAAIgKAAIgKAAQgFAAgCgDQgDgCAAgFIgKAAIgKAAQgFAAgDgDQgCgCAAgFIgKAAIgKAAQgFAAgCgDQgDgCAAgFIgKAAQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFIgKAAQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgDgDQgCgCAAgFIAAgKQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFIAAgKQgFAAgDgDQgCgCAAgFIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAhFIAAgKIAKAAIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAKAAIAKAAIAAgKIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAAgKIAKAAIAoAAIAKAAQAFAAADACQACADAAAFIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAADACQACADAAAFIAKAAIAKAAIAKAAQAFAAACACQADADAAAFIAKAAQAFAAACACQADADAAAFIAKAAIAKAAQAFAAADACQACADAAAFIAKAAQAFAAADACQACADAAAFQAFAAADACQACADAAAFIAKAAQAFAAACACQADADAAAFQAFAAACACQADADAAAFQAFAAACACQADADAAAFQAFAAACACQADADAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFIAAAKQAFAAACACQADADAAAFQAFAAACACQADADAAAFIAAAKQAFAAACACQADADAAAFIAAAKIAAAKQAFAAACACQADADAAAFIAAAKQAFAAACACQADADAAAFIAAAKIAAAKIAAAKQAFAAADACQACADAAAFIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAAeIAAAKIAAAKIAAAJIAAAKIAAAKQAAAFgCACQgDADgFAAIgKAAIn0AAIAAAKIAAAKIAAAKIAAAKIAAAKQAFAAADACQACADAAAFIAAAKQAFAAACACQADADAAAFIAAAKQAFAAACACQADADAAAFIAAAKQAFAAACACQADADAAAFIAKAAQAFAAACACQADADAAAFIAKAAQAFAAADACQACADAAAFIAKAAIAKAAQAFAAACACQADADAAAFIAKAAIAKAAIAKAAIAKAAIAKAAIAAgKIAKAAIAKAAIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAKAAIDcAAIAKAAQAFAAACACQADADAAAFIAAAKQAAAFgDACQgCADgFAAIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAKQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAIAAAKQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAIgKAAQAAAFgCACQgDADgFAAIgKAAQAAAFgCACQgDADgFAAIgKAAQAAAFgDACQgCADgFAAIgKAAQAAAFgDACQgCADgFAAIgKAAIgKAAQAAAFgCACQgDADgFAAIgKAAIgKAAIgKAAQAAAFgDACQgCADgFAAIgKAAgArNioQgCADgFAAIAAAKQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKIAAAKIEOAAIAKAAIAAgKIAAgKIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFIgKAAQgFAAgCgDQgDgCAAgFIgKAAIgKAAIgKAAIgKAAIgoAAIgKAAIgKAAIgKAAQAAAFgCACQgDADgFAAIgKAAQAAAFgCACQgDADgFAAQAAAFgDACQgCADgFAAIgKAAQAAAFgDACgA0OF2IgKAAIgKAAIgKAAIgKAAIhQAAIgKAAIgKAAIgKAAIgKAAQgFAAgDgDQgCgCAAgFIgKAAIgKAAIgKAAQgFAAgDgDQgCgCAAgFIgKAAIgKAAQgFAAgCgDQgDgCAAgFIgKAAIgKAAQgFAAgDgDQgCgCAAgFIgKAAQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFIgKAAQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFIAAgKQgFAAgCgDQgDgCAAgFIAAgKQgFAAgCgDQgDgCAAgFIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKIAAgKIAKAAIDIAAIAKAAQAFAAADACQACADAAAFIAAAKQAFAAADACQACADAAAFIAAAKIAAAKQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAFAAACACQADADAAAFIAKAAQAFAAACACQADADAAAFIAKAAQAFAAACACQADADAAAFIAKAAIAKAAIAoAAIAKAAIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAAgKIAAgKIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKIgKAAQgFAAgDgDQgCgCAAgFIgKAAQgFAAgCgDQgDgCAAgFIgKAAIgKAAQgFAAgDgDQgCgCAAgFIgKAAIgKAAQgFAAgDgDQgCgCAAgFIgKAAIgKAAIgKAAIgKAAQgFAAgCgDQgDgCAAgFIgKAAIgKAAIgKAAQgFAAgDgDQgCgCAAgFIgKAAIgKAAIgKAAQgFAAgCgDQgDgCAAgFIgKAAIgKAAQgFAAgDgDQgCgCAAgFIgKAAIgKAAQgFAAgDgDQgCgCAAgFIgKAAQgFAAgCgDQgDgCAAgFIgKAAQgFAAgCgDQgDgBAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgCgDQgDgCAAgFIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAKAAIAKAAIAAgKIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAAgKIAKAAIAoAAIAKAAQAFAAADACQACADAAAFIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAADACQACADAAAFIAKAAIAKAAIAKAAQAFAAACACQADADAAAFIAKAAQAFAAACACQADADAAAFIAKAAQAFAAACACQADADAAAFIAKAAQAFAAADACQACADAAAFQAFAAADACQACADAAAFIAKAAQAFAAACACQADADAAAFQAFAAACACQADADAAAFQAFAAACACQADADAAAFQAFAAACACQADADAAAFQAFAAACACQADADAAAFIAAAKQAFAAADACQACADAAAFQAFAAADACQACADAAAFIAAAKQAFAAADACQACADAAAFQAFAAADACQACADAAAFIAAAKIAAAKQAFAAACACQADADAAAFIAAAKIAAAKQAFAAACACQADADAAAFIAAAKIAAAKIAAAFQhpAFhpAAQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFIAAgKIAAgKQgFAAgDgDQgCgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFIgKAAQgFAAgDgDQgCgCAAgFIgKAAIgKAAIgKAAIgKAAIgeAAIgKAAIgKAAQAAAFgCACQgDADgFAAIgKAAQAAAFgCACQgDADgFAAIAAAKIAAAKIAAAUIAAAKIAAAKQAFAAADACQACADAAAFQAFAAADACQACADAAAFIAKAAQAFAAACACQADADAAAFIAKAAIAKAAQAFAAACACQADADAAAFIAKAAIAKAAQAFAAADACQACADAAAFIAKAAIAKAAIAKAAQAFAAACACQADADAAAFIAKAAIAKAAIAKAAQAFAAADACQACADAAAFIAKAAIAKAAIAKAAQAFAAACACQADADAAAFIAKAAIAKAAQAFAAACACQADADAAAFIAKAAIAKAAQAFAAADACQACADAAAFIAKAAIAKAAQAFAAACACQADADAAAFQAFAAACACQADADAAAFIAKAAQAFAAACACQADADAAAFQAFAAACACQADADAAAFQAFAAADACQACADAAAEQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAFAAACACQADADAAAFIAAAKQAFAAACACQADADAAAFIAAAKQAFAAACACQADADAAAFIAAAKIAAAKIAAAKIAAA8IAAAKIAAAKIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAKQAAAFgDACQgCADgFAAIAAAKQAAAFgDACQgCADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAIgKAAQAAAFgDACQgCADgFAAIgKAAQAAAFgCACQgDADgFAAIgKAAIgKAAQAAAFgDACQgCADgFAAIgKAAIgKAAIgKAAQAAAFgDACQgCADgFAAIgKAAgEgpoAF2IgKAAIgKAAIgKAAIgKAAIgUAAIgKAAIgKAAIgKAAIgKAAIgKAAQgFAAgCgDQgDgCAAgFIgKAAIgKAAQgFAAgDgDQgCgCAAgFIgKAAIgKAAQgFAAgDgDQgCgCAAgFIgKAAQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFIgKAAQgFAAgCgDQgDgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFIAAgKQgFAAgDgDQgCgCAAgFQgFAAgCgDQgDgCAAgFIAAgKQgFAAgCgDQgDgCAAgFIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAnLIAAgKQBzAABzAFIAAAFIAAGZIAAAKQAFAAADACQACADAAAFIAAAKIAAAKIAAAKIAAAKQAFAAADACQACADAAAFIAAAKQAFAAADACQACADAAAFIAAAKQAFAAADACQACADAAAFQAFAAACACQADADAAAFQAFAAACACQADADAAAFIAKAAQAFAAACACQADADAAAFIAKAAQAFAAADACQACADAAAFIAKAAIAKAAIAKAAIAUAAIAKAAIAKAAIAKAAIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAAgKIAAgKIAAmPIAAgKIAKAAIDSAAIAKAAQAFAAACACQADADAAAFIAALZIAAAKQAAAFgDACQgCADgFAAIgKAAIjSAAQgFAAgDgDQgCgCAAgFIAAgKQAHg6gRggIAAAKQAAAFgCACQgDADgFAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAIgKAAQAAAFgCACQgDADgFAAQAAAFgCACQgDADgFAAIgKAAQAAAFgDACQgCADgFAAIgKAAIgKAAQAAAFgDACQgCADgFAAIgKAAIgKAAQAAAFgCACQgDADgFAAIgKAAgEhK6AFiIAAgKIAAmZQgFAAgDgDQgCgCAAgFIAAgKIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFIgKAAQgFAAgCgDQgDgCAAgFIgKAAIgKAAIgKAAIgKAAQgFAAgDgDQgCgCAAgFIgKAAIgKAAQAAAFgDACQgCADgFAAIgKAAIgKAAIgKAAIgKAAQAAAFgCACQgDADgFAAIgKAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAIAAAKQAAAFgDACQgCADgFAAIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKIAAAKIAAAKIAAGPIAAAKQAAAFgCACQgDADgFAAIgKAAQh7AHhhgRIAAgKIAArZIAAgKIDcAAIAKAAQAFAAADACQACADAAAFQAAAtAFAsIAFABIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAKAAIAAgKIAKAAIAKAAIAKAAIAKAAIAKAAIA8AAIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAACACQADADAAAFIAKAAIAKAAQAFAAADACQACADAAAFIAKAAQAFAAADACQACADAAAFIAKAAQAFAAACACQADADAAAFIAKAAQAFAAACACQADADAAAFQAFAAACACQADADAAAFQAFAAACACQADADAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFQAFAAADACQACADAAAFIAAAKQAFAAACACQADADAAAFIAAAKIAKAAIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAKAAIAAgKIAKAAIAKAAIAKAAIAKAAIAKAAIA8AAIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAADACQACADAAAFIAKAAIAKAAIAKAAQAFAAACACQADADAAAFIAKAAQAFAAADACQACADAAAFIAKAAQAFAAADACQACADAAAFQAFAAADACQACADAAAFIAKAAQAFAAACACQADADAAAFQAFAAACACQADADAAAFQAFAAACACQADADAAAFQAFAAACACQADADAAAFQAFAAADACQACADAAAFIAAAKQAFAAADACQACADAAAFQAFAAADACQACADAAAFIAAAKQAFAAADACQACADAAAFIAAAKQAFAAACACQADADAAAFIAAAKIAAAKQAFAAACACQADADAAAFIAAAKIAAAKQAFAAACACQADADAAAFIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKIAAHBIAAAKIgBAFQh+AMhngRIAAgKIAAmZQgFAAgDgDQgCgCAAgFIAAgKIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKQgFAAgCgDQgDgCAAgFIAAgKQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFIgKAAQgFAAgDgDQgCgCAAgFIgKAAQgFAAgDgDQgCgCAAgFIgKAAIgKAAIgKAAQgFAAgCgDQgDgCAAgFIgKAAIgKAAQAAAFgDACQgCADgFAAIgKAAIgKAAIgKAAIgKAAQAAAFgDACQgCADgFAAIgKAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAQAAAFgCACQgDADgFAAIAAAKQAAAFgCACQgDADgFAAIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKIAAAKIAAAKIAAGPIAAAKQAAAFgCACQgDADgFAAIgKAAQgjACghAAQhSAAhGgMgEA77AFsIh4AAQgFAAgCgDQgDgCAAgFIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKQgFAAgCgDQgDgBAAgFIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKQgFAAgCgDQgDgCAAgFIgKAAIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAJIAAAKQAAAFgDACQgCADgFAAIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAKIAAAKQAAAFgDACQgCADgFAAQAAAFgCACQgDADgFAAIgKAAIh4AAQgFAAgCgDQgDgCAAgFIAAgKIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKIAAgKQgFAAgCgDQgDgBAAgFIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKIAAgKQgFAAgCgDQgDgCAAgFIAAgKIAAgKIAKAAIBkAAIAKAAQAFAAADACQACADAAAFQAFAAADACQACADAAAFIAAAKIAAAKIAAAKQAFAAADACQACADAAAFIAAAKIAAAKIAAAKQAFAAADACQACADAAAFIAAAKIAAAKIAAAKQAFAAADACQACADAAAFIAAAKIAAAKIAAAKQAFAAACACQADADAAAFIAAAKIAAAKIAAAKQAFAAACACQADADAAAFIAAAKIAAAKIAAAKQAFAAACACQADADAAAFIAAAKIAAAKIAAAKQAFAAACACQADADAAAFIAAAKIAAAKIAAAKQAFAAADACQACADAAAFIAAAKIAAAKIAAAKQAFAAADACQACADAAAEIAAAKIAAAKIAAAKQAFAAADACQACADAAAFIAAAKIAAAKIAAAKQAFAAADACQACADAAAFIAAAKIAAAKIAAAKQAFAAADACQACADAAAFIAAAKIAAAKQAFAAACACQADADAAAFIAAAKIAAAKIAAAKQAFAAACACQADADAAAFIAAAKIAAAKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgJIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIBuAAIAKAAQAFAAADACQACADAAAFQAFAAACACQADADAAAFIAAAKIAAAKQAFAAACACQADADAAAFIAAAKIAAAKQAFAAACACQADADAAAFIAAAKIAAAKQAFAAACACQADADAAAFIAAAKIAAAKQAFAAADACQACADAAAFIAAAKIAAAKQAFAAADACQACADAAAFIAAAKIAAAKQAFAAADACQACADAAAFIAAAKIAAAKQAFAAADACQACADAAAFIAAAKIAAAKQAFAAADACQACADAAAFIAAAKIAAAKQAFAAACACQADADAAAFIAAAKIAAAKQAFAAACACQADADAAAFIAAAKIAAAKQAFAAACACQADADAAAFIAAAKIAAAKQAFAAACACQADADAAAEIAAAKIAAAKQAFAAADACQACADAAAFIAAAKIAAAKQAFAAADACQACADAAAFIAAAKIAAAKQAFAAADACQACADAAAFIAAAKIAAAKQAFAAADACQACADAAAFIAAAKIAAAKQAFAAADACQACADAAAFIAAAKIAAAKIAAAKQAFAAACACQADADAAAFIAAAKIAAAKIAKAAIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAAgKIAKAAIAAgJIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAAgKIAKAAIBkAAIAKAAQAFAAACACQADADAAAFQAAAFgDACQgCADgFAAIAAAKIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAKIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAKIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAJIAAAKQAAAFgDACQgCADgFAAIAAAKIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAKIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAKIAAAKIAAAKQAAAFgDACQgCADgFAAIAAAKQAAAFgCACQgDADgFAAIgKAAgAf9FsIh4AAIgKAAIgKAAIgKAAQgFAAgCgDQgDgCAAgFIgKAAIgKAAQgFAAgDgDQgCgCAAgFIgKAAQgFAAgDgDQgCgCAAgFIgKAAQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgCgDQgDgCAAgFQgFAAgDgDQgCgCAAgFIAAgKQgFAAgDgDQgCgCAAgFIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAgKIAAmZIgKAAQg+AHgmgRIAAgKIAAhaIBkAAIAKAAIAAiqIAAgKIAAgKIBuAAIAKAAQAFAAADACQACADAAAFIAACqIAAAKICqAAIAKAAQASAggIA6IAAAKQAAAFgDACQgCADgFAAIgKAAIiqAAIAAGFIAAAKIAAAKIAAAKIAAAKIAAAKIAAAKQAFAAACACQADADAAAFIAAAKQAFAAACACQADADAAAFIAAAKQAFAAACACQADADAAAFIAKAAQAFAAADACQACADAAAFIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAACACQADADAAAFIA8AAIAKAAQASAggIA6IAAAKQAAAFgDACQgCADgFAAIgKAAgA9IFsIjSAAQgFAAgCgDQgDgCAAgFIAAgKIAAvJIAAgKIAKAAIDSAAIAKAAQAFAAADACQACADAAAFIAAPJIAAAKQAAAFgCACQgDADgFAAIgKAAgEhVsAFsIjSAAQgFAAgDgDQgCgCAAgFIAAgKIAArZIAAgKIAKAAIDSAAIAKAAQAFAAACACQADADAAAFIAALZIAAAKQAAAFgDACQgCADgFAAIgKAAgEhWogHbIgKAAIgKAAIgyAAIgKAAIgKAAQgFAAgDgDQgCgCAAgFIgKAAQgFAAgCgDQgDgCAAgFIgKAAQgFAAgCgDQgDgCAAgFQgFAAgDgDQgCgCAAgFQgFAAgDgDQgCgCAAgFIAAgKQgFAAgDgDQgCgCAAgFIAAgKQgFAAgDgDQgCgCAAgFIAAgKIAAgKIAAgeIAAgKIAAgKIAAgKIAKAAIAAgKIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAAgKIAKAAIAKAAIAAgKIAKAAIAKAAIAKAAIAAgKIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAIAKAAQAFAAADACQACADAAAFIAKAAIAKAAQAFAAADACQACADAAAFIAKAAQAFAAACACQADADAAAFQAFAAACACQADADAAAFQAFAAACACQADADAAAFQAFAAACACQADADAAAFQAFAAADACQACADAAAFIAAAKQAFAAADACQACADAAAFIAAAKIAAAKIAAAeIAAAKIAAAKQAAAFgCACQgDADgFAAIAAAKQAAAFgCACQgDADgFAAIAAAKQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAQAAAFgDACQgCADgFAAIgKAAQAAAFgDACQgCADgFAAIgKAAQAAAFgCACQgDADgFAAIgKAAg");
	this.shape_4.setTransform(928.05,0.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-83.9,1500.6,167.8);


(lib.Symbol8_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FF7320").ss(2,1,1).p("AEJAAQAABuhNBOQhOBNhuAAQhtAAhOhNQhNhOAAhuQAAhtBNhOQBOhNBtAAQBuAABOBNQBNBOAABtg");
	this.shape_1.setTransform(26.5,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF7320").s().p("AiXCYQg/g/AAhZQAAhYA/g/QA/g/BYAAQBaAAA+A/QA/A/AABYQAABZg/A/Qg+A/haAAQhYAAg/g/g");
	this.shape_2.setTransform(26.5,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8_1, new cjs.Rectangle(-1,-27.5,55,55), null);


(lib.Symbol7_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgIB3IgQgQQgIgJAIgIIBAhAIiUAAQgMAAAAgLIAAgWQAAgLAMAAICTAAIg/g/QgIgJAIgIIAQgQQAIgHAHAHIBvBvQAHAHgHAIIhvBvQgEADgDAAQgEAAgEgDg");
	this.shape_1.setTransform(12.15,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7_1, new cjs.Rectangle(0,-12.2,24.3,24.5), null);


(lib._65rydfg = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFF443").s().p("AjLgUImTAAIHctEILhAAInMKaIEuAAIuZQWg");
	this.shape.setTransform(567.8125,302.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF443").s().p("AjCgMImYAAIHNtDILoAAInGKjIElAAIuMP8g");
	this.shape_1.setTransform(567.5375,300.7125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF443").s().p("Ai9gDImcAAIHatDILZAAImrKUIEjAAIuBP5g");
	this.shape_2.setTransform(565.4875,300.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF443").s().p("AjDgKImZAAIHns+ILRAAIm8KZIEaAAIuKP4g");
	this.shape_3.setTransform(567.6,301.0625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF443").s().p("AjxgKIltAAIHatSILjAAInMKjIEfAAIudQWg");
	this.shape_4.setTransform(568.775,301.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF443").s().p("Aj7gcIk+AAIGVs6ILeAAImeKGIDiAAItxQng");
	this.shape_5.setTransform(569.05,302.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF443").s().p("AkrgCIivAfIC7s+IL6huIlZLhIB1gSIqXRQg");
	this.shape_6.setTransform(570.4875,303.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF443").s().p("AmDr9IMHjzIpyfhg");
	this.shape_7.setTransform(568.5625,309.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF443").s().p("AlakBII9nHIB4WRg");
	this.shape_8.setTransform(546.475,306.9125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFF443").s().p("AmsDyIDpqSIJwNBg");
	this.shape_9.setTransform(560.1375,312.7875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFF443").s().p("Al/lPIL/FGIqYFZg");
	this.shape_10.setTransform(567.05,353.6875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFF443").s().p("Aj2hPIAJiRIGWAHIBOCAIlDE6g");
	this.shape_11.setTransform(563.175,382.4875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFF443").s().p("AiNCTQg6g9AAhWQAAhVA6g9QA7g9BSAAQBTAAA7A9QA6A9AABVQAABWg6A9Qg7A8hTABQhSgBg7g8g");
	this.shape_12.setTransform(568.95,398.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhkBlQgpgqAAg7QAAg6ApgqQAqgpA6AAQA7AAAqApQApAqAAA6QAAA7gpAqQgqApg7AAQg6AAgqgpg");
	this.shape_13.setTransform(575.2,385.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFF443").s().p("Ah3B4QgygxAAhHQAAhFAygyQAxgyBGAAQBGAAAyAyQAyAyAABFQAABHgyAxQgyAyhGAAQhGAAgxgyg");
	this.shape_14.setTransform(568.95,355.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFF443").s().p("AjaCOIAAkbIENhYICoDlIioDmg");
	this.shape_15.setTransform(573.2,319.425);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFF443").s().p("Ak0kUIJpgEIlGIxg");
	this.shape_16.setTransform(571.8875,284.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFF443").s().p("Ak+jOIJ9hZIj7JPg");
	this.shape_17.setTransform(569.0125,251.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFF443").s().p("AlDiKIKHixIitJ3g");
	this.shape_18.setTransform(565.2875,228.0625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFF443").s().p("AknguIJPkNIhBJ3g");
	this.shape_19.setTransform(563.4125,210.4125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFF443").s().p("AkcAZIIplfIAQKNg");
	this.shape_20.setTransform(562.1,197.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFF443").s().p("Ak7BVIIEmeIBzKTg");
	this.shape_21.setTransform(563.9,189.2375);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFF443").s().p("AlAC1IGznwIDOJ3g");
	this.shape_22.setTransform(566.7875,182.3875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFF443").s().p("AlND+IFdohIE/JHg");
	this.shape_23.setTransform(568.875,180.35);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFF443").s().p("AhCkwIGDH2IqBBrg");
	this.shape_24.setTransform(570.6875,183.8375);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFCB0D").s().p("AAMArQgLgEgIgQQgGgLgDgFIgMgMQgHgIgCgHQgCgLAJgHQAJgIAKAEQAFABAHAHQALAKAEAHIAJARIAKAQQAFALgEAIQgDAGgHADIgGABQgEAAgEgCg");
	this.shape_25.setTransform(610.8617,444.5233);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFF443").s().p("AkFldIJJFdIqHFeg");
	this.shape_26.setTransform(577.875,238.2875);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCB0D").s().p("AgGAaQAdgWgEgkQgDgcgdgOIgvgnIABgOQA8gQAsA7QAGAJAIAGQASCEh+BFQgkgxBPg5g");
	this.shape_27.setTransform(609.3729,448.8888);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhdBEQgGgGABgJQABgJAHgHQAFgFAJgEIAPgIQAHgFAPgLQANgKAIgFIAUgJQANgGAHgEQAHgFALgKIARgRQAJgIALgBQAMgCAGAIQAHAJgFAMQgDAIgLAJQgSARgqAZIhQAxQgPAIgKAAQgHAAgEgEg");
	this.shape_28.setTransform(529.881,309.1505);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFF443").s().p("AlGmOIKNDoIqNI2g");
	this.shape_29.setTransform(579.1125,302.775);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFCB0D").s().p("AiND0IgDgLQE0gJDbjaQAfgegMgrQgCgVARgLIAGgDQAeEnleBFQgtAJguAAQhNAAhMgbgAmijgQgGgFAAgJQAAgJAGgFIAPgHIAMgHQAIgDAIAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAgBQANABAEAMQAEAMgJAJIgLAHQgQAJgHABIgJABQgJAAgGgGg");
	this.shape_30.setTransform(569.5453,448.4229);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AiRB2QgGgFAAgJQgBgIAGgGIAMgLQADgCAIgLQAHgJANgJIATgJIAggWIARgRIARgRIAOgOIARgMQAKgHAQgRQAQgRAJgFIASgIIAYgQQAOgJANAAQAHABAGAFQAGAFAAAHQABAMgNAIIgWALQgPANgJAEQgLAEgFADIgKAMIgSARIg6A0QgiAfgSAKIgaAPIgMAOIgNANQgIAGgJABIgDABQgJAAgFgFg");
	this.shape_31.setTransform(522.6738,314.9064);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFF443").s().p("Alpm3ILTgNIptOJg");
	this.shape_32.setTransform(576.375,348.925);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCB0D").s().p("Ak4DVQgjgJgjgFQgggFgZgWIgRghIARgJQE1BsFDg4QC2gfBjiYQADgEAHAAQgcCQijA4QijA3imAAQiJAAiLglgAEsiHQgEgCgEgFIgIgHQgKgFgEgDQgDgCgCgFIgFgIQgCgDgPgLQgJgGgLgMQgKgKAAgJQABgHAHgFQAGgEAIABQALABAPAMQATAPAiAiQAOANAAALQAAALgJAFQgFADgFAAQgFAAgEgCgAnhipQgDgGABgIQACgHAFgFQAJgIARgEQAWgFAFgCIAOgJIANgJIAUgIIAMgIQAHgDAIADQAHAEADAHQADAIgEAJQgEAIgIAFQgFAEgKAFIgQAIQgRAMgKAEQgFACgWAGQgQAGgHAAIgDAAQgMAAgGgJg");
	this.shape_33.setTransform(565.4275,447.6276);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhoBjQgHgIADgLQACgFAHgIQAHgJAGgFIAKgJIAIgMIATgPIAQgOQAWgRAPgQIAZgXIAUgRQAMgKAGgIQAKgMAEgCQAKgGAKAHQAKAHgBAMQgBALgRAPIhTBKIgNANIgIALQgFAGgFADQgIADgEADIgKAMIgRAQIgLAMQgHAHgGABIgFABQgIAAgGgHg");
	this.shape_34.setTransform(513.9241,324.4324);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFF443").s().p("AljoWILHiuIntWJg");
	this.shape_35.setTransform(567.7375,357.8125);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFCB0D").s().p("AmcCSQg4gZgsgtIAQgRQCfBiC1AYQERAmEQgpIAIAWIgEAIIgGAFIgHAGQhPAhhWgCIgwgBQgiACghAAQkPAAjxhpgAHvhZQgJAAgHgFIgMgMIgMgMQgGgGgPgHQgPgIgGgEIgTgSIgUgPQgWgOgPgNQgUgRAGgNQADgGAGgDQAGgCAHABQAJACAOAKIBZBAQAiAZAMAPQAHAIACAIQACAKgFAHQgFAFgIAAIgBAAgAmzicQgRgCgFgIQgDgHADgHQADgIAHgDQAGgEAJAAIAPgBQBVABAtgiIAOgLQAJgGAHgCQAJgDAIADQAKADACAIQAFAPgWAQQguAjg4AMQgWAEgcABIgFAAQgOAAgTgCg");
	this.shape_36.setTransform(556.6167,447.1293);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AhPBaQgEgIACgQQAEgXAKgRQALgSAXgYIA3g/QARgUAQgEQAKgCAJAHQAKAHgCAKQgBAHgHAFIgNAJQgQALgSAaQgYAfgGAIIgTASQgKALgDAKQgEAJgCAUQgGASgNACIgCAAQgLAAgGgOg");
	this.shape_37.setTransform(503.606,333.306);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFF443").s().p("AlaptIK1kkIlncjg");
	this.shape_38.setTransform(559.7875,357.2125);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFCB0D").s().p("AohCMQhOhEArg7QBlCaC0AkQBHgsAqAoIACADQhFAmhFAAQhwAAhvhkgApjhTQACgaAeACQAqgEAegdQBPg8BMgnIADABQg1B6iZAwQgKACgIAAQgWAAgQgRgAEkjiQA5gXBPArICWBUQASALAQASIgEATQirgfiRh5g");
	this.shape_39.setTransform(563.05,446.3048);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AnRDjQgRgJgGgSQgCgIAAgNIAAgjQAAgNACgFQACgHAHgIQAJgOAJgCQAKgDAHAJQAHAHgCALIgEANIgGANQgBAFAAALIAAAUQAAAFACACQACADAFgBQAKAAARgGQAdgMANgIIAXgQIAigVIAqghQAPgNAJgDQARgFALAKQAFAGgBAKQAAAJgHAEIgMAGQgGADgJAGIgXATQgWASgJAGIgUAKQgUAPgLAHQgNAIgZALQgVAJgPACIgJABQgOAAgMgGgAHYiCQgIgBgJgJQgGgHgKgQQgKgQgGgGIgMgLQgGgHgCgHQgBgHAEgGQAEgGAHgCQAOgEARASQAXAXAPAcQAFAJAAAGQABAIgGAHQgGAGgHAAIgBAAg");
	this.shape_40.setTransform(547.5269,322.2756);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFF443").s().p("Ajhh9IA2gdQC8hoB8ivIgTgNIgoApQiNCNivBjIh5oFILHlaMgE4AgJg");
	this.shape_41.setTransform(556.8875,346.7125);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFCB0D").s().p("Ao7AHQABgDAHgBQAWBmBXBJQAAAAAAAAQABAAAAAAQAAABAAAAQAAABAAAAIgLAMQiUgzApiGgAJsgMQg/gLg2gmQhBggg7grIgmgcIAJgbQCqBvDHAsQAQADADARQghAJghAAQgaAAgagFgArhgdQAPghArgNQAjgNAjgaQA0gqBCAMIAlAGIAJAQIgEANQiQAUiCBEIgEABQgGAAgEgJg");
	this.shape_42.setTransform(563.15,444.85);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AnVDOIgFgCIgEgFIABgOQCZACB7hZQCvhiCNiOIApgoIATAMQh9Cui8BoIg2AdQhcBNhwAAQgkAAglgIgAG4hYQgIgGgIgKIgLgNIgUgWQgRgTgKgIQgNgKgEgEQgJgLAEgKQACgHAJgDQAHgDAIACQALADAPAQIBCBEQAMAKADAJQAGAPgKAIQgFAEgGAAQgKAAgMgJg");
	this.shape_43.setTransform(553.5476,320.363);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFF443").s().p("AlnquILPlZIhrKnQjIBxitCVIANALIBcg0QCGhMB9hcIjRUzg");
	this.shape_44.setTransform(555.6,326.925);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFCB0D").s().p("AoGgnIALAIIACAKIAAAFIgBADQgGANgNAHIgTBkIgXADQgohrBZgqgALiAWQhzgqhlhFIgEgDIgCgRQBeAFBhA8QAnAXAkAaIAVASIAAANIgVAMgAsiAMQBXhJBtglQAHgDAIgBQgYBth3ALQgLABgLAAQgWAAgYgHg");
	this.shape_45.setTransform(561.95,443.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AB7BdIAEgUIAJgEIAJAAIAHADIAOAGQBdBNBNBcIAWAaIgTAVgAllDUQCtiVDHhwIEWj0IAHAHQgcAqgfApQhgB+iKBQQh9BbiHBNIhcA0g");
	this.shape_46.setTransform(579.35,296.65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFF443").s().p("AjFBYIhDAeIhfswILPkvIidMaIAzgbIkpTUg");
	this.shape_47.setTransform(561.1875,298.5375);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFCB0D").s().p("ApiBIQgJgBgFgHQgIgLAHgPQAEgJAOgNQAJgKAEgHIAGgMQAEgGAIgDQAOgEAHAIQAJAKgIAUQgFAKgFAHQgOAJgFAHIgFALQgDAHgEADQgFAGgIAAIgCAAgAMyA7Qg3gngkgJQgKgDgcgEQgYgDgNgEQgTgHgGgMQgEgHACgJQACgIAHgEQAIgDATAIQAQAGApAGQAmAGASAKQAMAGAXAPIAcAQQAPAKACAPQAAAIgFAHQgFAHgIAAIgBAAQgGAAgLgIgAtDAWQgJgBgFgGQgFgGACgIQABgIAGgEIAMgIIAJgJIAIgGIAIgGIAJgMQAGgHARgGQAZgKALAIQAGAEACAIQABAIgEAGQgEAGgIADIgPAGQgMAGgTAUQgQARgKAEQgFACgGAAIgFgBg");
	this.shape_48.setTransform(565.885,444.2817);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("ACBGDQgPgKgGgLQgFgMgEgFQgDgFgKgIQgQgPgOgQQgIgMgHgGQgRgHgHgHQgFgIgDgEIgIgEIgIgEQgDgDgFgHQgFgIgDgDIgJgFIgKgGQgEgDgGgIQgGgJgDgDIgKgGQgGgEgCgDQgGgHACgKQADgKAJgDQAJgDAMAGQAHADAJAKQAZAXAmAhIAkAdQAUASAMAPIAPARIALAHQAGAFADAEIAFALQACAIADADQACADAFADIAIAGQAJAHACALQABAOgLAFQgEACgFAAQgJAAgLgIgAilhvQgOhABNgwQBKgsAzhFQArg6A6AAQANAAADANIgCAJQiECTieBzIgDABg");
	this.shape_49.setTransform(606.7651,296.136);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFF443").s().p("AjpA1IiMBDIAHtiILkj8IjUMLICGgqIm2Trg");
	this.shape_50.setTransform(568.575,280.825);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFCB0D").s().p("ANpA6QgGgEgHgHIgNgLQgggcgqgCIgUgBQgMAAgIgEQgJgEgEgKQgFgLAHgHQAHgHATABQAyADAXAIQATAIAiAXIAhAXQAHAFADAEQAEAHgEAIQgEAJgIADQgFABgFAAQgLAAgLgHgAqHASQgHgEgDgIQgDgHADgIQACgGAJgJQALgLAIgFIAIgGIAHgHQAHgFAJAAQAJABAFAGQAIAKgHAOQgFAJgNAKIgUAPIgHAIQgFAEgEABIgEAAQgEAAgEgCgAuNAMQgHgFgCgIQgCgKAGgGQADgDAPgFQAOgEALgIIAOgLQAIgHAGgDQALgGAeAAQAQABAFAEQAIAFAAAKQABAKgHAFQgHAFgMABIgUABQgOACgQAOQgVAPgHADQgJAEgIAAQgIAAgIgEg");
	this.shape_51.setTransform(566.9191,446.039);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AAWGPIgjgaQgWgOgRgCIgMgBQgHgBgEgDQgGgFAAgIQAAgJAGgFQAIgKATgBQgOgMAAgOQAAgIAFgGQAGgHAHAAQAHABAMAKIAgAfQAIAIAHAGIATAMQAHAGAMAMIANALQAGAGACAHQACAJgGAJQgHAJgKADIgJABQgNAAgQgJgAg5keQgIgHABgJQAAgGAEgHIAIgMIAKgTQAGgHAOgNIARgYQAKgQAKgBQAHAAAGAFQAFAFACAHQACANgJANIgTAVQgPAQgKATIgKARQgHAJgIACIgDAAQgHAAgGgGg");
	this.shape_52.setTransform(616.2597,295.3325);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFCB0D").s().p("AN7BCQgugZgVgQQgLgIgEgHQgGgLAGgJQAEgFAHgCQAHgBAGACQAFABASANQAQALAjATQAUAPgCANQAAAHgFAEQgFAEgGABIgBAAQgFAAgMgGgAuLAlQgKgCgFgHQgDgGABgIQACgIAGgEQAFgCAJgBIAPgEQAFgCAMgKQALgIAHgBQAMgCAIAKQAHAKgGAKQgEAGgFADQgVARgKAEQgNAHgMAAIgLgCgApZgGQgFgMAJgKQACgDAKgHQAJgGAIgJQAMgPAHgCQALgDAIAHQAIAHgCALQgBAHgIAJQgNAOgQAOQgMAIgIABQgOAAgFgLg");
	this.shape_53.setTransform(565.2866,445.2712);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("ACyGYQgIgBgKgEIgQgHIgigOQgZgKgmgaQgYgQgQgOQgWgSg0gyIgVgTQgQgOgUgPIgpggQgYgXgKghQgHgTAIgLQAEgGAIgBQAIgBAGAFQAEAEADAHIAFANQAGARAOAOQAJALAJAGIAeAUQAKAHAQARQAQASAKAHIAZASQAGAGAKAPQAGAGATANIAdAXQASAOANAIQAdATA8AVQAcAKAAAPQAAAJgIAGQgGAFgIAAIgDAAgAColoQgPgEgGgPQgDgGABgFQABgHAFgEQAFgFAHABQABAAAAAAQAAAAABgBQAAAAAAAAQAAAAgBAAQAIgCAIAGQAGAGADAJQACAFAAADQAAAJgIAGQgDAEgEAAIgDABIgFgBg");
	this.shape_54.setTransform(599.4617,294.3342);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFF443").s().p("AjCCFIBJBNQBrBvBABBIlAIagAhNC8QgjgogTgOIgcgSQgRgLgJgLIgFgGIAIhLIktA/IDqtiILdiFIkULRIDWgiIlfJLQhMhPhIhUg");
	this.shape_55.setTransform(569.8875,264.9125);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("ADvF7QgbgNgogiQh1hihqhoIgegeQhBhBhrhuIhJhNIgZgaQgTgVAJgMQAEgFAIAAQAHAAAGAEQAFADAGAHIAEAFIAEAGQAJALARALIAcASQATAOAjAoQBIBUBNBOQBzB2CBBpQAwAoAgANQAKAEAFADQAHAFACAHQACAIgFAHQgGAHgIACIgHABQgLAAgOgGgAFQlYIgnAAQgQAAgHgFQgIgHACgKQABgKAKgFQAFgDANAAIAoAAQAMAAAFADQALAFAAAMQABALgLAGQgGADgIAAIgFAAg");
	this.shape_56.setTransform(583.0595,293.5391);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#FF6600").ss(1,1,1).p("AAlhHIgMBFIAbgEAAZgCIgOBKAgzAJIBMgL");
	this.shape_57.setTransform(549.25,266.6375);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFF443").s().p("AjhBpQAdAaAqAlQAqAkAWAQIAfAXQAZAQAMgLQAGgFAAgJQgBgJgFgGQgGgIgVgLQgVgMgcgaIgugqIgmgeIgigiIANhJIhMALIh5h4QgPgPgLACQgHABgEAHQgEAHABAIQACANANALIALAKQAHAGAEAFIAMATQAEAFARAOQARAPAWATIjPAgIFKtXILrhaIl4K/IDygXIsHR5gAjLgRIAcgFIgcAFIANhGg");
	this.shape_58.setTransform(572.0875,268.2125);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AhDDBIgfgWQgWgRgqgkQgqgkgdgbIgLgLIhChAIgcgcQgWgUgSgOQgRgPgEgFIgMgTQgEgFgHgGIgLgJQgNgMgCgNQgBgHAEgHQAEgIAHgBQALgCAPAPIB5B5IA/A9IAiAjIAmAeIAuAqQAcAaAVAMQAVALAGAHQAFAHABAJQAAAJgGAFQgFAEgHAAQgKAAgPgKgAFpiCQgGgFAAgJQgBgIAGgGQAEgFALgFQAHgFANgMQAJgHAPgGQAIgEAGAAQAGABAFAFQAFAFAAAHQAAANgMAKIgPAJIgOAKIgOALQgKAGgJAAQgHAAgHgFg");
	this.shape_59.setTransform(572.865,273.195);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFF443").s().p("AjMgQIhKAIIgfgoQgbgjgQgXIgegsQgRgZgPgPQgLgLgfgZIgDgDIEbpiILxgpImUKmIEggNIt0RIgAnbjBQARAOAVAYQAPARAhAuIAyBHIAOASIj7Aag");
	this.shape_60.setTransform(572.2625,271.3375);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AByCoQgJgDgNgQIgpg4IgOgTIgxhGQghgtgPgSQgVgXgRgOIgIgGQgVgQgEgFQgNgQAEgPQADgJAIgEQAIgEAHADQAFACAEAGIAHALQAGAIAKAJIADACQAfAaALAKQAPAPARAaIAdArQAQAXAbAjIAfAoIAhAqQAPAVgGALQgDAGgJACIgFAAQgEAAgFgCg");
	this.shape_61.setTransform(534.5632,261.6734);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFF443").s().p("AjGAHIl9AAIBpjLQAMAOAMgCQAHgCAEgGQAEgHAAgHQAAgLgLgPIgFgHIEzpRILVAAImjKeID8AAItWPjg");
	this.shape_62.setTransform(571.425,274.275);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AALA2IgCgDQgFgHgMgYQgKgTgJgJIgKgIQgGgGgDgFQgEgHABgJQABgJAGgGQAEgFAGgCQAGgBAFACQAFADAEAIIAHAMQAEAFALAHQAEAEADAHIAFANQADAFAIALIAGAHQAKAPABALQAAAHgEAHQgEAGgHACIgEAAQgKAAgKgMg");
	this.shape_63.setTransform(522.865,249.163);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFF443").s().p("AjrgQIl/gMIH3s7ILeAQInTKTIFBAKIvJQCg");
	this.shape_64.setTransform(571.1,283.2375);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AFsCAQgJgDgCgJQgDgKAFgHQACgDALgIQAOgJAKgNIAQgTQALgJAMACQAPACAFALQACAGgBAGQgCAHgFAEQgCACgFACIgIAEIgJALQgEAFgKAIIgTAQQgJAFgIAAIgHgBgAmhgfQgJgDgDgIIgDgQIgKgSQgIgNgBgKQgCgPAIgIQAEgFAHgBQAHgBAFADQAFADADAKIAGAPQADAHAIANQAGAMgBAOQgBAOgJAGQgDADgFAAIgHgCg");
	this.shape_65.setTransform(563.6581,252.0417);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFF443").s().p("Aj5gJImBgXIIHs3ILuApInlKMID9ANIurPtg");
	this.shape_66.setTransform(572.675,287.6625);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AF2BzQgMgKAFgRQAEgNAMgKQAUgQAUAAQALABAFAEQAJAHgBAJQAAAKgIAGQgEADgMACQgLADgEAEIgEAIIgFAIQgEAFgIABQgIAAgFgFgAmYg1IgJgLQgDgFgFgEIgNgKQgHgHgBgHQgCgKAKgIQAJgGAKADQAFABAHAGQAOAMAMAOQANAPgCALQgEANgNABIgDABQgKAAgIgJg");
	this.shape_67.setTransform(561.6666,252.0526);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFF443").s().p("Ai8gVIm2AIIIztIIKyAnInEKRIEdAAIvGPzg");
	this.shape_68.setTransform(567.55,292.7375);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AFrB7QgGgFAAgMIABgIQACgDAEgEIAIgFIAIgIQAGgEAEAAQABAAAAAAQABAAAAAAQAAAAAAAAQAAgBAAAAQAHAAAGAFQAGAEABAHQABAKgFAHQgEAHgJAGQgHAGgIACIgEAAQgIAAgFgEgAl4g6QgGgBgFgFIgJgKQgKgIgDgFQgCgFAAgIQAAgKADgGQAEgIAIAAQAEAAABgCQALAAAEAKIAFAKIAHAFQAKAFACAMQABALgHAJQgHAGgHAAIgEAAg");
	this.shape_69.setTransform(561.6827,252.2911);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFF443").s().p("AjhgZImXgaIIhslILQAwInkJ6IFAAdIvuPpg");
	this.shape_70.setTransform(569.2125,297.375);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AAKAkIgTgRIgWgWQgIgHgBgFQgEgJAGgJQAFgHALgBQALgBALAMIARAUIAQANQAIAJABAIQABAIgEAHQgFAHgIAAIgBAAQgGAAgJgGg");
	this.shape_71.setTransform(525.766,245.7757);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAJAkQgJgEgKgNIgLgNIgKgHQgIgLAFgMQAFgMANgBQAJAAAKAMIASATQALALADAFQAFANgHAIQgDAGgIAAIgEABQgFAAgEgCg");
	this.shape_72.setTransform(527.6161,246.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFF443").s().p("AjWgLImhgKIITszILcAXInaKPIEwAPIvSPcg");
	this.shape_73.setTransform(568.5375,302.4375);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AAXAdQgGAAgMgFIgPgGQgLgDgFgDQgIgEgFgHQgFgHACgIQAEgMAMgBIADgBQAXAFAWALQAOAGAFAIQAFAKgGAJQgGAIgJAAIgCAAg");
	this.shape_74.setTransform(528.8101,248.5298);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFF443").s().p("AjRgNImOgRIH9tBILBAdImdJ5IEWAOIvPQbg");
	this.shape_75.setTransform(566.425,305.45);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAIAgQgNgEgTgVQgNgMAAgJQAAgHAFgEQAEgFAHgBQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBQAHABAJAIIANANIAKAEIAJAGQAIAHgBAJQgBALgJAFQgEADgGAAIgKgCg");
	this.shape_76.setTransform(531.2556,249.9067);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFF443").s().p("AjIgSImMgHIEYm+IABAAQAHADAHgCQAIgCADgGQAGgIgGgLIgFgIIDNlIIKvAVImYJ5IEgAKIusPrg");
	this.shape_77.setTransform(566.7,303.7125);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AAWAsIgCgBQgIgEgLgNQgMgQgFgEIgVgMQgMgJAAgKQAAgGAFgFQAEgFAGgCQALgEANAHQAGADAMAMIAbAbIAHAHIAFAJQAFAKgFAJQgEAGgHABIgGABIgIgBg");
	this.shape_78.setTransform(532.9125,252.1611);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFF443").s().p("AjLgKImWgEIEbnbIAFgJIDFlLILeAUInIJ7IEnAYIuBPUg");
	this.shape_79.setTransform(567.95,303);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AAAATQgHAAgFgEQgFgFgBgHQgBgGADgGQAHgLAJACIAAgBQAMAAAGANQACAGgCAFIgFAJIgCACQgFAEgGAAIAAgBg");
	this.shape_80.setTransform(533.9083,252.5528);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFF443").s().p("AjEgBImaAHIH2tKILHAKImrKXIEkgHIuVPvg");
	this.shape_81.setTransform(565.75,303.25);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFF443").s().p("Ai0gVImsAYIHktLILdAHIm8KHIFFAEIuwP/g");
	this.shape_82.setTransform(566.15,303.6875);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFF443").s().p("AjBgHImVAAIHYs9ILVAHIm2KWIE5AAIuSPsg");
	this.shape_83.setTransform(566.6875,301.775);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFF443").s().p("AjAgRImnAAIHctIILzAAInQKoIEaAAIt+QLg");
	this.shape_84.setTransform(567.3625,303.2125);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFF443").s().p("AivgVImoAAIHLtDILkAAImlKKIEoAAIuiQng");
	this.shape_85.setTransform(566.325,303.6375);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFF443").s().p("Ai3gXImhAAIHXtDILaAAIm0KUIE7AAIujQhg");
	this.shape_86.setTransform(566.875,302.3375);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFF443").s().p("AjIgXImgAAIHctDIL1AAInIKZIEJAAIuFQcg");
	this.shape_87.setTransform(568.1,301.825);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFF443").s().p("AjIACImQAAIHItIILpAAIm3KZIEpAAIuJP0g");
	this.shape_88.setTransform(567.5,299.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[]},1).to({state:[{t:this.shape_13}]},5).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},1).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]},1).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},1).to({state:[{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_63},{t:this.shape_62}]},1).to({state:[{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66}]},1).to({state:[{t:this.shape_69},{t:this.shape_68}]},1).to({state:[{t:this.shape_71},{t:this.shape_70}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_74},{t:this.shape_73}]},1).to({state:[{t:this.shape_76},{t:this.shape_75}]},1).to({state:[{t:this.shape_78},{t:this.shape_77}]},1).to({state:[{t:this.shape_80},{t:this.shape_79}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(472.8,150.9,186.09999999999997,324.6);


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

	// Layer_1
	this.instance = new lib.Symbol2("synched",0);
	this.instance.setTransform(149.1,0,0.1987,0.1987,0,0,0,750.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0.1,-16.7,298.09999999999997,33.4), null);


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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ADiFhIgBAAIgBAAIgCAAIgBgBIgBABIgBAAIgBgBIgBAAIgBABIgCgBIgBAAIgBABIgBgBIgBgBIgCAAIgBgBIgBgBIgBABIgBAAIgCgBIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIgBgBIgBAAIgCgBIgBgBIgBAAIgCgBIgBgBIgCAAIABgCIgBgBIgCAAIgBgBIgBgBIgCAAIABgBIgCgBIgBgBIgBAAIgCgBIAAgBIAAgBIgBgBIgCgBIgBgBIAAgBIgBgBIgBAAIgBgBIAAgBIgBgBIgBAAIgBgBIAAgCIgCAAIgBgBIABgBIgCgBIAAgBIAAgBIgBgBIgCAAIABgCIgCAAIgBgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIAAgBIgCgBIgBgBIAAgBIgBgBIABgBIgCgBIAAgBIAAgBIgBAAIgBgCIAAgBIgCAAIgBgBIABgBIgBgBIgBgBIAAgBIgBgBIAAgBIgBgBIgBAAIAAgCIgBAAIAAgCIgBAAIgBgBIAAgCIgBAAIgBgBIABgCIgBAAIAAgBIgCgBIAAgBIAAgBIgBgBIAAgBIgBgBIgBgBIAAgBIgBgBIABgBIgCgBIgBgBIAAgBIAAAAIAAgBIgBgBIAAgCIgBAAIgBgBIAAgCIgBgBIABgBIgBAAIAAgBIgCgBIgBgBIABgBIgBgBIAAgCIgBAAIAAgBIgBgBIABgBIgBgBIgBgBIAAgBIgBgBIAAgBIgBgBIABgBIgCgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIgBgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIgBgBIABgBIgCgBIABgBIgCgBIABgBIgCgBIAAgBIAAgBIgBgBIAAgBIgBgBIABgBIgBgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIgBgBIAAgBIgBgBIgBgBIAAgBIgBAAIABgCIgBgBIAAgBIgBgBIAAgBIgBgBIABgBIgBgBIAAgBIgBgBIAAgBIgBgBIABgBIgBgBIgBgBIAAgBIgBgBIAAgBIgBgBIABgBIgBgBIAAgBIgCAAIgBgCIABgBIgBgBIAAgBIgBgBIAAgBIgBgBIAAAAIAAgBIgCgBIABgCIgCAAIgBgBIABgCIgCAAIAAgBIAAgBIgBgBIAAgBIgBgBIgBgBIAAgBIgBgBIgBAAIAAgBIgBgBIgCgBIABgBIgBgBIgCgBIAAgBIAAgBIgBgBIgBgBIAAgBIgCAAIgBgBIABgBIgBgBIgCgBIgBgBIAAgBIgBAAIgBgBIgBgBIAAgBIgBgBIgCgBIAAAAIAAgBIgBgBIgCgBIgBAAIAAgCIgBgBIgBAAIgCgBIgBgBIABgBIgBgBIgCgBIgBAAIgBgBIgBgBIAAgBIgCAAIgBgBIgBgBIgBgBIAAgBIgCgBIgBAAIgBgBIgCgBIgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgBIgCAAIgBgBIgBgBIgCAAIgBgBIgBgBIAAgBIgBgBIgCgBIgBAAIgBgBIgCgBIgBgBIgBAAIgCgBIgBgBIgBAAIAAgBIgBgBIgCgBIgBAAIAAgBIgCgBIgBAAIgBgBIgCgBIgBgBIgBAAIgCgBIgBgBIgBAAIgCgBIgBgBIgCAAIgBgBIgBgBIgCAAIgBgBIgBgBIgCgBIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIgBgBIgBAAIgCgBIAAABIgCgBIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIgBABIgBAAIgBgBIgBAAIgCgBIgBgBIgBgBIgBABIgCAAIgBAAIgBgBIgCgBIgBAAIgBgBIgBABIgBAAIgCgBIgBgBIgBAAIgBAAIgBAAIgCgBIgBgBIgBAAIgCABIgBAAIgBgBIgBgBIgCgBIgBAAIgBABIgBAAIgBgBIgCgBIAAABIgCAAIgBgBIgCgBQAAABAAAAIgBAAIgCgBIgBAAIgBAAIgBAAIgBAAIgCgBIgBABIgBgBIgBAAIgBAAIgBAAIgCAAIAAABIgCgBIgBAAIgCgBIAAACIgCgBIgBgBIgBABIgBAAIgBgBIgBABIgBAAIgCgBIgBABIgBAAIAAABIgCgBIgBgBIgBABIgBAAIgCgBIAAACIgBgBIgBABIgCAAIgBgBIgBABIgBAAIgBABIgBgBIgBABIgBAAIgBAAIgBAAIgBAAIgBABIgCAAIgBABIgBAAIAAAAIgBAAIgCgBIgBACIgBgBIgBABIgBAAIgBABIgBgBQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAIgBAAIgBABIgBAAIgBAAIgBAAIgBABIgBAAIgBABIgCAAIgBgBIAAABIgCAAIgBABIgBgBIAAABIgCAAIgBABIgBAAIgBAAIgBAAIgBABIgBAAIgBABIgBAAIgBAAIgBAAIgCAAIAAABIgBgBIgBABIgBAAIgBABIgCAAIAAAAIgBAAIgBABIgCAAIgBgBIgBABIgBAAIgBABIgBgBIgBABIgBAAIgBABIgBAAIgBgBIgBABIgCAAIgBABIgBgBIAAABIgBAAIgCgBIgBACIgBgBIgBABIgBgBIgBABIgBAAIgBABIgBAAIgCgBIAAABIgBAAIgBAAIgCAAIgBABIgBAAIgBgBIAAACIgCgBIgBABIgBAAIgBAAIgBAAIgBAAIgBABIgCgBIAAABIgCAAIgBgBIgBABIgBAAIgBABIgBAAIgBgBIgBABIgBgBIgBABIgCAAIgBgBIgBABIgBAAIgBAAIgBABIgBgBIgBABIgBAAIgCgBIgBABIgBAAIAAABIgBAAIgCgBIgBABIgBgBIgBgBIgBABIgBAAIgCAAIAAAAIgCAAIgBAAIgBABIgBgBIgBABIgBAAIgBgBIgBABIgCAAIgBgBIgBAAIgBABIgBgBIgCAAIAAAAIgCAAIgBgBIgBABIgBAAIgCgBIAAABIgBAAIgCgBIgBAAIgBABIgBgBIgCgBIgBAAIgBABIgBAAIgBgBIgCgBIgBACIgBgBIgBgBIgCAAIgBAAIgBAAIgBgBIgBgBIgCAAIgBgBIgBABIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIgBgBIgBAAIgCgBIgBgBIgBAAIgBgBIAAgCIgCAAIgBgBIgBgBIgCAAIgBgBIAAgBIgBgBIgBAAIABgCIgCgBIgBAAIgBgBIAAgBIgBgBIgBgBIAAgBIgBgBIgBgBIAAgBIgBgBIAAgBIgBgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAgBIgBgBIAAgCIgBgBIABgBIgCAAIABgCIgCgBIgBAAIAAgBIABgCIgBAAIABgCIgCgBIABgBIgBAAIAAgCIgBgBIABgBQgBAAAAgBIAAgBIgBgBIAAgBIABgBIgBgBIABgCIgBAAIAAgBIABgCIgBgBIAAgBIAAgBIgBAAIABgBIAAgCIgBAAIABgBIABgCIgCgBIABgBIABgCIgCAAIABgBIABgCIgBgBIAAgBIABgBIABgCIgBgBIAAgBIAAgBIABgBIgBgBIAAgBIABgCIABgBIAAgBIAAgBIAAgCIABgBIABgBIAAgCIgBAAIAAgBIABgCIABgBIABgCIAAgBIgBAAIAAgCIABgBIABgBIAAgCIABgBIABgBIgBgCIAAgBIABgBIAAgCIABgBIABgBIABgCIAAgBIABgBIABgCIAAgBIABgBIgBgBIABgBIAAgCIABgBIABgBIAAgCIABgBIABgBIABgCIAAgBIABgBIABgCIAAgBIABgBIABgCIAAgBIABgBIABgCIABgBIAAgBIABgCIABgBIAAgCIABgBIABgBIAAgCIABgBIABgBIAAgCIABgBIABgBIABgCIAAgBIABgBIABgCIAAgBIABgBIABgCIAAgBIABgBIABgCIAAgBIABgCIABgBIABABIABgCIAAgBIABgBIABgCIAAgBIABgBIABgCIAAgBIABgCIABgBIABgBIAAgCIABgBIABgBIABABIABgCIAAgBIABgBIABgCIABgBIAAgBIABgCIABgBIABAAIABgBIABgBIAAgCIABgBIABgBIAAgCIABgBIACABIAAgCIABgBIABgCIAAgBIABgBIABgCIAAgBIABgBIABABIABgCIAAgBIABgBIABgCIABgBIAAgBIACAAIAAgBIABgCIABgBIABgBIAAgCIACABIAAgBIABgCIABgBIAAgCIABgBIABgBIABABIABgCIAAgBIABgBIABgCIAAgBIABgBIACAAIAAgBIABgCIABgBIAAgBIACABIABgCIAAgBIABgBIABgCIAAgBIABABIABgCIABgBIAAgCIABgBIACABIAAgCIABgBIABgBIAAgCIABgBIACABIAAgBIABgCIABgBIAAgCIACABIABgBIAAgCIABgBIABgBIABABIAAgCIABgBIABgBIAAgCIACABIABgCIAAgBIABgBIABAAIABgBIABgCIABgBIAAgBIABABIABgCIABgBIAAgBIABgCIACABIAAgCIABgBIABgBIAAgCIACABIAAgBIABgBIABgCIABABIABgBIAAgCIABgBIABAAIABgBIABgBIABgCIABABIABgBIAAgBIABgCIACABIAAgCIABgBIABgBIABAAIAAgBIABgCIABgBIABABIABgBIABgCIAAgBIACABIABgCIAAgBIABABIABgBIABgCIAAgBIACAAIABgBIAAgBIACAAIAAgBIABgCIABABIABgBIABgBIAAgCIACABIAAgBIABgCIACABIAAgBIABgCIABgBIABABIABgCIABgBIABAAIAAgBIABgBIABABIABgCIABgBIABABIABgCIABgBIABABIAAgBIABgCIACABIAAgCIABgBIACAAIAAgBIABgBIABABIABgCIAAgBIACABIAAgCIABgBIACAAIAAgBIABgBIACABIAAgCIABgBIABAAIABgBIABABIABgBIABgCIABABIABgBIAAgCIABABIABgCIACABIAAgBIABgBIACAAIAAgBIABgCIABABIABgBIABABIABgCIABABIABgCIABgBIABABIABgBIABAAIABgBIAAgBIACABIAAgCIACABIABgCIABABIAAgCIABgBIACABIAAgBIACAAIAAgBIABAAIABgBIACABIAAgBIACAAIABgBIAAgBIACABIAAgCIABABIABgCIACABIAAgCIACABIAAgBIABABIABgCIACABIAAgBIACAAIABgBIABABIAAgCIACABIAAgBIACAAIABgBIABABIABgBIABAAIABgBIABAAIABgBIABABIABgBIABAAIABABIABgCIACABIAAgBIABAAIACABIABgBIABABIABgCIABABIABgCIABABIABABIABgBIACABIAAgCIABABIACAAIAAgBIACABIABAAIABgBIABABIACAAIAAgBIACABIABABIABgCIABABIACAAIAAgBIABABIACAAIABABIABgBIABABIABAAIABgBIACABIABAAIABABIABgBIABAAIACABIABABIABAAIABgBIACABIABABIABAAIACABIAAgBIABAAIACABIABABIACAAIABABIABABIACAAIAAgBIABABIACAAIABABIABABIACAAIABABIACABIABABIABAAIACABIABABIABAAIACABIABABIABAAIACABIABABIABAAIACABIABABIABABIACAAIABABIABABIAAABIAAABIACABIABAAIABABIACABIABAAIABABIACABIABABIAAABIABABIABAAIACABIABABIABAAIgBABIACABIABABIABAAIACABIABABIAAABIABABIABABIACAAIABABIABABIgBABIACABIABABIABAAIACABIABABIAAABIABAAIABABIACABIABABIAAABIABABIABAAIACABIABABIgBABIABABIACABIABAAIABABIAAABIABABIACAAIABABIABABIABABIAAABIABABIABAAIACABIABABIgBABIACABIABABIACAAIABABIgBACIACAAIABABIABABIABAAIAAABIABABIABABIACAAIABABIAAACIABAAIABABIACABIABAAIABABIAAACIABAAIACABIABABIAAAAIAAABIACABIABABIABABIABABIAAABIACAAIABABIABABIACAAIAAACIAAABIABAAIACABIABABIABAAIABABIAAABIACABIABABIABAAIACABIABABIgBABIACABIABABIACAAIABABIABABIACAAIgBACIABAAIABABIACABIABABIABAAIACABIABABIABABIAAABIABABIACAAIABABIABABIACAAIAGAEIACAAIABABIABABIACABIABAAIABABIABgCIABABIACABIABABIABAAIACABIABABIABAAIACABIABgBIABAAIABABIACABIABAAIABABIACABIAAgCIACABIABABIABAAIACABIABABIABgBIABAAIABABIACABIABAAIABABIABgBIACAAIABABIABABIACAAIABABIABgBIABAAIABABIACABIABAAIABgBIABABIACABIABAAIABABIABgBIABAAIACABIABABIABAAIACABIAAgBIABAAIACABIABABIACAAIABgBIABABIABABIACAAIABABIAAgBIACAAIABABIABABIACAAIAAgBIACABIABAAIABABIACABIABgCIABABIABABIACAAIABABIABgBIABABIABAAIACABIABABIABgCIABABIACABIABAAIABABIABgBIABAAIACABIABABIABAAIABgBIABABIACABIABAAIABABIACABIABgCIABABIABABIACAAIABABIABABIABgCIABABIACABIABAAIABABIACABIABgBIABAAIABABIACABIABABIABAAIABgBIABAAIACABIABABIABABIACAAIABABIABABIABgCIABABIABAAIACABIABABIACABIABAAIABABIACABIABAAIABABIACABIABAAIABgBIABABIACAAIABABIABABIACAAIgBACIABABIABAAIACABIABABIABAAIACABIABABIABAAIACABIABABIACABIABAAIABABIAAABIABABIABABIACABIABAAIABABIAAABIABABIACABIABAAIABABIgBABIACABIABABIABAAIABABIAAABIACABIABABIAAABIAAABIACABIABAAIAAABIABABIABABIABABIAAABIABABIABABIAAABIABABIABAAIAAABIABABQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABIABABIAAABIABABIABABIAAABIABABIABAAIgBACIABABIAAABIACABIABABIgBABIABAAIAAABIABABIAAACIABAAIABABIgBACIABAAIAAABIABABIAAABIABABIgBACIABABIAAABIACAAIgBABIABABIgBACIACAAIABABIAAACIAAAAIAAABIABABIAAABIAAABIAAACIAAABIABAAIAAACIAAABIAAABIABABIAAABIABABIAAABIAAABIAAABIABABIAAABIAAABIAAABIAAACIABAAIAAACIAAAAIAAABIABABIAAACIgBABIABABIAAABIABABIgBABQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABIgBACIABAAIAAABIABABIgBACIABABIAAABIgBABIABABIAAABIAAABIABABIgBACIABAAIAAABIgBACIABABIAAABIABABIAAABIgBABIABABIgBABIgBABIABABIAAACIABABIAAABIgBABIABABIAAABIgBACIABABIAAABIgBABIABABIAAABIgBABIABABIAAABIgBACIABABIAAABIgBABIABABIAAAAIgBABIABACIAAABIgBABIABABIgBABIAAABIABABIAAABIgBACIgBABIABABIAAABIgBABIABABIAAABIgBACIgBABIABABIAAABIgBACIABAAIAAABIgBACIAAABIABABIAAABIgBACIABABIgBABIgBABIAAABIABABIAAABIgBACIABAAIAAACIgBABIgBACIABAAIAAABIgBACIgBABIABABIAAACIgBABIAAABIAAABIAAABIAAABIgBACIABABIgBABIAAABIgBABIABABIAAACIgBABIgBABIABABIAAABIgBACIAAABIgBABIACABIgBABIgBABIAAACIAAABIAAABIgBACIgBABIAAABIABABIAAABIgBABIgBACIABABIAAABIgBABIAAACIgBABIABABIgBABIgBABIAAACIABABIAAABIgBABIgBABIAAACIAAAAIAAACIAAABIgBACIgBABIAAABIABABIgBABIgBACIgBABIAAABIABABIAAACIgBABIgBABIgBACIAAABIABABIAAABIgBABIgBACIAAABIAAABIAAABIAAABIgBABIgBACIAAABIABABIgBACIgBABIgBABIAAACIgBABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAAABIgBABIgBABIAAACIgBABIgBACIABAAIAAACIAAABIgBACIgBABIgBABIAAACIABAAIgBABIgBACIAAABIgBACIgBABIABABIAAABIgBABIAAABIgBACIgBABIAAABIgBACIgBABIABABIAAACIgBABIAAABIgBACIgBABIAAABIgBACIgBABIABAAIgBACIAAABIgBACIgBABIAAABIgBACIgBABIAAABIABABIgBABIAAABIgBACIgBABIAAABIgBACIgBABIAAACIgBABIgBABIgBACIAAABIgBABIACABIgBACIgBABIgBABIAAACIgBABIgBABIAAACIgBABIgBABIAAACIgBABIgBABIAAACIgBABIgBACIgBABIAAABIgBACIgBABIAAABIgBACIgBABIAAABIgBACIgBABIAAABIgBACIgBABIgBABIAAACIgCACIAAACIgBABIgBACIAAABIgBABIgBACIgBABIAAABIgBACIgBABIAAABIgCgBIAAACIgBABIgBABIgBACIAAABIgBABIgBACIAAABIgBABIgBACIAAABIgBABIgCAAIAAABIgBACIgBABIAAABIgBACIgBABIgBAAIAAABIgBABIgBACIgBABIgBABIgBgBIAAACIgBABIgBABIgBABIgBAAIgBACIAAABIgBABIgBAAIgBABIgBACIAAABIgBAAIgBAAIgBACIgBABIgBgBIgBACIgBABIAAABIgBgBIgBACIgBABIgBAAIgBABIgBABIgBAAIgBABIgBABIgBAAIgBABIAAABIgBAAIgBABIgCgBIAAABIgBABIgCAAIAAACIgBgBIgBACIgBAAIgBAAIgBABIgBAAIgBABIgBgBIgBABIgBAAIgBABIgBAAIgBABIgCgBIAAABIgBAAIgBABIgBAAIgBAAIgCAAIAAABIgBAAIgBABIgCgBIgBAAIgBABIgBAAIgBAAIAAAAIgBAAgADfE8IABABIABgCIABABIABgBIACAAIABABIABgBIABAAIAAgBIACAAIABgBIABABIABgBIABgCIABABIAAgCIACABIAAgBIABgBIACAAIAAgBIABgBIABAAIABgBIAAgCIACABIABgBIAAgBIABgCIABABIABgCIABgBIABgBIABABIABgCIAAgBIABgBIABAAIABgBIABgCIAAgBIACABIAAgCIABgBIABgBIAAgCIABgBIABgBIABABIABgCIABgBIAAgCIABgBIABgBIABgCIABABIAAgBIABgCIABgBIAAgBIABgCIABgBIAAgCIABgBIABgBIAAgCIABgBIABgBIABABIABgCIABgBIAAgBIABgCIABgBIABgBIAAgCIABgBIABgBIAAgCIABgBIABgBIAAgCIABgBIABgCIAAgBIABgBIABgCIABgBIAAgBIABgCIABgBIAAgBIABgCIABgBIAAgBIABgCIABgBIgBgBIAAgBIABgCIAAgBIABgBIABgCIAAgBIABgCIABgBIABgBIAAgCIABgBIABgBIAAgCIABgBIgBAAIABgCIAAgBIABgCIABgBIABgBIAAgCIABgBIABgBIAAgCIABgBIgCgBIABgBIABgCIABgBIAAgBIABgCIABgBIAAgBIAAgBIAAgBIAAgCIABgBIABgBIAAgCIABgBIABgBIAAgCIgBAAIABgCIABgBIAAgBIABgCIABgBIABgBIgCgBIABgCIAAgBIABgBIABgCIABgBIAAgBIgBgBIAAgBIABgCIABgBIABgBIAAgCIgBAAIAAgCIABgBIABgCIAAgBIABgBIABgCIgBgBIABgBIAAgBIABgBIABgCIAAgBIAAgBIAAgBIAAgBIABgCIABgBIAAgBIgBgBIABgCIAAgBIABgBIABgCIgBAAIAAgBIABgCIABgBIAAgCIABgBIgBgBIAAgBIABgCIABgBIAAgBIAAgBIAAgBIAAgBIABgCIABgBIgBgBIAAgBIABgBIABgCIAAgBIgBgBIABgBIAAgCIABgBQgBAAAAgBIAAgBIABgBIABgCIAAgBIgBgBIAAgBIABgBIABgCIgBgBIABgBIAAgBIABgCIABgBIgBgBIAAgBIABgBIAAgCIgBAAIAAgCIABgBIABgCIgBAAIAAgBIABgCIABgBIgBgBIAAgBIABgBIAAgCIAAgBIAAgBIAAgBIABgCIgBgBIABgBIAAgBIABgBIgBgBIAAgCIABgBIgBgBIAAgBIABgBIABgCIgBAAIAAgBIAAgCIAAgBIAAgBIABgBIABgCIgBgBIAAgBIAAgBIAAgBIAAgBIAAgCIABgBIgBgBIABgBIAAgBIAAgBIAAgBIAAgBIgBgBIABgCIAAgBIgBgBIABgBIABgBIgBAAIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIABgCIABgBIgBgBIAAgBIABgBIgBgBIAAgBIAAgBIAAgBIAAgCIgBgBIAAgBIABgBIgBgBIAAgBIABgCIgBgBIABgBIgBAAIAAgBIAAgCIAAgBIAAgBIAAgBIgBgBIABgBIgBgBIAAgCIgBgBIAAgBIABgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIABgBIgBgBIAAgBIgBgBIABgBIgBgBIAAgBIgBgBIAAgCIgBgBIAAgBIABgBIgBAAIABgCIgBgBIAAgBIgBgBIAAgBIgBgBIABgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIAAgBIgBgBIAAgBIgBgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIgBgBIABgBIgCgBIgBgBIAAgBIgBgBIABgBIgCgBIABgBIgBAAIgBgBIAAgCIgBAAIgBgBIAAgBIgBgBIAAgBIgBgBIgBgBIAAgBIgBgBIgBgBIABgBIgCgBIgBAAIgBgBIAAgCIgBAAIgCgBIABgBIgCgBIgBAAIAAgBIAAgBIgCgBIgBgBIgBgBIgCAAIABgCIgBAAIgCgBIgBgBIgCgBIgBAAIAAgBIAAgBIgCgBIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIgBgBIgBAAIgCgBIgBgBIgBAAIgCgBIgBgBIgBAAIgCgBIgBgBIgCgBIgBAAIgBgBIgCgBIgBABIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIgBAAIgBABIgBgBIgBAAIgCgBIgBgBIgBAAIgBAAIgCAAIgBAAIgBgBIgCgBIgBAAIgBAAIgBAAIgBgBIgCAAIgBgBIgBgBIgBABIgBAAIgBgBIgCAAIgBgBIgBABIgCAAIgBgBIgBgBIgCAAIAAAAIgBAAIgCAAIgBgBIgBgBIgBABIgBAAIgCgBIgBgBIgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgBAAIgBAAIgBgBIgCgBIgBAAIgBABIgBgBIgBAAIgCgBIgBgBIgBABIgBAAIgCgBIgBgBIgBgBIgBABIgBAAIgCAAIgBgBIgBgBIgBABIgBAAIgCgBIgBAAIgBgBIgBABIgCgBIgBAAIgBgBIgCgBIgBgBIAAACIgCgBIgBAAIgCgBIgBgBIgBACIgBgBIgCgBIgBAAIgBgBIgBABIgBAAIgBgBIgCgBIgBAAIgCgBIgBgBIgBABIgBAAIgBgBIgBgBIgCgBIgBAAIgBgBIgBACIgCgBIgBgBIgCgBIgBAAIgBgBIgCgBIAAABIgBAAIgCAAIgBgBIgBgBIgCgBIgBAAIgCgBIgBgBIgBAAIgBABIgCgBIgBgBIgBAAIgCgBIgBgBIgBgBIgLgFIgBgBIgCAAIgBgBIgCgBIAAAAIAAgCIgBAAIgCgBIgBgBIgBAAIgCgBIgBgBIgBAAIgBgBIAAgCIgBAAIgCgBIgBgBIgCAAIgBgBIgBgBIgBgBIAAgBIgBgBIgBAAIgCgBIgBgBIgBAAIAAgBIgBgBIgCgBIgBgBIgBAAIgCgBIgBgBIABgBIgCgBIgBAAIgBgBIgCgBIABgBIgBgBIgCgBIgBAAIgBgBIgBgBIAAgBIgBgBIgCgBIgBAAIgBgBIABgBIgCgBIgBgBIgCAAIgBgBIABgBIgCgBIgBgBIgBAAIgBgCIAAgBIgCAAIgBgBIgBgBIgCAAIABgBIgBgBIgBgBIgCgBIgBAAIAAgCIgBAAIgBgBIgCgBIgBgBIABgBIgBgBIgCAAIgBgBIgBgBIAAgBIgBAAIgCgBIgBgBIgBgBIAAgBIgBgBIgBAAIgCgBIgBgBIABgBIgCgBIgBgBIgBAAIgBgBIAAgCIgBAAIgCgBIgBgBIgBAAIgBgBIAAgBIgCgBIgBAAIgBgBIgCgBIAAgBIAAgBIgBgBIgCAAIgBgBIAAgBIgBgBIAAgBIgCgBIgBAAIgBgBIgCgBIgBgBIgBAAIABgBIgCgBIgBgBIgBAAIgCgBIgBgBIgCAAIgBgBIgBgBIgCAAIgBgBIgBgBIAAgBIgBgBIgBgBIgCAAIgBgBIgCgBIgBgBIgBAAIgBABIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIgBgBIgCAAIgBgBIgBgBIgBABIgCAAIgBgBIgBgBIgCAAIgBgBIAAABIgCAAIgBgBIgCgBIgBAAIgBABIgBgBIgCAAIAAABIgBgBIgCgBIgBAAIgBABIgBgBIgBAAIgBABIgCAAIgBgBIgBABIgBAAIgBgBIgBABIgBgBIgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgBAAIgBABIgBAAIgBgBIgBABIgBAAIgBABIgBAAIgBgBIgBABIgBAAIgBABIgCgBIgBABIgBAAIAAABIgCAAIgBgBIgBABIgBAAIgBABIgBgBIgBABIgBAAIgBABIgBAAIgBAAIgBAAIgBABIgBAAIgBABIgBAAIgBABIgCgBIAAABIgBABIgBAAIgBABIgBAAIgBABIgBgBIgBABIgBAAIgBACIgBAAIgBAAIgBABIgBAAIgBABIgBAAIgBABQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgBAAIgBABIgBAAIgBACIgBgBIgBABIAAABIgCAAIAAABIgBABIgBAAIgBAAIgCAAIAAACIgBABIgBgBIgBACIgBAAIgBAAIgBABIgBAAIgBABIAAABIgBAAIgBACIgBAAIgBAAIgBABIgBABIgBAAIgBABIgBABIgBAAIgBABIAAABIgCAAIAAABIgBABIgBAAIgBACIgBAAIgBAAIgBABIgBABIgBAAIAAABIgBABIgCAAIAAACIgBABIgBgBIgBABIgBACIAAABIgCAAIAAABIgBABIgBgBIgBACIgBABIgBABIgBAAIgBABIAAABIgCAAIgBABIAAACIgBAAIgBAAIgBABIAAACIgCgBIgBACIAAABIgBABIgBgBIgBACIgBABIgBABIgBAAIAAABIgBACIgBABIgBgBIgBACIgBABIAAABIgCgBIAAACIgBABIgBABIgBAAIAAABIgBACIgBABIgBgBIgBABIgBACIAAABIgBABIgCAAIAAABIgBACIgBABIgBgBIgBACIgBABIAAACIgBAAIgBAAIgBABIAAACIgBABIgCgBIAAACIgBABIgBABIgBABIgBAAIgBACIAAABIgBABIAAABIgCAAIAAABIgBABIgBACIgBABIgBAAIgBABIAAABIgBACIgBABIgBgBIgBABIgBACIAAABIgBABIgBABIgBAAIAAACIgBABIgBABIgBABIgBAAIgBACIAAABIgBABIgBACIgBAAIgBAAIgBABIAAACIgBABIgBABIAAACIgCgBIgBACIAAABIgBABIgBACIAAABIgBAAIgBAAIgBACIAAABIgBABIgBACIgBABIgBABIgBAAIAAABIgBACIgBABIgBABIAAACIgBABIgBgBIgBACIgBABIAAACIgBABIgBABIgBACIAAABIgBAAIgBAAIgBACIAAABIgBABIgBACIAAABIgBABIgBACIgBABIgBAAIgBABIAAABIgBACIgBABIAAABIgBACIgBABIgBABIAAACIgBABIgBgBIgBABIgBACIgBABIAAABIgBACIgBABIAAABIgBACIgBABIAAACIgBABIgBABIAAACIgBABIgBgBIgBACIgBABIAAABIgBACIgBABIAAACIgBABIgBABIAAACIgBABIgBABIgBACIAAABIgBABIgBACIAAABIgBABIgBACIAAABIgBABIgBACIAAABIgBABIgBACIgBABIAAACIgBABIgBABIAAACIABAAIgBABIgBACIAAABIgBABIgBACIAAABIgBACIgBABIgBABIAAACIgBABIgBABIABACIAAABIgBABIAAABIgBACIgBABIAAABIAAABIAAABIAAACIgBABIgBABIAAACIgBABIABABIgBABIAAACIgBABIABABIAAABIgBABIgBACIABAAIAAABIgBACIAAABIABABIgBABIgBACIABABIAAABIgBABIABABIAAABIAAABIAAABIAAABIAAABIABAAIgBACIABABIAAABIABABIAAABIAAABIAAABIABABIAAABIABABIAAABIABABQABAAgBABIAAABIACAAIABACIAAABIABAAIABABIgBACIACAAIABABIABABIACAAIABABIABABIACAAIABABIABABIACABIABAAIABABIACABIABAAIABgBIABAAIACABIABABIACABIABAAIAAgBIACAAIABABIABABIABgBIACABIABAAIABABIABgCIABABIACABIAAgCIACABIABABIABgCIABABIACABIABAAIAAgBIACABIABABIABgCIABABIACABIAAgCIACABIABAAIABgBIABABIABgBIABAAIACABIAAgBIABAAIACABIAAgBIACABIABAAIABgBIABABIABgCIABABIACAAIABgBIABABIAAgBIACAAIABABIABgCIABABIABABIABgCIACABIAAgBIABABIABgCIACABIABABIABgCIABABIAAgBIACABIABAAIABgBIACAAIAAgBIABABIABgCIACABIABABIABgBIABAAIAAgBIACAAIABgBIABABIABgBIABAAIABABIABgCIABABIABgBIACAAIAAgBIABABIABgBIACAAIABABIABgCIABABIAAgBIACAAIABgBIABABIABgBIABAAIABABIABgCIACABIAAgBIACABIAAgCIABABIABgBIACAAIAAgBIACABIABgCIABABIABABIABgCIABABIABgCIABABIABgBIABABIABgCIABABIABgBIABAAIABgBIABABIABgCIABABIACABIABgCIABABIAAgBIACABIAAgCIACABIABgCIABABIAAgBIACAAIABgBIABABIABgBIABAAIABABIABgCIABABIABgBIACABIAAgCIABABIABgCIACABIABABIABgBIABABIAAgCIACABIABgCIABABIACABIAAgCIABABIABgBIABABIACAAIABgBIABAAIABABIABgBIABAAIABgBIABABIACABIAAgCIACABIAAgCIACABIABABIABgBIABAAIACABIABABIAAgCIACABIABABIABgCIABABIACABIAAgCIACABIABABIABgBIABAAIABABIABgCIACABIABABIABABIABgCIABABIABAAIACABIABgBIABABIACAAIAAgBIABABIACAAIABABIABgBIABAAIABABIACABIABgBIABAAIABABIACABIAAgCIACABIABABIABAAIACABIAAgBIABAAIACABIABABIABAAIABgBIACAAIABABIACABIABABIAAgBIACAAIABABIABABIACAAIABABIABgBIABAAIACABIABABIACAAIABABIAAgBIACAAIABABIABABIACAAIABABIABABIABgBIABAAIACABIABABIABAAIACABIABABIABABIACAAIABABIABgCIABABIACABIABABIACAAIABABIABABIACAAIABABIABABIACAAIABABIABABIACAAIABABIAAgBIACAAIABABIACABIABAAIABABIACABIABABIABAAIACABIAAABIABAAIACABIABABIABAAIACABIABABIABAAIABABIAAACIACAAIABABIABABIACAAIABABIABABIACABIABAAIABABIACABIABAAIABABIACABIAAABIAAABIACABIABAAIABABIACABIABAAIABABIACABIABAAIABABIAAABIABABIACABIABAAIABABIACABIgBABIABABIACAAIABABIABABIACABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAAABIACAAIABABIABABIACABIABAAIgBABIACABIABABIABAAIABABIAAACIABAAIACABIABABIgBABIACABIABAAIABABIABABIAAABIACABIABABIABAAIABABIAAABIABABIABABIAAABIABABIACAAIABABIgBACIACAAIABABIABABIgBABIACAAIABABIAAACIABAAIABABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABIABABIABAAIAAACIABAAIABABIAAABIABABQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABIABABIABABIAAABIABABIABAAIAAACIABAAIABABIAAACIABAAIABABIAAABIABABIgBABIACABIABABIAAABIABABIABABIgBABIABAAIAAACIACAAIABABIgBABIABABIAAACIABAAIABABIAAACIABAAIAAABIAAABIAAABIABABIAAACIABAAIgBABIACABIgBACIACAAIABABIgBABIABABIAAABIABABIAAABIAAABIAAABIABACIAAABIABAAIAAABIABABIgBACIABAAIAAACIABAAIABABIAAABIABABIgBABIABABIAAACIABAAIAAABIABABIgBABIABABIAAACIABABIAAABIABABIgBABIACAAIAAABIAAABIABABIAAACIABAAIAAABIAAABIAAABIABACIAAABIABAAIgBABIACABIABABIAAABIABABIgBABIABABIAAACIABAAIAAABIABABIABABIgBABIABABIAAABIABABIAAABIABABIgBABIACABIABABIAAABIABABIgBABIABABIAAABIABABIABABIAAABIABABIgBABIABABIAAABIACABIABABIgBABIABABIAAABIABABIABAAIAAABIAAABIAAACIACAAIgBACIACAAIABABIgBABIACABIAAABIAAABIABABIAAABIABABIABABIAAABIABABIgBABIACAAIABACIAAABIABAAIABABIgBACIACAAIABABIAAABIABABIgBABIACABIAAABIAAABIABABIABAAIAAABIACABIABABIgBABIABABIACABIABABIAAABIABABIABABIAAABIABAAIABABIgBABIACABIABABIABABIAAABIABAAIACABIAAABIAAABIABABIACABIABAAIABABIAAABIABABIACABIABAAIABABIACABIABAAIABABIACABIABAAIABABIACABIABAAIACABIABABIABABIACAAIAAgBIABABIACABIABgCIABABgACzBnIgCAAIgBAAIgBAAIgBAAIgBABIgBAAIgCgBIgBgBIgBABIgBgBIgBAAIgBgBIgCgBIgBAAIgCgBIgBgBIgBAAIgCgBIgBgBIgBAAIgBgBIAAgBIgBgBIgCgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgBIgCAAIgBgBIABgCIgCAAIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIgBgBIABgBIgBgBIAAgBIgBgBIAAgCQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgBIAAgBIgBgBIAAgBIABgBIgBgBIABgBIABgCIgBgBIAAgBIAAgBIABgBIABgCIgBgBIAAgBIABgBIAAgBIABgCIABgBIABgBIAAgCIACABIAAgBIABgCIABgBIAAgCIACABIABgBIAAgCIABABIABgBIABgBIABAAIABgBIABgCIABABIABgBIABABIABgCIABABIABgCIABABIABgBIABAAIABgBIABABIABgCIABABIACABIABgCIABABIABABIABgBIABAAIACABIABABIAAgCIACABIABABIABAAIACABIABABIABAAIACABIABABIACABIABAAIABABIABABIAAABIABABIACABIABAAIAAABIABABIAAABIAAABIACABIABABIgBABIABABIAAABIABABIAAABIABABIAAABIAAABIAAABIABABIAAABIAAABIAAABIAAACIABAAIgBABIgBACIACABIgBABIgBABIABABIAAABIAAACIgBABIgBABIAAACIABAAIgBACIgBABIgBABIAAACIgBABIgBgBIgBACIAAABIgBACIgBABIgBABIgBAAIgBABIAAABIgCgBIgBACIAAABIgBAAIgBABIgBABIgBgBIgBABIgBAAIgBABIgBAAIgBABIgBgBIgBABIgBAAIgBABIgCAAIAAABIgBgBgAELBKIgBgBIgCAAIAAABIgBgBIgCgBIgBAAIgBABIgBAAIgCgBIgBgBIgBgBIgCAAIgBgBIgCgBIgBAAIgBgBIgBgBIAAgBIgBgBIgBgBIgBAAIAAgBIgBgBIgBgBIAAgBIgCgBIAAgBIAAgBIgBgBIAAgBIgBgBIgBgBIAAgBIgBgBIABgBIgBgBIAAgBIABgBIgCgBIABgBIgBgBIABgBIgBgBIAAgBIAAgCIAAgBIAAgBIAAgBIABgBIgBgBIAAgCIABgBIABgBIAAgCIABgBIABgBIgBgBIAAgBIABAAIABgBIABgCIAAgBIABgBIABgCIABgBIABABIABgBIAAgCIABgBIACABIAAgCIABgBIACABIAAgCIABgBIABABIABgCIABABIABgCIABABIABgBIABABIABgCIABABIABgBIABAAIABgBIABABIACABIAAgCIACABIABAAIABgBIABABIABAAIACABIABgBIABAAIABABIACABIABAAIABABIACABIAAgBIABAAIAAABIABABIACABIABABIABAAIACABIAAABIAAABIABABIACAAIABACIAAABIABAAIABABIAAACQABAAgBAAIAAABIACABIABABIgBABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABIABABIAAABIABABIgBABIgBACIACAAIgBABIABABIAAACIgBABIABABIAAABIgBABIABABIAAACIgBABIgBABIABABIAAABIgBACIAAABIgBABIgBACIAAABIgBABIgBACIAAABIgBABIgCAAIAAABIgBACIgBABIgBgBIAAABIgBACIgBABIgBAAIgBABIgBgBIgBABIgBABIgBAAIgBABIgBAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgBAAIgBABIgBAAIgBABIgBgBIgBABIgBAAIgCAAIgBABIgBgBIgBABIAAAAIgBAAgACQALIgBgBIgBABIgBAAIgBgBIgCgBIAAABIgCAAIgBgBIgCAAIgBgBIgBgBIgCAAIgBgBIgBgBIgCgBIAAgBIAAgBIgBAAIgCgBIgBgBIAAAAIgBgBIgBAAIgBgBIAAgBIgBgBIABgCIgCAAIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIgBgBIAAgCIAAAAIAAgBIgBgBIAAgBIAAgBIAAgCIAAgBIgBgBIAAgBIABgBIgBgBIABgCIABgBIAAgBIABgCIgCAAIABgBIABgCIAAgBIABgBIABgCIABgBIAAgCIABgBIABgBIAAgCIACABIABgBIAAgCIABgBIABABIABgBIAAgCIACABIABgCIAAgBIACABIAAgBIABAAIABgBIABgCIABABIABgBIABABIABgCIABABIABgCIABABIACABIABgBIABAAIABgBIABABIABAAIABgBIABAAIABABIACABIABgCIABABIABABIACAAIABABIACABIABABIAAgBIACAAIgBABIACABIABABIABAAIACABIABABIABAAIgBACIACABIABAAIABABIAAABIABABIABABIAAABIABABQABAAAAABIAAABIABABIAAABIAAABIAAABIABABIAAABIABABIAAABIAAABIAAABIABABIAAABIgBABIABABIAAACIgBABIABABIAAABIgBABIAAACIAAAAIAAACIgBABIgBACIAAABIgBABIgBACIAAABIgBABIgBACIAAABIgBABIgBABIAAAAIgBAAIgBABIgBACIgBABIgBAAIgBABIgBgBIgBABIAAABIgCAAIAAACIgCgBIgBABQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAIgBAAIgBABIgBAAIgBgBIgBABIgBgBIgBABIgBAAIgBABIgBAAIgCgBIgBABgADwgSIgCgBIAAABIgBAAIgCAAIgBgBIgBABIgBAAIgCgBIgBgBIgBAAIgCgBIAAABIgCgBIgBgBIgBAAIgCgBIABgBIgCgBIgBAAIgBgBIgCgBIAAgBIAAgBIgBgBIgCAAIgBgBIAAgBIgBgBIgBgBIAAgBIAAgBIAAgBIgBgBIgBgBIAAgBIgBAAIAAgCIgBgBIABgBIgCgBIABgBIABgCIgBAAIAAgBIgBgBIAAgBIABgCIgBAAIAAgCIABgBIABgCIgCAAIABgBIABgCIAAgBIABgCIgBAAIAAgBIABgCIABgBIAAgBIABgCIABgBIABAAIABgBIABgBIAAgCIABgBIABgBIABAAIABgBIABgCIABABIAAgBIABgBIABAAIABgBIACAAIAAgBIABgBIACABIAAgCIABABIABgBIABABIABgCIACABIABAAIAAgBIACABIABgCIABABIABABIABgBIABAAIACABIAAgCIACABIABABIABABIACAAIABgBIABAAIABABIACABIABAAIABABIACABIABABIABABIgBABIACAAIABABIABABIABABIAAABIACABIABAAIgBABIACABIAAABIAAABIABABIAAACIABAAIABABIAAABIABABIAAABIABABIgBABIABABIAAABIgBABIACABIgBACIABABIgBABIAAABIAAABIAAABIAAACIgBABIABAAIAAACIgBABIgBACIAAABIABABIgBABIgBABIAAABIgBACIgBABIAAABIgBAAIgBABIgBACIgBABIgBABIgBAAIAAABIgBACIgBAAIgBAAIgBABIgBABIgBAAIgBABIgBgBIgBACIgBgBIgBACIAAABIgBAAIgCAAIgBAAIgBgBIgBACIgBgBIgBABIgBAAIgBABIgBgBgAh4gwIgCgBIgBABIgBAAIgCgBIAAABIgBgBIgCAAIgBABIgBgBIgBAAIgCgBIgBABIgBAAIgBgBIgBAAIgBAAIgBAAIgCAAIgBgBIgBgBIgCAAIgBgBIgBgBIgCgBIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIgBAAIgBgBIgBgBIAAgBIgCgBIgBgBIgBAAIAAgCIgBgBIgCAAIgBgBIABgBIgBgBIgCgBIABgBIgBgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgBIgBAAIgBgBIAAgCIgBAAIAAgBIgBgBIgBgBIAAgBIgBgBIABgBIgBgBIAAgBIgBgBIAAgBIgBgBIABgBQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgBIgBAAIAAgBIgBgBIABgCQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgBIABgBIgBgBIAAgBIABgBIgCgBIABgBIgBgBIABgBIAAgCIABgBIgBgBIAAgBIABgCIABgBIgCgBIABgBIABgBIAAgCIABgBIgBgBIABgBIAAgBIABgCIgBAAIAAgCIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIABgBIgCgBIgBgBIgBgBIABgBIgCgBIgBAAIgBgBIAAgBIgBgBIAAgBIgBgBIgBgBIABgBIgCgBIgBAAIAAgBIAAgBIAAgCIgBAAIAAgCIgBgBIgBgBIAAgBIgBAAIABgBIgBgBIAAgCIgBgBIAAgBIABgBIgBAAIAAgCIgBgBIABgBIgBgBIAAgBIAAgBIgBgBIABgCIgBgBIAAgBIABgBIgBgBIAAgBIABgBIgBgBIAAgBIABgCIABgBIgBgBIAAgBIABgBIABgCIgBgBIAAgBIABgBIAAgCIABgBIABgBIAAgCIABgBIABgBIAAgCIABgBIABgCIAAgBIABgBIABgCIABgBIAAgBIABgCIABABIABgBIABgBIABgCIAAgBIABAAIABgBIABgBIAAgCIACABIAAgBIABgBIACAAIAAgBIABAAIABgBIABgBIABABIABgCIABgBIABAAIABgBIABABIABgBIABAAIABgBIABAAIABgBIABABIABgBIABAAIABgBIABAAIABgBIACABIAAgBIABAAIACABIAAgBIACAAIABgBIABAAIABABIABgBIABABIACABIAAgCIABABIACAAIABgBIABABIABAAIACABIAAgBIACABIABAAIABABIACABIABgCIABABIABABIACAAIABABIABgBIAAgBIABgCIABABIABgCIABgBIAAgBIABgCIABgBIABAAIABgBIABgBIABABIABgCIAAgBIABgBIABAAIABgBIABABIABgCIABgBIABABIABgCIABgBIABAAIABgBIABABIAAgBIACAAIABgBIABABIABgBIABgCIABABIAAgCIACABIABABIABgBIABAAIABgBIABAAIABgBIABABIABgCIACABIABABIAAgBIACAAIABABIABgCIABABIABABIABgCIACABIABABIAAgBIACAAIABABIACABIAAgCIABABIACABIABAAIABABIACABIABgCIABABIABABIACAAIABABIACABIABAAIABABIACABIABABIABAAIACABIgBABIABABIABABIACABIABAAIABABIAAABIABABIACABIABAAIgBABIACABIAAABIAAABIABABIABABIAAABIACABIABAAIAAACIABAAIAAABIAAACIABABIAAABIABAAIgBACIABAAIAAACIACAAIgBACIABABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAAABIgBABIABABIAAABIABABIAAABIABABIgBABIABABIAAABIgBABIABABIAAABIgBACIABABIAAABIgBABIABABIAAABIgBACIABABIAAABIgBABIgBABIABABIAAABIgBABIgBACIAAABIgBACIABAAIAAACIgBABIACABIABABIABAAIABABIAAABIABABIABABIACABIABAAIAAABIABABIAAABIAAABIACABIABAAIAAACIABABIABAAIAAABIABABIABABIgBABIACABIgBABIACABIABABIgBABIABABIAAABIABABIAAABIABABIABABIgBABIAAABIABABIAAABIAAABIAAACIABAAIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAACIgBABIABABIgBABIAAACIgBABIgBABIAAACIgBABIgBABIAAACIABAAIgBACIAAABIgBABIgCAAIAAABIgBACIgBABIAAABIgBACIgBABIAAAAIgBAAIgBACIgBABIAAABIgBABIgCAAIAAACIgBABIgCgBIAAABIgBABIgBAAIgBABIgBABIgBAAIgBACIgBAAIgBAAIgBABIgBAAIgBABIgBAAIAAABIgBABIgBgBIgCABIgBAAIAAABIgBAAIgBABIgCgBIgBABIgBAAIgBABIgBAAIAAABIgCAAIgBgBIgBABIgBgBIgBABIgBAAIgCgBIgBABIgBAAIgBgBIgBABIgBAAIgBgBIgCgBIAAABIgCAAIgBAAIgCgBIAAABIgBAAIgCgBIgBgBIgBAAIgCgBIgBgBIgBABIgBACIgBgBIgBABIgBACIAAABIgBABIgBACIgBgBIAAABIgBACIgBABIgBAAIgBABIgBABIgBgBIgBACIAAABIgCAAIAAABIgBABIgBgBIgBACIgBABIgBgBIgBABIgBAAIgBABIgBAAIgBABIgBABIgBAAIgBABIgBAAIgBAAIgBAAIgBABIgBAAIgBAAIgBAAIgBAAIgBABIgCAAIgBAAIgBAAIAAABIgBAAIAAAAgAiki7IAAACIgBABIgBACIgBABIAAABIABABIgBABIgBABIAAACIABABIAAABIAAABIAAABIABABIAAABIABABIgBABIABABIAAABIACABIABABIgBABIACAAIABABIABABIACAAIABABIAMAHIgBABIACABIABAAIABABIACABIABABIAAABIABABIgBABIABAAIABABIAAABIABABIAAACIAAAAIAAABIAAACIABABIgBABIABABIAAABIgBABIgBACIAAABIgBABIgGALIAAACIABAAIAAABIgBACIgBABIgBABIAAACIABABIAAABIgBACIABAAIAAABIABABIgBACQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAAABIABAAIAAABIABABIgBACIABAAIACABIABABIgBABIACABIABABIACAAIABABIABABIACAAIABABIAAgBIACAAIABABIABgCIABABIACABIAAgBIACABIABgCIABABIABgCIABABIAAgBIACABIABgCIAAgBIACAAIAAgBIABgBIABgCIABgBIAAgBIABgCIAFgJIABgCIAAgBIABABIABgCIABgBIAAgBIABgCIABABIABgBIACAAIAAgBIABgBIABABIABgCIABABIACAAIAAgBIACABIABgBIABAAIABABIACABIABAAIAAgBIACABIABAAIALAGIABABIACAAIABABIABABIACAAIABgBIABABIABAAIABgBIABABIACABIAAgCIABABIABgCIACABIAAgBIACAAIABgBIAAgBIABAAIABgBIABgBIAAgCIACABIAAgBIABgBIABgCIABgBIAAgCIgBAAIAAgCIABgBIABgCIgBAAIABgBIAAgCIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIgBgBIABgBIgCgBIgBgBIABgBIgCgBIgBAAIgBgBIAAgBIgBgBIgCAAIgBgBIgLgGIgBAAIgCgBIgBgBIgBAAIABgCIgCgBIgBAAIABgCIgCgBIgBAAIAAgBIAAgBIAAgBIgBgBIAAgCQgBAAABAAIAAgBIAAgCIgBgBIAAgBIABgCIABgBIABgBIgBgBIAAgBIABgBIABgCIAEgJIABgCIABgBIABgBIAAgCIgBAAIAAgBIABgCIgBgBIAAgBIABgCIgBAAIABgBIgBgBIAAgBIgBgCIAAgBIgBAAIAAgBIgBgBIgBgBIgBgBIAAgBIgBgBIgBAAIgCgBIgBgBIgBAAIgCgBIgBgBIgBgBIgBACIgCgBIgBAAIgBAAIgBAAIgBABIgBAAIgCgBIAAACIgBgBIgBABIgBABIgBAAIgBABIgBABIgBAAIgBABIAAABIgBACIgBABIgBgBIgBACIgGALIAAABIgBABIgBACIAAABIgBABIgBABIgBAAIgBABIgBAAIgBABIgBABIgBAAIAAAAIgCAAIgBABIgBAAIgBgBIgBABIgBAAIgBgBIgBABIgCAAIgBgBIgBAAIgCgBIgBgBIgLgFIgBgBIgBABIgBgBIgBAAIgCgBIgBgBIgBABIgBAAIgBgBIgCABIgBAAIgBgBIAAACIgCgBIgBABIgBABIgBAAIgBABIgBAAIgBABIAAABIgBABIgBAAIgBABg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:39.625,y:0.0375}).wait(1).to({graphics:null,x:0,y:0}).wait(59));

	// Layer_3
	this.instance = new lib.Symbol5();
	this.instance.setTransform(37.1,-6,0.1494,0.1494,0,0,0,87,0);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(59));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0)","#D7E513"],[0,1],-13.6,-37.4,0,-13.6,-37.4,81.9).s().p("ADiFhIgBAAIgBAAIgCAAIgBgBIgBABIgBAAIgBgBIgBAAIgBABIgCgBIgBAAIgBABIgBgBIgBgBIgCAAIgBgBIgBgBIgBABIgBAAIgCgBIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIgBgBIgBAAIgCgBIgBgBIgBAAIgCgBIgBgBIgCAAIABgCIgBgBIgCAAIgBgBIgBgBIgCAAIABgBIgCgBIgBgBIgBAAIgCgBIAAgBIAAgBIgBgBIgCgBIgBgBIAAgBIgBgBIgBAAIgBgBIAAgBIgBgBIgBAAIgBgBIAAgCIgCAAIgBgBIABgBIgCgBIAAgBIAAgBIgBgBIgCAAIABgCIgCAAIgBgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAAAAAIAAgBIgCgBIgBgBIAAgBIgBgBIABgBIgCgBIAAgBIAAgBIgBAAIgBgCIAAgBIgCAAIgBgBIABgBIgBgBIgBgBIAAgBIgBgBIAAgBIgBgBIgBAAIAAgCIgBAAIAAgCIgBAAIgBgBIAAgCIgBAAIgBgBIABgCIgBAAIAAgBIgCgBIAAgBIAAgBIgBgBIAAgBIgBgBIgBgBIAAgBIgBgBIABgBIgCgBIgBgBIAAgBIAAAAIAAgBIgBgBIAAgCIgBAAIgBgBIAAgCIgBgBIABgBIgBAAIAAgBIgCgBIgBgBIABgBIgBgBIAAgCIgBAAIAAgBIgBgBIABgBIgBgBIgBgBIAAgBIgBgBIAAgBIgBgBIABgBIgCgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIgBgBIAAgBIgBgBIAAgBIAAgBIgBgBIAAgBIgBgBIABgBIgCgBIABgBIgCgBIABgBIgCgBIAAgBIAAgBIgBgBIAAgBIgBgBIABgBIgBgBIAAgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIgBgBIAAgBIgBgBIgBgBIAAgBIgBAAIABgCIgBgBIAAgBIgBgBIAAgBIgBgBIABgBIgBgBIAAgBIgBgBIAAgBIgBgBIABgBIgBgBIgBgBIAAgBIgBgBIAAgBIgBgBIABgBIgBgBIAAgBIgCAAIgBgCIABgBIgBgBIAAgBIgBgBIAAgBIgBgBIAAAAIAAgBIgCgBIABgCIgCAAIgBgBIABgCIgCAAIAAgBIAAgBIgBgBIAAgBIgBgBIgBgBIAAgBIgBgBIgBAAIAAgBIgBgBIgCgBIABgBIgBgBIgCgBIAAgBIAAgBIgBgBIgBgBIAAgBIgCAAIgBgBIABgBIgBgBIgCgBIgBgBIAAgBIgBAAIgBgBIgBgBIAAgBIgBgBIgCgBIAAAAIAAgBIgBgBIgCgBIgBAAIAAgCIgBgBIgBAAIgCgBIgBgBIABgBIgBgBIgCgBIgBAAIgBgBIgBgBIAAgBIgCAAIgBgBIgBgBIgBgBIAAgBIgCgBIgBAAIgBgBIgCgBIgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgBIgCAAIgBgBIgBgBIgCAAIgBgBIgBgBIAAgBIgBgBIgCgBIgBAAIgBgBIgCgBIgBgBIgBAAIgCgBIgBgBIgBAAIAAgBIgBgBIgCgBIgBAAIAAgBIgCgBIgBAAIgBgBIgCgBIgBgBIgBAAIgCgBIgBgBIgBAAIgCgBIgBgBIgCAAIgBgBIgBgBIgCAAIgBgBIgBgBIgCgBIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIgBgBIgBAAIgCgBIAAABIgCgBIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIgBABIgBAAIgBgBIgBAAIgCgBIgBgBIgBgBIgBABIgCAAIgBAAIgBgBIgCgBIgBAAIgBgBIgBABIgBAAIgCgBIgBgBIgBAAIgBAAIgBAAIgCgBIgBgBIgBAAIgCABIgBAAIgBgBIgBgBIgCgBIgBAAIgBABIgBAAIgBgBIgCgBIAAABIgCAAIgBgBIgCgBQAAABAAAAIgBAAIgCgBIgBAAIgBAAIgBAAIgBAAIgCgBIgBABIgBgBIgBAAIgBAAIgBAAIgCAAIAAABIgCgBIgBAAIgCgBIAAACIgCgBIgBgBIgBABIgBAAIgBgBIgBABIgBAAIgCgBIgBABIgBAAIAAABIgCgBIgBgBIgBABIgBAAIgCgBIAAACIgBgBIgBABIgCAAIgBgBIgBABIgBAAIgBABIgBgBIgBABIgBAAIgBAAIgBAAIgBAAIgBABIgCAAIgBABIgBAAIAAAAIgBAAIgCgBIgBACIgBgBIgBABIgBAAIgBABIgBgBQAAAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAAAIgBAAIgBABIgBAAIgBAAIgBAAIgBABIgBAAIgBABIgCAAIgBgBIAAABIgCAAIgBABIgBgBIAAABIgCAAIgBABIgBAAIgBAAIgBAAIgBABIgBAAIgBABIgBAAIgBAAIgBAAIgCAAIAAABIgBgBIgBABIgBAAIgBABIgCAAIAAAAIgBAAIgBABIgCAAIgBgBIgBABIgBAAIgBABIgBgBIgBABIgBAAIgBABIgBAAIgBgBIgBABIgCAAIgBABIgBgBIAAABIgBAAIgCgBIgBACIgBgBIgBABIgBgBIgBABIgBAAIgBABIgBAAIgCgBIAAABIgBAAIgBAAIgCAAIgBABIgBAAIgBgBIAAACIgCgBIgBABIgBAAIgBAAIgBAAIgBAAIgBABIgCgBIAAABIgCAAIgBgBIgBABIgBAAIgBABIgBAAIgBgBIgBABIgBgBIgBABIgCAAIgBgBIgBABIgBAAIgBAAIgBABIgBgBIgBABIgBAAIgCgBIgBABIgBAAIAAABIgBAAIgCgBIgBABIgBgBIgBgBIgBABIgBAAIgCAAIAAAAIgCAAIgBAAIgBABIgBgBIgBABIgBAAIgBgBIgBABIgCAAIgBgBIgBAAIgBABIgBgBIgCAAIAAAAIgCAAIgBgBIgBABIgBAAIgCgBIAAABIgBAAIgCgBIgBAAIgBABIgBgBIgCgBIgBAAIgBABIgBAAIgBgBIgCgBIgBACIgBgBIgBgBIgCAAIgBAAIgBAAIgBgBIgBgBIgCAAIgBgBIgBABIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIgBgBIgBAAIgCgBIgBgBIgBAAIgBgBIAAgCIgCAAIgBgBIgBgBIgCAAIgBgBIAAgBIgBgBIgBAAIABgCIgCgBIgBAAIgBgBIAAgBIgBgBIgBgBIAAgBIgBgBIgBgBIAAgBIgBgBIAAgBIgBgBQgBAAABAAIAAgBIgBgBIAAgCIgBgBIABgBIgCAAIABgCIgCgBIgBAAIAAgBIABgCIgBAAIABgCIgCgBIABgBIgBAAIAAgCIgBgBIABgBQgBAAAAgBIAAgBIgBgBIAAgBIABgBIgBgBIABgCIgBAAIAAgBIABgCIgBgBIAAgBIAAgBIgBAAIABgBIAAgCIgBAAIABgBIABgCIgCgBIABgBIABgCIgCAAIABgBIABgCIgBgBIAAgBIABgBIABgCIgBgBIAAgBIAAgBIABgBIgBgBIAAgBIABgCIABgBIAAgBIAAgBIAAgCIABgBIABgBIAAgCIgBAAIAAgBIABgCIABgBIABgCIAAgBIgBAAIAAgCIABgBIABgBIAAgCIABgBIABgBIgBgCIAAgBIABgBIAAgCIABgBIABgBIABgCIAAgBIABgBIABgCIAAgBIABgBIgBgBIABgBIAAgCIABgBIABgBIAAgCIABgBIABgBIABgCIAAgBIABgBIABgCIAAgBIABgBIABgCIAAgBIABgBIABgCIABgBIAAgBIABgCIABgBIAAgCIABgBIABgBIAAgCIABgBIABgBIAAgCIABgBIABgBIABgCIAAgBIABgBIABgCIAAgBIABgBIABgCIAAgBIABgBIABgCIAAgBIABgCIABgBIABABIABgCIAAgBIABgBIABgCIAAgBIABgBIABgCIAAgBIABgCIABgBIABgBIAAgCIABgBIABgBIABABIABgCIAAgBIABgBIABgCIABgBIAAgBIABgCIABgBIABAAIABgBIABgBIAAgCIABgBIABgBIAAgCIABgBIACABIAAgCIABgBIABgCIAAgBIABgBIABgCIAAgBIABgBIABABIABgCIAAgBIABgBIABgCIABgBIAAgBIACAAIAAgBIABgCIABgBIABgBIAAgCIACABIAAgBIABgCIABgBIAAgCIABgBIABgBIABABIABgCIAAgBIABgBIABgCIAAgBIABgBIACAAIAAgBIABgCIABgBIAAgBIACABIABgCIAAgBIABgBIABgCIAAgBIABABIABgCIABgBIAAgCIABgBIACABIAAgCIABgBIABgBIAAgCIABgBIACABIAAgBIABgCIABgBIAAgCIACABIABgBIAAgCIABgBIABgBIABABIAAgCIABgBIABgBIAAgCIACABIABgCIAAgBIABgBIABAAIABgBIABgCIABgBIAAgBIABABIABgCIABgBIAAgBIABgCIACABIAAgCIABgBIABgBIAAgCIACABIAAgBIABgBIABgCIABABIABgBIAAgCIABgBIABAAIABgBIABgBIABgCIABABIABgBIAAgBIABgCIACABIAAgCIABgBIABgBIABAAIAAgBIABgCIABgBIABABIABgBIABgCIAAgBIACABIABgCIAAgBIABABIABgBIABgCIAAgBIACAAIABgBIAAgBIACAAIAAgBIABgCIABABIABgBIABgBIAAgCIACABIAAgBIABgCIACABIAAgBIABgCIABgBIABABIABgCIABgBIABAAIAAgBIABgBIABABIABgCIABgBIABABIABgCIABgBIABABIAAgBIABgCIACABIAAgCIABgBIACAAIAAgBIABgBIABABIABgCIAAgBIACABIAAgCIABgBIACAAIAAgBIABgBIACABIAAgCIABgBIABAAIABgBIABABIABgBIABgCIABABIABgBIAAgCIABABIABgCIACABIAAgBIABgBIACAAIAAgBIABgCIABABIABgBIABABIABgCIABABIABgCIABgBIABABIABgBIABAAIABgBIAAgBIACABIAAgCIACABIABgCIABABIAAgCIABgBIACABIAAgBIACAAIAAgBIABAAIABgBIACABIAAgBIACAAIABgBIAAgBIACABIAAgCIABABIABgCIACABIAAgCIACABIAAgBIABABIABgCIACABIAAgBIACAAIABgBIABABIAAgCIACABIAAgBIACAAIABgBIABABIABgBIABAAIABgBIABAAIABgBIABABIABgBIABAAIABABIABgCIACABIAAgBIABAAIACABIABgBIABABIABgCIABABIABgCIABABIABABIABgBIACABIAAgCIABABIACAAIAAgBIACABIABAAIABgBIABABIACAAIAAgBIACABIABABIABgCIABABIACAAIAAgBIABABIACAAIABABIABgBIABABIABAAIABgBIACABIABAAIABABIABgBIABAAIACABIABABIABAAIABgBIACABIABABIABAAIACABIAAgBIABAAIACABIABABIACAAIABABIABABIACAAIAAgBIABABIACAAIABABIABABIACAAIABABIACABIABABIABAAIACABIABABIABAAIACABIABABIABAAIACABIABABIABAAIACABIABABIABABIACAAIABABIABABIAAABIAAABIACABIABAAIABABIACABIABAAIABABIACABIABABIAAABIABABIABAAIACABIABABIABAAIgBABIACABIABABIABAAIACABIABABIAAABIABABIABABIACAAIABABIABABIgBABIACABIABABIABAAIACABIABABIAAABIABAAIABABIACABIABABIAAABIABABIABAAIACABIABABIgBABIABABIACABIABAAIABABIAAABIABABIACAAIABABIABABIABABIAAABIABABIABAAIACABIABABIgBABIACABIABABIACAAIABABIgBACIACAAIABABIABABIABAAIAAABIABABIABABIACAAIABABIAAACIABAAIABABIACABIABAAIABABIAAACIABAAIACABIABABIAAAAIAAABIACABIABABIABABIABABIAAABIACAAIABABIABABIACAAIAAACIAAABIABAAIACABIABABIABAAIABABIAAABIACABIABABIABAAIACABIABABIgBABIACABIABABIACAAIABABIABABIACAAIgBACIABAAIABABIACABIABABIABAAIACABIABABIABABIAAABIABABIACAAIABABIABABIACAAIAGAEIACAAIABABIABABIACABIABAAIABABIABgCIABABIACABIABABIABAAIACABIABABIABAAIACABIABgBIABAAIABABIACABIABAAIABABIACABIAAgCIACABIABABIABAAIACABIABABIABgBIABAAIABABIACABIABAAIABABIABgBIACAAIABABIABABIACAAIABABIABgBIABAAIABABIACABIABAAIABgBIABABIACABIABAAIABABIABgBIABAAIACABIABABIABAAIACABIAAgBIABAAIACABIABABIACAAIABgBIABABIABABIACAAIABABIAAgBIACAAIABABIABABIACAAIAAgBIACABIABAAIABABIACABIABgCIABABIABABIACAAIABABIABgBIABABIABAAIACABIABABIABgCIABABIACABIABAAIABABIABgBIABAAIACABIABABIABAAIABgBIABABIACABIABAAIABABIACABIABgCIABABIABABIACAAIABABIABABIABgCIABABIACABIABAAIABABIACABIABgBIABAAIABABIACABIABABIABAAIABgBIABAAIACABIABABIABABIACAAIABABIABABIABgCIABABIABAAIACABIABABIACABIABAAIABABIACABIABAAIABABIACABIABAAIABgBIABABIACAAIABABIABABIACAAIgBACIABABIABAAIACABIABABIABAAIACABIABABIABAAIACABIABABIACABIABAAIABABIAAABIABABIABABIACABIABAAIABABIAAABIABABIACABIABAAIABABIgBABIACABIABABIABAAIABABIAAABIACABIABABIAAABIAAABIACABIABAAIAAABIABABIABABIABABIAAABIABABIABABIAAABIABABIABAAIAAABIABABQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABIABABIAAABIABABIABABIAAABIABABIABAAIgBACIABABIAAABIACABIABABIgBABIABAAIAAABIABABIAAACIABAAIABABIgBACIABAAIAAABIABABIAAABIABABIgBACIABABIAAABIACAAIgBABIABABIgBACIACAAIABABIAAACIAAAAIAAABIABABIAAABIAAABIAAACIAAABIABAAIAAACIAAABIAAABIABABIAAABIABABIAAABIAAABIAAABIABABIAAABIAAABIAAABIAAACIABAAIAAACIAAAAIAAABIABABIAAACIgBABIABABIAAABIABABIgBABQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABIgBACIABAAIAAABIABABIgBACIABABIAAABIgBABIABABIAAABIAAABIABABIgBACIABAAIAAABIgBACIABABIAAABIABABIAAABIgBABIABABIgBABIgBABIABABIAAACIABABIAAABIgBABIABABIAAABIgBACIABABIAAABIgBABIABABIAAABIgBABIABABIAAABIgBACIABABIAAABIgBABIABABIAAAAIgBABIABACIAAABIgBABIABABIgBABIAAABIABABIAAABIgBACIgBABIABABIAAABIgBABIABABIAAABIgBACIgBABIABABIAAABIgBACIABAAIAAABIgBACIAAABIABABIAAABIgBACIABABIgBABIgBABIAAABIABABIAAABIgBACIABAAIAAACIgBABIgBACIABAAIAAABIgBACIgBABIABABIAAACIgBABIAAABIAAABIAAABIAAABIgBACIABABIgBABIAAABIgBABIABABIAAACIgBABIgBABIABABIAAABIgBACIAAABIgBABIACABIgBABIgBABIAAACIAAABIAAABIgBACIgBABIAAABIABABIAAABIgBABIgBACIABABIAAABIgBABIAAACIgBABIABABIgBABIgBABIAAACIABABIAAABIgBABIgBABIAAACIAAAAIAAACIAAABIgBACIgBABIAAABIABABIgBABIgBACIgBABIAAABIABABIAAACIgBABIgBABIgBACIAAABIABABIAAABIgBABIgBACIAAABIAAABIAAABIAAABIgBABIgBACIAAABIABABIgBACIgBABIgBABIAAACIgBABQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAAABIgBABIgBABIAAACIgBABIgBACIABAAIAAACIAAABIgBACIgBABIgBABIAAACIABAAIgBABIgBACIAAABIgBACIgBABIABABIAAABIgBABIAAABIgBACIgBABIAAABIgBACIgBABIABABIAAACIgBABIAAABIgBACIgBABIAAABIgBACIgBABIABAAIgBACIAAABIgBACIgBABIAAABIgBACIgBABIAAABIABABIgBABIAAABIgBACIgBABIAAABIgBACIgBABIAAACIgBABIgBABIgBACIAAABIgBABIACABIgBACIgBABIgBABIAAACIgBABIgBABIAAACIgBABIgBABIAAACIgBABIgBABIAAACIgBABIgBACIgBABIAAABIgBACIgBABIAAABIgBACIgBABIAAABIgBACIgBABIAAABIgBACIgBABIgBABIAAACIgCACIAAACIgBABIgBACIAAABIgBABIgBACIgBABIAAABIgBACIgBABIAAABIgCgBIAAACIgBABIgBABIgBACIAAABIgBABIgBACIAAABIgBABIgBACIAAABIgBABIgCAAIAAABIgBACIgBABIAAABIgBACIgBABIgBAAIAAABIgBABIgBACIgBABIgBABIgBgBIAAACIgBABIgBABIgBABIgBAAIgBACIAAABIgBABIgBAAIgBABIgBACIAAABIgBAAIgBAAIgBACIgBABIgBgBIgBACIgBABIAAABIgBgBIgBACIgBABIgBAAIgBABIgBABIgBAAIgBABIgBABIgBAAIgBABIAAABIgBAAIgBABIgCgBIAAABIgBABIgCAAIAAACIgBgBIgBACIgBAAIgBAAIgBABIgBAAIgBABIgBgBIgBABIgBAAIgBABIgBAAIgBABIgCgBIAAABIgBAAIgBABIgBAAIgBAAIgCAAIAAABIgBAAIgBABIgCgBIgBAAIgBABIgBAAIgBAAIAAAAIgBAAgADfE8IABABIABgCIABABIABgBIACAAIABABIABgBIABAAIAAgBIACAAIABgBIABABIABgBIABgCIABABIAAgCIACABIAAgBIABgBIACAAIAAgBIABgBIABAAIABgBIAAgCIACABIABgBIAAgBIABgCIABABIABgCIABgBIABgBIABABIABgCIAAgBIABgBIABAAIABgBIABgCIAAgBIACABIAAgCIABgBIABgBIAAgCIABgBIABgBIABABIABgCIABgBIAAgCIABgBIABgBIABgCIABABIAAgBIABgCIABgBIAAgBIABgCIABgBIAAgCIABgBIABgBIAAgCIABgBIABgBIABABIABgCIABgBIAAgBIABgCIABgBIABgBIAAgCIABgBIABgBIAAgCIABgBIABgBIAAgCIABgBIABgCIAAgBIABgBIABgCIABgBIAAgBIABgCIABgBIAAgBIABgCIABgBIAAgBIABgCIABgBIgBgBIAAgBIABgCIAAgBIABgBIABgCIAAgBIABgCIABgBIABgBIAAgCIABgBIABgBIAAgCIABgBIgBAAIABgCIAAgBIABgCIABgBIABgBIAAgCIABgBIABgBIAAgCIABgBIgCgBIABgBIABgCIABgBIAAgBIABgCIABgBIAAgBIAAgBIAAgBIAAgCIABgBIABgBIAAgCIABgBIABgBIAAgCIgBAAIABgCIABgBIAAgBIABgCIABgBIABgBIgCgBIABgCIAAgBIABgBIABgCIABgBIAAgBIgBgBIAAgBIABgCIABgBIABgBIAAgCIgBAAIAAgCIABgBIABgCIAAgBIABgBIABgCIgBgBIABgBIAAgBIABgBIABgCIAAgBIAAgBIAAgBIAAgBIABgCIABgBIAAgBIgBgBIABgCIAAgBIABgBIABgCIgBAAIAAgBIABgCIABgBIAAgCIABgBIgBgBIAAgBIABgCIABgBIAAgBIAAgBIAAgBIAAgBIABgCIABgBIgBgBIAAgBIABgBIABgCIAAgBIgBgBIABgBIAAgCIABgBQgBAAAAgBIAAgBIABgBIABgCIAAgBIgBgBIAAgBIABgBIABgCIgBgBIABgBIAAgBIABgCIABgBIgBgBIAAgBIABgBIAAgCIgBAAIAAgCIABgBIABgCIgBAAIAAgBIABgCIABgBIgBgBIAAgBIABgBIAAgCIAAgBIAAgBIAAgBIABgCIgBgBIABgBIAAgBIABgBIgBgBIAAgCIABgBIgBgBIAAgBIABgBIABgCIgBAAIAAgBIAAgCIAAgBIAAgBIABgBIABgCIgBgBIAAgBIAAgBIAAgBIAAgBIAAgCIABgBIgBgBIABgBIAAgBIAAgBIAAgBIAAgBIgBgBIABgCIAAgBIgBgBIABgBIABgBIgBAAIAAgBIAAgCIAAgBIAAgBIAAgBIAAgBIAAgBIAAgBIgBgBIABgCIABgBIgBgBIAAgBIABgBIgBgBIAAgBIAAgBIAAgBIAAgCIgBgBIAAgBIABgBIgBgBIAAgBIABgCIgBgBIABgBIgBAAIAAgBIAAgCIAAgBIAAgBIAAgBIgBgBIABgBIgBgBIAAgCIgBgBIAAgBIABgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIABgBIgBgBIAAgBIgBgBIABgBIgBgBIAAgBIgBgBIAAgCIgBgBIAAgBIABgBIgBAAIABgCIgBgBIAAgBIgBgBIAAgBIgBgBIABgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAAAIAAgBIgBgBIAAgBIgBgBIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIgBgBIABgBIgCgBIgBgBIAAgBIgBgBIABgBIgCgBIABgBIgBAAIgBgBIAAgCIgBAAIgBgBIAAgBIgBgBIAAgBIgBgBIgBgBIAAgBIgBgBIgBgBIABgBIgCgBIgBAAIgBgBIAAgCIgBAAIgCgBIABgBIgCgBIgBAAIAAgBIAAgBIgCgBIgBgBIgBgBIgCAAIABgCIgBAAIgCgBIgBgBIgCgBIgBAAIAAgBIAAgBIgCgBIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIgBgBIgBAAIgCgBIgBgBIgBAAIgCgBIgBgBIgBAAIgCgBIgBgBIgCgBIgBAAIgBgBIgCgBIgBABIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIgBAAIgBABIgBgBIgBAAIgCgBIgBgBIgBAAIgBAAIgCAAIgBAAIgBgBIgCgBIgBAAIgBAAIgBAAIgBgBIgCAAIgBgBIgBgBIgBABIgBAAIgBgBIgCAAIgBgBIgBABIgCAAIgBgBIgBgBIgCAAIAAAAIgBAAIgCAAIgBgBIgBgBIgBABIgBAAIgCgBIgBgBIgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAgBAAIgBAAIgBAAIgBgBIgCgBIgBAAIgBABIgBgBIgBAAIgCgBIgBgBIgBABIgBAAIgCgBIgBgBIgBgBIgBABIgBAAIgCAAIgBgBIgBgBIgBABIgBAAIgCgBIgBAAIgBgBIgBABIgCgBIgBAAIgBgBIgCgBIgBgBIAAACIgCgBIgBAAIgCgBIgBgBIgBACIgBgBIgCgBIgBAAIgBgBIgBABIgBAAIgBgBIgCgBIgBAAIgCgBIgBgBIgBABIgBAAIgBgBIgBgBIgCgBIgBAAIgBgBIgBACIgCgBIgBgBIgCgBIgBAAIgBgBIgCgBIAAABIgBAAIgCAAIgBgBIgBgBIgCgBIgBAAIgCgBIgBgBIgBAAIgBABIgCgBIgBgBIgBAAIgCgBIgBgBIgBgBIgLgFIgBgBIgCAAIgBgBIgCgBIAAAAIAAgCIgBAAIgCgBIgBgBIgBAAIgCgBIgBgBIgBAAIgBgBIAAgCIgBAAIgCgBIgBgBIgCAAIgBgBIgBgBIgBgBIAAgBIgBgBIgBAAIgCgBIgBgBIgBAAIAAgBIgBgBIgCgBIgBgBIgBAAIgCgBIgBgBIABgBIgCgBIgBAAIgBgBIgCgBIABgBIgBgBIgCgBIgBAAIgBgBIgBgBIAAgBIgBgBIgCgBIgBAAIgBgBIABgBIgCgBIgBgBIgCAAIgBgBIABgBIgCgBIgBgBIgBAAIgBgCIAAgBIgCAAIgBgBIgBgBIgCAAIABgBIgBgBIgBgBIgCgBIgBAAIAAgCIgBAAIgBgBIgCgBIgBgBIABgBIgBgBIgCAAIgBgBIgBgBIAAgBIgBAAIgCgBIgBgBIgBgBIAAgBIgBgBIgBAAIgCgBIgBgBIABgBIgCgBIgBgBIgBAAIgBgBIAAgCIgBAAIgCgBIgBgBIgBAAIgBgBIAAgBIgCgBIgBAAIgBgBIgCgBIAAgBIAAgBIgBgBIgCAAIgBgBIAAgBIgBgBIAAgBIgCgBIgBAAIgBgBIgCgBIgBgBIgBAAIABgBIgCgBIgBgBIgBAAIgCgBIgBgBIgCAAIgBgBIgBgBIgCAAIgBgBIgBgBIAAgBIgBgBIgBgBIgCAAIgBgBIgCgBIgBgBIgBAAIgBABIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIgBgBIgCAAIgBgBIgBgBIgBABIgCAAIgBgBIgBgBIgCAAIgBgBIAAABIgCAAIgBgBIgCgBIgBAAIgBABIgBgBIgCAAIAAABIgBgBIgCgBIgBAAIgBABIgBgBIgBAAIgBABIgCAAIgBgBIgBABIgBAAIgBgBIgBABIgBgBIgBAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgBAAIgBABIgBAAIgBgBIgBABIgBAAIgBABIgBAAIgBgBIgBABIgBAAIgBABIgCgBIgBABIgBAAIAAABIgCAAIgBgBIgBABIgBAAIgBABIgBgBIgBABIgBAAIgBABIgBAAIgBAAIgBAAIgBABIgBAAIgBABIgBAAIgBABIgCgBIAAABIgBABIgBAAIgBABIgBAAIgBABIgBgBIgBABIgBAAIgBACIgBAAIgBAAIgBABIgBAAIgBABIgBAAIgBABQAAAAAAAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgBAAIgBABIgBAAIgBACIgBgBIgBABIAAABIgCAAIAAABIgBABIgBAAIgBAAIgCAAIAAACIgBABIgBgBIgBACIgBAAIgBAAIgBABIgBAAIgBABIAAABIgBAAIgBACIgBAAIgBAAIgBABIgBABIgBAAIgBABIgBABIgBAAIgBABIAAABIgCAAIAAABIgBABIgBAAIgBACIgBAAIgBAAIgBABIgBABIgBAAIAAABIgBABIgCAAIAAACIgBABIgBgBIgBABIgBACIAAABIgCAAIAAABIgBABIgBgBIgBACIgBABIgBABIgBAAIgBABIAAABIgCAAIgBABIAAACIgBAAIgBAAIgBABIAAACIgCgBIgBACIAAABIgBABIgBgBIgBACIgBABIgBABIgBAAIAAABIgBACIgBABIgBgBIgBACIgBABIAAABIgCgBIAAACIgBABIgBABIgBAAIAAABIgBACIgBABIgBgBIgBABIgBACIAAABIgBABIgCAAIAAABIgBACIgBABIgBgBIgBACIgBABIAAACIgBAAIgBAAIgBABIAAACIgBABIgCgBIAAACIgBABIgBABIgBABIgBAAIgBACIAAABIgBABIAAABIgCAAIAAABIgBABIgBACIgBABIgBAAIgBABIAAABIgBACIgBABIgBgBIgBABIgBACIAAABIgBABIgBABIgBAAIAAACIgBABIgBABIgBABIgBAAIgBACIAAABIgBABIgBACIgBAAIgBAAIgBABIAAACIgBABIgBABIAAACIgCgBIgBACIAAABIgBABIgBACIAAABIgBAAIgBAAIgBACIAAABIgBABIgBACIgBABIgBABIgBAAIAAABIgBACIgBABIgBABIAAACIgBABIgBgBIgBACIgBABIAAACIgBABIgBABIgBACIAAABIgBAAIgBAAIgBACIAAABIgBABIgBACIAAABIgBABIgBACIgBABIgBAAIgBABIAAABIgBACIgBABIAAABIgBACIgBABIgBABIAAACIgBABIgBgBIgBABIgBACIgBABIAAABIgBACIgBABIAAABIgBACIgBABIAAACIgBABIgBABIAAACIgBABIgBgBIgBACIgBABIAAABIgBACIgBABIAAACIgBABIgBABIAAACIgBABIgBABIgBACIAAABIgBABIgBACIAAABIgBABIgBACIAAABIgBABIgBACIAAABIgBABIgBACIgBABIAAACIgBABIgBABIAAACIABAAIgBABIgBACIAAABIgBABIgBACIAAABIgBACIgBABIgBABIAAACIgBABIgBABIABACIAAABIgBABIAAABIgBACIgBABIAAABIAAABIAAABIAAACIgBABIgBABIAAACIgBABIABABIgBABIAAACIgBABIABABIAAABIgBABIgBACIABAAIAAABIgBACIAAABIABABIgBABIgBACIABABIAAABIgBABIABABIAAABIAAABIAAABIAAABIAAABIABAAIgBACIABABIAAABIABABIAAABIAAABIAAABIABABIAAABIABABIAAABIABABQABAAgBABIAAABIACAAIABACIAAABIABAAIABABIgBACIACAAIABABIABABIACAAIABABIABABIACAAIABABIABABIACABIABAAIABABIACABIABAAIABgBIABAAIACABIABABIACABIABAAIAAgBIACAAIABABIABABIABgBIACABIABAAIABABIABgCIABABIACABIAAgCIACABIABABIABgCIABABIACABIABAAIAAgBIACABIABABIABgCIABABIACABIAAgCIACABIABAAIABgBIABABIABgBIABAAIACABIAAgBIABAAIACABIAAgBIACABIABAAIABgBIABABIABgCIABABIACAAIABgBIABABIAAgBIACAAIABABIABgCIABABIABABIABgCIACABIAAgBIABABIABgCIACABIABABIABgCIABABIAAgBIACABIABAAIABgBIACAAIAAgBIABABIABgCIACABIABABIABgBIABAAIAAgBIACAAIABgBIABABIABgBIABAAIABABIABgCIABABIABgBIACAAIAAgBIABABIABgBIACAAIABABIABgCIABABIAAgBIACAAIABgBIABABIABgBIABAAIABABIABgCIACABIAAgBIACABIAAgCIABABIABgBIACAAIAAgBIACABIABgCIABABIABABIABgCIABABIABgCIABABIABgBIABABIABgCIABABIABgBIABAAIABgBIABABIABgCIABABIACABIABgCIABABIAAgBIACABIAAgCIACABIABgCIABABIAAgBIACAAIABgBIABABIABgBIABAAIABABIABgCIABABIABgBIACABIAAgCIABABIABgCIACABIABABIABgBIABABIAAgCIACABIABgCIABABIACABIAAgCIABABIABgBIABABIACAAIABgBIABAAIABABIABgBIABAAIABgBIABABIACABIAAgCIACABIAAgCIACABIABABIABgBIABAAIACABIABABIAAgCIACABIABABIABgCIABABIACABIAAgCIACABIABABIABgBIABAAIABABIABgCIACABIABABIABABIABgCIABABIABAAIACABIABgBIABABIACAAIAAgBIABABIACAAIABABIABgBIABAAIABABIACABIABgBIABAAIABABIACABIAAgCIACABIABABIABAAIACABIAAgBIABAAIACABIABABIABAAIABgBIACAAIABABIACABIABABIAAgBIACAAIABABIABABIACAAIABABIABgBIABAAIACABIABABIACAAIABABIAAgBIACAAIABABIABABIACAAIABABIABABIABgBIABAAIACABIABABIABAAIACABIABABIABABIACAAIABABIABgCIABABIACABIABABIACAAIABABIABABIACAAIABABIABABIACAAIABABIABABIACAAIABABIAAgBIACAAIABABIACABIABAAIABABIACABIABABIABAAIACABIAAABIABAAIACABIABABIABAAIACABIABABIABAAIABABIAAACIACAAIABABIABABIACAAIABABIABABIACABIABAAIABABIACABIABAAIABABIACABIAAABIAAABIACABIABAAIABABIACABIABAAIABABIACABIABAAIABABIAAABIABABIACABIABAAIABABIACABIgBABIABABIACAAIABABIABABIACABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAAABIACAAIABABIABABIACABIABAAIgBABIACABIABABIABAAIABABIAAACIABAAIACABIABABIgBABIACABIABAAIABABIABABIAAABIACABIABABIABAAIABABIAAABIABABIABABIAAABIABABIACAAIABABIgBACIACAAIABABIABABIgBABIACAAIABABIAAACIABAAIABABQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABIABABIABAAIAAACIABAAIABABIAAABIABABQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAAAIAAABIABABIABABIAAABIABABIABAAIAAACIABAAIABABIAAACIABAAIABABIAAABIABABIgBABIACABIABABIAAABIABABIABABIgBABIABAAIAAACIACAAIABABIgBABIABABIAAACIABAAIABABIAAACIABAAIAAABIAAABIAAABIABABIAAACIABAAIgBABIACABIgBACIACAAIABABIgBABIABABIAAABIABABIAAABIAAABIAAABIABACIAAABIABAAIAAABIABABIgBACIABAAIAAACIABAAIABABIAAABIABABIgBABIABABIAAACIABAAIAAABIABABIgBABIABABIAAACIABABIAAABIABABIgBABIACAAIAAABIAAABIABABIAAACIABAAIAAABIAAABIAAABIABACIAAABIABAAIgBABIACABIABABIAAABIABABIgBABIABABIAAACIABAAIAAABIABABIABABIgBABIABABIAAABIABABIAAABIABABIgBABIACABIABABIAAABIABABIgBABIABABIAAABIABABIABABIAAABIABABIgBABIABABIAAABIACABIABABIgBABIABABIAAABIABABIABAAIAAABIAAABIAAACIACAAIgBACIACAAIABABIgBABIACABIAAABIAAABIABABIAAABIABABIABABIAAABIABABIgBABIACAAIABACIAAABIABAAIABABIgBACIACAAIABABIAAABIABABIgBABIACABIAAABIAAABIABABIABAAIAAABIACABIABABIgBABIABABIACABIABABIAAABIABABIABABIAAABIABAAIABABIgBABIACABIABABIABABIAAABIABAAIACABIAAABIAAABIABABIACABIABAAIABABIAAABIABABIACABIABAAIABABIACABIABAAIABABIACABIABAAIABABIACABIABAAIACABIABABIABABIACAAIAAgBIABABIACABIABgCIABABgACzBnIgCAAIgBAAIgBAAIgBAAIgBABIgBAAIgCgBIgBgBIgBABIgBgBIgBAAIgBgBIgCgBIgBAAIgCgBIgBgBIgBAAIgCgBIgBgBIgBAAIgBgBIAAgBIgBgBIgCgBQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgBIgCAAIgBgBIABgCIgCAAIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIgBgBIABgBIgBgBIAAgBIgBgBIAAgCQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgBIAAgBIgBgBIAAgBIABgBIgBgBIABgBIABgCIgBgBIAAgBIAAgBIABgBIABgCIgBgBIAAgBIABgBIAAgBIABgCIABgBIABgBIAAgCIACABIAAgBIABgCIABgBIAAgCIACABIABgBIAAgCIABABIABgBIABgBIABAAIABgBIABgCIABABIABgBIABABIABgCIABABIABgCIABABIABgBIABAAIABgBIABABIABgCIABABIACABIABgCIABABIABABIABgBIABAAIACABIABABIAAgCIACABIABABIABAAIACABIABABIABAAIACABIABABIACABIABAAIABABIABABIAAABIABABIACABIABAAIAAABIABABIAAABIAAABIACABIABABIgBABIABABIAAABIABABIAAABIABABIAAABIAAABIAAABIABABIAAABIAAABIAAABIAAACIABAAIgBABIgBACIACABIgBABIgBABIABABIAAABIAAACIgBABIgBABIAAACIABAAIgBACIgBABIgBABIAAACIgBABIgBgBIgBACIAAABIgBACIgBABIgBABIgBAAIgBABIAAABIgCgBIgBACIAAABIgBAAIgBABIgBABIgBgBIgBABIgBAAIgBABIgBAAIgBABIgBgBIgBABIgBAAIgBABIgCAAIAAABIgBgBgAELBKIgBgBIgCAAIAAABIgBgBIgCgBIgBAAIgBABIgBAAIgCgBIgBgBIgBgBIgCAAIgBgBIgCgBIgBAAIgBgBIgBgBIAAgBIgBgBIgBgBIgBAAIAAgBIgBgBIgBgBIAAgBIgCgBIAAgBIAAgBIgBgBIAAgBIgBgBIgBgBIAAgBIgBgBIABgBIgBgBIAAgBIABgBIgCgBIABgBIgBgBIABgBIgBgBIAAgBIAAgCIAAgBIAAgBIAAgBIABgBIgBgBIAAgCIABgBIABgBIAAgCIABgBIABgBIgBgBIAAgBIABAAIABgBIABgCIAAgBIABgBIABgCIABgBIABABIABgBIAAgCIABgBIACABIAAgCIABgBIACABIAAgCIABgBIABABIABgCIABABIABgCIABABIABgBIABABIABgCIABABIABgBIABAAIABgBIABABIACABIAAgCIACABIABAAIABgBIABABIABAAIACABIABgBIABAAIABABIACABIABAAIABABIACABIAAgBIABAAIAAABIABABIACABIABABIABAAIACABIAAABIAAABIABABIACAAIABACIAAABIABAAIABABIAAACQABAAgBAAIAAABIACABIABABIgBABQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAAAIAAABIABABIAAABIABABIgBABIgBACIACAAIgBABIABABIAAACIgBABIABABIAAABIgBABIABABIAAACIgBABIgBABIABABIAAABIgBACIAAABIgBABIgBACIAAABIgBABIgBACIAAABIgBABIgCAAIAAABIgBACIgBABIgBgBIAAABIgBACIgBABIgBAAIgBABIgBgBIgBABIgBABIgBAAIgBABIgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgBAAIgBABIgBAAIgBABIgBgBIgBABIgBAAIgCAAIgBABIgBgBIgBABIAAAAIgBAAgACQALIgBgBIgBABIgBAAIgBgBIgCgBIAAABIgCAAIgBgBIgCAAIgBgBIgBgBIgCAAIgBgBIgBgBIgCgBIAAgBIAAgBIgBAAIgCgBIgBgBIAAAAIgBgBIgBAAIgBgBIAAgBIgBgBIABgCIgCAAIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIgBgBIAAgCIAAAAIAAgBIgBgBIAAgBIAAgBIAAgCIAAgBIgBgBIAAgBIABgBIgBgBIABgCIABgBIAAgBIABgCIgCAAIABgBIABgCIAAgBIABgBIABgCIABgBIAAgCIABgBIABgBIAAgCIACABIABgBIAAgCIABgBIABABIABgBIAAgCIACABIABgCIAAgBIACABIAAgBIABAAIABgBIABgCIABABIABgBIABABIABgCIABABIABgCIABABIACABIABgBIABAAIABgBIABABIABAAIABgBIABAAIABABIACABIABgCIABABIABABIACAAIABABIACABIABABIAAgBIACAAIgBABIACABIABABIABAAIACABIABABIABAAIgBACIACABIABAAIABABIAAABIABABIABABIAAABIABABQABAAAAABIAAABIABABIAAABIAAABIAAABIABABIAAABIABABIAAABIAAABIAAABIABABIAAABIgBABIABABIAAACIgBABIABABIAAABIgBABIAAACIAAAAIAAACIgBABIgBACIAAABIgBABIgBACIAAABIgBABIgBACIAAABIgBABIgBABIAAAAIgBAAIgBABIgBACIgBABIgBAAIgBABIgBgBIgBABIAAABIgCAAIAAACIgCgBIgBABQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAIgBAAIgBABIgBAAIgBgBIgBABIgBgBIgBABIgBAAIgBABIgBAAIgCgBIgBABgADwgSIgCgBIAAABIgBAAIgCAAIgBgBIgBABIgBAAIgCgBIgBgBIgBAAIgCgBIAAABIgCgBIgBgBIgBAAIgCgBIABgBIgCgBIgBAAIgBgBIgCgBIAAgBIAAgBIgBgBIgCAAIgBgBIAAgBIgBgBIgBgBIAAgBIAAgBIAAgBIgBgBIgBgBIAAgBIgBAAIAAgCIgBgBIABgBIgCgBIABgBIABgCIgBAAIAAgBIgBgBIAAgBIABgCIgBAAIAAgCIABgBIABgCIgCAAIABgBIABgCIAAgBIABgCIgBAAIAAgBIABgCIABgBIAAgBIABgCIABgBIABAAIABgBIABgBIAAgCIABgBIABgBIABAAIABgBIABgCIABABIAAgBIABgBIABAAIABgBIACAAIAAgBIABgBIACABIAAgCIABABIABgBIABABIABgCIACABIABAAIAAgBIACABIABgCIABABIABABIABgBIABAAIACABIAAgCIACABIABABIABABIACAAIABgBIABAAIABABIACABIABAAIABABIACABIABABIABABIgBABIACAAIABABIABABIABABIAAABIACABIABAAIgBABIACABIAAABIAAABIABABIAAACIABAAIABABIAAABIABABIAAABIABABIgBABIABABIAAABIgBABIACABIgBACIABABIgBABIAAABIAAABIAAABIAAACIgBABIABAAIAAACIgBABIgBACIAAABIABABIgBABIgBABIAAABIgBACIgBABIAAABIgBAAIgBABIgBACIgBABIgBABIgBAAIAAABIgBACIgBAAIgBAAIgBABIgBABIgBAAIgBABIgBgBIgBACIgBgBIgBACIAAABIgBAAIgCAAIgBAAIgBgBIgBACIgBgBIgBABIgBAAIgBABIgBgBgAh4gwIgCgBIgBABIgBAAIgCgBIAAABIgBgBIgCAAIgBABIgBgBIgBAAIgCgBIgBABIgBAAIgBgBIgBAAIgBAAIgBAAIgCAAIgBgBIgBgBIgCAAIgBgBIgBgBIgCgBIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIgBAAIgBgBIgBgBIAAgBIgCgBIgBgBIgBAAIAAgCIgBgBIgCAAIgBgBIABgBIgBgBIgCgBIABgBIgBgBQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgBIgBAAIgBgBIAAgCIgBAAIAAgBIgBgBIgBgBIAAgBIgBgBIABgBIgBgBIAAgBIgBgBIAAgBIgBgBIABgBQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgBIgBAAIAAgBIgBgBIABgCQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgBIABgBIgBgBIAAgBIABgBIgCgBIABgBIgBgBIABgBIAAgCIABgBIgBgBIAAgBIABgCIABgBIgCgBIABgBIABgBIAAgCIABgBIgBgBIABgBIAAgBIABgCIgBAAIAAgCIgBAAIgBgBIgCgBIgBAAIgBgBIgCgBIABgBIgCgBIgBgBIgBgBIABgBIgCgBIgBAAIgBgBIAAgBIgBgBIAAgBIgBgBIgBgBIABgBIgCgBIgBAAIAAgBIAAgBIAAgCIgBAAIAAgCIgBgBIgBgBIAAgBIgBAAIABgBIgBgBIAAgCIgBgBIAAgBIABgBIgBAAIAAgCIgBgBIABgBIgBgBIAAgBIAAgBIgBgBIABgCIgBgBIAAgBIABgBIgBgBIAAgBIABgBIgBgBIAAgBIABgCIABgBIgBgBIAAgBIABgBIABgCIgBgBIAAgBIABgBIAAgCIABgBIABgBIAAgCIABgBIABgBIAAgCIABgBIABgCIAAgBIABgBIABgCIABgBIAAgBIABgCIABABIABgBIABgBIABgCIAAgBIABAAIABgBIABgBIAAgCIACABIAAgBIABgBIACAAIAAgBIABAAIABgBIABgBIABABIABgCIABgBIABAAIABgBIABABIABgBIABAAIABgBIABAAIABgBIABABIABgBIABAAIABgBIABAAIABgBIACABIAAgBIABAAIACABIAAgBIACAAIABgBIABAAIABABIABgBIABABIACABIAAgCIABABIACAAIABgBIABABIABAAIACABIAAgBIACABIABAAIABABIACABIABgCIABABIABABIACAAIABABIABgBIAAgBIABgCIABABIABgCIABgBIAAgBIABgCIABgBIABAAIABgBIABgBIABABIABgCIAAgBIABgBIABAAIABgBIABABIABgCIABgBIABABIABgCIABgBIABAAIABgBIABABIAAgBIACAAIABgBIABABIABgBIABgCIABABIAAgCIACABIABABIABgBIABAAIABgBIABAAIABgBIABABIABgCIACABIABABIAAgBIACAAIABABIABgCIABABIABABIABgCIACABIABABIAAgBIACAAIABABIACABIAAgCIABABIACABIABAAIABABIACABIABgCIABABIABABIACAAIABABIACABIABAAIABABIACABIABABIABAAIACABIgBABIABABIABABIACABIABAAIABABIAAABIABABIACABIABAAIgBABIACABIAAABIAAABIABABIABABIAAABIACABIABAAIAAACIABAAIAAABIAAACIABABIAAABIABAAIgBACIABAAIAAACIACAAIgBACIABABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAAABIgBABIABABIAAABIABABIAAABIABABIgBABIABABIAAABIgBABIABABIAAABIgBACIABABIAAABIgBABIABABIAAABIgBACIABABIAAABIgBABIgBABIABABIAAABIgBABIgBACIAAABIgBACIABAAIAAACIgBABIACABIABABIABAAIABABIAAABIABABIABABIACABIABAAIAAABIABABIAAABIAAABIACABIABAAIAAACIABABIABAAIAAABIABABIABABIgBABIACABIgBABIACABIABABIgBABIABABIAAABIABABIAAABIABABIABABIgBABIAAABIABABIAAABIAAABIAAACIABAAIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAABIAAACIAAABIAAABIAAABIAAABIAAABIAAACIgBABIABABIgBABIAAACIgBABIgBABIAAACIgBABIgBABIAAACIABAAIgBACIAAABIgBABIgCAAIAAABIgBACIgBABIAAABIgBACIgBABIAAAAIgBAAIgBACIgBABIAAABIgBABIgCAAIAAACIgBABIgCgBIAAABIgBABIgBAAIgBABIgBABIgBAAIgBACIgBAAIgBAAIgBABIgBAAIgBABIgBAAIAAABIgBABIgBgBIgCABIgBAAIAAABIgBAAIgBABIgCgBIgBABIgBAAIgBABIgBAAIAAABIgCAAIgBgBIgBABIgBgBIgBABIgBAAIgCgBIgBABIgBAAIgBgBIgBABIgBAAIgBgBIgCgBIAAABIgCAAIgBAAIgCgBIAAABIgBAAIgCgBIgBgBIgBAAIgCgBIgBgBIgBABIgBACIgBgBIgBABIgBACIAAABIgBABIgBACIgBgBIAAABIgBACIgBABIgBAAIgBABIgBABIgBgBIgBACIAAABIgCAAIAAABIgBABIgBgBIgBACIgBABIgBgBIgBABIgBAAIgBABIgBAAIgBABIgBABIgBAAIgBABIgBAAIgBAAIgBAAIgBABIgBAAIgBAAIgBAAIgBAAIgBABIgCAAIgBAAIgBAAIAAABIgBAAIAAAAgAiki7IAAACIgBABIgBACIgBABIAAABIABABIgBABIgBABIAAACIABABIAAABIAAABIAAABIABABIAAABIABABIgBABIABABIAAABIACABIABABIgBABIACAAIABABIABABIACAAIABABIAMAHIgBABIACABIABAAIABABIACABIABABIAAABIABABIgBABIABAAIABABIAAABIABABIAAACIAAAAIAAABIAAACIABABIgBABIABABIAAABIgBABIgBACIAAABIgBABIgGALIAAACIABAAIAAABIgBACIgBABIgBABIAAACIABABIAAABIgBACIABAAIAAABIABABIgBACQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAAABIABAAIAAABIABABIgBACIABAAIACABIABABIgBABIACABIABABIACAAIABABIABABIACAAIABABIAAgBIACAAIABABIABgCIABABIACABIAAgBIACABIABgCIABABIABgCIABABIAAgBIACABIABgCIAAgBIACAAIAAgBIABgBIABgCIABgBIAAgBIABgCIAFgJIABgCIAAgBIABABIABgCIABgBIAAgBIABgCIABABIABgBIACAAIAAgBIABgBIABABIABgCIABABIACAAIAAgBIACABIABgBIABAAIABABIACABIABAAIAAgBIACABIABAAIALAGIABABIACAAIABABIABABIACAAIABgBIABABIABAAIABgBIABABIACABIAAgCIABABIABgCIACABIAAgBIACAAIABgBIAAgBIABAAIABgBIABgBIAAgCIACABIAAgBIABgBIABgCIABgBIAAgCIgBAAIAAgCIABgBIABgCIgBAAIABgBIAAgCIgBgBIAAgBIAAgBIAAgBIgBgBIAAgBIgBgBIABgBIgCgBIgBgBIABgBIgCgBIgBAAIgBgBIAAgBIgBgBIgCAAIgBgBIgLgGIgBAAIgCgBIgBgBIgBAAIABgCIgCgBIgBAAIABgCIgCgBIgBAAIAAgBIAAgBIAAgBIgBgBIAAgCQgBAAABAAIAAgBIAAgCIgBgBIAAgBIABgCIABgBIABgBIgBgBIAAgBIABgBIABgCIAEgJIABgCIABgBIABgBIAAgCIgBAAIAAgBIABgCIgBgBIAAgBIABgCIgBAAIABgBIgBgBIAAgBIgBgCIAAgBIgBAAIAAgBIgBgBIgBgBIgBgBIAAgBIgBgBIgBAAIgCgBIgBgBIgBAAIgCgBIgBgBIgBgBIgBACIgCgBIgBAAIgBAAIgBAAIgBABIgBAAIgCgBIAAACIgBgBIgBABIgBABIgBAAIgBABIgBABIgBAAIgBABIAAABIgBACIgBABIgBgBIgBACIgGALIAAABIgBABIgBACIAAABIgBABIgBABIgBAAIgBABIgBAAIgBABIgBABIgBAAIAAAAIgCAAIgBABIgBAAIgBgBIgBABIgBAAIgBgBIgBABIgCAAIgBgBIgBAAIgCgBIgBgBIgLgFIgBgBIgBABIgBgBIgBAAIgCgBIgBgBIgBABIgBAAIgBgBIgCABIgBAAIgBgBIAAACIgCgBIgBABIgBABIgBAAIgBABIgBAAIgBABIAAABIgBABIgBAAIgBABg");
	this.shape.setTransform(39.625,0.0375);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(59));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-35.3,79.3,70.69999999999999);


(lib.Symbol9_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol7_1();
	this.instance.setTransform(12.2,0,1,1,0,0,0,12.2,0);
	this.instance.alpha = 0.2109;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},19).to({alpha:0.2109},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-12.2,24.3,24.5);


(lib.Symbol6_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance_1 = new lib.Symbol9_1("synched",0);
	this.instance_1.setTransform(239.7,0,1,1,0,0,0,12.2,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).wait(49).to({startPosition:9},0).to({scaleX:0.506,scaleY:0.506,startPosition:13},4).to({scaleX:1,scaleY:1,startPosition:25},12).wait(39).to({startPosition:24},0).to({_off:true},1).wait(155));

	// Layer_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_19 = new cjs.Graphics().p("A5IFKQgdAAAAgeIAApXQAAgeAdAAMAyvAAAQhZAWhEBFQhlBkAACPQAACPBlBkQA4A5BGAZg");
	var mask_graphics_20 = new cjs.Graphics().p("A5IFKQgdAAAAgeIAApXQAAgeAdAAMAyvAAAQhZAWhEBFQhlBkAACPQAACPBlBkQA4A5BGAZg");
	var mask_graphics_21 = new cjs.Graphics().p("A5HFKQgfAAAAgeIAApXQAAgeAfAAMAytAAAQhXAWhFBFQhlBkAACPQAACPBlBkQA5A5BGAZg");
	var mask_graphics_22 = new cjs.Graphics().p("A5HFKQgeAAAAgeIAApXQAAgeAeAAMAyuAAAQhZAWhEBFQhlBkAACPQAACPBlBkQA4A5BGAZg");
	var mask_graphics_23 = new cjs.Graphics().p("A5IFKQgdAAAAgeIAApXQAAgeAdAAMAyvAAAQhZAWhEBFQhlBkAACPQAACPBlBkQA4A5BHAZg");
	var mask_graphics_24 = new cjs.Graphics().p("A5HFKQgeAAAAgeIAApXQAAgeAeAAMAyuAAAQhZAWhEBFQhlBkAACPQAACPBlBkQA4A5BGAZg");
	var mask_graphics_25 = new cjs.Graphics().p("A5HFKQgeAAgBgeIAApXQABgeAeAAMAyuAAAQhZAWhEBFQhlBkAACPQAACPBlBkQA5A5BFAZg");
	var mask_graphics_26 = new cjs.Graphics().p("A5HFKQgfAAAAgeIAApXQAAgeAfAAMAytAAAQhXAWhFBFQhlBkAACPQAACPBlBkQA5A5BGAZg");
	var mask_graphics_27 = new cjs.Graphics().p("A5HFKQgeAAgBgeIAApXQABgeAeAAMAyuAAAQhZAWhEBFQhlBkAACPQAACPBlBkQA5A5BFAZg");
	var mask_graphics_28 = new cjs.Graphics().p("A5IFKQgdAAAAgeIAApXQAAgeAdAAMAyvAAAQhZAWhEBFQhlBkAACPQAACPBlBkQA4A5BHAZg");
	var mask_graphics_29 = new cjs.Graphics().p("A5IFKQgdAAAAgeIAApXQAAgeAdAAMAyvAAAQhZAWhEBFQhlBkAACPQAACPBlBkQA4A5BHAZg");
	var mask_graphics_30 = new cjs.Graphics().p("A5IFKQgdAAAAgeIAApXQAAgeAdAAMAyvAAAQhZAWhEBFQhlBkAACPQAACPBlBkQA4A5BHAZg");
	var mask_graphics_31 = new cjs.Graphics().p("A5HFKQgeAAgBgeIAApXQABgeAeAAMAyuAAAQhZAWhEBFQhlBkAACPQAACPBlBkQA5A5BFAZg");
	var mask_graphics_32 = new cjs.Graphics().p("A5IFKQgdAAAAgeIAApXQAAgeAdAAMAyvAAAQhZAWhEBFQhlBkAACPQAACPBlBkQA4A5BGAZg");
	var mask_graphics_33 = new cjs.Graphics().p("A5IFKQgdAAAAgeIAApXQAAgeAdAAMAyvAAAQhZAWhEBFQhlBkAACPQAACPBlBkQA4A5BHAZg");
	var mask_graphics_34 = new cjs.Graphics().p("A5HFKQgfAAAAgeIAApXQAAgeAfAAMAytAAAQhXAWhFBFQhlBkAACPQAACPBlBkQA5A5BFAZg");
	var mask_graphics_35 = new cjs.Graphics().p("A5HFKQgeAAAAgeIAApXQAAgeAeAAMAyuAAAQhZAWhEBFQhlBkAACPQAACPBlBkQA4A5BGAZg");
	var mask_graphics_36 = new cjs.Graphics().p("A5IFKQgeAAAAgeIAApXQAAgeAeAAMAyuAAAQhXAWhFBFQhlBkAACPQAACPBlBkQA4A5BHAZg");
	var mask_graphics_37 = new cjs.Graphics().p("A5IFKQgdAAAAgeIAApXQAAgeAdAAMAyuAAAQhYAWhEBFQhlBkAACPQAACPBlBkQA4A5BHAZg");
	var mask_graphics_38 = new cjs.Graphics().p("A5HFKQgfAAAAgeIAApXQAAgeAfAAMAytAAAQhXAWhFBFQhlBkAACPQAACPBlBkQA5A5BFAZg");
	var mask_graphics_39 = new cjs.Graphics().p("A5HFKQgeAAAAgeIAApXQAAgeAeAAMAyuAAAQhZAWhEBFQhlBkAACPQAACPBlBkQA4A5BGAZg");
	var mask_graphics_40 = new cjs.Graphics().p("A5HFKQgeAAAAgeIAApXQAAgeAeAAMAyuAAAQhZAWhEBFQhlBkAACPQAACPBlBkQA4A5BGAZg");
	var mask_graphics_144 = new cjs.Graphics().p("A5HFKQgeAAAAgeIAApXQAAgeAeAAMAyuAAAQhZAWhEBFQhlBkAACPQAACPBlBkQA4A5BGAZg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(19).to({graphics:mask_graphics_19,x:-132.1,y:-0.45}).wait(1).to({graphics:mask_graphics_20,x:-104.65,y:-0.45}).wait(1).to({graphics:mask_graphics_21,x:-79.85,y:-0.45}).wait(1).to({graphics:mask_graphics_22,x:-57.5,y:-0.45}).wait(1).to({graphics:mask_graphics_23,x:-37.5,y:-0.45}).wait(1).to({graphics:mask_graphics_24,x:-19.7,y:-0.45}).wait(1).to({graphics:mask_graphics_25,x:-4.05,y:-0.45}).wait(1).to({graphics:mask_graphics_26,x:9.7,y:-0.45}).wait(1).to({graphics:mask_graphics_27,x:21.6,y:-0.45}).wait(1).to({graphics:mask_graphics_28,x:31.8,y:-0.45}).wait(1).to({graphics:mask_graphics_29,x:40.45,y:-0.45}).wait(1).to({graphics:mask_graphics_30,x:47.65,y:-0.45}).wait(1).to({graphics:mask_graphics_31,x:53.55,y:-0.45}).wait(1).to({graphics:mask_graphics_32,x:58.25,y:-0.45}).wait(1).to({graphics:mask_graphics_33,x:61.95,y:-0.45}).wait(1).to({graphics:mask_graphics_34,x:64.7,y:-0.45}).wait(1).to({graphics:mask_graphics_35,x:66.7,y:-0.45}).wait(1).to({graphics:mask_graphics_36,x:68,y:-0.45}).wait(1).to({graphics:mask_graphics_37,x:68.8,y:-0.45}).wait(1).to({graphics:mask_graphics_38,x:69.2,y:-0.45}).wait(1).to({graphics:mask_graphics_39,x:69.4,y:-0.45}).wait(1).to({graphics:mask_graphics_40,x:69.4,y:-0.45}).wait(104).to({graphics:mask_graphics_144,x:69.4,y:-0.45}).wait(1).to({graphics:null,x:0,y:0}).wait(155));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMA+IAAgXIAYAAIAAAXgAgJAYIgDhVIAZAAIgDBVg");
	this.shape.setTransform(131.45,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag1AdIAZgEQADAKAHAFQAIAEALAAQAOAAAHgEQAHgEAAgIQAAgGgDgDQgDgEgGgCIgIgCIgNgDIgOgEIgJgDIgGgCQgHgEgDgHQgEgGAAgKQAAgRAMgJQANgJAXAAQAYAAALAHQAMAHADARIgZAEQgCgIgGgFQgGgEgLAAQgLAAgGAEQgGAEAAAHQAAAFADADQACADAFACIATAGIAPADIALAEIAGADIAGADQAFAEACAGQACAGAAAIQAAASgOAKQgNAKgaAAQguAAgIgjg");
	this.shape_1.setTransform(122.35,10.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgMA+IAAhnIgoAAIAAgUIBpAAIAAAUIgoAAIAABng");
	this.shape_2.setTransform(110.95,10.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWA+Ig1heIACAMIAAAKIAABIIgXAAIAAh7IAdAAIA2BfIgBgYIAAhHIAXAAIAAB7g");
	this.shape_3.setTransform(98.95,10.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgyA+IAAh7IBhAAIAAAUIhHAAIAAAfIBBAAIAAAUIhBAAIAAAgIBKAAIAAAUg");
	this.shape_4.setTransform(86.7,10.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAoA+IAAhKIAAgKIABgRIgGAUIgDANIgXBEIgSAAIgVhEIgKghIABARIAAAKIAABKIgXAAIAAh7IAjAAIAWBEIADAMIACAMIACgHIACgHIACgGIAWhIIAjAAIAAB7g");
	this.shape_5.setTransform(72.95,10.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMA+IAAgzIgshIIAbAAIAdA0IAeg0IAbAAIgsBIIAAAzg");
	this.shape_6.setTransform(59.45,10.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAjA+IgLgfIguAAIgLAfIgaAAIAth7IAdAAIAtB7gAgBghIgDAGIgNAmIAjAAIgNgmIgDgHIgCgIIgBAJg");
	this.shape_7.setTransform(46.925,10.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgyA+IAAh7IA2AAQAXAAAMALQAMAKAAATQAAAMgFAIQgGAJgKAFQgKAGgPAAIgdAAIAAArgAgYgBIAbAAQAKABAGgGQAGgFAAgKQAAgUgXABIgaAAg");
	this.shape_8.setTransform(34.75,10.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfA4QgOgIgIgOQgHgOAAgUQAAgeAQgRQARgQAeAAQAVAAAOAIQAOAIAGAQIgYAIQgEgKgIgFQgIgFgLAAQgSAAgJAMQgKALAAAUQAAAUAKAMQAKALARAAQAKAAAJgDQAKgDAFgEIAAgRIgeAAIAAgTIA2AAIAAAtQgKAKgQAGQgQAGgRAAQgTAAgOgIg");
	this.shape_9.setTransform(192.275,-9.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAWA+Ig1hfIABANIABAKIAABIIgXAAIAAh7IAdAAIA2BgIgBgZIAAhHIAXAAIAAB7g");
	this.shape_10.setTransform(178.95,-9.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgMA+IAAh7IAZAAIAAB7g");
	this.shape_11.setTransform(169.95,-9.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgMA+IAAhnIgoAAIAAgUIBpAAIAAAUIgoAAIAABng");
	this.shape_12.setTransform(161.95,-9.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgyA+IAAh7IA2AAQAXAAAMAKQAMALAAASQAAAMgFAKQgGAIgKAFQgKAFgPAAIgdAAIAAAsgAgYAAIAbAAQAKgBAGgFQAGgFAAgKQAAgTgXgBIgaAAg");
	this.shape_13.setTransform(150.75,-9.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgyA+IAAh7IBhAAIAAAUIhGAAIAAAgIBAAAIAAASIhAAAIAAAhIBJAAIAAAUg");
	this.shape_14.setTransform(138.7,-9.95);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgdA4QgOgIgHgOQgIgPAAgTQAAgUAHgOQAHgOAOgIQAOgHASAAQAWAAAOAJQAOAJAFARIgXAGQgDgKgIgFQgIgGgMAAQgRAAgJALQgJALAAAVQAAANAEAKQAFAKAIAFQAIAFALAAQAXAAAJgXIAXAIQgHASgPAJQgOAJgTAAQgTAAgOgIg");
	this.shape_15.setTransform(126.075,-9.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgdA4QgOgIgHgOQgIgPAAgTQAAgUAHgOQAHgOAOgIQAOgHASAAQAWAAAOAJQAOAJAFARIgXAGQgDgKgIgFQgIgGgMAAQgRAAgJALQgJALAAAVQAAANAEAKQAFAKAIAFQAIAFALAAQAXAAAJgXIAXAIQgHASgPAJQgOAJgTAAQgTAAgOgIg");
	this.shape_16.setTransform(113.075,-9.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAjA+IgLggIguAAIgLAgIgaAAIAth7IAdAAIAtB7gAgBgiIgDAIIgNAlIAjAAIgNgmIgDgIIgCgHIgBAIg");
	this.shape_17.setTransform(99.925,-9.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgMA+IAAhnIgoAAIAAgUIBpAAIAAAUIgoAAIAABng");
	this.shape_18.setTransform(82.95,-9.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAcA+IgcgvIgeAAIAAAvIgaAAIAAh7IA9AAQAWAAAMAJQAMAKAAASQAAANgHAKQgIAIgMADIAhA0gAgegEIAhAAQALAAAFgFQAGgFAAgJQAAgIgGgFQgGgFgLAAIggAAg");
	this.shape_19.setTransform(71.375,-9.95);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAjA+IgLggIguAAIgLAgIgaAAIAth7IAdAAIAtB7gAgBgiIgDAIIgNAlIAjAAIgNgmIgDgIIgCgHIgBAIg");
	this.shape_20.setTransform(57.925,-9.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgMA+IAAhnIgoAAIAAgUIBpAAIAAAUIgoAAIAABng");
	this.shape_21.setTransform(45.95,-9.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag1AdIAZgEQADAKAHAFQAHAEAMAAQAPAAAGgEQAHgEAAgIQAAgGgEgDQgCgEgGgCIgJgCIgMgDIgPgEIgIgDIgGgCQgGgEgFgHQgDgGAAgKQAAgRAMgJQANgJAXAAQAYAAALAHQAMAHADARIgaAEQgCgIgFgFQgGgEgLAAQgLAAgGAEQgGAEAAAHQAAAFADADQACADAFACIATAGIAQADIAKAEIAHADIAFADQAFAEACAGQACAGAAAIQAAASgNAKQgOAKgaAAQguAAgIgjg");
	this.shape_22.setTransform(34.35,-9.925);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},19).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},125).to({state:[]},1).wait(155));

	// Layer_1
	this.instance_2 = new lib.Symbol8_1();
	this.instance_2.setTransform(36.8,0,0.1132,0.1132,0,0,0,26.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.6215,scaleY:1.6215},8).to({scaleX:1,scaleY:1,x:36.75},5).wait(6).to({x:239.5},21,cjs.Ease.cubicOut).wait(49).to({regX:26.6,scaleX:0.5077,scaleY:0.5077,x:239.55},4).to({regX:26.8,scaleX:1.2592,scaleY:1.2592,x:239.7},6).to({regX:26.5,scaleX:1,scaleY:1,x:239.5},6).wait(39).to({_off:true},1).wait(155));

	// Layer_2
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,115,32,0)").s().p("AgBCTQg9AAgrgrQgrgrAAg9QAAg8ArgrQArgrA9AAIADAAQA9AAArArQArArAAA8QAAA9grArQgrArg9AAg");
	this.shape_23.setTransform(36.0507,0,2.0444,2.0444);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgBCcQhAAAguguQgtgtgBhBQABhAAtgtQAuguBAAAIAEAAQBAAAAtAuQAuAtAABAQAABBguAtQgtAuhAAAgAhphnQgrArAAA8QAAA9ArArQArArA9AAIAEAAQA8AAArgrQArgrAAg9QAAg8grgrQgrgrg8AAIgEAAQg9AAgrArg");
	this.shape_24.setTransform(35.9996,0,2.0444,2.0444);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(255,115,32,0)").s().p("AjeDbQhahbAAiAQAAh/BahbQBahbCBAAQCIAABaBbQBaBbAAB/QAACAhaBbQhaBbiAAAQiJAAhahbg");
	this.shape_25.setTransform(36.025,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgDFIQiHgBhghgQhghfAAiIQAAiHBghfQBghgCHgBIAIAAQCHABBgBgQBfBfAACHQAACIhfBfQhgBgiHABgAjejaQhaBbAAB/QAACABaBbQBaBbCJAAQCAAABahbQBahbAAiAQAAh/hahbQhahbiIAAQiBAAhaBbg");
	this.shape_26.setTransform(36,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(255,115,32,0)").s().p("AjlDhQhchdAAiEQAAiDBchdQBdheCEAAQCMAABdBeQBdBdAACDQAACEhdBdQhdBeiDAAQiNAAhdheg");
	this.shape_27.setTransform(36.025,0);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgEFRQiLAAhihjQhjhjAAiLQAAiKBjhjQBihjCLAAIAJAAQCLAABiBjQBjBjAACKQAACLhjBjQhiBjiLAAgAjkjgQhdBdAACDQAACEBdBdQBcBeCNAAQCDAABeheQBchdAAiEQAAiDhchdQheheiMAAQiEAAhcBeg");
	this.shape_28.setTransform(36,0);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(255,115,32,0)").s().p("AjrDnQhghgAAiHQAAiGBghgQBfhgCIAAQCQAABgBgQBgBgAACGQAACHhgBgQhgBgiHAAQiRAAhfhgg");
	this.shape_29.setTransform(36.025,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgEFaQiPAAhlhlQhmhlAAiQQAAiPBmhlQBlhlCPAAIAJAAQCPAABlBlQBmBlAACPQAACQhmBlQhlBliPAAgAjrjmQhfBgAACGQAACHBfBgQBgBgCQAAQCIAABfhgQBghgAAiHQAAiGhghgQhfhgiRAAQiHAAhgBgg");
	this.shape_30.setTransform(36,0);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(255,115,32,0)").s().p("AjyDuQhihjAAiLQAAiLBihiQBjhiCLAAQCUAABiBiQBjBiAACLQAACLhjBjQhiBiiLAAQiUAAhjhig");
	this.shape_31.setTransform(36.025,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgEFjQiTAAhohoQhphoAAiTQAAiSBphoQBohpCTAAIAJAAQCTAABoBpQBpBoAACSQAACThpBoQhoBoiTAAgAjxjtQhjBiABCLQgBCLBjBjQBiBiCUAAQCLAABihiQBjhjAAiLQAAiLhjhiQhihiiUAAQiLAAhiBig");
	this.shape_32.setTransform(36,0);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(255,115,32,0)").s().p("AgEFZQiPAAhlhlQhlhlAAiPQAAiOBlhlQBlhlCPAAIAJAAQCPAABlBlQBlBlAACOQAACPhlBlQhlBliPAAg");
	this.shape_33.setTransform(36,0);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgEFtQiXAAhrhrQhrhrAAiXQAAiWBrhrQBrhrCXAAIAJAAQCXAABrBrQBrBrAACWQAACXhrBrQhrBriXAAgAj4jzQhlBlAACOQAACPBlBlQBlBlCPAAIAJAAQCPAABlhlQBlhlAAiPQAAiOhlhlQhlhliPAAIgJAAQiPAAhlBlg");
	this.shape_34.setTransform(36,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(255,115,32,0)").s().p("AiOFZQiPAAhlhlQhlhlAAiPQAAiOBlhlQBlhlCPAAIEdAAQCPAABlBlQBlBlAACOQAACPhlBlQhlBliPAAg");
	this.shape_35.setTransform(49.825,0);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AiOFtQiXAAhrhrQhrhrAAiXQAAiWBrhrQBrhrCXAAIEdAAQCXAABrBrQBrBrAACWQAACXhrBrQhrBriXAAgAmCjzQhlBlAACOQAACPBlBlQBlBlCPAAIEdAAQCPAABlhlQBlhlAAiPQAAiOhlhlQhlhliPAAIkdAAQiPAAhlBlg");
	this.shape_36.setTransform(49.825,0);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(255,115,32,0)").s().p("AkLFZQiPAAhlhlQhlhlAAiPQAAiOBlhlQBlhlCPAAIIXAAQCPAABlBlQBlBlAACOQAACPhlBlQhlBliPAAg");
	this.shape_37.setTransform(62.325,0);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AkLFtQiXAAhrhrQhrhrAAiXQAAiWBrhrQBrhrCXAAIIXAAQCXAABrBrQBrBrAACWQAACXhrBrQhrBriXAAgAn/jzQhlBlAACOQAACPBlBlQBlBlCPAAIIXAAQCPAABlhlQBlhlAAiPQAAiOhlhlQhlhliPAAIoXAAQiPAAhlBlg");
	this.shape_38.setTransform(62.325,0);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(255,115,32,0)").s().p("Al8FZQiPAAhlhlQhlhlAAiPQAAiOBlhlQBlhlCPAAIL5AAQCPAABlBlQBlBlAACOQAACPhlBlQhlBliPAAg");
	this.shape_39.setTransform(73.575,0);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("Al8FtQiXAAhrhrQhrhrAAiXQAAiWBrhrQBrhrCXAAIL5AAQCXAABrBrQBrBrAACWQAACXhrBrQhrBriXAAgApwjzQhlBlAACOQAACPBlBlQBlBlCPAAIL5AAQCPAABlhlQBlhlAAiPQAAiOhlhlQhlhliPAAIr5AAQiPAAhlBlg");
	this.shape_40.setTransform(73.575,0);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(255,115,32,0)").s().p("AnhFZQiOAAhmhlQhkhlgBiPQABiOBkhlQBmhlCOAAIPCAAQCPAABmBlQBkBlABCOQgBCPhkBlQhmBliPAAg");
	this.shape_41.setTransform(83.65,0);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AnhFtQiWAAhrhrQhrhrAAiXQAAiWBrhrQBrhrCWAAIPCAAQCYAABqBrQBrBrABCWQgBCXhrBrQhqBriYAAgArVjzQhkBlgBCOQABCPBkBlQBmBlCOAAIPCAAQCPAABmhlQBkhlABiPQgBiOhkhlQhmhliPAAIvCAAQiOAAhmBlg");
	this.shape_42.setTransform(83.65,0);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(255,115,32,0)").s().p("Ao6FZQiPAAhlhlQhlhlAAiPQAAiOBlhlQBlhlCPAAIR1AAQCPAABlBlQBlBlAACOQAACPhlBlQhlBliPAAg");
	this.shape_43.setTransform(92.6,0);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("Ao6FtQiXAAhrhrQhrhrAAiXQAAiWBrhrQBrhrCXAAIR1AAQCXAABrBrQBrBrAACWQAACXhrBrQhrBriXAAgAsujzQhlBlAACOQAACPBlBlQBlBlCPAAIR1AAQCPAABlhlQBlhlAAiPQAAiOhlhlQhlhliPAAIx1AAQiPAAhlBlg");
	this.shape_44.setTransform(92.6,0);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(255,115,32,0)").s().p("AqJFZQiPAAhlhlQhlhlAAiPQAAiOBlhlQBlhlCPAAIUTAAQCPAABlBlQBlBlAACOQAACPhlBlQhlBliPAAg");
	this.shape_45.setTransform(100.5,0);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AqJFtQiXAAhrhrQhrhrAAiXQAAiWBrhrQBrhrCXAAIUTAAQCXAABrBrQBrBrAACWQAACXhrBrQhrBriXAAgAt9jzQhlBlAACOQAACPBlBlQBlBlCPAAIUTAAQCPAABlhlQBlhlAAiPQAAiOhlhlQhlhliPAAI0TAAQiPAAhlBlg");
	this.shape_46.setTransform(100.5,0);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(255,115,32,0)").s().p("ArOFZQiPAAhlhlQhlhlAAiPQAAiOBlhlQBlhlCPAAIWdAAQCPAABlBlQBlBlAACOQAACPhlBlQhlBliPAAg");
	this.shape_47.setTransform(107.425,0);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("ArOFtQiXAAhrhrQhrhrAAiXQAAiWBrhrQBrhrCXAAIWdAAQCXAABrBrQBrBrAACWQAACXhrBrQhrBriXAAgAvCjzQhlBlAACOQAACPBlBlQBlBlCPAAIWdAAQCPAABlhlQBlhlAAiPQAAiOhlhlQhlhliPAAI2dAAQiPAAhlBlg");
	this.shape_48.setTransform(107.425,0);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,115,32,0)").s().p("AsKFZQiPAAhlhlQhlhlAAiPQAAiOBlhlQBlhlCPAAIYVAAQCPAABlBlQBlBlAACOQAACPhlBlQhlBliPAAg");
	this.shape_49.setTransform(113.425,0);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AsKFtQiXAAhrhrQhrhrAAiXQAAiWBrhrQBrhrCXAAIYVAAQCXAABrBrQBrBrAACWQAACXhrBrQhrBriXAAgAv+jzQhlBlAACOQAACPBlBlQBlBlCPAAIYVAAQCPAABlhlQBlhlAAiPQAAiOhlhlQhlhliPAAI4VAAQiPAAhlBlg");
	this.shape_50.setTransform(113.425,0);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,115,32,0)").s().p("As+FZQiOAAhmhlQhkhlgBiPQABiOBkhlQBmhlCOAAIZ8AAQCQAABkBlQBmBlgBCOQABCPhmBlQhkBliQAAg");
	this.shape_51.setTransform(118.55,0);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("As+FtQiWAAhrhrQhrhrAAiXQAAiWBrhrQBrhrCWAAIZ8AAQCXAABsBrQBrBrAACWQAACXhrBrQhsBriXAAgAwyjzQhkBlgBCOQABCPBkBlQBmBlCOAAIZ8AAQCQAABkhlQBmhlgBiPQABiOhmhlQhkhliQAAI58AAQiOAAhmBlg");
	this.shape_52.setTransform(118.55,0);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,115,32,0)").s().p("AtpFZQiPAAhlhlQhlhlAAiPQAAiOBlhlQBlhlCPAAIbTAAQCPAABlBlQBlBlAACOQAACPhlBlQhlBliPAAg");
	this.shape_53.setTransform(122.9,0);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AtpFtQiXAAhrhrQhrhrAAiXQAAiWBrhrQBrhrCXAAIbTAAQCXAABrBrQBrBrAACWQAACXhrBrQhrBriXAAgAxdjzQhlBlAACOQAACPBlBlQBlBlCPAAIbTAAQCPAABlhlQBlhlAAiPQAAiOhlhlQhlhliPAAI7TAAQiPAAhlBlg");
	this.shape_54.setTransform(122.9,0);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,115,32,0)").s().p("AuOFZQiOAAhmhlQhkhlgBiPQABiOBkhlQBmhlCOAAIcdAAQCOAABmBlQBkBlAACOQAACPhkBlQhmBliOAAg");
	this.shape_55.setTransform(126.55,0);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AuOFtQiWAAhrhrQhrhrAAiXQAAiWBrhrQBrhrCWAAIcdAAQCXAABqBrQBrBrAACWQAACXhrBrQhqBriXAAgAyCjzQhkBlgBCOQABCPBkBlQBmBlCOAAIcdAAQCOAABmhlQBkhlAAiPQAAiOhkhlQhmhliOAAI8dAAQiOAAhmBlg");
	this.shape_56.setTransform(126.55,0);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,115,32,0)").s().p("AurFZQiPAAhlhlQhlhlAAiPQAAiOBlhlQBlhlCPAAIdXAAQCPAABlBlQBlBlAACOQAACPhlBlQhlBliPAAg");
	this.shape_57.setTransform(129.5,0);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AurFtQiXAAhrhrQhrhrAAiXQAAiWBrhrQBrhrCXAAIdXAAQCXAABrBrQBrBrAACWQAACXhrBrQhrBriXAAgAyfjzQhlBlAACOQAACPBlBlQBlBlCPAAIdXAAQCPAABlhlQBlhlAAiPQAAiOhlhlQhlhliPAAI9XAAQiPAAhlBlg");
	this.shape_58.setTransform(129.5,0);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(255,115,32,0)").s().p("AvDFZQiPAAhlhlQhlhlAAiPQAAiOBlhlQBlhlCPAAIeHAAQCPAABlBlQBlBlAACOQAACPhlBlQhlBliPAAg");
	this.shape_59.setTransform(131.875,0);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AvDFtQiXAAhrhrQhrhrAAiXQAAiWBrhrQBrhrCXAAIeHAAQCXAABrBrQBrBrAACWQAACXhrBrQhrBriXAAgAy3jzQhlBlAACOQAACPBlBlQBlBlCPAAIeHAAQCPAABlhlQBlhlAAiPQAAiOhlhlQhlhliPAAI+HAAQiPAAhlBlg");
	this.shape_60.setTransform(131.875,0);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(255,115,32,0)").s().p("AvWFZQiOAAhmhlQhkhlgBiPQABiOBkhlQBmhlCOAAIetAAQCOAABmBlQBkBlAACOQAACPhkBlQhmBliOAAg");
	this.shape_61.setTransform(133.75,0);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AvWFtQiWAAhrhrQhrhrAAiXQAAiWBrhrQBrhrCWAAIetAAQCXAABqBrQBrBrAACWQAACXhrBrQhqBriXAAgAzKjzQhkBlgBCOQABCPBkBlQBmBlCOAAIetAAQCOAABmhlQBkhlAAiPQAAiOhkhlQhmhliOAAI+tAAQiOAAhmBlg");
	this.shape_62.setTransform(133.75,0);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,115,32,0)").s().p("AvjFZQiPAAhlhlQhlhlAAiPQAAiOBlhlQBlhlCPAAIfHAAQCPAABlBlQBlBlAACOQAACPhlBlQhlBliPAAg");
	this.shape_63.setTransform(135.125,0);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AvjFtQiXAAhrhrQhrhrAAiXQAAiWBrhrQBrhrCXAAIfHAAQCXAABrBrQBrBrAACWQAACXhrBrQhrBriXAAgAzXjzQhlBlAACOQAACPBlBlQBlBlCPAAIfHAAQCPAABlhlQBlhlAAiPQAAiOhlhlQhlhliPAAI/HAAQiPAAhlBlg");
	this.shape_64.setTransform(135.125,0);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(255,115,32,0)").s().p("AvtFZQiPAAhlhlQhlhlAAiPQAAiOBlhlQBlhlCPAAIfbAAQCPAABlBlQBlBlAACOQAACPhlBlQhlBliPAAg");
	this.shape_65.setTransform(136.125,0);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AvtFtQiXAAhrhrQhrhrAAiXQAAiWBrhrQBrhrCXAAIfbAAQCXAABrBrQBrBrAACWQAACXhrBrQhrBriXAAgAzhjzQhlBlAACOQAACPBlBlQBlBlCPAAIfbAAQCPAABlhlQBlhlAAiPQAAiOhlhlQhlhliPAAI/bAAQiPAAhlBlg");
	this.shape_66.setTransform(136.125,0);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(255,115,32,0)").s().p("Av0FZQiPAAhlhlQhlhlAAiPQAAiOBlhlQBlhlCPAAIfpAAQCPAABlBlQBlBlAACOQAACPhlBlQhlBliPAAg");
	this.shape_67.setTransform(136.8,0);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("Av0FtQiXAAhrhrQhrhrAAiXQAAiWBrhrQBrhrCXAAIfpAAQCXAABrBrQBrBrAACWQAACXhrBrQhrBriXAAgAzojzQhlBlAACOQAACPBlBlQBlBlCPAAIfpAAQCPAABlhlQBlhlAAiPQAAiOhlhlQhlhliPAAI/pAAQiPAAhlBlg");
	this.shape_68.setTransform(136.8,0);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(255,115,32,0)").s().p("Av4FZQiPAAhlhlQhlhlAAiPQAAiOBlhlQBlhlCPAAIfxAAQCPAABlBlQBlBlAACOQAACPhlBlQhlBliPAAg");
	this.shape_69.setTransform(137.2,0);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("Av4FtQiXAAhrhrQhrhrAAiXQAAiWBrhrQBrhrCXAAIfxAAQCXAABrBrQBrBrAACWQAACXhrBrQhrBriXAAgAzsjzQhlBlAACOQAACPBlBlQBlBlCPAAIfxAAQCPAABlhlQBlhlAAiPQAAiOhlhlQhlhliPAAI/xAAQiPAAhlBlg");
	this.shape_70.setTransform(137.2,0);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(255,115,32,0)").s().p("Av6FZQiPAAhlhlQhlhlAAiPQAAiOBlhlQBlhlCPAAIf1AAQCPAABlBlQBlBlAACOQAACPhlBlQhlBliPAAg");
	this.shape_71.setTransform(137.4,0);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("Av6FtQiXAAhrhrQhrhrAAiXQAAiWBrhrQBrhrCXAAIf1AAQCXAABrBrQBrBrAACWQAACXhrBrQhrBriXAAgAzujzQhlBlAACOQAACPBlBlQBlBlCPAAIf1AAQCPAABlhlQBlhlAAiPQAAiOhlhlQhlhliPAAI/1AAQiPAAhlBlg");
	this.shape_72.setTransform(137.4,0);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("rgba(255,115,32,0)").s().p("Av7FZQiPAAhlhlQhlhlAAiPQAAiOBlhlQBlhlCPAAIf3AAQCPAABlBlQBlBlAACOQAACPhlBlQhlBliPAAg");
	this.shape_73.setTransform(137.5,0);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("Av7FtQiXAAhrhrQhrhrAAiXQAAiWBrhrQBrhrCXAAIf3AAQCXAABrBrQBrBrAACWQAACXhrBrQhrBriXAAgAzvjzQhlBlAACOQAACPBlBlQBlBlCPAAIf3AAQCPAABlhlQBlhlAAiPQAAiOhlhlQhlhliPAAI/3AAQiPAAhlBlg");
	this.shape_74.setTransform(137.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_24},{t:this.shape_23}]},8).to({state:[{t:this.shape_26},{t:this.shape_25}]},1).to({state:[{t:this.shape_28},{t:this.shape_27}]},1).to({state:[{t:this.shape_30},{t:this.shape_29}]},1).to({state:[{t:this.shape_32},{t:this.shape_31}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},1).to({state:[{t:this.shape_34},{t:this.shape_33}]},6).to({state:[{t:this.shape_36},{t:this.shape_35}]},1).to({state:[{t:this.shape_38},{t:this.shape_37}]},1).to({state:[{t:this.shape_40},{t:this.shape_39}]},1).to({state:[{t:this.shape_42},{t:this.shape_41}]},1).to({state:[{t:this.shape_44},{t:this.shape_43}]},1).to({state:[{t:this.shape_46},{t:this.shape_45}]},1).to({state:[{t:this.shape_48},{t:this.shape_47}]},1).to({state:[{t:this.shape_50},{t:this.shape_49}]},1).to({state:[{t:this.shape_52},{t:this.shape_51}]},1).to({state:[{t:this.shape_54},{t:this.shape_53}]},1).to({state:[{t:this.shape_56},{t:this.shape_55}]},1).to({state:[{t:this.shape_58},{t:this.shape_57}]},1).to({state:[{t:this.shape_60},{t:this.shape_59}]},1).to({state:[{t:this.shape_62},{t:this.shape_61}]},1).to({state:[{t:this.shape_64},{t:this.shape_63}]},1).to({state:[{t:this.shape_66},{t:this.shape_65}]},1).to({state:[{t:this.shape_68},{t:this.shape_67}]},1).to({state:[{t:this.shape_70},{t:this.shape_69}]},1).to({state:[{t:this.shape_72},{t:this.shape_71}]},1).to({state:[{t:this.shape_74},{t:this.shape_73}]},1).to({state:[{t:this.shape_74},{t:this.shape_73}]},1).to({state:[{t:this.shape_74},{t:this.shape_73}]},104).to({state:[]},1).wait(155));

	// Layer_6
	this.instance_3 = new lib.Symbol8copy();
	this.instance_3.setTransform(239.5,0,1,1,0,0,0,26.5,0);
	this.instance_3.alpha = 0.5;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99).to({_off:false},0).to({regX:26.7,scaleX:7.1269,scaleY:7.1269,x:240.5,alpha:0},16).wait(29).to({_off:true},1).wait(155));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,-196,442.8,392);


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
	this.instance = new lib.Symbol4("synched",0);
	this.instance.setTransform(39.6,0,1,1,0,0,0,39.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,-35.3,79.3,70.69999999999999), null);


// stage content:
(lib.v2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_55
	this.instance = new lib.Symbol40();
	this.instance.setTransform(180,132.5,1,1,0,0,0,180,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(619).to({_off:false},0).to({alpha:1},10).wait(11));

	// Layer_11
	this.instance_1 = new lib.Symbol41();
	this.instance_1.setTransform(314.05,310.55,1,1,0,0,0,23.6,0);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(549).to({_off:false},0).to({x:254.05,y:208.55},15,cjs.Ease.quadOut).wait(9).to({regY:0.1,scaleX:0.7458,scaleY:0.7458,x:254.1,y:203.6},2).to({regY:0,scaleX:1,scaleY:1,x:254.05,y:208.55},6).wait(3).to({x:310.55,y:296.85,alpha:0},7).wait(49));

	// Layer_54
	this.instance_2 = new lib.Symbol6_1("synched",0);
	this.instance_2.setTransform(178.5,153.55,1,1,0,0,0,137.5,0);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(495).to({_off:false},0).wait(80).to({startPosition:80},0).to({regX:137.6,scaleX:0.8592,scaleY:0.8592,x:178.6,startPosition:83},3).to({regX:137.5,scaleX:1,scaleY:1,x:178.5,startPosition:88},5).wait(57));

	// Layer_18
	this.instance_3 = new lib.Symbol6();
	this.instance_3.setTransform(180.3,36.9,1,1,0,0,0,149.1,0);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(487).to({_off:false},0).to({alpha:1},8).wait(145));

	// Layer_53
	this.instance_4 = new lib.Symbol40();
	this.instance_4.setTransform(180,132.5,1,1,0,0,0,180,0);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(474).to({_off:false},0).to({alpha:1},10).wait(156));

	// Layer_38 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_309 = new cjs.Graphics().p("AoLCzIAAllIQXAAIAAFlg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(309).to({graphics:mask_graphics_309,x:323.875,y:39.125}).wait(331));

	// Layer_37
	this.instance_5 = new lib.Symbol11();
	this.instance_5.setTransform(247.65,39.05,0.8791,0.8791,44.9993,0,0,16.4,0.1);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(309).to({_off:false},0).to({x:292.9},6).wait(4).to({regX:16.3,rotation:0,x:291.75,y:39},3).wait(4).to({alpha:0},4).to({alpha:1},3).to({_off:true},165).wait(142));

	// Layer_35 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_294 = new cjs.Graphics().p("AjhB/QgggSgRggQgRghAAgsQAAgtARggQAQggAhgRQAggSAsAAQAtAAAgASQAfARARAgQARAgAAAtQAAArgRAhQgSAhggASQggASgrAAQgsAAgggSgAjShHQgWAZAAAuQAAAeAKAWQAKAWATANQASAMAaAAQAnAAAWgbQAVgZAAgvQAAgugWgZQgVgagnAAQgoAAgVAagAQZCNIhBhrIhFAAIAABrIg7AAIAAkZICMAAQAzAAAbAWQAbAWAAAoQAAAegQAVQgRAVgdAHIBMB2gAOTgLIBNAAQAZAAANgLQAMgLAAgUQAAgUgMgLQgOgKgaAAIhLAAgAI8CNIAAkZIDdAAIAAAuIiiAAIAABHICWAAIAAAsIiWAAIAABKICqAAIAAAugAE2CNIAAkZIDPAAIAAAuIiUAAIAABXICQAAIAAAsIiQAAIAABogAAwCNIAAkZIDQAAIAAAuIiVAAIAABXICQAAIAAAsIiQAAIAABogAqyCNIAAkZIDeAAIAAAuIijAAIAABHICWAAIAAAsIiWAAIAABKICrAAIAAAugAtoCNIgmiiIgGgdIgGgfIgEAUIgEAWIgDAOIgoCmIhFAAIhIkZIA7AAIAnCsIAGAZIAFAcIAEgSIADgSIAEgRIAoisIBCAAIAnCmQACAIADAQIAFAjIAFgUIAEgSIAFgVIAkimIA7AAIhIEZg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(294).to({graphics:mask_1_graphics_294,x:158.125,y:39.125}).wait(346));

	// Layer_36
	this.instance_6 = new lib.Symbol11();
	this.instance_6.setTransform(27.05,40.5,0.7705,0.7705,44.9992,0,0,16.3,0.1);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(294).to({_off:false},0).to({x:282.3},15).to({_off:true},189).wait(142));

	// Layer_34
	this.instance_7 = new lib.Symbol25();
	this.instance_7.setTransform(322.6,39.1,1,1,0,0,0,111.5,0);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(281).to({_off:false},0).to({x:158.1,alpha:1},12).to({_off:true},205).wait(142));

	// Symbol_39
	this.instance_8 = new lib.Symbol39();
	this.instance_8.setTransform(29.75,237.4,4.5,4.5,0,0,0,3,0);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(429).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},6).to({_off:true},63).wait(142));

	// Symbol_38
	this.instance_9 = new lib.Symbol38();
	this.instance_9.setTransform(29.75,211.75,4.5,4.5,0,0,0,3,0);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(408).to({_off:false},0).to({scaleX:1,scaleY:1,alpha:1},6).to({_off:true},84).wait(142));

	// Symbol_37
	this.instance_10 = new lib.Symbol37();
	this.instance_10.setTransform(31.15,186.1,4.5167,4.5167,0,0,0,3.3,0);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(387).to({_off:false},0).to({regX:3,scaleX:1,scaleY:1,x:29.75,alpha:1},6).to({_off:true},105).wait(142));

	// Symbol_36
	this.instance_11 = new lib.Symbol36();
	this.instance_11.setTransform(30.25,161.35,4.5667,4.5667,0,0,0,3.1,0.2);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(367).to({_off:false},0).to({regX:3,regY:0,scaleX:1,scaleY:1,x:29.75,y:160.45,alpha:1},6).to({_off:true},125).wait(142));

	// Symbol_35
	this.instance_12 = new lib.Symbol35();
	this.instance_12.setTransform(30.65,135.7,4.55,4.55,0,0,0,3.2,0.2);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(347).to({_off:false},0).to({regX:3,regY:0,scaleX:1,scaleY:1,x:29.75,y:134.8,alpha:1},6).to({_off:true},145).wait(142));

	// Symbol_34
	this.instance_13 = new lib.Symbol34();
	this.instance_13.setTransform(30.25,109.15,4.5667,4.5667,0,0,0,3.1,0);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(327).to({_off:false},0).to({regX:3,scaleX:1,scaleY:1,x:29.75,alpha:1},6).to({_off:true},165).wait(142));

	// Symbol_33
	this.instance_14 = new lib.Symbol33();
	this.instance_14.setTransform(30.25,83.5,4.5833,4.5833,0,0,0,3.1,0);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(306).to({_off:false},0).to({regX:3,scaleX:1,scaleY:1,x:29.75,alpha:1},6).to({_off:true},186).wait(142));

	// Symbol_32
	this.instance_15 = new lib.Symbol32();
	this.instance_15.setTransform(201.05,237.4,1,1,0,0,0,96.5,0);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(429).to({_off:false},0).to({x:146.05,alpha:1},9).to({_off:true},60).wait(142));

	// Symbol_31
	this.instance_16 = new lib.Symbol31();
	this.instance_16.setTransform(243.65,211.7,1,1,0,0,0,139.1,0);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(408).to({_off:false},0).to({x:188.65,alpha:1},9).to({_off:true},81).wait(142));

	// Symbol_30
	this.instance_17 = new lib.Symbol30();
	this.instance_17.setTransform(187.55,186,1,1,0,0,0,83,0);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(387).to({_off:false},0).to({x:132.55,alpha:1},9).to({_off:true},102).wait(142));

	// Symbol_29
	this.instance_18 = new lib.Symbol29();
	this.instance_18.setTransform(251.25,160.3,1,1,0,0,0,146.7,0);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(367).to({_off:false},0).to({x:196.25,alpha:1},9).to({_off:true},122).wait(142));

	// Symbol_28
	this.instance_19 = new lib.Symbol28();
	this.instance_19.setTransform(203.05,134.6,1,1,0,0,0,98.5,0);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(347).to({_off:false},0).to({x:148.05,alpha:1},9).to({_off:true},142).wait(142));

	// Symbol_27
	this.instance_20 = new lib.Symbol27();
	this.instance_20.setTransform(227.05,108.9,1,1,0,0,0,122.5,0);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(327).to({_off:false},0).to({x:172.05,alpha:1},9).to({_off:true},162).wait(142));

	// Symbol_26
	this.instance_21 = new lib.Symbol26();
	this.instance_21.setTransform(172.05,83.2,1,1,0,0,0,67.5,0);
	this.instance_21.alpha = 0;
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(306).to({_off:false},0).to({x:117.05,alpha:1},9).to({_off:true},183).wait(142));

	// Layer_33
	this.instance_22 = new lib._65rydfg("synched",19);
	this.instance_22.setTransform(183.4,110.4,0.3949,0.3949,0,0,0,565.8,312.9);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(154).to({_off:false},0).wait(28).to({startPosition:7},0).to({regX:565.6,regY:313.4,scaleX:0.0392,scaleY:0.0392,y:110.45,startPosition:13},6).to({_off:true},1).wait(451));

	// Symbol_23
	this.instance_23 = new lib.Symbol23();
	this.instance_23.setTransform(206.55,142.4,0.2434,0.2434,0,0,0,39.6,0);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(177).to({_off:false},0).to({scaleX:1,scaleY:1,x:326.5,y:132.4},15).wait(68).to({x:412.3,y:146.35},10).to({_off:true},1).wait(369));

	// Symbol_24
	this.instance_24 = new lib.Symbol24();
	this.instance_24.setTransform(194.3,159,0.2126,0.2126,0,0,0,49.9,0);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(177).to({_off:false},0).to({scaleX:1,scaleY:1,x:314.3,y:247},15).wait(68).to({x:379.3,y:320.95},10).to({_off:true},1).wait(369));

	// Symbol_22
	this.instance_25 = new lib.Symbol22();
	this.instance_25.setTransform(209.1,116.15,0.2541,0.2541,0,0,0,42.9,0);
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(177).to({_off:false},0).to({scaleX:1,scaleY:1,x:339.05,y:28.15},15).wait(68).to({x:409.05,y:-41.85},10).to({_off:true},1).wait(369));

	// Symbol_21
	this.instance_26 = new lib.Symbol21();
	this.instance_26.setTransform(151.85,156.95,0.1744,0.1744,0,0,0,37.6,0);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(177).to({_off:false},0).to({scaleX:1,scaleY:1,x:31.9,y:236.95},15).wait(68).to({x:-68.55,y:300.55},10).to({_off:true},1).wait(369));

	// Symbol_20
	this.instance_27 = new lib.Symbol20();
	this.instance_27.setTransform(155.05,142.85,0.3101,0.3101,0,0,0,38.1,0);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(177).to({_off:false},0).to({scaleX:1,scaleY:1,x:7.1,y:122.85},15).wait(68).to({x:-61.6,y:118.95},10).to({_off:true},1).wait(369));

	// Symbol_19
	this.instance_28 = new lib.Symbol19();
	this.instance_28.setTransform(140.95,122.6,0.3045,0.3045,0,0,0,44.5,0);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(177).to({_off:false},0).to({scaleX:1,scaleY:1,x:20.9,y:22.6},15).wait(68).to({x:-37.1,y:-41.4},10).to({_off:true},1).wait(369));

	// Symbol_18
	this.instance_29 = new lib.Symbol18();
	this.instance_29.setTransform(179.2,185.95,1,1,0,0,0,60.6,0);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(192).to({_off:false},0).to({y:215.95,alpha:1},11).wait(57).to({alpha:0},6).to({_off:true},15).wait(359));

	// Symbol_17
	this.instance_30 = new lib.Symbol17();
	this.instance_30.setTransform(179.2,159.95,1,1,0,0,0,59.7,0);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(192).to({_off:false},0).to({y:175.95,alpha:1},11).wait(60).to({alpha:0},6).to({_off:true},12).wait(359));

	// Symbol_16
	this.instance_31 = new lib.Symbol16();
	this.instance_31.setTransform(179.25,135.95,0.5251,0.5251,0,0,0,75.9,0);
	this.instance_31.alpha = 0;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(192).to({_off:false},0).to({regX:75.8,scaleX:1,scaleY:1,x:179.2,alpha:1},11).wait(64).to({alpha:0},6).to({_off:true},8).wait(359));

	// Symbol_15
	this.instance_32 = new lib.Symbol15();
	this.instance_32.setTransform(179.2,135.95,1,1,0,0,0,75.8,0);
	this.instance_32.alpha = 0;
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(192).to({_off:false},0).to({y:95.95,alpha:1},11).wait(67).to({alpha:0},6).to({_off:true},5).wait(359));

	// Symbol_14
	this.instance_33 = new lib.Symbol14();
	this.instance_33.setTransform(179.2,95.95,1,1,0,0,0,93.2,0);
	this.instance_33.alpha = 0;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(192).to({_off:false},0).to({y:55.95,alpha:1},11).wait(71).to({alpha:0},6).to({_off:true},1).wait(359));

	// Layer_21 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_92 = new cjs.Graphics().p("Ao2D6IAAnzIRtAAIAAHzg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(92).to({graphics:mask_2_graphics_92,x:308.275,y:217.95}).wait(63).to({graphics:null,x:0,y:0}).wait(485));

	// Layer_16
	this.instance_34 = new lib.Symbol11();
	this.instance_34.setTransform(233.25,215.7,0.7705,0.7705,44.9992,0,0,16.3,0.1);
	this.instance_34._off = true;

	var maskedShapeInstanceList = [this.instance_34];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(92).to({_off:false},0).to({x:268.75},6).wait(4).to({regX:16.1,regY:0.2,scaleX:0.2106,scaleY:0.2106,rotation:-90,x:268.8,y:215.75},7).wait(1).to({regX:16.3,scaleX:0.7706,scaleY:0.7706,rotation:0,x:268.65,y:215.7},0).wait(3).to({alpha:0},4).to({alpha:1},4).wait(16).to({regY:0.1,scaleX:0.7705,scaleY:0.7705,rotation:44.9992,x:268.75},4).to({regY:0.2,scaleX:0.3299,scaleY:0.3299,rotation:45,x:261.2,y:215.75},3).to({x:371.2},10).to({_off:true},1).wait(485));

	// Layer_20 (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_80 = new cjs.Graphics().p("AJ1BkQgZgOgNgaQgNgaAAgiQAAgjANgZQANgZAZgOQAZgNAjAAQAjAAAZANQAZAOANAZQANAZAAAjQAAAigOAZQgNAagZAOQgaAOghAAQgjAAgZgNgAKBg4QgRAUAAAkQAAAXAIASQAIARAOAKQAPAJAUAAQAfAAAQgUQARgUAAglQAAgjgRgVQgRgUgeAAQgfAAgRAUgACPBkQgZgOgMgZQgOgaAAgjQAAgkANgZQAMgZAZgNQAYgNAjAAQAnAAAZAPQAYAQAKAeIgpALQgFgQgPgKQgPgKgVAAQgfAAgQATQgQAUAAAlQAAAYAHASQAIARAOAJQAPAJAUAAQAqAAAQgqIApAPQgNAggZAQQgaAPgjAAQgjAAgZgNgArkBkQgZgOgNgaQgNgaAAgiQAAgjANgZQANgZAZgOQAZgNAjAAQAjAAAZANQAZAOANAZQANAZAAAjQAAAigOAZQgNAagZAOQgaAOghAAQgjAAgZgNgArYg4QgRAUAAAkQAAAXAIASQAIARAOAKQAPAJAUAAQAfAAAQgUQARgUAAglQAAgjgRgVQgRgUgeAAQgfAAgRAUgAvBBkQgZgOgNgZQgNgaAAgjQAAgkAMgZQANgZAYgNQAZgNAjAAQAnAAAYAPQAYAQAKAeIgoALQgFgQgPgKQgQgKgUAAQgfAAgQATQgRAUAAAlQAAAYAIASQAHARAPAJQAOAJAVAAQAqAAAQgqIAoAPQgNAggZAQQgZAPgjAAQgjAAgZgNgAO/BuIhgioIACAWIABARIAACBIgpAAIAAjbIA1AAIBhCqQgDgYAAgTIAAh/IApAAIAADbgAH7BuIAAjbIAuAAIAADbgAF3BuIAAi3IhHAAIAAgkIC8AAIAAAkIhHAAIAAC3gAhmBuIAAjbICsAAIAAAkIh+AAIAAA3IB1AAIAAAjIh1AAIAAA6ICFAAIAAAjgAi9BuIhgioIACAWIABARIAACBIgpAAIAAjbIA1AAIBhCqQgDgYAAgTIAAh/IApAAIAADbgAmaBuIhgioIACAWIABARIAACBIgpAAIAAjbIA1AAIBhCqQgDgYAAgTIAAh/IApAAIAADbg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(80).to({graphics:mask_3_graphics_80,x:148.375,y:215.825}).wait(64).to({graphics:null,x:0,y:0}).wait(496));

	// Layer_12
	this.instance_35 = new lib.Symbol11();
	this.instance_35.setTransform(27.7,215.9,0.7705,0.7705,44.9992,0,0,16.4,0.2);
	this.instance_35._off = true;

	var maskedShapeInstanceList = [this.instance_35];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(80).to({_off:false},0).to({x:272.7},14).to({_off:true},50).wait(496));

	// Layer_8 (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_80 = new cjs.Graphics().p("AAEA1IAtgHQAEARANAIQANAIAYAAQAYAAAMgHQAMgIAAgPQAAgJgGgGQgFgGgKgEIgPgFIgYgFIgagHIgPgFIgLgFQgMgHgGgLQgHgMAAgSQAAgdAXgQQAWgQArAAQApAAAVANQAUAMAGAeIgtAGQgDgOgLgHQgKgIgUAAQgVAAgKAHQgLAHAAANQAAAIAFAGQAEAFAJAEQAIAEAbAGIAbAGIATAGIAMAGIAJAGQAIAIAEALQAFAKAAAOQAAAggYARQgYARgvAAQhTAAgOg8gAERBuIAAi3IhHAAIAAgkIC8AAIAAAkIhHAAIAAC3gAgwBuIgUg4IhUAAIgTA4IguAAIBQjbIA2AAIBQDbgAhyg8IgEAMIgXBDIA/AAIgYhEIgEgNIgEgNIgEAPgAmFBuIAAjbICiAAIAAAkIh0AAIAABEIBwAAIAAAiIhwAAIAABRg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(80).to({graphics:mask_4_graphics_80,x:86.925,y:184.975}).wait(64).to({graphics:null,x:0,y:0}).wait(496));

	// Layer_19
	this.instance_36 = new lib.Symbol11();
	this.instance_36.setTransform(142.6,184.9,0.7705,0.7705,0,-44.9992,135.0008,16.4,0.2);
	this.instance_36._off = true;

	var maskedShapeInstanceList = [this.instance_36];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(80).to({_off:false},0).to({x:27.6},10).to({_off:true},54).wait(496));

	// Layer_7
	this.instance_37 = new lib.Symbol13();
	this.instance_37.setTransform(263.35,215.8,1,1,0,0,0,101.3,0);
	this.instance_37.alpha = 0;
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(70).to({_off:false},0).to({x:148.35,alpha:1},10).wait(64).to({x:-161.65},10).to({_off:true},1).wait(485));

	// FAST_CONNECTION_copy
	this.instance_38 = new lib.Symbol12();
	this.instance_38.setTransform(221.9,184.95,1,1,0,0,0,39,0);
	this.instance_38.alpha = 0;
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(64).to({_off:false},0).to({x:86.9,alpha:1},10).wait(70).to({x:-223.1},10).to({_off:true},1).wait(485));

	// logo
	this.instance_39 = new lib.Symbol6();
	this.instance_39.setTransform(180.3,6.9,1,1,0,0,0,149.1,0);
	this.instance_39.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).to({y:46.9,alpha:1},14).to({y:36.9},10).wait(120).to({x:-129.7},10).to({_off:true},1).wait(485));

	// Layer_6
	this.instance_40 = new lib._65rydfg("synched",19);
	this.instance_40.setTransform(202,82.1,0.2784,0.2784,0,0,0,565.8,313.1);
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(29).to({_off:false},0).wait(29).to({y:107.1,startPosition:48},0).wait(20).to({mode:"single",startPosition:5},0).wait(66).to({startPosition:5},0).to({x:-108},10).to({_off:true},1).wait(485));

	// Layer_5 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_0 = new cjs.Graphics().p("A24DDIAAmFMAtxAAAIAAGFg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:mask_5_graphics_0,x:175.5,y:100.55}).wait(29).to({graphics:null,x:0,y:0}).wait(611));

	// Layer_3
	this.instance_41 = new lib.Symbol10();
	this.instance_41.setTransform(224.95,134.95,1,1,0,0,0,27,0);
	this.instance_41._off = true;

	var maskedShapeInstanceList = [this.instance_41];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(14).to({_off:false},0).to({y:103.95},14).wait(18).to({x:241.45},0).wait(98).to({x:-68.55},10).to({_off:true},1).wait(485));

	// Layer_2
	this.instance_42 = new lib.Symbol9();
	this.instance_42.setTransform(190.8,148.5,1,1,0,0,0,2.4,13.5);
	this.instance_42._off = true;

	var maskedShapeInstanceList = [this.instance_42];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(14).to({_off:false},0).to({y:117.5},14).to({_off:true},18).wait(594));

	// Layer_1
	this.instance_43 = new lib.Symbol8();
	this.instance_43.setTransform(116.6,134.95,1,1,0,0,0,68.2,0);
	this.instance_43._off = true;

	var maskedShapeInstanceList = [this.instance_43];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(14).to({_off:false},0).to({y:103.95},14).wait(116).to({x:-193.4},10).to({_off:true},1).wait(485));

	// Layer_4 (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_0 = new cjs.Graphics().p("A2LC5IAAlxMAsXAAAIAAFxg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:mask_6_graphics_0,x:175,y:146.55}).wait(29).to({graphics:null,x:0,y:0}).wait(611));

	// Layer_10
	this.instance_44 = new lib.Symbol7();
	this.instance_44.setTransform(179.2,112.35,1,1,0,0,0,130.8,0);
	this.instance_44._off = true;

	var maskedShapeInstanceList = [this.instance_44];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(14).to({_off:false},0).to({y:145.35},14).wait(116).to({x:-130.8},10).to({_off:true},1).wait(485));

	// fon
	this.instance_45 = new lib.Symbol40();
	this.instance_45.setTransform(180,132.5,1,1,0,0,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_45).to({_off:true},498).wait(142));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-98.8,47.8,574.9,329.59999999999997);
// library properties:
lib.properties = {
	id: 'B56A248385882D43BDBEAEDBBD67204C',
	width: 360,
	height: 265,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/v2_atlas_P_1.png?1675946520077", id:"v2_atlas_P_1"}
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
an.compositions['B56A248385882D43BDBEAEDBBD67204C'] = {
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