import { Routes, Route } from 'react-router-dom';


import Home from './pages/Home';

/* EMPRESA */
import Conheca_a_Alli from './pages/PagesEmpresa/Conheca_a_Alli';
import PrivacyPolicies from './pages/PrivacyPolicies';
/* EMPRESA */

/* SERVIÇOS */
import Servicos from './pages/PagesServices/Servicos';
/* SERVIÇOS */

import Contato from './pages/Contato';
import Obrigado from './pages/Obrigado';

/* SOLUCOES */
import Solucoes from './pages/PagesSolucoes/Solucoes';
/* SOLUCOES */



function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} /> 

                {/*Rotas Para o SUBMENU Empresa */}
                    <Route path="/empresa/conheca-a-alli" element={<Conheca_a_Alli />} />
                    <Route path="/empresa/politicas-de-privacidade" element={<PrivacyPolicies />} />
                {/*Rotas Para o SUBMENU Empresa */}                         
             
                <Route path="/servicos" element={<Servicos />} />

                <Route path="/contato" element={<Contato />} />
                <Route path="/contato/obrigado" element={<Obrigado />} />

                {/*Rotas Para o SUBMENU Areas_De_Atuacao */}
                    <Route path="/solucoes" element={<Solucoes />} />
                {/*Rotas Para o SUBMENU Areas_De_Atuacao */}            

        </Routes>
    );
}

export default AppRoutes;