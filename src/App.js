import React, { Component } from 'react';
import Buscador from "./components/Buscador";
import Resultado from './components/Resultado';

class App extends Component {

  state = {
    termino: '',
    imagenes: [],
    pagina: '',
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }

  paginaAnterior = () => {
    //Leer el state de la pagina actual
    let pagina = this.state.pagina

    //Comprobar que la pagina no sea 1
    if (pagina === 1) return null;

    //Restar uno a la pagina actual
    pagina = pagina - 1;

    //Agregar el cambio al state
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });

    //Opcional un console.log
    // console.log(pagina)
  }

  paginaSiguiente = () => {
    //Leer el state de la pagina actual
    let pagina = this.state.pagina

    //Sumar uno a la pagina actual
    pagina = pagina + 1;

    //Agregar el cambio al state
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });

    //Opcional un console.log
    // console.log(pagina)
  }

  consultarApi = () => {

    const termino = this.state.termino
    const pagina = this.state.pagina;
    const paginas = 32;
    const url = `https://pixabay.com/api/?key=14075427-5ac7cffd921f9dde220c32446&q=${termino}&per_page=${paginas}&page=${pagina}`;

    console.log(url)

    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }))

  }

  datosBusqueda = (termino) => {
    this.setState({
      termino: termino,
      pagina: 1
    }, () => {
      this.consultarApi()
    })
  }

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">
            Buscador de imagenes
          </p>

          <Buscador datosBusqueda={this.datosBusqueda} />
        </div>
        <div className="row justify-content-center">
          <Resultado
            imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />
        </div>
      </div>
    );
  }
}

export default App;


