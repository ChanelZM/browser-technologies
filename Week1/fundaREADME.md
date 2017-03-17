# Assignment 1.2: Funda Refactor
## Introduction
## The 8* commandments of Progressive Enhancement
**There are more, but these are the ones we focused on.*
### 1. You shall not depend on *pictures*
Pictures have (most of the time) the biggest filesizes and that's why loading them can take quite some time. And when we're browsing the web, we want to do it fast and we don't want to have the feeling that it's taking forever to load. So optimizing images is crucial. But some people have images turned off as default setting so that it saves them MB's. 

It's our responsibility to create a website that is still usable when images, for some reason, are not displayed. And when they are visible, that they do not interfere too much with the loading time of the content.

##### Ways you can optimize:
- Add an ```alt=""``` to your ```<img />``` so when the picture doesn't load, people still know what was on the picture.
- Paste the ```<img />``` into a ```<picture>``` and use different sizes for different screens.
- Compress the excisting images. Maybe the filesize will get smaller without losing quality.
- Use fileformat WEBP for your pictures, but do you use fallbacks for this one, since not every browser knows what to do with it.

### 2. You shall use fallbacks for *custom fonts*
There was a period of time where developers were jumping up and down for custom fonts. They made things like icon fonts and it was great for them until they found out that custom fonts can be blocked by browsers or even content blockers. It's okay to use them but I strongly recommend using a fallback for when things go south.

##### Ways to fallback:
- If you're are using an icon font, just change into SVG's or even PNG's. No costum font needed. You can also place all the icons into one image and using sprite only show the right icons in the given size.
- Make use of font-stacking with font-family. When your first font doesn't load, there is always the second (or third or fourth). Great article about font-stacking [here](https://www.smashingmagazine.com/2009/09/complete-guide-to-css-font-stacks/).
- Testing, testing and more testing. Always test if different browsers and operating systems to check if the fonts you defined are working.

### 3. You're website shall work without *JavaScript*

### 4. You shall use the right contrast with *color*

### 5. You shall take into account that *broadband internet* is rare

### 6. You shall not depend on *cookies*

### 7. You shall not depend on *localStorage*

### 8. You're website shall work without usage of a *Mouse/Trackpad*

## TO DO list Funda
With the new information I got, it's time to 'refactor' the code I made for Funda, and make a TO DO list of the features that could be enhanced even more.

### Font-stacking