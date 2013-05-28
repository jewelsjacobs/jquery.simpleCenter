## Do not use this plugin!
jQuery UI already has a [position()](http://api.jqueryui.com/position/) function that centers perfectly.

# Simple Center jQuery Plugin

[![Build Status](https://travis-ci.org/jewelsjacobs/jquery.simpleCenter.png)](https://travis-ci.org/jewelsjacobs/jquery.simpleCenter)

Simple jQuery plugin to both horizontally and vertically center an element within another element.

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/jewelsjacobs/jquery.simpleCenter/master/dist/jquery.simpleCenter.min.js
[max]: https://raw.github.com/jewelsjacobs/jquery.simpleCenter/master/dist/jquery.simpleCenter.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.simpleCenter.min.js"></script>
```

## Documentation

This plugin has the following options:
container - selector || false default is false
Specify the selector of the containing element.  If no containing element, (ie. just center to parent or window)
this is false.
inWindow - true || false default is false
Center to browser window
toParent - true || false default if false
Center to parent


### How to use
#### HTML
```html
<div id="container">
  <div id="centered"></div>
</div>
```

#### JavaScript
```javascript
    $('#centered').center({
      'container': '#container',
      'inWindow': false,
      'toParent': false
    });
```

## Examples
[Demo jsfiddle](http://jsfiddle.net/jewelsjacobs/U6JBC/)
