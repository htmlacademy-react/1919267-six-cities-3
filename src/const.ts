import { TSize } from './types/size';

const Settings = {
  PLACES_COUNT: 5,
} as const;

const BookmarkSize: TSize = {
  small: { width: '18', height: '19' },
  large: { width: '31', height: '33' },
} as const;

const ImageSize: TSize = {
  small: { width: '150', height: '110' },
  large: { width: '260', height: '200' },
} as const;

export { Settings, BookmarkSize, ImageSize };
