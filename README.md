# Angular2.leaflet.component

my own attemp on creating an Angular 2 leaflet v1.x component

13/12/2016
Live examples
* base example https://elasticrash.github.io/Angular.io.MapViewer/example/
* multi-map example https://elasticrash.github.io/Angular.io.MapViewer/example/#/mm-map
* star map using L.CRS.Simple https://elasticrash.github.io/Angular.io.MapViewer/example/#/simple
* a simple genetic algorithm trying to solve the Travelling salesman problem https://elasticrash.github.io/Angular.io.MapViewer/example/#/random

22/10/2016

Bare in mind that I just started developing this and I don't have much time to plan things ahead
mainly due to not enough free time, so I am making changes as I go


Install
```terminal
npm install angular2.leaflet.components
```

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
import { CandTLeafletService } from 'angular2.leaflet.components';
import { AppComponent } from './components/app.component';

@NgModule({
  imports: [... ],
  declarations: [..., CandTLeafletComponent],
  providers: [CandTLeafletService],
  bootstrap: [AppComponent]
})
```

Leaflet stylesheet is not included, so you need to add it yourself

for usage check the wiki

https://github.com/elasticrash/Angular2.leaflet.component/wiki

you can see an example on the following repository
https://github.com/elasticrash/Angular.io.MapViewer on develop branch


If anyone wants to help in any way feel free to do a fork and a pull request
