import "./style.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import GeoJSON from "ol/format/GeoJSON.js";
import VectorLayer from "ol/layer/Vector.js";
import VectorSource from "ol/source/Vector.js";

const vectorLayer = new VectorLayer({
  source: new VectorSource({
    url: "https://openlayers.org/data/vector/ecoregions.json",
    format: new GeoJSON(),
  }),
  opacity: 0.2,
  style: {
    "fill-color": ["string", ["get", "COLOR"], "#eee"],
  },
});

const basemap = new TileLayer({
  source: new OSM(),
});

const map = new Map({
  layers: [basemap],
  target: "map",
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
});

map.addLayer(vectorLayer);
