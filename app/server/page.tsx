"use client";
import { useRouter } from "next/navigation";
import React from "react";

async function getUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
}

export default async function page() {
  const route = useRouter();
  const handleClick = () => {
    route.push("/useSwr");
  };
  // tạo function lấy data ở trên server
  const users: any = await getUser();
  return (
    <div>
      Data feching server with fecth
      <button onClick={handleClick}>click</button>
      {users.map((item: any) => (
        <li key={item.id}>{item.username}</li>
      ))}
    </div>
  );
}
