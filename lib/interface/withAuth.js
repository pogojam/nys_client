import React, { Children } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const QUERY = gql`
  query {
    getUser {
      firstName
      lastName
      email
      homePhone
      workPhone
      players {
        id
        name
      }
      role
    }
  }
`;

const withAuth = (AuthComponent, redirect) => ({ children }) => {
  const { client, loading, data, err } = useQuery(QUERY);
  if (loading) return "loading...";
  if (err) return err;
  const user = data.getUser ? data.getUser : null;
  if (redirect && !user) {
    return redirect;
  } else {
    return <AuthComponent client={client} children={children} user={user} />;
  }
};

export default withAuth;
