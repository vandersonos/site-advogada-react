import React from 'react';
// import M from "materialize-css";
import $ from 'jquery';

class CustosIndividuais extends React.Component {
    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this);
        let lista = []
        this.calcula = this.calcula.bind(this);
        this.state = {
            // "DataSource" é uma fonte de dados global
            lista: lista,
            total: this.props.totalIndividual,
            nr_moradores: 1
        };
    }
    componentDidMount() {
        this.nrItens = 0
        // M.AutoInit();
    }
    calcula() {
        let lista = [
            ($('#item-internet').val() ? $('#item-internet').val() : 0),
            ($('#item-plano-saude').val() ? $('#item-plano-saude').val() : 0),
            ($('#item-mensalidade-escolar').val() ? $('#item-mensalidade-escolar').val() : 0),
            ($('#item-material-escolar').val() ? $('#item-material-escolar').val() : 0),
            ($('#item-lazer').val() ? $('#item-lazer').val() : 0),
            ($('#item-vestuario').val() ? $('#item-vestuario').val() : 0),
            ($('#item-higiene').val() ? $('#item-higiene').val() : 0),
            ($('#item-remedio').val() ? $('#item-remedio').val() : 0)
        ];
        let valor = lista.reduce((acumulador, i) => {
            return acumulador + parseFloat(i);
        }, 0)
        this.setState({ lista: lista, total: valor.toFixed(2) })
        this.props.onTotalIndividualChange(valor);
    }
    render() {
        return (
            <div className="card card-panel form-horizontal  p-4">

                <div className='m-4'>
                    <h4 className=''>Gastos individuais do beneficiado


                    </h4>
                    <p className='text-sm border-2 p-2'>Aqui você deve discriminar somente os gastos individuais do beneficiado, como por exemplo: Educação, saúde, alimentos, vestuário, lazer entre outros.</p>

                </div>


                <div className="form-group row">
                    <label className='col-sm-8' htmlFor="item-plano-saude">Plano de saúde</label>
                    <input id="item-plano-saude" type="number" onChange={this.calcula} className="form-control form-control-sm col-12 col-sm-4" />
                </div>

                <div className="form-group row">
                    <label className='col-sm-8' htmlFor="item-mensalidade-escolar">Mensalidade escolar</label>
                    <input id="item-mensalidade-escolar" type="number" onChange={this.calcula} className="form-control form-control-sm col-12 col-sm-4" />
                </div>

                <div className="form-group row">
                    <label className='col-sm-8' htmlFor="item-material-escolar">Material escolar</label>
                    <input id="item-material-escolar" type="number" onChange={this.calcula} className="form-control form-control-sm col-12 col-sm-4" />
                </div>

                <div className="form-group row">
                    <label className='col-sm-8' htmlFor="item-lazer">Lazer</label>
                    <input id="item-lazer" type="number" onChange={this.calcula} className="form-control form-control-sm col-12 col-sm-4" />
                </div>

                <div className="form-group row">
                    <label className='col-sm-8' htmlFor="item-vestuario">Vestuário</label>
                    <input id="item-vestuario" type="number" onChange={this.calcula} className="form-control form-control-sm col-12 col-sm-4" />
                </div>

                <div className="form-group row">
                    <label className='col-sm-8' htmlFor="item-remedio">Remédios</label>
                    <input id="item-remedio" type="number" onChange={this.calcula} className="form-control form-control-sm col-12 col-sm-4" />
                </div>
                <div className="form-group row">
                    <label className='col-sm-8' htmlFor="item-internet">Higiene</label>
                    <input id="item-higiene" type="number" onChange={this.calcula} className="form-control form-control-sm col-12 col-sm-4" />
                </div>

                <div className='m-4' >
                    <h5>Total Gasto Individuais</h5>
                    <h5>R$ {this.state.total}</h5>
                </div>
            </div>
        )

    }
}
export default CustosIndividuais