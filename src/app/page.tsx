"use client";
import {useSaveTodo} from "@/hooks/useSaveTodo";
import {Header} from "@/components/Header/Header";
import {Main} from "@/components/Main/Main";
import {AreaEmpty} from "@/components/ListEmpty/AreaEmpty";
import {useTodoContext} from "@/contexts/TodoContext";


export default function Home() {
    // Monotorando a mudança de estado da Todo List
    useSaveTodo();
    const {state} = useTodoContext();


  return (
      <div>
          <Header/>
          {state.length > 0 ?
             <Main/>
          :
            <AreaEmpty/>
          }
      </div>
  );
}
