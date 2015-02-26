# Angular Material Design Icon Sets #

I posted this [issue](https://github.com/angular/material/issues/1514) on the Angular Material
Design webpage asking if they would include icon-sets
for the standard [Google Material Design icons](https://github.com/google/material-design-icons).

While waiting for a solution, I instead created the necessary icon sets using the source svg from:
[Google Material Design icons](https://github.com/google/material-design-icons).

As such, I have included their license in this repo.

These icon sets may be used with the [Angular Material Design](https://material.angularjs.org/#/)
 project.

In particular, they are in the required format to use with Angular Material Design's
[$mdIconProvider]
(https://material.angularjs.org/#/api/material.components.icon/service/$mdIconProvider).

To use:
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
									<md-icon md-svg-icon="editor:attach_file"
									         style="color: yellow;"></md-icon>
										<span>New</span>
								</md-button>
```

# BUGS #

For whatever reason,