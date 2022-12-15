

function Evento(){
    
    function disparar(){
        return(
            alert("Ativou")
        );
        
    }
    
    return (
        <div>
            <p>Disparar Evento</p>
            <button onClick={disparar}>Ativar</button>
        </div>
        
    )
}

export default Evento;  