import React from 'react';
// import M from "materialize-css";
import $ from 'jquery';

class DespesaItem extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // "DataSource" é uma fonte de dados global
            despesa: this.props.despesa,
            valor: this.props.valor
        };
    }
    componentDidMount() {
        // M.AutoInit();
    }
    render(){
        return (
            <div class='row'>
                <div class="form-group col-12 col-md-6 col-lg-6">
                    <label for="item-valor">{this.state.despesa}</label>
                    <input id="item-valor" type="number" value='{this.state.valor}' class="form-control"/>
                </div>
            </div>
        )
       
    }

 
}
export default DespesaItem