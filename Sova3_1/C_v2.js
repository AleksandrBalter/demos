(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"C_v2_atlas_P_1", frames: [[0,190,258,225],[359,190,32,125],[0,0,404,188],[260,190,97,122],[260,314,25,16],[287,314,24,16]]}
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



(lib.Asset6 = function() {
	this.initialize(ss["C_v2_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.backdoor = function() {
	this.initialize(ss["C_v2_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bodycar = function() {
	this.initialize(ss["C_v2_atlas_P_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.door = function() {
	this.initialize(ss["C_v2_atlas_P_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.tele = function() {
	this.initialize(ss["C_v2_atlas_P_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.tele_1 = function() {
	this.initialize(ss["C_v2_atlas_P_1"]);
	this.gotoAndStop(5);
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


(lib.bodycar_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.bodycar();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bodycar_1, new cjs.Rectangle(0,0,404,188), null);


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
	this.shape.graphics.f("#E31E26").s().p("AglBfQgHgHAAgKQAAgMAIgIQAIgIANAAQALAAAHAHQAHAHAAAKQAAAMgIAIQgIAJgMAAQgLAAgIgIgAgZAeIARiEIA1AAIgjCEg");
	this.shape.setTransform(96.525,-31.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E31E26").s().p("AgYAlQgKgEgFgJQgFgHAAgMQAAgMAHgKQAGgLALgGQALgGANgBQAMABAKAEQAJAEAFAJQAFAIAAAKQAAANgGALQgHAKgLAHQgLAFgNAAQgMABgJgFgAgIgRQgGACgDAHQgDAGAAAGQAAAIAFAGQAFAEAJAAQAFAAAGgDQAFgEADgFQADgHAAgGQAAgIgFgFQgFgFgIAAQgGAAgFAEg");
	this.shape_1.setTransform(85.975,-30.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E31E26").s().p("AgoAoIARhPIA/AAIgDATIgpAAIgMA8g");
	this.shape_2.setTransform(77.7,-30.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E31E26").s().p("AgYAlQgKgEgFgJQgFgHAAgMQAAgMAHgKQAGgLALgGQALgGANgBQAMABAKAEQAJAEAFAJQAFAIAAAKQAAANgGALQgHAKgLAHQgLAFgNAAQgMABgJgFgAgIgRQgGACgDAHQgDAGAAAGQAAAIAFAGQAFAEAJAAQAFAAAGgDQAFgEADgFQADgHAAgGQAAgIgFgFQgFgFgIAAQgGAAgFAEg");
	this.shape_3.setTransform(68.375,-30.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E31E26").s().p("AAKAoIAFgeIghAAIgGAeIgYAAIAQhPIAYAAIgGAfIAiAAIAGgfIAXAAIgQBPg");
	this.shape_4.setTransform(58.25,-30.475);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E31E26").s().p("AAZAxIADgSIg4AAIgDASIgWAAIAHglIACAAQAOAAAJghIAGgbIBFAAIgMA8IALAAIgHAlgAgBgRIgGASQgCAIgEADIAfAAIAJgpIgbAAg");
	this.shape_5.setTransform(46.95,-29.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E31E26").s().p("AgYAlQgKgEgFgJQgFgHAAgMQAAgMAHgKQAGgLALgGQALgGANgBQAMABAKAEQAJAEAFAJQAFAIAAAKQAAANgGALQgHAKgLAHQgLAFgNAAQgMABgJgFgAgIgRQgGACgDAHQgDAGAAAGQAAAIAFAGQAFAEAJAAQAFAAAGgDQAFgEADgFQADgHAAgGQAAgIgFgFQgFgFgIAAQgGAAgFAEg");
	this.shape_6.setTransform(37.575,-30.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E31E26").s().p("AgXAmQgJgFgFgJQgFgHAAgMQAAgMAGgKQAGgLALgGQAKgHANAAQAMABAJAEQAIAEAFAJQAFAHAAALIgCALIg8AAQABARATAAQAGAAAFgCQAGgCAEgEIAKAQQgHAFgIADQgJADgJgBQgMAAgKgDgAgJgTQgGAFgCAIIAmAAQAAgIgEgFQgGgEgIAAQgHAAgFAEg");
	this.shape_7.setTransform(23.7,-30.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E31E26").s().p("AAKAoIAFgeIghAAIgGAeIgYAAIAQhPIAYAAIgHAfIAjAAIAGgfIAXAAIgQBPg");
	this.shape_8.setTransform(13.7,-30.475);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E31E26").s().p("AgXAmQgJgFgFgJQgFgHAAgMQAAgMAGgKQAGgLALgGQALgHAMAAQAMABAJAEQAJAEAEAJQAFAHAAALIgCALIg8AAQABARATAAQAGAAAFgCQAGgCAEgEIAKAQQgHAFgIADQgJADgJgBQgMAAgKgDgAgJgTQgGAFgCAIIAmAAQAAgIgEgFQgGgEgIAAQgHAAgFAEg");
	this.shape_9.setTransform(3.8,-30.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E31E26").s().p("AASAxIAEgSIhFAAIARhPIAXAAIgMA8IAfAAIAMg8IAYAAIgMA8IALAAIgHAlg");
	this.shape_10.setTransform(-6.475,-29.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E31E26").s().p("AgYAlQgKgEgFgJQgFgHAAgMQAAgMAHgKQAGgLALgGQALgGANgBQAMABAKAEQAJAEAFAJQAFAIAAAKQAAANgGALQgHAKgLAHQgLAFgNAAQgMABgJgFgAgIgRQgGACgDAHQgDAGAAAGQAAAIAFAGQAFAEAJAAQAFAAAGgDQAFgEADgFQADgHAAgGQAAgIgFgFQgFgFgIAAQgGAAgFAEg");
	this.shape_11.setTransform(-20.775,-30.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E31E26").s().p("AAJAoIAMg8IghAAIgMA8IgXAAIAQhPIBPAAIgQBPg");
	this.shape_12.setTransform(-30.875,-30.475);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E31E26").s().p("AgwA7QgNgGgIgOQgHgNAAgRQAAgVAKgRQAJgRARgKQAQgKAUAAQAcAAAMAUIAEgSIAlAAIgZCBIgkAAIACgOQgPAPgXAAQgPABgNgIgAgUgdQgIAFgGAKQgEAJAAAMQAAANAIAIQAHAIAOAAQAKAAAJgGQAIgGAGgJQAEgKAAgLQAAgNgIgIQgHgIgNABQgLgBgJAGg");
	this.shape_13.setTransform(85.65,-48.95);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E31E26").s().p("AhRBZIAjivIAkAAIgDANQAPgPAYAAQAPAAANAHQANAHAHANQAIANAAASQAAAVgKARQgJARgRAJQgQAKgUAAQgcAAgNgTIgMBAgAgEgzQgJAFgFAKQgEAJAAANQAAANAHAHQAIAHANAAQALAAAIgFQAJgGAFgIQAFgKAAgMQAAgNgIgIQgIgIgOAAQgLAAgHAGg");
	this.shape_14.setTransform(68.175,-46.725);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E31E26").s().p("AgpBBIAUhiIgrAAIAGgfIB7AAIgGAfIgrAAIgTBig");
	this.shape_15.setTransform(54.95,-48.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E31E26").s().p("AglA7QgPgGgIgOQgIgNAAgRQAAgVAKgRQAKgRARgKQARgKAVAAQATAAAOAHQAOAIAHAMQAIANAAASQAAAIgCAKIhiAAQACAbAeAAQAKAAAJgEQAJgDAHgGIAPAZQgLAJgOAEQgNAEgPAAQgUABgPgIgAgQgfQgJAIgEAMIA/AAQAAgMgHgIQgIgGgNgBQgNABgJAGg");
	this.shape_16.setTransform(40.025,-48.95);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E31E26").s().p("AAhBBIAPhMIgxA/IgQAAIgZhCIgQBPIgiAAIAaiBIAnAAIAaBKIA6hKIAkAAIgaCBg");
	this.shape_17.setTransform(22.575,-48.95);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E31E26").s().p("AgoA7QgPgHgHgNQgJgNAAgRQAAgVAKgRQALgRARgKQASgJAWgBQATAAAPAHQAOAIAJANQAIANAAASQAAATgKASQgLAQgRALQgSAKgWgBQgTAAgPgHgAgPgdQgIAFgFAKQgEAJgBAMQAAANAIAIQAIAIAOAAQAKAAAJgGQAIgGAFgJQAFgKAAgLQAAgNgIgIQgIgIgOABQgKgBgJAGg");
	this.shape_18.setTransform(4.9,-48.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E31E26").s().p("AhSA/IAIgfIAGABQAKAAAHgMQAGgLAGgXIAMg0IBuAAIgaCAIglAAIAThhIgoAAIgFAXQgHAbgIARQgHARgKAIQgKAIgPAAQgJAAgKgDg");
	this.shape_19.setTransform(-11.8,-48.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E31E26").s().p("AARBBIAQhOIhNBOIgjAAIAaiBIAlAAIgQBOIBNhOIAjAAIgZCBg");
	this.shape_20.setTransform(-27.525,-48.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E31E26").s().p("AAMBBIgWgyIgVAAIgKAyIgmAAIAaiBIAmAAIgKAyIAUAAIAsgyIAoAAIg7BAIAjBBg");
	this.shape_21.setTransform(-42.95,-48.95);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E31E26").s().p("AiHDaQgsgOgdgZIAyhOQAXAUAgALQAhALAjAAQAuAAAagRQAZgSAAgfQAAgZgTgMQgSgLglgBIgwAAIANhEIBxhqIjAAAIAShVIE9AAIgNBFIh/B2QAvALAaAfQAaAdAAAsQAAAugbAkQgbAlgwAUQgwAWg8AAQgyAAgrgOg");
	this.shape_22.setTransform(-75.375,-41.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol71, new cjs.Rectangle(-96.1,-93.6,198.39999999999998,93.6), null);


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
	this.shape.graphics.f("#E41E26").s().p("AgOAeIAAg7IAdAAIAAA7g");
	this.shape.setTransform(-79.2,-3.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E41E26").s().p("AgcAeIAAg7IA5AAIAAA7g");
	this.shape_1.setTransform(-77.8,-3.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E41E26").s().p("AgrAeIAAg7IBXAAIAAA7g");
	this.shape_2.setTransform(-76.4,-3.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E41E26").s().p("Ag5AeIAAg7IB0AAIAAA7g");
	this.shape_3.setTransform(-75,-3.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E41E26").s().p("AhIAeIAAg7ICRAAIAAA7g");
	this.shape_4.setTransform(-73.575,-3.55);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E41E26").s().p("AhWAeIAAg7ICtAAIAAA7g");
	this.shape_5.setTransform(-72.175,-3.55);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E41E26").s().p("AhlAeIAAg7IDLAAIAAA7g");
	this.shape_6.setTransform(-70.775,-3.55);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E41E26").s().p("AhzAeIAAg7IDnAAIAAA7g");
	this.shape_7.setTransform(-69.375,-3.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E41E26").s().p("AiCAeIAAg7IEFAAIAAA7g");
	this.shape_8.setTransform(-67.975,-3.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E41E26").s().p("AiQAeIAAg7IEhAAIAAA7g");
	this.shape_9.setTransform(-66.575,-3.55);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E41E26").s().p("AieAeIAAg7IE9AAIAAA7g");
	this.shape_10.setTransform(-65.15,-3.55);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E41E26").s().p("AitAeIAAg7IFbAAIAAA7g");
	this.shape_11.setTransform(-63.75,-3.55);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E41E26").s().p("Ai7AeIAAg7IF4AAIAAA7g");
	this.shape_12.setTransform(-62.35,-3.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E41E26").s().p("AjKAeIAAg7IGVAAIAAA7g");
	this.shape_13.setTransform(-60.95,-3.55);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E41E26").s().p("AjYAeIAAg7IGxAAIAAA7g");
	this.shape_14.setTransform(-59.55,-3.55);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E41E26").s().p("AjnAeIAAg7IHPAAIAAA7g");
	this.shape_15.setTransform(-58.15,-3.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E41E26").s().p("Aj1AeIAAg7IHrAAIAAA7g");
	this.shape_16.setTransform(-56.725,-3.55);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E41E26").s().p("AkEAeIAAg7IIJAAIAAA7g");
	this.shape_17.setTransform(-55.325,-3.55);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#E41E26").s().p("AkSAeIAAg7IIlAAIAAA7g");
	this.shape_18.setTransform(-53.925,-3.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E41E26").s().p("AkhAeIAAg7IJDAAIAAA7g");
	this.shape_19.setTransform(-52.525,-3.55);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E41E26").s().p("AkvAeIAAg7IJfAAIAAA7g");
	this.shape_20.setTransform(-51.125,-3.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E41E26").s().p("Ak+AeIAAg7IJ9AAIAAA7g");
	this.shape_21.setTransform(-49.725,-3.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E41E26").s().p("AlMAeIAAg7IKZAAIAAA7g");
	this.shape_22.setTransform(-48.3,-3.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#E41E26").s().p("AlaAeIAAg7IK1AAIAAA7g");
	this.shape_23.setTransform(-46.9,-3.55);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E41E26").s().p("AlpAeIAAg7ILTAAIAAA7g");
	this.shape_24.setTransform(-45.5,-3.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E41E26").s().p("Al3AeIAAg7ILvAAIAAA7g");
	this.shape_25.setTransform(-44.1,-3.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E41E26").s().p("AmGAeIAAg7IMNAAIAAA7g");
	this.shape_26.setTransform(-42.7,-3.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E41E26").s().p("AmUAeIAAg7IMpAAIAAA7g");
	this.shape_27.setTransform(-41.325,-3.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E41E26").s().p("AmjAeIAAg7INHAAIAAA7g");
	this.shape_28.setTransform(-39.875,-3.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E41E26").s().p("AmxAeIAAg7INjAAIAAA7g");
	this.shape_29.setTransform(-38.5,-3.55);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E41E26").s().p("AnAAeIAAg7IOAAAIAAA7g");
	this.shape_30.setTransform(-37.1,-3.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E41E26").s().p("AnOAeIAAg7IOdAAIAAA7g");
	this.shape_31.setTransform(-35.7,-3.55);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E41E26").s().p("AndAeIAAg7IO6AAIAAA7g");
	this.shape_32.setTransform(-34.3,-3.55);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E41E26").s().p("AnrAeIAAg7IPXAAIAAA7g");
	this.shape_33.setTransform(-32.9,-3.55);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#E41E26").s().p("An5AeIAAg7IPzAAIAAA7g");
	this.shape_34.setTransform(-31.475,-3.55);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E41E26").s().p("AoIAeIAAg7IQRAAIAAA7g");
	this.shape_35.setTransform(-30.075,-3.55);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E41E26").s().p("AoWAeIAAg7IQtAAIAAA7g");
	this.shape_36.setTransform(-28.675,-3.55);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E41E26").s().p("AolAeIAAg7IRLAAIAAA7g");
	this.shape_37.setTransform(-27.275,-3.55);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#E41E26").s().p("AozAeIAAg7IRnAAIAAA7g");
	this.shape_38.setTransform(-25.875,-3.55);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E41E26").s().p("ApCAeIAAg7ISFAAIAAA7g");
	this.shape_39.setTransform(-24.475,-3.55);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E41E26").s().p("ApQAeIAAg7IShAAIAAA7g");
	this.shape_40.setTransform(-23.05,-3.55);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#E41E26").s().p("ApfAeIAAg7IS+AAIAAA7g");
	this.shape_41.setTransform(-21.65,-3.55);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E41E26").s().p("AptAeIAAg7ITbAAIAAA7g");
	this.shape_42.setTransform(-20.25,-3.55);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E41E26").s().p("Ap8AeIAAg7IT5AAIAAA7g");
	this.shape_43.setTransform(-18.85,-3.55);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E41E26").s().p("AqKAeIAAg7IUVAAIAAA7g");
	this.shape_44.setTransform(-17.45,-3.55);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E41E26").s().p("AqZAeIAAg7IUyAAIAAA7g");
	this.shape_45.setTransform(-16.05,-3.55);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E41E26").s().p("AqnAeIAAg7IVPAAIAAA7g");
	this.shape_46.setTransform(-14.625,-3.55);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E41E26").s().p("Aq1AeIAAg7IVrAAIAAA7g");
	this.shape_47.setTransform(-13.225,-3.55);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E41E26").s().p("ArEAeIAAg7IWJAAIAAA7g");
	this.shape_48.setTransform(-11.825,-3.55);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#E41E26").s().p("ArSAeIAAg7IWlAAIAAA7g");
	this.shape_49.setTransform(-10.425,-3.55);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E41E26").s().p("ArhAeIAAg7IXDAAIAAA7g");
	this.shape_50.setTransform(-9.025,-3.55);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E41E26").s().p("ArvAeIAAg7IXfAAIAAA7g");
	this.shape_51.setTransform(-7.625,-3.55);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E41E26").s().p("Ar+AeIAAg7IX9AAIAAA7g");
	this.shape_52.setTransform(-6.2,-3.55);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E41E26").s().p("AsMAeIAAg7IYZAAIAAA7g");
	this.shape_53.setTransform(-4.8,-3.55);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E41E26").s().p("AsbAeIAAg7IY2AAIAAA7g");
	this.shape_54.setTransform(-3.4,-3.55);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E41E26").s().p("AspAeIAAg7IZTAAIAAA7g");
	this.shape_55.setTransform(-2,-3.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_55}]},65).to({state:[]},1).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-6.5,162,6);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhyBzQgwgwAAhDQAAhCAwgwQAwgwBCAAQBDAAAwAwQAwAwAABCQAABDgwAwQgwAwhDAAQhCAAgwgwg");
	this.shape.setTransform(0.025,-54.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(9).p("AAAmxQiGAAhfBgQhfBfAACHQAACMCUDOQBLBnBTBUQAIAIAKAAQALAAAIgIQBThUBLhnQCUjOAAiMQAAiHhfhfQhghgiGAAg");
	this.shape_1.setTransform(0.025,-43.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E31E26").s().p("AgSGqQhThUhLhnQiUjOAAiMQAAiHBfhfQBfhgCGAAQCGAABgBgQBfBfAACHQAACMiUDOQhLBnhTBUQgIAIgLAAQgKAAgIgIg");
	this.shape_2.setTransform(0.025,-43.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol67, new cjs.Rectangle(-37,-91.2,84.6,110.80000000000001), null);


(lib.Symbol65 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E41E26").s().p("AkDBFQg1AOgNgMQgNgNA5gMQA5gNgdgDQgdgDAxgUQAwgTAjgIIB1gaIBbgSQAvgJAvgFQAugEA0gCQA0gDhgAXQBQgGAQgEQAVAaAEAKQAFAJgXAMQgYALg8AEQg9ADgxAFQgvAGguAIQgsAIgtALQgtAIgtAOQgtAPg1AHIgVACQgUAAAlgQg");
	this.shape.setTransform(0.0093,-8.5403);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol65, new cjs.Rectangle(-32.8,-17,65.69999999999999,17), null);


(lib.Symbol64 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E41E26").s().p("AsTCSQiigDCdgoQjYgIgCgzQgCgyA6gjQBlgWBBACQBBADBUgTQBqgZBsgHQC1gOC1gKQCOgGCNgDQCNgGCPAIQCNAKCcARQCbAQkqAXQD0ASAygCQAwBTAKAfQAKAehMAXQhNAXi2gRQi2gRiVgHQiOgEiNACQiJADiKAKQiJACiOAWQiAAUiPAAIghAAg");
	this.shape.setTransform(-0.2255,-5.6706,0.1676,0.2809,0,-9.1722,170.8267);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol64, new cjs.Rectangle(-16.7,-9.9,33.4,9.9), null);


(lib.Symbol63 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E41E26").s().p("AhXBYQglgkAAg0QAAgzAlgkQAkglAzAAQA0AAAkAlQAlAkAAAzQAAA0glAkQgkAlg0AAQgzAAgkglg");
	this.shape.setTransform(0,-12.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol63, new cjs.Rectangle(-12.5,-25,25,25), null);


(lib.Symbol62 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAYgZAjAAQAkAAAYAZQAXAXACAeIAAAGQAAAjgZAZQgYAZgkAAQgjAAgYgZgAgigiQgPAPAAATQAAAVAPAPQAOAOAVAAQAUAAAPgOQAOgPAAgVQAAgTgOgPQgPgPgUAAQgVAAgOAPg");
	this.shape.setTransform(0,-12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E41E26").s().p("AhXBYQglgkAAg0QAAgzAlgkQAkglAzAAQA0AAAkAlQAlAkAAAzQAAA0glAkQgkAlg0AAQgzAAgkglgAg7g7QgZAZAAAiQAAAjAZAZQAYAZAjAAQAkAAAYgZQAZgZAAgjIAAgGQgCgegXgXQgYgZgkAAQgjAAgYAZgAgiAkQgPgPAAgVQAAgTAPgPQAOgPAVAAQAUAAAPAPQAOAPAAATQAAAVgOAPQgPAOgUAAQgVAAgOgOg");
	this.shape_1.setTransform(0,-12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol62, new cjs.Rectangle(-12.5,-25,25,25), null);


(lib.Symbol52 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],21,-50.9,-29.5,72).s().p("AqVKVIOi0pIGJAAIsCUpg");
	this.shape.setTransform(26.55,-66.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],15.5,-13.4,-49.4,74).s().p("AHmqPIBUgDItcUbIkXAKg");
	this.shape_1.setTransform(-35.775,-66.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol52, new cjs.Rectangle(-92.8,-132.8,185.6,132.8), null);


(lib.Symbol50 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],41.1,-60.7,-37.9,56.2).s().p("AsdLFIR22IIHFAAIvxVjIgmABIAAAkg");
	this.shape.setTransform(-87.4049,-99.1723,1.6171,1.6171);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],15.5,-13.4,-49.4,74).s().p("AHmqPIBUgDItcUaIkXALg");
	this.shape_1.setTransform(8.5303,-98.6063,1.6171,1.6171);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],21,-50.9,-29.5,72).s().p("AqVKVIOi0pIGJAAIsBUpg");
	this.shape_2.setTransform(109.3167,-97.2722,1.6171,1.6171);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol50, new cjs.Rectangle(-216.4,-213.7,432.9,229.1), null);


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
	this.instance = new lib.Asset6();
	this.instance.setTransform(-129,-112.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(-129,-112.5,258,225), null);


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
	this.shape.graphics.lf(["#F1EFCC","#DCDFC8"],[0,1],0,-42.2,0,31).s().p("AyHJeQgKg+ACgpQADg4AXgpQAgg4BGgXQBJgYAzAlQgPgoARgrQARgrApgXQApgXAzAEQA0AEAkAdQgQhTAxhQQAxhRBZgcQgpg/gGhDQgGhIAkg6QArhFBggVQBigWBCAvQAAg4AggvQBIhnCOgGQCRgHBNBoQAsA7ADBNQADBJgkBDQARgQAZgHQAagIAZAFQAgAHAZAWIAUAMQAlAZAOApQAOApgPAmQAQgJA+gCQA9gCAVAGQCCANA2BBQA0A/gqBQQAigdBMAeQBMAfA9BFQBGBOALBXQANBnhLBeg");
	this.shape.setTransform(0.0042,0.0308);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(-116.8,-60.5,233.6,121.1), null);


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
	this.shape.graphics.lf(["#F1EFCC","#DCDFC8"],[0,1],0,-61.2,0,44.9).s().p("EgqsANuQgXhnAHhKQAHhDAfg4QAjg9A6giQA2ggBGABQBGgTAyAfQgghUAdhZQAchaBNg3QBZg/B7ABQB7ABBXBAQgxiTAqhpQAZg/A4grQA8gvBHgDQAVAAAYAEQAhABAuALQgZhWALhNQAHhCAmg1IAIgKQAog5A8giQBAgkBGgCQBNgCBCAvQBBAtARBBIAPAYQAMgYATgXQALgRAYgSQBMg9BdgCQBEgBA+AiQA8AhAfA2QAQhEBWgnQBWgnBPAcQA6gGAxAPQBuAfBGBeQBCBYAIBtQAGBsgzB/QArgkAxgPQA8gSBBAJQA+gIAtAbQgVg4AVg7QAUg7A1glQAIgGAVgKQAlghAtgJQAlgIAlALQAlAKAYAYQg0hhAEhqQAFhvBAhWQBwiXDRAJQDPAKBoCWQAvBEAABQQBhhECNAfQCMAfA+BlQA0BUgKBpQgJBgg6BcQCAApBJB1QBGB0gXB3QA0gpBLgGQBLgFA7AhQA7AjAZA9QAZA+gXA6QBKg1BrAiQBlAhAtBRQAiA9AEBQQAEA8gOBZg");
	this.shape.setTransform(0.0283,0.0219);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(-275,-87.8,550.1,175.7), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("EhNGAeeMAAAg87MCaNAAAMAAAA87g");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol32, new cjs.Rectangle(-493.4,-194.9,986.9,389.9), null);


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
	this.shape.graphics.f("#D0D2D4").s().p("AgOAOQgFgFAAgJQAAgHAFgHQAHgFAHAAQAIAAAHAFQAFAHAAAHQAAAJgFAFQgHAHgIgBQgHABgHgHg");
	this.shape.setTransform(3.3465,-2.7718,0.6154,0.6154,140.5009);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AgRARQgHgHAAgKQAAgJAHgHQAIgHAJAAQAKAAAIAHQAGAHABAJQgBAKgGAHQgIAHgKAAQgJAAgIgHg");
	this.shape_1.setTransform(3.3367,-2.7837,0.6154,0.6154,140.5009);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s().p("AgMANQgFgFAAgIQAAgHAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAHQAAAIgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape_2.setTransform(-3.3475,2.7262,0.6154,0.6154,140.5009);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_3.setTransform(-3.3475,2.7262,0.6154,0.6154,140.5009);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AgNAPQgHgHAAgIQAAgIAHgFQAFgHAIABQAIgBAHAHQAFAFABAIQgBAIgFAHQgHAFgIAAQgIAAgFgFg");
	this.shape_4.setTransform(-2.7614,-3.36,0.6154,0.6154,140.5009);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AgRARQgGgHAAgKQAAgJAGgIQAIgGAJgBQAKABAHAGQAIAIgBAJQABAKgIAHQgHAIgKAAQgJAAgIgIg");
	this.shape_5.setTransform(-2.7614,-3.36,0.6154,0.6154,140.5009);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CCCCCC").s().p("AgNAPQgHgHAAgIQAAgHAHgHQAFgFAIAAQAIAAAHAFQAFAHABAHQgBAIgFAHQgHAFgIAAQgIAAgFgFg");
	this.shape_6.setTransform(2.7387,3.3123,0.6154,0.6154,140.5009);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AgRASQgGgIAAgKQAAgJAGgIQAIgGAJgBQAKABAHAGQAIAIgBAJQABAKgIAIQgHAHgKAAQgJAAgIgHg");
	this.shape_7.setTransform(2.7387,3.3123,0.6154,0.6154,140.5009);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#EFF2F5","#A6A9AB"],[0,1],0,-6.5,0,7.2).s().p("AgXAYQgLgKAAgOQAAgNALgKQAKgLANAAQAOAAAKALQALAKgBANQABAOgLAKQgKALgOgBQgNABgKgLg");
	this.shape_8.setTransform(0.0069,0.011,0.6156,0.6156,140.5005);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D0D2D4").s().p("AhFBGQgdgdAAgpQAAgoAdgdQAdgdAoAAQApAAAdAdQAdAdAAAoQAAApgdAdQgdAdgpAAQgoAAgdgdg");
	this.shape_9.setTransform(0.0069,0.011,0.6156,0.6156,140.5005);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("AgFBCQgcgDgRgVQgSgVADgaQACgcAVgRQAVgSAbADQAcACARAVQASAVgDAbQgDAcgVARQgSAQgXAAIgGgBg");
	this.shape_10.setTransform(0.025,0.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#393B3D").s().p("AgTgHIAcgMIALAbIgcAMg");
	this.shape_11.setTransform(-13.8035,-7.3635,0.6153,0.6153,140.5024);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#F9FCFF","#76797A"],[0,1],-4,-3.9,3.1,3.2).s().p("AgoAEIArgsIAnATQgOASgRAPQgPAQgRAOg");
	this.shape_12.setTransform(-17.8122,-1.707,0.6153,0.6153,140.5024);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#F9FCFF","#76797A"],[0,1],-3.5,-1.3,2.5,1.3).s().p("AgcgNIAcgNIAiAZQggASgkAKg");
	this.shape_13.setTransform(-16.0815,-8.2167,0.6153,0.6153,140.5024);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#F9FCFF","#76797A"],[0,1],1.4,-0.5,-2,-1.9).s().p("AgUgCIAjgPIAGAXIgcAMg");
	this.shape_14.setTransform(-12.1946,-6.5966,0.6153,0.6153,140.5024);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#76797A").s().p("AgrglIAlgPIAyBMQghATgjAKg");
	this.shape_15.setTransform(-14.6249,-7.3442,0.6153,0.6153,140.5024);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#F9FCFF","#76797A"],[0,1],0.7,0.7,-2.1,-2.1).s().p("AgVAGIAbgbIAQAQIgbAbg");
	this.shape_16.setTransform(-11.273,-1.0771,0.6153,0.6153,140.5024);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#393B3D").s().p("AgpgNIAcgdIA3ApIgrAsg");
	this.shape_17.setTransform(-14.4008,-1.3893,0.6153,0.6153,140.5024);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#76797A").s().p("AhFgoIAdgdIBuBLQgOASgRAQQgQAQgRAOg");
	this.shape_18.setTransform(-15.3871,-1.4734,0.6153,0.6153,140.5024);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#393B3D").s().p("AgTgHIAcgMIALAbIgcAMg");
	this.shape_19.setTransform(13.8534,7.3751,0.6153,0.6153,140.5024);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#F9FCFF","#76797A"],[0,1],2.9,2.8,-2.9,-2.8).s().p("AgoAXQANgSAQgQQAOgOAUgPIATAmIgsAsg");
	this.shape_20.setTransform(17.8719,1.7305,0.6153,0.6153,140.5024);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#F9FCFF","#76797A"],[0,1],3.6,0.7,-3.1,-1.7).s().p("AgiACQAhgSAjgKIgFAoIgdANg");
	this.shape_21.setTransform(16.1412,8.2402,0.6153,0.6153,140.5024);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#F9FCFF","#76797A"],[0,1],1,-1.6,-0.7,2.8).s().p("AgUgFIAcgMIANAUIgkAPg");
	this.shape_22.setTransform(12.2445,6.6082,0.6153,0.6153,140.5024);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#76797A").s().p("AgrgXQAhgTAjgKIATBaIglAPg");
	this.shape_23.setTransform(14.6845,7.3677,0.6153,0.6153,140.5024);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#F9FCFF","#76797A"],[0,1],1.6,-1.6,-1.5,1.7).s().p("AgVAHIAcgcIAPAQIgbAbg");
	this.shape_24.setTransform(11.3327,1.1006,0.6153,0.6153,140.5024);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#393B3D").s().p("AgpACIArgrIApA3IgdAdg");
	this.shape_25.setTransform(14.4507,1.4009,0.6153,0.6153,140.5024);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#76797A").s().p("AhEgEQANgSAQgRQAPgOAUgPIBJBtIgcAcg");
	this.shape_26.setTransform(15.4467,1.4969,0.6153,0.6153,140.5024);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#393B3D").s().p("AgTAIIAMgbIAbALIgMAcg");
	this.shape_27.setTransform(-14.9745,4.5653,0.6153,0.6153,140.5024);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#F9FCFF","#76797A"],[0,1],-3,0,7,0).s().p("AgVAgIAAg+IAngPQAEAbAAASQAAATgEAag");
	this.shape_28.setTransform(-13.5488,11.2041,0.6153,0.6153,140.5024);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#F9FCFF","#76797A"],[0,1],-3.4,0.6,2.6,-1.8).s().p("AgaABIAMgcIApgHQgJAigTAig");
	this.shape_29.setTransform(-17.356,5.0133,0.6153,0.6153,140.5024);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#F9FCFF","#76797A"],[0,1],0.9,-0.9,-2.5,0.6).s().p("AgRAPIAPgjIAUANIgMAcg");
	this.shape_30.setTransform(-13.2292,4.1433,0.6153,0.6153,140.5024);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#76797A").s().p("Ag0gGIAPglIBaATQgJAhgUAjg");
	this.shape_31.setTransform(-15.7596,4.435,0.6153,0.6153,140.5024);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#F9FCFF","#76797A"],[0,1],2.1,0,-1.8,0).s().p("AgKAUIAAgnIAVAAIAAAng");
	this.shape_32.setTransform(-8.7298,7.232,0.6153,0.6153,140.5024);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#393B3D").s().p("AghAUIAAgnIBDgMIAAA/g");
	this.shape_33.setTransform(-10.888,8.991,0.6153,0.6153,140.5024);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#76797A").s().p("AhCAUIAAgnICCgaQADAbAAASQAAATgDAag");
	this.shape_34.setTransform(-11.4004,9.4333,0.6153,0.6153,140.5024);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#393B3D").s().p("AgTAJIAMgdIAbANIgMAcg");
	this.shape_35.setTransform(15.0006,-4.5341,0.6153,0.6153,140.5024);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#F9FCFF","#76797A"],[0,1],2.8,0,-2.7,0.1).s().p("AgVAAQAAgSADgbIAoAPIAAA+IgoANQgDgaAAgTg");
	this.shape_36.setTransform(13.6085,-11.1806,0.6153,0.6153,140.5024);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#F9FCFF","#76797A"],[0,1],2.5,-1,-3.3,1.8).s().p("AACghIAZAgIgMAdIgpAGQAJgiATghg");
	this.shape_37.setTransform(17.4059,-5.0017,0.6153,0.6153,140.5024);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#F9FCFF","#76797A"],[0,1],2.6,-0.9,-2.3,0.8).s().p("AgRAIIAMgcIAXAFIgPAkg");
	this.shape_38.setTransform(13.2791,-4.1317,0.6153,0.6153,140.5024);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#76797A").s().p("Ag0AZQAJgiAUgiIBMAyIgPAlg");
	this.shape_39.setTransform(15.8094,-4.4234,0.6153,0.6153,140.5024);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#F9FCFF","#76797A"],[0,1],-1.2,0,4.5,0).s().p("AgKAUIAAgnIAVAAIAAAng");
	this.shape_40.setTransform(8.7895,-7.2085,0.6153,0.6153,140.5024);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#393B3D").s().p("AghgeIBDALIAAAnIhDAMg");
	this.shape_41.setTransform(10.9378,-8.9793,0.6153,0.6153,140.5024);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#76797A").s().p("AhCAAQAAgSADgbICCAaIAAAnIiCAZQgDgaAAgTg");
	this.shape_42.setTransform(11.4601,-9.4098,0.6153,0.6153,140.5024);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#393B3D").s().p("AgTgIIAbgLIAMAcIgbALg");
	this.shape_43.setTransform(-7.3433,13.8234,0.6153,0.6153,140.5024);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#F9FCFF","#76797A"],[0,1],-2.5,2.6,4.6,-4.5).s().p("AgogCIATgmQASAOAOAPQARAQAOASIgmATg");
	this.shape_44.setTransform(-1.6889,17.8538,0.6153,0.6153,140.5024);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#F9FCFF","#76797A"],[0,1],-0.2,3.1,2.4,-2.9).s().p("AgNAdIgNgdIAZghQARAfALAkg");
	this.shape_45.setTransform(-8.2084,16.1112,0.6153,0.6153,140.5024);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#F9FCFF","#76797A"],[0,1],0.7,-1.8,-0.7,1.6).s().p("AgRgPIAXgFIAMAcIgUANg");
	this.shape_46.setTransform(-6.5785,12.2362,0.6153,0.6153,140.5024);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#76797A").s().p("Ag0AHIBMgyQASAgALAkIhaATg");
	this.shape_47.setTransform(-7.3359,14.6546,0.6153,0.6153,140.5024);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#F9FCFF","#76797A"],[0,1],1.5,-1.5,-1.3,1.3).s().p("AgVgFIAQgQIAbAcIgQAPg");
	this.shape_48.setTransform(-1.059,11.3146,0.6153,0.6153,140.5024);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#393B3D").s().p("AgqAOIApg3IAsArIg4Apg");
	this.shape_49.setTransform(-1.3712,14.4424,0.6153,0.6153,140.5024);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#76797A").s().p("AhFApIBLhtQASAOAPAPQARARAOASIhuBJg");
	this.shape_50.setTransform(-1.4553,15.4287,0.6153,0.6153,140.5024);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#393B3D").s().p("AgTgIIAbgLIAMAcIgbALg");
	this.shape_51.setTransform(7.3932,-13.8118,0.6153,0.6153,140.5024);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#F9FCFF","#76797A"],[0,1],2.3,-2.3,-1.5,1.7).s().p("AgLAMQgQgPgNgSIAmgTIAsArIgTAnQgUgPgOgPg");
	this.shape_52.setTransform(1.7486,-17.8303,0.6153,0.6153,140.5024);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#F9FCFF","#76797A"],[0,1],1.1,-2.9,-0.6,1.8).s().p("AgagiIAoAGIANAcIgZAiQgSgggKgkg");
	this.shape_53.setTransform(8.2582,-16.0996,0.6153,0.6153,140.5024);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#F9FCFF","#76797A"],[0,1],0.3,2.7,2.9,-3.6).s().p("AgRgHIAUgNIAPAjIgXAGg");
	this.shape_54.setTransform(6.6381,-12.2127,0.6153,0.6153,140.5024);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#76797A").s().p("Ag0gYIBagTIAPAlIhMAyQgTghgKgjg");
	this.shape_55.setTransform(7.3858,-14.6429,0.6153,0.6153,140.5024);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#F9FCFF","#76797A"],[0,1],-0.9,0.9,3.1,-3.1).s().p("AgVgFIAQgQIAbAbIgPAQg");
	this.shape_56.setTransform(1.1186,-11.2911,0.6153,0.6153,140.5024);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#393B3D").s().p("AgpgBIA3goIAdAcIgpA3g");
	this.shape_57.setTransform(1.419,-14.4091,0.6153,0.6153,140.5024);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#76797A").s().p("AgnAoQgQgQgNgSIBthLIAcAdIhJBuQgUgPgPgPg");
	this.shape_58.setTransform(1.515,-15.4052,0.6153,0.6153,140.5024);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#393B3D").s().p("AgTAIIALgbIAcAMIgMAbg");
	this.shape_59.setTransform(4.5638,14.9923,0.6153,0.6153,140.5024);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#F9FCFF","#76797A"],[0,1],0,3.1,0,-6.9).s().p("AgeAWIgPgoQAbgDASAAQATAAAaADIgNAog");
	this.shape_60.setTransform(11.2222,13.5904,0.6153,0.6153,140.5024);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#F9FCFF","#76797A"],[0,1],1.2,1.9,-1.2,-4.1).s().p("AgbAPIgHgpQAlALAfARIghAZg");
	this.shape_61.setTransform(5.0216,17.3857,0.6153,0.6153,140.5024);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#F9FCFF","#76797A"],[0,1],-0.5,-1.6,0.9,1.8).s().p("AgUADIAOgUIAbAMIgGAXg");
	this.shape_62.setTransform(4.1733,13.261,0.6153,0.6153,140.5024);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#76797A").s().p("AgrAmIAThaQAkALAgASIgyBMg");
	this.shape_63.setTransform(4.4531,15.8012,0.6153,0.6153,140.5024);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#F9FCFF","#76797A"],[0,1],0,-2.1,0,1.8).s().p("AgTALIAAgVIAnAAIAAAVg");
	this.shape_64.setTransform(7.2501,8.7714,0.6153,0.6153,140.5024);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#393B3D").s().p("AgTAiIgMhDIA/AAIgMBDg");
	this.shape_65.setTransform(9.009,10.9295,0.6153,0.6153,140.5024);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#76797A").s().p("AgTBDIgaiCQAbgDASAAQATAAAaADIgZCCg");
	this.shape_66.setTransform(9.4514,11.442,0.6153,0.6153,140.5024);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#393B3D").s().p("AgUAIIANgbIAcAMIgMAbg");
	this.shape_67.setTransform(-4.5356,-14.9828,0.6153,0.6153,140.5024);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#F9FCFF","#76797A"],[0,1],0,-2.7,0.1,2.8).s().p("AgtASIAPgnIA+AAIANAnQgUAEgZAAQgXAAgWgEg");
	this.shape_68.setTransform(-11.1723,-13.5788,0.6153,0.6153,140.5024);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#F9FCFF","#76797A"],[0,1],-0.4,-2.4,1.7,2.1).s().p("AghgBIAggZIAdAMIAGApQgkgKgfgSg");
	this.shape_69.setTransform(-4.9836,-17.3643,0.6153,0.6153,140.5024);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#F9FCFF","#76797A"],[0,1],1.8,1.6,-0.7,-4.7).s().p("AgUAGIAFgXIAkAPIgNAUg");
	this.shape_70.setTransform(-4.1136,-13.2375,0.6153,0.6153,140.5024);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#76797A").s().p("AgrAYIAyhMIAlAPIgTBaQgkgKgggTg");
	this.shape_71.setTransform(-4.4053,-15.7679,0.6153,0.6153,140.5024);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#F9FCFF","#76797A"],[0,1],0,1.3,0,-4.4).s().p("AgTALIAAgVIAnAAIAAAVg");
	this.shape_72.setTransform(-7.1904,-8.7479,0.6153,0.6153,140.5024);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#393B3D").s().p("AgeAjIALhFIAnAAIAMBFg");
	this.shape_73.setTransform(-8.971,-10.9081,0.6153,0.6153,140.5024);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#76797A").s().p("AgtBAIAaiCIAnAAIAZCCQgUADgZAAQgXAAgWgDg");
	this.shape_74.setTransform(-9.3917,-11.4185,0.6153,0.6153,140.5024);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#D0D2D4").s().p("AjhDhQhdhdAAiEQAAiDBdheQBehdCDAAQCEAABdBdQBeBeAACDQAACEheBdQhdBeiEAAQiDAAheheg");
	this.shape_75.setTransform(0.0069,0.011,0.6156,0.6156,140.5005);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-19.6,-19.6,39.3,39.3), null);


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

	// Layer_2
	this.instance = new lib.door();
	this.instance.setTransform(-48.5,-61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-48.5,-61,97,122), null);


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

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BCBCBC").s().p("AgJBrIgkjWIAQAHIAOB8IAPAIIAEBIIARgJIAMhDIANgEIgPBLIgNAJg");
	this.shape.setTransform(11.2375,51.7625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(109,106,104,0.992)").s().p("AhmkzIAPAAQBWAiBnIAIABBFQh0pPhZgYg");
	this.shape_1.setTransform(-1.9,-29.2375);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Layer_1
	this.instance = new lib.backdoor();
	this.instance.setTransform(-16,-62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-16,-62.5,32,125.1), null);


(lib.Path_4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AgSL7IAA31IAlAAIAAX1g");
	this.shape.setTransform(1.9,76.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,3.8,152.6), null);


(lib.Path_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgYA4QgKgXAAghQAAggAKgWQALgYANAAQAOAAALAYQAJAWABAgQgBAhgJAXQgLAXgOgBQgNABgLgXg");
	this.shape.setTransform(3.45,7.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,6.9,15.7), null);


(lib.Path_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#000000").s().p("AipAoQAEgiAZgWQAagYAjAAID4AAQAHAAheAYQh4AeACAag");
	this.shape.setTransform(16.9711,4.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,34,8.1), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFFFF").s().p("AgkMHIAA4NIBJAAIAAYNg");
	this.shape.setTransform(3.7,77.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,7.4,155), null);


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
	this.instance = new lib.Symbol67();
	this.instance.setTransform(-0.05,-29.8,0.3927,0.3927,0,0,0,0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.2,regY:0.8,scaleX:0.2704,scaleY:0.2389,x:-0.1,y:0.25},9,cjs.Ease.quadIn).to({regX:0,regY:0.5,scaleX:0.3927,scaleY:0.3927,x:-0.05,y:0.2},5).wait(90).to({_off:true},1).wait(595));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.8,-73.3,42.1,84.8);


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

	// Layer_2
	this.instance = new lib.Symbol63();
	this.instance.setTransform(0.85,-12.95,1.0934,1.093,0,0,0,0.8,-11.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(9));

	// Layer_1
	this.instance_1 = new lib.Symbol62();
	this.instance_1.setTransform(1.1,-12.95,1.0934,1.0958,0,0,0,1,-11.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({_off:true},1).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-27.4,27.299999999999997,27.4);


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

	// Layer_10
	this.instance = new lib.Symbol69("synched",0);
	this.instance.setTransform(84.15,-25.9,1,1,0,0,0,2,-14.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56).to({_off:false},0).wait(69));

	// Layer_9
	this.instance_1 = new lib.Symbol69("synched",0);
	this.instance_1.setTransform(31.15,-25.9,1,1,0,0,0,2,-14.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).wait(85));

	// Layer_8
	this.instance_2 = new lib.Symbol69("synched",0);
	this.instance_2.setTransform(-21.85,-25.9,1,1,0,0,0,2,-14.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).wait(105));

	// Symbol_68
	this.instance_3 = new lib.Symbol68("single",0);
	this.instance_3.setTransform(82.2,-13.7,1,1,0,0,0,0,-13.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(63).to({_off:false},0).wait(62));

	// Symbol_68
	this.instance_4 = new lib.Symbol68("single",0);
	this.instance_4.setTransform(29.05,-13.7,1,1,0,0,0,0,-13.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45).to({_off:false},0).wait(80));

	// Symbol_68
	this.instance_5 = new lib.Symbol68("single",0);
	this.instance_5.setTransform(-24.1,-13.7,1,1,0,0,0,0,-13.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(25).to({_off:false},0).wait(100));

	// Symbol_68
	this.instance_6 = new lib.Symbol68("single",0);
	this.instance_6.setTransform(-77.25,-13.7,1,1,0,0,0,0,-13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(10).to({startPosition:5},0).wait(115));

	// Layer_7
	this.instance_7 = new lib.Symbol70("synched",0);
	this.instance_7.setTransform(5.05,-13.95,1,1,0,0,0,0,-3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(125));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.9,-85.9,195.3,87.60000000000001);


(lib.Symbol51 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Aj6BoQgTgpgwguIDGi2QA0gpBEABIEgAEQAmgDgMBCIgcFFIopATQApg1gZgxg");
	mask.setTransform(-0.0295,-20.6262);

	// Layer_2
	this.instance = new lib.Symbol52();
	this.instance.setTransform(-81.45,-56.1,1,1,0,0,0,0,-66.5);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({x:130.8},15).to({_off:true},1).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.8,-41.2,63.6,41.2);


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

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AZrI+IgIgQQhkjFkRgTQk9AQgyEnMggyAAXQgYkklPgVQkjACgwEBIg6AAQgggBgGhDIgLj7QAGgzAngyQgKgxAmg1QBihUC9hJIAGgDQAcAQA7gIQGLl6C2iLIgKgVQCohTEGgCQN9gaN7ATIAGAAIHpASQBdgDAyCCIB+GyIgBAFIhFgGIg0BaQAICZgkCrICpADIgNE5IAEAJIgmAhIk5AXQAIg7gOg6gAlcCbIBDAAIACiRIhGAAgArWBKIClAGIAFhDIiogEgAv4nCIjFC3QAvAvATAoQAZAygpA1IIqgUIAclFQAMhDgmADIkggEIgDAAQhDAAgzAog");
	mask.setTransform(0,-69.1217);

	// Layer_2
	this.instance = new lib.Symbol50();
	this.instance.setTransform(-299.85,-96.75,1,1,0,0,0,0,-70.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:315.15,y:-80.8},29).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.8,-138.2,401.70000000000005,138.2);


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
	this.instance = new lib.Symbol36();
	this.instance.setTransform(-79.95,-65.25,0.7464,0.7464,0,0,0,0.1,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:0.05},399).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-285.3,-131.1,490.70000000000005,131.2);


(lib.Symbol46 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol39();
	this.instance.setTransform(-30,-60.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:30},399).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.8,-121.1,293.6,121.1);


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
	this.instance = new lib.Path_0();
	this.instance.setTransform(-7.55,-4.1,1,1,0,0,0,16.9,4);
	this.instance.alpha = 0.1992;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CDCDCD").s().p("Aj0AoQAEghAZgXQAbgYAiAAIE0AAQAjAAAaAYQAZAXAEAhg");
	this.shape.setTransform(0,-4.05);

	this.instance_1 = new lib.Path();
	this.instance_1.setTransform(-1.15,-85.8,1,1,0,0,0,3.7,77.5);
	this.instance_1.alpha = 0.5;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E12229").s().p("AhYAMIAAgXICxAAIAAAXg");
	this.shape_1.setTransform(0.3,-157.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E7E7E7").s().p("AhYAYIAAguICxAAIAAAug");
	this.shape_2.setTransform(0.3,-160.95);

	this.instance_2 = new lib.Path_3();
	this.instance_2.setTransform(-1.15,-166.75,1,1,0,0,0,3.5,7.9);
	this.instance_2.alpha = 0.5;

	this.instance_3 = new lib.Path_4();
	this.instance_3.setTransform(-6.75,-84.65,1,1,0,0,0,1.9,76.3);
	this.instance_3.alpha = 0.1016;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E12229").s().p("AhYAMIAAhdICxBGIAABdg");
	this.shape_3.setTransform(0.3,-90.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E12229").s().p("AhYAMIAAhdICxBGIAABdg");
	this.shape_4.setTransform(0.3,-107.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B5D0CB").s().p("AhYBVIAAhQQAAgkAagaQAagbAkAAQAlAAAbAbQAZAaAAAkIAABQg");
	this.shape_5.setTransform(0.3,-169.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E12229").s().p("AhYAMIAAhdICxBGIAABdg");
	this.shape_6.setTransform(0.3,-124.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A3B9B6").s().p("AhYNSIAA5JQAAglAagaQAagbAkAAQAlAAAbAbQAZAaAAAlIAAZJg");
	this.shape_7.setTransform(0.3,-92.875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_3},{t:this.instance_2},{t:this.shape_2},{t:this.shape_1},{t:this.instance_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol42, new cjs.Rectangle(-24.4,-177.8,48.9,177.8), null);


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
	this.instance = new lib.Symbol40();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol41, new cjs.Rectangle(-129,-112.5,258,225), null);


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

	// Layer_2
	this.instance = new lib.Symbol14();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-718.2669},49).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#555E61","#222B2E"],[0,1],0,-37.4,0,36.8).s().p("Aj/EAQhqhqAAiWQAAiVBqhqQBqhqCVAAQCWAABqBqQBqBqAACVQAACWhqBqQhqBqiWAAQiVAAhqhqg");
	this.shape.setTransform(0.0069,0.011,0.6156,0.6156,140.5005);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#222729").s().p("AlCFDQiGiFAAi+QAAi8CGiGQCGiGC8AAQC+AACFCGQCGCGAAC8QAAC+iGCFQiFCGi+AAQi8AAiGiGg");
	this.shape_1.setTransform(0.0069,0.011,0.6156,0.6156,140.5005);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#555E61","#394042","#222729","#121516","#080A0C","#050708"],[0,0.176,0.365,0.565,0.769,1],-20.9,47.8,20.3,-49.1).s().p("AlVFWQiOiNAAjJQAAjHCOiOQCOiODHAAQDJAACNCOQCOCNAADIQAADJiOCNQiNCOjJAAQjIAAiNiOg");
	this.shape_2.setTransform(0.0069,0.011,0.6156,0.6156,140.5005);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},49).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.8,-29.8,59.6,59.6);


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

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AnhN6IgCm5IgDgbQgDh+gbgyIgHgDIkrAAIAApdIgFAAIAAoPIZ2AAIAAIPIgBAAIAATkg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:50.75,y:-22.75}).wait(1).to({graphics:null,x:0,y:0}).wait(279));

	// Symbol_6
	this.instance = new lib.Symbol6();
	this.instance.setTransform(-26,-56.7,1,1,0,0,0,-12.5,-61.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(279));

	// Layer_5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AjEFzQh1oihUgBIAAjCIMbAAIgDLlg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:16.75,y:-35.125}).wait(1).to({graphics:null,x:0,y:0}).wait(279));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.8,-84.6,130.8,150.89999999999998);


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
	this.instance = new lib.Symbol9();

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(279));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-48.5,-61.8,170.4,123.69999999999999);


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

	// Layer_8
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.086)").s().p("AheAWIgsgrIA/AAIDVAAIgsArg");
	this.shape.setTransform(-100.05,24.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.149)").s().p("Ag5AaIgIAAIg/AAIgMgMQgRgQgDgXIBqAAIBDAAIBwAAIgCACIAmAlIgLAMg");
	this.shape_1.setTransform(-101.0625,19.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.2)").s().p("AgUAMQAAgHAFgFIAMgMIAYAYg");
	this.shape_2.setTransform(-115.4125,25.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AB0EXQgRAAgEgBQgEgBgxgyIghggQgMgOgUgBQgUABgOAOIAAAAQgZAZglAAQgkgCgZgaQgYgZABgjQACgiAZgZIAagbIgLgLQgFgFAAgHIArAAIAyAyIgNANQgFAFgHAAQgIAAgFgFIgMgNIgcAbQgPAPABAWQABAVARANQAOALATgCQASAAANgNQAZgZAjAAQAiAAAZAZIAhAhQBSBQgIAAIgbgBgAgqBDIgsgsIC8AAIgsAsQgVAVgdAAQgdAAgVgVgAhDgUIAHgBIDPAAIgBABgAiCgUIgBgBIA/AAIABABgAAKhJIAdgRIgGgGIhXANIgHAGIAFAEIhqAAIgBgKQAAgdAVgWIBkhkIAmAmIBNhNQAFgGAHAAQAIAAAFAGQAFAEAAAIQAAAHgFAFIhOBOIBMBLIBNhNQAFgFAIAAQAHAAAFAFQAGAFAAAHQAAAIgGAFIhLBLg");
	this.shape_3.setTransform(-100.827,24);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.757)").s().p("Ag1AlIAIAAIgHABgAgqgOIgEgEIAGgGIBXgNIAHAGIgdARg");
	this.shape_4.setTransform(-102.3,18.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("ACvB9IgbAAIgVgBQgEgBgxgzIgighQgNgOgUAAQgUAAgOAOIAAAAQgaAaglAAQglgBgZgbQgYgaABgiQACgjAZgZIAcgdQgSgcAlAkQAlAlgcgSIgfAeQgPAPACAWQABAVARANQAOALATgCQATgBANgNQAZgYAiAAQAkAAAZAYIAiAiQBSBQgIAAIAAAAg");
	this.shape_5.setTransform(-103.849,39.602,0.9859,0.9859);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#333333").s().p("AASBVIhmhmQgKgLAAgPQAAgPAKgKIAagaICZCYIgaAbQgKAKgPAAQgPAAgLgKg");
	this.shape_6.setTransform(-112.8885,28.433,0.4903,0.4903);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("Ag+CjIhkhkQgVgVAAgeQAAgcAVgVIBkhlIAmAmIBNhNQAFgGAHAAQAIAAAFAGQAFAFAAAHQAAAIgFAFIhOBNIBMBLIBNhNQAGgFAHAAQAIAAAEAFQAGAFAAAIQAAAHgGAFIhNBNIAmAmIhlBkQgUAVgdAAQgdAAgWgVgAhKAMIgHAGIAcAcIgoAXIAGAGIBXgMIAHgHIgagbIAmgXIgGgGg");
	this.shape_7.setTransform(-98.85,14.375);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.757)").s().p("AhBA1IAAhpICDAAIAABpg");
	this.shape_8.setTransform(-101.725,19.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	// Layer_3
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.137)").s().p("AjEAWQgKgNgHgOIgFgRIDMAAIAOAYIAPgYIDMAAIgFARQgHAOgKANg");
	this.shape_9.setTransform(117.4625,-15.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.11)").s().p("AhIggIgVAAQgaAAgXgKQgYgKgSgSIgMgNIGJAAIgLANQgTASgYAKQgXAKgaAAIgVAAIhJB0g");
	this.shape_10.setTransform(117.475,-4.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9}]}).wait(1));

	// Layer_1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E31E26").s().p("AjbIjIhAAAQhOAAhIgeQhIgeg3g3Qg4g3gehIQgehIAAhOIDTAAImOp8QgggzgKg8QgKg8ANg6QAOg7AjgwQAigxA0ggIMATLIMAzMQAzAgAjAxQAiAxAOA7QANA6gKA8QgJA7ggAzImPJ8IDTAAQAABOgeBIQgeBIg3A4Qg3A3hIAeQhIAehOAAIhAAAIjcFhg");
	this.shape_11.setTransform(117.4593,-25.921,0.3302,0.3302);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(1));

	// body_car
	this.instance = new lib.bodycar_1();
	this.instance.setTransform(0,0,1,1,0,0,0,202,94);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-202,-94,404,188), null);


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

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_109 = new cjs.Graphics().p("AzHFUICeqnMAjxAAAIieKng");
	var mask_graphics_110 = new cjs.Graphics().p("AzHFUICeqnMAjxAAAIieKng");
	var mask_graphics_111 = new cjs.Graphics().p("AzHFUICeqnMAjxAAAIieKng");
	var mask_graphics_112 = new cjs.Graphics().p("AzHFUICeqnMAjxAAAIieKng");
	var mask_graphics_113 = new cjs.Graphics().p("AzHFUICeqnMAjxAAAIieKng");
	var mask_graphics_114 = new cjs.Graphics().p("AzHFUICeqnMAjxAAAIieKng");
	var mask_graphics_115 = new cjs.Graphics().p("AzHFUICeqnMAjxAAAIieKng");
	var mask_graphics_116 = new cjs.Graphics().p("AzHFUICeqnMAjxAAAIieKng");
	var mask_graphics_117 = new cjs.Graphics().p("AzHFUICeqnMAjxAAAIieKng");
	var mask_graphics_118 = new cjs.Graphics().p("AzHFUICeqnMAjxAAAIieKng");
	var mask_graphics_119 = new cjs.Graphics().p("AzHFUICeqnMAjxAAAIieKng");
	var mask_graphics_184 = new cjs.Graphics().p("AzHFUICeqnMAjxAAAIieKng");
	var mask_graphics_185 = new cjs.Graphics().p("AzHFUICeqnMAjxAAAIieKng");
	var mask_graphics_186 = new cjs.Graphics().p("AzHFUICeqnMAjxAAAIieKng");
	var mask_graphics_187 = new cjs.Graphics().p("AzHFUICeqnMAjxAAAIieKng");
	var mask_graphics_188 = new cjs.Graphics().p("AzHFUICeqnMAjxAAAIieKng");
	var mask_graphics_189 = new cjs.Graphics().p("AzHFUICeqnMAjxAAAIieKng");
	var mask_graphics_190 = new cjs.Graphics().p("AzHFUICeqnMAjxAAAIieKng");
	var mask_graphics_191 = new cjs.Graphics().p("AzHFUICeqnMAjxAAAIieKng");
	var mask_graphics_192 = new cjs.Graphics().p("AzHFUICeqnMAjxAAAIieKng");
	var mask_graphics_193 = new cjs.Graphics().p("AzHFUICeqnMAjxAAAIieKng");
	var mask_graphics_194 = new cjs.Graphics().p("AzHFUICeqnMAjxAAAIieKng");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(109).to({graphics:mask_graphics_109,x:-214.525,y:-20.975}).wait(1).to({graphics:mask_graphics_110,x:-193.525,y:-20.975}).wait(1).to({graphics:mask_graphics_111,x:-172.525,y:-20.975}).wait(1).to({graphics:mask_graphics_112,x:-151.525,y:-20.975}).wait(1).to({graphics:mask_graphics_113,x:-130.525,y:-20.975}).wait(1).to({graphics:mask_graphics_114,x:-109.525,y:-20.975}).wait(1).to({graphics:mask_graphics_115,x:-88.525,y:-20.975}).wait(1).to({graphics:mask_graphics_116,x:-67.525,y:-20.975}).wait(1).to({graphics:mask_graphics_117,x:-46.525,y:-20.975}).wait(1).to({graphics:mask_graphics_118,x:-25.525,y:-20.975}).wait(1).to({graphics:mask_graphics_119,x:-4.525,y:-20.975}).wait(65).to({graphics:mask_graphics_184,x:-4.525,y:-20.975}).wait(1).to({graphics:mask_graphics_185,x:17.575,y:-20.975}).wait(1).to({graphics:mask_graphics_186,x:39.675,y:-20.975}).wait(1).to({graphics:mask_graphics_187,x:61.775,y:-20.975}).wait(1).to({graphics:mask_graphics_188,x:83.875,y:-20.975}).wait(1).to({graphics:mask_graphics_189,x:105.975,y:-20.975}).wait(1).to({graphics:mask_graphics_190,x:128.075,y:-20.975}).wait(1).to({graphics:mask_graphics_191,x:150.175,y:-20.975}).wait(1).to({graphics:mask_graphics_192,x:172.275,y:-20.975}).wait(1).to({graphics:mask_graphics_193,x:194.375,y:-20.975}).wait(1).to({graphics:mask_graphics_194,x:216.475,y:-20.975}).wait(6));

	// Layer_2
	this.instance = new lib.Symbol71();
	this.instance.setTransform(-3.05,-27.3,1,1,0,0,0,0,-46.9);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(109).to({_off:false},0).wait(91));

	// Layer_1
	this.instance_1 = new lib.Symbol66("synched",0);
	this.instance_1.setTransform(1.6,-13.7,1,1,0,0,180,0,-13.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(99).to({startPosition:99},0).to({alpha:0,startPosition:109},5).to({_off:true},6).wait(90));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-101.8,-77.6,201,90.6);


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
	this.instance = new lib.Symbol41();
	this.instance.setTransform(-52,-112.5);
	this.instance.alpha = 0.6406;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:7},399).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-181,-225,317,225.1);


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
	this.instance = new lib.Symbol42();
	this.instance.setTransform(200,0,0.3452,0.3452);

	this.instance_1 = new lib.Symbol42();
	this.instance_1.setTransform(0,0,0.3452,0.3452);

	this.instance_2 = new lib.Symbol42();
	this.instance_2.setTransform(-200,0,0.3452,0.3452);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol43, new cjs.Rectangle(-208.4,-61.4,416.9,61.5), null);


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
	this.instance = new lib.Symbol8("single",0);
	this.instance.setTransform(-0.5,-9);

	this.instance_1 = new lib.Symbol10("single",0);
	this.instance_1.setTransform(199.5,-18);

	this.instance_2 = new lib.Symbol3();
	this.instance_2.setTransform(150,-2,1,1,0,0,0,150,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(-202,-94,404,188), null);


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

	// Layer_1
	this.instance = new lib.Symbol43();
	this.instance.setTransform(-300,-30.6,1,1,0,0,0,0,-30.6);

	this.instance_1 = new lib.Symbol43();
	this.instance_1.setTransform(300,-30.6,1,1,0,0,0,0,-30.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol44, new cjs.Rectangle(-508.4,-61.4,1016.9,61.5), null);


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
	this.instance = new lib.Symbol37();
	this.instance.setTransform(65.5,-17.9,1,1,0,0,0,65.5,-17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-19.9},14).to({y:-17.9},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-202,-131.7,535,225.7);


