!function($){"use strict";function o(){return $(document).scroll(function(){r.run()}),this}var n=$("body"),r={currentPosition:0,scrollDirection:"down",run:function(){var o=$("html").scrollTop()||n.scrollTop();o>r.currentPosition?r.scrollDirection="down":r.scrollDirection="up",r.currentPosition=o,r.toggle()},toggle:function(){"down"===r.scrollDirection&&n.hasClass("scrolling-up")?n.removeClass("scrolling-up").addClass("scrolling-down"):"up"===r.scrollDirection&&n.hasClass("scrolling-down")&&n.removeClass("scrolling-down").addClass("scrolling-up")},init:function(){n.addClass("scrolling-"+r.scrollDirection)}};o.prototype.pos=function(){return r.currentPosition},o.prototype.dir=function(){return r.scrollDirection},window.Scrolling=new o}(jQuery);