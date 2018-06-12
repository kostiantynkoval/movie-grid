import React from 'react'
import Pagination from "react-js-pagination";
import Modal from 'containers/modal/Modal';
import reduxDialog from 'redux-dialog';
import Dropdown from 'components/dropdown';

import MoviesPageWrapper from '../styled/MoviesPageWrapper'
import MoviesPageHeader from '../styled/MoviesPageHeader'
import MoviesPageHeaderInnerLeft from '../styled/MoviesPageHeaderInnerLeft'
import MoviesPageHeaderInnerRight from '../styled/MoviesPageHeaderInnerRight'
import MoviesContentWrapper from '../styled/MoviesContentWrapper'
import MoviesContentTitle from '../styled/MoviesContentTitle'
import MoviesContentBox from '../styled/MoviesContentBox'
import MovieItem from '../styled/MovieItem'

import { BASE_IMG_URL } from 'store/constants';
import './Movies.css';

const Dialog = reduxDialog({
    name: "MovieWindow"
})(Modal);

class Movies extends React.Component {
    constructor(props) {
        super(props);
        this.openModal = this.openModal.bind(this);
    }

    componentDidMount() {
        this.props.getMoviesAction(1);
    }

    openModal(e, id, index) {
        e.preventDefault();
        this.props.openDialog(id, index);
    }

    handlePageClick(data) {
        console.log(data);
        this.props.getMoviesAction(data);
    }

    render() {
        const { movies, total_results, page, isRequesting } = this.props;
        console.log(this.props)
        const paginatorOptions = {
            activePage: page,
            itemsCountPerPage: 20,
            totalItemsCount: total_results,
            pageRangeDisplayed: 5,
            onChange: data => this.handlePageClick(data)
        }
        return (
            <MoviesPageWrapper>
                <MoviesPageHeader>
                    <MoviesPageHeaderInnerLeft>
                        <img src={window.location.origin + '/star_death.png'} alt="Star of Death"/>
                        <span>Movies</span>
                    </MoviesPageHeaderInnerLeft>
                    <MoviesPageHeaderInnerRight>
                        <Dropdown/>
                    </MoviesPageHeaderInnerRight>
                </MoviesPageHeader>
                <MoviesContentWrapper>
                    <MoviesContentTitle>Latest Releases</MoviesContentTitle>
                    <MoviesContentBox>
                        { movies.map((movie, index) => movie.poster_path && (
                            <MovieItem key={movie.id} onClick={(e) => this.openModal(e, movie.id, index)}>
                                <img src={`${BASE_IMG_URL}/${movie.poster_path}`} alt="Movie Poster"/>
                            </MovieItem>))}
                    </MoviesContentBox>
                </MoviesContentWrapper>
                { !isRequesting && movies.length && <Pagination {...paginatorOptions}/> }
                <Dialog
                    className="myContentClass"
                    overlayClassName="myOverlayClass"
                />
            </MoviesPageWrapper>
        )
    }
}
export default Movies