import { Todo } from '../Model';
import { AiFillEdit } from 'react-icons/ai';
import { BiCheckDouble } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import style from '../app.module.css';
import { useState } from 'react';

interface props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoCard = ({ todo, todos, setTodos }: props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editedValue, setEditedValue] = useState<string>('');

  const completedTask = (id: number): void => {
    const exist = todos.find((x) => x.id === id);
    if (exist?.isDone === false) {
      exist.isDone = true;
    } else {
      exist!.isDone = false;
    }
    setTodos([...todos]);
  };

  const deleteTask = (id: number): void => {
    const remainingTodos = todos.filter((x) => x.id !== id);
    setTodos(remainingTodos);
    localStorage.setItem('todos', JSON.stringify(remainingTodos));
  };

  const saveEditedTask = (id: number): void => {
    const exist = todos.find((x) => x.id === id);

    if (editedValue !== '') {
      exist!.todo = editedValue;
      localStorage.setItem('todos', JSON.stringify(todos));
      setEdit(false);
    } else {
      setEdit(false);
    }
  };

  return (
    <section className={style.todoCard}>
      {edit && (
        <>
          <input
            type={'text'}
            defaultValue={todo.todo}
            className={style.editInput}
            onChange={(e) => setEditedValue(e.target.value)}
          />
          <div className={style.todoActions}>
            <BsFillCheckCircleFill onClick={() => saveEditedTask(todo.id)} />
          </div>
        </>
      )}

      {!edit && (
        <>
          <div className={style.todo}>{todo.todo}</div>
          <div className={style.todoActions}>
            {todo.isDone === false && (
              <>
                <AiFillEdit onClick={() => setEdit(true)} />
              </>
            )}
            <BiCheckDouble onClick={() => completedTask(todo.id)} />
            <MdDelete onClick={() => deleteTask(todo.id)} />
          </div>
        </>
      )}
    </section>
  );
};

export default TodoCard;
