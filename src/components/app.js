import ReactDOM from "react-dom";
import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.authFunc = this.authFunc.bind(this);
    }
    authFunc() {
        const authData = { data: "Autorizar en mi sitio" };
        if (WavesKeeper) {
            WavesKeeper.auth( authData )
            .then(auth => {
                console.log( auth ); // muestra los resultados en la consola
                /*...procesando la informacion */
            }).catch(error => {
                console.error( error ); // muestra los resultados en la consola
                /*...procesando errores */
            })
        } else {
            alert("Para autorizar, WavesKeeper debe estar instalado.");
        }
    }
    render() {
        return (
            <div className="container">
                <input className="btn btn-primary" type="submit" value="Auth" onClick={this.authFunc}/>
            </div>
        )
    }
}

const app = document.getElementById('app');
if(app){
    ReactDOM.render(<App/>, app);
}