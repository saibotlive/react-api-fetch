import { createSelector } from 'reselect';

export const appGetDataState = ({ app }) => app.data;
export const appGetPhotosState = ({ app }) => app.data.photos || { photo: [] };
export const appGetPlacesState = ({ app }) => app.data.places || [];
export const appGetFilterValue = ({ app }) => app.filterValue;
export const appGetFilterByType = ({ app }) => app.filterByType;

export const appGetFilteredPhotos = createSelector(
  [appGetPhotosState, appGetFilterValue],
  (photos, filterValue) => {
    return photos.photo
      .slice(0, filterValue.value)
      .map(photo => photo)
      .filter(
        photo =>
          photo.title
            .toLowerCase()
            .substr(0)
            .indexOf(filterValue.title) !== -1
      );
  }
);
