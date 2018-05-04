export const FLICKR_KEY = process.env.REACT_APP_FLICKR_KEY;
export const FLICKR_API = `https://www.flickr.com/services/rest/?method=flickr.photos.search&format=json&api_key=${FLICKR_KEY}&lat=51.5074&lon=0.1278&nojsoncallback=true`;
export const PLACES_API = 'https://api.tfl.gov.uk/Place/search/?name=colindale'
