import {Todo} from "@/types/Todo";
import style from './style.module.css'


export  const Li = ({todo}: {todo: Todo }) => {
    return(
        <li className={style.li}>
            <input className='' type='checkbox'/>
            <div className='flex-1'>{todo.title}</div>
            <div className={'flex gap-4'}>
                <i className="bi bi-pencil-fill cursor-pointer :hover:text-red-950"></i>
                <i className="bi bi-trash3-fill cursor-pointer"></i>
            </div>
        </li>
    )
}


