import React from "react";
import { useQuery, gql } from "@apollo/client";

const View_City = gql`
  query {
    city(id: 7) {
      id
      name
    }
  }
`;

const City = () => {
  const { data, loading, error } = useQuery(View_City);
  console.log(data);
  return (
  <div>
    <h2>ID : {data?.city.id}</h2>
    <h2>Name : {data?.city.name}</h2>
  </div>
  );
};

export default City;
