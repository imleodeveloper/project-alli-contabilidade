import '../../Alli.css';
import ContForMei from '../../img/contabilidade-para-mei.jpg';
import ComercioGeral from '../../img/comercio-em-geral.jpg';
import Prestadores from '../../img/prestadores-de-servicos.jpg';
import ProfSaude from '../../img/profissionais-saude.jpg';

import { Helmet } from 'react-helmet-async';

function Solucoes(){
    return(
        <article className="article-solutions">
            <Helmet>
                <title>Soluções | ALLI Contabilidade - Soluções Contábeis</title>
                <meta name="description" content="Saiba mais sobre as soluções da ALLI Contabilidade, especializada em soluções contábeis para MEIs, comércio, prestadores de serviços e profissionais da saúde." />
                <meta name="keywords" content="contabilidade, MEI, comércio, saúde,finanças, impostos, assessoria, ética, excelência, Guarulhos" />
                <meta name="author" content="Alli Contabilidade" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Soluções | ALLI Contabilidade - Soluções Contábeis" />
                <meta property="og:description" content="Conheça as soluções da ALLI Contabilidade para MEIs, comércio, prestadores de serviços e profissionais da saúde. Soluções com ética e excelência." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://alli-contabilidade.netlify.app/solucoes" />
                
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
            <section className="title-solutions">
                <h1>Soluções</h1>
            </section>
            <section className="container-solutions">
                <div className="content-solutions">
                    <div className="content-img-solutions">                                   
                        <img src={ContForMei} title="Contabilidade para MEI" alt="Imagem: Contabilidade para MEI"/>
                    </div>                    
                    <div className="content-item-solutions">
                        <h2><i className="mdi mdi-clipboard-check"></i>Contabilidade para MEI</h2>
                        <ul className="list-solutions">
                            <h3>Para se tornar MEI, é necessário ter:</h3>
                            <li>Ter mais de 18 anos.</li>
                            <li>Estar regular com as obrigações fiscais e tributárias.</li>
                            <li>Sua profissão deve constar na lista de atividades permitidas para o MEI.</li>
                            <li>Faturar até R$ 81 mil por ano.</li>
                        </ul>
                        <ul className="list-solutions">
                            <h3>Requisitos para não ser MEI:</h3>
                            <li>Profissionais cujas atividades são regulamentadas por conselhos ou órgãos de classe.</li>
                            <li>Pessoas com menos de 18 anos ou maiores de 16 anos não emancipadas.</li>
                            <li>Sócios em outras empresas.</li>
                            <li>Aposentado por invalidez.</li>
                        </ul>
                    </div>
                </div>

                <div className="content-solutions">
                    <div className="content-img-solutions">                                   
                        <img src={ComercioGeral} title="Comércio em Geral" alt="Imagem: Comércio em Geral"/>
                    </div>
                    <div className="content-item-solutions">
                        <h2><i className="mdi mdi-storefront-plus"></i>Comércio em geral</h2>
                        <ul className="list-solutions">
                            <h3>Para iniciar, você precisa:</h3>
                            <li>Estar regularizado.</li>
                            <li>Possuir um CNPJ ativo.</li>
                            <li>Garantir que o local de operação atende às normas de segurança e acessibilidade.</li>
                        </ul>
                        <ul className="list-solutions">
                            <h3>Podem limitar a atuação:</h3>
                            <li>Ausência de registro formal como pessoa jurídica.</li>
                            <li>Falta de regularização tributária junto à Receita Federal.</li>
                            <li>Atividades comerciais incompatíveis com a legislação local.</li>
                            <li>Ausência de capital ou planejamento para compra de estoque.</li>
                            <li>Falta de autorização.</li>
                        </ul>
                    </div>
                </div>

                <div className="content-solutions">
                    <div className="content-img-solutions">                                   
                        <img src={Prestadores} title="Imagem Prestadores de Serviços" alt="Imagem: Prestadores de Serviços"/>
                    </div>                    
                    <div className="content-item-solutions">
                        <h2><i className="mdi mdi-hammer-wrench"></i>Prestadores de serviços</h2>
                        <ul className="list-solutions">
                            <h3>Para atuar, você precisa:</h3>
                            <li>Identificar se a sua atividade requer certificações ou habilitações específicas.</li>
                            <li>Regularizar os pagamentos de impostos, como o ISS (Imposto Sobre Serviços).</li>
                            <li>Estar em conformidade com as regulamentações da sua área de atuação.</li>
                        </ul>
                        <ul className="list-solutions">
                            <h3>Podem limitar a atuação:</h3>
                            <li>Ausência de qualificação profissional exigida para a atividade.</li>
                            <li>Falta de registro formal ou irregularidades fiscais.</li>
                            <li>Não atender aos requisitos de certificação ou registro em órgãos competentes (ex.: CREA, OAB, CRM).</li>
                            <li>Falta de ferramentas ou infraestrutura para execução do serviço.</li>
                        </ul>
                    </div>
                </div>

                <div className="content-solutions">   
                    <div className="content-img-solutions">                                   
                        <img src={ProfSaude} title="Profissionais da Saúde" alt="Imagem: Profissionais da Saúde"/>
                    </div>
                    <div className="content-item-solutions">
                        <h2><i className="mdi mdi-heart-pulse"></i>Profissionais da saúde</h2>  
                        <ul className="list-solutions">
                            <h3>Para iniciar, você precisa:</h3>
                            <li>Cumprir as exigências legais para abrir um consultório, clínica ou prestar serviços em instituições.</li>
                            <li>Manter as certificações e atualizações exigidas por lei para exercer a profissão.</li>
                            <li>Registro no conselho profissional correspondente (CRM, CRO, COREN, etc.).</li>
                            <li>Observar normas de segurança e saúde no ambiente de trabalho, incluindo vigilância sanitária.</li>
                        </ul>
                        <ul className="list-solutions">
                            <h3>Impedimentos que podem afetar a atuação:</h3>
                            <li>Ausência de registro no conselho profissional ou irregularidade nas certificações.</li>
                            <li>Falta de alvarás ou licenças para o funcionamento de clínicas ou consultórios.</li>
                            <li>Desconformidade com normas da ANVISA ou outros órgãos reguladores.</li>
                            <li>Incompatibilidade de atuação em múltiplos locais sem declaração de vínculo.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default Solucoes;