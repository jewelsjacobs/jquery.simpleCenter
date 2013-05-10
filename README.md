jquery.simpleCenter
===================

Simple jquery plugin to center an element within another element. Takes the selector of the containing element as an
argument.

## How to use

###HTML
```html
<div id="container">
<div id="centered"></div>
</div>
```

###JavaScript
```javascript
$('#centered').center('#container');
```

## Build Dependencies

For developing jquery.simpleCenter.js you'll need:

- [Node.js](http://nodejs.org/)
- [Grunt](https://github.com/cowboy/grunt)
- [QUnit](http://qunitjs.com/)
- [PhantomJS](http://phantomjs.org/)

## How to Contribute

Fork this repo. Install all dependencies (node.js, grunt, phnatomjs). Run all tests
(`grunt qunit`). Run jslint (`grunt lint`). Make your changes. Run all tests and the linter again. Send a pull request.

## License

jquery.simpleCenter.js is under MIT license.

Copyright (c) 2013 Julia Jacobs

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
 persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


