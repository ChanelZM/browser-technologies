# JS Arrow Functions
## What's that?
Arrow functions are pretty simple. They are a short version of a regular unnamed function (2). You don't need the word ```function``` anymore to declare a function and ```return``` that tells us what to give back. In very short versions you don't even need ```{}``` and ```()```

## Browser support
![Picture of the website Can I Use which indicates browser support.](https://github.com/ChanelZM/browser-technologies/blob/master/Week2/JS_promises/CanIUse_arrow.png)

## Syntax
"Long" version
```javascript
(par) => {doSomething};
```
Short version
```javascript
par => doSomething;
```

## About the demo and fallbacks
**NOTE: IT DIDN'T WORK**
[DEMO](https://chanelzm.github.io/browser-technologies/Week2/JS_promises/)

```javascript
try {
  newMessage = ()=>{return 'Yaaasss, we executed an arrow function'};
  //Code to project message to screen
} catch(err){
  newMessage = function(){return "Your browser isn't cool enough for arrow functions"};
  //Code to project message to screen
}
```
I use try and catch to detect if a feature works. When it does, it executes the function and the text on screen says "Yaaasss, we executed an arrow function". If the browser doesn't support the arrow function then it would go to catch and use a regular function (at least that was the idea) to add the text "Your browser isn't cool enough for arrow functions" to the screen.

In theory I thought this would work but in reality it doesn't. I talked to my teacher about it and he told me that before running the script the browser wants to parse the script. If it can't because it doesn't know some lines of code, the script just won't work. So there isn't really a fallback for arrow functions and if there is, it's probably a very dirty fallback which takes a lot of time to make and completely misses the point of DRY coding.

## Source
1. Walsh, D. (May 7, 2015). *ES6: Features By Testing*. Source: https://davidwalsh.name/es6-features-testing
2. Gorbatchev, A. (September 21, 2015). *An Introduction to JavaScript ES6 Arrow Functions*. Source: https://strongloop.com/strongblog/an-introduction-to-javascript-es6-arrow-functions/
