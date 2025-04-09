import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Alli.css';

function Footer(){
    return(
        
        <footer>
            <div className="footer-container">
                <div className="footer-column">
                    <h2>Navegação</h2>      
                    <ul>
                        <li><Link to="/" className={`navFooter`}>ínicio</Link></li>
                        <li><Link to="/empresa/conheca-a-alli" className={`navFooter`} >Conheça a ALLI</Link></li>
                        <li><Link to="/empresa/politicas-de-privacidade" className={`navFooter`}>Políticas de Privacidade</Link></li> 
                        <li><Link to="/servicos" className={`navFooter`}>Serviços</Link></li>    
                        <li><Link to="/solucoes" className={`navFooter`}>Soluções</Link></li>    
                        <li><Link to="/contato" className={`navFooter`}>Fale Conosco</Link></li>  
                    </ul>          
                </div>    
                <div className="footer-column">
                    <h2>Entre em contato</h2>
                    <ul>
                        <li className="navFooter">
                            <a href="mailto:contabil@allicontabilidade.com.br" className="navFooter">
                                <i className="mdi mdi-email-outline iconsFooter"></i>contabil@allicontabilidade.com.br
                            </a>
                        </li>
                        <li className="navFooter">
                            <a href="https://wa.me/5511967979650" target="_blank" rel="noopener noreferrer" className="navFooter">
                                <i className="mdi mdi-phone iconsFooter"></i>(11) 96797-9650
                            </a>    
                        </li>                            
                        <li className="navFooter">
                            <a href="https://wa.me/5511973647551" target="_blank" rel="noopener noreferrer" className="navFooter">
                                <i className="mdi mdi-whatsapp iconsFooter"></i>(11) 97364-7551
                            </a>
                        </li>    
                    </ul>         
                </div>    
                <div className="footer-column">
                    <form action="https://formsubmit.co/contabil@allicontabilidade.com.br" method="POST">
                        <h2>Deixe que vamos até você!</h2>
                        <div className="group-input-footer">
                            <div className="input-after-footer">
                                <input type="text" name="Nome" required placeholder="Nome" className="input-text-footer"/>
                            </div>
                            <div className="input-after-footer">
                                <input type="text" name="Sobrenome" required placeholder="Sobrenome" className="input-text-footer"/>
                            </div>
                        </div>
                        <div className="group-input-footer">
                            <div className="input-after-footer">
                                <input type="email" name="Email" required placeholder="Email" className="input-text-footer"/>
                            </div>
                            <div className="input-after-footer">
                                <input type="tel" name="Telefone" required placeholder="Telefone" className="input-text-footer"/>
                            </div>
                        </div>
                        <div className="group-input-footer">
                            <div className="textarea-after-footer">
                                <textarea
                                    name="Mensagem"
                                    required
                                    placeholder="Mande uma mensagem"
                                    className="input-textarea-footer"
                                >                                                
                                </textarea>
                            </div>
                        </div>
                        <div className="button-form-footer">
                            <button type="submit">Enviar</button>
                        </div>        

                        <input type="hidden" name="_next" value="https://www.allicontabilidade.com.br/contato/obrigado"/>
                        <input type="hidden" name="_subject" value="Novo Contato - Formulário - ALLI Contabilidade"/>
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_template" value="table" />                      
                    </form>
                </div>                    
            </div>
            <div className="footer-rights">
                    <p><b>ALLI Contabilidade</b> - Escritório de Contabilidade em Guarulhos - SP &copy; 2024</p>
                    <small><b>Copyright 2024 &copy; ALLI Contabilidade - Todos os direitos reservados.</b></small>
            </div>
            
        </footer>
       
    )
}

export default Footer;