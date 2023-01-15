import React from 'react';
// import M from "materialize-css";
import $ from 'jquery';

class TotalPensao extends React.Component {
    constructor(props) {
        super(props);
        this.imprimir = this.imprimir.bind(this);
    }
    componentDidMount() {
        // M.AutoInit();
    }
    imprimir() {
        window.print()
    }
    getMes(data) {
        let a = data.getMonth() + 1;
        if (a < 10) {
            a = '0' + a;
        }
        return a

    }

    render() {
        let valor = parseFloat(this.props.valor)
        let data = new Date();


        return (
            <div className="card card-panel  p-4">
                <div className='m-4'>
                    <div className='col-12'>
                        <h4>Valor estimado da pensão</h4>
                    </div>
                    <div className='col-12 col-sm-8  '>
                        <p className="resultado ">
                            R$ {valor.toFixed(2).replace('.', ',')}
                        </p>
                    </div>
                    <div className="col-12 col-sm-4 my-4">
                        <button className="btn btn-primary d-flex align-items-center" onClick={this.imprimir} >
                            Imprimir
                        </button>
                    </div>
                    <div className='row px-3 mt-4'> Estimativa calculada em: {data.getDate()}/{this.getMes(data)}/{data.getFullYear()}</div>
                    <div className='row px-3 mt-2'><p> * A utilização dessa estimativa para fins processuais é de inteira responsabilidade do advogado da parte.</p></div>
                </div>
            </div>
        )

    }


}
export default TotalPensao