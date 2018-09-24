/**
 * jquery.scrolling.js
 * @author      Marc-André Appel <marc-andre@appel.fun>
 * @licence     http://opensource.org/licenses/MIT MIT
 * @version     1.0.2
 */
!function(n){"use strict";function o(){return n(document).scroll(function(){l.run()}),this}var r=n("body"),l={currentPosition:0,scrollDirection:"down",run:function(){var o=n("html").scrollTop()||r.scrollTop();o>l.currentPosition?l.scrollDirection="down":l.scrollDirection="up",l.currentPosition=o,l.toggle()},toggle:function(){"down"===l.scrollDirection&&r.hasClass("scrolling-up")?r.removeClass("scrolling-up").addClass("scrolling-down"):"up"===l.scrollDirection&&r.hasClass("scrolling-down")&&r.removeClass("scrolling-down").addClass("scrolling-up")},init:function(){r.addClass("scrolling-"+l.scrollDirection)}};o.prototype.pos=function(){return l.currentPosition},o.prototype.dir=function(){return l.scrollDirection},window.Scrolling=new o}(jQuery);