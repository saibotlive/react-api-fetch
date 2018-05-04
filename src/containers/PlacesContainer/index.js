import { appGetPlacesState } from '../../selectors';
import { appGetData } from '../../actions';
import withReduxData from '../../hoc/withReduxData';
import PlacesPage from '../../components/PlacesPage';

const mapStateToProps = state => ({
  places: appGetPlacesState(state)
});

const mapDispatchToProps = dispatch => {
  return {
    appGetData() {
      dispatch(appGetData());
    }
  };
};

export default withReduxData(mapStateToProps, mapDispatchToProps)(PlacesPage);
