import * as React from 'react';
import LogoutButton from '../Auth/LogoutButton';
import ProfileAuth0 from '../Auth/ProfileAuth0';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';


const ADD_USER_INFO = gql`
mutation MyMutation {
    insert_users(objects: {first_name: $first_name}) {
      affected_rows
      returning {
        first_name
        id
        user_id
      }
    }
  }
`;



const MainPage = () => {
    const [addUserInfo] = useMutation(ADD_USER_INFO);
    return (
        <div className="container">
            Witaj na głównej stronie userze!
            <ProfileAuth0 />
            <br />
            <LogoutButton />
            <button onClick={(e) => {
                addUserInfo(
                    {
                        variables: { $first_name: 'TESTIMIENIA' }
                    }
                );
            }}>Dodaj inf o uzytkowniku</button>
        </div>

    );
};

export default MainPage;




