import style from './style.module.css'
import {List} from "@/components/List/List";

export  const Main = () => {
    return (
        <div className={style.main}>
            <List/>
        </div>
    )
}