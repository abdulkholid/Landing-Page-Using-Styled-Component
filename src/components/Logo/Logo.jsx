import React from 'react';
import LogoElmoo from '../../images/logo-elmoo.png';
import { LogoLink, LogoImage } from './Logo.elements';

const Logo = () => {
	return <LogoLink to="/"><LogoImage src={LogoElmoo} alt="Logo Elmoo" /></LogoLink>;
};

export default Logo;
