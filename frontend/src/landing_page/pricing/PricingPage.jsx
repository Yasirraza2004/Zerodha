import PricingHero from "./PricingHero";
import ChargesValueServices from "./ChargesValueServices";
import TaxesCharges from "./TaxesCharges";
import DematAMC from "./DematAMC";
import ChargesAccountOpening from "./ChargesAccountOpening";
import BrokerageCalculator from "./BrokerageCalculator";


function PricingPage() {
    return ( 
        <>
        
        <PricingHero />
        <BrokerageCalculator/>
        <ChargesAccountOpening />
        <DematAMC />
        <ChargesValueServices />
        <TaxesCharges/>
       
        </>
     );
}

export default PricingPage;