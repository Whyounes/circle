# Circular charts

[![Circle](http://younesrafie.com/images/circle.png)](http://younesrafie.com)

Small JavaScript library that generates circular graphs.

##Usage

Include the JavaScript file in your HTML.

you can call the it with.

```
new Circle( {
    id: "circle",
    width: 10,
    radius: 60,
    text: "6.5",
    values: [{percent: 65, color: "#99C"}, {percent: 65, color: "#B7B7EB"}]
} );
```

where

* `id` - circular chart wrapper element.
* `radius` - the radius of the circle.
* `width` - the width of the circle (optional, default 10).
* `text` - the text to display at the centre of the circle (optional, default blank)
* `values` - an array of javascript objects containing a percentage and a color ``` { percentage: 27, color: "#B7B7EB" }```, the circle will always be completed with a white color.

##Browser support
    The library use the ```canvas``` element, you can check the support on [caniuse](http://caniuse.com/#search=canvas)

##Licence
    ```Circle.js``` is licensed under the terms of the MIT License.

##Inspired from
    * [SVG Circles](https://github.com/lugolabs/circles)
    * Treehouse use a chart to track points earned by students on different topics.
