import  style from './style.module.css'
import Image from "next/image";
import brand from '../../assets/brand.png'
import {Input} from "../Input/Input";
import {Button} from "../Button/Button";
import {useState} from "react";
import {useTodoContext} from "@/contexts/TodoContext";

export const Header= ()=>{
    const [value, setValue] = useState('');
    const [newId, setNewId] = useState(1);
    const {dispatch} = useTodoContext();

    const handleSetValue = (event: string) => {
        setValue(event)
    }
    const handleOnClick = ()=>{
        if(value === "") return;
        dispatch({
            type: "ADD",
            payload: {id: newId , title: value, completed: false}
        });
        setNewId(newId + 1);
        setValue("");
    }

    return(
        <div className={style.header}>
            <Image
                src={brand}
                width={219}
                priority
                alt="Picture of the author"
            />
            <div className={style.action}>
                <Input valor={value} handleChange={handleSetValue}/>
                <Button handleClick={handleOnClick}/>
            </div>
        </div>
    )
}