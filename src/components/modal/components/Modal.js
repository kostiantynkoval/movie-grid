import React from 'react'
import Moment from 'react-moment'

import ModalFullWrapper from '../styled/ModalFullWrapper'
import ModalContainer from '../styled/ModalContainer'
import Navigation from '../styled/Navigation'
import MainInfo from '../styled/MainInfo'
import MovieDescription from '../styled/MovieDescription'
import MovieTitle from '../styled/MovieTitle'

import {BASE_IMG_URL} from 'store/constants'

class Modal extends React.Component {

    componentDidMount() {
        console.log(this.props);
        this.props.getSingleMovieAction(this.props.payload.id);
    }

    closeWindow(e) {
        e.preventDefault();
        this.props.closeDialog();
    }

    render() {
        const { movie: { release_date, adult, vote_average, backdrop_path, poster_path, title, overview }, isRequesting } = this.props
        console.log(this.props)
        return (
            <ModalFullWrapper>
            { !isRequesting && !!release_date ?
                <ModalContainer constUrl={BASE_IMG_URL} path={backdrop_path}>
                    <Navigation>
                        <div className="nav-item nav-item__back" onClick={(e) => this.closeWindow(e)}>back</div>
                        <div className="nav-item nav-item__next">next</div>
                    </Navigation>
                    <MainInfo>
                        <div>
                            <img src={`${BASE_IMG_URL}/${poster_path}`} alt="Poster"/>
                        </div>
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
                    </MainInfo>
                    <MovieTitle>{title}&nbsp;(<Moment format="YYYY">{release_date}</Moment>)</MovieTitle>
                    <MovieDescription>{overview}</MovieDescription>
                </ModalContainer>

                : <div>Loading ...</div>

            } </ModalFullWrapper>

        )
    }
}

export default Modal;