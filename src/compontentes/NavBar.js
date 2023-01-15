import React from 'react';
import { Link } from "react-router-dom";

import $ from 'jquery';

class Navbar extends React.Component {

    componentDidMount() {
        //M.AutoInit();
    }
    escondeMenu() {
        $(".sidenav-overlay").trigger("click");
        return false;
    }
    render() {

        return (


            <nav className=" p-8">
                <ul className="flex justify-center px-8">
                    <li className="nav-item px-4 sm:px-8"><a className="nav-link" href="/">
                        Início</a>
                    </li>
                    <li className='nav-item px-4 sm:px-8 '><a className='nav-link ' onClick={this.escondeMenu} href="/#sobre">Sobre</a></li>
                    <li className='nav-item px-4 sm:px-8'><a className='nav-link' onClick={this.escondeMenu} href="/#contato">Contato</a></li>
                    <li className="nav-item px-4 sm:px-8 ">
                        <Link className="nav-link" to='/calculadora-pensao-alimenticia'>Calculadora de pensão</Link>
                    </li>
                </ul>
            </nav>


        )


    }
}
export default Navbar