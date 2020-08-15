import * as React from 'react';
import ImageContainer, { ImageContainerProps } from './ImageContainer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import Login from '../Auth/Login';

export type ImageCard = {
    imageContainerProps: ImageContainerProps,
    titleCard: string,
    text: string,
    btnTitle: string,
    btnHref: string
}


const ImageCard = (props: ImageCard) => {
    const isLoginBtn = props.btnHref === '/register' ? true : false;
    return (
        <div className="card">
            <div className="content">
                <h2 className='titleCard'>{props.titleCard}</h2>
                <ImageContainer images={props.imageContainerProps.images} />
                <p className='descriptionCard'>{props.text}</p>
                {isLoginBtn ? (
                    <Login />
                ) : (
                        <Link to={props.btnHref}>
                            {props.btnTitle}
                        </Link>
                    )}

            </div>
        </div>
    );
};

export default ImageCard;

