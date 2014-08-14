var cs = require("./index.js");

var result = "";
var c = cs(function(){
	result += "c";
});

var _2 = c.add(function(){
  result += "2";
  _4 = c.add(function() {
    result += "4";
  });
});
var _3 = c.add(function(_a,_3){ result += _a+_3; }, "3");
var _1 = c.add(function(){ result += "1"; });
var _4;

_1();
if(result !== "1") {throw "Incorrect order of execution."; }

_2();
if(result !== "12") {throw "Incorrect order of execution."; }

_3("a");
if(result !== "12a3") {throw "Incorrect order of execution."; }

_4();
if(result !== "12a34c") {throw "Incorrect order of execution."; }

if(!(!c.add && !c.count && !c.oncomplete && !c.resolve)) { throw "Nothing should be left after set is complete."; }

console.log("Tests passed!");