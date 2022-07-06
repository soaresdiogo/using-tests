import { useEffect, useState } from "react";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch("https://reqres.in/api/users");
    const { data } = await response.json();

    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.first_name}</li>
      ))}
    </ul>
  );
};

export default UsersList;