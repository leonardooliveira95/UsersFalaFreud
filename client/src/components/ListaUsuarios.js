import React from 'react';
import Usuario from './Usuario';

class ListaUsuarios extends React.Component{
    
    constructor(){
        super();
        
    }
    render(){

        var usuariosComps = [];

        for(var usuario in this.props.usuarios) {
            
            var objUsu = this.props.usuarios[usuario];
            
            usuariosComps.push(<Usuario key={objUsu._id} id={objUsu._id} nome={objUsu.nome} foto={objUsu.foto}></Usuario>);
        }

        return (

            <div className="lista-usuarios">
                {usuariosComps}
            </div>

        );
    }
}

export default ListaUsuarios;