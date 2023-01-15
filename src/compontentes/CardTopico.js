import React from 'react';
import { Link } from 'react-router-dom'
class CardTopico extends React.Component {
    render() {
        let itens = [];
        for (const [key, value] of this.props.itens.entries()) {
            itens.push(<li key={key} className=''>{value}</li>);
        }
        let links = [];
        if (this.props.links) {
            for (const [key, value] of this.props.links.entries()) {
                links.push(
                    <Link key={key} className="waves-effect waves-light" to={value.url}>
                        <button type="button" className='btn btn-secondary p-8 w-96 flex justify-center bg-white'>{value.title}</button>
                    </Link>
                )
            }
        }

        let paragrafo = (
            <div className=" border-solid border-2 border-l-red-800 px-8">
                <ul className='bg-transparent my-4'>{itens}{links}</ul>
            </div>
        );
        let imagem = (
            <div className="card-image px-8">
                <h5 className="header">{this.props.titulo}</h5>
                <img src={this.props.img} alt="" className="figure-img" />
            </div>
        );
        return (
            <div id={this.props.id} className="flex m-2 h-72">
                {this.props.alinhamento === 'left' &&
                    <div className="grid grid-cols-2 p-8">
                        {imagem}
                        {paragrafo}
                    </div>
                }
                {this.props.alinhamento === 'center' &&
                    <div className="flex flex-col justify-center  p-8 w-full">
                        <h5 className="header">{this.props.titulo}</h5>
                        <div className='flex justify-center mt-8'>

                            {links}
                        </div>
                    </div>
                }
                {this.props.alinhamento !== 'left' && this.props.alinhamento !== 'center' &&
                    <div className="grid grid-cols-2  ">
                        {paragrafo}
                        {imagem}
                    </div>
                }
            </div>
        )
    }
}
export default CardTopico