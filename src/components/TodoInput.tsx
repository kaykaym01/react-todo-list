type TodoInputProps = {
  onClick: (item: string) => void;
  todoValue: string;
  setTodoValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function TodoInput({
  onClick,
  todoValue,
  setTodoValue,
}: TodoInputProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTodoValue(e.target.value);
  }

  function handleOnClick() {
    onClick(todoValue);
    setTodoValue("");
  }

  return (
    <header>
      <input
        placeholder="Enter todo..."
        value={todoValue}
        onChange={handleChange}
      />
      <button onClick={handleOnClick}>Add</button>
    </header>
  );
}
