"use client"
import React, {createContext, ReactNode, useContext, useReducer} from "react";
import {initialState, todoReducer} from "@/contexts/reducers/todoReducer";
import {TodoActions, TodoState} from "@/types/TodoReduce";

interface ContextType {
    state: TodoState
    dispatch: React.Dispatch<TodoActions>
}
interface Props{
    children: ReactNode
}
export const TodoContext = createContext<ContextType>({
    state: initialState,
    dispatch: ()=> null
});

export  const TodoContextProvider = ({children}:Props)=>{
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return(
        <TodoContext.Provider value={{state, dispatch}}>
            {children}
        </TodoContext.Provider>
        )
}

export const useTodoContext = ()=> useContext(TodoContext)