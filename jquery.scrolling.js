/**
 * jquery.scrolling.js
 * @author      Marc-André Appel <marcandre.appel@gmail.com>
 * @copyright   2015 Sudimage Communication
 * @link        http://www.lastoctoberday.com
 * @licence     http://opensource.org/licenses/MIT MIT
 * @version     1.0.0
 */

(function ($) {
    "use strict";
    var scrolling = {
        currentPosition: 0,
        scrollDirection: 'down',
        run: function () {
            var scrollPos = $('html').scrollTop() || $('body').scrollTop();

            if (scrollPos > scrolling.currentPosition) {
                scrolling.scrollDirection = 'down';
            } else {
                scrolling.scrollDirection = 'up';
            }
            scrolling.currentPosition = scrollPos;
            scrolling.toggle();
        },
        toggle: function () {
            if (scrolling.scrollDirection === 'down' && $('body').hasClass('scrolling-up')) {
                $('body')
                    .removeClass('scrolling-up')
                    .addClass('scrolling-down');
            } else if (scrolling.scrollDirection === 'up' && $('body').hasClass('scrolling-down')) {
                $('body')
                    .removeClass('scrolling-down')
                    .addClass('scrolling-up');
            }
        },
        init: function () {
            $('body').addClass('scrolling-' + scrolling.scrollDirection);
        }
    };

    function Scrolling() {
        $(document).scroll(function () {
            scrolling.run();
        });
        return this;
    }

    Scrolling.prototype.pos = function () {
        return scrolling.currentPosition;
    };

    Scrolling.prototype.dir = function () {
        return scrolling.scrollDirection;
    };

    window.Scrolling = new Scrolling();
})(jQuery);
