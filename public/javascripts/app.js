Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: false,
  transition: 'none', // none/fade/slide/convex/concave/zoom
});

var NEON = (function () {
  var neon_signs = $('.neon');

  var get_random = function (min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  }

  var timings = function () {
    setInterval(function(){
      var el = get_random(0,4);
      neon_signs.eq(el).addClass('lit');
      setTimeout(function(){
        neon_signs.eq(el).removeClass('lit');
      }, get_random(100, 3000));
    }, get_random(100, 400));
  }

  return {
    init: timings 
  }
}());
NEON.init();


var DOORS = (function () {

  var init = function () {
    var state = Reveal.getState();
    if (state.indexh === 5) {
      DOORS.add();
    }
    return;
  };

  var add = function () {
    if (!$('.door').length) {
      var left_door = "<div class='door left-door'/>"
      var right_door = "<div class='door right-door'/>"
      $('.main').before(left_door + right_door);
    }
  };
  
  return {
    init: init,
    add: add,
  }
}());

DOORS.init();

Reveal.addEventListener('closed-doors', function (event) {
  DOORS.add();
});

Reveal.addEventListener('open-doors', function (event) {
  //DOORS.open();
});

