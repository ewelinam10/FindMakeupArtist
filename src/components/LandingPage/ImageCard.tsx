import * as React from 'react';
import ImageContainer, { ImageContainerProps } from './ImageContainer';

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
                <a href={props.btnHref}>{props.btnTitle}</a>
            </div>
        </div>
    );
};

export default ImageCard;
