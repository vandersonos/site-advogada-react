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

        return (
            <div id={this.props.id} className="flex flex-col m-4 sm:m-8 sm:w-64 ">
                <div className='card-body'>

                    <h5 className="header">{this.props.titulo}</h5>
                    <div>

                        <p>{this.props.texto}</p>
                        <div className=" px-4">
                            <ul className='bg-transparent my-4'>{itens}</ul>
                        </div>


                        {links.length > 1 &&
                            <div className='flex justify-center mt-8'>

                                {links}
                            </div>
                        }
                    </div>
                </div>


            </div>
        )
    }
}
export default CardTopico