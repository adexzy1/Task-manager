import React, { useEffect, useState } from 'react';
import style from './app.module.css';
import ActiveTodos from './components/ActiveTodos';
import CompletedTodoList from './components/CompletedTodos';
import Input from './components/Input';
import { Todo } from './Model';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<string>('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), isDone: false, todo }]);
      setTodo('');
    }
  };

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  }, [todos]);

  useEffect(() => {
    const local_todos = localStorage.getItem('todos');
    setTodos(local_todos ? JSON.parse(local_todos) : []);
  }, []);

  return (
    <div className={style.app}>
      <header className={style.header}>
        <h1>Task Manager</h1>
      </header>

      <main className={style.main}>
        <Input setTodo={setTodo} todo={todo} handleAdd={handleAdd} />
        <section className={style.container}>
          <ActiveTodos todos={todos} setTodos={setTodos} />
          <CompletedTodoList todos={todos} setTodos={setTodos} />
        </section>
      </main>
    </div>
  );
}

export default App;
