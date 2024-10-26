import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState<string[]>(() => {
    const localTodos = localStorage.getItem("todos");
    return localTodos ? JSON.parse(localTodos).todos : [];
  });
  const [todoValue, setTodoValue] = useState<string>("");

  function addTodoItem(todoItem: string) {
    setTodos(todos.concat([todoItem]));
  }

  function editTodoItem(todoIndex: number) {
    const currentTodoItem = todos[todoIndex];
    setTodoValue(currentTodoItem);
    deleteTodoItem(todoIndex);
  }

  function deleteTodoItem(todoIndex: number) {
    setTodos([...todos.splice(0, todoIndex), ...todos.splice(todoIndex + 1)]);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify({ todos }));
  }, [todos]);

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
