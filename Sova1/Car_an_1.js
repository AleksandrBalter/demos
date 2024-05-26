(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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



(lib.backdoor = function() {
	this.initialize(img.backdoor);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,32,125);


(lib.bodycar = function() {
	this.initialize(img.bodycar);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,404,188);


(lib.door = function() {
	this.initialize(img.door);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,122);


(lib.Glass = function() {
	this.initialize(img.Glass);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,844,434);


(lib.Logo = function() {
	this.initialize(img.Logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,31);


(lib.tele = function() {
	this.initialize(img.tele);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,25,16);


(lib.tele_1 = function() {
	this.initialize(img.tele_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,24,16);// helper functions:

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


(lib.Glass_1 = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("Ak7AuIEekvIGCAKIgMHwIq3ANg");
	mask.setTransform(35.75,26.175);

	// Layer_1
	this.instance = new lib.Glass();
	this.instance.setTransform(-147,-155);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Glass_1, new cjs.Rectangle(0.6,0.4,70.9,52), null);


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
	this.shape.graphics.f("rgba(255,255,204,0.627)").s().p("AhgAiIAMAAIgBgBQgEgJAEgOQADgXBBgWQBMgaAkASQASAMgEAPIiSAJQghAIAFAhIBXAAQAHACAKAAQAKAAAHgCIABAAIgPAOIiXAEg");
	this.shape.setTransform(-187.9715,8.186);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,204,0.729)").s().p("AgQAMIgIgDQgLgDAAgGQAAgFALgEQAKgDAOAAQAPAAAKADQALAFAAAEIAAAAQAAAGgLADIgBABIgBAAIgEABIgCABQgIACgJAAQgJAAgHgCg");
	this.shape_1.setTransform(-184.05,10.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.4)").s().p("AgDBFIgBAAIABgBIAEgBIABAAIgCACgAh+BEQgGghAhgJICTgIQADgQgSgLQgjgShMAbQhCAVgDAXQgEAPAFAJIAAABIgLAAIgDgHIgBgEQgBguA4gWQCBgsCLgOIh6BmIgBABIgDADIAAgBIgWATQgBgFgKgEQgJgEgPAAQgPAAgLAEQgKAEAAAGQAAAFAKAEIAIADg");
	this.shape_2.setTransform(-181.8009,4.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC99").s().p("AAoAlIgKgPIgCgJQAAAKgFAHIAAABIgJAIIgBAAQgGAAgFgJQgDgIAAgMQAAgLADgJQAFgIAGAAQAEAAADAEIgPg6IAQAIIASBFIACAfIgBABIABABIABAVIhTAOg");
	this.shape_3.setTransform(194.6,-5.375);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#FFA646","rgba(255,0,0,0)"],[0,1],-0.4,0,3.6,10.7).s().p("AgxAZIgBgGIAXgrIACAGIAqAEIAGgFIAJgIIAIgHIgBgCIAKAPIhRAkIBTgPIAAAkg");
	this.shape_4.setTransform(193.75,0.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["rgba(255,204,0,0.776)","rgba(255,0,0,0)"],[0,1],1.1,-0.3,-5.2,1.7).s().p("AgWA6IgCgGIgRg0IAYg9IAgACIABAFIAQA5QgEgDgEAAQgGAAgEAHQgFAJAAAMQAAAMAFAIQAEAJAGAAIACAAIgGAFgAAjAwQAEgHAAgKIADAJIAAACIgHAHg");
	this.shape_5.setTransform(193.475,-7.175);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-198.9,-13.3,397.8,26.700000000000003);


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
	this.shape.graphics.lf(["#EFF2F5","#86898B"],[0,1],0,1.9,0,-1.8).s().p("AgMANQgFgFAAgIQAAgHAFgFQAFgFAHAAQAIAAAFAFQAFAFABAHQgBAIgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape.setTransform(3.3326,-2.784,0.6155,0.6155,140.5003);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5B686C").s().p("AgOAOQgFgFAAgJQAAgHAFgHQAHgFAHAAQAIAAAHAFQAFAHAAAHQAAAJgFAFQgHAHgIgBQgHABgHgHg");
	this.shape_1.setTransform(3.3424,-2.7721,0.6155,0.6155,140.5003);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#EFF2F5","#86898B"],[0,1],0,-2.6,0,2.5).s().p("AgRARQgHgHAAgKQAAgJAHgHQAIgHAJAAQAKAAAIAHQAGAHABAJQgBAKgGAHQgIAHgKAAQgJAAgIgHg");
	this.shape_2.setTransform(3.3326,-2.784,0.6155,0.6155,140.5003);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#EFF2F5","#86898B"],[0,1],0,1.9,0,-1.8).s().p("AgMANQgFgFAAgIQAAgHAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAHQAAAIgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape_3.setTransform(-3.3523,2.7265,0.6155,0.6155,140.5003);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5B686C").s().p("AgNAOQgGgFAAgJQAAgHAGgHQAGgFAHAAQAIAAAGAFQAGAHAAAHQAAAJgGAFQgGAHgIgBQgIABgFgHg");
	this.shape_4.setTransform(-3.3425,2.7384,0.6155,0.6155,140.5003);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#EFF2F5","#86898B"],[0,1],0,-2.6,0,2.5).s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_5.setTransform(-3.3523,2.7265,0.6155,0.6155,140.5003);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#EFF2F5","#86898B"],[0,1],0,1.9,0,-1.8).s().p("AgMANQgFgGgBgHQABgGAFgGQAFgFAHgBQAHABAGAFQAGAGgBAGQABAHgGAGQgGAGgHgBQgHABgFgGg");
	this.shape_6.setTransform(-2.7661,-3.3604,0.6155,0.6155,140.5003);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5B686C").s().p("AgNAPQgHgHAAgIQAAgIAHgFQAFgHAIABQAIgBAHAHQAFAFABAIQgBAIgFAHQgHAFgIAAQgIAAgFgFg");
	this.shape_7.setTransform(-2.7661,-3.3604,0.6155,0.6155,140.5003);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#EFF2F5","#86898B"],[0,1],0,-2.6,0,2.5).s().p("AgRARQgGgHAAgKQAAgJAGgIQAIgGAJgBQAKABAHAGQAIAIgBAJQABAKgIAHQgHAIgKAAQgJAAgIgIg");
	this.shape_8.setTransform(-2.7661,-3.3604,0.6155,0.6155,140.5003);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#EFF2F5","#86898B"],[0,1],0,1.9,0,-1.8).s().p("AgMANQgFgFgBgIQABgHAFgFQAFgFAHgBQAHABAGAFQAGAFgBAHQABAIgGAFQgGAFgHAAQgHAAgFgFg");
	this.shape_9.setTransform(2.7346,3.3126,0.6155,0.6155,140.5003);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5B686C").s().p("AgNAPQgHgHAAgIQAAgHAHgHQAFgFAIAAQAIAAAHAFQAFAHABAHQgBAIgFAHQgHAFgIAAQgIAAgFgFg");
	this.shape_10.setTransform(2.7346,3.3126,0.6155,0.6155,140.5003);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#EFF2F5","#86898B"],[0,1],0,-2.6,0,2.5).s().p("AgRASQgGgIAAgKQAAgJAGgIQAIgGAJgBQAKABAHAGQAIAIgBAJQABAKgIAIQgHAHgKAAQgJAAgIgHg");
	this.shape_11.setTransform(2.7346,3.3126,0.6155,0.6155,140.5003);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#EFF2F5","#A6A9AB"],[0,1],0,-6.5,0,7.2).s().p("AgXAYQgLgKAAgOQAAgNALgKQAKgLANAAQAOAAAKALQALAKgBANQABAOgLAKQgKALgOgBQgNABgKgLg");
	this.shape_12.setTransform(0.0069,0.011,0.6156,0.6156,140.5005);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D0D2D4").s().p("AhFBGQgdgdAAgpQAAgoAdgdQAdgdAoAAQApAAAdAdQAdAdAAAoQAAApgdAdQgdAdgpAAQgoAAgdgdg");
	this.shape_13.setTransform(0.0069,0.011,0.6156,0.6156,140.5005);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#EFF2F5","#A6A9AB"],[0,1],0,-10.6,0,10.7).s().p("AhLBNQggghAAgsQAAgsAggfQAfggAsAAQAsAAAhAgQAfAfAAAsQAAAsgfAhQghAfgsAAQgsAAgfgfg");
	this.shape_14.setTransform(0.0069,0.011,0.6156,0.6156,140.5005);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#393B3D").s().p("AgTgHIAcgMIALAbIgcAMg");
	this.shape_15.setTransform(-13.8253,-7.3658,0.6155,0.6155,140.5003);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#F9FCFF","#76797A"],[0,1],-4,-3.9,3.1,3.2).s().p("AgoAEIArgsIAnATQgOASgRAPQgPAQgRAOg");
	this.shape_16.setTransform(-17.8354,-1.707,0.6155,0.6155,140.5003);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#F9FCFF","#76797A"],[0,1],-3.5,-1.3,2.5,1.3).s().p("AgcgNIAcgNIAiAZQggASgkAKg");
	this.shape_17.setTransform(-16.1043,-8.2192,0.6155,0.6155,140.5003);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#F9FCFF","#76797A"],[0,1],1.4,-0.5,-2,-1.9).s().p("AgUgCIAjgPIAGAXIgcAMg");
	this.shape_18.setTransform(-12.2158,-6.5986,0.6155,0.6155,140.5003);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#76797A").s().p("AgrglIAlgPIAyBMQghATgjAKg");
	this.shape_19.setTransform(-14.647,-7.3465,0.6155,0.6155,140.5003);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#F9FCFF","#76797A"],[0,1],0.7,0.7,-2.1,-2.1).s().p("AgVAGIAbgbIAQAQIgbAbg");
	this.shape_20.setTransform(-11.2937,-1.0771,0.6155,0.6155,140.5003);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#393B3D").s().p("AgpgNIAcgdIA3ApIgrAsg");
	this.shape_21.setTransform(-14.4227,-1.3893,0.6155,0.6155,140.5003);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#76797A").s().p("AhFgoIAdgdIBuBLQgOASgRAQQgQAQgRAOg");
	this.shape_22.setTransform(-15.4093,-1.4734,0.6155,0.6155,140.5003);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#393B3D").s().p("AgTgHIAcgMIALAbIgcAMg");
	this.shape_23.setTransform(13.8427,7.3774,0.6155,0.6155,140.5003);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#F9FCFF","#76797A"],[0,1],2.9,2.8,-2.9,-2.8).s().p("AgoAXQANgSAQgQQAOgOAUgPIATAmIgsAsg");
	this.shape_24.setTransform(17.8625,1.7305,0.6155,0.6155,140.5003);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#F9FCFF","#76797A"],[0,1],3.6,0.7,-3.1,-1.7).s().p("AgiACQAhgSAjgKIgFAoIgdANg");
	this.shape_25.setTransform(16.1314,8.2427,0.6155,0.6155,140.5003);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#F9FCFF","#76797A"],[0,1],1,-1.6,-0.7,2.8).s().p("AgUgFIAcgMIANAUIgkAPg");
	this.shape_26.setTransform(12.2332,6.6103,0.6155,0.6155,140.5003);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#76797A").s().p("AgrgXQAhgTAjgKIATBaIglAPg");
	this.shape_27.setTransform(14.6742,7.37,0.6155,0.6155,140.5003);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#F9FCFF","#76797A"],[0,1],1.6,-1.6,-1.5,1.7).s().p("AgVAHIAcgcIAPAQIgbAbg");
	this.shape_28.setTransform(11.3208,1.1006,0.6155,0.6155,140.5003);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#393B3D").s().p("AgpACIArgrIApA3IgdAdg");
	this.shape_29.setTransform(14.4401,1.4009,0.6155,0.6155,140.5003);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#76797A").s().p("AhEgEQANgSAQgRQAPgOAUgPIBJBtIgcAcg");
	this.shape_30.setTransform(15.4365,1.4969,0.6155,0.6155,140.5003);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#393B3D").s().p("AgTAIIAMgbIAbALIgMAcg");
	this.shape_31.setTransform(-14.9963,4.5676,0.6155,0.6155,140.5003);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#F9FCFF","#76797A"],[0,1],-3,0,7,0).s().p("AgVAgIAAg+IAngPQAEAbAAASQAAATgEAag");
	this.shape_32.setTransform(-13.5699,11.2089,0.6155,0.6155,140.5003);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#F9FCFF","#76797A"],[0,1],-3.4,0.6,2.6,-1.8).s().p("AgaABIAMgcIApgHQgJAigTAig");
	this.shape_33.setTransform(-17.3787,5.0159,0.6155,0.6155,140.5003);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#F9FCFF","#76797A"],[0,1],0.9,-0.9,-2.5,0.6).s().p("AgRAPIAPgjIAUANIgMAcg");
	this.shape_34.setTransform(-13.2504,4.1454,0.6155,0.6155,140.5003);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#76797A").s().p("Ag0gGIAPglIBaATQgJAhgUAjg");
	this.shape_35.setTransform(-15.7817,4.4373,0.6155,0.6155,140.5003);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#F9FCFF","#76797A"],[0,1],2.1,0,-1.8,0).s().p("AgKAUIAAgnIAVAAIAAAng");
	this.shape_36.setTransform(-8.7492,7.2351,0.6155,0.6155,140.5003);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#393B3D").s().p("AghAUIAAgnIBDgMIAAA/g");
	this.shape_37.setTransform(-10.9081,8.9948,0.6155,0.6155,140.5003);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#76797A").s().p("AhCAUIAAgnICCgaQADAbAAASQAAATgDAag");
	this.shape_38.setTransform(-11.4207,9.4373,0.6155,0.6155,140.5003);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#393B3D").s().p("AgTAJIAMgdIAbANIgMAcg");
	this.shape_39.setTransform(14.9899,-4.5364,0.6155,0.6155,140.5003);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#F9FCFF","#76797A"],[0,1],2.8,0,-2.7,0.1).s().p("AgVAAQAAgSADgbIAoAPIAAA+IgoANQgDgaAAgTg");
	this.shape_40.setTransform(13.597,-11.1854,0.6155,0.6155,140.5003);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#F9FCFF","#76797A"],[0,1],2.5,-1,-3.3,1.8).s().p("AACghIAZAgIgMAdIgpAGQAJgiATghg");
	this.shape_41.setTransform(17.3961,-5.0043,0.6155,0.6155,140.5003);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#F9FCFF","#76797A"],[0,1],2.6,-0.9,-2.3,0.8).s().p("AgRAIIAMgcIAXAFIgPAkg");
	this.shape_42.setTransform(13.2678,-4.1338,0.6155,0.6155,140.5003);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#76797A").s().p("Ag0AZQAJgiAUgiIBMAyIgPAlg");
	this.shape_43.setTransform(15.7991,-4.4257,0.6155,0.6155,140.5003);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#F9FCFF","#76797A"],[0,1],-1.2,0,4.5,0).s().p("AgKAUIAAgnIAVAAIAAAng");
	this.shape_44.setTransform(8.7763,-7.2116,0.6155,0.6155,140.5003);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#393B3D").s().p("AghgeIBDALIAAAnIhDAMg");
	this.shape_45.setTransform(10.9254,-8.9832,0.6155,0.6155,140.5003);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#76797A").s().p("AhCAAQAAgSADgbICCAaIAAAnIiCAZQgDgaAAgTg");
	this.shape_46.setTransform(11.4479,-9.4139,0.6155,0.6155,140.5003);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#393B3D").s().p("AgTgIIAbgLIAMAcIgbALg");
	this.shape_47.setTransform(-7.3619,13.829,0.6155,0.6155,140.5003);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#F9FCFF","#76797A"],[0,1],-2.5,2.6,4.6,-4.5).s().p("AgogCIATgmQASAOAOAPQARAQAOASIgmATg");
	this.shape_48.setTransform(-1.7052,17.8607,0.6155,0.6155,140.5003);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#F9FCFF","#76797A"],[0,1],-0.2,3.1,2.4,-2.9).s().p("AgNAdIgNgdIAZghQARAfALAkg");
	this.shape_49.setTransform(-8.2272,16.1177,0.6155,0.6155,140.5003);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#F9FCFF","#76797A"],[0,1],0.7,-1.8,-0.7,1.6).s().p("AgRgPIAXgFIAMAcIgUANg");
	this.shape_50.setTransform(-6.5968,12.2411,0.6155,0.6155,140.5003);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#76797A").s().p("Ag0AHIBMgyQASAgALAkIhaATg");
	this.shape_51.setTransform(-7.3545,14.6605,0.6155,0.6155,140.5003);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#F9FCFF","#76797A"],[0,1],1.5,-1.5,-1.3,1.3).s().p("AgVgFIAQgQIAbAcIgQAPg");
	this.shape_52.setTransform(-1.0753,11.319,0.6155,0.6155,140.5003);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#393B3D").s().p("AgqAOIApg3IAsArIg4Apg");
	this.shape_53.setTransform(-1.3875,14.448,0.6155,0.6155,140.5003);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#76797A").s().p("AhFApIBLhtQASAOAPAPQARARAOASIhuBJg");
	this.shape_54.setTransform(-1.4716,15.4346,0.6155,0.6155,140.5003);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#393B3D").s().p("AgTgIIAbgLIAMAcIgbALg");
	this.shape_55.setTransform(7.3792,-13.8174,0.6155,0.6155,140.5003);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#F9FCFF","#76797A"],[0,1],2.3,-2.3,-1.5,1.7).s().p("AgLAMQgQgPgNgSIAmgTIAsArIgTAnQgUgPgOgPg");
	this.shape_56.setTransform(1.7323,-17.8372,0.6155,0.6155,140.5003);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#F9FCFF","#76797A"],[0,1],1.1,-2.9,-0.6,1.8).s().p("AgagiIAoAGIANAcIgZAiQgSgggKgkg");
	this.shape_57.setTransform(8.2446,-16.1061,0.6155,0.6155,140.5003);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#F9FCFF","#76797A"],[0,1],0.3,2.7,2.9,-3.6).s().p("AgRgHIAUgNIAPAjIgXAGg");
	this.shape_58.setTransform(6.624,-12.2176,0.6155,0.6155,140.5003);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#76797A").s().p("Ag0gYIBagTIAPAlIhMAyQgTghgKgjg");
	this.shape_59.setTransform(7.3718,-14.6488,0.6155,0.6155,140.5003);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#F9FCFF","#76797A"],[0,1],-0.9,0.9,3.1,-3.1).s().p("AgVgFIAQgQIAbAbIgPAQg");
	this.shape_60.setTransform(1.1024,-11.2955,0.6155,0.6155,140.5003);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#393B3D").s().p("AgpgBIA3goIAdAcIgpA3g");
	this.shape_61.setTransform(1.4028,-14.4147,0.6155,0.6155,140.5003);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#76797A").s().p("AgnAoQgQgQgNgSIBthLIAcAdIhJBuQgUgPgPgPg");
	this.shape_62.setTransform(1.4987,-15.4112,0.6155,0.6155,140.5003);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#393B3D").s().p("AgTAIIALgbIAcAMIgMAbg");
	this.shape_63.setTransform(4.5498,14.9979,0.6155,0.6155,140.5003);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#F9FCFF","#76797A"],[0,1],0,3.1,0,-6.9).s().p("AgeAWIgPgoQAbgDASAAQATAAAaADIgNAog");
	this.shape_64.setTransform(11.2108,13.5952,0.6155,0.6155,140.5003);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#F9FCFF","#76797A"],[0,1],1.2,1.9,-1.2,-4.1).s().p("AgbAPIgHgpQAlALAfARIghAZg");
	this.shape_65.setTransform(5.0079,17.3922,0.6155,0.6155,140.5003);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#F9FCFF","#76797A"],[0,1],-0.5,-1.6,0.9,1.8).s().p("AgUADIAOgUIAbAMIgGAXg");
	this.shape_66.setTransform(4.1591,13.2659,0.6155,0.6155,140.5003);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#76797A").s().p("AgrAmIAThaQAkALAgASIgyBMg");
	this.shape_67.setTransform(4.4391,15.8071,0.6155,0.6155,140.5003);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#F9FCFF","#76797A"],[0,1],0,-2.1,0,1.8).s().p("AgTALIAAgVIAnAAIAAAVg");
	this.shape_68.setTransform(7.2369,8.7745,0.6155,0.6155,140.5003);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#393B3D").s().p("AgTAiIgMhDIA/AAIgMBDg");
	this.shape_69.setTransform(8.9966,10.9334,0.6155,0.6155,140.5003);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#76797A").s().p("AgTBDIgaiCQAbgDASAAQATAAAaADIgZCCg");
	this.shape_70.setTransform(9.4392,11.446,0.6155,0.6155,140.5003);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#393B3D").s().p("AgUAIIANgbIAcAMIgMAbg");
	this.shape_71.setTransform(-4.5541,-14.9883,0.6155,0.6155,140.5003);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#F9FCFF","#76797A"],[0,1],0,-2.7,0.1,2.8).s().p("AgtASIAPgnIA+AAIANAnQgUAEgZAAQgXAAgWgEg");
	this.shape_72.setTransform(-11.1934,-13.5836,0.6155,0.6155,140.5003);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#F9FCFF","#76797A"],[0,1],-0.4,-2.4,1.7,2.1).s().p("AghgBIAggZIAdAMIAGApQgkgKgfgSg");
	this.shape_73.setTransform(-5.0024,-17.3708,0.6155,0.6155,140.5003);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#F9FCFF","#76797A"],[0,1],1.8,1.6,-0.7,-4.7).s().p("AgUAGIAFgXIAkAPIgNAUg");
	this.shape_74.setTransform(-4.132,-13.2424,0.6155,0.6155,140.5003);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#76797A").s().p("AgrAYIAyhMIAlAPIgTBaQgkgKgggTg");
	this.shape_75.setTransform(-4.4238,-15.7738,0.6155,0.6155,140.5003);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#F9FCFF","#76797A"],[0,1],0,1.3,0,-4.4).s().p("AgTALIAAgVIAnAAIAAAVg");
	this.shape_76.setTransform(-7.2098,-8.751,0.6155,0.6155,140.5003);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#393B3D").s().p("AgeAjIALhFIAnAAIAMBFg");
	this.shape_77.setTransform(-8.9912,-10.912,0.6155,0.6155,140.5003);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#76797A").s().p("AgtBAIAaiCIAnAAIAZCCQgUADgZAAQgXAAgWgDg");
	this.shape_78.setTransform(-9.412,-11.4226,0.6155,0.6155,140.5003);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D0D2D4").s().p("AjhDhQhdhdAAiEQAAiDBdheQBehdCDAAQCEAABdBdQBeBeAACDQAACEheBdQhdBeiEAAQiDAAheheg");
	this.shape_79.setTransform(0.0069,0.011,0.6156,0.6156,140.5005);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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

	// Layer_1
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
	this.instance = new lib.tele_1();
	this.instance.setTransform(-12,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-12,-8,24,16), null);


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
	this.instance = new lib.tele();
	this.instance.setTransform(-12.5,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-12.5,-8,25,16), null);


(lib.Path_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#F17B02").s().p("ABnLBIhnCeIhlieIhmCeIhnieIhgCVIAA60IMlAAIAAa0IhhiVIhlCeg");
	this.shape.setTransform(40.3,86.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,80.6,172.6), null);


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
	this.shape.graphics.f("#C6743C").s().p("ABKLBIhKCeIhIieIhKCeIhJieIhFCVIAA60IJBAAIAAa0IhFiVIhJCeg");
	this.shape.setTransform(28.9,86.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,57.8,172.6), null);


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
	this.shape.graphics.f("#7C5D3C").s().p("ACdCHIhAghQgFgDAAgGQgBgFAFgEIAFgDQABAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIhTiJQgNgUgWAAQgXAAgMAUIhBBsQgCACgDgBIgsgaQgBAAgBgBQAAAAAAgBQAAAAAAgBQAAgBABAAIBChtQANgWAXgNQAWgNAaAAQAZAAAXANQAWANAOAWIBSCIQAAAAAAAAQABABAAAAQAAAAABAAQAAgBABAAIAEgDQAFgDAFADQAGADAAAFIADBJQABAGgFADIgGACIgFgCg");
	this.shape.setTransform(39.7373,24.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7C5D3C").s().p("AgPCoQgcAAgYgOQgYgOgNgYQgNgXABgaQAAgaAOgXIBMh9QAAAAAAgBQAAAAAAAAQAAAAAAgBQgBAAAAAAIgEgDQgFgDAAgFQAAgGAFgDIA+gkQAFgDAFADQAFADAAAFIAABJQAAAGgFADQgFADgFgDIgGgEQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABIhMB+QgLAUAKATQAFAKAKAHQALAGAMAAICCAAQABAAABAAQAAAAABABQAAAAAAABQABAAAAABIAAAzQAAABgBABQAAAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_1.setTransform(20.399,45.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7C5D3C").s().p("AhlCEIg/gkQgFgDAAgGQAAgGAFgDIA/gkQAFgDAFADQAFADAAAGIAAAGQAAAAAAAAQAAABABAAQAAAAAAAAQAAAAABAAICaAAQAMAAAKgGQALgGAFgLQAKgUgMgSIg6hhQgBAAAAgBQAAgBAAAAQAAgBABAAQAAgBABAAIArgcQABAAAAgBQABAAABAAQAAABABAAQAAAAABABIA7BiQAOAXAAAZQABAagNAYQgNAYgYAOQgYANgcAAIiZAAQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAAAABIAAAGQAAAFgFADIgFACIgFgCg");
	this.shape_2.setTransform(49.6759,50.885);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7C5D3C").s().p("AjDEHQgGAAAAgGIAAglQAAgHAGAAIAwAAQAHAAgBgGIAAk+QABgGgHAAIgTAAQgDAAgBgDQgCgDABgDIBDiFQABgDAFAAQADAAABADIBECFQABADgCADQgCADgDAAIgTAAQgFAAgBAGIAAE+QABAGAFAAIBnAAQAGAAAAgGIAAk+QAAgGgGAAIgSAAQgEAAgCgDQgCgDACgDIBCiFQACgDAEAAQADAAADADIBDCFQABADgCADQgCADgDAAIgTAAQgGAAAAAGIAAE+QAAAGAGAAIAwAAQAGAAAAAHIAAAlQAAAGgGAAg");
	this.shape_3.setTransform(128.55,37.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7C5D3C").s().p("AiGELQAAAAgBgBQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAAAAAQABgBAAAAIBugrQAFgCAAgEIAAiQQAAgFgFgBQg8gQgfhaQgdhRgCiCQAAgEAEgEQADgEAFABIEPAAQAFgBADAEQAEAEAAAEQgCCCgdBRQgfBag8AQQgFABAAAFIAACQQAAAEAFACIBuArQAAAAABABQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAg");
	this.shape_4.setTransform(219.475,37.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7C5D3C").s().p("AlGF4QgUAAgPgOQgOgOAAgVIAAqNQAAgUAOgPQAPgOAUAAIKNAAQAVAAAOAOQAOAPAAAUIAAKNQAAAVgOAOQgOAOgVAAgAlUlVQgGAGAAAJIAAKNQAAAJAGAFQAGAGAIAAIKNAAQAJAAAFgGQAGgFAAgJIAAqNQAAgJgGgGQgGgGgIAAIqNAAQgIAAgGAGg");
	this.shape_5.setTransform(219.475,37.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#7C5D3C").s().p("AlGF4QgUAAgPgOQgOgOAAgVIAAqNQAAgUAOgPQAPgOAUAAIKNAAQAVAAAOAOQAOAPAAAUIAAKNQAAAVgOAOQgOAOgVAAgAlUlVQgGAGAAAJIAAKNQAAAJAGAFQAGAGAIAAIKNAAQAJAAAFgGQAGgFAAgJIAAqNQAAgJgGgGQgGgGgIAAIqNAAQgIAAgGAGg");
	this.shape_6.setTransform(128.575,37.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7C5D3C").s().p("AlGF4QgVAAgOgOQgPgPAAgUIAAqNQAAgUAPgPQAOgOAVAAIKNAAQAUAAAPAOQAPAOAAAVIAAKNQAAAVgPAOQgPAOgUAAgAlUlVQgHAHAAAIIAAKNQAAAIAHAGQAFAGAJAAIKNAAQAIAAAHgGQAFgFAAgJIAAqNQAAgJgFgGQgHgGgIAAIqNAAQgIAAgGAGg");
	this.shape_7.setTransform(37.65,37.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,257.1,75.3), null);


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
	this.instance = new lib.Group();
	this.instance.setTransform(-15.95,13.8,0.0845,0.0845,0,0,0,128.4,37.9);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Path();
	this.instance_1.setTransform(19.2,-11.95,0.0845,0.0845,0,0,0,29.6,86.5);
	this.instance_1.alpha = 0.3906;

	this.instance_2 = new lib.Path_1();
	this.instance_2.setTransform(-10.35,-11.95,0.0845,0.0845,0,0,0,40.9,86.5);
	this.instance_2.alpha = 0.3906;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0A365").s().p("EgTOAjpMAAAhHRMAjxAAAQBIAAAyAzQAyAyAABIMAAABB3QAABIgyAyQgyAzhIAAg");
	this.shape.setTransform(18.7458,0.0126,0.0845,0.0845);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCC584").s().p("Egf/AjpQhHAAgygzQgzgyAAhIMAAAhB3QAAhIAzgyQAygzBHAAMBCrAAAMAAABHRg");
	this.shape_1.setTransform(-10.4026,0.0126,0.0845,0.0845);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-29.1,-19.2,58.3,38.5), null);


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

	// Layer_2
	this.instance = new lib.Symbol14();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({rotation:-718.2669},90,cjs.Ease.sineOut).wait(1).to({rotation:-717.4768},0).wait(1).to({rotation:-716.6788},0).wait(1).to({rotation:-715.8921},0).wait(1).to({rotation:-715.1348},0).wait(1).to({rotation:-714.4216},0).wait(1).to({rotation:-713.7627},0).wait(1).to({rotation:-713.1634},0).wait(1).to({rotation:-712.6251},0).wait(1).to({rotation:-712.1467},0).wait(1).to({rotation:-711.725},0).to({_off:true},1).wait(179).to({_off:false,rotation:-709.5424},0).to({rotation:-704.0406},10).to({rotation:-1069.5424},60,cjs.Ease.quadIn).wait(79).to({_off:true},1).wait(1));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},109).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},179).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},149).to({state:[]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.8,-29.8,59.6,59.6);


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
	this.instance = new lib.Symbol4();
	this.instance.setTransform(-10,6.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol5();
	this.instance_1.setTransform(10.5,-6.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.5,-14.5,45,29.5);


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
	var mask_graphics_9 = new cjs.Graphics().p("AnhN6IgCm5IgDgbQgDh+gbgyIgHgDIkrAAIAApdIgFAAIAAoPIZ2AAIAAIPIgBAAIAATkg");
	var mask_graphics_48 = new cjs.Graphics().p("AnhN6IgCm5IgDgbQgDh+gbgyIgHgDIkrAAIAApdIgFAAIAAoPIZ2AAIAAIPIgBAAIAATkg");
	var mask_graphics_89 = new cjs.Graphics().p("AnhN6IgCm5IgDgbQgDh+gbgyIgHgDIkrAAIAApdIgFAAIAAoPIZ2AAIAAIPIgBAAIAATkg");
	var mask_graphics_119 = new cjs.Graphics().p("AnhN6IgCm5IgDgbQgDh+gbgyIgHgDIkrAAIAApdIgFAAIAAoPIZ2AAIAAIPIgBAAIAATkg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:50.75,y:-22.75}).wait(1).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_graphics_9,x:50.75,y:-22.75}).wait(39).to({graphics:mask_graphics_48,x:50.75,y:-22.75}).wait(1).to({graphics:null,x:0,y:0}).wait(40).to({graphics:mask_graphics_89,x:50.75,y:-22.75}).wait(30).to({graphics:mask_graphics_119,x:50.75,y:-22.75}).wait(1).to({graphics:null,x:0,y:0}).wait(160));

	// Symbol_6
	this.instance = new lib.Symbol6();
	this.instance.setTransform(-26,-56.7,1,1,0,0,0,-12.5,-61.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(8).to({_off:false},0).to({rotation:-75.94,y:-56.65},30,cjs.Ease.cubicOut).wait(9).to({_off:true},1).wait(40).to({_off:false},0).to({rotation:0,y:-56.7},30,cjs.Ease.cubicIn).to({_off:true},1).wait(160));

	// Layer_5 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_0 = new cjs.Graphics().p("AjEFzQh1oihUgBIAAjCIMbAAIgDLlg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AjEFzQh1oihUgBIAAjCIMbAAIgDLlg");
	var mask_1_graphics_48 = new cjs.Graphics().p("AjEFzQh1oihUgBIAAjCIMbAAIgDLlg");
	var mask_1_graphics_89 = new cjs.Graphics().p("AjEFzQh1oihUgBIAAjCIMbAAIgDLlg");
	var mask_1_graphics_119 = new cjs.Graphics().p("AjEFzQh1oihUgBIAAjCIMbAAIgDLlg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:mask_1_graphics_0,x:16.75,y:-35.125}).wait(1).to({graphics:null,x:0,y:0}).wait(8).to({graphics:mask_1_graphics_9,x:16.75,y:-35.125}).wait(39).to({graphics:mask_1_graphics_48,x:16.75,y:-35.125}).wait(1).to({graphics:null,x:0,y:0}).wait(40).to({graphics:mask_1_graphics_89,x:16.75,y:-35.125}).wait(30).to({graphics:mask_1_graphics_119,x:16.75,y:-35.125}).wait(1).to({graphics:null,x:0,y:0}).wait(160));

	// Symbol_4
	this.instance_1 = new lib.Symbol11("single",39);
	this.instance_1.setTransform(-25.45,-57.05,1,1,80.7255,0,0,-32.5,-4.5);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({rotation:0,x:-25.5,y:-57},30,cjs.Ease.cubicOut).wait(9).to({startPosition:39},0).to({_off:true},1).wait(40).to({_off:false},0).to({rotation:80.7255,x:-25.45,y:-57.05},30,cjs.Ease.cubicIn).to({_off:true},1).wait(160));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-29.7,-84.7,130.7,151);


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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(8).to({_off:false},0).to({scaleX:1.0138,scaleY:1.0138,x:0.75},5).to({x:72.75},25,cjs.Ease.quadOut).wait(9).to({_off:true},1).wait(40).to({_off:false},0).to({x:0.75},19,cjs.Ease.quadIn).to({scaleX:1,scaleY:1,x:0},11).to({_off:true},1).wait(160));

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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(188,188,188,0.553)").s().p("AhYCOQgngVgVgmQgVglAAguQAAguAVglQAWglAngVQAngVAyAAQAxAAAmAUQAnAUAVAjQAVAkAAAsQAAAegJAXQgJAXgQAMQgQALgXAAQgSAAgMgIQgNgHgFgQQgUAfgoAAQgXAAgTgLQgTgMgLgUQgLgUAAgbQAAgZALgUQALgVATgLQATgMAXAAQAiAAAUAYIAAgVIAwAAIAAByQAAAXARAAQANAAAHgPQAHgPAAgdQAAgkgRgcQgRgbgegQQgegPgnAAQgmAAgeAQQgeARgRAdQgRAdAAAlQAAAlARAdQAQAeAeAQQAeARAmAAQAmAAAggQIALAhQgQAIgWAFQgWAEgVAAQgyAAgngVgAggggQgMANAAAVQAAAXAMANQAMANAUAAQASAAANgNQAMgNAAgXQAAgWgMgNQgNgMgSAAQgUAAgMANg");
	this.shape.setTransform(109.775,-39.925);

	this.instance = new lib.Logo();
	this.instance.setTransform(70,-54);

	this.instance_1 = new lib.bodycar();
	this.instance_1.setTransform(-202,-94);

	this.instance_2 = new lib.Glass_1();
	this.instance_2.setTransform(150,-2,1,1,0,0,0,275,62);
	this.instance_2.alpha = 0.3008;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-272,-219,844,434), null);


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

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0.42)","rgba(0,0,0,0.098)"],[0,1],-10.7,0,10.8,0).s().p("AhrIxIADxkIBeA7IB2Qsg");
	this.shape.setTransform(-43.725,9.075);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(65).to({_off:false},0).wait(78).to({_off:true},1).wait(136));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(0,0,0,0.42)","rgba(0,0,0,0.098)"],[0,1],3.8,-18.3,-0.6,37.9).s().p("AmUgzIgKAAIAAg8IM9AAIgKDfg");
	this.shape_1.setTransform(-13.975,-42.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(143).to({_off:true},1).wait(136));

	// Layer_2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.169)").s().p("AmjKPIAA0dINHAAIAAUdg");
	this.shape_2.setTransform(-15.475,3.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(143).to({_off:true},1).wait(136));

	// Symbol_17
	this.instance = new lib.Symbol17();
	this.instance.setTransform(16.5,-40.05,1.0319,1.0319);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71).to({_off:false},0).wait(72).to({_off:true},1).wait(136));

	// Symbol_17
	this.instance_1 = new lib.Symbol17();
	this.instance_1.setTransform(-22.5,-40.05,1.0319,1.0319);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(65).to({_off:false},0).wait(78).to({_off:true},1).wait(136));

	// Symbol_17
	this.instance_2 = new lib.Symbol17();
	this.instance_2.setTransform(27,-0.05,1.0319,1.0319);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(43).to({_off:false},0).wait(100).to({_off:true},1).wait(136));

	// Symbol_17
	this.instance_3 = new lib.Symbol17();
	this.instance_3.setTransform(-16,-0.05,1.0319,1.0319);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(34).to({_off:false},0).wait(109).to({_off:true},1).wait(136));

	// Symbol_17
	this.instance_4 = new lib.Symbol17();
	this.instance_4.setTransform(18,39.95,1.0319,1.0319);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({_off:false},0).wait(134).to({_off:true},1).wait(136));

	// Symbol_17
	this.instance_5 = new lib.Symbol17();
	this.instance_5.setTransform(-26,39.95,1.0319,1.0319);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(143).to({_off:true},1).wait(136));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-57.4,-61.9,114.5,131);


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

	// Symbol_17
	this.instance = new lib.Symbol17();
	this.instance.setTransform(31.75,-59.05,1.0319,1.0319,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1).to({_off:false},0).wait(7).to({_off:true},1).wait(130));

	// Symbol_17
	this.instance_1 = new lib.Symbol17();
	this.instance_1.setTransform(-11.25,-59.05,1.0319,1.0319,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(1).to({_off:false},0).wait(12).to({_off:true},1).wait(125));

	// Symbol_17
	this.instance_2 = new lib.Symbol17();
	this.instance_2.setTransform(70.95,-19.4,1.0319,1.0319);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(1).to({_off:false},0).wait(27).to({_off:true},1).wait(110));

	// Symbol_17
	this.instance_3 = new lib.Symbol17();
	this.instance_3.setTransform(26.55,-19.4,1.0319,1.0319);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},1).wait(1).to({_off:false},0).wait(22).to({_off:true},1).wait(115));

	// Symbol_17
	this.instance_4 = new lib.Symbol17();
	this.instance_4.setTransform(-18.25,-19.3,1.0319,1.0319,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(1).to({_off:false},0).wait(17).to({_off:true},1).wait(120));

	// Symbol_17
	this.instance_5 = new lib.Symbol17();
	this.instance_5.setTransform(97.65,19.2,1.0319,1.0319,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},32).wait(106));

	// Symbol_17
	this.instance_6 = new lib.Symbol17();
	this.instance_6.setTransform(54.65,19.2,1.0319,1.0319,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},37).wait(101));

	// Symbol_17
	this.instance_7 = new lib.Symbol17();
	this.instance_7.setTransform(10.75,19.1,1.0319,1.0319);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},42).wait(96));

	// Symbol_17
	this.instance_8 = new lib.Symbol17();
	this.instance_8.setTransform(-33.65,19.1,1.0319,1.0319);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},47).wait(91));

	// Symbol_17
	this.instance_9 = new lib.Symbol17();
	this.instance_9.setTransform(-78.45,19.2,1.0319,1.0319,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},52).wait(86));

	// Symbol_17
	this.instance_10 = new lib.Symbol17();
	this.instance_10.setTransform(78.65,59.2,1.0319,1.0319,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},77).wait(61));

	// Symbol_17
	this.instance_11 = new lib.Symbol17();
	this.instance_11.setTransform(35.65,59.2,1.0319,1.0319,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},72).wait(66));

	// Symbol_17
	this.instance_12 = new lib.Symbol17();
	this.instance_12.setTransform(-8.25,59.1,1.0319,1.0319);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},67).wait(71));

	// Symbol_17
	this.instance_13 = new lib.Symbol17();
	this.instance_13.setTransform(-52.65,59.1,1.0319,1.0319);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},61).wait(77));

	// Symbol_17
	this.instance_14 = new lib.Symbol17();
	this.instance_14.setTransform(-97.45,59.2,1.0319,1.0319,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},56).wait(82));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.6,-79,255.3,158);


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

	// Layer_11
	this.instance = new lib.Symbol16("synched",0);
	this.instance.setTransform(-11.05,-2.35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(94).to({startPosition:0},0).to({y:-1.35},5).to({y:-2.35},10,cjs.Ease.quadInOut).to({_off:true},1).wait(179).to({_off:false},0).wait(69).to({startPosition:0},0).to({_off:true},1).wait(40).to({_off:false},0).wait(41));

	// door
	this.instance_1 = new lib.Symbol8("single",0);
	this.instance_1.setTransform(-14,-9.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(94).to({startPosition:0},0).to({y:-8.5},5).to({y:-9.5},10,cjs.Ease.quadOut).wait(1).to({mode:"synched",startPosition:9},0).wait(39).to({mode:"single",startPosition:48},0).wait(110).to({mode:"synched",startPosition:89},0).wait(30).to({mode:"single",startPosition:119},0).wait(69).to({startPosition:119},0).to({_off:true},1).wait(40).to({_off:false},0).wait(41));

	// Layer_13 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_145 = new cjs.Graphics().p("AkTIbQgygiAAgMIgBvHQAChEBSAAIIcAEIAdQ5g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(145).to({graphics:mask_graphics_145,x:-22.175,y:-6.35}).wait(144).to({graphics:null,x:0,y:0}).wait(151));

	// Layer_12
	this.instance_2 = new lib.Symbol19("synched",0);
	this.instance_2.setTransform(-7,-11.95);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(145).to({_off:false},0).to({_off:true},144).wait(151));

	// Symbol_1
	this.instance_3 = new lib.Symbol13("synched",0);
	this.instance_3.setTransform(113.1,64.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(109).to({mode:"single",startPosition:109},0).wait(180).to({mode:"synched",startPosition:289},0).wait(11).to({startPosition:299},0).wait(58).to({startPosition:357},0).to({_off:true},1).wait(40).to({_off:false,startPosition:398},0).wait(41));

	// Isolation_Mode
	this.instance_4 = new lib.Symbol13("synched",0);
	this.instance_4.setTransform(-168.9,64.55);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(109).to({mode:"single",startPosition:109},0).wait(180).to({mode:"synched",startPosition:289},0).wait(11).to({startPosition:299},0).wait(58).to({startPosition:357},0).to({_off:true},1).wait(40).to({_off:false,startPosition:398},0).wait(41));

	// Symbol_6
	this.instance_5 = new lib.Symbol10("single",0);
	this.instance_5.setTransform(186,-18.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(94).to({startPosition:0},0).to({y:-17.5},5).to({y:-18.5},10,cjs.Ease.quadOut).wait(1).to({mode:"synched",startPosition:9},0).wait(39).to({mode:"single",startPosition:48},0).wait(110).to({mode:"synched",startPosition:89},0).wait(30).to({mode:"single",startPosition:119},0).wait(69).to({startPosition:119},0).to({_off:true},1).wait(40).to({_off:false},0).wait(41));

	// Symbol_3
	this.instance_6 = new lib.Symbol3();
	this.instance_6.setTransform(136.5,-2.5,1,1,0,0,0,150,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(94).to({y:-1.5},5).to({y:-2.5},10,cjs.Ease.quadOut).wait(249).to({_off:true},1).wait(40).to({_off:false},0).wait(41));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-285.5,-219.5,844,435);


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
	this.instance = new lib.Symbol7("synched",0);
	this.instance.setTransform(100.75,1.9,1,1,0,0,0,136.5,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({x:414.75,startPosition:9},0).to({x:80.2,startPosition:99},90,cjs.Ease.quadOut).wait(1).to({regX:35.7,regY:1.7,x:-20.15,y:6.1,startPosition:100},0).wait(1).to({x:-19.7,startPosition:101},0).wait(1).to({x:-19.3,startPosition:102},0).wait(1).to({x:-18.95,startPosition:103},0).wait(1).to({x:-18.6,startPosition:104},0).wait(1).to({x:-18.3,startPosition:105},0).wait(1).to({x:-18,startPosition:106},0).wait(1).to({x:-17.75,startPosition:107},0).wait(1).to({x:-17.5,startPosition:108},0).wait(1).to({x:-17.25,startPosition:109},0).wait(1).to({x:-17.1,startPosition:110},0).wait(1).to({x:-16.9,startPosition:111},0).wait(1).to({x:-16.75,startPosition:112},0).wait(1).to({x:-16.6,startPosition:113},0).wait(1).to({x:-16.5,startPosition:114},0).wait(1).to({x:-16.45,startPosition:115},0).wait(1).to({x:-16.35,startPosition:116},0).wait(1).to({x:-16.3,startPosition:117},0).wait(1).to({startPosition:118},0).wait(1).to({regX:136.5,regY:-2.5,x:84.5,y:1.9,startPosition:119},0).wait(171).to({startPosition:290},0).to({x:88.5,startPosition:300},10,cjs.Ease.quadInOut).to({x:-353.5,startPosition:399},59,cjs.Ease.quadIn).wait(81));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-705.5,-98.8,1172.3,197.7);


