var lat=-7.2337;
var lon=-39.3178;
var zoom= 13;
var map;

function init(){
    map = new OpenLayers.Map ("map");

    map.addControl(new OpenLayers.Control.LayerSwitcher());

    map.addLayer(new OpenLayers.Layer.OSM()); //OSM base map

    var lonLat = new OpenLayers.LonLat(lon, lat).transform(new OpenLayers.Projection("EPSG:4326"), new OpenLayers.Projection("EPSG:900913"));

    map.setCenter (lonLat, zoom);

    //Initialise the vector layer using OpenLayers.Format.OSM
    var layer = new OpenLayers.Layer.Vector("Juazeiro do Norte", {
        strategies: [new OpenLayers.Strategy.Fixed()],
        protocol: new OpenLayers.Protocol.HTTP({
            url: "/www/js/juazeiroDoNorte.osm",   //<-- relative or absolute URL to your .osm file
            format: new OpenLayers.Format.OSM()
        }),
        projection: new OpenLayers.Projection("EPSG:4326")
    });

    map.addLayers([layer]);
}