import React from 'react';
import { Link } from 'react-router-dom'
class CardTopico extends React.Component{
    render(){
        let itens = [];
        for (const [key,value] of this.props.itens.entries()) {
            itens.push(<li key={key} className='list-group-item'>{value}</li>);
        }
        let links = [];
        if(this.props.links){        
            for(const [key, value] of this.props.links.entries()){
                links.push(
                    <li key={key} className='list-group-item'>
                        <Link className="waves-effect waves-light" key={key} to={value.url}>
                        <button type="button" className='btn btn-secondary btn-sm mt-2'>{value.title}</button>
                        </Link>
                    </li>
                )
            }
        }
        
        let paragrafo = (
            <div className="col-12 col-sm-7 col-xl-6 offset-xl1 ">
                <h5  className="header">{this.props.titulo}</h5>
                <ul className='list-group list-group-flush'>{itens}{links}</ul>
            </div>
        );
        let imagem = (
            <div className="col-12 col-sm-5  col-xl-4 card-image">
                <img src={this.props.img} alt="" className="figure-img" />
            </div>
        );
        return (
            <div className="col-12 col-sm-12 col-xl-12 card-topico" >
                <div id={this.props.id} className="section scrollspy">
                    
                    <div className="card  mt-4 mx-sm-2 mx-md-5">            
                        { this.props.alinhamento === 'left' &&
                            <div className="row ">
                            {imagem}
                            {paragrafo}
                            </div>
                        }
                         { this.props.alinhamento !== 'left' &&
                            <div className="row ">
                            {paragrafo}
                            {imagem}
                            </div>
                        }
                        <div className="card-action">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CardTopico