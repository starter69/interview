import { useEffect, useState } from "react";
import { getHelloWorldMsg } from "api";

const Dashboard = () => {
  const [msg, setMsg] = useState();

  useEffect(() => {
    (async () => setMsg((await getHelloWorldMsg()).data))();
  }, []);

  return <h1>{msg}</h1>;
};

export default Dashboard;
