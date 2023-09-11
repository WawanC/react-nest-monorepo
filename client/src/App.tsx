import { useEffect, useState } from "react";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api");
      const data = await response.json();
      setMessage(data.message);
    };
    fetchData();
  });

  return (
    <main>
      <h1>Hello from React App</h1>
      <h3>From Server : {message}</h3>
    </main>
  );
};

export default App;
