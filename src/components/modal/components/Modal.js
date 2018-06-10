import React from 'react';

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
        const { movie, isRequesting } = this.props
        console.log(this.props)
        console.log(!!movie)
        return (
            <div style={{width: '100%', height: '100%', background: `url('${BASE_IMG_URL}/${movie.backdrop_path}') no-repeat center / cover `}}>
            { !isRequesting && !!movie ?
                <div>
                    <Navigation>
                        <div style={{cursor: 'pointer'}} onClick={(e) => this.closeWindow(e)}>back</div>
                        <div>next</div>
                    </Navigation>
                    <MainInfo>
                        <div>
                            <img src={`${BASE_IMG_URL}/${movie.poster_path}`} alt="Poster"/>
                        </div>
                        <div>
                            {[1,2,3].map(item => (
                                <div key={item}>
                                    <div>Score</div>
                                    <div>10.5</div>
                                </div>
                            ))}
                        </div>
                    </MainInfo>
                    <MovieTitle></MovieTitle>
                    <MovieDescription></MovieDescription>
                </div>

                : <div>Loading ...</div>

            } </div>

        )
    }
}

export default Modal;