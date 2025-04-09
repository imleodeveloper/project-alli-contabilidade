import '../Alli.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Helmet } from 'react-helmet-async';

function PrivacyPolicies(){
    return (
    <div className="privacyPolicies container-fluid">
        <Helmet>
            <title>Políticas de Privacidade | ALLI Contabilidade</title>
            <meta name="description" content="Leia nossas Políticas de Privacidade para entender como protegemos seus dados e garantimos a segurança das informações fornecidas em nossos serviços." />
            <meta name="keywords" content="política de privacidade, proteção de dados, segurança, privacidade, dados pessoais, transparência, termos de uso" />
            <meta name="author" content="Alli Contabilidade" />
            <meta name="robots" content="index, follow" />
            <meta property="og:title" content="Políticas de Privacidade | ALLI Contabilidade" />
            <meta property="og:description" content="Leia nossas Políticas de Privacidade para entender como protegemos seus dados e garantimos a segurança das informações fornecidas em nossos serviços." />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.allicontabilidade.com.br/empresa/politicas-de-privacidade" />
            
            {/* JSON-LD para schema.org */}
            <script type="application/ld+json">
            {`
                {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "url": "https://www.allicontabilidade.com.br/empresa/politicas-de-privacidade",
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
        <h1 className='h1Policies'>Política de Privacidade</h1>
        <p className='pPolicies'>Última atualização: 10 de novembro de 2024</p>
        <p className='pPolicies'>Esta Política de Privacidade descreve nossas políticas
            e procedimentos sobre a coleta, uso e divulgação de suas 
            informações quando você utiliza o Serviço e informa sobre 
            seus direitos de privacidade e como a lei o protege.</p>
        <p className='pPolicies'>Usamos seus dados pessoais para fornecer e melhorar 
            o Serviço. Ao utilizar o Serviço, você concorda com a coleta 
            e uso das informações de acordo com esta Política de Privacidade. 
        </p>

        <h2 className='h2Policies'>Interpretação e Definições</h2>
        <h3 className='h3Policies'>Interpretação</h3>
        <p className='pPolicies'>As palavras cujas letras iniciais estão maiúsculas 
            têm significados definidos sob as seguintes condições. 
            As definições a seguir terão o mesmo significado, 
            independentemente de aparecerem no singular ou no plural.</p>

        <h3 className='h3Policies'>Definições</h3>
        <p className='pPolicies'>Para os fins desta Política de Privacidade:</p>
        <ul className='ulPolicies'>
            <li><strong>Conta</strong> significa uma conta única criada para você acessar nosso Serviço ou partes do Serviço.</li>
            <li><strong>Afiliado</strong> significa uma entidade que controla, é controlada ou está sob controle comum com uma parte, onde "controle" significa a posse de 50% ou mais das ações, participação acionária ou outros valores mobiliários com direito a voto para eleição de diretores ou outra autoridade administrativa.</li>
            <li><strong>Empresa</strong> (referida como "a Empresa", "Nós", "Nos" ou "Nosso" nesta Política) refere-se à ALLI Contabilidade.</li>
            <li><strong>Cookies</strong> são pequenos arquivos que são colocados em seu computador, dispositivo móvel ou qualquer outro dispositivo por um site, contendo detalhes de seu histórico de navegação nesse site, entre outros usos.</li>
            <li><strong>País</strong> refere-se ao: Brasil</li>
            <li><strong>Dispositivo</strong> significa qualquer dispositivo que possa acessar o Serviço, como um computador, celular ou tablet digital.</li>
            <li><strong>Dados Pessoais</strong> são quaisquer informações que se referem a uma pessoa identificada ou identificável.</li>
            <li><strong>Serviço</strong> refere-se ao Website.</li>
            <li><strong>Provedor de Serviço</strong> significa qualquer pessoa natural ou jurídica que processe os dados em nome da Empresa. Refere-se a empresas ou indivíduos terceirizados contratados pela Empresa para facilitar o Serviço, fornecer o Serviço em nome da Empresa, realizar serviços relacionados ao Serviço ou auxiliar a Empresa na análise de como o Serviço é utilizado.</li>
            <li><strong>Dados de Uso</strong> refere-se a dados coletados automaticamente, seja gerados pelo uso do Serviço ou pela infraestrutura do próprio Serviço (por exemplo, a duração de uma visita a uma página).</li>
            <li><strong>Website</strong> refere-se à ALLI Contabilidade, acessível em <a href="https://www.allicontabilidade.com.br" rel="external nofollow noopener" target="_blank">allicontabilidade.com.br</a></li>
            <li><strong>Você</strong> significa a pessoa acessando ou utilizando o Serviço, ou a empresa ou outra entidade legal pela qual tal indivíduo esteja acessando ou utilizando o Serviço, conforme o caso.</li>
        </ul>

            <h2 className='h2Policies'>Coleta e Uso dos Seus Dados Pessoais</h2>
            <h3 className='h3Policies'>Tipos de Dados Coletados</h3>
            <h4 className='h4Policies'>Dados Pessoais</h4>
            <p className='pPolicies'>Enquanto usa nosso Serviço, podemos pedir 
                que você nos forneça determinadas informações 
                pessoalmente identificáveis, que podem ser usadas 
                para entrar em contato ou identificá-lo. 
                As informações pessoalmente identificáveis 
                podem incluir, mas não se limitam a:</p>
            <ul className='ulPolicies'>
                <li>Endereço de e-mail</li>
                <li>Nome e sobrenome</li>
                <li>Telefone</li>
                <li>Endereço, Estado, Província, CEP, Cidade</li>
                <li>Dados de Uso</li>
            </ul>

            <h4 className='h4Policies'>Dados de Uso</h4>
            <p className='pPolicies'>Os Dados de Uso são coletados automaticamente ao usar o Serviço.</p>
            <p className='pPolicies'>Os Dados de Uso podem incluir informações como o endereço de 
                IP do seu dispositivo (por exemplo, endereço IP), tipo de navegador, 
                versão do navegador, as páginas do nosso Serviço que você visita, a 
                hora e a data da sua visita, o tempo gasto nessas páginas, identificadores 
                exclusivos de dispositivos e outros dados de diagnóstico.
            </p>
            <p className='pPolicies'>Quando você acessa o Serviço por meio de um dispositivo 
                móvel, podemos coletar algumas informações automaticamente, 
                incluindo, mas não se limitando a, tipo de dispositivo móvel 
                que você usa, ID único do dispositivo móvel, endereço IP 
                do seu dispositivo móvel, sistema operacional do dispositivo 
                móvel, tipo de navegador da internet móvel que você usa, 
                identificadores exclusivos de dispositivo e outros dados de diagnóstico.
            </p>
            <p className='pPolicies'>Também podemos coletar informações que seu navegador 
                envia sempre que você visita nosso Serviço ou quando acessa 
                o Serviço por meio de um dispositivo móvel.
            </p>

            <h4 className='h4Policies'>Tecnologias de Rastreamento e Cookies</h4>
            <p className='pPolicies'>Usamos Cookies e tecnologias de rastreamento 
                semelhantes para monitorar a atividade em nosso 
                Serviço e armazenar certas informações. 
                As tecnologias de rastreamento utilizadas são beacons, 
                tags e scripts para coletar e rastrear informações e 
                melhorar e analisar nosso Serviço. As tecnologias 
                que usamos podem incluir:
            </p >
            <ul className='ulPolicies'>
                <li><strong>Cookies ou Cookies de Navegador.</strong> Um cookie é um pequeno arquivo colocado em seu dispositivo. Você pode instruir seu navegador a recusar todos os cookies ou a indicar quando um cookie está sendo enviado. No entanto, se você não aceitar cookies, pode não ser possível usar algumas partes do nosso Serviço. A menos que você tenha ajustado a configuração do seu navegador para recusar cookies, nosso Serviço pode usar cookies.</li>
                <li><strong>Web Beacons.</strong> Certas seções do nosso Serviço e nossos e-mails podem conter pequenos arquivos eletrônicos conhecidos como web beacons (também chamados de gifs claros, tags de pixel e gifs de pixel único) que permitem à Empresa, por exemplo, contar os usuários que visitaram essas páginas ou abriram um e-mail, e para outras estatísticas relacionadas ao site (por exemplo, registrando a popularidade de uma determinada seção e verificando a integridade do sistema e do servidor).</li>
            </ul>

            <p className='pPolicies'>Cookies podem ser Cookies "Persistentes" ou "De Sessão". 
                Cookies Persistentes permanecem em seu computador pessoal ou dispositivo 
                móvel quando você fica offline, enquanto Cookies de Sessão são excluídos 
                assim que você fecha seu navegador. Saiba mais sobre cookies no 
                <a href="https://www.privacypolicies.com/blog/privacy-policy-template/#Use_Of_Cookies_Log_Files_And_Tracking" 
                target="_blank"> artigo do site Privacy Policies</a>.
            </p>

            <h3 className='h3Policies'>Uso dos Seus Dados Pessoais</h3>
            <p className='pPolicies'>A Empresa pode usar os Dados Pessoais para os seguintes fins:</p>
            <ul className='ulPolicies'>
                <li><strong>Para fornecer e manter nosso Serviço</strong>, incluindo monitorar o uso do nosso Serviço.</li>
                <li><strong>Para gerenciar sua Conta:</strong> para gerenciar seu registro como usuário do Serviço. Os Dados Pessoais fornecidos podem dar acesso a diferentes funcionalidades do Serviço que estão disponíveis para você como usuário registrado.</li>
                <li><strong>Para a execução de um contrato:</strong> o desenvolvimento, cumprimento e execução do contrato de compra dos produtos, itens ou serviços que você comprou ou de qualquer outro contrato conosco por meio do Serviço.</li>
                <li><strong>Para entrar em contato com você:</strong> Para entrar em contato com você por e-mail, telefone, SMS ou outras formas equivalentes de comunicação eletrônica, como notificações push de aplicativos móveis, sobre atualizações ou comunicações informativas relacionadas às funcionalidades, produtos ou serviços contratados, incluindo atualizações de segurança, quando necessário ou razoável para sua implementação.</li>
                <li><strong>Para fornecer notícias, ofertas especiais e informações gerais</strong> sobre outros bens, serviços e eventos que oferecemos, que são semelhantes aos que você já comprou ou perguntou, a menos que você tenha optado por não receber tais informações.</li>
                <li><strong>Para gerenciar suas solicitações:</strong> Para atender e gerenciar suas solicitações.</li>
                <li><strong>Para transferências comerciais:</strong> Podemos usar suas informações para avaliar ou realizar uma fusão, desinvestimento, reestruturação, reorganização, dissolução ou outra venda ou transferência de parte ou de todos os nossos ativos, seja como uma preocupação contínua ou como parte de um processo de falência, liquidação ou procedimento semelhante, no qual Dados Pessoais mantidos pela Empresa sobre os usuários do Serviço são transferidos entre os ativos.</li>
                <li><strong>Para outros fins</strong>: Podemos usar suas informações para outros fins, como análise de dados, identificação de tendências de uso, determinação da eficácia de nossas campanhas promocionais e para avaliar e melhorar nosso Serviço, produtos, serviços, marketing e sua experiência.</li>
            </ul>

            <p className='pPolicies'>Podemos compartilhar suas informações pessoais nas seguintes situações:</p>
            <ul className='ulPolicies'>
                <li>Com provedores de serviço para monitorar e analisar o uso do nosso Serviço.</li>
                <li>Para cumprir uma obrigação legal.</li>
                <li>Para proteger e defender os direitos ou propriedade da Empresa.</li>
                <li>Para evitar ou investigar possíveis atividades ilícitas em conexão com o Serviço.</li>
                <li>Para proteger a segurança pessoal dos usuários do Serviço ou do público.</li>
                <li>Para proteção legal.</li>
            </ul>

            <h3 className='h3Policies'>Segurança dos Seus Dados Pessoais</h3>
            <p className='pPolicies'>A segurança dos seus Dados Pessoais é importante para nós. 
                No entanto, lembre-se de que nenhum método de transmissão 
                pela Internet ou método de armazenamento eletrônico é 100% 
                seguro. Embora nos esforcemos para usar meios comercialmente 
                aceitáveis para proteger seus Dados Pessoais, não podemos garantir 
                sua segurança absoluta.
            </p>

            <h2 className='h2Policies'>Links para Outros Sites</h2>
            <p className='pPolicies'>Nosso Serviço pode conter links para outros sites que não são 
                operados por nós. Se você clicar em um link de terceiros, será 
                direcionado para o site desse terceiro. Recomendamos que você 
                revise a Política de Privacidade de cada site que você visita.
            </p>
            <p className='pPolicies'>A Empresa não tem controle sobre e não assume responsabilidade 
                por conteúdo, políticas de privacidade ou práticas de sites ou 
                serviços de terceiros.
            </p>

            <h2 className='h2Policies'>Alterações nesta Política de Privacidade</h2>
            <p className='pPolicies'>Poderemos atualizar nossa Política de Privacidade periodicamente. 
                Notificaremos você sobre qualquer alteração, publicando a nova 
                Política de Privacidade nesta página. Você é aconselhado a revisar periodicamente
                 esta Política de Privacidade para verificar quaisquer alterações. 
                 As alterações nesta Política de Privacidade entram em vigor quando 
                 são publicadas nesta página.
            </p>

            <h2 className='h2Policies'>Contato</h2>
            <p className='pPolicies'>Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco:</p>
            <ul className='ulPolicies2'>
                <li>Por e-mail: <a href="mailto:contabil@allicontabilidade.com.br">contabil@allicontabilidade.com.br</a></li>
                <li>Visite nosso site: <a href="https://www.allicontabilidade.com.br">www.allicontabilidade.com.br</a></li>
            </ul>
    </div>
    )
}


export default PrivacyPolicies;