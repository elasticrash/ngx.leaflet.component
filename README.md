# ngx.leaflet.component  ![alt text](https://circleci.com/gh/elasticrash/ngx.leaflet.component.png?circle-token=8ce7131b0ea08b0ce9299e456bd9291dd3cf1ba4 "Build Status") 

## Native Angular Components designed to be used directly on the templates without much customization

[website with examples](https://elasticrash.github.io/Angular.io.MapViewer/app/)

Old Examples
* [base example](https://elasticrash.github.io/Angular.io.MapViewer/example/)
* [multi-map example ](https://elasticrash.github.io/Angular.io.MapViewer/example/#/mm-map)
* [star map using L.CRS.Simple ](https://elasticrash.github.io/Angular.io.MapViewer/example/#/simple)
* [custom CRS using leaflet ](https://elasticrash.github.io/Angular.io.MapViewer/example/#/prj)
* [a genetic like algorithm trying to solve the Travelling salesman problem ](https://elasticrash.github.io/Angular.io.MapViewer/example/#/random)

Examples sources can be found in the following github repository [here](https://github.com/elasticrash/Angular.io.MapViewer)


Install
```terminal
npm install ngx.leaflet.components
```

USE

```javascript
import { ngxLeafletModule } from 'ngx.leaflet.components/ngx.leaflet.module';

@NgModule({
  imports: [ngxLeafletModule],
})
```


Leaflet stylesheets are not included automatically for the time, so you need to add it yourself

for usage and basic examples check the wiki

https://github.com/elasticrash/ngx.leaflet.component/wiki


If anyone wants to help in any way feel free to do a fork and a pull request
