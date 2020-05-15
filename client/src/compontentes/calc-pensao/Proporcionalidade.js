import React from 'react';
//import M from "materialize-css";
import $ from 'jquery';

class Proporcionalidade extends React.Component{
    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this);
        this.calculaValor = this.calculaValor.bind(this);  
        this.state = {
            // "DataSource" é uma fonte de dados global
            rendaPagador:0.0,
            rendaBeneficiado:0.0,
            valorTotal : 0.0,
            perc_pagador: 0.0,
            perc_recebedor: 0.0
        };

    }
    componentDidMount() {
        this.nrItens = 0
        //M.AutoInit();
    }
     calculaValor(){
        let valorPagador = parseFloat($('#p-renda-pagar').val())
        let valorRecebedor = parseFloat($('#p-renda-receber').val())
        if(!valorPagador){
            return
        }
        let perc_pagador = 100
        let perc_recebedor = 0
        let total = valorRecebedor + valorPagador;
        if(valorRecebedor){
            perc_pagador = parseFloat((valorPagador * 100)/total)
            perc_recebedor = parseFloat((valorRecebedor * 100)/total)
        }
        this.setState({
            rendaPagador:valorPagador,
            rendaBeneficiado:valorRecebedor,
            valorTotal : total,
            perc_pagador:perc_pagador,
            perc_recebedor: perc_recebedor
        })
        this.props.onTotalPensaoChange((parseFloat(this.props.custoTotal)*(perc_pagador/100)));
    }
    render(){        
        let perc_pagador = this.state.perc_pagador;
        let perc_recebedor = this.state.perc_recebedor;
        
        let valorPagadorTotal = (parseFloat(this.props.custoTotal)*(perc_pagador/100)).toFixed(2).replace('.',',')
        let valorRecebedorTotal  = (parseFloat(this.props.custoTotal)*(perc_recebedor/100)).toFixed(2).replace('.',',')

        perc_pagador = perc_pagador.toFixed(2).replace('.',',')
        perc_recebedor = perc_recebedor.toFixed(2).replace('.',',')
        
        return (
            <div className="card card-panel  p-4 mt-4">
                <div  id="modal-help-gproporcional" className="modal" tabindex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Proporcionalidade</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <p>
                            Aqui você vai discriminar a renda dos responsaveis pelo beneficiado, para fins de caculo de proporcionalidade, pois o gasto total deve ser dividido de forma proporcional por ambas as partes responsáveis. Ou seja, o responsável que ganha mais deve colaborar mais nos gastos do beneficiado.
                        </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                        </div>
                        </div>
                    </div>
                </div>

                
                <div className='row '>
                    <div className='col-12'>
                        <h4 className='d-flex align-items-center'>Proporcionalidade 
    
                            <span className="badge" data-toggle="modal" data-target="#modal-help-gproporcional">
                            <i className="material-icons">info</i> 
                            </span>
                        </h4>
                    </div>
                </div>
                <div className='row '> 
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="p-renda-pagar">Renda quem vai pagar (R$)</label>
                            <input placeholder="" id="p-renda-pagar" type="number" onChange={this.calculaValor} className="form-control"/>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label htmlFor="p-renda-receber">Renda quem vai receber (R$)</label>
                            <input placeholder="" id="p-renda-receber" type="number" onChange={this.calculaValor}  className="form-control"/>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-12 col-md-6">
                        <h6>Porcentagem de responsabilidade pagador</h6>
                        <div className='paragrafo-resultado'>
                            <div className="resultado col col-sm-6">
                                {perc_pagador} %
                            </div>
                            <div className="resultado col-6">
                                R$ {valorPagadorTotal} 
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-12 col-md-6">
                        <h6>Porcentagem de responsabilidade beneficiado</h6>
                        <div className='paragrafo-resultado'>
                            <div className="resultado col col-sm-6">
                                {perc_recebedor} % 
                            </div>
                            <div className="resultado col col-sm-6">
                                R$ {valorRecebedorTotal}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
       
    }

 
}
export default Proporcionalidade