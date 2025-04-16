import leaflet from 'leaflet';
import { RefObject, useEffect, useRef, useState } from 'react';
import { City } from '../types/city';

type UseMapProps = {
  city: City;
  mapRef: RefObject<HTMLDivElement>;
};

const TILE_LAYER_URL =
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';
const TILE_LAYER_ATTRIBUTE =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';

const useMap = ({ city, mapRef }: UseMapProps) => {
  const [map, setMap] = useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    map?.flyTo(
      [city.location.latitude, city.location.longitude],
      city.location.zoom,
      { duration: 1, easeLinearity: 1 }
    );
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });

      leaflet
        .tileLayer(TILE_LAYER_URL, {
          attribution: TILE_LAYER_ATTRIBUTE,
        })
        .addTo(instance);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city, map]);

  return map;
};

export default useMap;
