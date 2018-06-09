import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Routes from '../../components/routes/Routes';
//import { getTokenFromPoolAction } from '../actions/user';
//import { getTokenFromPoolActionConsumer } from '../actions/consumer';

const mapDispatchToProps = dispatch => ({
    /*getTokenFromPoolAction: (action) => {
        dispatch(getTokenFromPoolAction(action));
    },*/

});
const mapStateToProps = state => ({
    /*isLoadingUserToken: state.user.isLoadingUserToken,*/
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));