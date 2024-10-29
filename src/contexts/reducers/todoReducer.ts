import {TodoActions, TodoState} from "@/types/TodoReduce";

export const initialState: TodoState= []

export const todoReducer = (state: TodoState, action: TodoActions): TodoState => {

    switch (action.type){
        case "ADD":
            return [
                ...state,
                {
                    id: action.payload.id,
                    title: action.payload.title,
                    completed: action.payload.completed
                }];

        case "REMOVE":
            return state.filter(t => t.id !== action.payload.id);

        case "UPDATE":
            return state.map((item)=>{
                if (item.id === action.payload.id){
                    item.title = action.payload.title ?? item.title
                    item.completed = action.payload.completed ?? item.completed
                }
                return item
            });

        default:
            return state
    }
}