import { appGetDataState } from '../../selectors';
import { appGetData } from '../../actions';
import withReduxData from '../../hoc/withReduxData';
import Home from '../../components/Home';

const mapStateToProps = state => ({
  data: appGetDataState(state)
});

const mapDispatchToProps = dispatch => {
  return {
    appGetData() {
      dispatch(appGetData());
    }
  };
};

export default withReduxData(mapStateToProps, mapDispatchToProps)(Home);
