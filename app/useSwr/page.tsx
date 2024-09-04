"use client";
import axios from "axios";
import React from "react";
import useSWR from "swr";

const fectData = async (url: string) => {
  const res = await axios.get(url);
  return res.data;
};

export default function page() {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fectData,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  if (error) return <div>tải dữ liệu thất bại</div>;
  if (!data) return <div>Loading....</div>;
  return (
    <div>
      sử dụng useSwr
      {data.map((item: any) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </div>
  );
}
