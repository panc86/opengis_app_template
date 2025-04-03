import { Map, View } from "ol";
import LayerGroup from "ol/layer/Group";
import LayerImage from "ol/layer/Image";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import SourceImageWMS from "ol/source/ImageWMS";

var map = new Map({
  target: "map",
  layers: [
    new TileLayer({
      source: new XYZ({
        url: "https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      }),
    }),
  ],
  view: new View({
    projection: "EPSG:4326",
    center: [56.0, 24.0],
    zoom: 8,
  }),
});

var overlays = new LayerGroup({
  title: "Overlays",
  layers: [
    new LayerImage({
      title: "test",
      source: new SourceImageWMS({
        url: "http://localhost:8080/geoserver/wms",
        params: { LAYERS: "AAM:buildings" },
        ratio: 1,
        serverType: "geoserver",
      }),
    }),
  ],
});
map.addLayer(overlays);
