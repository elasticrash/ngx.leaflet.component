# Angular2.leaflet.component

my own attemp on creating an Angular 2 leaflet v1.x component

The library doesn't do much yet but as of version 1.09 it actually works.

in SystemJs use the following configuration

```javascript
    transpiler: 'typescript',
    map: {
        'angular2.leaflet.components': 'npm:angular2.leaflet.components',
    },
    packages: {
              'angular2.leaflet.components': {
        main: './index',
        defaultExtension: 'js',
        meta: {
          "format": "register"
        }
      }
    },
    "ts": {
        "main": "plugin.js"
      },
      "typescript": {
        "main": "typescript.js",
        "meta": {
          "lib/typescript.js": {
            "exports": "ts"
          }
        }
      }
```

I haven't tested it with other transpilers save for typescript, thats why I am including it on the SystemJs config

then on you app module include this

```javascript
import { CandTLeafletComponent  } from 'angular2.leaflet.components';
import { AppComponent } from './components/app.component';

@NgModule({
  imports: [... ],
  declarations: [..., CandTLeafletComponent],
  bootstrap: [AppComponent]
})

```

Leaflet stylesheet is not included, so you need to add it yourself

usage
```html
<leaf-element>
		<layer-element [tileLayer]="'http://{s}.tile.osm.org/{z}/{x}/{y}.png'"></layer-element>
	</leaf-element>
 ```
 
 at the moment it only accepts tileLayers
