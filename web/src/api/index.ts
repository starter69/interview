import axios from "axios";

const host = process.env.REACT_APP_API_HOST || "localhost";
const port = process.env.REACT_APP_API_PORT || 3001;

const apiService = axios.create({
  baseURL: `http://${host}:${port}`,
});

export const getHelloWorldMsg = () => apiService.get("/hello-world");

// const createTodo = (payload: Object) => apiService.post("/end-point", payload);
