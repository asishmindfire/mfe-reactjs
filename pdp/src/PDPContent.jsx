import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getUsers } from "home/users";

const PdpContent = () => {
  const { id } = useParams();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersData = getUsers();
    console.log(`===>`, usersData);
    setUsers(usersData);
  }, []);

  return (
    <>
      {/* {users &&
        users?.map((el) => {
         return <div key={el.id}>{el.name}</div>;
        })} */}
        <div>{id}</div>
    </>
  );
};

export default PdpContent;
