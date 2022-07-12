import * as React from 'react';
import LogoutButton from '../Auth/LogoutButton';
import ProfileAuth0 from '../Auth/ProfileAuth0';
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useAuth0 } from "@auth0/auth0-react";
import { GetAllMakeupArtistsQuery, Users } from '../../generated/graphql';
import ImageCard from '../LandingPage/ImageCard';
import { User } from '@auth0/auth0-react/dist/auth-state';
import SearchButton from '../Widgets/SearchButton';
import * as I from '../../utils/interfaces';

const GET_ALL_MAKEUPARTIST = gql`
query GetAllMakeupArtists {
  users(where: {role: {_eq: "makeupartist"}}) {
    id
    login
    adress
    created_at
    email
    first_name
    user_id
    is_mobile_makeupArtist
    photos {
      id
      user_id
      photo
      title
    }
  }
}
`;
function getPolishBoolean(boolValue: boolean | undefined | null): string {
    if (boolValue) {
        return 'Tak';
    } else {
        return 'Nie';
    }
}

function getTextToImageCard(makeupartist: Partial<Users>) {
    let text = 'Przykładowy tekst';
    if (makeupartist.photos) {
        text = makeupartist.photos[0].title + `
        Miasto : ` + makeupartist.adress + `
        Mobilność : ` + getPolishBoolean(makeupartist.is_mobile_makeupArtist);
    }


    return text;
}
const MainPage = () => {
    const { loading, error, data } = useQuery<GetAllMakeupArtistsQuery>(GET_ALL_MAKEUPARTIST);
    const { user, isAuthenticated } = useAuth0();


    // if (loading) {
    //     return (<div>Loading ... </div>)
    // }
    // if (error || !data) {
    //     return (<div>Error...</div>);
    // }
    //to get real data from server you have to uncomment code above
    //this is just a mock: 
    let a: Partial<Users>[] = [{ login: 'weronikaMakeup', adress: "Lublin", is_mobile_makeupArtist: true }, { login: 'weronikaMakeup', adress: "Lublin", is_mobile_makeupArtist: true }];
    const makeupartists: Partial<Users>[] = a;//data.users;
    const imageBusinessMakeupArtist: I.Image[] = [{ class: 'img', id: 'exampleImage' }];
    const userPortfolios = makeupartists.map((makeupartist: Partial<Users>) => (
        <ImageCard btnTitle={'Zobacz więcej'} titleCard={makeupartist.login || ''} btnHref='' text={getTextToImageCard(makeupartist)} imageContainerProps={{ images: imageBusinessMakeupArtist }} />
    ));
    // <LogoutButton />
    if (true) {
        return (
            <div>
                <ProfileAuth0 />
                <SearchButton />
                <div className="container">
                    {userPortfolios}
                </div>
            </div>
        )
    }
    return (
        <div>
            <SearchButton />
            <div className="container">
                {userPortfolios}
            </div>
        </div>



    );
};

export default MainPage;




