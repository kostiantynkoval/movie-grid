import React from 'react'

import MoviesPageWrapper from '../styled/MoviesPageWrapper'
import MoviesPageHeader from '../styled/MoviesPageHeader'
import MoviesPageHeaderInnerLeft from '../styled/MoviesPageHeaderInnerLeft'
import MoviesPageHeaderInnerRight from '../styled/MoviesPageHeaderInnerRight'
import MoviesContentWrapper from '../styled/MoviesContentWrapper'
import MoviesContentTitle from '../styled/MoviesContentTitle'
import MoviesContentBox from '../styled/MoviesContentBox'
import MovieItem from '../styled/MovieItem'

import { BASE_IMG_URL } from 'store/constants';

class Movies extends React.Component {

    componentDidMount() {
        this.props.getMoviesAction(10);
    }

    render() {
        const { movies } = this.props;
        return (
            <MoviesPageWrapper>
                <MoviesPageHeader>
                    <MoviesPageHeaderInnerLeft>
                        <img src={window.location.origin + '/star_death.png'} alt="Star of Death"/>
                        <span>Movies</span>
                    </MoviesPageHeaderInnerLeft>
                    <MoviesPageHeaderInnerRight>
                        <span>Dropdown</span>
                    </MoviesPageHeaderInnerRight>
                </MoviesPageHeader>
                <MoviesContentWrapper>
                    <MoviesContentTitle>Latest Releases</MoviesContentTitle>
                    <MoviesContentBox>
                        { movies.map(movie => (
                            <MovieItem key={movie.id}>
                                <img className="movie-image" src={`${BASE_IMG_URL}/${movie.poster_path}`} alt=""/>
                            </MovieItem>))}
                    </MoviesContentBox>
                </MoviesContentWrapper>
            </MoviesPageWrapper>
        )
    }
}
export default Movies