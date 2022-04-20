import Style from "../styles/separado.module.css"

export default()=>{
    return(
        <>
        <h3 className={Style.red}>Texto em Vermelho Escuro</h3>
        <h3 className={Style.green}>Texto em Verde Escuro</h3>
        <h3 className={Style.blue}>Texto em Blue Escuro</h3>
        </>
    )
}