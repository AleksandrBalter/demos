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


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FBCAE3").s().p("Ag7EMQgmgSACgsQAKg1ACgbIACgpQAlhbAngKQA0gPBHCgIAAAAIgCgcIAAgCIgBgQIAMBLQAIAygIAYQgRAvhDAHIgVABQgsAAglgTgAByAmIAAgDIAAAFgAhlgfIABABIADAGIgEgHgAhugtIABABIABABIgCgCgAhxgxIACACIAAABIgCgDgAh4g4IAAAAIACACIgCgCgAijhRIABAAQANAFAKAGIACABQAHAEAGAGQgPgNgYgJgACdkEIAHgaIgDAKIgGAXIACgHg");
	this.shape.setTransform(2.6375,9.0531);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF6DC0").s().p("AAVCYQgnALgkBbIgBACQACg3gLglIgHgUIgCgFIgBgCIAAAAIgBgCIgGgJIgBgCIgBAAIgBgCIAAAAIAAAAIgCgCIgFgFIAAAAIgCgDIAAAAIgBAAIgDgDQgGgFgIgFIgCgBQgJgFgOgFIAAAAIgCgBIgJgDIgBAAIgNgDQhshaBDhRQBDhRBTglQBSgmBogmQBogmgLBCQgCAGAAAGIgBAFIghB6IgIAbIgBAHIgGATQgUBNgHAzIgICNIgBADIABABIAAADIABApIABAQIAAACIACAbIAAABQhHiig1APg");
	this.shape_1.setTransform(-0.0453,-7.8761);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-37.7,45.6,75.5);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhWIBVZMAAAiqxMCsRAAAMAAACqxg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol40, new cjs.Rectangle(-551.3,-546.4,1102.6999999999998,1092.9), null);


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
	this.shape.graphics.f("#000000").s().p("AgwCkIAAhiIBhAAIAABigAgwhBIAAhhIBhAAIAABhg");
	this.shape.setTransform(359.975,5.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah1COQgggbAAgvIAAgBQAAgzAkgaQAjgaA8AAQAnAAAoANIAAgFQAAg8hFAAQgsAAguASIgXhHQA9gaBBAAQBKAAAkAkQAjAkAABFIAAC8IhZAAIAAgjQgmApg8AAQgwAAgggagAgrAeQgRAMAAAVIAAACQAAASAOALQAOAKAXAAQAgAAAUgQQATgPAAgaIAAgQQgbgNggAAQgdAAgRAMg");
	this.shape_1.setTransform(332.125,5.725);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AirDXIAAmnIBdAAIAAAvQAng1A+AAQA9AAAsAtQAsAuAABOIAAABQAABNgsAtQgsAug9AAQg8AAgpgxIAACMgAg4huQgXAZAAAoIAAABQAAAnAXAZQAWAZAiAAQAgAAAYgZQAXgYAAgoIAAgBQAAgogXgZQgYgaggAAQgiAAgWAag");
	this.shape_2.setTransform(295.025,10.175);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgtCkIAAj0IhqAAIAAhSIEwAAIAABSIhrAAIAAD0g");
	this.shape_3.setTransform(256.25,5.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA9CkIAAh7Ih4AAIAAB7IhdAAIAAlGIBdAAIAAB4IB4AAIAAh4IBcAAIAAFGg");
	this.shape_4.setTransform(219.275,5.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhvB7QgxgwABhKIAAgBQgBhGAvgyQAtgxBGAAQBNAAApAzQAoAzAABKIgBAZIjjAAQAIAfAUAQQAVARAfAAQAqAAAlgiIA1AvQgyA9hTAAQhKAAgwgvgAgshMQgTASgFAhICKAAQgEgggSgTQgSgTgcAAQgcAAgSATg");
	this.shape_5.setTransform(181,5.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ABbDLIAAhOIkJAAIAAlGIBdAAIAADyIB4AAIAAjyIBdAAIAADyIArAAIAACig");
	this.shape_6.setTransform(143.475,9.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhdAsIAAhYIC7AAIAABYg");
	this.shape_7.setTransform(109.4,3.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgtDfIAAm9IBbAAIAAG9g");
	this.shape_8.setTransform(87.775,-0.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgtDfIAAm9IBbAAIAAG9g");
	this.shape_9.setTransform(69.375,-0.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ah1COQgggbAAgvIAAgBQAAgzAkgaQAjgaA8AAQAnAAAoANIAAgFQAAg8hFAAQgsAAguASIgXhHQA9gaBBAAQBKAAAkAkQAjAkAABFIAAC8IhZAAIAAgjQgmApg8AAQgwAAgggagAgrAeQgRAMAAAVIAAACQAAASAOALQAOAKAXAAQAgAAAUgQQATgPAAgaIAAgQQgbgNggAAQgdAAgRAMg");
	this.shape_10.setTransform(41.325,5.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhmB5QgxgyAAhGIAAgBQAAhGAxgyQAxgxBIAAQBRAAAyA3Ig5A9QgRgTgRgIQgRgJgXAAQghAAgXAZQgWAaAAAmIAAAAQgBAnAXAZQAYAaAkAAQAmAAAkgiIA3A2QgbAegeAPQgfAPguAAQhHAAgxgxg");
	this.shape_11.setTransform(7,5.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AirDXIAAmnIBdAAIAAAvQAng1A+AAQA9AAAsAtQAsAuAABOIAAABQAABNgsAtQgsAug9AAQg8AAgpgxIAACMgAg4huQgXAZAAAoIAAABQAAAnAXAZQAWAZAiAAQAgAAAYgZQAXgYAAgoIAAgBQAAgogXgZQgYgaggAAQgiAAgWAag");
	this.shape_12.setTransform(-48.925,10.175);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ah9B5QgzgwAAhIIAAgBQAAhGAzgyQAzgxBKAAQBMAAAyAxQAzAwAABIIAAAAQAABHgzAyQgzAxhLAAQhLAAgygxgAg9hAQgYAaAAAmIAAAAQAAAlAYAbQAZAaAkAAQAnAAAYgaQAXgZgBgmIAAgBQABgkgYgbQgYgagmAAQgmAAgXAZg");
	this.shape_13.setTransform(-90.5,5.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgtCkIAAj0IhrAAIAAhSIEwAAIAABSIhqAAIAAD0g");
	this.shape_14.setTransform(-128.2,5.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("Ah1COQgggbAAgvIAAgBQAAgzAkgaQAjgaA8AAQAnAAAoANIAAgFQAAg8hFAAQgsAAguASIgXhHQA9gaBBAAQBKAAAkAkQAjAkAABFIAAC8IhZAAIAAgjQgmApg8AAQgwAAgggagAgrAeQgRAMAAAVIAAACQAAASAOALQAOAKAXAAQAgAAAUgQQATgPAAgaIAAgQQgbgNggAAQgdAAgRAMg");
	this.shape_15.setTransform(-164.475,5.725);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AirDXIAAmnIBdAAIAAAvQAng1A+AAQA9AAAsAtQAsAuAABOIAAABQAABNgsAtQgsAug9AAQg8AAgpgxIAACMgAg4huQgXAZAAAoIAAABQAAAnAXAZQAWAZAiAAQAgAAAYgZQAXgYAAgoIAAgBQAAgogXgZQgYgaggAAQgiAAgWAag");
	this.shape_16.setTransform(-201.575,10.175);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhvB7QgxgwAAhKIAAgBQABhGAtgyQAugxBFAAQBOAAAoAzQApAzABBKIgCAZIjjAAQAHAfAVAQQAVARAfAAQAqAAAlgiIA1AvQgxA9hVAAQhJAAgwgvgAgshMQgTASgGAhICLAAQgEgggSgTQgSgTgdAAQgcAAgRATg");
	this.shape_17.setTransform(-241.7,5.675);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AA9CkIAAjzIh4AAIAADzIhdAAIAAlGIExAAIAAFGg");
	this.shape_18.setTransform(-279.825,5.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AihCdQhBhAAAhcIAAgBQAAhbBBhAQBBhBBgAAQBiAABBBAQBAA/AABcIAAABQAABchBBBQhBBAhhAAQhhAAhAhAgAhcheQgkAmAAA3IAAABQAAA4AlAoQAkAnA3gBQA5AAAkgmQAkgnAAg4IAAgBQAAg3glgnQgkgng4AAQg4AAgkAng");
	this.shape_19.setTransform(-325.225,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol39, new cjs.Rectangle(-353.1,-38.6,724.3,77.2), null);


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
	this.shape.graphics.f("#000000").s().p("AAxB6IhQhjIgdAAIAABjIg4AAIAAjyIA4AAIAABgIAcAAIBMhgIBFAAIhmB2IBpB8g");
	this.shape.setTransform(169.7,4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA5B6IAAifIh2CfIgyAAIAAjyIA3AAIAACaIBziaIA1AAIAADyg");
	this.shape_1.setTransform(139.925,4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgaDNIAAhJQhEgCgngiQgnghAAg1IAAAAQAAgzAngjQAngiBEgCIAAhcIA2AAIAABcQBEADAmAhQAnAiAAAzIAAABQAAA0gnAiQgmAihEACIAABJgAAbBVQAsgBAXgUQAYgVAAghIAAAAQAAgggYgUQgYgVgrgBgAhdgrQgXAUAAAgIAAABQAAAhAXAUQAYAVAsABIAAiVQgtABgXAUg");
	this.shape_2.setTransform(105.85,3.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhUBpQgZgTAAgkIAAgBQAAgmAbgSQAcgVAtAAQAhABAgAJIAAgFQAAg1g7AAQgiAAgkAPIgPgsQAugTAtAAQA2AAAbAbQAaAaAAAxIAACPIg2AAIAAgfQgeAkgwgBQglABgZgVgAgnARQgPALgBAUIAAAAQAAARAOAKQANAKAVAAQAbAAATgPQASgOAAgXIAAgRQgZgJgeAAQgbAAgOAKg");
	this.shape_3.setTransform(72.35,4.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ah9ChIAAk8IA4AAIAAApQAhguAxAAQAuAAAhAiQAiAiAAA6IAAABQAAA5giAiQghAiguAAQgxAAghgqIAABvgAgxhaQgVAWAAAiIAAABQAAAhAVAWQAUAWAdAAQAdAAAUgVQAUgWAAgiIAAgBQAAgigUgWQgUgVgdAAQgdAAgUAVg");
	this.shape_4.setTransform(44.675,7.825);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhaB6IAAjyIC1AAIAAAyIh9AAIAADAg");
	this.shape_5.setTransform(18.1,4.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AA5CqIAAifIh2CfIgyAAIAAjyIA3AAIAACaIBziaIA1AAIAADygAg2h4QgWgRgDggIAnAAQAJAcAfAAQAfAAAJgcIAnAAQgDAggVARQgWASghAAQghAAgVgSg");
	this.shape_6.setTransform(-22.925,-0.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AA5B6IAAifIh2CfIgyAAIAAjyIA3AAIAACaIBziaIA1AAIAADyg");
	this.shape_7.setTransform(-52.275,4.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAxB6IhQhjIgcAAIAABjIg4AAIAAjyIA4AAIAABgIAbAAIBNhgIBEAAIhmB2IBqB8g");
	this.shape_8.setTransform(-79.1,4.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhXCMQgngnAAhMIAAgBQAAhSAggsQAfgsBDgLIBXgPIAJAzIhXAOQgoAHgVATQgUAUgFAlQAggkA3ABQA0AAAeAeQAfAeAAAyQAAA0gkAjQgkAjg3AAQg2AAghghgAgyABQgUAUAAAgIAAAAQAAAgATAUQAUAUAfAAQAfAAAUgUQAUgWAAggIAAAAQAAgfgSgUQgTgRgfgBQghABgUASg");
	this.shape_9.setTransform(-109.075,-0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AA5B6IAAifIh2CfIgyAAIAAjyIA3AAIAACaIBziaIA1AAIAADyg");
	this.shape_10.setTransform(-138.925,4.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhwChIAAlBIDhAAIAAAzIipAAIAAEOg");
	this.shape_11.setTransform(-166.6,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol38, new cjs.Rectangle(-184,-29.6,368.1,59.2), null);


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
	this.shape.graphics.f("#000000").s().p("AhUBpQgZgTAAgkIAAgBQAAgmAbgSQAcgVAtAAQAhABAgAJIAAgFQAAg1g7AAQgiAAgkAPIgPgsQAugTAtAAQA3AAAaAbQAaAaAAAxIAACPIg3AAIAAgfQgdAkgwgBQglABgZgVgAgnARQgPALgBAUIAAAAQAAARAOAKQANAKAVAAQAbAAATgPQASgOAAgXIAAgRQgZgJgeAAQgaAAgPAKg");
	this.shape.setTransform(209.05,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgbB6IAAjBIhWAAIAAgxIDjAAIAAAxIhWAAIAADBg");
	this.shape_1.setTransform(183.25,4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhUBpQgZgTAAgkIAAgBQAAgmAbgSQAbgVAuAAQAhABAgAJIAAgFQAAg1g8AAQggAAglAPIgPgsQAvgTAsAAQA2AAAbAbQAaAaAAAxIAACPIg2AAIAAgfQgeAkgwgBQglABgZgVgAgoARQgPALAAAUIAAAAQAAARAOAKQANAKAVAAQAbAAATgPQASgOAAgXIAAgRQgZgJgeAAQgbAAgPAKg");
	this.shape_2.setTransform(156.15,4.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABHB7IhHiwIhHCwIg8AAIBqj0IA0AAIBoD0g");
	this.shape_3.setTransform(129,4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA4B6IAAjAIhvAAIAADAIg4AAIAAjyIDfAAIAADyg");
	this.shape_4.setTransform(100.025,4.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhcBaQgkgkgBg1IAAgBQAAg0AmglQAlglA3AAQA3AAAlAlQAlAlAAA0IAAAAQAAA0glAmQgmAlg3AAQg3AAglglgAg0g3QgVAXAAAgIAAAAQAAAhAWAWQAUAXAgAAQAgAAAVgWQAUgXAAggIAAgBQAAgfgWgXQgUgXggAAQghAAgTAWg");
	this.shape_5.setTransform(70.3,4.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AA5B6IAAhTIguAAIg6BTIhAAAIBBhZQgagIgQgTQgOgSAAgbIAAgBQAAgnAagVQAagVAvABIBzAAIAADygAgjhDQgMAKAAASIAAAAQgBARAMAKQAMALAXAAIA6AAIAAhLIg6AAQgWAAgMAJg");
	this.shape_6.setTransform(26.7,4.3994);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhUBpQgZgTAAgkIAAgBQAAgmAbgSQAcgVAtAAQAhABAgAJIAAgFQAAg1g7AAQgiAAgkAPIgPgsQAugTAtAAQA2AAAbAbQAaAaAAAxIAACPIg2AAIAAgfQgeAkgwgBQglABgZgVgAgnARQgPALgBAUIAAAAQAAARAOAKQANAKAVAAQAbAAATgPQASgOAAgXIAAgRQgZgJgeAAQgbAAgOAKg");
	this.shape_7.setTransform(-0.55,4.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AA4B6IAAhhIhvAAIAABhIg4AAIAAjyIA4AAIAABfIBvAAIAAhfIA4AAIAADyg");
	this.shape_8.setTransform(-28.05,4.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AA5CqIAAifIh2CfIgyAAIAAjyIA3AAIAACaIBziaIA1AAIAADygAg2h4QgWgRgDggIAnAAQAJAcAfAAQAfAAAJgcIAnAAQgDAggVARQgWASghAAQghAAgVgSg");
	this.shape_9.setTransform(-57.375,-0.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhbBaQgmgkABg1IAAgBQAAg0AlglQAlglA2AAQA4AAAkAlQAmAlAAA0IAAAAQAAA0gmAmQglAlg3AAQg3AAgkglgAg1g3QgTAXgBAgIAAAAQABAhAUAWQAWAXAeAAQAiAAATgWQAVgXAAggIAAgBQAAgfgWgXQgVgXgfAAQggAAgVAWg");
	this.shape_10.setTransform(-87.15,4.425);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgbB6IAAjBIhWAAIAAgxIDjAAIAAAxIhWAAIAADBg");
	this.shape_11.setTransform(-115.2,4.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhMBaQgjgkgBg1IAAgBQABgzAjglQAlgmA1AAQA5AAAoAqIgjAlQgcgegjAAQgdAAgTAXQgVAWABAgIAAAAQgBAhAVAWQAUAXAfAAQAhAAAegeIAhAhQgTAWgXAMQgXAMgiAAQg0AAglglg");
	this.shape_12.setTransform(-141,4.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhbBaQgmgkABg1IAAgBQAAg0AlglQAlglA2AAQA4AAAkAlQAmAlAAA0IAAAAQAAA0gmAmQglAlg3AAQg3AAgkglgAg1g3QgTAXgBAgIAAAAQABAhAUAWQAWAXAeAAQAiAAATgWQAVgXAAggIAAgBQAAgfgWgXQgVgXgfAAQggAAgVAWg");
	this.shape_13.setTransform(-169.5,4.425);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AB9DEIAAhDIj6AAIAABDIg1AAIAAh2IAgAAIB1kRIA7AAIB1ERIAgAAIAAB2gAhYBQICvAAIhXjTg");
	this.shape_14.setTransform(-203.975,3.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(-225.4,-29.6,450.8,59.2), null);


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
	this.shape.graphics.f("#000000").s().p("AgbB6IAAjBIhWAAIAAgxIDjAAIAAAxIhXAAIAADBg");
	this.shape.setTransform(186.45,4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AhMBaQgkgkAAg1IAAgBQAAgzAkglQAlgmA1AAQA6AAAoAqIgkAlQgcgegjAAQgcAAgVAXQgTAWgBAgIAAAAQABAhATAWQAVAXAfAAQAhAAAegeIAhAhQgTAWgYAMQgWAMgiAAQg1AAgkglg");
	this.shape_1.setTransform(160.65,4.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhbBaQgmgkAAg1IAAgBQAAg0AmglQAlglA3AAQA3AAAkAlQAmAlgBA0IAAAAQABA0gmAmQglAlg3AAQg3AAgkglgAg0g3QgVAXABAgIAAAAQgBAhAWAWQAVAXAfAAQAgAAAVgWQAUgXAAggIAAgBQAAgfgVgXQgWgXgfAAQghAAgTAWg");
	this.shape_2.setTransform(132.15,4.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah9ChIAAk8IA4AAIAAApQAhguAxAAQAuAAAhAiQAiAiAAA6IAAABQAAA5giAiQghAiguAAQgxAAghgqIAABvgAgxhaQgVAWAAAiIAAABQAAAhAVAWQAUAWAdAAQAdAAAUgVQAUgWAAgiIAAgBQAAgigUgWQgUgVgdAAQgdAAgUAVg");
	this.shape_3.setTransform(102.225,7.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AA5CqIAAifIh2CfIgyAAIAAjyIA3AAIAACaIBziaIA1AAIAADygAg2h4QgWgRgDggIAnAAQAJAcAfAAQAfAAAJgcIAnAAQgDAggVARQgWASghAAQghAAgVgSg");
	this.shape_4.setTransform(57.725,-0.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABgB6IAAjyIA3AAIAADygAiWB6IAAjyIA3AAIAABKIA4AAQAtAAAZAXQAbAWgBAlIAAABQABAngbAXQgbAXguAAgAhfBMIA0AAQAtgBAAglIAAgBQAAgRgKgLQgMgKgXAAIg0AAg");
	this.shape_5.setTransform(24.4,4.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AA4B6IAAhhIhvAAIAABhIg4AAIAAjyIA4AAIAABfIBvAAIAAhfIA4AAIAADyg");
	this.shape_6.setTransform(-8.85,4.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ah9ChIAAk8IA4AAIAAApQAhguAxAAQAuAAAhAiQAiAiAAA6IAAABQAAA5giAiQghAiguAAQgxAAghgqIAABvgAgxhaQgVAWAAAiIAAABQAAAhAVAWQAUAWAdAAQAdAAAUgVQAUgWAAgiIAAgBQAAgigUgWQgUgVgdAAQgdAAgUAVg");
	this.shape_7.setTransform(-38.325,7.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhRBcQgkgkAAg3IAAgBQAAg0AjglQAgglAzAAQA3AAAfAmQAfAlgBA3IAAAQIiyAAQAFAdATAQQATAQAaAAQAjAAAfgdIAgAdQgmAug9AAQg0AAgkgjgAgog/QgSASgDAdIB7AAQgCgcgRgSQgPgSgbAAQgZAAgQARg");
	this.shape_8.setTransform(-68.25,4.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhoB6IAAjyIA4AAIAABKIA4AAQAtAAAaAXQAZAWAAAlIAAABQAAAngaAXQgaAXgxAAgAgxBMIAzAAQAvgBAAglIAAgBQAAgRgMgLQgMgKgWAAIg0AAg");
	this.shape_9.setTransform(-94.2,4.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ah9ChIAAk8IA4AAIAAApQAhguAxAAQAuAAAhAiQAiAiAAA6IAAABQAAA5giAiQghAiguAAQgxAAghgqIAABvgAgxhaQgVAWAAAiIAAABQAAAhAVAWQAUAWAdAAQAdAAAUgVQAUgWAAgiIAAgBQAAgigUgWQgUgVgdAAQgdAAgUAVg");
	this.shape_10.setTransform(-122.925,7.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhUBpQgZgTAAgkIAAgBQAAgmAbgSQAcgVAtAAQAhABAgAJIAAgFQAAg1g7AAQgiAAgkAPIgPgsQAugTAtAAQA2AAAbAbQAaAaAAAxIAACPIg2AAIAAgfQgeAkgwgBQglABgZgVgAgnARQgPALgBAUIAAAAQAAARAOAKQANAKAVAAQAbAAATgPQASgOAAgXIAAgRQgZgJgeAAQgbAAgOAKg");
	this.shape_11.setTransform(-153.1,4.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ABJChIh9iKIglAAIABCKIg5AAIAAlBIA5AAIgBCGIAkAAIB4iGIBHAAIiSCcICaClg");
	this.shape_12.setTransform(-180.925,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol36, new cjs.Rectangle(-201.6,-29.6,403.2,59.2), null);


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
	this.shape.graphics.f("#000000").s().p("AA5B6IAAifIh2CfIgyAAIAAjyIA3AAIAACaIBziaIA1AAIAADyg");
	this.shape.setTransform(245.225,4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA5B6IAAifIh2CfIgyAAIAAjyIA3AAIAACaIBziaIA1AAIAADyg");
	this.shape_1.setTransform(215.875,4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhLBaQglgkABg1IAAgBQgBgzAlglQAkgmA1AAQA6AAAoAqIgkAlQgdgeghAAQgdAAgVAXQgTAWgBAgIAAAAQABAhATAWQAVAXAfAAQAhAAAegeIAiAhQgUAWgXAMQgXAMgiAAQg1AAgjglg");
	this.shape_2.setTransform(188.35,4.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhMBaQgkgkAAg1IAAgBQAAgzAkglQAlgmA1AAQA5AAApAqIgkAlQgdgegiAAQgdAAgTAXQgVAWAAAgIAAAAQAAAhAVAWQAUAXAfAAQAhAAAegeIAhAhQgTAWgYAMQgWAMgiAAQg0AAglglg");
	this.shape_3.setTransform(162.1,4.425);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhRBcQgjgkgBg3IAAgBQAAg0AiglQAiglAyAAQA4AAAeAmQAfAlgBA3IAAAQIiyAAQAFAdATAQQATAQAaAAQAjAAAfgdIAgAdQgmAug9AAQg0AAgkgjgAgog/QgSASgDAdIB7AAQgCgcgRgSQgPgSgbAAQgZAAgQARg");
	this.shape_4.setTransform(134.8,4.425);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgbDNIAAhJQhDgCgngiQgnghAAg1IAAAAQAAgzAngjQAngiBDgCIAAhcIA2AAIAABcQBFADAmAhQAnAigBAzIAAABQABA0gnAiQgnAihEACIAABJgAAbBVQAsgBAYgUQAXgVAAghIAAAAQAAgggYgUQgYgVgrgBgAhdgrQgXAUAAAgIAAABQAAAhAYAUQAYAVAqABIAAiVQgsABgXAUg");
	this.shape_5.setTransform(101.5,3.425);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhcBaQglgkAAg1IAAgBQAAg0AmglQAlglA3AAQA3AAAlAlQAlAlAAA0IAAAAQAAA0glAmQgmAlg3AAQg3AAglglgAg0g3QgVAXAAAgIAAAAQAAAhAWAWQAUAXAgAAQAhAAATgWQAVgXAAggIAAgBQAAgfgWgXQgUgXggAAQghAAgTAWg");
	this.shape_6.setTransform(67.05,4.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ah9ChIAAk8IA4AAIAAApQAhguAxAAQAuAAAhAiQAiAiAAA6IAAABQAAA5giAiQghAiguAAQgxAAghgqIAABvgAgxhaQgVAWAAAiIAAABQAAAhAVAWQAUAWAdAAQAdAAAUgVQAUgWAAgiIAAgBQAAgigUgWQgUgVgdAAQgdAAgUAVg");
	this.shape_7.setTransform(37.125,7.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AA4B6IAAjAIhvAAIAADAIg4AAIAAjyIDfAAIAADyg");
	this.shape_8.setTransform(6.425,4.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhQBcQgkgkAAg3IAAgBQAAg0AhglQAiglAzAAQA3AAAeAmQAfAlAAA3IgBAQIixAAQAEAdATAQQASAQAbAAQAkAAAegdIAgAdQgmAug9AAQg0AAgjgjgAgpg/QgRASgDAdIB8AAQgDgcgRgSQgQgSgaAAQgZAAgRARg");
	this.shape_9.setTransform(-35.9,4.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AA5B6IAAifIh2CfIgyAAIAAjyIA3AAIAACaIBziaIA1AAIAADyg");
	this.shape_10.setTransform(-64.475,4.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AA5B6IAAhhIhwAAIAABhIg4AAIAAjyIA4AAIAABfIBwAAIAAhfIA3AAIAADyg");
	this.shape_11.setTransform(-93.8,4.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhRBcQgkgkAAg3IAAgBQAAg0AjglQAgglAzAAQA3AAAfAmQAeAlAAA3IAAAQIiyAAQAFAdATAQQATAQAaAAQAkAAAegdIAhAdQgnAug9AAQg0AAgkgjgAgpg/QgRASgDAdIB7AAQgCgcgQgSQgQgSgbAAQgZAAgRARg");
	this.shape_12.setTransform(-122.35,4.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAyB6IAAhPQggAJgYgBQhjAAAAhZIAAhSIA4AAIAABNQAAAYAMAKQAMAKAaAAQAYAAAZgHIAAhyIA4AAIAADyg");
	this.shape_13.setTransform(-150.3,4.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AhtCQIATgpQASAJAPAAQAMAAAIgGQAHgGAIgQIhljyIA7AAIBECzIA/izIA5AAIhgD4QgPAmgRAQQgSAPgdAAQgfAAgbgPg");
	this.shape_14.setTransform(-177.3,8.15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhXCMQgngnAAhMIAAgBQAAhSAggsQAfgsBDgLIBXgPIAJAzIhXAOQgoAHgVATQgUAUgFAlQAggkA3ABQA0AAAeAeQAfAeAAAyQAAA0gkAjQgkAjg3AAQg2AAghghgAgyABQgUAUAAAgIAAAAQAAAgATAUQAUAUAfAAQAfAAAUgUQAUgWAAggIAAAAQAAgfgSgUQgTgRgfgBQghABgUASg");
	this.shape_15.setTransform(-205.825,-0.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ah4B3QgwgxAAhFIAAgBQABhEAvgxQAxgwBIgBQBIAAAwAxQAvAwAABFIAAAAQABBFgxAxQgwAwhIABQhJgBgvgvgAhOhRQgeAhAAAwIAAAAQAAAwAfAhQAfAhAvAAQAvAAAeggQAfghAAgwIAAgBQAAgvgfghQgfghgvAAQgvAAgfAgg");
	this.shape_16.setTransform(-240.55,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(-262.1,-29.6,524.2,59.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("ACEDWQhSAAhXgRQhXgQhNgeQhNgeg4gnQg6gogbgqQgagqAHgoQAIgoApgeQAogfBEgPQBDgQBTABQBSAABXARQBXAQBNAeQBMAeA5AnQBJAzAXA1QAOAggGAdQgIAogoAeQgpAehEAPQhBAPhQAAIgFAAgAkWi8QhBAPgnAcQgmAbgHAlQgFAbAMAcQAVAyBHAxQByBQCzAiQCyAiCJggQBBgPAmgcQAngcAGgkQAHglgZgoQgagng3gmQg3gnhMgdQhMgdhWgRQhVgQhSgBIgFAAQhOAAhAAPg");
	this.shape.setTransform(-0.0154,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag2EgQkJgyish4Qish4AXh3QAWh3DMgxQDNgxEIAzQB/AYBxAsQBwArBTA5QBrBKAhBOQAUAugIArQgXB4jMAwQhlAYhyAAQh4AAiGgagAmVkUQjHAtgVBxQgIAmASArQApBgCbBWQCdBYDTAoQECAxDHgtQDHgtAVhxQAKg2glg6Qglg5hQg4QhSg4hvgrQhvgrh+gYQiGgah3AAQhtAAhfAWg");
	this.shape_1.setTransform(-0.0089,-0.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhLGPQlwhGjuinQhxhOg2hUQg4hYAQhRQAPhRBSg9QBSg8CLggQCIggCnABQCnABCwAiQEqA4DfB/QDaB7A7CMQAaA/gLA7QgPBRhUA9QhSA7iFAgQiLAhigAAQilAAi6gkgAo1l/QiEAfhOA4QhOA5gOBKQgLA2AZA6QA5CGDWB4QDaB6ElA3QFmBFEUg/QETg/AeicQAeidjpieQjqiglnhEQiugiilgBIgKAAQieAAiCAeg");
	this.shape_2.setTransform(-0.0317,0.0053);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AFGIRQjLgCjXgpQjXgpi9hJQi+hKiMhgQiOhihBhpQhChpAThjQAThjBjhJQBkhKCognQClgnDMACQDLABDXApQFqBFEOCZQEKCXBICqQAgBNgNBHQgTBjhkBKQhkBJioAnQihAmjFAAIgLAAgAqwnRQigAlhfBFQheBEgSBbQgMBBAdBHQA2B8CtB4QCJBfC8BJQC6BIDVApQDUAoDJABQDIACCjgmQCgglBfhFQBehEAShbQAShdhDhmQhBhhiGhbQkcjCm0hTQjUgpjIgBIgQgBQjAAAicAlg");
	this.shape_3.setTransform(-0.0143,-0.0015);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(-108.5,-52.8,217.1,105.69999999999999), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("ABQDvQhQgThRglQhRgkhEguQhEgvgugzQgvgzgQgvQgRgwARglQAQgmAugTQAvgUBGAAQBFAABQATQBPATBRAkQBSAlBEAuQBEAvAuAzQA8BAAKA6QAFAigMAbQgRAlguAUQguAUhGAAQhFAAhQgTgAlTjkQgrASgQAiQgKAaAFAdQAJA2A6BAQAtAxBDAuQBDAuBRAkQBPAjBPAUQBQATBDAAQBDAAArgSQAsgTAPgiQAQgigQgtQgQgtgtgxQgtgxhDguQhDguhRgkQhPgjhPgUQhQgThDAAQhDAAgsATg");
	this.shape.setTransform(0.0029,-0.0185,0.1825,0.1825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah2EMQj3htiMidQiMibAyhvQAxhvDSgBQDSgBD2BuQB3A1BjBEQBkBEBDBKQBXBgAPBUQAIAxgSAoQgxBvjSABIgEAAQjRAAjzhtgApFkCQgQAkAHAtQASBoCDB2QCFB6DFBXQDwBrDLABQDMACAvhpQAWgygXhCQgXhBhBhIQhDhJhihDQhjhDh1g0QjwhrjMgBIgGAAQjHAAgtBng");
	this.shape_1.setTransform(-0.0033,-0.0185,0.1825,0.1825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AikF0QlWiYjCjYQhchmghheQgjhiAihMQAhhLBegpQBegoCOAAQCMAACiAnQCiAnCkBKQEVB7C8CtQC4CpAaCXQALBEgYA2QghBLhgAoQhdAniJABIgGAAQkgAAlSiXgAqvnQQhZAlgfBGQgWAyALA+QAYCQC2ClQC4CoEQB5QFNCUEbACQEbACBBiSQBAiSi/jQQi/jQlOiUQihhIihgnQiggmiJgBQiIAAhYAlg");
	this.shape_2.setTransform(0.0006,-0.0321,0.1825,0.1825);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ADGJNQjGgwjHhZQjJhZiohyQiohzhyh+Qh0h/goh1Qgoh2AphcQAphcBygxQBygxCtAAQCqABDFAvQDFAwDIBZQFRCWDlDSQDgDOAfC4QAOBSgdBCQgpBchyAxQhyAxitAAQiqgBjFgvgAtEo1QhrAtgmBVQgbA8ANBMQAXCHCOCbQBwB7CmBxQClBxDGBYQDFBYDDAvQDDAvCnAAQCkABBsgtQBsgtAmhVQAmhXgqhyQgohuhuh3Qjoj9mWi0QjFhYjDgvQjDgvingBQilAAhsAtg");
	this.shape_3.setTransform(-0.0037,-0.0185,0.1825,0.1825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(-18.7,-11.6,37.5,23.2), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AjrD8QhFgBgugVQgugVgQgmQgPgmARgvQASgvAwgyQAwgyBFgtQBFgtBSghQBRgiBRgSQBRgRBFACQBZACAwAhQAdATALAbQAQAmgSAvQgRAwgxAxQhiBniqBHQhSAihQARQhJAPg/AAIgOAAgABYjhQhPARhQAhQhSAihEAsQhEAsgvAxQguAwgRAsQgRAsAOAjQALAaAZAQQAuAfBWACQBEABBPgRQBQgRBQghQBRghBFgtQBEgsAvgxQAugvARgsQARgtgPgiQgOgjgrgTQgrgUhDgCIgMAAQg/AAhJAQg");
	this.shape.setTransform(-0.0069,-0.0208);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlaFwQjSgGguhwQgvhwCQiYQCRiZD5hnQB4gyB1gZQB2gZBlACQCBADBHAwQApAbASAqQAuBwiQCYQiQCYj6BnQjrBijIAAIgXgBgACBlKQh0AZh2AxQj0BliNCTQiOCRAsBrQAPAlAmAZQBXA7CxgNQCzgNDGhSQD0hlCOiSQCNiSgshqQgVgzg/gdQg/gchigCIgSAAQhcAAhpAWg");
	this.shape_1.setTransform(-0.0107,-0.0448);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AngH+QiKgEhbgpQhfgrgfhMQgghNAjhfQAkhgBihmQBghlCNhaQCMhbCnhFQEXh0D/gQQD6gQB/BVQA5AmAXA3QAfBNglBhQgkBeheBiQjHDUlaCPQlFCHkUAAIgjgBgAiSljQilBEiKBZQiLBahfBjQhdBhgiBaQgjBaAdBGQAWAyA0AkQB5BRD1gRQD5gSEShyQFSiLDFjMQDEjKg9iUQg9iTkbgFIgVAAQkSAAlECGg");
	this.shape_2.setTransform(-0.0342,-0.0251);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ApEJtQitgEhwg0Qhxg0gnhdQgmhdArh0QArh0B3h8QB2h7CqhvQCrhuDLhUQFUiNE2gUQEwgTCaBoQBFAuAcBDQAnBdgrB0QgsB1h3B8Qh1B7irBuQirBujKBUQjKBUjHAqQizAnicAAIghgBgAiymxQjJBTioBtQipBthzB5QhxB2gqBtQgqBtAjBVQAaA+A/AqQBxBMDTAFQCoAEDEgpQDEgqDHhTQDIhTCohtQCphsBzh5QByh2AphuQAqhtgjhVQglhYhvgwQhsgviigDIgbAAQlNAAmJCjg");
	this.shape_3.setTransform(0.0055,0.0176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(-103.5,-62.1,207.1,124.30000000000001), null);


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
	this.shape.graphics.f("#000000").s().p("AhQBcQglgkABg3IAAgBQgBg0AjglQAgglAzAAQA4AAAeAmQAeAlABA3IgBAQIiyAAQAFAdATAQQATAQAaAAQAjAAAfgdIAhAdQgnAug9AAQg0AAgjgjgAgpg/QgQASgEAdIB8AAQgDgcgQgSQgQgSgbAAQgZAAgRARg");
	this.shape.setTransform(188.05,61.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAxB5IhQhiIgcAAIAABiIg4AAIAAjyIA4AAIAABhIAbAAIBMhhIBFAAIhmB4IBpB6g");
	this.shape_1.setTransform(162,61.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA4B5IAAhgIhvAAIAABgIg4AAIAAjyIA4AAIAABgIBvAAIAAhgIA4AAIAADyg");
	this.shape_2.setTransform(132.25,61.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhUBqQgZgUAAgjIAAgBQAAgnAcgTQAagTAvAAQAggBAgAKIAAgGQAAg1g8AAQghABgjAPIgQgsQAugUAtAAQA2AAAaAbQAbAbAAAwIAACPIg3AAIAAgeQgdAjgxAAQgkAAgZgTgAgoASQgPAKABATIAAABQAAARANAKQANAKAVAAQAbAAASgOQATgPAAgXIAAgQQgZgKgeAAQgaAAgQALg");
	this.shape_3.setTransform(103.45,61.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhXCMQgngnAAhMIAAAAQAAhUAggrQAfgsBDgLIBXgPIAJAzIhXAOQgoAHgVAUQgUATgFAlQAggkA3AAQA0ABAeAeQAfAeAAAxQAAA1gkAjQgkAjg3AAQg2AAghghgAgyABQgUAUAAAgIAAABQAAAfATAVQAUATAfABQAfAAAUgWQAUgVAAggIAAgBQAAgegSgTQgTgTgfABQghAAgUASg");
	this.shape_4.setTransform(75.725,57);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABOB5IAAifIhOByIAAAAIhOhxIAACeIg2AAIAAjyIA7AAIBJBxIBLhxIA6AAIAADyg");
	this.shape_5.setTransform(30.025,61.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhcBaQglgkAAg1IAAgBQAAg0AmglQAlglA3AAQA3AAAlAlQAlAlAAA0IAAAAQAAA0glAmQgmAlg3AAQg3AAglglgAg0g3QgVAXAAAgIAAAAQAAAhAWAWQAUAXAgAAQAhAAATgWQAVgXAAggIAAgBQAAgfgWgXQgUgXggAAQghAAgTAWg");
	this.shape_6.setTransform(-1.8,61.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AA4B5IAAhgIhvAAIAABgIg4AAIAAjyIA4AAIAABgIBvAAIAAhgIA4AAIAADyg");
	this.shape_7.setTransform(-31.55,61.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AA4B5IAAi/IhvAAIAAC/Ig4AAIAAjyIDfAAIAADyg");
	this.shape_8.setTransform(-60.875,61.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhsCQIATgpQARAJAPAAQANAAAHgGQAIgHAGgPIhljyIA8AAIBDC0IBAi0IA6AAIhhD5QgOAlgSAQQgRAPgeAAQgfAAgagPg");
	this.shape_9.setTransform(-89.25,65.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ah9ChIAAk8IA4AAIAAApQAhguAxAAQAuAAAhAiQAiAiAAA6IAAABQAAA5giAiQghAiguAAQgxAAghgqIAABvgAgxhaQgVAWAAAiIAAABQAAAhAVAWQAUAWAdAAQAdAAAUgVQAUgWAAgiIAAgBQAAgigUgWQgUgVgdAAQgdAAgUAVg");
	this.shape_10.setTransform(-117.725,65.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAxB5IhQhiIgcAAIAABiIg5AAIAAjyIA5AAIAABhIAbAAIBMhhIBFAAIhmB4IBpB6g");
	this.shape_11.setTransform(-145.9,61.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhsB5IAAjyIB7AAQAnABAXAQQAWARAAAdIAAAAQAAAngnAPQAxAPAAArIAAAAQAAAhgZARQgaARgrAAgAg2BRIBCAAQArAAAAgeIAAgBQAAgPgMgIQgMgJgWABIg/AAgAg2gTIA6AAQAUAAAKgJQAKgIAAgPIAAAAQAAgMgKgJQgKgIgTAAIg7AAg");
	this.shape_12.setTransform(-187.85,61.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhUBpQgZgTAAgkIAAgBQAAgmAcgSQAagVAvAAQAgABAgAJIAAgFQAAg1g8AAQghAAgjAPIgQgsQAugTAtAAQA2AAAaAbQAbAaAAAxIAACPIg3AAIAAgfQgdAkgxgBQgkABgZgVgAgoARQgPALABAUIAAAAQAAARANAKQANAKAVAAQAbAAASgPQATgOAAgXIAAgRQgZgJgeAAQgaAAgQAKg");
	this.shape_13.setTransform(53.05,4.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ah9ChIAAk8IA4AAIAAApQAhguAxAAQAuAAAhAiQAiAiAAA6IAAABQAAA5giAiQghAiguAAQgxAAghgqIAABvgAgxhaQgVAWAAAiIAAABQAAAhAVAWQAUAWAdAAQAdAAAUgVQAUgWAAgiIAAgBQAAgigUgWQgUgVgdAAQgdAAgUAVg");
	this.shape_14.setTransform(25.375,7.825);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgbB6IAAjBIhWAAIAAgxIDjAAIAAAxIhWAAIAADBg");
	this.shape_15.setTransform(-3.6,4.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AA4B6IAAhhIhvAAIAABhIg4AAIAAjyIA4AAIAABfIBvAAIAAhfIA4AAIAADyg");
	this.shape_16.setTransform(-31.2,4.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhQBcQgkgkAAg3IAAgBQAAg0AhglQAiglAzAAQA3AAAeAmQAfAlAAA3IgBAQIixAAQAEAdATAQQASAQAbAAQAkAAAegdIAgAdQgmAug9AAQg0AAgjgjgAgpg/QgRASgDAdIB8AAQgDgcgRgSQgQgSgaAAQgZAAgRARg");
	this.shape_17.setTransform(-59.75,4.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("ABNCYIAAg9IjLAAIAAjyIA4AAIAADAIBvAAIAAjAIA3AAIAADAIAfAAIAABvg");
	this.shape_18.setTransform(-87.725,7.425);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AhDAcIAAg2ICHAAIAAA2g");
	this.shape_19.setTransform(-113.25,2.45);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgbCoIAAlPIA3AAIAAFPg");
	this.shape_20.setTransform(-129.225,-0.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgbCoIAAlPIA3AAIAAFPg");
	this.shape_21.setTransform(-142.375,-0.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AhUBpQgZgTAAgkIAAgBQAAgmAbgSQAcgVAtAAQAhABAgAJIAAgFQAAg1g7AAQgiAAgkAPIgPgsQAugTAtAAQA3AAAaAbQAaAaAAAxIAACPIg3AAIAAgfQgdAkgwgBQglABgZgVgAgnARQgPALgBAUIAAAAQAAARAOAKQANAKAVAAQAbAAATgPQASgOAAgXIAAgRQgZgJgeAAQgaAAgPAKg");
	this.shape_22.setTransform(-163.1,4.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhMBaQgjgkgBg1IAAgBQABgzAjglQAlgmA1AAQA5AAAoAqIgjAlQgcgegjAAQgdAAgTAXQgVAWAAAgIAAAAQAAAhAVAWQAUAXAfAAQAhAAAegeIAhAhQgTAWgYAMQgWAMgiAAQg0AAglglg");
	this.shape_23.setTransform(-188.8,4.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("ABOB5IAAigIhOBzIAAAAIhOhxIAACeIg2AAIAAjyIA7AAIBJByIBLhyIA6AAIAADyg");
	this.shape_24.setTransform(76.825,-52.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AhcBaQglgkAAg1IAAgBQAAg0AmglQAlglA3AAQA3AAAlAlQAlAlAAA0IAAAAQAAA0glAmQgmAlg3AAQg3AAglglgAg0g3QgVAXAAAgIAAAAQAAAhAWAWQAUAXAgAAQAhAAATgWQAVgXAAggIAAgBQAAgfgWgXQgUgXggAAQghAAgTAWg");
	this.shape_25.setTransform(45,-52.775);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ah9ChIAAk8IA4AAIAAApQAhguAxAAQAuAAAhAiQAiAiAAA6IAAABQAAA5giAiQghAiguAAQgxAAghgqIAABvgAgxhaQgVAWAAAiIAAABQAAAhAVAWQAUAWAdAAQAdAAAUgVQAUgWAAgiIAAgBQAAgigUgWQgUgVgdAAQgdAAgUAVg");
	this.shape_26.setTransform(15.075,-49.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhbBaQgmgkABg1IAAgBQAAg0AlglQAlglA2AAQA4AAAkAlQAmAlAAA0IAAAAQAAA0gmAmQglAlg3AAQg3AAgkglgAg1g3QgTAXgBAgIAAAAQABAhAUAWQAWAXAeAAQAiAAATgWQAVgXAAggIAAgBQAAgfgWgXQgVgXgfAAQggAAgVAWg");
	this.shape_27.setTransform(-16.05,-52.775);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgbB5IAAi/IhWAAIAAgzIDjAAIAAAzIhWAAIAAC/g");
	this.shape_28.setTransform(-44.1,-52.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhUBqQgZgUAAgjIAAgCQAAgmAbgTQAcgTAtAAQAhgBAgALIAAgHQAAg1g7AAQgiAAgkAQIgPgsQAugUAtAAQA2AAAbAbQAaAbAAAwIAACPIg2AAIAAgeQgeAkgwAAQglgBgZgTgAgnASQgPAKgBATIAAABQAAARAOAKQANAKAVAAQAbAAATgOQASgPAAgXIAAgQQgZgKgeAAQgbAAgOALg");
	this.shape_29.setTransform(-71.2,-52.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("Ah9ChIAAk8IA4AAIAAApQAhguAxAAQAuAAAhAiQAiAiAAA6IAAABQAAA5giAiQghAiguAAQgxAAghgqIAABvgAgxhaQgVAWAAAiIAAABQAAAhAVAWQAUAWAdAAQAdAAAUgVQAUgWAAgiIAAgBQAAgigUgWQgUgVgdAAQgdAAgUAVg");
	this.shape_30.setTransform(-98.875,-49.375);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AhRBcQgjgkgBg3IAAgBQABg0AhglQAiglAzAAQA2AAAfAmQAeAlAAA3IAAAQIixAAQAEAdATAQQATAQAaAAQAjAAAfgdIAgAdQgmAug9AAQg0AAgkgjgAgog/QgRASgEAdIB7AAQgCgcgRgSQgPgSgbAAQgZAAgQARg");
	this.shape_31.setTransform(-128.8,-52.775);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AA4B5IAAi/IhvAAIAAC/Ig4AAIAAjyIDfAAIAADyg");
	this.shape_32.setTransform(-157.375,-52.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhcBaQgkgkgBg1IAAgBQAAg0AmglQAlglA3AAQA3AAAlAlQAlAlgBA0IAAAAQABA0glAmQgmAlg3AAQg3AAglglgAg0g3QgVAXAAAgIAAAAQAAAhAWAWQAUAXAgAAQAgAAAVgWQAUgXAAggIAAgBQAAgfgWgXQgUgXggAAQghAAgTAWg");
	this.shape_33.setTransform(-187.1,-52.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol28, new cjs.Rectangle(-204.2,-86.8,408.4,173.6), null);


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
	this.shape.graphics.f("#000000").s().p("Ai0DtIAnhTQAaAQAXAAQAPAAAJgGQAJgGAIgPIigmYIB6AAIBcEVIBZkVIB4AAIicGhQgXA+geAaQgdAagzAAQg3AAgwgdg");
	this.shape.setTransform(332.325,13.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag5DMIAAkwIiEAAIAAhnIF7AAIAABnIiEAAIAAEwg");
	this.shape_1.setTransform(287.9,6.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AidCXQg+g9gBhZIAAgBQAAhYBAg+QA/g9BeAAQBdAAA/A9QA/A8AABZIAAABQAABZg/A9QhAA+hdAAQhdAAhAg9gAhNhQQgcAgAAAvIAAABQAAAuAdAhQAeAhAvAAQAvAAAdggQAdggABgvIAAgBQgBgugeghQgeghguAAQgwAAgdAgg");
	this.shape_2.setTransform(240.95,7.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiVDmQhBhCAAiAIAAgBQAAkDDYgjICagaIASBpIiYAZQhvARgRBVQA3gtBRAAQBXAAAxAxQAyAxAABRIAAABQAABYg9A6Qg9A6hgAAQhaAAg5g4gAhJAPQgcAeAAAsIAAAAQAAArAcAcQAcAdAtAAQAtAAAdgeQAcgeAAguIAAAAQAAgrgagbQgZgagvAAQgxAAgcAcg");
	this.shape_3.setTransform(190.9,-0.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AiTCxQgnghAAg7IAAgBQAAhAAsggQAsghBMAAQAwAAAyAQIAAgGQAAhLhWAAQg4AAg4AWIgdhYQBMghBRAAQBcAAAtAuQAsAsAABWIAADrIhwAAIAAgsQguA0hLAAQg9AAgoghgAg1AlQgWAPAAAbIAAACQAAAXASANQARANAcAAQAoAAAZgUQAZgTAAggIAAgVQgigPgoAAQgkAAgVAOg");
	this.shape_4.setTransform(142.275,7.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AjVEMIAAoQIB0AAIAAA7QAwhCBOAAQBLAAA3A4QA3A5AABhIAAACQAABgg2A5Qg3A4hMAAQhLAAgzg8IAACugAhGiKQgdAgAAAxIAAACQAAAxAdAfQAcAfAqAAQAoAAAdgfQAegeAAgyIAAgCQAAgxgeggQgdgfgoAAQgqAAgcAfg");
	this.shape_5.setTransform(96.05,12.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ABMEeIAAjpIijDpIhnAAIAAmXIBzAAIAADfICejfIBsAAIAAGXgAhjjEQgmgggFg5IBNAAQAPAuAyAAQAyAAAPguIBNAAQgFA5gmAgQgmAgg9AAQg9AAgmggg");
	this.shape_6.setTransform(22.475,-1.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ai0DtIAnhTQAaAQAXAAQAPAAAJgGQAJgGAIgPIigmYIB6AAIBcEVIBZkVIB4AAIicGhQgXA+geAaQgdAagzAAQg3AAgwgdg");
	this.shape_7.setTransform(-24.675,13.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AiUDmQhDhCAAiAIAAgBQAAkDDZgjICagaIASBpIiXAZQhwARgSBVQA3gtBSAAQBXAAAyAxQAwAxAABRIAAABQAABYg8A6Qg9A6hgAAQhaAAg4g4gAhJAPQgcAeAAAsIAAAAQAAArAcAcQAcAdAtAAQAtAAAcgeQAegeAAguIAAAAQAAgrgagbQgbgagtAAQgyAAgcAcg");
	this.shape_8.setTransform(-72.2,-0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AicCXQhAg9ABhZIAAgBQAAhYA/g+QA/g9BdAAQBeAAA/A9QBAA8AABZIAAABQAABZhAA9Qg/A+heAAQhdAAg/g9gAhMhQQgdAgAAAvIAAABQAAAuAeAhQAeAhAtAAQAxAAAcggQAdggAAgvIAAgBQAAgugdghQgfghguAAQgwAAgcAgg");
	this.shape_9.setTransform(-122.5,7.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AjVEMIAAoQIB0AAIAAA7QAwhCBOAAQBLAAA4A4QA2A5AABhIAAACQAABgg2A5Qg3A4hMAAQhMAAgyg8IAACugAhGiKQgdAgAAAxIAAACQAAAxAdAfQAcAfAqAAQAoAAAegfQAdgeAAgyIAAgCQAAgxgdggQgegfgoAAQgqAAgcAfg");
	this.shape_10.setTransform(-172.5,12.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABMDMIAAkuIiWAAIAAEuIh0AAIAAmXIF9AAIAAGXg");
	this.shape_11.setTransform(-223.275,6.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AidCXQg+g9gBhZIAAgBQAAhYBAg+QBAg9BcAAQBeAAA/A9QBAA8gBBZIAAABQABBZhAA9QhAA+hdAAQheAAg/g9gAhNhQQgdAgAAAvIAAABQAAAuAeAhQAfAhAtAAQAwAAAeggQAdggAAgvIAAgBQAAgugfghQgeghguAAQgwAAgdAgg");
	this.shape_12.setTransform(-272.75,7.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("ABqEKIAAmpIjTAAIAAGpIh1AAIAAoTIG9AAIAAITg");
	this.shape_13.setTransform(-326.7,0.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(-357.4,-47.6,714.8,95.2), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7583FF").s().p("AgkAlQgPgPAAgWQAAgUAPgPQAPgQAVAAQAVAAAPAQQAQAPAAAUQAAAWgQAPQgPAPgVAAQgVAAgPgPg");
	this.shape.setTransform(-20.225,-8.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7583FF").s().p("AgkAlQgPgPAAgWQAAgUAPgPQAPgQAVAAQAVAAAPAQQAQAPAAAUQAAAWgQAPQgPAPgVAAQgVAAgPgPg");
	this.shape_1.setTransform(-20.225,-8.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7583FF").s().p("AgkAlQgPgPAAgWQAAgUAPgPQAPgQAVAAQAVAAAPAQQAQAPAAAUQAAAWgQAPQgPAPgVAAQgVAAgPgPg");
	this.shape_2.setTransform(-20.225,-8.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{x:-20.225}}]}).to({state:[{t:this.shape_1,p:{x:-20.225}},{t:this.shape,p:{x:0.025}}]},5).to({state:[{t:this.shape_2},{t:this.shape_1,p:{x:0.025}},{t:this.shape,p:{x:20.275}}]},4).to({state:[]},17).wait(8));

	// Layer_1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AB9FQQg8grgYhCIjJAAQiBAAhbhbQhchcAAiBQAAiBBchbQBbhcCBAAIFBAAQCBAABbBcQBcBbAACBQAABxhIBWQhHBWhuAVQgDBGA/A8QAgAeAfARQiJgEhRg6g");

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(34));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.3,-39.8,94.6,79.6);


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
	this.shape.graphics.f("#F8B334").s().p("AgRCsIAAggQhhAAAAg8IAAgbIBFAAIAAASQAAAXAcAAIAAhNIgEgBQhZgRAAguIAAgqQAAg7BdAAIAAgYIAoAAIAAAYQBXAAAAA7IAAAcIhFAAIAAgTQAAgWgSAAIAABJQBcATAAA1IAAAlQAAA8hcAAIAAAggAAXBeQAUAAAAgXIAAgSQAAgcgUgBgAgphQIAAAPQAAAbAUACIAEABIAAhDQgYAAAAAWg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E69500").s().p("AgRCsIAAggQhhAAAAg8IAAgbIBFAAIAAASQAAAXAcAAIAAhNIgEgBQhYgRAAguIAAgqQAAg7BcAAIAAgXIAoAAIAAAXQBXAAAAA7IAAAcIhEAAIAAgTQgBgXgSAAIAABKQBcASAAA3IAAAkQAAA8hcAAIAAAggAAXBeQAUAAABgXIAAgSQgBgbgUgDgAgphQIAAAOQABAcATACIAEACIAAhFQgYAAAAAXg");
	this.shape_1.setTransform(1.1,1.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E69500").s().p("Ai0CNQgXgzAAg4QAAhrBMhMQBNhNBrAAQBQAABDAtQg7gehBAAQhsgBhOBOQhOBOABBsQAAAxASAuQAQAtAgAjQgoglgXgxg");
	this.shape_2.setTransform(-5.7,-3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCEA0D").s().p("Ai4C5QhMhNAAhsQAAhrBMhMQBNhNBrAAQBsAABMBNQBNBMAABrQAABshNBNQhMBMhsAAQhrAAhNhMg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8B334").s().p("AjdDeQhbhcAAiCQAAiBBbhbQBdhcCAAAQCCAABbBcQBcBbAACBQAACChcBcQhbBbiCAAQiAAAhdhbg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-31.3,-31.3,62.6,62.6), null);


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
	this.shape.graphics.f("#F8B334").s().p("AgRCsIAAggQhhAAAAg8IAAgbIBFAAIAAASQAAAXAcAAIAAhNIgEgBQhYgSAAgtIAAgqQAAg7BcAAIAAgXIAoAAIAAAXQBXAAAAA7IAAAcIhFAAIAAgSQAAgXgSAAIAABJQBcASAAA3IAAAkQAAA8hcAAIAAAggAAXBeQAUAAAAgXIAAgSQAAgbgUgDgAgohPIAAANQAAAcATACIAEACIAAhEQgXAAAAAXg");
	this.shape.setTransform(-0.025,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E69500").s().p("AgSCsIAAggQhgAAAAg7IAAgcIBFAAIAAASQAAAXAbAAIAAhNIgDgBQhYgRgBguIAAgqQAAg7BcgBIAAgWIApAAIAAAWQBXABAAA7IAAAcIhEAAIAAgTQAAgXgTAAIAABKQBcATAAA2IAAAlQAAA7hcAAIAAAggAAXBeQAUAAAAgXIAAgSQAAgcgUgBgAgohQIAAAPQAAAbATADIADAAIAAhEQgWAAAAAXg");
	this.shape_1.setTransform(1.1,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E69500").s().p("Ai0CNQgXgyAAg5QAAhrBNhMQBLhNBsAAQBRAABCAuQg5gfhDAAQhtAAhNBNQhNBOgBBsQAAAyASAtQASAsAfAkQgoglgXgxg");
	this.shape_2.setTransform(-5.7,-3.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCEA0D").s().p("Ai3C4QhNhMAAhsQAAhrBNhMQBMhNBrAAQBsAABNBNQBMBMAABrQAABshMBMQhNBNhsAAQhrAAhMhNg");
	this.shape_3.setTransform(-0.025,-0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8B334").s().p("AjcDdQhchbAAiCQAAiBBchbQBchcCAAAQCCAABbBcQBcBbAACBQAACBhcBcQhbBciCAAQiAAAhchcg");
	this.shape_4.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-31.3,-31.3,62.6,62.6), null);


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
	this.shape.graphics.f("#F8B334").s().p("AgRCsIAAggQhhAAAAg7IAAgcIBFAAIAAASQAAAXAcAAIAAhNIgEgBQhZgRABguIAAgqQAAg7BcAAIAAgXIAoAAIAAAXQBXAAAAA7IAAAcIhFAAIAAgSQAAgXgSAAIAABJQBcASAAA3IAAAlQAAA7hcAAIAAAggAAXBeQAUAAAAgXIAAgSQAAgcgUgBgAgphPIAAANQAAAcAUACIAEACIAAhEQgYAAAAAXg");
	this.shape.setTransform(0,-0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E69500").s().p("AgRCsIAAgfQhhgBAAg7IAAgcIBFAAIAAATQAAAXAcgBIAAhNIgEgBQhYgRAAguIAAgqQAAg7BcgBIAAgWIAoAAIAAAWQBYABgBA7IAAAcIhEAAIAAgTQgBgXgSAAIAABKQBcASAAA3IAAAlQAAA7hcABIAAAfgAAXBeQAVABAAgXIAAgTQAAgcgVgBgAgohQIAAAPQAAAbATADIAEAAIAAhEQgXAAAAAXg");
	this.shape_1.setTransform(1.1,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E69500").s().p("Ai0CNQgXgzAAg4QAAhrBMhNQBNhMBrAAQBQAABDAuQg6gghCAAQhsABhOBNQhOBOAABsQAABjBDBMQgoglgXgxg");
	this.shape_2.setTransform(-5.7,-3.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCEA0D").s().p("Ai4C5QhMhNAAhsQAAhrBMhMQBNhNBrAAQBsAABMBNQBNBMAABrQAABshNBNQhMBMhsAAQhrAAhNhMg");
	this.shape_3.setTransform(0,-0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8B334").s().p("AjdDdQhbhbAAiCQAAiBBbhcQBdhbCAAAQCCAABbBbQBcBcAACBQAACChcBbQhbBciCAAQiAAAhdhcg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-31.3,-31.3,62.6,62.6), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AgzA6QgWgXAAgjIAAAAQAAggAVgXQAVgYAgAAQAiAAAUAYQATAYAAAhIAAALIhwAAQADASAMAKQAMALAQAAQAWAAATgTIAVATQgYAcgnAAQggAAgXgWgAgZgnQgLALgCASIBNAAQgBgRgLgMQgKgLgRAAQgPAAgKALg");
	this.shape.setTransform(99.175,2.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhxBNIAAiYIAjAAIAAB4IA+AAIAAh4IAiAAIAAB4IA9AAIAAh4IAjAAIAACYg");
	this.shape_1.setTransform(76.8,2.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhBBNIAAiYIAjAAIAAAvIAjAAQAcgBAQAOQARAOAAAYQAAAZgRAOQgRAPgeAAgAgeAvIAgAAQAdABAAgYIAAgBQAAgLgIgGQgHgGgOAAIggAAg");
	this.shape_2.setTransform(55.625,2.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAtBNIgthuIgtBuIglAAIBDiZIAgAAIBCCZg");
	this.shape_3.setTransform(37.8,2.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag5A5QgYgXAAgiIAAAAQAAggAYgXQAXgYAiAAQAjAAAXAYQAYAXAAAgIAAAAQAAAhgYAXQgXAYgjAAQgiAAgXgXgAghgiQgNAOAAAUIAAAAQAAAUAOAPQANAOATAAQAVAAANgOQAMgOAAgVIAAAAQAAgUgNgOQgNgOgUAAQgUAAgNAOg");
	this.shape_4.setTransform(19.275,2.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag2BYQgZgZAAgvQAAg1AUgbQAUgcAqgHIA3gJIAFAgIg3AJQgZAEgNAMQgNANgDAXQAUgWAjAAQAhAAATATQATATAAAeIAAABQAAAhgWAWQgXAWgjAAQgiAAgUgVgAgfABQgNAMAAAVQAAATANANQAMANATAAQAUAAAMgOQANgMAAgVQAAgTgMgNQgLgLgUAAQgUAAgNAMg");
	this.shape_5.setTransform(0.35,-0.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAjBrIAAhlIhJBlIggAAIAAiYIAjAAIAABhIBIhhIAiAAIAACYgAgihLQgOgMgBgTIAYAAQAGARATAAQATAAAGgRIAYAAQgBATgOAMQgNALgVAAQgVAAgNgLg");
	this.shape_6.setTransform(-27.125,-0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag0BCQgQgMAAgWIAAgBQAAgYARgMQARgMAdAAQAVAAAUAGIAAgEQAAghglAAQgVAAgXAKIgKgcQAdgMAcAAQAiAAARARQAQAQAAAfIAABaIgiAAIAAgTQgSAWgfAAQgXAAgPgNgAgYALQgKAGAAANIAAAAQAAALAJAGQAIAGANAAQARAAALgJQAMgJAAgOIAAgLQgQgGgTAAQgQAAgJAHg");
	this.shape_7.setTransform(-45.325,2.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAkBNIAAg9IhHAAIAAA9IgjAAIAAiYIAjAAIAAA7IBHAAIAAg7IAjAAIAACYg");
	this.shape_8.setTransform(-62.6,2.85);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhEA6IASgYQAYASAaAAQARgBAIgFQAJgGAAgJIAAAAQABgJgJgFQgJgFgOABIghAAIAAgZIAgAAQAcgBABgSIAAAAQAAgJgJgGQgIgEgOAAQgYAAgYARIgTgWQAegYAnAAQAcAAASAMQARAMAAATQAAAYgbAMQAfAHAAAbIAAAAQAAAUgTANQgSANggAAQgmAAgegWg");
	this.shape_9.setTransform(-80.1,2.85);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag4BmIAohGIhRiFIApAAIA7BlIA3hlIAoAAIhzDLg");
	this.shape_10.setTransform(-98.3,0.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E55219").s().p("AvkETQhyAAhRhQQhQhRAAhyQAAhxBQhRQBRhQByAAIfJAAQByAABRBQQBQBRAABxQAAByhQBRQhRBQhyAAg");
	this.shape_11.setTransform(-0.0314,0.0329,1.0904,1.0904);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-138.7,-29.9,277.4,59.9), null);


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
	this.shape.graphics.f("#00818D").s().p("AnUJZIAAyxIEZAAIAAO7IKPAAIAAD2g");
	this.shape.setTransform(664,10.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00818D").s().p("An/JZIAAyxIPuAAIAADkIrWAAIAAD8IKQAAIAADOIqQAAIAAEfILnAAIAADkg");
	this.shape_1.setTransform(540.625,10.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00818D").s().p("AiLJZIAAu8ImnAAIAAj1IRlAAIAAD1ImnAAIAAO8g");
	this.shape_2.setTransform(410.225,10.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00818D").s().p("AidCTIAAklIE7AAIAAElg");
	this.shape_3.setTransform(334.825,55.725);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("An/JZIAAyxIPuAAIAADkIrVAAIAAD8IKPAAIAADOIqPAAIAAEfILmAAIAADkg");
	this.shape_4.setTransform(242.475,10.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ADmJZIoppiIAAJiIkYAAIAAyxIEYAAIAAJEIIgpEIF3AAIpJJCIJRJvg");
	this.shape_5.setTransform(108.375,10.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AEcJZIkbmqIkzAAIAAGqIkZAAIAAyxINGAAQCeAABEBDQBDBEAACeIAACoQAACPg6BFQg6BFiAALIgRABIExG/gAkygVIG4AAQBJAAAcgdQAdgcAAhLIAAhwQAAhJgdgdQgcgdhJgBIm4AAg");
	this.shape_6.setTransform(-36.025,10.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AF+JZIhZjhIpZAAIhZDhIkoAAIIVyxIFDAAIITSxgADUCsIjcokIjbIkIG3AAg");
	this.shape_7.setTransform(-184.475,10.35);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AGtJZIAAr3IlkIiIiRAAIlkoiIAAL3IkDAAIAAyxID4AAIG+LAIG9rAIDsAAIAASxg");
	this.shape_8.setTransform(-344.375,10.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AEtKSQhNhOAAhsQAAhuBNhOQBOhNBtAAQAbAAAgAHIBIh8IlnpwIrQAAIieEQIjoAAIESnYIO5AAIHaM5IiMDxQApBBAABLQAABshOBOQhNBNhtAAQhtAAhOhNgAGtGcQgYAZAAAjQAAAgAZAZQAZAZAhAAQAhAAAZgZQAZgZAAggQAAgjgZgZQgYgYgiAAQgiAAgZAYg");
	this.shape_9.setTransform(-563.425,-45.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E55219").s().p("AnsKIIjAlPQhpgGhKhLQhIhNgBhpQAAhsBOhOQBOhNBtAAQBtAABNBNQBOBOAABsQAAA4gYAzQgVAxgpAlIB1DMILQAAIFoptIickQIB0jJIEQHZIncM2gAragIQgYAYgBAiQAAAhAaAZQAZAZAhAAQAhAAAZgZQAZgZAAghQAAgigZgYQgYgYgiAAQgiAAgZAYg");
	this.shape_10.setTransform(-530.4,53.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00818D").s().p("AjCONInbs7IHes2IFgAAQAdhLBCguQBEguBSgBQBtAABNBOQBOBNAABtQAABuhOBNQhNBNhtABQhQAAhDgtQhAgsgfhHIjwAAIlpJuIFoJxIE5AAIB0DJgAFcq+QgZAZAAAhQAAAiAZAZQAZAZAhAAQAiAAAYgZQAZgZAAgiQAAghgZgZQgYgZgiAAQghAAgZAZg");
	this.shape_11.setTransform(-643.85,27.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-710.8,-118.6,1421.6999999999998,237.3), null);


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
	this.shape.graphics.f("#00818D").s().p("AqXNUIAA6nIGOAAIAAVLIOhAAIAAFcg");
	this.shape.setTransform(0.0355,0.0098,0.5129,0.5129);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-34,-43.7,68.1,87.4), null);


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
	this.shape.graphics.f("#00818D").s().p("ArVNUIAA6nIWSAAIAAFDIwEAAIAAFlIOiAAIAAElIuiAAIAAGXIQdAAIAAFDg");
	this.shape.setTransform(-0.0107,0.0098,0.5129,0.5129);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-37.2,-43.7,74.5,87.4), null);


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
	this.shape.graphics.f("#00818D").s().p("AjGNUIAA1LIpXAAIAAlcIY7AAIAAFcIpXAAIAAVLg");
	this.shape.setTransform(0.0281,0.0098,0.5129,0.5129);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-40.9,-43.7,81.9,87.4), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00818D").s().p("AjfDRIAAmhIG/AAIAAGhg");
	this.shape.setTransform(0.0353,0.0155,0.5129,0.5129);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-11.4,-10.7,22.9,21.4), null);


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
	this.shape.graphics.f("#000000").s().p("ArVNUIAA6nIWSAAIAAFDIwEAAIAAFlIOhAAIAAElIuhAAIAAGXIQdAAIAAFDg");
	this.shape.setTransform(219.7455,0.0098,0.5129,0.5129);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AFGNUIsQthIAANhImOAAIAA6nIGOAAIAAM3IMEs3IITAAIs9M0INJNzg");
	this.shape_1.setTransform(122.2159,0.0098,0.5129,0.5129);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AGSNUImRpcIm0AAIAAJcImOAAIAA6nISkAAQDhAABgBgQBgBgAADgIAADuQAADLhSBiQhSBii2AOIgYACIGwJ6gAmzgeIJwAAQBoAAAogpQApgpAAhpIAAieQAAhpgpgpQgogphoAAIpwAAg");
	this.shape_2.setTransform(17.2234,0.0098,0.5129,0.5129);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AIeNUIh/k/ItUAAIh+E/ImjAAILy6nIHLAAILwangAEsD0Ik3sKIk3MKIJuAAg");
	this.shape_3.setTransform(-90.7311,0.0098,0.5129,0.5129);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AJgNUIAAw0In5MGIjOAAIn4sGIAAQ0IlwAAIAA6nIFgAAIJ5PmIJ3vmIFPAAIAAang");
	this.shape_4.setTransform(-206.9819,0.0098,0.5129,0.5129);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-257,-43.7,514,87.4), null);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhUBqIAAjTICpAAIAADTg");
	this.shape.setTransform(17.775,-67.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiUBpIAAjSIEpAAIAADTg");
	this.shape_1.setTransform(11.4,-67.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AjaBpIAAjSIG1AAIAADTg");
	this.shape_2.setTransform(4.4,-67.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AklBpIB7jSIHPAAIAADTg");
	this.shape_3.setTransform(-3.05,-67.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ak/CWICvkrIHPAAIAADSIlXAAIgzBZg");
	this.shape_4.setTransform(-5.65,-62.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AlgDQIDxmfIHQAAIAADTIlYAAIh1DMg");
	this.shape_5.setTransform(-8.9875,-57.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AmAEIIEyoPIHPAAIAADUIlYAAIi2E7g");
	this.shape_6.setTransform(-12.25,-51.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AmbE1IFnppIHQAAIAADUIlYAAIjrGVg");
	this.shape_7.setTransform(-14.8625,-46.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AnKGGIHFsLIHQAAIAADTIlYAAIlJI4g");
	this.shape_8.setTransform(-19.575,-38.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AnPHBIgTghIH0tgIHRAAIAADUIlYAAIl6KMIATAhg");
	this.shape_9.setTransform(-22.025,-32.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AlvIUIhzjJIH0tgIHRAAIAADUIlYAAIl6KNIB0DKg");
	this.shape_10.setTransform(-22.025,-24.4375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Aj2J+IjsmbIH0tgIHRAAIAADUIlYAAIl6KNIDrGag");
	this.shape_11.setTransform(-22.025,-14.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AniBxIH0tgIHRAAIAADTIlYAAIl6KNIFrJ9IjuADg");
	this.shape_12.setTransform(-22.025,-2.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AniAsIH0tgIHRAAIAADTIlYAAIl6KNIG6MGIjuADg");
	this.shape_13.setTransform(-22.025,4.3125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AAPNiInxtiIH0thIHRAAIAADUIlYAAIl6KNIFyKEIB6Deg");
	this.shape_14.setTransform(-22.025,8.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAPNiInxtiIH0thIHRAAIAADUIlYAAIl6KNIF4KPIBSAAIBwDTg");
	this.shape_15.setTransform(-22.025,8.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AAPNiInxtiIH0thIHRAAIAADUIlYAAIl6KNIF4KPIDKAAIB5DTg");
	this.shape_16.setTransform(-22.025,8.775);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AglNiInytiIH1thIHQAAIAADUIlYAAIl6KNIF4KPIFKAAIB6DTg");
	this.shape_17.setTransform(-16.725,8.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},14).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},76).to({state:[]},1).wait(12));

	// Layer_3
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_18.setTransform(43.1,-67.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgWAXQgKgKAAgNQAAgMAKgKQAKgKAMAAQANAAALAKQAKAKgBAMQABANgKAKQgLALgNgBQgMABgKgLg");
	this.shape_19.setTransform(43.1,-67.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AggAhQgOgPAAgSQAAgSAOgOQAOgOASAAQASAAAPAOQAOAOAAASQAAASgOAPQgPAOgSAAQgSAAgOgOg");
	this.shape_20.setTransform(43.1,-67.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgpAqQgSgSAAgYQAAgXASgSQASgSAXAAQAYAAASASQASASAAAXQAAAYgSASQgSASgYAAQgXAAgSgSg");
	this.shape_21.setTransform(43.075,-67.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgzAzQgWgWAAgdQAAgdAWgVQAXgXAcAAQAdAAAXAXQAWAVAAAdQAAAdgWAWQgXAXgdAAQgcAAgXgXg");
	this.shape_22.setTransform(43.075,-67.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag8A9QgagbAAgiQAAgiAagaQAagaAiAAQAjAAAaAaQAaAaAAAiQAAAigaAbQgaAbgjgBQgiABgagbg");
	this.shape_23.setTransform(43.075,-67.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_18}]},4).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},98).to({state:[]},1).wait(12));

	// Layer_4
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgWAXQgJgKAAgNQAAgNAJgJQAJgKANAAQANAAAKAKQAJAJAAANQAAANgJAKQgKAKgNgBQgNABgJgKg");
	this.shape_24.setTransform(42.75,-67.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgpAqQgRgRAAgZQAAgXARgSQASgSAXAAQAYAAASASQARASAAAXQAAAZgRARQgSARgYAAQgXAAgSgRg");
	this.shape_25.setTransform(42.75,-67.65);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("Ag8A9QgagZABgkQgBgjAagZQAZgZAjgBQAkABAZAZQAaAZgBAjQABAkgaAZQgZAZgkAAQgjAAgZgZg");
	this.shape_26.setTransform(42.75,-67.65);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhPBQQghghAAgvQAAguAhghQAhghAuAAQAvAAAhAhQAhAhAAAuQAAAvghAhQghAhgvAAQguAAghghg");
	this.shape_27.setTransform(42.725,-67.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AhiBjQgpgpAAg6QAAg5ApgpQApgpA5AAQA6AAApApQApApAAA5QAAA6gpApQgpApg6AAQg5AAgpgpg");
	this.shape_28.setTransform(42.725,-67.625);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_29.setTransform(42.725,-67.625);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AiICJQg5g4AAhRQAAhPA5g5QA4g5BQAAQBQAAA5A5QA5A5AABPQAABRg5A4Qg5A5hQAAQhQAAg4g5g");
	this.shape_30.setTransform(42.725,-67.625);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AibCcQhBhBAAhbQAAhbBBhBQBAhABbAAQBcAABABAQBBBBAABbQAABbhBBBQhABBhcAAQhbAAhAhBg");
	this.shape_31.setTransform(42.7,-67.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AivCvQhIhIAAhnQAAhmBIhIQBJhJBmAAQBnAABIBJQBJBIAABmQAABnhJBIQhIBJhnAAQhmAAhJhJg");
	this.shape_32.setTransform(42.7,-67.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AjCDCQhQhQAAhyQAAhxBQhQQBRhRBxAAQByAABRBRQBQBQAABxQAAByhQBQQhRBRhyAAQhxAAhRhRg");
	this.shape_33.setTransform(42.7,-67.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24}]}).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},98).to({state:[]},1).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.3,-95.1,140.5,190.5);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E55219").s().p("AhUBqIAAjTICpAAIAADTg");
	this.shape.setTransform(17.775,-67.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E55219").s().p("AiUBpIAAjSIEpAAIAADTg");
	this.shape_1.setTransform(11.4,-67.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E55219").s().p("AjaBpIAAjSIG1AAIAADTg");
	this.shape_2.setTransform(4.4,-67.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E55219").s().p("AklBpIB7jSIHPAAIAADTg");
	this.shape_3.setTransform(-3.05,-67.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E55219").s().p("Ak/CWICvkrIHPAAIAADSIlXAAIgzBZg");
	this.shape_4.setTransform(-5.65,-62.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E55219").s().p("AlgDQIDxmfIHQAAIAADTIlYAAIh1DMg");
	this.shape_5.setTransform(-8.9875,-57.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E55219").s().p("AmAEIIEyoPIHPAAIAADUIlYAAIi2E7g");
	this.shape_6.setTransform(-12.25,-51.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E55219").s().p("AmbE1IFnppIHQAAIAADUIlYAAIjrGVg");
	this.shape_7.setTransform(-14.8625,-46.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E55219").s().p("AnKGGIHFsLIHQAAIAADTIlYAAIlJI4g");
	this.shape_8.setTransform(-19.575,-38.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E55219").s().p("AnPHBIgTghIH0tgIHRAAIAADUIlYAAIl6KMIATAhg");
	this.shape_9.setTransform(-22.025,-32.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E55219").s().p("AlvIUIhzjJIH0tgIHRAAIAADUIlYAAIl6KNIB0DKg");
	this.shape_10.setTransform(-22.025,-24.4375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E55219").s().p("Aj2J+IjsmbIH0tgIHRAAIAADUIlYAAIl6KNIDrGag");
	this.shape_11.setTransform(-22.025,-14.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E55219").s().p("AniBxIH0tgIHRAAIAADTIlYAAIl6KNIFrJ9IjuADg");
	this.shape_12.setTransform(-22.025,-2.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E55219").s().p("AniAsIH0tgIHRAAIAADTIlYAAIl6KNIG6MGIjuADg");
	this.shape_13.setTransform(-22.025,4.3125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E55219").s().p("AAPNiInxtiIH0thIHRAAIAADUIlYAAIl6KNIFyKEIB6Deg");
	this.shape_14.setTransform(-22.025,8.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E55219").s().p("AAPNiInxtiIH0thIHRAAIAADUIlYAAIl6KNIF4KPIBSAAIBwDTg");
	this.shape_15.setTransform(-22.025,8.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E55219").s().p("AAPNiInxtiIH0thIHRAAIAADUIlYAAIl6KNIF4KPIDKAAIB5DTg");
	this.shape_16.setTransform(-22.025,8.775);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E55219").s().p("AglNiInytiIH1thIHQAAIAADUIlYAAIl6KNIF4KPIFKAAIB6DTg");
	this.shape_17.setTransform(-16.725,8.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},14).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_17}]},82).to({state:[]},1).wait(6));

	// Layer_3
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_18.setTransform(43.1,-67.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgWAXQgKgKAAgNQAAgMAKgKQAKgKAMAAQANAAALAKQAKAKgBAMQABANgKAKQgLALgNgBQgMABgKgLg");
	this.shape_19.setTransform(43.1,-67.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AggAhQgOgPAAgSQAAgSAOgOQAOgOASAAQASAAAPAOQAOAOAAASQAAASgOAPQgPAOgSAAQgSAAgOgOg");
	this.shape_20.setTransform(43.1,-67.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgpAqQgSgSAAgYQAAgXASgSQASgSAXAAQAYAAASASQASASAAAXQAAAYgSASQgSASgYAAQgXAAgSgSg");
	this.shape_21.setTransform(43.075,-67.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgzAzQgWgWAAgdQAAgdAWgVQAXgXAcAAQAdAAAXAXQAWAVAAAdQAAAdgWAWQgXAXgdAAQgcAAgXgXg");
	this.shape_22.setTransform(43.075,-67.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag8A9QgagbAAgiQAAgiAagaQAagaAiAAQAjAAAaAaQAaAaAAAiQAAAigaAbQgaAbgjgBQgiABgagbg");
	this.shape_23.setTransform(43.075,-67.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_18}]},4).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_23}]},104).to({state:[]},1).wait(6));

	// Layer_4
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#E55219").s().p("AgWAXQgJgKAAgNQAAgNAJgJQAJgKANAAQANAAAKAKQAJAJAAANQAAANgJAKQgKAKgNgBQgNABgJgKg");
	this.shape_24.setTransform(42.75,-67.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E55219").s().p("AgpAqQgRgRAAgZQAAgXARgSQASgSAXAAQAYAAASASQARASAAAXQAAAZgRARQgSARgYAAQgXAAgSgRg");
	this.shape_25.setTransform(42.75,-67.65);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#E55219").s().p("Ag8A9QgagZABgkQgBgjAagZQAZgZAjgBQAkABAZAZQAaAZgBAjQABAkgaAZQgZAZgkAAQgjAAgZgZg");
	this.shape_26.setTransform(42.75,-67.65);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#E55219").s().p("AhPBQQghghAAgvQAAguAhghQAhghAuAAQAvAAAhAhQAhAhAAAuQAAAvghAhQghAhgvAAQguAAghghg");
	this.shape_27.setTransform(42.725,-67.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E55219").s().p("AhiBjQgpgpAAg6QAAg5ApgpQApgpA5AAQA6AAApApQApApAAA5QAAA6gpApQgpApg6AAQg5AAgpgpg");
	this.shape_28.setTransform(42.725,-67.625);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E55219").s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_29.setTransform(42.725,-67.625);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#E55219").s().p("AiICJQg5g4AAhRQAAhPA5g5QA4g5BQAAQBQAAA5A5QA5A5AABPQAABRg5A4Qg5A5hQAAQhQAAg4g5g");
	this.shape_30.setTransform(42.725,-67.625);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E55219").s().p("AibCcQhBhBAAhbQAAhbBBhBQBAhABbAAQBcAABABAQBBBBAABbQAABbhBBBQhABBhcAAQhbAAhAhBg");
	this.shape_31.setTransform(42.7,-67.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E55219").s().p("AivCvQhIhIAAhnQAAhmBIhIQBJhJBmAAQBnAABIBJQBJBIAABmQAABnhJBIQhIBJhnAAQhmAAhJhJg");
	this.shape_32.setTransform(42.7,-67.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E55219").s().p("AjCDCQhQhQAAhyQAAhxBQhQQBRhRBxAAQByAABRBRQBQBQAABxQAAByhQBQQhRBRhyAAQhxAAhRhRg");
	this.shape_33.setTransform(42.7,-67.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24}]}).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_33}]},104).to({state:[]},1).wait(6));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.3,-95.1,140.5,190.5);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00818D").s().p("AhUBqIAAjTICpAAIAADTg");
	this.shape.setTransform(17.775,-67.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00818D").s().p("AiUBpIAAjSIEpAAIAADTg");
	this.shape_1.setTransform(11.4,-67.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00818D").s().p("AjaBpIAAjSIG1AAIAADTg");
	this.shape_2.setTransform(4.4,-67.225);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00818D").s().p("AklBpIB7jSIHPAAIAADTg");
	this.shape_3.setTransform(-3.05,-67.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00818D").s().p("Ak/CWICvkrIHPAAIAADSIlXAAIgzBZg");
	this.shape_4.setTransform(-5.65,-62.775);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00818D").s().p("AlgDQIDxmfIHQAAIAADTIlYAAIh1DMg");
	this.shape_5.setTransform(-8.9875,-57.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00818D").s().p("AmAEIIEyoPIHPAAIAADUIlYAAIi2E7g");
	this.shape_6.setTransform(-12.25,-51.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00818D").s().p("AmbE1IFnppIHQAAIAADUIlYAAIjrGVg");
	this.shape_7.setTransform(-14.8625,-46.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00818D").s().p("AnKGGIHFsLIHQAAIAADTIlYAAIlJI4g");
	this.shape_8.setTransform(-19.575,-38.775);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00818D").s().p("AnPHBIgTghIH0tgIHRAAIAADUIlYAAIl6KMIATAhg");
	this.shape_9.setTransform(-22.025,-32.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00818D").s().p("AlvIUIhzjJIH0tgIHRAAIAADUIlYAAIl6KNIB0DKg");
	this.shape_10.setTransform(-22.025,-24.4375);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00818D").s().p("Aj2J+IjsmbIH0tgIHRAAIAADUIlYAAIl6KNIDrGag");
	this.shape_11.setTransform(-22.025,-14.025);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00818D").s().p("AniBxIH0tgIHRAAIAADTIlYAAIl6KNIFrJ9IjuADg");
	this.shape_12.setTransform(-22.025,-2.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00818D").s().p("AniAsIH0tgIHRAAIAADTIlYAAIl6KNIG6MGIjuADg");
	this.shape_13.setTransform(-22.025,4.3125);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00818D").s().p("AAPNiInxtiIH0thIHRAAIAADUIlYAAIl6KNIFyKEIB6Deg");
	this.shape_14.setTransform(-22.025,8.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00818D").s().p("AAPNiInxtiIH0thIHRAAIAADUIlYAAIl6KNIF4KPIBSAAIBwDTg");
	this.shape_15.setTransform(-22.025,8.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00818D").s().p("AAPNiInxtiIH0thIHRAAIAADUIlYAAIl6KNIF4KPIDKAAIB5DTg");
	this.shape_16.setTransform(-22.025,8.775);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00818D").s().p("AglNiInytiIH1thIHQAAIAADUIlYAAIl6KNIF4KPIFKAAIB6DTg");
	this.shape_17.setTransform(-16.725,8.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},14).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).wait(89));

	// Layer_3
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_18.setTransform(43.1,-67.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgWAXQgKgKAAgNQAAgMAKgKQAKgKAMAAQANAAALAKQAKAKgBAMQABANgKAKQgLALgNgBQgMABgKgLg");
	this.shape_19.setTransform(43.1,-67.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AggAhQgOgPAAgSQAAgSAOgOQAOgOASAAQASAAAPAOQAOAOAAASQAAASgOAPQgPAOgSAAQgSAAgOgOg");
	this.shape_20.setTransform(43.1,-67.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgpAqQgSgSAAgYQAAgXASgSQASgSAXAAQAYAAASASQASASAAAXQAAAYgSASQgSASgYAAQgXAAgSgSg");
	this.shape_21.setTransform(43.075,-67.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgzAzQgWgWAAgdQAAgdAWgVQAXgXAcAAQAdAAAXAXQAWAVAAAdQAAAdgWAWQgXAXgdAAQgcAAgXgXg");
	this.shape_22.setTransform(43.075,-67.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("Ag8A9QgagbAAgiQAAgiAagaQAagaAiAAQAjAAAaAaQAaAaAAAiQAAAigaAbQgaAbgjgBQgiABgagbg");
	this.shape_23.setTransform(43.075,-67.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_18}]},4).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).wait(111));

	// Layer_4
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00818D").s().p("AgWAXQgJgKAAgNQAAgNAJgJQAJgKANAAQANAAAKAKQAJAJAAANQAAANgJAKQgKAKgNgBQgNABgJgKg");
	this.shape_24.setTransform(42.75,-67.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00818D").s().p("AgpAqQgRgRAAgZQAAgXARgSQASgSAXAAQAYAAASASQARASAAAXQAAAZgRARQgSARgYAAQgXAAgSgRg");
	this.shape_25.setTransform(42.75,-67.65);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00818D").s().p("Ag8A9QgagZABgkQgBgjAagZQAZgZAjgBQAkABAZAZQAaAZgBAjQABAkgaAZQgZAZgkAAQgjAAgZgZg");
	this.shape_26.setTransform(42.75,-67.65);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00818D").s().p("AhPBQQghghAAgvQAAguAhghQAhghAuAAQAvAAAhAhQAhAhAAAuQAAAvghAhQghAhgvAAQguAAghghg");
	this.shape_27.setTransform(42.725,-67.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00818D").s().p("AhiBjQgpgpAAg6QAAg5ApgpQApgpA5AAQA6AAApApQApApAAA5QAAA6gpApQgpApg6AAQg5AAgpgpg");
	this.shape_28.setTransform(42.725,-67.625);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00818D").s().p("Ah1B2QgxgxAAhFQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxg");
	this.shape_29.setTransform(42.725,-67.625);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00818D").s().p("AiICJQg5g4AAhRQAAhPA5g5QA4g5BQAAQBQAAA5A5QA5A5AABPQAABRg5A4Qg5A5hQAAQhQAAg4g5g");
	this.shape_30.setTransform(42.725,-67.625);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00818D").s().p("AibCcQhBhBAAhbQAAhbBBhBQBAhABbAAQBcAABABAQBBBBAABbQAABbhBBBQhABBhcAAQhbAAhAhBg");
	this.shape_31.setTransform(42.7,-67.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00818D").s().p("AivCvQhIhIAAhnQAAhmBIhIQBJhJBmAAQBnAABIBJQBJBIAABmQAABnhJBIQhIBJhnAAQhmAAhJhJg");
	this.shape_32.setTransform(42.7,-67.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00818D").s().p("AjCDCQhQhQAAhyQAAhxBQhQQBRhRBxAAQByAABRBRQBQBQAABxQAAByhQBQQhRBRhyAAQhxAAhRhRg");
	this.shape_33.setTransform(42.7,-67.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24}]}).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).wait(111));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-70.3,-95.1,140.5,190.5);


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
	this.shape.graphics.f("#BF8D7C").s().p("AvCgkIgLghIebAAIgvCLg");
	this.shape.setTransform(97.375,7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,194.8,14), null);


(lib.Path_23 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#D7EAFF").s().p("AjeBPIAGgUQAWACARAFQgGgYAEgdQAegTArAEQAWABAQAFQgCgKgBgQQgBgfAKgZQBlgCAZBDQAMAggIAiIAUgXQAbgWAnAJQA0AKARA0g");
	this.shape.setTransform(22.325,7.8971);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_23, new cjs.Rectangle(0,0,44.7,15.8), null);


(lib.Path_22 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#D7EAFF").s().p("AkmBcQASg/A+gNQAsgKAeAYQAPAMAHAOQgJgmAOglQAdhLB0AEQBkADAXBQQALAngJAnIAxgIQA4gCAhAfg");
	this.shape.setTransform(29.475,9.1422);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_22, new cjs.Rectangle(0,0,59,18.3), null);


(lib.Path_21 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#D7EAFF").s().p("AmcCAQAvgrBOADQAnABAdAKQgMg3APg3QAghwCNgEQCjgFAoBpQAUAzgNA2IAHgMQAKgOANgKQArgiA9ANQBXASAZBZg");
	this.shape.setTransform(41.275,12.8136);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_21, new cjs.Rectangle(0,0,82.6,25.7), null);


(lib.Path_20 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#D7EAFF").s().p("AljCAQAGgWAHgQQAjADAZAJQgIglAFgrQAvgeBFAGQAiACAZAIQgEgRAAgaQgCg1ASgnQCggDAnBpQAUA0gNA1IAIgMQAJgOAOgKQArgiA+ANQBWATAaBWg");
	this.shape.setTransform(35.575,12.8209);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_20, new cjs.Rectangle(0,0,71.2,25.7), null);


(lib.Path_19 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#3F048E").s().p("ALjIIIgBgKIjVurQgFgVgSgOQgSgPgUAAIzfAAQgBgRALgLQAKgMASAAITnAAQAVAAASAOQASAPAEAVIDUOrQAEAVgLAOQgLAPgUAAg");
	this.shape.setTransform(78.386,52);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_19, new cjs.Rectangle(0,0,156.8,104), null);


(lib.Path_18 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#3F048E").s().p("AjKA8QgVAAgPgPQgOgOAAgVIAAgTQAAgVAOgPQAPgOAVAAIGVAAQAVAAAPAOQAOAPAAAVIAAATQAAAVgOAOQgPAPgVAAg");
	this.shape.setTransform(25.325,6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_18, new cjs.Rectangle(0,0,50.7,12), null);


(lib.Path_17 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#183FB1").s().p("AgZCkQgpgFgggcQgggbgPgrQAdAWAiADQA+AHAxgvQAzguAIhJQAFgvgQgsQAkAaATAtQATAugGAzQgIBJgyAvQgsApg0AAIgQgBg");
	this.shape.setTransform(14.6367,16.4704);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_17, new cjs.Rectangle(0,0,29.3,33), null);


(lib.Path_16 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#183FB1").s().p("AgeC9Qg7gHgugrQgsgqgRhAQAYAlAiAXQAkAXAqAFQBSAJBCg+QBCg9ALhgQAGg0gNgwQAWAjAKAqQAKAsgFAuQgLBghCA+Qg5A2hGAAIgVgBg");
	this.shape.setTransform(19.7083,19.007);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_16, new cjs.Rectangle(0,0,39.4,38), null);


(lib.Path_15 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#183FB1").s().p("AGGEoQgVgCgNgPQgOgQACgVQAEg7gLhKQgWiShLhPQg+hBg5gaQgdgOgrgLIhJgQQgUgFgbgCIgvgDQhlgHhNARQgRAEguAUQgyAXgCAIQAEgPAWgcIAEgCQAugcAtgLQAOgEA7gJQBOgKBUAHQBbAIBNAcQBlAlBBBFQBfBjAcCtQAOBYgGBKIgCALQgIACgGAAg");
	this.shape.setTransform(41.2026,29.6559);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_15, new cjs.Rectangle(0,0,82.4,59.3), null);


(lib.Path_14 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#3F048E").s().p("AFbEGQACgqgNhEQgQhNgehFQhPi3iCgcQhOgRgeAsQgXAiAFBCIgghRQgFAOgNAXQgZAsgkApQAkhoglhUQgTgrhPAFQg7ADhYAeQBrhECvAHQBdAEBoAaQALACAnAEQAsAEAbAEQBLA6A1BEQAzBBAMAzQAeB7gkB4QgNArgNAJQgCACgCAAQgIAAACgeg");
	this.shape.setTransform(40.3017,29.2131);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_14, new cjs.Rectangle(0,0,80.6,58.5), null);


(lib.Path_13 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EF6DC0").s().p("AB2AwQhAh2grh4QgMAiggAtQhBBchhA8Ig3AjQggATgZAKQgwAUgmACQADhDAHhKQAeiABzhKQBqhECJgBQCEgBBmA2QBCAkAfBEQAKAYAgB1QAcBngUCoQgTACgSAAIgCAAQhmAAh/jug");
	this.shape.setTransform(39.3961,28.6485);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_13, new cjs.Rectangle(0,0.1,78.8,57.199999999999996), null);


(lib.Path_12 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FBCAE3").s().p("AgNAIQgGgDAAgEQAAgEAGgEQAGgDAHAAQAIgBAGAEQAGADAAAEQAAAEgGADQgGAEgIAAQgHAAgGgDg");
	this.shape.setTransform(1.9981,1.1219);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_12, new cjs.Rectangle(0,0,4,2.3), null);


(lib.Path_11 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EF6DC0").s().p("AhGBIQgegeAAgqQAAgpAegdQAdgeApAAQAqAAAeAeQAdAdAAApQAAAqgdAeQgeAdgqAAQgpAAgdgdg");
	this.shape.setTransform(10.125,10.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_11, new cjs.Rectangle(0,0,20.3,20.3), null);


(lib.Path_10 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EF6DC0").s().p("Ag/gWQADAKAIAIQARAPAcgEQAbgFAHgUQAEgLgCgKIAUATQAUAUgBAKQAAAHgaAKQgaALgaACIgLAAQg9AAATg+g");
	this.shape.setTransform(6.8533,3.9992);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_10, new cjs.Rectangle(0,0,13.7,8), null);


(lib.Path_8 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#183FB1").s().p("AgTCxQg+gHgng5Qgmg5AIhIQAIhJAygvQAyguA9AHQA/AHAmA4QAnA5gIBIQgIBJgyAvQgsAog0AAIgQAAg");
	this.shape.setTransform(15.2572,17.7496);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_8, new cjs.Rectangle(0,0,30.5,35.5), null);


(lib.Path_7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#183FB1").s().p("AgTCxQg+gHgng5Qgmg5AIhIQAIhJAygvQAyguA9AHQA/AHAmA4QAnA5gIBIQgIBJgyAvQgsAog0AAIgQAAg");
	this.shape.setTransform(15.2572,17.7496);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_7, new cjs.Rectangle(0,0,30.5,35.5), null);


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
	this.shape.graphics.f("#183FB1").s().p("AgeC9Qg7gHgugrQgsgqgRhAQAYAlAiAXQAkAXAqAFQBSAJBCg+QBCg9ALhgQAGg1gNgvQAWAjAKAqQAKAsgFAuQgLBghCA+Qg5A2hGAAIgVgBg");
	this.shape.setTransform(19.7083,19.007);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_6, new cjs.Rectangle(0,0,39.4,38), null);


(lib.Path_5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#3F048E").s().p("AgQAuQgBgLABgIIAEgZIADgOIAFgPQACgGAKgZIADgEIAGAWIgJATIgGAOIgDAMIgGAXQgCAGgBANQgCAQgBAAQgCAAgBgRg");
	this.shape.setTransform(1.725,6.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_5, new cjs.Rectangle(0,0,3.5,12.6), null);


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
	this.shape.graphics.f("#EF6DC0").s().p("AjKA7IAKg+QAEgKARgOQAXgSAhgOQAHArAaAUQAhAbA9gKQBVgNAQg4QAlAbAeAqQAPAWAIAQg");
	this.shape.setTransform(20.325,5.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_4, new cjs.Rectangle(0,0,40.7,11.9), null);


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
	this.shape.graphics.f("#FAC627").s().p("AgEBSIgLg1QgYAcgeAZQg9AyghgLQgQgGgHgNQAehaAohQQAbg5AXggQBLAFBnAaQARAEAkgJQAOAMAHAKQhUB+hACNQgbgTgPg5g");
	this.shape.setTransform(18.65,15.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(0,0,37.3,31.7), null);


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
	this.shape.graphics.f("#183FB1").s().p("AgJBqQgKgYgGgfIgFgaQgXAcgfAZQg8AyghgLQglgNAJg3QAGgrAnhaQAWgxAkgdQBRACB3AeQAPAEAegHIA5gRQAGAMABAOQAGBJgmBWQgpBdg8AdQgNAGgMAAQgjAAgXg5g");
	this.shape.setTransform(20.7795,16.3203);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,41.6,32.7), null);


(lib.Path_1_5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#183FB1").s().p("AgTCxQg+gHgng5Qgmg5AIhIQAIhJAygvQAyguA+AHQA+AHAnA4QAmA5gIBIQgIBJgyAvQgsAog0AAIgQAAg");
	this.shape.setTransform(15.275,17.7496);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_5, new cjs.Rectangle(0,0,30.6,35.5), null);


(lib.Path_1_4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FBCAE3").s().p("AgBALQgIgCgFgEQgFgEAAgEQABgFAHgCQAGgCAHACQAIACAGAFQAFADgBAFQgBAEgHACIgHABIgGgBg");
	this.shape.setTransform(1.9811,1.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_4, new cjs.Rectangle(0,0,4,2.4), null);


(lib.Path_1_3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#EF6DC0").s().p("AhGBIQgegeAAgqQAAgpAegdQAdgeApAAQAqAAAeAeQAdAdAAApQAAAqgdAeQgeAdgqAAQgpAAgdgdg");
	this.shape.setTransform(10.125,10.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_3, new cjs.Rectangle(0,0,20.3,20.3), null);


(lib.Path_1_2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#183FB1").s().p("AAIBUQhdgygggkQgZgcAggwQARgZAVgSQAGgKAXAYQALAMAKAOIgtA2QgGAIBtBBQBsBBgRALQgFADgIAAQgdAAhNgpg");
	this.shape.setTransform(12.8721,12.5388);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_2, new cjs.Rectangle(0,0.1,25.8,25), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F048E").s().p("ACyI1QgVgJgXgEQgvgNhcAeQhiAfgrgFQg+gIgxggQgxghgdg3QgWgngJg7IgKhnQgHhNABhSQAAgrAFiEQAEhtgBhCQgCg7ABghQACg0AHgoQABgHAMgbIASgsQAUgHAmgCQArgDATgEQAXgGBDgmQA5ghAiAAQBgAAA/BOQA0BAAWBoQAQBPgUBgQgJAuglBvQgdBYgBApQgBA9AuAgQAJAHAKASQALAWAGAHQASAUAhAbIA2AsIAuAmQAWAWAGAdQAHAagEAbQgDAdgNAXIgHAJQgaAkgmANQg7gJg6gZg");
	this.shape.setTransform(38.3304,59.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_1, new cjs.Rectangle(0,0,76.7,119.9), null);


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

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Path_1_6 = function(mode,startPosition,loop,reversed) {
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
	this.shape_1.graphics.f("#D7EAFF").s().p("A9yKQQgPgNgRgRQAHizBPivQCGkmFHhKQBpgXCMgEICqgDQBugMBzhYQBqhRCujEQCXirDcAWQCXAQENCDQCwBXCVAEQAyABA0gNQAlgKA4gWIA+gZQAkgOAdgIQCsgwCkAWQCoAWCVBeQD0CZA5ExQAvD2hME8QgdAfgZAUg");
	this.shape_1.setTransform(193.8826,65.5493);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1_6, new cjs.Rectangle(0,0,387.8,131.1), null);


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
	this.shape.graphics.f("#7583FF").s().p("AjUIvQjAAJhfhBQhRg3gRhxQgNhRATiRQAbjKACgbQACgyAJgwQAHAhAWgJQApgPAkgwIA3hUQACARgHAhQgIAkAAAOQABBHAlAZQAmAZAzgGQAdgDA9gOQAsgHA8ANQAiAIBCASQAuALAwgOQAxgOAfgiQAggjAVg/IgGAKIAXhEQgIAggJAaQAHgJAHgGQAJAVgDAuIgEBFIAAHDIABAEQgUgBggABQhBADg+ALQhHAOAOA1QAOAzBHAYQAlAMA8ACQBEADA9gNQCjghAYhyQAYhxgFkwQgGk1gdilQAmBhATCcQACATARDSIAMCCQAJBugCBSQgDD8hdAeQhqAik+AEIhYABQhtAAhigEg");
	this.shape.setTransform(60.3877,56.2536);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0.1,0,120.60000000000001,112.5), null);


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
	this.shape.graphics.f("#D7EAFF").s().p("AvkLAQjSgVjWjSQg3g1h3iFQhsh5g+g4QglghghgbQCZirESgoQBVgMBzgCQB8gBAQgCQBtgLB0hZQBphRCujEQCYiqDcAWQCXAPENCEQCwBWCUAEQAyACA1gOQAlgJA4gXQBbgkAjgKQCsgwCkAVQCpAXCVBdQD+ChA0FFQhdBFheA1QjPBzi/gLQiwgKjWh5QiphgidgpQiwgviwAOQi0APiKBvQhoBUh7C1Qh/C9iKBaQiNBdilAAQgfAAgfgDg");
	this.shape.setTransform(183.475,70.6853);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,367,141.4), null);


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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7583FF").s().p("AkrD5IHwnxIBmHFQAEASgKANQgJANgSAAg");
	this.shape.setTransform(108.6821,67.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7583FF").s().p("Al/FyILkrjIAbB6IppJpg");
	this.shape_1.setTransform(87.225,54.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7583FF").s().p("AnVBYIIBoAIGqAAItSNRg");
	this.shape_2.setTransform(59.4,42.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7583FF").s().p("AiQhLQgFgSAJgNQAKgNASAAIEDAAIjwDvg");
	this.shape_3.setTransform(14.6638,12);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,138.7,92), null);


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
	this.shape.graphics.f("#183FB1").s().p("AF1E5QgUgCgOgPQgNgQABgVQAEg7gLhKQgWiShLhPQg9hBg5gaQgdgOgrgLIhKgQQgUgFgbgCIgvgDQhkgHhOARQgQAEguAUQgyAWgDAJQAFgQAWgbQAVgaAQgJQAugdAtgLQAQgEA5gIQBKgKBYAHQBbAIBNAcQBlAkBBBFQBfBkAbCtQAOBXgFBLQgCAUgOANQgPANgTAAg");
	this.shape.setTransform(42.8526,31.2938);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,85.7,62.6), null);


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
	this.shape.graphics.f("#7583FF").s().p("AgTCrIgJgFIgLgIQgMgKgJgSQgIgSgCgUQgEghAIgoIAJgfQAEgNAJgSQARgkATgbQAYgiAagSQAKgIALgEQAIgDABABIgIAFQgKAGgIAIQgWASgYAjQgQAagQAlQgHASgEAMIgDAHIgGAWQgKAjACAiQABATAHARQAHARAKAKQAHAIAKAGIAIAGIgBAAIgIgDg");
	this.shape.setTransform(21.9217,17.3489);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7583FF").s().p("AgfDCQgNgBgMgKQgOgLgHgWQgGgTgBgZQgCgmAJgtIAOgtIAMgYIAUgiIATgbIA0g2IAOgMQAegVACABQAAABgcAYIgUATIgpAxIgSAbIgSAhIgVA0IgEAOQgKArAAAlQAAAZAFAQQAFAVAMALQAJAJANADIAKACQAAAAgBAAQAAAAAAABQgBAAgBAAQgBAAgBAAIgGAAg");
	this.shape_1.setTransform(8.5822,23.7368);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,29.2,43.2), null);


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
	this.shape.graphics.f("#7583FF").s().p("AAUB0Qgag5gihUQgIgfgDgYQgEgnAEgZIADgVQACgHABAAIgBAcQAAAZAFAlQAFAdALAfIATA1QAIAWAQAkIAaA5QALAbgBAAIAAAAQgDAAgfg5g");
	this.shape.setTransform(5.429,17.3269);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7583FF").s().p("ACJDwIgIghQgEgQgMgeQgNgZgPgXQgZglgogsIg+hHQgngugWgoQgPgagJgZQgJghgBgQIgCgbIAEAAIADAbQAEAUAJAaQAJAXAQAaQAVAjAqAvIA9BHQApAwAXAlQAQAZAKAZQALAcAEATIAFAjIgBANIgCgNg");
	this.shape_1.setTransform(33.575,27.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7583FF").s().p("ACZEIIgegXQgogfgtgtQgogogkgtIgng1QgLgPgJgQQggg3gQgwQgVg8ADg1IACgVIADgQQADgOABAAIgBAPQgDATABARQAAA0AWA5QARAvAhA1QAPAXAFAHIAQAXIAWAeQAhAsAnAqQAkAmAtApIAdAZIAKAKIAAAAIgMgIg");
	this.shape_2.setTransform(25.6875,30.1765);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_0, new cjs.Rectangle(0,0,47.6,57.4), null);


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
	this.shape.graphics.f("#183FB1").s().p("AgmF3IgDguIgLiJQgHhbAAgxQAAgdACgRIAFg1QACgRADgJQAJgqAHgVQAIgWAWgtIAfhDQAPgkAGgYQAFgVABgXIABgSIACASIAAATIgEAaQgEAZgOAmIgeBDQgSAogJAcQgGARgJAsIgEAZIgFA0QgCAUAAAZQgCA4AFBTIAHCKQABAdgBARIgBARQgBAAgBgRg");
	this.shape.setTransform(4.9733,39.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#183FB1").s().p("AABFnIgHmjIAGijIgChdIgCgZIgDgSIgBgQIAEAQQAGAiABAIIAGCBIgDCBIgCGiIgBARIgCgRg");
	this.shape_1.setTransform(71.47,47.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#183FB1").s().p("AikAaQAAgBAZgHICjgoQAggEAaABQAiABAZAIIASAHQAGADAAABIgagFQgXgGgiABQgYABggAFIhrAVIg5AMIgYADIgCgBg");
	this.shape_2.setTransform(55.7495,86.6355);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#183FB1").s().p("ABVAuQgIgLgUgSQgLgJgVgNIgQgIQgXgPgbgLQgOgHgXgHQgRgFAAgBQAAgCASADQAVADATAGQAcAIAaAPIAQAKQAUAPALALQATATAGAOQAJAPgCACIgLgOg");
	this.shape_3.setTransform(38.8932,92.2056);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(-1,0,73.4,98.3), null);


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
	this.shape.graphics.f("#7583FF").s().p("ACzE5QgdgUgTgJQgSgKgqgOQgxgRgWgJQgngSgXgYIgNgNIgKgPIgIgOIgGgOIgJgZIgHgmQgDgaACgnIADhAQADgvAAgcQgBgrgHgeQgHgggQgcQgMgTgQgRIgMgNIAOALQARAPANAUQATAbAIAiQAJAgABArQABAegCAtIgCBAQAAAmADAZIAAAFIACAMIAEATIAHAYIAGANIAHANIAJAOIALAMQAYAYAjARQARAIA0AUQApAQASALQAQAIAHAFIAQAMIALAKg");
	this.shape.setTransform(23.599,107.8489);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7583FF").s().p("AHKIzQAEgLAEgQQAEgZgCgTQgDgbgOgbQgYgxhDg7QghgchihJQgtgigVgSQgnghgSgbQgog4gUhMIgHgeIgViUQgJhHgFgdQgNhLgfg6QgZgsgUgWQgdgggjgSQgmgSgpgCQgmgBgoALQhCASgxA8QgTAXgLAZQgLAYgEARQgFAYAAAOIgBgKIABgMIACgQQADgQALgbQAMgaARgXQAWgcAbgUQAigZAjgKQApgMAoABQAtABAlATQAlARAfAiQAVAXAaAtQAgA5APBPQAIAmAIA/IAJBNIAGAsIALA4QATBKAmA1QAQAZAmAiQAVASAtAiQBfBJAiAfQBEA9AYAzQAOAeACAaQABAPgFAdQgHAWgDAFIgFAJIAEgJg");
	this.shape_1.setTransform(47.2923,57.224);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7583FF").s().p("ACYJWIAIgCIATgJQAUgPANgVQAPgYAEgfQAEgigKgfQgIgcgcgfQgUgXgigZQgogdgTgQQghgagTgZQgUgXgMglIgJgfIgFgdQgEgpAKgyIAHghIAJghQAQgyAKgjQAJgdAFgcQAHgpABgYQADhLgThDQgLglgQgeQgRgegXgbQgSgWgggUQgbgRgagHQgcgIgVADQgTADgOANQgJAJgGALIgEAHIACgIQAJgPAGgGQANgOAWgEQAWgFAdAIQAZAHAeARQAgATAUAXQAaAcAQAfQARAfAMAlQAVBDgDBOQAAAcgHAnQgEAbgJAgQgKAkgQAxIgQBBQgKAvAEAoIAEAcIAHAdQANAjARAWQASAXAgAaIA6AtQAkAdATAWQAcAfAJAgQAKAhgFAjQgFAggQAZQgOAXgWANIgKAFIgKAEIgBABg");
	this.shape_2.setTransform(34.0548,81.169);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,94.6,141.2), null);


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
	this.instance = new lib.Symbol29();
	this.instance.setTransform(0,0,0.1531,0.1531);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({scaleX:0.3355,scaleY:0.3355,alpha:1},9).to({scaleX:1.4303,scaleY:1.4303},54).to({scaleX:1.6127,scaleY:1.6127,alpha:0},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-167,-100.2,334,200.5);


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

	// Layer_2
	this.instance = new lib.Symbol33();
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:2.1912,scaleY:2.1912,y:0.7,alpha:1},6).to({scaleX:8.9416,scaleY:8.9416,y:4.7},34).to({regY:0.5,scaleX:10.7285,scaleY:10.7285,y:5.8,alpha:0},9).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-201.1,-124.5,402.29999999999995,252.3);


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
	this.instance = new lib.Symbol34();
	this.instance.setTransform(0,0,0.2524,0.2524);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.4382,scaleY:0.4382,alpha:1},11).to({scaleX:1.5699,scaleY:1.5699},67).to({scaleX:1.7388,scaleY:1.7388,alpha:0},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-188.7,-91.9,377.5,183.8);


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
	this.instance = new lib.Group();
	this.instance.setTransform(7.85,4.85,1,1,0,0,0,47.3,70.5);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Path_5();
	this.instance_1.setTransform(-51.85,-55.25,1,1,0,0,0,1.7,6.3);
	this.instance_1.alpha = 0.5;
	this.instance_1.compositeOperation = "multiply";

	this.instance_2 = new lib.Path_1_1();
	this.instance_2.setTransform(-19.8,15.4,1,1,0,0,0,38.3,59.9);
	this.instance_2.alpha = 0.5;
	this.instance_2.compositeOperation = "multiply";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F048E").s().p("AgTLPQhCgdhfAeQhAAVgOADQguALgogFQg+gIgxghQgxghgdg2QgWgogJg7IgKhnQgHhMABhSQAAgsAFiFQAEhrgBhDQgCg6ABgiQACgzAHgoQACgHATgtQARgqgBgFQgShJAfhPQA+ifD1gdQB8gOBbAsQgVgOgMgFQgggOgigHQhAgOhBAFIgrAFIgLACIgFABIgPADQgWAEgUAGQhBASgwAoQgZATgVAfQgNAWgCAGIgFANIgFANIgFAYQgCAGgBAMQgDARgBAAQgBAAgBgRQgBgLABgIIADgaIADgOIAFgPQACgGAMgZQATghAbgYQAyguBFgWQARgHAagGIAWgEIAggEIAZgBQBFgDBDASQAmALAfAQQAcAQAWAWIARAUIAAABQA7ApAkBBQAlBDAJBXIAOCKQALBOAbA3QASASAXAUQAcAYArAeIBAAtQAZATATAPIAgAfIARATIATAaIATAiIARApQAPAwgBAsQgBAtgPAvIgFAQQgEBdg2BaQg2BbhMAlQhhAwhjADIgNAAQhdAAhZgogAGkBwQBaBqAiBSQAJAUADAWQAEgdAAgXQgBgqgQgrIgUgtIgPgWIgSgYIgQgRIgOgPIg6gwIg6gsQgngdgbgZQAZAlB1CLg");
	this.shape.setTransform(0.0007,-0.0054);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(-58.1,-75.9,116.2,151.8), null);


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
	this.instance = new lib.Path_4();
	this.instance.setTransform(0,0.45,1,1,0,0,0,20.3,6);
	this.instance.alpha = 0.25;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF6DC0").s().p("Ag4AhQADgOAHgMQAHgMALgJIAHgGIADgCIAMgGQAJgEAQgEQAmgKABACQAAADgkAPIgWALIgNAHIgHAEQgJAGgIAKQgHAIgGAOIgGALQgCAAACgMg");
	this.shape.setTransform(-2.5941,3.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EF6DC0").s().p("AhCA2QgCgCAYglIATgYIAMgOIAIgGQAPgMAMgFQARgHAOAAQAPABAAACIgOADQgMACgPAIQgTALgNARIgKAJIgUAVQgcAhgDAAIAAAAg");
	this.shape_1.setTransform(-10.5575,0.6532);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBCAE3").s().p("AjKBIIAKg/QAIgUArgXQA7ggBUgEQBRgFBEBKQAiAjASAmg");
	this.shape_2.setTransform(0.025,-0.813);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(-20.3,-8,40.7,16.1), null);


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
	this.instance = new lib.Symbol23();
	this.instance.setTransform(19.6,5.7,1,1,0,0,0,19.6,5.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:11.2167,x:17.25,y:10.55},6).to({rotation:0,x:19.6,y:5.7},5).to({y:10},8).to({y:5.7},8).to({x:14.8},9).to({x:19.6},5).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.1,-10.6,45.7,23);


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
	this.instance = new lib.Path();
	this.instance.setTransform(1.4,-97.35,1,1,0,0,0,183.5,70.7);
	this.instance.alpha = 0.5;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.Path_1_6();
	this.instance_1.setTransform(1.15,102.45,1,1,0,0,0,193.8,65.5);
	this.instance_1.compositeOperation = "multiply";

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D7EAFF").s().p("A9maRQhIg/gnhNQg8h1AGiFQAGh8A/h7QAVgrAqg1IBLhcQBchzAPhXQAOhTgRheQgQhZgnhRQg+h7ghhJQg8iDgchwQhQk/CIktQCGknFHhKQBpgXCMgEICqgDQBugMBzhYQBqhRCujEQCXirDcAWQCYAQEMCDQCwBXCVAEQAyABA0gNQAlgKA4gWIA+gZQAkgOAdgIQCsgwCkAWQCoAWCVBeQEYCwAiF1QAbEhh2FfQhWD+BJECQAwCsCNDfQA0BSAhCDQAjCMgBCQQgCFljQCrg");
	this.shape.setTransform(0.0196,-0.0007);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-206,-168,412.1,336.1), null);


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
	this.shape.graphics.f("#FFFFFF").s().p("AAdgUQghAUgYAWQATggAmgKg");
	this.shape.setTransform(-160.825,-151.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhWBjQhJgEgPgnQgNghAlgrQAkgsBEgiIAJABQhFAiglArQgmAqAMAgQAGANAMAJQAeAVA9gDQA+gDBFgbQA6gWAsggIAFADQgsAhg9AXQhOAehDAAIgOAAg");
	this.shape_1.setTransform(-145.5957,-143.8584);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgyAYQA2gWAtgZIACAJQgoAWgmAQg");
	this.shape_2.setTransform(-129.45,-134.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAAeIgDgHQgIgUADgVIAKgMQgGAcAIAWIAGAKg");
	this.shape_3.setTransform(-177.1179,-134.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhaAnQAegHAhgNQBAgYAzgiIADAHQg2Ahg9AZIgoANg");
	this.shape_4.setTransform(-134.325,-135.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag9BJQgygDgLgbQgLgcAkghQAegfA2gXIAFACQg3AWggAgQghAhAJAZQAEAJAIAGQAQALAeABQAxADA5gXQAsgRAggZIACAAIACABQghAbguARQg0AVgtAAIgKAAg");
	this.shape_5.setTransform(-144.0948,-145.163);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAJApQgRgMgIgTQgJgXAIgbIAIAAQgJAbAJATQAGATARAMIAIAEg");
	this.shape_6.setTransform(-169.4814,-136.05);

	this.instance = new lib.Path_23();
	this.instance.setTransform(-158.15,-139.8,1,1,0,0,0,22.3,7.9);
	this.instance.compositeOperation = "multiply";

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D7EAFF").s().p("AkZBuQAThKBGgIQAjgEAfALQgIgjAKgjQAUhHBZgDQBogDAZBDQANAhgIAhQAGgMAOgKQAbgVAnAIQA4AMAPA5QAIAdgEAag");
	this.shape_7.setTransform(-152.2943,-142.9314);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhkBJQBMhNB2hEIAHALQhtA+hJBIg");
	this.shape_8.setTransform(-128.55,182.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AjfBoQBdhbCRg7QBsgsBjgNIACAKQhlANhoArQiLA5haBUg");
	this.shape_9.setTransform(-103.425,179.45);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhjA0QBRhEBmg7QALAEAHAFQh3BDhUBLQAAgMACgMg");
	this.shape_10.setTransform(-132.525,178.95);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AiPArQA5gdA5gXQBNggBKgWQAQAGAKAEQhYAYhTAjQg/Aag9AfQABgLADgJg");
	this.shape_11.setTransform(-103.825,163.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AitA6QBFgnBGgbQBmgrBhgVIAJAMQhpAXhiAoQhNAghBAmIgCgPg");
	this.shape_12.setTransform(-101.175,169.025);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgMAQQAMgQAJgPIAEALIgOAUg");
	this.shape_13.setTransform(-59.85,188.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AisBFQA+g4BfgnQBmgqBVAAIAAAGQhXABhhApQhYAjg+A2g");
	this.shape_14.setTransform(-98.1,182.925);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AACA/QAkgygPgiQgMgdgsgMIAWAAQAJAEAGAFQASAMAHASQAPAkgiAyg");
	this.shape_15.setTransform(-71.4704,183.5625);

	this.instance_1 = new lib.Path_22();
	this.instance_1.setTransform(-105.1,180.75,1,1,0,0,0,29.4,9.2);
	this.instance_1.compositeOperation = "multiply";

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D7EAFF").s().p("AmmCmQgFgoALgsQAXhWBVgSQA7gMApAgQAVAPAIATQgMgzATgyQAnhlCcAFQCIAEAeBrQAPA2gMA0IAegIQAlgGAgAEQBqAMAcBwg");
	this.shape_16.setTransform(-100.364,173.2132);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABzBnQhnhmiZhXIAKgQQCmBfBrBug");
	this.shape_17.setTransform(160.475,178.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AEnCSQh9h2jDhQQiVg+iLgRIADgOQCOATCUA9QBlAqBYA3QBUA2A9A8g");
	this.shape_18.setTransform(125.275,173.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AiPhdQANgIAMgEQCTBTBwBfIACAhQh5hqilhdg");
	this.shape_19.setTransform(166.05,173.225);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAhAIQh1gwh6giQASgIASgGQBrAgBpArQBWAjBKAmIAFAdQhTgshbglg");
	this.shape_20.setTransform(125.875,152.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AApAEQiKg4iSghIAOgQQCMAgCKA5QBrAsBYAyIgDAUQhfg3hpgrg");
	this.shape_21.setTransform(122.15,159.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AACAWIgTgcIAFgPQAMAVASAWg");
	this.shape_22.setTransform(64.275,186.325);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ADjBhQhThKh9gzQiLg6h4gBIgBgJQB7ABCMA6QCFA2BXBQg");
	this.shape_23.setTransform(117.825,178.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgNBYQgwhFAVg0QALgYAZgSQAKgHAMgFIAdAAQg9AQgRAqQgVAwAzBFg");
	this.shape_24.setTransform(80.5304,179.7375);

	this.instance_2 = new lib.Path_21();
	this.instance_2.setTransform(127.45,175.7,1,1,0,0,0,41.2,12.8);
	this.instance_2.compositeOperation = "multiply";

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D7EAFF").s().p("ApSDpQAnidCUgRQBJgJBCAXQgRhJAVhMQAriWC9gGQDcgHA2COQAbBGgRBHQAMgaAdgVQA5gtBSARQB3AZAgB6QARA9gIA4g");
	this.shape_25.setTransform(121.0056,165.2107);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AAvghQg0AggpAjQAegxA/gSg");
	this.shape_26.setTransform(-108.425,-185.475);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AiICdQh0gGgYg+QgVg1A7hFQA5hFBsg3IAOACQhtA1g8BEQg8BEAUAzQAIAVAUAOQAwAiBhgFQBigFBugqQBeglBFgyIAGAFQhGA0hgAmQh7AwhqAAIgXgBg");
	this.shape_27.setTransform(-84.2774,-173.7947);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhQAnQBTgjBLgqIADAPQg+Ajg+Abg");
	this.shape_28.setTransform(-58.65,-158.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAAAxIgGgNQgMgfAFgjQAJgKAIgHQgLArAOAjIAIASg");
	this.shape_29.setTransform(-134.2864,-159.65);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AiPA/QAygOAxgTQBlgnBSg1IAFALQhWA2hhAmQgjANgcAJg");
	this.shape_30.setTransform(-66.35,-161.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AhiB0QhQgEgRgrQgIgVALgaQAKgYAbgcQAzgyBTgjIAHADQhWAkgzAzQg2A1AQAnQAFAOAOAKQAYARAwACQBNAEBcgkQBHgbAxgnIAIABQg2ArhIAbQhSAhhJAAIgQAAg");
	this.shape_31.setTransform(-81.848,-175.9055);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAOBCQgdgWgLgdQgOgjANgsIAMgBQgOArAOAhQALAcAbAUIALAHg");
	this.shape_32.setTransform(-122.188,-161.425);

	this.instance_3 = new lib.Path_20();
	this.instance_3.setTransform(-103.95,-167.65,1,1,0,0,0,35.6,12.8);
	this.instance_3.compositeOperation = "multiply";

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D7EAFF").s().p("Am+CvQAeh2BugNQA4gGAxARQgMg3APg5QAghxCOgEQClgFApBqQAUA2gNA1IAIgMQAJgOAOgKQArgiA+ANQBZATAYBbQANAugGAqg");
	this.shape_33.setTransform(-94.8777,-172.3135);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").p("ABfAQIAAgfIgXAAQgEgMgGgLIAQgRIgVgWIgRARQgKgHgOgDIAAgYIgeAAIAAAYQgNACgLAHIgRgQIgWAWIAQARQgHALgCAMIgYAAIAAAfIAYAAQACAMAHALIgQARIAWAWIAQgRQAMAHANADIAAAYIAdAAIAAgYQAOgDALgHIAQARIAWgWIgQgRQAGgLAEgMgAAAAqQgQAAgNgNQgMgLAAgSQAAgQAMgMQANgNAQAAQASAAAMANQAMAMAAAQQAAASgMAMQgMAMgSAAg");
	this.shape_34.setTransform(-129.8,30.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").p("AAABCQgbAAgSgUQgUgSAAgcQAAgbAUgTQASgTAbAAQAcAAATATQATATAAAbQAAAcgTASQgTAUgcAAgACWAZIAAgxIglAAQgFgVgLgQIAbgbIgjgjIgbAbQgQgLgVgFIAAglIgxAAIAAAlQgUAFgRALIgagbIgjAjIAaAbQgLARgFAUIglAAIAAAwIAlAAQAFAVALARIgaAaIAjAjIAagaQARALAUAFIAAAlIAxAAIAAglQAUgFARgLIAbAaIAjgjIgbgaQALgSAFgTg");
	this.shape_35.setTransform(-138.25,-4.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.instance_3},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.instance_2},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.instance_1},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.instance},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-180.4,-189.8,360.9,379.70000000000005), null);


(lib.Symbol14copy = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.Symbol17();
	this.instance.setTransform(97.35,-90.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({scaleX:1.4792,scaleY:1.4792},9).to({scaleX:1,scaleY:1},15).wait(37));

	// Layer_5
	this.instance_1 = new lib.Symbol16();
	this.instance_1.setTransform(0,-187.75);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(38).to({scaleX:1.3834,scaleY:1.3834},9).to({scaleX:1,scaleY:1},15).wait(18));

	// Layer_4
	this.instance_2 = new lib.Symbol15();
	this.instance_2.setTransform(-97.4,-111.25);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:1.4153,scaleY:1.4153},9).to({scaleX:1,scaleY:1},15).wait(56));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB59B").s().p("ArZAaQgLAAgIgIQgHgHAAgLQAAgKAHgIQAIgHALAAIWzAAQALAAAIAHQAHAIAAAKQAAALgHAHQgIAIgLAAg");
	this.shape.setTransform(-17.425,168.6);

	this.instance_3 = new lib.Path_1();
	this.instance_3.setTransform(0,184.3,1,1,0,0,0,97.4,7);
	this.instance_3.compositeOperation = "multiply";

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6663A").s().p("AtCDRIiLmhIebAAIiLGhg");
	this.shape_1.setTransform(-0.025,198.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E6663A").s().p("AvNBFQgdABgUgVQgUgUAAgdQAAgcAUgUQAUgVAdABIebAAQAdgBAUAVQAUAUAAAcQAAAdgUAUQgUAVgdgBg");
	this.shape_2.setTransform(-0.025,170.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#693618").s().p("ApNBhQj1goAAg5QAAg4D1goQD1gpFYAAQFZAAD1ApQD1AoAAA4QAAA5j1AoQj0AplaAAQlZAAj0gpg");
	this.shape_3.setTransform(-0.025,166.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#65D436").s().p("AgFWpQgDgDAAgDMAAAgtFQAAgEADgCQACgCADgBQAJABAAAIMAAAAtFQAAADgDADQgDADgDAAQgDAAgCgDg");
	this.shape_4.setTransform(1.725,-1.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#008A2E").s().p("AAAAMQgVAAgNARIAAg6IBFAAIAAA6QgNgRgWAAg");
	this.shape_5.setTransform(-0.025,-155.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#41A62A").s().p("AgiZRMAAAgyhIBFAAMAAAAyhg");
	this.shape_6.setTransform(-0.025,3.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#65D436").s().p("AjQAlQgDgCABgDQAAgFADgCQAogeAxgSQAxgRA0AAIDcAAQAEAAACADQADACAAAEQAAADgDADQgCADgEAAIjcAAQhlgBhOA+QgDACgDAAQgEAAgCgEg");
	this.shape_7.setTransform(38.3458,-120.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#008A2E").s().p("Ak4ClQAAhIAzgyQAzgzBJAAIEVAAQBDAAAygtQAxgsAHhDQgHCKhlBfQhkBgiKAAg");
	this.shape_8.setTransform(32.95,-110.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#41A62A").s().p("Ak4CuQAAiQBmhlQBmhmCPAAIEWAAQAACQhmBlQhlBmiPAAg");
	this.shape_9.setTransform(33,-111.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#65D436").s().p("ADFAnQhPg9hkgBIjcAAQgEAAgCgCQgDgDAAgDQAAgDADgDQACgDAEAAIDcAAQAzAAAyARQAxASAoAfQAHAEgGAIQgCADgEAAQgDAAgDgCg");
	this.shape_10.setTransform(-38.379,-141.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#008A2E").s().p("AAiClQiKAAhlhgQhkhfgGiKQAGBCAyAtQAxAtBEAAIEVAAQBIAAAyAyQAzAzAABIg");
	this.shape_11.setTransform(-33.1,-131.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#41A62A").s().p("AAjCuQiQAAhlhmQhmhlAAiQIEWAAQCPAABmBmQBmBlAACQg");
	this.shape_12.setTransform(-33.05,-132.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#65D436").s().p("AjQAlQgDgCABgDQAAgFADgCQAogfAxgRQAxgRA0AAIDcAAQAJAAAAAJQAAAIgJAAIjcAAQhkAAhPA+QgDACgDAAQgEAAgCgEg");
	this.shape_13.setTransform(38.3458,5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#008A2E").s().p("Ak4ClQAAhIAzgzQAzgyBJAAIEVAAQBDAAAygtQAxgtAHhCQgHCLhlBeQhkBgiKAAg");
	this.shape_14.setTransform(32.95,14.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#41A62A").s().p("Ak4CuQAAiQBmhlQBmhmCPAAIEWAAQAACQhmBlQhlBmiPAAg");
	this.shape_15.setTransform(33,13.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#008A2E").s().p("AAiClQiKAAhkhgQhlhfgGiKQAGBDAyAsQAxAtBEAAIEVAAQBIAAAyAyQAzAzAABIg");
	this.shape_16.setTransform(-33,77.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#65D436").s().p("ADFAnQhPg+hkAAIjcAAQgJAAAAgIQAAgEADgCQACgDAEAAIDcAAQA0AAAxARQAxASAoAfQADACAAADQABAEgDADQgCADgEAAQgDAAgDgCg");
	this.shape_17.setTransform(-38.3958,67.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#41A62A").s().p("AAjCuQiQAAhlhmQhmhlAAiQIEWAAQCPAABmBmQBmBlAACQg");
	this.shape_18.setTransform(-33.05,76.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#65D436").s().p("AnIJSQgDgCAAgEQAAgEADgCQAmgoAxgWQAzgVA3AAIGjAAQB2AABUhUQBVhUAAh3IAAsfQAAgDACgDQADgDAEAAQADAAACADQADADAAADIAAMfQAAB+hZBZQhZBZh+AAImjAAQg0AAgvAUQgvAUgjAmQgDADgEAAQgCAAgDgDg");
	this.shape_19.setTransform(53.95,10.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#008A2E").s().p("AAAAMQgVAAgNASIAAg7IBFAAIAAA7QgNgSgWAAg");
	this.shape_20.setTransform(97.35,-57.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#41A62A").s().p("AoJPWIAAnoQAAiBBbhbQBchbCAAAIGlAAQBkAABGhHQBHhGAAhjIAAucIBGAAIAAOcQAAB/hbBcQhcBaiAABImlAAQhjgBhHBIQhHBHAABjIAAHog");
	this.shape_21.setTransform(48.675,37.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#65D436").s().p("ADFAnQhNg+hlAAIjdAAQgDAAgDgCQgDgDAAgEQAAgDADgCQADgDADAAIDdAAQBqAABTBCQADACAAADQABAEgCACQgDAEgEAAQgEAAgCgCg");
	this.shape_22.setTransform(58.955,-50.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#008A2E").s().p("AAjClQiKAAhlhgQhlhfgHiKQAIBDAxAtQAxAsBEABIEUAAQBJAAAyAyQA0AyAABIg");
	this.shape_23.setTransform(64.35,-40.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#41A62A").s().p("AAjCuQiPAAhmhmQhmhlAAiQIEXAAQCOAABnBmQBlBlAACQg");
	this.shape_24.setTransform(64.3,-41.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#65D436").s().p("AjRAmQgCgDABgEQAAgDADgDQBThBBqAAIDdAAQAEAAACACQADAEAAADQAAAEgDACQgDACgDAAIjdAAQhkABhOA9QgCACgEAAQgEAAgDgDg");
	this.shape_25.setTransform(135.745,-29.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#008A2E").s().p("Ak3ClQAAhIAygzQAzgyBIAAIEWAAQBCAAAzgtQAwgtAHhCQgGCKhlBfQhlBgiJAAg");
	this.shape_26.setTransform(130.35,-19.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#41A62A").s().p("Ak4CuQAAiQBmhlQBlhmCQAAIEWAAQAACQhmBlQhmBmiPAAg");
	this.shape_27.setTransform(130.4,-20.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#65D436").s().p("AGsFrQgnghgwgRQgwgRgzAAImgAAQhvgBhOhOQhPhOAAhvIAAmAQAAgDADgCQADgDADAAQAEAAACADQADACAAADIAAGAQAABoBJBJQBJBKBoAAIGgAAQA2gBAzATQAzASApAjQADACAAAEQABADgDADQgDADgEAAQgDAAgCgCg");
	this.shape_28.setTransform(-52.2958,-33.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#008A2E").s().p("AAAAMQgVAAgNASIAAg7IBFAAIAAA7QgNgSgWAAg");
	this.shape_29.setTransform(-97.4,-78.725);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#41A62A").s().p("AHEJ6IAAjSQAAhkhHhHQhGhGhkgBImlAAQiAABhchcQhbhbAAh/IAAn7IBGAAIAAH7QAABkBHBGQBHBGBjAAIGlAAQCAAABcBbQBbBbAACBIAADSg");
	this.shape_30.setTransform(-48.725,-18.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#65D436").s().p("AjRAlQgCgCABgEQAAgDADgCQAoggAxgRQAxgRAzAAIDdAAQADAAADADQADACAAADQAAAEgDADQgCACgEAAIjdAAQhkAAhOA+QgDACgDAAQgDAAgEgEg");
	this.shape_31.setTransform(-59.005,-50.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#008A2E").s().p("Ak3ClQAAhIAygyQA0gyBHAAIEVAAQBDgBAygsQAygtAGhDQgGCKhlBfQhlBgiJAAg");
	this.shape_32.setTransform(-64.4,-40.85);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#41A62A").s().p("Ak4CuQAAiQBmhlQBmhmCPAAIEWAAQAACQhmBlQhmBmiPAAg");
	this.shape_33.setTransform(-64.35,-41.725);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#008A2E").s().p("AAiClQiKAAhkhgQhlhegHiLQAIBCAxAtQAxAtBEAAIEVAAQBIAAAzAyQAyAzABBIg");
	this.shape_34.setTransform(-130.4,-61.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#65D436").s().p("ADFAnQhOg+hkAAIjdAAQgJAAAAgIQAAgJAJAAIDdAAQAzAAAxARQAxARAoAfQAHAGgFAHQgDADgEAAQgDAAgDgCg");
	this.shape_35.setTransform(-135.7663,-71.525);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#41A62A").s().p("AAjCuQiPAAhmhmQhmhlAAiQIEXAAQCOAABmBmQBmBlAACQg");
	this.shape_36.setTransform(-130.45,-62.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_3},{t:this.shape}]}).wait(80));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.7,-231,323.4,450.1);


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

	// Layer_3
	this.instance = new lib.Symbol17();
	this.instance.setTransform(97.35,-70.4,0.393,0.393);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).to({regX:0.1,scaleX:1.6661,scaleY:1.6661,x:97.5,y:-90.4},6).to({regX:0,scaleX:1,scaleY:1,x:97.35},5).wait(30).to({_off:true},1).wait(389));

	// Layer_5
	this.instance_1 = new lib.Symbol16();
	this.instance_1.setTransform(-0.05,-167.8,0.393,0.393);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(43).to({_off:false},0).to({regX:-0.1,regY:-0.1,scaleX:1.7029,scaleY:1.7029,x:-0.15,y:-187.9},6).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:-187.75},5).wait(41).to({_off:true},1).wait(389));

	// Layer_4
	this.instance_2 = new lib.Symbol15();
	this.instance_2.setTransform(-97.4,-91.25,0.4249,0.4249);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(37).to({_off:false},0).to({regX:-0.1,regY:-0.1,scaleX:1.7029,scaleY:1.7029,x:-97.55,y:-111.4},6).to({regX:0,regY:0,scaleX:1,scaleY:1,x:-97.4,y:-111.25},5).wait(47).to({_off:true},1).wait(389));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFB59B").s().p("ArZAaQgLAAgIgIQgHgHAAgLQAAgKAHgIQAIgHALAAIWzAAQALAAAIAHQAHAIAAAKQAAALgHAHQgIAIgLAAg");
	this.shape.setTransform(-17.425,168.6);

	this.instance_3 = new lib.Path_1();
	this.instance_3.setTransform(0,184.3,1,1,0,0,0,97.4,7);
	this.instance_3.compositeOperation = "multiply";

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6663A").s().p("AtCDRIiLmhIebAAIiLGhg");
	this.shape_1.setTransform(-0.025,198.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E6663A").s().p("AvNBFQgdABgUgVQgUgUAAgdQAAgcAUgUQAUgVAdABIebAAQAdgBAUAVQAUAUAAAcQAAAdgUAUQgUAVgdgBg");
	this.shape_2.setTransform(-0.025,170.35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#693618").s().p("ApNBhQj1goAAg5QAAg4D1goQD1gpFYAAQFZAAD1ApQD1AoAAA4QAAA5j1AoQj0AplaAAQlZAAj0gpg");
	this.shape_3.setTransform(-0.025,166.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#65D436").s().p("AgFWpQgDgDAAgDMAAAgtFQAAgEADgCQACgCADgBQAJABAAAIMAAAAtFQAAADgDADQgDADgDAAQgDAAgCgDg");
	this.shape_4.setTransform(1.725,-1.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#008A2E").s().p("AAAAMQgVAAgNARIAAg6IBFAAIAAA6QgNgRgWAAg");
	this.shape_5.setTransform(-0.025,-155.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#41A62A").s().p("AgiZRMAAAgyhIBFAAMAAAAyhg");
	this.shape_6.setTransform(-0.025,3.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#65D436").s().p("AjQAlQgDgCABgDQAAgFADgCQAogeAxgSQAxgRA0AAIDcAAQAEAAACADQADACAAAEQAAADgDADQgCADgEAAIjcAAQhlgBhOA+QgDACgDAAQgEAAgCgEg");
	this.shape_7.setTransform(38.3458,-120.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#008A2E").s().p("Ak4ClQAAhIAzgyQAzgzBJAAIEVAAQBDAAAygtQAxgsAHhDQgHCKhlBfQhkBgiKAAg");
	this.shape_8.setTransform(32.95,-110.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#41A62A").s().p("Ak4CuQAAiQBmhlQBmhmCPAAIEWAAQAACQhmBlQhlBmiPAAg");
	this.shape_9.setTransform(33,-111.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#65D436").s().p("ADFAnQhPg9hkgBIjcAAQgEAAgCgCQgDgDAAgDQAAgDADgDQACgDAEAAIDcAAQAzAAAyARQAxASAoAfQAHAEgGAIQgCADgEAAQgDAAgDgCg");
	this.shape_10.setTransform(-38.379,-141.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#008A2E").s().p("AAiClQiKAAhlhgQhkhfgGiKQAGBCAyAtQAxAtBEAAIEVAAQBIAAAyAyQAzAzAABIg");
	this.shape_11.setTransform(-33.1,-131.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#41A62A").s().p("AAjCuQiQAAhlhmQhmhlAAiQIEWAAQCPAABmBmQBmBlAACQg");
	this.shape_12.setTransform(-33.05,-132.125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#65D436").s().p("AjQAlQgDgCABgDQAAgFADgCQAogfAxgRQAxgRA0AAIDcAAQAJAAAAAJQAAAIgJAAIjcAAQhkAAhPA+QgDACgDAAQgEAAgCgEg");
	this.shape_13.setTransform(38.3458,5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#008A2E").s().p("Ak4ClQAAhIAzgzQAzgyBJAAIEVAAQBDAAAygtQAxgtAHhCQgHCLhlBeQhkBgiKAAg");
	this.shape_14.setTransform(32.95,14.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#41A62A").s().p("Ak4CuQAAiQBmhlQBmhmCPAAIEWAAQAACQhmBlQhlBmiPAAg");
	this.shape_15.setTransform(33,13.925);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#008A2E").s().p("AAiClQiKAAhkhgQhlhfgGiKQAGBDAyAsQAxAtBEAAIEVAAQBIAAAyAyQAzAzAABIg");
	this.shape_16.setTransform(-33,77.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#65D436").s().p("ADFAnQhPg+hkAAIjcAAQgJAAAAgIQAAgEADgCQACgDAEAAIDcAAQA0AAAxARQAxASAoAfQADACAAADQABAEgDADQgCADgEAAQgDAAgDgCg");
	this.shape_17.setTransform(-38.3958,67.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#41A62A").s().p("AAjCuQiQAAhlhmQhmhlAAiQIEWAAQCPAABmBmQBmBlAACQg");
	this.shape_18.setTransform(-33.05,76.525);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#65D436").s().p("AnIJSQgDgCAAgEQAAgEADgCQAmgoAxgWQAzgVA3AAIGjAAQB2AABUhUQBVhUAAh3IAAsfQAAgDACgDQADgDAEAAQADAAACADQADADAAADIAAMfQAAB+hZBZQhZBZh+AAImjAAQg0AAgvAUQgvAUgjAmQgDADgEAAQgCAAgDgDg");
	this.shape_19.setTransform(53.95,10.125);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#008A2E").s().p("AAAAMQgVAAgNASIAAg7IBFAAIAAA7QgNgSgWAAg");
	this.shape_20.setTransform(97.35,-57.875);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#41A62A").s().p("AoJPWIAAnoQAAiBBbhbQBchbCAAAIGlAAQBkAABGhHQBHhGAAhjIAAucIBGAAIAAOcQAAB/hbBcQhcBaiAABImlAAQhjgBhHBIQhHBHAABjIAAHog");
	this.shape_21.setTransform(48.675,37.35);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#65D436").s().p("ADFAnQhNg+hlAAIjdAAQgDAAgDgCQgDgDAAgEQAAgDADgCQADgDADAAIDdAAQBqAABTBCQADACAAADQABAEgCACQgDAEgEAAQgEAAgCgCg");
	this.shape_22.setTransform(58.955,-50.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#008A2E").s().p("AAjClQiKAAhlhgQhlhfgHiKQAIBDAxAtQAxAsBEABIEUAAQBJAAAyAyQA0AyAABIg");
	this.shape_23.setTransform(64.35,-40.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#41A62A").s().p("AAjCuQiPAAhmhmQhmhlAAiQIEXAAQCOAABnBmQBlBlAACQg");
	this.shape_24.setTransform(64.3,-41.725);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#65D436").s().p("AjRAmQgCgDABgEQAAgDADgDQBThBBqAAIDdAAQAEAAACACQADAEAAADQAAAEgDACQgDACgDAAIjdAAQhkABhOA9QgCACgEAAQgEAAgDgDg");
	this.shape_25.setTransform(135.745,-29.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#008A2E").s().p("Ak3ClQAAhIAygzQAzgyBIAAIEWAAQBCAAAzgtQAwgtAHhCQgGCKhlBfQhlBgiJAAg");
	this.shape_26.setTransform(130.35,-19.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#41A62A").s().p("Ak4CuQAAiQBmhlQBlhmCQAAIEWAAQAACQhmBlQhmBmiPAAg");
	this.shape_27.setTransform(130.4,-20.85);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#65D436").s().p("AGsFrQgnghgwgRQgwgRgzAAImgAAQhvgBhOhOQhPhOAAhvIAAmAQAAgDADgCQADgDADAAQAEAAACADQADACAAADIAAGAQAABoBJBJQBJBKBoAAIGgAAQA2gBAzATQAzASApAjQADACAAAEQABADgDADQgDADgEAAQgDAAgCgCg");
	this.shape_28.setTransform(-52.2958,-33.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#008A2E").s().p("AAAAMQgVAAgNASIAAg7IBFAAIAAA7QgNgSgWAAg");
	this.shape_29.setTransform(-97.4,-78.725);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#41A62A").s().p("AHEJ6IAAjSQAAhkhHhHQhGhGhkgBImlAAQiAABhchcQhbhbAAh/IAAn7IBGAAIAAH7QAABkBHBGQBHBGBjAAIGlAAQCAAABcBbQBbBbAACBIAADSg");
	this.shape_30.setTransform(-48.725,-18.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#65D436").s().p("AjRAlQgCgCABgEQAAgDADgCQAoggAxgRQAxgRAzAAIDdAAQADAAADADQADACAAADQAAAEgDADQgCACgEAAIjdAAQhkAAhOA+QgDACgDAAQgDAAgEgEg");
	this.shape_31.setTransform(-59.005,-50.65);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#008A2E").s().p("Ak3ClQAAhIAygyQA0gyBHAAIEVAAQBDgBAygsQAygtAGhDQgGCKhlBfQhlBgiJAAg");
	this.shape_32.setTransform(-64.4,-40.85);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#41A62A").s().p("Ak4CuQAAiQBmhlQBmhmCPAAIEWAAQAACQhmBlQhmBmiPAAg");
	this.shape_33.setTransform(-64.35,-41.725);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#008A2E").s().p("AAiClQiKAAhkhgQhlhegHiLQAIBCAxAtQAxAtBEAAIEVAAQBIAAAzAyQAyAzABBIg");
	this.shape_34.setTransform(-130.4,-61.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#65D436").s().p("ADFAnQhOg+hkAAIjdAAQgJAAAAgIQAAgJAJAAIDdAAQAzAAAxARQAxARAoAfQAHAGgFAHQgDADgEAAQgDAAgDgCg");
	this.shape_35.setTransform(-135.7663,-71.525);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#41A62A").s().p("AAjCuQiPAAhmhmQhmhlAAiQIEXAAQCOAABmBmQBmBlAACQg");
	this.shape_36.setTransform(-130.45,-62.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_3},{t:this.shape}]}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance_3},{t:this.shape}]},95).to({state:[]},1).wait(389));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-161.7,-241,323.4,460.1);


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

	// Symbol_9
	this.instance = new lib.Symbol9();
	this.instance.setTransform(374.55,0);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33).to({_off:false},0).to({alpha:1},9).wait(73).to({_off:true},1).wait(4));

	// Symbol_8
	this.instance_1 = new lib.Symbol8();
	this.instance_1.setTransform(284.85,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(31).to({_off:false},0).to({alpha:1},8).wait(76).to({_off:true},1).wait(4));

	// Symbol_7
	this.instance_2 = new lib.Symbol7();
	this.instance_2.setTransform(190,0);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({alpha:1},8).wait(78).to({_off:true},1).wait(4));

	// Symbol_6
	this.instance_3 = new lib.Symbol6();
	this.instance_3.setTransform(135.5,33.35,3.3685,3.3685,0,0,0,0.2,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).to({regX:0,regY:0,scaleX:0.4783,scaleY:0.4783,x:135.15,y:33,alpha:1},9).to({scaleX:1,scaleY:1},6).wait(79).to({_off:true},1).wait(4));

	// Symbol_5
	this.instance_4 = new lib.Symbol5();
	this.instance_4.setTransform(-61.7,0);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:-151.7,alpha:1},28,cjs.Ease.quadInOut).wait(87).to({_off:true},1).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-408.7,-43.7,817.4,112.8);


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

	// Layer_6
	this.instance = new lib.Symbol4copy2("synched",0);
	this.instance.setTransform(22.8,-59.25,1,1,119.7502);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(12).to({_off:false},0).wait(108));

	// Layer_5
	this.instance_1 = new lib.Symbol4copy("synched",0);
	this.instance_1.setTransform(51.45,68.1,1,1,-120.0062);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).wait(114));

	// Layer_4
	this.instance_2 = new lib.Symbol4("synched",0);
	this.instance_2.setTransform(-73.5,29.15);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-143.8,-124.6,288.1,249.3);


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

	// Layer_2
	this.instance = new lib.Symbol2("synched",0);
	this.instance.setTransform(-0.05,-69.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90).to({startPosition:90},0).to({_off:true},1).wait(29));

	// Layer_1
	this.instance_1 = new lib.Symbol3("synched",0);
	this.instance_1.setTransform(0,149.95);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).wait(86).to({startPosition:86},0).to({_off:true},1).wait(29));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-408.7,-193.8,817.4,412.9);


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
	this.instance = new lib.Path_8();
	this.instance.setTransform(15.2,17.8,1,1,0,0,0,15.2,17.8);
	this.instance.alpha = 0.3008;
	this.instance.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_0, new cjs.Rectangle(0,0,30.5,35.5), null);


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
	mask.graphics.p("A9maRQhIg/gnhNQg8h1AGiFQAGh8A/h7QAVgrAqg1IBLhcQBchzAPhXQAOhTgRheQgQhZgnhRQg+h7ghhJQg8iDgchwQhQk/CIktQCGknFHhKQBpgXCMgEICqgDQBugMBzhYQBqhRCujEQCXirDcAWQCYAQEMCDQCwBXCVAEQAyABA0gNQAlgKA4gWIA+gZQAkgOAdgIQCsgwCkAWQCoAWCVBeQEYCwAiF1QAbEhh2FfQhWD+BJECQAwCsCNDfQA0BSAhCDQAjCMgBCQQgCFljQCrg");
	mask.setTransform(206.0196,183.9993);

	// Symbol_31
	this.instance = new lib.Symbol31("synched",0);
	this.instance.setTransform(183.25,253.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(600));

	// Symbol_30
	this.instance_1 = new lib.Symbol30("synched",0);
	this.instance_1.setTransform(110.7,52.85);

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(600));

	// Symbol_29
	this.instance_2 = new lib.Symbol32("synched",0);
	this.instance_2.setTransform(374.05,108.85);

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(600));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,16,412.1,336.1);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EF6DC0").s().p("AglArQgngKgIgrQATAnAkAEQAjADAcgWQAcgVAXgmQgMAygkAYQgZARgbAAQgLAAgLgDg");
	this.shape.setTransform(-13.1,28.9097);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F17DC7").s().p("AglAsQgngMgIgsQATAoAiABQAiABAegUQAdgTAXgmQgMAzglAaQgYASgZAAQgMAAgMgEg");
	this.shape_1.setTransform(-13.1,29.2562);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F38DCE").s().p("AgmAsQgmgNgIgsQATAoAhgBQAggBAfgSQAegSAYglQgMA0glAcQgYARgYAAQgNAAgNgFg");
	this.shape_2.setTransform(-13.1,29.6307);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F49ED5").s().p("AgmAtQgmgQgIgrQATAnAggCQAggEAegQQAggQAYgkQgNA0glAeQgXARgXAAQgNAAgOgFg");
	this.shape_3.setTransform(-13.1,29.9826);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F6AEDC").s().p("AgnAtQglgRgIgsQATAoAegFQAfgGAggNQAggPAZgkQgNA1gmAgQgWASgWAAQgOAAgPgHg");
	this.shape_4.setTransform(-13.1,30.3615);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8BEE3").s().p("AgoAtQgkgSgIgsQATAoAegHQAcgIAhgMQAjgNAYgjQgNA2gnAiQgVARgVAAQgPAAgQgIg");
	this.shape_5.setTransform(-13.1,30.692);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FACEEA").s().p("AgoAtQgkgUgIgrQATAnAcgJIA+gUQAjgMAZghQgNA2goAkQgUARgVAAQgPAAgQgJg");
	this.shape_6.setTransform(-13.1,31.0738);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FBDFF1").s().p("AgpAuQgjgWgIgsQATAoAbgLQAagLAjgKQAlgKAZghQgNA3gpAmQgTASgUAAQgQAAgRgKg");
	this.shape_7.setTransform(-13.1,31.4317);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FDEFF8").s().p("AgpAuQgjgYgIgrQAUAnAYgNQAZgNAkgIQAmgIAaggQgNA4gqAnQgTASgTAAQgQAAgRgLg");
	this.shape_8.setTransform(-13.1,31.8154);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgqAuQgigZgIgsQATAoAYgQQAYgPAlgGQAmgGAbggQgNA6grApQgSASgTAAQgQAAgSgNg");
	this.shape_9.setTransform(-13.1,32.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgoAuQgkgYgIgrQAUAiAXgNQAYgNAlgGQAngGAagfQgNA4gpAnQgSASgTAAQgRAAgRgLg");
	this.shape_10.setTransform(-13.1,32.0154);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgmAuQgmgWgIgrQAVAdAWgKQAYgMAlgFQAngGAagfQgMA3gnAlQgTARgUAAQgQAAgRgJg");
	this.shape_11.setTransform(-13.1,31.8444);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AglAtQgngTgIgsQAVAYAXgIQAXgKAlgEQAngFAaggQgMA3gmAjQgTARgVAAQgPAAgRgJg");
	this.shape_12.setTransform(-13.1,31.6866);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgkAtQgogSgIgrQAWATAWgHQAXgHAlgEQAngFAagfQgMA2gkAhQgTAQgWAAQgPAAgRgHg");
	this.shape_13.setTransform(-13.1,31.522);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgjAsQgpgPgIgsQAWAPAWgFQAXgGAlgEQAngDAaggQgMA2giAeQgTARgXAAQgPAAgRgHg");
	this.shape_14.setTransform(-13.1,31.3666);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AghAsQgsgOgHgrQAWAJAXgDQAWgEAlgDQAngDAagfQgMA1ggAcQgUAQgYAAQgOAAgQgFg");
	this.shape_15.setTransform(-13.1,31.2013);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AggArQgtgLgHgsQAXAFAWgCIA7gEQAngCAaggQgLA1gfAaQgVAPgaAAQgNAAgPgEg");
	this.shape_16.setTransform(-13.1,31.05);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgfArQgtgJgIgsQAYgBAWABQAWABAkgCQAmgCAbggQgLA1geAWQgVAQgcAAQgMAAgOgDg");
	this.shape_17.setTransform(-13.1,30.8881);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgiAtQgsgNgGgtIAvAAIA6gCQAmgCAagfQgLA0ggAbQgWASgaAAQgNAAgPgEg");
	this.shape_18.setTransform(-13.1,31.2113);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgkAuQgqgQgGguIAxABIA4gDQAmgCAagfQgLA0gjAfQgXAUgYAAQgOAAgOgGg");
	this.shape_19.setTransform(-13.1,31.5146);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgoAwQgngUgFgvQAfACATAAIA3gEQAmgCAagfQgLA1gmAiQgYAWgXAAQgOAAgPgHg");
	this.shape_20.setTransform(-13.1,31.8386);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgrAyQglgYgEgwQAhAEASgCIA2gDQAmgDAagfQgLA1goAmQgaAYgXAAQgOAAgOgIg");
	this.shape_21.setTransform(-13.1,32.1418);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AguAzQgigbgEgyQAkAFARgCIA1gEQAlgCAaggQgLA2grAqQgbAbgWAAQgPAAgNgLg");
	this.shape_22.setTransform(-13.1,32.467);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgxA1QgggfgDgzQAmAHARgDQAQgDAjgCQAlgCAaggQgLA2guAuQgbAdgWAAQgPAAgNgMg");
	this.shape_23.setTransform(-13.1,32.7752);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag0A3QgegigCg1QAoAIAQgEQAQgDAigCQAkgCAbggQgLA2gwAyQgcAfgXAAQgPAAgMgNg");
	this.shape_24.setTransform(-13.1,33.0984);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("Ag0A1QgegegCg0QAnAHARgDQAQgDAigCQAlgCAaggQgLA2gvAuQgdAdgXAAQgPAAgMgMg");
	this.shape_25.setTransform(-13.1,32.7963);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgzA0QgfgbgCgzQAmAGARgCQAQgEAjgBQAlgCAaggQgLA2gvAqQgdAbgXAAQgOAAgMgKg");
	this.shape_26.setTransform(-13.1,32.492);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgzAyQgfgXgCgyQAlAGARgDQARgDAjgBQAlgCAaggQgLA2gvAmQgdAZgXAAQgOAAgMgJg");
	this.shape_27.setTransform(-13.1,32.1883);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgyAxQgggUgCgxQAkAFARgCQASgDAjgCQAlgBAaggQgLA2gvAjQgdAWgXAAQgOAAgLgHg");
	this.shape_28.setTransform(-13.1,31.8989);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgyAwQgggRgCgwQAiAEASgCQATgDAjgBQAlgBAaggQgLA1guAgQgeAUgYAAQgNAAgLgFg");
	this.shape_29.setTransform(-13.1,31.5973);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgyAuQgggMgCgwQAgAEATgDQAUgCAjgBQAlgBAaggQgLA1guAcQgeASgaAAQgLAAgLgEg");
	this.shape_30.setTransform(-13.1,31.2978);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgxAsQghgJgCguQAfACAUgCQATgCAjgBQAmgBAagfQgLA0guAYQggARgaAAQgKAAgJgDg");
	this.shape_31.setTransform(-13.1,31.0016);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgxArQghgGgCgtQAeACAUgCQAUgDAjAAQAlgBAbgfQgLA1gtATQgiAPgcAAIgQgBg");
	this.shape_32.setTransform(-13.1,30.7141);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgvAsQgigIgDguQAeACATgCQAVgDAjAAQAmAAAaggQgLA1gtAXQgfAPgaAAQgKAAgJgCg");
	this.shape_33.setTransform(-13.1,30.8873);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AguAsQgigLgEgtQAdABAUgCQAVgDAjAAQAmABAaggQgMA2gsAZQgdAQgXAAQgMAAgLgEg");
	this.shape_34.setTransform(-13.1,31.0556);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AguAtQgigNgEgtQAcAAAVgCQAVgDAjAAQAmABAagfQgMA2gsAcQgaAPgXAAQgNAAgNgEg");
	this.shape_35.setTransform(-13.1,31.243);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgtAtQgigQgFgsQAbgBAWgCQAVgDAjABQAmABAagfQgMA2gsAfQgYAQgWAAQgOAAgOgGg");
	this.shape_36.setTransform(-13.1,31.4203);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgsAtQgjgSgFgsQAbgBAVgDQAVgDAkACQAmABAagfQgMA3gsAiQgWAQgVAAQgPAAgPgIg");
	this.shape_37.setTransform(-13.1,31.6132);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgrAuQgjgVgGgsQAagBAWgDQAVgDAkACQAmACAaggQgNA4grAkQgVARgUAAQgPAAgQgJg");
	this.shape_38.setTransform(-13.1,31.7949);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgrAuQgigXgHgsIAvgFQAWgDAkACQAmADAaggQgNA4grAoQgTARgUAAQgQAAgRgLg");
	this.shape_39.setTransform(-13.1,31.9908);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgqAuQgigZgIgsIAvgGQAWgDAkADQAlADAbggQgNA6grApQgSASgTAAQgQAAgSgNg");
	this.shape_40.setTransform(-13.1,32.175);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgsAuQgggZgIgrQAagBAWgEQAVgEAkADQAmADAaggQgJA3guAoQgWAUgUAAQgRAAgPgMg");
	this.shape_41.setTransform(-13.1,32.1006);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AguAvQgegZgIgrQAbABAVgEQAWgEAjABQAmACAagfQgEA0gzApQgaAUgVAAQgPAAgOgKg");
	this.shape_42.setTransform(-13.1,32.033);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgwAvQgcgYgIgsQAdADAUgEQAVgFAkACQAlABAaggQAAAyg3ApQgdAWgWAAQgPAAgMgKg");
	this.shape_43.setTransform(-13.1,31.967);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgzAvQgagXgHgsQAdAFAVgEQAUgGAkABQAkABAbggQAEAwg6AoQghAXgYAAQgOAAgLgJg");
	this.shape_44.setTransform(-13.0871,31.8895);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("Ag1AvQgYgXgHgrQAeAHAUgFQAUgGAkAAQAkAAAbgfQAIAtg+AoQgmAYgXAAQgOAAgJgIg");
	this.shape_45.setTransform(-13.0543,31.8266);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("Ag4AvQgVgWgIgsQAgAJAUgFQATgGAjgBQAkAAAbggQANArhDAnQgqAbgYAAQgNAAgHgIg");
	this.shape_46.setTransform(-13.0004,31.7595);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("Ag3AvQgWgWgHgsQAfAJAUgFQATgFAkgBQAkgBAbggQAIAthAAnQgoAZgXAAQgOAAgHgIg");
	this.shape_47.setTransform(-13.0552,31.7833);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("Ag3AvQgWgXgHgrQAfAJATgFQAUgFAkgBQAkgCAbgfQAEAvg+AmQgmAYgXAAQgNAAgIgIg");
	this.shape_48.setTransform(-13.0878,31.8033);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Ag2AvQgWgXgIgrQAfAJATgFQAUgEAkgCQAlgCAagfQAAAyg7AkQglAXgWAAQgNAAgIgIg");
	this.shape_49.setTransform(-13.1,31.8254);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("Ag2AvQgXgXgHgrQAeAIAUgDQAUgFAjgCQAmgCAagfQgEA0g5AjQgiAWgWAAQgOAAgIgIg");
	this.shape_50.setTransform(-13.1,31.8445);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("Ag2AvQgXgXgHgsQAeAJATgEQAUgEAkgCQAmgCAaggQgJA3g3AiQggAWgVAAQgOAAgIgJg");
	this.shape_51.setTransform(-13.1,31.8652);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("Ag2AvQgXgYgHgrQAdAIAUgDQAUgDAkgDQAlgCAbggQgNA5g1AiQgeAUgUAAQgOAAgJgJg");
	this.shape_52.setTransform(-13.1,31.892);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FCE7F4").s().p("Ag0AuQgZgVgHgrQAcAOAVgEQAVgEAkgEQAlgFAaggQgNA3gyAgQgdAUgVAAQgOAAgKgIg");
	this.shape_53.setTransform(-13.1,31.7215);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FACEEA").s().p("AgxAuQgcgTgHgrQAaASAXgDIA6gLQAkgHAaggQgNA2guAfQgdASgWAAQgNAAgLgGg");
	this.shape_54.setTransform(-13.1,31.5492);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F7B6E0").s().p("AgtAtQgggQgHgsQAZAYAYgFIA7gMQAkgJAZghQgNA2gsAdQgcASgVAAQgNAAgLgGg");
	this.shape_55.setTransform(-13.1,31.3992);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F49ED5").s().p("AgrAtQghgPgIgrQAXAdAagFQAbgGAhgJQAjgLAZghQgNA0gpAbQgbASgXAAQgNAAgLgEg");
	this.shape_56.setTransform(-13.1,31.2361);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F285CB").s().p("AgoAsQgkgMgIgsQAVAiAcgFQAcgGAhgMQAigMAZgiQgMAzgmAaQgbASgYAAQgMAAgMgEg");
	this.shape_57.setTransform(-13.1,31.067);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EF6DC0").s().p("AglArQgngKgIgrQATAoAegHQAegGAggPQAhgNAZgiQgMAygkAYQgZARgaAAQgMAAgLgDg");
	this.shape_58.setTransform(-13.1,30.905);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EF6DC0").s().p("AglArQgngKgIgrQATAnAfgEQAfgFAfgQQAggOAZgjQgMAygkAYQgZARgbAAQgLAAgLgDg");
	this.shape_59.setTransform(-13.1,30.5597);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EF6DC0").s().p("AglArQgngKgIgrQATAnAggDQAggDAegRQAggQAYgjQgMAygkAYQgZARgbAAQgLAAgLgDg");
	this.shape_60.setTransform(-13.1,30.2597);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EF6DC0").s().p("AglArQgngKgIgrQATAnAhgBQAggCAegSQAggRAXgkQgMAygkAYQgZARgbAAQgLAAgLgDg");
	this.shape_61.setTransform(-13.1,29.9097);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#EF6DC0").s().p("AglArQgngKgIgrQATAnAiABQAgAAAegUQAfgSAXglQgMAygkAYQgZARgbAAQgLAAgLgDg");
	this.shape_62.setTransform(-13.1,29.5597);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EF6DC0").s().p("AglArQgngKgIgrQATAnAjACQAiABAdgUQAdgUAXglQgMAygkAYQgZARgbAAQgLAAgLgDg");
	this.shape_63.setTransform(-13.1,29.2597);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).wait(15));

	// Layer_1
	this.instance = new lib.Path_17();
	this.instance.setTransform(47.95,12.15,1,1,0,0,0,14.6,16.4);
	this.instance.alpha = 0.3008;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.Path_1_5();
	this.instance_1.setTransform(47.3,11,1,1,0,0,0,15.2,17.8);
	this.instance_1.alpha = 0.3008;
	this.instance_1.compositeOperation = "multiply";

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#7583FF").s().p("AgTCxQg+gHgng5Qgmg5AIhIQAIhJAygvQAygvA+AIQA+AHAnA4QAmA5gIBIQgIBJgyAvQgsAog0AAIgQAAg");
	this.shape_64.setTransform(47.375,10.9496);

	this.instance_2 = new lib.Path_16();
	this.instance_2.setTransform(43.15,15.4,1,1,0,0,0,19.7,19);
	this.instance_2.alpha = 0.3008;
	this.instance_2.compositeOperation = "multiply";

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#7583FF").s().p("AgZDqQhTgKgzhLQgzhLALhfQALhhBCg+QBCg+BSAKQBTAJAzBLQAzBLgLBfQgLBhhCA+Qg6A2hFAAIgVgBg");
	this.shape_65.setTransform(42.7,10.9439);

	this.instance_3 = new lib.Path_15();
	this.instance_3.setTransform(3.7,-33.9,1,1,0,0,0,41.2,29.7);
	this.instance_3.alpha = 0.3008;
	this.instance_3.compositeOperation = "multiply";

	this.instance_4 = new lib.Group_3();
	this.instance_4.setTransform(5.4,-35.6,1,1,0,0,0,42.9,31.3);
	this.instance_4.alpha = 0.3008;
	this.instance_4.compositeOperation = "multiply";

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#7583FF").s().p("AF1E5QgUgCgOgPQgNgQABgVQAEg7gLhKQgWiShLhPQg9hBg5gaQgdgOgrgLIhKgQQgUgFgbgCIgvgDQhkgHhOARQgQAEguAUQgyAWgDAJQAFgQAWgbQAVgaAQgJQAugdAtgLQAQgEA5gIQBKgKBYAHQBbAIBNAcQBlAkBBBFQBfBkAbCtQAOBXgFBLQgCAUgOANQgPANgTAAg");
	this.shape_66.setTransform(5.3526,-35.6062);

	this.instance_5 = new lib.Group_2();
	this.instance_5.setTransform(-31.7,-38.9,1,1,0,0,0,14.6,21.6);
	this.instance_5.alpha = 0.5;

	this.instance_6 = new lib.Group_1_0();
	this.instance_6.setTransform(18.8,-30.45,1,1,0,0,0,23.8,28.7);
	this.instance_6.alpha = 0.5;

	this.instance_7 = new lib.Path_14();
	this.instance_7.setTransform(3.1,-31.1,1,1,0,0,0,40.3,29.2);
	this.instance_7.alpha = 0.5;
	this.instance_7.compositeOperation = "multiply";

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#3F048E").s().p("ABdBDQgohJgmhaIgchLQgNAighAtQhBBchhA8Ig2AiQghAUgZAKQhXAjgygVQg4gZgFhiIAAgQIAEgkIAJgdQAIgUAKgTQAPgYAOgRQAkgrApgQIAMgFQBohgDEACQBnABB4AdIBKAJQA+AGAtAPQCOAuAsCQQAzCng3BiQg0BciBACIgBAAQhnAAh+jugAniBVQgMg6AQhFQAShMAvg6QgUAQgSAaQgZAkgLAoIgGAaIgEAUIgCAaQgBAoASAfIAAAAg");
	this.shape_67.setTransform(-3.2039,-29.8016);

	this.instance_8 = new lib.Path_13();
	this.instance_8.setTransform(-5.45,-23.55,1,1,0,0,0,39.4,28.7);
	this.instance_8.alpha = 0.25;

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#3F048E").s().p("AAHAiQgHgCgFgIQgDgEgEgKIgBgHQAAgLAEgLQAFgJAEgEQAFgEABABQABABgDAGQgCAFgBAHQgBAKABAIIAAAFIADAMQACAGAEAEIAEAFQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAgBAAIgFgCg");
	this.shape_68.setTransform(-33.7725,-2.9475);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#3F048E").s().p("AgFAYIgJgDIgHgFQgGgGgEgKQgDgIACgKQACgIACABIACAHQACAKACAEQAFAGAFADIAEADIACAAIAFADQAFADAIABQAGABAJgCIAHgCQABACgGAFQgGAFgLACIgGAAQgGAAgFgCg");
	this.shape_69.setTransform(-35.2579,-0.1806);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#3F048E").s().p("AgeAxQgNgVAAgcQAAgcANgUQANgVASABQASAAANAUQAMAVAAAcQAAAcgNAUQgNAVgSgBQgSAAgMgUg");
	this.shape_70.setTransform(-31.1009,6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#3F048E").s().p("AAHAjQgHgDgFgHQgFgHgCgIIgBgHIAAgGQABgJADgGQADgIAGgFQAEgFACACIgCAGQgDAHgBAGQAAAJAAAIIABAGQAAAEACAIQACAFAFAFIAEAFQAAAAAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgFgBg");
	this.shape_71.setTransform(3.425,-2.9562);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#3F048E").s().p("AgGAYIgIgDIgHgFQgIgIgCgIQgDgIACgKQACgIACABIABAHQACAKADAEQAEAFAGAEIAEADIABAAIAGADQAEAEAJAAQAGABAIgCIAIgCQABABgGAGQgHAFgKACIgGAAQgGAAgGgCg");
	this.shape_72.setTransform(1.9371,-0.1766);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#3F048E").s().p("AgfAxQgNgVABgcQAAgcANgUQANgVASABQASAAAMAUQANAVAAAcQAAAcgNAUQgNAVgSgBQgSAAgNgUg");
	this.shape_73.setTransform(6.05,6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#3F048E").s().p("AAnAOIgNgMQgJgFgHAAIgHgCIgGgBQgHgBgKADQgGABgKAFQgHAEgBAAQgBgCAFgGQAHgIAJgEQAMgFAJAAIAIAAIADAAIAHADQAKADAIAIQAHAGAEAKQACAJgBABIAAAAQgCAAgEgHg");
	this.shape_74.setTransform(5.1704,-13.1608);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#3F048E").s().p("AgrAOQADgKAHgHQAIgJAIgEIAJgEIADgBIAGAAQAIgBAMAEQAKADAIAHQAHAFgBACQAAABgJgDQgKgEgHgBQgKgBgHABIgNAEQgGACgJAFQgFAFgHAIIgGAHQgCgBADgIg");
	this.shape_75.setTransform(-31.6969,-11.6031);

	this.instance_9 = new lib.Path_12();
	this.instance_9.setTransform(13.35,12.3,1,1,0,0,0,2,1.1);
	this.instance_9.compositeOperation = "screen";

	this.instance_10 = new lib.Path_1_4();
	this.instance_10.setTransform(-40.75,12.35,1,1,0,0,0,1.9,1.2);
	this.instance_10.compositeOperation = "screen";

	this.instance_11 = new lib.Path_11();
	this.instance_11.setTransform(-34.75,17.7,1,1,0,0,0,10.1,10.1);
	this.instance_11.alpha = 0.25;

	this.instance_12 = new lib.Path_1_3();
	this.instance_12.setTransform(9.25,17.7,1,1,0,0,0,10.1,10.1);
	this.instance_12.alpha = 0.25;

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#EF6DC0").s().p("AhCASQgBgSALgPQAIgIAIgEQAJgDAIgBQAHgCAFABIAEAAIAPAEQARAGAOALQAPALAIANQAHANgCACQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAgBgBgBIgGgIQgJgMgPgIQgOgIgPgEIgQgCIgKgBQgRABgJAJQgJAJgDARIgCAPQgDAAgBgPg");
	this.shape_76.setTransform(-15.3069,17.38);

	this.instance_13 = new lib.Path_10();
	this.instance_13.setTransform(-15.45,19.6,1,1,0,0,0,6.9,4);
	this.instance_13.alpha = 0.25;

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FBCAE3").s().p("AgbITIADAAQhGgKgdgHQgqgLgpgTQgtgVgdgaQg8g1gbhlQgUhIgFhpQgIiwASi+QAeiABzhKQBqhECJgBQCEgBBmA2QBCAkAfBEQAKAYAgB2QAVBQgHB6QgGBfgVBrIgIAhQAAgGADgGQgfBNgfAxQgpBEhAA+Qg1AzhNAVQgpALgeAAIgUgBg");
	this.shape_77.setTransform(-5.5856,0.9855);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FBCAE3").s().p("AByCiIAAgDIAAAEgAhlBbIABACIADAFIgEgHgAhuBOIABABIABABIgCgCgAhxBKIACACIAAAAIgCgCgAh4BDIAAAAIACACIgCgCgAijAqIABAAQANAFAKAFIACABQAHAFAGAFQgPgNgYgIgACdiIIAHgbIgDALIgGAXIACgHg");
	this.shape_78.setTransform(10.4375,50.55);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#3F048E").s().p("AgTAoQgegPgQgWQgPgWAIgQQAIgRAcgBQAbgBAdAPQAfAPAPAWQAQAWgJAQQgIARgbABIgEAAQgaAAgbgOg");
	this.shape_79.setTransform(-37.5106,50.175);

	this.instance_14 = new lib.Path_1_2();
	this.instance_14.setTransform(-50.1,38,1,1,0,0,0,12.8,12.6);
	this.instance_14.alpha = 0.3008;
	this.instance_14.compositeOperation = "multiply";

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#7583FF").s().p("AAIBUQhdgygggkQgZgcAggwIAmgrQAGgKAXAYQALAMAKAOIgtA2QgGAIBtBBQBsBBgRALQgFADgIAAQgdAAhNgpg");
	this.shape_80.setTransform(-50.0279,37.9388);

	this.instance_15 = new lib.Group_0();
	this.instance_15.setTransform(-37.4,9.5,1,1,0,0,0,15.2,17.8);
	this.instance_15.alpha = 0.3008;
	this.instance_15.compositeOperation = "multiply";

	this.instance_16 = new lib.Path_7();
	this.instance_16.setTransform(-37.4,9.5,1,1,0,0,0,15.2,17.8);
	this.instance_16.alpha = 0.3008;
	this.instance_16.compositeOperation = "multiply";

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#7583FF").s().p("AgTCxQg+gHgng5Qgmg5AIhIQAIhJAygvQAyguA9AHQA/AHAmA4QAnA5gIBIQgIBJgyAvQgsAog0AAIgQAAg");
	this.shape_81.setTransform(-37.3428,9.4496);

	this.instance_17 = new lib.Path_6();
	this.instance_17.setTransform(-41.55,13.9,1,1,0,0,0,19.7,19);
	this.instance_17.alpha = 0.3008;
	this.instance_17.compositeOperation = "multiply";

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#7583FF").s().p("AgZDqQhTgKgzhLQgzhLALhfQALhhBCg+QBCg+BSAKQBTAJAzBLQAzBLgLBfQgLBhhCA+Qg6A2hFAAIgVgBg");
	this.shape_82.setTransform(-42.0079,9.4439);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_82},{t:this.instance_17},{t:this.shape_81},{t:this.instance_16},{t:this.instance_15},{t:this.shape_80},{t:this.instance_14},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.instance_13},{t:this.shape_76},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.instance_8},{t:this.shape_67},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.shape_66},{t:this.instance_4},{t:this.instance_3},{t:this.shape_65},{t:this.instance_2},{t:this.shape_64},{t:this.instance_1},{t:this.instance}]}).wait(80));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.9,-66.9,125.8,133.8);


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
	this.instance = new lib.Symbol26("synched",0);
	this.instance.setTransform(-1.5,29.2,1,1,0,0,0,27.2,30.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({startPosition:11},0).to({y:32,startPosition:24},13).to({y:31.25,startPosition:38},14).to({regX:27.1,rotation:-3.9408,x:1.3,y:29.2,startPosition:58},20).to({regX:27.2,rotation:0,x:-1.5,startPosition:70},12).wait(10));

	// Layer_3
	this.instance_1 = new lib.Tween1("synched",0);
	this.instance_1.setTransform(-20.9,52.95);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(80));

	// Layer_2
	this.instance_2 = new lib.Symbol25();
	this.instance_2.setTransform(33.55,-14.85);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({y:-12.05},13).to({y:-12.8},14).to({rotation:-3.9408,x:33.3,y:-17.15},20).to({rotation:0,x:33.55,y:-14.85},12).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.6,-96.8,188.1,187.5);


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

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7583FF").s().p("AAOBxQgtgCglgkQglgigFgvQgGguAdggQAcgeAuACQAtADAlAiQAkAkAGAtQAGAvgcAfQgbAdgpAAIgHAAg");
	this.shape.setTransform(-79.6173,99.3);

	this.instance = new lib.Path_19();
	this.instance.setTransform(-73.05,97.8,1,1,0,0,0,78.4,52);
	this.instance.alpha = 0.6016;
	this.instance.compositeOperation = "multiply";

	this.instance_1 = new lib.Group_4();
	this.instance_1.setTransform(-75.35,99.45,1,1,0,0,0,69.4,46);
	this.instance_1.alpha = 0.3008;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3F048E").s().p("AnaIIQgUAAgRgPQgSgPgGgUIj2urQgFgUAKgQQALgOAUAAITnAAQAVAAASAOQASAQAEAUIDUOrQAEAUgLAPQgLAPgUAAg");
	this.shape_1.setTransform(-73.0542,97.8);

	this.instance_2 = new lib.Path_18();
	this.instance_2.setTransform(19.3,143.6,1,1,0,0,0,25.3,6);
	this.instance_2.alpha = 0.6016;
	this.instance_2.compositeOperation = "multiply";

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3F048E").s().p("AjKA8QgVAAgPgPQgOgOAAgVIAAgTQAAgUAOgQQAPgOAVAAIGVAAQAVAAAPAOQAOAQAAAUIAAATQAAAVgOAOQgPAPgVAAg");
	this.shape_2.setTransform(19.325,143.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.instance_2},{t:this.shape_1},{t:this.instance_1},{t:this.instance},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.instance_2},{t:this.shape_1},{t:this.instance_1},{t:this.instance},{t:this.shape}]},19).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.instance_2},{t:this.shape_1},{t:this.instance_1},{t:this.instance},{t:this.shape}]},5).to({state:[{t:this.shape_2},{t:this.instance_2},{t:this.shape_1},{t:this.instance_1},{t:this.instance},{t:this.shape}]},570).to({state:[]},1).wait(4));

	// Layer_3
	this.instance_3 = new lib.Symbol22("synched",0);
	this.instance_3.setTransform(13.1,131.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({startPosition:19},0).to({_off:true},1).wait(5).to({_off:false,startPosition:25},0).wait(570).to({startPosition:45},0).to({_off:true},1).wait(4));

	// Layer_4
	this.instance_4 = new lib.Symbol24("synched",0);
	this.instance_4.setTransform(59.85,-59);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(19).to({startPosition:19},0).to({_off:true},1).wait(5).to({_off:false,startPosition:25},0).wait(570).to({startPosition:35},0).to({_off:true},1).wait(4));

	// Layer_1
	this.instance_5 = new lib.Group_1();
	this.instance_5.setTransform(29.35,88.9,1,1,0,0,0,36.6,49.1);
	this.instance_5.alpha = 0.3008;
	this.instance_5.compositeOperation = "multiply";

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D7EAFF").s().p("AhgAzQgogVAAgeQAAgdAogVQAogVA4gBQA4ABApAVQAoAVAAAdQAAAegoAVQgpAWg4gBQg4ABgogWg");
	this.shape_3.setTransform(43,24.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D7EAFF").s().p("AgIBUQgKgVgGgcIgEgYIgzAwQg6AtgfgKQgfgKADgqQAGASATAGQAgALA5guQAdgXAWgYIAFAXQAGAcAJAWQAdBFAygXQA1gYAmhNQAjhHABhDIACALQAFBDgkBOQgmBUg5AbQgNAGgLAAQgiAAgVg1g");
	this.shape_4.setTransform(39.4423,34.7109);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgIB0QgKgVgGgcIgEgYIgzAwQg6AtgfgKQgjgMAIgyQAGgnAlhRQAghIBHgaQAjgNArgBQA6gBArAMQBAATADAtQAFBDgkBOQgmBUg5AbQgNAGgLAAQgiAAgVg1g");
	this.shape_5.setTransform(39.4385,31.5071);

	this.instance_6 = new lib.Path_3();
	this.instance_6.setTransform(39.05,34.95,1,1,0,0,0,18.7,15.8);
	this.instance_6.compositeOperation = "multiply";

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FAC627").s().p("AisjDQAih8A3huQAqhTAMgHQBSg0BaAxQAtAZAcAjQjKEyhaF+QgtC/gFCCQiXlkBpmCg");
	this.shape_6.setTransform(36.0338,70.2864);

	this.instance_7 = new lib.Path_2();
	this.instance_7.setTransform(40.45,35.35,1,1,0,0,0,20.8,16.3);
	this.instance_7.alpha = 0.3008;
	this.instance_7.compositeOperation = "multiply";

	this.instance_8 = new lib.Path_0();
	this.instance_8.setTransform(38.6,93.35,1,1,0,0,0,60.4,56.2);
	this.instance_8.alpha = 0.3008;
	this.instance_8.compositeOperation = "multiply";

	this.instance_9 = new lib.Path_1_0();
	this.instance_9.setTransform(64.85,61.4);
	this.instance_9.alpha = 0.3008;
	this.instance_9.compositeOperation = "multiply";

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#7583FF").s().p("AjUKLQjAAJhfhBQhRg3gRhxQgNhRATiRQAbjKACgbQAGh+AuiDQAviHBKhgQBZhzCOgRQBqgNCoArQAUAFBCgUQBFgVAXABQCsAJBDD9QAYBZAMB/QAHBHAIBzIAMCDQAJBugCBSQgDD8hdAeQhqAik+AEg");
	this.shape_7.setTransform(38.5877,84.22);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.shape_6},{t:this.instance_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_5}]}).to({state:[{t:this.shape_7},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.shape_6},{t:this.instance_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_5}]},19).to({state:[]},1).to({state:[{t:this.shape_7},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.shape_6},{t:this.instance_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_5}]},5).to({state:[{t:this.shape_7},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.shape_6},{t:this.instance_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_5}]},570).to({state:[]},1).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-151.4,-150.5,304.6,300.3);


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
	this.instance = new lib.Symbol40();
	this.instance.setTransform(-84.05,24.45);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(489).to({_off:false},0).to({alpha:1},20).wait(91));

	// Layer_13
	this.instance_1 = new lib.Symbol13();
	this.instance_1.setTransform(-428.15,504.7,0.3472,0.3472);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(162).to({_off:false},0).to({scaleX:1.2677,scaleY:1.2677,x:-428.1},11).to({scaleX:1,scaleY:1},6).wait(421));

	// Layer_14
	this.instance_2 = new lib.Symbol37();
	this.instance_2.setTransform(-133.2,-96.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.Symbol36();
	this.instance_3.setTransform(-195.95,-96.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(319).to({_off:false},0).to({x:-347.7,alpha:1},14).wait(72).to({x:-679.2,alpha:0},9).to({_off:true},1).wait(185));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(435).to({_off:false},0).to({x:-371.45,alpha:1},15).wait(150));

	// Layer_12
	this.instance_4 = new lib.Symbol28();
	this.instance_4.setTransform(-368.9,-74.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.Symbol38();
	this.instance_5.setTransform(-174.55,-161.05);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.instance_6 = new lib.Symbol35();
	this.instance_6.setTransform(-135.5,-161.05);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(73).to({_off:false},0).to({y:-133.1,alpha:1},15).wait(186).to({alpha:0},8).to({_off:true},1).wait(317));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(308).to({_off:false},0).to({x:-389.05,alpha:1},14).wait(78).to({x:-720.55,alpha:0},9).to({_off:true},1).wait(190));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(422).to({_off:false},0).to({x:-311,alpha:1},15).wait(163));

	// Symbol_13
	this.instance_7 = new lib.Symbol27();
	this.instance_7.setTransform(426.8,-280.3);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.instance_8 = new lib.Symbol39();
	this.instance_8.setTransform(266.55,-236.65);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(34).to({_off:false},0).to({x:-234.25,alpha:1},23,cjs.Ease.quadOut).to({x:-216.7},7,cjs.Ease.quadOut).wait(210).to({alpha:0},8).to({_off:true},1).wait(317));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(287).to({_off:false},0).to({x:-220.95,alpha:1},17,cjs.Ease.quadOut).wait(296));

	// Symbol_11
	this.instance_9 = new lib.Symbol11();
	this.instance_9.setTransform(-575.7,-462.3,0.3258,0.3258,0,0,0,-709.8,-119.7);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({_off:false},0).to({alpha:1},14).wait(577));

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AheAYIAAgHIAAgRIAAgQIAAgHIC9AAIAAAHIAAAQIAAARIAAAHg");
	this.shape.setTransform(-549.075,449.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ApHASIgBgQIgBgRIABgIICtAAIPjAGIABARIABAQIgBAIIitAAg");
	this.shape_1.setTransform(-500.675,449.575);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AwWATQgCgGgBgKIgCgQIACgJQBOgBBPAAIeTAFIAEAQIABAQQAAAFgCAEQhOABhPAAg");
	this.shape_2.setTransform(-454.775,449.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("A3NATQgDgFgBgJQgCgJAAgHIACgKQBGgCBHAAMAsSAAFQADAFABAJQACAJAAAIQAAAFgCAEQhGAChHAAg");
	this.shape_3.setTransform(-411.325,449.575);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("A9qAUQgEgFgCgJQgDgIAAgIQABgGACgFQA/gCBAAAMA5cAAEQAEAFACAJQADAIAAAIQAAAGgDAFQg/AChAAAg");
	this.shape_4.setTransform(-370.375,449.575);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("EgjuAAUQgFgEgDgIQgDgIAAgJQABgGADgFQA4gDA5AAMBF0AAEQAEAEADAJQADAHAAAJQAAAGgDAFQg4ADg7AAg");
	this.shape_5.setTransform(-331.9,449.575);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("EgpaAAVQgFgEgEgIQgDgJAAgHQABgHADgGQAxgDA0AAMBRXAADQAGAEADAIQAEAIAAAJQAAAGgEAGQgyADgzAAg");
	this.shape_6.setTransform(-295.9,449.575);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("EgusAAVQgGgDgEgIQgEgIAAgIQAAgIAEgFQAsgEAuAAMBcJAADQAGADAEAIQAEAIAAAIQAAAIgFAFQgsAEgtAAg");
	this.shape_7.setTransform(-262.375,449.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("EgzmAAWQgGgDgEgIQgFgIAAgIQAAgIAFgGQAmgEApAAMBmHAACQAGADAFAIQAFAIAAAIQgBAIgEAGQgnAEgpAAg");
	this.shape_8.setTransform(-231.35,449.575);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Eg4GAAWQgHgCgEgIQgFgIAAgIQAAgIAFgGQAhgFAkAAMBvSAACQAHACAFAIQAFAIAAAIQAAAIgFAGQgiAFgjAAg");
	this.shape_9.setTransform(-202.825,449.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Eg8NAAXQgHgCgFgIQgGgIAAgIQABgJAFgGQAdgFAfAAMB3rAACQAHABAFAIQAFAIABAJQgBAIgFAGQgdAFgfAAg");
	this.shape_10.setTransform(-176.75,449.575);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Eg/7AAXQgIgCgFgHQgFgIAAgIQAAgJAFgHQAZgFAbAAMB/PAABQAIACAGAHQAFAIAAAJQAAAIgFAHQgZAFgbAAg");
	this.shape_11.setTransform(-153.175,449.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("EhDQAAXQgIgBgGgHQgFgIAAgJQAAgJAFgGQAVgGAYAAMCGBAABQAJABAFAIQAGAHAAAJQAAAJgGAGQgVAGgXAAg");
	this.shape_12.setTransform(-132.075,449.575);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("EhGLAAXQgJAAgGgIQgGgHAAgJQAAgKAGgGQARgGAVAAMCMAAABQAJAAAGAIQAGAHAAAJQAAAKgGAGQgSAGgUAAg");
	this.shape_13.setTransform(-113.475,449.575);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("EhIvAAYQgJgBgGgHQgGgIAAgIQAAgKAHgHQAOgGASAAMCRMAAAQAJABAGAHQAHAIAAAJQAAAJgHAHQgPAGgRAAg");
	this.shape_14.setTransform(-97.325,449.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("EhK4AAYQgKgBgGgHQgGgHAAgJQAAgKAGgHQAMgGAQAAMCVlAAAQAJABAHAHQAGAHAAAJQAAAKgGAHQgNAGgPAAg");
	this.shape_15.setTransform(-83.675,449.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("EhMpAAYQgJAAgHgHQgHgIAAgJQAAgKAHgHQAKgGAOAAMCZKAAAQAKAAAHAHQAGAIABAJQgBAKgGAHQgLAGgNAAg");
	this.shape_16.setTransform(-72.5,449.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("EhOBAAYQgJAAgHgHQgHgHAAgKQAAgJAHgHQAJgHAMAAMCb9AAAQAKAAAHAHQAHAHAAAKQAAAJgHAHQgJAHgMAAg");
	this.shape_17.setTransform(-63.825,449.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("EhO/AAYQgKAAgHgHQgHgHAAgKQAAgJAHgHQAIgHALAAMCd9AAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgIAHgLAAg");
	this.shape_18.setTransform(-57.625,449.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("EhPlAAYQgKAAgGgHQgIgHAAgKQAAgJAIgHQAGgHALAAMCfKAAAQAJAAAHAHQAIAHgBAJQABAKgIAHQgGAHgLAAg");
	this.shape_19.setTransform(-53.9,449.575);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("EhPyAAYQgKAAgGgHQgHgHAAgKQAAgJAHgHQAGgHAKAAMCfkAAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAg");
	this.shape_20.setTransform(-52.65,449.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},9).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).wait(571));

	// Layer_5
	this.instance_10 = new lib.Symbol14("synched",0);
	this.instance_10.setTransform(-780,229.2);
	this.instance_10._off = true;

	this.instance_11 = new lib.Symbol14copy("synched",1);
	this.instance_11.setTransform(-234,229.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_10}]},100).to({state:[{t:this.instance_10}]},25).to({state:[{t:this.instance_11}]},71).wait(404));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(100).to({_off:false},0).to({x:-234,startPosition:25},25,cjs.Ease.quadOut).to({_off:true},71).wait(404));

	// Symbol_18
	this.instance_12 = new lib.Symbol18();
	this.instance_12.setTransform(-362.25,51.5,2.0966,2.0966);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(9).to({_off:false},0).to({x:164.25,alpha:1},20,cjs.Ease.quadOut).wait(571));

	// Symbol_20
	this.instance_13 = new lib.Symbol20("synched",0);
	this.instance_13.setTransform(11.75,-42.7,2.0966,2.0966);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(40).to({_off:false},0).wait(560));

	// Symbol_21
	this.instance_14 = new lib.Symbol21("synched",0);
	this.instance_14.setTransform(422.15,124.75,2.0966,2.0966);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(9).to({_off:false},0).to({x:207.65,startPosition:25},20,cjs.Ease.quadOut).wait(571));

	// _Clip_Group_
	this.instance_15 = new lib.ClipGroup("synched",0);
	this.instance_15.setTransform(269.05,14.65,2.0966,2.0966,0,0,0,238.8,176);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(600));

	// Symbol_19
	this.instance_16 = new lib.Symbol19();
	this.instance_16.setTransform(632.4,379.45,0.5514,0.5514,0,0,0,206.2,166.1);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(22).to({_off:false},0).to({regX:206.1,regY:166,scaleX:2.0966,scaleY:2.0966,x:632.35,y:379.4},18).wait(560));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-941.7,-522,1725.9,1092.9);


// stage content:
(lib.animation_v1_demo_640 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// flash0_ai
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(320,320,0.5926,0.5926,0,0,0,0,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(509).to({_off:false},0).wait(65).to({startPosition:65},0).to({regX:0.9,regY:0.9,scaleX:0.0544,scaleY:0.0544,alpha:0,startPosition:85},20).wait(6));

	// flash0_ai
	this.instance_1 = new lib.Symbol12("synched",0);
	this.instance_1.setTransform(408.1,305.6,0.5926,0.5926,0,0,0,63.9,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(600));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(132.3,316.2,702.5999999999999,327.59999999999997);
// library properties:
lib.properties = {
	id: '225F70DADD7ABD498932725F5276C365',
	width: 640,
	height: 640,
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
an.compositions['225F70DADD7ABD498932725F5276C365'] = {
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