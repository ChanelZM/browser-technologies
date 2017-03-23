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

## About the demo and fallbacks
[DEMO](https://chanelzm.github.io/browser-technologies/Week2/HTML_accept)

## Sources
1. What WG. (March 23, 2017). *File Upload State*. Source: https://html.spec.whatwg.org/multipage/forms.html#file-upload-state-(type=file)