(lib.Symbol15copy = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol51("synched",0);
	this.instance.setTransform(-157.8,-32.7,1,1,0,0,0,-0.1,-20.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(440));

	// Layer_2
	this.instance_1 = new lib.Symbol49("synched",0);
	this.instance_1.setTransform(-68.05,-4.25,1,1,0,0,0,0,-69.2);
	this.instance_1.alpha = 0.1406;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(440));

	// Symbol_13
	this.instance_2 = new lib.Symbol13copy("synched",0);
	this.instance_2.setTransform(-223.9,68.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(440));

	// Symbol_13
	this.instance_3 = new lib.Symbol13copy("synched",0);
	this.instance_3.setTransform(58.1,68.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(440));

	// Symbol_8
	this.instance_4 = new lib.Symbol38("synched",0);
	this.instance_4.setTransform(-3,-14,1,1,0,0,0,65.5,-17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(440));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-270.5,-92.1,404,190.89999999999998);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","#FFFFFF","rgba(255,255,255,0)"],[0,0.922,1],-270.3,0,270.4,0).s().p("EgqPAHUIAAunMBUeAAAIAAOng");
	this.shape.setTransform(-165.3,-41.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

	// Layer_1
	this.instance = new lib.Symbol44();
	this.instance.setTransform(0,-30.6,1,1,0,0,0,0,-30.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:196},19).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-508.4,-88,1212.9,93.7);


