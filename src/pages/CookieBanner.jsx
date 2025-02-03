import React , {useEffect , useState} from "react";
import { Link , useLocation} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Alli.css';
import AlliPng from '../img/ALLI.png'

function CookieBanner(){
    const locationURL = useLocation();

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if(!localStorage.getItem("cookiesAccepted")){
            setIsVisible(true);
        }
    }, []);

    const alreadyAccepted = () => {
        localStorage.setItem("cookiesAccepted", "true");
        setIsVisible(false);
    }


    return (
        isVisible &&(
        <div id="cookie-banner" className="cookie-banner">

            
            <p>
                <img src={AlliPng} className="imgCookie" alt="Logo da ALLI Contabilidade em Guarulhos" title="ALLI Contabilidade"/>
                Este site utiliza cookies para oferecer uma experiência otimizada. Ao continuar, você concorda com nossa política de uso de cookies
                <Link 
                    to="/Politicas_de_Privacidade" 
                    className={`policiesCookies ${locationURL.pathname === '/Politicas_de_Privacidade' ? 'active' : ''}`}
                    > Política de Privacidade
                </Link>. 
                <button id="accept-cookies" onClick={alreadyAccepted} className="btn btn-primary">Aceitar</button>
            </p>
            
        </div>
        )
    );
}

export default CookieBanner;