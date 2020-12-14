# vue-friendly-iframe
> Vue js component for creating dynamic async iframes based on Aaron Peter's article: http://www.aaronpeters.nl/blog/iframe-loading-techniques-performance

[![npm version](https://badge.fury.io/js/vue-friendly-iframe.svg)](https://badge.fury.io/js/vue-friendly-iframe)

## Documentation
[https://officert.github.io/vue-friendly-iframe](https://officert.github.io/vue-friendly-iframe)

## Demo
[https://officert.github.io/vue-friendly-iframe](https://officert.github.io/vue-friendly-iframe)

## Requirements
* [Vue.js](http://vuejs.org/) (^v2.1.4)

## Installation

## Vue Support

Supports on Vue >= 2

## Installation and Usage

```javascript
npm install vue-friendly-iframe --save-dev
```

```javascript
import Vue from 'vue';
import VueFriendlyIframe from 'vue-friendly-iframe';

Vue.use(VueFriendlyIframe);
```

Add the component to your HTML:

```html
<vue-friendly-iframe :src="example1Form.src" @load="onLoad"></vue-friendly-iframe>
```

### Contributing

Pull requests are welcome, or open up an issue if you have ideas for additional functionality, new features or bugs.
