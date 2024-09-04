"use client";
import React, { useEffect, useState } from "react";

export default function page() {
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      Trang danh sách user
      {users.map((item: any) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  );
}
