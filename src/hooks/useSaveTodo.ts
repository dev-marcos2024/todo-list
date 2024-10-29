import { AES, enc } from 'crypto-js';
import { useTodoContext } from "@/contexts/TodoContext";
import { useEffect} from "react";
import { Todo } from "@/types/Todo";

const SECRET_KEY = process.env.NEXT_SECRET_KEY as string;
const LOCAL_STORAGE_KEY = "TODO_DATA";

export const useSaveTodo = (): void => {
    const { state, dispatch } = useTodoContext();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleUpdateTodo = () => {
        const value = AES.encrypt(JSON.stringify(state), SECRET_KEY).toString();
        localStorage.setItem(LOCAL_STORAGE_KEY, value);
    };

    useEffect(() => {
        try {
            const todoData = localStorage.getItem(LOCAL_STORAGE_KEY);
            if (!todoData) return;

            const bytes = AES.decrypt(todoData, SECRET_KEY);
            const decryptedData: Todo[] = JSON.parse(bytes.toString(enc.Utf8));
            dispatch({ type: "ADD", payload: decryptedData });
        } catch (error) {
            console.error('Error reading todo data:', error);
            alert('Não foi possível obter os dados');
        }
    }, []);

    useEffect(() => {
        handleUpdateTodo();
    }, [handleUpdateTodo, state]);
};
