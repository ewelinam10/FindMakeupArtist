import * as React from 'react';
import LogoutButton from '../Auth/LogoutButton';
import ProfileAuth0 from '../Auth/ProfileAuth0';
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { useAuth0 } from "@auth0/auth0-react";
import { GetAllMakeupArtistsQuery } from '../../generated/graphql';


const GET_ALL_MAKEUPARTIST = gql`
query GetAllMakeupArtists {
  users(where: {role: {_eq: "makeupartist"}}) {
    id
    adress
    created_at
    email
    first_name
    photos {
      id
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

    return (
        <div className="container">
            {data}

            Witaj na głównej stronie userze!
            <ProfileAuth0 />
            <br />
            <LogoutButton />

        </div>

    );
};

export default MainPage;




