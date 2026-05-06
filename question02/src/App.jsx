import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>User Details</h1>

      {users.map((user) => (
        <div key={user.id}>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <hr />
        </div>
      ))}

    </div>
  );
}

export default Users;