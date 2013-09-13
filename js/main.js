// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
  paths: {
    text: 'require-text'
    },
  shim: {
  }

});
require(["exercise"], function(exercise) {
    var ex = new Exercise({el: "uno", type:"math", problem: {problem :"Qual era il colore del cavallo bianco di Napoleone?"}});
    
    console.log(ex);
    
    var myEl = document.getElementById('ex-uno');

    myEl.addEventListener('click', function() {
    ex.cacca();
    }, false);
});