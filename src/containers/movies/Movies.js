import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Movies from 'components/movies'
import PropTypes from 'prop-types'
import { getMoviesAction } from 'store/actions/movies'

const mapDispatchToProps = dispatch => ({
    getMoviesAction: (page) => {
        dispatch(getMoviesAction(page));
    }
});

const mapStateToProps = state => ({
    isRequesting: state.movies.isRequesting,
    movies: state.movies.movies,
    page: state.movies.page,
    total_results: state.movies.total_results,
    total_pages: state.movies.total_pages,
});

Movies.propTypes = {
    isRequesting: PropTypes.bool,
    movies: PropTypes.array,
    page: PropTypes.number,
    total_results: PropTypes.number,
    total_pages: PropTypes.number,
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Movies));