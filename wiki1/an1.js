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


(lib.Path_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#F92B00","#FE8B00","#FE0000","#FC0001","#F40203","#E60408","#D2070F","#B90B17","#9A1021","#75162E","#4B1C3B","#2B2146"],[0,0.357,0.776,0.835,0.867,0.894,0.918,0.937,0.957,0.973,0.988,1],0,8.7,0,-7).s().p("AgmAaQgQgcgIgdQgCgMAMgJQAQgMAlAAQAlAAAQAMQALAJgDAMQgHAdgPAcQgVAmgSAAQgSAAgVgmg");
	this.shape.setTransform(6.3095,6.45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,12.6,12.9), null);


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
	this.shape.graphics.rf(["#FEFF00","#FE8B00","#FE0000","#FC0001","#F40203","#E60408","#D2070F","#B90B17","#9A1021","#75162E","#4B1C3B","#2B2146"],[0,0.357,0.776,0.835,0.867,0.894,0.918,0.937,0.957,0.973,0.988,1],0,0,0,0,0,1.1).s().p("AAHAdQgHgJgIgQQgIgOgCgMQgDgMAEgBQADgDAIAKQAHAKAIAPQAIAOADAMQACAMgDACIgCAAQgDAAgHgIg");
	this.shape.setTransform(2.0378,3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,4.1,7.4), null);


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
	this.shape.graphics.rf(["#FEFF00","#FE8B00","#FE0000","#FC0001","#F40203","#E60408","#D2070F","#B90B17","#9A1021","#75162E","#4B1C3B","#2B2146"],[0,0.357,0.776,0.835,0.867,0.894,0.918,0.937,0.957,0.973,0.988,1],0,0,0,0,0,1.1).s().p("AAAAJQgRAAgMgDQgNgEAAgCQABgEAMgDQANgCAQAAQASABANADQAMADAAADQAAAEgNADQgKACgOAAIgGgBg");
	this.shape.setTransform(4.275,0.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,8.6,1.9), null);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEF7FF").s().p("AAHAdQgHgJgIgQQgIgOgCgMQgDgMAEgBQADgDAIAKQAHAKAIAPQAIAOADAMQACAMgDACIgCAAQgDAAgHgIg");
	this.shape.setTransform(2.0378,3.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,4.1,7.4), null);


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
	this.shape.graphics.f("#F8E1FF").s().p("AAAAJQgRAAgMgDQgNgEAAgCQABgEAMgDQANgCAQAAQASABANADQAMADAAADQAAAEgNADQgKACgOAAIgGgBg");
	this.shape.setTransform(4.275,1.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0.5,8.6,1.9), null);


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
	this.shape.graphics.f("#B3B3B3").s().p("AkmHxQAcAABXhHQBnhUBah1QEIlSABmGQAeAugbC3QgaCzgvBiQhPC9ikCoQiNCQhUAAQgTAAgQgHg");
	this.shape.setTransform(29.4715,50.412);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,59,100.8), null);


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
	this.shape.graphics.lf(["#000912","#010F1D","#051F3B","#0B3A6C","#125EAE","#197CE6"],[0.012,0.11,0.286,0.518,0.788,1],-39.6,0,39.6,0).s().p("AmLC9QAKhyBkhFQAygiB3gpQC9hHBXgYQCtguA/AnQgzCmkQBrQjbBYjQAAIgpgBg");
	this.shape.setTransform(39.6,18.9655);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,79.2,38), null);


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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiNCIQhWgEgTgvQgKgaAPghQAOgfAkghQCRg2BagXQCIghA+AWQAEAGABAEQADAIABANQgnBdhzBLQgXAMgcAMQheAnhRAAIgMAAg");
	this.shape_1.setTransform(25.1338,13.5831);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,50.3,27.2), null);


(lib.Path_6 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.lf(["#FFFFFF","#000000"],[0,1],-0.1,21.9,1.2,-34.3).s().p("AoCCGQjWg2AAhOQAAhNDWg3QDUg4EugBQEtgBDWA3QDVA2ABBOQAABNjWA3QjVA4ktABIgKAAQknAAjSg2g");
	this.shape.setTransform(72.85,18.775);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,145.7,37.6), null);


(lib.Group_2_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEAnQgIgOgEgVQgEgUACgQQACgRAHgBQAHgCAHAOQAIAOAEAVQAFAUgCARQgDAQgHACIgBAAQgHAAgGgNg");
	this.shape_1.setTransform(2.0474,5.1948);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2_1, new cjs.Rectangle(0.1,0,3.9999999999999996,10.4), null);


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
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgEBhQgRgkgLg1QgLg1ACgoQACgoAOgDQAOgDAQAkQARAjALA2QALA0gCAoQgCAogOADIgCAAQgNAAgPggg");
	this.shape_1.setTransform(4.2422,12.9462);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,8.5,25.9), null);


(lib.Path_1_0 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#251F38").s().p("AgkCeQlvgGiZhGQgEgGgBgMQgBgXAWgcQAsg2CGguQCcg1DfgRIE+AxIA4ATQBAAXAqAYQCFBNiNA9QiPA+lEAAIg6AAg");
	this.shape.setTransform(56.2066,15.7993);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0.1,0,112.30000000000001,31.6), null);


(lib.Path_1_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1.graphics.f("#E0F0FF").s().p("AAnDEQgHgCgDgHQgDgJgBgNIAAgYIgCgwQgCgxgMgxQgJgpgXgyIgrhWQgDgHAGgFQAFgFAGAFQBCAzAkCAQAOAzADA0QACAlgDASIgEAbQgEAPgHAIQgDAEgFAAIgEgBg");
	this.shape_1.setTransform(6.7755,19.7075);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,13.6,39.5), null);


