import React from 'react';
// import M from "materialize-css";
// import $ from 'jquery';
import './CalculadoraPensao.css';
import CustosIndividuais from './CustosIndividuais.js';
import CustosColetivos from './CustosColetivos.js';
import Proporcionalidade from './Proporcionalidade.js';
import TotalPensao from './TotalPensao.js';
import Navbar from '../NavBar.js';
import Artigos from '../CollArtigos.js';
import Contato from '../Contato.js';
import Footer from '../Footer.js';

class CalculadoraPensao extends React.Component {
    constructor(props) {
        super(props);
        this.handleTotalIndividualChange = this.handleTotalIndividualChange.bind(this);
        this.handleTotalColetivoChange = this.handleTotalColetivoChange.bind(this);
        this.handleTotalPensaoChange = this.handleTotalPensaoChange.bind(this);
        this.state = { totalIndividual: 0.0, totalColetivo: 0.0, custoTotal: 0.0, totalPensao: 0 };
    }

    handleTotalIndividualChange(valor) {
        this.setState({ totalIndividual: valor, custoTotal: parseFloat(valor) + parseFloat(this.state.totalColetivo) });

    }

    handleTotalColetivoChange(valor) {
        this.setState({ totalColetivo: valor, custoTotal: parseFloat(this.state.totalIndividual) + parseFloat(valor) });

    }
    handleTotalPensaoChange(valor) {
        this.setState({ totalPensao: valor });
    }

    componentDidMount() {

        // M.AutoInit();
    }
    render() {
        let total = parseFloat(this.state.totalPensao)
        let custoTotal = parseFloat(this.state.custoTotal)
        return (
            <div className="flex flex-col">
                <Navbar artigos={Artigos} />
                <div className='flex justify-center bg-papel'>
                    <div className='max-w-[40rem] calculadora '>
                        <div className="col-12 col-md-12 col-lg-8 offset-lg-2 bg-papel">
                            <div className="border-2 card card-panel p-4 mt-4">
                                <div className='flex row '>
                                    <div className="w-1/12 m-auto col-4 col-md-1 p-2">
                                        <img src="../img/calculadora.svg" className='logo-calculadora'></img>
                                    </div>
                                    <div className="w-11/12 p-1 col-8 col-md-11 ">
                                        <h6>Estimativa de valor da pensão de alimentícia</h6>
                                        <p className='text-sm'>Os valores calculados abaixo são apenas uma estimativa, o valor acertado será defindo em audiência.</p>
                                    </div>
                                </div>
                            </div>
                            <CustosIndividuais totalIndividual={this.state.totalIndividual} onTotalIndividualChange={this.handleTotalIndividualChange} />
                            <hr />
                            <CustosColetivos totalColetivo={this.state.totalColetivo} onTotalColetivoChange={this.handleTotalColetivoChange} />
                            <hr />
                            <div className="card card-panel  p-4">
                                <div className='grid grid-cols-2 m-4'>
                                    <div className=''>
                                        <h6>Total do custo</h6>
                                        <h6><small> Custo Individual + (Custo Coletivo / Moradores)</small></h6>
                                    </div>
                                    <div className=''>
                                        <h6 className="resultado">
                                            R$ {custoTotal.toFixed(2).replace('.', ',')}
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <Proporcionalidade custoTotal={this.state.custoTotal} onTotalPensaoChange={this.handleTotalPensaoChange} />

                            <hr />
                            <TotalPensao valor={total.toFixed(2).replace('.', ',')} />

                        </div>
                    </div>
                </div>
                <hr />
                <section className='section-contact'>
                    <div className='flex  justify-center '>
                        <Contato id='contato' />
                    </div>
                </section>
                <Footer />

            </div>
        )

    }
}
export default CalculadoraPensao