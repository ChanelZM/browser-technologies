# The ```<meter>``` tag
## What's that?
> The meter element represents a scalar measurement within a known range, or a fractional value; for example disk usage, the relevance of a query result, or the fraction of a voting population to have selected a particular candidate. This is also known as a gauge.(1).

The meter element is basically a bar which indicates a fraction of something and **not** the progress of something (if you want to use an element for progress use ```<progress>```).

## Browser support
![Picture of the website Can I Use which indicates browser support.](https://github.com/ChanelZM/browser-technologies/blob/master/Week2/HTML_meter/img/CanIUse_meter.png)

## Syntax
```html
<meter max="1.0" min="0.1" value="0.6" high="0.8" low="0.4" optimum="0.5"></meter>
```

Meter has a start and an end tag. We could use this to put fallbacks between these tags (1).

- ```html max="1.0"``` tells us what the maximum number can be.
- ```min="0.1"``` tells us what the minimum number can be.
- ```value="0.6"``` tells us what the current value is.
- ```high="0.8"``` tells us the value that's actually too high but still acceptable
- ```low="0.4"``` tells us the value that's actually too low but still acceptable
- ```optimum="0.5"``` tells us the optimum value of the bar.(1)

## About the demo and fallbacks
[DEMO](https://chanelzm.github.io/browser-technologies/Week2/)

In the demo I used a ```<div>``` and ```<span>``` inside ```<meter>```. If the browser supports ```<meter>``` it will ignore what's inside of it. If the browser doesn't know ```<meter>``` it will ignore the tag and use what's inside of the tag.

*Pro:* No JavaScript fallbacks needed.
*Con:* It's pretty dirty and not really semantic

## Sources
1. What WG. (March 23, 2017). *The meter element*. Source: https://html.spec.whatwg.org/multipage/forms.html#the-meter-element
2. Parashar, P. (November 26, 2013). *The HTML5 meter Element*. Source: https://css-tricks.com/html5-meter-element/