import { useRef, useEffect } from 'react';
import leaflet, { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { City } from '../../types/city';
import { Offer } from '../../types/offer';
import useMap from '../../hooks/use-map';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';

type MapProps = {
  city: City;
  offers: Offer[];
  className: string;
  hoveredOfferId?: Offer['id'] | null;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({
  city,
  offers,
  className,
  hoveredOfferId,
}: MapProps): JSX.Element {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap({ city, mapRef });

  useEffect(() => {
    if (map) {
      const markerLayer = leaflet.layerGroup().addTo(map);

      offers.forEach((point) => {
        const marker = leaflet.marker(
          {
            lat: point.location.latitude,
            lng: point.location.longitude,
          },
          {
            icon:
              point.id === hoveredOfferId
                ? currentCustomIcon
                : defaultCustomIcon,
          }
        );

        marker.addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [city, map, hoveredOfferId, offers]);

  return (
    <section
      className={`${className} map`}
      style={{
        height: '100%',
        minHeight: '500px',
        width: '100%',
        maxWidth: '1144px',
        margin: '0 auto',
      }}
      ref={mapRef}
    />
  );
}

export default Map;
