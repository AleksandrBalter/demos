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



(lib.BG_jp_opt = function() {
	this.initialize(img.BG_jp_opt);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2000,250);


(lib.centrgroup = function() {
	this.initialize(img.centrgroup);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,984,250);


(lib.dates = function() {
	this.initialize(img.dates);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,329,81);


(lib.lgroup = function() {
	this.initialize(img.lgroup);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,985,250);


(lib.logo2 = function() {
	this.initialize(img.logo2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,634,387);


(lib.rgroup = function() {
	this.initialize(img.rgroup);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1009,250);// helper functions:

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
	this.instance = new lib.lgroup();
	this.instance.setTransform(-492.5,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-492.5,-125,985,250), null);


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
	this.shape.graphics.f("#065526").s().p("EhLxATiMAAAgnDMCXjAAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-485,-125,970,250), null);


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

	// Layer_3
	this.instance = new lib.centrgroup();
	this.instance.setTransform(-481,-124);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// _
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,0,204,0)").s().p("AqdKeIAA07IU7AAIAAU7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(89));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-481,-124,984,250);


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

	// Layer_3
	this.instance = new lib.logo2();
	this.instance.setTransform(-317,-113.6,0.6025,0.6025);

	this.instance_1 = new lib.dates();
	this.instance_1.setTransform(74.5,-31,0.784,0.784);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(90));

	// _
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(51,0,204,0)").s().p("AqdKeIAA07IU7AAIAAU7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(89));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-317,-113.6,649.4,233.2);


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
	this.shape.graphics.lf(["#065526","rgba(6,85,38,0)"],[0,0.945],-81.5,0,81.5,0).s().p("AsufGMAAAg+LIZdAAMAAAA+Lg");
	this.shape.setTransform(912.5,0,1,1,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#065526","rgba(6,85,38,0)"],[0,0.945],-81.5,0,81.5,0).s().p("AsufGMAAAg+LIZdAAMAAAA+Lg");
	this.shape_1.setTransform(-924.5,0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(90));

	// Layer_2
	this.instance = new lib.BG_jp_opt();
	this.instance.setTransform(-1007,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(90));

	// _
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(51,0,204,0)").s().p("AqdKeIAA07IU7AAIAAU7g");

	this.timeline.addTween(cjs.Tween.get(this.shape_2).to({_off:true},1).wait(89));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1007,-199,2001,398.1);


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

	// Layer_1
	this.instance = new lib.rgroup();
	this.instance.setTransform(-504.5,-125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-504.5,-125,1009,250);


// stage content:
(lib._100_250_premium_billboard = function(mode,startPosition,loop,reversed) {
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
			var diff = w/ini;
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
			thisStage.center_big.x = Math.floor(w / 2 / window.devicePixelRatio);
			thisStage.center_small.x = Math.floor(w / 2 / window.devicePixelRatio);
			
			thisStage.logo_mc.x = Math.floor((w *0.1)/ window.devicePixelRatio)-90;
			//thisStage.logo_mc.x = Math.floor((w - 30) / window.devicePixelRatio);
			thisStage.right_mc.x = Math.floor((w *0.85) / window.devicePixelRatio)+200;
		
		
			if((w/window.devicePixelRatio)>1400){
			thisStage.center_small.alpha = 0;
			thisStage.center_big.alpha = 1;
				}
			if((w/window.devicePixelRatio)<1400){
			thisStage.center_small.alpha = 1;
			thisStage.center_big.alpha = 0;
				}
		
		
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
	this.right_mc.setTransform(1009,0,1,1,0,0,0,504.5,-125);

	this.timeline.addTween(cjs.Tween.get(this.right_mc).wait(1));

	// left
	this.logo_mc = new lib.Symbol12();
	this.logo_mc.name = "logo_mc";
	this.logo_mc.setTransform(-1,0,1,1,0,0,0,-493.5,-125);

	this.timeline.addTween(cjs.Tween.get(this.logo_mc).wait(1));

	// cont_small
	this.center_small = new lib.Symbol4copy2();
	this.center_small.name = "center_small";
	this.center_small.setTransform(492,125);

	this.timeline.addTween(cjs.Tween.get(this.center_small).wait(1));

	// cont_big
	this.center_big = new lib.Symbol4copy();
	this.center_big.name = "center_big";
	this.center_big.setTransform(492,125,1,1,0,0,0,-10,0);

	this.timeline.addTween(cjs.Tween.get(this.center_big).wait(1));

	// center
	this.center = new lib.Symbol4();
	this.center.name = "center";
	this.center.setTransform(492,125);

	this.timeline.addTween(cjs.Tween.get(this.center).wait(1));

	// bg
	this.bg = new lib.Symbol8();
	this.bg.name = "bg";
	this.bg.setTransform(492,125,1.0165,1);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-23,51,1509,273.1);
// library properties:
lib.properties = {
	id: '5488A6D97DF71A4DBB9427319BE3C5A8',
	width: 984,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BG_jp_opt.jpg?1707395728792", id:"BG_jp_opt"},
		{src:"images/centrgroup.png?1707395728792", id:"centrgroup"},
		{src:"images/dates.png?1707395728792", id:"dates"},
		{src:"images/lgroup.png?1707395728792", id:"lgroup"},
		{src:"images/logo2.png?1707395728792", id:"logo2"},
		{src:"images/rgroup.png?1707395728792", id:"rgroup"}
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