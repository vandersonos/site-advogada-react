import React from 'react';
// import 'materialize-css/dist/css/materialize.min.css';

import './App.css';
import CardCartaoVisita from './compontentes/CardCartaoVisita';
import CardTopico from './compontentes/CardTopico.js';
import Contato from './compontentes/Contato.js';
import Navbar from './compontentes/NavBar.js';
import Artigos from './compontentes/CollArtigos.js';

function App() {
    let itens = [];
     for (let [key,value] of Artigos.entries()) {
        itens.push(<CardTopico key={key} id={value.id} alinhamento='left' titulo={value.titulo} texto={value.texto} img={value.img} itens={value.itens} links={value.links}/>);
    }
    return (
        <div className="App ">
            <Navbar artigos={Artigos}/>
            <div className='container mx-auto'>
                <div className='row mx-sm-5 mx-1'>
                <CardCartaoVisita id='sobre' />
                {itens}
                <Contato id='contato'/>
                </div>
            </div>
        </div>
    );
}

export default App;
