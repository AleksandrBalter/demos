(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.background = function() {
	this.initialize(img.background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2000,250);


(lib.card = function() {
	this.initialize(img.card);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,280,205);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.txt42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAaA2QgGgEgEgGQgHAGgJAEQgJADgJAAQgJAAgHgDQgHgCgGgFQgFgEgDgHQgDgHAAgHQAAgJAEgGQADgHAGgEQAHgFAJgCQAKgDAMAAIARACIAAgBQAAgGgFgFQgFgEgHABQgIgBgJACIgTAHIgJgbQANgFAMgDQANgCALAAQALAAAJADQAIADAHAGQAHAGADAIQAEAIAAAKIAAAjQAAAFAFAAIAFgBIADAcIgSACQgIAAgHgDgAgQAKQgGAEAAAFQAAAFAEADQAFADAGABQAHgBAFgFQAFgFAAgHIAAgFIgMgBQgJAAgFADg");
	this.shape.setTransform(148.2,116.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAOA2IgagoIgGAAIAAAoIglAAIAAhsIAlAAIAAAnIAFAAIAZgnIApAAIgkA1IAnA3g");
	this.shape_1.setTransform(136.3,116.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwA2IAAhsIA1AAQAJAAAHACQAHADAGAEQAFAEADAFQADAGAAAHQAAAHgDAFQgDAGgGAEQAHACAEAHQAFAHAAAIQAAAHgDAFQgDAGgGAEQgFAFgIADQgHABgKAAgAgMAcIAOAAQAEABAEgDQACgDABgEQgBgEgCgCQgDgEgFABIgOAAgAgMgKIAMAAQAEAAADgCQACgDAAgEQAAgEgCgCQgDgCgEAAIgMAAg");
	this.shape_2.setTransform(124.1,116.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAaA2QgGgEgEgGQgHAGgJAEQgJADgJAAQgJAAgHgDQgHgCgGgFQgFgEgDgHQgDgHAAgHQAAgJAEgGQADgHAGgEQAHgFAJgCQAKgDAMAAIARACIAAgBQAAgGgFgFQgFgEgHABQgIgBgJACIgTAHIgJgbQANgFAMgDQANgCALAAQALAAAJADQAIADAHAGQAHAGADAIQAEAIAAAKIAAAjQAAAFAFAAIAFgBIADAcIgSACQgIAAgHgDgAgQAKQgGAEAAAFQAAAFAEADQAFADAGABQAHgBAFgFQAFgFAAgHIAAgFIgMgBQgJAAgFADg");
	this.shape_3.setTransform(112,116.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSA2IAAhOIgdAAIAAgeIBfAAIAAAeIgdAAIAABOg");
	this.shape_4.setTransform(100.3,116.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPA1QgLgEgIgIQgJgIgFgKQgDgLAAgMQAAgMADgJQAFgLAJgIQAIgIALgEQALgEAMAAQAMAAALADQALADALAHIgQAaQgGgEgGgCQgGgCgGgBQgGAAgEACQgEADgEADQgDAEgCAEQgCAFAAAFQAAAGACAFQACAFADADQAEAEAEACQAEABAGAAQAGAAAGgBQAGgCAGgFIAQAaQgLAGgLAEQgLADgMAAQgMAAgLgEg");
	this.shape_5.setTransform(89.8,116.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgYA1QgLgEgIgHQgKgJgEgKQgEgLAAgMQAAgMAEgJQAEgLAKgIQAIgIALgEQALgEANAAQANAAAMAEQALAEAJAIQAIAIAEAKQAFALAAALQAAAMgFALQgEAKgIAJQgJAHgLAEQgMAEgNAAQgNAAgLgEgAgIgYQgEACgDADQgDAEgCAFQgBAFgBAFQABAGABAFQACAFADADQADAEAEACQAEACAEAAQAFAAAEgCQAEgCADgEQADgDACgFQACgFgBgGQABgFgCgFQgCgFgDgEQgDgDgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_6.setTransform(77.2,116.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAdBIIAAgjIg5AAIAAAjIgkAAIAAhAIAHAAQAGgIACgJQADgKAAgNIAAgnIBgAAIAABPIAPAAIAABAgAgMgcQAAALgCAJQgBAIgEAIIAkAAIAAgxIgdAAg");
	this.shape_7.setTransform(63.5,118);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVA2IAAg3IgoA3IglAAIAAhsIAkAAIAAA5IAog5IAlAAIAABsg");
	this.shape_8.setTransform(44.8,116.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnApQgJgIgEgKQgEgKAAgNQAAgMAEgKQAEgKAIgIQAJgIAKgEQALgEAMAAQAMAAAKAEQAKADAHAJQAIAHAEAKQAEAKAAAMIgBALIhKAAQADAJAHAEQAIAFAKABQAGgBAIgCQAIgCAIgEIALAaQgMAFgLADQgMADgLAAQgaAAgSgQgAAUgLQgBgIgFgEQgFgEgHgBQgGABgHAEQgFAEgCAIIAmAAIAAAAg");
	this.shape_9.setTransform(266.8,92.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAVA2IAAg4IgoA4IglAAIAAhsIAkAAIAAA5IAog5IAlAAIAABsg");
	this.shape_10.setTransform(253.7,92.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASA2IAAgoIgjAAIAAAoIgmAAIAAhsIAmAAIAAAoIAjAAIAAgoIAmAAIAABsg");
	this.shape_11.setTransform(240.2,92.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgnApQgJgIgEgKQgEgKAAgNQAAgMAEgKQAEgKAIgIQAJgIAKgEQAKgEANAAQAMAAAKAEQAKADAHAJQAJAHADAKQAEAKAAAMIgBALIhKAAQADAJAIAEQAHAFAKABQAHgBAHgCQAIgCAIgEIALAaQgMAFgLADQgMADgLAAQgaAAgSgQgAAUgLQgBgIgFgEQgFgEgHgBQgGABgHAEQgFAEgCAIIAmAAIAAAAg");
	this.shape_12.setTransform(227.3,92.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ag+A3IAEgfIAGABQAGAAADgEQADgDAAgHIAAhCIBnAAIAABsIglAAIAAhOIgdAAIAAAnQAAATgLALQgHAGgHADQgIADgJAAIgRgBg");
	this.shape_13.setTransform(213.6,92.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAcA2IAAg4IgSAZIgSAAIgTgZIAAA4IgjAAIAAhsIAkAAIAaAnIAcgnIAkAAIAABsg");
	this.shape_14.setTransform(199.6,92.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag6BPIAAiaIAeAAIAFAKQAHgGAIgEQAIgDAJAAQALAAAJAEQAJAEAHAIQAHAIAEAKQADALAAAMQAAANgDAJQgEAKgHAJQgOAPgWAAQgJAAgGgCQgHgDgHgFIAAA2gAgPgpQgFAFAAAKIAAALQAAAJAFAGQAGAFAIAAQAEAAAEgCIAHgEQADgEABgFQACgFAAgGQAAgFgCgFQgBgFgDgEQgDgEgEgBQgEgCgEAAQgIAAgGAGg");
	this.shape_15.setTransform(185.6,94.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgYA1QgLgEgIgIQgKgIgEgKQgEgKAAgNQAAgLAEgKQAEgLAKgIQAIgIALgEQALgEANAAQANAAAMAEQALAEAJAIQAIAIAEAKQAFAKAAAMQAAANgFAKQgEAKgIAIQgJAIgLAEQgMAEgNAAQgNAAgLgEgAgIgYQgEACgDADQgDAEgCAFQgCAFAAAFQAAAGACAFQACAFADAEQADADAEACQAEACAEAAQAFAAAEgCQAEgCADgDQADgEACgFQABgFAAgGQAAgFgBgFQgCgFgDgEQgDgDgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_16.setTransform(171.8,92.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgRBlIAAgtQgNgDgKgEQgKgEgIgIQgIgIgDgJQgEgJAAgLQAAgJAEgKQADgJAIgIQAHgHALgFQAKgFANgCIAAgtIAjAAIAAAtQANACAKAFQAKAFAIAHQAIAIADAJQAEAKAAAJQAAALgEAJQgEAJgHAIQgIAIgKAEQgKAEgNADIAAAtgAgggPQgGAHAAAIQAAAKAGAGQAFAHAKACIAAgxQgKACgFAHgAASAZQAKgDAFgGQAGgGAAgKQAAgIgGgHQgFgGgKgCg");
	this.shape_17.setTransform(157,92.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgYA1QgLgEgIgIQgKgIgEgKQgEgKAAgNQAAgLAEgKQAEgLAKgIQAIgIALgEQALgEANAAQANAAAMAEQALAEAIAIQAKAIAEAKQAEAKAAAMQAAANgEAKQgEAKgKAIQgIAIgLAEQgMAEgNAAQgMAAgMgEgAgIgYQgEACgDADQgDAEgCAFQgBAFgBAFQABAGABAFQACAFADAEQADADAEACQAEACAEAAQAFAAAEgCQAEgCADgDQADgEACgFQABgFAAgGQAAgFgBgFQgCgFgDgEQgDgDgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_18.setTransform(142.2,92.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgnApQgIgIgFgKQgEgKAAgNQAAgMAEgKQAEgKAIgIQAIgIALgEQALgEALAAQANAAAKAEQAKADAHAJQAJAHADAKQAEAKAAAMIgBALIhJAAQACAJAIAEQAHAFAKABQAGgBAIgCQAIgCAIgEIAMAaQgMAFgMADQgLADgMAAQgaAAgSgQgAAUgLQgBgIgFgEQgFgEgIgBQgGABgFAEQgGAEgBAIIAlAAIAAAAg");
	this.shape_19.setTransform(124.1,92.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgYA1QgLgEgIgIQgKgIgEgKQgEgKAAgNQAAgLAEgKQAEgLAKgIQAIgIALgEQALgEANAAQANAAAMAEQALAEAJAIQAIAIAEAKQAFAKAAAMQAAANgFAKQgEAKgIAIQgJAIgLAEQgMAEgNAAQgNAAgLgEgAgIgYQgEACgDADQgDAEgCAFQgCAFAAAFQAAAGACAFQACAFADAEQADADAEACQAEACAEAAQAFAAAEgCQAEgCADgDQADgEACgFQABgFAAgGQAAgFgBgFQgCgFgDgEQgDgDgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_20.setTransform(111,92.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("Ag6BPIAAiaIAeAAIAFAKQAHgGAIgEQAIgDAJAAQALAAAJAEQAJAEAHAIQAHAIAEAKQADALAAAMQAAANgDAJQgEAKgHAJQgOAPgWAAQgJAAgGgCQgHgDgHgFIAAA2gAgPgpQgFAFAAAKIAAALQAAAJAFAGQAGAFAIAAQAEAAAEgCIAHgEQADgEABgFQACgFAAgGQAAgFgCgFQgBgFgDgEQgDgEgEgBQgEgCgEAAQgIAAgGAGg");
	this.shape_21.setTransform(97.7,94.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgSA2IAAhOIgdAAIAAgeIBfAAIAAAeIgdAAIAABOg");
	this.shape_22.setTransform(85.5,92.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgPA1QgLgEgIgIQgJgIgFgKQgDgKAAgNQAAgLADgKQAFgLAJgIQAIgIALgEQALgEAMAAQAMAAALADQALAEALAGIgQAaQgGgEgGgCQgGgDgGAAQgGABgEACQgEACgEADQgDAEgCAEQgCAFAAAFQAAAGACAFQACAEADAEQAEADAEACQAEACAGAAQAGAAAGgCQAGgCAGgEIAQAaQgLAHgLADQgLADgMAAQgMAAgLgEg");
	this.shape_23.setTransform(74.9,92.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAnA2IAAhsIAlAAIAABsgAhLA2IAAhsIAjAAIAAAjIAYAAQAJABAHACQAGACAGAFQAGAGADAGQACAGAAAIQAAAJgCAGQgDAHgGAFQgGAFgGADQgHACgJAAgAgoAaIASAAQAEAAADgCQADgDAAgEQAAgDgDgDQgDgDgEAAIgSAAg");
	this.shape_24.setTransform(60.3,92.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgKBRIgMgEQgGgCgFgEIgKgIQgEgGgDgFQgEgGgCgHQgDgJgBgUQAAgKAEgVIAFgMIAIgMIAJgKIALgIIANgGIAOgFIAjgHIAHAdIgjAIQgMACgJAHQgIAFgCAJQAHgFAIgDQAHgCAJAAQAKAAAJAEQAJADAIAJQAHAHAEAJQADAJAAALQAAAOgEALQgEALgIAJQgIAIgLAEQgLAEgMAAIgNgBgAgHABQgFACgDADQgDADgCAFQgBAEAAAGQAAAGABAEQACAGAEADQAGAIAJAAQAFAAAEgCQAFgBADgFQADgDACgFQABgFAAgGQAAgGgBgEQgCgFgDgDQgDgDgFgCQgEgBgFgBQgEABgEABg");
	this.shape_25.setTransform(44.9,89.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhlAOIAAgbIDLAAIAAAbg");
	this.shape_26.setTransform(189.5,68);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAaA2QgGgDgEgGQgHAGgJADQgJADgJAAQgJAAgHgCQgHgDgGgFQgFgEgDgHQgDgGAAgJQAAgIAEgHQADgGAGgEQAHgFAJgDQAKgCAMAAIARABIAAAAQAAgHgFgDQgFgEgHgBQgIABgJACIgTAFIgJgbQANgEAMgCQANgDALAAQALAAAJADQAIADAHAGQAHAGADAIQAEAIAAAJIAAAjQAAAGAFAAIAFAAIADAcIgSABQgIAAgHgDgAgQAKQgGADAAAHQAAAEAEAEQAFACAGAAQAHABAFgGQAFgFAAgIIAAgDIgMgCQgJAAgFADg");
	this.shape_27.setTransform(167.6,68.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgSA3IAAhPIgeAAIAAgdIBgAAIAAAdIgcAAIAABPg");
	this.shape_28.setTransform(155.9,68.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag6BPIAAiaIAeAAIAFAKQAHgGAIgEQAIgDAJAAQALAAAJAEQAJAEAHAIQAHAIAEAKQADALAAAMQAAANgDAJQgEAKgHAJQgOAPgWAAQgJAAgGgCQgHgDgHgFIAAA2gAgPgpQgFAFAAAKIAAALQAAAJAFAGQAGAFAIAAQAEAAAEgCIAHgEQADgEABgFQACgFAAgGQAAgFgCgFQgBgFgDgEQgDgEgEgBQgEgCgEAAQgIAAgGAGg");
	this.shape_29.setTransform(144.2,70.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAaA2QgGgDgEgGQgHAGgJADQgJADgJAAQgJAAgHgCQgHgDgGgFQgFgEgDgHQgDgGAAgJQAAgIAEgHQADgGAGgEQAHgFAJgDQAKgCAMAAIARABIAAAAQAAgHgFgDQgFgEgHgBQgIABgJACIgTAFIgJgbQANgEAMgCQANgDALAAQALAAAJADQAIADAHAGQAHAGADAIQAEAIAAAJIAAAjQAAAGAFAAIAFAAIADAcIgSABQgIAAgHgDgAgQAKQgGADAAAHQAAAEAEAEQAFACAGAAQAHABAFgGQAFgFAAgIIAAgDIgMgCQgJAAgFADg");
	this.shape_30.setTransform(131,68.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAZBKIgrg9IgNAAIAAA9IgnAAIAAiTIAnAAIAAA5IAMAAIAog5IAtAAIg2BHIA7BMg");
	this.shape_31.setTransform(117.8,66.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgSA3IAAhPIgeAAIAAgdIBgAAIAAAdIgcAAIAABPg");
	this.shape_32.setTransform(98.8,68.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ag6BPIAAiaIAeAAIAFAKQAHgGAIgEQAIgDAJAAQALAAAJAEQAJAEAHAIQAHAIAEAKQADALAAAMQAAANgDAJQgEAKgHAJQgOAPgWAAQgJAAgGgCQgHgDgHgFIAAA2gAgPgpQgFAFAAAKIAAALQAAAJAFAGQAGAFAIAAQAEAAAEgCIAHgEQADgEABgFQACgFAAgGQAAgFgCgFQgBgFgDgEQgDgEgEgBQgEgCgEAAQgIAAgGAGg");
	this.shape_33.setTransform(87,70.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAaA2QgGgDgEgGQgHAGgJADQgJADgJAAQgJAAgHgCQgHgDgGgFQgFgEgDgHQgDgGAAgJQAAgIAEgHQADgGAGgEQAHgFAJgDQAKgCAMAAIARABIAAAAQAAgHgFgDQgFgEgHgBQgIABgJACIgTAFIgJgbQANgEAMgCQANgDALAAQALAAAJADQAIADAHAGQAHAGADAIQAEAIAAAJIAAAjQAAAGAFAAIAFAAIADAcIgSABQgIAAgHgDgAgQAKQgGADAAAHQAAAEAEAEQAFACAGAAQAHABAFgGQAFgFAAgIIAAgDIgMgCQgJAAgFADg");
	this.shape_34.setTransform(73.9,68.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAcA3IAAg5IgTAYIgRAAIgTgYIAAA5IgkAAIAAhsIAlAAIAaAmIAbgmIAkAAIAABsg");
	this.shape_35.setTransform(59.9,68.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgEBLIgPgEQgHgDgHgEQgGgEgFgFQgGgFgEgGQgEgHgDgGIgEgPQgCgIAAgIQAAgHACgIQABgIADgHQADgHAEgGQAEgGAGgFIALgKIAOgGQAHgDAIgBQAHgCAIAAQAKAAATAFQAJACATALIgRAaQgIgGgJgDQgJgDgIAAQgKAAgHADQgHADgHAHQgFAGgDAIQgDAIAAAJQAAAUALAMQAHAGAHADQAHAEAKAAQAIAAAJgDQAJgDAIgHIARAbQgTAKgJADQgTAEgKAAIgEABIgLgCg");
	this.shape_36.setTransform(45.4,66.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt42, new cjs.Rectangle(36,56,244.3,72.3), null);


(lib.txt4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAfA/QgHgDgEgHQgKAHgKADQgKAEgLAAQgLAAgIgCQgJgEgGgFQgHgGgDgHQgDgIgBgJQAAgKAEgIQAFgIAHgFQAIgGALgDQAMgDAOAAQAIAAAMACIAAgBQAAgHgGgFQgGgFgJAAQgJAAgLACQgKADgMAEIgLgfQAPgFAPgDQAPgDANgBQANABALAEQAKADAIAHQAIAHAEAKQAEAJABALIAAAqQAAAHAFAAIAGgBIADAgQgLACgKAAQgKAAgHgEgAgUAMQgFAEAAAHQgBAFAFAFQAFADAHAAQAJAAAGgGQAGgGAAgJIAAgFQgIgCgHAAQgKAAgHAEg");
	this.shape.setTransform(133.4,69.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAQBAIgfgwIgGAAIAAAwIgsAAIAAh/IAsAAIAAAtIAFAAIAfgtIAvAAIgqA9IAvBCg");
	this.shape_1.setTransform(119.4,69.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag5BAIAAh/IA/AAQAKAAAJACQAJADAGAEQAHAFADAHQAEAGAAAJQAAAIgEAGQgDAGgIAFQAJADAFAIQAFAJAAAJQAAAIgEAHQgDAHgHAFQgHAFgIADQgJACgLAAgAgPAiIASAAQAFAAAEgEQADgDAAgFQAAgFgDgDQgEgDgFAAIgSAAgAgPgMIAPAAQAFAAADgDQAEgDAAgFQAAgEgEgDQgDgDgFAAIgPAAg");
	this.shape_2.setTransform(104.9,69.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAfA/QgHgDgFgHQgIAHgLADQgLAEgKAAQgLAAgIgCQgJgEgGgFQgHgGgDgHQgEgIAAgJQABgKAEgIQADgIAIgFQAIgGALgDQAMgDANAAQAJAAANACIAAgBQAAgHgHgFQgGgFgJAAQgJAAgKACQgLADgMAEIgLgfQAQgFAOgDQAPgDAOgBQAMABAKAEQALADAIAHQAIAHAEAKQAFAJgBALIAAAqQAAAHAHAAIAGgBIADAgQgMACgKAAQgJAAgIgEgAgTAMQgHAEAAAHQABAFAEAFQAFADAHAAQAJAAAGgGQAHgGAAgJIAAgFQgJgCgHAAQgKAAgGAEg");
	this.shape_3.setTransform(90.6,69.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWBAIAAhdIgiAAIAAgiIByAAIAAAiIgjAAIAABdg");
	this.shape_4.setTransform(76.8,69.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSA/QgNgFgKgKQgKgJgFgMQgFgMAAgPQAAgNAFgNQAFgMAKgJQAKgKANgFQAMgEAPgBQAOABANAEQAOAEAMAHIgSAfQgIgFgHgCQgHgDgGAAQgHAAgGADQgFACgEAEQgEAEgCAGQgCAFAAAGQAAAHACAGQACAFAEAEQAEAFAFACQAGACAHAAQAGAAAHgCQAHgDAIgFIASAgQgNAHgNADQgNAEgOAAQgPABgMgFg");
	this.shape_5.setTransform(64.3,69.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcA/QgNgEgLgKQgKgKgFgMQgFgMAAgPQAAgNAFgNQAFgMAKgJQALgKANgFQANgEAPgBQAQABAOAEQANAFAKAKQAKAJAFAMQAFAMAAAOQAAAPgFAMQgFAMgKAKQgKAKgNAEQgOAFgQgBQgPABgNgFgAgKgcQgFACgDAEQgEAFgCAFQgBAGAAAGQAAAHABAGQACAGAEAEQADAEAFADQAFADAFAAQAGAAAFgDQAFgDADgEQAEgEACgGQACgGAAgHQAAgGgCgGQgCgFgEgFQgDgEgFgCQgFgDgGAAQgFAAgFADg");
	this.shape_6.setTransform(49.3,69.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAiBVIAAgqIhEAAIAAAqIgpAAIAAhMIAIAAQAGgJAEgLQACgMAAgOIAAgvIByAAIAABdIASAAIAABMgAgOgiQAAANgDALQgCAKgDAJIAqAAIAAg6IgiAAg");
	this.shape_7.setTransform(33.2,71.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAZBAIAAhCIgwBCIgrAAIAAh/IAqAAIAABCIAwhCIArAAIAAB/g");
	this.shape_8.setTransform(11,69.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AguAxQgKgKgFgMQgFgMAAgPQAAgNAFgNQAEgMAKgJQAKgKAMgFQANgEAOAAQAPgBALAFQAMAFAJAJQAJAJAFAMQAEALAAAPIAAANIhXAAQACAKAJAGQAJAGAMAAQAIAAAJgCQAJgDAKgFIANAeQgOAHgOADQgOAEgNAAQgfgBgVgSgAAYgOQgCgJgFgEQgGgGgJAAQgIAAgGAGQgHAEgBAJIAsAAIAAAAg");
	this.shape_9.setTransform(273.7,41.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAZBAIAAhCIgwBCIgrAAIAAh/IAqAAIAABCIAwhCIArAAIAAB/g");
	this.shape_10.setTransform(258.3,41.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAVBAIAAgvIgpAAIAAAvIguAAIAAh/IAuAAIAAAuIApAAIAAguIAuAAIAAB/g");
	this.shape_11.setTransform(242.2,41.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AguAxQgKgKgFgMQgFgMAAgPQAAgNAFgNQAEgMAKgJQAKgKAMgFQANgEAOAAQAPgBALAFQAMAFAJAJQAJAJAFAMQAEALAAAPIAAANIhXAAQACAKAJAGQAJAGAMAAQAIAAAJgCQAJgDAKgFIANAeQgOAHgOADQgOAEgNAAQgfgBgVgSgAAYgOQgCgJgFgEQgGgGgJAAQgIAAgGAGQgHAEgBAJIAsAAIAAAAg");
	this.shape_12.setTransform(227,41.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhKBAIAEgjIAJAAQAGAAAEgEQAEgEgBgIIAAhOIB6AAIAACAIgsAAIAAhdIgiAAIAAAuQAAAXgNANQgHAHgJADQgKAEgKAAQgLAAgKgCg");
	this.shape_13.setTransform(210.8,41.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAhBAIAAhDIgWAeIgWAAIgVgdIAABCIgqAAIAAh/IArAAIAfAsIAggsIArAAIAAB/g");
	this.shape_14.setTransform(194.3,41.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhFBdIAAi1IAkAAIAGALQAIgIAJgDQAJgEALAAQANAAALAFQALAFAIAJQAIAJAFANQAEAMAAAPQAAAOgEAMQgFAMgIAJQgRATgaAAQgKAAgHgDQgJgDgHgGIAAA/gAgRgxQgHAHAAALIAAANQAAAMAHAGQAGAGAKAAQAFAAAFgCQAEgCAEgEQADgEABgGQACgFABgHQgBgHgCgGQgBgGgDgEQgEgEgEgDQgFgCgFAAQgKAAgGAHg");
	this.shape_15.setTransform(177.7,44.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgcA/QgNgFgLgJQgKgKgFgMQgFgMAAgPQAAgOAFgMQAFgMAKgJQALgKANgFQANgEAPAAQAQAAAOAEQANAFAKAKQAKAJAFAMQAFANAAANQAAAPgFAMQgFAMgKAKQgKAJgNAFQgOAFgQAAQgPAAgNgFgAgKgcQgFACgDAEQgEAEgCAGQgBAHAAAFQAAAHABAGQACAGAEAEQADAFAFACQAFACAFABQAGgBAFgCQAFgCADgFQAEgEACgGQACgGAAgHQAAgFgCgHQgCgGgEgEQgDgEgFgCQgFgDgGAAQgFAAgFADg");
	this.shape_16.setTransform(161.3,41.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgUB2IAAg0QgPgCgMgGQgNgFgJgKQgJgIgEgLQgFgLAAgNQAAgMAFgKQAEgLAJgJQAJgJAMgFQANgGAPgCIAAg2IApAAIAAA2QAPACANAGQAMAFAJAJQAJAJAEALQAFAKAAAMQAAANgFALQgEALgJAIQgJAKgNAFQgMAGgPACIAAA0gAgmgSQgHAIAAAKQAAAMAHAHQAGAIAMAEIAAg8QgMADgGAIgAAVAdQAMgDAGgHQAHgIAAgLQAAgKgHgIQgGgHgMgDg");
	this.shape_17.setTransform(143.8,41.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgcA/QgNgFgLgJQgKgKgFgMQgFgMAAgPQAAgOAFgMQAFgMAKgJQALgKANgFQANgEAPAAQAQAAAOAEQANAFAKAKQAKAJAFAMQAFANAAANQAAAPgFAMQgFAMgKAKQgKAJgNAFQgOAFgQAAQgPAAgNgFgAgKgcQgFACgDAEQgEAEgCAGQgBAHAAAFQAAAHABAGQACAGAEAEQADAFAFACQAFACAFABQAGgBAFgCQAFgCADgFQAEgEACgGQACgGAAgHQAAgFgCgHQgCgGgEgEQgDgEgFgCQgFgDgGAAQgFAAgFADg");
	this.shape_18.setTransform(126.3,41.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AguAxQgKgKgFgMQgFgMAAgPQAAgNAFgNQAEgMAKgJQAKgKAMgFQANgEAOAAQAPgBALAFQAMAFAJAJQAJAJAFAMQAEALAAAPIAAANIhXAAQACAKAJAGQAJAGAMAAQAIAAAJgCQAJgDAKgFIANAeQgOAHgOADQgOAEgNAAQgfgBgVgSgAAYgOQgCgJgFgEQgGgGgJAAQgIAAgGAGQgHAEgBAJIAsAAIAAAAg");
	this.shape_19.setTransform(104.9,41.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgcA/QgNgFgLgJQgKgKgFgMQgFgMAAgPQAAgOAFgMQAFgMAKgJQALgKANgFQANgEAPAAQAQAAAOAEQANAFAKAKQAKAJAFAMQAFANAAANQAAAPgFAMQgFAMgKAKQgKAJgNAFQgOAFgQAAQgPAAgNgFgAgKgcQgFACgDAEQgEAEgCAGQgBAHAAAFQAAAHABAGQACAGAEAEQADAFAFACQAFACAFABQAGgBAFgCQAFgCADgFQAEgEACgGQACgGAAgHQAAgFgCgHQgCgGgEgEQgDgEgFgCQgFgDgGAAQgFAAgFADg");
	this.shape_20.setTransform(89.4,41.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhFBdIAAi1IAlAAIAFALQAHgIAKgDQAJgEAMAAQANAAAKAFQALAFAIAJQAIAJAFANQAEAMAAAPQAAAOgEAMQgFAMgIAJQgRATgZAAQgKAAgIgDQgJgDgHgGIAAA/gAgSgxQgGAHAAALIAAANQAAAMAGAGQAHAGAKAAQAEAAAFgCQAFgCADgEQAEgEACgGQABgFAAgHQAAgHgBgGQgCgGgEgEQgDgEgFgDQgFgCgEAAQgKAAgHAHg");
	this.shape_21.setTransform(73.7,44.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgWBAIAAhdIgjAAIAAgiIByAAIAAAiIgiAAIAABdg");
	this.shape_22.setTransform(59.2,41.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgSA/QgNgFgKgJQgKgKgFgMQgFgMAAgPQAAgOAFgMQAFgLAKgKQAKgKANgFQAMgEAPAAQAOAAANADQAOAEAMAIIgSAfQgIgFgHgCQgHgDgGAAQgHAAgGADQgFACgEAEQgEAEgCAGQgCAGAAAFQAAAHACAGQACAGAEAEQAEAEAFACQAGACAHAAQAGAAAHgCQAHgCAIgFIASAeQgNAIgNADQgNAFgOAAQgPAAgMgFg");
	this.shape_23.setTransform(46.7,41.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAuBAIAAh/IAsAAIAAB/gAhZBAIAAh/IAqAAIAAApIAcAAQAKAAAJADQAHADAIAGQAGAGAEAHQADAIAAAJQAAAKgDAIQgEAIgGAGQgIAGgHADQgJADgKAAgAgvAfIAUAAQAGAAADgDQAEgDAAgFQAAgEgEgEQgDgDgGAAIgUAAg");
	this.shape_24.setTransform(29.4,41.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgMBfQgIAAgHgDQgGgDgGgFQgGgEgGgGIgJgNIgGgOQgDgLgCgYQAAgMAFgYIAGgQQAEgHAFgHQAFgGAGgFQAGgGAHgEIAPgHIARgFIApgJIAIAiIgpAJQgPAEgKAHQgJAGgDALQAIgGAKgDQAIgDALAAQAMAAALAFQAKAEAJAJQAJAKAEAKQAEALAAANQAAAQgEANQgFANgKAKQgKALgMAEQgNAFgPAAQgHAAgIgCgAgJABQgFACgEAEQgDAEgCAFQgCAGAAAHQAAAGACAGQACAGAEAEQAIAKAKgBQAGAAAFgBQAFgDAEgFQAEgEACgFQACgGAAgHQAAgHgCgGQgCgFgEgEQgEgEgFgCQgFgBgGgBQgFABgFABg");
	this.shape_25.setTransform(11.1,38.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("Ah3ARIAAghIDvAAIAAAhg");
	this.shape_26.setTransform(182.1,13.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAfA/QgHgDgEgHQgKAHgKADQgLAFgKAAQgLgBgIgCQgJgDgGgGQgHgGgDgIQgDgHAAgJQAAgKADgJQAFgHAHgFQAIgGALgCQAMgDAOgBQAIABANACIAAgBQgBgIgGgFQgGgFgJAAQgJAAgLADQgKACgLAFIgMggQAPgGAPgDQAPgCANAAQANAAALADQAKAEAIAHQAIAHAEAJQAFAKAAAMIAAApQAAAGAFAAIAGAAIADAhQgLACgKAAQgJAAgIgFgAgUAMQgFAEAAAHQgBAGAFAEQAFADAHAAQAJAAAGgGQAGgGABgJIAAgFQgJgCgHAAQgKAAgHAEg");
	this.shape_27.setTransform(156.3,13.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgWBAIAAhdIgjAAIAAgiIByAAIAAAiIgiAAIAABdg");
	this.shape_28.setTransform(142.4,13.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhFBdIAAi1IAlAAIAFALQAHgHAKgEQAKgEAKAAQANAAALAFQALAFAIAJQAIAKAFAMQAEAMAAAPQAAAPgEALQgFAMgIAJQgRATgaAAQgJAAgIgDQgIgDgIgGIAAA/gAgSgxQgGAHAAALIAAAOQAAAKAGAHQAHAGAKAAQAFAAAEgCQAFgDADgDQAEgEACgGQACgFAAgHQAAgHgCgGQgCgGgEgEQgDgEgFgCQgEgDgFAAQgKAAgHAHg");
	this.shape_29.setTransform(128.5,16.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAfA/QgHgDgEgHQgKAHgKADQgKAFgLAAQgKgBgJgCQgJgDgGgGQgHgGgDgIQgEgHABgJQAAgKADgJQAFgHAHgFQAIgGALgCQALgDAOgBQAJABANACIAAgBQgBgIgGgFQgGgFgJAAQgJAAgLADQgKACgLAFIgMggQAPgGAPgDQAPgCANAAQANAAALADQAKAEAIAHQAIAHAEAJQAFAKAAAMIAAApQAAAGAFAAIAHAAIACAhQgLACgKAAQgJAAgIgFgAgUAMQgFAEAAAHQgBAGAFAEQAFADAHAAQAJAAAGgGQAGgGABgJIAAgFQgJgCgHAAQgKAAgHAEg");
	this.shape_30.setTransform(113,13.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AAeBXIgzhHIgQAAIAABHIgtAAIAAitIAtAAIAABDIAOAAIAwhDIA1AAIg/BSIBEBbg");
	this.shape_31.setTransform(97.3,11.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgWBAIAAhdIgjAAIAAgiIByAAIAAAiIgiAAIAABdg");
	this.shape_32.setTransform(74.8,13.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AhFBdIAAi1IAkAAIAGALQAIgHAJgEQAJgEALAAQAOAAAKAFQALAFAIAJQAIAKAFAMQAEAMAAAPQAAAPgEALQgFAMgIAJQgRATgaAAQgJAAgIgDQgIgDgIgGIAAA/gAgSgxQgGAHAAALIAAAOQAAAKAGAHQAHAGAKAAQAFAAAEgCQAFgDADgDQAEgEACgGQACgFAAgHQAAgHgCgGQgCgGgEgEQgDgEgFgCQgEgDgFAAQgKAAgHAHg");
	this.shape_33.setTransform(60.9,16.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAfA/QgHgDgEgHQgKAHgKADQgKAFgLAAQgKgBgJgCQgIgDgHgGQgHgGgDgIQgEgHABgJQAAgKADgJQAEgHAIgFQAIgGALgCQALgDAOgBQAJABANACIAAgBQgBgIgGgFQgGgFgJAAQgJAAgLADQgKACgLAFIgMggQAPgGAPgDQAPgCAOAAQAMAAALADQAKAEAIAHQAIAHAEAJQAFAKgBAMIAAApQABAGAFAAIAHAAIACAhQgLACgKAAQgJAAgIgFgAgUAMQgFAEgBAHQAAAGAFAEQAFADAHAAQAJAAAGgGQAGgGABgJIAAgFQgJgCgHAAQgKAAgHAEg");
	this.shape_34.setTransform(45.4,13.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAhBAIAAhDIgWAeIgWAAIgVgdIAABCIgqAAIAAh/IArAAIAfAsIAggsIArAAIAAB/g");
	this.shape_35.setTransform(28.9,13.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgFBZQgJgCgJgDQgIgDgIgFQgIgFgFgGIgMgNIgIgQQgEgIgBgJQgCgJAAgKQAAgJACgJQABgJAEgIQADgJAFgHQAFgHAHgGQAFgGAIgFIAQgIIASgFQAIgCALAAQALAAAXAFQAKAEAWAMIgTAfQgLgHgKgDQgKgEgKAAQgMAAgIAEQgJADgHAIQgHAHgEAKQgDAJAAALQAAAXAOAPQAHAHAJAEQAIAEAMAAQAKAAAKgEQAKgDALgIIATAgQgWAMgKADQgXAFgLAAIgEABQgIAAgHgCg");
	this.shape_36.setTransform(11.7,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt4, new cjs.Rectangle(1,0,282.2,83.1), null);


(lib.txt32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAnA3IAAhtIAlAAIAABtgAhLA3IAAhtIAjAAIAAAjIAYAAQAJAAAHADQAGACAGAFQAGAFADAHQACAGAAAIQAAAIgCAHQgDAHgGAFQgGAFgGADQgHADgJAAgAgoAaIASAAQAEAAADgCQADgDAAgEQAAgDgDgDQgDgDgEAAIgSAAg");
	this.shape.setTransform(207.8,102.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSA3IAAhPIgeAAIAAgeIBgAAIAAAeIgdAAIAABPg");
	this.shape_1.setTransform(193.8,102.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag6BPIAAiaIAeAAIAFAKQAHgGAIgEQAIgDAJAAQALAAAJAEQAJAEAHAIQAHAIAEAKQADALAAAMQAAANgDAJQgEAKgHAJQgOAPgWAAQgJAAgGgCQgHgDgHgFIAAA2gAgPgpQgFAFAAAKIAAALQAAAJAFAGQAGAFAIAAQAEAAAEgCIAHgEQADgEABgFQACgFAAgGQAAgFgCgFQgBgFgDgEQgDgEgEgBQgEgCgEAAQgIAAgGAGg");
	this.shape_2.setTransform(182.1,104.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAaA2QgGgDgEgHQgHAHgJADQgJADgJAAQgJAAgHgCQgHgDgGgFQgFgFgDgGQgDgHAAgHQAAgJAEgHQADgGAGgEQAHgFAJgDQAKgCAMAAIARABIAAAAQAAgGgFgEQgFgFgHAAQgIAAgJADIgTAFIgJgbQANgEAMgDQANgCALAAQALAAAJADQAIADAHAGQAHAGADAIQAEAIAAAJIAAAkQAAAFAFAAIAFAAIADAcIgSABQgIAAgHgDgAgQAKQgGADAAAHQAAAEAEAEQAFADAGAAQAHAAAFgGQAFgFAAgHIAAgFIgMgBQgJAAgFADg");
	this.shape_3.setTransform(168.9,102.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAOA3IgagqIgGAAIAAAqIglAAIAAhtIAlAAIAAAoIAFAAIAZgoIApAAIgkA0IAnA5g");
	this.shape_4.setTransform(157.1,102.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgQA1QgKgEgJgIQgIgIgEgKQgEgKgBgNQABgLAEgKQAEgLAIgIQAJgIAKgEQAMgEAMAAQAMAAALADQALAEAKAGIgPAaQgGgEgGgCQgGgCgFAAQgHAAgEACQgEACgDADQgEADgCAFQgCAGAAAEQAAAGACAFQACAFAEADQADADAEACQAEACAHAAQAFAAAGgCQAGgCAGgEIAPAaQgKAGgLAEQgLADgMAAQgMAAgMgEg");
	this.shape_5.setTransform(139.8,102.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAVA3IAAg5IgoA5IgkAAIAAhtIAjAAIAAA5IAog5IAkAAIAABtg");
	this.shape_6.setTransform(121.9,102.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAOA3IgagqIgGAAIAAAqIglAAIAAhtIAlAAIAAAoIAFAAIAZgoIApAAIgkA0IAnA5g");
	this.shape_7.setTransform(109.7,102.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AASA3IAAhPIgjAAIAABPIgnAAIAAhtIBxAAIAABtg");
	this.shape_8.setTransform(96.2,102.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgzBMIAEgdIAKABQAHAAAEgEQAEgDADgHIADgFIgthrIAoAAIAVBCIAWhCIAoAAIgvB1QgDAKgGAHQgEAIgGAFQgFAFgIACQgIADgHAAQgJAAgKgDg");
	this.shape_9.setTransform(83.4,104.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAOA3IgagqIgGAAIAAAqIglAAIAAhtIAlAAIAAAoIAFAAIAZgoIApAAIgkA0IAnA5g");
	this.shape_10.setTransform(71.9,102.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgYA1QgLgEgIgIQgKgIgEgKQgEgKAAgNQAAgLAEgKQAEgLAKgIQAIgIALgEQALgEANAAQANAAAMAEQALAEAJAIQAIAIAEAKQAFAKAAAMQAAANgFAKQgEAKgIAIQgJAIgLAEQgMAEgNAAQgNAAgLgEgAgIgYQgEACgDADQgDAEgCAFQgCAFAAAFQAAAGACAFQACAFADAEQADADAEACQAEACAEAAQAFAAAEgCQAEgCADgDQADgEACgFQABgFAAgGQAAgFgBgFQgCgFgDgEQgDgDgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_11.setTransform(58.4,102.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AASA3IAAhPIgjAAIAABPIgnAAIAAhtIBxAAIAABtg");
	this.shape_12.setTransform(44.8,102.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgmApQgKgIgEgKQgEgLAAgMQAAgMAEgKQAEgKAIgIQAIgIALgEQAKgEAMAAQANAAAKAEQAKAEAIAHQAHAIAEAKQAEAKAAANIgBAKIhKAAQADAJAHAEQAIAGAKAAQAGAAAIgCQAIgCAIgFIAMAaQgMAGgMADQgLACgMAAQgaAAgRgQgAATgMQAAgHgFgEQgFgFgIABQgGgBgFAFQgGAEgCAHIAlAAIAAAAg");
	this.shape_13.setTransform(192.3,78.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAnA3IAAhsIAlAAIAABsgAhLA3IAAhsIAjAAIAAAjIAYAAQAJAAAHACQAGADAGAFQAGAEADAGQACAHAAAJQAAAHgCAHQgDAHgGAFQgGAGgGACQgHACgJABgAgoAbIASAAQAEAAADgDQADgCAAgEQAAgFgDgCQgDgDgEAAIgSAAg");
	this.shape_14.setTransform(177.3,78.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKBRIgMgEQgGgCgFgEIgKgIQgEgFgDgGQgEgGgCgHQgDgIgBgVQAAgLAEgTIAFgOIAIgLIAJgKIALgIIANgGIAOgEIAjgIIAHAdIgjAIQgMACgJAHQgIAFgCAJQAHgFAIgCQAHgDAJAAQAKAAAJAEQAJAEAIAHQAHAIAEAIQADAKAAALQAAAOgEALQgEALgIAIQgIAJgLAEQgLAEgMAAIgNgBgAgHAAQgFADgDADQgDADgCAFQgBAEAAAGQAAAGABAFQACAEAEAFQAGAHAJABQAFAAAEgDQAFgCADgDQADgEACgFQABgFAAgGQAAgGgBgEQgCgFgDgDQgDgDgFgDQgEAAgFAAQgEAAgEAAg");
	this.shape_15.setTransform(161.8,75.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAHA2QgIgDgIgFQgJgHgFgIQgFgHgCgKIgTAAIAAApIgmAAIAAhsIAmAAIAAAnIATAAQAGgTAPgLQAIgGAJgDQAJgDALAAQANAAALAEQALAEAJAIQAIAIAEAKQAFAKAAAMQAAAMgFALQgEAKgIAIQgJAIgLAEQgLAEgNAAQgLAAgKgDgAAUgYQgEACgEAEQgDADgBAFQgCAFAAAFQAAAGACAFQABAFADAEQAEADAEACQADACAFAAQAEAAAFgCQADgCAEgDQACgEACgFQACgFgBgGQABgFgCgFQgCgFgCgDQgEgEgDgCQgFgCgEAAQgFAAgDACg");
	this.shape_16.setTransform(145.6,78.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag+A3IAEgfIAHABQAFAAADgEQADgDAAgHIAAhCIBnAAIAABsIglAAIAAhOIgdAAIAAAnQAAATgLALQgHAGgHADQgIADgJAAIgRgBg");
	this.shape_17.setTransform(128.2,78.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAaA2QgGgEgEgFQgHAFgJAEQgJADgJAAQgJAAgHgCQgHgDgGgFQgFgEgDgHQgDgGAAgJQAAgIAEgHQADgGAGgFQAHgEAJgDQAKgCAMAAIARABIAAAAQAAgHgFgEQgFgDgHAAQgIAAgJACIgTAFIgJgbQANgEAMgCQANgDALAAQALAAAJADQAIADAHAGQAHAGADAIQAEAIAAAJIAAAjQAAAGAFAAIAFAAIADAcIgSABQgIAAgHgDgAgQAKQgGAEAAAGQAAAEAEAEQAFACAGAAQAHAAAFgEQAFgGAAgIIAAgDIgMgCQgJAAgFADg");
	this.shape_18.setTransform(110.3,78.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgUA3QgMgDgOgFIALgbQAJAEAIACQAIACAHAAQAFAAADgCQADgDAAgDQAAgEgEgEQgEgCgGAAIgMAAIAAgWIAMAAQAGAAADgCQAEgBAAgFQAAgDgDgBQgDgDgDAAQgHAAgHACIgQAFIgLgbQAMgEAMgCQALgDAKAAQAJAAAIADQAHACAGAEQAMAJAAAOQAAAHgEAGQgEAHgGADQAHACAFAIQAFAGAAAJQAAAHgEAGQgDAGgGAFQgGAEgJADQgIACgJAAQgKAAgMgCg");
	this.shape_19.setTransform(98.6,78.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhABCIBuiSIATAOIhuCTgAAfBKQgHgDgGgGQgGgFgDgHQgDgIAAgIQAAgJADgHQADgHAGgGQAGgFAHgDQAHgCAKAAQAIAAAIACQAHADAHAFQALALAAASQAAAIgDAIQgDAHgFAFQgHAGgHADQgIACgIAAQgKAAgHgCgAAmAYQgDAFgBAIQABAIADAFQAEAEAGAAQAGAAADgEQAEgFAAgIQAAgIgEgFQgDgFgGAAQgGAAgEAFgAhAAAQgHgCgFgGQgHgFgCgHQgDgHAAgJQAAgJADgHQACgHAHgFQAFgGAHgDQAIgDAJAAQASAAAMAMQAMAKAAASQAAAJgDAHQgDAHgGAFQgGAGgHACQgHACgKAAQgJAAgIgCgAg4gxQgDAFAAAIQAAAIADAFQAEAFAFAAQAGAAAEgFQADgFAAgIQAAgIgDgFQgEgFgGAAQgFAAgEAFg");
	this.shape_20.setTransform(79,76.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgcBIQgNgEgLgGIAPgdQAIAGAHACQAJADAGAAQAKAAAGgFQAGgFAAgIQAAgFgCgDQgBgEgEgDQgEgCgEgCIgLgBQgPAAgQAEIAAhUIBZAAIAAAfIg3AAIAAAYIAIAAQAMAAAKADQAKADAGAGQAIAHADAHQAEAJAAALQAAAKgEAJQgEAJgJAHQgIAGgKAEQgKADgMAAQgNAAgLgDg");
	this.shape_21.setTransform(63,76.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgUAZIAKgKIAGgKQgHgBgGgFQgFgGAAgIQAAgFACgFQACgEADgDQADgCAEgCQAEgCAEAAQAFAAAFACQAEACADADQADAEABAEQACAFAAAGQAAAIgCAGQgCAIgFAGQgDAHgHAFQgEAGgIAFg");
	this.shape_22.setTransform(53.8,83.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AACBKIAAhuIgdARIgNgaIAwgcIAhAAIAACTg");
	this.shape_23.setTransform(43.3,76.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt32, new cjs.Rectangle(36,66,182.7,48.2), null);


(lib.txt3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAuBAIAAh/IAsAAIAAB/gAhZBAIAAh/IAqAAIAAApIAcAAQAKAAAJADQAHADAIAGQAGAGAEAHQADAIAAAJQAAAKgDAIQgEAIgGAGQgIAGgHADQgJADgKAAgAgvAfIAUAAQAGAAAEgDQADgDAAgFQAAgEgDgEQgEgDgGAAIgUAAg");
	this.shape.setTransform(203.9,51.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWBAIAAhdIgiAAIAAgiIByAAIAAAiIgjAAIAABdg");
	this.shape_1.setTransform(187.4,51.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhFBdIAAi1IAkAAIAGALQAIgIAJgDQAKgEALAAQAMAAALAFQALAFAIAJQAIAKAFAMQAEAMAAAPQAAAOgEAMQgFAMgIAJQgQATgaAAQgLAAgHgDQgIgDgIgGIAAA/gAgRgxQgHAHAAALIAAAOQAAAKAHAHQAGAGAKAAQAEAAAGgCQAEgDAEgDQADgEABgGQACgFAAgHQAAgHgCgGQgBgGgDgEQgEgFgEgBQgGgDgEAAQgKAAgGAHg");
	this.shape_2.setTransform(173.5,54.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAfA/QgHgDgFgHQgJAHgKADQgKAFgLAAQgKgBgJgCQgIgEgHgFQgHgGgDgIQgDgHgBgJQAAgKAFgJQAEgHAHgFQAIgGALgCQALgEAPAAQAIAAAMADIAAgCQABgHgHgFQgGgFgJAAQgJAAgKADQgLACgMAFIgLggQAQgGAOgDQAPgCANAAQANAAAKADQALAEAIAHQAIAHAEAJQAEAKAAAMIAAApQAAAGAHAAIAFAAIAEAhQgMACgKAAQgKAAgHgFgAgTAMQgHAEABAHQAAAGAEAEQAFADAHAAQAJAAAGgGQAHgGgBgJIAAgFQgIgCgHAAQgKAAgGAEg");
	this.shape_3.setTransform(157.9,51.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAQBAIgfgwIgGAAIAAAwIgtAAIAAh/IAtAAIAAAtIAFAAIAegtIAwAAIgqA9IAvBCg");
	this.shape_4.setTransform(143.9,51.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSA/QgNgFgKgJQgKgKgFgMQgFgMAAgPQAAgOAFgMQAFgMAKgJQAKgKANgFQAMgEAPAAQAOAAANADQAOAFAMAIIgSAeQgIgFgHgDQgHgCgGAAQgHAAgGACQgFACgEAFQgEAEgCAGQgCAFAAAGQAAAHACAGQACAFAEAFQAEAEAFACQAGACAHAAQAGAAAHgCQAHgCAIgFIASAeQgNAIgNADQgNAFgOAAQgPgBgMgEg");
	this.shape_5.setTransform(123.4,51.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAZBAIAAhCIgwBCIgrAAIAAh/IAqAAIAABCIAwhCIArAAIAAB/g");
	this.shape_6.setTransform(102.3,51.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAQBAIgfgwIgGAAIAAAwIgsAAIAAh/IAsAAIAAAtIAFAAIAfgtIAvAAIgqA9IAvBCg");
	this.shape_7.setTransform(87.9,51.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAVBAIAAhdIgpAAIAABdIguAAIAAh/ICFAAIAAB/g");
	this.shape_8.setTransform(71.9,51.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag9BaIAGgjIAMACQAHAAAFgFQAFgEAEgIIACgHIg0h9IAwAAIAYBNIAZhNIAwAAIg3CKQgEALgGAJQgGAJgHAGQgGAGgJACQgJAEgKAAQgLAAgLgDg");
	this.shape_9.setTransform(56.7,54.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAQBAIgfgwIgGAAIAAAwIgsAAIAAh/IAsAAIAAAtIAFAAIAegtIAwAAIgqA9IAvBCg");
	this.shape_10.setTransform(43.1,51.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgcA/QgNgFgLgJQgKgJgFgNQgFgMAAgPQAAgOAFgMQAFgMAKgJQALgKANgFQANgEAPAAQAQAAAOAEQANAFAKAKQAKAJAFAMQAFANAAANQAAAPgFAMQgFANgKAJQgKAJgNAFQgOAEgQABQgPgBgNgEgAgKgdQgFADgDAEQgEAFgCAFQgBAHAAAFQAAAHABAGQACAGAEAEQADAFAFACQAFACAFABQAGgBAFgCQAFgCADgFQAEgEACgGQACgGAAgHQAAgFgCgHQgCgFgEgFQgDgEgFgDQgFgCgGAAQgFAAgFACg");
	this.shape_11.setTransform(27.1,51.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAVBAIAAhdIgpAAIAABdIguAAIAAh/ICFAAIAAB/g");
	this.shape_12.setTransform(11,51.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AguAxQgKgJgFgNQgFgMAAgOQAAgPAFgMQAEgMAKgKQAKgJAMgEQANgGAOABQAPAAALAEQAMAEAJAKQAJAJAFAMQAEAMAAAOIAAANIhXAAQACAKAJAGQAJAGAMAAQAIAAAJgDQAJgCAKgGIANAgQgOAGgOADQgOADgNABQgfAAgVgTgAAYgOQgCgIgFgGQgGgFgJAAQgIAAgGAFQgHAGgBAIIAsAAIAAAAg");
	this.shape_13.setTransform(185.4,23.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAuBAIAAh/IAsAAIAAB/gAhZBAIAAh/IAqAAIAAApIAcAAQAKAAAJADQAHADAIAGQAGAGADAHQAEAIAAAJQAAAKgEAIQgDAIgGAGQgIAGgHADQgJADgKAAgAgvAfIAUAAQAGAAADgDQAEgDAAgFQAAgEgEgEQgDgDgGAAIgUAAg");
	this.shape_14.setTransform(167.7,23.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgMBfQgIgBgHgCQgGgDgGgFQgGgEgGgGIgJgNIgGgOQgDgLgCgYQAAgMAFgYIAGgQQAEgHAFgGQAFgHAGgFQAGgGAHgEIAPgHIARgFIApgJIAIAjIgpAJQgPACgKAIQgJAHgDAKQAIgGAKgDQAIgDALAAQAMAAALAEQAKAFAJAKQAJAIAEALQAEALAAAOQAAAQgEANQgFANgKAJQgKALgMAEQgNAFgPAAQgHAAgIgCgAgJABQgFACgEAEQgDAEgCAGQgCAFAAAHQAAAGACAGQACAFAEAFQAIAJAKAAQAGAAAFgCQAFgCAEgFQAEgDACgHQACgGAAgGQAAgHgCgFQgCgGgEgEQgEgEgFgCQgFgBgGAAQgFAAgFABg");
	this.shape_15.setTransform(149.4,20.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAIBAQgKgEgJgGQgJgIgHgIQgFgJgDgMIgWAAIAAAwIgvAAIAAiAIAvAAIAAAvIAWAAQAGgXATgNQAJgIAKgDQALgDAOAAQAPgBANAGQANAEAJAJQALALAEAMQAFALABAPQgBAOgFAMQgEANgLAJQgJAKgNAEQgNAEgPABQgOgBgMgDgAAXgdQgFACgDAFQgEAFgCAFQgBAGAAAHQAAAGABAGQACAGAEAEQADAEAFADQAFADAGgBQAFABAFgDQAEgDAEgEQADgEACgGQACgGAAgGQAAgHgCgGQgCgFgDgFQgEgFgEgCQgFgCgFAAQgGAAgFACg");
	this.shape_16.setTransform(130.1,23.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhKBAIAEgjIAJAAQAGAAAEgEQAEgEgBgIIAAhOIB7AAIAACAIgtAAIAAhdIgiAAIAAAuQAAAXgNANQgHAHgJADQgKAEgKAAQgLAAgKgCg");
	this.shape_17.setTransform(109.6,24);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAfBAQgHgEgFgHQgIAHgLAEQgLAEgKAAQgKgBgJgCQgIgDgHgGQgHgGgDgIQgDgHAAgJQAAgKAEgJQADgHAIgFQAIgGALgCQAMgDANAAQAJAAANACIAAgBQAAgIgHgFQgGgFgJAAQgJAAgLACQgKADgLAFIgMggQAPgFAPgEQAPgDAOABQAMAAAKADQALAEAIAHQAIAHAEAJQAFAKgBAMIAAApQABAGAFAAIAHAAIADAhQgMABgKABQgKAAgHgEgAgTAMQgGAEgBAHQAAAGAFADQAFAEAHAAQAJAAAGgGQAHgGAAgKIAAgEQgJgCgHAAQgKAAgGAEg");
	this.shape_18.setTransform(88.5,23.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgXBBQgPgEgQgFIANghQAKAFAKADQAJADAJgBQAFAAAEgCQAEgDAAgFQAAgFgFgDQgEgDgIAAIgOAAIAAgaIAOAAQAHAAAEgCQAEgDAAgEQAAgDgDgDQgEgDgDABQgIAAgJABIgTAHIgNggQAOgFAOgEQANgDAMABQALgBAJADQAJADAHAFQAOALAAAQQAAAJgEAHQgGAJgHACQAJAEAGAIQAFAJAAAKQAAAIgEAHQgDAHgIAGQgHAFgKADQgJACgMABQgLgBgOgCg");
	this.shape_19.setTransform(74.6,23.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhMBPICCiuIAXARIiCCugAAlBYQgJgEgHgGQgHgHgDgIQgEgJAAgKQAAgKAEgJQADgIAHgHQAHgGAJgDQAJgDAKAAQALAAAJADQAJADAGAGQAOANAAAVQAAAKgDAJQgEAIgHAHQgGAGgJAEQgJACgLABQgKgBgJgCgAAtAcQgEAHAAAJQAAAJAEAGQAEAFAHAAQAHAAAFgFQAEgGAAgJQAAgJgEgHQgFgFgHAAQgHAAgEAFgAhLAAQgJgDgHgFQgHgIgDgIQgDgIAAgLQAAgKADgIQADgJAHgGQAHgHAJgDQAJgDALAAQAVAAAOANQAOANAAAUQAAALgEAIQgDAIgHAIQgHAFgJADQgJADgKAAQgLAAgJgDgAhDg6QgEAGAAAJQAAAKAEAGQAFAFAHAAQAHAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgHAAQgHAAgFAFg");
	this.shape_20.setTransform(51.4,21.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgiBVQgOgEgOgIIASgiQAJAGAJAEQAKADAIAAQALAAAHgGQAIgGAAgKQAAgFgCgFQgDgEgEgDQgEgDgFgBQgGgCgIAAQgRAAgSAEIAAhjIBpAAIAAAkIhBAAIAAAdIAJAAQAPAAALADQALAEAIAIQAJAIAEAIQAEALABAMQAAANgGAKQgEAKgJAJQgKAIgMAEQgNAEgNAAQgPAAgPgEg");
	this.shape_21.setTransform(32.5,21.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgXAdIALgLQAFgGACgGQgJgCgGgFQgGgHAAgKQAAgGACgFQACgFAEgEQADgDAFgCQAFgCAFAAQAGAAAFACQAFACAEAEQADAFACAFQACAGAAAHQAAAJgCAIQgDAIgFAIQgFAIgHAHQgGAHgJAFg");
	this.shape_22.setTransform(21.6,29.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AACBXIAAiCIgiAUIgPgeIA4ghIAnAAIAACtg");
	this.shape_23.setTransform(9.3,21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt3, new cjs.Rectangle(1,10,215.5,55.4), null);


(lib.txt22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmApQgKgIgEgKQgEgKAAgNQAAgMAEgKQAEgKAIgIQAJgIAKgEQALgEALAAQANAAAKAEQAKADAIAJQAHAHAEAKQAEAKAAAMIgBALIhJAAQACAJAHAEQAIAFAKABQAHAAAHgDQAIgBAIgFIAMAaQgNAGgLADQgLACgMAAQgaAAgRgQgAATgMQAAgHgFgEQgFgFgIAAQgFAAgGAFQgGAEgBAHIAkAAIAAAAg");
	this.shape.setTransform(196.6,102.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTA3IAAhPIgcAAIAAgeIBgAAIAAAeIgeAAIAABPg");
	this.shape_1.setTransform(185.1,102.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgmApQgKgIgEgKQgEgKAAgNQAAgMAEgKQAEgKAIgIQAJgIAKgEQAKgEAMAAQANAAAKAEQAKADAIAJQAHAHAEAKQAEAKAAAMIgBALIhKAAQADAJAHAEQAIAFAKABQAHAAAHgDQAIgBAIgFIAMAaQgMAGgMADQgLACgMAAQgaAAgRgQgAATgMQAAgHgFgEQgFgFgIAAQgFAAgGAFQgGAEgCAHIAlAAIAAAAg");
	this.shape_2.setTransform(173.8,102.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAOA3IAAgnQgLACgOABQgJgBgIgDQgHgCgGgGQgFgFgDgGQgDgIAAgJIAAghIAnAAIAAAfQAAAFADAEQAEAEAFgBIAPgBIAAgqIAnAAIAABtg");
	this.shape_3.setTransform(161,102.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgEBLIgPgEQgHgDgHgEQgGgEgFgFQgGgFgEgGQgEgHgDgGIgEgPQgCgIAAgIIACgPQABgIADgHQADgHAEgGQAEgGAGgFIALgKIAOgGQAHgDAIgBQAHgCAIAAQAKAAATAFQAJACATALIgRAaQgIgGgJgDQgJgDgIAAQgKAAgHADQgHADgHAHQgFAGgDAIQgDAIAAAJQAAAUALAMQAHAGAHADQAHAEAKAAQAIAAAJgDQAJgDAIgHIARAbQgTAKgJADQgTAEgKAAIgEABIgLgCg");
	this.shape_4.setTransform(147.9,100.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSA3IAAhPIgdAAIAAgeIBfAAIAAAeIgdAAIAABPg");
	this.shape_5.setTransform(130.1,102.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag6BPIAAiaIAeAAIAFAKQAHgGAIgEQAIgDAJAAQALAAAJAEQAJAEAHAIQAHAIAEAKQADALAAAMQAAANgDAJQgEAKgHAJQgOAPgWAAQgJAAgGgCQgHgDgHgFIAAA2gAgPgpQgFAFAAAKIAAALQAAAJAFAGQAGAFAIAAQAEAAAEgCIAHgEQADgEABgFQACgFAAgGQAAgFgCgFQgBgFgDgEQgDgEgEgBQgEgCgEAAQgIAAgGAGg");
	this.shape_6.setTransform(118.4,104.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAaA2QgGgDgEgHQgHAHgJADQgJADgJAAQgJAAgHgCQgHgDgGgFQgFgFgDgGQgDgHAAgHQAAgJAEgHQADgGAGgEQAHgFAJgDQAKgCAMAAIARABIAAAAQAAgGgFgEQgFgFgHAAQgIAAgJADIgTAFIgJgbQANgEAMgDQANgCALAAQALAAAJADQAIADAHAGQAHAGADAIQAEAIAAAJIAAAkQAAAFAFAAIAFAAIADAcIgSABQgIAAgHgDgAgQAKQgGADAAAHQAAAEAEAEQAFADAGAAQAHAAAFgGQAFgFAAgHIAAgFIgMgBQgJAAgFADg");
	this.shape_7.setTransform(105.2,102.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAcA3IAAg5IgTAZIgSAAIgSgZIAAA5IgkAAIAAhtIAlAAIAaAnIAbgnIAkAAIAABtg");
	this.shape_8.setTransform(91.3,102.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgEBLIgPgEQgHgDgHgEQgGgEgFgFQgGgFgEgGQgEgHgDgGIgEgPQgCgIAAgIIACgPQABgIADgHQADgHAEgGQAEgGAGgFIALgKIAOgGQAHgDAIgBQAHgCAIAAQAKAAATAFQAJACATALIgRAaQgIgGgJgDQgJgDgIAAQgKAAgHADQgHADgHAHQgFAGgDAIQgDAIAAAJQAAAUALAMQAHAGAHADQAHAEAKAAQAIAAAJgDQAJgDAIgHIARAbQgTAKgJADQgTAEgKAAIgEABIgLgCg");
	this.shape_9.setTransform(76.7,100.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAaA2QgGgDgEgHQgHAHgJADQgJADgJAAQgJAAgHgCQgHgDgGgFQgFgFgDgGQgDgHAAgHQAAgJAEgHQADgGAGgEQAHgFAJgDQAKgCAMAAIARABIAAAAQAAgGgFgEQgFgFgHAAQgIAAgJADIgTAFIgJgbQANgEAMgDQANgCALAAQALAAAJADQAIADAHAGQAHAGADAIQAEAIAAAJIAAAkQAAAFAFAAIAFAAIADAcIgSABQgIAAgHgDgAgQAKQgGADAAAHQAAAEAEAEQAFADAGAAQAHAAAFgGQAFgFAAgHIAAgFIgMgBQgJAAgFADg");
	this.shape_10.setTransform(58,102.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AASA3IAAgpIgjAAIAAApIgnAAIAAhtIAnAAIAAAoIAjAAIAAgoIAnAAIAABtg");
	this.shape_11.setTransform(44.8,102.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAOA3IgagqIgGAAIAAAqIglAAIAAhsIAlAAIAAAnIAFAAIAZgnIApAAIgkAzIAnA5g");
	this.shape_12.setTransform(184.7,78.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgYA1QgLgEgIgIQgKgIgEgKQgEgLAAgMQAAgMAEgKQAEgKAKgIQAIgIALgEQALgEANAAQANAAAMAEQALAEAJAIQAIAIAEAKQAFAKAAAMQAAAMgFALQgEAKgIAIQgJAIgLAEQgMAEgNAAQgNAAgLgEgAgIgYQgEACgDAEQgDADgCAFQgBAFgBAFQABAGABAFQACAFADAEQADADAEACQAEACAEAAQAFAAAEgCQAEgCADgDQADgEACgFQACgFgBgGQABgFgCgFQgCgFgDgDQgDgEgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_13.setTransform(171.2,78.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgTA3IAAhPIgdAAIAAgdIBhAAIAAAdIgdAAIAABPg");
	this.shape_14.setTransform(159.2,78.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAaA2QgGgEgEgFQgHAFgJAEQgJADgJAAQgJAAgHgCQgHgDgGgFQgFgEgDgHQgDgGAAgJQAAgIAEgHQADgGAGgFQAHgEAJgDQAKgCAMAAIARABIAAAAQAAgHgFgEQgFgDgHAAQgIAAgJACIgTAFIgJgbQANgEAMgCQANgDALAAQALAAAJADQAIADAHAGQAHAGADAIQAEAIAAAJIAAAjQAAAGAFAAIAFAAIADAcIgSABQgIAAgHgDgAgQAKQgGAEAAAGQAAAEAEAEQAFACAGAAQAHAAAFgEQAFgGAAgIIAAgDIgMgCQgJAAgFADg");
	this.shape_15.setTransform(147.9,78.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgSA3IAAhPIgeAAIAAgdIBgAAIAAAdIgdAAIAABPg");
	this.shape_16.setTransform(136.2,78.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPA1QgLgEgIgIQgJgIgFgKQgDgLAAgMQAAgMADgKQAFgKAJgIQAIgIALgEQALgEAMAAQAMAAALADQALADAKAHIgPAaQgGgEgGgCQgGgDgGABQgFAAgFABQgEADgEADQgDADgCAGQgCAFAAAEQAAAGACAFQACAFADADQAEAEAEABQAFADAFAAQAGAAAGgDQAGgBAGgFIAPAaQgKAHgLADQgLADgMAAQgMAAgLgEg");
	this.shape_17.setTransform(125.7,78.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgYA1QgLgEgIgIQgKgIgEgKQgEgLAAgMQAAgMAEgKQAEgKAKgIQAIgIALgEQALgEANAAQANAAAMAEQALAEAJAIQAIAIAEAKQAFAKAAAMQAAAMgFALQgEAKgIAIQgJAIgLAEQgMAEgNAAQgNAAgLgEgAgIgYQgEACgDAEQgDADgCAFQgBAFgBAFQABAGABAFQACAFADAEQADADAEACQAEACAEAAQAFAAAEgCQAEgCADgDQADgEACgFQACgFgBgGQABgFgCgFQgCgFgDgDQgDgEgEgCQgEgCgFAAQgEAAgEACg");
	this.shape_18.setTransform(113.1,78.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAaA2QgGgEgEgFQgHAFgJAEQgJADgJAAQgJAAgHgCQgHgDgGgFQgFgEgDgHQgDgGAAgJQAAgIAEgHQADgGAGgFQAHgEAJgDQAKgCAMAAIARABIAAAAQAAgHgFgEQgFgDgHAAQgIAAgJACIgTAFIgJgbQANgEAMgCQANgDALAAQALAAAJADQAIADAHAGQAHAGADAIQAEAIAAAJIAAAjQAAAGAFAAIAFAAIADAcIgSABQgIAAgHgDgAgQAKQgGAEAAAGQAAAEAEAEQAFACAGAAQAHAAAFgEQAFgGAAgIIAAgDIgMgCQgJAAgFADg");
	this.shape_19.setTransform(94.9,78.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AASA3IAAgpIgjAAIAAApIgnAAIAAhsIAnAAIAAAnIAjAAIAAgnIAnAAIAABsg");
	this.shape_20.setTransform(81.7,78.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhABCIBuiSIATAOIhtCTgAAfBKQgHgDgGgGQgGgFgDgHQgDgIAAgIQAAgJADgHQADgHAGgGQAGgFAHgDQAHgCAKAAQAIAAAIACQAIADAFAFQAMALAAASQAAAIgDAIQgDAHgGAFQgFAGgIADQgIACgIAAQgKAAgHgCgAAmAYQgEAFABAIQgBAIAEAFQAEAEAGAAQAFAAAEgEQAEgFAAgIQAAgIgEgFQgEgFgFAAQgGAAgEAFgAg/AAQgIgCgGgGQgFgFgDgHQgDgHAAgJQAAgJADgHQADgHAFgFQAGgGAIgDQAHgDAKAAQARAAAMAMQAMAKAAASQAAAJgDAHQgDAHgGAFQgGAGgHACQgIACgIAAQgKAAgHgCgAg4gxQgDAFgBAIQABAIADAFQADAFAHAAQAGAAADgFQADgFABgIQgBgIgDgFQgDgFgGAAQgHAAgDAFg");
	this.shape_21.setTransform(60.2,76.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgXBJQgKgDgJgFQgIgHgEgHQgEgIAAgKIACgLIAFgKQADgEAEgDQAFgEAGgBQgFgDgEgEIgGgHQgDgEgCgGIgBgKQAAgSAPgMQAIgGAKgCQAKgDALAAQAMAAAKADQAKACAIAGQAIAGADAHQAEAIAAAJIgBAKIgEAKIgHAHIgJAHQAGABAFAEQAEADADAEQAEAFABAFIACALQAAAJgEAJQgEAHgIAHQgIAFgLADQgLADgNABQgMgBgLgDgAgOATQgFAGAAAFQAAAIAGAFQAFAFAIgBQAJABAGgFQAFgFAAgIQAAgFgFgGQgFgEgKgDQgJADgFAEgAgMgqQgFAEAAAHQAAAFAFAFQAEAEAIACQAJgCAFgEQAEgFAAgFQAAgHgFgEQgFgFgIABQgHgBgFAFg");
	this.shape_22.setTransform(44.3,76.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt22, new cjs.Rectangle(36,66,168.9,48.2), null);


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguAxQgKgJgFgNQgFgMAAgPQAAgNAFgNQAEgMAKgJQAKgKAMgFQANgEAOAAQAPgBALAFQAMAFAJAJQAJAJAFAMQAEALAAAPIAAANIhXAAQACAKAJAGQAJAGAMAAQAIAAAJgCQAJgDAKgFIANAeQgOAHgOADQgOADgNABQgfAAgVgTgAAYgOQgCgJgFgFQgGgFgJAAQgIAAgGAFQgHAFgBAJIAsAAIAAAAg");
	this.shape.setTransform(190.6,51.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWBAIAAhdIgjAAIAAgiIByAAIAAAiIgiAAIAABdg");
	this.shape_1.setTransform(177,51.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AguAxQgKgJgFgNQgFgMAAgPQAAgNAFgNQAEgMAKgJQAKgKAMgFQANgEAOAAQAPgBALAFQAMAFAJAJQAJAJAFAMQAEALAAAPIAAANIhXAAQACAKAJAGQAJAGAMAAQAIAAAJgCQAJgDAKgFIANAeQgOAHgOADQgOADgNABQgfAAgVgTgAAYgOQgCgJgFgFQgGgFgJAAQgIAAgGAFQgHAFgBAJIAsAAIAAAAg");
	this.shape_2.setTransform(163.5,51.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AARBAIAAgtQgOADgQAAQgLAAgJgEQgIgDgHgGQgHgHgDgIQgEgIAAgLIAAgmIAuAAIAAAjQAAAHAEAEQAEAEAHAAIASgBIAAgxIAuAAIAAB/g");
	this.shape_3.setTransform(148.5,51.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFBZQgJgCgJgDQgJgDgHgFQgHgFgHgGIgLgNIgIgQQgEgIgBgJQgCgJAAgKQAAgJACgJQABgJAEgIQADgJAFgHQAFgHAGgGQAHgGAHgFIAQgIIASgFQAJgCAKAAQALAAAXAFQAKAEAWAMIgTAfQgKgHgLgDQgKgEgKAAQgLAAgJAEQgJADgHAIQgHAHgEAKQgDAJAAALQAAAXAOAPQAHAHAJAEQAJAEALAAQAKAAAKgEQALgDAKgIIATAgQgWAMgKADQgXAFgLAAIgEABQgIAAgHgCg");
	this.shape_4.setTransform(133,49.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgWBAIAAhdIgjAAIAAgiIByAAIAAAiIgiAAIAABdg");
	this.shape_5.setTransform(111.9,51.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhFBdIAAi1IAlAAIAFALQAHgIAKgDQAJgEAMAAQANAAAKAFQALAFAIAJQAIAKAFAMQAEAMAAAPQAAAOgEAMQgFAMgIAJQgRATgZAAQgKAAgIgDQgJgDgHgGIAAA/gAgSgxQgGAHAAALIAAAOQAAAKAGAHQAHAGAKAAQAEAAAFgCQAFgDADgDQAEgEACgGQACgFgBgHQABgHgCgGQgCgGgEgEQgDgFgFgBQgFgDgEAAQgKAAgHAHg");
	this.shape_6.setTransform(98,54.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAfA/QgHgDgEgHQgKAHgKADQgLAFgKAAQgLgBgIgCQgJgEgGgFQgHgGgDgIQgDgHAAgJQAAgKADgJQAFgHAHgFQAIgGALgCQAMgEAOAAQAIAAAMADIAAgCQAAgHgGgFQgGgFgJAAQgJAAgLADQgKACgLAFIgMggQAPgGAPgDQAPgCANAAQANAAALADQAKAEAIAHQAIAHAEAJQAFAKAAAMIAAApQAAAGAFAAIAGAAIADAhQgLACgKAAQgJAAgIgFgAgUAMQgFAEAAAHQgBAGAFAEQAFADAHAAQAJAAAGgGQAGgGAAgJIAAgFQgIgCgHAAQgKAAgHAEg");
	this.shape_7.setTransform(82.5,51.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAhBAIAAhDIgWAeIgWAAIgVgdIAABCIgqAAIAAh/IArAAIAfAsIAggsIArAAIAAB/g");
	this.shape_8.setTransform(66,51.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgFBZQgJgCgJgDQgJgDgHgFQgIgFgFgGIgMgNIgIgQQgDgIgCgJQgCgJAAgKQAAgJACgJQACgJADgIQADgJAFgHQAFgHAHgGQAFgGAIgFIAQgIIASgFQAIgCAKAAQAMAAAWAFQAMAEAVAMIgTAfQgLgHgKgDQgKgEgKAAQgLAAgJAEQgJADgHAIQgHAHgDAKQgEAJAAALQAAAXAOAPQAHAHAJAEQAJAEALAAQAKAAAKgEQAKgDALgIIATAgQgVAMgMADQgWAFgMAAIgDABQgIAAgHgCg");
	this.shape_9.setTransform(48.8,49.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAfA/QgHgDgFgHQgIAHgLADQgLAFgKAAQgLgBgIgCQgJgEgGgFQgHgGgDgIQgEgHAAgJQABgKAEgJQADgHAIgFQAIgGALgCQAMgEANAAQAJAAANADIAAgCQAAgHgHgFQgGgFgJAAQgJAAgKADQgLACgMAFIgLggQAQgGAOgDQAPgCAOAAQAMAAAKADQALAEAIAHQAIAHAEAJQAFAKgBAMIAAApQAAAGAHAAIAGAAIADAhQgMACgKAAQgJAAgIgFgAgTAMQgHAEAAAHQABAGAEAEQAFADAHAAQAJAAAGgGQAHgGAAgJIAAgFQgJgCgHAAQgKAAgGAEg");
	this.shape_10.setTransform(26.7,51.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAVBAIAAgvIgpAAIAAAvIguAAIAAh/IAuAAIAAAuIApAAIAAguIAuAAIAAB/g");
	this.shape_11.setTransform(11,51.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAQBAIgfgwIgGAAIAAAwIgsAAIAAh/IAsAAIAAAtIAFAAIAfgtIAvAAIgqA9IAvBCg");
	this.shape_12.setTransform(176.7,23.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgcA/QgNgEgLgKQgKgJgFgNQgFgMAAgOQAAgPAFgLQAFgNAKgKQALgJANgEQANgGAPABQAQgBAOAGQANAEAKAJQAKAKAFAMQAFAMAAAPQAAAOgFAMQgFANgKAJQgKAKgNAEQgOAEgQABQgPgBgNgEgAgKgdQgFACgDAFQgEAFgCAFQgBAGAAAHQAAAGABAGQACAGAEAEQADAEAFADQAFADAFgBQAGABAFgDQAFgDADgEQAEgEACgGQACgGAAgGQAAgHgCgGQgCgFgEgFQgDgFgFgCQgFgCgGAAQgFAAgFACg");
	this.shape_13.setTransform(160.6,23.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgWBAIAAhdIgiAAIAAgiIByAAIAAAiIgjAAIAABdg");
	this.shape_14.setTransform(146.4,23.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAfBAQgHgEgFgHQgIAHgLAEQgLAEgKAAQgKgBgJgCQgIgDgHgGQgHgGgDgIQgDgHAAgJQAAgKADgJQAEgHAIgFQAIgGALgCQAMgDANAAQAJAAANACIAAgBQAAgIgHgFQgGgFgJAAQgJAAgKACQgLADgLAFIgMggQAPgFAPgEQAPgDAOABQAMAAAKADQALAEAIAHQAIAHAEAJQAFAKgBAMIAAApQABAGAGAAIAGAAIACAhQgLABgKABQgKAAgHgEgAgUAMQgFAEgBAHQAAAGAFADQAFAEAHAAQAJAAAGgGQAHgGAAgKIAAgEQgJgCgHAAQgKAAgHAEg");
	this.shape_15.setTransform(133,23.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgWBAIAAhdIgiAAIAAgiIByAAIAAAiIgjAAIAABdg");
	this.shape_16.setTransform(119.2,23.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgSA/QgNgFgKgJQgKgKgFgMQgFgMAAgOQAAgPAFgLQAFgMAKgLQAKgJANgEQAMgGAPABQAOAAANADQAOAFAMAIIgSAdQgIgEgHgDQgHgCgGAAQgHAAgGACQgFACgEAFQgEAEgCAFQgCAHAAAGQAAAGACAGQACAGAEAEQAEAEAFACQAGACAHAAQAGAAAHgCQAHgDAIgEIASAeQgNAIgNAEQgNAEgOAAQgPgBgMgEg");
	this.shape_17.setTransform(106.7,23.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgcA/QgNgEgLgKQgKgJgFgNQgFgMAAgOQAAgPAFgLQAFgNAKgKQALgJANgEQANgGAPABQAQgBAOAGQANAEAKAJQAKAKAFAMQAFAMAAAPQAAAOgFAMQgFANgKAJQgKAKgNAEQgOAEgQABQgPgBgNgEgAgKgdQgFACgDAFQgEAFgCAFQgBAGAAAHQAAAGABAGQACAGAEAEQADAEAFADQAFADAFgBQAGABAFgDQAFgDADgEQAEgEACgGQACgGAAgGQAAgHgCgGQgCgFgEgFQgDgFgFgCQgFgCgGAAQgFAAgFACg");
	this.shape_18.setTransform(91.7,23.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAfBAQgHgEgEgHQgKAHgKAEQgLAEgKAAQgLgBgIgCQgJgDgGgGQgHgGgDgIQgDgHAAgJQAAgKADgJQAFgHAHgFQAIgGALgCQAMgDAOAAQAIAAAMACIAAgBQAAgIgGgFQgGgFgJAAQgJAAgLACQgKADgLAFIgMggQAPgFAPgEQAPgDANABQANAAALADQAKAEAIAHQAIAHAEAJQAFAKAAAMIAAApQAAAGAFAAIAGAAIADAhQgLABgKABQgJAAgIgEgAgUAMQgFAEAAAHQgBAGAFADQAFAEAHAAQAJAAAGgGQAGgGAAgKIAAgEQgIgCgHAAQgKAAgHAEg");
	this.shape_19.setTransform(70.3,23.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAVBAIAAgvIgpAAIAAAvIguAAIAAh/IAuAAIAAAuIApAAIAAguIAuAAIAAB/g");
	this.shape_20.setTransform(54.6,23.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhMBPICCiuIAXARIiCCugAAlBYQgJgEgHgGQgHgHgDgIQgEgJAAgKQAAgKAEgJQADgIAHgHQAHgGAJgDQAJgDAKAAQALAAAJADQAJADAGAGQAOANAAAVQAAAKgDAJQgEAIgHAHQgGAGgJAEQgJACgLABQgKgBgJgCgAAtAcQgEAHAAAJQAAAJAEAGQAEAFAHAAQAHAAAFgFQAEgGAAgJQAAgJgEgHQgFgFgHAAQgHAAgEAFgAhLAAQgJgDgHgFQgHgIgDgIQgDgIAAgLQAAgKADgIQADgJAHgGQAHgHAJgDQAJgDALAAQAVAAAOANQAOANAAAUQAAALgEAIQgDAIgHAIQgHAFgJADQgJADgKAAQgLAAgJgDgAhDg6QgEAGAAAJQAAAKAEAGQAFAFAHAAQAHAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgHAAQgHAAgFAFg");
	this.shape_21.setTransform(29.2,21.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgbBXQgNgDgJgIQgKgGgFgKQgFgKAAgLQABgHACgFQACgHADgFQADgFAGgEQAFgFAIgCQgHgDgEgEQgEgEgDgFQgEgFgCgGQgBgGAAgGQAAgWASgOQAJgHALgDQAMgDAOAAQAPAAALADQAMADAJAHQAJAHAFAJQAEAJAAALQAAAGgCAGIgEALQgEAFgEAEIgKAHQAHACAFAFQAFAEADAFQAFAFACAHQACAFAAAHQAAALgGAKQgEAKgKAGQgJAIgNADQgMADgQABQgOgBgNgDgAgRAYQgGAEAAAIQAAAJAHAGQAGAFAKAAQAKAAAHgFQAGgGABgJQAAgIgHgEQgFgGgMgDQgLADgGAGgAgPgyQgFAFAAAIQgBAHAGAFQAFAFAKADQAKgDAGgFQAFgFAAgHQAAgIgFgFQgHgFgJAAQgIAAgHAFg");
	this.shape_22.setTransform(10.5,21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt2, new cjs.Rectangle(1,10,199,55.4), null);


(lib.txt12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmApQgKgIgEgKQgEgKAAgNQAAgMAEgKQAEgKAIgIQAJgIAKgEQALgEALAAQANAAAKAEQAKADAIAIQAHAIAEAKQAEAKAAAMIgBALIhJAAQACAJAIAEQAHAGAKAAQAHAAAHgCQAIgDAIgEIAMAaQgNAFgLAEQgLACgMAAQgaAAgRgQgAATgMQAAgHgFgEQgFgFgIAAQgFAAgGAFQgGAEgBAHIAkAAIAAAAg");
	this.shape.setTransform(128.7,138.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgTA3IAAhPIgcAAIAAgdIBgAAIAAAdIgeAAIAABPg");
	this.shape_1.setTransform(117.2,138.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgQA1QgKgEgJgIQgIgIgEgKQgFgKAAgNQAAgLAFgLQAEgKAIgIQAJgIAKgEQALgEANAAQALAAAMADQALADALAHIgQAaQgGgEgGgCQgGgCgGAAQgFAAgGACQgDACgEADQgDADgCAFQgCAGAAAEQAAAGACAFQACAFADADQAEADADACQAGACAFABQAGgBAGgCQAGgCAGgEIAQAaQgLAGgLAEQgMADgLAAQgNAAgLgEg");
	this.shape_2.setTransform(106.6,138.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzBMIAEgdIALABQAGAAAEgEQAEgDAEgHIACgFIgthrIAoAAIAVBCIAVhCIApAAIgvB1QgDAKgGAHQgEAIgGAFQgFAFgIACQgHADgJAAQgJAAgJgDg");
	this.shape_3.setTransform(94.7,140.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgoA3IAAhsIBQAAIAAAdIgpAAIAABPg");
	this.shape_4.setTransform(84,138.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgwA3IAAhsIA1AAQAIAAAIACQAHACAGAEQAFAEADAGQADAFABAHQgBAHgDAFQgDAFgGAEQAHADAEAHQAFAHAAAIQAAAHgDAGQgDAFgGAFQgFAEgIACQgIADgJAAgAgMAdIAOAAQAFAAADgDQACgDABgEQgBgEgCgCQgDgDgFAAIgOAAgAgMgKIAMAAQAEAAADgDQADgCAAgEQAAgDgDgDQgDgDgEAAIgMAAg");
	this.shape_5.setTransform(73.4,138.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAaA2QgGgDgEgGQgHAGgJADQgJADgJAAQgJAAgHgCQgHgDgGgFQgFgEgDgHQgDgGAAgJQAAgIAEgHQADgGAGgFQAHgEAJgDQAKgCAMAAIARABIAAAAQAAgHgFgDQgFgEgHgBQgIABgJACIgTAFIgJgbQANgEAMgCQANgDALAAQALAAAJADQAIADAHAGQAHAGADAIQAEAIAAAJIAAAjQAAAGAFAAIAFAAIADAcIgSABQgIAAgHgDgAgQAKQgGADAAAHQAAAEAEAEQAFACAGABQAHAAAFgGQAFgFAAgHIAAgEIgMgCQgJAAgFADg");
	this.shape_6.setTransform(61.2,138.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgwA3IAAhsIA1AAQAJAAAHACQAHACAGAEQAFAEAEAGQACAFAAAHQAAAHgCAFQgEAFgGAEQAIADAEAHQAEAHAAAIQAAAHgDAGQgDAFgGAFQgFAEgIACQgIADgIAAgAgNAdIAPAAQAEAAAEgDQACgDAAgEQAAgEgCgCQgDgDgFAAIgPAAgAgNgKIANAAQAFAAACgDQACgCABgEQgBgDgCgDQgCgDgFAAIgNAAg");
	this.shape_7.setTransform(44.1,138.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAUA3IgUghIgTAhIgrAAIAmg3Igkg1IAqAAIASAdIATgdIAqAAIgkA1IAmA3g");
	this.shape_8.setTransform(266,114.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAaA2QgGgEgEgFQgHAFgJAEQgJADgJAAQgJAAgHgCQgHgDgGgFQgFgFgDgGQgDgGAAgJQAAgIAEgGQADgHAGgFQAHgEAJgDQAKgCAMAAIARABIAAAAQAAgHgFgEQgFgDgHAAQgIAAgJACIgTAGIgJgbQANgFAMgCQANgDALAAQALAAAJADQAIADAHAGQAHAGADAIQAEAIAAAJIAAAjQAAAGAFAAIAFAAIADAbIgSACQgIAAgHgDgAgQAKQgGAEAAAFQAAAFAEAEQAFACAGAAQAHAAAFgEQAFgGAAgIIAAgDIgMgCQgJAAgFADg");
	this.shape_9.setTransform(253.8,114.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AASA3IAAgpIgjAAIAAApIgnAAIAAhsIAnAAIAAAnIAjAAIAAgnIAnAAIAABsg");
	this.shape_10.setTransform(240.6,114.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAVA3IAAg4IgoA4IglAAIAAhsIAkAAIAAA4IAog4IAkAAIAABsg");
	this.shape_11.setTransform(227,114.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgUA3QgMgDgOgFIALgbQAJAEAIACQAIACAHAAQAFAAADgCQADgDAAgEQAAgEgEgDQgEgCgGAAIgMAAIAAgWIAMAAQAGAAADgCQAEgCAAgDQAAgEgDgCQgDgCgDAAQgHAAgHACIgQAGIgLgbQAMgFAMgCQALgDAKAAQAJAAAIADQAHACAGAEQAMAJAAANQAAAIgEAHQgEAGgGADQAHACAFAIQAFAGAAAJQAAAIgEAFQgDAGgGAFQgGAEgJADQgIACgJAAQgKAAgMgCg");
	this.shape_12.setTransform(215,114.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAaA2QgGgEgEgFQgHAFgJAEQgJADgJAAQgJAAgHgCQgHgDgGgFQgFgFgDgGQgDgGAAgJQAAgIAEgGQADgHAGgFQAHgEAJgDQAKgCAMAAIARABIAAAAQAAgHgFgEQgFgDgHAAQgIAAgJACIgTAGIgJgbQANgFAMgCQANgDALAAQALAAAJADQAIADAHAGQAHAGADAIQAEAIAAAJIAAAjQAAAGAFAAIAFAAIADAbIgSACQgIAAgHgDgAgQAKQgGAEAAAFQAAAFAEAEQAFACAGAAQAHAAAFgEQAFgGAAgIIAAgDIgMgCQgJAAgFADg");
	this.shape_13.setTransform(204,114.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgnA3IAAhsIBQAAIAAAdIgqAAIAABPg");
	this.shape_14.setTransform(193,114.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAaA2QgGgEgEgFQgHAFgJAEQgJADgJAAQgJAAgHgCQgHgDgGgFQgFgFgDgGQgDgGAAgJQAAgIAEgGQADgHAGgFQAHgEAJgDQAKgCAMAAIARABIAAAAQAAgHgFgEQgFgDgHAAQgIAAgJACIgTAGIgJgbQANgFAMgCQANgDALAAQALAAAJADQAIADAHAGQAHAGADAIQAEAIAAAJIAAAjQAAAGAFAAIAFAAIADAbIgSACQgIAAgHgDgAgQAKQgGAEAAAFQAAAFAEAEQAFACAGAAQAHAAAFgEQAFgGAAgIIAAgDIgMgCQgJAAgFADg");
	this.shape_15.setTransform(181.7,114.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAcA3IAAg5IgSAYIgSAAIgTgXIAAA4IgjAAIAAhsIAkAAIAaAlIAcglIAkAAIAABsg");
	this.shape_16.setTransform(167.7,114.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AATA3IgTghIgSAhIgsAAIAmg3Iglg1IArAAIASAdIATgdIArAAIglA1IAmA3g");
	this.shape_17.setTransform(148.9,114.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAnA3IAAhsIAlAAIAABsgAhLA3IAAhsIAjAAIAAAjIAYAAQAJAAAHACQAGADAGAFQAGAFADAFQACAHAAAJQAAAHgCAHQgDAHgGAFQgGAGgGACQgHACgJABgAgoAbIASAAQAEgBADgCQADgCAAgEQAAgFgDgDQgDgCgEAAIgSAAg");
	this.shape_18.setTransform(134.1,114.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AASA3IAAgpIgjAAIAAApIgnAAIAAhsIAnAAIAAAnIAjAAIAAgnIAmAAIAABsg");
	this.shape_19.setTransform(118.6,114.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAyA3IgZgqIgHAAIAAAqIgjAAIAAgqIgHAAIgaAqIgnAAIAkg4Ighg0IAnAAIAYAmIAGAAIAAgmIAjAAIAAAmIAGAAIAYgmIAnAAIghA0IAkA4g");
	this.shape_20.setTransform(102.9,114.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAVA3IAAg4IgoA4IgkAAIAAhsIAjAAIAAA4IAog4IAkAAIAABsg");
	this.shape_21.setTransform(87.3,114.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AASA3IAAgpIgjAAIAAApIgnAAIAAhsIAnAAIAAAnIAjAAIAAgnIAnAAIAABsg");
	this.shape_22.setTransform(73.7,114.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAOA3IgagqIgGAAIAAAqIglAAIAAhsIAlAAIAAAmIAFAAIAZgmIApAAIgkA0IAnA4g");
	this.shape_23.setTransform(61.5,114.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgwA3IAAhsIA1AAQAJAAAHACQAHACAGAEQAFAEAEAGQACAFAAAHQAAAHgCAFQgEAFgGAFQAIACAEAHQAEAHAAAIQAAAHgDAGQgDAFgGAFQgFAEgIADQgIACgIAAgAgNAcIAPAAQAEABAEgDQACgDAAgEQAAgEgCgDQgDgDgFABIgPAAgAgNgKIANAAQAFAAACgDQACgCABgEQgBgDgCgDQgCgCgFAAIgNAAg");
	this.shape_24.setTransform(44.1,114.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAMBNIgagjIgFAHIAAAcIglAAIAAiZIAlAAIAABUIAegnIAsAAIgsAzIAuA5g");
	this.shape_25.setTransform(186.1,87.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgPA1QgLgEgIgIQgJgIgFgKQgDgLAAgMQAAgMADgJQAFgLAJgIQAIgIALgEQALgEAMAAQAMAAALADQALADALAHIgQAaQgGgEgGgCQgGgCgGgBQgGAAgFACQgDACgEAEQgDAEgCAFQgCAEAAAFQAAAGACAFQACAEADAEQAEAEADACQAFABAGAAQAGAAAGgBQAGgCAGgFIAQAaQgLAGgLAEQgLADgMAAQgMAAgLgEg");
	this.shape_26.setTransform(173.9,90.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAaA2QgGgEgEgFQgHAFgJAEQgJADgJAAQgJAAgHgDQgHgCgGgFQgFgFgDgGQgDgHAAgIQAAgIAEgGQADgHAGgFQAHgEAJgCQAKgDAMAAIARACIAAgBQAAgGgFgFQgFgDgHAAQgIAAgJABIgTAHIgJgbQANgFAMgDQANgCALAAQALAAAJADQAIADAHAGQAHAGADAIQAEAIAAAKIAAAjQAAAFAFAAIAFgBIADAcIgSACQgIAAgHgDgAgQAKQgGAEAAAFQAAAFAEADQAFADAGAAQAHAAAFgEQAFgGAAgIIAAgDIgMgCQgJAAgFADg");
	this.shape_27.setTransform(162.1,90.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgIBMQgIgEgHgGIgFAKIgeAAIAAiaIAmAAIAAA2QAHgFAHgDQAGgCAJAAQALAAAJAEQAJAEAHAIQAHAIAEAKQADAJAAANQAAAMgDALQgEAKgHAIQgOAQgWAAQgJAAgIgDgAgPABQgFAGAAAJIAAAMQAAAJAFAGQAGAGAIAAQAEAAAEgCIAHgGQADgEABgEQACgFAAgGQAAgGgCgFQgBgFgDgDQgDgDgEgCQgEgCgEAAQgIAAgGAFg");
	this.shape_28.setTransform(149.2,87.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgeAPIAAgdIA9AAIAAAdg");
	this.shape_29.setTransform(138.6,90);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AATBNIAAg+QAAgIgGgEQgEgFgHAAQgJAAgFAGQgGAFAAAKIAAA6IgnAAIAAiZIAnAAIAAA3QAHgGAIgDQAHgDAJAAQAKAAAIADQAIADAGAGQAHAGADAIQACAHAAAIIAABFg");
	this.shape_30.setTransform(128.5,87.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgVA3QgMgCgNgFIAJgbQASAHARAAQAEAAAEgCQACgCAAgDQAAgEgIgCIgSgFIgKgDQgEgDgEgEQgEgDgDgFQgCgFAAgIQAAgHAEgHQADgGAGgFQAHgFAHgDQAJgCAJAAQAUAAAXAIIgJAcIgRgGIgOgBQgEgBgDACQgDACAAADQAAAEAHACIATAFIAKADQAFADAEADQAEADACAGQACAFAAAIQAAAIgDAGQgDAHgHAFQgGAFgJACQgIADgKAAQgKAAgLgCg");
	this.shape_31.setTransform(116.4,90.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAaA2QgGgEgEgFQgHAFgJAEQgJADgJAAQgJAAgHgDQgHgCgGgFQgFgFgDgGQgDgHAAgIQAAgIAEgGQADgHAGgFQAHgEAJgCQAKgDAMAAIARACIAAgBQAAgGgFgFQgFgDgHAAQgIAAgJABIgTAHIgJgbQANgFAMgDQANgCALAAQALAAAJADQAIADAHAGQAHAGADAIQAEAIAAAKIAAAjQAAAFAFAAIAFgBIADAcIgSACQgIAAgHgDgAgQAKQgGAEAAAFQAAAFAEADQAFADAGAAQAHAAAFgEQAFgGAAgIIAAgDIgMgCQgJAAgFADg");
	this.shape_32.setTransform(105.2,90.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgQA1QgKgEgJgIQgIgIgEgKQgEgLgBgMQABgMAEgJQAEgLAIgIQAJgIAKgEQAMgEAMAAQAMAAALADQALADAKAHIgPAaQgGgEgGgCQgGgCgFgBQgHAAgEACQgEACgDAEQgEAEgCAFQgCAEAAAFQAAAGACAFQACAEAEAEQADAEAEACQAEABAHAAQAFAAAGgBQAGgCAGgFIAPAaQgKAGgLAEQgLADgMAAQgMAAgMgEg");
	this.shape_33.setTransform(93.4,90.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhABCIBuiSIATAOIhuCTgAAfBKQgHgDgGgGQgGgFgDgHQgDgIAAgIQAAgJADgHQADgHAGgGQAGgFAHgDQAIgCAJAAQAIAAAIACQAIADAFAFQAMALAAASQAAAIgDAIQgDAHgGAFQgFAGgIADQgIACgIAAQgJAAgIgCgAAmAYQgDAFgBAIQABAIADAFQAEAEAGAAQAGAAADgEQAEgFAAgIQAAgIgEgFQgDgFgGAAQgGAAgEAFgAhAAAQgHgCgFgGQgGgFgDgHQgDgHAAgJQAAgJADgHQADgHAGgFQAFgGAHgDQAIgDAJAAQASAAAMAMQAMAKAAASQAAAJgDAHQgDAHgGAFQgGAGgHACQgHACgKAAQgJAAgIgCgAg4gxQgEAFABAIQgBAIAEAFQAEAFAFAAQAGAAAEgFQAEgFAAgIQAAgIgEgFQgEgFgGAAQgFAAgEAFg");
	this.shape_34.setTransform(72.8,88.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgNBMIgLgFIgKgFIgJgJIgHgMIgEgNQgDgJgBgXQAAgLAEgUIAEgNIAHgLIAJgJIAKgHQAFgCAGgBQAHgCAGABQAHgBAGACQAGABAGACQAGADAEAEIAJAJQAEAEACAHIAFANQAEAUAAALQgBAXgDAJIgFANQgCAGgEAGIgJAJIgKAFIgMAFIgNABIgNgBgAgJgpQgEADgDAGQgDAGgCAIQgBAIAAAKQAAALABAIQACAJADAFQADAGAEADQAFADAEAAQAGAAAEgDQADgDAEgGQADgFABgJQABgIAAgLQAAgKgBgIQgBgIgDgGQgEgGgDgDQgEgDgGAAQgEAAgFADg");
	this.shape_35.setTransform(57,88.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AACBKIAAhuIgdARIgNgaIAwgcIAhAAIAACTg");
	this.shape_36.setTransform(43.3,88.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt12, new cjs.Rectangle(36,78,238.2,72.3), null);


(lib.txt1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AguAxQgKgKgFgMQgFgMAAgPQAAgOAFgMQAEgMAKgJQAKgKAMgFQANgEAOgBQAPAAALAFQAMAFAJAJQAJAJAFAMQAEALAAAPIAAANIhXAAQACAKAJAGQAJAGAMAAQAIAAAJgDQAJgCAKgFIANAeQgOAHgOADQgOADgNAAQgfAAgVgSgAAYgOQgCgJgFgEQgGgGgJAAQgIAAgGAGQgHAEgBAJIAsAAIAAAAg");
	this.shape.setTransform(110.2,69.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWBAIAAhdIgjAAIAAgiIByAAIAAAiIgiAAIAABdg");
	this.shape_1.setTransform(96.6,69.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSA/QgNgFgKgKQgKgJgFgMQgFgMAAgPQAAgNAFgNQAFgMAKgJQAKgKANgFQAMgEAPgBQAOABANAEQAOAEAMAHIgSAfQgIgFgHgCQgHgDgGAAQgHAAgGADQgFACgEAEQgEAEgCAGQgCAFAAAGQAAAHACAGQACAFAEAEQAEAFAFACQAGACAHAAQAGAAAHgCQAHgDAIgFIASAgQgNAHgNADQgNAEgOAAQgPABgMgFg");
	this.shape_2.setTransform(84.1,69.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag9BaIAGgjIALABQAIAAAFgDQAFgFAEgIIACgGIg0h+IAwAAIAYBNIAZhNIAwAAIg3CJQgEAMgHAJQgFAJgGAGQgIAGgIACQgJAEgKAAQgKAAgMgDg");
	this.shape_3.setTransform(70,72.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgvBAIAAh/IBfAAIAAAiIgxAAIAABdg");
	this.shape_4.setTransform(57.4,69.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag5BAIAAh/IA/AAQAKAAAJACQAJADAGAEQAHAFADAHQAEAGAAAJQAAAIgEAGQgDAGgIAFQAJADAFAIQAFAJAAAJQAAAIgEAHQgDAHgHAFQgHAFgIADQgJACgLAAgAgPAiIASAAQAFAAAEgEQADgDAAgFQAAgFgDgDQgEgDgFAAIgSAAgAgPgMIAPAAQAFAAADgDQAEgDAAgFQAAgEgEgDQgDgDgFAAIgPAAg");
	this.shape_5.setTransform(44.8,69.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAfA/QgHgDgFgHQgIAHgLADQgKAEgLAAQgLAAgIgCQgIgEgHgFQgHgGgDgHQgDgIgBgJQAAgKAFgIQAEgIAHgFQAIgGALgDQAMgDAOAAQAIAAAMACIAAgBQAAgHgGgFQgGgFgJAAQgJAAgKACQgLADgMAEIgLgfQAPgFAPgDQAPgDANgBQANABAKAEQALADAIAHQAIAHAEAKQAEAJABALIAAAqQgBAHAHAAIAFgBIAEAgQgMACgKAAQgKAAgHgEgAgTAMQgHAEABAHQAAAFAEAFQAFADAHAAQAJAAAGgGQAGgGAAgJIAAgFQgIgCgHAAQgKAAgGAEg");
	this.shape_6.setTransform(30.5,69.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag5BAIAAh/IA/AAQAKAAAJACQAJADAGAEQAHAFADAHQAEAGAAAJQAAAIgEAGQgDAGgIAFQAJADAFAIQAFAJAAAJQAAAIgEAHQgDAHgHAFQgHAFgIADQgJACgLAAgAgPAiIASAAQAFAAAEgEQADgDAAgFQAAgFgDgDQgEgDgFAAIgSAAgAgPgMIAPAAQAFAAADgDQAEgDAAgFQAAgEgEgDQgDgDgFAAIgPAAg");
	this.shape_7.setTransform(10.1,69.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAXBAIgXglIgWAlIg0AAIAthBIgrg+IAzAAIAVAiIAWgiIAyAAIgqA+IAtBBg");
	this.shape_8.setTransform(272.6,41.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAfA/QgHgDgEgHQgKAHgKADQgKAFgLAAQgKAAgJgDQgIgEgHgFQgHgGgDgHQgEgIABgJQAAgKADgJQAEgHAIgFQAIgGALgCQALgEAOAAQAJAAANACIAAgBQgBgHgGgFQgGgFgJAAQgJAAgLADQgKACgLAEIgMgfQAPgGAPgDQAPgCAOAAQAMAAALADQAKAEAIAHQAIAHAEAJQAFAKgBALIAAAqQABAGAFABIAHgBIACAgQgLADgKAAQgJAAgIgFgAgUAMQgFAEgBAHQAAAFAFAFQAFADAHAAQAJAAAGgGQAGgGABgJIAAgFQgJgCgHAAQgKAAgHAEg");
	this.shape_9.setTransform(258.2,41.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAVBAIAAgvIgpAAIAAAvIguAAIAAh/IAuAAIAAAuIApAAIAAguIAuAAIAAB/g");
	this.shape_10.setTransform(242.5,41.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAZBAIAAhCIgwBCIgrAAIAAh/IAqAAIAABCIAwhCIArAAIAAB/g");
	this.shape_11.setTransform(226.5,41.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYBAQgOgCgQgHIAMgfQALAEAKADQAJACAIABQAGAAAEgDQAEgDAAgEQAAgGgFgDQgEgDgIAAIgOAAIAAgaIAOAAQAHAAADgDQAFgCAAgEQAAgDgDgDQgDgCgFAAQgHAAgJACIgUAFIgMgfQAPgGANgDQAOgCALAAQALAAAJACQAJADAHAGQAOAKAAAQQAAAJgFAIQgEAHgIAEQAJACAFAJQAGAJAAAJQAAAJgDAHQgFAHgHAGQgHAFgKADQgKADgLAAQgLAAgPgEg");
	this.shape_12.setTransform(212.3,41.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAfA/QgHgDgFgHQgJAHgKADQgKAFgLAAQgKAAgJgDQgIgEgHgFQgHgGgDgHQgDgIgBgJQAAgKAFgJQAEgHAHgFQAIgGALgCQALgEAPAAQAIAAAMACIAAgBQABgHgHgFQgGgFgJAAQgJAAgKADQgLACgMAEIgLgfQAQgGAOgDQAPgCANAAQANAAAKADQALAEAIAHQAIAHAEAJQAEAKAAALIAAAqQAAAGAHABIAFgBIAEAgQgMADgKAAQgKAAgHgFgAgTAMQgHAEAAAHQABAFAEAFQAFADAHAAQAJAAAGgGQAHgGgBgJIAAgFQgIgCgHAAQgKAAgGAEg");
	this.shape_13.setTransform(199.3,41.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgvBAIAAh/IBfAAIAAAiIgxAAIAABdg");
	this.shape_14.setTransform(186.2,41.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAfA/QgHgDgEgHQgKAHgKADQgLAFgKAAQgLAAgIgDQgJgEgGgFQgHgGgDgHQgDgIAAgJQAAgKADgJQAFgHAHgFQAIgGALgCQAMgEAOAAQAIAAAMACIAAgBQAAgHgGgFQgGgFgJAAQgJAAgLADQgKACgLAEIgMgfQAPgGAPgDQAPgCANAAQANAAALADQAKAEAIAHQAIAHAEAJQAFAKAAALIAAAqQAAAGAFABIAHgBIACAgQgLADgKAAQgJAAgIgFgAgUAMQgFAEAAAHQgBAFAFAFQAFADAHAAQAJAAAGgGQAGgGAAgJIAAgFQgIgCgHAAQgKAAgHAEg");
	this.shape_15.setTransform(172.9,41.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAhBAIAAhDIgWAeIgWAAIgVgdIAABCIgqAAIAAh/IArAAIAfAsIAggsIArAAIAAB/g");
	this.shape_16.setTransform(156.4,41.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAXBAIgXglIgWAlIgzAAIAthBIgrg+IAyAAIAVAiIAWgiIAyAAIgrA+IAtBBg");
	this.shape_17.setTransform(134.2,41.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAuBAIAAh/IAsAAIAAB/gAhZBAIAAh/IAqAAIAAApIAcAAQAKAAAJADQAHADAIAGQAGAGAEAHQADAIAAAJQAAAKgDAIQgEAIgGAGQgIAGgHADQgJADgKAAgAgvAfIAUAAQAGAAAEgDQADgDAAgFQAAgEgDgEQgEgDgGAAIgUAAg");
	this.shape_18.setTransform(116.6,41.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAVBAIAAgvIgpAAIAAAvIguAAIAAh/IAuAAIAAAuIApAAIAAguIAuAAIAAB/g");
	this.shape_19.setTransform(98.2,41.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AA7BAIgdgwIgJAAIAAAwIgpAAIAAgwIgJAAIgeAwIguAAIAphCIgmg9IAuAAIAcAtIAIAAIAAgtIApAAIAAAtIAIAAIAcgtIAuAAIgnA9IAqBCg");
	this.shape_20.setTransform(79.8,41.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAZBAIAAhCIgwBCIgrAAIAAh/IAqAAIAABCIAwhCIArAAIAAB/g");
	this.shape_21.setTransform(61.2,41.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAVBAIAAgvIgpAAIAAAvIguAAIAAh/IAuAAIAAAuIApAAIAAguIAuAAIAAB/g");
	this.shape_22.setTransform(45.2,41.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AARBAIgggwIgHAAIAAAwIgsAAIAAh/IAsAAIAAAtIAGAAIAegtIAxAAIgrA9IAuBCg");
	this.shape_23.setTransform(30.8,41.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ag5BAIAAh/IA/AAQAKAAAJACQAJADAGAEQAHAFADAHQAEAGAAAJQAAAIgEAGQgDAGgIAFQAJADAFAIQAFAJAAAJQAAAIgEAHQgDAHgHAFQgHAFgIADQgJACgLAAgAgPAiIASAAQAFAAAEgEQADgDAAgFQAAgFgDgDQgEgDgFAAIgSAAgAgPgMIAPAAQAFAAADgDQAEgDAAgFQAAgEgEgDQgDgDgFAAIgPAAg");
	this.shape_24.setTransform(10.1,41.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAPBcIgfgqIgGAHIAAAjIgsAAIAAi3IAsAAIAABkIAkgtIAzAAIg0A7IA2BFg");
	this.shape_25.setTransform(178.1,11.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgSA/QgNgFgKgJQgKgKgFgMQgFgMAAgPQAAgOAFgMQAFgLAKgLQAKgJANgFQAMgEAPAAQAOAAANADQAOAFAMAIIgSAdQgIgEgHgDQgHgCgGAAQgHAAgGACQgFACgEAFQgEAEgCAFQgCAGAAAGQAAAHACAGQACAGAEAEQAEAEAFACQAGACAHAAQAGAAAHgCQAHgDAIgEIASAeQgNAIgNADQgNAFgOAAQgPgBgMgEg");
	this.shape_26.setTransform(163.7,13.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AAfA/QgHgDgFgHQgJAHgKADQgKAFgLAAQgKgBgJgCQgIgDgHgGQgHgGgDgIQgDgHgBgJQAAgKAFgJQAEgHAHgFQAIgGALgCQALgDAPgBQAIABAMACIAAgBQABgIgHgFQgGgFgJAAQgJAAgKADQgLACgMAFIgLggQAQgGAOgDQAPgCANAAQANAAAKADQALAEAIAHQAIAHAEAJQAEAKAAAMIAAApQAAAGAHAAIAFAAIAEAhQgMACgKAAQgKAAgHgFgAgTAMQgHAEAAAHQABAGAEAEQAFADAHAAQAJAAAGgGQAHgGgBgJIAAgFQgIgCgHAAQgKAAgGAEg");
	this.shape_27.setTransform(149.8,13.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgKBaQgKgEgHgIIgFAMIglAAIAAi2IAuAAIAABAQAHgHAJgCQAIgEAKAAQANAAAKAFQALAFAIAJQAIAKAFAMQAEALAAAPQAAAPgEAMQgFAMgIAJQgRATgZAAQgMAAgJgDgAgSABQgGAHAAALIAAAOQAAAKAGAIQAHAGAKAAQAEAAAFgCQAFgDADgEQAEgEACgGQACgFAAgHQAAgHgCgGQgCgGgEgEQgDgDgFgCQgFgDgEAAQgKAAgHAGg");
	this.shape_28.setTransform(134.5,11.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgkARIAAghIBJAAIAAAhg");
	this.shape_29.setTransform(122,13.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAWBcIAAhLQAAgIgGgGQgGgFgIAAQgKAAgGAGQgHAHAAAMIAABFIguAAIAAi3IAuAAIAABCQAHgHAKgEQAJgDALAAQAMAAAJADQAJAEAIAHQAGAHAEAJQAEAJAAAKIAABSg");
	this.shape_30.setTransform(109.9,11.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgaBBQgOgDgOgEIAKghQAWAJATAAQAFAAAEgCQAEgDAAgEQAAgFgKgDIgVgFIgMgEQgGgDgEgEQgEgEgDgGQgDgHAAgJQAAgJAEgHQADgHAIgHQAIgGAJgDQAKgCALAAQAXAAAbAJIgJAhIgUgGQgJgDgJAAQgEAAgEADQgDACAAADQAAAFAJACIAWAGIAMADIAKAIQAFADACAHQADAHAAAJQAAAJgEAIQgEAHgIAHQgHAFgKAEQgKADgMAAQgMgBgOgCg");
	this.shape_31.setTransform(95.6,13.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAfA/QgHgDgFgHQgIAHgLADQgLAFgKAAQgKgBgJgCQgJgDgGgGQgHgGgDgIQgEgHAAgJQAAgKAFgJQADgHAIgFQAIgGALgCQAMgDANgBQAJABAMACIAAgBQABgIgHgFQgGgFgJAAQgJAAgKADQgLACgMAFIgLggQAQgGAOgDQAPgCAOAAQAMAAAKADQALAEAIAHQAIAHAEAJQAEAKAAAMIAAApQAAAGAHAAIAFAAIAEAhQgMACgKAAQgJAAgIgFgAgTAMQgHAEAAAHQABAGAEAEQAFADAHAAQAJAAAGgGQAHgGgBgJIAAgFQgIgCgHAAQgKAAgGAEg");
	this.shape_32.setTransform(82.4,13.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgSA/QgNgFgKgJQgKgKgFgMQgFgMAAgPQAAgOAFgMQAFgLAKgLQAKgJANgFQAMgEAPAAQAOAAANADQAOAFAMAIIgSAdQgIgEgHgDQgHgCgGAAQgHAAgGACQgFACgEAFQgEAEgCAFQgCAGAAAGQAAAHACAGQACAGAEAEQAEAEAFACQAGACAHAAQAGAAAHgCQAHgDAIgEIASAeQgNAIgNADQgNAFgOAAQgPgBgMgEg");
	this.shape_33.setTransform(68.5,13.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhMBPICCiuIAXARIiCCugAAlBYQgJgEgHgHQgHgGgDgIQgEgJAAgKQAAgLAEgIQADgIAHgHQAHgHAJgCQAJgDAKAAQALAAAJADQAJACAGAHQAOANAAAVQAAAKgDAJQgEAIgHAGQgGAHgJAEQgJADgLAAQgKAAgJgDgAAtAcQgEAHAAAJQAAAJAEAGQAEAFAHABQAHgBAFgFQAEgGAAgJQAAgJgEgHQgFgFgHAAQgHAAgEAFgAhLAAQgJgDgHgFQgHgHgDgJQgDgIAAgLQAAgKADgIQADgJAHgGQAHgHAJgDQAJgEALABQAVAAAOANQAOANAAAUQAAALgEAIQgDAJgHAHQgHAFgJADQgJADgKAAQgLAAgJgDgAhDg6QgEAGAAAJQAAAKAEAGQAFAFAHAAQAHAAAEgFQAEgGAAgKQAAgJgEgGQgEgFgHAAQgHAAgFAFg");
	this.shape_34.setTransform(44.1,11.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgPBZQgHgCgHgDQgGgCgFgFQgGgEgFgGIgIgNIgFgQQgDgLgCgaQAAgOAFgYIAFgPIAIgOQAFgGAGgEQAFgFAGgDQAHgCAHgCQAIgCAHABQAJgBAHACQAHACAHACQAGADAGAFQAFAEAFAGIAIAOIAFAPQAFAYAAAOQgCAagDALIgFAQIgIANQgFAGgFAEQgGAFgGACQgHADgHACQgHABgJABQgHgBgIgBgAgKgxQgFAEgEAHQgDAHgCAJQgCAKAAAMQAAANACAKQACAKADAGQAEAIAFADQAFADAFABQAHgBAEgDQAFgDAEgIQADgGACgKQACgKAAgNQAAgMgCgKQgCgJgDgHQgEgHgFgEQgEgDgHAAQgFAAgFADg");
	this.shape_35.setTransform(25.4,11.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AACBXIAAiCIgiAUIgPgeIA4ghIAnAAIAACtg");
	this.shape_36.setTransform(9.3,11.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt1, new cjs.Rectangle(1,0,281,83.1), null);


(lib.logo_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A7VTiMAAAgnDMA2rAAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_bg, new cjs.Rectangle(-175,-125,350,250), null);


(lib.fade_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgrvATiMAAAgnDMBXfAAAMAAAAnDg");
	this.shape.setTransform(280,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.fade_anim, new cjs.Rectangle(0,0,560,250), null);


(lib.card_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.card();
	this.instance.parent = this;
	this.instance.setTransform(-126,-92,0.9,0.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.card_anim, new cjs.Rectangle(-126,-92,252,184.5), null);


(lib._18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGAdIAAgWIgWAAIAAgMIAWAAIAAgXIAMAAIAAAXIAXAAIAAAMIgXAAIAAAWg");
	this.shape.setTransform(14.1,-0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLAoIgKgFQgEgDgCgEQgCgEAAgFIABgHIADgFIAFgFIAHgCIgGgDIgFgEQgCgDAAgDIgCgGQAAgFACgEQACgEAEgDQAIgGAMAAQAGAAAFACQAFABAEADQAIAGAAAKIgBAGIgDAGIgEAEIgGADIAHACIAFAFIADAFIABAHQAAAFgCAEQgCAEgEADIgKAFQgFACgHAAQgGAAgFgCgAgGAHIgEACIgDAEIgBAFQAAADABACIADAEIAFACIAFABIAGgBIAFgCIADgEIABgFIgBgFIgDgEIgFgCIgGgCgAgFgcIgEACIgDAEIgBAEQAAAFAEADQADADAGABQAHgBADgDQADgDAAgFIgBgEIgDgEIgEgCIgFgBIgFABg");
	this.shape_1.setTransform(7.2,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAEAoIAAhAIgRAKIgGgKIAagPIAMAAIAABPg");
	this.shape_2.setTransform(-0.3,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._18, new cjs.Rectangle(-19.5,-7.4,39,15), null);


(lib.logo_white_vertical = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmJCZIAAA4IgPAAIAAhvIAPAAIAAAxIAugxIATAAIgxA0IA0A4IgRAEgApDCwIgtAAIgNAhIgPAAIArhvIAOAAIArBsIgPAEgApsCiIAjAAIgRgvgAnIDRIAAg0Ig4AAIAAA0IgPAAIAAhvIAPAAIAAAtIA4AAIAAgtIAPAAIAABvgArfDRIAAhvIA4AAIACANIgsAAIAAAgIAPAAQASAAAJAIQAKAJAAAPQAAARgLAIQgKAJgTAAgArRDEIANAAQAYgBgBgTQABgUgXAAIgOAAgAjIAjIAAjTQABgLgJgGIgIgEIAAgKIA0AAIAAATQAIgJANgGQANgGAPAAQAjAAAUAVQAVAWAAAkIAAALQAAAigWAXQgWAYgjABQgcgBgSgTIAABcgAiWi1QgMAKgCANIAABIQADAMAMAKQAMAJAOAAIAEAAQAQgBALgNQALgMgBgQIAAg2QAAgZgRgLIgRgFIgHAAQgQgBgLAMgAJfg8QgbgXAAgiIAAgJQAAgkAZgYQAZgXAkAAQAkAAAYAZQAYAZAAAjIh/AAIAAAcQAAASANAMQANANAWAAQAfAAAXgZIAPACQgdAngtAAQgigBgZgWgAJ8i0QgNANAAASIAAAIIBWAAIAAgIQAAgSgMgNQgNgMgSAAQgSAAgMAMgArUg+QgZgXAAgeIAAgOQAAgcAVgYQAZgcAqAAQAnAAAZAZQAYAXAAAiIAAALQAAAggaAXQgbAYgjAAQglgBgagYgAq1i1QgNAMAAASIAAA1QAAATAMANQAMANAVAAQATAAANgNQANgNAAgTIAAg1QAAgRgNgMQgNgOgTAAQgTAAgNANgAIAgoIAAh0IhWB0IgaAAIAAiIQAAgLgJgHIgIgEIAAgJIAzAAIAAB2IBXh2IAaAAIAACngAERgoIAAiWIgbAAQgLgBgEAJIgDAIIgLAAIAAghICSAAIAAAhIgLAAQAAgEgDgEQgFgIgLAAIgYAAIAACWgACegoIAAiGQAAgNgJgGIgJgEIAAgKIA1AAIAACngAACgoIAAiIQgBgLgGgHIgIgDIAAgKIAzAAIAABAIAqAAQAbAAAPANQAPANAAAWIAAAIQAAAVgPANQgQANgXAAgAAmg4IAeAAQAMgBAJgIQAJgKAAgMIAAgGQABgQgJgIQgJgKgNABIgeAAgAkcgoIghg9QgJgUgLABIgNAAIAABQIgkAAIAAiIQAAgLgJgHIgJgDIAAgKIA2AAIAABGIAPAAIAHgCQAIgEAEgJIAZgsQAGgLAGAAIAjAAIAAAMQgNAAgPAbQgRAggKAHQAIACAIAMIAaAvIAEAJQAHAHAHAAIAAAMgAoAgoIAAiWIgaAAQgQAAgCAQIgLAAIAAghICSAAIAAAhIgLAAQAAgEgDgEQgFgIgKAAIgaAAIAACWg");
	this.shape.setTransform(125,32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B4E3").s().p("AiICKQg6g5AAhRQAAhPA6g6QA4g5BQAAQBRAAA4A5QA6A6AABPQAABRg6A5Qg4A5hRAAQhQAAg4g5gAAjh3QgDAGABAHQABAIAIAEQARAIAKAQQALARAAATIAABFQAAAUgLAQQgKARgRAIQgIADgBAIQgBAHADAGQAEAIAKgBQAEAAAGgCIAJgEQAegPARgeQARgfAAgjIAAgTQAAgkgRgdQgRgegegQIgKgEQgEgCgFAAQgKAAgEAHgAg5h8IgJAEQgeAQgSAeQgRAdAAAkIAAATQAAAjARAfQASAeAeAPIAJAEQAFACAEAAQAKABAEgIQAEgGgBgHQgDgIgGgDQgRgIgLgRQgLgQAAgUIAAhFQAAgTALgRQALgQARgIQAGgEADgIQABgHgEgGQgEgHgKAAQgFAAgEACg");
	this.shape_1.setTransform(19.5,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_white_vertical, new cjs.Rectangle(0,0,200,53), null);


(lib.logo_black_vertical = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#525252").s().p("AmJCZIAAA4IgPAAIAAhvIAPAAIAAAxIAugxIATAAIgxA0IA0A4IgRAEgApDCwIgtAAIgNAhIgPAAIArhvIAOAAIArBsIgPAEgApsCiIAjAAIgRgvgAnIDRIAAg0Ig4AAIAAA0IgPAAIAAhvIAPAAIAAAtIA4AAIAAgtIAPAAIAABvgArfDRIAAhvIA4AAIACANIgsAAIAAAgIAPAAQASAAAJAIQAKAJAAAPQAAARgLAIQgKAJgTAAgArRDEIANAAQAYgBgBgTQABgUgXAAIgOAAgAjIAjIAAjTQABgLgJgGIgIgEIAAgKIA0AAIAAATQAIgJANgGQANgGAPAAQAjAAAUAVQAVAWAAAkIAAALQAAAigWAXQgWAYgjABQgcgBgSgTIAABcgAiWi1QgMAKgCANIAABIQADAMAMAKQAMAJAOAAIAEAAQAQgBALgNQALgMgBgQIAAg2QAAgZgRgLIgRgFIgHAAQgQgBgLAMgAJfg8QgbgXAAgiIAAgJQAAgkAZgYQAZgXAkAAQAkAAAYAZQAYAZAAAjIh/AAIAAAcQAAASANAMQANANAWAAQAfAAAXgZIAPACQgdAngtAAQgigBgZgWgAJ8i0QgNANAAASIAAAIIBWAAIAAgIQAAgSgMgNQgNgMgSAAQgSAAgMAMgArUg+QgZgXAAgeIAAgOQAAgcAVgYQAZgcAqAAQAnAAAZAZQAYAXAAAiIAAALQAAAggaAXQgbAYgjAAQglgBgagYgAq1i1QgNAMAAASIAAA1QAAATAMANQAMANAVAAQATAAANgNQANgNAAgTIAAg1QAAgRgNgMQgNgOgTAAQgTAAgNANgAIAgoIAAh0IhWB0IgaAAIAAiIQAAgLgJgHIgIgEIAAgJIAzAAIAAB2IBXh2IAaAAIAACngAERgoIAAiWIgbAAQgLgBgEAJIgDAIIgLAAIAAghICSAAIAAAhIgLAAQAAgEgDgEQgFgIgLAAIgYAAIAACWgACegoIAAiGQAAgNgJgGIgJgEIAAgKIA1AAIAACngAACgoIAAiIQgBgLgGgHIgIgDIAAgKIAzAAIAABAIAqAAQAbAAAPANQAPANAAAWIAAAIQAAAVgPANQgQANgXAAgAAmg4IAeAAQAMgBAJgIQAJgKAAgMIAAgGQABgQgJgIQgJgKgNABIgeAAgAkcgoIghg9QgJgUgLABIgNAAIAABQIgkAAIAAiIQAAgLgJgHIgJgDIAAgKIA2AAIAABGIAPAAIAHgCQAIgEAEgJIAZgsQAGgLAGAAIAjAAIAAAMQgNAAgPAbQgRAggKAHQAIACAIAMIAaAvIAEAJQAHAHAHAAIAAAMgAoAgoIAAiWIgaAAQgQAAgCAQIgLAAIAAghICSAAIAAAhIgLAAQAAgEgDgEQgFgIgKAAIgaAAIAACWg");
	this.shape.setTransform(125,32);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00B4E3").s().p("AiICKQg6g5AAhRQAAhPA6g6QA4g5BQAAQBRAAA4A5QA6A6AABPQAABRg6A5Qg4A5hRAAQhQAAg4g5gAAjh3QgDAGABAHQABAIAIAEQARAIAKAQQALARAAATIAABFQAAAUgLAQQgKARgRAIQgIADgBAIQgBAHADAGQAEAIAKgBQAEAAAGgCIAJgEQAegPARgeQARgfAAgjIAAgTQAAgkgRgdQgRgegegQIgKgEQgEgCgFAAQgKAAgEAHgAg5h8IgJAEQgeAQgSAeQgRAdAAAkIAAATQAAAjARAfQASAeAeAPIAJAEQAFACAEAAQAKABAEgIQAEgGgBgHQgDgIgGgDQgRgIgLgRQgLgQAAgUIAAhFQAAgTALgRQALgQARgIQAGgEADgIQABgHgEgGQgEgHgKAAQgFAAgEACg");
	this.shape_1.setTransform(19.5,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.logo_black_vertical, new cjs.Rectangle(0,0,200,53), null);


(lib.background_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Слой 1
	this.instance = new lib.background();
	this.instance.parent = this;
	this.instance.setTransform(-1000,-125);

	this.instance_1 = new lib.background();
	this.instance_1.parent = this;
	this.instance_1.setTransform(3000,-125,1,1,0,0,180);

	this.instance_2 = new lib.background();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-1000,-125,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.background_anim, new cjs.Rectangle(-3000,-125,6000,250), null);


(lib.cta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgkA4IACgRIAIACQAFAAAEgDQADgDADgHIADgHIghhNIAWAAIATA4IAUg4IAWAAIgjBXQgDAGgEAFQgBAFgFAEQgEADgEABQgEACgGAAIgMgBg");
	this.shape.setTransform(158.5,27.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKAnIAAg+IgXAAIAAgPIBDAAIAAAPIgYAAIAAA+g");
	this.shape_1.setTransform(150.5,25.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgnA5IAAhvIAQAAIADAKQAEgGAHgDQAGgDAHAAQAPAAALALQAFAHACAHQADAIAAAJQAAAIgDAGQgCAIgFAGQgLALgPAAQgHAAgFgCQgGgDgEgFIAAAqgAgIgmIgGAEIgDAGIgCAIIAAAKQAAAFACADIADAGIAGAEQADABAFAAQADAAAEgCIAGgEIAFgHIABgKQAAgGgBgFQgCgEgDgDIgGgGQgEgCgDABQgFgBgDACg");
	this.shape_2.setTransform(142.2,26.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAUAmQgFgCgCgFQgFAFgHACQgFADgIAAQgGAAgFgCQgFgBgEgEQgEgDgCgFQgBgEgBgFQAAgHACgEQADgFAEgDQAFgDAHgCQAHgCAIAAQAHAAAIACIAAgEQgBgGgEgEQgFgEgFAAIgNACIgOAEIgEgOQAIgEAIgBQAJgCAIAAQAGAAAHACQAFACAFAEQAJAIAAANIAAAfQAAAGAGAAIAEgBIAAAPIgKABQgGAAgEgDgAgJADIgGADIgEAEIgBAFQAAAFAEADQAEAEAGAAQAEAAACgCQADgBACgCIAFgGIABgHIAAgFQgGgCgGAAIgIABg");
	this.shape_3.setTransform(132.9,25.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAOAnIgXggIgHAAIAAAgIgUAAIAAhNIAUAAIAAAeIAGAAIAXgeIAVAAIgcAlIAfAog");
	this.shape_4.setTransform(124.5,25.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AghAnIAAhNIAUAAIAAAbIATAAQAMAAAIAIQAEADACAEQACAEAAAGQAAAFgCAFQgCAFgEADQgFAEgFABQgEACgGAAgAgNAYIAPAAQAGAAADgDQADgDAAgEQAAgFgDgDQgDgDgGAAIgPAAg");
	this.shape_5.setTransform(112.2,25.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKAnIAAg+IgXAAIAAgPIBDAAIAAAPIgYAAIAAA+g");
	this.shape_6.setTransform(104.1,25.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AASAnIAAgyIgjAyIgUAAIAAhNIATAAIAAAyIAkgyIATAAIAABNg");
	this.shape_7.setTransform(95.6,25.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAYAnIAAgyIgTAZIgJAAIgTgZIAAAyIgTAAIAAhNIAUAAIAWAgIAXggIAUAAIAABNg");
	this.shape_8.setTransform(85.5,25.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgnA5IAAhvIAQAAIADAKQAEgGAGgDQAHgDAHAAQAQAAAKALQAFAHADAHQACAIAAAJQAAAIgCAGQgDAIgFAGQgKALgQAAQgGAAgHgCQgFgDgFgFIAAAqgAgIgmIgFAEIgFAGIgBAIIAAAKQAAAFABADIAFAGIAFAEQADABAEAAQAEAAAEgCIAGgEIAEgHQACgGAAgEQAAgGgCgFQgBgEgDgDIgGgGQgEgCgEABQgEgBgDACg");
	this.shape_9.setTransform(75.6,26.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgQAmQgIgDgGgFQgGgGgCgIQgDgHAAgJQAAgIADgHQACgIAGgGQAGgFAIgDQAIgDAIAAQAJAAAIADQAHADAGAFQAGAGADAIQADAHAAAIQAAAJgDAHQgDAIgGAGQgGAFgHADQgIADgJAAQgIAAgIgDgAgIgWIgHAFQgDADgBAFQgCAFAAAEQAAAGACAEQABAFADADQADAEAEABQAEACAEAAQAEAAAEgCQAEgBADgEQADgDACgFQABgEAAgGQAAgEgBgFQgCgFgDgDIgHgFQgEgCgEAAQgEAAgEACg");
	this.shape_10.setTransform(65.8,25.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJBJIAAghQgJAAgIgDQgHgEgGgFQgFgGgDgHQgDgHAAgHQAAgIADgGQADgHAFgGQAGgFAHgDQAIgEAJgBIAAghIASAAIAAAhQAKABAHAEQAIADAFAFQAGAGADAHQADAHAAAHQAAAHgDAHQgDAHgGAGQgFAFgIAEQgHADgKAAIAAAhgAgSgVIgHAGQgDADgCAFQgBADAAAFIABAJQACADADADQADAEAEACQAEACAFAAIAAgvQgFAAgEACgAAJAYQAFAAAFgDIAHgFQADgDABgEQACgEAAgEQAAgFgCgDQgBgEgDgEIgHgFQgFgCgFgBg");
	this.shape_11.setTransform(55.3,25.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgLA3IgLgDIgJgFIgIgHIgHgIQgDgEgCgGIgDgKIgBgMIABgLIADgKIAFgKIAHgIIAIgHIAJgFIALgDIALgBIAMABIAKADIAKAFIAIAHIAHAIIAFAKQACAFABAFQABAGAAAFQAAAGgBAGQgBAFgCAFIgFAKIgHAIIgIAHIgKAFIgKADIgMABIgLgBgAgNgjQgGADgFAFQgFAGgCAHQgCAHAAAHQAAARAJALQAFAFAGADQAGADAHAAQAIAAAGgDQAGgDAFgFQAEgFADgHQACgHAAgJQAAgIgCgHQgDgHgEgFQgFgFgGgDQgGgDgIAAQgHAAgGADg");
	this.shape_12.setTransform(43.5,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(4));

	// bg
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00B4E3").s().p("ArsD6QhoAAhKhJQhJhKAAhnQAAhnBJhJQBKhJBoAAIXaAAQBoAABJBJQBJBJAABnQAABnhJBKQhJBJhoAAg");
	this.shape_13.setTransform(100,25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#2ECDF7").s().p("ArsD6QhoAAhKhJQhJhKAAhnQAAhnBJhJQBKhJBoAAIXaAAQBoAABJBJQBJBJAABnQAABnhJBKQhJBJhoAAg");
	this.shape_14.setTransform(100,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13}]}).to({state:[{t:this.shape_14}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,200,50);


(lib.text2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}
	this.frame_79 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(20).call(this.frame_39).wait(20).call(this.frame_59).wait(20).call(this.frame_79).wait(1));

	// 18+
	this.instance = new lib._18();
	this.instance.parent = this;
	this.instance.setTransform(274,-28);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).wait(66));

	// logo
	this.instance_1 = new lib.logo_white_vertical();
	this.instance_1.parent = this;
	this.instance_1.setTransform(100,121.9,1.2,1.2,0,0,0,100,26.6);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},14).wait(66));

	// txt1
	this.instance_2 = new lib.txt12();
	this.instance_2.parent = this;
	this.instance_2.setTransform(99.4,-154.1,1,1,0,0,0,139.4,45.9);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:155.7,regY:114.3,x:115.8,y:-84.7,alpha:0.008},0).wait(1).to({x:115.9,y:-81.9,alpha:0.033},0).wait(1).to({x:116.1,y:-77.5,alpha:0.071},0).wait(1).to({x:116.4,y:-71.7,alpha:0.122},0).wait(1).to({x:116.7,y:-64.7,alpha:0.182},0).wait(1).to({x:117,y:-56.8,alpha:0.251},0).wait(1).to({x:117.4,y:-48.2,alpha:0.326},0).wait(1).to({x:117.8,y:-39.2,alpha:0.404},0).wait(1).to({x:118.2,y:-29.9,alpha:0.485},0).wait(1).to({x:118.6,y:-20.7,alpha:0.565},0).wait(1).to({x:119,y:-11.7,alpha:0.643},0).wait(1).to({x:119.3,y:-3.2,alpha:0.717},0).wait(1).to({x:119.7,y:4.7,alpha:0.786},0).wait(1).to({x:120,y:11.7,alpha:0.847},0).wait(1).to({x:120.2,y:17.8,alpha:0.899},0).wait(1).to({x:120.5,y:22.7,alpha:0.942},0).wait(1).to({x:120.6,y:26.3,alpha:0.974},0).wait(1).to({x:120.7,y:28.6,alpha:0.993},0).wait(1).to({regX:139.4,regY:45.9,x:104.4,y:-39.1,alpha:1},0).wait(1).to({regX:155.7,regY:114.3,x:120.7,y:29.3,alpha:0.994},0).wait(1).to({alpha:0.976},0).wait(1).to({alpha:0.944},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.828},0).wait(1).to({alpha:0.74},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.512},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.266},0).wait(1).to({alpha:0.165},0).wait(1).to({alpha:0.089},0).wait(1).to({alpha:0.037},0).wait(1).to({alpha:0.009},0).wait(1).to({regX:139.4,regY:45.9,x:104.4,y:-39.1,alpha:0},0).to({_off:true},1).wait(45));

	// txt2
	this.instance_3 = new lib.txt22();
	this.instance_3.parent = this;
	this.instance_3.setTransform(50.8,-154.1,1,1,0,0,0,90.8,45.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(1).to({regX:120.4,regY:90.1,x:80.5,y:-109.4,alpha:0.003},0).wait(1).to({y:-108.1,alpha:0.013},0).wait(1).to({x:80.6,y:-105.7,alpha:0.03},0).wait(1).to({x:80.7,y:-102.2,alpha:0.056},0).wait(1).to({x:80.9,y:-97.5,alpha:0.091},0).wait(1).to({x:81.1,y:-91.3,alpha:0.136},0).wait(1).to({x:81.4,y:-83.7,alpha:0.192},0).wait(1).to({x:81.7,y:-74.5,alpha:0.26},0).wait(1).to({x:82.1,y:-63.8,alpha:0.338},0).wait(1).to({x:82.6,y:-51.9,alpha:0.426},0).wait(1).to({x:83.1,y:-39.1,alpha:0.52},0).wait(1).to({x:83.5,y:-26.2,alpha:0.615},0).wait(1).to({x:84,y:-13.8,alpha:0.706},0).wait(1).to({x:84.4,y:-2.8,alpha:0.787},0).wait(1).to({x:84.7,y:6.6,alpha:0.856},0).wait(1).to({x:85,y:14.1,alpha:0.911},0).wait(1).to({x:85.2,y:19.6,alpha:0.952},0).wait(1).to({x:85.3,y:23.4,alpha:0.98},0).wait(1).to({x:85.4,y:25.5,alpha:0.995},0).wait(1).to({regX:90.8,regY:45.9,x:55.8,y:-18.1,alpha:1},0).wait(1).to({regX:120.4,regY:90.1,x:85.4,y:26.1,alpha:0.994},0).wait(1).to({alpha:0.976},0).wait(1).to({alpha:0.944},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.828},0).wait(1).to({alpha:0.74},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.512},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.266},0).wait(1).to({alpha:0.165},0).wait(1).to({alpha:0.089},0).wait(1).to({alpha:0.037},0).wait(1).to({alpha:0.009},0).wait(1).to({regX:90.8,regY:45.9,x:55.8,y:-18.1,alpha:0},0).to({_off:true},1).wait(25));

	// txt3
	this.instance_4 = new lib.txt32();
	this.instance_4.parent = this;
	this.instance_4.setTransform(57.2,-154.1,1,1,0,0,0,97.2,45.9);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(39).to({_off:false},0).wait(1).to({regX:127.3,regY:89.9,x:87.4,y:-109.6,alpha:0.003},0).wait(1).to({y:-108.3,alpha:0.013},0).wait(1).to({x:87.5,y:-105.9,alpha:0.03},0).wait(1).to({x:87.6,y:-102.4,alpha:0.056},0).wait(1).to({x:87.8,y:-97.7,alpha:0.091},0).wait(1).to({x:88,y:-91.5,alpha:0.136},0).wait(1).to({x:88.3,y:-83.9,alpha:0.192},0).wait(1).to({x:88.6,y:-74.7,alpha:0.26},0).wait(1).to({x:89,y:-64,alpha:0.338},0).wait(1).to({x:89.5,y:-52.1,alpha:0.426},0).wait(1).to({x:90,y:-39.3,alpha:0.52},0).wait(1).to({x:90.4,y:-26.4,alpha:0.615},0).wait(1).to({x:90.9,y:-14,alpha:0.706},0).wait(1).to({x:91.3,y:-3,alpha:0.787},0).wait(1).to({x:91.6,y:6.4,alpha:0.856},0).wait(1).to({x:91.9,y:13.9,alpha:0.911},0).wait(1).to({x:92.1,y:19.4,alpha:0.952},0).wait(1).to({x:92.2,y:23.2,alpha:0.98},0).wait(1).to({x:92.3,y:25.3,alpha:0.995},0).wait(1).to({regX:97.2,regY:45.9,x:62.2,y:-18.1,alpha:1},0).wait(1).to({regX:127.3,regY:89.9,x:92.3,y:25.9,alpha:0.994},0).wait(1).to({alpha:0.976},0).wait(1).to({alpha:0.944},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.828},0).wait(1).to({alpha:0.74},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.512},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.266},0).wait(1).to({alpha:0.165},0).wait(1).to({alpha:0.089},0).wait(1).to({alpha:0.037},0).wait(1).to({alpha:0.009},0).wait(1).to({regX:97.2,regY:45.9,x:62.2,y:-18.1,alpha:0},0).to({_off:true},1).wait(5));

	// txt4
	this.instance_5 = new lib.txt42();
	this.instance_5.parent = this;
	this.instance_5.setTransform(88.1,-154.1,1,1,0,0,0,128.1,45.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(59).to({_off:false},0).wait(1).to({regX:155.5,regY:91.8,x:115.6,y:-107.7,alpha:0.003},0).wait(1).to({y:-106.4,alpha:0.013},0).wait(1).to({x:115.7,y:-104,alpha:0.03},0).wait(1).to({x:115.8,y:-100.5,alpha:0.056},0).wait(1).to({x:116,y:-95.7,alpha:0.091},0).wait(1).to({x:116.2,y:-89.5,alpha:0.136},0).wait(1).to({x:116.5,y:-81.8,alpha:0.192},0).wait(1).to({x:116.8,y:-72.5,alpha:0.26},0).wait(1).to({x:117.2,y:-61.8,alpha:0.338},0).wait(1).to({x:117.7,y:-49.8,alpha:0.426},0).wait(1).to({x:118.2,y:-36.9,alpha:0.52},0).wait(1).to({x:118.6,y:-23.9,alpha:0.615},0).wait(1).to({x:119.1,y:-11.4,alpha:0.706},0).wait(1).to({x:119.5,y:-0.3,alpha:0.787},0).wait(1).to({x:119.8,y:9.2,alpha:0.856},0).wait(1).to({x:120.1,y:16.7,alpha:0.911},0).wait(1).to({x:120.3,y:22.3,alpha:0.952},0).wait(1).to({x:120.4,y:26,alpha:0.98},0).wait(1).to({x:120.5,y:28.2,alpha:0.995},0).wait(1).to({regX:128.1,regY:45.9,x:93.1,y:-17.1,alpha:1},0).wait(1));

	// cta
	this.cta = new lib.cta();
	this.cta.parent = this;
	this.cta.setTransform(90,272.5,0.9,0.9,0,0,0,100,25);
	this.cta.alpha = 0;
	new cjs.ButtonHelper(this.cta, 0, 1, 2, false, new lib.cta(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cta).to({alpha:1},19,cjs.Ease.quadInOut).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-122,313.5,417);


(lib.text1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
		_this=this;
		setTimeout(function(){
			_this.play();
			_this.parent.text2.play();
		},2000);
	}
	this.frame_39 = function() {
		this.stop();
		_this=this;
		setTimeout(function(){
			_this.play();
			_this.parent.text2.play();
		},2000);
	}
	this.frame_59 = function() {
		this.stop();
		_this=this;
		setTimeout(function(){
			_this.play();
			_this.parent.text2.play();
		},2000);
	}
	this.frame_79 = function() {
		this.stop();
		_this=this;
		setTimeout(function(){
			_this.parent.fade.play();
		},3000);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(20).call(this.frame_39).wait(20).call(this.frame_59).wait(20).call(this.frame_79).wait(1));

	// txt1
	this.instance = new lib.txt1();
	this.instance.parent = this;
	this.instance.setTransform(139.4,-154.1,1,1,0,0,0,139.4,45.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:142.2,regY:41.7,x:142.2,y:-157.6,alpha:0.003},0).wait(1).to({y:-155.4,alpha:0.014},0).wait(1).to({y:-151.5,alpha:0.034},0).wait(1).to({y:-145.7,alpha:0.063},0).wait(1).to({y:-137.9,alpha:0.102},0).wait(1).to({y:-127.7,alpha:0.153},0).wait(1).to({y:-115.1,alpha:0.216},0).wait(1).to({y:-99.9,alpha:0.292},0).wait(1).to({y:-82.5,alpha:0.379},0).wait(1).to({y:-63.2,alpha:0.475},0).wait(1).to({y:-43.2,alpha:0.575},0).wait(1).to({y:-23.6,alpha:0.673},0).wait(1).to({y:-5.7,alpha:0.763},0).wait(1).to({y:9.6,alpha:0.839},0).wait(1).to({y:21.9,alpha:0.901},0).wait(1).to({y:31,alpha:0.946},0).wait(1).to({y:37.2,alpha:0.977},0).wait(1).to({y:40.7,alpha:0.995},0).wait(1).to({regX:139.4,regY:45.9,x:139.4,y:45.9,alpha:1},0).wait(1).to({regX:142.2,regY:41.7,x:142.2,y:41.7,alpha:0.994},0).wait(1).to({alpha:0.976},0).wait(1).to({alpha:0.944},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.828},0).wait(1).to({alpha:0.74},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.512},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.266},0).wait(1).to({alpha:0.165},0).wait(1).to({alpha:0.089},0).wait(1).to({alpha:0.037},0).wait(1).to({alpha:0.009},0).wait(1).to({regX:139.4,regY:45.9,x:139.4,y:45.9,alpha:0},0).to({_off:true},1).wait(45));

	// txt2
	this.instance_1 = new lib.txt2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(90.8,-154.1,1,1,0,0,0,90.8,45.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:false},0).wait(1).to({regX:100.4,regY:37.7,x:100.4,y:-161.6,alpha:0.003},0).wait(1).to({y:-159.7,alpha:0.013},0).wait(1).to({y:-156.2,alpha:0.03},0).wait(1).to({y:-151.1,alpha:0.056},0).wait(1).to({y:-144.1,alpha:0.091},0).wait(1).to({y:-135,alpha:0.136},0).wait(1).to({y:-123.8,alpha:0.192},0).wait(1).to({y:-110.3,alpha:0.26},0).wait(1).to({y:-94.6,alpha:0.338},0).wait(1).to({y:-77,alpha:0.426},0).wait(1).to({y:-58.2,alpha:0.52},0).wait(1).to({y:-39.2,alpha:0.615},0).wait(1).to({y:-21.1,alpha:0.706},0).wait(1).to({y:-4.8,alpha:0.787},0).wait(1).to({y:9,alpha:0.856},0).wait(1).to({y:20,alpha:0.911},0).wait(1).to({y:28.1,alpha:0.952},0).wait(1).to({y:33.7,alpha:0.98},0).wait(1).to({y:36.8,alpha:0.995},0).wait(1).to({regX:90.8,regY:45.9,x:90.8,y:45.9,alpha:1},0).wait(1).to({regX:100.4,regY:37.7,x:100.4,y:37.7,alpha:0.994},0).wait(1).to({alpha:0.976},0).wait(1).to({alpha:0.944},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.828},0).wait(1).to({alpha:0.74},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.512},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.266},0).wait(1).to({alpha:0.165},0).wait(1).to({alpha:0.089},0).wait(1).to({alpha:0.037},0).wait(1).to({alpha:0.009},0).wait(1).to({regX:90.8,regY:45.9,x:90.8,y:45.9,alpha:0},0).to({_off:true},1).wait(25));

	// txt3
	this.instance_2 = new lib.txt3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(97.2,-154.1,1,1,0,0,0,97.2,45.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).wait(1).to({regX:108.6,regY:37.5,x:108.6,y:-161.8,alpha:0.003},0).wait(1).to({y:-159.9,alpha:0.013},0).wait(1).to({y:-156.4,alpha:0.03},0).wait(1).to({y:-151.3,alpha:0.056},0).wait(1).to({y:-144.3,alpha:0.091},0).wait(1).to({y:-135.2,alpha:0.136},0).wait(1).to({y:-124,alpha:0.192},0).wait(1).to({y:-110.5,alpha:0.26},0).wait(1).to({y:-94.8,alpha:0.338},0).wait(1).to({y:-77.2,alpha:0.426},0).wait(1).to({y:-58.4,alpha:0.52},0).wait(1).to({y:-39.4,alpha:0.615},0).wait(1).to({y:-21.3,alpha:0.706},0).wait(1).to({y:-5,alpha:0.787},0).wait(1).to({y:8.8,alpha:0.856},0).wait(1).to({y:19.8,alpha:0.911},0).wait(1).to({y:27.9,alpha:0.952},0).wait(1).to({y:33.5,alpha:0.98},0).wait(1).to({y:36.6,alpha:0.995},0).wait(1).to({regX:97.2,regY:45.9,x:97.2,y:45.9,alpha:1},0).wait(1).to({regX:108.6,regY:37.5,x:108.6,y:37.5,alpha:0.994},0).wait(1).to({alpha:0.976},0).wait(1).to({alpha:0.944},0).wait(1).to({alpha:0.895},0).wait(1).to({alpha:0.828},0).wait(1).to({alpha:0.74},0).wait(1).to({alpha:0.633},0).wait(1).to({alpha:0.512},0).wait(1).to({alpha:0.385},0).wait(1).to({alpha:0.266},0).wait(1).to({alpha:0.165},0).wait(1).to({alpha:0.089},0).wait(1).to({alpha:0.037},0).wait(1).to({alpha:0.009},0).wait(1).to({regX:97.2,regY:45.9,x:97.2,y:45.9,alpha:0},0).to({_off:true},1).wait(5));

	// txt4
	this.instance_3 = new lib.txt4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(128.1,-154.1,1,1,0,0,0,128.1,45.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).wait(1).to({regX:142.1,regY:41.2,x:142.1,y:-158.1,alpha:0.003},0).wait(1).to({y:-156.2,alpha:0.013},0).wait(1).to({y:-152.7,alpha:0.03},0).wait(1).to({y:-147.6,alpha:0.056},0).wait(1).to({y:-140.6,alpha:0.091},0).wait(1).to({y:-131.5,alpha:0.136},0).wait(1).to({y:-120.3,alpha:0.192},0).wait(1).to({y:-106.8,alpha:0.26},0).wait(1).to({y:-91.1,alpha:0.338},0).wait(1).to({y:-73.5,alpha:0.426},0).wait(1).to({y:-54.7,alpha:0.52},0).wait(1).to({y:-35.7,alpha:0.615},0).wait(1).to({y:-17.6,alpha:0.706},0).wait(1).to({y:-1.3,alpha:0.787},0).wait(1).to({y:12.5,alpha:0.856},0).wait(1).to({y:23.5,alpha:0.911},0).wait(1).to({y:31.6,alpha:0.952},0).wait(1).to({y:37.2,alpha:0.98},0).wait(1).to({y:40.3,alpha:0.995},0).wait(1).to({regX:128.1,regY:45.9,x:128.1,y:45.9,alpha:1},0).wait(1));

	// cta
	this.cta = new lib.cta();
	this.cta.parent = this;
	this.cta.setTransform(100,246,1,1,0,0,0,100,25);
	this.cta.alpha = 0;
	new cjs.ButtonHelper(this.cta, 0, 1, 2, false, new lib.cta(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cta).to({y:126,alpha:1},19,cjs.Ease.quadInOut).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-200,282,471);


(lib.logoblock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(16));

	// 18+
	this.instance = new lib._18();
	this.instance.parent = this;
	this.instance.setTransform(-29.5,17.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:7.4,regY:-1,x:-17.5,y:16.5},0).wait(1).to({x:-4.2},0).wait(1).to({x:16.8},0).wait(1).to({x:44.6},0).wait(1).to({x:77.6},0).wait(1).to({x:114.3},0).wait(1).to({x:152.9},0).wait(1).to({x:191.5},0).wait(1).to({x:228.2},0).wait(1).to({x:261.2},0).wait(1).to({x:289},0).wait(1).to({x:310.1},0).wait(1).to({x:323.3},0).wait(1).to({regX:0,regY:0,x:320.5,y:17.5},0).wait(1).to({regX:7.4,regY:-1,x:323.9,y:16.5},0).wait(1).to({x:312.3},0).wait(1).to({x:293.8},0).wait(1).to({x:269.2},0).wait(1).to({x:239.7},0).wait(1).to({x:206.5},0).wait(1).to({x:171},0).wait(1).to({x:134.8},0).wait(1).to({x:99.3},0).wait(1).to({x:66.1},0).wait(1).to({x:36.6},0).wait(1).to({x:12},0).wait(1).to({x:-6.4},0).wait(1).to({x:-18.1},0).wait(1).to({regX:0,regY:0,x:-29.5,y:17.5},0).wait(1));

	// logo1
	this.logo_black_vertical = new lib.logo_black_vertical();
	this.logo_black_vertical.parent = this;
	this.logo_black_vertical.setTransform(175,124.7,1.25,1.249,0,0,0,100,26.2);

	this.timeline.addTween(cjs.Tween.get(this.logo_black_vertical).wait(1).to({regY:26.5,x:180.1,y:125.1},0).wait(1).to({x:194.9},0).wait(1).to({x:218.4},0).wait(1).to({x:249.3},0).wait(1).to({x:286.1},0).wait(1).to({x:327},0).wait(1).to({x:370},0).wait(1).to({x:413},0).wait(1).to({x:453.9},0).wait(1).to({x:490.7},0).wait(1).to({x:521.6},0).wait(1).to({x:545.1},0).wait(1).to({x:559.9},0).wait(1).to({regY:26.2,x:565,y:124.7},0).wait(1).to({regY:26.5,x:560.6,y:125.1},0).wait(1).to({x:547.6},0).wait(1).to({x:527},0).wait(1).to({x:499.6},0).wait(1).to({x:466.7},0).wait(1).to({x:429.7},0).wait(1).to({x:390.2},0).wait(1).to({x:349.8},0).wait(1).to({x:310.3},0).wait(1).to({x:273.3},0).wait(1).to({x:240.4},0).wait(1).to({x:213},0).wait(1).to({x:192.4},0).wait(1).to({x:179.4},0).wait(1).to({regY:26.2,x:175,y:124.7},0).wait(1));

	// bg
	this.instance_1 = new lib.logo_bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(175,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:180.1},0).wait(1).to({x:194.9},0).wait(1).to({x:218.4},0).wait(1).to({x:249.3},0).wait(1).to({x:286.1},0).wait(1).to({x:327},0).wait(1).to({x:370},0).wait(1).to({x:413},0).wait(1).to({x:453.9},0).wait(1).to({x:490.7},0).wait(1).to({x:521.6},0).wait(1).to({x:545.1},0).wait(1).to({x:559.9},0).wait(1).to({x:565},0).wait(1).to({x:560.6},0).wait(1).to({x:547.6},0).wait(1).to({x:527},0).wait(1).to({x:499.6},0).wait(1).to({x:466.7},0).wait(1).to({x:429.7},0).wait(1).to({x:390.2},0).wait(1).to({x:349.8},0).wait(1).to({x:310.3},0).wait(1).to({x:273.3},0).wait(1).to({x:240.4},0).wait(1).to({x:213},0).wait(1).to({x:192.4},0).wait(1).to({x:179.4},0).wait(1).to({x:175},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49,0,399,250);


(lib.fade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		disclaimer.style.visibility="hidden";
	}
	this.frame_19 = function() {
		this.stop();
		_this=this;
		disclaimer.style.visibility="visible";
		disclaimer.style.opacity="1";
		setTimeout(function(){
			_this.parent.text1.gotoAndPlay(1);
			_this.parent.text2.gotoAndPlay(1);
			_this.parent.background.gotoAndPlay(1);
			_this.parent.card.gotoAndPlay(1);
			_this.parent.main.gotoAndPlay(1);
			_this.play();
			disclaimer.style.opacity="0";
		},5000);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(21));

	// fade_anim
	this.instance = new lib.fade_anim();
	this.instance.parent = this;
	this.instance.setTransform(280,125,1,1,0,0,0,280,125);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},19,cjs.Ease.quadInOut).to({alpha:0},20,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,560,250);


(lib.card_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// card_anim
	this.card_anim = new lib.card_anim();
	this.card_anim.parent = this;
	this.card_anim.setTransform(-226.6,0);

	this.timeline.addTween(cjs.Tween.get(this.card_anim).to({x:140},29,cjs.Ease.cubicInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-352.6,-92,252,184.5);


(lib.background_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// background_anim
	this.instance = new lib.background_anim();
	this.instance.parent = this;
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0.488},29,cjs.Ease.get(-1)).to({alpha:1},30,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3000,-125,6000,250);


(lib.main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// logo
	this.logoblock = new lib.logoblock();
	this.logoblock.parent = this;
	this.logoblock.setTransform(1800,125,1,1,0,0,0,150,125);
	this.logoblock.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.logoblock).to({alpha:1},19,cjs.Ease.quadInOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1601,0,399,250);


// stage content:
(lib.index = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		canvas.style.cursor = "pointer";
		canvas.addEventListener("click", function() {
		    window.callClick();
		});
		
		disclaimer.style.cursor = "pointer";
		disclaimer.addEventListener("click", function() {
		    window.callClick();
		});
		
		var page_canvas = document.getElementsByTagName("canvas")[0];
		var _this=this;
		var shape;
		                    
		_logo = this.main.logoblock;
		_bg = this.background;
		_card = this.card;
		_text1 = this.text1;
		_text2 = this.text2;
		_fade = this.fade;
		
		function onResize() {
			
		var newWidth = window.innerWidth;
		if(newWidth < 560) {
			newWidth = 560;
		}
		
		if(newWidth < 1100) {
			_logo.visible = _text1.visible = false;
			_text2.visible = true;
		}
		else{
			_logo.visible = _text1.visible = true;
			_text2.visible = false;
		}
		
		page_canvas.width = newWidth;
		k=stage.canvas.width/950/1;
		
		_logo.x = Math.round(stage.canvas.width)+520;
		_text1.x = Math.round(stage.canvas.width)-520;
		_text2.x = Math.round(stage.canvas.width)-160;
		_bg.x = Math.round(stage.canvas.width*0.5);
		_fade.scaleX = newWidth;
		_card.x = 25;
		
		if(k > 1) {k = 1}
			_card.scaleX = _card.scaleY = k*0.95;
			
		_this.removeChild(shape);
		shape = new createjs.Shape(new createjs.Graphics().beginStroke("#bbb").drawRect(0.5,0.5,stage.canvas.width-1,stage.canvas.height-1)); 
		_this.addChild(shape);
		}
		
		window.onresize = function () {
			onResize();
		}
		
		onResize();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// fade
	this.fade = new lib.fade();
	this.fade.parent = this;
	this.fade.setTransform(280,125,1,1,0,0,0,280,125);

	this.timeline.addTween(cjs.Tween.get(this.fade).wait(1));

	// main
	this.main = new lib.main();
	this.main.parent = this;
	this.main.setTransform(280,125,1,1,0,0,0,1000,125);

	this.timeline.addTween(cjs.Tween.get(this.main).wait(1));

	// text2
	this.text2 = new lib.text2();
	this.text2.parent = this;
	this.text2.setTransform(766.4,101.9,1,1,0,0,0,139.4,46.9);

	this.timeline.addTween(cjs.Tween.get(this.text2).wait(1));

	// text1
	this.text1 = new lib.text1();
	this.text1.parent = this;
	this.text1.setTransform(766.4,91.9,1,1,0,0,0,139.4,46.9);

	this.timeline.addTween(cjs.Tween.get(this.text1).wait(1));

	// card
	this.card = new lib.card_1();
	this.card.parent = this;
	this.card.setTransform(0,139.2,0.85,0.85,0,0,0,-29.4,-1);

	this.timeline.addTween(cjs.Tween.get(this.card).wait(1));

	// background
	this.background = new lib.background_1();
	this.background.parent = this;
	this.background.setTransform(280,125);

	this.timeline.addTween(cjs.Tween.get(this.background).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2440,-30,6000,505);
// library properties:
lib.properties = {
	id: 'C15C0D8B9F1046B69BD7FA6F21CB1221',
	width: 560,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"background.jpg", id:"background"},
		{src:"card.png", id:"card"}
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
an.compositions['C15C0D8B9F1046B69BD7FA6F21CB1221'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;