import axios from "axios";
import React from "react";

async function getUser() {
  const res: any = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return res.data;
}

export default async function page() {
  // tạo function lấy data ở trên server
  const users: any = await getUser();
  return (
    <div>
      Data feching server with axios
      {users.map((item: any) => (
        <li key={item.id}>{item.username}</li>
      ))}
    </div>
  );
}
