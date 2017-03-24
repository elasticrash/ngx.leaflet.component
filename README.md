# ngx.leaflet.component  ![alt text](https://circleci.com/gh/elasticrash/ngx.leaflet.component.png?circle-token=8ce7131b0ea08b0ce9299e456bd9291dd3cf1ba4 "Build Status") 

my own attemp on creating an Angular io leaflet v1.x component

Live examples
* base example https://elasticrash.github.io/Angular.io.MapViewer/example/
* multi-map example https://elasticrash.github.io/Angular.io.MapViewer/example/#/mm-map
* star map using L.CRS.Simple https://elasticrash.github.io/Angular.io.MapViewer/example/#/simple
* custom CRS using leaflet https://elasticrash.github.io/Angular.io.MapViewer/example/#/prj
* a simple genetic algorithm trying to solve the Travelling salesman problem https://elasticrash.github.io/Angular.io.MapViewer/example/#/random

all examples sources code can be found [here](https://github.com/elasticrash/Angular.io.MapViewer)

Bare in mind that I just started developing this and I don't have much time to plan things ahead
mainly due to not enough free time, so I am making changes as I go


Install
```terminal
npm install ngx.leaflet.components
```

in SystemJs use the following configuration

```javascript
    transpiler: 'typescript',
    map: {
        'ngx.leaflet.components': 'npm:ngx.leaflet.components',
    },
    packages: {
              'ngx.leaflet.components': {
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
import { CandTLeafletComponent  } from 'ngx.leaflet.components';
import { CandTLeafletService } from 'ngx.leaflet.components';
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

https://github.com/elasticrash/ngx.leaflet.component/wiki


If anyone wants to help in any way feel free to do a fork and a pull request
