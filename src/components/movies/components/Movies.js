import React from 'react'

import MoviesPageWrapper from '../styled/MoviesPageWrapper'
import MoviesPageHeader from '../styled/MoviesPageHeader'
import MoviesPageHeaderInnerLeft from '../styled/MoviesPageHeaderInnerLeft'
import MoviesPageHeaderInnerRight from '../styled/MoviesPageHeaderInnerRight'
import MoviesContentWrapper from '../styled/MoviesContentWrapper'
import MoviesContentTitle from '../styled/MoviesContentTitle'
import MoviesContentBox from '../styled/MoviesContentBox'
import MovieItem from '../styled/MovieItem'
import star_death from 'assets/star_death.png'

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
                        <img src={star_death} alt=""/>
                        <span>Movies</span>
                    </MoviesPageHeaderInnerLeft>
                    <MoviesPageHeaderInnerRight>
                        <span>Dropdown</span>
                    </MoviesPageHeaderInnerRight>
                </MoviesPageHeader>
                <MoviesContentWrapper>
                    <MoviesContentTitle>Latest Releases</MoviesContentTitle>
                    <MoviesContentBox>
                        { movies.map(movie => (<MovieItem key={movie.id} imageSrc={`${BASE_IMG_URL}342/${movie.poster_path}`}/>))}
                    </MoviesContentBox>
                </MoviesContentWrapper>
            </MoviesPageWrapper>
        )
    }
}
export default Movies