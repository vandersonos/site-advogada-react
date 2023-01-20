import React from 'react';

class CardCartaoVisita extends React.Component {

    render() {
        return (
            <div id={this.props.id} className="mb-8 ">
                <div className="p-8">
                    <div className="grid md:grid-cols-2 px-8">
                        <div className="fotoCartao mb-2 flex justify-center items-center">
                            <img src="img/taiane_perfil.jpeg" alt="" className=" w-64 rounded img-fluid img-perfil" />
                        </div>
                        <div className="textoCartao bg-slate-50 p-8 m-4 w-96">
                            <p className="nome text-red-100">Taiane Martins Costa <br />OAB/RS 108400</p>
                            <p className="text-slate-600 intro-pessoal mt-4" >
                                Advogada Especialista em Direito de Família e Sucessões.<br />
                            </p>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
export default CardCartaoVisita