(lib.Symbol36d = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol45("synched",0);
	this.instance.setTransform(-155.1,117.4,0.886,0.886,0,0,0,195.9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(399).to({startPosition:19},0).to({_off:true},1).wait(200));

	// Symbol_15_copy
	this.instance_1 = new lib.Symbol15copy("synched",0);
	this.instance_1.setTransform(175.25,34.85,0.8473,0.8473,0,0,0,100.8,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(399).to({startPosition:399},0).to({_off:true},1).wait(200));

	// Isolation_Mode
	this.instance_2 = new lib.Symbol46("synched",0);
	this.instance_2.setTransform(-117.45,56.8,1,1,0,0,0,0,-60.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(399).to({startPosition:399},0).to({_off:true},1).wait(200));

	// Layer_4
	this.instance_3 = new lib.Symbol47("synched",0);
	this.instance_3.setTransform(168.05,51.9,1,1,0,0,0,0,-65.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(399).to({startPosition:399},0).to({_off:true},1).wait(200));

	// Asset_4_png
	this.instance_4 = new lib.Symbol48("synched",0);
	this.instance_4.setTransform(79.95,-24,1,1,0,0,0,0,-112.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(399).to({startPosition:399},0).to({_off:true},1).wait(200));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-779,-136.4,1152.4,258.8);


