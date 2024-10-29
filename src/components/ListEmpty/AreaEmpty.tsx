import style from './style.module.css'

export const  AreaEmpty = () => {
    return (
        <div className={style.empty}>
            <i className="bi bi-file-earmark text-4xl mb-6"></i>
            <h1>Você ainda não tem tarefas cadastradas</h1>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}