import React, { Component } from 'react'

class Buscador extends Component {

    //Esto se hace para poder crear una referencia a un objeto
    busquedaRef = React.createRef();

    //Obtener datos, tambien conocido como Handler
    obtenerDatos = (e) => {
        // Evita que en el buscador de enlaces se muestre el contenido q se envia
        e.preventDefault();

        //Tomamos el valor del input y lo enviamos al componente principal
        const termino = this.busquedaRef.current.value;
        this.props.datosBusqueda(termino);
    }

    render() {
        return (
            //onSubmit sirve para referenciarle que hacer cuando se oprima un submit
            //Tambien existe onClick y demas
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-9">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Busca tu imagen. Ejemplo: Cafe"></input>
                    </div>
                    <div className="form-group col-md-3">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar..."></input>
                    </div>
                </div>
            </form>
        );
    }
}

export default Buscador;