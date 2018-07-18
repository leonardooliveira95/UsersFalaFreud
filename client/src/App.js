import React, { Component } from 'react';
import ListaUsuarios from './components/ListaUsuarios';

import './css/App.css';
import logo from './img/falafreud.svg';

class App extends Component {

	constructor(){
		super();
		this.state = {
			input: '',
			usuarios: [],
			resultadoPesquisa: []
		}

		this.onChange = this.onChange.bind(this);
		this.pesquisarUsuarios = this.pesquisarUsuarios.bind(this);
	}

	componentDidMount() {

		//this.gravarUsuarios();

		this.lerUsuarios()
            .then(res => {

				for(var usuario in res){
					res[usuario].foto = Math.floor(Math.random() * (5 - 1) + 1);
				}
				
                this.setState({ 
					usuarios: res,
					resultadoPesquisa: res
                });


            })
			.catch(err => console.log(err));
	};
    
    lerUsuarios = async () => {
        
        const response = await fetch('/api/usuario');
		const body = await response.json();

		if(response.status !== 200){
            throw Error(body.message);
        }
        
        return body;
    };

	gravarUsuarios = async () => {

		const response = await fetch('/api/usuario', {
			"method": "POST", body: JSON.stringify({ nome: 'Erick' }), headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
		});

		const body = await response.json();

		if (response.status !== 200)
			throw Error(body.message);

		return body;
	};

	onChange(e){
		this.setState({
			input: e.target.value
		});
	};

	pesquisarUsuarios(){
		
		var usuarios = this.state.usuarios;

		usuarios = usuarios.filter(x => x.nome.toLowerCase().indexOf(this.state.input.toLowerCase()) > -1);

		this.setState({
			resultadoPesquisa: usuarios
		});

	};

	render() {

		return (

			<div className="app">

				<header className="app-header">
					<img src={logo} className="app-logo" alt="logo" />
				</header>

				<div className="container">
					<h2>Usuários</h2>
					<div className="divisor"></div>
					<form className="form-pesquisa">
						<div>
							<input className="input-pesquisa" placeholder="Digite para pesquisar..."
							onChange={this.onChange}/>
							<button type="button" onClick={this.pesquisarUsuarios}>Pesquisar</button>
						</div>
					</form>
					{
						this.state.resultadoPesquisa.length > 0 ? 
						<ListaUsuarios usuarios={this.state.resultadoPesquisa}></ListaUsuarios> : 
						<div className="mensagem">Nenhum resultado encontrado</div>
					}
					
				</div>
			</div>

		);
	}
}

export default App;

