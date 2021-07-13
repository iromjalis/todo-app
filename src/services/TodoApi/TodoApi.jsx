import axios from "axios";

const fetchTodos = () => {
  return axios.get(`http://localhost:3000/todos`).then(({ data }) => data);
};
const addTodo = (todo) => {
  return axios
    .post(`http://localhost:3000/todos`, todo)
    .then(({ data }) => data);
};
const deleteTodo = (todoId) => {
  return axios.delete(`http://localhost:3000/todos/${todoId}`);
};
const updateTodo = (todoId, update) => {
  return axios
    .patch(`http://localhost:3000/todos/${todoId}`, update)
    .then(({ data }) => data);
};
export default { fetchTodos, addTodo, deleteTodo, updateTodo };
