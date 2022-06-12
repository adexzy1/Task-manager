import React, { useEffect, useState } from 'react';
import { Todo } from '../Model';
import TodoCard from './TodoCard';
import style from '../app.module.css';

interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const CompletedTodo = ({ todos, setTodos }: props) => {
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const completed_todos = todos.filter(
      (completedTodo) => completedTodo.isDone === true
    );

    setCompletedTodos(completed_todos);
  }, [todos]);

  return (
    <section className={style.completedTasks}>
      <h1>Completed Tasks</h1>

      {completedTodos.length < 1 ? (
        <section className={style.placeHolderText}>No Completed Tasks</section>
      ) : (
        <section>
          {completedTodos.map((todo) => (
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

export default CompletedTodo;
