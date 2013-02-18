// get variable from url ;)
function getv(name) {
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + name + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.href);
  if (results == null) return "";
  else return results[1];
}

// automatic emblem change
$(document).ready(function() {
  var refreshId = setInterval(function() {
    next();
  }, 10000);
});

// emblem randomizer
var emblems = ['triforce.png', 'commodore.png', 'cherry.png'];

$(document).ready(function() {
  $(".emblem").attr('src',"img/" + emblems[Math.floor(Math.random() * emblems.length)]);
});

// qr randomizer
var qrs = ['qr.png'];

$(document).ready(function() {
  $(".qr").attr('src',"img/" + qrs[Math.floor(Math.random() * qrs.length)]);
});

// image preloader
jQuery.preloadImages = function() {
  for(var i = 0; i<arguments.length; i++){
    jQuery("<img>").attr("src", arguments[i]);
  }
}

// emblems to preload :)
$.preloadImages("img/triforce.png", "img/commodore.png", "img/cherry.png", "img/bg.png");

// next emblem ;)
function next() {
  if($(".emblem").attr("src") == "img/triforce.png") {
    $(".emblem").fadeOut('2600',function(){$(this).attr('src',"img/commodore.png").fadeIn('2600');});
  }else if($(".emblem").attr("src") == "img/commodore.png") {
    $(".emblem").fadeOut('2600',function(){$(this).attr('src',"img/cherry.png").fadeIn('2600');});
  }else if($(".emblem").attr("src") == "img/cherry.png") {
    $(".emblem").fadeOut('2600',function(){$(this).attr('src',"img/triforce.png").fadeIn('2600');});
  }
}

// id page redirect
$(document).ready(function() {
  if (getv('id') == "about") {
    about();
  }
  if (getv('id') == "music") {
    music();
  }
  if (getv('id') == "hacks") {
    hacks();
  }
  if (getv('id') == "test") {
    test();
  }
});

// link definitions
function mail() {
  window.location.href = "mailto:christian@0xgrid.info";
}

function git() {
  window.location.href = "https://github.com/";
}

// page box definitions
function about() {
  tiny.box.show({
    iframe: 'about.htm',    
    animate: true,
    width: 750,
    height: 450
  })
}

function music() {
  tiny.box.show({
    iframe: 'music.htm',     
    animate: true,
    width: 750,
    height: 450
  })
}

function hacks() {
  tiny.box.show({
    iframe: 'hacks.htm',     
    animate: true,
    width: 750,
    height: 450
  })
}

function test() {
  tiny.box.show({
    iframe: 'test.htm',     
    animate: true,
    width: 750,
    height: 450
  })
}

