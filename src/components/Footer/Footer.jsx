import React from 'react';
import { FooterCol, FooterContainer, FooterRow, WidgetTitle, SocmedList, SocmedItem, LinkList, LinkItem } from './Footer.elements';
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi';
import LogoElmoo from '../../images/logo-elmoo-white.png';

const Footer = () => {
    return (
        <FooterContainer>
            <div className="container">
                <FooterRow>
                    <FooterCol>
                        <img className="logo" src={LogoElmoo} alt="Logo Elmoo" />

                        <div className="text">
                            <WidgetTitle>HEADQUARTER</WidgetTitle>
                            Jl. Pandean Sari No.12, Pandean, Condongcatur, Kec. Depok, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281
                        </div>
                    </FooterCol>
                    <FooterCol>
                        <div className="text">
                            <WidgetTitle>RELATED LINKS</WidgetTitle>
                            <LinkList>
                                <LinkItem><a href="#">Elmoo Academy</a></LinkItem>
                                <LinkItem><a href="#">Guppala</a></LinkItem>
                                <LinkItem><a href="#">NKSTHI</a></LinkItem>
                                <LinkItem><a href="#">Ruang 412</a></LinkItem>
                                <LinkItem><a href="#">RWE Digital Agency</a></LinkItem>
                            </LinkList>
                        </div>
                    </FooterCol>
                    <FooterCol>
                        <div className="text">
                            <WidgetTitle>SOCIAL MEDIA</WidgetTitle>
                            <SocmedList>
                                <SocmedItem href="#"><FiFacebook/></SocmedItem>
                                <SocmedItem href="#"><FiInstagram/></SocmedItem>
                                <SocmedItem href="#"><FiTwitter/></SocmedItem>
                                <SocmedItem href="#"><FiYoutube/></SocmedItem>
                            </SocmedList>
                        </div>
                    </FooterCol>
                </FooterRow>
            </div>
        </FooterContainer>
    )
}

export default Footer
