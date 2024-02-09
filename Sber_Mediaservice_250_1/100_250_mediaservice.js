(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"100_250_mediaservice_atlas_P_1", frames: [[434,163,520,61],[646,226,94,74],[201,0,231,211],[0,0,199,250],[720,0,271,124],[434,0,284,161],[473,226,171,46],[201,226,270,102]]},
		{name:"100_250_mediaservice_atlas_NP_1", frames: [[0,0,1265,250]]}
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



(lib.bg = function() {
	this.initialize(ss["100_250_mediaservice_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dis = function() {
	this.initialize(ss["100_250_mediaservice_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.g1pngcopy = function() {
	this.initialize(ss["100_250_mediaservice_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.g2pngcopy = function() {
	this.initialize(ss["100_250_mediaservice_atlas_P_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.g3pngcopy = function() {
	this.initialize(ss["100_250_mediaservice_atlas_P_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Logo = function() {
	this.initialize(ss["100_250_mediaservice_atlas_P_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.t1 = function() {
	this.initialize(ss["100_250_mediaservice_atlas_P_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.t2 = function() {
	this.initialize(ss["100_250_mediaservice_atlas_P_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.t3 = function() {
	this.initialize(ss["100_250_mediaservice_atlas_P_1"]);
	this.gotoAndStop(7);
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
	this.instance = new lib.Logo();
	this.instance.setTransform(-135.5,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(-135.5,-62,271,124), null);


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
	this.instance = new lib.dis();
	this.instance.setTransform(-260,-30.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-260,-30.5,520,61), null);


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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4NEEIAAnpMAwbAAAIAAHpg");
	mask.setTransform(1,26);

	// Layer_1
	this.instance = new lib.t3();
	this.instance.setTransform(-123,-49);

	this.instance_1 = new lib.t3();
	this.instance_1.setTransform(-123,-49);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(-123,3,270,49), null);


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

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2LD6IAAnzMAsXAAAIAAHzg");
	mask.setTransform(-8,-25);

	// Layer_1
	this.instance = new lib.t3();
	this.instance.setTransform(-123,-49);

	this.instance_1 = new lib.t3();
	this.instance_1.setTransform(-123,-49);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-123,-49,257,49), null);


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

	// Layer_2
	this.instance = new lib.g2pngcopy();
	this.instance.setTransform(-142.5,-114.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-142.5,-114.5,231,211), null);


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

	// Layer_2
	this.instance = new lib.g1pngcopy();
	this.instance.setTransform(-75.05,-40.05);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-75,-40,94,74), null);


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

	// Layer_2
	this.instance = new lib.g3pngcopy();
	this.instance.setTransform(-144.5,-127);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-144.5,-127,199,250), null);


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

	// Layer_2
	this.instance = new lib.t2();
	this.instance.setTransform(-73.5,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-73.5,-8,171,46), null);


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
	this.instance = new lib.t1();
	this.instance.setTransform(-131,-69.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-131,-69.5,284,161), null);


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
	this.shape.graphics.f("#0BB303").s().p("Egl4ATiMAAAgnDMBLxAAAMAAAAnDg");
	this.shape.setTransform(-242.475,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8273D").s().p("Egl4ATiMAAAgnDMBLxAAAMAAAAnDg");
	this.shape_1.setTransform(242.525,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-485,-125,970,250), null);


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

	// gradient
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F8273D","rgba(248,39,61,0)"],[0,1],81.6,0.1,-81.4,0.1).s().p("AsufGMAAAg+LIZdAAMAAAA+Lg");
	this.shape.setTransform(550.5,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#0BB303","rgba(11,179,3,0)"],[0,1],-81.5,0,81.5,0).s().p("AsufGMAAAg+LIZdAAMAAAA+Lg");
	this.shape_1.setTransform(-553.5,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(90));

	// Layer_4
	this.instance = new lib.bg();
	this.instance.setTransform(-632.5,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// _
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,0,204,0)").s().p("AqdKeIAA07IU7AAIAAU7g");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).to({_off:true},1).wait(89));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-635,-199,1267.5,398.1);


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

	// Layer_2
	this.instance = new lib.Symbol23();
	this.instance.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.Symbol23();
	this.instance_1.setTransform(0,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-260,-30,520,61), null);


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

	// Layer_2
	this.instance = new lib.Symbol24();
	this.instance.setTransform(-280.5,-36);

	this.instance_1 = new lib.Symbol24();
	this.instance_1.setTransform(-280.5,-36);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(350));

	// Layer_4
	this.instance_2 = new lib.Symbol22();
	this.instance_2.setTransform(-109,80);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({_off:false},0).to({alpha:1},21).wait(254).to({alpha:0},20).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-416,-98,567,209);


(lib.Symbol4copy2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol21();
	this.instance.setTransform(12.1,-13.05,0.8933,0.8933,0,0,0,0.1,19.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(200).to({_off:false},0).to({scaleX:1.0736,scaleY:1.0736,x:12.05,alpha:0.8008},19,cjs.Ease.cubicOut).wait(1).to({regX:12,regY:26,scaleX:1.0631,scaleY:1.0631,x:24.65,y:-6.5,alpha:0.8291},0).wait(1).to({scaleX:1.0539,scaleY:1.0539,x:24.55,y:-6.55,alpha:0.8541},0).wait(1).to({scaleX:1.0458,scaleY:1.0458,x:24.45,y:-6.6,alpha:0.876},0).wait(1).to({scaleX:1.0387,scaleY:1.0387,x:24.35,y:-6.65,alpha:0.8953},0).wait(1).to({scaleX:1.0324,scaleY:1.0324,x:24.3,alpha:0.9122},0).wait(1).to({scaleX:1.027,scaleY:1.027,x:24.2,y:-6.7,alpha:0.927},0).wait(1).to({scaleX:1.0222,scaleY:1.0222,x:24.15,alpha:0.9399},0).wait(1).to({scaleX:1.018,scaleY:1.018,x:24.1,y:-6.75,alpha:0.9512},0).wait(1).to({scaleX:1.0144,scaleY:1.0144,x:24.05,alpha:0.9609},0).wait(1).to({scaleX:1.0113,scaleY:1.0113,alpha:0.9693},0).wait(1).to({scaleX:1.0087,scaleY:1.0087,x:24,alpha:0.9765},0).wait(1).to({scaleX:1.0065,scaleY:1.0065,y:-6.8,alpha:0.9825},0).wait(1).to({scaleX:1.0046,scaleY:1.0046,x:23.95,alpha:0.9875},0).wait(1).to({scaleX:1.0031,scaleY:1.0031,alpha:0.9915},0).wait(1).to({scaleX:1.002,scaleY:1.002,x:23.9,alpha:0.9947},0).wait(1).to({scaleX:1.0011,scaleY:1.0011,alpha:0.9971},0).wait(1).to({scaleX:1.0005,scaleY:1.0005,y:-6.85,alpha:0.9987},0).wait(1).to({scaleX:1.0001,scaleY:1.0001,alpha:0.9997},0).wait(1).to({regX:0,regY:20,scaleX:1,scaleY:1,x:12,y:-13,alpha:1},0).wait(81).to({alpha:0},20).wait(11));

	// Layer_5
	this.instance_1 = new lib.Symbol20();
	this.instance_1.setTransform(4,-54,1,1,0,0,0,-8,-21);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(175).to({_off:false},0).to({alpha:1},19,cjs.Ease.cubicOut).wait(125).to({alpha:0},20).wait(11));

	// Layer_4
	this.instance_2 = new lib.Symbol16();
	this.instance_2.setTransform(130.15,1.1,0.779,0.779,0,0,0,85.2,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(59).to({_off:false},0).to({regX:85,regY:0,scaleX:1,scaleY:1,x:100,y:11,alpha:1},15,cjs.Ease.quadOut).wait(80).to({alpha:0},14).wait(182));

	// Layer_2
	this.instance_3 = new lib.Symbol15();
	this.instance_3.setTransform(133,-75.05,0.4157,0.4157,0,0,0,128,-28);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({regX:127.9,regY:-28.2,scaleX:1.0228,scaleY:1.0228,y:-75.2,alpha:0.7813},21,cjs.Ease.quadOut).to({regX:128,regY:-28,scaleX:1,scaleY:1,y:-75,alpha:1},8).wait(111).to({alpha:0},14).wait(182));

	// _
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,0,204,0)").s().p("AqdKeIAA07IU7AAIAAU7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(350));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-153.4,-117.5,332.9,184.5);


(lib.right_mc = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol18();
	this.instance.setTransform(243.5,-87,1,1,0,0,0,0.5,39);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({scaleX:0.65,scaleY:0.65,y:-86.95},0).to({scaleX:1,scaleY:1,x:217.05,y:-29.95,alpha:1},40,cjs.Ease.quadOut).to({guide:{path:[217,-29.8,210.1,-22.5,201.1,-26.6,200.9,-26.7,200.8,-26.8,192.5,-32.6,205.9,-38.3]}},68).to({regX:0.6,scaleX:0.8837,scaleY:0.8837,guide:{path:[205.9,-38.3,214.7,-42,232.9,-45.6]}},55).to({regX:0.5,scaleX:1,scaleY:1,guide:{path:[232.9,-45.7,233.6,-45.8,234.4,-46,246.3,-45.8,250.7,-35,250.8,-34.7,250.9,-34.4]}},47).to({guide:{path:[250.9,-34.4,251.9,-30.9,246.8,-30.1,232.8,-28.5,219,-31.5]}},90).to({alpha:0},20).wait(11));

	// Layer_4
	this.instance_1 = new lib.Symbol19();
	this.instance_1.setTransform(247,142);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({scaleX:0.7586,scaleY:0.7586},0).to({scaleX:1,scaleY:1,x:291,y:60,alpha:1},40,cjs.Ease.quadOut).to({guide:{path:[291.1,60,291,57.7,291.7,55.1,293.1,49.9,296.6,46.9,300.2,43.9,303.8,44.8,307.4,45.8,308.5,50,309.6,54,304.2,57,298.7,60.1,299.7,65.5,300.7,70.9,297.1,69.9,293.4,69,291.9,64.6,291.4,63.3,291.2,62]}},260).to({guide:{path:[291.3,61.9,291.3,61.9,291.3,61.9]},alpha:0},20).wait(11));

	// Layer_3
	this.instance_2 = new lib.Symbol17();
	this.instance_2.setTransform(502.5,91);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(19).to({scaleX:0.6995,scaleY:0.6995},0).to({scaleX:1,scaleY:1,x:403.15,y:-0.55,alpha:1},40,cjs.Ease.quadOut).to({guide:{path:[403.2,-0.4,402.4,-2.1,401.9,-3.7,401,-6.3,400.8,-7.7,400.7,-9.2,401.4,-9.5,402,-9.9,403.1,-9,404.1,-8.1,405.6,-6,408.6,-1.9,410.9,3.7,413.3,9.4,414.1,12.3,415,15.2,413.5,16.1,412.1,16.9,410.8,16.1,409.6,15.2,407.6,9.9,405.8,5.3,404.6,2.7]}},260).to({guide:{path:[404.5,2.5,404.5,2.5,404.5,2.5]},alpha:0},20).wait(11));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(104.5,-166,452.5,404.5);


