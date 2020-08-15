import * as React from 'react';
import LogoutButton from '../Auth/LogoutButton';
import ProfileAuth0 from '../Auth/ProfileAuth0';
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useAuth0 } from "@auth0/auth0-react";
import { GetAllMakeupArtistsQuery, Users } from '../../generated/graphql';
import ImageCard from '../LandingPage/ImageCard';
import { User } from '@auth0/auth0-react/dist/auth-state';


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
    photos {
      id
      user_id
      photo
      title
    }
  }
}
`;


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
        <ImageCard btnTitle={'Umów się na makijaż'} titleCard={makeupartist.login || ''} btnHref='' text={makeupartist.photos[0].title || ''} imageContainerProps={{ images: [{ class: 'img', src: makeupartist.photos[0].photo }] }} />
    ));
    if (isAuthenticated) {
        return (
            <div className="container">
                <h1>Szukaj...</h1>
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
        <div className="container">
            <h1>Szukaj...</h1>
            <br />
            <div className="user_portfolios_wrapper">
                {userPortfolios}
            </div>
        </div>


    );
};

export default MainPage;




