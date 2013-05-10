/**
 * jquery.simpleCenter.js
 *
 * User: jacobs
 * Date: 5/10/13
 * Time: 2:23 PM
 *
 * jquery plugin to center an element within another element
 * takes the selector of the containing element as an argument
 *
 * ie. $('#centerme').center('#container');
 */

(function( $ ) {
    $.fn.center = function(el) {

        var containerEl = $(el);

        containerEl.css({
            'height': $(window).height(),
            'width': $(window).width(),
            'position': 'relative'
        });

        this.css('position', 'absolute');

        var elObj = {
                'left': {
                    'centerEl': this.width(),
                    'container': containerEl.width()
                },
                'top': {
                    'centerEl': this.height(),
                    'container': containerEl.height()
                }
            },
            pos;

        for (var key in elObj) {
            var value = elObj[key];
            pos = Math.round((value.container - value.centerEl) / 2) + 'px';
            this.css(key, pos);
        }

    };
})( jQuery );
