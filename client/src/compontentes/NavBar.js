import React from 'react';
//import M from "materialize-css";
import $ from 'jquery';

class Navbar extends React.Component{
    
    componentDidMount() {
        //M.AutoInit();
    }
    escondeMenu(){
        $(".sidenav-overlay").trigger("click");
        return false; 
    }
    render(){

        return (
            <nav className="navbar navbar-expand-lg navbar-dark px-5">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navBarSite" aria-controls="navBarSite" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navBarSite">
                    <ul className="navbar-nav mx-auto"> 
                        <li className="nav-item"><a  className="nav-link"  href="/">
                        Início</a>
                        </li>                       
                        <li className='nav-item'><a  className='nav-link' onClick={this.escondeMenu} href="/#sobre">Sobre</a></li>
                        <li className='nav-item'><a className='nav-link' onClick={this.escondeMenu} href="/#contato">Contato</a></li>
                        <li className="nav-item ">
                        <a  className="nav-link" onClick={this.escondeMenu} href='/calculadora-pensao-alimenticia'>Calculadora de pensão</a>
                        </li>
                    </ul>
                </div>

                </nav>
  
        )
       
       
    }
}
export default Navbar