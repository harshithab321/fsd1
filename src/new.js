import React, { useEffect, useState } from "react";

function Fetcher() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const resp = await fetch("https://jsonplaceholder.typicode.com/users");
      const res = await resp.json();
      setData(res);
      console.log(data);
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    // Call fetchData inside useEffect to ensure it runs after the component mounts
    fetchData();
  }, []); // Empty dependency array ensures that it runs once after the component mounts

  return (
    <>
      {data.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </>
  );
}

export default Fetcher;
