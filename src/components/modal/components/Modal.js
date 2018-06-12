import React from 'react'
import Moment from 'react-moment'

import ChevronLeft from './ChevronLeft'
import ChevronRight from './ChevronRight'

import ModalFullWrapper from '../styled/ModalFullWrapper'
import ModalContainer from '../styled/ModalContainer'
import Navigation from '../styled/Navigation'
import MainInfo from '../styled/MainInfo'
import MovieDescription from '../styled/MovieDescription'
import MovieTitle from '../styled/MovieTitle'
import Fader from '../styled/Fader'
import Loader from '../styled/Loader'

import {BASE_IMG_URL} from 'store/constants'

class Modal extends React.Component {

    componentDidMount() {
        this.props.getSingleMovieAction(this.props.payload.id);
        this.index = this.props.payload.index;
    }

    closeWindow(e) {
        e.preventDefault();
        this.props.closeDialog();
    }

    nextMovie(e) {
        e.preventDefault();
        this.props.getSingleMovieAction(this.props.movies[this.index+1].id);
        this.index++;
    }

    render() {
        const { movie: { release_date, adult, vote_average, backdrop_path, poster_path, title, overview }, isRequesting } = this.props
        console.log(this.props);

        return (
            <ModalFullWrapper>
            { !isRequesting && !!release_date ?
                <ModalContainer constUrl={BASE_IMG_URL} path={backdrop_path}>
                    <Navigation>
                        <div className="nav-item nav-item__back" onClick={(e) => this.closeWindow(e)}><div className="chevron-left__mobile"><ChevronLeft/></div><span>back</span></div>
                        <div className="nav-item nav-item__next" onClick={(e) => this.nextMovie(e)}><span>next</span><div className="chevron-right__mobile"><ChevronRight/></div></div>
                    </Navigation>
                    <MainInfo>
                        <div className="image-wrapper">
                            <img src={`${BASE_IMG_URL}/${poster_path}`} alt="Poster"/>
                        </div>
                        <div className="total-info-wrapper">
                            <MovieTitle className="title-web">{title}&nbsp;(<Moment format="YYYY">{release_date}</Moment>)</MovieTitle>
                            <div className="info-wrapper">
                                <div>
                                    <div>Score:</div>
                                    <div>{vote_average}</div>
                                </div>
                                <div>
                                    <div>Rating:</div>
                                    <div>{adult ? "R" : "G"}</div>
                                </div>
                                <div>
                                    <div>Release Date:</div>
                                    <div><Moment format="MMMM D, YYYY">{release_date}</Moment></div>
                                </div>
                            </div>
                            <MovieDescription className="description-web">{overview}</MovieDescription>
                        </div>
                    </MainInfo>
                    <MovieTitle className="title-mobile">{title}&nbsp;(<Moment format="YYYY">{release_date}</Moment>)</MovieTitle>
                    <MovieDescription className="description-mobile">{overview}</MovieDescription>
                </ModalContainer>

                : <Fader><Loader/></Fader>

            } </ModalFullWrapper>

        )
    }
}

export default Modal;