import React from 'react';
import foto1 from '../img/1.png';
import foto2 from '../img/2.png';
import foto3 from '../img/3.png';
import foto4 from '../img/4.png';
import foto5 from '../img/5.png';

class Usuario extends React.Component {

    render() {

        var usuario = {
            id: this.props.id,
            nome: this.props.nome,
            foto: this.props.foto
        };

        return (

            <div className="item-lista-usuarios">
                <div className="container-foto">
                    <img src={usuario.foto === 1 ? foto1 :
                        usuario.foto === 2 ? foto2 :
                            usuario.foto === 3 ? foto3 :
                                usuario.foto === 4 ? foto4 :
                                    usuario.foto === 5 ? foto5 : foto1}></img>
                </div>
                <div>
                    <div className="container-id">
                        <label>Id: </label>
                        <span>{usuario.id}</span>
                    </div>
                    <div className="container-nome">
                        <label>Nome: </label>
                        <span>{usuario.nome}</span>
                    </div>
                </div>


            </div>

        );
    }

}

export default Usuario;