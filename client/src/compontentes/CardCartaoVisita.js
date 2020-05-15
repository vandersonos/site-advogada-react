import React from 'react';

class CardCartaoVisita extends React.Component{
    
    render(){
        return (
            <div className="col-12 ">
                <div id={this.props.id} className="section scrollspy">
                    <div className="card-panel hoverable  lighten-5 z-depth-1 cartaoVisita mt-4 mx-sm-2 px-2 mx-md-5">
                        <div className="row ">
                            <div className="col-12 col-sm-4 fotoCartao mb-2">
                                <img src="img/taiane_perfil.jpeg" alt="" className="rounded-circle img-fluid img-perfil" />
                            </div>
                            <div className="col-12 col-sm-8 textoCartao">
                                <span className="nome">Taiane Martins Costa</span>
                                <p className="black-text intro-pessoal" >
                                    Advogada Especialista em Direito Civil e Processo Civil, que atua na área de Direito de Família. <br/>
                                    Trabalha prestando suporte jurídico e serviço de correspondência em Pelotas e região.
                                </p>
                            </div>
         
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CardCartaoVisita