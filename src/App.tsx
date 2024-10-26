import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState<string[]>([]);
  const [todoValue, setTodoValue] = useState<string>("");

  function persistData(newList: string[]) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function addTodoItem(todoItem: string) {
    setTodos(todos.concat([todoItem]));
    persistData(todos);
  }

  function editTodoItem(todoIndex: number) {
    const currentTodoItem = todos[todoIndex];
    setTodoValue(currentTodoItem);
    deleteTodoItem(todoIndex);
    persistData(todos);
  }

  function deleteTodoItem(todoIndex: number) {
    setTodos([...todos.splice(0, todoIndex), ...todos.splice(todoIndex + 1)]);
    persistData(todos);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <TodoInput
        onClick={addTodoItem}
        todoValue={todoValue}
        setTodoValue={setTodoValue}
      />
      <TodoList todos={todos} onEdit={editTodoItem} onDelete={deleteTodoItem} />
    </>
  );
}

export default App;
