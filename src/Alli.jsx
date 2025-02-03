import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './Alli.css';
import Header from "./Header";
import Footer from "./Footer";
import AppRoutes from "./AppRoutes";
import CookieBanner from "./pages/CookieBanner";
import Whatsapp from "./Whatsapp";
import ScrollToTop from "./ScrollToTop";
import { HelmetProvider } from "react-helmet-async";


function Alli(){
    return(
        <HelmetProvider>
            <BrowserRouter>
                <div>
                    <ScrollToTop />
                    <Header />
                    <main>
                        <AppRoutes />
                    </main>
                    <Whatsapp />
                    <Footer />
                    <CookieBanner />
                </div>
            </BrowserRouter>
        </HelmetProvider>
    )
}

export default Alli;