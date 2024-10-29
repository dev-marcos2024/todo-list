import  style from './style.module.css'
import {useTodoContext} from "@/contexts/TodoContext";
import {Li} from "@/components/List/li";

export const  List = () => {
    const {state} = useTodoContext()

    return(
        <ul className={style.list}>
            {state.map((todo) => (
                <Li key={todo.id} todo={todo}/>
            ))}
        </ul>
    )
}