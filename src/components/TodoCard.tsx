import { Todo } from '../Model';
import { AiFillEdit } from 'react-icons/ai';
import { BiCheckDouble } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import style from '../app.module.css';

interface props {
  todo: Todo;
}

const TodoCard = ({ todo }: props) => {
  return (
    <section className={style.todoCard}>
      <div className={style.todo}>{todo.todo}</div>
      <div className={style.todoActions}>
        <AiFillEdit />
        <MdDelete />
        <BiCheckDouble />
      </div>
    </section>
  );
};

export default TodoCard;
