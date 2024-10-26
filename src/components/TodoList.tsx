import TodoCard from "./TodoCard";

type TodoListProps = {
  todos: string[];
  onEdit: (todoIndex: number) => void;
  onDelete: (todoIndex: number) => void;
};

export default function TodoList({ todos, onEdit, onDelete }: TodoListProps) {
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todoIndex={todoIndex}
            onEdit={onEdit}
            onDelete={onDelete}
          >
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
