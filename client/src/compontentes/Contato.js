import React from 'react';
import $ from 'jquery';
import mask from 'jquery-mask-plugin';
import CalculadoraPensao from './calc-pensao/CalculadoraPensao';

class Contato extends React.Component{
    enviarMensagemWhatsapp(e){
        if(this.validaForm()){        
            const contatoNumber = encodeURIComponent('5553981119605');
            let nome = encodeURIComponent($('#nome').val());
            let telefone = encodeURIComponent($('#telefone').val());
            let email = encodeURIComponent($('#email').val());
            let msg = `Nome: ${nome}`;
            msg += ` Telefone: ${telefone}, `;
            msg += ` E-mail: ${email}, `;
            msg +=  encodeURIComponent($('#mensagem').val()); //this.document.getElementById('icon_mensagem').value;
            let target = `https://api.whatsapp.com/send?phone=${contatoNumber}&text=${msg}`;
            window.open(target);
        }
        
    }
    enviarMensagemEmail(){
        if(!this.validaForm()){ return;}
        let nome = $('#nome').val();
        let telefone = $('#telefone').val();
        let email = $('#email').val();
        let msg = `Nome: ${nome}, \n`;
        msg += ` Telefone: ${telefone}, \n`;
        msg += ` E-mail: ${email}, \n`;
        msg += $('#mensagem').val();
        let calculadora = this.getHtmlCalculadora() + $('.calculadora').html();

        $.ajax({
            type:'json',
            url: '/mail/send',
            data:{
                "nome":nome, 
                "email":email, 
                "telefone":telefone, 
                "mensagem":msg,
                "caculadora": calculadora,
                "estilo": '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">'
            },
            method:"POST",
            beforeSend:()=>{
                    $('.box-email').hide();
                    $('.box-carregando.email').show();
                    $('.box-mensagem.email').hide();
            },
            success:(data)=>{
                $('.box-mensagem.email').addClass("success");
                $('.box-mensagem.email').html("Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.");
                
            },
            error:(e)=>{
                $('.box-mensagem.email').addClass("error");
                $('.box-mensagem.email').html("Sua mensagem não foi enviada! Por favor, tente novamente ou escolha outra forma de contato.");
            },
            complete:()=>{
                $('.box-carregando.email').hide();
                $('.box-email').show();
                $('.box-mensagem.email').show();
            }
            
        })

    }
    validaForm(){
        let ok = true;
        let msg = '';
        if($('#nome').val() == ''){
            ok = false;
            msg += 'O campo <b>nome</b> é de preenchimento obrigatório!<br/>'
        }
        let tel = $('#telefone').unmask().val();
        if(tel == '' ){
            ok = false;
            msg += 'O campo <b>telefone</b> é de preenchimento obrigatório!<br/>'
        }else if(tel.length < 10){
            ok = false;
            msg += 'O campo <b>telefone</b> possui um valor inválido!<br/>'
        }
        this.maskTelefone()
        let email = $('#email').val();
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(email == ''){
            ok = false;
            msg += 'O campo <b>e-mail</b> é de preenchimento obrigatório!<br/>'
        }else if(!re.test(email)){
            ok = false;
            msg += 'O campo <b>e-mail</b> possui um valor inválido!<br/>'

        }

        if($('#mensagem').val() == ''){
            ok = false;
            msg += 'O campo <b>mensagem</b> é de preenchimento obrigatório!<br/>'
        }
        if(!ok){
            $('.box-mensagem.form').addClass("error");
            $('.box-mensagem.form').html(msg);
            $('.box-mensagem.form').show();
            $('.box-mensagem.form').focus();
        }
        return ok;
    }
    maskTelefone(){
         $('#telefone').mask('(00) 000000000');
        
    }
    getHtmlCalculadora(){
        console.log('calculadora', $('#item-luz').length)
        if(!$('#item-luz').length){
            return;
        }

        let  c= "<div>";
        c += "<h3>Gastos individuais do beneficiado</h3>";
        
        c += "<p><b>Plano de saúde: </b>"+$('#item-plano-saude').val()+"</p>";
        c += "<p><b>Mensalidade escolar: </b>"+$('#item-plano-saude').val()+"</p>";
        c += "<p><b>Material escolar: </b>"+$('#item-mensalidade-escolar').val()+"</p>";
        c += "<p><b>Lazer: </b>"+$('#item-lazer').val()+"</p>";
        c += "<p><b>Vestuáio: </b>"+$('#item-vestuario').val()+"</p>";
        c += "<p><b>Remédios: </b>"+$('#item-remedio').val()+"</p>";
        c += "<p><b>Higiene: </b>"+$('#item-higiene').val()+"</p>";
        c += "</br></br>";
        c += "<p><b>Quantas pessoas moram na residência: </b>"+$('#cc_nr_pessoas').val()+"</p>";
        c += "<p><b>Aluguel: </b>"+$('#item-aluguel').val()+"</p>";
        c += "<p><b>Condomínio: </b>"+$('#item-condominio').val()+"</p>";
        c += "<p><b>Luz: </b>"+$('#item-luz').val()+"</p>";
        c += "<p><b>Água: </b>"+$('#item-agua').val()+"</p>";
        c += "<p><b>Internet/Telefone: </b>"+$('#item-internet').val()+"</p>";
        c += "</br></br>";
        c += "<p><b>Proporcionalidadeinfo: </b></p>";
        c += "<p><b>Renda quem vai pagar (R$): </b>"+$('#p-renda-pagar').val()+"</p>";
        c += "<p><b>Renda quem vai receber (R$): </b>"+$('#p-renda-receber').val()+"</p>";
        c += "</div>";
        return c;
    }


