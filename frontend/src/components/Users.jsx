import User from "./User";
import { useState, useEffect } from "react";
import axios from "axios";

const useUsers = (query, time) => {
  const [users, setUsers] = useState([]);
  const getUsers = async (query) => {
    const url = `http://localhost:3000/api/v1/user/bulk?filter=${query}`;
    console.log(url);
    const res = await axios.get(`${url}`);
    setUsers(res.data.users);
    return users;
  };

  useEffect(() => {
    getUsers(query);
    const timer = setTimeout(() => {
      getUsers(query);
      return () => {
        clear(timer);
      };
    }, time);
  }, [query, time]);
  return users;
};

const Users = () => {
  const [query, setQuery] = useState("");
  const users = useUsers(query, 200);
  return (
    <div>
      <div className="shadow-lg m-2 rounded-lg p-4">
        <div className="font-bold">Users</div>
        <input
          className="border border-slate-300 w-full p-1 px-2 my-2 rounded-lg"
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search users"
        />
        {users.map((user) => (
          <User user={user} key={user._id} />
        ))}
      </div>
    </div>
  );
};
export default Users;
