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

function getTextToImageCard(makeupartist: Users) {
    let text = makeupartist.photos[0].title + `
    Miasto : ` + makeupartist.adress + `
    Mobilność : ` + getPolishBoolean(makeupartist.is_mobile_makeupArtist);

    return text;
}
const MainPage = () => {
    const { loading, error, data } = useQuery<GetAllMakeupArtistsQuery>(GET_ALL_MAKEUPARTIST);
    const { user, isAuthenticated } = useAuth0();
    if (loading) {
        return (<div>Loading ... </div>)
    }
    if (error || !data) {
        return (<div>Error...</div>);
    }
    const makeupartists: Users[] = data.users;
    const userPortfolios = makeupartists.map((makeupartist: Users) => (
        <ImageCard btnTitle={'Zobacz więcej'} titleCard={makeupartist.login || ''} btnHref='' text={getTextToImageCard(makeupartist)} imageContainerProps={{ images: [{ class: 'img', src: makeupartist.photos[0].photo }] }} />
    ));
    if (isAuthenticated) {
        return (
            <div className="container">
                <SearchButton />
                <div className="user_portfolios_wrapper">
                    {userPortfolios}
                </div>
                <ProfileAuth0 />
                <br />
                <LogoutButton />

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




