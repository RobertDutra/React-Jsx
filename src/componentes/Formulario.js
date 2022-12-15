function Formulario(){
    
    function armazenarUsuario(e){
        e.preventDefault();
        return(
            alert('Armazenou localmente  o úsuario.')
        )
    }
    
    return(
        <div>
            <h2>Cadastrado</h2>
            <form onSubmit={armazenarUsuario}>
                <div>
                    <input type={'text'} placeholder= {'Insira seu nome'}></input>
                </div>
                <div>
                    <input type={'submit'} value={'Cadastro'}></input>
                </div>

            </form>

        </div>
    )
}

export default Formulario;