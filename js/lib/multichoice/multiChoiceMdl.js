define(["text!lib/multichoice/multiChoiceTpl.html", "lib/exBaseClass", "lib/tpl-helper"], function(tpl, exBaseClass, tplEngine) {
var Math = function(def){
  this._def = def;
  this.template = tpl;
  
  this.init = function(){
    var parsedTpl = tplEngine(this.template, this._def.problem);
    console.log(parsedTpl);
    this.render(this._def.el, parsedTpl);
  };
  
};
Math.prototype = new exBaseClass();



return Math;

});