(lib.Path_0_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1.graphics.f("#899AC4").s().p("AhgExQhGicgBiVQABiTBGibQAihNAkgwQAsAAArAeQgUAIgOAJQgyAegUAuQgRAnADA4QADAjAGA5IALBdIAIBeQAIA6AYAhQAaAiAsAYQAtAZAxAGQghBTgyAvQg1Awg5AAQgkgtgihOg");
	this.shape_1.setTransform(16.75,42.825);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0_1, new cjs.Rectangle(0,0,33.5,85.7), null);


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
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E0F0FF").s().p("ApDLyQkahQh2i+IgLABQg2gBgvg3Qgug1gbhaQghhmACh7QABhPAPhIQAPhGAbg0QAehBAoglQAqglAtABQASAAASAHQBlilCphwIABgCIAdgSIAAAAQCNhXCsguQCuguC+AAQDcAADDA8QDCA9CVBxIAXASIABABIASAPIAAAAQBZBNBBBfIAEAAIAJADIACABIAKAEIABAAIALAFQBMAoAwBwQAwBzAACPIAAABQAABugdBgQgdBdgyA7QhhDukpBjQjxBQmkAAQl9AAjnhCg");
	this.shape_2.setTransform(119.6217,82.025);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,239.3,164.1), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
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
	mask.graphics.p("Ah3ExQhGicAAiVQAAiTBGibQAjhNAjgwQBjAABGB9QBGB+AACwQAACyhGB9QhGB9hjAAQgjgtgjhOg");
	mask.setTransform(19,42.825);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#899AC4").s().p("Ah3ExQhGicAAiVQAAiTBGibQAjhNAjgwQBjAABGB9QBGB+AACwQAACyhGB9QhGB9hjAAQgjgtgjhOg");
	this.shape.setTransform(19,42.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,38,85.7), null);


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
	this.shape.graphics.f("#E9AEFF").s().p("AhDAtQgdgygMgwQgFgTAVgPQAdgVBAAAQBCAAAbAVQAUAPgFATQgMAxgcAxQgjBAghAAQgfAAglhAgAgqhAQgMAJACALQAIAdAQAdQAVAmASAAQASAAAVgmQAPgdAHgdQADgLgLgJQgQgMglAAQglAAgQAMg");
	this.shape.setTransform(11.0113,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmAbQgQgdgIgdQgCgMAMgIQAQgNAlAAQAlAAAQANQALAIgDAMQgHAdgPAdQgVAlgSABQgSgBgVglgAgogXQgEACADALQACALAIAPQAIAQAIAJQAIAKAEgCQADgCgCgLQgDgMgIgPQgIgPgIgJQgGgIgEAAIgBAAgAgcg0QgMACgBAEQAAAEANADQAMADARABQASAAAMgCQANgCAAgEQAAgFgMgCQgNgDgSgBIgEAAQgOAAgLACg");
	this.shape_1.setTransform(12.0095,-1.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(0,-10.8,22,21.700000000000003), null);


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

	// smile
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#72E3FD").s().p("AhyAiQgxguAAhFQCjAYCkgYQAABFgvAuQgxAwhEAAQhCAAgwgwg");
	this.shape.setTransform(50.25,21.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#72E3FD").s().p("AhzAkQgxgugJhIQCtAbCugcQgLBJgvAuQgwAwhEAAQhDAAgwgwg");
	this.shape_1.setTransform(50.3,21.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#72E3FD").s().p("AhzAmQgxgvgShKQC2AeC3ggQgUBMgvAvQgxAwhDAAQhDAAgwgwg");
	this.shape_2.setTransform(50.35,22.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#72E3FD").s().p("Ah0AoQgxgvgchNQDBAgDCgiQggBPgvAvQgwAwhEgBQhDABgwgwg");
	this.shape_3.setTransform(50.4,22.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#72E3FD").s().p("Ah0AqQgxgvglhPQDJAiDMgnQgpBUgvAvQgwAwhEgBQhDABgwgwg");
	this.shape_4.setTransform(50.425,23.45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#72E3FD").s().p("AhxApQgwguglhNQDFAhDIgmQgoBSgvAuQgvAvhCAAQhCAAgugvg");
	this.shape_5.setTransform(50.425,23.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#72E3FD").s().p("AhvAoQgugsgkhMQDAAhDDglQgnBPguAtQgtAthBABQhAgBgugtg");
	this.shape_6.setTransform(50.425,23.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#72E3FD").s().p("AhsAnQgtgrgjhLQC7AhC+gkQgmBOgsArQgtAsg/AAQg+AAgtgsg");
	this.shape_7.setTransform(50.425,23.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#72E3FD").s().p("AhqAmQgsgqghhJQC2AgC6gjQgmBMgrAqQgsArg8AAQg+AAgsgrg");
	this.shape_8.setTransform(50.45,23.45);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#72E3FD").s().p("AhmAlQgsgpghhGQCyAeC1giQglBKgqApQgqAqg7AAQg9AAgpgqg");
	this.shape_9.setTransform(50.45,23.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#72E3FD").s().p("AhkAkQgqgogghEQCuAdCvghQgkBIgpAoQgpApg5AAQg6AAgqgpg");
	this.shape_10.setTransform(50.45,23.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#72E3FD").s().p("AhhAjQgpgngghDQCqAeCqghQgiBGgoAnQgoAog4AAQg5AAgogog");
	this.shape_11.setTransform(50.45,23.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#72E3FD").s().p("AhkAkQgrgogghFQCvAeCwgiQgkBJgpAoQgpAqg6AAQg7AAgpgqg");
	this.shape_12.setTransform(50.45,23.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#72E3FD").s().p("AhoAlQgrgqghhGQC0AfC1gjQglBKgqAqQgrArg7AAQg9AAgrgrg");
	this.shape_13.setTransform(50.45,23.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#72E3FD").s().p("AhrAmQgtgrgihJQC6AgC7gjQgmBMgrArQgsAsg+AAQg/AAgsgsg");
	this.shape_14.setTransform(50.45,23.475);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#72E3FD").s().p("AhuAnQgugsgjhLQC+AhDBgkQgmBPgtArQguAuhAgBQg/ABgugug");
	this.shape_15.setTransform(50.425,23.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#72E3FD").s().p("AhxApQgvguglhNQDEAiDHgmQgoBRguAuQgvAuhCAAQhBAAgvgug");
	this.shape_16.setTransform(50.425,23.45);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#72E3FD").s().p("AgMA8QhOgCgzgeQgzgcgCgaQgCgaBWAPQBXARBIgMQBJgNAjgLQAjgLADAaQACAahDAmQg+AlhHAAIgJAAg");
	this.shape_17.setTransform(49.6257,14.7799);
	this.shape_17._off = true;

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#72E3FD").s().p("AgNA8QhPgCg1geQg0gcgCgaQgCgaBYAPQBaARBKgMQBKgNAlgLQAkgLACAaQACAahEAmQhAAlhJAAIgKAAg");
	this.shape_18.setTransform(49.6256,14.7793);
	this.shape_18._off = true;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#72E3FD").s().p("AgNA8QhSgCg2geQg2gcgCgaQgCgaBaAPQBdARBMgMQBMgNAlgLQAlgLADAaQACAahFAmQhCAlhLAAIgKAAg");
	this.shape_19.setTransform(49.6506,14.7793);
	this.shape_19._off = true;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#72E3FD").s().p("AgOA8QhUgCg3geQg3gcgCgaQgCgaBcAPQBfARBOgMQBPgNAmgLQAmgLADAaQACAahIAmQhDAlhOAAIgKAAg");
	this.shape_20.setTransform(49.6506,14.7793);
	this.shape_20._off = true;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#72E3FD").s().p("AgOA8QhWgCg5geQg4gcgCgaQgDgaBfAPQBhARBQgMQBRgNAngLQAngLADAaQACAahJAmQhFAlhPAAIgLAAg");
	this.shape_21.setTransform(49.6509,14.7793);
	this.shape_21._off = true;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#72E3FD").s().p("AgOA8QhYgCg7geQg5gcgDgaQgCgaBhAPQBkARBSgMQBSgNApgLQAogLACAaQADAahMAmQhGAlhSAAIgKAAg");
	this.shape_22.setTransform(49.6509,14.7793);
	this.shape_22._off = true;

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#72E3FD").s().p("AgOA8QhbgCg7geQg8gcgCgaQgCgaBjAPQBmARBUgMQBVgNApgLQApgLADAaQACAahNAmQhJAlhTAAIgKAAg");
	this.shape_23.setTransform(49.6759,14.7793);
	this.shape_23._off = true;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#72E3FD").s().p("AgPA8QhcgCg9geQg9gcgCgaQgDgaBmAPQBpARBWgMQBWgNAqgLQAqgLADAaQADAahPAmQhLAlhVAAIgLAAg");
	this.shape_24.setTransform(49.6758,14.7793);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#72E3FD").s().p("AgPBAQgrgDgjgOQgagLgWgPQgugegGgdIAAgBQAJgTBOANQBYAPBMgLQBGgLApgMQAagDgBAZQgEAeg7AlIgDACQgzAig7ADIgRABIgQgBg");
	this.shape_25.setTransform(49.5269,16.6035);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#72E3FD").s().p("AgSBGQgrgFgjgTQgZgNgVgTQgogegKghIAAgBQASgMBIAKQBYANBPgKQBFgJAugMQAQAEgDAYQgLAjgzAjIgEADQgyAlg9ADIgJAAIgZgBg");
	this.shape_26.setTransform(49.4814,18.3313);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#72E3FD").s().p("AgXBLQgrgHgigYQgYgPgUgVQgjgfgNglIgBgCQAdgFBAAJQBZALBTgJQBDgIA0gMQAGALgHAXQgQAngtAjIgDADQgxAohBACIgJAAQgMAAgOgCg");
	this.shape_27.setTransform(49.5065,20.0125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#72E3FD").s().p("AgeBQQgrgIgigdQgWgSgTgXQgegggSgpIgBgCQAoACA5AGQBaAJBWgIQBAgGA6gMQgDASgKAXQgWAqgmAiIgEAEQgwArhDABIgEAAQgQAAgQgDg");
	this.shape_28.setTransform(49.875,21.7281);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#72E3FD").s().p("Ah0ApQgxgvgehOQDDAhDEgkQgiBRgvAvQgwAvhEAAQhDAAgwgvg");
	this.shape_29.setTransform(50.4,23.025);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#72E3FD").s().p("Ah0AoQgwgwgZhLQC9AfC+giQgbBPgwAvQgwAvhDAAQhEAAgwgvg");
	this.shape_30.setTransform(50.375,22.65);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#72E3FD").s().p("AhzAlQgxgvgMhIQCwAcCxgdQgOBJgvAvQgwAvhEABQhDgBgwgvg");
	this.shape_31.setTransform(50.3,21.85);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#72E3FD").s().p("AhzAkQgwgvgHhHQCqAaCrgaQgHBHgwAvQgwAvhEAAQhDAAgwgvg");
	this.shape_32.setTransform(50.275,21.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},15).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_17}]},2).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},6).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},63).to({state:[]},1).to({state:[{t:this.shape}]},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(15).to({_off:true},1).wait(80).to({_off:false},0).wait(63).to({_off:true},1).wait(1).to({_off:false},0).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(34).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).wait(1).to({_off:true},1).wait(13).to({_off:false},0).wait(1).to({_off:true},1).wait(13).to({_off:false},0).wait(7).to({_off:true},1).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(35).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(123));
	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(36).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(124));
	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(37).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(125));
	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(38).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(39).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(127));
	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(40).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(128));

	// right
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#72E3FD").s().p("AhOBXQghgkABgyQgBgzAhgjQAhglAtABQAvgBAgAlQAhAjgBAzQABAyghAkQggAjgvAAQgtAAghgjg");
	this.shape_33.setTransform(77.8,-12.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#72E3FD").s().p("AhRBXQgigkAAgzQAAgzAigjQAigkAvAAQAxAAAhAkQAiAjAAAzQAAAzgiAkQghAkgxAAQgvAAgigkg");
	this.shape_34.setTransform(79.15,-13.025);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#72E3FD").s().p("AhVBYQgjglAAgzQAAgzAjgkQAkgkAxAAQAyAAAjAkQAkAkAAAzQAAAzgkAlQgjAkgyAAQgxAAgkgkg");
	this.shape_35.setTransform(80.525,-13.475);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#72E3FD").s().p("AhYBZQglglAAg0QAAgzAlgkQAmglAyAAQA0AAAlAlQAlAkAAAzQAAA0glAlQglAkg0AAQgyAAgmgkg");
	this.shape_36.setTransform(81.85,-13.925);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#72E3FD").s().p("AhbBZQgmglAAg0QAAg0AmgkQAmgkA1AAQA2AAAmAkQAmAkAAA0QAAA0gmAlQgmAkg2AAQg1AAgmgkg");
	this.shape_37.setTransform(83.2,-14.375);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#72E3FD").s().p("AhaBbQgngjAAg0QAAg0AmgkQAmgkA1AAQA2AAAmAkQAmAkAAA0QAAA0gmAfQglAfg2ADIgJAAQgwAAgigeg");
	this.shape_38.setTransform(83.2,-14.7587);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#72E3FD").s().p("AhaBcQgnghAAgzQAAg0AmgkQAmglA1AAQA2AAAmAlQAmAkAAA0QAAAzglAaQgkAZg3AHIgSABQgrAAgfgag");
	this.shape_39.setTransform(83.2,-15.1114);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#72E3FD").s().p("AhaBdQgngfAAgzQAAg0AmgkQAmglA1AAQA2AAAmAlQAmAkAAA0QAAAzgkAUQglATg2ALQgNADgOAAQglAAgdgWg");
	this.shape_40.setTransform(83.2,-15.4372);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#72E3FD").s().p("AhaBeQgngdAAgzQAAg0AmgkQAmglA1AAQA2AAAmAlQAmAkAAA0QAAAzgkAPQgjANg4AOQgRAFgRAAQghAAgagSg");
	this.shape_41.setTransform(83.2,-15.7139);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#72E3FD").s().p("AhZBeQgogaAAg0QAAg0AmgkQAmgkA1AAQA2AAAmAkQAmAkAAA0QAAA0gjAIQgjAIg4ASQgVAHgUAAQgdAAgXgPg");
	this.shape_42.setTransform(83.2,-15.9939);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#72E3FD").s().p("AhZBeQgogYAAgzQAAg0AmgkQAmglA1AAQA2AAAmAlQAmAkAAA0QAAAzgiADQgiACg4AVQgaALgXAAQgaAAgUgNg");
	this.shape_43.setTransform(83.2,-16.2489);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#72E3FD").s().p("AhZBeQgogVAAg0QAAg0AmgkQAmgkA1AAQA2AAAmAkQAmAkAAA0QAAA0gigDQghgDg5AYQgdANgZAAQgWAAgTgKg");
	this.shape_44.setTransform(83.2,-16.4981);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#72E3FD").s().p("AhZBeQgogYAAgzQAAg0AmgkQAmglA1AAQA2AAAmAlQAmAkAAA0QAAAzgiAEQgjADg3AVQgZAJgXAAQgaAAgVgNg");
	this.shape_45.setTransform(83.2,-16.2152);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#72E3FD").s().p("AhZBeQgogbAAgzQAAg0AmgkQAmglA1AAQA2AAAmAlQAmAkAAA0QAAAzgjALIhbAaQgUAGgTAAQgeAAgYgQg");
	this.shape_46.setTransform(83.2,-15.9047);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#72E3FD").s().p("AhaBdQgngdAAg0QAAg0AmgkQAmgkA1AAQA2AAAmAkQAmAkAAA0QAAA0gkARQgjAQg4ANQgPADgPAAQgjAAgcgUg");
	this.shape_47.setTransform(83.2,-15.5722);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#72E3FD").s().p("AhaBcQgnggAAgzQAAg0AmgkQAmglA1AAQA2AAAmAlQAmAkAAA0QAAAzglAYQgkAXg3AIQgKACgLAAQgoAAgfgZg");
	this.shape_48.setTransform(83.2,-15.2179);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#72E3FD").s().p("AhaBbQgngjAAgzQAAg0AmgkQAmglA1AAQA2AAAmAlQAmAkAAA0QAAAzglAfQglAdg3AEIgMABQguAAghgeg");
	this.shape_49.setTransform(83.2,-14.8234);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#72E3FD").s().p("AiFAhQAAgaAlgaQAlgbA2gEQA2gEAqAfQArAeAAAaQAAAag6gTQg7gUgyAJQgyAKgZAKQgHACgFAAQgNAAAAgSg");
	this.shape_50.setTransform(81.3,-20.963);
	this.shape_50._off = true;

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#72E3FD").s().p("AiEAjQgBgaAlgbQAkgbA1gGQA1gHAsAeQArAdABAaQABAag7gSQg7gRgxAKQgzALgYALQgIADgFAAQgMAAAAgSg");
	this.shape_51.setTransform(81.3995,-20.7944);
	this.shape_51._off = true;

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#72E3FD").s().p("AiEAlQgBgaAjgbQAjgdA2gIQA0gHAtAcQAsAcABAZQACAag7gQQg8gPgwALQgyANgZAMQgHADgFAAQgMAAgBgSg");
	this.shape_52.setTransform(81.4988,-20.6385);
	this.shape_52._off = true;

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#72E3FD").s().p("AiDAoQgDgaAjgdQAigdA1gKQA0gJAuAbQAtAbACAYQACAag7gOQg8gNgwANQgyAOgYAMQgHAEgGAAQgLAAgBgRg");
	this.shape_53.setTransform(81.5967,-20.4816);
	this.shape_53._off = true;

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#72E3FD").s().p("AiDAqQgDgaAigeQAhgeA1gLQA0gLAuAaQAtAZAEAZQADAZg8gLQg8gNgwAPQgxAQgYANQgIAEgFAAQgLAAgCgRg");
	this.shape_54.setTransform(81.695,-20.3241);
	this.shape_54._off = true;

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#72E3FD").s().p("AiDAsQgEgZAigfQAgggA1gMQAzgNAvAZQAuAXAEAZQAEAag8gKQg9gLgvARQgxARgXANQgIAFgGAAQgKAAgDgRg");
	this.shape_55.setTransform(81.7912,-20.1803);
	this.shape_55._off = true;

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#72E3FD").s().p("AiCAvQgFgaAgggQAgggA0gOQAzgOAwAWQAvAXAFAZQAEAZg8gIQg9gJgvASQgwATgXAOQgIAFgGAAQgKAAgDgQg");
	this.shape_56.setTransform(81.888,-20.0454);
	this.shape_56._off = true;

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#72E3FD").s().p("AiCAyQgFgaAfghQAfghA0gQQAygQAxAWQAwAVAFAZQAGAZg9gHQg+gGguATQgwAUgWAPQgIAGgGAAQgKAAgEgQg");
	this.shape_57.setTransform(81.982,-19.9136);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#72E3FD").s().p("AiFAhQAAgdAmgaQAlgbA2gEQA1gFAqAgQArAeAAAdQAAAcg4gSQg5gSgyAKQg0ALgaAHIgKACQgQAAAAgWg");
	this.shape_58.setTransform(81.225,-20.4239);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#72E3FD").s().p("AiEAgQAAgeAlgbQAlgcA2gEQA1gEAqAgQAqAfAAAeQAAAfg2gRQg2gRgzAMQg0AMgbAFIgHABQgUAAAAgbg");
	this.shape_59.setTransform(81.125,-19.882);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#72E3FD").s().p("AiEAgQAAggAlgcQAmgdA2gEQA1gDApAgQAqAgAAAgQAAAhg0gPQg1gQgzANQg0ANgdACIgEAAQgYAAAAgeg");
	this.shape_60.setTransform(81.05,-19.3081);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#72E3FD").s().p("AhmBCQgeAAAAgjQAAgiAmgdQAmgeA1gDQA1gDAqAhQApAgAAAiQAAAjgygOQgzgOgzAOQgzAOgeAAIgCAAg");
	this.shape_61.setTransform(80.925,-18.7367);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#72E3FD").s().p("AhkBGQgfgDAAgkQAAglAmgeQAlgfA2gCQA1gDApAhQAoAhAAAlQAAAkgvgMQgxgNg0AQQgsANgdAAIgLgBg");
	this.shape_62.setTransform(80.825,-18.1095);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#72E3FD").s().p("AhiBKQghgGAAgnQAAgmAmggQAmgfA1gCQA1gDApAiQAoAiAAAmQAAAngugLQgugMg1ARQgoANgcAAIgRgBg");
	this.shape_63.setTransform(80.75,-17.4413);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#72E3FD").s().p("AhhBOQgigJAAgpQAAgoAmghQAmggA2gCQA1gCAoAjQAoAiAAAoQAAApgsgKQgtgKg0ASQgmANgcAAQgMAAgKgCg");
	this.shape_64.setTransform(80.675,-16.8097);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#72E3FD").s().p("AhgBRQgigLAAgrQAAgrAlghQAmghA2gCQA1gBAoAiQAnAjAAArQAAArgpgJQgrgJg1AUQgkANgbAAQgPAAgMgEg");
	this.shape_65.setTransform(80.575,-16.1444);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#72E3FD").s().p("AheBUQgkgNAAguQAAgtAmghQAmgiA2gCQA0gBAnAjQAoAjAAAtQAAAugogHQgogIg1AVQgiANgbAAQgRAAgOgGg");
	this.shape_66.setTransform(80.5,-15.4991);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#72E3FD").s().p("AhcBYQgmgRAAgvQAAgvAmgjQAngjA1AAQA1gBAnAjQAnAkAAAvQAAAvgmgFQgmgGg3AVQggANgaAAQgTAAgPgGg");
	this.shape_67.setTransform(80.375,-14.831);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#72E3FD").s().p("AhaBbQgngTAAgxQAAgyAmgjQAmgkA1AAQA2AAAmAkQAmAjAAAyQAAAxgjgEQgkgFg4AXQgeANgaAAQgUAAgRgIg");
	this.shape_68.setTransform(80.275,-14.1676);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#72E3FD").s().p("AhZBeQgogVAAg0QAAg0AmgkQAngkA0AAQA2AAAmAkQAmAkAAA0QAAA0gigDQgigEg4AZQgdANgaAAQgWAAgSgKg");
	this.shape_69.setTransform(80.2,-13.4904);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#72E3FD").s().p("AhYBeQgmgXgBg0QAAg0AlgjQAnglAzAAQA1AAAlAlQAlAjAAA0QAAA0ggACQgjABg2AVQgaALgXAAQgYAAgVgMg");
	this.shape_70.setTransform(79.9,-13.4306);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#72E3FD").s().p("AhWBeQgngZAAg0QAAgzAlgkQAmglAyAAQA0AAAlAlQAlAkAAAzQgBA0ghAGQgiAHg1ASQgWAIgVAAQgaAAgWgOg");
	this.shape_71.setTransform(79.6,-13.377);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#72E3FD").s().p("AhVBdQglgbAAgzQAAg0AkgjQAkglAyAAQAzAAAkAlQAkAjAAA0QAAAzghAMQgiALg0APQgSAGgSAAQgdAAgYgRg");
	this.shape_72.setTransform(79.3,-13.289);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#72E3FD").s().p("AhUBcQgkgdAAgzQAAgzAjgkQAkgkAxAAQAyAAAjAkQAkAkAAAzQAAAzghARQgiAQgzAMQgOAEgOAAQghAAgagUg");
	this.shape_73.setTransform(79.025,-13.17);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#72E3FD").s().p("AhSBbQgjgeAAgzQAAgzAigkQAjgkAwAAQAxAAAjAkQAiAkAAAzQABAzgiAVQggAVgzAJQgKACgLAAQgkAAgbgXg");
	this.shape_74.setTransform(78.7,-13.0712);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#72E3FD").s().p("AhQBaQgjggAAgzQAAgzAigkQAigkAvAAQAwAAAjAkQAhAkAAAzQAAAzggAaQgiAagwAGIgOABQgnAAgdgbg");
	this.shape_75.setTransform(78.4,-12.9276);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#72E3FD").s().p("AhQBZQghgjAAgyQAAgzAhgjQAiglAuAAQAvAAAhAlQAiAjAAAzQAAAyghAgQghAegvADIgHABQgqAAgggfg");
	this.shape_76.setTransform(78.1,-12.7877);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33}]}).to({state:[{t:this.shape_33}]},15).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_50}]},2).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_50}]},6).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},54).to({state:[]},1).to({state:[{t:this.shape_33}]},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(15).to({_off:true},1).wait(89).to({_off:false},0).wait(54).to({_off:true},1).wait(1).to({_off:false},0).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.shape_50).wait(34).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).wait(1).to({_off:true},1).wait(13).to({_off:false},0).wait(1).to({_off:true},1).wait(13).to({_off:false},0).wait(7).to({_off:true},1).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.shape_51).wait(35).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(123));
	this.timeline.addTween(cjs.Tween.get(this.shape_52).wait(36).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(124));
	this.timeline.addTween(cjs.Tween.get(this.shape_53).wait(37).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(125));
	this.timeline.addTween(cjs.Tween.get(this.shape_54).wait(38).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.shape_55).wait(39).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(127));
	this.timeline.addTween(cjs.Tween.get(this.shape_56).wait(40).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(128));

	// left
	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#72E3FD").s().p("AhNBXQgigkAAgyQAAgzAigjQAgglAtABQAugBAhAlQAgAjABAzQgBAyggAkQghAjguAAQgtAAgggjg");
	this.shape_77.setTransform(21.6,-12.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#72E3FD").s().p("AhRBXQgigkAAgzQAAgyAigkQAigkAvAAQAwAAAiAkQAiAkAAAyQAAAzgiAkQgiAkgwAAQgvAAgigkg");
	this.shape_78.setTransform(20.275,-13.025);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#72E3FD").s().p("AhUBYQgkglAAgyQAAg0AkgkQAjgkAxAAQAyAAAjAkQAkAkAAA0QAAAygkAlQgjAkgyAAQgxAAgjgkg");
	this.shape_79.setTransform(18.975,-13.475);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#72E3FD").s().p("AhXBZQglglAAgzQAAg0AlgkQAkglAzAAQA0AAAlAlQAkAkAAA0QAAAzgkAlQglAkg0AAQgzAAgkgkg");
	this.shape_80.setTransform(17.625,-13.925);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#72E3FD").s().p("AhbBZQgmglAAgzQAAg0AmglQAmgkA1AAQA2AAAmAkQAmAlAAA0QAAAzgmAlQgmAkg2AAQg1AAgmgkg");
	this.shape_81.setTransform(16.3,-14.375);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#72E3FD").s().p("AABB6Qg1gCgmggQgnghAAgzQAAg0AmglQAmgkA1AAQA2AAAmAkQAmAlAAA0QAAAzgmAkQgjAfgwAAIgIAAg");
	this.shape_82.setTransform(16.3,-14.663);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#72E3FD").s().p("AABB3Qg0gFgngcQgngdAAgzQAAg0AmgkQAmglA1AAQA2AAAmAlQAmAkAAA0QAAAzglAjQghAcgsAAIgPgBg");
	this.shape_83.setTransform(16.3,-14.9107);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#72E3FD").s().p("AACB0Qg1gIgmgYQgogYAAgzQAAg0AmglQAmgkA1AAQA2AAAmAkQAmAlAAA0QAAAzglAhQgeAYgoAAQgKAAgLgBg");
	this.shape_84.setTransform(16.3,-15.1597);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#72E3FD").s().p("AACBwQg0gLgngTQgogUAAgzQAAg0AmglQAmgkA1AAQA2AAAmAkQAmAlAAA0QAAAzglAfQgcAWgkAAQgNAAgOgDg");
	this.shape_85.setTransform(16.3,-15.3792);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#72E3FD").s().p("AADBsQg1gOgngPQgogPAAgzQAAg0AmglQAmgkA1AAQA2AAAmAkQAmAlAAA0QAAAzglAdQgaAUggAAQgPAAgRgFg");
	this.shape_86.setTransform(16.3,-15.5971);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#72E3FD").s().p("AADBpQgzgRgpgLQgogLAAgzQAAg0AmglQAmgkA1AAQA2AAAmAkQAmAlAAA0QAAAzglAcQgXARgeAAQgRAAgUgGg");
	this.shape_87.setTransform(16.3,-15.7906);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#72E3FD").s().p("AADBlQgzgUgogGQgpgHAAgzQAAg0AmglQAmgkA1AAQA2AAAmAkQAmAlAAA0QAAAzglAaQgWAPgaAAQgTAAgXgIg");
	this.shape_88.setTransform(16.3,-15.9824);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#72E3FD").s().p("AADBqIhcgcQgogMAAgzQAAg0AmglQAmgkA1AAQA2AAAmAkQAmAlAAA0QAAAzglAcQgYARgeAAQgRAAgTgFg");
	this.shape_89.setTransform(16.3,-15.7557);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#72E3FD").s().p("AADBuQg1gNgngRQgogRAAgzQAAg0AmgkQAmglA1AAQA2AAAmAlQAmAkAAA0QAAAzglAeQgbAVghAAQgOAAgQgEg");
	this.shape_90.setTransform(16.3,-15.5262);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#72E3FD").s().p("AACByQg0gKgngVQgogWAAgzQAAg0AmglQAmgkA1AAQA2AAAmAkQAmAlAAA0QAAAzglAgQgdAXgmAAQgMAAgMgCg");
	this.shape_91.setTransform(16.3,-15.2636);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#72E3FD").s().p("AABB2Qg0gHgngaQgngbAAgzQAAg0AmglQAmgkA1AAQA2AAAmAkQAmAlAAA0QAAAzglAiQggAbgrAAIgRgBg");
	this.shape_92.setTransform(16.3,-14.9958);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#72E3FD").s().p("AABB6Qg0gDgngfQgnghAAgzQAAg0AmgkQAmglA1AAQA2AAAmAlQAmAkAAA0QAAAzgmAkQgiAfgwAAIgJAAg");
	this.shape_93.setTransform(16.3,-14.7089);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#72E3FD").s().p("AiFAgQAAgaApgbQAogcA3gBQA4gBAlAdQAmAcAAAaQAAAag6gTQg7gTgyAJQgzAJgYAKQgHADgFAAQgNAAAAgTg");
	this.shape_94.setTransform(19.3,-20.9376);
	this.shape_94._off = true;

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#72E3FD").s().p("ABMAqQg7gVgxAHQg0AIgZAKQgYAJAAgaQABgaAqgaQApgbA2AAQA4ABAlAeQAkAdAAAaQgBAPgSAAQgOAAgZgJg");
	this.shape_95.setTransform(19.2248,-20.9736);
	this.shape_95._off = true;

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#72E3FD").s().p("ABLAqQg5gXgyAHQgzAGgaAJQgZAJACgaQABgZAqgaQAqgaA3ACQA3ACAkAfQAkAegCAaQAAAOgRAAQgOAAgbgKg");
	this.shape_96.setTransform(19.1238,-20.8102);
	this.shape_96._off = true;

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#72E3FD").s().p("ABLAqQg5gYgyAFQgzAFgaAIQgZAIACgaQACgZArgYQArgZA2AEQA3ADAjAgQAjAfgCAaQgBAOgQAAQgOAAgbgMg");
	this.shape_97.setTransform(19.048,-20.6705);
	this.shape_97._off = true;

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#72E3FD").s().p("ABKArQg4gagyAEQgzADgaAIQgZAHACgaQADgZAsgXQArgYA2AGQA3AFAiAhQAiAggDAZQgBANgPAAQgOAAgcgMg");
	this.shape_98.setTransform(18.9508,-20.5208);
	this.shape_98._off = true;

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#72E3FD").s().p("ABKArQg4gbgxACQg0ACgaAHQgZAGADgaQADgYAtgWQAsgXA1AHQA4AHAhAiQAhAhgEAZQgBANgOAAQgPAAgcgOg");
	this.shape_99.setTransform(18.8757,-20.3953);
	this.shape_99._off = true;

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#72E3FD").s().p("ABKAsQg3gdgyABQg0ABgaAGQgaAGAEgaQAFgZAsgVQAtgVA2AJQA3AIAgAiQAgAigEAaQgCAMgNAAQgPAAgcgPg");
	this.shape_100.setTransform(18.7752,-20.2579);
	this.shape_100._off = true;

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#72E3FD").s().p("ABJAsQg2gegyAAQg0gBgbAFQgZAFAEgZQAFgZAugUQAtgUA2AKQA3AKAfAjQAfAjgFAaQgCAMgMAAQgPAAgdgRg");
	this.shape_101.setTransform(18.7005,-20.1434);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#72E3FD").s().p("AiFAhQAAgdApgbQApgeA2AAQA3gBAmAeQAmAcAAAdQAAAcg4gQQg6gPgxAGQg0AHgaAJQgGACgEAAQgQAAAAgVg");
	this.shape_102.setTransform(19.3,-20.4276);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#72E3FD").s().p("AiFAhQABgeApgcQAogeA1gBQA3gBAnAfQAlAdABAeQgBAfg2gMQg3gMgyAFQgzAEgcAHIgKABQgSAAAAgYg");
	this.shape_103.setTransform(19.3,-19.9514);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#72E3FD").s().p("AiEAhQAAggApgeQAogeA1gBQA3gBAnAgQAlAeAAAgQAAAhg0gIQg2gIgyACQg0ACgdAGIgIABQgUAAAAgcg");
	this.shape_104.setTransform(19.3,-19.4298);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#72E3FD").s().p("ABRBAQgzgEgygBQg0AAgeAFQgdAEgBgiQABgiAogfQAngfA2gBQA3gBAmAgQAmAgAAAiQAAAegqAAIgKAAg");
	this.shape_105.setTransform(19.3,-18.9091);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#72E3FD").s().p("AgRBBQgzgCggADQgfADgBglQABgkAogfQAnggA1gBQA4AAAlAgQAnAgAAAkQgBAlgxAAQgygBgygDg");
	this.shape_106.setTransform(19.3,-18.2754);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#72E3FD").s().p("AgOBHQg0gFggABQghACAAgnQAAgmAoggQAnghA1AAQA4gBAlAhQAmAhAAAmQAAAngwAEIgkABQgfAAgfgDg");
	this.shape_107.setTransform(19.3,-17.5441);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#72E3FD").s().p("AgLBMQg0gHgiAAQgiAAAAgoQAAgpAoghQAnghA1gBQA3AAAmAhQAmAiAAApQgBAogtAIQgWADgYAAQgZAAgagEg");
	this.shape_108.setTransform(19.3,-16.8064);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#72E3FD").s().p("AgIBRQg0gKgjgBQgkgBAAgrQAAgrAogiQAngiA1AAQA3AAAlAiQAnAiAAArQAAArgsALQgYAGgZAAQgXAAgYgFg");
	this.shape_109.setTransform(19.3,-16.0373);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#72E3FD").s().p("AgFBWQg0gMglgDQgkgCAAgtQAAgtAngjQAngiA1gBQA2AAAmAjQAmAjAAAtQAAAtgqAPQgXAIgaAAQgWAAgXgGg");
	this.shape_110.setTransform(19.3,-15.2856);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#72E3FD").s().p("AgBBbQg1gPgmgDQgmgFAAguQAAgwAngjQAngjA1AAQA2gBAmAkQAmAjgBAwQAAAugoATQgXAKgZAAQgVAAgWgGg");
	this.shape_111.setTransform(19.3,-14.5145);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#72E3FD").s().p("AABBgQg0gRgngFQgogGAAgxQAAgxAogkQAlgkA1AAQA2AAAmAkQAmAkAAAxQAAAxgnAXQgWAMgaAAQgUAAgWgHg");
	this.shape_112.setTransform(19.3,-13.7545);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#72E3FD").s().p("AADBlQgzgUgpgGQgogHAAgzQAAg0AnglQAlgkA1AAQA2AAAmAkQAmAlAAA0QAAAzglAaQgVAPgbAAQgTAAgXgIg");
	this.shape_113.setTransform(19.3,-12.9821);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#72E3FD").s().p("AADBoQgygRgogKQgogLAAgzQAAg0AmgkQAmgkAzAAQA1AAAmAkQAlAkAAA0QAAAzglAcQgWAQgcAAQgSAAgUgGg");
	this.shape_114.setTransform(19.575,-12.9597);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#72E3FD").s().p("AADBrQgygOgngOQgmgOAAgzQAAg0AlgkQAkglAzAAQA0AAAlAlQAkAkAAA0QAAAzgjAcQgYATgfAAQgPAAgRgFg");
	this.shape_115.setTransform(19.875,-12.9555);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#72E3FD").s().p("AADBuQgygMglgSQgmgSAAgyQAAg0AlgkQAjgkAyAAQAzAAAkAkQAkAkAAA0QAAAygjAeQgZAVggAAQgOAAgOgDg");
	this.shape_116.setTransform(20.15,-12.9162);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#72E3FD").s().p("AACBxQgxgKgkgVQglgWAAgyQAAg0AkgkQAjgkAxAAQAyAAAjAkQAkAkAAA0QAAAygjAgQgbAXgjAAQgLAAgLgCg");
	this.shape_117.setTransform(20.475,-12.8622);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#72E3FD").s().p("AABBzQgvgHgjgZQglgZABgzQgBgzAkgjQAiglAwAAQAxAAAjAlQAiAjAAAzQAAAzgiAhQgcAaglAAIgSgCg");
	this.shape_118.setTransform(20.75,-12.8288);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#72E3FD").s().p("AABB2QgvgFgigcQgjgdAAgzQAAgyAigkQAigkAvAAQAwAAAiAkQAiAkAAAyQAAAzghAiQgeAcgoAAIgMAAg");
	this.shape_119.setTransform(21.025,-12.7671);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#72E3FD").s().p("AAAB4QgtgCgiggQgighAAgyQAAgzAigjQAhglAuAAQAvAAAiAlQAhAjAAAzQAAAyghAjQgfAhgrAAIgHgBg");
	this.shape_120.setTransform(21.325,-12.6916);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_77}]}).to({state:[{t:this.shape_77}]},15).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_94}]},2).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_94}]},6).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_77}]},54).to({state:[]},1).to({state:[{t:this.shape_77}]},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.shape_77).wait(15).to({_off:true},1).wait(89).to({_off:false},0).wait(54).to({_off:true},1).wait(1).to({_off:false},0).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.shape_94).wait(34).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).wait(1).to({_off:true},1).wait(13).to({_off:false},0).wait(1).to({_off:true},1).wait(13).to({_off:false},0).wait(7).to({_off:true},1).wait(115));
	this.timeline.addTween(cjs.Tween.get(this.shape_95).wait(35).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(2).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(123));
	this.timeline.addTween(cjs.Tween.get(this.shape_96).wait(36).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(4).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(124));
	this.timeline.addTween(cjs.Tween.get(this.shape_97).wait(37).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(125));
	this.timeline.addTween(cjs.Tween.get(this.shape_98).wait(38).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(5).to({_off:false},0).to({_off:true},1).wait(126));
	this.timeline.addTween(cjs.Tween.get(this.shape_99).wait(39).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(10).to({_off:false},0).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},1).wait(127));
	this.timeline.addTween(cjs.Tween.get(this.shape_100).wait(40).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},1).wait(128));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.3,-26.9,92.9,59.3);


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
	this.shape.graphics.rf(["#44DCFA","#46D0F5","#49BBEC","#4BAEE7","#4CAAE5","rgba(255,255,255,0)"],[0,0.078,0.259,0.439,0.604,1],2.3,0,0,0,0,52.7).s().p("AlxFzQiaiaAAjZQAAjYCaiaQCZiZDYAAQDZAACaCZQCZCaAADYQAADZiZCaQiaCZjZAAQjYAAiZiZg");
	this.shape.setTransform(52.4,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,-52.4,104.8,104.8), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#AFC0EB","#CAD6F1","rgba(239,245,249,0)"],[0,0.42,1],0,0,0,0,0,54.5).s().p("Al9F+QieieAAjgQAAjfCeieQCeieDfAAQDgAACeCeQCeCeAADfQAADgieCeQieCejgAAQjfAAieieg");
	this.shape.setTransform(54,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,-54,108,108), null);


