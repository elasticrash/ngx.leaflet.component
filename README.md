# Angular2.leaflet.component

my own attemp on creating an Angular 2 leaflet v1.x component

22/10/2016
Bare in mind that I just started developing this and I don't have much time to plan things ahead
mainly due to not enough free time, so I am making changes as I go

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
		<layer-element [slippyLayer]="'http://{s}.tile.osm.org/{z}/{x}/{y}.png'"></layer-element>
    	<layer-element 
		[wmsLayer]="'http://sedac.ciesin.columbia.edu/geoserver/wms'"
		[name]="'gpw-v3:gpw-v3-population-density_2000'"
		[opacity]=0.3></layer-element>
	</leaf-element>Ï
    </leaf-element>
```

I've made some changes since yesterday
layer-element now supports two different type of layers

slippyLayer which are the tileLayers with the zoom/x/y url structure
wmsLayers which need the url and a name, also for wms you can even set the opacity from the template (like the example above)

you can see an example on the following repository https://github.com/elasticrash/Angular.io.MapViewer on develop branch
