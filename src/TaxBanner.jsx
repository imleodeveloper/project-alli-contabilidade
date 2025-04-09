import { useState } from 'react';
import './Alli.css';

const TaxBanner = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const expandedTax = () =>{
        setIsExpanded(!isExpanded);
    }
    return(
        <>
        <div className="taxDiv">
            <button
                className="tax-float"
                onClick={expandedTax}
            >
                Declaração de IRPF 2025
            </button>            
        </div>
        {isExpanded && (
            <div className="expanded-tax">
                <div className="content-tax">

                <button></button>    
                </div>
                
            </div>
        )}
        </>
    )
}

export default TaxBanner;