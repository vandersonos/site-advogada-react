import React from 'react';
// import M from "materialize-css";
import $ from 'jquery';

class CustosColetivos extends React.Component{
    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this);
        let lista = props.lista
        this.calcula = this.calcula.bind(this);
        this.state = {
            // "DataSource" é uma fonte de dados global
            lista: lista,
            total: this.props.totalColetivo,
            nr_pessoas:1
        };
    }
    componentDidMount() {
        this.nrItens = 0
        // M.AutoInit();
    }
    calcula(){
        let lista = [
            ($('#item-aluguel').val()?$('#item-aluguel').val():0),
            ($('#item-condominio').val()?$('#item-condominio').val():0),
            ($('#item-luz').val()?$('#item-luz').val():0),
            ($('#item-agua').val()?$('#item-agua').val():0),
            ($('#item-internet').val()?$('#item-internet').val():0)
        ];
        let valor = lista.reduce((acumulador, i)=>{
            return acumulador + parseFloat(i);
        },0)
        valor = valor / ($('#cc_nr_pessoas').val() ?$('#cc_nr_pessoas').val() :1)
        this.setState({lista: lista, total: valor.toFixed(2)})
        this.props.onTotalColetivoChange(valor);
    }
    render(){
        
        let total = parseFloat(this.state.total)
        return (
            <div  className="card card-panel  p-4 mt-4">
                <div  id="modal-help-gcoletivo" className="modal" tabindex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Gastos coletivos</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        <p>
                            Aqui você vai discriminar somente os gastos coletivos de todas as pessoas da moradia, por exemplo: Aluguel, luz, água, etc.
                            <br></br>
                            Estes gastos são divididos pelo número de moradores da casa, para o cálculo do valor proporcional de cada morador e por consequência o gasto individual do beneficiado.
                        </p>                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                        </div>
                        </div>
                    </div>
                </div>
                
                    <div className='col'>
                        <h4 className='d-flex align-items-center'>Gastos coletivos dos moradores da residência
                            <span className="badge" data-toggle="modal" data-target="#modal-help-gcoletivo">
                            <i className="material-icons">info</i> 
                            </span>
                        </h4>
                    </div>
                 
                    <div className="form-group row">
                        <label className='col-sm-8' htmlFor="nr_pessoas">Quantas pessoas moram na residência?</label>
                        <input placeholder="" id="cc_nr_pessoas" type="number"  onChange={this.calcula} className="form-control form-control-sm col-12 col-sm-4 "/>
                    </div>
                 
                    <div className="form-group row">
                        <label className='col-sm-8' htmlFor="item-aluguel">Aluguel</label>
                        <input id="item-aluguel" type="number" onChange={this.calcula} className="form-control form-control-sm col-12 col-sm-4 "/> 
                    </div>
                 
                    <div className="form-group row">
                        <label className='col-sm-8' htmlFor="item-condominio">Condomínio</label>
                        <input id="item-condominio" type="number" onChange={this.calcula} className="form-control form-control-sm col-12 col-sm-4 "/> 
                    </div>
                 
                    <div className="form-group row">
                        <label className='col-sm-8' htmlFor="item-luz">Luz</label>
                        <input id="item-luz" type="number" onChange={this.calcula} className="form-control form-control-sm col-12 col-sm-4 "/> 
                    </div>
                 
                    <div className="form-group row">
                        <label className='col-sm-8' htmlFor="item-agua">Água</label>
                        <input id="item-agua" type="number" onChange={this.calcula} className="form-control form-control-sm col-12 col-sm-4 "/> 
                    </div>
                 
                    <div className="form-group row">
                        <label className='col-sm-8' htmlFor="item-internet">Internet/Telefone</label>
                        <input id="item-internet" type="number" onChange={this.calcula} className="form-control form-control-sm col-12 col-sm-4 "/> 
                    </div>                
                
                <div className='row' >
                    <div className='col-12 col-sm-8 ' >Total Gastos Individuais do Beneficiado</div>
                    <div id='total_individual' className='col-12 col-sm-4 '>R$ {total.toFixed(2).replace('.', ',')}</div> 
                </div>
            </div>
        )
       
    }
}
export default CustosColetivos