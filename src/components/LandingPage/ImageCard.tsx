import * as React from 'react';
import ImageContainer, { ImageContainerProps } from './ImageContainer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export type ImageCard = {
    imageContainerProps: ImageContainerProps,
    titleCard: string,
    text: string,
    btnTitle: string,
    btnHref: string
}

const ImageCard = (props: ImageCard) => {
    return (
        <div className="card">
            <div className="content">
                <h2 className='titleCard'>{props.titleCard}</h2>
                <ImageContainer images={props.imageContainerProps.images} />
                <p className='descriptionCard'>{props.text}</p>
                <Link to={props.btnHref}>
                    {props.btnTitle}
                </Link>
            </div>
        </div>
    );
};

export default ImageCard;
