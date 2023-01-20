import React from 'react';
// import 'materialize-css/dist/css/materialize.min.css';

import './App.css';
import CardCartaoVisita from './compontentes/CardCartaoVisita';
import CardTopico from './compontentes/CardTopico.js';
import CardTopicoVertical from './compontentes/CardTopicoVertical.js';
import Contato from './compontentes/Contato.js';
import Navbar from './compontentes/NavBar.js';
import Footer from './compontentes/Footer.js';
import Artigos from './compontentes/CollArtigos.js';

function App() {
    let itens = [];
    for (let [key, value] of Artigos.entries()) {
        itens.push(<CardTopicoVertical key={key} id={value.id} alinhamento={value.alinhamento} titulo={value.titulo} texto={value.texto} img={value.img} itens={value.itens} links={value.links} />);
    }
    /*



    
    
    
    
    */
    return (
        <div className="App ">
            <div className="flex flex-col">
                <section className='section-card-visit'>
                    <Navbar artigos={Artigos} />
                    <div className='flex  justify-center bg-transparent text-white px-8 py-2'>
                        <CardCartaoVisita id='sobre' />
                    </div>
                </section>

                <section className='section-cards p-2 sm:p-4'>
                    <h3 className='text-center m-8 header'>Quais minhas princípais àreas de atuação?</h3>
                    <div className='flex flex-col md:flex-row justify-center items-center sm:items-start bg-transparent text-white pb-8'>
                        {itens}
                    </div>
                </section>
                <section className='section-action'>
                    <div className='flex  justify-center bg-transparent text-white'>
                        <CardTopico key="3" id="calc-pensao" alinhamento="center" titulo="Gostaria de estimar o valor da pensão do seu filho?"
                            texto="" img=''
                            itens={["Ação de Alimentos", "Ação de Regualação de Visitas"]}
                            links={[{ url: "/calculadora-pensao-alimenticia", title: "Clique aqui e calcule os valores" }]}
                        />
                    </div>
                </section>






            </div>


        </div>
    );
}

export default App;
