define(function(){
  "use strict";
  
  function exBaseClass(){
  
  
  };
  
  exBaseClass.prototype = { 
    setOptions : function(){
      console.log(this._def);
    },
    render : function(el, tpl){
    var element = document.getElementById(el);
    element.innerHTML = tpl;
    }
    };
  
  return exBaseClass;
});