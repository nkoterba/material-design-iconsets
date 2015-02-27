# Angular Material Design Icon Sets #

I posted this [issue](https://github.com/angular/material/issues/1514) on the Angular Material
Design webpage asking if they would include icon-sets
for the standard [Google Material Design icons](https://github.com/google/material-design-icons).

While waiting for a solution, I instead created the necessary icon sets using the source svg from:
[Google Material Design icons](https://github.com/google/material-design-icons).

As such, I have included their license in this repo.

These icon sets may be used with the [Angular Material Design](https://material.angularjs.org/#/)
 project.
 
 For a quick way to see which icons are available and which set they belong to, I highly recommend using [klarsys' demo](https://klarsys.github.io/angular-material-icons/) as a reference.

In particular, they are in the required format to use with Angular Material Design's
[$mdIconProvider]
(https://material.angularjs.org/#/api/material.components.icon/service/$mdIconProvider).

## Usage ##
```javascript
angular.module('myApp', [])
.config(['$mdIconProvider', function($mdIconProvider) {
			$mdIconProvider
				.iconSet('action', '../styles/images/icons/material-design/action-icons.svg', 24)
				.iconSet('alert', '../styles/images/icons/material-design/alert-icons.svg', 24)
				.iconSet('av', '../styles/images/icons/material-design/av-icons.svg', 24)
				.iconSet('communication', '../styles/images/icons/material-design/communication-icons.svg', 24)
				.iconSet('content', '../styles/images/icons/material-design/content-icons.svg', 24)
				.iconSet('device', '../styles/images/icons/material-design/device-icons.svg', 24)
				.iconSet('editor', '../styles/images/icons/material-design/editor-icons.svg', 24)
				.iconSet('file', '../styles/images/icons/material-design/file-icons.svg', 24)
				.iconSet('hardware', '../styles/images/icons/material-design/hardware-icons.svg', 24)
				.iconSet('icons', '../styles/images/icons/material-design/icons-icons.svg', 24)
				.iconSet('image', '../styles/images/icons/material-design/image-icons.svg', 24)
				.iconSet('maps', '../styles/images/icons/material-design/maps-icons.svg', 24)
				.iconSet('navigation', '../styles/images/icons/material-design/navigation-icons.svg', 24)
				.iconSet('notification', '../styles/images/icons/material-design/notification-icons.svg', 24)
				.iconSet('social', '../styles/images/icons/material-design/social-icons.svg', 24)
				.iconSet('toggle', '../styles/images/icons/material-design/toggle-icons.svg', 24)
		}])
```

Now you can use them in your html quite easily:
```html
	<md-button ng-click="vm.showNewDialog($event)">
		<md-icon md-svg-icon="editor:attach_file" style="color: yellow;"></md-icon>
		<span>New</span>
	</md-button>
```

## Bugs/Issues ##

**UPDATED: Feb 27, 2015** : The issues I was encountering were due to how I was using browserify and enabling certain parameters.  I'm now able to correctly color and size my iconset images using CSS styling.  Ignore the info below.


For whatever reason, when I try to set the `width` and `height` of the icon in CSS does **not**
change the icon size.

I'm not sure if this is a limitation of using the iconset feature of Angular Material Design or a
 general issue/bug with Material Design `md-icon` directive, or the way I'm trying to style them.

**md-icon without width or height set**

![alt without](https://github.com/nkoterba/material-design-iconsets/blob/master/issues/nocss.png)

**Now setting the width and height via css**
```html
	<md-button ng-click="vm.showNewDialog($event)">
		<md-icon md-svg-icon="editor:attach_file"
			style="color: yellow; width: 10px; height:10px"></md-icon>
		<span>New</span>
	</md-button>
```

**md-icon with css-set width and height -- NOT CORRECTLY SIZING**

![alt without](https://github.com/nkoterba/material-design-iconsets/blob/master/issues/withcss.png)

 ![alt without](https://github.com/nkoterba/material-design-iconsets/blob/master/issues/inspector.png)

Although I've added width and height CSS properties, the svg graphic remains at 24px 24px.
Instead the md-icon element is resized correctly and the svg image is clipped.



