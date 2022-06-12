import { Todo } from '../Model';
import TodoCard from './TodoCard';
import style from '../app.module.css';

interface props {
  todos: Todo[];
}

const TodoList = ({ todos }: props) => {
  return (
    <div className={style.todoList}>
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
