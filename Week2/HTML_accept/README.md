# The ```accept``` attribute
## What's that?
The accept attributes indicates which files may be uploaded (1). If you want to choose a file, the finder will be opened and formats that are not supported will be disabled. The accept attribute is not for validation but to simple help the user to choose the right format.

## Browser support
![Picture of the website Can I Use which indicates browser support.](https://github.com/ChanelZM/browser-technologies/blob/master/Week2/HTML_accept/CanIUse_accept.png)

## Syntax
```html
<input type="file" accept="image/*" >
```

In the ```accept=""``` you tell which files are allowed to be uploaded. 
```accept="image/"``` tells us that only an image can be uploaded.
```accept="audio/"``` tells us that only an audio file can be uploaded,
```accept="video/"``` tells us that only a video file can be uploaded(1).

After the slash comes the format of your picking.

You can also use extension formats like ```accept=".png .jpg .svg"```.

## About the demo and fallbacks
[DEMO](https://chanelzm.github.io/browser-technologies/Week2/HTML_accept)

When you use ```accept=""``` browsers that support it will disable the files that don't match with the value. Browsers that don't support ```accept=""``` will simply ignore the attribute.

As a client-side fallback I used a little JavaScript to give the user some feedback on the file they try to upload. When JavaScript is enabled it will add a ```<p>``` to the body which contains "This is not a PNG or JPG file" if it's not a JPG/PNG or "Superb!" when it **is**.

When JS is turned off and you're using Edge, you won't get the feedback from JS and you can probably choose every file you'd like. So everytime you want to validate the file, you always have to check server side.

## Sources
1. What WG. (March 23, 2017). *File Upload State*. Source: https://html.spec.whatwg.org/multipage/forms.html#file-upload-state-(type=file)