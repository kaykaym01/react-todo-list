type TodoCardProps = {
  todoIndex: number;
  children: React.ReactNode;
  onEdit: (todoIndex: number) => void;
  onDelete: (todoIndex: number) => void;
};

export default function TodoCard({
  todoIndex,
  onDelete,
  onEdit,
  children,
}: TodoCardProps) {
  function handleDelete() {
    onDelete(todoIndex);
  }

  function handleEdit() {
    onEdit(todoIndex);
  }

  return (
    <li key={todoIndex} className="todoItem">
      {children}
      <div className="actionsContainer">
        <button onClick={handleEdit}>
          <i className="fa-regular fa-pen-to-square"></i>
        </button>
        <button onClick={handleDelete}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  );
}
