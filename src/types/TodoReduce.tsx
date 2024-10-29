import {Todo} from "@/types/Todo";

export type TodoState = Todo[]

type TodoOptionalProps = {
    [key in keyof Todo]?: Todo[key]
}

type  addTodo = {
    type: "ADD",
    payload: Todo | Todo[]
}

type  removeTodo = {
    type: "REMOVE",
    payload: {id: number}
}

type  updateTodo = {
    type: "UPDATE",
    payload: TodoOptionalProps
}

export type TodoActions = addTodo | removeTodo | updateTodo