(lib.Symbol1_1 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1.graphics.lf(["rgba(255,255,255,0.129)","rgba(255,255,255,0.149)","rgba(255,255,255,0.529)"],[0,0.447,1],1.5,9.5,-4.4,-8.2).s().p("AifCSIgCgEQAVhKAKgKQA/iTBcgpQBDgfBFAcQAOB9iIBYQgzAhg8ATQguAPgfAAIgKgBg");
	this.shape_1.setTransform(16.2153,0.0024);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1_1, new cjs.Rectangle(0,-14.7,32.5,29.4), null);


(lib.Group_5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Path();
	this.instance.setTransform(4.2,1,1,1,0,0,0,4.2,1);
	this.instance.alpha = 0.6797;
	this.instance.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0,8.6,1.9), null);


(lib.Group_4 = function(mode,startPosition,loop,reversed) {
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
	this.instance.setTransform(2,3.7,1,1,0,0,0,2,3.7);
	this.instance.alpha = 0.6797;
	this.instance.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,4.1,7.4), null);


(lib.Group_1_1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Group_1();
	this.instance.setTransform(4.2,12.9,1,1,0,0,0,4.2,12.9);
	this.instance.alpha = 0.7383;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_1, new cjs.Rectangle(0,0,8.5,25.9), null);


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
	this.instance = new lib.Group_2_1();
	this.instance.setTransform(2,5.2,1,1,0,0,0,2,5.2);
	this.instance.alpha = 0.7383;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0.1,0,3.9999999999999996,10.4), null);


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
	this.instance = new lib.Path_3();
	this.instance.setTransform(53.4,-18.9,1,1,0,0,0,25.1,13.6);
	this.instance.alpha = 0.1719;
	this.instance.compositeOperation = "screen";

	this.instance_1 = new lib.Path_1();
	this.instance_1.setTransform(39.75,-13.6,1,1,0,0,0,39.6,18.9);
	this.instance_1.alpha = 0.8008;
	this.instance_1.compositeOperation = "screen";

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D3DCED","#667AB0"],[0,1],-6.8,-27.2,13.5,32.6).s().p("AjeDvQgxg1gVhSQgXhaAPhOQAPhQAsgQQDXhSBigWQDAgsAjBMQAmBUiXCmQiJCYizBrQgKAEgKAAQgiAAgmgqg");
	this.shape.setTransform(52.274,-4.3955);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#25539E","#003093"],[0,0.51],-12.4,-16.3,13.4,21.5).s().p("AhTEDQhdgegRisQgPiTBqhVQA2grCEguIA5CfQA4CygBBkQiTBchZAAQgXAAgUgGg");
	this.shape_1.setTransform(19.6133,6.0011);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-32.5,83,65);


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
	this.instance = new lib.Symbol1_1();
	this.instance.setTransform(40.15,-34.55,1,1,0,0,0,16.2,0);
	this.instance.alpha = 0.6797;

	this.instance_1 = new lib.Group();
	this.instance_1.setTransform(31.25,1.15,1,1,0,0,0,29.4,50.4);
	this.instance_1.alpha = 0.3086;
	this.instance_1.compositeOperation = "multiply";

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#80A2DB","#7699D5","#5B81C6","#2F5AAE","#003093"],[0.173,0.267,0.431,0.639,0.835],-10.4,-5.8,24.3,-1.8).s().p("AgcC8QiphNgigbQBoj9COhGQBngyBiAwQAeAugaC3QgbCygvBjIiuhNg");
	this.shape.setTransform(37.5715,-25.0321);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D3DCED","#D2DCED","#667AB0"],[0.114,0.122,0.945],-20.4,-9.9,15.7,19.1).s().p("AjxFPQgvgUBGk6QAbh2AfhoQAfhnANgPQAsgRCqBeQA7AhA3AkQAxAgAAAEQhOC7imCpQiMCPhUAAQgTAAgPgHg");
	this.shape_1.setTransform(26.097,17.3253);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-51.5,60.8,103.1);


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

	// Layer_5
	this.instance = new lib.Symbol9();
	this.instance.setTransform(93.15,43.65,1,1,0,0,0,11,0);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({alpha:1},8).to({alpha:0},7).to({alpha:1},7).to({alpha:0},7).to({alpha:1},7).to({alpha:0},7).wait(78));

	// Layer_4
	this.instance_1 = new lib.Group_2();
	this.instance_1.setTransform(94.2,38.35,0.8256,1,0,0,0,4.2,1);
	this.instance_1.compositeOperation = "screen";

	this.instance_2 = new lib.Group_3();
	this.instance_2.setTransform(91.8,43.65,0.7619,0.7619,0,0,0,1.9,3.7);
	this.instance_2.compositeOperation = "screen";

	this.instance_3 = new lib.Group_4();
	this.instance_3.setTransform(91.85,43.65,1,1,0,0,0,2,3.7);
	this.instance_3.compositeOperation = "screen";

	this.instance_4 = new lib.Group_5();
	this.instance_4.setTransform(94.2,37.9,1,1,0,0,0,4.2,1);
	this.instance_4.compositeOperation = "screen";

	this.instance_5 = new lib.Path_2();
	this.instance_5.setTransform(94.15,42.45,1,1,0,0,0,6.3,6.5);
	this.instance_5.alpha = 0.2695;
	this.instance_5.compositeOperation = "screen";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A9A9FF").s().p("AghAXQgPgZgGgaQgDgKALgIQAPgKAgAAQAhAAAOAKQAKAIgDAKQgGAagOAZQgSAigQAAQgPAAgTgig");
	this.shape.setTransform(94.1769,42.425);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#326AC6").s().p("AhDAtQgdgygMgwQgFgTAVgPQAdgVBAAAQBCAAAbAVQAUAPgFATQgMAxgcAxQgjBAghAAQgfAAglhAg");
	this.shape_1.setTransform(93.1613,43.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#D5BEDB","#9AA0C1","#6B89AD","#4E7AA1","#43759C"],[0,0.333,0.635,0.867,1],-7.1,1.3,8.3,-9.1).s().p("AhMAzQghg4gOg3QgGgWAZgRQAggYBKAAQBKAAAfAYQAXARgGAWQgOA4gfA3QgpBJgkAAQgkAAgqhJg");
	this.shape_2.setTransform(93.1777,43.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(160));

	// Layer_1
	this.instance_6 = new lib.Symbol2();
	this.instance_6.setTransform(77.8,-61.25,1.2195,0.3319,0,0,0,52.5,0);

	this.instance_7 = new lib.Path_1_0();
	this.instance_7.setTransform(56.35,-58.1,1,1,0,0,0,56.2,15.8);
	this.instance_7.alpha = 0.2891;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE4E65").s().p("AgYAFQgBgZAVgDQAYgFAFAZQgDAWgWAFIgGABQgQAAgCgUg");
	this.shape_3.setTransform(110.1227,-18.8981);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EE4E65").s().p("AgTAWQgHgFABgNQABgJAHgHQAHgIAKgCQAMgDAIAFQAIAGgCAKQgEAWgWAGIgIAAQgHAAgEgCg");
	this.shape_4.setTransform(135.5924,-22.6583);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EE4E65").s().p("AgUBTQgEgEABgKIAKiCQABgRAQgEQAKgCAFACQAGACgBALIgFBFIgFA8QgCATgSAEIgIABQgEAAgCgBg");
	this.shape_5.setTransform(134.5731,-9.8626);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EE4E65").s().p("AgTBRQgEgFABgMIACh8QAAgMAFgGQAFgGALgBQANgBAFAEQAFAEAAAMIgCBCIgCA5QABAOgGAHQgGAGgMACIgFAAQgIAAgDgFg");
	this.shape_6.setTransform(109.899,-5.745);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1370B6").s().p("AgbBZQgFgEgEgcIgUiXQA2AJAoAFQARABACAUQACATgQgCIgagDQgQgCgKAFIAQCJQgcgBgGgFg");
	this.shape_7.setTransform(40.8358,-6.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#1370B6").s().p("AgeBMQgUgQgKgdQgMggAFgdQAFgdAWgRQATgPAZAAQAbAAAUAPQAOAKgGAKQgHAOgLgDIgEgDQgogIgPASQgQARAMApQAHAXAPAJQAOAJAUgIQAEgCAHgGQAGgEAFACQAEACAFAHQAGAHgDAHIgJAJQgIAHgOAFQgOAFgKAAQgYAAgTgQg");
	this.shape_8.setTransform(72.9015,-3.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1370B6").s().p("AAHBfQgggDgYgcQgXgdgFgpQgFgsATgYQAUgXAlAEQAkAEAXAaQAXAaADApQADArgUAZQgSAXgdAAIgIAAgAghgqQgJAPAEAcQAEAbAMAPQAMAQASAAQASABAIgPQAJgPgDgbQgFg4gngDIgEAAQgRAAgIAOg");
	this.shape_9.setTransform(56.0935,-4.4583);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EE4E65").s().p("AhKBqIAHjMQABgSARgDQALgBAEACQAHADgBALIgFB3QAMgHAkgsQAbghAhAEIgTAcQgLAPgIAKQgOAPgBALQgCANALANIATAXQAKAPADAOQgQALgNgBQgLgCgKgMIgQgaQgKgRgOgHQgIANgBASIAAAdQgCATgUADIgEAAQgMAAAAgOg");
	this.shape_10.setTransform(123.0743,-10.3367);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EE4E65").s().p("AhBBZQgHgEgDgLIgyiUQAcgHAGADQAGADAJAXIAXBLQANgIADgSQAEgaADgFQADgGADgKIADgRQAHgSASAAQAPACAFAPIAUBAIADAIQACAEAHAAQAJgMAFgWIAJglQAFgSALgGQALgHAUAEQgTA+gdBkQgCAHgHADIgNADQgUADgHgWIgbhdQgXBMgGAXQgEATgRABIgEABQgIAAgFgEg");
	this.shape_11.setTransform(92.9,-4.4377);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D9E1EF").s().p("AgYAFQgBgYAVgDQAYgEAFAYQgDAVgWAEIgGABQgQAAgCgTg");
	this.shape_12.setTransform(109.4227,-18.3352);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D9E1EF").s().p("AgTATQgHgEABgLQABgUAYgFQAMgCAIAFQAIAFgCAJQgEAUgWAFIgIABQgHAAgEgDg");
	this.shape_13.setTransform(134.8933,-21.597);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D9E1EF").s().p("AgXBAIAKh4QABgQAQgDQALgCAEABQAGACgBAKIgKB2QgCARgSAFIgIABQgLAAACgNg");
	this.shape_14.setTransform(133.8728,-9.8178);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D9E1EF").s().p("AgTBOQgEgEABgMIACh4QAAgLAFgGQAFgGALgBQAMgBAGAEQAFAEAAAMIgCA/IgCA3QABANgGAHQgGAFgMACIgGABQgHAAgDgFg");
	this.shape_15.setTransform(109.199,-5.6861);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D9E1EF").s().p("AgbBgQgGgEgDgdIgUijIBeAOQARACACAUQADAUgRgCIgagDQgPgCgLAGIAQCSQgcAAgGgFg");
	this.shape_16.setTransform(40.141,-6.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D9E1EF").s().p("AgeBOQgUgQgKgeQgMghAFgeQAGgeAVgRQATgPAZAAQAbAAAUAPQAHAFACADQADAGgEAHQgHANgLgCIgEgDQgogJgPASQgQATAMApQAHAYAPAJQAOAIAUgIQAEgCAHgHQAGgDAFACQADACAGAGQAGAIgDAGIgJAKQgIAHgOAGQgOAFgKABIgCAAQgXAAgSgQg");
	this.shape_17.setTransform(72.2015,-3.3992);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D9E1EF").s().p("AAHBjQgggCgYgeQgXgcgFgsQgFgvATgZQAUgZAlAEQAkAFAXAbQAXAbADArQADArgUAbQgTAZgeAAIgGAAgAghgtQgJAQAEAeQAEAdAMAQQAMAPASAAQASABAIgQQAJgPgDgdQgFg5gngEIgEAAQgRAAgIAOg");
	this.shape_18.setTransform(55.3935,-4.0987);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D9E1EF").s().p("AhKBlIAHjCQABgRARgCQALgCAEADQAHADgBAKIgFBxQALgHAlgqQAbgeAhADQgZAjgNAOQgOAOgBALQgCAMALAMQAbAbAFAVQgQALgMgBQgMgBgKgMIgQgYQgKgPgOgHQgIANgBARIAAAbQgBAKgGAFQgFAEgKACIgEAAQgMAAAAgNg");
	this.shape_19.setTransform(122.3743,-10.1108);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D9E1EF").s().p("AhBBZQgHgEgEgLIgxiVQAcgHAHADQAGADAHAYIAYBLQANgJADgSQAEgaADgEQADgGADgKIADgRQAHgTASACQAQABAEAQIAUA+IADAIQADAEAGAAQAJgLAGgWIAIgkQAFgSALgGQALgHAUAEIgwCeQgCAIgHACIgNADQgUAEgHgWIgbhcQgXBOgFAVQgGATgQABIgFAAQgHAAgFgCg");
	this.shape_20.setTransform(92.2,-4.2151);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_7},{t:this.instance_6}]}).wait(160));

	// Layer_3
	this.instance_8 = new lib.Group_0();
	this.instance_8.setTransform(31.2,34.2,1,1,0,0,0,2,5.2);
	this.instance_8.alpha = 0.3086;

	this.instance_9 = new lib.Group_1_1();
	this.instance_9.setTransform(26.65,11.75,1,1,0,0,0,4.2,12.9);
	this.instance_9.alpha = 0.3086;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#251F38").s().p("AlXBnQiPgqAAg8QAAg7COgqQCPgrDJgBQDJAACPAqQCPAqAAA8QAAA7iPArQiOAqjKABIgIAAQjDAAiMgqg");
	this.shape_21.setTransform(78.9999,-56.0241);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#D3DCED","#667AB0"],[0,1],-39.1,0.1,51.1,-0.1).s().p("AmeB8QisgyAAhJQgBhHCtg0QCsgzDygBQDyAACsAyQCtAzAABIQAABHisA0QisA0jzAAIgIABQjtAAipgzg");
	this.shape_22.setTransform(78.9999,-57.0493);

	this.instance_10 = new lib.Path_6();
	this.instance_10.setTransform(77.45,-52.6,1,1,0,0,0,72.9,18.8);
	this.instance_10.alpha = 0.2305;
	this.instance_10.compositeOperation = "screen";

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#D3DCED","#667AB0"],[0,1],65.6,-28.9,-64,16).s().p("AmwIvQjHjWgvlKIhdofQgHhYC5hDQC4hDEcgPID5gBIBEAEIAhADQCgAOCDAiQA3APAtATIA/AcIAPAJQAtAbATAeIADAFQAKARABATIhbIoQgvFLjGDXQjBDSjxAAIgCABQjwgBjAjPg");
	this.shape_23.setTransform(77.2623,2.0002);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.instance_10},{t:this.shape_22},{t:this.shape_21},{t:this.instance_9},{t:this.instance_8}]}).wait(160));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-78.6,154.5,157.3);


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

	// Layer_2
	this.instance = new lib.Symbol8("synched",0);
	this.instance.setTransform(141,17.8,1,1,0,0,0,49.8,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(160));

	// Layer_1
	this.instance_1 = new lib.Path_1_1();
	this.instance_1.setTransform(33.15,-11.2,1,1,0,0,0,6.8,19.7);
	this.instance_1.alpha = 0.5117;

	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#EAE7FF","#E4E2FB","#D3D4F1","#B7BDE0","#909CC9","#667AB0"],[0.176,0.282,0.424,0.588,0.765,0.922],-10.9,-57.1,0,-0.9,0,58).s().p("AgDF1QhHgBgwhuQgxhuACiaQACiaAzhtQAzhsBFABQBHABAwBuQAxBugCCaQgCCagzBtQgyBrhFAAIgBAAg");
	this.shape.setTransform(17.025,6.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D3DCED","#CFD9EB","#C4CFE5","#B2BEDA","#98A7CC","#7789B9","#667AB0"],[0,0.161,0.31,0.451,0.588,0.725,0.78],-7.8,-5.1,27,17.5).s().p("AgEGiQhWgCg8h7Qg7h8ACirQACiuA+h5QA/h6BVACQBWABA8B8QA7B8gCCrQgCCug/B5Qg9B4hUAAIgCAAg");
	this.shape_1.setTransform(21.0518,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(255,255,255,0.2)","rgba(39,33,131,0.2)"],[0,1],0,10.8,0,-21.3).s().p("AmKBTQi1hbhaikQBVAqD+AqQFLA4EVgaQB3gLB7ggQBugcAggWQheCZixBXQitBUjYAAQjeABiyhbg");
	this.shape_2.setTransform(133.95,51.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#ABB8D7").s().p("ABWBoQhIgUg9gqQg9gpghgyQgcgtAKgQQAHgKAuAnQBLBAAjAXQAkAYBRAqQAwAZgHAKQgFAGgQAAQgTAAgkgJg");
	this.shape_3.setTransform(54.1474,61.1899);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#454095","#9491C2"],[0,1],3,7.4,-2.9,-7.1).s().p("AhYBhQg2gDgNgeQgMgfAkgnQAlgoBBgbQA/gaA3ADQA3ADAMAeQANAfglAnQglAohBAbQg5AYgyAAIgLgBg");
	this.shape_4.setTransform(82.7984,-23.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#4D41AD","#272183"],[0,1],76.7,-19.2,0,17.7,-42,63.3).s().p("AoRFkQjai4AAktQAAkWDahOQBaggCUgIQBKgEDZAAQDaAABJAEQCUAIBbAgQDaBOAAEWQAAEtjaC4QjSCulAAAQk/AAjSiug");
	this.shape_5.setTransform(134.55,15.375);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#717FB5").s().p("AgwDWQgQgEAHgPQAxhyAShdQAXhugQhcIAqAhQALCdhgDjQgFAMgLAAIgGgBg");
	this.shape_6.setTransform(197.0146,-37.0329);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#717FB5").s().p("AB5DeQghj4jxi7IAegUQDzDBAiD9QADAQgRAFIgGAAQgLAAgCgMg");
	this.shape_7.setTransform(67.5414,-40.6518);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#6B79B1","#D1DDE8"],[0,1],0,-47.7,0,50.1).s().p("AoqF2QjnjDAAk8QAAidA+hdQA3hUBygoQBdgiCcgIQBOgFDjAAQDkAABOAFQCbAIBfAiQBwAoA4BUQA+BdAACdQAAE8jmDDQjdC5lPAAQlPAAjbi5g");
	this.shape_8.setTransform(135.15,15.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D1D9EC").s().p("Ao0F8QjrjHABlCQAAifA/hfQA4hVBzgpQBggiCegJQBPgEDnAAQDoAABPAEQCeAJBgAiQBzApA4BVQA/BfAACfQABFCjrDHQjfC9lWAAQlVAAjfi9g");
	this.shape_9.setTransform(135.15,15.375);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#A0AED1","#A1AFD1"],[0,1],15.4,32.8,-44.6,-22.4).s().p("AjjD9QlEikAAmTQAPg6AJgIQAKgIAPAdQAKATAeBEQAiBHAnA7QEYGvKVBeQoMAAj/iCg");
	this.shape_10.setTransform(67.7,43.7397);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#7589B9","#D2DBF3"],[0,1],0,98.8,0,-56.9).s().p("AsMKyQlDikAAmUQAAjUBXi0QBSirCah+QCWh6DJhBQDKhBDjAAQDkAADKBBQDJBBCWB6QCaB+BSCrQBXC0AADUQAAGUlDCkQkACCoNAAQoMAAkAiCg");
	this.shape_11.setTransform(122.925,0.025);

	this.instance_2 = new lib.ClipGroup();
	this.instance_2.setTransform(220.25,4.45,1,1,0,0,0,19,42.8);

	this.instance_3 = new lib.Path_0_1();
	this.instance_3.setTransform(218.05,4.4,1,1,0,0,0,16.8,42.8);
	this.instance_3.alpha = 0.1992;
	this.instance_3.compositeOperation = "multiply";

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#899AC4").s().p("Ah3ExQhGicAAiVQAAiTBGibQAWgwAagsIAWghQBiAABGB9QBHB+AACwQAACyhHB9QhGB9hiAAQgjgtgjhOg");
	this.shape_12.setTransform(220.25,4.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#899AC4").s().p("Ah3ExQhGicAAiVQAAiTBGibQAWgwAagsIAWghQBiAABGB9QBHB+AACwQAACyhHB9QhGB9hiAAQgjgtgjhOg");
	this.shape_13.setTransform(220.25,4.425);

	this.instance_4 = new lib.Path_4();
	this.instance_4.setTransform(119.6,0,1,1,0,0,0,119.6,82);
	this.instance_4.alpha = 0.5117;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.shape_13},{t:this.shape_12},{t:this.instance_3},{t:this.instance_2},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]}).wait(160));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-82,239.3,164.1);


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

	// l_hand
	this.instance = new lib.Symbol5("synched",0);
	this.instance.setTransform(60.2,7.5,1,1,0,0,0,57.4,-45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({startPosition:0},0).to({rotation:5.4567,x:60.3,y:12.5},18,cjs.Ease.cubicOut).wait(1).to({regX:30.4,regY:0,rotation:5.4251,x:29.05,y:54.65},0).wait(1).to({rotation:5.3534,x:28.9,y:54.55},0).wait(1).to({rotation:5.2235,x:28.6,y:54.25},0).wait(1).to({rotation:5.0032,x:28.1,y:53.85},0).wait(1).to({rotation:4.6345,x:27.25,y:53.15},0).wait(1).to({rotation:4.0753,x:25.95,y:52.1},0).wait(1).to({rotation:3.5239,x:24.75,y:51},0).wait(1).to({regX:57.4,regY:-45,rotation:3.1709,x:53.4,y:6.9},0).wait(1).to({regX:30.4,regY:0,rotation:2.9622,x:23.5,y:49.9},0).wait(1).to({rotation:2.8463,x:23.25,y:49.65},0).wait(1).to({rotation:2.7896,x:23.1,y:49.55},0).wait(1).to({regX:57.4,regY:-45,rotation:2.7734,x:52.2,y:5.9},0).wait(1).to({startPosition:0},0).to({regX:57.5,regY:-44.9,rotation:-13.2451,x:52.3,y:10.9},9).to({regY:-45,rotation:-16.4517,x:52.2,y:5.8},8).wait(1).to({startPosition:0},0).to({regY:-44.9,rotation:-13.2451,x:52.3,y:10.9},9).to({regY:-45,rotation:-16.4517,x:52.2,y:5.8},8).wait(1).to({startPosition:0},0).to({regY:-44.9,rotation:-13.2451,x:52.3,y:10.9},9).to({regX:57.4,regY:-45,rotation:0,x:60.2,y:7.5},19,cjs.Ease.cubicOut).wait(24).to({startPosition:0},0).to({rotation:4.4659,y:11.35},14,cjs.Ease.quadInOut).to({rotation:0,y:7.5},13,cjs.Ease.quadInOut).wait(4).to({startPosition:0},0).to({_off:true},1).wait(1).to({_off:false},0).wait(70));

	// head
	this.instance_1 = new lib.Symbol3("synched",0);
	this.instance_1.setTransform(141.6,-35.35,1,1,0,0,0,141.6,63);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({startPosition:9},0).to({y:-25.35,startPosition:27},18,cjs.Ease.cubicOut).wait(1).to({regX:119.6,regY:0,rotation:-0.2602,x:119.2,y:-88.65,startPosition:28},0).wait(1).to({rotation:-0.8505,x:118.2,y:-89.3,startPosition:29},0).wait(1).to({rotation:-1.9196,x:116.35,y:-90.55,startPosition:30},0).wait(1).to({rotation:-3.7339,x:113.25,y:-92.65,startPosition:31},0).wait(1).to({rotation:-6.7702,x:108.1,y:-95.95,startPosition:32},0).wait(1).to({rotation:-11.3743,x:100.55,y:-100.7,startPosition:33},0).wait(1).to({rotation:-15.9154,x:93.25,y:-104.95,startPosition:34},0).wait(1).to({regX:141.6,regY:62.9,scaleX:0.9999,scaleY:0.9999,rotation:-18.8218,x:129.85,y:-55,startPosition:35},0).wait(1).to({regX:119.6,regY:0,rotation:-18.0504,x:88.3,y:-108.15,startPosition:36},0).wait(1).to({scaleX:1,scaleY:1,rotation:-17.6221,x:88.1,y:-108.55,startPosition:37},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-17.4123,x:87.95,y:-108.75,startPosition:38},0).wait(1).to({regX:141.6,regY:63,rotation:-17.3525,x:127.7,y:-55.35,startPosition:39},0).wait(1).to({startPosition:40},0).to({rotation:-22.5833,x:127.75,startPosition:49},9).to({rotation:-17.3525,x:127.7,startPosition:57},8).wait(1).to({startPosition:58},0).to({rotation:-22.5833,x:127.75,startPosition:67},9).to({rotation:-17.3525,x:127.7,startPosition:75},8).wait(1).to({startPosition:76},0).to({rotation:-22.5833,x:127.75,startPosition:85},9).to({scaleX:1,scaleY:1,rotation:0,x:141.6,y:-35.35,startPosition:104},19,cjs.Ease.cubicOut).wait(24).to({startPosition:128},0).to({y:-31.45,startPosition:142},14,cjs.Ease.quadInOut).to({y:-35.35,startPosition:155},13,cjs.Ease.quadInOut).wait(4).to({startPosition:159},0).to({_off:true},1).wait(1).to({_off:false,startPosition:1},0).wait(70));

	// bod
	this.instance_2 = new lib.Symbol4("synched",0);
	this.instance_2.setTransform(123.85,39.5,1,1,0,0,0,77.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({startPosition:9},0).to({regY:0.1,rotation:4.7379,x:117.9,y:49.6,startPosition:27},18,cjs.Ease.cubicOut).wait(1).to({regX:77.3,regY:0,rotation:4.5967,x:118.05,y:49.25,startPosition:28},0).wait(1).to({rotation:4.2763,x:118.2,y:48.7,startPosition:29},0).wait(1).to({rotation:3.6961,x:118.5,y:47.75,startPosition:30},0).wait(1).to({rotation:2.7114,x:118.95,y:46.1,startPosition:31},0).wait(1).to({rotation:1.0636,x:119.8,y:43.35,startPosition:32},0).wait(1).to({rotation:-1.4352,x:121.05,y:39.2,startPosition:33},0).wait(1).to({rotation:-3.8997,x:122.25,y:35.1,startPosition:34},0).wait(1).to({regX:77.4,regY:0.1,rotation:-5.477,x:123.1,y:32.55,startPosition:35},0).wait(1).to({regX:77.3,regY:0,rotation:-6.4109,x:123.4,y:30.85,startPosition:36},0).wait(1).to({rotation:-6.9294,x:123.65,y:30,startPosition:37},0).wait(1).to({rotation:-7.1834,x:123.8,y:29.6,startPosition:38},0).wait(1).to({regY:0.1,rotation:-7.2558,x:123.9,y:29.55,startPosition:39},0).wait(1).to({startPosition:40},0).to({regX:77.4,regY:0.2,rotation:-12.748,x:124,y:29.65,startPosition:49},9).to({regX:77.3,regY:0.1,rotation:-7.2558,x:123.9,y:29.55,startPosition:57},8).wait(1).to({startPosition:58},0).to({regX:77.4,regY:0.2,rotation:-12.748,x:124,y:29.65,startPosition:67},9).to({regX:77.3,regY:0.1,rotation:-7.2558,x:123.9,y:29.55,startPosition:75},8).wait(1).to({startPosition:76},0).to({regX:77.4,regY:0.2,rotation:-12.748,x:124,y:29.65,startPosition:85},9).to({regX:77.2,regY:0,rotation:0,x:123.85,y:39.5,startPosition:104},19,cjs.Ease.cubicOut).wait(24).to({startPosition:128},0).to({y:43.4,startPosition:142},14,cjs.Ease.quadInOut).to({y:39.5,startPosition:155},13,cjs.Ease.quadInOut).wait(4).to({startPosition:159},0).to({_off:true},1).wait(1).to({_off:false,startPosition:1},0).wait(70));

	// r_hand
	this.instance_3 = new lib.Symbol6("synched",0);
	this.instance_3.setTransform(210.25,-2.1,1,1,86.689,0,0,2.5,-8.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({startPosition:0},0).to({y:7.9},18,cjs.Ease.cubicOut).wait(1).to({regX:41.5,regY:0,rotation:84.9719,x:205.15,y:46.75},0).wait(1).to({rotation:81.0753,x:206.95,y:45.5},0).wait(1).to({rotation:74.0193,x:210.2,y:42.75},0).wait(1).to({rotation:62.0441,x:215.6,y:36.75},0).wait(1).to({rotation:42.0041,x:223.35,y:23},0).wait(1).to({rotation:11.6157,x:229.25,y:-4.85},0).wait(1).to({rotation:-18.3567,x:225.25,y:-36.6},0).wait(1).to({regX:2.6,regY:-8.1,scaleX:0.9999,scaleY:0.9999,rotation:-37.5391,x:181.15,y:-39.3},0).wait(1).to({regX:41.5,regY:0,rotation:-18.2845,x:220.65,y:-43.75},0).wait(1).to({scaleX:1,scaleY:1,rotation:-7.5924,x:220.8,y:-36.35},0).wait(1).to({rotation:-2.3565,x:220.35,y:-32.7},0).wait(1).to({regX:2.5,regY:-8.1,scaleX:0.9999,scaleY:0.9999,rotation:-0.863,x:181.2,y:-39.25},0).wait(1).to({startPosition:0},0).to({rotation:-38.0195,x:181.05},9).to({rotation:-0.863,x:181.2},8).wait(1).to({rotation:-0.863},0).to({rotation:-50.9651,x:181.05,y:-39.2},9).to({rotation:-0.863,x:181.2,y:-39.25},8).wait(1).to({rotation:-0.863},0).to({regX:2.6,rotation:-58.7477,x:181.15},9).to({regX:2.5,scaleX:1,scaleY:1,rotation:86.689,x:210.25,y:-2.1},19,cjs.Ease.cubicOut).wait(24).to({startPosition:0},0).to({regX:2.6,rotation:81.7445,y:1.8},14,cjs.Ease.quadInOut).to({regX:2.5,rotation:86.689,y:-2.1},13,cjs.Ease.quadInOut).wait(4).to({startPosition:0},0).to({_off:true},1).wait(1).to({_off:false},0).wait(70));

	// shadow
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(126.2,162,1.2991,0.3414,0,0,0,54.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(9).to({scaleX:1.7068,x:126.15},18).wait(1).to({regX:54,regY:0,scaleX:1.702,x:125.95,y:161.95},0).wait(1).to({scaleX:1.6911,x:125.9},0).wait(1).to({scaleX:1.6713,x:125.95},0).wait(1).to({scaleX:1.6379},0).wait(1).to({scaleX:1.5818},0).wait(1).to({scaleX:1.4969,x:126},0).wait(1).to({scaleX:1.4131,x:125.95},0).wait(1).to({regX:54.1,regY:0.3,scaleX:1.3594,x:126.15,y:162.05},0).wait(1).to({regX:54,regY:0,scaleX:1.3277,x:125.95,y:161.9},0).wait(1).to({scaleX:1.3101},0).wait(1).to({scaleX:1.3015,x:126},0).wait(1).to({regX:54.1,regY:0.1,scaleX:1.2991,x:126.2,y:162},0).wait(1).to({scaleX:1.5584,x:126.15},9).to({scaleX:1.2991,x:126.2},8).wait(1).to({scaleX:1.5584,x:126.15},9).to({scaleX:1.2991,x:126.2},8).wait(1).to({scaleX:1.5584,x:126.15},9).to({scaleX:1.2991,x:126.2},19,cjs.Ease.cubicOut).wait(24).to({scaleX:1.5572,x:126.15},14,cjs.Ease.quadInOut).to({scaleX:1.2991,x:126.2},13,cjs.Ease.quadInOut).wait(4).to({_off:true},1).wait(1).to({_off:false},0).wait(70));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.1,-194.8,308.1,375.3);


// stage content:
(lib.an1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.instance = new lib.Symbol7("synched",0);
	this.instance.setTransform(324.5,247.2,0.5349,0.5349,0,0,0,134.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(160));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(556.5,383,-155.2,-39.30000000000001);
// library properties:
lib.properties = {
	id: '7AE89A27F6FA984191ECE4B81F13DA2C',
	width: 640,
	height: 480,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['7AE89A27F6FA984191ECE4B81F13DA2C'] = {
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