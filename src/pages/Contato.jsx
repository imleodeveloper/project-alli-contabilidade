import '../Alli.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Helmet } from 'react-helmet-async';



function Contato(){

    return(
        
        <div>
            <Helmet>
                <title>Contato | ALLI Contabilidade - Fale Conosco</title>
                <meta name="description" content="Entre em contato com a ALLI Contabilidade, estamos aqui para resolver seus desafios e oferecer suporte completo em todos os processos da sua empresa." />
                <meta name="keywords" content="contabilidade, MEI, comércio, finanças, impostos, assessoria, ética, excelência, Guarulhos" />
                <meta name="author" content="Alli Contabilidade" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Contato | ALLI Contabilidade - Fale Conosco" />
                <meta property="og:description" content="Entre em contato com a ALLI Contabilidade para tirar suas dúvidas e agendar uma consultoria. Estamos prontos para ajudar a otimizar as finanças do seu negócio." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.allicontabilidade.com.br/contato" />
                {/* JSON-LD para schema.org */}
                <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "url": "https://www.allicontabilidade.com.br/contato",
                        "name": "ALLI Contabilidade",
                        "description": "ALLI Contabilidade oferece soluções contábeis especializadas para MEIs, comércio, prestadores de serviços e profissionais da saúde. Com ética e excelência.",
                        "dateModified": "2025-01-31",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+55 11 96797-9650",
                            "contactType": "customer service",
                            "areaServed": "BR",
                            "availableLanguage": "Portuguese"
                        }
                `}
                </script>           
            </Helmet>
            <article>                
                    <section className="title-contact">
                        <h1>Contate-nos</h1>
                    </section>
                    <section className="section-contact">
                        <div className="title-info-contact">
                            <h2>Vamos conversar?</h2>
                            <h3>Deixe que vamos até você!</h3>
                        </div>
                        <div className="info-contact">
                            <div className="item-info">
                                <i className="mdi mdi-email"></i>
                                <h3>Nosso e-mail</h3>
                                <p>contabil@allicontabilidade.com.br</p>
                            </div>
                            <div className="item-info">
                                <i className="mdi mdi-phone-in-talk"></i>
                                <h3>Telefone</h3>
                                <p>(11) 96797-9650</p>
                            </div>
                            <div className="item-info">
                                <i className="mdi mdi-map-marker"></i>
                                <h3>Escritório</h3>
                                <p>Não disponível</p>
                            </div>
                        </div>
                        <div className="info-contact-2">
                            <div className="item-text">
                                <p>Estamos aqui para ajudar sempre que você precisar!</p> 
                                <p>Caso tenha dúvidas ou precise de informações, sinta-se à vontade para nos procurar.</p>
                            </div>
                            <div className="item-form">
                                <form action="https://formsubmit.co/contabil@allicontabilidade.com.br" method="POST">
                                    <div className="title-form">
                                        <h2>Nos mande uma mensagem!</h2>
                                    </div>
                                    <div className="group-input">
                                        <div className="input-after">
                                            <input type="text" name="Nome" required placeholder="Digite seu nome" className="input-text-forms"/>
                                        </div>
                                        <div className="input-after">
                                            <input type="text" name="Sobrenome" required placeholder="Digite seu sobrenome" className="input-text-forms"/>
                                        </div>
                                    </div>
                                    <div className="group-input">
                                        <div className="input-after">
                                            <input type="email" name="Email" required placeholder="Informe seu melhor email" className="input-text-forms"/>
                                        </div>
                                        <div className="input-after">
                                            <input type="tel" name="Telefone" required placeholder="Informe seu melhor telefone" className="input-text-forms"/>
                                        </div>
                                    </div>
                                    <div className="group-input">
                                        <div className="textarea-after">
                                            <textarea
                                                name="Mensagem"
                                                required
                                                placeholder="Mande uma mensagem"
                                                className="input-textarea-forms"
                                            >                                                
                                            </textarea>
                                        </div>
                                    </div>
                                    <div className="button-form">
                                        <button type="submit">Enviar</button>
                                    </div>

                                    <input type="hidden" name="_next" value="https://www.allicontabilidade.com.br/contato/obrigado"/>
                                    <input type="hidden" name="_subject" value="Novo Contato - Formulário - ALLI Contabilidade"/>
                                    <input type="hidden" name="_captcha" value="false" />
                                    <input type="hidden" name="_template" value="table" />                                    
                                </form>
                            </div>
                        </div>
                    </section>
            </article>
        </div>
    )
}

export default Contato