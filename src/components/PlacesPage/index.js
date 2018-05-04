import React from 'react';
import PropTypes from 'prop-types';

const PlacesPage = ({ appGetData, places }) => {
  if (places.length < 1) {
    appGetData();
  }
  return (
    <div>
      {places &&
        places.map(place => {
          return (
            <div key={place.id}>
              <h1>{place.commonName}</h1>
              <p>Type: {place.placeType}</p>
            </div>
          );
        })}
    </div>
  );
};

PlacesPage.propTypes = {
  appGetData: PropTypes.func.isRequired,
  places: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired, placeType: PropTypes.placeType })
  )
};

export default PlacesPage;
