import { appGetFilteredPhotos, appGetFilterValue } from '../../selectors';
import { appFilterPhotos, appGetData } from '../../actions';
import withReduxData from '../../hoc/withReduxData';
import FlickrPage from '../../components/FlickrPage';

const mapStateToProps = state => ({
  photos: appGetFilteredPhotos(state),
  filterValue: appGetFilterValue(state)
});

const mapDispatchToProps = dispatch => {
  return {
    appGetData() {
      dispatch(appGetData());
    },
    filterPhotos(value) {
      dispatch(appFilterPhotos(value));
    }
  };
};

export default withReduxData(mapStateToProps, mapDispatchToProps)(FlickrPage);
