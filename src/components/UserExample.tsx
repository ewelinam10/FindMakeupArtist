import React, { Fragment, useState } from "react";
import gql from 'graphql-tag';
import { useQuery } from "@apollo/react-hooks";
import { Users } from "../generated/graphql";
import { GetUsersQuery } from "../generated/graphql";



const GET_USERS = gql`
query getUsers{
  users {
    id
    login
    created_at
    photos {
      id
      photo
    }
  }
}`;

interface UserType {
  index: number,
  user: Pick<Users, "id" | "login" | "first_name" | "last_name" | "email" | "password" | "is_mobile_makeupArtist" | "adress" | "role" | "is_premium" | "interactions_no" | "created_at">
}


const UsersExampleList = () => {

  const [filter, setFilter] = useState<string>("all");
  const { loading, error, data } = useQuery<GetUsersQuery>(GET_USERS);
  // const todos = [
  //   {
  //     id: 1,
  //     title: "This is private todo 1",
  //     is_completed: true
  //   },
  //   {
  //     id: 2,
  //     title: "This is private todo 2",
  //     is_completed: false
  //   }
  // ];


  const clearCompleted = () => {
  };

  if (loading) {
    return (<div>Loading....</div>);
  }
  if (error || !data) {
    return (<div>Error...</div>)
  }
  let users = data.users;
  let logins = '';
  users.forEach(user => logins += (user.login));

  return (
    <div> dostępne loginy :{logins}</div>

  );

}


export default UsersExampleList;
export { GET_USERS as GET_USERS };