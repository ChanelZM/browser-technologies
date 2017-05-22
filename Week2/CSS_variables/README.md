# CSS Variables
## What's that?
CSS variables work simular to JavaScript variables. You use a name to reference to a set value. Further on in your stylesheet you call the variable again to get the value. Very helpful when you don't want to repeat yourself. It also saves you (well, me personally) some time, because you don't know all the hex colors you use by heart and then you have to scroll back and find the hexcolor. Variables that have names people easily remember you won't have that problem.

## Browser support
![Picture of the website Can I Use which indicates browser support.](https://github.com/ChanelZM/browser-technologies/blob/master/Week2/CSS_variables/CanIUse_variables.png)

## Syntax
```
:root {
    --beautiful-rose: #b62f63
}

element {
    background-color: var(--beautiful-rose);
}
```

First you declare the variable by setting a name and after the dots the value of that variable. Later on you simple call the variable by their name to use the value of it. Pretty simple, right?

*Pro:*DRY
*Pro:*Makes the developers live easier (if every browser supported it).
*Con:*Backwards compatibilty is a big problem. CSS processors of the browser will just ignore the variable because it doesn't know what to do with it, which means that the value will not be added where the variable is being called (2).

## About the demo and fallbacks
[DEMO](https://chanelzm.github.io/browser-technologies/Week2/CSS_variables/)

When the browser doesn't support variables it falls back to the usual hexcode, which looks like this:
```CSS
blockquote {
    border-bottom: 3px solid #2c3c65;
    border-top: 3px solid #2c3c65;
    border-bottom: 3px solid var(--beautiful-blue);
    border-top: 3px solid var(--beautiful-blue);
}
h1 {
    color: #2c3c65;
    color: var(--beautiful-blue);
}
```

The fallback is very dirty and completely misses the point of CSS Variables. I guess we'll just have to wait untill all browsers support CSS Variables.

## Sources
1. Mozilla Developer Network. (March 14, 2017). *Using CSS Variables*. Source: https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables
2. Gustafson, A. (no date). *CSS Variables are a Bad Idea*. Source: https://www.aaron-gustafson.com/notebook/css-variables-are-a-bad-idea/