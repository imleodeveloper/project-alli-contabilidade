
import { Link } from "react-router-dom";
import '../Alli.css';
import '../media.css';

import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay} from 'swiper/modules';
import { EffectCoverflow } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation'; 
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

import ImgHome1 from '../img/ImgHome1.jpg';
import ImgHome2 from '../img/ImgHome2.jpg';
import ImgHome3 from '../img/ImgHome3.jpg';



function Home(){

    


    //OBJETOS DO SLIDER
    const data = [
        { 
            id: '1', 
            image: ImgHome1, 
            title: [
                { 
                    type: 'main', 
                    className: 'main-slide-container-1', 
                    children: [
                        { titleSlide: 'Bem-vindo à ALLI Contabilidade!', className: 'title-slide' },
                        {
                            text: 'Conte com nossa experiência e atendimento personalizado, sinta a diferença no cuidado e eficiência.',
                            className: 'description-slide'
                        },
                        {button: 'Sobre nós', className: 'button-slider', link: '/empresa/conheca-a-alli'}
                    ]
                }
            ]  
        },
        { 
            id: '2', 
            image: ImgHome2, 
            title: [
                { 
                    type: 'main', 
                    className: 'main-slide-container-2', 
                    children: [
                        { titleSlide: 'Aproveite todas as nossas vantagens!', className: 'title-slide' },
                        { text: 'Descubra as soluções que temos para impulsionar o crescimento da sua empresa.', className: 'description-slide' },
                        {button: 'Fale conosco!', className: 'button-slider', link: '/contato'}
                    ]
                }
            ]
        },
        { 
            id: '3', 
            image: ImgHome3, 
            title: [
                { 
                    type: 'main', 
                    className: 'main-slide-container-3', 
                    children: [
                        { titleSlide: 'Fique em dia com a contabilidade!', className: 'title-slide' },
                        { text: 'Conheça nossas soluções', className: 'description-slide' },
                        {button: 'Soluções', className: 'button-slider', link: '/solucoes'}
                    ],
                    
                }
            ]
        }
    ];
    //OBJETOS DO SLIDER                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

    return(           
        
        <article>    
            <Helmet>
                <title>Home | ALLI Contabilidade - Soluções Contábeis para Seu Negócio</title>
                <meta name="description" content="Declaração de imposto de renda, serviços contábeis especializados em Guarulhos para MEIs, comércio, prestadores de serviços e profissionais da saúde. Confiança e excelência para o seu negócio!" />
                <meta name="keywords" content="contabilidade, MEI, comércio, finanças, impostos, assessoria" />
                <meta name="author" content="Alli Contabilidade" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Home | ALLI - Contabilidade em Guarulhos" />
                <meta property="og:description" content="Conheça a ALLI Contabilidade, declaração de imposto de renda, especializada em soluções contábeis para MEIs, comércio, prestadores de serviços e profissionais da saúde. Conte com nossa expertise para a saúde financeira do seu negócio." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://allicontabilidade.com.br" />

                {/* JSON-LD para schema.org */}
                <script type="application/ld+json">
                {`
                {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "url": "https://www.allicontabilidade.com.br",
                    "name": "ALLI Contabilidade",
                    "dateModified": "2025-01-31",
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+55 11 96797-9650",
                        "contactType": "customer service",
                        "areaServed": "BR",
                        "availableLanguage": "Portuguese"
                    }
                }
                `}
                </script>           
            </Helmet>
            <section>
                <div className="sliderHome">
                    <div className="positionSliderHome">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            pagination={{ clickable: true }}
                            navigation={false}
                            modules={[Navigation, Pagination, Scrollbar, EffectCoverflow, Autoplay]}
                            loop={true}
                            autoplay={{ delay: 10000, disableOnInteraction: false }}
                        >
                            {data.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <img
                                        src={item.image}
                                        alt="Slider"
                                        className="slide-item"
                                    />
                                    <div className="slide-text">
                                        {item.title.map((mainItem, mainIndex) => (
                                            <div key={mainIndex} className={mainItem.className}>
                                                {mainItem.children.map((child, childIndex) => (
                                                    <div key={childIndex} className={child.className}>
                                                        {child.titleSlide ? (
                                                            <h2>{child.titleSlide}</h2>
                                                        ) : child.text ?(
                                                            <p>{child.text}</p>
                                                        ) : null}
                                                        {child.button && child.link &&(
                                                            <Link to={child.link}>
                                                                <button className={child.className}>{child.button}</button>
                                                            </Link>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        ))}
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
            <section className="section-home">     
                <div 
                    className={`container-home-1`}
                >
                    <div className="title-section-home">
                        <h2 className="titleFor-section">
                            <span className="quotation-subtitle-home">"</span>Por que escolher nossa consultoria?
                        </h2>
                        <h3 className="subtitle-section">
                            Nossa equipe oferece <strong>estratégias contábeis</strong> eficientes, garantindo a saúde financeira e o crescimento sustentável da sua empresa.
                        </h3>
                    </div>
                    <div className="item-consultoria">
                        <div>
                            <h2>PROFICIÊNCIA</h2>
                            <p>
                                Com sólida experiência e domínio técnico, nossa consultoria se destaca por entregar soluções precisas e adaptadas às 
                                necessidades do seu negócio. Nossa proficiência é o que garante uma <strong>gestão contábil</strong> eficiente e resultados consistentes.
                            </p>
                        </div>
                        <div>
                            <h2>EXCELÊNCIA</h2>
                            <p>
                                Garantimos a precisão e segurança dos dados da sua empresa, com <strong>tecnologia avançada</strong> e uma equipe especializada, 
                                proporcionando confiança e tranquilidade em cada processo.
                            </p>
                        </div>
                        <div>
                            <h2>RELACIONAMENTO</h2>
                            <p>
                                Estamos aqui para entender suas necessidades de forma personalizada, com uma <strong>equipe capacitada</strong> e comprometida 
                                em construir soluções que fortaleçam o relacionamento e promovam o sucesso contínuo da sua empresa.
                            </p>
                        </div>
                    </div>
                </div> 
            </section>
            <section className="section-home2">
                <div 
                className={`container-home-2`}
                >
                    <div className="title-section-home">
                        <h2 className="titleFor-section">
                            <span className="quotation-subtitle-home">"</span>Soluções
                        </h2>
                        <h3 className="subtitle-section">
                            Encontre a <strong>solução contábil</strong> que vai otimizar a gestão e potencializar os resultados do seu negócio.
                        </h3>
                    </div>
                    <div className="item-solutions">
                        <Link to="/solucoes" className="link-solutions-home">
                            <div>
                                <i className="mdi mdi-clipboard-check icons-home"></i>
                                <h2>Contabilidade para MEI</h2>
                                <p>
                                    Oferecemos uma <strong>gestão contábil</strong> simplificada, 
                                    garantindo que sua empresa esteja em dia com os 
                                    <strong> impostos</strong> e com uma visão clara para o crescimento.
                                </p>
                            </div>
                        </Link>
                        <Link to="/solucoes" className="link-solutions-home">
                            <div>
                                <i className="mdi mdi-storefront-plus icons-home"></i>
                                <h2>Comércio em Geral</h2>
                                <p>
                                    Desenvolvemos <strong>estratégias contábeis </strong>e para manter seu negócio 
                                    em conformidade, ao mesmo tempo que maximizamos a eficiência 
                                    financeira e a competitividade no mercado.
                                </p>
                            </div>
                        </Link>
                        <Link to="/solucoes" className="link-solutions-home"> 
                            <div>
                                <i className="mdi mdi-hammer-wrench icons-home"></i>
                                <h2>Prestadores de Serviços</h2>
                                <p>
                                    Fornecemos <strong>soluções contábeis personalizadas</strong>, ajudando você a focar no 
                                    crescimento do seu negócio com a tranquilidade de uma <strong>gestão financeira </strong>
                                    bem estruturada.
                                </p>
                            </div>
                        </Link>
                        <Link to="/solucoes" className="link-solutions-home">
                            <div>
                                <i className="mdi mdi-heart-pulse icons-home"></i>
                                <h2>Profissionais da Saúde</h2>
                                <p>
                                    Apoiamos <strong>profissionais da saúde</strong> com uma <strong>contabilidade especializada</strong>, 
                                    permitindo um <strong>controle financeiro</strong> preciso e tranquilidade para 
                                    expandir sua carreira e prática.
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="section-home3">
                <div 
                    className={`container-home-3`}
                >
                    <div className="title-section-home">
                        <h2 className="titleFor-section">
                        <span className="quotation-subtitle-home">"</span>Serviços de excelência!
                        </h2>
                        <h3 className="subtitle-section">
                            Transforme sua <strong>gestão financeira</strong> com serviços práticos e eficazes.
                        </h3>
                    </div>
                    <div className="item-services">
                        <Link className="link-services-home" to="/servicos">
                            <div>
                                <i className="mdi mdi-calculator"></i>
                                <h3>Assessoria Contábil</h3>
                                <p>Contar com uma assessoria contábil experiente é essencial para planejamento financeiro.</p>
                            </div>
                        </Link>
                        <Link className="link-services-home" to="/servicos">
                            <div>
                                <i className="mdi mdi-finance"></i>
                                <h3>Assessoria Fiscal</h3>
                                <p>Oferecemos uma assessoria fiscal completa e personalizada.</p>
                            </div>
                        </Link>
                        <Link className="link-services-home" to="/servicos">
                            <div>
                                <i className="mdi mdi-account-group"></i>
                                <h3>Assessoria Trabalhista</h3>
                                <p>Identificamos e analisamos os processos internos da sua empresa.</p>
                            </div>
                        </Link>
                    </div>
                    <div className="item-services">
                        <Link className="link-services-home" to="/servicos">
                            <div>
                                <i className="mdi mdi-lock-open"></i>
                                <h3>Abertura de Empresas</h3>
                                <p>
                                    Facilitamos o processo de abertura e legalização da sua empresa.
                                </p>
                            </div>
                        </Link>
                        <Link className="link-services-home" to="/servicos">
                            <div>
                                <i className="mdi mdi-clipboard-text"></i>
                                <h3>Imposto de Renda</h3>
                                <p>Avaliação de necessidades legais, reorganização empresarial e etc.</p>
                            </div>
                        </Link>
                        <Link className="link-services-home" to="/servicos">
                            <div>
                                <i className="mdi mdi-currency-usd"></i>
                                <h3>Indicadores Financeiros</h3>
                                <p>Para isso, contamos com uma diversidade de ferramentas.</p>
                            </div>    
                        </Link>                                    
                    </div>
                </div>
            </section>   
            <section className="section-home4">
                <div>
                    <h2><span className="quotation-subtitle-home">"</span>Entre em contato conosco!</h2>
                    <h3>Fale conosco e envie suas informações pelo formulário para esclarecer suas dúvidas.</h3>
                </div>
                <div className="button-home-contact">
                    <Link className="link-contact-button" to="/contato">
                        <button>Nos mande uma mensagem!</button>
                    </Link>
                </div>
            </section>  
        </article>
        
    )
    
}


export default Home;