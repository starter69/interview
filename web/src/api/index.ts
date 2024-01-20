import axios from "axios";

const apiService = axios.create({
  baseURL: "http://localhost:3001",
});

export const getHelloWorldMsg = () => apiService.get("/hello-world");

// const createTodo = (payload: Object) => apiService.post("/end-point", payload);
