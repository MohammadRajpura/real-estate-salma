import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

const UserDetails = () => {
  const [searchParams] = useSearchParams();

  const param = useParams();

  console.log(param);
  

  const name = searchParams.get('name');
  const age = searchParams.get('age');
  

  return <div>UserDetails {name} - {age} - {param.id}</div>;
};

export default UserDetails;
