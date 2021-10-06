import { PartnerContainer, SectionCol, SectionRow, SectionTitle } from './PartnerLogo.elements';
import LogoWMS from '../../images/partner-logo.png';

const PartnerLogo = () => {
    return (
        <PartnerContainer>
            <div className="container">
                <SectionTitle>Our Partner</SectionTitle>
                <SectionRow>
                    <SectionCol><img src={LogoWMS} alt="partner logo"/></SectionCol>
                    <SectionCol><img src={LogoWMS} alt="partner logo"/></SectionCol>
                    <SectionCol><img src={LogoWMS} alt="partner logo"/></SectionCol>
                    <SectionCol><img src={LogoWMS} alt="partner logo"/></SectionCol>
                    <SectionCol><img src={LogoWMS} alt="partner logo"/></SectionCol>
                    <SectionCol><img src={LogoWMS} alt="partner logo"/></SectionCol>
                    <SectionCol><img src={LogoWMS} alt="partner logo"/></SectionCol>
                    <SectionCol><img src={LogoWMS} alt="partner logo"/></SectionCol>
                    <SectionCol><yarimg src={LogoWMS} alt="partner logo"/></SectionCol>
                </SectionRow>
            </div>
        </PartnerContainer>
    )
}

export default PartnerLogo
