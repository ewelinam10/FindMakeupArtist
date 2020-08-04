import * as React from 'react';
import * as I from '../../utils/interfaces';
import ImageContainer, { ImageContainerProps } from './ImageContainer';
import ImageCard from './ImageCard';



const LandingPageContainer = () => {
    const imageBusinessMakeupArtist: I.Image[] = [{ class: 'img', id: 'makeupartistBusinessImage' }];
    const imagesMakeupArtist: I.Image[] = getImages4Look4MakeupArtistCard();
    return (
        <div className="container">
            <ImageCard titleCard='Szukam makijażystki' imageContainerProps={{ images: imagesMakeupArtist }} text='Znajdź makijażystkę w swojej okolicy!' btnTitle='Szukaj' btnHref='#' />
            <ImageCard titleCard='Szukam klientki' imageContainerProps={{ images: imageBusinessMakeupArtist }} text='Dodaj swoje portfolio i pozwól znaleźć się tysiącom klientek!' btnTitle='Zarejestruj się!' btnHref='#' />
        </div>
    );
};

function getImages4Look4MakeupArtistCard(): I.Image[] {
    const imagesMakeupArtist: I.Image[] = [
        { class: 'img_cosmetic', id: 'mirror' },
        { class: 'img_cosmetic', id: 'mascara' },
        { class: 'img_cosmetic', id: 'perfum' },
        { class: 'img_cosmetic', id: 'fundation' },
        { class: 'img_cosmetic', id: 'brush' },
        { class: 'img', id: 'makeupartistImage' }
    ];
    return imagesMakeupArtist;

}
export default LandingPageContainer;
