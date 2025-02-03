import '../../Alli.css';

import imgHistoria from '../../img/Historia.jpg';
import imgNossaForma from '../../img/nossaFormaDeTrabalhar.jpg';
import imgSobreNos from '../../img/sobreNos.jpg';

import { Helmet } from 'react-helmet-async';

function Conheca_a_Alli(){
    return(
            <article>
                <Helmet>
                <title>Conheça a ALLI Contabilidade - Soluções Contábeis para Seu Negócio</title>
                <meta name="description" content="Saiba mais sobre a ALLI Contabilidade, especializada em soluções contábeis para MEIs, comércio, prestadores de serviços e profissionais da saúde." />
                <meta name="keywords" content="contabilidade, MEI, comércio, finanças, impostos, assessoria, ética, excelência, Guarulhos" />
                <meta name="author" content="Alli Contabilidade" />
                <meta name="robots" content="index, follow" />
                
                {/* JSON-LD para schema.org */}
                <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "url": "https://alli-contabilidade.netlify.app/",
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
                <section className="title-about-us">
                    <h1>Conheça a ALLI</h1>
                </section>
                <section className="content-about-us">
                    <div className="text-about-us">
                        <h2>Sobre nós</h2>
                        <p>
                            O escritório <strong>ALLI Contabilidade</strong> em <strong>Guarulhos</strong>, tem como missão ajudar sua empresa a 
                            crescer com segurança e <strong>precisão financeira</strong>, oferecendo serviços com qualidade e 
                            responsabilidade. Nossos valores de ética, compromisso e excelência garantem soluções 
                            eficazes e resultados que proporcionam a plena satisfação de nossos clientes.
                        </p>
                    </div>
                    <div className="img-about-us">                                
                        <img src={imgSobreNos} alt="Imagem Sobre nós"/>
                    </div>                            
                </section>  

                <section className="content-about-us"> 
                    <div className="img-about-us">
                        <img src={imgNossaForma} alt="Imagem Nossa forma de trabalhar"/>
                    </div>  
                    <div className="text-about-us">
                        <h2>Nossa forma de trabalhar</h2>
                        <p>
                            Com uma equipe altamente qualificada e em constante atualização, 
                            estamos prontos para atender todas as suas necessidades nas áreas de Contabilidade, 
                            <strong> Departamento Pessoal</strong>, <strong>Fiscal</strong>, <strong>Planejamento Tributário</strong>, <strong>Consultoria Contábil</strong>, <strong>Auditoria</strong> e muito mais, 
                            independentemente do grau de complexidade. Priorizamos a ética e seguimos rigorosamente 
                            os princípios contábeis e as leis vigentes.                               
                        </p>      
                    </div>                          
                </section>        

                <section className="content-about-us">                     
                    <div className="text-about-us">
                        <h2>História</h2>
                        <p>
                            O Escritório <strong>ALLI Contabilidade</strong> nasceu da ideia de dois profissionais dedicados 
                            e apaixonados pela Contabilidade, com formação e conhecimento nas áreas Comercial e Administrativa. 
                            Motivados pelas solicitações de nossos clientes e amigos, estamos comprometidos 
                            em oferecer serviços de qualidade. Temos orgulho do que fazemos e dedicamos este 
                            projeto a todos que nos apoiaram ao longo do caminho. 
                            Agradecemos sinceramente a todos os nossos clientes e amigos.                             
                        </p>
                    </div>
                    <div className="img-about-us">
                        <img src={imgHistoria} alt="Imagem História"/>
                    </div>     
                </section>           
            </article>
    )
}

export default Conheca_a_Alli;