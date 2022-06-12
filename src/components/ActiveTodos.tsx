import TodoCard from './TodoCard';
import style from '../app.module.css';
import { Todo } from '../Model';
import { useEffect, useState } from 'react';

interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ActiveTodos = ({ todos, setTodos }: props) => {
  const [activeTodos, setActiveTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const active_todos = todos.filter(
      (activeTodo) => activeTodo.isDone === false
    );
    setActiveTodos(active_todos);
  }, [todos]);

  return (
    <section className={style.activeTasks}>
      <h1>Active Tasks</h1>

      {activeTodos.length < 1 ? (
        <section className={style.placeHolderText}>No Active Tasks</section>
      ) : (
        <section>
          {activeTodos.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
              setTodos={setTodos}
              todos={todos}
            />
          ))}
        </section>
      )}
    </section>
  );
};

export default ActiveTodos;
