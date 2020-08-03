import * as React from 'react';
import mirror from "../../images/lusterko.png"
import mascara from "../../images/tusz.png"
import perfum from "../../images/perfumy.png"
import fundation from "../../images/podklad.png"
import brush from "../../images/pedzel2.png"
import makeupartist from "../../images/makeupartist.png"
import makeupartistbussines from "../../images/makeupartistbussines.png"




const LandingPageContainer = () => {
    return (
        <div className="container">
            <div className="card">
                <div className="content">
                    <h2>Szukam makijażystki</h2>
                    <div className="image_container">
                        <img src={mirror} id="a" className="img_cosmetic" />
                        <img src={mascara} id='e' className="img_cosmetic" />
                        <img src={perfum} id='c' className="img_cosmetic" />
                        <img src={fundation} id='d' className="img_cosmetic" />
                        <img src={brush} id='b' className="img_cosmetic" />
                        <img src={makeupartist} className="img" />
                    </div>
                    <p className='titleCard'>Znajdź makijażystkę w swojej okolicy!</p>
                    <a href="#">Szukaj</a>
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <h2>Szukam <br /> klientki</h2>
                    <div className="image_container">
                        <img src={makeupartistbussines} className="img" />
                    </div>
                    <p className='titleCard'>Dodaj swoje portfolio i pozwól znaleźć się tysiącom klientek!</p>
                    <a href="#">Zarejestruj się!</a>
                </div>
            </div>
        </div>
    );
};

export default LandingPageContainer;
