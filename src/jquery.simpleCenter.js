/*
 * jquery.simpleCenter
 * https://github.com/jewelsjacobs/jquery.simpleCenter
 *
 * Copyright (c) 2013 Julia Jacobs
 * Licensed under the MIT license.
 */

(function ($) {

    var $container, $obj;

    function setContainerToParentSize() {
        $container.css({
            'height': $obj.parent().outerHeight(),
            'width': $obj.parent().outerWidth(),
            'position': 'relative'
        });
    }

    function setContainerToWindowSize() {
        $container.css({
            'height': $(window).height(),
            'width': $(window).width(),
            'position': 'relative'
        });
    }

    function setContainer(opts) {
        // create container if not given
        $container = (!opts.container) ? $('<div></div>') : (opts.container instanceof jQuery) ? opts.container : $(opts.container);

        if (opts.inWindow && !opts.container) {
            setContainerToWindowSize();
        }

        if (opts.toParent && !opts.container) {
            setContainerToParentSize();
        }

        if ($obj.parent().selector != $container.selector) {
            $obj.appendTo($container);
        }
    }

    // add styles to center $obj
    function setStyles() {
        var elObj = {
                'left': {
                    'obj': $obj.outerWidth(),
                    'container': $container.outerWidth()
                },
                'top': {
                    'obj': $obj.outerHeight(),
                    'container': $container.outerHeight()
                }
            },
            pos;

        $obj.css('position', 'absolute');

        $.each(elObj, function (key, value) {
            pos = Math.round((value.container - value.obj) / 2) + 'px';
            $obj.css(key, pos);
        });
    }

    $.fn.center = function (options) {
        var opts = $.extend({}, $.fn.center.defaults, options);
        $obj = this;
        setContainer(opts);
        setStyles();
        return $obj;
    };

    $.fn.center.defaults = {
        'container': false,
        'inWindow': false,
        'toParent': false
    };

})(jQuery);
