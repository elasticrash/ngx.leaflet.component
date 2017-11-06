Change Log

## 1.4.1
* Angular updated to 5.0
* Fixed empty popups on all elements
* Changlelog was moved here
* Changes on package.json to avoid certain webpack error
* Live website with some examples [here](https://elasticrash.github.io/Angular.io.MapViewer/app/)

## 1.4.0
* Changes for depended type geojson
* Css bug fixes
* updates on tests

## 1.3.2
* Angular updated to version 4.0.0
* Project was renamed to ngx.leaflet.components (for obvious reasons) and previous one got deprecated
* Coordinates now are automatically get re-projected, except for (wgs84 and 3857) so when using a custom crs, you need to pass, on the components, the coordinates associated with that particular crs. Automatic reprojection to wgs84 works on all components except ImageOverlay.
* Bug Fixes
* Components now accept x,y as inputs as well as lat lngs

## 1.3.1
* Angular updated to 2.4.7
* Circle Marker Element Added
* Bug fixes

## 1.3.0
* Polyline, Polygon, Circle and Marker now implement an ng-content pop up strategy
* Increased Webpack compatibility (seems to work fine now)
* Marker layer is no longer slow (it should work fine even with nearly 1000 markers)
* Bug fixes

## 1.2.6
* Bug fixes
* Layers have attributions 
* Map has optional maxBounds

## 1.2.5
* Scale, Zoom and Attribution are different components
* Coverage reports for tests
* Improved Webpack support

## 1.2.4
* ImageOverlay support
* GeoJson Layer support
* CRS support for different coordinate systems (Proj4Leaflet is not working for leaflet 1.0.x though you need to write your own custom projection, I am working on an example)
* Fixed a bug that didn't display a wms layer when set as basemap
* Stopped using typings, switched to @types
* Unit testing for more stable releases
* Upgraded to typescript 2.14 and Angular 2.41

## 1.2.3
* Fixed a bug that didn't allow the usage of polygons in a multiple map per page set up

## 1.2.2
* Angular updated to 2.3.0
* Bug fixes
* Polygon element now supports holes
* Polygon element can now be dynamically updated

## 1.2.1
* Code was optimised, now everything is much faster
* Layer Control can now be dynamically updated
* polyline element now can be dynamically updated (able to create animated elements). Soon more elements will follow.

## 1.2.0
* Added popup element 

## 1.1.4
* Choose whether a layer should be basemap or overlay on layerControl
* Add names for the layers or groups on the layerControl

## 1.1.3
* Custom marker icon

## 1.1.2
* Multiple maps support
* mouseover and onclick popup's for marker and all vector elements 

## 1.1.1
* css had top:64px now it has 0px so the map can take the whole available space
* Added polygon element
* Added polyline element 

## 1.1.0 
* Error handling for circle-element
* Error handling for marker-element
* Added layer groups