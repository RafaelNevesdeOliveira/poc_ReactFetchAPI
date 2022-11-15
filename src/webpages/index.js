import React, { useState, useEffect } from "react";

const Webpages = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://digimon-api.vercel.app/api/digimon")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  });

  return (
    <table
      style={{
        border: "1px solid black",
        textAlign: "center",
        margin: "auto",
        padding: "20px",
        width: "50%",
      }}
    >
      <tr>
        <th>Foto</th>
        <th>Nome</th>
        <th>Nível</th>
      </tr>
      {users.map((user) => (
        <tr>
          <td>
            <img width={50} src={user.img}></img>
          </td>
          <td>{user.name}</td>
          <td>{user.level}</td>
        </tr>
      ))}
    </table>
  );
};

export default Webpages;
