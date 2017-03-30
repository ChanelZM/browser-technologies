# JS Promises
## What's that?
Promises represent a result of an asynchronous operation (2). A promise can be fulfilled or rejected but when that occurs it becomes immutable thus it can never change again (1). A promise can also have third state: pending, this is the initial state of the promise.

So basically promises are asynchronous functions, it will not block other code, that handle succes/failure.

## Browser support
![Picture of the website Can I Use which indicates browser support.](https://github.com/ChanelZM/browser-technologies/blob/master/Week2/JS_promises/CanIUse_promises.png)

## Syntax
```javascript
var thisIsAPromise = new Promise(function(resolve, reject){
  typeof 'test' == string ? resolve(): reject();
});
```
First you create a new Promise and inside of it create a function with two arguments. Inside of the function make a condition. If it's true call the first argument, else call the second argument.

```javascript
thisIsAPromise.then(function(){
  console.log('true!');
}).catch(function(){
  console.log('false!');
});
```
Then you specify what you want to do. If the promise returns true then run this. If the promise returns false then run something else.

## About the demo and fallbacks
[DEMO](https://chanelzm.github.io/browser-technologies/Week2/JS_promises/)

I wrote an if/else statement to check if the browser supports the feature promises:
```javascript
if(typeof Promise !== "undefined"){

} else {

}
```
Inside of the if statement I wrote a promise, but in a pretty hacky way. Catch is a reserved word, so even when the condition is not true the browser will still look inside of the statement if there's a reserved word. So instead of:
```javascript
.catch()
```
I used:
```javascript
["catch"]
```
The promise still works and by changing it this way the browser will proceed to the else statement if promises are not supported. It's very dirty and may cause complications in more complex promises. My teacher told me to use a separate script for very old browsers in future projects.

## Sources
1. Lindsay, F. (no date). *Promises*. Source: https://www.promisejs.org/
2. Spring. (no date). *Understanding Javascript Promises*. Source: https://spring.io/understanding/javascript-promises
