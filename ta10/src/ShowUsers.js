import React, { useEffect, useState } from 'react';
import './ShowUsers.css';

const getUsers = async ()=>{
  const usersFetch = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await usersFetch.json();
  return users;
};

const ShowUsers = () =>{
  const [usersApi, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((usersApi) => setUsers(usersApi));
  }, []);

  return (
    <div className='usuarios-contenedor'>
      {usersApi.map((user)=>{
        return(
          <div className='usuario'key={user.id}>
                <div id="user-email"> Email: {user.email}</div>
                <div id="user-name">Usuario: {user.username}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowUsers;