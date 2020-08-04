import * as React from 'react';
import * as I from '../../utils/interfaces';

export type ImageContainerProps = {
    images: I.Image[]
}

const ImageContainer = ({ images }: ImageContainerProps) => {
    let imagesJQuery = [];
    for (const image of images) {
        imagesJQuery.push(<img className={image.class} id={image.id}></img >);
    }
    return (
        <div className="image_container">
            {imagesJQuery}
        </div>
    );
};

export default ImageContainer;

