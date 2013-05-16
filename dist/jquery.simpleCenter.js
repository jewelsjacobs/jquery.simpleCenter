/*! Simple Center jQuery Plugin - v0.1.0 - 2013-05-16
* https://github.com/jewelsjacobs/jquery.simpleCenter
*
* Simple jQuery plugin to center an element within another element.
* Takes the selector of the containing element as an argument.
*
* Copyright (c) 2013 Julia Jacobs; Licensed MIT */
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

    function stripCssToNumber(css) {
        return parseInt(css.replace('px', ''), 10);
    }

    function allowForBodyPadding() {
        // Select the body element.
        var bodyElement = $('body');

        // Get the padding
        var widthPadding = stripCssToNumber(bodyElement.css('padding-left')) + stripCssToNumber(bodyElement.css('padding-right'));
        var heightPadding = stripCssToNumber(bodyElement.css('padding-top')) + stripCssToNumber(bodyElement.css('padding-bottom'));

        // Get the margins
        var widthMargin = stripCssToNumber(bodyElement.css('margin-left')) + stripCssToNumber(bodyElement.css('margin-right'));
        var heightMargin = stripCssToNumber(bodyElement.css('margin-top')) + stripCssToNumber(bodyElement.css('margin-bottom'));

        var extraWidth = widthPadding + widthMargin;
        var extraHeight = heightPadding + heightMargin;

        return {
            'extraWidth': extraWidth,
            'extraHeight': extraHeight
        };
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

        if ($obj.parent().selector !== $container.selector) {
            $obj.appendTo($container);
        }
    }

    // add styles to center $obj
    function setStyles() {

        var bodyParams = allowForBodyPadding();

        var elObj = {
                'left': {
                    'obj': $obj.outerWidth(),
                    'container': $container.outerWidth() + bodyParams.extraWidth
                },
                'top': {
                    'obj': $obj.outerHeight(),
                    'container': $container.outerHeight() + bodyParams.extraHeight
                }
            },
            pos;

        $obj.css('position', 'absolute');

        $.each(elObj, function (key, value) {
            pos = Math.round((value.container - value.obj) / 2);
            $obj.css(key, pos + 'px');
        });
    }

    $.fn.center = function (options) {
        var opts = (options) ? options : $.fn.center.defaults;
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