// stage content:
(lib.C_v2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_11
	this.instance = new lib.Symbol32();
	this.instance.setTransform(400.5,128.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},16).wait(359).to({alpha:1},15).wait(10));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5A+IAAh7IAjAAIAAAoIAeAAQAZAAAMALQANAKAAATQAAAVgOALQgOALgaAAgAgWAlIAWAAQALAAAFgFQAGgFAAgIQAAgJgGgFQgFgEgLAAIgWAAg");
	this.shape.setTransform(472.025,92.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhCA9IACgeIAFABQAIAAAEgGQAEgGABgJIADgXIABgyIBpAAIAAB7IgkAAIAAheIgmAAIgBAWQgBAYgDAQQgEAQgJAJQgIAJgPAAQgHAAgLgCg");
	this.shape_1.setTransform(456.025,92.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgxBGQgTgVAAgoQAAgkARgWQAQgXAhgGIA7gMIAEAfIgzAKQgVAEgKAKQgLAJgBASQAIgJALgEQALgFANAAQASAAANAHQANAIAHAMQAIANgBARQAAASgIANQgJAOgPAIQgPAHgUAAQgfAAgTgVgAgVAJQgIAIAAAOQAAAOAJAJQAIAJAOAAQANAAAIgJQAJgJAAgOQAAgOgJgIQgIgIgNAAQgNAAgKAIg");
	this.shape_2.setTransform(441.55,89.825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag2BSQgKgDgGgFIANgaQAFAEAFACQAFACAGAAQAHAAAFgDQAEgEAEgIIAAgBIg1h8IAlAAIAiBUIAihUIAjAAIg4CCQgIAWgMAIQgMAJgSAAQgKAAgJgDg");
	this.shape_3.setTransform(426.575,94.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhDBVIAAioIAjAAIAAAPQANgQAYAAQASAAAOAIQAOAIAIAOQAIAPAAASQAAAUgIANQgIAPgOAHQgOAIgSAAQgWAAgOgOIAAA5gAgWguQgJAKAAAPQAAAQAJAIQAIAKAOAAQANAAAJgKQAJgIAAgQQAAgPgJgKQgJgIgNgBQgOABgIAIg");
	this.shape_4.setTransform(412.05,94.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhuDCIAAhKIBJAAIAAjjIhJAbIAAhNIBfgkIA9AAIAAE5IBBAAIAABKg");
	this.shape_5.setTransform(388.45,93.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E31E26").s().p("AsSHuQhSAAg6g6Qg8g8AAhSIAAsTIbtAAQBSAAA7A7QA7A6gBBTIAAJLQABBSg7A8Qg7A6hSAAg");
	this.shape_6.setTransform(425.3086,92.3945,0.6823,0.6823,0,180,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(400));

	// Layer_4
	this.instance_1 = new lib.Symbol65();
	this.instance_1.setTransform(289.15,99.45,1,1,0,0,0,0,-8.6);

	this.instance_2 = new lib.Symbol64();
	this.instance_2.setTransform(315.3,102.2,1,1,0,0,0,0,-5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(400));

	// Layer_3
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("AgUA1QgOgJgJgNQgIgOAAgRQAAgQAIgOQAJgNAOgJQANgHARgBQANAAALAFQALAEAHAIIgFAGQgOgOgXgBQgNAAgNAHQgMAHgHAMQgHAMAAAOQAAAPAHAMQAHALAMAHQANAIANAAQAXAAAOgPIAFAGQgHAIgLAEQgLAEgNABQgRgBgNgHg");
	this.shape_7.setTransform(194.55,285.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333333").s().p("AguA8IAAh3IAvAAQATABAKAHQALAIAAAPQAAAKgGAHQgFAHgKAEQANABAHAHQAHAIAAAMQAAAPgLAJQgLAHgVABgAglA0IAqAAQAhAAAAgZQAAgNgIgGQgJgFgQgBIgqAAgAglgDIAmAAQAPgBAIgFQAIgHAAgLQAAgMgIgGQgIgGgPAAIgmAAg");
	this.shape_8.setTransform(182.375,285.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333333").s().p("AA2BJIAAgbIhsAAIAAAbIgIAAIAAgjIAHAAQAMgBAEgTQAFgSABghIABgnIBMAAIAABuIATAAIAAAjgAgZggQgBAdgEARQgDASgIAGIBNAAIAAhmIg8AAg");
	this.shape_9.setTransform(168.65,287.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#333333").s().p("AgRAnQgKgFgGgLQgFgKAAgNQAAgMAFgKQAGgKAKgHQALgFALAAQALAAAJAEQAJAFAFAIIgGAEQgFgGgHgEQgHgDgJAAQgJAAgIAEQgIAFgFAJQgFAIAAAKQAAALAFAJQAFAIAIAFQAIAEAJABQAJgBAHgDQAHgDAFgHIAGAFQgFAIgJAEQgJAEgLAAQgLAAgLgGg");
	this.shape_10.setTransform(153.275,287.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("AAoAsIAAhKIgmA/IgDAAIgng/IAABKIgHAAIAAhXIAIAAIAnBCIAohCIAIAAIAABXg");
	this.shape_11.setTransform(137.375,287.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#333333").s().p("AgWAnQgKgFgGgLQgFgKAAgNQAAgMAFgKQAGgLAKgFQAKgGAMAAQANAAAKAGQAKAFAGALQAFAKAAAMQAAANgFAKQgGALgKAFQgKAGgNAAQgMAAgKgGgAgRggQgIAFgFAJQgFAIAAAKQAAALAFAJQAFAIAIAFQAIAEAJABQAKgBAIgEQAIgFAFgIQAFgJAAgLQAAgKgFgIQgFgJgIgFQgIgEgKAAQgJAAgIAEg");
	this.shape_12.setTransform(125.325,287.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#333333").s().p("AAeAsIAAgpIg7AAIAAApIgIAAIAAhXIAIAAIAAAoIA7AAIAAgoIAIAAIAABXg");
	this.shape_13.setTransform(114.25,287.325);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#333333").s().p("AgWAnQgKgFgGgLQgFgKAAgNQAAgMAFgKQAGgLAKgFQAKgGAMAAQANAAAKAGQAKAFAGALQAFAKAAAMQAAANgFAKQgGALgKAFQgKAGgNAAQgMAAgKgGgAgRggQgIAFgFAJQgFAIAAAKQAAALAFAJQAFAIAIAFQAIAEAJABQAKgBAIgEQAIgFAFgIQAFgJAAgLQAAgKgFgIQgFgJgIgFQgIgEgKAAQgJAAgIAEg");
	this.shape_14.setTransform(103.175,287.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#333333").s().p("AgdAsIAAhXIA7AAIAAAHIgzAAIAABQg");
	this.shape_15.setTransform(94.775,287.325);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#333333").s().p("AgrA9IAAh4IAIAAIAAAUQAFgKAKgGQAJgFALAAQANAAAKAGQAKAFAGALQAFAKAAANQAAANgFAJQgGALgKAFQgKAGgNAAQgKAAgKgGQgJgFgGgKIAAA1gAgRgwQgJAFgEAJQgFAIAAALQAAALAFAHQAEAJAJAFQAIAEAJAAQAKAAAIgEQAIgFAFgJQAFgHAAgLQAAgLgFgIQgFgJgIgFQgIgFgKAAQgJAAgIAFg");
	this.shape_16.setTransform(84.575,288.925);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("AglA7QgFgCgEgEIAEgGQAHAGAKABQAGAAAFgEQAEgEAEgIIAFgLIgohXIAJAAIAjBOIAjhOIAJAAIguBjQgEANgHAEQgGAFgJAAQgHAAgFgCg");
	this.shape_17.setTransform(73.375,289);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333333").s().p("AgDBPIAAgfQgZgBgOgNQgNgLAAgVQAAgTANgNQAOgLAZgBIAAgkIAHAAIAAAkQAZABANALQAOANAAATQAAAVgOALQgNANgZABIAAAfgAAEAoQAVgBAMgKQALgJAAgSQAAgQgLgJQgMgKgVgBgAgkgXQgLAJAAAQQAAARALAKQAMAKAVABIAAhKQgVABgMAKg");
	this.shape_18.setTransform(62.475,287.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("AAoAsIAAhKIgmA/IgDAAIgng/IAABKIgHAAIAAhXIAIAAIAnBCIAohCIAIAAIAABXg");
	this.shape_19.setTransform(274.475,270.875);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#333333").s().p("AguAsIAAhXIAJAAIAAAfIAaAAQAQABAIAHQAJAGAAANQAAAPgJAHQgJAIgRgBgAglAlIAYABQANAAAGgGQAHgGAAgLQAAgLgGgEQgHgFgNAAIgYAAgAAmAsIAAhXIAJAAIAABXg");
	this.shape_20.setTransform(261.325,270.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#333333").s().p("AAeAsIAAgpIg7AAIAAApIgIAAIAAhXIAIAAIAAAoIA7AAIAAgoIAJAAIAABXg");
	this.shape_21.setTransform(249.1,270.875);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#333333").s().p("AAcAsIAAgmQgPAHgPAAQgQAAgJgHQgJgGAAgOIAAgdIAJAAIAAAdQAAAKAHAFQAHAFAMAAQANAAAQgGIAAgrIAJAAIAABXg");
	this.shape_22.setTransform(237.875,270.875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#333333").s().p("AguAsIAAhXIAJAAIAAAfIAaAAQAQABAIAHQAJAGAAANQAAAPgJAHQgJAIgRgBgAglAlIAYABQANAAAGgGQAHgGAAgLQAAgLgGgEQgHgFgNAAIgYAAgAAmAsIAAhXIAJAAIAABXg");
	this.shape_23.setTransform(226.875,270.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#333333").s().p("AgXA7QgKgHgFgNQgGgNAAgSQAAgTAFgNQAFgNAKgHQAJgIAPgEIAngJIABAIIglAJQgNADgIAGQgJAGgEALQgEALgBAPQAFgLAKgHQAKgHANAAQANAAAJAFQAKAGAFAKQAGAJAAANQAAAMgGALQgFAKgKAFQgKAGgNAAQgOAAgKgHgAgQgJQgIAFgEAHQgFAIAAALQAAAKAFAJQAEAIAIAFQAIAFAJAAQAKAAAIgFQAIgFAFgIQAEgJAAgKQAAgLgEgIQgFgHgIgFQgIgFgKAAQgJAAgIAFg");
	this.shape_24.setTransform(214.925,268.775);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#333333").s().p("AgWAnQgKgGgGgJQgFgLAAgNQAAgMAFgKQAGgKAKgGQAKgGAMAAQANAAAKAGQAKAGAGAKQAFAKAAAMQAAANgFALQgGAJgKAGQgKAGgNAAQgMAAgKgGgAgRggQgIAGgFAIQgFAIAAAKQAAALAFAIQAFAJAIAFQAIAEAJAAQAKAAAIgEQAIgFAFgJQAFgIAAgLQAAgKgFgIQgFgIgIgGQgIgEgKAAQgJAAgIAEg");
	this.shape_25.setTransform(203.825,270.85);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#333333").s().p("AgRAnQgKgGgGgJQgFgLAAgNQAAgMAFgKQAGgLAKgFQALgGALAAQALAAAJAEQAJAFAFAIIgGAEQgFgHgHgDQgHgEgJABQgJAAgIAEQgIAFgFAJQgFAIAAAKQAAALAFAIQAFAJAIAFQAIAEAJAAQAJAAAHgDQAHgDAFgHIAGAFQgFAIgJAEQgJAEgLAAQgLAAgLgGg");
	this.shape_26.setTransform(189.525,270.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#333333").s().p("AgWAnQgKgGgGgJQgFgLAAgNQAAgMAFgKQAGgKAKgGQAKgGAMAAQANAAAKAGQAKAGAGAKQAFAKAAAMQAAANgFALQgGAJgKAGQgKAGgNAAQgMAAgKgGgAgRggQgIAGgFAIQgFAIAAAKQAAALAFAIQAFAJAIAFQAIAEAJAAQAKAAAIgEQAIgFAFgJQAFgIAAgLQAAgKgFgIQgFgIgIgGQgIgEgKAAQgJAAgIAEg");
	this.shape_27.setTransform(174.925,270.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#333333").s().p("AAeAsIAAgpIg7AAIAAApIgIAAIAAhXIAIAAIAAAoIA7AAIAAgoIAIAAIAABXg");
	this.shape_28.setTransform(163.85,270.875);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#333333").s().p("AgiAsIAAhXIAJAAIAAAfIAaAAQAQABAJAHQAIAGAAANQABAPgKAHQgJAIgQgBgAgZAlIAYABQANAAAHgGQAHgGAAgLQAAgLgHgEQgHgFgNAAIgYAAg");
	this.shape_29.setTransform(154.05,270.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333333").s().p("AgqAsIAAgIIAFABQAHAAADgHQAEgHABgKIADgaIABgfIA9AAIAABYIgIAAIAAhQIgtAAIgBAXQgBASgDAMQgCAMgFAIQgEAIgJAAIgHgBg");
	this.shape_30.setTransform(142.575,270.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#333333").s().p("AgTAnQgLgGgGgJQgFgLAAgNQAAgMAFgKQAGgKAJgGQAKgGALAAQAMAAAKAGQAJAGAGAJQAFALAAAMIAAACIhLAAQAAAKAFAIQAFAJAJAEQAIAEAKAAQAIAAAIgCQAHgEAFgGIAFAFQgGAHgJAFQgJADgKAAQgMAAgKgGgAgQghQgHAFgFAIQgEAHgBAJIBDAAQAAgJgFgHQgFgIgHgEQgIgFgJABQgIAAgIADg");
	this.shape_31.setTransform(132.975,270.85);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#333333").s().p("AgDAsIAAhQIgjAAIAAgHIBNAAIAAAHIgjAAIAABQg");
	this.shape_32.setTransform(123.925,270.875);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#333333").s().p("AAfAsIAAhKIg+BKIgHAAIAAhXIAIAAIAABKIA+hKIAHAAIAABXg");
	this.shape_33.setTransform(114.25,270.875);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#333333").s().p("AAeAsIAAgpIg7AAIAAApIgIAAIAAhXIAIAAIAAAoIA7AAIAAgoIAIAAIAABXg");
	this.shape_34.setTransform(102.75,270.875);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#333333").s().p("AgjAsIAAhXIAlAAQAOAAAIAFQAJAGAAALQAAAIgEAFQgFAFgIADQAUACAAASQAAAMgIAGQgJAGgQAAgAgbAlIAdAAQAaAAAAgRQgBgJgFgEQgGgEgMAAIgfAAgAgbgDIAcAAQALAAAHgEQAFgFAAgIQAAgIgFgEQgHgFgLAAIgcAAg");
	this.shape_35.setTransform(92.25,270.875);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333333").s().p("AgbAmQgIgHAAgLQAAgLAIgHQAHgGASAAIAdAAIAAgHQABgNgIgGQgGgGgNAAQgHAAgJACQgIADgFAGIgFgHQAHgFAJgEQAKgDAIAAQARAAAJAJQAJAIAAAQIAAA4IgIAAIAAgRQgFAJgHAEQgJAEgKAAQgPAAgJgHgAgVAHQgFAEgBAIQABAJAGAFQAGAFAMAAQAKAAAIgFQAIgFADgKIAAgRIgdAAQgNAAgGAGg");
	this.shape_36.setTransform(81.6,270.85);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#333333").s().p("AgrA9IAAh4IAIAAIAAAUQAFgKAKgGQAJgFALAAQANAAAKAGQAKAFAGALQAFAKAAANQAAANgFAJQgGALgKAFQgKAGgNAAQgKAAgKgGQgJgFgGgKIAAA1gAgRgwQgJAFgEAJQgFAIAAALQAAALAFAHQAEAJAJAFQAIAEAJAAQAKAAAIgEQAIgFAFgJQAFgHAAgLQAAgLgFgIQgFgJgIgFQgIgFgKAAQgJAAgIAFg");
	this.shape_37.setTransform(71.675,272.475);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#333333").s().p("AgRAnQgKgGgGgJQgFgLAAgNQAAgMAFgKQAGgLAKgFQALgGALAAQALAAAJAEQAJAFAFAIIgGAEQgFgHgHgDQgHgEgJABQgJAAgIAEQgIAFgFAJQgFAIAAAKQAAALAFAIQAFAJAIAFQAIAEAJAAQAJAAAHgDQAHgDAFgHIAGAFQgFAIgJAEQgJAEgLAAQgLAAgLgGg");
	this.shape_38.setTransform(60.825,270.85);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#333333").s().p("AgVAWQgJgJAAgNQAAgNAJgJQAJgIAMAAQANAAAJAIQAJAJAAANQAAANgJAJQgJAJgNAAQgMAAgJgJg");
	this.shape_39.setTransform(329,120.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#333333").s().p("AhdB2IAAjpIAwAAIAAAUQASgWAjAAQAYAAATALQAUALALAUQAMAUAAAaQAAAbgMATQgLAUgUALQgTALgYAAQggAAgTgVIAABQgAgfhAQgNANAAAWQAAAWANAMQAMANATAAQASAAANgNQAMgMAAgWQAAgWgMgNQgNgMgSAAQgTAAgMAMg");
	this.shape_40.setTransform(314.375,117.925);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#333333").s().p("AhHCbQghgJgXgRIAdg5QASAOAYAIQAYAHAaAAQAbAAAQgLQAQgKAAgUQAAgog7AAIgiAAIAAgwIBBhLIiIAAIAAg8IDgAAIAAAwIhIBTQAqAHAWAZQAXAXAAAlQAAAcgPAYQgOAXgfAOQgeAPgqAAQgiAAghgJg");
	this.shape_41.setTransform(285.775,107.725);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#333333").s().p("AgVBPQgJgJAAgMQAAgOAJgJQAJgJAMAAQANAAAJAJQAJAJAAAOQAAAMgJAJQgJAKgNgBQgMABgJgKgAgVgiQgJgJAAgNQAAgPAJgIQAJgJAMAAQANAAAJAJQAJAIAAAPQAAANgJAJQgJAIgNAAQgMAAgJgIg");
	this.shape_42.setTransform(247.2,111.75);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#333333").s().p("AgzBSQgPgHgHgMQgIgMAAgPQAAgYASgNQASgNAmAAIAnAAQAAgQgKgJQgKgJgTAAQgOAAgNAEQgNAEgKAIIgSgjQAPgKATgFQAUgGAVAAQAnAAAVATQAWAUAAAmIAABhIgvAAIAAgWQgOAYgmAAQgUAAgOgGgAggAiQAAAKAHAGQAIAFANAAQAMAAAJgGQAKgGAFgLIAAgSIgiAAQgeAAAAAUg");
	this.shape_43.setTransform(232.875,111.75);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#333333").s().p("AhdB2IAAjpIAwAAIAAAUQASgWAjAAQAYAAATALQAUALALAUQAMAUAAAaQAAAbgMATQgLAUgUALQgTALgYAAQggAAgTgVIAABQgAgfhAQgNANAAAWQAAAWANAMQAMANATAAQASAAANgNQAMgMAAgWQAAgWgMgNQgNgMgSAAQgTAAgMAMg");
	this.shape_44.setTransform(213.225,114.725);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#333333").s().p("AgYBWIAAiCIg6AAIAAgpIClAAIAAApIg6AAIAACCg");
	this.shape_45.setTransform(192.9,111.75);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#333333").s().p("AgrBOQgXgMgMgVQgMgTAAgaQAAgYAMgVQAMgUAVgLQAVgMAZAAQAZAAAVALQAUALAMAUQAMAUAAAaIgBAOIiCAAQAEAQANAKQANAIATABQANgBALgEQAKgDAJgJIAaAdQgYAcgvgBQgcABgWgLgAgagoQgMAJgCARIBUAAQgDgQgLgKQgMgKgRAAQgQAAgLAKg");
	this.shape_46.setTransform(173.825,111.75);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#333333").s().p("AA+BWIAAhmIg0BWIgUAAIgzhXIAABnIgtAAIAAirIA1AAIA2BjIA6hjIAvAAIABCrg");
	this.shape_47.setTransform(150.7,111.75);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#333333").s().p("AgvBOQgXgMgMgVQgMgTABgaQgBgZAMgUQAMgUAXgLQAVgMAaAAQAcAAAVAMQAVALAMAUQAMAUABAZQgBAagMATQgMAVgVAMQgVALgcgBQgaABgVgLgAgegiQgNANAAAVQAAAVANANQAMANASAAQATAAANgNQAMgNAAgVQAAgVgMgNQgNgMgTAAQgSAAgMAMg");
	this.shape_48.setTransform(127.15,111.75);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#333333").s().p("AhdBUIAEgpIAGABQAMAAAFgIQAGgJACgMQACgNABgUIADhFICRAAIAACrIgyAAIAAiCIg1AAIgCAeQgBAhgEAXQgGAWgLANQgMANgVAAQgKAAgQgEg");
	this.shape_49.setTransform(104.95,111.925);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#333333").s().p("AAoBWIAAhmIhSBmIgvAAIAAirIAyAAIAABmIBThmIAtAAIAACrg");
	this.shape_50.setTransform(84.05,111.75);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#333333").s().p("AAgBWIgthCIgaAAIAABCIgzAAIAAirIAzAAIAABCIAbAAIAthCIA1AAIg8BTIBABYg");
	this.shape_51.setTransform(63.6,111.75);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#333333").s().p("AhQBWIAAirIAxAAIAAA3IArAAQAiAAARAPQASAPAAAaQAAAcgUAQQgUAQgkAAgAgfAzIAgAAQAOAAAIgGQAHgHAAgNQAAgMgHgGQgIgGgOAAIggAAg");
	this.shape_52.setTransform(311.475,73.625);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#333333").s().p("AgXBWIAAiCIg7AAIAAgpIClAAIAAApIg6AAIAACCg");
	this.shape_53.setTransform(292.4,73.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#333333").s().p("AgnBOQgWgMgMgVQgNgTAAgaQAAgZANgUQAMgUAWgLQAWgMAaAAQAbAAAVAMQAUALAKAVIgnAVQgOgYgZAAQgTABgMAMQgNANAAAVQAAAWANANQAMANATAAQAaAAANgYIAnAVQgKAUgUAMQgVALgbAAQgaABgWgLg");
	this.shape_54.setTransform(274.55,73.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#333333").s().p("AgvBOQgXgMgMgVQgLgTAAgaQAAgZALgUQAMgUAXgLQAVgMAaAAQAcAAAVAMQAVALAMAUQANAUAAAZQAAAagNATQgMAVgVAMQgVALgcgBQgaABgVgLgAgegiQgNANAAAVQAAAVANANQAMAOASAAQATAAANgOQAMgNAAgVQAAgVgMgNQgNgMgTgBQgSABgMAMg");
	this.shape_55.setTransform(254.4,73.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#333333").s().p("AA+BWIAAhmIg0BVIgUAAIgzhWIAABnIgtAAIAAirIA0AAIA3BjIA6hjIAvAAIABCrg");
	this.shape_56.setTransform(230.9,73.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#333333").s().p("AAoBWIAAhmIhTBmIgtAAIAAirIAxAAIAABlIBThlIAuAAIAACrg");
	this.shape_57.setTransform(206.5,73.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#333333").s().p("AgvBOQgXgMgMgVQgLgTAAgaQAAgZALgUQAMgUAXgLQAVgMAaAAQAcAAAVAMQAVALAMAUQANAUAAAZQAAAagNATQgMAVgVAMQgVALgcgBQgaABgVgLgAgegiQgNANAAAVQAAAVANANQAMAOASAAQATAAANgOQAMgNAAgVQAAgVgMgNQgNgMgTgBQgSABgMAMg");
	this.shape_58.setTransform(184.65,73.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#333333").s().p("AgYBWIAAiCIg6AAIAAgpIClAAIAAApIg6AAIAACCg");
	this.shape_59.setTransform(165.65,73.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#333333").s().p("AgnBOQgWgMgNgVQgLgTgBgaQABgZALgUQANgUAWgLQAWgMAbAAQAaAAAVAMQAVALAIAVIgmAVQgNgYgaAAQgSABgNAMQgNANAAAVQAAAWANANQANANASAAQAaAAANgYIAmAVQgIAUgVAMQgVALgaAAQgbABgWgLg");
	this.shape_60.setTransform(147.8,73.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AgrBOQgXgMgMgVQgMgTAAgaQAAgYAMgVQAMgUAVgLQAVgMAZAAQAZAAAVALQAUALAMAUQAMAVAAAZIgBAOIiCAAQAEAQANAKQANAIATABQANAAALgFQAKgDAJgJIAaAdQgYAbgvAAQgcABgWgLgAgagoQgMAJgCARIBUAAQgDgQgLgKQgMgKgRAAQgQAAgLAKg");
	this.shape_61.setTransform(127.625,73.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#333333").s().p("AhEBiQgagdAAg4QAAgzAWgfQAXgfAvgKIBQgQIAHArIhIAOQgcAGgPAOQgOANgDAZQALgMAQgHQAQgHASAAQAYAAATAKQASALALARQAKASgBAYQABAZgMATQgMATgWAKQgVALgbAAQgtAAgZgdgAgdANQgMALABAUQgBATAMANQANAMASAAQATAAAMgNQALgMAAgTQAAgUgLgLQgMgMgTAAQgTAAgMAMg");
	this.shape_62.setTransform(107,69.925);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#333333").s().p("AgrBOQgXgMgMgVQgMgTAAgaQAAgYAMgVQAMgUAVgLQAVgMAZAAQAZAAAVALQAUALAMAUQAMAVAAAZIgBAOIiCAAQAEAQANAKQANAIATABQANAAALgFQAKgDAJgJIAaAdQgYAbgvAAQgcABgWgLgAgagoQgMAJgCARIBUAAQgDgQgLgKQgMgKgRAAQgQAAgLAKg");
	this.shape_63.setTransform(85.475,73.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#333333").s().p("AgvBlQgcgPgPgbQgQgaAAghQAAghAQgZQAPgbAcgPQAcgPAhAAQAdAAAYALQAYAJAQAUIghAeQgXgagiAAQgTABgRAIQgRAKgIAQQgJAQAAAUQAAAVAJAQQAIARARAIQARAJATAAQAiAAAXgaIAhAfQgQATgYAKQgYALgdAAQghAAgcgPg");
	this.shape_64.setTransform(64.1,71);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).wait(400));

	// Layer_2
	this.instance_3 = new lib.Symbol66("synched",0);
	this.instance_3.setTransform(145.55,194.15,1,1,0,0,0,0,-13.7);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({_off:false},0).wait(361));

	// Layer_1
	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E41E26").s().p("Eg6bAAeIAAg7MB03AAAIAAA7g");
	this.shape_65.setTransform(429.025,307.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_65).wait(400));

	// Layer_9
	this.instance_4 = new lib.Symbol36d("synched",0);
	this.instance_4.setTransform(661.55,188.2,1,1,0,0,0,96.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(400));

	// Layer_11
	this.instance_5 = new lib.Symbol32();
	this.instance_5.setTransform(400.5,488.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({alpha:0},16).wait(359).to({alpha:1},15).wait(10));

	// Layer_4
	this.instance_6 = new lib.Symbol65();
	this.instance_6.setTransform(279.15,425.45,1,1,0,0,0,0,-8.6);

	this.instance_7 = new lib.Symbol64();
	this.instance_7.setTransform(305.3,428.2,1,1,0,0,0,0,-5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(400));

	// Layer_3
	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#333333").s().p("AgUA1QgOgJgJgNQgIgOAAgRQAAgQAIgOQAJgNAOgJQANgIARAAQANABALAEQALAEAHAIIgFAGQgOgOgXgBQgNAAgNAIQgMAGgHAMQgHAMAAAOQAAAPAHAMQAHALAMAHQANAHANABQAXAAAOgPIAFAGQgHAIgLAEQgLAFgNAAQgRgBgNgHg");
	this.shape_66.setTransform(194.55,617.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#333333").s().p("AguA8IAAh3IAvAAQATABAKAHQALAIAAAPQAAAKgGAHQgFAHgKAEQANABAHAHQAHAIAAAMQAAAPgLAJQgLAHgVABgAglA0IAqAAQAhAAAAgZQAAgNgIgFQgJgHgQAAIgqAAgAglgEIAmAAQAPAAAIgFQAIgHAAgLQAAgMgIgGQgIgGgPAAIgmAAg");
	this.shape_67.setTransform(182.375,617.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#333333").s().p("AA2BJIAAgbIhsAAIAAAbIgIAAIAAgjIAHAAQAMgBAEgTQAFgSABghIABgnIBMAAIAABuIATAAIAAAjgAgZggQgBAdgEARQgDASgIAGIBNAAIAAhmIg8AAg");
	this.shape_68.setTransform(168.65,619.15);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#333333").s().p("AgRAoQgKgGgGgLQgFgKAAgNQAAgMAFgKQAGgKAKgHQALgFALAAQALAAAJAEQAJAEAFAIIgGAFQgFgGgHgEQgHgEgJAAQgJABgIAEQgIAFgFAIQgFAJAAAKQAAALAFAJQAFAIAIAFQAIAEAJABQAJgBAHgDQAHgDAFgHIAGAFQgFAIgJAEQgJAEgLAAQgLAAgLgFg");
	this.shape_69.setTransform(153.275,619.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#333333").s().p("AAoAsIAAhKIgmA/IgDAAIgng/IAABKIgHAAIAAhXIAIAAIAnBCIAohCIAIAAIAABXg");
	this.shape_70.setTransform(137.375,619.325);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#333333").s().p("AgWAoQgKgGgGgLQgFgKAAgNQAAgMAFgKQAGgLAKgFQAKgGAMAAQANAAAKAGQAKAFAGALQAFAKAAAMQAAANgFAKQgGALgKAGQgKAFgNAAQgMAAgKgFgAgRggQgIAFgFAJQgFAIAAAKQAAALAFAJQAFAIAIAFQAIAEAJABQAKgBAIgEQAIgFAFgIQAFgJAAgLQAAgKgFgIQgFgJgIgFQgIgEgKgBQgJABgIAEg");
	this.shape_71.setTransform(125.325,619.3);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#333333").s().p("AAeAsIAAgpIg7AAIAAApIgIAAIAAhXIAIAAIAAAoIA7AAIAAgoIAIAAIAABXg");
	this.shape_72.setTransform(114.25,619.325);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#333333").s().p("AgWAoQgKgGgGgLQgFgKAAgNQAAgMAFgKQAGgLAKgFQAKgGAMAAQANAAAKAGQAKAFAGALQAFAKAAAMQAAANgFAKQgGALgKAGQgKAFgNAAQgMAAgKgFgAgRggQgIAFgFAJQgFAIAAAKQAAALAFAJQAFAIAIAFQAIAEAJABQAKgBAIgEQAIgFAFgIQAFgJAAgLQAAgKgFgIQgFgJgIgFQgIgEgKgBQgJABgIAEg");
	this.shape_73.setTransform(103.175,619.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#333333").s().p("AgdAsIAAhXIA7AAIAAAHIgzAAIAABQg");
	this.shape_74.setTransform(94.775,619.325);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#333333").s().p("AgrA9IAAh4IAIAAIAAAUQAFgKAKgGQAJgFALAAQANAAAKAGQAKAFAGALQAFAKAAANQAAANgFAJQgGALgKAFQgKAGgNAAQgKAAgKgGQgJgFgGgKIAAA1gAgRgwQgJAFgEAJQgFAIAAALQAAALAFAHQAEAJAJAFQAIAEAJAAQAKAAAIgEQAIgFAFgJQAFgHAAgLQAAgLgFgIQgFgJgIgFQgIgFgKAAQgJAAgIAFg");
	this.shape_75.setTransform(84.575,620.925);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#333333").s().p("AglA7QgFgCgEgEIAEgGQAHAGAKAAQAGAAAFgDQAEgEAEgIIAFgLIgohXIAJAAIAjBOIAjhOIAJAAIguBkQgEAMgHAEQgGAFgJAAQgHAAgFgCg");
	this.shape_76.setTransform(73.375,621);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#333333").s().p("AgDBPIAAgfQgZgBgOgNQgNgLAAgVQAAgTANgNQAOgLAZgBIAAgkIAHAAIAAAkQAZABANALQAOANAAATQAAAVgOALQgNANgZABIAAAfgAAEAoQAVgBAMgKQALgKAAgRQAAgQgLgJQgMgLgVgBgAgkgXQgLAJAAAQQAAARALAKQAMAKAVABIAAhLQgVABgMALg");
	this.shape_77.setTransform(62.475,619.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#333333").s().p("AAoAsIAAhKIgmA/IgDAAIgng/IAABKIgHAAIAAhXIAIAAIAnBCIAohCIAIAAIAABXg");
	this.shape_78.setTransform(274.475,602.875);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#333333").s().p("AguAsIAAhYIAJAAIAAAgIAaAAQAQABAIAHQAJAGAAANQAAAOgJAIQgJAIgRgBgAglAlIAYABQANAAAGgGQAHgFAAgMQAAgKgGgFQgHgFgNAAIgYAAgAAmAsIAAhYIAJAAIAABYg");
	this.shape_79.setTransform(261.325,602.9);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#333333").s().p("AAeAsIAAgpIg7AAIAAApIgIAAIAAhXIAIAAIAAAoIA7AAIAAgoIAJAAIAABXg");
	this.shape_80.setTransform(249.1,602.875);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#333333").s().p("AAcAsIAAgmQgPAHgPAAQgQAAgJgHQgJgGAAgOIAAgdIAJAAIAAAdQAAAKAHAFQAHAFAMAAQANAAAQgGIAAgrIAJAAIAABXg");
	this.shape_81.setTransform(237.875,602.875);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#333333").s().p("AguAsIAAhYIAJAAIAAAgIAaAAQAQABAIAHQAJAGAAANQAAAOgJAIQgJAIgRgBgAglAlIAYABQANAAAGgGQAHgFAAgMQAAgKgGgFQgHgFgNAAIgYAAgAAmAsIAAhYIAJAAIAABYg");
	this.shape_82.setTransform(226.875,602.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#333333").s().p("AgXA7QgKgHgFgNQgGgNAAgSQAAgTAFgNQAFgNAKgHQAJgIAPgEIAngJIABAIIglAJQgNADgIAGQgJAGgEALQgEALgBAPQAFgLAKgHQAKgHANAAQANAAAJAFQAKAGAFAKQAGAJAAANQAAAMgGALQgFAKgKAFQgKAGgNAAQgOAAgKgHgAgQgJQgIAFgEAHQgFAIAAALQAAAKAFAJQAEAIAIAFQAIAFAJAAQAKAAAIgFQAIgFAFgIQAEgJAAgKQAAgLgEgIQgFgHgIgFQgIgFgKAAQgJAAgIAFg");
	this.shape_83.setTransform(214.925,600.775);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#333333").s().p("AgWAnQgKgFgGgLQgFgKAAgNQAAgMAFgKQAGgLAKgFQAKgGAMAAQANAAAKAGQAKAFAGALQAFAKAAAMQAAANgFAKQgGALgKAFQgKAGgNAAQgMAAgKgGgAgRggQgIAGgFAIQgFAIAAAKQAAALAFAIQAFAJAIAFQAIAEAJAAQAKAAAIgEQAIgFAFgJQAFgIAAgLQAAgKgFgIQgFgIgIgGQgIgEgKAAQgJAAgIAEg");
	this.shape_84.setTransform(203.825,602.85);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#333333").s().p("AgRAnQgKgFgGgLQgFgKAAgNQAAgMAFgKQAGgKAKgHQALgFALAAQALAAAJAEQAJAFAFAIIgGAEQgFgHgHgDQgHgEgJABQgJAAgIAEQgIAFgFAJQgFAIAAAKQAAALAFAIQAFAJAIAFQAIAEAJAAQAJAAAHgDQAHgDAFgHIAGAFQgFAIgJAEQgJAEgLAAQgLAAgLgGg");
	this.shape_85.setTransform(189.525,602.85);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#333333").s().p("AgWAnQgKgFgGgLQgFgKAAgNQAAgMAFgKQAGgLAKgFQAKgGAMAAQANAAAKAGQAKAFAGALQAFAKAAAMQAAANgFAKQgGALgKAFQgKAGgNAAQgMAAgKgGgAgRggQgIAGgFAIQgFAIAAAKQAAALAFAIQAFAJAIAFQAIAEAJAAQAKAAAIgEQAIgFAFgJQAFgIAAgLQAAgKgFgIQgFgIgIgGQgIgEgKAAQgJAAgIAEg");
	this.shape_86.setTransform(174.925,602.85);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#333333").s().p("AAeAsIAAgpIg7AAIAAApIgIAAIAAhXIAIAAIAAAoIA7AAIAAgoIAIAAIAABXg");
	this.shape_87.setTransform(163.85,602.875);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#333333").s().p("AgiAsIAAhYIAJAAIAAAgIAaAAQAQABAJAHQAIAGAAANQABAOgKAIQgJAIgQgBgAgZAlIAYABQANAAAHgGQAHgFAAgMQAAgKgHgFQgHgFgNAAIgYAAg");
	this.shape_88.setTransform(154.05,602.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#333333").s().p("AgqAsIAAgIIAFABQAHAAADgHQAEgHABgKIADgaIABgfIA9AAIAABYIgIAAIAAhQIgtAAIgBAXQgBASgDAMQgCAMgFAIQgEAIgJAAIgHgBg");
	this.shape_89.setTransform(142.575,602.925);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#333333").s().p("AgTAnQgLgFgGgLQgFgKAAgNQAAgMAFgKQAGgLAJgFQAKgGALAAQAMAAAKAFQAJAGAGAKQAFALAAAMIAAACIhLAAQAAAKAFAIQAFAJAJAEQAIAEAKAAQAIAAAIgCQAHgEAFgGIAFAFQgGAIgJADQgJAEgKAAQgMAAgKgGgAgQghQgHAFgFAHQgEAIgBAJIBDAAQAAgJgFgIQgFgHgHgEQgIgFgJABQgIAAgIADg");
	this.shape_90.setTransform(132.975,602.85);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#333333").s().p("AgDAsIAAhQIgjAAIAAgHIBNAAIAAAHIgjAAIAABQg");
	this.shape_91.setTransform(123.925,602.875);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#333333").s().p("AAfAsIAAhKIg+BKIgHAAIAAhXIAIAAIAABKIA+hKIAHAAIAABXg");
	this.shape_92.setTransform(114.25,602.875);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#333333").s().p("AAeAsIAAgpIg7AAIAAApIgIAAIAAhXIAIAAIAAAoIA7AAIAAgoIAIAAIAABXg");
	this.shape_93.setTransform(102.75,602.875);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#333333").s().p("AgjAsIAAhXIAlAAQAOAAAIAFQAJAGAAALQAAAIgEAFQgFAFgIADQAUACAAASQAAAMgIAGQgJAGgQAAgAgbAlIAdAAQAaAAAAgRQgBgJgFgEQgGgEgMAAIgfAAgAgbgDIAcAAQALAAAHgEQAFgFAAgIQAAgIgFgEQgHgFgLAAIgcAAg");
	this.shape_94.setTransform(92.25,602.875);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#333333").s().p("AgbAmQgIgHAAgLQAAgLAIgHQAHgGASAAIAdAAIAAgHQABgNgIgGQgGgHgNABQgHAAgJACQgIADgFAGIgFgHQAHgGAJgDQAKgDAIAAQARAAAJAJQAJAIAAAQIAAA4IgIAAIAAgQQgFAIgHAEQgJAEgKAAQgPAAgJgHgAgVAHQgFAEgBAIQABAJAGAFQAGAFAMAAQAKAAAIgFQAIgFADgJIAAgSIgdAAQgNAAgGAGg");
	this.shape_95.setTransform(81.6,602.85);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#333333").s().p("AgrA9IAAh4IAIAAIAAAUQAFgKAKgGQAJgFALAAQANAAAKAGQAKAFAGALQAFAKAAANQAAANgFAJQgGALgKAFQgKAGgNAAQgKAAgKgGQgJgFgGgKIAAA1gAgRgwQgJAFgEAJQgFAIAAALQAAALAFAHQAEAJAJAFQAIAEAJAAQAKAAAIgEQAIgFAFgJQAFgHAAgLQAAgLgFgIQgFgJgIgFQgIgFgKAAQgJAAgIAFg");
	this.shape_96.setTransform(71.675,604.475);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#333333").s().p("AgRAnQgKgFgGgLQgFgKAAgNQAAgMAFgKQAGgKAKgHQALgFALAAQALAAAJAEQAJAFAFAIIgGAEQgFgHgHgDQgHgEgJABQgJAAgIAEQgIAFgFAJQgFAIAAAKQAAALAFAIQAFAJAIAFQAIAEAJAAQAJAAAHgDQAHgDAFgHIAGAFQgFAIgJAEQgJAEgLAAQgLAAgLgGg");
	this.shape_97.setTransform(60.825,602.85);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#333333").s().p("AgOAPQgHgFAAgKQAAgJAHgFQAGgHAJAAQAJAAAGAGQAFAHAAAIQAAAKgFAFQgHAHgIAAQgJAAgGgHg");
	this.shape_98.setTransform(352.65,448.55);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#333333").s().p("AhBBgQgXgeAAg2QAAgzAWgdQAUgdAtgKIBNgSIAEAcIhIAQQggAHgQASQgRARgCAhQALgQASgJQAQgJAVAAQAYAAATALQASAKAKATQALASAAAYQAAAZgLASQgMATgTALQgVALgZAAQgqgBgYgdgAgmACQgQAQAAAZQAAARAIAMQAHANANAHQANAIAPAAQAQAAANgIQAMgHAHgNQAIgMAAgRQAAgZgQgQQgQgOgYAAQgYAAgQAOg");
	this.shape_99.setTransform(338.75,438.25);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#333333").s().p("AhJBxQgLgEgIgIIANgXQANANASAAQALAAAHgGQAHgGAHgPIAFgMIhKioIAfAAIA7CHIA6iHIAeAAIhSC6QgLAagNAKQgPALgUAAQgNAAgMgEg");
	this.shape_100.setTransform(318.4,445.275);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#333333").s().p("AhXB0IAAjmIAdAAIAAAbQALgPAQgGQAPgIASAAQAZAAAUALQATALALAUQALATAAAaQAAAagLASQgLAUgTAKQgUALgZAAQgRAAgPgGQgPgIgLgNIAABXgAgdhRQgNAHgHANQgIAOAAASQAAASAIAMQAHANANAIQANAIAQgBQAQABANgIQANgIAHgNQAIgMAAgSQAAgSgIgOQgHgNgNgHQgNgIgQAAQgQAAgNAIg");
	this.shape_101.setTransform(299.35,445.1);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#E41E26").s().p("AizDJIAAmRIBaAAIAACGIBtAAQAzAAAkASQAjARATAfQATAcAAAnQAAAmgTAeQgTAfgjARQgkASgzAAgAhZCCIBbAAQAoAAAXgQQAXgQAAgfQAAgggXgQQgXgQgoAAIhbAAg");
	this.shape_102.setTransform(330.45,510.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#E41E26").s().p("Ai6DLQgNgDgPgGIAAhGIANAEIAMABQAigBATgpQAUgqAJhKQAJhLAEhkIE1AAIAAGSIhaAAIAAlGIiHAAQgFBigPBKQgPBLgeArQgfArg1AAQgNAAgOgCg");
	this.shape_103.setTransform(279.675,511.175);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#E41E26").s().p("AhqEXQgwgbgcg1Qgbg0gBhRQABhoAihEQAjhDA3gjQArgaAmgLQAmgLAggFQAhgGAcgIQAbgJAVgUIAABXQgVAQgYAHQgXAHgZAEQgaAFgdAHQgbAIggASQgnAXgTAiQgUAjgJAjQAVgeAlgUQAlgTAugBQA0AAAqAYQArAXAaArQAZAsABA8QgBBAgaAtQgcAsguAXQgvAWg+ABQg8AAgvgagAhBAHQgaASgOAbQgOAcAAAcQAAAgAOAbQANAbAaARQAbAQAnABQAngBAbgQQAbgRANgbQANgbABggQgBgggNgaQgNgbgbgRQgbgQgnAAQgmABgbAQg");
	this.shape_104.setTransform(232.65,501.55);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#E41E26").s().p("AiaEpIgagEIAAhOQAKAEALABIAUACQAhgBAZgXQAZgXARgvIAJgVIjAmVIBgAAICHEvIB4kvIBeAAIi9HIQgWA0gZAgQgaAegcANQgdAOgfAAQgNAAgOgCg");
	this.shape_105.setTransform(184.375,520.55);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#E41E26").s().p("AjZEsIAApLIBQAAIAAA/QAYgfAmgVQAlgVA4gCQA9ABAsAdQAtAdAZAwQAYAvABA7QgBA7gYAvQgZAwgtAcQgsAdg9ABQg0gBgkgTQgkgSgVgZIAADtgAg3jPQgZALgSATQgTAUgKAWIAABiQAKAWATATQASATAZAMQAaALAeABQA4gBAiglQAigjABg8QgBg8gigkQgiglg4AAQgeAAgaAMg");
	this.shape_106.setTransform(136.625,519.475);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#E41E26").s().p("AiaEeIAAhXIByAAIAAmBIhyAqIAAhYICKg1IBGAAIAAHkIBlAAIAABXg");
	this.shape_107.setTransform(72.05,502.375);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#333333").s().p("AhDCZQgggLgUgSIAVgkQARAPAaAKQAZAJAdAAQAjAAAUgPQAUgPAAgbQAAgbgUgOQgTgPgnAAIgaAAIAAgfIBQhkIiaAAIAAgoIDTAAIAAAgIhUBoQAvAEAZAYQAZAYAAAmQAAAcgOAWQgOAXgbANQgbANgnAAQgiAAgggKg");
	this.shape_108.setTransform(268.225,435.625);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#333333").s().p("AgJBRQgDgEAAgGQAAgGADgEQAEgDAFAAQAFAAAEADQAFAEAAAGQAAAGgFAEQgEAEgFAAQgFAAgEgEgAgJg8QgDgFAAgFQAAgGADgEQAEgEAFAAQAFAAAEAEQAFAEAAAGQAAAFgFAFQgEADgFAAQgFAAgEgDg");
	this.shape_109.setTransform(235.05,442);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#333333").s().p("AgzBIQgQgNAAgWQAAgUAPgNQAPgMAhAAIA4AAIAAgOQAAgXgNgNQgMgMgZABQgPgBgPAGQgQAGgKAJIgIgLQAMgMASgFQASgHASAAQAfAAAQAQQARAQAAAeIAABqIgPAAIAAgeQgIAPgQAHQgPAJgUAAQgcAAgRgNgAgoAMQgLAJAAAQQAAAQAMAKQANAIAWABQATAAAPgKQAPgJAHgTIAAgfIg4AAQgZAAgLAJg");
	this.shape_110.setTransform(222.025,442);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#333333").s().p("AhSBzIAAjkIAPAAIAAAoQAKgUASgKQASgLAWAAQAXAAATALQATALAKATQALATAAAZQAAAYgLATQgKATgTALQgTALgXAAQgWAAgRgLQgSgKgKgTIAABkgAgihbQgPAJgJAQQgJAQAAAVQAAAUAJAPQAJAQAPAJQAPAJATAAQATAAAPgJQAPgJAJgQQAJgPAAgUQAAgVgJgQQgJgQgPgJQgPgJgTAAQgTAAgPAJg");
	this.shape_111.setTransform(203.325,445.025);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#333333").s().p("AgHBUIAAiYIhCAAIAAgPICSAAIAAAPIhBAAIAACYg");
	this.shape_112.setTransform(184.2,442);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#333333").s().p("AgmBKQgTgLgLgTQgLgTAAgZQAAgYAKgSQALgUASgLQATgLAVAAQAXAAASALQASALAKATQALATAAAYIAAAEIiPAAQAAAUAKAPQAJAPAQAIQAQAJASgBQARAAAOgFQANgHAKgLIAJALQgLANgQAGQgQAIgUAAQgXAAgVgLgAgfg+QgNAIgJAOQgIAOgCATIB/AAQgBgTgIgOQgJgOgPgHQgNgJgSABQgRAAgOAHg");
	this.shape_113.setTransform(167.15,442);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#333333").s().p("ABMBUIAAiNIhJB3IgGAAIhJh3IAACNIgOAAIAAinIAQAAIBKB+IBMh+IAPAAIAACng");
	this.shape_114.setTransform(144.85,442);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#333333").s().p("AgpBKQgUgLgLgUQgLgSAAgZQAAgYALgSQALgUAUgLQASgLAXAAQAYAAATALQATALALAUQALASAAAYQAAAZgLASQgLAUgTALQgTALgYAAQgXAAgSgLgAgig8QgPAIgIARQgJAQAAATQAAAUAJARQAIAQAPAIQAQAJASAAQATAAAPgJQAQgIAJgQQAIgRABgUQgBgTgIgQQgJgRgQgIQgPgKgTABQgSgBgQAKg");
	this.shape_115.setTransform(122.2,442);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#333333").s().p("AhRBSIACgOIAIABQANAAAHgNQAHgNADgTQACgTACgfIADg6IB0AAIAACnIgQAAIAAiYIhWAAIgCAtQgCAhgEAXQgEAYgJAOQgKAOgQAAQgFABgJgDg");
	this.shape_116.setTransform(100.475,442.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#333333").s().p("AA6BUIAAiOIh2COIgOAAIAAinIAQAAIAACOIB2iOIAPAAIAACng");
	this.shape_117.setTransform(81.275,442);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#333333").s().p("AA0BUIhBhOIgpAAIAABOIgQAAIAAinIAQAAIAABNIApAAIA9hNIASAAIhDBRIBIBWg");
	this.shape_118.setTransform(62.725,442);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#333333").s().p("Ag4BUIAAinIBxAAIAAAPIhhAAIAACYg");
	this.shape_119.setTransform(354.425,400.85);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#333333").s().p("AgmBKQgTgLgLgTQgLgUAAgYQAAgYALgSQAKgUASgLQATgLAVAAQAXAAASALQASAKAKAUQALATAAAYIgBAEIiOAAQABAUAIAPQAKAPAQAIQAQAIASAAQARAAANgFQAPgHAJgLIAJALQgKAMgRAIQgRAHgTAAQgYAAgUgLgAgeg+QgPAIgIAOQgJAOgBASIB/AAQgBgRgJgOQgIgPgOgIQgOgHgSAAQgRgBgNAIg");
	this.shape_120.setTransform(335.5,400.85);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#333333").s().p("AgsBvQgTgOgKgYQgKgYAAgiQAAgkAJgZQAJgYASgOQATgPAcgGIBJgSIADAOIhGARQgZAGgQALQgRAMgIAVQgIAUAAAeQAIgWAUgNQATgNAZAAQAYAAASAKQASAKAKATQAKARAAAZQAAAYgKATQgKATgTALQgTAKgYAAQgbAAgTgNgAgfgSQgPAJgIAOQgJAQAAAUQAAAUAJAQQAIAQAPAJQAPAJASAAQATAAAPgJQAPgJAJgQQAIgQAAgUQAAgUgIgQQgJgOgPgJQgPgIgTAAQgSAAgPAIg");
	this.shape_121.setTransform(315.525,396.9);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#333333").s().p("AgpBKQgUgLgLgUQgLgSAAgZQAAgYALgSQALgUAUgLQASgLAXAAQAYAAATALQATALALAUQALASAAAYQAAAZgLASQgLAUgTALQgTALgYAAQgXAAgSgLgAghg8QgQAIgIAQQgJARAAATQAAAUAJAQQAIARAQAIQAPAKASgBQATABAPgKQAQgIAJgRQAJgQAAgUQAAgTgJgRQgJgQgQgIQgPgJgTAAQgSAAgPAJg");
	this.shape_122.setTransform(294.65,400.85);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#333333").s().p("AhSBzIAAjkIAPAAIAAAoQAKgUASgKQASgLAWAAQAXAAATALQATALAKATQALATAAAZQAAAYgLATQgKATgTALQgTALgXAAQgWAAgRgLQgSgKgKgTIAABkgAgihbQgPAJgJAQQgJAQAAAVQAAAUAJAPQAJAQAPAJQAPAJATAAQATAAAPgJQAPgJAJgQQAJgPAAgUQAAgVgJgQQgJgQgPgJQgPgJgTAAQgTAAgPAJg");
	this.shape_123.setTransform(274.475,403.875);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#333333").s().p("AA5BUIAAiYIhxAAIAACYIgQAAIAAinICRAAIAACng");
	this.shape_124.setTransform(251.9,400.85);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#333333").s().p("AgzBHQgQgMAAgWQAAgVAPgMQAPgNAhAAIA4AAIAAgNQAAgXgNgMQgMgMgZAAQgPgBgPAGQgQAGgKAKIgIgMQAMgMASgFQASgHASAAQAfAAAQAQQARAQAAAfIAABpIgPAAIAAgeQgIAOgQAJQgPAIgUAAQgcAAgRgOgAgoAMQgLAJAAAPQAAARAMAJQANAJAWAAQATAAAPgJQAPgJAHgTIAAgfIg4AAQgZAAgLAJg");
	this.shape_125.setTransform(223.125,400.85);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#333333").s().p("AA5BUIAAhOIhxAAIAABOIgQAAIAAinIAQAAIAABNIBxAAIAAhNIAQAAIAACng");
	this.shape_126.setTransform(203.775,400.85);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#333333").s().p("AgZBUIg+gBIAAimIAQAAIAAA8IAyABQAeAAAQAOQAQAMAAAaQAAAagRAOQgRAOgeAAIgCAAgAhHBGIAuABQAZAAAMgKQANgLAAgUQAAgVgMgJQgNgJgZgBIguAAgABIBTIAAimIAQAAIAACmg");
	this.shape_127.setTransform(172.625,400.8759);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#333333").s().p("AgHBUIAAiYIhBAAIAAgPICRAAIAAAPIhBAAIAACYg");
	this.shape_128.setTransform(153.05,400.85);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#333333").s().p("AgzBHQgQgMAAgWQAAgVAPgMQAPgNAhAAIA4AAIAAgNQAAgXgNgMQgMgMgZAAQgPgBgPAGQgQAGgKAKIgIgMQAMgMASgFQASgHASAAQAfAAAQAQQARAQAAAfIAABpIgPAAIAAgeQgIAOgQAJQgPAIgUAAQgcAAgRgOgAgoAMQgLAJAAAPQAAARAMAJQANAJAWAAQATAAAPgJQAPgJAHgTIAAgfIg4AAQgZAAgLAJg");
	this.shape_129.setTransform(135.925,400.85);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#333333").s().p("AhSBzIAAjkIAPAAIAAAoQAKgUASgKQASgLAWAAQAXAAATALQATALAKATQALATAAAZQAAAYgLATQgKATgTALQgTALgXAAQgWAAgRgLQgSgKgKgTIAABkgAgihbQgPAJgJAQQgJAQAAAVQAAAUAJAPQAJAQAPAJQAPAJATAAQATAAAPgJQAPgJAJgQQAJgPAAgUQAAgVgJgQQgJgQgPgJQgPgJgTAAQgTAAgPAJg");
	this.shape_130.setTransform(117.225,403.875);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#333333").s().p("AgHBUIAAiYIhCAAIAAgPICTAAIAAAPIhCAAIAACYg");
	this.shape_131.setTransform(98.1,400.85);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#333333").s().p("AgzBHQgQgMAAgWQAAgVAPgMQAPgNAhAAIA4AAIAAgNQAAgXgNgMQgMgMgZAAQgPgBgPAGQgQAGgKAKIgIgMQAMgMASgFQASgHASAAQAfAAAQAQQARAQAAAfIAABpIgPAAIAAgeQgIAOgQAJQgPAIgUAAQgcAAgRgOgAgoAMQgLAJAAAPQAAARAMAJQANAJAWAAQATAAAPgJQAPgJAHgTIAAgfIg4AAQgZAAgLAJg");
	this.shape_132.setTransform(80.975,400.85);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#333333").s().p("AgtBrQgVgIgQgPIAGgMQAPAOATAHQATAHAUAAQASAAAQgGQAQgHAKgLQAKgMAAgQQAAgVgRgMQgRgMgeAAIgtAAIAAgNIAtAAQAZAAAPgLQAOgLAAgTQAAgWgSgNQgSgMgaAAQgQAAgRAEQgQAFgPAKIgGgOQAQgKASgFQASgFASAAQAVAAASAHQASAHALAOQALANAAATQAAASgLANQgKANgSAGQAWAEANAOQANAPAAAUQAAAUgMAOQgLAPgUAIQgTAHgWAAQgWAAgWgHg");
	this.shape_133.setTransform(61.675,397.925);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66}]}).wait(400));

	// Layer_6
	this.instance_8 = new lib.Symbol72("synched",0);
	this.instance_8.setTransform(671.25,364.6,1,1,0,0,0,0,-70.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(29).to({_off:false},0).wait(371));

	// Layer_1
	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#E41E26").s().p("Eg6bAAeIAAg7MB03AAAIAAA7g");
	this.shape_134.setTransform(429.025,637.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_134).wait(400));

	// Layer_9
	this.instance_9 = new lib.Symbol36d("synched",0);
	this.instance_9.setTransform(661.55,518.2,1,1,0,0,0,96.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(400));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(185.8,284,752.4000000000001,399.9);
// library properties:
lib.properties = {
	id: '40DF51BA37FAD04B834B8CB183AC70D7',
	width: 800,
	height: 700,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/C_v2_atlas_P_1.png?1720097873346", id:"C_v2_atlas_P_1"}
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
an.compositions['40DF51BA37FAD04B834B8CB183AC70D7'] = {
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