// stage content:
(lib.Car_an_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_21
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E41E26").s().p("Eg6+AAjIAAhFMB19AAAIAABFg");
	this.shape.setTransform(377.5,236.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(440));

	// car
	this.instance = new lib.Symbol15("synched",0);
	this.instance.setTransform(392.05,137,1,1,0,0,0,100.8,1.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(440));

	// Isolation_Mode
	this.instance_1 = new lib.Symbol18("single",0);
	this.instance_1.setTransform(615.45,154.05);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(139).to({mode:"synched",startPosition:9},0).wait(71).to({mode:"single",startPosition:80},0).wait(230));

	// Layer_20
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D1D1D1","#F4F4F4"],[0,1],0,291,0,-290.9).s().p("Eg+fAu4MAAAhdvMB8/AAAMAAABdvg");
	this.shape_1.setTransform(400.05,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(440));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-14.2,300,814.3000000000001,300);
// library properties:
lib.properties = {
	id: '40DF51BA37FAD04B834B8CB183AC70D7',
	width: 800,
	height: 600,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/backdoor.png?1716749134388", id:"backdoor"},
		{src:"images/bodycar.png?1716749134388", id:"bodycar"},
		{src:"images/door.png?1716749134388", id:"door"},
		{src:"images/Glass.png?1716749134388", id:"Glass"},
		{src:"images/Logo.png?1716749134388", id:"Logo"},
		{src:"images/tele.png?1716749134388", id:"tele"},
		{src:"images/tele_1.png?1716749134388", id:"tele_1"}
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