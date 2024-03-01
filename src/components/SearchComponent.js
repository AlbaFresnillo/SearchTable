import React, { useState, useEffect } from "react";

const SearchComponent = () => {
  // setear los hooks useState
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // función para traer los datos de la API
  const URL = "https://jsonplaceholder.typicode.com/users";

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setUsers(data);
  };

  // función de búsqueda
  const searcher = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    showData();
  }, []);

  // método de filtrado 1
  let results = [];
  if (!search) {
    results = users;
  } else {
    results = users.filter((data) =>
      data.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  // método de filtrado 2
  /*  const results = !search
    ? users
    : users.filter((data) =>
        data.name.toLowerCase().includes(search.toLowerCase())
      );

  useEffect(() => {
    showData();
  }, []); */

  // renderizamos la vista
  return (
    <div>
      <input
        value={search}
        onChange={searcher}
        type="text"
        placeholder="Search"
        className="form-control"
      ></input>
      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead>
          <tr className="bg-curso text-white">
            <th>NAME</th>
            <th>USERNAME</th>
          </tr>
        </thead>
        <tbody>
          {results.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchComponent;
