import { Todo } from '../Model';
import TodoCard from './TodoCard';
import style from '../app.module.css';

interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todos, setTodos }: props) => {
  return (
    <div className={style.todoList}>
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} setTodos={setTodos} todos={todos} />
      ))}
    </div>
  );
};

export default TodoList;
