import '../../Alli.css';
import imgAbertura from '../../img/abertura-de-empresa-img.jpg';
import imgAssCont from '../../img/assessoria-contabil-img.jpg';
import imgAssFisc from '../../img/assessoria-fiscal-img.jpg';
import imgAssTrab from '../../img/assessoria-trabalhista-img.jpg';
import indicFinanc from '../../img/indicadores-financeiros-img.jpg';
import impostRenda from '../../img/imposto-de-renda-img.jpg';

import { Helmet } from 'react-helmet-async';

function Servicos(){

    const itemServices = [
        {
            title: <strong>Abertura de Empresa</strong>,
            description: 
            (
            <>
                Cuidamos de todas as etapas da abertura, desde documentos até a <strong>emissão da
                 primeira nota fiscal</strong>, com transparência e foco em <strong>economia tributária </strong>para estruturar 
                 sua empresa de forma sólida.
            </>
            ),
            titleList: 'Vantagens:',
            advantages: [
                "Acesso a Crédito e Financiamentos",
                "Segurança Jurídica",
                "Benefícios Fiscais e Tributários",
                "Oportunidades de Crescimento",
                "Aumento da Credibilidade no Mercado",
                "Cumprimento das Obrigações Legais",
            ],
            imgSrc: imgAbertura,
            titleForImg: "Abertura de Empresa",
        },
        {
            title: <strong>Assessoria Contábil</strong>,
            description:
            (
                <>
                    Entendemos que cada empresa é única. Por isso, criamos <strong>estratégias contábeis</strong> sob medida, 
                    alinhadas aos seus desafios e objetivos.
                </>
            ),
            titleList: 'O que a ALLI oferece?',
            advantages: [
                "Planejamento Financeiro",
                "Gestão de Obrigações Fiscais",
                "Conformidade com Legislação",
                "Relatórios Gerenciais",
                "Apoio ao Crescimento Sustentável",
            ],
            imgSrc: imgAssCont,
            titleForImg: "Assessoria Contábil",
        },
        {
            title: <strong>Assessoria Fiscal</strong>,
            description:
            (
                <>
                    Oferecemos soluções fiscais personalizadas para sua empresa. 
                    Garantimos <strong>conformidade com as obrigações legais</strong> e ajudamos a 
                    reduzir a <strong>carga tributária</strong> de forma estratégica. Cuidamos de todas as etapas, 
                    desde a apuração de tributos e <strong>planejamento tributário</strong> até o aproveitamento de 
                    incentivos fiscais. Nosso objetivo é otimizar a gestão fiscal da sua empresa, 
                    trazendo economia e eficiência para que você possa focar no que realmente 
                    importa: o crescimento do seu negócio.
                </>
            ),
            imgSrc: imgAssFisc,
            titleForImg: "Assessoria Fiscal",
        },
        {
            title: <strong>Assessoria Trabalhista</strong>,
            description:
            (
                <>
                    Identificamos e analisamos os processos internos da sua empresa, 
                    detectando áreas de risco que possam gerar <strong>processos judiciais</strong> ou 
                    <strong> reclamações trabalhistas</strong>, elaboramos e revisamos <strong>contratos de trabalho</strong>,
                    evitando problemas legais.
                </>
            ),
            titleList: 'A ALLI oferece vantagens:',
            advantages: [
                "Assessoria Trabalhista/RH Personalizada",
                "Ênfase na Conformidade Legal",
                "Destaque em Mitigação de Riscos",
                "Melhoria do Ambiente de Trabalho",
                "Enfoque em Negociações Sindicais",
                "Destaque no Suporte Completo",
            ],
            imgSrc: imgAssTrab, 
            titleForImg: "Assessoria Trabalhista",

        },
        {
            title: <strong>Imposto de Renda</strong>,
            description:
            (
                <>
                    Embora seja possível <strong>declarar o IRPF sozinho</strong>, contar com profissionais experientes 
                    minimiza os riscos de erros, evita multas e garante que você aproveite todas as deduções 
                    possíveis.
                </>
            ),
            titleList: 'Documentos Necessários:',
            advantages: [
                "RG, CPF e título de eleitor",
                "Última declaração do IRPF e recibo/protocolo de entrega",
                "Dados bancários para restituição (conta-corrente ou poupança)",
                "Informes de rendimentos (salários, aposentadoria, aluguéis)",
                "Rendimentos financeiros (bancos, investimentos)",
            ],
            imgSrc: impostRenda, 
            titleForImg: "Imposto de Renda",

        },
        {
            title: <strong>Indicadores Financeiros</strong>,
            description:
            (
                <>
                    Acompanhar esses dados de perto permite que sua empresa tome decisões 
                    mais informadas, identifique possíveis riscos e oportunidades, e otimize 
                    seus recursos de maneira eficiente.
                </>
            ),
            titleList: 'Principais Indicadores:',
            advantages: [
                "Margens de Contribuição, EBITDA, Líquida",
                "Custos Fixos e Custos Variáveis",
                "Margem Bruta",
                "Retorno do Investimento (ROI)",
                "Ponto de Equilíbrio",
                "Rotação de Estoque",
                "Liquidez Atual",
            ],
            imgSrc: indicFinanc, 
            titleForImg: "Indicadores Financeiros",

        }
    ]
    return(
        <article>
            <Helmet>
                <title>Serviços | ALLI Contabilidade - Serviços Contábeis</title>
                <meta name="description" content="Saiba mais sobre os serviços da ALLI Contabilidade, especializada em serviços contábeis para abertura de empresa, assessoria contábil, assessoria fiscal, assessoria trabalhista, imposto de renda e indicadores financeiros." />
                <meta name="keywords" content="contabilidade, MEI, fiscal, comércio, finanças, impostos, abertura de empresa, assessoria, ética, excelência, planejamento tributário, consultoria contábil, Guarulhos" />
                <meta name="author" content="Alli Contabilidade" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Serviços | ALLI Contabilidade - Serviços Contábeis" />
                <meta property="og:description" content="Conheça os serviços especializados da ALLI Contabilidade para MEIs, comércio, prestadores de serviços e profissionais da saúde. Soluções com ética e excelência." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.allicontabilidade.com.br/servicos" />
                
                {/* JSON-LD para schema.org */}
                <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "url": "https://www.allicontabilidade.com.br/servicos",
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
            <section className="title-services">
                <h1>Serviços</h1>
            </section>
            <section className="content-services">
                {itemServices.map((service, index) => (
                    <section
                    key={index}
                    className={`item-page-services`}
                    >
                        <div className="item-img-services">
                            <div className="div-img-services">
                            <img
                                src={service.imgSrc}
                                title={`Imagem: ${service.titleForImg}`}
                                alt={`Imagem da seção: ${service.titleForImg}`}
                            />
                            </div>
                            <div className="btn-img-services">
                            <a
                                href="https://wa.me/5511967979650" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button-whatsapp-services"
                            >
                                <button>
                                    <i className="mdi mdi-whatsapp"></i> Fale conosco!
                                </button>
                            </a>
                            </div>
                        </div>
                        <div className="item-text-services">
                            <div className="div-text-services">
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                            {service.advantages && service.advantages.length > 0 && (
                                <>
                                    <h3>{service.titleList}</h3>
                                    <ul>
                                        {service.advantages.map((advantage, i) => (
                                        <li key={i}>
                                            <i className="mdi mdi-check-circle"></i>
                                            <strong>{advantage}</strong>
                                        </li>
                                        ))}
                                    </ul>
                                </>
                            )}
                            </div>
                        </div>
                    </section>
                ))}
            </section>
            <section className="contact-services">
                
            </section>
        </article>
    )
}

export default Servicos;