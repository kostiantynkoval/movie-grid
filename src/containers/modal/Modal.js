import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Modal from 'components/modal'
import PropTypes from 'prop-types'
import { getSingleMovieAction } from 'store/actions/movies'
import { closeDialog } from 'redux-dialog';

const mapDispatchToProps = dispatch => ({
    getSingleMovieAction: (id) => {
        dispatch(getSingleMovieAction(id));
    },
    closeDialog: () => {
        dispatch(closeDialog('MovieWindow'));
    }
});

const mapStateToProps = state => ({
    isRequesting: state.movies.isRequesting,
    movie: state.movies.movie,
    movies: state.movies.movies,
});

Modal.propTypes = {
    isRequesting: PropTypes.bool,
    movie: PropTypes.object,
    movies: PropTypes.array,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Modal));