    render(){
        let carregando = (
            <div className="alert alert-info">
                Aguarde ...
            </div>
        )
        return (
            <div className="col-12">
                <div id={this.props.id} className="section scrollspy">
                    <div className="card card-panel mt-4 px-4 mb-5 py-4">
                        <div className="row">                              
                            
                            <form className="col-12 col-sm-6 form-contato">
                                <div className="col-12">
                                    <h5 className="valign-wrapper">Contato</h5>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nome">Nome</label>
                                    <input type="text" className="form-control" id="nome" />
                                </div>
                                
                                <div className="form-group">
                                    <label htmlFor="telefone">Telefone</label>
                                    <input id="telefone" type="tel" maxLength='14' className="form-control" onBlur={(e)=> this.maskTelefone(e)}/>
                                    
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">E-mail</label>
                                    <input id="email" type="email" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mensagem">Mensagem</label>
                                    <textarea id="mensagem" className="form-control"></textarea>
                                </div>
                                
                            </form>
                            
                            <div className="form-contato-acoes col-12 col-sm-6">
                          
                                <div className='row box-whatsapp mt-5 mb-5'>
                                    <div className='col-3'><img src='img/whatsapp.png' alt='Icone do whatsapp'/></div>
                                    <div className='col-9'>
                                        <button className="btn btn-primary btn-sm" onClick={(e) => this.enviarMensagemWhatsapp(e)}>
                                        <i className="material-icons">send</i>Enviar whatsapp
                                        </button>
                                    </div>
                                </div>
                                <div className="row box-carregando whatsapp mb-5">
                                    {carregando}
                                </div>
                                <div className='row box-email mb-3'>
                                    <div className='col-3'>
                                        <img src='img/email.png' alt='Icone do e-mail'/>
                                    </div>
                                    <div className='col-9'>
                                        <button className="btn btn-primary btn-sm" onClick={(e) => this.enviarMensagemEmail(e)}>
                                        <i className="material-icons">send</i>Enviar email
                                        </button>
                                    </div>
                                </div>
                                <div className="row box-carregando email">
                                    {carregando}
                                </div>
                                <div className="row box-mensagem email">
                                </div>
                                <div className='row'>
                                    <div className="col-12 box-mensagem form mb-4"></div>
                                    <div className="col-12 form-title-pagina-facebook mt-3">
                                        <h6 className="valign-wrapper">Ou acesse minha página no facebook</h6>
                                    </div>
                                    <div className="col-12">
                                        <div className='row'>
                                            <div className='col-3'>   
                                                <a target='_blank' rel="noopener noreferrer" href='https://www.facebook.com/taianemartinscosta/'>
                                                <img src='img/facebook.png' alt='Icone do facebook'/>
                                                </a>
                                            
                                            </div>
                                            <div className='col-9'>
                                                <a target='_blank' rel="noopener noreferrer" href='https://www.facebook.com/taianemartinscosta/'>
                                                <button className="btn btn-primary btn-sm" >
                                                <i className="material-icons">trending_flat</i>Acessar página<i className="material-icons right  hide-on-small-only"></i>
                                                    </button>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Contato
/*
*/