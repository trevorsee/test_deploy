//= require_self
var s;
var w = document.getElementById('html').getBoundingClientRect();

if(window.outerWidth < 700){
  console.log('small');
  s = [0,100];
} else if(window.outerWidth > 2100){
  console.log('large');
  s = [50,50];
} else {
  console.log('med');
  s = [30,70];
}

Split(['#r1', '#r2'], {
  sizes: s,
  gutterSize: 20,
  minSize: 0
});