// stage content:
(lib._100_250_mediaservice = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var thisStage = this;
		var ini = 984;
		
		window.addEventListener("resize", resize, false);
		
		
		function resize() {
		
			var w = window.innerWidth * window.devicePixelRatio;
			stage.canvas.width = w;
			stage.canvas.height = 250 * window.devicePixelRatio;
			stage.scaleX = stage.scaleY = window.devicePixelRatio;
			stage.canvas.style.width = window.innerWidth + "px";
			stage.canvas.style.height = "250px";
		
			// Border settings	
			//stage.canvas.style.border = "1px solid #000000";
			//stage.canvas.style.boxSizing = "border-box";	
		
			// Position on stage
			thisStage.center.x = Math.floor(w / 2 / window.devicePixelRatio);
			thisStage.center_small.x = Math.floor(w / 2 / window.devicePixelRatio);
			thisStage.right_mc.x = Math.floor(w / 2 / window.devicePixelRatio);
			thisStage.logo_mc.x = Math.floor(w / 2 / window.devicePixelRatio);
		
		
			thisStage.bg.x = Math.floor(w / 2 / window.devicePixelRatio);
			thisStage.bg.scaleX = w / window.devicePixelRatio;
		
		}
		
		
		resize();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// right
	this.right_mc = new lib.right_mc();
	this.right_mc.name = "right_mc";
	this.right_mc.setTransform(438,125,1,1,0,0,0,0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.right_mc).wait(1));

	// left
	this.logo_mc = new lib.Symbol12();
	this.logo_mc.name = "logo_mc";
	this.logo_mc.setTransform(426,125,1,1,0,0,0,0.5,0);

	this.timeline.addTween(cjs.Tween.get(this.logo_mc).wait(1));

	// cont_small
	this.center_small = new lib.Symbol4copy2();
	this.center_small.name = "center_small";
	this.center_small.setTransform(428,125,1,1,0,0,0,13,0);

	this.timeline.addTween(cjs.Tween.get(this.center_small).wait(1));

	// center
	this.center = new lib.Symbol4();
	this.center.name = "center";
	this.center.setTransform(425,125);

	this.timeline.addTween(cjs.Tween.get(this.center).wait(1));

	// bg
	this.bg = new lib.Symbol8();
	this.bg.name = "bg";
	this.bg.setTransform(425,125,1.0165,1);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(215,51,842.5,312.5);
// library properties:
lib.properties = {
	id: '5488A6D97DF71A4DBB9427319BE3C5A8',
	width: 850,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/100_250_mediaservice_atlas_P_1.png?1707486297288", id:"100_250_mediaservice_atlas_P_1"},
		{src:"images/100_250_mediaservice_atlas_NP_1.jpg?1707486297288", id:"100_250_mediaservice_atlas_NP_1"}
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
an.compositions['5488A6D97DF71A4DBB9427319BE3C5A8'] = {
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