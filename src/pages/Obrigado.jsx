import '../Alli.css';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';

function Obrigado(){
    return(
        <article className="article-obrigado">
            <Helmet>
                <title>Obrigado | ALLI Contabilidade</title>
                <meta name="description" content="Obrigado por entrar em contato com a ALLI Contabilidade! Sua solicitação foi recebida e entraremos em contato em breve para ajudá-lo a resolver suas questões contábeis." />
                <meta name="keywords" content="contabilidade, MEI, comércio, finanças, impostos, assessoria, ética, excelência, Guarulhos" />
                <meta name="author" content="Alli Contabilidade" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Obrigado | ALLI Contabilidade - Sua Solicitação Foi Recebida" />
                <meta property="og:description" content="Obrigado por entrar em contato com a ALLI Contabilidade! Sua solicitação foi recebida e entraremos em contato em breve para ajudá-lo a resolver suas questões contábeis." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.allicontabilidade.com.br/contato/obrigado" />
                
                {/* JSON-LD para schema.org */}
                <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "url": "https://www.allicontabilidade.com.br/contato/obrigado",
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
            <section className="section-obrigado">
                <div className="content-obrigado">
                    <h1>Obrigado por entrar em contato!</h1>
                    <h2>Recebemos sua mensagem com sucesso.</h2>
                    <p>Nossa equipe entrará em contato em breve para ajudar você.</p>
                    <p>Enquanto isso, que tal explorar mais sobre nossos serviços?</p>
                    <Link className="link-obrigado" to="/contato">
                        <button>Voltar para o site</button>
                    </Link>
                </div>
                
            </section>
        </article>
    )
}

export default Obrigado;