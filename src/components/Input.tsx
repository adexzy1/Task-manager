import style from '../app.module.css';
import React from 'react';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => any;
}

const Input = ({ handleAdd, todo, setTodo }: Props) => {
  return (
    <form onSubmit={(e) => handleAdd(e)} className={style.inputWrapper}>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="Enter a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Input;
