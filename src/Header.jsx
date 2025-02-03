import { Link , useLocation} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Alli.css';
import AlliPng from './img/ALLI.png'
import { useState } from "react";




function Header(){
    const locationURL = useLocation();

    const [isDropdownOpen, setDropdownOpen] = useState(false);

    
    //ANIMAÇÃO DROPDOWN MENU
    const dropdownMouseEnter = () => {
        setDropdownOpen(true);
    };
    const closeDropMouseLeave = () => {
        setDropdownOpen(false);
    };
    

    //ANIMAÇÃO MOBILE
    const [menuMobile, setMenuMobile] = useState(false);

    const toggleMobileMenu = () => {
        setMenuMobile(!menuMobile);
    }

    const closeMobileMenu = () => {
        setMenuMobile(false);
    }

    return (
            <header>
                {/* LOGO DO MENU*/}               
                <nav>
                    <div className="div-logo-nav">
                        <Link to="/" className="navbar-logo">
                            <img src={AlliPng} alt="Logo da ALLI Contabilidade" title="ALLI Contabilidade"/>                    
                        </Link>
                    </div>
                {/* FIM LOGO DO MENU*/}    

                    {/* MENU MOBILE */}
                    <div 
                        className={`mobile-menu ${menuMobile ? "active" : ''}`} 
                        onClick={toggleMobileMenu}
                    >
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                    {/* MENU MOBILE */}
                    
                    <ul className={`nav-list ${menuMobile ? "active" : ""}`}>
                        <li className="nav-item">
                            <Link 
                                to="/" 
                                className={`nav-link ${locationURL.pathname === '/' ? 'active' : ''}`}
                                onClick={closeMobileMenu}    
                            >
                            Ínicio</Link>
                        </li>

                        <li className="nav-item nav-dropdown">
                            <Link 
                                className={`nav-link ${locationURL.pathname === '/' ? 'active' : ''}`}
                            >
                                Empresa 
                                <i className="mdi mdi-menu-down"></i>
                            </Link>
                            <span></span>
                            <ul className="dropdown-menu">
                                <li className="dropdown-item">
                                    <Link 
                                        to="/empresa/politicas-de-privacidade" 
                                        className={`nav-link ${locationURL.pathname === '/empresa/politicas-de-privacidade' ? 'active' : ''}`}
                                        onClick={closeMobileMenu}>Políticas de Privacidade</Link>
                                </li>
                                <li className="dropdown-item">
                                    <Link 
                                        to="/empresa/conheca-a-alli" 
                                        className={`nav-link ${locationURL.pathname === '/empresa/conheca-a-alli' ? 'active' : ''}`}
                                        onClick={closeMobileMenu}>Conheça a ALLI</Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link to="/servicos" className={`nav-link ${locationURL.pathname === '/servicos' ? 'active' : ''}`} onClick={closeMobileMenu} >Serviços</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/solucoes" className={`nav-link ${locationURL.pathname === '/solucoes' ? 'active' : ''}`} onClick={closeMobileMenu} >Soluções</Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/contato" className={`nav-link ${locationURL.pathname === '/contato' ? 'active' : ''}`} onClick={closeMobileMenu} >Contato</Link>
                        </li>
                    </ul>
                </nav>              
            </header> 

    )
}

export default Header;