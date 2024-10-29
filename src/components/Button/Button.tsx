import  style from './style.module.css'
interface  Props{
    handleClick: () => void
}

export  const Button = ({handleClick}: Props)=>{

    return(
        <button className={style.button} onClick={handleClick}>
            Criar
            <i className="bi bi-plus-circle"></i>
        </button>
    )
}