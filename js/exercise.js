var Exercise = (function(opt) {"use strict";
  opt = (opt) ? opt : {};

  var _def = {
      el : "none",
      type : "none",
      problem : "none",
      solution : "none"
  };
  
  var _modules = {
      math : { module_name : "math.js", dependecies : ["a.js", "b.js"] },
      lett : { module_name : "lett.js", dependecies : ["a.js", "b.js"] },
      chem : { module_name : "chem.js", dependecies : ["c.js"] }
      
      };
  
  var _browser;
  
  var init = function(){
      console.log(opt);
      _def.el = opt.el || "null";
      _def.type = opt.type || "null";
      _def.problem = opt.problem || {problem : 'Questo è il posto della domanda'};
      _def.solution = opt.solution || "null";
      
      _browser = {};
      _browser.ff = (/firefox/i.test(navigator.userAgent.toLowerCase()));
      _browser.chrome = (/chrome/i.test(navigator.userAgent.toLowerCase()));
      _browser.opera = (/opera/i.test(navigator.userAgent.toLowerCase()));
      _browser.ie = (/msie/i.test(navigator.userAgent.toLowerCase())) || (/trident/i.test(navigator.userAgent.toLowerCase()));
      _browser.supported = (_browser.chrome || _browser.ff || _browser.opera);
      
      var element = document.getElementById(_def.el);
      element.appendChild(document.createElement("SPAN"));
  };
  
  var dispatcher = function(){
    //alert('merda');
    require(["lib/multichoice/multiChoiceMdl"], function(Math) {
    window.a = new Math(_def);
    window.a.init();
   
    
    });
    
  };
  
  init();
  return {
    browser : _browser,
    def : _def,
    modules : _modules,
    cacca : dispatcher
  };
  
  });