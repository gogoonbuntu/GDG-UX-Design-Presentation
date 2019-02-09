(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"index_atlas_", frames: [[0,0,808,577],[1558,0,400,922],[1211,502,300,533],[442,579,270,388],[810,502,399,712],[810,0,746,500],[0,579,440,280],[1513,924,185,172],[0,861,357,103]]}
];


// symbols:



(lib.Bitmap12 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.flash0ai = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.막대기no = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660000").ss(50,1,1).p("AtnvGIbPeN");
	this.shape.setTransform(-78.4,-87.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#330000").ss(50,1,1).p("AjxkMIHkIZ");
	this.shape_1.setTransform(33.1,36.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(50,1,1).p("AgUgWIApAt");
	this.shape_2.setTransform(-174.9,-194.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.막대기no, new cjs.Rectangle(-201.9,-221.7,284.3,309.8), null);


(lib.화면전화 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		this.parent.play();
	}
	this.frame_19 = function() {
		this.parent.removeChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(9).call(this.frame_19).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("EiWSBUyMAAAipjMEslAAAMAAACpjg");
	this.shape.setTransform(961.9,542.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.102)").s().p("EiWSBUyMAAAipjMEslAAAMAAACpjg");
	this.shape_1.setTransform(961.9,542.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.204)").s().p("EiWSBUyMAAAipjMEslAAAMAAACpjg");
	this.shape_2.setTransform(961.9,542.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.302)").s().p("EiWSBUyMAAAipjMEslAAAMAAACpjg");
	this.shape_3.setTransform(961.9,542.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.404)").s().p("EiWSBUyMAAAipjMEslAAAMAAACpjg");
	this.shape_4.setTransform(961.9,542.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.502)").s().p("EiWSBUyMAAAipjMEslAAAMAAACpjg");
	this.shape_5.setTransform(961.9,542.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.6)").s().p("EiWSBUyMAAAipjMEslAAAMAAACpjg");
	this.shape_6.setTransform(961.9,542.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.702)").s().p("EiWSBUyMAAAipjMEslAAAMAAACpjg");
	this.shape_7.setTransform(961.9,542.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.8)").s().p("EiWSBUyMAAAipjMEslAAAMAAACpjg");
	this.shape_8.setTransform(961.9,542.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.902)").s().p("EiWSBUyMAAAipjMEslAAAMAAACpjg");
	this.shape_9.setTransform(961.9,542.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("EiWSBUyMAAAipjMEslAAAMAAACpjg");
	this.shape_10.setTransform(961.9,542.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.89)").s().p("EiWSBUyMAAAipjMEslAAAMAAACpjg");
	this.shape_11.setTransform(961.9,542.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.78)").s().p("EiWSBUyMAAAipjMEslAAAMAAACpjg");
	this.shape_12.setTransform(961.9,542.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.667)").s().p("EiWSBUyMAAAipjMEslAAAMAAACpjg");
	this.shape_13.setTransform(961.9,542.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.557)").s().p("EiWSBUyMAAAipjMEslAAAMAAACpjg");
	this.shape_14.setTransform(961.9,542.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.447)").s().p("EiWSBUyMAAAipjMEslAAAMAAACpjg");
	this.shape_15.setTransform(961.9,542.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.337)").s().p("EiWSBUyMAAAipjMEslAAAMAAACpjg");
	this.shape_16.setTransform(961.9,542.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.224)").s().p("EiWSBUyMAAAipjMEslAAAMAAACpjg");
	this.shape_17.setTransform(961.9,542.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.114)").s().p("EiWSBUyMAAAipjMEslAAAMAAACpjg");
	this.shape_18.setTransform(961.9,542.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1923.9,1085.1);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACUHZIhVmbIh9AAIhUGbQgbBnh7AAQh3AAgfhoIhqmaIhkAAQgnAAgXgZQgXgZAAgoQAAgpAXgZQAXgaAnAAIAzAAIhXlPQgJgoAWgiQAUgjA1gHQA1gIAjAQQAkAPAJA0IBRF4IC2AAIBOloQAMgqAggYQAfgYA1AAQA2AAAfAYQAgAYALAqIBPFoIC1AAIBRl6QAKgzAjgQQAjgQAyAJQA4ALAVAgQAWAigKAoIhXFPIAzAAQAnAAAXAaQAYAZAAApQAAAngYAaQgXAZgnAAIhjAAIhoGaQggBoh3AAQh4AAgehngAEqEpIAxjrIhkAAgAkoEpIAyjrIhlAAgAgYh4IAwAAIgYh1g");
	this.shape.setTransform(-0.2,4.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(10,1,1).p("AQ8AAQAAHBk9E+Qk+E9nBAAQnAAAk+k9Qk9k+AAnBQAAnAE9k+QE+k9HAAAQHBAAE+E9QE9E+AAHAg");
	this.shape_1.setTransform(0,-3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("Ar+L/Qk9k+AAnBQAAnAE9k+QE+k9HAAAQHBAAE+E9QE9E+AAHAQAAHBk9E+Qk+E9nBAAQnAAAk+k9g");
	this.shape_2.setTransform(0,-3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.4,-116.6,226.8,228.3);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACUHZIhVmbIh9AAIhUGbQgbBnh7AAQh3AAgfhoIhqmaIhkAAQgnAAgXgZQgXgZAAgoQAAgpAXgZQAXgaAnAAIAzAAIhXlPQgJgoAWgiQAUgjA1gHQA1gIAjAQQAkAPAJA0IBRF4IC2AAIBOloQAMgqAggYQAfgYA1AAQA2AAAfAYQAgAYALAqIBPFoIC1AAIBRl6QAKgzAjgQQAjgQAyAJQA4ALAVAgQAWAigKAoIhXFPIAzAAQAnAAAXAaQAYAZAAApQAAAngYAaQgXAZgnAAIhjAAIhoGaQggBoh3AAQh4AAgehngAEqEpIAxjrIhkAAgAkoEpIAyjrIhlAAgAgYh4IAwAAIgYh1g");
	this.shape.setTransform(-0.2,4.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(10,1,1).p("AQ8AAQAAHBk9E+Qk+E9nBAAQnAAAk+k9Qk9k+AAnBQAAnAE9k+QE+k9HAAAQHBAAE+E9QE9E+AAHAg");
	this.shape_1.setTransform(0,-3.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("Ar+L/Qk9k+AAnBQAAnAE9k+QE+k9HAAAQHBAAE+E9QE9E+AAHAQAAHBk9E+Qk+E9nBAAQnAAAk+k9g");
	this.shape_2.setTransform(0,-3.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.4,-116.6,226.8,228.3);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjUSVQhPhPAAhwQAAhzBPhPQBNhNBzAAQBxAABOBNQBNBPAABzQAABwhNBPQhOBOhxAAQhzAAhNhOgAiSG5QgxgpgFhFIgMhwQgGg2AEgxQAFgyAZg3QAZgzAzhDQAzhCBahXQBxhyA2hcQA2heAAhpQAAhmhIg5QhHg5iAAAQhtAAhbAyQhcAxhFBLQg2A9hLgEQhKgDg8g2Qg8g2gFhMQgEhOA8hBQBxh/CkhHQCkhIDAAAQCpAACIAsQCHAqBcBPQBeBOAxBrQAxBqAAB9QAABNgSBDQgRBDgpBDQgpBEhBBKQhABIhaBVQg/A9gnAoQgmAqgYAlQgWAjgHAgQgHAfgDAhIgJB2QgHBCgvAnQgxAphMAAQhPAAgvgqg");
	this.shape.setTransform(1.2,-13.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-82.2,-207.4,166.2,406.9);


(lib.chiwileg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AACgjIAABFAgVAkIArAA");
	this.shape.setTransform(-0.1,5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.chiwileg, new cjs.Rectangle(-3.7,-0.1,7.4,10.3), null);


(lib.chiwibodyblink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		if (Math.random() > 0.7)
		{
			this.play();
		}
		else
		{
			this.gotoAndPlay(1);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(3));

	// 레이어 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AA8gHIAAAPAg7gHIAAAP");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("ABGAAIgVAAAgwAAIgVAA");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},13).to({state:[{t:this.shape_1}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,-2.2,14.9,4.5);


(lib.방법 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjEdQgkgGgUgMQgUgLgHgTQgHgSAAgbQAAhIAOg4QAFgRANgHQAOgHAVAEQAUAFAJAMQAJALgEARIgCANIgCANIC0AAIAAggQAAgQAMgKQALgKAWAAQAVAAAMAKQAMAKAAAQIAAB0QAAAagHATQgHATgUALQgUAMgkAGQgkAFg6AAQg6AAgjgFgAgiC5QAAALADAHQADAGAJAFQAKADARACQATACAfAAQAfAAATgCQATgCAJgDQAKgFADgGQADgHAAgLIAAgNIi6AAgACkAIQgMgIAAgQIAAhfIgsAAQgOAAgHgJQgHgKAAgQQAAgQAHgKQAHgKAOAAIAsAAIAAhJQAAgQAMgIQAMgKAVAAQAVAAAMAKQAMAIAAAQIAADvQAAAQgMAIQgMAJgVAAQgVAAgMgJgAijgBQgdgFgSgMQgRgMgHgUQgHgUAAgcQAAgoAHgpQAGgoAKgiQAFgSAPgGQAPgFATAFQATAFAJAMQAJAMgGARIgFASIgEATIB4AAIAAgyQAAgQAMgJQAMgIATAAQATAAANAIQAMAJAAARIAACRQAAAcgHAUQgGAUgSAMQgRAMgdAFQgeAEgtAAQguAAgegEgAiYh1IAAALQAAAMACAHQACAIAHAEQAGAEANACQANABAWAAQAVAAANgBQANgCAHgEQAGgEACgIQADgHAAgMIAAgVIiCAAIAAAKg");
	this.shape.setTransform(11.7,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgtEeQgdgJgVgRQgWgRgMgZQgMgZAAgfQAAggAMgZQAMgZAWgRQAVgRAdgJQAcgJAgAAQAgAAAdAJQAcAJAWARQAVARANAZQAMAZAAAgQAAAfgMAZQgNAZgVARQgWARgcAJQgdAJggAAQggAAgcgJgAgiBzQgTAQAAAfQAAAeATAQQATAQAeAAQAeAAATgQQATgQAAgeQAAgfgTgQQgTgQgeAAQgeAAgTAQgABsARQgMgIAAgPIAAj+QAAgQAMgIQAMgKAVAAQAVAAAMAKQAMAIAAAQIAABTIA5AAQAQAAAIAKQAJAKAAAQQAAARgJAJQgIAJgQAAIg5AAIAABkQAAAPgMAIQgMAKgVAAQgVAAgMgKgAjGACQgegEgRgMQgRgMgGgUQgHgUAAgcIACgqIAEgsQADgVAFgUQAEgUAFgQQAFgSAPgGQAPgGATAFQATAFAJAMQAIAMgFASIgFATIgEAWIB1AAIAAg2QAAgRANgJQAMgIAUAAQASAAAMAIQANAJAAARIAACaQAAAcgGAUQgHAUgQAMQgRAMgdAEQgeAFguAAQgvAAgdgFgAi6hzIAAANQAAAMACAHQABAIAHAEQAGAEANACQAMABAXAAQAWAAANgBQANgCAGgEQAGgEACgIQABgHAAgMIAAgZIh+AAIgBAMg");
	this.shape_1.setTransform(-43.9,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.방법, new cjs.Rectangle(-77.1,-42.2,121.8,84.6), null);


(lib.막대 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_65 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(65).call(this.frame_65).wait(1));

	// Layer_1
	this.instance = new lib.막대기no();
	this.instance.parent = this;
	this.instance.setTransform(65.3,50.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({rotation:0.8,x:66.4,y:49.7},0).wait(1).to({regX:-59.8,regY:-66.8,rotation:3.6,x:13.9,y:-22.6},0).wait(1).to({rotation:8.5,x:25.4,y:-30.4},0).wait(1).to({rotation:16.1,x:43.7,y:-41.3},0).wait(1).to({rotation:25.7,x:68.1,y:-53},0).wait(1).to({regX:0,regY:0,rotation:35.2,x:103.1,y:26.8},0).wait(1).to({regX:0.1,regY:0.1,rotation:37.7,x:103.2,y:26.9},0).wait(5).to({rotation:34.4,x:93.8},0).wait(1).to({rotation:-3.3,x:44.2,y:46.6},0).wait(1).to({regX:0.2,rotation:-6.3,x:40.3,y:49.8},0).wait(2).to({rotation:-0.5},0).wait(1).to({rotation:-6.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.6,-171.4,284.3,309.8);


(lib.chiwibody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6));

	// 레이어 1
	this.instance = new lib.chiwibodyblink();
	this.instance.parent = this;
	this.instance.setTransform(11.1,-4.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF6600").ss(3,1,1).p("AgRAAIAjAA");
	this.shape.setTransform(9.8,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AiPBBQAAAqAdAdQAeAdApAAIC9AAIAAjlQAAgqgdgdQgdgdgqAAIhZAAQgpAAgeAdQgdAdAAAqAiRhAIAACB");
	this.shape_1.setTransform(14.6,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AgsClQgqAAgdgdQgdgeAAgpIAAiBQAAgpAdgeQAdgdAqAAIBZAAQApAAAdAdQAeAeAAApIAADlgAgfgDIgjAAg");
	this.shape_2.setTransform(14.8,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(3,1,1).p("AgRAAIAjAA");
	this.shape_3.setTransform(9.8,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6600").s().p("AgsClQgqAAgdgdQgdgeAAgpIAAiBQAAgpAdgeQAdgdAqAAIBZAAQApAAAdAdQAeAeAAApIAADlgAgfgDIgjAAg");
	this.shape_4.setTransform(14.8,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#006600").ss(3,1,1).p("AgRAAIAjAA");
	this.shape_5.setTransform(9.8,-0.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00FF00").s().p("AgsClQgqAAgdgdQgdgeAAgpIAAiBQAAgpAdgeQAdgdAqAAIBZAAQApAAAdAdQAeAeAAApIAADlgAgfgDIgjAAg");
	this.shape_6.setTransform(14.8,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#0000FF").ss(3,1,1).p("AgRAAIAjAA");
	this.shape_7.setTransform(9.8,-0.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00FFFF").s().p("AgsClQgqAAgdgdQgdgeAAgpIAAiBQAAgpAdgeQAdgdAqAAIBZAAQApAAAdAdQAeAeAAApIAADlgAgfgDIgjAAg");
	this.shape_8.setTransform(14.8,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgsClQgqAAgdgdQgdgeAAgpIAAiBQAAgpAdgeQAdgdAqAAIBZAAQApAAAdAdQAeAeAAApIAADlgAgfgDIgjAAg");
	this.shape_9.setTransform(14.8,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#999999").ss(3,1,1).p("AgQAAIAiAA");
	this.shape_10.setTransform(9.7,-0.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgsClQgqAAgdgdQgdgeAAgpIAAiBQAAgpAdgeQAdgdAqAAIBZAAQApAAAdAdQAeAeAAApIAADlgAgggEIgjAAg");
	this.shape_11.setTransform(14.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_4},{t:this.shape_1},{t:this.shape_3},{t:this.instance}]},1).to({state:[{t:this.shape_6},{t:this.shape_1},{t:this.shape_5},{t:this.instance}]},1).to({state:[{t:this.shape_8},{t:this.shape_1},{t:this.shape_7},{t:this.instance}]},1).to({state:[{t:this.shape_9},{t:this.shape_1},{t:this.shape_3},{t:this.instance}]},1).to({state:[{t:this.shape_11},{t:this.shape_1},{t:this.shape_10},{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-18,32.3,36);


(lib.BankMovie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(1));

	// Layer_1
	this.instance = new lib.Tween3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1,85.6);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Tween4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-1,-42.8,1.224,1.224);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,scaleX:1.22,scaleY:1.22,y:-42.8,alpha:1},7,cjs.Ease.quintOut).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.4,-31,226.8,228.3);


(lib.물음표 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_31 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(31).call(this.frame_31).wait(1));

	// Layer_1
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-2,-1.9,0.162,0.162,0,0,0,0,80.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:79.9,scaleX:1.16,scaleY:1.16,y:-2.3},19,cjs.Ease.quintIn).to({scaleX:0.51,scaleY:0.51,rotation:-20,x:-14.1,y:9.8},3,cjs.Ease.quintOut).to({regX:0.3,regY:79.7,scaleX:0.71,scaleY:0.71,rotation:0.8,x:1,y:9.9},2).to({regX:0.2,regY:79.5,scaleX:0.64,scaleY:0.64,rotation:15.8,x:20.9,y:21.9},2).to({regX:0.3,regY:79.7,scaleX:0.71,scaleY:0.71,rotation:0.8,x:1,y:9.9},3).to({regX:0.2,rotation:-2.4,x:0,y:10},1).to({rotation:1.2,x:0.9},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.3,-48.4,26.9,65.9);


(lib.chiwibodybreathe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.instance = new lib.chiwibody();
	this.instance.parent = this;
	this.instance.setTransform(-0.2,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:14.6,x:14.4},0).to({regX:14.7,scaleX:1.03,scaleY:1.03,x:14.5},43).to({regX:14.6,scaleX:1,scaleY:1,x:14.4},36).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.7,-18,32.3,36);


(lib.Chiwi00Walk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.body = new lib.chiwibodybreathe();
	this.body.name = "body";
	this.body.parent = this;
	this.body.setTransform(-19.6,-7,1.393,1.393,3.7);

	this.instance = new lib.chiwileg();
	this.instance.parent = this;
	this.instance.setTransform(-7.5,14.2,1.396,1.396,48.6);

	this.instance_1 = new lib.chiwileg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(6.8,15.1,1.396,1.396,-26.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{regX:0,regY:0,rotation:-26.3,x:6.8,y:15.1}},{t:this.instance,p:{regX:0,regY:0,rotation:48.6,x:-7.5,y:14.2}},{t:this.body,p:{regX:0,regY:0,rotation:3.7,x:-19.6,y:-7}}]}).to({state:[{t:this.instance_1,p:{regX:0.1,regY:0.1,rotation:18.7,x:6.9,y:16.3}},{t:this.instance,p:{regX:-0.1,regY:0.1,rotation:-11.4,x:-5.8,y:16.4}},{t:this.body,p:{regX:14.2,regY:4.3,rotation:0.2,x:0.2,y:1.5}}]},3).to({state:[{t:this.instance_1,p:{regX:0.1,regY:0.1,rotation:48.7,x:4.2,y:16.4}},{t:this.instance,p:{regX:0,regY:0.1,rotation:-26.4,x:-5.3,y:14.2}},{t:this.body,p:{regX:0,regY:0,rotation:3.7,x:-19.6,y:-7}}]},3).to({state:[{t:this.instance_1,p:{regX:0.1,regY:0.1,rotation:18.7,x:6.9,y:16.3}},{t:this.instance,p:{regX:-0.1,regY:0.1,rotation:-11.4,x:-5.8,y:16.4}},{t:this.body,p:{regX:14.2,regY:4.3,rotation:0.2,x:0.2,y:1.5}}]},3).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.6,-32.2,48.1,62.3);


(lib.Chiwi00stay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 레이어 1
	this.body = new lib.chiwibodybreathe();
	this.body.name = "body";
	this.body.parent = this;
	this.body.setTransform(-20,-4.7,1.393,1.393);

	this.instance = new lib.chiwileg();
	this.instance.parent = this;
	this.instance.setTransform(-6.5,15.7,1.396,1.396,-0.1);

	this.instance_1 = new lib.chiwileg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(7.9,15.7,1.396,1.396);

	this.instance_2 = new lib.chiwileg();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-6.5,15.7,1.396,1.396,-0.1);

	this.instance_3 = new lib.chiwileg();
	this.instance_3.parent = this;
	this.instance_3.setTransform(7.9,15.7,1.396,1.396);

	this.instance_4 = new lib.chiwileg();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-6.5,15.7,1.396,1.396,-0.1);

	this.instance_5 = new lib.chiwileg();
	this.instance_5.parent = this;
	this.instance_5.setTransform(7.9,15.7,1.396,1.396);

	this.instance_6 = new lib.chiwileg();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-6.5,15.7,1.396,1.396,-0.1);

	this.instance_7 = new lib.chiwileg();
	this.instance_7.parent = this;
	this.instance_7.setTransform(7.9,15.7,1.396,1.396);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.body}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Chiwi00stay, new cjs.Rectangle(-22.4,-29.8,45,59.7), null);


// stage content:
(lib.GDGUX발표자료 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		window.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			console.log(this);
			this.play();
		}
		this.stop();
		/*
		프로그래머와 사용자의 이심전심, UX디자인 
		
		가까이하기엔 너무 먼 사용자…
		
		은행어플을 개발한다고 칩시다. 뭐부터 있어야 할까요.
		우리 개발자 입장에서 생각을 일단 해봐요.
		음 계좌이체 기능이랑, 거래내역 확인 있어야하고,
		보안인증센터 있어야하고, 음... 은행에 새로나온 카드 같은거 광고해야 하니까 광고할 칸도 있어야하고,
		할게 무진장 많죠.
		그래서 결과는? 현재 대부분 은행사 어플이 이렇습니다. (사진)
		여러분, 어때요, 보기 편한가요?
		근데 이걸 한번 보세요.
		(카카오뱅크 사진)
		이게뭐죠? 이게 뭐야? 엥 이거밖에 없어?
		근데 써본 사람은 어때요
		편--안. 깔--끔.
		왜일까요?
		우리가 은행어플 여는 목적은, 내 돈 잘 있나 확인하는 거거든요.
		그러니까 일단 계좌 잔액 보여주고 시작하는 거에요.
		“너 이거 필요했지? 자, 봐. 그리고 이제 뭐필요해?”
		해주는겁니다.
		아주 센스가 넘치는거죠. 센스쟁이에요 이 친구가 ㅎㅎ
		
		이 카카오뱅크는 UX를 충분히 고려한 은행어플 서비스의 좋은 예라고 볼 수 있습니다.
		
		내 맘을 몰라주는 사용자들 “사용자의 이해” vs ”개발자의 의도”의 차이, 소통 실패사례
		
		플레이 펌프라고 들어보셨나요?
		유엑스의 대표적인 실패사례로 꼽히죠.
		야 이거 봐! 개쩔어! 놀면서 물을 길 수 있어!
		하면서 투자금을 대거 받았죠. 이건 혁신이라며.
		그래서 아주 곳곳에다가 박아놨어요. 근데 결과는?
		망했죠. 왜냐면 재미가 없었거든요.
		투자자와 기획자 생각엔 이게 정말 재밌을 것이다, 혁신적이다 라고 생각했지만,
		직접 사용하는 사람 입장에선 아니었던 거죠.
		시작할 땐 아이들도 재밌어서 몇번 탔어요. 근데 생각해보세요.
		이게 그냥 도는거랑, 물이 가벼운 것도 아닌데 물을 달고 돌리는거랑 힘이 차이가 꽤 나겠죠?
		시간이 지나니 이 놀이기구로 인해 아이들은 강제노역하도록 협박을 받는 상황도 생겼고요,
		1년 뒤 25%의 플레펌프는 수리가 필요했지만 그럴만한 비용도 없었죠.
		원래 이런 부가적인 비용은 플레이펌프 위에 광고를 실어 비용을 충당하려 했지만,
		식수조차 공급이 안되는 나라에서 광고를 실을 여유 있는 기업이 어디있을까요.
		효율도 똥망이었습니다.
		마을 주민 2500명에게 15리터씩 물을 공급하려면 플레이펌프는 27시간동안 쉬지않고 회전해야 했습니다.
		결국 사람들은 플레이펌프를 두고 원래 쓰던 방식대로 물동이를 들고 우물로 가서 물을 떴습니다.
		
		
		사용자와 잘 소통한 사례들 UX성공사례
		
		포르투갈의 리스본의 무단횡단율이 심각했어요. 이거 어떻게 하면 신호등을 잘 지키게 만들까?
		여기서 정말 재밌는 아이디어가 나옵니다.
		작은 부스를 설치했습니다. 그 안엔 작은 무대가 있고, 모션인식 카메라가 무대를 찍어요.
		지나가던 사람들은 그 부스가 뭔지 신기해서 들어가보고, 그 부스 안 무대 위에서 자유롭게 춤을 춰요.
		그 카메라에 찍힌 사람의 움직임을 신호등 속 빨간사람이 똑같이 추는거에요.
		그럼 빨간등 앞에 서서 기다리는 사람들은 그 빨간등을 쳐다보면서 대기시간을 보내는 거죠.
		그 결과 무단횡단율이 80퍼센트가 줄었습니다.
		
		와우, 어때요 놀랍지 않나요?
		이게 유엑스의 힘입니다 여러분.
		
		
		
		답은 UX다! UX의 정의
		
		UX가 뭐죠? 사용자 경험? 이것에 대해 좀 감이 오시나요?
		UX란 사용자가 어떤 제품 혹은 서비스를 사용할 때 경험하는 모든 요소를 통틀어 하는 말입니다.
		자 그러면, 대충 이게 뭔진 알겠어요. 그러면 이걸 어떻게 파악할 수 있을까요?
		
		UX, 어떻게 파악하지? 다양한 리서치 방법 소개 
		
		자, 우리가 리서치를 하면 가장 처음으로 쓰는 방법이 뭐죠?
		데스크 리서치죠. 세컨드 리서치라고도 해요.
		다른 사람들이 만들어놓은 데이터, 실험결과나 논문 등을 조사해 정보를 수집하는 거죠.
		정말 좋은 리서치 방법입니다. 하지만 무작정 신뢰할 순 없죠.
		그렇다면 UX디자이너들이 주로 쓰는 방법이 뭐가 있을까
		대표적으로 Task Analysis가 있습니다.
		오우 좀 있어보이죠? 이게 바로 드자이너에요.
		
		
		
		사용자를 위한 설계를 마쳤다면, 매력포인트를 더하자!
		
		헤도닉 벨류란? (피젯스피너와 같이 왜 성공한지 이해하기 힘든 감성적 벨류)
		화룡점정! 나 자신의 스타일을 묻혀내기;*/
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_54 = function() {
		this.stop();
	}
	this.frame_69 = function() {
		this.stop();
	}
	this.frame_145 = function() {
		this.stop();
	}
	this.frame_146 = function() {
		this.stop();
	}
	this.frame_147 = function() {
		this.stop();
	}
	this.frame_148 = function() {
		this.stop();
	}
	this.frame_149 = function() {
		this.stop();
	}
	this.frame_150 = function() {
		this. stop();
	}
	this.frame_174 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(39).call(this.frame_39).wait(15).call(this.frame_54).wait(15).call(this.frame_69).wait(76).call(this.frame_145).wait(1).call(this.frame_146).wait(1).call(this.frame_147).wait(1).call(this.frame_148).wait(1).call(this.frame_149).wait(1).call(this.frame_150).wait(24).call(this.frame_174).wait(1));

	// Scene Change
	this.Changer = new lib.화면전화();
	this.Changer.name = "Changer";
	this.Changer.parent = this;
	this.Changer.setTransform(960.1,542.5,1,1,0,0,0,961.9,542.5);
	this.Changer._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Changer).wait(54).to({_off:false},0).to({_off:true},8).wait(113));

	// Frame
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AA7A4IAAhAQAAgRgFgIQgEgIgLAAQgGAAgFADQgGACgEAGQgEAFgDAHQgDAHAAAIIAAA7IgPAAIAAhAQAAgRgFgIQgEgIgMAAQgFAAgGADQgFACgFAGQgEAFgCAHQgDAHAAAIIAAA7IgRAAIAAhsIARAAIABAQIAGgIIAHgGIAJgDIAKgCQAOAAAHAGQAGAGADANIABAAQAGgMAJgHQAJgGALAAQAKAAAGADQAHAEAEAGQAEAGACAIQACAJAAAMIAAA/g");
	this.shape.setTransform(1893.9,1052.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgWA0QgJgEgHgIQgGgIgDgKQgDgKAAgMQAAgLADgLQAEgKAGgIQAGgHAKgFQAJgEAMAAQAMAAAKAEQAJAFAHAHQAGAIADAKQAEALAAALQAAAMgDAKQgDAKgHAIQgGAIgJAEQgKAFgNAAQgMAAgKgFgAgXggQgJALAAAVQAAAVAJALQAIALAPAAQAQAAAIgLQAIgLAAgVQAAgVgIgLQgIgKgQAAQgPAAgIAKg");
	this.shape_1.setTransform(1879,1052.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgKA2QgKgEgHgHQgIgHgEgLQgEgKAAgOQAAgNAEgKQAEgLAHgIQAHgHAKgEQALgEAMAAQAIAAAJACQAIADAGAFIAAANQAAABAAABQAAAAAAAAQgBAAAAAAQgBAAAAgBQgHgFgHgDQgHgCgIAAQgJAAgGAEQgIADgEAGQgFAGgCAIQgCAIAAAHQAAAKACAIQACAHAFAGQAFAGAHADQAHADAJAAQAJAAAHgCQAGgDAHgGQAAAAABgBQAAAAAAAAQAAAAABABQAAAAAAABIAAANQgGAGgJADQgIACgJAAQgMAAgKgDg");
	this.shape_2.setTransform(1868.9,1053);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#666666").s().p("AgJAKQgDgEAAgGQAAgFADgEQAEgDAFAAQAGAAAEADQAEAEAAAFQAAAGgEAEQgEADgGAAQgFAAgEgDg");
	this.shape_3.setTransform(1860.5,1057.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#666666").s().p("AgdA4IAAhsIARAAIABAQQAEgJAHgFQAIgFAJAAIAHABIAGACIAAAPQAAAAAAABQAAAAAAAAQgBAAAAAAQgBAAAAAAIgGgDIgHAAQgFAAgFACQgFADgDAEQgEAFgDAGQgCAHAAAHIAAA9g");
	this.shape_4.setTransform(1854.7,1052.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#666666").s().p("AgRA2QgKgEgHgIQgHgHgDgKQgEgLAAgOQAAgLADgLQAEgLAHgIQAHgHAKgEQAJgEALAAQAWAAAMANQAMANAAAZIAAAHIhPAAIAAACQAAATAKAKQAKAKAQAAQAJAAAJgDQAIgCAKgHQAAAAABAAQAAAAAAAAQAAAAABAAQAAABAAAAIAAAOQgJAGgJADQgKACgMAAQgLAAgKgDgAgIgpQgGADgEAEQgFAEgDAGQgDAGgBAIIAAABIA9AAIAAgBQAAgQgIgJQgHgIgOAAQgFAAgFACg");
	this.shape_5.setTransform(1844.7,1053);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AgHA3IgrhsIATAAIAfBXIAhhXIASAAIgrBsg");
	this.shape_6.setTransform(1833.9,1053);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgWA4QgHgCgEgEQgFgEgDgGQgCgGAAgIQAAgPAJgKQAJgJATgDIAhgFIAAgCIgBgMQgBgFgDgCQgDgDgEgBIgKgBQgJAAgJADQgIADgJAHQAAAAgBAAQAAABAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAgBIAAgOQAJgGAKgDQALgDAKAAQATAAAJAJQAJAJAAAUIAABKIgQAAIgBgPQgDAEgEADIgIAGIgKAEIgJABIgDAAQgHAAgFgCgAAAAAQgLACgHAGQgHAGAAALQAAAJAGAFQAGAEAKAAQAFAAAGgCQAGgDAEgFQAFgEACgGQADgGAAgGIAAgNg");
	this.shape_7.setTransform(1822.4,1052.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#666666").s().p("AAcA4IAAhAQAAgRgFgIQgEgIgNAAQgGAAgGADQgGACgFAGQgEAFgDAHQgDAHAAAIIAAA7IgRAAIAAhsIARAAIABAQQACgFAEgDIAJgGIAJgEIAKgBQAUAAAJAMQAIAMAAAXIAABAg");
	this.shape_8.setTransform(1811.6,1052.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#666666").s().p("AgoBVQgTgGgLgMQgKgMgFgQQgGgQAAgTQABgUAGgSQAHgRAMgNQAMgNARgHQARgHATAAQAWAAARAGQAQAGAMALQAMALAGAPQAHAPgBASQABAOgFALQgEAMgGAHQgHAIgJAEQgIAEgJAAQgGAAgFgCQgGgCgCgDQgDgDgBgEIgCgIQgFAKgHAGQgHAFgMAAQgRABgJgLQgIgLAAgUQAAgNAEgKQAEgLAHgIQAHgIAIgEQAIgEAIAAQAIAAAGADQAEADAFAHIABgMIAPAAIgGBIIABAGQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAIAEAEIAHABQAFAAAFgEQAFgEAEgGQAEgGACgJQACgIAAgIQAAgSgEgNQgGgOgJgIQgKgKgNgEQgNgFgRABQgPAAgOAFQgOAGgKALQgKAMgFAOQgGAPAAARQAAAmATASQATATAmAAQATAAAOgFQAOgFAKgJQABAAABAAQAAAAAAAAQABAAAAAAQAAABAAAAIAAAQIgMAHIgPAEIgRADIgRABQgZAAgRgGgAgKgfQgGADgEAHQgEAGgCAJQgCAHgBAJQAAANAFAIQAGAGAJAAQAHAAAEgEQAFgCAEgHQAFgGACgKQACgIAAgLQAAgNgFgGQgDgGgMAAQgFAAgFAFg");
	this.shape_9.setTransform(1795.3,1051.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#666666").s().p("AgbBKQgMgEgHgIIAAgOIAAgCIACABQALAJAKAEQALAEAMAAQAFAAAGgCQAFgCAFgEQAEgEACgFQADgGAAgGQAAgfglAAIgFAAIAAgNIACAAQAIAAAFgBQAHgCAFgDQAFgDADgGQADgFAAgIQAAgOgIgGQgIgGgLAAQgKAAgKADQgKAFgJAHIgBABQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgOIAHgGIAJgEIAMgDIAMgBQAKAAAIADQAJACAGAEQAGAFADAIQADAHAAAKQAAAGgBAGQgDAGgDAFQgEAFgFADQgFADgGACIAAAAQAPACAIAJQAIAJAAARQAAAIgDAIQgDAHgGAHQgGAGgKADQgJAEgLAAQgNAAgNgEg");
	this.shape_10.setTransform(1778.8,1050.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#666666").s().p("AgbBKQgMgEgHgIIAAgOIAAgCIACABQALAJAKAEQALAEAMAAQAFAAAGgCQAFgCAFgEQAEgEACgFQADgGAAgGQAAgfglAAIgFAAIAAgNIACAAQAIAAAFgBQAHgCAFgDQAFgDADgGQADgFAAgIQAAgOgIgGQgIgGgLAAQgKAAgKADQgKAFgJAHIgBABQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgOIAHgGIAJgEIAMgDIAMgBQAKAAAIADQAJACAGAEQAGAFADAIQADAHAAAKQAAAGgBAGQgDAGgDAFQgEAFgFADQgFADgGACIAAAAQAPACAIAJQAIAJAAARQAAAIgDAIQgDAHgGAHQgGAGgKADQgJAEgLAAQgNAAgNgEg");
	this.shape_11.setTransform(1767.2,1050.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AgbBKQgMgEgHgIIAAgOIAAgCIACABQALAJAKAEQALAEAMAAQAFAAAGgCQAFgCAFgEQAEgEACgFQADgGAAgGQAAgfglAAIgFAAIAAgNIACAAQAIAAAFgBQAHgCAFgDQAFgDADgGQADgFAAgIQAAgOgIgGQgIgGgLAAQgKAAgKADQgKAFgJAHIgBABQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAgBAAAAIAAgOIAHgGIAJgEIAMgDIAMgBQAKAAAIADQAJACAGAEQAGAFADAIQADAHAAAKQAAAGgBAGQgDAGgDAFQgEAFgFADQgFADgGACIAAAAQAPACAIAJQAIAJAAARQAAAIgDAIQgDAHgGAHQgGAGgKADQgJAEgLAAQgNAAgNgEg");
	this.shape_12.setTransform(1755.5,1050.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AgXBOQgIgEgGgHQgFgHgDgKQgCgKAAgMQAAgMACgLQADgKAGgIQAGgIAIgFQAKgEAMAAQAJAAAIAEQAJAEAFAHIAAhCIARAAIAAChIgSAAIgBgNQgGAJgHADQgJADgJAAQgMAAgJgEgAgWgFQgIALAAAWQAAATAIALQAJALANAAQAGAAAGgDQAGgDAEgFQAEgFACgGQACgHAAgHIAAgRQAAgHgCgGQgBgFgFgEQgEgFgFgCQgFgDgIAAQgNAAgJALg");
	this.shape_13.setTransform(1743.4,1050.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgXA1QgHgEgGgGQgEgGgDgIQgCgJAAgLIAAhAIARAAIAABAQAAARAGAIQAGAIANAAQAFAAAGgCQAGgDAEgFQAFgFACgHQADgGABgJIAAg8IAQAAIAABsIgRAAIgBgPIAAAAQgFAIgJAFQgKAFgIAAQgLAAgHgDg");
	this.shape_14.setTransform(1732,1053.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AgXBOQgIgEgGgHQgGgHgCgKQgCgKAAgMQAAgMACgLQADgKAGgIQAGgIAIgFQAJgEANAAQAKAAAIAEQAHAEAGAHIAAhCIARAAIAAChIgSAAIgBgNQgGAJgHADQgJADgJAAQgMAAgJgEgAgWgFQgIALAAAWQAAATAIALQAJALANAAQAGAAAGgDQAGgDAEgFQAEgFACgGQACgHAAgHIAAgRQAAgHgCgGQgBgFgFgEQgEgFgFgCQgGgDgGAAQgOAAgJALg");
	this.shape_15.setTransform(1719.9,1050.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("AgXBOQgIgEgGgHQgGgHgCgKQgCgKAAgMQAAgMACgLQADgKAGgIQAGgIAIgFQAKgEAMAAQAJAAAJAEQAHAEAGAHIAAhCIARAAIAAChIgSAAIgBgNQgGAJgHADQgJADgJAAQgMAAgJgEgAgWgFQgIALAAAWQAAATAIALQAJALANAAQAGAAAGgDQAGgDAEgFQAEgFACgGQACgHAAgHIAAgRQAAgHgCgGQgBgFgFgEQgEgFgFgCQgGgDgHAAQgNAAgJALg");
	this.shape_16.setTransform(1708.2,1050.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("AA7A4IAAhAQAAgRgFgIQgEgIgLAAQgGAAgFADQgGACgEAGQgEAFgDAHQgDAHAAAIIAAA7IgPAAIAAhAQAAgRgFgIQgEgIgMAAQgFAAgGADQgFACgFAGQgEAFgCAHQgDAHAAAIIAAA7IgRAAIAAhsIARAAIABAQIAGgIIAHgGIAJgDIAKgCQAOAAAHAGQAGAGADANIABAAQAGgMAJgHQAJgGALAAQAKAAAGADQAHAEAEAGQAEAGACAIQACAJAAAMIAAA/g");
	this.shape_17.setTransform(1693.9,1052.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("AgHA/QgHgGAAgPIAAhGIgTAAIAAgNIATAAIAAgbIAQAAIAAAbIAcAAIAAANIgcAAIAABDIAAAHIACAFIAFADIAHAAIAHAAQAFgBAEgDQABAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIAAANQgEADgFABIgLABQgPAAgGgGg");
	this.shape_18.setTransform(1681.2,1051.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("AgMBaQgLgEgHgEQgIgGgDgHQgEgHAAgIQAAgJAEgGQADgHAIgFQAHgGALgCQALgDAOAAQAPAAALADQALACAHAGQAIAFADAHQAEAHAAAIQAAAJgEAGQgDAHgIAGQgHAEgLAEQgLACgPAAQgOAAgLgCgAgEAgQgIACgFAEQgFADgDAEQgCAEAAAFQAAAEACAFQADAEAFADQAFAEAIABQAGACALAAQALAAAIgCQAHgBAFgEQAFgDADgEQACgFAAgEQAAgFgCgEQgDgEgFgDQgFgEgHgCQgIgCgLAAQgLAAgGACgAA2APIAAgeIgqAAQgGAJgJAFQgKAEgMAAQgKAAgIgDQgJgDgGgGQgGgGgEgIQgDgJAAgJQAAgKADgIQAEgJAGgGQAGgGAJgEQAIgDAKAAQALAAAKAEQAIAFAGAIIAsAAIAAgVIARAAIAABqgAglhFQgFACgEAEQgEAEgCAGQgCAFAAAHQAAAGACAFQACAGAEAEQAEAEAFACQAFADAHAAQAGAAAGgDQAFgCAEgEQAEgEABgGQADgFAAgGQAAgHgDgFQgBgGgEgEQgEgEgFgCQgGgDgGAAQgGAAgGADgAAUgpIgBAMIAjAAIAAgcIgkAAQACAHAAAJg");
	this.shape_19.setTransform(1663.8,1051.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AgaBaQgMgDgHgFQgIgFgEgGQgEgHAAgHQAAgQAQgJQAQgKAdAAQAfAAAPAKQAQAJAAAQQAAAHgEAHQgEAGgIAFQgIAFgLADQgMACgPAAQgPAAgLgCgAgUAmQgIABgFADQgFAEgCADQgCAEAAAEQAAADACAFQACADAFADQAFADAIACQAJACAMAAQALAAAJgCQAIgCAFgDQAFgDACgDQADgFAAgDQAAgEgDgEQgCgDgFgEQgFgDgIgBQgJgCgLAAQgMAAgJACgAhWAHIAAgNICtAAIAAANgAhIgiQAOgDAMgFQAMgGAKgIQAJgHAFgJQAFgJAAgKIARAAQABAFgCAGIgDAKQAEAGAHAGIARAJQAIAFAKADIATAEIgJAOQgUgDgQgKQgRgJgLgMQgGAHgHAGQgIAGgIAEIgRAIIgRAEg");
	this.shape_20.setTransform(1646.4,1051.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AgJBaQgMgDgHgFQgIgFgEgHQgDgGAAgHQAAgIADgHQAEgGAIgFQAHgFAMgCQAKgDAPAAQAPAAALADQAMACAHAFQAIAFAEAGQAEAIAAAHQAAAHgEAHQgEAGgIAFQgHAFgMADQgLACgPAAQgPAAgKgCgAgCAlQgIACgFADQgFADgDAEQgCAEAAAEQAAAEACAEQADADAFADIANAFQAHABALAAQALAAAIgBIANgFQAGgDADgDQACgEAAgEQAAgEgCgEQgDgEgGgDQgFgDgIgCQgIgCgLAAQgLAAgHACgAA6AUIAAg0IghAAIAAgQIAhAAIAAgrIARAAIAABvgAhMAAQAOgFAMgHQAMgIAKgJQAKgJAHgKQAHgKADgKIgVAAIgWAAIgSAAIAAgPIAeAAIAaAAIAaAAQgCANgFAMQgGAMgIALIAIAKIAMAIIALAHIALAGIgLAMQgLgGgLgHQgJgIgKgKQgMANgPAIQgOAJgNAEg");
	this.shape_21.setTransform(1627.8,1051.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AgIBOIAAhsIAQAAIAABsgAgIg4QgDgDgBgGQABgFADgEQADgDAFAAQAFAAADADQAFAEAAAFQAAAGgFADQgDAEgFAAQgFAAgDgEg");
	this.shape_22.setTransform(1612.7,1050.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AAdA3IgdhYIgcBYIgQAAIgdhsIASAAIAUBXIAdhXIAOAAIAdBXIAUhXIARAAIgdBsg");
	this.shape_23.setTransform(1602.4,1053);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AgIBOIAAhsIARAAIAABsgAgIg4QgDgDAAgGQAAgFADgEQAEgDAEAAQAFAAAEADQADAEAAAFQAAAGgDADQgEAEgFAAQgEAAgEgEg");
	this.shape_24.setTransform(1592.1,1050.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AAcBRIAAhBQAAgQgFgIQgFgIgNAAQgFAAgGADQgGADgFAFQgEAFgDAGQgDAHAAAIIAAA8IgRAAIAAihIARAAIAABGIAAAAQAFgJAKgFQAKgFAJAAQAVAAAJAMQAIAMAAAWIAABAg");
	this.shape_25.setTransform(1583.8,1050.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("AgRBIQgNgFgJgLQgJgKgEgPQgFgOAAgRQAAgRAGgPQAEgNAKgLQAKgKANgFQAMgFAPgBQANAAALADQAKAEAKAGIAAATIgBACIgCgBQgQgSgYABQgLAAgJADQgJAEgIAIQgHAIgEALQgEAMgBAPQAAAeAPAQQANAQAYAAQAZAAARgTQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAABIAAARQgKAIgLAEQgMADgOAAQgPAAgNgFg");
	this.shape_26.setTransform(1571.5,1050.9);

	this.instance = new lib.flash0ai();
	this.instance.parent = this;
	this.instance.setTransform(1563,0);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AhKEfQgggEgSgJQgTgKgHgOQgIgNAAgUQAAgUAFgRQgMgBgHgJQgGgJAAgNQAAgOAHgJQAIgIAOgBIDjAAQAJAAADgDQAEgDAAgGIAAgPQAAgLgQgBIjaAAQgOAAgIgJQgHgJAAgOQAAgOAHgJQAIgLAOABID+AAQBIAAAAA7IAAAxQAAA8hIAAIizAAIgBAKIAAAKQAAAGADAFQADAFAIACQAHADAOACQAOABAUAAIAqgBIApgDIAlgGQARgCAMgEQARgFAMAHQALAFAFAOQAEAOgFAMQgEAMgRAFQgdAIgrAGQgqAFg6ABQgugBgfgEgABsgSQgMgJAAgPIAAjWQAAgRAMgIQAMgKAVAAQAVAAAMAKQAMAIAAARIAABAIA5AAQAPAAAJAJQAJAKAAAQQAAARgJAKQgJAJgPAAIg5AAIAABPQAAAPgMAJQgMAKgVgBQgVABgMgKgAjFgaQgdgFgSgLQgRgMgHgTQgHgSAAgbQAAgiAFglQAFglAKgfQAGgRAOgHQAOgGATAFQATAFAJAMQAJAMgGASIgDAMIgDAMIB3AAIAAglQAAgRANgJQAMgIATAAQASAAANAIQAMAJAAARIAACCQAAAbgHASQgHATgQAMQgSALgdAFQgdAEgtAAQgtAAgegEgAi7iIIAAAJQAAALACAHQACAHAHAEQAHAEAMABQANACAWAAQAVAAANgCQANgBAGgEQAHgEACgHQACgHAAgLIAAgSIiAAAIgBAJg");
	this.shape_27.setTransform(526.9,158.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("ACxDxQgMgHAAgQIAAjYIg9AAIAADQQAAAPgMAHQgNAIgQAAQgRAAgNgIQgMgHAAgOIAAmoQAAgPAMgIQANgIARAAQAQAAANAIQAMAIAAAPIAACRIA9AAIAAiWQAAgOAMgIQAMgIASAAQASAAAMAIQANAIAAAOIAAG1QAAAPgNAHQgMAIgSAAQgSAAgMgIgAjXCfQgQgCgKgOQgJgOACgQQACgQAOgJQAegTAYgYQAYgXAQgZQARgaAIgbQAJgcAAgcQAAgQgHgHQgHgHgQAAIhOAAQgPAAgJgKQgIgLAAgPQAAgQAIgKQAJgLAPAAIBjAAQAzAAAXAYQAWAYAAAwQAAAlgLAnQgLAngVAjQgWAkgfAgQgfAfgoAXQgMAGgNAAIgGAAg");
	this.shape_28.setTransform(465.6,154.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhaEcQgkgEgUgJQgVgKgIgOQgJgOABgTQgBgNAEgNQgXgEAAgaQAAgNAIgIQAGgHAOgBIELAAQAJAAADgCQAEgDAAgGIAAgJQAAgMgQAAIkBAAQgOAAgHgJQgHgIAAgOQAAgNAHgJQAHgJAOAAIEiAAQBJAAgBA8IAAAhQABA8hJABIjaAAIAAAGIAAAGQAAAHACAEQADAFAKADQAKADATACQASABAfAAQAzAAArgEQAqgEAdgHQARgDAKAFQAJAFADAOQAEAOgFAKQgFAKgQAFQgeAJgvAEQgtAEg8ABQg2gBgkgEgAjxADQgNABgJgJQgHgIAAgOQAAgPAHgJQAJgIANAAIHjAAQANAAAJAIQAHAJAAAPQAAAOgHAIQgJAJgNgBgAi0haQgQgBgHgHQgJgJABgOQgBgOAJgHQAHgJAQABIAtAAIAAhKIguAAQgPAAgJgIQgJgJABgPQgBgOAJgJQAJgIAPAAIFpAAQAPAAAJAIQAIAJABAOQgBAPgIAJQgJAIgPAAIgtAAIAABKIAsAAQAQgBAIAJQAIAHAAAOQAAAOgIAJQgIAHgQABgAgviWIBfAAIAAhKIhfAAg");
	this.shape_29.setTransform(388.3,158.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("ACqDwQgOgJAAgPIAAjmIgzAAQgbAAAAgjQAAgSAHgJQAHgKANAAIAzAAIAAiAQAAgRAOgJQANgIASAAQASAAAOAIQANAJAAARIAAGtQAAAQgNAJQgOAJgSAAQgSAAgNgJgAiYBwQgdgMgVgXQgUgWgLggQgMgfAAgoQAAgoAMghQALggAUgWQAVgWAdgMQAcgMAkAAQAiAAAeAMQAbAMAVAWQAVAWALAgQALAhAAAoQAAAogLAfQgLAggVAWQgVAXgbAMQgeAMgiAAQgkAAgcgMgAiJh5QgRAZAAAwQAAAvARAZQASAaAfAAQAeAAARgaQASgZAAgvQAAgwgSgZQgRgageAAQgfAAgSAag");
	this.shape_30.setTransform(328.3,154.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgGEsQgfgIgWgQQgVgQgNgXQgNgWABgcQgBgcANgWQANgWAVgQQAWgQAfgIQAegJAlAAQAlAAAfAJQAfAIAWAQQAWAQANAWQAMAWgBAcQABAcgMAWQgNAXgWAQQgWAQgfAIQgfAIglAAQglAAgegIgAAECVQgUAPABAXQgBAXAUAQQAUAPAlAAQAlAAAUgPQAVgQgBgXQABgXgVgPQgUgPglAAQglAAgUAPgAC7A6QgLgHAAgQIAAh1Ig1AAIAABfQAAAQgLAHQgKAIgSAAQgSAAgLgIQgKgHAAgQIAAkDQAAgPAKgIQALgIASAAQASAAAKAIQALAIAAAPIAABdIA1AAIAAhiQAAgOALgIQALgIASAAQASAAALAIQALAIgBAOIAAEeQABAQgLAHQgLAIgSAAQgSAAgLgIgAihA0QgYgIgRgOQgQgPgIgUQgJgVAAgaQAAgaAJgUQAIgVAQgPQARgPAYgIQAWgIAeAAQAdAAAWAIQAYAIARAPQAPAPAIAVQAJAUAAAaQAAAagJAVQgIAUgPAPQgRAOgYAIQgWAIgdAAQgeAAgWgIgAiQhaQgNANAAAZQAAAZANANQANAOAWAAQAVAAANgOQANgNAAgZQAAgZgNgNQgNgNgVAAQgWAAgNANgAjhi1QgOAAgIgJQgIgIAAgOQAAgPAIgJQAIgIAOAAIBKAAIAAgjQAAgNALgIQAMgHATAAQATAAALAHQALAIAAANIAAAjIA/AAQANAAAIAIQAIAJAAAPQAAAOgIAIQgIAJgNAAg");
	this.shape_31.setTransform(269.4,157.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AiXELQgsgaAAg3QAAgSABgNIAFgcQAFgQAOgGQAOgGATADQAUADAKALQALALgEANQgEAOABAVQAAALADAIQAFAIALAGQAKAFATADQATADAeAAIApgCQAWgCAVgDIAngHQASgDANgGQATgGANAEQANAGAGANQAGAOgCAQQgDAPgSAHQgSAGgWAFQgWAGgZADQgZAEgbACQgaADgXgBQhkABgtgbgAjuBLQgPAAgJgLQgIgKAAgPQAAgPAIgLQAJgLAPABIHdAAQAQgBAIALQAIALAAAPQAAAPgIAKQgIALgQAAgAhIgnQghgJgYgRQgYgRgNgYQgOgZAAgeQAAgeAOgZQANgZAYgQQAYgRAhgKQAhgJAnABQAogBAhAJQAhAKAYARQAYAQANAZQANAZAAAeQAAAegNAZQgNAYgYARQgYARghAJQghAJgoAAQgnAAghgJgAhAjOQgWARAAAcQAAAcAWARQAYARAoAAQAqAAAXgRQAWgRAAgcQAAgcgWgRQgXgSgqABQgogBgYASg");
	this.shape_32.setTransform(211.9,157.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgmAmQgQgPAAgXQAAgWAQgPQAPgPAXAAQAYAAAPAPQAPAPAAAWQAAAXgOAPQgPAPgZABQgYgBgOgPg");
	this.shape_33.setTransform(154.3,172.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhzDjQgQgBgKgJQgJgKAAgQQAAgRAJgKQAKgJAQAAIBRAAIAAkSIgeASIgdAQQgPAGgOgEQgOgEgHgOQgJgNAEgPQAEgPAQgIQAXgMAYgOQAYgPAPgMQAMgJAMgGQAMgFARgBQASAAANALQANAKAAATIAAFVIA+AAQAPAAAKAJQAIAKABARQgBAQgIAKQgKAKgPAAg");
	this.shape_34.setTransform(129,153);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AAtDkQgUgDgJgMQgJgMADgPIALg9IhYAAIgNBMQgDAPgMAHQgNAHgTgCQgUgDgIgMQgJgMADgPIAKg9IgiAAQgPAAgKgKQgJgJAAgQQAAgRAJgKQAKgJAPAAIAuAAIAVh0IgoAAQgQAAgJgJQgJgKAAgQQAAgRAJgJQAJgKAQAAIA0AAIAMhCQADgPAMgIQAMgHATADQAUADAJALQAJAMgCAPIgKA0IBXAAIAMhCQAEgPAMgIQAMgHATADQAUADAJALQAKAMgDAPIgKA0IAkAAQAPAAAJAKQAKAJAAARQAAAQgKAKQgJAJgPAAIgwAAIgVB0IAqAAQAPAAAKAJQAJAKAAARQAAAQgJAJQgKAKgPAAIg2AAIgOBMQgCAPgMAHQgJAFgNAAIgKAAgAg3A2IBYAAIAUh0IhXAAg");
	this.shape_35.setTransform(86.8,153.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgTATQgIgIAAgLQABgKAHgIQAIgIALAAQAMAAAIAIQAHAIAAAKQAAALgHAIQgIAIgMAAQgMAAgHgIg");
	this.shape_36.setTransform(544.9,76.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgTATQgIgIAAgLQABgKAHgIQAIgIALAAQAMAAAIAIQAHAIAAAKQAAALgHAIQgIAIgMAAQgMAAgHgIg");
	this.shape_37.setTransform(535.9,76.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgTATQgIgIAAgLQABgKAHgIQAIgIALAAQAMAAAIAIQAHAIAAAKQAAALgHAIQgIAIgMAAQgMAAgHgIg");
	this.shape_38.setTransform(526.9,76.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AA3B4QgHgFAAgHIAAjWQAAgJAHgEQAGgEAJgBQAJABAHAEQAHAEAAAJIAABHIAcAAQAIAAAEAFQAFAFAAAIQAAAIgFAEQgEAFgIAAIgcAAIAABsQAAAHgHAFQgHAEgJABQgJgBgGgEgAh1BQQgJgBgFgHQgGgHABgIQAAgHAIgHQAOgLAKgNQAKgMAGgMQAHgNADgNQADgNAAgMIAAgSIgmAAQgHAAgFgFQgEgEAAgJQAAgIAEgFQAFgFAHAAIB5AAQAHAAAFAFQAEAFAAAIQAAAJgEAEQgFAFgHAAIgkAAIAAASIgCASIgEATIA7A5QAHAIAAAJQgBAJgHAHQgDADgDABIgIABQgFAAgEgCQgDgBgDgEIgugzQgKAQgMAPQgMAOgPAMQgHAFgHAAIgDAAg");
	this.shape_39.setTransform(508.6,67.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AglCTQgQgEgMgHQgMgIgHgKQgHgLAAgOQAAgNAHgLQAHgLAMgHQAMgHAQgEQARgFAUAAQAUAAASAFQARAEAMAHQAMAHAGALQAHALAAANQAAAOgHALQgGAKgMAIQgMAHgRAEQgSAEgUAAQgUAAgRgEgAgfBLQgNAHAAALQAAAMANAGQALAHAUAAQAVAAAMgHQALgGAAgMQAAgLgLgHQgMgGgVAAQgUAAgLAGgAh3AaQgHAAgEgFQgFgFAAgIQAAgIAFgEQAEgFAHAAIAzAAIAAgKQgBgGAGgEQAGgDAKAAQAMAAAFADQAGAEAAAGIAAAKIAxAAIAAgKQAAgGAGgEQAFgDALAAQAKAAAGADQAGAEAAAGIAAAKIAzAAQAHAAAEAFQAEAEAAAIQAAAIgEAFQgEAFgHAAgAgkglQgQgEgNgIQgMgHgGgLQgHgLAAgOQAAgNAHgLQAGgLAMgHQANgIAQgEQAQgEAUAAQAUAAARAEQAQAEANAIQAMAHAGALQAHALgBANQABAOgHALQgGALgMAHQgNAIgQAEQgRAEgUAAQgUAAgQgEgAgfhuQgMAHABALQgBAMAMAHQALAGAUAAQAVAAALgGQALgHAAgMQAAgLgLgHQgLgHgVAAQgUAAgLAHg");
	this.shape_40.setTransform(478.3,69.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AA1B4QgHgFAAgHIAAjWQAAgJAHgEQAHgEAJgBQAJABAHAEQAGAEAAAJIAABHIAgAAQAIAAAEAFQAEAFAAAIQAAAIgEAEQgEAFgIAAIggAAIAABsQAAAHgGAFQgHAEgJABQgJgBgHgEgAh3BRQgIgCgFgHQgGgHAAgIQABgIAJgHQAOgMAKgNQAKgOAHgMQAGgOADgNQADgOAAgNIAAghQAAgIAHgEQAGgFALAAQAKAAAHAFQAGAEAAAIIAAAhIgBAUIgFAVIA8A9QAHAHgBAJQgBAJgHAHQgGAFgJAAQgIABgHgIIgtg0QgKAQgMAPQgNAPgPAMQgIAGgHAAIgDAAg");
	this.shape_41.setTransform(449.3,67.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgQCNQgQgDgLgIQgKgHgFgMQgFgMAAgQQAAgRAEgRQACgJAHgDQAHgDAKACQAJACAGAFQAFAFgCAJIgCANIAAANQAAAGACAEQACAFAEACQAFADAHACQAIABALAAQAVAAATgEQATgDAQgGQAJgEAGADQAHADADAHQADAIgCAHQgCAHgIAEQgmAQg1AAQgWAAgQgDgABPAvQgGgFAAgIIAAhPIgUAAQgHAAgDgFQgEgEAAgIQAAgIAEgFQADgFAHAAIAUAAIAAguQAAgIAGgFQAGgEALAAQAKAAAGAEQAGAFAAAIIAACgQAAAIgGAFQgGAEgKAAQgLAAgGgEgAhUANQgPgDgIgGQgJgFgDgKQgEgKAAgNIABgRIABgTIACgTIADgRQADgOAIgHQAIgGAQAAIBMAAQAjAAAAAkIAAA/QAAANgDAKQgDAKgJAFQgJAGgOADQgOADgYAAQgXAAgPgDgAhIhfQgCADgBAGIgCAYIgBAZIABAJQABADADACQAEACAGABIARABIASgBQAGgBADgCQADgCABgDIABgJIAAgxQAAgGgDgDQgCgCgHAAIgmAAQgFAAgDACg");
	this.shape_42.setTransform(409.4,69.4);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgQCBQgFgFAAgIIAAhBIhgAAQgJAAgEgGQgEgEgBgIQABgKAEgEQAEgFAJAAIDsAAQAHAAAFAFQAEAEAAAKQAAAIgEAEQgFAGgHAAIhgAAIAABBQgBAIgFAFQgHAEgKAAQgJAAgHgEgAgzgJQgUgCgKgGQgLgGgFgJQgDgLAAgOQAAgNABgMQACgMADgLQAEgPAIgHQAHgFAQgBIB6AAQAlABgBAjIAAAoQAAAOgDALQgFAJgLAGQgKAGgUACQgUADgeAAQgfAAgUgDgAgwheQgEACAAAHIgBAMIgBALQAAAGACADQACAEAFACQAGADALAAIAcABIAcgBQAKAAAGgDQAGgCABgEQACgDAAgHIAAgWQAAgHgDgCQgCgDgHAAIhSAAQgFAAgCADg");
	this.shape_43.setTransform(370.9,69.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("ABMB4QgGgFAAgHIAAh7Ig+AAQgIAAgDgEQgEgGAAgIQAAgHAEgFQADgGAIAAIA+AAIAAg3QAAgJAGgEQAGgEALgBQAKABAGAEQAGAEAAAJIAADWQAAAHgGAFQgGAEgKABQgLgBgGgEgAhfA3QgTgTAAgrIAAgZIADgZIAEgXIAFgTQAEgJAIgEQAJgCAJACQAJAEAEAGQAEAHgDAJIgFARIgDAUIgDAWIAAAUQAAAMACAIQACAKAFAEQAFAGAHACQAHADALgBQARAAANgCQAOgDAMgFQAJgEAGADQAHADACAHQADAIgCAIQgCAGgJAEQgQAHgRADQgRAEgUAAQgtAAgUgVg");
	this.shape_44.setTransform(341.3,67.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgSCNQgRgDgLgIQgKgHgFgMQgEgMAAgQIABgPQAAgIACgIQACgJAHgDQAGgEALACQAKABAFAFQAFAGgBAIIgCAMIAAANQAAAGACAEQACAFAFACQAEADAIACQAIABAOAAQAWAAAUgDQAUgEAPgGQAJgEAHADQAGADAEAHQADAIgCAHQgDAHgIAEQgSAIgXAEQgYAEgcAAQgZAAgRgDgABYAvQgGgEAAgIIAAijQAAgHAGgEQAFgEAJAAQAJAAAGAEQAFAEAAAHIAACjQAAAIgFAEQgGAEgJAAQgJAAgFgEgAAhAsQgFgEAAgIIAAhMIgIAAQgGAAgEgEQgEgFAAgJQAAgIAEgGQAEgFAGAAIAIAAIAAgtQAAgHAFgEQAGgEAJAAQAJAAAFAEQAGAEAAAHIAACeQAAAIgGAEQgFAEgJAAQgJAAgGgEgAhZANQgMgFgJgKQgIgKgFgPQgEgOAAgTQAAgTAEgOQAFgPAIgKQAJgLAMgFQAMgFAPAAQAPAAAMAFQAMAFAJALQAIAKAEAPQAEAOAAATQAAATgEAOQgEAPgIAKQgJAKgMAFQgMAFgPAAQgPAAgMgFgAhQhdQgHALAAAWQAAAWAHALQAGAMAMAAQALAAAHgMQAHgLAAgWQAAgWgHgLQgHgMgLAAQgMAAgGAMg");
	this.shape_45.setTransform(302.4,69.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("ABRB4QgGgFAAgHIAAjWQAAgJAGgEQAGgEALgBQAKABAGAEQAGAEAAAJIAADWQAAAHgGAFQgGAEgKABQgLgBgGgEgAhqBSQgHgDgEgHQgEgJADgIQADgJAJgCQAWgIARgKQARgKALgNQAMgLAGgOQAFgNAAgPQAAgKgFgFQgGgFgNAAIg6AAQgIAAgEgFQgFgFAAgJQAAgIAFgFQAEgFAIAAIBRAAQAXAAAMANQAMANAAAXQAAAYgIAWQgIAVgOASQgQASgWAOQgWAOgcAIQgGACgEAAIgIgBg");
	this.shape_46.setTransform(272.4,67.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AA8B9QgHgFAAgIIAAjWQAAgIAHgEQAGgFAJAAQAJAAAHAFQAHAEAAAIIAABRIAcAAQAIAAAEAFQAFAGAAAHQAAAHgFAFQgEAFgIAAIgcAAIAABjQAAAHgHAFQgHAEgJAAQgJAAgGgEgAhPBaQgOgEgKgJQgKgJgGgMQgFgNAAgPQAAgPAFgMQAGgLAKgJQAKgJAOgFQANgFARAAQAQAAAOAFQAOAFAJAJQAKAJAGALQAFAMAAAPQAAAPgFANQgGAMgKAJQgJAJgOAEQgOAFgQAAQgRAAgNgFgAhHAFQgJAIAAAPQAAAQAJAIQAIAIAOAAQANAAAJgIQAJgIAAgQQAAgPgJgIQgJgIgNAAQgOAAgIAIgAh9gxQgIAAgEgFQgFgFAAgHQAAgIAFgFQAEgGAIAAIA2AAIAAgaQAAgJAGgEQAHgEAJAAQAJAAAGAEQAHAEAAAJIAAAaIAyAAQAIAAAEAGQAEAFAAAIQAAAHgEAFQgEAFgIAAg");
	this.shape_47.setTransform(244.1,67);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("ABTB4QgGgFAAgHIAAjWQAAgJAGgEQAGgEALgBQAKABAGAEQAGAEAAAJIAADWQAAAHgGAFQgGAEgKABQgLgBgGgEgAhIA4QgPgGgLgMQgLgLgGgQQgGgOAAgVQAAgTAGgRQAGgPALgMQALgLAPgGQAQgGATAAQAUAAAPAGQAPAGALALQALAMAGAPQAGARAAATQAAAVgGAOQgGAQgLALQgLAMgPAGQgPAGgUAAQgTAAgQgGgAhBg8QgKAOAAAWQAAAXAKAMQAKAOASAAQASAAALgOQAJgMAAgXQAAgWgJgOQgLgNgSABQgSgBgKANg");
	this.shape_48.setTransform(213.7,67.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AA6B4QgGgFAAgHIAAjWQAAgJAGgEQAGgEAJgBQAJABAGAEQAGAEAAAJIAABGIAcAAQAIAAAEAFQAFAGAAAIQAAAHgFAFQgEAFgIAAIgcAAIAABsQAAAHgGAFQgGAEgJABQgJgBgGgEgAgwBRQgHgEgCgHQgCgJAGgHQAWgcAJgcQAKgfAAgdQAAgHgDgCQgCgDgGAAIgOAAQgHAAgEgFQgEgEAAgIQAAgJAFgFQAEgFAHAAIAeAAQASAAAIALQAJALAAATQAAApgLAlQgLAkgaAiQgGAGgJABIgBAAQgHAAgGgFgAiBA9IgFgGQgDgDAAgFIAAgHQABgEAEgDQATgVAJgWQAJgZAAgbQAAgHgDgCQgCgDgGAAIgLAAQgIAAgEgFQgFgEAAgIQAAgJAEgFQAFgFAIAAIAbAAQATAAAIALQAJALAAATQAAARgCARQgCAQgGAPQgFAQgKAPQgJAPgNAOQgGAIgIAAIgCABQgHAAgFgEg");
	this.shape_49.setTransform(185.7,67.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAyB4QgHgFAAgHIAAjWQAAgJAHgEQAGgEAJgBQAJABAHAEQAHAEAAAJIAABFIAgAAQAHAAAFAFQAEAGAAAIQAAAHgEAFQgFAFgHAAIggAAIAABtQAAAHgHAFQgHAEgJABQgJgBgGgEgAh5BSQgIgCgEgIQgDgKADgHQACgIAJgDQAUgIAQgKQAPgLALgMQALgLAFgOQAGgOAAgOQAAgKgGgFQgGgFgMAAIg0AAQgIAAgEgFQgFgFAAgJQAAgIAFgFQAEgFAIAAIBKAAQAYAAAMANQALANAAAXQAAAYgHAVQgHAVgPASQgOASgVAOQgVAPgaAIQgGADgEAAIgHgCg");
	this.shape_50.setTransform(156.3,67.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgTATQgIgIABgLQAAgKAIgIQAHgIALAAQAMAAAIAIQAHAIABAKQgBALgHAIQgIAIgMAAQgLAAgIgIg");
	this.shape_51.setTransform(126.7,76.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("Ag5BxQgIAAgFgFQgEgFAAgIQAAgIAEgFQAFgFAIAAIAoAAIAAiIIgPAJIgOAIQgIADgHgCQgHgCgEgHQgEgHACgHQACgHAIgFIAYgNQAMgHAHgGIAMgHQAGgDAIAAQAJAAAHAFQAGAFAAAKIAACpIAfAAQAIAAAEAFQAFAFAAAIQAAAJgFAEQgEAFgIAAg");
	this.shape_52.setTransform(114,66.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAmByQgGgEAAgIIAAhaQAAgMgIgHQgIgIgQAAQgPAAgIAIQgIAHAAANIAABZQAAAIgGAEQgGAEgKAAQgKAAgHgEQgGgEAAgIIAAjLQAAgIAGgEQAHgEAKAAQAKAAAGAEQAGAEAAAIIAABBQAIgHALgEQALgEAMAAQAhAAARAQQAQAQAAAbIAABeQAAAIgGAEQgGAEgLAAQgKAAgGgEg");
	this.shape_53.setTransform(95.4,66.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgfBrQgVgHgQgQQgQgPgIgVQgJgVAAgbQAAgZAJgWQAIgVAQgPQAQgPAVgJQAVgHAagBQAUAAARAFQARADAPAIQAJAFABAHQACAIgEAHQgDAHgHACQgHADgHgEQgLgHgNgDQgNgEgPAAQgQAAgMAGQgOAFgKALQgKAKgFAOQgGAPAAARQAAASAGAPQAFAOAKAKQAKALAOAFQAMAGAQAAQARAAAPgEQAPgDALgHQAIgEAHADQAGACAEAIQADAHgCAIQgCAGgIAEQgPAJgTADQgUAFgVAAQgaAAgVgJg");
	this.shape_54.setTransform(74.6,67.1);

	this.text = new cjs.Text("출처: http://www.ziksir.com/ziksir/view/2266", "bold 15px 'Binggrae'");
	this.text.lineHeight = 22;
	this.text.lineWidth = 538;
	this.text.parent = this;
	this.text.setTransform(18.3,1049.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgnAmQgOgPAAgXQAAgWAOgPQAQgPAXAAQAYAAAPAPQAQAPAAAWQAAAXgPAPQgPAPgZABQgYgBgPgPg");
	this.shape_55.setTransform(927.6,172.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("ABkDwQgNgJAAgQIAAmtQAAgRANgJQAOgIASAAQASAAANAIQAOAJAAARIAACLIA5AAQAQAAAIALQAJALAAAOQAAAPgJALQgIAKgQAAIg5AAIAADbQAAAPgOAJQgNAJgSAAQgSAAgOgJgAipCaQgfgJgTgUQgVgUgKgfQgKggAAguQAAgmAGglQAGgkALgiQgOgBgIgKQgHgLAAgNQAAgPAJgLQAHgLAQAAIDcAAQAOAAAIALQAJALAAAPQAAAOgJAKQgIALgOAAIiKAAQgJAigDAlQgEAlgBAlQAAAZAEARQAEARAIAKQAJALANAEQAOAFASAAQAhABAcgFQAcgHASgHQAQgHAOAFQANAFAGAPQAFAQgEAOQgFANgOAHQgbANggAHQghAHgtAAQgpAAgegIg");
	this.shape_56.setTransform(891.3,154.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("ACaDwQgNgJAAgQIAAmtQAAgQANgJQAMgJAUAAQAVAAAMAJQAMAJAAAQIAAGtQAAAQgMAJQgMAJgVAAQgUAAgMgJgAi+BvQgogpgBhVIACgvIAFgxQADgYAFgVIAJgqQAEgTAQgGQAPgGAUAFQAUAFAJANQAJAMgFAUQgIAigGAqQgFArgBAoQABAZAEARQAFARAJAKQAJALAPAEQAPAEAUAAQAjAAAcgFQAfgGAXgKQARgGANAFQANAGAGAQQAFAPgEAOQgFAOgRAIQggAOglAHQglAHgnAAQhYAAgpgpg");
	this.shape_57.setTransform(830,154.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgwEeQgmgGgWgKQgWgLgHgSQgIgRAAgaQAAgdADgaQADgbAEgTQAFgTAOgGQAOgGATAEQATAEAKAKQAJALgEASIgBAGIDVAAIAAgMQAAgQALgKQAKgKAXAAQAXAAAKAKQALAKgBAQIAABbQAAAagHARQgIASgWALQgVAKgnAGQgnAFg+AAQg9AAgngFgAg5C/QAAAJADAHQADAGALADQAMAEAVABIA7ABIA9gBQAWgBALgEQALgDADgGQADgHAAgJIAAgMIjcAAgACuAsQgLgIAAgQIAAkVQAAgPALgJQANgJAUAAQAUAAAMAJQALAJAAAPIAAEVQAAAQgLAIQgMAJgUAAQgUAAgNgJgAjZAtQgQAAgIgKQgIgLAAgOQAAgNAIgLQAIgLAQAAIB5AAIAAgUQAAgKALgGQAMgGAVAAQAVAAALAGQAMAGAAAKIAAAUIAVAAQAbAAAYgDQAYgDATgFQAQgEAKAHQAKAHAEAMQADAMgFAMQgFANgRAFQgbAIgjAFQghAEgmAAgAh8hSQgggFgSgKQgTgKgIgQQgIgQAAgXQAAgYAKgXQgMgDgGgIQgGgJAAgMQAAgPAJgKQAHgKAQAAIEAAAQAPAAAIAJQAJAKAAAQQAAAPgJAJQgIAJgPAAIi0AAIgEASIgBATQAAAHADAFQADAGAIADQAJADAMACQANABAWAAQAcAAAggEQAfgFAXgGQAPgFAMAFQAKAGAFAOQAFAQgHALQgGALgOAFQgaAJgjAFQghAEgoAAQgsAAgegEg");
	this.shape_58.setTransform(769.6,158.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("ACzDxQgMgHAAgQIAAm0QAAgOAMgIQALgIASAAQASAAAMAIQAMAIAAAOIAAG1QAAAPgMAHQgMAIgSAAQgSAAgLgIgAA4DoQgLgHAAgOIAAjRIgkAAQgNAAgHgJQgHgKAAgQQAAgQAHgKQAHgKANAAIAkAAIAAiQQAAgPALgIQALgIASAAQASAAAMAIQALAIAAAPIAAGnQAAAPgLAHQgMAIgSAAQgSAAgLgIgAjXCfQgQgCgKgOQgJgOACgQQACgQAOgJQAegTAYgYQAYgXAQgZQARgaAIgbQAJgcAAgcQAAgQgHgHQgHgHgQAAIhOAAQgPAAgJgKQgIgLAAgPQAAgQAIgKQAJgLAPAAIBjAAQAzAAAXAYQAWAYAAAwQAAAlgLAnQgLAngVAjQgWAkgfAgQgfAfgoAXQgMAGgNAAIgGAAg");
	this.shape_59.setTransform(692.9,154.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgHElQgagHgTgLQgSgMgKgQQgKgQAAgVQAAgVAKgQQAKgRASgLQATgMAagGQAagGAgAAQAhAAAbAGQAaAGATAMQASALAKARQAKAQAAAVQAAAVgKAQQgKAQgSAMQgTALgaAHQgbAFghAAQggAAgagFgAAIC5QgNAJAAAOQAAAOANAIQAOAJAdAAQAeAAAOgJQAOgIAAgOQAAgOgOgJQgOgIgeAAQgdAAgOAIgAhxBrQgQAAgIgJQgIgIAAgOQAAgPAIgIQAIgJAQAAIB5AAIAAgcQAAgOALgHQAMgIAUAAQAVAAAMAIQALAHAAAOIAAAcIB2AAQAQAAAIAJQAIAIAAAPQAAAOgIAIQgIAJgQAAgACagLQgLgJAAgQIAAhkIg9AAQgOAAgJgIQgJgJAAgPQAAgQAJgJQAJgJAOAAIA9AAIAAg9QAAgQALgJQAMgJAUAAQAVAAAMAJQALAJAAAQIAADjQAAAQgLAJQgMAJgVAAQgUAAgMgJgAiagXQgbgEgRgJQgQgJgHgOQgHgPAAgUQAAgPAGgMQgWgEAAgaQAAgOAHgIQAHgIAOAAICVAAQAJAAAEgCQADgDAAgHIAAgQQAAgMgQAAIiJAAQgOAAgHgJQgHgIAAgOQAAgOAHgJQAHgJAOAAICpAAQBHAAAAA8IAAArQAAA8hHAAIhnAAIgBAHIAAAGQAAAIACAFQACAFAGAEQAGADAKABIAaABQBMAAA6gQQAOgFAKAFQAKAEAFANQAEANgFALQgFAMgPAEQghAKgnAGQgnAFgoAAQgoAAgcgEg");
	this.shape_60.setTransform(634.5,159.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("ACnDwQgNgJAAgQIAAmtQAAgQANgJQAMgJAUAAQAVAAAMAJQAMAJAAAQIAAGtQAAAQgMAJQgMAJgVAAQgUAAgMgJgAiRBwQgegMgXgXQgVgXgNgfQgLgggBgnQABgoALggQANggAVgWQAXgXAegMQAggMAnAAQAmAAAgAMQAeAMAWAXQAWAWAMAgQAMAgAAAoQAAAngMAgQgMAfgWAXQgWAXgeAMQggAMgmAAQgnAAgggMgAiDh4QgVAZAAAvQAAAuAVAZQAVAaAkAAQAkAAAUgaQAUgZAAguQAAgvgUgZQgUgagkAAQgkAAgVAag");
	this.shape_61.setTransform(574.9,154.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgiEaQgggHgVgPQgVgOgKgYQgKgXAAghQAAghAIghQAEgRAOgGQAOgHATAEQAUADALALQAKALgDAQQgFAbAAAYQAAAMAEAIQAEAJAJAGQAJAGAPACQAPADAYAAQApAAAngHQAmgHAegMQATgIANAGQANAFAGAQQAHAPgEAOQgEAOgSAIQhLAhhpAAQgtAAghgHgACeBdQgMgJAAgQIAAhUIgqAAQgOAAgHgJQgHgJAAgPQAAgQAHgJQAHgKAOAAIAqAAIAAhBIgqAAQgOAAgHgJQgHgJAAgPQAAgQAHgKQAHgJAOAAIAqAAIAAglQAAgPAMgJQAMgKAVAAQAVAAAMAKQAMAIAAAQIAAFCQAAAQgMAJQgMAJgVAAQgVAAgMgJgAiqAaQgdgGgSgNQgRgLgGgTQgHgTAAgbIABgjIADgmIAEgmQACgSADgPQAHgdAQgNQAQgNAgAAICXAAQBHAAAABIIAAB/QAAAbgGATQgHATgRALQgRANgdAGQgdAFgvAAQgvAAgegFgAiRi/QgFAFgCANQgDAVgBAcIgBAxQAAAKACAHQACAHAGAEQAGAEANACQANABAWAAQAWAAANgBQAMgCAHgEQAGgEABgHQACgHAAgKIAAhiQAAgMgFgGQgFgFgNAAIhMAAQgKAAgGAFg");
	this.shape_62.setTransform(497.2,158.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("ABkDwQgNgJAAgQIAAmtQAAgRANgJQAOgIASAAQASAAANAIQAOAJAAARIAACLIA5AAQAQAAAJALQAIALAAAOQAAAPgIALQgJAKgQAAIg5AAIAADbQAAAPgOAJQgNAJgSAAQgSAAgOgJgAipCaQgfgJgTgUQgVgUgKgfQgKggAAguQAAgmAGglQAGgkALgiQgOgBgIgKQgHgLAAgNQAAgPAJgLQAHgLAQAAIDcAAQAOAAAIALQAJALAAAPQAAAOgJAKQgIALgOAAIiKAAQgJAigDAlQgEAlgBAlQAAAZAEARQAEARAIAKQAJALANAEQAOAFASAAQAhABAcgFQAcgHASgHQAQgHAOAFQANAFAGAPQAFAQgEAOQgFANgOAHQgbANggAHQghAHgtAAQgpAAgegIg");
	this.shape_63.setTransform(441.3,154.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AiFEfQgUgEgNgKQgNgLgFgRQgFgRAAgaQAAgtADgmQAEgmAFgdQACgOAKgHQAKgIATACQASACAIAKQAIAJgCAOIgEAXIgCAXIBAAAIAAgyQAAgOAJgIQAKgJATAAQARAAAJAJQAKAIAAAOIAACSQAAAagFARQgGARgNALQgLAKgVAEQgVAFgfAAQggAAgVgFgAhyC0IAAAPIABARQABAGADADQAEAEAHABQAGABAMABQALgBAHgBQAHgBAEgEQADgDABgGIABgRIAAgeIhEAAIAAAPgABDEgQgPgDgKgJQgLgLgCgOQgBgOANgOQAOgOALgQQAMgQAJgSQAIgSAFgRQAFgSAAgPIAAgfQAAgRAKgJQALgJAUAAQATAAAKAJQALAJAAARIAAAfQAAANgCAOQgCAOgFAPIBHBHQANANgBAPQAAAPgMAMQgLALgQAAQgRABgMgOIgug5QgLASgNAQQgNARgOANQgKAKgNAAIgFAAgACRgEQgLgKAAgPIAAhZIgrAAQgNAAgHgKQgHgJAAgQQAAgQAHgKQAHgKANAAIArAAIAAhDQAAgRALgIQAMgKAVAAQAVAAAMAKQALAIAAARIAADjQAAAPgLAKQgMAIgVAAQgVAAgMgIgAilgXQgdgJgUgSQgVgSgMgZQgMgZAAggQAAghAMgZQAMgaAVgRQAUgRAdgLQAcgJAiAAQAhAAAdAJQAcALAUARQAVARAMAaQAMAZAAAhQAAAggMAZQgMAZgVASQgUASgcAJQgdAKghAAQgiAAgcgKgAiYjIQgSATAAAfQAAAeASASQATASAeAAQAeAAATgSQASgSAAgeQAAgfgSgTQgTgRgegBQgeABgTARg");
	this.shape_64.setTransform(380.9,158.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("ABjDwQgOgJAAgQIAAmtQAAgRAOgJQANgIASAAQASAAAOAIQANAJAAARIAACLIBAAAQAPAAAJALQAIALAAAOQAAAPgIALQgJAKgPAAIhAAAIAADbQAAAPgNAJQgOAJgSAAQgSAAgNgJgAj0ClQgPgFgIgSQgHgRAGgQQAGgPARgHQAogPAfgVQAggVAVgZQAVgYALgbQALgbAAgbQAAgWgLgKQgLgKgaAAIhnAAQgPAAgJgKQgJgKAAgQQAAgRAJgKQAJgKAPAAICUAAQAvAAAZAZQAXAZAAAxQAAAvgOArQgQAqgdAkQgdAkgqAdQgpAcg1ASQgKAEgJAAQgIAAgHgCg");
	this.shape_65.setTransform(304,154.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AiqDbQgPgMgDgQQgCgQAJgMIB+ijIh8iiQgJgMACgQQABgQAQgNQAPgMARABQARAAAKAOIBuCQIBviQQAKgOARAAQAQgBAQAMQAQAMACAQQADAQgKANIh+CiIB/CjQAJAMgCAPQgCAQgQANQgPANgRgBQgQgBgKgOIhxiRIhvCSQgKANgRABIgCAAQgQAAgOgMg");
	this.shape_66.setTransform(251,153.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AhQDaQgigKgWgVQgWgTgLgcQgKgcAAggIAAkVQAAgPAMgIQAMgIAVAAQAUAAANAIQAMAIAAAPIAAESQAAASAFAOQAFAPALAKQAKAMASAFQARAGAXABQAYgBARgGQARgFALgMQALgKAFgPQAFgOAAgRIAAkTQAAgPANgIQAMgIAUAAQAVAAAMAIQAMAIAAAPIAAEVQAAAggKAcQgLAcgWATQgXAVgiAKQghAMgvAAQguAAgigMg");
	this.shape_67.setTransform(206.6,153.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgnAmQgOgPAAgXQAAgWAOgPQAQgPAXAAQAYAAAPAPQAQAPAAAWQgBAXgPAPQgOAPgZABQgYgBgPgPg");
	this.shape_68.setTransform(155.9,172.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AhzDjQgVAAgLgMQgMgMAAgSQAAgcAbgZIBYhRQAwgtAVgiQAVgiAAgfQAAgcgQgQQgPgRgcAAQgVAAgTAMQgTAKgOASQgKAMgRABQgQABgOgLQgNgLgBgQQgCgQAPgPQAWgZAhgQQAhgQArAAQBKABAmAiQAmAjAAA9QAAAsgZAuQgaArg4A2IhDA/ICjAAQAQAAAJAJQAJAKAAARQAAAQgJAKQgJAKgQAAg");
	this.shape_69.setTransform(128.8,153);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AjtDdQgPAAgJgJQgJgKAAgRQAAgRAJgKQAJgJAPAAIHbAAQAOAAAKAJQAJAKAAARQAAARgJAKQgKAJgOAAgAheBQQgngGgYgOQgYgPgLgWQgKgXAAgfQAAgkAHgeQAFgdALgaQgMgBgIgJQgHgJAAgOQAAgPAIgKQAJgKAPAAIFJAAQAPAAAJAKQAIAJAAAQQAAAQgIAIQgJAKgPgBIj5AAIgGAZIgFAbID5AAQAPgBAIAKQAJAJAAAOQAAAOgJAIQgIAJgPAAIj/AAIAAAHQABAOAEAJQAFAKAMAFQAMAGAVADQAWACAhAAQAtAAAtgDQAsgEAcgHQAPgEALAHQAKAHAEAOQADAOgHALQgFAMgPAEQghAIgwAFQgvAEgyABQg4AAglgIg");
	this.shape_70.setTransform(840.1,153.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AC0EfQgTgFgJgLQgJgMAFgSQAGgVADgXQADgWAAgUQAAgQgHgHQgHgHgQAAIjiAAQgPAAgJgKQgIgLAAgPQAAgQAIgLQAJgLAPAAIECAAQAvAAAVAUQAWAVAAArQAAAggEAhQgFAggKAeQgFARgPAGQgIADgKAAQgHAAgIgBgAC1AVQgLgIAAgOIAAkAQAAgOALgIQAMgIASAAQASAAALAIQAMAIAAAOIAAEAQAAAOgMAIQgLAIgSAAQgSAAgMgIgAjWAYQgPgBgLgMQgFgFgDgHQgDgHAAgIQAAgHAEgHQADgIAHgEQArgfAVgiQAVgiAAghIAAgbIg1AAQgQAAgIgKQgIgJAAgPQAAgQAIgJQAIgKAQAAIC/AAQAPAAAIAKQAJAJAAAQQAAAPgJAJQgIAKgPAAIgzAAIAAAbQAAAYgKAcIBYBCQAOAJADAPQADAPgJAOQgJANgPADQgQADgOgLIhOhBQgPAWgUAUQgTATgWAOQgOAJgOAAIgCAAgABBAPQgLgIAAgPIAAhiIgzAAQgOAAgJgJQgIgJAAgQQAAgQAIgJQAJgJAOAAIAzAAIAAhOQAAgPALgIQALgIASAAQASAAALAIQALAIAAAPIAAD0QAAAPgLAIQgLAIgSAAQgSAAgLgIg");
	this.shape_71.setTransform(780.4,158.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AjtDgQgOAAgKgJQgJgJAAgSQAAgRAJgKQAKgJAOABIDAAAIAAgnQAAgMAMgGQAMgHAVAAQAWAAANAHQALAGABAMIAAAnIC+AAQAQgBAJAJQAJAKAAARQAAASgJAJQgJAJgQAAgAhcBGQgmgFgXgKQgXgIgKgPQgLgQAAgTQAAgLACgLQABgKADgJQgLgDgFgIQgFgJgBgLQABgPAHgIQAIgJANAAIEJAAQAJAAADgDQAEgFAAgIIAAgQQAAgJgEgEQgDgDgJAAIj/AAQgMAAgIgKQgIgJAAgQQAAgPAHgKQAJgJANAAIEoAAQAhABASAQQASAQAAAhIAAAxQAAAhgSAQQgSARghgBIjeAAQgCANAAANQAAAIAEAEQAEAFALABQALADAUACIA1ABQAsAAApgFQAqgEAhgHQARgEALAGQALAFADAMQAFAPgGAMQgFAMgQAFQghAJgvAHQgwAFg0AAQg3AAgngEg");
	this.shape_72.setTransform(722.5,153.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AjtDcQgPAAgJgKQgJgJAAgRQAAgSAJgJQAJgKAPAAIHbAAQAOAAAKAKQAJAJAAASQAAARgJAJQgKAKgOAAgAi3BMQgQAAgJgKQgIgKAAgQQAAgQAIgKQAJgKAQAAIAwAAIAAiWIgsAAQgPAAgJgKQgIgLAAgQQAAgQAIgKQAJgKAPAAIFlAAQAQAAAJAKQAHAKABAQQgBAQgHALQgJAKgQAAIgsAAIAACWIAxAAQAPAAAJAKQAJAKgBAQQABAQgJAKQgJAKgPAAgAguAEIBdAAIAAiWIhdAAg");
	this.shape_73.setTransform(663.7,153.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("ACiDwQgMgJAAgQIAAmtQAAgQAMgJQAMgJAVAAQAVAAAMAJQAMAJAAAQIAAGtQAAAQgMAJQgMAJgVAAQgVAAgMgJgAjVCkQgPgFgHgRQgHgQAFgQQAGgRARgGQAtgPAigUQAigVAWgZQAXgXAMgbQAMgbAAgdQAAgWgLgKQgMgKgZAAIh1AAQgQAAgJgKQgJgKAAgQQAAgRAJgKQAJgKAQAAICiAAQAuAAAZAZQAYAZAAAxQAAAwgQArQgQArgeAkQgeAkgtAbQgtAcg4ASQgLAEgJAAQgIAAgHgDg");
	this.shape_74.setTransform(584.4,154.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("ADADxQgMgHAAgQIAAjfIg5AAIAADXQAAAPgMAHQgNAIgQAAQgRAAgMgIQgMgHAAgOIAAmoQAAgPAMgIQAMgIARAAQAQAAANAIQAMAIAAAPIAACJIA5AAIAAiNQAAgPAMgIQALgIASAAQASAAAMAIQAMAIAAAOIAAG1QAAAPgMAHQgMAIgSAAQgSAAgLgIgAjiBVQgkgvAAhTQAAhUAkgwQAkgvBBAAQBCAAAkAvQAiAwAABUQAABTgiAvQgkAwhCAAQhBAAgkgwgAikh8QgNAaAAA1QAAA0ANAaQAOAZAZAAQAaAAAOgZQANgaAAg0QAAg1gNgaQgOgagaAAQgZAAgOAag");
	this.shape_75.setTransform(525.5,154.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AhNEaQghgHgVgPQgVgOgKgYQgKgXAAghQAAgjAIgiQAEgQAOgHQAOgGAUAEQAUADAKALQALALgDAQQgDAPgBAMQgCAMAAAOQAAAMAEAIQAEAJAJAGQAKAGAPACQAQADAXAAQAkAAAkgHQAkgHAegMQATgIANAGQANAFAGAQQAHAPgEAOQgEAOgSAIQhLAhhfAAQgtAAghgHgABmBdQgMgJAAgQIAAlCQAAgQAMgIQAMgKAVAAQAVAAAMAKQAMAIAAAQIAABfIA6AAQAPAAAJAKQAIAKAAAQQAAARgIAJQgJAJgPAAIg6AAIAACcQAAAQgMAJQgMAJgVAAQgVAAgMgJgAjfgBQgngeAAhEQAAg0ARguQgMgDgGgJQgGgKAAgNQAAgOAIgLQAJgLAPAAIDkAAQAPAAAIALQAJALAAAOQAAAPgJAKQgIALgPAAIiWAAQgKAsAAA1QAAAeAPANQAOAMAhAAQASAAAPgCQAPgCANgDQANgDAMgFIAYgKQAQgGANAEQANAEAGAPQAGAOgEAOQgEAOgOAHQgdAMgjAKQgjAJgtAAQhLAAgngdg");
	this.shape_76.setTransform(391.8,158.1);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AhAEdQgtgagBgxQABgwAtgbQAugaBSAAQBTAAAuAaQAtAbABAwQgBAxgtAaQguAbhTgBQhSABgugbgAAECzQgUALAAAUQAAAVAUAKQAUALAogBQAnABAVgLQAVgKAAgVQAAgUgVgLQgVgKgnAAQgoAAgUAKgACvBlQgMgIAAgQIAAlFQAAgQAMgJQALgJAVAAQAUAAAMAJQALAJAAAQIAAFFQAAAQgLAIQgMAJgUAAQgVAAgLgJgAjdBaQgOAAgHgIQgIgJABgOQgBgOAIgJQAHgJAOABICAAAIAAgPQAAgJAKgGQALgFAXAAQAXAAALAFQAKAGABAJIAAAPIAQAAQAbgBAXgDQAYgCAUgGQAQgDAKAEQAKAFAEAMQADAMgGAMQgEAKgRAFQgbAJgjAEQgiAEglAAgAiggoQgngVAAgqQAAgoAngWQAngWBIABQBHgBAnAWQAnAWAAAoQAAAqgnAVQgnAVhHAAQhIAAgngVgAhhh+QgQAIAAAPQAAARAQAHQAQAIAgAAQAfAAAQgIQAQgHAAgRQAAgPgQgIQgQgHgfAAQggAAgQAHgAjGjJQgfAAAAgdQAAgPAIgJQAIgIAPAAIBoAAIAAgVQAAgMALgHQALgJAXABQAXgBALAJQALAHAAAMIAAAVIBgAAQAPAAAIAIQAIAJAAAPQAAAdgfAAg");
	this.shape_77.setTransform(329.3,157.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AhNEaQghgHgVgPQgVgOgKgYQgKgXAAghQAAgjAIgiQAEgQAOgHQAOgGAUAEQAUADAKALQALALgDAQQgDAPgBAMQgCAMAAAOQAAAMAEAIQAEAJAJAGQAKAGAPACQAQADAXAAQAkAAAkgHQAkgHAegMQATgIANAGQANAFAGAQQAHAPgEAOQgEAOgSAIQhLAhhfAAQgtAAghgHgABmBdQgMgJAAgQIAAlCQAAgQAMgIQAMgKAVAAQAVAAAMAKQAMAIAAAQIAABfIA6AAQAPAAAJAKQAIAKAAAQQAAARgIAJQgJAJgPAAIg6AAIAACcQAAAQgMAJQgMAJgVAAQgVAAgMgJgAjfgBQgngeAAhEQAAg0ARguQgMgDgGgJQgGgKAAgNQAAgOAIgLQAJgLAPAAIDkAAQAPAAAIALQAJALAAAOQAAAPgJAKQgIALgPAAIiWAAQgKAsAAA1QAAAeAPANQAOAMAhAAQASAAAPgCQAPgCANgDQANgDAMgFIAYgKQAQgGANAEQANAEAGAPQAGAOgEAOQgEAOgOAHQgdAMgjAKQgjAJgtAAQhLAAgngdg");
	this.shape_78.setTransform(274.2,158.1);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AggECQgMgJAAgQIAAiEIjBAAQgPAAgJgJQgJgKAAgRQAAgSAJgIQAJgKAPAAIHbAAQAOAAAKAKQAJAIAAASQAAARgJAKQgKAJgOAAIjBAAIAACEQAAAQgMAJQgMAJgVAAQgUAAgMgJgAhmgRQgogGgWgMQgWgLgIgUQgIgUAAgcQAAgbAEgYQAEgYAEgWQAJgdAPgNQAPgNAgAAID3AAQBHAAAABIIAABQQAAAcgIAUQgIAUgWALQgWAMgnAGQgoAFg9AAQg+AAgngFgAhii9QgGAFgBANIgDAYIAAAWQgBAMAEAIQADAHALAFQALAEAWACQAVABAkABQAjgBAWgBQAVgCALgEQALgFAEgHQACgJAAgMIAAgtQAAgMgEgGQgGgFgNAAIilAAQgKAAgFAFg");
	this.shape_79.setTransform(213.7,157.4);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgnAmQgPgPAAgXQAAgWAPgPQAQgPAXAAQAYAAAPAPQAPAPAAAWQAAAXgOAPQgPAPgZABQgYgBgPgPg");
	this.shape_80.setTransform(156.1,172.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AhQDeQghgIgVgPQgQgMgDgOQgEgOAKgQQAJgPAPgCQAQgCAMAIQATANAVAGQAVAIAWAAQAjAAAVgRQAVgSAAgfQAAgggWgSQgWgRghAAIgxAAQgQABgJgKQgJgJAAgRQAAgQAJgJQAJgLAQAAIAvAAQAiAAAQgOQARgQAAgaQAAgagRgPQgRgQgcAAQgSAAgSAHQgSAGgSAKQgPAKgOgDQgPgDgJgNQgJgOADgOQACgOAPgKQAYgQAfgJQAfgJAjAAQAkAAAbAKQAcAJASARQASARAJAXQAJAXAAAdQAAAdgOAaQgOAagcAMQAgALASAcQATAbAAAlQAAAegLAZQgKAagVASQgUARgfALQgeAKgoAAQgoAAghgJg");
	this.shape_81.setTransform(128.1,153.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("ACvDwQgMgIAAgPIAAmwQAAgQAMgIQAMgJAVAAQAUAAAMAJQAMAIAAAQIAAGwQAAAPgMAIQgMAJgUAAQgVAAgMgJgAjbC/QgQAAgHgKQgJgKAAgQQAAgPAJgLQAHgLAQAAIDeAAQAaAAAbgDQAbgDATgFQAQgEALAHQALAHADAOQADAPgGALQgFAMgRAGQgZAIgfAFQgfADgkAAgAh7AvQgegLgVgTQgWgSgKgcQgMgbAAgiQAAghAMgbQAKgcAWgTQAVgTAegLQAegLAkAAQAlAAAdALQAeALAUATQAVATAMAcQALAbAAAhQAAAigLAbQgMAcgVASQgUATgeALQgdALglAAQgkAAgegLgAhtiRQgTAUAAAjQAAAkATAUQAUATAgAAQAhAAATgTQASgUAAgkQAAgjgSgUQgTgUghAAQggAAgUAUg");
	this.shape_82.setTransform(435.7,154.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AgEEdQgcgKgWgRQgVgSgLgZQgMgZAAgeQAAgfAMgZQAMgZAVgSQAVgRAdgKQAbgJAiAAQAhAAAdAJQAcAKAVARQAVASAMAZQAMAZAAAfQAAAegLAZQgMAZgVASQgVARgdAKQgdAKghAAQgiAAgcgKgAAIBxQgRASAAAdQAAAcARASQATASAfAAQAeAAATgSQATgSAAgcQAAgdgTgSQgTgSgeAAQgfAAgTASgACjAZQgMgJAAgPIAAhtIhAAAQgQAAgIgKQgIgJAAgRQAAgQAIgJQAIgKAQAAIBAAAIAAhRQAAgQAMgIQAMgKAVAAQAVAAAMAKQAMAIAAAQIAAEFQAAAPgMAJQgMAJgVAAQgVAAgMgJgAjSATQgPgDgIgOQgJgMACgQQACgQARgJQAbgNAVgRQAUgSAOgSQAOgRAHgSQAIgSAAgQIAAgSIhQAAQgQAAgIgKQgJgKAAgQQAAgPAJgLQAIgKAQAAID3AAQAQAAAIAKQAJALAAAPQAAAQgJAKQgIAKgQAAIhNAAIAAASQAAAYgKAaIBxBIQAQAKADARQADARgKANQgKANgQAEQgPADgPgKIhohKQgUAagdAWQgcAXgkAPQgMAFgLAAIgJgBg");
	this.shape_83.setTransform(377.4,158.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("ACvDwQgMgIAAgPIAAmwQAAgQAMgIQAMgJAVAAQAUAAAMAJQAMAIAAAQIAAGwQAAAPgMAIQgMAJgUAAQgVAAgMgJgAjbC/QgQAAgHgKQgJgKAAgQQAAgPAJgLQAHgLAQAAIDeAAQAaAAAbgDQAbgDATgFQAQgEALAHQALAHADAOQADAPgGALQgFAMgRAGQgZAIgfAFQgfADgjAAgAh7AvQgegLgVgTQgWgSgKgcQgMgbAAgiQAAghAMgbQAKgcAWgTQAVgTAegLQAegLAkAAQAlAAAdALQAeALAUATQAVATAMAcQALAbAAAhQAAAigLAbQgMAcgVASQgUATgeALQgdALglAAQgkAAgegLgAhtiRQgTAUAAAjQAAAkATAUQAUATAgAAQAhAAAUgTQARgUAAgkQAAgjgRgUQgUgUghAAQggAAgUAUg");
	this.shape_84.setTransform(298.9,154.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgTB0QgHgIAAgMQAAgKAHgJQAJgHAKgBQALABAIAHQAIAJAAAKQAAAMgIAIQgIAIgLgBQgKABgJgIgAgLAqQgFgDgBgIIgIiDQAAgKAGgGQAIgGALAAQAMAAAHAGQAHAGgBAKIgICEQgBAHgEAEQgFAEgHAAQgHAAgEgFg");
	this.shape_85.setTransform(290.1,67.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AAyB4QgGgFAAgHIAAjWQAAgJAGgEQAHgEAJgBQAJABAGAEQAIAEAAAJIAABFIAcAAQAIAAAFAFQADAGABAIQgBAHgDAFQgFAFgIAAIgcAAIAABtQAAAHgIAFQgGAEgJABQgJgBgHgEgAhUBNQgPgEgKgKQgKgKgGgQQgEgQAAgWQAAgTACgSQADgTAGgRQgHgBgEgFQgEgEAAgHQAAgIAFgGQAEgFAHAAIBuAAQAHAAAEAFQAEAGAAAIQAAAGgEAGQgEAFgHAAIhEAAQgEARgDATQgCASAAATQAAALACAJQACAJAEAFQAEAFAHACQAGADAKAAQAQABAOgEQAOgDAJgDQAIgEAHADQAHADACAHQADAIgCAGQgCAIgIACQgOAHgOAEQgRADgWAAQgVAAgPgEg");
	this.shape_86.setTransform(270.2,67.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AhVBuQgHgHgBgHQgBgJAEgGIA/hRIg/hRQgEgGABgIQABgIAIgGQAIgGAIAAQAJABAEAGIA3BJIA4hJQAEgGAJgBQAIAAAIAGQAHAGACAIQABAIgEAGIg/BRIA/BRQAEAGgBAIQgBAIgHAHQgJAGgIgBQgIAAgFgHIg4hIIg3BIQgFAHgIAAIgDABQgHAAgHgGg");
	this.shape_87.setTransform(243.5,67.1);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgnBtQgSgFgKgKQgLgKgFgOQgGgOAAgQIAAiKQAAgIAGgEQAHgEAKAAQAKAAAGAEQAGAEAAAIIAACJQAAAIADAIQACAHAFAFQAGAGAIADQAJADALAAQAMAAAJgDQAIgDAFgGQAGgFADgHQACgIAAgIIAAiJQABgIAFgEQAHgEAKAAQAKAAAGAEQAGAEAAAIIAACKQAAAQgFAOQgFAOgLAKQgMAKgQAFQgRAGgYAAQgXAAgQgGg");
	this.shape_88.setTransform(221.2,67.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AhLCGQgWgNgBgcIABgQIADgOQACgIAIgDQAGgDALACQAJABAFAGQAFAGgBAGQgCAHAAALQAAAFACAEQACAEAFADQAFADAKABQAJABAQAAIATgBIAWgCIAUgDIAPgFQAJgDAHACQAGADADAHQAEAHgBAHQgCAIgJADQgJAEgLACIgXAFIgaADIgYABQgzAAgWgNgAh3AlQgHAAgEgFQgFgFAAgIQAAgHAFgFQAEgGAHAAIDvAAQAHAAAFAGQADAFAAAHQAAAIgDAFQgFAFgHAAgAgkgTQgQgEgMgJQgMgIgGgNQgIgMAAgPQAAgPAIgNQAGgMAMgIQAMgJAQgEQARgFATAAQAUAAAQAFQARAEAMAJQAMAIAHAMQAGANAAAPQAAAPgGAMQgHANgMAIQgMAJgRAEQgQAFgUAAQgTAAgRgFgAgfhnQgMAJAAAOQAAAOAMAJQALAIAUAAQAUAAAMgIQALgJAAgOQAAgOgLgJQgMgIgUAAQgUAAgLAIg");
	this.shape_89.setTransform(185.7,69.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgsCOQgSgCgKgGQgKgGgDgJQgEgKAAgNQAAgSACgSQACgRADgOQACgJAHgDQAHgEAKACQALADAEAFQAEAHgBAIIgDAOIBWAAIAAgRQAAgIAGgFQAGgFALAAQAKAAAGAFQAGAFAAAIIAAA9QAAANgDAKQgEAJgKAGQgJAGgSACQgSADgcAAQgbAAgRgDgAgsBdQAAAEACAEQABADAFADQAFACAIABIAXAAIAYAAQAJgBAFgCQAEgDACgDQABgEAAgEIAAgJIhZAAgAAzABQgGgEAAgIIAAh0QAAgIAGgFQAGgEALAAQAKAAAGAEQAGAFAAAIIAAAnIAdAAQAIgBAEAGQAEAFAAAIQAAAGgEAFQgEAGgIAAIgdAAIAAAqQAAAIgGAEQgGAEgKAAQgLAAgGgEgAhygOQgQgOAAgeIABgVQADgKAEgKQgGgCgDgFQgDgFAAgGQAAgHAEgGQAEgFAIAAIByAAQAHAAAEAEQAEAFAAAJQAAAIgEAFQgEAFgHAAIhMAAIgDAVIgCAUQAAANAGAEQAFAFANAAQAUgBAPgDQAPgCAOgGQAHgBAGACQAHADACAIQACAIgDAFQgCAHgJADQgOAFgTAEQgTAEgWAAQglAAgQgOg");
	this.shape_90.setTransform(157.1,69.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgTATQgIgIABgLQAAgKAHgIQAIgIALAAQAMAAAIAIQAHAIABAKQgBALgHAIQgIAIgMAAQgMAAgHgIg");
	this.shape_91.setTransform(127.5,76.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("Ag5BxQgKAAgGgFQgGgGAAgJQAAgOAOgNIAsgoQAXgXAKgQQALgSAAgPQAAgOgIgIQgHgIgOAAQgLAAgJAFQgKAGgHAIQgFAHgIAAQgIAAgHgFQgHgFAAgIQgBgIAHgIQALgMARgIQAQgIAWAAQAlAAATARQATASAAAeQAAAWgOAXQgMAVgcAbIghAfIBRAAQAHAAAFAFQAFAFAAAIQAAAJgFAEQgFAFgHAAg");
	this.shape_92.setTransform(113.9,66.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27}]},55).to({state:[{t:this.instance},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67,p:{x:206.6}},{t:this.shape_66,p:{x:251}},{t:this.shape_65},{t:this.shape_64,p:{x:380.9}},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.text}]},92).to({state:[{t:this.instance},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_64,p:{x:468.6}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.text}]},2).to({state:[{t:this.instance},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_54},{t:this.shape_53},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_67,p:{x:205}},{t:this.shape_66,p:{x:249.4}},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.text}]},1).wait(25));

	// Chiwi
	this.chiwi = new lib.Chiwi00Walk();
	this.chiwi.name = "chiwi";
	this.chiwi.parent = this;
	this.chiwi.setTransform(2070.5,802.8,4.632,4.632,0,0,0,0,0.2);

	this.chiwi_1 = new lib.Chiwi00stay();
	this.chiwi_1.name = "chiwi_1";
	this.chiwi_1.parent = this;
	this.chiwi_1.setTransform(1417.3,801.8,4.633,4.632);
	this.chiwi_1._off = true;

	this.instance_1 = new lib.BankMovie();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1535.3,573.8,1,1,0,0,0,114.2,114.2);

	this.instance_2 = new lib.Bitmap9();
	this.instance_2.parent = this;
	this.instance_2.setTransform(47,830);

	this.instance_3 = new lib.막대();
	this.instance_3.parent = this;
	this.instance_3.setTransform(1075.5,925.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.chiwi}]}).to({state:[{t:this.chiwi}]},33).to({state:[{t:this.chiwi_1}]},6).to({state:[{t:this.chiwi}]},1).to({state:[{t:this.chiwi}]},14).to({state:[{t:this.chiwi_1}]},1).to({state:[{t:this.chiwi_1},{t:this.instance_1}]},14).to({state:[{t:this.chiwi_1}]},1).to({state:[{t:this.chiwi_1}]},49).to({state:[{t:this.chiwi_1}]},8).to({state:[]},18).to({state:[{t:this.chiwi_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[]},1).to({state:[{t:this.chiwi_1},{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},8).to({state:[{t:this.chiwi_1}]},1).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.chiwi).to({regY:0,scaleX:4.63,x:1432.8,y:801.8},33,cjs.Ease.get(0.96)).to({_off:true,x:1417.3},6).wait(1).to({_off:false},0).to({x:-115.5},14,cjs.Ease.quartIn).to({_off:true},1).wait(120));
	this.timeline.addTween(cjs.Tween.get(this.chiwi_1).wait(33).to({_off:false},6).to({_off:true},1).wait(15).to({_off:false,regX:0.1,regY:0.6,scaleX:9.43,scaleY:9.43,x:1424.4,y:938.1},0).wait(64).to({x:1421.3,y:939.8},0).to({rotation:60,x:1457.2,y:1355.5},8).to({_off:true},18).wait(1).to({_off:false,rotation:15,x:1674.4,y:916.2},0).to({_off:true},1).wait(3).to({_off:false,rotation:0,x:1424.4,y:938.1},0).to({_off:true},1).wait(9).to({_off:false,scaleX:4.54,scaleY:4.54,x:947,y:829.1},0).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(150).to({_off:false},0).wait(1).to({rotation:128.1,x:1581.1,alpha:0},8).to({_off:true},1).wait(15));

	// Main
	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("ABnCkIAAlHIAfAAIAAFHgAiFBHQAggQAYgUQAYgUARgXQARgXAKgaQAKgaADgbIgqABIgsABIgmAAIAAgbIA6AAIAyAAIAygBQgFBKgjA7QglA5hJAog");
	this.shape_93.setTransform(579,297.3);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("ABDCkIAAlHIAfAAIAABGIA1AAIAAAbIg1AAIAABHIA1AAIAAAbIg1AAIAACEgAhjBSQgQgIgLgOQgLgPgHgWQgGgWAAgcQAAgdAGgWQAHgWALgPQALgOAQgIQAPgHASAAQARAAAPAHQAQAIALAOQAKAPAHAWQAGAWAAAdQAAAcgGAWQgHAWgKAPQgLAOgQAIQgPAIgRAAQgSAAgPgIgAhZhvQgJAHgHAMQgHAMgDAQQgEARAAAUQAAAUAEAPQADARAHAMQAHAMAJAGQAKAHANAAQAMAAAKgHQAKgGAGgMQAHgMADgRQAEgPAAgUQAAgUgEgRQgDgQgHgMQgGgMgKgHQgKgGgMAAQgNAAgKAGg");
	this.shape_94.setTransform(548.7,297.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("ABkCkIAAlHIAfAAIAAFHgAhOBSQgPgIgMgOQgMgPgGgWQgHgWAAgcQAAgdAHgWQAGgWAMgPQAMgOAPgIQAPgHARAAQASAAAQAHQAOAIAMAOQALAPAHAWQAGAWAAAdQAAAcgGAWQgHAWgLAPQgMAOgOAIQgQAIgSAAQgRAAgPgIgAhEhvQgKAHgGAMQgHAMgDAQQgEARAAAUQAAAUAEAPQADARAHAMQAGAMAKAGQAKAHAMAAQANAAAKgHQAKgGAGgMQAHgMADgRQADgPABgUQgBgUgDgRQgDgQgHgMQgGgMgKgHQgKgGgNAAQgMAAgKAGg");
	this.shape_95.setTransform(515.1,297.3);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("ABtCkIAAlHIAeAAIAAFHgAiKBfIAAgbIBCAAIAogBIAqgBIArgDIAngEIAAAaIgmAEIgrADIgqACIgpABgAhDAPQgQgGgKgKQgLgLgGgQQgGgPAAgSQAAgRAGgQQAGgPALgLQAKgLAQgGQAQgHAUAAQATAAAPAHQAQAGALALQALALAGAPQAFAQAAARQAAASgFAPQgGAQgLALQgLAKgQAGQgPAHgTAAQgUAAgQgHgAhGhmQgOAQAAAZQAAAaAOAPQAOAPAZAAQAYAAANgPQAOgPAAgaQAAgZgOgQQgNgPgYAAQgZAAgOAPg");
	this.shape_96.setTransform(475,297.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("AhpCgIAAhQIC1AAIAAgdIi1AAIAAgaIDTAAIAABQIi0AAIAAAeIC9AAIAAAZgAibgDIAAgaIE4AAIAAAagAhpg5IAAhnIDQAAIAAAaIiwAAIAAA0ICzAAIAAAZg");
	this.shape_97.setTransform(443.9,297.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("Ag1BlIAAjEIAfAAIACAdQAHgQANgJQAPgJAPAAQAIAAAGACQAFAAAFADIAAAbQAAAFgEgDQgFgDgFgBQgGgCgHAAQgJAAgJAFQgJAEgHAJQgHAIgEALQgEAMAAAOIAABug");
	this.shape_98.setTransform(422.1,300.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgoBeQgRgIgLgOQgMgOgFgSQgFgTAAgVQAAgVAFgTQAGgSAMgOQALgOARgHQARgIAWAAQAXAAARAIQARAHALAOQAMAOAGASQAFATAAAVQAAAVgFATQgFASgMAOQgLAOgRAIQgRAIgYAAQgXAAgRgIgAgrg5QgPATAAAmQAAAnAPATQAPAUAcAAQAdAAAPgUQAPgTAAgnQAAgmgPgTQgPgUgdAAQgcAAgPAUg");
	this.shape_99.setTransform(403.6,300.3);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgPCNIAAjDIAfAAIAADDgAgPhlQgHgHABgJQgBgKAHgHQAGgGAJAAQAJAAAHAGQAHAHAAAKQAAAJgHAHQgHAFgJAAQgJAAgGgFg");
	this.shape_100.setTransform(388.9,296.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AAyBlIAAh0QAAgfgIgOQgJgPgXAAQgLAAgLAFQgLAFgIAKQgJAJgEAMQgGANAAAOIAABsIgeAAIAAjEIAfAAIABAdIAAAAQAFgIAGgGQAIgGAIgFQAIgEAJgCQAIgDAJAAQAmAAAPAWQAQAWAAApIAAB0g");
	this.shape_101.setTransform(374.1,300.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("AgrBfQgNgGgJgLQgIgLgEgQQgEgPAAgUIAAhzIAfAAIAAB0QAAAeAKAOQAKAPAXAAQALAAAKgFQALgFAIgIQAIgJAFgMQAFgMAAgPIAAhtIAfAAIAADDIgfAAIgCgcIAAAAQgKAQgQAIQgQAIgSAAQgSAAgOgFg");
	this.shape_102.setTransform(352.5,300.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AglCKIgSgDIAAgcIAPADIAPACQAKAAALgDQAKgCAHgJQAHgIACgMQACgMAAgQIAAi9IAgAAIAAC8QAAAQgCAOQgCANgFALQgRAlgygBIgRgBg");
	this.shape_103.setTransform(333.3,297);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AhSChIAAhkIAfAAIAABJIC0AAIAAAbgABbBMIAAhvIhcAAIAAgaIBcAAIAAgiIhcAAIAAgZIBcAAIAAgoIAfAAIAADsgAiAAcIAAiwIAgAAIAACUIApAAQAlAAAdgEIAxgJIAAAaIgYAGIgeAEIggADIghACg");
	this.shape_104.setTransform(303,297);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AhlChIAAhlIAfAAIAABKICtAAIAAAbgABBBMIAAjsIAfAAIAABbIA0AAIAAAcIg0AAIAAB1gAiTAOIAAidICUAAIAACdgAh0gMIBYAAIAAhpIhYAAg");
	this.shape_105.setTransform(271.9,297);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AhSCNIAAgWQAAgBAAAAQAAgBABAAQAAAAABgBQABAAABAAIAHACIAIAAQALAAALgGQALgHAGgRIAOgiIAAgBIhRjDIAjAAIA4CVIAEAQIAEgQIA0iVIAgAAIhTDbQgGAPgFAMQgGALgJAJQgIAKgLAEQgLAFgPAAQgNAAgHgCg");
	this.shape_106.setTransform(237.2,304.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AgPCSIAAkjIAfAAIAAEjg");
	this.shape_107.setTransform(224.4,295.6);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AgPCNIAAjDIAeAAIAADDgAgPhlQgGgHgBgJQABgKAGgHQAHgGAIAAQAKAAAGAGQAGAHAAAKQAAAJgGAHQgGAFgKAAQgIAAgHgFg");
	this.shape_108.setTransform(215.8,296.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("AgpBlQgLgDgJgIQgIgHgFgLQgFgKAAgOQAAgcARgSQARgRAigFIA8gJIAAgDQAAgNgCgJQgDgJgFgEQgFgFgIgCQgIgCgKAAQgQAAgQAGQgOAFgRAMQAAAAgBABQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQgBgBAAAAIAAgbQAQgKASgGQATgFATAAQAjAAAQAQQARAQAAAlIAACGIgeAAIgCgcIAAAAQgEAIgIAGQgGAGgJAEQgJAEgJACQgIACgJAAIgDAAQgNAAgLgDgAgBABQgUADgNAKQgNALABAUQgBAQALAJQALAJASAAQALAAAKgFQALgFAIgJQAIgIAEgKQAFgLABgLIAAgZg");
	this.shape_109.setTransform(200.8,300.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("AhqCIIAAkPIBDAAQCSAAAACHQAAAigLAaQgMAagVARQgUARgcAIQgaAIgfAAgAhLBtIAhAAQA2AAAegbQAfgcAAg2QAAhthxAAIgjAAg");
	this.shape_110.setTransform(179.5,296.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AjXHAIAAkcIBXAAIAADQIH2AAIAABMgAEMDVIAAqUIBVAAIAAKUgAjmAkQgqgRghgdQgfgfgTgrQgSgqAAgxQAAgxASgsQATgqAfggQAhgfAqgRQArgRAzgBQAzABAsARQArARAgAfQAfAgATAqQASAsAAAxQAAAxgSAqQgTArgfAfQggAdgrARQgsASgzAAQgzAAgrgSgAjClBQgbALgTAWQgUAUgKAdQgLAeAAAiQAAAiALAcQAKAcAUAVQATATAbAMQAbALAhAAQAhAAAbgLQAbgMAUgTQATgVAKgcQALgcAAgiQAAgigLgeQgKgdgTgUQgUgWgbgLQgbgLghAAQghAAgbALg");
	this.shape_111.setTransform(518.2,582.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("ADJHJIAAuRIBWAAIAAFgICdAAIAABNIidAAIAAHkgAm7DSQBQgqBBhAQBBhAAvhHQAwhGAchJQAdhIAGg7IhvACIhvAAIheAAIAAhJICXAAICCAAQBCAABGgBQgDBQgXBQQgYBQgqBLQArBAA4A/QA5BABDAvIhAA+Qg8gtgxg6Qgzg7gshCQg3BRhFBCQhFBChOAug");
	this.shape_112.setTransform(430.9,583.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AEHHJIAAuRIBVAAIAAORgAlbDZIAApSIGgAAIAABJIlIAAIAAG+ICIAAQBkAABTgOQBUgMA2gMIAABKQgeAIgmAGQgoAIgrAFQgsAGgvADQguADguAAg");
	this.shape_113.setTransform(340.3,583.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AC7F7Ii7k9IgBAAIjCE9IhdAAIDwl6IAAgBIjql5IBkAAIC5E3IACAAIC9k3IBeAAIjuF1IAAACIDvF9g");
	this.shape_114.setTransform(266.2,581.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AAAGAQhNgBg5gcQg5gcgggxQgbgngKg0QgKgyAAhIIAAm/IBYAAIAAG4QAAA+AHAuQAIAtAXAfQAWAdAkARQAlATAygBQAyABAlgTQAkgRAVgdQAYgfAIgtQAHguAAg+IAAm4IBXAAIAAG/QAABIgJAyQgKA0gbAnQghAxg4AcQg5AchNABg");
	this.shape_115.setTransform(200.5,581.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AgZAhQAJgEAIgIQAHgHACgJIABgFQgBgCgEAAQgHAAgHgGQgHgHAAgIQAAgKAHgGQAHgHAKABQAMgBAHAJQAIAJAAANQgBALgEAJQgDAJgHAJQgFAIgIAHQgJAFgJAEg");
	this.shape_116.setTransform(636.1,431.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("AhDCiIAAh0IDMAAIAAB0gAgkCHICOAAIAAg9IiOAAgABqAcIAAi9IAfAAIAAC9gAiIgDQAXgNASgPQASgPAMgSQALgTAFgWQAGgWgCgaIAhAAQAAAPgBAOQgCAPgEANQAPAaAUAUQAWAVAfAPIgTAVQgbgMgUgTQgUgSgOgXQgNAbgWAUQgVATgbAPg");
	this.shape_117.setTransform(613.6,418.1);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AhEChIAAhgIAfAAIAABFICwAAIAAAbgABlBUIAAiFIg5AAIAAgbIA5AAIAAhUIAfAAIAAD0gAiLAQQAegMAXgOQAXgQARgRQARgRAKgSQALgSAEgSIgoABIgnAAIghAAIAAgbIA4AAIAuAAIAwAAQgDAagKAXQgJAWgNATQAGAKAJAIIATAQQAKAIALAGIAUAKIgTAXQgUgLgUgPQgSgPgQgSQgUAWgaAQQgaARgcAMg");
	this.shape_118.setTransform(582,418);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AhDCiIAAh0IDMAAIAAB0gAgkCHICOAAIAAg9IiOAAgABqAcIAAi9IAfAAIAAC9gAiIgDQAXgNASgPQASgPAMgSQALgTAFgWQAGgWgCgaIAhAAQAAAPgBAOQgCAPgEANQAPAaAUAUQAWAVAfAPIgTAVQgbgMgUgTQgUgSgOgXQgNAbgWAUQgVATgbAPg");
	this.shape_119.setTransform(549.4,418.1);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("ABkCkIAAlHIAfAAIAAFHgAhOBSQgPgIgMgOQgLgPgHgWQgHgWAAgcQAAgdAHgWQAHgWALgPQAMgOAPgIQAPgHARAAQATAAAPAHQAOAIAMAOQALAPAHAWQAGAWAAAdQAAAcgGAWQgHAWgLAPQgMAOgOAIQgPAIgTAAQgRAAgPgIgAhEhvQgJAHgHAMQgHAMgDAQQgEARAAAUQAAAUAEAPQADARAHAMQAHAMAJAGQAKAHAMAAQANAAAKgHQAKgGAHgMQAGgMADgRQADgPAAgUQAAgUgDgRQgDgQgGgMQgHgMgKgHQgKgGgNAAQgMAAgKAGg");
	this.shape_120.setTransform(517.9,418.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("ABtCkIAAlHIAeAAIAAFHgAiKBfIAAgbIBCAAIAogBIAqgBIArgDIAngEIAAAaIgmAEIgrADIgqACIgpABgAhDAPQgQgGgKgKQgLgLgGgQQgGgPAAgSQAAgRAGgQQAGgPALgLQAKgLAQgGQAQgHAUAAQATAAAPAHQAQAGALALQALALAGAPQAFAQAAARQAAASgFAPQgGAQgLALQgLAKgQAGQgPAHgTAAQgUAAgQgHgAhGhmQgOAQAAAZQAAAaAOAPQAOAPAZAAQAYAAANgPQAOgPAAgaQAAgZgOgQQgNgPgYAAQgZAAgOAPg");
	this.shape_121.setTransform(477.8,418.3);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("ABICkIAAlHIAgAAIAAB+IA4AAIAAAcIg4AAIAACtgAifBMQAdgQAXgXQAYgXARgZQARgZALgaQAKgaABgWIgnABIgoABIgiAAIAAgbIA3AAIAuAAIAwgBQAAAegJAcQgIAdgPAbQAQAXATAWQAVAXAYARIgXAXQgWgRgRgVQgSgVgQgXQgUAdgZAXQgYAYgdAQg");
	this.shape_122.setTransform(446.7,418.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AguCiQgUgEgOgJQgPgHgHgMQgHgLAAgNQAAgNAHgKQAHgMAPgHQAOgIAUgEQAVgFAbAAQAcAAAUAFQAVAEAOAIQAOAHAHAMQAHAKAAANQAAANgHALQgHAMgOAHQgOAJgVAEQgUAFgcAAQgbAAgVgFgAgiBLQgQADgJAFQgJAFgEAGQgDAGgBAHQABAGADAFQAEAGAJAFQAJAGAQACQAOADAWAAQAVAAAQgDQAOgCAKgGQAIgFAFgGQADgFAAgGQAAgHgDgGQgFgGgIgFQgKgFgOgDQgQgDgVAAQgWAAgOADgAicAbIAAgbIBVAAIAAg0QgTgJgJgMQgJgNABgQQgBgNAHgMQAHgLAOgJQAOgJATgEQAVgGAaAAQAbAAAVAGQAUAEAOAJQANAJAHALQAHAMAAANQAAAQgJANQgJAMgSAJIAAA0IBTAAIAAAbgAgpABIBSAAIAAgsQgSAEgXgBQgXABgSgEgAghiKQgOAEgKAGQgIAFgFAIQgEAGgBAJQABAHAEAGQAFAHAIAFQAKAFAOADQAPADASAAQAUAAAOgDQAOgDAJgFQAKgFAFgHQAEgGAAgHQAAgJgEgGQgFgIgKgFQgJgGgOgEQgOgDgUAAQgSAAgPADg");
	this.shape_123.setTransform(414.6,418.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("ABLClIAAlIIAfAAIAACBIA4AAIAAAbIg4AAIAACsgAiiBIQAWgQAUgUQASgUANgaQANgaAGgiQAHgggDgpIAgAAQABAYgCAVQgCAVgEAUQANAkAYAeQAWAfAhAWIgUAXQgbgTgVgaQgVgagPggQgNAigXAcQgVAcgdAVg");
	this.shape_124.setTransform(382.2,418.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("ABMCkIAAlHIAeAAIAACBIA0AAIAAAbIg0AAIAACrgAidBhIAAgbIA2AAIASAAIAUAAIAAg3QgQgCgNgHQgNgGgKgKQgJgLgGgNQgFgOAAgQQAAgRAGgPQAHgPALgLQAMgLAPgGQAQgHASAAQASAAAQAHQAPAGALALQALALAGAPQAHAOAAASQAAAPgFANQgFAOgJAKQgJAKgLAGQgMAHgPADIAAA3IAygDIAtgFIAAAaIgmAEIgqADIgrACIgpABgAhJhzQgKAEgHAHQgHAIgEAKQgEAKAAAMQAAAMAEAKQAEAKAHAHQAHAHAKAEQAKAEAMAAQALAAAKgEQAKgEAHgHQAHgHADgKQAEgKAAgMQAAgMgEgKQgDgKgHgIQgHgHgKgEQgKgEgLAAQgMAAgKAEg");
	this.shape_125.setTransform(342.5,418.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("ABgCkIAAi5IhOAAIAABfIiQAAIAAjRICQAAIAABXIBOAAIAAhzIAfAAIAAFHgAheAwIBSAAIAAieIhSAAg");
	this.shape_126.setTransform(309.6,418.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("ABlCkIAAi5IgrAAIAACxIgeAAIAAk8IAeAAIAABwIArAAIAAhzIAfAAIAAFHgAiCBWIAAiBIBWAAIAAhDIhXAAIAAgbIB2AAIAAB4IhWAAIAABMIAKAAQAgAAAbgEQAbgEARgEIAAAaIgVAFIgcAEIgdADIgeABg");
	this.shape_127.setTransform(277.5,418.3);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AiYB8IAAgaIDLAAQAJgsAGgzQAGgxABgyIiyAAIAAgbIDSAAIgDA3IgEA6IgHA4IgIA0IBGAAIAAAag");
	this.shape_128.setTransform(246,417.3);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AiYCCIAAgbICJAAIAAg7IhWAAIAAhiICtAAIAAgwIiuAAIAAgbIDNAAIAABkIiuAAIAAAvIC5AAIAAAaIhiAAIAAA7ICJAAIAAAbg");
	this.shape_129.setTransform(213.9,417.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AiYB/IAAgbIExAAIAAAbgAh1AjIAAgbIAsAAIgChfIAfAAIACBgIBVAAIAEhgIAeAAIgDBfIAtAAIAAAbgAhvhjIAAgaIDgAAIAAAag");
	this.shape_130.setTransform(181.8,417.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("Ak1E/IAwkAIhbAYIgVhLIB4ggIghh4IBQgVIAhB4IB3ggIAUBLIhcAZICpDGIg4BBIiwjkIgoEegABjBYIhzAfIgThKIBzggIhHkGIBMgUICNIOIhLAVgACTlIIBLgUICYI2IhMAUg");
	this.shape_131.setTransform(1275.8,503.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AiUEzQgTgDgRgGQgSgHgPgKQgRgKgOgNQgNgMgMgRQgMgPgIgSQgJgTgFgVQgGgUgBgTQgCgUACgUQACgUAGgSQAFgSAKgRQAIgPAMgOQALgPAPgMQAOgMARgIQAQgIATgFQATgFATgCQATgBASADQASAEASAHQARAGARAJQAPAKAOAOQANAMAMAQQAMAQAJARQAIASAGAUQAFAVACAUQABAUgCAUQgCAUgGASQgGASgIAQQgKARgLAOQgMAPgNALQgPAMgRAJQgRAJgTAFQgSAFgSABIgFAAQgRAAgPgDgAidgDQgLACgKAEQgJAFgIAHIgRAQQgHAHgFAKQgFAKgDAKQgEALAAALQgCALAAAMQABAMAEAMQADALAFALQAFAKAHAKQAHAJAIAIQAIAHAJAFQAKAGAKAEQAKAEALABIAWACQALgBAKgCQALgDAKgFQAKgGAIgHIAQgPIANgSQAKgSADgYQACgMgBgLQgBgMgDgMQgDgMgFgKQgFgLgHgJIgQgQQgIgIgJgGQgLgFgJgCIgVgGQgLgBgMAAQgKABgLADgABUkfIBRgWICXI2IhRAVg");
	this.shape_132.setTransform(1208.4,519);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("Aj7EXICZgqIghh7IBOgWIAhB8ICZgoIASBDImABogABBlEIBPgVIA/DtIBwgdIAVBOIhwAeIBDD5IhOAVgAknCAIBljoIh+AiIgThHIFYhcIATBHIiAAiIDMCXIgsBEIi9iQIhaDZg");
	this.shape_133.setTransform(1140.6,541.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AiRgPIjEA0IgVhLIEShKIAUBKIBugeIgriiIBKgUICOIPIhLAUIghh5IhuAeIAbBnIhMAUgAgxAfIAbBoIBugeIgbhogACIk0IBLgUICYI1IhLAUg");
	this.shape_134.setTransform(1071.2,556.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("AC8FtIAAi0IkSAAIAAhGIFmAAIAAD6gADRA5IAAhbIinAAQgLATgRAPQgPAPgUALQgUALgVAGQgXAFgXAAQgVAAgRgDQgRgEgRgIQgRgHgOgKQgOgKgNgMQgMgMgKgPQgJgPgHgRQgIgRgDgSQgEgRAAgUQAAgnAPgiQAHgRAJgPQAKgPAMgMQANgNAOgJQAOgKARgIQAQgHASgEQARgDAVgBQAUAAATAEQATAFASAJQAiAQAaAeIC1AAIAAhnIBTAAIAAGkgAiCj0QgKACgJADIgSALIgPANQgHAHgGAKQgFAIgDAKQgFAKgCALQgCALAAALQAAALACAKQACALAFAKQADAKAFAKQAGAIAHAHQAHAIAIAHQAJAFAJAEQAJAFAKACQALACALAAQAKAAAKgCQAKgCAKgFQAJgEAIgFQAIgHAHgIQAIgHAFgIQAGgKADgKQAEgKADgLQACgKAAgLQAAgLgCgLQgDgLgEgKQgDgKgGgIQgFgKgIgHQgHgHgIgGIgRgLQgKgDgKgCQgKgCgKAAQgLAAgLACgABHiiQACAMAAANIAAAOIgBAHIgBAHICKAAIAAhNIiOAAIAEAYg");
	this.shape_135.setTransform(1526.6,338.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("ADiEmIAAkGIhaAAIAAEGIhPAAIAAojIBPAAIAADVIBaAAIAAj8IBOAAIAAJKgAkvEWIAAm7IBUAAIAAFrIDYAAIAABQg");
	this.shape_136.setTransform(1458.9,331.8);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("ADqEmIAAkGIhcAAIAAEGIhOAAIAAojIBOAAIAADVIBcAAIAAj8IBOAAIAAJKgAk3EWIAAkPIDLAAIAAhwIi0AAIAAhOIEFAAIAAEMIjLAAIAABzIDzAAIAABOg");
	this.shape_137.setTransform(1387.2,331.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("ADJEmIAAjqIipAAIAADXIhSAAIAAlkIjqAAIAAhPIE8AAIAACMICpAAIAAkQIBUAAIAAJKg");
	this.shape_138.setTransform(1317.4,331.8);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("AhFGFQgQgCgRgEQgRgFgPgHQgPgHgNgJQgNgKgLgLQgLgLgIgMQgKgNgFgOQgGgNgCgPQgDgOABgPQAAgPAEgOQAEgPAHgNQAHgNAJgMQATgVAdgOQAMgGAQgEQAPgEAQgCQAPgBASABQAPACARAEQARAFAPAHQAOAHAOAJIAYAVIAVAXQAHAMAFAOQAGAOAFAOQABAOAAAPQgBAPgDAPQgFAOgGANQgHANgKAMQgKALgMAJQgLAIgNAIQgPAGgNADQgQAFgQACIgQAAIgRAAgAhQCnQgPABgPAHQgPAHgJALQgJALgEAPQgDAOACAOQADAOAIAOQAKANAMAJQAOAKASAFQASAEAQgBQAQgBAPgHQAPgHAIgLQAKgLAEgOQAEgPgEgPQgCgNgJgOQgJgNgNgJQgNgKgSgEQgOgEgNAAIgIAAgAkfgaIAVhKIIlCSIgUBKgAA7jeIjXBrIguhGIDThjIiGgkIAShEIGKBqIgSBEIiIglICIDAIhMAmg");
	this.shape_139.setTransform(1738.3,492.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AkKEbIA8jhIBSAXIgqCYIEdBMIgSBIgABoCBIB8nOIBPAVIh8HNgAiHgBQgSgBgTgFQgTgFgQgIQgRgJgOgLQgOgLgMgNQgLgOgIgQQgJgPgEgRQgHgRgBgTQgDgTACgTQABgSAFgUQAFgSAJgSQAHgRAMgOQALgPAOgMQANgNAPgJQAOgJARgGQARgGASgDQASgEASACQASABATAFQAUAEAPAJQAQAIAPAMQANAMALANQALAOAJAPQAQAgAGAkQACAUgCARQgBATgFAUQgFATgJARQgIARgKAOQgXAfgeATQgPAJgRAGQgQAGgSACQgNACgNAAIgKAAgAiHksQgKACgKAEIgSAJQgJAGgGAHQgIAIgGAIQgHAJgEAKIgIAWQgMAtAUAlQAKAUAOAMQAQAMAVAGQAVAFATgCQAVgDASgMQARgMAMgRQAMgRAHgWQAFgXgCgVIgDgVIgIgTQgEgJgHgIIgOgOQgIgIgJgEQgJgGgKgCQgLgDgKAAIgEAAQgIAAgIABg");
	this.shape_140.setTransform(1681.4,479.9);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AklEbIA8jgIBRAVIgqCZIEeBNIgTBIgABAB9IB9nNIBQAVIguCtIBxAfIgVBOIhxgeIg5DSgAilgBQgRgBgTgFQgTgFgRgIQgQgJgOgLQgOgLgMgNQgLgOgIgQQgIgPgGgRQgGgRgBgUQgDgSABgTQACgSAFgUQAFgTAJgRQAIgRALgPQALgOAOgMQANgNAPgJQAOgJARgGQARgHASgDQASgDASACQATAAASAFQATAFAQAJQAQAIAPALQAOAMALAOQALAOAIAPQAQAgAGAkQACATgCASQgBATgFATQgFAUgIARQgJARgJAOQgYAfgeASQgPAKgRAGQgQAGgSACQgNACgNAAIgLAAgAikksQgLACgJAEIgSAJQgJAGgGAHQgIAIgGAIQgHAJgEAKIgIAWQgMAsAUAmQAJAUAPAMQAQAMAVAGQAVAFATgCQAVgDASgMQARgMAMgSQAMgQAHgWQAFgXgCgWIgDgUIgHgTQgGgJgGgIIgOgPQgIgHgJgEQgJgGgKgCQgKgDgLAAIgEAAQgIAAgIABg");
	this.shape_141.setTransform(1616.3,461.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AkxCsIAThGIDqA/IAfhwIimgtIBYlGIBPAVIgcBoID9BEIAWhPIBOAVIhREuIimgtIgeBxIDrA/IgSBGgAhZgmID9BCIAWhSIj9hEg");
	this.shape_142.setTransform(1543.9,438.8);

	this.instance_4 = new lib.Bitmap5();
	this.instance_4.parent = this;
	this.instance_4.setTransform(155,257,1.945,1.945);

	this.instance_5 = new lib.Bitmap4();
	this.instance_5.parent = this;
	this.instance_5.setTransform(747,257,1.583,1.583);

	this.instance_6 = new lib.Bitmap3();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1294,257,1.188,1.188);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FF0000").s().p("AChZxQiHhQgoiZQgqicBMiHQBNiHCcgpQCbgqCGBOQCHBPAqCbQApCahNCIQhOCGibAqQg3AOgzAAQhhAAhWgygAgMJzQhNgnghhcIpP7mQgviOBFhuQBFhuCsguQCrguByA9QBzA9AfCSIF1cpQAQBcgwBGQgvBIhpAdQgrALgmAAQg4AAgtgYg");
	this.shape_143.setTransform(453.5,575.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#CCCCCC").s().p("AgMCDQgQgEgLgGQgLgIgGgJQgGgKAAgNQAAgMAGgJQAGgLALgGQALgHAQgDQAOgEASgBQASABAPAEQAQADALAGQAMAIAGAJQAHAKAAAMQAAANgHAKQgGAJgMAIQgLAGgQAEQgPADgSAAQgSAAgOgDgAgEAxQgMACgIAEQgIAFgFAHQgFAGAAAJQAAAIAFAHQAFAGAIAFQAIAEAMADQAKACAOAAQANAAAMgCQALgDAJgEQAJgFAFgGQAFgHAAgIQAAgJgFgGQgFgHgJgFQgJgEgLgCQgMgDgNAAQgOAAgKADgABXAcQgFAAAAgDIAAgqIhAAAQgJALgNAGQgPAGgRAAQgOAAgMgFQgMgDgKgIQgJgKgGgLQgFgMAAgOQAAgPAFgMQAGgNAJgHQAKgJAMgFQAMgEAOAAQASAAAQAHQAPAIAKAOIA7AAIAAgkQAAgFAFAAIALAAQAEAAAAAFIAACaQAAADgEAAgAg2hlQgJADgHAGQgGAGgEAJQgEAIABAMQgBAKAEAJQADAJAHAGQAGAFAKAEQAIADAKAAQAKAAAJgDQAJgEAHgFQAFgGAFgJQAEgJAAgKQAAgMgEgIQgFgJgFgGQgHgGgJgDQgJgDgKAAQgKAAgIADgAAhg5QAAANgFAKIA2AAIAAgqIg0AAQADAJAAAKg");
	this.shape_144.setTransform(943.3,345.4);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#CCCCCC").s().p("AgSCFIgUgDQgKgCgJgEQgKgEgHgFQgHgGgEgHQgFgIAAgJQAAgKAFgHQAEgIAHgFQAHgGAKgEIATgGIAUgDIASgBIASABIAUADQAKACAJAEQAKAEAHAFQAHAGAFAHQAEAIAAAKQAAAJgEAIQgFAHgHAGQgHAFgKAEQgJAEgKACIgUADIgSABIgSgBgAgTA2QgMABgLAEQgLADgIAHQgIAGAAAKQAAAKAIAGQAIAGALAEQALADAMABIATACIATgCQAMgBALgDQALgEAIgGQAIgGAAgKQAAgKgIgGQgIgHgLgDQgLgEgMgBIgTgCIgTACgAh6AIIgDgBIgCgCIAAgJQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIADgBID1AAIADABQABAAAAAAQAAABAAAAQABAAAAABQAAAAAAABIAAAJIgCACIgDABgAhjgjIgEgKIAAgDQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAUgFAQgJQAQgIAMgLQAMgKAHgMQAIgMABgMQABgEADABIAMABQABAAABABQAAAAABAAQAAABAAAAQAAABAAABIgBAFIgBAFIAEAHQAFAJAJAJQAJAJAMAIQALAIAOAGQAOAGAQADQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIAAADIgFAKIgCACIgEAAQgPgEgOgGQgPgGgMgIQgMgJgKgJQgKgKgFgKQgNAVgYARQgYARggAKIgCAAQgBAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBg");
	this.shape_145.setTransform(916.5,345.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#CCCCCC").s().p("AgKCDQgPgEgLgGQgLgIgGgJQgHgKAAgNQAAgMAHgJQAGgLALgGQALgHAPgDQAOgEATgBQASABAPAEQAPADAMAGQALAIAHAJQAGAKAAAMQAAANgGAKQgHAJgLAIQgMAGgPAEQgPADgSAAQgTAAgOgDgAgBAxQgMACgIAEQgJAFgEAHQgFAGAAAJQAAAIAFAHQAEAGAJAFQAIAEAMADQAKACAOAAQAMAAAMgCQAMgDAIgEQAJgFAGgGQAFgHAAgIQAAgJgFgGQgGgHgJgFQgIgEgMgCQgMgDgMAAQgOAAgKADgABaAaQgEAAAAgDIAAhHIg2AAQgBAAAAgBQgBAAgBAAQAAgBAAAAQAAgBAAgBIAAgLQAAAAAAgBQAAgBAAAAQABgBABAAQAAAAABAAIA2AAIAAg/QAAgFAEAAIAMAAQAEAAAAAFIAACYQAAADgEAAgAhkAPIgFgKIgBgDIADgCQAlgRAagXQAbgYAOgeQACgEgCgCQgBgCgDABIhVAAQgEAAAAgFIAAgKQAAAAAAgBQABgBAAAAQAAgBABAAQABAAABAAIBcAAQAPAAAEAGQAEAFgEANQgEALgIAMQgHAMgJALQAJALAOAJQAOAJASAIQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIAAADIgGAKQgBAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgDAAIgOgGIgPgJQgIgGgGgGIgPgNQgQAQgUAOQgUAMgUAJIgDABIgBAAIgCgBg");
	this.shape_146.setTransform(888.4,345.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgJBfQgLgDgIgFQgIgFgEgHQgFgHAAgJQAAgJAFgHQAEgHAIgFQAIgFALgCQAKgDAOAAQANAAALADQALACAIAFQAIAFAFAHQAFAHAAAJQAAAJgFAHQgFAHgIAFQgIAFgLADQgLACgNAAQgOAAgKgCgAgDAjQgIACgGADQgGAEgDAFQgEAEAAAHQAAAGAEAFQADAEAGADQAGAEAIABQAIACAKAAQAJAAAIgCQAJgBAGgEQAHgDADgEQAEgFAAgGQAAgHgEgEQgDgFgHgEQgGgDgJgCQgIgBgJAAQgKAAgIABgAA/AVQgBAAgBAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAgeIguAAQgHAIgJAEQgLAFgMAAQgLAAgJgEQgJgCgGgGQgHgGgEgJQgEgIAAgLQAAgLAEgJQAEgIAHgGQAGgGAJgEQAJgDALAAQAMAAAMAGQAKAFAHAKIAsAAIAAgaQAAgBAAgBQAAAAAAAAQABgBAAAAQABAAABAAIAIAAQABAAABAAQAAAAAAABQABAAAAAAQAAABAAABIAABvQAAABAAAAQAAABgBAAQAAAAAAABQgBAAgBAAgAgnhIQgGACgFAEQgFAEgCAGQgDAHAAAIQAAAIACAGQADAGAFAEQAFAFAGACQAGACAIAAQAHAAAGgCQAHgCAFgFQADgEADgGQADgGAAgIQAAgIgDgHQgDgGgDgEQgFgEgHgCQgGgDgHAAQgIAAgGADgAAYgpQAAAJgDAIIAnAAIAAgfIgmAAQACAHAAAHg");
	this.shape_147.setTransform(919.4,506.3);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AgNBhIgOgCIgOgFQgHgCgFgFQgFgEgEgFQgDgFAAgHQAAgHADgGQAEgFAFgEQAFgEAHgDIAOgEIAOgDIANAAIANAAIAOADIAPAEIAMAHQAFAEADAFQADAGAAAHQAAAHgDAFQgDAFgFAEQgGAFgHACQgGADgIACIgOACIgNABIgNgBgAgOAnQgIABgIADQgIACgGAFQgFAFAAAHQAAAHAFAEQAGAFAIACQAIADAIABIAOABIAOgBQAIgBAIgDQAIgCAGgFQAGgEAAgHQAAgHgGgFQgGgFgIgCQgIgDgIgBIgOgBIgOABgAhYAGIgCgBIgBgBIAAgHIABgCIACAAICxAAIACAAIABACIAAAHIgBABIgCABgAhHgZIgDgHIgBgCIACgCQAOgEAMgGQAMgGAJgIQAIgIAFgIQAGgJABgJQAAgBAAAAQAAgBABAAQAAAAABAAQAAgBABABIAIABQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAABIAAADIgBAEIACAFQAEAHAHAHQAGAGAJAGQAIAFAKAEQALAFALACIABACIAAACIgEAHIgBACIgDAAQgLgDgKgFQgKgEgJgGIgQgNQgIgHgDgHQgJAPgSAMQgRANgXAGIgCAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_148.setTransform(900.1,506.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AgHBfQgLgDgIgFQgIgFgFgHQgEgHAAgJQAAgJAEgHQAFgHAIgFQAIgFALgCQAKgDAOAAQAMAAALADQALACAJAFQAIAFAFAHQAFAHAAAJQAAAJgFAHQgFAHgIAFQgJAFgLADQgLACgMAAQgOAAgKgCgAgBAjQgIACgGADQgGAEgEAFQgDAEAAAHQAAAGADAFQAEAEAGADQAGAEAIABQAHACALAAQAJAAAIgCQAIgBAHgEQAGgDAEgEQAEgFAAgGQAAgHgEgEQgEgFgGgEQgHgDgIgCQgIgBgJAAQgLAAgHABgABBATQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAgBIAAgzIgnAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQAAgBAAAAIAAgIQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIAnAAIAAguQAAgBAAgBQAAAAABAAQAAgBABAAQAAAAABAAIAJAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAABIAABtQAAABgBABQAAAAAAAAQgBABAAAAQgBAAAAAAgAhIALIgEgHIAAgCIABgCQAbgMAUgRQATgRAJgWQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAAAgBAAQgBAAAAAAIg+AAQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAAAAAgBIAAgHQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIBCAAQALAAAEAEQADAEgEAKQgDAIgFAJIgMAQQAGAIALAHQAKAGANAGQAAAAAAAAQABAAAAAAQAAABAAAAQABAAAAAAIgBADIgEAGIgCABIgCAAIgKgEIgLgHIgKgIIgLgJQgMAMgOAJQgOAJgPAGIgCABIgBAAIgBgBg");
	this.shape_149.setTransform(879.7,506.3);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(10,1,1).p("EgSkgnvI/nISMAdeAirIsmcjMAmrgDYIKIXVMAP+giYISu1eIt0r+IHEt0I5ykTIhPxgI3oLDIt0nXg");
	this.shape_150.setTransform(423.4,629.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFDF00").s().p("ABFGVIAAjaIVTAAIAADagA2Xi6IAAjaIJDAAIAADag");
	this.shape_151.setTransform(1017.1,535.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#343B58").s().p("AmWDJIAAmRIMtAAIAAGRg");
	this.shape_152.setTransform(917,344.1);

	this.instance_7 = new lib.Bitmap7();
	this.instance_7.parent = this;
	this.instance_7.setTransform(379,222,1.561,1.561);

	this.instance_8 = new lib.Bitmap8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(378,242,2.754,2.754);

	this.instance_9 = new lib.Bitmap12();
	this.instance_9.parent = this;
	this.instance_9.setTransform(434,271,1.294,1.294);

	this.text_1 = new cjs.Text("https://www.youtube.com/watch?v=DdUkiQ0rxb0", "bold 15px 'Binggrae'");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 144;
	this.text_1.parent = this;
	this.text_1.setTransform(1592.8,938.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("Ag1DEQgWgDgNgGQgNgGgGgKQgFgKAAgNQAAgPAFgMQgJgBgFgGQgEgFgBgKQAAgJAGgGQAEgHAKAAICfAAQAGAAADgBQACgCAAgFIAAgLQAAgIgLAAIiZAAQgJAAgGgHQgEgGAAgKQAAgJAEgHQAGgGAJAAICyAAQAxAAAAApIAAAiQAAApgxAAIh9AAQgCAHAAAIQAAAFACADQADADAFACQAGACAJABIAaABIAcgBIAdgCIAYgDIAVgFQALgDAIAEQAIAEADAJQADAKgDAIQgDAIgMAEQgTAFgdAEQgdAEgoAAQghAAgWgDgABJgPQgHgGgBgLIAAiPQABgLAHgGQAJgGAOAAQAPAAAHAGQAJAGAAALIAAArIAnAAQALAAAFAHQAHAGgBAMQABALgHAGQgFAHgLAAIgnAAIAAAzQAAALgJAGQgHAGgPAAQgOAAgJgGgAiGgUQgUgEgNgHQgLgHgFgMQgEgMgBgRIABgSIACgUIAEgTIADgSQAGgTAKgIQAKgHAVAAIBoAAQAZAAAKALQAMALgBAZIAAA+QABARgFAMQgEAMgLAHQgMAHgVAEQgTADgfAAQgfAAgUgDgAh2iJQgDADgCAJIgDATIgBAUQAAAHABAEQACAEAFADQAEACAIABIAYABIAWgBQAJgBAFgCQAEgDABgEQACgFAAgHIAAgmQAAgJgDgDQgEgEgIAAIg0AAQgIAAgDAEg");
	this.shape_153.setTransform(978.8,732.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AhnCzQgegSAAgmIABgXIADgVQADgLAJgEQAKgFAOACQAOACAHAIQAGAHgBAKIgCAPIgBANQAAAHACAGQADAGAIADQAHAEANACQANACAUAAIAcgBIAdgDIAbgFQAMgDAJgDQANgFAJADQAJAEAEAJQAEAKgBAKQgCALgNAEQgLAFgQADIggAGQgRADgSABIgiACQhEAAgfgSgAiiAlQgLAAgFgHQgGgHAAgKQAAgKAGgGQAFgIALAAIFFAAQALAAAGAIQAFAGAAAKQAAAKgFAHQgGAHgLAAgAg/grQgYgEgQgKQgPgJgIgQQgIgPAAgXIACgfQACgQADgNQADgKAJgEQAKgDANACQANACAHAHQAIAIgCAKQgDAKgBANIgBAZQAAAHADAGQADAGAIAEQAHAFANACQANACATAAIAbgBIAdgDIAbgFIAXgGQANgFAIAEQAIAFADAKQAEALgEAJQgDAJgMAEQgYAIgfAFQgfAEglAAQgiAAgYgEg");
	this.shape_154.setTransform(924.2,732.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("ABRCqQgJgGAAgLIAAklQAAgLAJgGQAJgGAMAAQANAAAJAGQAKAGAAALIAABuIAmAAQAMAAAFAIQAGAHAAAKQAAAKgGAHQgFAHgMAAIgmAAIAACHQAAAKgKAGQgJAHgNAAQgMAAgJgHgAhtB7QgTgGgOgMQgNgMgIgRQgIgRAAgUQAAgVAIgRQAIgQANgMQAOgMATgGQASgHAXAAQAXAAATAHQASAGANAMQAOAMAIAQQAHARAAAVQAAAUgHARQgIARgOAMQgNAMgSAGQgTAHgXAAQgXAAgSgHgAhiAGQgMAMAAAVQAAAUAMAMQALALATAAQASAAANgLQAMgMAAgUQAAgVgMgMQgNgKgSAAQgTAAgLAKgAishEQgLAAgFgGQgGgHAAgKQAAgLAGgHQAFgHALAAIBKAAIAAglQAAgLAJgGQAJgGAMAAQANAAAJAGQAIAGABALIAAAlIBEAAQALAAAFAHQAHAHAAALQAAAKgHAHQgFAGgLAAg");
	this.shape_155.setTransform(884.7,729.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AB0CkQgJgGAAgKIAAidIgjAAQgTAAAAgYQAAgMAFgHQAFgGAJAAIAjAAIAAhYQAAgMAJgFQAJgGAMAAQANAAAJAGQAJAFAAAMIAAElQAAALgJAGQgJAGgNAAQgMAAgJgGgAhoBMQgUgIgOgPQgOgPgHgWQgIgVAAgcQAAgbAIgWQAHgWAOgPQAOgPAUgJQAUgIAYAAQAYAAAUAIQASAJAOAPQAOAPAIAWQAIAWAAAbQAAAcgIAVQgIAWgOAPQgOAPgSAIQgUAIgYAAQgYAAgUgIgAhdhTQgMASAAAgQAAAhAMAQQAMASAVAAQAVAAAMgSQAMgQAAghQAAgggMgSQgMgRgVAAQgVAAgMARg");
	this.shape_156.setTransform(829.9,729.9);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AhADDQgagDgPgFQgOgFgGgJQgFgIAAgOQAAgHADgHQgHgCgEgFQgDgEAAgIQAAgJAEgFQAFgFAIAAIC8AAQAGAAADgCQACgBAAgEIAAgHQAAgHgLgBIi0AAQgJAAgFgFQgFgFAAgJQAAgJAFgGQAFgGAJAAIDKAAQAZAAAMAIQAMAIAAATIAAAeQAAATgMAIQgMAIgZAAIibAAIAAAIQAAAEACACQACACAHACIAVACIAnABIBAgBQAdgBAWgEQAMgBAGAFQAGAEABAJQAAAIgDAGQgEAGgLACQgaAEgeABQgfABgjAAQgoAAgagCgAikATQgUgBAAgSQAAgUAUAAIFJAAQAUAAAAAUQAAASgUABgAhHgoQgZgEgPgGQgOgIgFgLQgFgMAAgPQAAgPADgQQADgPAFgOQgRgBAAgTQAAgJAEgGQAFgGAKABIDoAAQAKgBAFAGQAFAGAAAJQAAAKgFAEQgFAGgKAAIizAAIgCAKIgBAKICvAAQAKAAAEAGQAFAFAAAIQAAAJgFAFQgEAEgKAAIixAAQAAAHADAFQACAEAHADQAIACAOACIAkAAIBCAAQAdgCAXgDQAKgBAGAFQAFADABAIQABAKgEAFQgDAGgKABQgYADggACQghACgjAAQgpAAgagDg");
	this.shape_157.setTransform(790.5,733.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AhaC3QgggRAAghQAAghAggSQAhgSA5AAQA7AAAgASQAhASAAAhQAAAhghARQggATg7gBQg6ABgggTgAgqBwQgPAIAAANQAAANAPAHQAPAHAbAAQAcAAAPgHQAPgHAAgNQAAgNgPgIQgPgGgcAAQgbAAgPAGgAiiAzQgLgBgFgFQgGgHAAgKQAAgKAGgGQAFgGALAAICDAAIAAgIQAAgIAJgFQAIgEAOAAQAPAAAIAEQAJAFAAAIIAAAIICDAAQALAAAGAGQAFAGAAAKQAAAKgFAHQgGAFgLABgAhEgdQgagFgPgIQgPgIgFgOQgGgOAAgUQAAgQADgQQACgPAFgOQgQgBAAgTQAAgKAEgGQAFgFAKAAIDoAAQAKAAAFAFQAFAGAAAKQAAAVgUgBIi0AAIgDAYICwAAQAKAAAEAFQAFAGAAAJQAAAJgFAGQgEAFgKAAIixAAQABAHADAGQADAEAIAEQAIADAPAAQAOACAWAAQAgAAAdgCQAdgCAVgFQALgCAHAGQAGAEACAJQABAJgDAHQgEAHgKACQgYAEggADQghADggAAQgpAAgbgDg");
	this.shape_158.setTransform(750.3,733.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("Ag/DDQgZgDgPgFQgPgFgGgJQgGgIAAgOQAAgHADgHQgHgCgEgFQgDgEAAgIQAAgJAEgFQAFgFAIAAIC8AAIAJgBQACgBAAgEIAAgIQAAgFgCgBIgJgBIi0AAQgTAAAAgUQAAgJAFgGQAFgFAJAAIDKAAQAZAAAMAIQAMAIAAATIAAAdQAAATgMAIQgMAIgZAAIibAAIAAAIQAAAEACACQADACAHACIAWACIAlABIBAgBQAdgBAWgEQANgBAFAEQAFADACAJQABAJgEAHQgEAGgLACQgaADgfACQgeABgjAAQgnAAgagCgAikATQgUAAAAgTQAAgTAUAAIFJAAQAUAAAAATQAAATgUAAgAg/gnQgagDgPgFQgOgGgGgIQgGgJAAgNQAAgIACgGQgNgCAAgQQAAgKAEgEQAFgFAIAAIC8AAQAGAAADgCQACAAAAgFIAAgIQAAgEgCgBQgDgBgGgBIi0AAQgTAAAAgTQAAgKAFgGQAFgFAJAAIDKAAQAZAAAMAHQAMAIAAATIAAAeQAAATgMAIQgMAIgZAAIibAAIAAAHQAAAEACACQADADAHACIAWACIAlABIBAgBQAdgBAWgEQANgCAFAFQAFADACAJQABAJgEAGQgEAHgLABQgaADgfACQgeACgjAAQgnAAgagCg");
	this.shape_159.setTransform(697,733.1);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AihCZQgLABgGgHQgGgHAAgLQAAgNAGgGQAGgHALABICDAAIAAg4QAAgMAJgFQAKgHALABQAMgBAKAHQAKAFAAAMIAAA4ICDAAQAKgBAGAHQAGAGAAANQAAALgGAHQgGAHgKgBgAiEAtQgLgEgFgMQgEgLAEgLQAEgIANgGQAXgIASgNQASgMANgOQANgOAGgPQAHgOAAgOIAAgTQAAgLAJgFQAIgHAQAAQARAAAJAHQAJAFAAALIAAATQAAASgIAUIBpA/QANAHADALQADAMgHAMQgHALgMACQgLAEgMgIIhmhCQgTAVgaATQgbASglAMQgGACgGAAQgGAAgFgCg");
	this.shape_160.setTransform(656.8,729.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("AihCdQgLAAgGgGQgGgHAAgLQAAgMAGgHQAGgGALAAIBDAAIAAglQAAgMAJgFQAJgGAMAAQAMAAAJAGQAJAFAAAMIAAAlIBHAAIAAglQAAgMAIgFQAJgGANAAQAMAAAJAGQAJAFAAAMIAAAlIBCAAQAKAAAGAGQAGAHAAAMQAAALgGAHQgGAGgKAAgAg0AoQgXgHgRgNQgRgOgJgSQgJgSAAgYQAAgXAJgTQAJgTARgNQARgNAXgIQAYgHAcAAQAdAAAYAHQAXAIARANQARANAJATQAKATAAAXQAAAYgKASQgJASgRAOQgRANgXAHQgYAIgdAAQgcAAgYgIgAguhcQgSAOAAAYQAAAYASAOQASAPAcAAQAeAAARgPQASgOAAgYQAAgYgSgOQgRgPgeAAQgcAAgSAPg");
	this.shape_161.setTransform(616.6,728.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AhoCwQgdgRAAgnIABgVIAEgTQADgLAJgEQAKgEANADQANACAHAHQAHAHgCAKQgCAJAAAOQAAAIACAFQADAGAIAEQAHADANACQANACAUAAIAcgBIAdgDIAbgFQAMgCAJgEQANgFAJAEQAJADAEAJQAEAKgBALQgCAKgNAEQgLAFgQADIghAHQgRACgTABIglACQhBAAgegSgAiiApQgLAAgFgGQgGgIAAgKQAAgLAGgGQAFgHALAAIFFAAQALAAAGAHQAFAGAAALQAAAKgFAIQgGAGgLAAgAhAgjQgagEgQgIQgQgIgHgNQgGgOAAgTQAAgMACgLQACgLAFgJQgIgCgFgGQgEgGAAgKQAAgMAFgHQAGgGAKAAIDmAAQAJAAAGAGQAGAHAAAMQAAALgGAGQgGAHgJAAIivAAQgFASAAARQAAAJADAFQADAGAIAEQAHADAPACQAOABAWAAQAeAAAcgDQAcgDASgEQAYgHAFAWQADALgEAIQgDAIgMADQgWAFggAEQggACgfAAQgmAAgagCg");
	this.shape_162.setTransform(563.3,732.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AihCXQgLABgGgHQgGgHAAgLQAAgNAGgGQAGgHALABICDAAIAAgkQAAgJAIgHQAJgFANgBQAOABAJAFQAIAHAAAJIAAAkICEAAQAKgBAGAHQAGAGAAANQAAALgGAHQgGAHgKgBgAhHAfQgbgEgPgIQgPgJgGgMQgFgOAAgSQAAgTACgWQADgUAEgSQAEgUALgJQALgJAWABICrAAQAxAAAAAxIAABDQAAASgFAOQgGAMgPAJQgPAIgbAEQgcADgqAAQgsAAgbgDgAhDhhQgEADgBAJIgCAWIgBAXQAAAGADAFQACAFAIADQAIADAPACQAOABAZAAQAXAAAPgBQAPgCAIgDQAIgDACgFQADgEAAgIIAAgsQAAgIgEgEQgEgEgIAAIhyAAQgHAAgEAEg");
	this.shape_163.setTransform(523.1,729.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AhnCzQgegSAAgmIABgXIADgVQADgLAJgEQAKgFAOACQAOACAHAIQAGAHgBAKIgCAPIgBANQAAAHACAGQADAGAIADQAHAEANACQANACAUAAIAcgBIAdgDIAbgFQAMgDAJgDQANgFAJADQAJAEAEAJQAEAKgBAKQgCALgNAEQgLAFgQADIggAGQgRADgSABIgiACQhEAAgfgSgAiiAlQgLAAgFgHQgGgHAAgKQAAgKAGgGQAFgIALAAIFFAAQALAAAGAIQAFAGAAAKQAAAKgFAHQgGAHgLAAgAg/grQgYgEgQgKQgPgJgIgQQgIgPAAgXIACgfQACgQADgNQADgKAJgEQAKgDANACQANACAHAHQAIAIgCAKQgDAKgBANIgBAZQAAAHADAGQADAGAIAEQAHAFANACQANACATAAIAbgBIAdgDIAbgFIAXgGQANgFAIAEQAIAFADAKQAEALgEAJQgDAJgMAEQgYAIgfAFQgfAEglAAQgiAAgYgEg");
	this.shape_164.setTransform(469.8,732.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("ABRCqQgJgGAAgLIAAklQAAgLAJgGQAKgGALAAQANAAAJAGQAKAGAAALIAABuIAmAAQALAAAGAIQAGAHAAAKQAAAKgGAHQgGAHgLAAIgmAAIAACHQAAAKgKAGQgJAHgNAAQgLAAgKgHgAhtB7QgTgGgOgMQgNgMgIgRQgIgRAAgUQAAgVAIgRQAIgQANgMQAOgMATgGQASgHAXAAQAXAAASAHQATAGANAMQAOAMAHAQQAIARAAAVQAAAUgIARQgHARgOAMQgNAMgTAGQgSAHgXAAQgXAAgSgHgAhiAGQgMAMAAAVQAAAUAMAMQALALATAAQASAAANgLQAMgMgBgUQABgVgMgMQgNgKgSAAQgTAAgLAKgAishEQgKAAgHgGQgFgHAAgKQAAgLAFgHQAHgHAKAAIBKAAIAAglQAAgLAJgGQAJgGAMAAQAMAAAKAGQAIAGABALIAAAlIBEAAQALAAAFAHQAHAHAAALQAAAKgHAHQgFAGgLAAg");
	this.shape_165.setTransform(430.3,729.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgYDLQgZgEgPgHQgOgHgFgMQgEgLAAgQIABgXIADgWQAEgVALgJQALgIAXAAICeAAQAYAAAKALQALALAAAWIAAAnQAAAQgFALQgFAMgOAHQgOAHgZAEQgZADgpAAQgoAAgYgDgAgVBwQgDADgBAHIgBASQAAAGACAEQACAEAHACQAHACAMAAIAkABIAkgBQANAAAHgCQAHgCACgEQADgEAAgGIAAgRQAAgOgPAAIhmAAQgIAAgEADgAB0ArQgIgFAAgMIAAg7IggAAQgKAAgGgHQgGgHAAgKQAAgKAGgHQAGgJAKAAIAgAAIAAhUQAAgLAIgGQAIgGAOgBQAPABAIAGQAIAGAAALIAADBQAAAMgIAFQgIAHgPAAQgOAAgIgHgAhXAnQgSgFgMgKQgNgKgHgOQgHgOAAgRQAAgSAHgPQAHgNANgLQAMgKASgFQASgFAWgBQAVABASAFQARAFANAKQAMALAHANQAHAPAAASQAAARgHAOQgHAOgMAKQgNAKgRAFQgSAGgVgBQgWABgSgGgAhMg5QgKALAAAPQAAAPAKAKQAKAIATAAQASAAAKgIQALgKAAgPQAAgPgLgLQgKgJgSAAQgTAAgKAJgAiSh3QgKAAgGgHQgGgGAAgJQAAgKAGgHQAGgHAKAAIBFAAIAAgSQAAgKAIgGQAIgGAOAAQAOAAAIAGQAIAGAAAKIAAASIBBAAQALAAAFAHQAGAHAAAKQAAAJgGAGQgFAHgLAAg");
	this.shape_166.setTransform(388.1,732.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgGDDQgUgGgOgMQgPgMgIgRQgJgRAAgWQAAgVAJgRQAIgRAPgMQAOgMAUgHQASgGAWAAQAWAAAUAGQAUAHAOAMQAPAMAIARQAIARAAAVQAAAWgIARQgIARgPAMQgOAMgUAGQgUAGgWAAQgWAAgSgGgAABBOQgMAMAAATQAAATAMANQAMAMAVAAQAVAAANgMQANgNAAgTQAAgTgNgMQgNgNgVAAQgVAAgMANgABrARQgJgGAAgLIAAgVIgiAAQgKAAgEgGQgFgGAAgLQAAgLAFgGQAEgHAKAAIAiAAIAAglIgfAAQgKAAgEgHQgFgGAAgLQAAgKAFgHQAEgHAKAAIAfAAIAAgYQAAgLAJgGQAIgGAOAAQAOAAAJAGQAIAGAAALIAACxQAAALgIAGQgJAGgOAAQgOAAgIgGgAiTAQQgIgGgCgKQgDgJAFgKQAFgJAMgDQAYgFAVgKQAVgJAQgMQAPgMAJgNQAJgMAAgNQAAgLgFgFQgEgEgMAAIhOAAQgNAAgHgHQgHgHAAgLQAAgLAHgHQAGgHAOAAIBhAAQAjAAAPARQAPAQAAAhQAAAYgNAWQgMAXgVASQgWATgeAOQgeANgkAGIgJABQgIAAgGgDg");
	this.shape_167.setTransform(348.4,733);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AB/ClQgHgGAAgKIAAiTIggAAIAACOQAAAKgIAFQgHAFgMAAQgLAAgHgFQgIgFAAgKIAAkiQAAgJAIgGQAHgFALAAQAMAAAHAFQAIAGAAAJIAABkIAgAAIAAhmQAAgKAHgGQAHgFANAAQAMAAAIAFQAHAGAAAKIAAEpQAAAKgHAGQgIAFgMAAQgNAAgHgFgAg4BfQgKAIgMAEQgMAEgOAAQggAAgRgSQgRgSAAgkIABgkIADgkIAFgkIAFgiQgRgBAAgWQAAgMAFgGQAFgGAIAAIA1AAQAIAAAFAGQAFAGAAAMQAAALgFAGQgFAGgIAAIgGAAIgEAlIgCAmIgBAjIgBAfQAAAOAFAFQAFAFALAAQAMAAALgDQgCgJAAgMQAAgmADgjQADgkAFggQgOgCAAgVQAAgMAFgGQAEgGAJAAIA9AAQAJAAAFAGQAEAGAAAMQAAALgEAGQgFAGgJAAIgQAAIgEBHIgBBGQAAAOACAFQADAFAHAAIAHAAIAFgBQARgGAGAVQADAKgCAIQgCAHgHADQgIAEgKABIgRACQgZAAgQgQg");
	this.shape_168.setTransform(937,672.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("AgxDOQgXgDgNgGQgOgHgGgJQgGgKAAgNQAAgMACgJQgOgCAAgSQAAgJAEgFQAFgGAJAAICjAAQAGAAABgBQACgCAAgEIAAgKQAAgEgCgBQgCgBgEAAIidAAQgKAAgEgGQgGgGAAgJQAAgKAGgFQAEgGAKAAIC7AAQAWAAAKAKQAIAJABAUIAAAcQgBAUgIAJQgKAKgWAAIiJAAIgBAFIAAAFQAAAEACADQACADAGADQAGACALABIAbABQAfAAAbgCQAcgCAUgDQALgCAHAFQAHAEABAKQABAKgEAHQgFAHgLACQgYAEgcACQgcACghAAQggAAgWgDgABNAOQgIgGAAgKIAAimQAAgLAIgGQAIgGAOAAQAOAAAJAGQAHAGABALIAAA8IAmAAQALAAAGAGQAGAHAAALQAAALgGAHQgGAGgLAAIgmAAIAAA6QgBAKgHAGQgJAGgOAAQgOAAgIgGgAiQgCQgagRAAgeQAAgeAagSQAagSAvAAQAxAAAZASQAZASAAAeQAAAegZARQgZARgxAAQgvAAgagRgAhkhFQgKAHAAANQAAAMAKAIQALAIASAAQAUAAALgIQAJgIABgMQgBgNgJgHQgLgIgUAAQgSAAgLAIgAiqh9QgJAAgGgGQgFgGAAgKQAAgKAFgGQAGgGAJAAIBGAAIAAgTQAAgJAIgGQAIgFANAAQAPAAAIAFQAIAGAAAJIAAATIBCAAQAKAAAFAGQAFAGAAAKQAAAKgFAGQgFAGgKAAg");
	this.shape_169.setTransform(885.1,675.1);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("AgyDJQgXgFgRgKQgQgLgJgPQgJgOAAgTQAAgSAJgOQAJgPAQgLQARgKAXgFQAXgGAbABQAcgBAYAGQAXAFAQAKQARALAJAPQAJAOAAASQAAATgJAOQgJAPgRALQgQAKgXAFQgYAGgcgBQgbABgXgGgAgsBnQgQAJAAAPQAAAQAQAJQAQAIAcAAQAdAAAQgIQAQgJAAgQQAAgPgQgJQgQgIgdAAQgcAAgQAIgAiiAjQgLAAgFgHQgGgHAAgLQAAgKAGgGQAFgHALABIBEAAIAAgPQAAgHAIgFQAIgGAOAAQAPAAAIAGQAHAFAAAHIAAAPIBEAAIAAgPQAAgHAIgFQAHgGAPAAQAPAAAIAGQAHAFAAAHIAAAPIBFAAQALgBAGAHQAFAGAAAKQAAALgFAHQgGAHgLAAgAgxg0QgXgEgQgLQgRgLgIgOQgJgPAAgTQAAgSAJgPQAIgPARgKQAQgLAXgFQAWgGAbAAQAcAAAXAGQAXAFAQALQAQAKAJAPQAJAPAAASQAAATgJAPQgJAOgQALQgQALgXAEQgXAHgcgBQgbABgWgHgAgriXQgPAKAAAPQAAAQAPAJQAQAKAbAAQAcAAAQgKQAQgJAAgQQAAgPgQgKQgQgJgcAAQgbAAgQAJg");
	this.shape_170.setTransform(843.8,675.7);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("ABICkQgJgGAAgLIAAklQAAgMAJgFQAJgGANAAQAMAAAJAGQAJAFAAAMIAABhIAsAAQAKAAAGAIQAGAHAAAKQAAALgGAHQgGAGgKAAIgsAAIAACUQAAAKgJAGQgJAGgMAAQgNAAgJgGgAijBuQgMgDgHgIQgIgKABgLQABgMAMgJQATgQAOgSQAOgSAJgSQAJgTAEgTQAEgSAAgSIAAgsQAAgMAJgGQAJgGAOAAQAPAAAJAGQAIAGAAAMIAAAsQAAAOgCAOQgCAOgFAOIBTBUQAKAKgCAMQgBANgJAIQgJAIgMABQgMAAgIgMIg/hGQgNAWgRAUQgRAUgVARQgLAIgJAAIgEAAg");
	this.shape_171.setTransform(804.3,672.9);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("Ag9DJQgYgEgOgGQgPgFgFgKQgGgKAAgNQAAgLADgIQgIgBgEgGQgEgFAAgJQAAgKAFgEQAFgHAJAAIC2AAQAGABACgCQADgCAAgFIAAgFQAAgJgLAAIivAAQgKAAgFgFQgFgGAAgKQAAgJAFgGQAFgGAKAAIDGAAQAxAAAAApIAAAXQAAAqgxAAIiUAAIgBAEIAAAFQAAAEACAEQACACAGADQAHACANABIAhABQAjAAAdgDQAdgDAUgEQALgDAHAFQAHADACAJQACAKgDAHQgDAHgMAEQgUAFggAEQgfADgpAAQglAAgYgDgAikAIQgKgBgFgFQgFgGAAgJQAAgKAFgGQAFgGAKAAIFJAAQAKAAAFAGQAFAGAAAKQAAAJgFAGQgFAFgKABgAg1g3QgXgGgQgKQgPgLgIgOQgIgOAAgQQAAgSAIgOQAIgOAPgJQAQgLAXgFQAXgGAeAAQAfAAAXAGQAXAFAQALQAQAJAIAOQAIAOAAASQAAAQgIAOQgIAPgQAKQgQAKgXAGQgXAFgfAAQgeAAgXgFgAgtiXQgPAJAAAQQAAAPAPAJQAPALAeAAQAfAAAPgLQAPgJAAgPQAAgQgPgJQgPgLgfABQgegBgPALg");
	this.shape_172.setTransform(750.3,675.3);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AhEDAQgbgDgOgIQgPgGgFgMQgFgKAAgQIAAgUIADgVQADgUAMgJQALgKAWAAICsAAQAZAAALAMQALALAAAZIAAAgQAAAQgFAKQgFAMgPAGQgPAIgaADQgbADgrAAQgpAAgbgDgAhDBrQgDADgBAHIgBAHIAAAIQAAAFACADQACADAHABIAWADIAnABIAogBIAWgDQAIgBABgDQACgDAAgFIAAgOQAAgIgDgDQgDgCgIAAIhzAAQgIAAgDACgAgWAtQgJgEAAgIIAAgPIiDAAQgLgBgFgGQgGgHAAgJQAAgKAGgIQAFgGALAAIFFAAQALAAAGAGQAFAIAAAKQAAAJgFAHQgGAGgLABIiDAAIAAAPQAAAIgJAEQgJAFgOABQgNgBgJgFgAh6g0QgKAAgGgFQgGgHAAgKQAAgLAGgFQAGgHAKAAIAfAAIAAgyIggAAQgLgBgFgFQgGgHAAgLQAAgLAGgGQAFgGALAAID2AAQALAAAGAGQAFAGAAALQAAALgFAHQgGAFgLABIgeAAIAAAyIAdAAQALAAAFAHQAGAFAAALQAAAKgGAHQgFAFgLAAgAgghhIBCAAIAAgyIhCAAg");
	this.shape_173.setTransform(710.1,676);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("ACCClQgJgFAAgLIAAkpQAAgKAJgGQAHgFAMAAQANAAAIAFQAIAGAAAKIAAEqQAAAKgIAFQgIAFgNAAQgMAAgHgFgAAwCfQgIgFAAgKIAAiYIgrAAQgKAAgFgGQgGgHABgLQgBgLAGgHQAFgGAKAAIArAAIAAhaQAAgJAIgGQAIgFAMAAQALAAAIAFQAJAGgBAJIAAEiQABAKgJAFQgIAFgLAAQgMAAgIgFgAiXBxQgMgBgGgIQgIgHAAgLQAAgKAJgJQAhgdAOgkQAPgiAAgjIAAgjIgnAAQgKAAgGgHQgFgHAAgLQAAgKAFgHQAGgHAKAAICGAAQALAAAFAHQAGAHAAAKQAAALgGAHQgFAHgLAAIgkAAIAAAjQAAAZgIAcIBEBLQAJAKAAAKQAAAKgJAJQgIAIgJAAQgLAAgKgKIgzg+QgLATgNARQgNASgRAPQgIAIgKAAIgDAAg");
	this.shape_174.setTransform(669.2,672.9);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("AhnC3QgegSAAgmIABgWIAEgTQADgKAJgEQAKgEANACQANACAHAIQAHAHgCAJQgCAKAAAOQAAAHACAFQADAHAIADQAHADANACQANACAUAAIAcgBIAdgCIAbgGQAMgCAJgDQANgGAJAEQAJAEAEAJQAEAJgBALQgCAKgNAFQgLAFgQADIggAGQgRADgSABIgiABQhEABgfgSgAiiAzQgLAAgFgHQgGgHAAgKQAAgKAGgHQAFgIALAAIFFAAQALAAAGAIQAFAHAAAKQAAAKgFAHQgGAHgLAAgAgxgaQgWgGgRgMQgQgMgJgQQgJgQAAgWQAAgUAJgRQAJgRAQgMQARgLAWgGQAXgHAaAAQAbAAAXAHQAXAGAQALQARAMAJARQAJARAAAUQAAAWgJAQQgJAQgRAMQgQAMgXAGQgXAGgbAAQgaAAgXgGgAgriNQgPAMAAATQAAAUAPAMQAQALAbAAQAcAAAQgLQAQgMAAgUQAAgTgQgMQgQgLgcAAQgbAAgQALg");
	this.shape_175.setTransform(616.6,675.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("ABjDRQgbgHAFgXIADgMIABgMQAAgKgFgEQgEgFgKAAIiwAAQgLAAgFgFQgGgGAAgLQAAgKAGgGQAFgHALAAIDHAAQAeAAAMAMQANANAAAbQAAANgCANQgBANgEAMQgEALgIADQgFACgGAAIgLgBgAiiBKQgLAAgFgFQgGgGAAgKQAAgLAGgFQAFgGALAAICDAAIAAgIQAAgHAJgFQAIgEAOAAQAPAAAIAEQAJAFAAAHIAAAIICDAAQALAAAGAGQAFAFAAALQAAAKgFAGQgGAFgLAAgAhWgNQgegPAAgfQAAgfAegPQAfgPA3AAQA4AAAfAPQAeAPAAAfQAAAfgeAPQgfAOg4AAQg3AAgfgOgAg1g7QAAAWA1AAQA2AAAAgWQAAgWg2AAQg1AAAAAWgAiEiDQgTAAAAgUQAAgUATAAIBlAAIAAgQQAAgKAJgGQAIgGAOAAQAPAAAJAGQAIAGAAAKIAAAQIBkAAQATAAAAAUQAAAUgTAAg");
	this.shape_176.setTransform(576.4,674.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AihCYQgLAAgGgGQgGgHAAgMQAAgMAGgGQAGgHALAAIFEAAQAKAAAGAHQAGAGAAAMQAAAMgGAHQgGAGgKAAgAiEAyQgLgDgFgMQgEgMAEgKQAEgKANgEQAXgJASgMQASgMANgOQANgOAGgPQAHgPAAgOIAAgXQAAgKAJgGQAIgGAQAAQARAAAJAGQAJAGAAAKIAAAXQAAATgIATIBpA/QANAHADAMQADANgHALQgHALgMACQgLADgMgHIhmhDQgTAWgaASQgbASglAMQgGADgGAAQgGAAgFgDg");
	this.shape_177.setTransform(523.1,672.1);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("ABvCkQgHgGAAgLIAAklQAAgLAHgGQAIgGAPAAQAPAAAHAGQAJAGAAALIAAElQAAALgJAGQgHAGgPAAQgPAAgIgGgAhsBtQgVgEgNgJQgMgJgFgNQgFgOAAgUIACgtQABgYACgXQACgXAEgVQADgWAEgSQADgNAKgEQAKgEANADQAMACAGAIQAHAIgDANIgEAcIgFAgIBTAAIAAhEQAAgMAJgGQAIgFANAAQANAAAJAFQAIAGAAAMIAACsQAAATgEAOQgGANgMAJQgMAJgUAEQgTADgfAAQgfAAgTgDgAhmAKIAAAXQAAAIACAGQABAFAFADQAEAEAJABIAXABIAWgBQAJgBAFgEQAFgDABgFQACgGAAgIIAAgvIhWAAIgCAYg");
	this.shape_178.setTransform(482.5,672.9);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("ABzCkQgIgGAAgLIAAilIg9AAQgKAAgGgGQgGgGAAgMQAAgMAGgHQAGgGAKAAIA9AAIAAhPQAAgLAIgGQAIgGAOAAQAPAAAIAGQAIAGAAALIAAElQAAALgIAGQgIAGgPAAQgOAAgIgGgAiMBsQgLAAgIgJQgIgJAAgMQAAgLALgJQApgfAUgjQAVglAAgoIAAguQAAgMAJgGQAJgGAOAAQAOAAAJAGQAJAGAAAMIAAAuQAAAcgKAcIBTBQQALAJAAAMQAAALgIAKQgJAKgMABQgMABgKgKIhChKQgOAYgTAUQgTAVgWAPQgMAHgKAAIgBAAg");
	this.shape_179.setTransform(441.9,672.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgfDBQgXgFgOgKQgOgJgHgQQgGgQAAgWIABgVQABgJADgLQADgMAKgDQAJgEAOACQANADAHAHQAHAIgCALQgDAPAAAQQAAAIACAGQADAFAGAEQAGADALACQAKABARAAQAeAAAdgFQAdgFAVgIQANgFAJADQAKAEADAKQAEALgDAJQgDAKgLAFQgZALgiAFQgiAGgmAAQggAAgWgEgABvBEQgIgGAAgLIAAhsIgmAAQgLAAgGgHQgFgGAAgLQAAgMAFgGQAGgHALAAIAmAAIAAhDQAAgLAIgGQAHgGAOAAQAPAAAHAGQAIAGAAALIAADgQAAALgIAGQgHAGgPAAQgOAAgHgGgAgKAcQgOgEgJgKQgLAJgQAFQgPAFgSAAQgmAAgTgSQgSgRAAgpIABgVIADgYIAFgZQADgNAEgKQgPgEAAgUQAAgMAFgGQAGgGAJAAIBCAAQAJAAAGAGQAFAGAAAMQAAAMgFAGQgGAGgJAAIgTAAQgDAKgCANIgEAZIgCAZIgBAUQAAAQAHAGQAIAGAMAAQAVAAARgHQgCgJAAgMIABgVIADgYIAFgZIAGgXQgHgCgEgGQgFgGAAgKQAAgMAGgGQAGgGAJAAIBPAAQAKAAAFAGQAGAGAAAMQAAAMgGAGQgFAGgKAAIgiAAIgEAXQgDAMgBANIgCAYIAAAVQAAAQAGAGQAGAGAKAAQAIAAAHgBQAHgCAGgEQAKgEAIAEQAIAEAEAKQADAKgDAHQgDAIgMAGQgLAFgNACQgNADgNAAQgSAAgNgFg");
	this.shape_180.setTransform(389.3,675.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AB0CkQgJgGAAgKIAAidIgjAAQgTAAAAgYQAAgMAFgHQAFgGAJAAIAjAAIAAhYQAAgMAJgFQAJgGAMAAQANAAAJAGQAJAFAAAMIAAElQAAALgJAGQgJAGgNAAQgMAAgJgGgAhoBMQgUgIgOgPQgOgPgHgWQgIgVAAgcQAAgbAIgWQAHgWAOgPQAOgPAUgJQAUgIAYAAQAYAAAUAIQASAJAOAPQAOAPAIAWQAIAWAAAbQAAAcgIAVQgIAWgOAPQgOAPgSAIQgUAIgYAAQgYAAgUgIgAhdhTQgMASAAAgQAAAhAMAQQAMASAVAAQAVAAAMgSQAMgQAAghQAAgggMgSQgMgRgVAAQgVAAgMARg");
	this.shape_181.setTransform(348.4,672.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("ABECkQgKgGAAgLIAAklQAAgMAKgFQAJgGAMAAQAMAAAKAGQAJAFAAAMIAABfIArAAQALAAAGAHQAGAIAAAKQAAAKgGAHQgGAHgLAAIgrAAIAACWQAAAKgJAGQgKAGgMAAQgMAAgJgGgAimBxQgLgEgFgMQgFgMAEgKQAEgLAMgFQAbgKAWgOQAVgOAPgRQAOgQAIgTQAHgSAAgTQAAgPgIgHQgHgGgSAAIhGAAQgLAAgGgHQgGgHAAgMQAAgLAGgHQAGgHALAAIBlAAQAgAAARASQAQARAAAhQAAAggKAdQgKAdgUAZQgUAYgdAUQgcATgkANQgHACgGAAQgGAAgEgBg");
	this.shape_182.setTransform(471,615.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("ABKCkQgJgGAAgLIAAklQAAgMAJgFQAKgGAMAAQAMAAAJAGQAKAFAAAMIAABhIAnAAQALAAAFAIQAGAHAAAKQAAALgGAHQgFAGgLAAIgnAAIAACUQAAAKgKAGQgJAGgMAAQgMAAgKgGgAihBtQgMgBgHgJQgIgKABgLQAAgKAMgKQATgPANgQQAOgRAIgRQAJgRAFgSQAEgSAAgRIAAgYIgzAAQgLAAgGgHQgGgHAAgLQAAgMAGgGQAGgHALAAICkAAQALAAAFAHQAGAGAAAMQAAALgGAHQgFAHgLAAIgxAAIAAAYQAAAMgCAMQgCANgFANIBRBPQALALgBANQgBAMgJAIQgEAFgFACQgFACgGgBQgGAAgFgCQgFgDgFgFIg/hFQgNAWgQAUQgRATgUAQQgKAIgKAAIgEgBg");
	this.shape_183.setTransform(430.9,615.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("AgyDJQgXgFgRgKQgQgLgJgPQgJgOAAgSQAAgTAJgOQAJgPAQgLQARgKAXgFQAXgGAbABQAcgBAYAGQAXAFAQAKQARALAJAPQAJAOAAATQAAASgJAOQgJAPgRALQgQAKgXAFQgYAGgcgBQgbABgXgGgAgsBnQgQAJAAAQQAAAPAQAJQAQAIAcAAQAdAAAQgIQAQgJAAgPQAAgQgQgJQgQgIgdAAQgcAAgQAIgAiiAjQgLAAgFgHQgGgHAAgKQAAgLAGgGQAFgGALAAIBEAAIAAgPQAAgHAIgFQAIgGAOAAQAPAAAIAGQAHAFAAAHIAAAPIBEAAIAAgPQAAgHAIgFQAHgGAPAAQAPAAAIAGQAHAFAAAHIAAAPIBFAAQALAAAGAGQAFAGAAALQAAAKgFAHQgGAHgLAAgAgxgzQgXgGgQgKQgRgLgIgPQgJgOAAgTQAAgSAJgPQAIgPARgKQAQgKAXgGQAWgGAbAAQAcAAAXAGQAXAGAQAKQAQAKAJAPQAJAPAAASQAAATgJAOQgJAQgQAKQgQAKgXAGQgXAFgcAAQgbAAgWgFgAgriWQgPAIAAAQQAAAQAPAJQAQAKAbgBQAcABAQgKQAQgJAAgQQAAgQgQgIQgQgKgcAAQgbAAgQAKg");
	this.shape_184.setTransform(389.4,618.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("ABICkQgJgGAAgLIAAklQAAgMAJgFQAJgGANAAQAMAAAJAGQAJAFAAAMIAABhIAsAAQAKAAAGAIQAGAHAAAKQAAALgGAHQgGAGgKAAIgsAAIAACUQAAAKgJAGQgJAGgMAAQgNAAgJgGgAijBuQgMgDgHgIQgIgKABgLQABgMAMgJQATgQAOgSQAOgSAJgSQAJgTAEgTQAEgSAAgSIAAgsQAAgMAJgGQAJgGAOAAQAPAAAJAGQAIAGAAAMIAAAsQAAAOgCAOQgCAOgFAOIBTBUQAKAKgCAMQgBANgJAIQgJAIgMABQgMAAgIgMIg/hGQgNAWgRAUQgRAUgVARQgLAIgJAAIgEAAg");
	this.shape_185.setTransform(349.9,615.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FF0000").s().p("AmqIlQgmgggHgnQgGgpAYgeIE7mYIk4mXQgXgeAGgnQAEgpAngfQAngeApACQArACAaAhIEUFpIEVlpQAaghApgCQApgCAnAeQAnAeAHAoQAFApgYAeIk5GXIE8GYQAXAegFAoQgGAngnAgQgnAfgpgDQgpgCgZghIkZlrIkXFrQgaAhgqADIgHABQglAAgkgdg");
	this.shape_186.setTransform(691.5,480);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FF0000").s().p("AjJIiQhVgcg3gxQg3gygbhEQgahFAAhTIAAq1QAAgmAegUQAfgVAzAAQAzAAAfAVQAeAUAAAmIAAKvQAAArANAlQANAlAaAbQAbAbAsAPQAqAPA8AAQA7AAArgPQArgPAcgbQAbgbANglQANglAAgpIAAqxQAAgmAegUQAfgVAzAAQAzAAAfAVQAeAUAAAmIAAK2QAABSgaBFQgbBEg4AyQg3AxhVAcQhVAch0AAQh1AAhUgcg");
	this.shape_187.setTransform(385.5,480.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("Ag4CfQgfgNgWgWQgXgWgMggQgMgfAAgnQAAgmAMgfQANggAWgWQAWgWAegNQAegMAhAAQAiAAAcAMQAcALAUAUQAUATAKAZQALAZAAAbQAAAggQASQgQAQgiAAIidAAQAOBBBBAAQAWAAASgEQATgEAOgGQARgIANADQAOAEAHAPQAGAOgDAOQgDANgSAIQgVAKgcAHQgbAFghAAQgjAAgfgMgAgphSQgTASgGAjIB9AAQAUAAgEgVQgFgVgRgOQgQgOgfAAQgcAAgTARg");
	this.shape_188.setTransform(989.6,512.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("AgvCfQgggNgYgWQgYgXgNgfQgNggAAgmQAAglANggQANgfAYgXQAYgWAggNQAggMAmAAQAeAAAZAFQAZAHATAKQAgARgPAgQgHAOgMAEQgNAEgOgGQgQgGgRgFQgQgEgSAAQgmAAgaAaQgaAaAAAuQAAAvAaAaQAaAaAmAAQAsAAAhgTQAMgHANAEQAOADAGANQAIAOgDAOQgCANgQAKQgTAMgcAHQgdAIgkAAQgmAAgggMg");
	this.shape_189.setTransform(954.4,512.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("ABMChQgMgIAAgPIAAi1QAAgZgRgOQgRgOgegBQgeABgQAOQgQAOAAAZIAAC1QAAAPgNAIQgMAJgUAAQgVAAgNgJQgLgIAAgPIAAkQQAAgPALgJQANgHAVgBQAUABAMAHQANAJAAAPIAAAJQAMgUAVgMQAWgMAcAAQBDABAgAfQAiAfAAA5IAAC7QgBAPgMAIQgMAJgUAAQgVAAgMgJg");
	this.shape_190.setTransform(917.3,512.4);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("Ag4CfQgfgNgWgWQgXgWgMggQgMgfAAgnQAAgmAMgfQANggAWgWQAWgWAegNQAegMAhAAQAiAAAcAMQAcALAUAUQAUATAKAZQALAZAAAbQAAAggQASQgQAQgiAAIidAAQAOBBBBAAQAWAAASgEQATgEAOgGQARgIANADQAOAEAHAPQAGAOgDAOQgDANgSAIQgVAKgcAHQgbAFghAAQgjAAgfgMgAgphSQgTASgGAjIB9AAQAUAAgEgVQgFgVgRgOQgQgOgfAAQgcAAgTARg");
	this.shape_191.setTransform(880.2,512.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("AgfDmQgNgIAAgPIAAkCQAAgPANgHQALgJAUAAQAUAAANAJQAMAHAAAPIAAECQAAAPgMAIQgNAJgUAAQgUAAgLgJgAgniRQgQgQAAgWQAAgXAQgQQAPgPAYAAQAaAAAPAPQAPAQAAAXQAAAWgPAQQgPAQgaAAQgYAAgPgQg");
	this.shape_192.setTransform(853.4,505.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AhpChQgNgIAAgPIAAkQQAAgPANgJQAMgHAUgBQAVABAMAHQAMAJAAAPIAAAiQASggAZgSQAbgSAjgBQAWAAAKALQAJAMABAUQgBAVgJAKQgKALgWAAQgbABgTAHQgUAIgMANQgNAMgHAQQgHAQAAAPIAACGQAAAPgMAIQgMAJgVAAQgUAAgMgJg");
	this.shape_193.setTransform(832.2,512.4);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("Ag4CfQgfgNgWgWQgXgWgMggQgMgfAAgnQAAgmAMgfQANggAWgWQAWgWAegNQAegMAhAAQAiAAAcAMQAcALAUAUQAUATAKAZQALAZAAAbQAAAggQASQgQAQgiAAIidAAQAOBBBBAAQAWAAASgEQATgEAOgGQARgIANADQAOAEAHAPQAGAOgDAOQgDANgSAIQgVAKgcAHQgbAFghAAQgjAAgfgMgAgphSQgTASgGAjIB9AAQAUAAgEgVQgFgVgRgOQgQgOgfAAQgcAAgTARg");
	this.shape_194.setTransform(798.6,512.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AieDjQgNgIAAgPIAAmUQAAgPANgJQAMgHAUgBQAVABANAHQAMAJgBAPIAAALQAPgVAXgMQAZgNAeAAQAjAAAdAMQAdALAVAWQAWAXAMAgQALAfAAAoQAAApgLAfQgMAfgWAWQgVAXgdALQgdALgjAAQgdAAgagJQgYgKgOgPIAACFQABAPgMAHQgNAIgVAAQgUAAgMgIgAg5iIQgXAZgBAvQABAxAXAYQAXAZAiABQAjgBAYgaQAWgZAAgvQAAgvgWgZQgYgbgjAAQgiAAgXAbg");
	this.shape_195.setTransform(760.3,519);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("Ag4CfQgfgNgWgWQgXgWgMggQgMgfAAgnQAAgmAMgfQANggAWgWQAWgWAegNQAegMAhAAQAiAAAcAMQAcALAUAUQAUATAKAZQALAZAAAbQAAAggQASQgQAQgiAAIidAAQAOBBBBAAQAWAAASgEQATgEAOgGQARgIANADQAOAEAHAPQAGAOgDAOQgDANgSAIQgVAKgcAHQgbAFghAAQgjAAgfgMgAgphSQgTASgGAjIB9AAQAUAAgEgVQgFgVgRgOQgQgOgfAAQgcAAgTARg");
	this.shape_196.setTransform(625.1,512.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AhpChQgNgIAAgPIAAkQQAAgPANgJQAMgHAUgBQAVABAMAHQAMAJAAAPIAAAiQASggAZgSQAbgSAjgBQAWAAAKALQAJAMABAUQgBAVgJAKQgKALgWAAQgbABgTAHQgUAIgMANQgNAMgHAQQgHAQAAAPIAACGQAAAPgMAIQgMAJgVAAQgUAAgMgJg");
	this.shape_197.setTransform(516.3,512.4);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("Ag4CfQgfgNgWgWQgXgWgMggQgMgfAAgnQAAgmAMgfQANggAWgWQAWgWAegNQAegMAhAAQAiAAAcAMQAcALAUAUQAUATAKAZQALAZAAAbQAAAggQASQgQAQgiAAIidAAQAOBBBBAAQAWAAASgEQATgEAOgGQARgIANADQAOAEAHAPQAGAOgDAOQgDANgSAIQgVAKgcAHQgbAFghAAQgjAAgfgMgAgphSQgTASgGAjIB9AAQAUAAgEgVQgFgVgRgOQgQgOgfAAQgcAAgTARg");
	this.shape_198.setTransform(482.7,512.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("Ag5CmQgggGgXgLQgPgHgFgMQgEgOAGgPQAGgPANgFQANgGAPAHQAUAHATAFQATAFATAAQAYAAAOgHQANgIAAgPQAAgIgEgGQgFgGgIgEQgJgFgLgDIgXgIQgbgIgWgIQgVgIgPgKQgOgMgIgPQgJgQAAgZQAAgUAJgSQAIgSAPgNQAQgNAXgIQAXgHAfAAQAgAAAcAFQAbAHAUAKQAQAHAEAOQAFAOgHAOQgGAOgNAEQgMAFgOgHQgOgGgRgEQgRgFgSAAQgaAAgMAIQgMAHAAAOQAAAHAEAFQAEAFAHAEQAHAEALADIAZAIIAsAPQAVAIARALQARALAJASQAKARAAAXQAAAWgIATQgIASgQANQgQAOgYAIQgYAHghAAQgfAAgfgFg");
	this.shape_199.setTransform(449.3,512.6);

	this.instance_10 = new lib.Chiwi00stay();
	this.instance_10.parent = this;
	this.instance_10.setTransform(1424.4,938.1,9.431,9.431,0,0,0,0.1,0.6);
	this.instance_10._off = true;

	this.instance_11 = new lib.방법();
	this.instance_11.parent = this;
	this.instance_11.setTransform(962,602.1);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93}]}).to({state:[]},55).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131}]},15).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},11).to({state:[{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135}]},11).to({state:[]},27).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},26).to({state:[{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.text_1},{t:this.instance_9}]},1).to({state:[{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},8).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},14).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(151).to({_off:false},0).to({scaleX:4.54,scaleY:4.54,x:947,y:829.1},8,cjs.Ease.quadIn).to({_off:true},1).wait(15));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(160).to({_off:false},0).to({scaleX:2.71,scaleY:2.71,rotation:-3.7,x:925.1,y:547},14,cjs.Ease.quadOut).wait(1));

	// Layer_2
	this.instance_12 = new lib.Bitmap6();
	this.instance_12.parent = this;
	this.instance_12.setTransform(837,198,1.243,1.243);

	this.instance_13 = new lib.물음표();
	this.instance_13.parent = this;
	this.instance_13.setTransform(1081.8,625.2,1,1,6.7,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},146).to({state:[]},1).to({state:[{t:this.instance_13}]},20).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1123.8,540,2019.6,1065.7);
// library properties:
lib.properties = {
	id: '55A5AC336516BB4B87736446F8408757',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/index_atlas_.png", id:"index_atlas_"}
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
an.compositions['55A5AC336516BB4B87736446F8408757'] = {
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