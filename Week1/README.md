# Assignment 1.1: Break the web
## Introduction
Today's internet brings a lot of features, tools, plugins and add-ons and create more possibilities to enhance user experience or press the user to doing what companies want you to do (for their own benefit).

But it also has a downside. Accessability can be reduced by these features or content can even be blocked.

The first assignment was to choose a couple of features, document what problems may occur when disabled and give a couple of examples were the whole website just breaks when this is the case.

## Investigated features

### JavaScript
![Javascript](https://github.com/ChanelZM/browser-technologies/blob/master/Week1/img/javascript.png)

In 1989, Tim Berners Lee created HTML for the purpose to create and share documents on the web that everybody would have access to (1). Almost thirty years later two languages were added to that: CSS and JavaScript. Javascript was created to make the web more dynamic.

#### Problems
##### Accessability
By the creation of JavaScript, people lost sight a little of what the purpose was of the web: information that was accessable worldwide (Don't get me wrong, I love JavaScript). Why? Because people started to use JavaScript to change the content (content should be HTML's job) and when JavaScript didn't work for some reason, some parts of the content wasn't available to the user, thus reducing accessability. Or on older browsers and shitty network, your page probably won't work at all.

Accessability is the greatest problem when JavaScript doesn't work properly.

##### Rendering
Different browsers use different rendering engines and this may result in different rendering of JavaScript. Your website will not be consistent in functionality and interface across all platforms (3). 

#### How to Test
##### Browser
In **Chrome** there is an option to turn JavaScript off completely. You can do this by going to *Settings* > *Show advanced settings*. More information will slide in then click *Privacy* > *Content settings*. Go to JavaScript heading and click *Do not allow any site to run JavaScript* (5).

When you use **Firefox**, type in your address bar *about:config*, you will get a warning page. Click on the button *I'll be careful, I promise*. In the search bar search for *javascript.enabled* and change the value to false (6). 

If you use **Safari**, go to the topbar of your mac and click *Safari*, then click *Preferences* > *Security*. Got to the second section named *Web content* and there will be an option *Enable JavaScript*. Uncheck this (7).

There also plugins and add-ons to disable JavaScript such as [Toggle JS](https://addons.mozilla.org/nl/firefox/addon/toggle-js/).

#### Examples
##### Pinterest
![Pinterest](https://github.com/ChanelZM/browser-technologies/blob/master/Week1/img/pinterest.png)

Pinterest doesn't do well when JavaScript is off. I usually log in with my Facebook acount but with JS off that's no longer possible. Okay, it's not really fair because it's such a huge website. But still, frequently visited websites should be the most accessable.

##### Allerhande
![Allerhande](https://github.com/ChanelZM/browser-technologies/blob/master/Week1/img/allerhande.png)

Allerhande (a dutch website for recipes) doesn't load the pictures of the dishes at all. You can still few the recipes but you will never know what it looks like untill you cook it yourself.

#### Possible solutions
##### No JavaScript
You're probably thinking "are you crazy!?". No, I'm not, because it **is** possible. 

A lot of things can be done with CSS such as transitions and animations. [You Might Not Need JS](http://youmightnotneedjs.com/) gives a lot of examples (the title gives it away) where JavaScript is not needed.

Everything that is possible with JavaScript is possible with server sided scripting (4).

##### Website works without JavaScript
If ditching JavaScript is not an option for you, at least optimize your website so that it still works when JavaScript isn't.

###### Show content
Don't set parts of your website on hidden in HTML or CSS so that you can make them visible again with JavaScript. Turn it around.

Don't:
```html
<p hidden>This paragraph is hidden</p>
```

Do:
```html
<p>This paragraph is hidden</p>
```
```javascript
document.querySelector('p').hidden = true;
```

### Color
![Color](https://github.com/ChanelZM/browser-technologies/blob/master/Week1/img/color.jpg)

It's easy to forget that other people don't perceive color the same way you do. The same with screens, every computer renders colors differently. Choosing the right colors is very important to make things readable. As a designer or developer it's our job to keep these things in mind. 

#### Problems
##### Colorblindness and other things
For most of us distinguishing color isnt't a problem but about 7% of men and 0.4% of women are colorblind(2) and colorblindness is not the only "color seeing problem" a person can have. People that are colorblind can't distinguish particular color combinations. Some can't even see color at all, they just see black and white (8).

So to achieve accessability for them, getting the colors right is crucial.

##### Different screens
You expect that colors are viewed the same on every screen(9) and if you don't test on other (cheaper and older) screens, there is a high chance that contrast isn't great on every screen and some sections of your page won't be easy to read.

#### Tests
##### Contrast checker
[Contrast Checker](http://contrastchecker.com/) is a great way to check if your chosen color do well and are readable. On this website you can compare two colors: text color and backgroundcolor. The circles turn red when it can do better and green when it's okay.

##### Sim Daltonism
[Sim Daltonism](https://michelf.ca/projects/sim-daltonism/) is a color blindness simulator. It's a little window you can resize and put on top of a page to let you experience how a color blind person perceives the colors on your webpage.

#### Examples

#### Possible solutions
##### Simulators and contrast checkers
When designing or, when you're not the designer, developing, check the chosen colors with the contrast checkers and the simulators to know if your design is working for color blind people.

##### Platform testing
Don't just use your pretty MacBook to design, because we all know that the colors are amazing on Apple. But a lot of people don't own such expensive things so test several computers to check if the colors still work.

##### User testing
The best thing you can do to make your design work for people who are colorblind is to simply test your website on them. Find them, invite them and watch if they're struggling.

###### Sources
1. Addison Wesley Longman. (1998). *Chapter 2: A History of HTML*. Source: https://www.w3.org/People/Raggett/book4/ch02.html

2. wiseGeek. (no date). *What is the Ratio of Colorblindness in Men Compared to Women?*. Source: http://www.wisegeek.com/what-is-the-ratio-of-colorblindness-in-men-compared-to-women.htm

3. Jscripters. (no date). *Javascript: Advantages and Disadvantages*. Source: http://www.jscripters.com/javascript-advantages-and-disadvantages/

4. Schee, van der, M. (July 4, 2013). *10 Very Good Reasons to stop using JavaScript*. Source: https://www.leaseweb.com/labs/2013/07/10-very-good-reasons-to-stop-using-javascript/

5. Matthew, H. (September 10, 2016). *How to turn JavaScript off and on*. Source: https://productforums.google.com/forum/#!topic/chrome/BYOQskiuGU0

6. LK. (no date). *Disable JavaScript in Firefox*. Source: https://techjourney.net/disable-javascript-in-firefox/

7. Orgera, S. (March 13, 2017). *How to Disable JavaScript in the Safari Web Browser*. Source: https://www.lifewire.com/disable-javascript-in-safari-446577

8. Colour Blind Awareness. (no date). *Types of Colour Blindness*. Source: http://www.colourblindawareness.org/colour-blindness/types-of-colour-blindness/

9. WebdesignerDepot Staff. (April 26, 2010). *How to Calibrate color for the Web*. Source: http://www.webdesignerdepot.com/2010/04/how-to-calibrate-color-for-the-web/