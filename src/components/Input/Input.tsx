import  style from './style.module.css'
interface  Props{
    valor: string,
    handleChange: (event: string) => void
}

export const Input = ({valor, handleChange}: Props) => {
    return(
        <input
            className={style.input}
            type="text"
            placeholder="Adicione uma nova tarefa"
            value={valor}
            onChange={event => handleChange(event.target.value)}
        />
    )
}